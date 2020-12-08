import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import router from '@/router/index'
import { LoadingBar, Message, Notice, Modal } from 'iview'

Vue.use(Router)

new Vue({ router })

LoadingBar.config({
    color: '#44f9e5',
    failedColor: '#dc4a51',
    height: 2
})

Message.config({
    top: 80,
    duration: 3
})

const arg = axios.create({
    timeout: 600000
})

arg.defaults.withCredentials = true
arg.defaults.baseURL = process.env.API_PATH

//网络监测
if (!navigator.onLine) {
    Notice.destroy()
    Notice.error({
        title: '提示',
        desc: '无网络连接'
    })
}
const EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler)
        } else {
            element["on" + type] = handler
        }
    }
}
EventUtil.addHandler(window, "online", () => {
    Notice.destroy()
    Notice.success({
        title: '提示',
        desc: '已连接到网络'
    })
})
EventUtil.addHandler(window, "offline", () => {
    Notice.destroy()
    Notice.error({
        title: '提示',
        desc: '网络连接已断开'
    })
})

//防止重复提交ajax
let pending = []
let CancelToken = axios.CancelToken
let removePending = (config, f) => {
    let flagUrl = config.url + '&' + config.method
    pending.indexOf(flagUrl) !== -1 ?
        f ?
            f() :
            pending.splice(pending.indexOf(flagUrl), 1)
        :
        f ?
            pending.push(flagUrl) :
            pending = []
}

//标识码
function guid() {
    function crack() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (crack() + crack() + crack() + crack())
}

//添加请求拦截器 loading

arg.interceptors.request.use(config => {
    // config.headers.token = sessionStorage.getItem('token')
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    // config.responseType = 'arraybuffer'
    
    if (config.method === 'post') {
        config.cancelToken = new CancelToken((c) => {
            removePending(config, c)
        })
    }
    if (config.url.indexOf("?") >= 0) {
        config.url = config.url + "&timestamp=" + guid()
    } else {
        config.url = config.url + "?timestamp=" + guid()
    }
    LoadingBar.start()
    return config
}, error => {
    LoadingBar.error()
    Message.error('请求失败')
    return Promise.reject(error)
})
arg.interceptors.response.use(config => {
    LoadingBar.finish()
    removePending(config.config)
    return config
}, error => {
    LoadingBar.error()
    if (!navigator.onLine) {
        Notice.destroy()
        Notice.error({
            title: '提示',
            desc: '无网络连接'
        })
        return
    }
    // if (error.response === undefined) {
    //     Message.destroy()
    //     Message.error('网络错误')
    // }
    error.message = {
        status: error.response.status,
    }
    switch (error.response.status) {
        case 403:
            error.message.msg = '服务器拒绝请求 '
            break
        case 404:
            error.message.msg = '请求地址不存在'
            break
        case 500:
            error.message.msg = '内部服务器错误 '
            break
        case 502:
            error.message.msg = '错误的网关 '
            break
        case 503:
            error.message.msg = '服务当前不可用 '
            break
        case 504:
            error.message.msg = '服务器超时 '
            break
    }
    Message.destroy()
    Message.error(error.message.msg)
    return Promise.reject(error.message)
})

Vue.prototype.$http = arg

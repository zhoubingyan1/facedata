//import {LoadingBar,Message,Notice,Modal} from 'iview'
import {
    LoadingBar,
    Message,
    Notice,
    Modal
} from 'view-design'
Message.config({
    top: 80,
    duration: 3
})
//获取cookie、
export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

//设置cookie
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

//复制内容到剪切板
//id: 要复制的内容的标签id，例如'#copy-content'
export function copyContent(id) {
    let range;
    if (document.selection) {
        //IE
        range = document.body.createTextRange();
        range.moveToElementText(document.getElementById('selectable'));
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        let content = document.querySelector(id);
        range.selectNode(content);
        let selection = window.getSelection();
        if (selection.rangeCount > 0) {
            selection.removeAllRanges();
        }
        selection.addRange(range);
    }
    document.execCommand('copy');
};

/** 转换时间戳为指定格式
 * @param {Number} timestamp 时间戳：10位就*1000, 13位或标准时间字符串保留，不是就默认转当前时间
 * @param {String} type 格式类型：支持8种格式。默认格式 年月日时分秒
 * @param {String} joinStr 连字符："-", "/"等等。 默认 "-" 连接年月日
 */
export function getFormatDate(timestamp, type, joinStr) {
    function addZero(n) {
        return Number(n) < 10 ? "0" + n : n;
    }
    if ((timestamp).toString().length == 10) {
        date = new Date(timestamp * 1000);
    } else if ((timestamp).toString().length >= 13) {
        date = new Date(timestamp);
    } else {
        date = new Date();
    }
    if (!type) {
        type = "ymdhms";
    }
    if (!joinStr) {
        joinStr = "-";
    }

    var date;
    var time;

    var Y = date.getFullYear();
    var M = addZero(date.getMonth() + 1);
    var D = addZero(date.getDate());
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    time = Y + joinStr + M + joinStr + D + ' ' + h + ':' + m + ':' + s;

    //年月日
    if (type == "ymd") {
        time = Y + joinStr + M + joinStr + D;
    }
    //年月
    if (type == "ym") {
        time = Y + joinStr + M;
    }
    //月日
    if (type == "md") {
        time = M + joinStr + D;
    }
    //时分秒
    if (type == "hms") {
        time = h + ':' + m + ':' + s;
    }
    //时分
    if (type == "hm") {
        time = h + ':' + m;
    }
    //年月日 时分秒
    if (type == "ymdhms") {
        time = Y + joinStr + M + joinStr + D + ' ' + h + ':' + m + ':' + s;
    }
    //年月日 时分
    if (type == "ymdhm") {
        time = Y + joinStr + M + joinStr + D + ' ' + h + ':' + m;
    }
    //月日 时分
    if (type == "mdhm") {
        time = M + joinStr + D + ' ' + h + ':' + m;
    }

    return time;
}

/** axios返回状态码处理


 */
export function responseStatus(status) {
    if (!navigator.onLine) {
        Notice.destroy()
        Notice.error({
            title: '提示',
            desc: '无网络连接'
        })
        return
    }
    message = {
        status: status,
    }
    switch (status) {
        case 400:
            message.msg = '服务器不理解请求的语法'
            break;
        case 401:
            message.msg = '用户认证信息错误，请重新登陆 '
            break
        case 403:
            message.msg = '服务器拒绝请求 '
            break
        case 404:
            message.msg = '请求地址不存在'
            break
        case 405:
            message.msg = '禁用请求中指定的方法'
            break
        case 406:
            message.msg = '无法使用请求的内容特性响应请求的网页'
            break
        case 407:
            message.msg = '此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理'
            break
        case 408:
            message.msg = '服务器等候请求时发生超时'
            break
        case 409:
            message.msg = '服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息'
            break
        case 410:
            message.msg = '如果请求的资源已永久删除，服务器就会返回此响应'
            break
        case 411:
            message.msg = '服务器不接受不含有效内容长度标头字段的请求'
            break
        case 412:
            message.msg = '服务器未满足请求者在请求中设置的其中一个前提条件'
            break
        case 413:
            message.msg = '服务器无法处理请求，因为请求实体过大，超出服务器的处理能力'
            break
        case 414:
            message.msg = '请求的 URI（通常为网址）过长，服务器无法处理'
            break
        case 415:
            message.msg = '请求的格式不受请求页面的支持'
            break
        case 416:
            message.msg = '如果页面无法提供请求的范围，则服务器会返回此状态代码'
            break
        case 417:
            message.msg = '服务器未满足”期望”请求标头字段的要求'
            break
        case 422:
            message.msg = '参数错误'
            break
        case 429:
            message.msg = 'Too Many Requests'
            break
        case 500:
            message.msg = '内部服务器错误 '
            break
        case 501:
            message.msg = '服务器不具备完成请求的功能 '
            break
        case 502:
            message.msg = '错误的网关 '
            break
        case 503:
            message.msg = '服务当前不可用 '
            break
        case 504:
            message.msg = '服务器超时 '
            break
        case 505:
            message.msg = '服务器不支持请求中所用的 HTTP 协议版本'
            break
        default:
            break;
    }
    Message.destroy()
    Message.error(message.msg)

    return Promise.reject(message)

}

export function getenumlistContent(class_alias, callback) {
    this.$http
        .post(this.PATH.ENUMCONTENTDOWN, {
            class_alias: class_alias
        })
        .then(res => {
            if (res.data.code == 200) {
                callback(res)
            } else {
                this.$Modal.error({
                    title: "提示",
                    content: res.data.message
                });
            }
        });
}
/**
 * 
 * @param {*} interval  秒
 */
export function formatTime(value) {
    let result = parseInt(value)
    let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
    let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
    return `${m}:${s}`
}

import Vue from 'vue'
import Router from 'vue-router'
import path from './routePath'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: path.login
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: path.Forgetpassword
    },
    {
      path: '/systemicselection',
      name: 'systemicselection',
      component: path.Systemicselection
    },
    {
      path: '/home',
      name: 'home',
      component: path.home,
      children:[
        {
          //首页
          path: '/index',
          name: 'index',
          component: path.index
        },
        {
          //检测管理页
          path:'/manage',
          name: 'manage',
          component: path.Manage
        }
      ]
    }
  ]
})

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
          //首页&场景1
          path: '/index',
          name: 'index',
          component: path.index,
          meta: {
            keepAlive: true
          }
        },
        {
          //Publicindex
          path: '/publicindex',
          name: 'publicindex',
          component: path.Publicindex,
          meta: {
            keepAlive: true
          }
        },
        {
          //场景1
          path: '/sceneone',
          name: 'sceneone',
          component: path.Sceneone,
          meta: {
            keepAlive: false
          }
        },
        {
          //场景2
          path: '/scenetwo',
          name: 'scenetwo',
          component: path.Scenetwo,
          meta: {
            keepAlive: true
          }
        },
        {
          //场景3
          path: '/scenethree',
          name: 'scenethree',
          component: path.Scenethree,
          meta: {
            keepAlive: true
          }
        },
        {
          //数据处理
          path: '/datatreating',
          name: 'datatreating',
          component: path.Datatreating,
          meta: {
            keepAlive: true
          }
        },
        {
          //设置
          path: '/setmanage',
          name: 'setmanage',
          component: path.Setmanage,
          meta: {
            keepAlive: true
          }
        },{
          //应用建模
          path: '/applicationmodel',
          name: 'applicationmodel',
          component: path.Applicationmodel,
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
})

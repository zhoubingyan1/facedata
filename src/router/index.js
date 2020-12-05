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
          component: path.index
        },
        {
          //场景2
          path: '/scenetwo',
          name: 'scenetwo',
          component: path.Scenetwo
        },
        {
          //场景3
          path: '/scenethree',
          name: 'scenethree',
          component: path.Scenethree
        },
        {
          //数据处理
          path: '/datatreating',
          name: 'datatreating',
          component: path.Datatreating
        },
        {
          //设置
          path: '/setmanage',
          name: 'setmanage',
          component: path.Setmanage
        },{
          //应用建模
          path: '/applicationmodel',
          name: 'applicationmodel',
          component: path.Applicationmodel
        }
      ]
    }
  ]
})

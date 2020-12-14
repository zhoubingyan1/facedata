export default {
    routes: { // 路由对应的菜单id和父节点
        'index': {
          id: '1-1',
          parent: ['1']
        },
        'sceneone': {
          id: '2-1',
          parent: ['2']
        },
        'scenetwo': {
          id: '3-1',
          parent: ['3']
        },
        'scenethree': {
          id: '4-1',
          parent: ['4']
        },
        'datatreating': {
          id: '5-1',
          parent: ['5']
        },
        'applicationmodel': {
          id: '6-1',
          parent: ['6']
        },
        'setmanage': {
          id: '7-1',
          parent: ['7']
        }
    },
    login: () => import('@/pages/login/login'),//登录
    Systemicselection: () => import('@/pages/systemicselection/systemicselection'),//系统选择
    Forgetpassword: () => import('@/pages/forgetpassword/forgetpassword'),//忘记密码
    home: () => import('@/pages/home'),
    Datatreating: () => import('@/pages/views/datatreating'), //数据处理
    Setmanage: () => import('@/pages/views/setmanage'),//设置
    Applicationmodel: () => import('@/pages/views/applicationmodel'),//应用建模
    //首页
    index: () => import('@/pages/index/index'),//主页&场景1
    Sceneone: () => import('@/pages/views/sceneone'),//场景1
    Scenetwo: () => import('@/pages/views/scenetwo'),//场景2
    Scenethree: () => import('@/pages/views/scenethree'),//场景3


    
}

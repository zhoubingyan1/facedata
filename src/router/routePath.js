export default {
    routes: { // 路由对应的菜单id和父节点
        'index': {
          id: '1-1',
          parent: ['1']
        },
        'manage': {
          id: '2-1',
          parent: ['2']
        }
    },
    login: () => import('@/pages/login/login'),
    Systemicselection: () => import('@/pages/systemicselection/systemicselection'),
    Forgetpassword: () => import('@/pages/forgetpassword/forgetpassword'),
    home: () => import('@/pages/home'),
    //首页
    index: () => import('@/pages/index/index'),
    Manage: () => import('@/pages/index/manage')


    
}

export default {

    LOGIN: '/sys.login.direct', //登陆
    GetMenuList: '/sys.login.direct', //获取集市
    SetMenu: '/sys.login.direct', //设置集市
    SetMart: '/sys.login.direct', //设置集市
    SetUnit: '/sys.login.direct', //设置集市

    GetChildrenBySource: '/sys/explorer/sys.catalog.direct', //选择目录
    UpFile: '/sys/explorer/dfi.upload', //上传、输入名称
    GetExcelInfo: '/sys/explorer/dfi.excel.direct', //获取信息
    DoAutoImport: '/sys/explorer/dfi.excel.direct', //导入
    GoIfarme: '/v3/dap/store/index.html', //dapstore

    //数据处理
    GETCURUSERMARTS: '/sys.login.direct',
    GETCURUSERUNITS: '/sys.login.direct',
    GETCOLUMS: '/v3/qry/common/base.entity.direct',
    PAGEQUERYNOCOUNT: '/v3/qry/common/qry.common.direct',
    getExplorerChildren: '/v3/sys/explorer/sys.catalog.direct',
    getByCatalog: '/v3/sys/explorer/explorer.direct',
    DATATREATINGDELETE: '/v3/sys/explorer/sys.explorer.direct',
    getByCatalog: '/v3/sys/explorer/sys.explorer.direct',
    GETTEMPLATEFIES:'v3/sys/explorer/dfi.excel.direct',
    DOCHECKDATTAS:'/v3/sys/explorer/dfi.excel.direct',


    GETCHILDRENBYSOURCELIST: '/v3/sys/catalog/sys.catalog.direct', //标准目录 获取列表
    GETCHILDRENBYSOURCEADD: '/v3/sys/catalog/sys.catalog.direct', //标准目录 增加
    GETCHILDRENBYSOURCERENAME: '/v3/sys/catalog/sys.catalog.direct', //标准目录 重命名
    GETCHILDRENBYSOURCEDEL: '/v3/sys/catalog/sys.catalog.direct', //标准目录 删除

    //设置目录 导入
    EXPLORERGETEXCELINFO: '/v3/sys/explorer/dfi.excel.direct', //导入10
    EXPLORERCHECKSHEETS: '/v3/sys/explorer/dfi.excel.direct',//提交sheet
    EXPLORERGETCHILDRENBYSOURCELIST: '/v3/sys/explorer/sys.catalog.direct', //导入保存的左边树父节点
    EXPLORERGETCHILDRENBYSOURCE: '/v3/sys/explorer/sys.catalog.direct',//导入保存的左边树子节点
    EXPLORERSEARCHNoPage: '/v3/sys/explorer/sys.explorer.direct',
    EXPLORERisNameExit: '/v3/sys/explorer/dfi.direct',
    EXPLORERGETDEFAULTemplet: '/v3/sys/explorer/dfi.excel.direct',
    EXPLORERFETCHDATA: '/v3/sys/explorer/dfi.excel.direct',
    EXPLORERDOAUTOIMPORT: '/v3/sys/explorer/dfi.excel.direct',
    EXPLORERRECOMMEND: '/v3/sys/explorer/dfi.templet.direct',

    LEADINIMPORTLOG: '/v3/sys/explorer/dfi.importlog.direct',

    //角色
    ROLEGETALLROLE: '/v3/sys/role/sys.role.direct',
    ROLEUPDATE: '/v3/sys/role/sys.role.direct',
    ROKEADD: '/v3/sys/role/sys.role.direct',
    ROLECHECKDELETE: '/v3/sys/role/sys.role.direct',
    ROLEDELETE: '/v3/sys/role/sys.role.direct',
    ROLEGETRESOURCE: '/v3/sys/role/sys.role.direct',
    ROLEGETRESOURCETREELIST: '/v3/sys/role/sys.resource.direct',
    ROLESETRESOURCE: '/v3/sys/role/sys.role.direct',

    //用户
    GETALLRICHUSELIST:'/v3/sys/user/sys.user.direct',
    GETALLRICHUSADD: '/v3/sys/user/sys.user.direct',
    GETALLRICHUSUPDATE: '/v3/sys/user/sys.user.direct',
    GETALLROLE:'/v3/sys/user/sys.role.direct',	
    SETUSERROLES:'/v3/sys/user/sys.role.direct',	
    STOPUSER:'/v3/sys/user/sys.user.direct',

    //机构
    ORGANIZATIONGETLIST:'/v3/sys/org/sys.org.direct',
    ORGANIZATIONGETADD: '/v3/sys/org/sys.org.direct',
    ORGANIZATIONGETUPDATE:'/v3/sys/org/sys.org.direct',
    ORGANIZATIONGETDELETE:'/v3/sys/org/sys.org.direct',

    //部门
    DEPTGETCHILDRENLIST:'/v3/sys/dept/sys.dept.direct',
    DEPTGETBYDEPT:'/v3/sys/dept/sys.user.direct',
    DEPTGETDOMAINORG:'/v3/sys/dept/sys.dept.direct',
    DEPARTMENTADD:'/v3/sys/dept/sys.dept.direct',
    DEPARTMENTUPDATE:'/v3/sys/dept/sys.dept.direct',
    DEPARTMENTDELETE:'/v3/sys/dept/sys.dept.direct',
    DEPTGETNOTINDEPT:'/v3/sys/dept/sys.user.direct',


}
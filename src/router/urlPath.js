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


    GETCURUSERMARTS: '/sys.login.direct',
    GETCURUSERUNITS: '/sys.login.direct',
    GETCOLUMS: '/v3/qry/common/base.entity.direct',
    PAGEQUERYNOCOUNT: '/v3/qry/common/qry.common.direct',

    getExplorerChildren: '/v3/sys/explorer/sys.catalog.direct',
    getByCatalog: '/v3/sys/explorer/explorer.direct',

    DATATREATINGDELETE: '/v3/sys/explorer/sys.explorer.direct',

    getByCatalog: '/v3/sys/explorer/sys.explorer.direct',
    GETTEMPLATEFIES:'v3/sys/explorer/dfi.excel.direct',

    GETCHILDRENBYSOURCELIST: '/v3/sys/catalog/sys.catalog.direct', //标准目录 获取列表
    GETCHILDRENBYSOURCEADD: '/v3/sys/catalog/sys.catalog.direct', //标准目录 增加
    GETCHILDRENBYSOURCERENAME: '/v3/sys/catalog/sys.catalog.direct', //标准目录 重命名
    GETCHILDRENBYSOURCEDEL: '/v3/sys/catalog/sys.catalog.direct', //标准目录 删除

    //设置目录
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
    getAllRichUser:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.user.direct',	
    // {"action":"Service","method":"getAllRichUser","data":[1,25,false],"type":"rpc","tid":2}
    add:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.user.direct',
    // {"action":"Service","method":"add","data":[{"id":0,"code":"1111111","name":"sdsafvddfdf","stopped":false,"change":false,"email":"","tel":""}],"type":"rpc","tid":3}
    update:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.user.direct',
    getAllRole:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.role.direct',	
    // {"action":"Service","method":"getAllRole","data":null,"type":"rpc","tid":5}
    setUserRoles:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.role.direct',	
    // {"action":"Service","method":"setUserRoles","data":[53,[4,7]]}
    stopUser:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.user.direct',	
    // {"action":"Service","method":"stopUser","data":[53,true]}
    stopUser:'http: //192.168.1.236:8081/miner/v3/sys/user/sys.user.direct',
    // {"action":"Service","method":"stopUser","data":[53,false]}
}
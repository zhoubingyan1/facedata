<template>
    <div id="Scenetwo">
        <Row :gutter="50">
            <Col span="15">
                <div class="rkpi_index_content height521">
                    <div class="rkpi_index_content_title">
                        <span class="title">相关性分析</span>
                        <span class="title_mini">Correlation Analysis</span>
                    </div>
                    <div class="rkpi_item">
                        
                    </div>
                    
                </div>
            </Col>
            <Col span="9">
                <div class="rkpi_index_content height521" style="margin-top:0px; padding-top:0px;">
                    <div class="rkpi_index_content height521">
                        <div class="rkpi_index_content_title">
                            <span class="title">相关性分析</span>
                            <span class="title_mini">Correlation Analysis</span>
                        </div>
                        <div class="rkpi_item">
                            
                        </div>
                        
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name:"Scenetwo",
    data(){
        return{
            table: {
                columns: [
                {
                    title: "排名",
                    key: "id",
                    align: "center",
                    render: (h, params) => {
                        let result=""
                        result = params.row.id
                        return h("div", [
                            h(
                            "span",
                            {
                                attrs: {
                                class: "cursor"
                                },
                                on: {
                                click: () => {
                                    this.ishowsecondtable()
                                }
                                }
                            },
                            result
                            )
                        ]);
                        // return h('span',result)
                    }
                },
                {
                    title: "机构名称",
                    key: "name",
                    align: "center",
                    render: (h, params) => {
                        let result=""
                        result = params.row.name
                        return h("div", [
                            h(
                            "span",
                            {
                                attrs: {
                                class: "cursor"
                                },
                                on: {
                                click: () => {
                                    this.ishowsecondtable()
                                }
                                }
                            },
                            result
                            )
                        ]);
                        // return h('span',result)
                    }
                },
                {
                    title: "风险因子2",
                    key: "name1",
                    align: "center",
                    render: (h, params) => {
                        let result=""
                        result = params.row.name1
                        return h("div", [
                            h(
                            "span",
                            {
                                attrs: {
                                class: "cursor"
                                },
                                on: {
                                click: () => {
                                    this.ishowsecondtable()
                                }
                                }
                            },
                            result
                            )
                        ]);
                        // return h('span',result)
                    }
                },
                ],
                data: [{
                    id:'1',
                    name:'市北D',
                    name1:'-0.20933'
                },{
                    id:'2',
                    name:'苏州N',
                    name1:'-0.1933'
                },{
                    id:'3',
                    name:'深圳E',
                    name1:'-0.10933'
                },{
                    id:'4',
                    name:'南京G',
                    name1:'0.2033'
                },
                {
                    id:'1',
                    name:'市北D',
                    name1:'-0.20933'
                },{
                    id:'2',
                    name:'苏州N',
                    name1:'-0.1933'
                },{
                    id:'3',
                    name:'深圳E',
                    name1:'-0.10933'
                },{
                    id:'4',
                    name:'南京G',
                    name1:'0.2033'
                },{
                    id:'3',
                    name:'深圳E',
                    name1:'-0.10933'
                },{
                    id:'4',
                    name:'南京G',
                    name1:'0.2033'
                }]
            },
            table1: {
                columns: [
                {
                    title: "排名",
                    key: "id",
                    align: "center",
                    render: (h, params) => {
                        let result=""
                        result = params.row.id
                        return h("div", [
                            h(
                            "span",
                            {
                                attrs: {
                                class: "cursor"
                                },
                                on: {
                                click: () => {
                                    this.ishowthreetable()
                                }
                                }
                            },
                            result
                            )
                        ]);
                        // return h('span',result)
                    }
                },
                {
                    title: "机构名称",
                    key: "name",
                    align: "center",
                    render: (h, params) => {
                        let result=""
                        result = params.row.name
                        return h("div", [
                            h(
                            "span",
                            {
                                attrs: {
                                class: "cursor"
                                },
                                on: {
                                click: () => {
                                    this.ishowthreetable()
                                }
                                }
                            },
                            result
                            )
                        ]);
                        // return h('span',result)
                    }
                },
                {
                    title: "风险因子2",
                    key: "name1",
                    align: "center",
                    render: (h, params) => {
                        let result=""
                        result = params.row.name1
                        return h("div", [
                            h(
                            "span",
                            {
                                attrs: {
                                class: "cursor"
                                },
                                on: {
                                click: () => {
                                    this.ishowthreetable()
                                }
                                }
                            },
                            result
                            )
                        ]);
                        // return h('span',result)
                    }
                },
                ],
                data: [{
                    id:'1',
                    name:'市北D',
                    name1:'-0.20933'
                },{
                    id:'2',
                    name:'苏州N',
                    name1:'-0.1933'
                },{
                    id:'3',
                    name:'深圳E',
                    name1:'-0.10933'
                },{
                    id:'4',
                    name:'南京G',
                    name1:'0.2033'
                },
                {
                    id:'1',
                    name:'市北D',
                    name1:'-0.20933'
                },{
                    id:'2',
                    name:'苏州N',
                    name1:'-0.1933'
                },{
                    id:'3',
                    name:'深圳E',
                    name1:'-0.10933'
                },{
                    id:'4',
                    name:'南京G',
                    name1:'0.2033'
                },{
                    id:'3',
                    name:'深圳E',
                    name1:'-0.10933'
                },{
                    id:'4',
                    name:'南京G',
                    name1:'0.2033'
                }]
            },
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods: {
        //获取列表
        getData() {
            this.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
            this.$http.get('Manager.ashx?act=GetList&pageIndex='+this.table.page+'&pageSize='+this.table.pagesize).then(
                success => {
                    // console.log(success)
                    if(success.data.code == '0') {
                        this.table.data = success.data.data1
                        this.table.total = success.data.total
                    }else {
                        this.$Modal.error({
                            title:'提示',
                            content: success.data.msg,
                            onOk:()=>{
                                
                            }
                        })
                    }
                },
                error => {
                
                }
            );
        },
    },
}
</script>
<style lang="scss">
#Scenetwo{
    min-width:1200Px;
    height: 100%;
    padding: 50px 70px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    .rkpi_index_content_title{
        background: #F5F5F5;
        border-radius: 15px;
        position: absolute;
        top:-30px;
        left:38px;
        padding: 20px 6px 20px 13px;
        z-index: 1;
        .title{
            font-family: PingFangSC-Semibold;
            font-size: 24px;
            color: rgba(0,0,0,0.80);
            letter-spacing: 0;
            line-height: 24px;
        }
        .title_mini{
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: rgba(0,0,0,0.40);
            letter-spacing: 0;
            line-height: 16px;
            margin-left: 15px;
        }
    }
    .height521{
        height: 521px;
    }
    .rkpi_index_content{
        background: #FFFFFF;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
        border-radius: 10px;
        position: relative;
        margin-top:30px;
        padding-top:50px;
        box-sizing: border-box;
        .rkpi_item{
            height: 330px;
            overflow: scroll;
            padding: 0px 50px 0px 50px;
            margin-top: 25px;
            margin-bottom: 50px;
        }
       
        .rkpi_item::-webkit-scrollbar {
            width: 4px;    
            // height: 4px;
        }
        .rkpi_item::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .rkpi_item::-webkit-scrollbar-track {
            // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            // border-radius: 0;
            // background: rgba(0,0,0,0.1);

        }
        
    }
    //表格
    .facedata-table.ivu-table-wrapper {
        margin: 0 auto;
        border: none;
        box-shadow: 0px 0px 1px 0px #ece6e6;
        transition: all .2s linear;
        &:hover{
            box-shadow: 0px 2px 10px 2px #ece6e6;
        }
        .ivu-table {
            &:before,
            &:after {
            background-color: transparent;
            }
        }
        .ivu-table-tbody {
            color: var(--font);
        }
        tr:nth-child(2n) td{
            background-color: #fff;
        }
        tr:nth-child(2n+1) td{
            background-color: rgba(36, 111, 234, .05);
        }
        th {
            background-color: #fff;
        }
        th,
        td {
            border: none;
            font-size: 14px;
        }
        .ivu-table-body tr.ivu-table-row-hover{
            box-shadow: 0px 0px 1px 0px #ece6e6;
        }
        .ivu-table-body tr.ivu-table-row-hover td,
        .ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-hover td,
        tr.ivu-table-row-hover td {
            background-color: rgba(36, 111, 234, .1);
        }
        //表格内的切换按钮
        .ivu-switch {
            width: 44px;
        }
        .ivu-switch:focus {
            box-shadow: none;
        }
        .ivu-switch-checked {
            border-color: var(--base);
            background-color: var(--base);
            &:after {
            background: var(--zhijianswitch);
            }
        }
        //表格内iconfont
        .iconfont {
            cursor: pointer;
            font-size: 24px;
            vertical-align: middle;
            color: var(--icon);
            transition: color .3s;
            &.icon-edit {
            margin: 0 20px;
            &:hover {
                color: var(--font);
            }
            }
            &.icon-delete {
            font-size: 20px;
            &:hover {
                color: var(--font);
            }
            }
        }
    }
}

</style>

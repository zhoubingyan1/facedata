<template>
    <div id="Datatreating">
        <Tabs class="tabs-animation" :active="tabsvalue" :showClose="true" v-on:closeiconClick="closeicon" v-on:tabclick="tabclick">
            <TabPane :name="item.name" v-for="(item,index) in TabList" :key="index" :label="item.label">
                <div v-if="index==0" class="datatreating_firstitem">
                    <Row>
                        <Col span="6">
                            <div class="datatreating_firstitem_left">
                                <div v-for="(tagtree,index) in leftTreeList" :key="index">
                                    <div class="left_name">{{tagtree.name}}</div>
                                    <div class="left_tree">
                                        <linetree :pd="tagtree.linetreelist" @itemClick="itemClick"></linetree>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>
                        <Col span="18">
                           <div class="datatreating_firstitem_right">
                                <div class="datatreating_fr_content">
                                    <div class="lf">
                                        <div class="header_iconconent cursorpointer" @click="choseleadingin">
                                            <img class="icon" src="../../assets/images/leadingin.png" />
                                            <span class="span">导入</span>
                                        </div>
                                        <div class="header_iconconent cursorpointer">
                                            <img class="icon" src="../../assets/images/createdata.png" />
                                            <span class="span">生成数据</span>
                                        </div>
                                        <div class="header_iconconent cursorpointer" @click="downloaddata">
                                            <img class="icon" src="../../assets/images/download.png" />
                                            <span class="span">下载数据</span>
                                        </div>
                                    </div>
                                    <div class="rg">
                                        <div class="header_iconconent marginright0">
                                            <img class="icon" src="../../assets/images/search@2x.png" />
                                            <input placeholder="关键字搜索" class="datasearch_input">
                                        </div>
                                    </div>
                                </div>
                                <div class="datatreating_fr_table">
                                    <Table class="facedata-table account-table" stripe :columns="table.columns" :data="table.data"></Table>
                                </div>
                                <div class="datatreating_fr_page">
                                    <Page :total="table.total" :current="table.page" :showElevator="false" @on-change="changePage" :pageSize="table.pagesize"></Page>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    
                </div>
                <div v-else>
                    <div class="datatreating_fr_table">
                        <Table class="facedata-table account-table" stripe :columns="table.columns" :data="table.data"></Table>
                    </div>
                    <div class="datatreating_fr_page">
                        <Page :total="table.total" :current="table.page" :showElevator="false" @on-change="changePage" :pageSize="table.pagesize"></Page>
                    </div>
                </div> 
            </TabPane>
            <TabPane label="生成数据" key="999">

            </TabPane>
        </Tabs>
        <!-- 导入弹窗 -->
        <Modal v-model="datatreating_modal" class-name="vertical-center-modal">
            <!-- 导入 -->
            <div class="layer_header" style="cursor: move;">
                导入
            </div>
            <div class="datamodal_content">
                <div class="datamodal_item">
                    <div class="datamodal_item-title">选择表:</div>
                    <div class="datamodal_item_flex">
                        <div class="choose_biao"><div>{{choosename}}</div><img class="icon" src="../../assets/images/add@2x.png" /></div>
                        <input type="file" id="editorupload" accept="image/gif, image/jpeg, image/png, image/jpg" style="width:100px;height:32px;position:absolute;left:0;top:0;opacity:0;" @change="UploadMore"/>
                    </div>
                </div>
                <div class="datamodal_item">
                    <div class="datamodal_item-title">描述:</div>
                    <div class="datamodal_item_flex">
                        <textarea v-model="leadingindescribe" class="textarea-control" placeholder="非必填"></textarea>
                    </div>
                </div>
            </div>
            <div class="datamodal_footer">
                <button class="btn" @click="lendinginleavefail">推出</button>
                <button class="btn" @click="lendinginsave">保存</button>
            </div>
        </Modal>
        <!-- 系统提示弹窗 -->
        <Modal v-model="systemtips_modal" class-name="vertical-center-modal" :closable="false">
            <!-- 导入失败 -->
            <div class="layer_header" style="cursor: move;">
                系统提示
            </div>
            <div class="systemtips_content">
                <img class="icon" src="../../assets/images/wrong.png" />
                <div class="successtips">导入成功</div>
            </div>
            <div class="datamodal_footer1">
                <button class="btn" @click="systemtips_modal=false">确定</button>
            </div>
        </Modal>
        <!-- 导入失败弹窗 -->
        <Modal v-model="leadingInFail_modal" class-name="vertical-center-modal">
            <!-- 导入失败 -->
            <div class="layer_header" style="cursor: move;">
                导入失败
            </div>
            <div class="leadingInFail_content">
                <div class="datamodal_item-title1">以下字段为空或与模板样式不符:</div>
                <div class="datamodal_item_textarea">
                    <textarea class="textarea-control1" v-model="leadinginfailinfo" placeholder="非必填"></textarea>
                </div>
            </div>
            <div class="datamodal_footer">
                <button class="btn">导出错误日志</button>
                <button class="btn">修改数据字典</button>
            </div>
        </Modal>
         <!-- 下载模版 -->
        <Modal v-model="downloadTemplate_modal" class-name="vertical-center-modal">
            <!-- 下载模版 -->
            <div class="layer_header" style="cursor: move;">
                下载模版
            </div>
            <div class="datamodal_content">
                <div class="datamodal_item">
                    <div class="datamodal_item-title">模板类型:</div>
                    <div class="datamodal_item_flex">
                        <Select v-model="model8" clearable class="downloadtemplate_content">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <!-- <div class="select-head">
                            <span class="select-head-cont">{{cont}}</span>
                            <span class="select-icon">▼</span>
                        </div>
                        <ul class="option">
                            <li class="option-item" v-for="item in cityList" @click="optionClick(v-1)">「「</li>
                        </ul> -->
                    </div>
                </div>
                <div class="datamodal_item">
                    <div class="datamodal_item-title">模板名称:</div>
                    <div class="datamodal_item_flex">
                        <textarea v-model="templatename" class="textarea-control" placeholder="非必填"></textarea>
                    </div>
                </div>
            </div>
            <div class="datamodal_footer">
                <button class="btn">推出</button>
                <button class="btn">保存</button>
            </div>
        </Modal>
    </div>
</template>
<script>
import linetree from "../components/linetree/linetree"
import {Tabs, TabPane} from '../components/tabs/index'
import Page from '../components/page/index'
export default {
    name:"Datatreating",
    components: {
        linetree,
        Tabs,
        TabPane,
        Page
    },
    data(){
        return{
            datatreating_modal:false,//导入弹窗
            choosename:'', //导入选择表
            leadingindescribe:'',//导入描述

            leadingInFail_modal:false,//导入失败弹窗
            leadinginfailinfo:'以下字段为空或与模板样式不符，以下字段为空或与模板样式不',//导入失败的文本框

            downloadTemplate_modal:false,//下载模版弹窗
            templatename:'2020914KPI2101', //模版名称
            model8:'',
            
            systemtips_modal:false,//系统提示弹窗

            tabsvalue:'1',//tab选项卡的选定
            tabIndex:1,
            TabList:[{
                label:'数据处理',
                name:'1',
                index:'1'
            }],
            leftTreeList:[
                {
                    name:'数据表',
                    linetreelist: [
                        {
                            label: "第一层(1)",
                            children: []
                        },
                        {
                        label: "第一层(2)",
                        children: [
                            {
                                label: "第二层(1)",
                                children: []
                            },
                            {
                                label: "第二层(2)",
                                children: [{
                                    label: "第三层(1)",
                                    children: [
                                        {
                                            label: "第四层",
                                            children: [
                                                {
                                                label: "第五层",
                                                children: [{ label: "第六层", children: [] }]
                                                }
                                            ]
                                        }
                                    ]},
                                    {
                                        label: "第三层(2)",
                                        children: []
                                    },
                                    {
                                        label: "第三层(3)",
                                        children: []
                                    }
                            ]},
                            {
                                label: "第二层(3)",
                                children: []
                            },
                            {
                                label: "第二层(4)",
                                children: []
                            }
                        ]},
                        {
                            label: "第一层(3)",
                            children: []
                        },
                        {
                            label: "第一层(4)",
                            children: []
                        },
                        {
                            label: "第一层(5)",
                            children: []
                        }
                    ],
                },
                {
                    name:'数据包',
                    linetreelist: [
                        {
                            label: "xxxx-xx-xx",
                            children: []
                        }
                    ],
                },
                {
                    name:'模型库',
                    linetreelist: [
                        {
                            label: "xxxx-xx-xx",
                            children: []
                        },
                        {
                            label: "xxxx-xx-xx",
                            children: []
                        }
                    ],
                }
            ],
            table: {
                page: 1,
                pagesize: 15,
                total: 50,
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
                    {
                        title: " ",
                        align: "center",
                        render: (h, params) => {
                        let result = "0";
                        return h("div", [
                            h("i", {
                                attrs: {
                                    class: "iconfont icon-edit"
                                },
                                style: {
                                   
                                },
                                on: {
                                    click: () => {
                                    this.addTab(params.row);
                                    }
                                },
                            
                            }),

                            h("i", {
                                attrs: {
                                    class: "iconfont icon-delete"
                                },
                                style: {
                                    
                                },
                                on: {
                                    click: () => {
                                    this.delID = params.row.id;
                                    this.delModal = true;
                                    }
                                },
                            
                            })
                        ]);
                        }
                    }
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
            cityList:[{
                label:'123',
                value:'111'
            }]
        }
    },
    created(){
    },
    mounted(){

    },
    methods: {
        //分页切换
        changePage(page) {
            this.table.page = page;
            this.changeTags();
        },
        // 选择导入
        choseleadingin(){
            this.datatreating_modal = true
        },
        //导入保存
        lendinginsave(){
            this.systemtips_modal = true
        },
        //导入推出
        lendinginleavefail(){
            this.leadingInFail_modal=true
        },
        //下载数据
        downloaddata(){
            this.downloadTemplate_modal=true
        },
        itemClick(){
            //树的点击
        },
        tabclick(item){
            // console.log(item,'item')
            this.tabsvalue = item.toString();
        },
        //增加tab
        addTab(params) {
            let tabIndex =this.tabIndex
            this.tabIndex= tabIndex+1;
            this.TabList.push({
                name: this.tabIndex,
                label:'xxx-xx',
                index:this.tabIndex
            });
            // console.log(this.TabList)
            // this.isTip = false;
        },
        closeicon(index){
            // console.log(item)
            this.TabList.splice(index,1)
            if(this.TabList.length>0){
                // console.log(this.TabList[this.TabList.length-1].name.toString(),'1234')
                let newname=this.TabList[this.TabList.length-1].name
                this.tabsvalue=newname.toString()
                
            }
            
            
        },
        UploadMore(e) {

        }
    },
}
</script>
<style lang="scss">
#Datatreating{
    min-width:1200Px;
    height: 100%;
    padding: 50px 70px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: #f5f5f5;
    .tabs-animation{
        width: 100%;
    }
    #tabs{
        .tabs-nav{
            width:100%;
            //    border-bottom: 1px solid #ddd;
            display: flex;
            background: #F5F5F5;
            border-radius: 10px 10px 0 0;
            .tabs-tab{ 
                width: 170px;
                // flex:1; 
                display: inline-block; vertical-align: middle; padding: 0 20px; cursor: pointer;
                text-align: center;
                line-height: 50px;
                height:50px;
                position: relative;
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: rgba(0,0,0,0.40);
                letter-spacing: 0;
                background: #E8E8E8;
                .tabs_right_bottom{
                    width: 10px;
                    height: 10px;
                    // background: #F5F5F5;
                    background: #fff;
                    position: absolute;
                    bottom:0px;
                    right: -10px;
                    z-index: 1;
                    // border-radius: 0px 0 20px 0 !important;
                    .tabs_border{
                        width: 10px;
                        height: 10px;
                        // background: #fff;
                        background: #E8E8E8;
                        border-radius: 0px 0 0 10px !important;
                    }
                }
                .tabs_left_bottom{
                    width: 10px;
                    height: 10px;
                    // background: #e8e8e8;
                    background: #fff;
                    position: absolute;
                    bottom:0px;
                    left: -10px;
                    z-index: 1;
                    // border-radius: 0px 0 20px 0 !important;
                    .tabs_border{
                        width: 10px;
                        height: 10px;
                        // background: #fff;
                        background: #E8E8E8;
                        border-radius: 0px 0px 10px 0px !important;
                    }
                }
                .middle_line{
                    position: absolute;
                    top:26px;
                    left: 0;
                    width: 1px;
                    height: 14px;
                    background: rgba(0,0,0,0.20);
                }
                .middle_line1{
                    position: absolute;
                    top:26px;
                    right: -1px;
                    width: 1px;
                    height: 14px;
                    background: #f5f5f5;
                    z-index: 111;
                }
            &.active{ 
                background:#fff;
                border-radius: 10px 10px 0 0px ;
                color: #246FEA !important;
                }
            .tip{ width: 20px; height: 20px; border-radius: 50%; background: #f00; text-align: center; line-height: 20px; display: inline-block; color: #fff; font-size: 12px; position: relative; top: -15px; }
            &.disabled{color: #999;cursor: not-allowed}
            }
            .tabs-tab:first-child{
                .middle_line{
                    position: absolute;
                    top:26px;
                    left: 0;
                    width: 0px !important;
                    height: 14px;
                    background: rgba(0,0,0,0.20);
                }
            }
            .tabs-tab:last-child{
                .tabs_right_bottom{
                    width: 10px;
                    height: 10px;
                    // background: #F5F5F5;
                    background: #fff;
                    position: absolute;
                    bottom:0px;
                    right: -10px;
                    z-index: 1;
                    // border-radius: 0px 0 20px 0 !important;
                    .tabs_border{
                        width: 10px;
                        height: 10px;
                        // background: #fff;
                        background: #F5F5F5 !important;
                        border-radius: 0px 0 0 10px !important;
                    }
                }
            }
        }
        .tabs-content{
            padding: 30px 50px;
            background: #FFFFFF;
            box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
            border-radius: 0 10px 10px 10px; 
            min-height: 970px;
            .tab-pane{ display: none;
            &.active{ display: block; }
            }
        }
        .clearfix{
            &:after{
                clear: both;
            }
        }
    }
    .datatreating_firstitem{
       
        .datatreating_firstitem_left{
            width: 380px;
            .left_name{
                font-family: PingFangSC-Semibold;
                font-size: 24px;
                color: rgba(0,0,0,0.80);
                letter-spacing: 0;
                line-height: 24px;
                padding: 20px 0px;
                border-bottom: 1px solid #e8e8e8;
                box-shadow: #e8e8e8;
            }
            .left_tree{
                padding: 20px 0px 50px 0px;
            }
        }
        .datatreating_firstitem_right{
            flex: 1;
            margin-left: 50px;
            .datatreating_fr_content{
                display: flex;
                justify-content: space-between;
                align-items:center;
                margin-bottom: 30px;
                .lf{
                    display: flex;
                    justify-content: flex-start;
                    align-items:center;
                }
                .cursorpointer{
                    cursor: pointer;
                }
                .header_iconconent{
                    cursor: pointer;
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    border: 1px solid rgba(0,0,0,0.10);
                    border-radius: 5px;
                    height: 38px;
                    line-height: 38px;
                    padding:0px 30px;
                    margin-right: 20px;
                    .icon{
                        width: 18px;
                        height: 17px;
                    }
                    .span{
                        font-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: rgba(0,0,0,0.40);
                        letter-spacing: 0;
                        line-height: 14px;
                        padding-left: 6px;
                    }
                    .datasearch_input{
                        height: 38px;
                        line-height: 38px;
                        border:none;
                        background: none;
                        outline: none;
                        margin-left: 10px;
                    }
                }
                .marginright0{
                    margin-right: 0px !important;
                }
            }
        }
    }
    .datatreating_fr_table{
        height: 787px;
        background: rgba(0,0,0,0.03);
        border-radius: 5px;
        padding: 20px;
    }
    //表格
    .facedata-table.ivu-table-wrapper {
        margin: 0 auto;
        border: none;
        // box-shadow: 0px 0px 1px 0px #ece6e6;
        transition: all .2s linear;
        &:hover{
            // box-shadow: 0px 2px 10px 2px #ece6e6;
        }
        .ivu-table {
            background: none;
            &:before,
            &:after {
            background-color: transparent;
            }
        }
        .ivu-table-header{
            height: 80px ;
            line-height: 80px;
            background: rgb(239,239,239);
        }
        .ivu-table-tbody {
            color: var(--font);
            .ivu-table-row{
                height: 44px;
                line-height: 44px;
            }
        }
        tr:nth-child(2n) td{
            background-color: rgb(239,239,239);
        }
        tr:nth-child(2n+1) td{
            background-color:rgb(247,247,247);
        }
        th {
            background-color: rgb(239,239,239);
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: rgba(0,0,0,0.80);
            letter-spacing: 0;
        }
        th,
        td {
            border: none;
            font-size: 14px;
        }
        .ivu-table-body tr.ivu-table-row-hover{
            // box-shadow: 0px 0px 1px 0px #ece6e6;
        }
        .ivu-table-body tr.ivu-table-row-hover td,
        .ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-hover td,
        tr.ivu-table-row-hover td {
            background-color: #fff;
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
    .datatreating_fr_page{
        margin-top: 30px;
    }
}
.ivu-modal {
    min-width: 600Px;
    width: 600px !important;
    height: 334px;
    top:300px;
    .ivu-modal-content{
        background: #FFFFFF;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.10);
        border-radius: 10px;
        overflow: hidden;
        .ivu-modal-close{
            right: 14px;
            top: 14px;
        }
        .layer_header{
            height: 60px;
            line-height: 60px;
            overflow: hidden;
            padding-left: 30px;
            position: relative;
            border-bottom: 1px solid #e9eaec;
            border-radius: 5px 5px 0 0;
            -moz-user-select: none;
            -webkit-user-select: none;
            margin-left: -30px;
            margin-right: -30px;
            margin-top: -30px;
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            color: rgba(0,0,0,0.80);
            letter-spacing: 0;
        }
        .datamodal_content{
            padding: 30px 20px;
            .datamodal_item{
                display: flex;
                margin-bottom: 20px;
                .datamodal_item-title{
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: rgba(0,0,0,0.80);
                    letter-spacing: 0;
                    line-height: 44px;
                    width:90px;
                }
                .datamodal_item_flex{
                    flex: 1;
                    background: rgba(0,0,0,0.05);
                    border-radius: 10px;
                    .ivu-select-selection{
                        width: 100%;
                        border:none !important;
                        background: none !important;
                        -webkit-box-shadow: none; 
                        box-shadow: none; 
                        margin:0 -10px;
                    }
                    .ivu-select-placeholder{
                        width: 100%;
                    }
                }
                .textarea-control{
                    // flex:1;
                    // width:410px;
                    // min-width: 410Px;
                    width: 100%;
                    height: 80px; 
                    height: 164px; 
                    overflow: hidden;
                    box-sizing: border-box;
                    padding: 10px 20px;
                    line-height: 22px;
                    border: none;
                    display: inline-block;
                    background: none;
                    border-radius: 10px;
                    font-size: 14px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    resize: none;
                    color: #333;
                    outline: none;
                }
                .choose_biao{
                    // width: 410px;
                    // min-width: 410Px;
                    // background: rgba(0,0,0,0.05);
                    border-radius: 10px;
                    height: 44px;
                    display: flex;
                    justify-content: space-between;
                    align-items:center;
                    padding:0px 10px;
                    .icon{
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                        // position: absolute;
                        
                    }
                }
                .downloadtemplate_content{
                    // width: 410px;
                    // min-width: 410Px;
                    width:100%;
                    background: rgba(0,0,0,0.05);
                    border-radius: 10px;
                    height: 44px;
                    display: flex;
                    justify-content: space-between;
                    align-items:center;
                    padding:0px 10px;
                    box-sizing: border-box;
                    border:none;
                }
                .downloadtemplate{
                    // display: flex;
                    // width: 390px;
                    // min-width: 390Px;
                    width:100%;
                    // justify-content: space-between;
                    // align-items:center;
                    color: rgba(0,0,0,0.80);
                }
                .ivu-select-dropdown{
                    width: 410px;
                }
            }
            
        }
        .leadingInFail_content{
            padding: 30px 20px;
            .datamodal_item-title1{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: rgba(0,0,0,0.80);
                letter-spacing: 0;
                line-height: 16px;
            }
            .datamodal_item_textarea{
                margin-top:20px;
                // width: 500px;
                // min-width: 500Px;
                width:100%;
                height: 192px;
                border-radius: 10px;
                .textarea-control1{
                    padding:20px 20px;
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    border:none;
                    background: rgba(0,0,0,0.05);
                    outline: none;
                }
            }
        }
        .datamodal_footer{
            display: flex;
            justify-content: flex-end;
            align-items:center;
            
        }   
        .systemtips_content{
            text-align: center;
            .icon{
                width: 120px;
                height: 120px;
                margin-top: 50px;
            }
            .successtips{
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #246FEA;
                letter-spacing: 0;
                line-height: 16px;
                margin-bottom: 50px;
            }
        }
        .datamodal_footer1{
            display: flex;
            justify-content: center;
            align-items:center;
        }
        .btn{
            display: inline-block;
            // width: 100px;
            border: 0;
            background: #fff;
            border-radius: 3px;
            color: #246FEA;
            font-size: 14px;
            display: inline-block;
            vertical-align: middle;
            // height: 40px;
            line-height: 40px;
            padding: 0 20px;
            cursor: pointer;
            -webkit-transition: opacity .3s;
            transition: opacity .3s;
            overflow: hidden;
            border: 1px solid #246FEA;
            border-radius: 5px;
            margin-left: 10px;
            outline: none;
        }
    }
}
</style>

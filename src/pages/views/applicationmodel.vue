<template>
    <div id="Applicationmodel">
        <Row>
            <Col span="18">
                <div class="backgroundwhite">
                    <div class="datatreating_fr_content">
                        <div class="lf">
                            <div class="header_iconconent cursorpointer" @click="choseleadingin">
                                <img class="icon" src="../../assets/images/applicationmodel/extract.png" />
                                <span class="span">数据提取</span>
                            </div>
                            <div class="header_iconconent cursorpointer" @click="addtabs">
                                <img class="icon" src="../../assets/images/applicationmodel/analyse.png" />
                                <span class="span">因子分析</span>
                            </div>
                            <div class="header_iconconent cursorpointer" @click="downloaddata">
                                <img class="icon" src="../../assets/images/applicationmodel/element.png" />
                                <span class="span">主要成分分析</span>
                            </div>
                            <div class="header_iconconent cursorpointer" @click="downloaddata">
                                <img class="icon" src="../../assets/images/applicationmodel/correlation.png" />
                                <span class="span">相关性分析</span>
                            </div>
                        </div>
                        <div class="rg">
                            <div class="header_iconconent width174 marginright0">
                                <img class="icon" src="../../assets/images/search@2x.png" />
                                <input placeholder="关键字搜索" class="datasearch_input">
                            </div>
                        </div>
                    </div>
                    <NewTabs class="tabs-animation" :active="tabsvalue" v-on:tabclick="tabclick">
                        <NewTabPane :name="item.name" v-for="(item,index) in applicationmodelTabList" :key="index" :label="item.label">
                            <div class="datatreating_firstitem">
                                <div class="datatreating_fr_table">
                                    <Table class="facedata-table account-table" stripe :columns="table.columns" :data="table.data"></Table>
                                </div>
                                <!-- <div class="datatreating_fr_page">
                                    <Page :total="table.total" :current="table.page" :showElevator="false" @on-change="changePage" :pageSize="table.pagesize"></Page>
                                </div> -->
                            </div> 
                        </NewTabPane>
                    </NewTabs>
                </div>
            </Col>
            <Col span="6">
                <div class="applicationmodel_right_content">
                    <div class="clearallinfo">
                        <div class="clearallinfo_left">
                            <i class="iconfont icon-delete"></i>
                            清除全部
                        </div>
                        <div class="clearallinfo_right">
                            <Icon type="ios-close" />
                        </div>
                    </div>
                    <div class="right-timeline-content">
                        <Timeline>
                            <TimelineItem v-for="(item,index) in steplist" :key="index">
                                <img class="doticon" slot="dot" src="../../assets/images/timecircle.png" />
                                <p class="steptimeitemtit">{{item.name}}</p>
                                <div class="steptimeitemcontent">
                                    <div class="listtitle" @click="toggle(item)">{{item.content}}<Icon type="md-arrow-dropdown" /></div>
                                    <div class="steptimeitem-items" v-if="item.open">
                                        <div class="steptimeitem-itemsinfo" v-for="(timelineitems,indexs) in item.children" :key="indexs">
                                            <span class="circle"></span>
                                            <div class="infomiddle">{{timelineitems.title}}:<span class="infocontent">{{timelineitems.content}}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div class="showmoreall">显示全部</div>
                </div>
            </Col>
            
        </Row>
        
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
                <button class="btn" @click="lendinginleavefail">退出</button>
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
                <button class="btn">退出</button>
                <button class="btn">保存</button>
            </div>
        </Modal>
         <!-- 错误提示 -->
        <Modal v-model="errorTips_modal" class-name="vertical-center-modal">
            <div class="errorTips_modal">
                <img
                class="errorTips_modal_tips"
                src="../../assets/images/wrong@3x.png"
                alt
                />

                <div
                class="forget_tips_text"
                v-for="(node,index) in err_list"
                :key="index"
                >{{node}}</div>
            </div>
        </Modal>
    </div>
</template>
<script>
import linetree from "../components/linetree/linetree"
import { NewTabs,NewTabPane} from '../components/newtabs/index'
export default {
    name:"Applicationmodel",
    components: {
        linetree,
        NewTabs,
        NewTabPane,
    },
    data(){
        return{
            errorTips_modal:false,//错误弹框
            err_list: [], //错误信息列表

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
            applicationmodelTabList:[{
                label:'第一步',
                name:'1',
                index:'1'
            },{
                label:'第二步',
                name:'2',
                index:'2'
            },{
                label:'第三步',
                name:'3',
                index:'3'
            }],
            table: {
                page: 1,
                pagesize: 15,
                total: 50,
                columns: [
                    {
                        title: "姓名",
                        key: "id",
                        align: "center",
                    },
                    {
                        title: "年龄",
                        key: "name",
                        align: "center",
                    },
                    {
                        title: "拼音",
                        key: "name1",
                        align: "center",
                    },
                    {
                        title: "职位",
                        key: "name2",
                        align: "center",
                    },
                    // {
                    //     title: " ",
                    //     align: "center",
                    //     render: (h, params) => {
                    //     let result = "0";
                    //     return h("div", [
                    //         h("i", {
                    //             attrs: {
                    //                 class: "iconfont icon-edit"
                    //             },
                    //             style: {
                                   
                    //             },
                    //             on: {
                    //                 click: () => {
                    //                 this.addTab(params.row);
                    //                 }
                    //             },
                            
                    //         }),

                    //         h("i", {
                    //             attrs: {
                    //                 class: "iconfont icon-delete"
                    //             },
                    //             style: {
                                    
                    //             },
                    //             on: {
                    //                 click: () => {
                    //                 this.delID = params.row.id;
                    //                 this.delModal = true;
                    //                 }
                    //             },
                            
                    //         })
                    //     ]);
                    //     }
                    // }
                ],
                data: [{
                    id:'张三',
                    name:'24',
                    name1:'zhangsan',
                    name2:'总经理'
                },{
                    id:'张三',
                    name:'24',
                    name1:'zhangsan',
                    name2:'总经理'
                },{
                    id:'张三',
                    name:'24',
                    name1:'zhangsan',
                    name2:'总经理'
                },{
                    id:'张三',
                    name:'24',
                    name1:'zhangsan',
                    name2:'总经理'
                }]
            },
            cityList:[{
                label:'123',
                value:'111'
            }],
            steplist:[{
                id:'1',
                name:"步骤1",
                content:"因子分析",
                open:false,
                children:[{
                    title:'选择表',
                    content:'DF_68_1506483847543(T1)'
                },{
                    title:'提取字段',
                    content:'jsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfks(T1)(T1)'
                },{
                    title:'提取字段',
                    content:'jsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfks(T1)(T1)'
                },{
                    title:'提取字段',
                    content:'jsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfks(T1)(T1)'
                }]
            },{
                id:'2',
                name:"步骤2",
                content:"主成分分析",
                open:false,
                children:[{
                    title:'提取字段',
                    content:'jsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfksjsdhfshdj.djhfskjdhfkjhskdhf,sdjfgsdgfjhgsjdfks(T1)(T1)'
                }]
            },{
                id:'3',
                name:"步骤3",
                content:"相关性分析",
                open:false,
                children:[{
                    title:'选择表',
                    content:'DF_68_1506483847543(T1)'
                }]
            }]
        }
    },
    created(){
        // this.getdata()
    },
    mounted(){

    },
    methods: {
        getdata() {
            var that = this;
            var query = {
                action: "Service",
                method: "getCurUserMarts",
                data: [],
            };
            that.$Spin.show()
            that.$http.post(that.PATH.GetMenuList, JSON.stringify(query)).then(
                (success) => {
                that.$Spin.hide()
                // console.log(success.data.result);
                if(success.data.result.length==0){
                    //弹窗 内容  你没有使用本系统的权限!
                    that.err_list = ["你没有使用本系统的权限!"];
                    that.errorTips_modal = true;
                    return;
                }
                that.list = success.data.result;
                },
                (error) => {
                    that.$Spin.hide()
                    that.err_list = ["登录异常", "请联系管理员"];
                    that.errorTips_modal = true;
                }
            );
        },
        toggle(item){
            var id = item.id, list = this.steplist;
            // 使用id获取打开的子列表
            for (var i = 0, len = list.length; i < len; ++i) {
                if (list[i].id == id) {
                    list[i].open = !list[i].open
                } else {
                    list[i].open = false
                }
            }
            // this.setData({
            // list: list
            // });
        },
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
        addtabs(){
            let tabIndex =this.tabIndex
            this.tabIndex= tabIndex+1;
            let ishasdata =true
            if(this.applicationmodelTabList.length>0){
                this.applicationmodelTabList.filter(function(item){
                     if(item.name == "2"){
                         ishasdata = false
                     }
                })
                if(ishasdata){
                    this.applicationmodelTabList.push({
                        name: 2,
                        label:'生成数据',
                        index:tabIndex
                    });
                    this.tabsvalue='2'
                }
                if(!ishasdata){
                    this.tabsvalue='2'
                }
                
            }
        },
        //增加tab
        addTab(params) {
            let tabIndex =this.tabIndex
            if(tabIndex==1){
                this.tabIndex= tabIndex+2;
            }else{
                this.tabIndex= tabIndex+1;
            }
            this.applicationmodelTabList.push({
                name: this.tabIndex,
                label:'xxx-xx',
                index:this.tabIndex
            });
            this.tabsvalue=this.tabIndex.toString()
            // console.log(this.applicationmodelTabList)
            // this.isTip = false;
        },
        closeicon(index){
            // console.log(item)
            this.applicationmodelTabList.splice(index,1)
            if(this.applicationmodelTabList.length>0){
                // console.log(this.applicationmodelTabList[this.applicationmodelTabList.length-1].name.toString(),'1234')
                let newname=this.applicationmodelTabList[this.applicationmodelTabList.length-1].name
                this.tabsvalue=newname.toString()
                
            }
            
            
        },
        UploadMore(e) {

        }
    },
}
</script>
<style lang="scss">
#Applicationmodel{
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
    .backgroundwhite{
        background: #fff;
        padding: 35px 50px;
        margin-right: 50px;
        height: 1020px;
    }
    .datatreating_fr_content{
        display: flex;
        justify-content: space-between;
        align-items:center;
        // margin-bottom: 30px;
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
            // padding:0px 30px;
            margin-right: 20px;
            width: 154px;
            .icon{
                width: 18px;
                height: 18px;
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
                width: 100px;
            }
            &:hover{
                color: rgba(0,0,0,0.80);
                border: 1px solid rgba(0,0,0,0.40);
                .span{
                    color: rgba(0,0,0,0.80);
                }
            }
        }
        .width174{
            width: 194px !important;
        }
        .marginright0{
            margin-right: 0px !important;
        }
    }
    #newtabs{
        .newtabs-nav{
            padding:48px 0px 30px 0px;
            
        }
        .newtabs-tab{
            display: inline-block;
            margin-right: 30px;
            font-family: PingFangSC-Regular;
            font-size: 18px;
            color: rgba(0,0,0,0.40);
            letter-spacing: 0;
            line-height: 38px;
            cursor: pointer;
        }
        .newtabs-tab.active{
            opacity: 0.8;
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: #000000;
            letter-spacing: 0;
            line-height: 24px;
        }
        .middle_line1{
            width: 30px;
            height: 4px;
            background: #246FEA;
            border-radius: 2px;
            margin:15px auto 0px;
        }
    }
    .datatreating_firstitem{
       
        .datatreating_firstitem_left{
            // width: 380px;
            // border-right: 6px solid #e8e8e8;
            .marginright30{
                // margin-right: 20Px;
            }
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
        .datatreating_firstitem_middle{
            width: 50Px;
            text-align: center;
            .widthborder8{
                width: 6px;
                height: 800px;
                background:#e8e8e8 ;
                margin:0 auto;
            }
        }
    }
    .datatreating_fr_table{
        height: 775px;
        overflow: hidden;
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
            background: rgba(0,0,0,0) !important;
        }
        .ivu-table-tbody {
            color: var(--font);
            .ivu-table-row{
                height: 44px;
                line-height: 44px;
            }
        }
        tr:nth-child(2n) td{
            background: rgba(0,0,0,0);
        }
        tr:nth-child(2n+1) td{
            background: rgba(0,0,0,0.03);
        }
        th {
            background: rgba(0,0,0,0) !important;
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
    .applicationmodel_right_content{
        height: 1020px;
        background: #fff;
        padding: 30px;
        
        .clearallinfo{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 0px 32px 0px;
            border-bottom: 1px solid rgba(0,0,0,0.20);;
            .clearallinfo_left{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #246FEA;
                letter-spacing: 0;
            }
            .clearallinfo_right{
                font-size: 30px;
            }
        }
        .right-timeline-content{
            margin-top: 60px;
            height: 450Px;
            overflow: scroll;
            .ivu-timeline-item-tail{
                border-left: 0.01rem dashed #246FEA !important;
            }
            .doticon{
                width: 14px;
                height: 14px;
            }
            .steptimeitemtit{
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: rgba(0,0,0,0.40);
                letter-spacing: 0;
                line-height: 16px;
            }
            .steptimeitemcontent{
                margin-top: 20px;
                .listtitle{
                    font-family: PingFangSC-Semibold;
                    font-size: 20px;
                    color: rgba(0,0,0,0.80);
                    letter-spacing: 0;
                    line-height: 20px;
                    margin-bottom: 20px;
                    cursor: pointer;
                }
            }
            
        }
        .steptimeitem-items{
            margin-bottom: 60px;
            .steptimeitem-itemsinfo{
                margin-bottom: 16px;
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: rgba(0,0,0,0.80);
                letter-spacing: 0;
                display: flex;
                .circle{
                    display: inline-block;
                    width: 8Px;
                    height: 8Px;
                    background: #FFC036;
                    border-radius: 8Px;
                    margin:8px 10px 0px 2px;

                }
                .infomiddle{
                    flex: 1;
                    display: inline-block;
                    // margin-left:20Px;
                    word-break:break-all;
                    word-wrap:break-word;
                }
                .infocontent{
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: rgba(0,0,0,0.40);
                    letter-spacing: 0;
                    line-height: 12px;
                }
            }
        }
        .showmoreall{
            width: 124px;
            height: 38px;
            line-height: 38px;
            margin:30px auto;
            border: 1px solid rgba(0,0,0,0.20);
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            
        }
        .showmoreall:hover{
                color: #000;
                border: 1px solid rgba(0,0,0,0.6);
            }
    }
    .applicationmodel_right_content::-webkit-scrollbar {
        width: 4px;    
        /*height: 4px;*/
    }
    .applicationmodel_right_content::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        // background: rgba(0,0,0,0.2);
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
//全局的报错弹框
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1400px;

  .ivu-modal {
    width: 300px !important;
    height: 300px;

    text-align: center;
    top: 0;

    .ivu-modal-content {
      border-radius: 10px;
    }

    .errorTips_modal {
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #fd5056;
      letter-spacing: 0;
      text-align: center;
      line-height: 20px;

      .errorTips_modal_tips {
        width: 77px;
        height: 100px;
        margin: 10px auto 30px;
      }

      .forget_tips_text {
        margin-bottom: 10px;
      }
    }
  }
}
.myiframe{
    width:100%;
    height:900px;
}
</style>

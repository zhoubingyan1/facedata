<template>
    <div id="Scenetwo">
        <!-- 表格全屏放大 -->
        <div v-if="enlarge"> 
            <!-- <Row>
                <Col span="24">
                    <div class="rkpi_index_content height271">
                        <div class="rkpi_index_content_title">
                            <span class="title">总-分行检查结果分析</span>
                        </div>
                        <div class="resizeicon">
                            <Icon type="ios-resize" />
                        </div>
                        <div class="rkpi_item">
                            <Table class="facedata-table account-table" :columns="table.columns" :data="table.data">
                                <template slot-scope="{ row, index }" slot="name">
                                {{row.name}}
                                </template>

                                <template slot-scope="{ row, index }" slot="age">
                                {{row.age}}
                                </template>

                                <template slot-scope="{ row, index }" slot="birthday">
                                    <div class="prset">
                                        <div :class="row.show>0?'bottomstar':''" >{{row.birthday}}</div>
                                        <div class="starcontent" v-if="row.show==1">
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==2">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==3">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                    </div>
                                </template>

                                <template slot-scope="{ row, index }" slot="address">
                                    <div class="prset">
                                        <div :class="row.show>0?'bottomstar':''" >{{row.address}}</div>
                                        <div class="starcontent" v-if="row.show==1">
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==2">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==3">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                    </div>
                                </template>

                                <template slot-scope="{ row, index }" slot="action1">
                                    <div class="prset">
                                        <div :class="row.show>0?'bottomstar':''" >{{row.action1}}</div>
                                        <div class="starcontent" v-if="row.show==1">
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==2">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==3">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                    </div>
                                
                                </template>
                                <template slot-scope="{ row, index }" slot="action2">
                                    <div class="prset">
                                        <div :class="row.show>0?'bottomstar':''" >{{row.action2}}</div>
                                        <div class="starcontent" v-if="row.show==1">
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==2">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                        <div class="starcontent" v-if="row.show==3">
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                            <Icon type="ios-star" />
                                        </div>
                                    </div>
                                
                                </template>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row> -->
        </div>
        <div v-if="!enlarge">
            <div class="sceneitemcontent">
                <Row :gutter="50">
                    <Col span="9">
                        <div class="rkpi_index_content height271">
                            <div class="rkpi_index_content_title">
                                <span class="title">总-分行检查结果分析</span>
                                <!-- <span class="title_mini">Correlation Analysis</span> -->
                            </div>
                            <div class="resizeicon">
                                <Icon type="ios-resize" />
                            </div>
                            <div class="rkpi_item">
                                <Table class="facedata-table account-table" :columns="table.columns" :data="table.data">
                                    <template slot-scope="{ row, index }" slot="name">
                                    {{row.name}}
                                    </template>

                                    <template slot-scope="{ row, index }" slot="age">
                                    {{row.age}}
                                    </template>

                                    <template slot-scope="{ row, index }" slot="birthday">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.birthday}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    </template>

                                    <template slot-scope="{ row, index }" slot="address">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.address}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    </template>

                                    <template slot-scope="{ row, index }" slot="action1">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.action1}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    
                                    </template>
                                    <template slot-scope="{ row, index }" slot="action2">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.action2}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    
                                    </template>
                                </Table>
                            </div>
                        </div>
                    </Col>
                    <Col span="15">
                        <div class="rkpi_index_content height271" style="margin-top:0px; padding-top:0px;">
                            <div class="rkpi_index_content height271">
                                <div class="rkpi_index_content_title">
                                    <span class="title">监管与总行检查结果分析</span>
                                    <!-- <span class="title_mini">Correlation Analysis</span> -->
                                </div>
                                <div class="resizeicon">
                                    <Icon type="ios-resize" />
                                </div>
                                <div class="rkpi_item">
                                    <Table class="facedata-table account-table" :columns="table.columns" :data="table.data">
                                    <template slot-scope="{ row, index }" slot="name">
                                    {{row.name}}
                                    </template>

                                    <template slot-scope="{ row, index }" slot="age">
                                    {{row.age}}
                                    </template>

                                    <template slot-scope="{ row, index }" slot="birthday">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.birthday}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    </template>

                                    <template slot-scope="{ row, index }" slot="address">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.address}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    </template>

                                    <template slot-scope="{ row, index }" slot="action1">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.action1}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    
                                    </template>
                                    <template slot-scope="{ row, index }" slot="action2">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.action2}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    
                                    </template>
                                </Table>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div class="sceneitemcontent">
                <Row :gutter="50">
                    <Col span="9">
                        <div class="rkpi_index_content height271">
                            <div class="rkpi_index_content_title">
                                <span class="title">监管与分行检查结果分析</span>
                                <!-- <span class="title_mini">Correlation Analysis</span> -->
                            </div>
                            <div class="resizeicon">
                                <Icon type="ios-resize" />
                            </div>
                            <div class="rkpi_item">
                                <Table class="facedata-table account-table" :columns="table.columns" :data="table.data">
                                    <template slot-scope="{ row, index }" slot="name">
                                    {{row.name}}
                                    </template>

                                    <template slot-scope="{ row, index }" slot="age">
                                    {{row.age}}
                                    </template>

                                    <template slot-scope="{ row, index }" slot="birthday">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.birthday}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    </template>

                                    <template slot-scope="{ row, index }" slot="address">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.address}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    </template>

                                    <template slot-scope="{ row, index }" slot="action1">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.action1}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    
                                    </template>
                                    <template slot-scope="{ row, index }" slot="action2">
                                        <div class="prset">
                                            <div :class="row.show>0?'bottomstar':''" >{{row.action2}}</div>
                                            <div class="starcontent" v-if="row.show==1">
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==2">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                            <div class="starcontent" v-if="row.show==3">
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                                <Icon type="ios-star" />
                                            </div>
                                        </div>
                                    
                                    </template>
                                </Table>
                            </div>
                        </div>
                    </Col>
                    <Col span="15">
                        
                    </Col>
                </Row>
            </div>
            <div class="sceneitemcontent">
                <div class="rkpi_index_content1 height271">
                    <div class="rkpi_index_content_title1">
                        <span class="title">备注</span>
                        <span class="title_mini">Remarks</span>
                    </div>
                    <div class="rkpi_item">
                        <textarea v-model="leadingindescribe" class="textarea-control" placeholder="请输入您的备注信息"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <!-- 错误弹框 -->
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
export default {
    name:"Scenetwo",
    data(){
        return{
            enlarge:false,//表格全屏放大

            errorTips_modal:false,//错误弹框
            err_list: [], //错误信息列表
            leadingindescribe:'',
            table:{
                columns: [
                    {
                        title: ' ',
                        slot: 'name',
                        align:'center'
                    },
                    {
                        title: ' ',
                        slot: 'age',
                        align:'center'
                    },
                    {
                        title: '银行A总行检查结果',
                        slot: 'birthday',
                        align:'center'
                    },
                    {
                        title: '银行C总行检查结果',
                        slot: 'address',
                        align:'center'
                    },
                    {
                        title: '银行G总行检查结果',
                        slot: 'action1',
                        align:'center'
                    },
                    {
                        title: '银行L总行检查结果',
                        slot: 'action2',
                        align:'center'
                    }
                ],
                data: [
                    {
                        name: '分行检查结果',
                        age: '相关性',
                        birthday: '454',
                        address: '454',
                        action1:'454',
                        action2:'454',
                        show:1
                    },
                    {
                        name: '',
                        age: '显著性(双尾)',
                        birthday: '454',
                        address: '454',
                        action1:'454',
                        action2:'454',
                        show:0
                    },
                ],
            },
        }
    },
    created(){
        // this.getdata()
    },
    mounted(){
        
    },
    methods: {
        //获取列表
        getdata() {
            var that = this;
            var query = {
                action: "Service",
                method: "getCurUserMarts",
                data: [],
            };
            that.$http.post(that.PATH.GetMenuList, JSON.stringify(query)).then(
                (success) => {
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
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
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
    background: #f5f5f5;
    .sceneitemcontent{
        margin-bottom: 70px;
    }
    .prset{
        position: relative;
        display: inline-block;
    }
    .rkpi_index_content_title{
        background: #F5F5F5;
        border-radius: 15px;
        position: absolute;
        top:-30px;
        left:38px;
        padding: 20px 20px 20px 20px;
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
    .rkpi_index_content_title1{
        background: #F5F5F5;
        border-radius: 15px;
        position: absolute;
        top:-30px;
        left:38px;
        padding: 20px 20px 20px 20px;
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
    .height271{
        height: 271px;
    }
    .rkpi_index_content1{
        background: rgba(0,0,0,0.05);
        border-radius: 10px;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
        position: relative;
        margin-top:30px;
        padding-top:50px;
        box-sizing: border-box;
        .rkpi_item{
            height: 180px;
            overflow: hidden;
            padding: 0px 30px 0px 30px;
            margin-top: 25px;
            margin-bottom: 50px;
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
    
    .rkpi_index_content{
        background: #FFFFFF;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
        border-radius: 10px;
        position: relative;
        margin-top:30px;
        padding-top:50px;
        box-sizing: border-box;
        padding-bottom: 30px;
        .resizeicon{
            position: absolute;
            top: 10px;
            right: 10px;
        }
        .resizeicon:hover{
            color: #246FEA;
        }
        .rkpi_item{
            height: 180px;
            overflow: scroll;
            padding: 0px 30px 0px 30px;
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
        .ivu-table-cell{
            padding-left: 4px;
            padding-right: 4px;
            overflow:visible !important;
            text-align: center;
        }
        .ivu-table-tbody {
            color: var(--font);
        }
        tr:nth-child(4n+1) td{
            background: rgba(0,0,0,0.05);
        }
        tr:nth-child(4n+2) td{
            background: rgba(0,0,0,0.05);
        }
        tr:nth-child(4n+3) td{
            background: rgba(0,0,0,0.02);
        }
        tr:nth-child(4n+4) td{
            background: rgba(0,0,0,0.02);
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
        .bottomstar{
            position: relative;
            background: #FFFFFF;
            border-radius: 5px;
            color:#246FEA;
            min-width: 12px !important;
            padding:2px 4px;
           
        }
        .starcontent{
            position: absolute;
            left: 0px;
            bottom: -10px;
            width: 100%;
            z-index:9;
            // margin-top: -10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #F79400;
            font-size: 10px;
            .ivu-icon{
                width: 12px;
                margin-right: 4px;
            }
        }
    }
}

</style>

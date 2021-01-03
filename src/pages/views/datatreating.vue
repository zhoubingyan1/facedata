<template>
  <div id="Datatreating">
    <Tabs
      class="tabs-animation"
      :active="tabsvalue"
      :showClose="true"
      :tabsTab="TabList"
      v-on:closeiconClick="closeicon"
      v-on:tabclick="tabclick"
    >
      <TabPane :name="item.name" v-for="(item,index) in TabList" :key="index" :label="item.label">
        <div v-if="item.name=='1'" class="datatreating_firstitem">
          <Row>
            <Col span="6">
              <div class="datatreating_firstitem_left">
                <div class="marginright30">
                  <div class="left_name">数据表</div>
                  <div class="left_tree">
                    <ztree
                      :setting="setting"
                      :nodes="nodes"
                      @onClick="onClick"
                      @onCreated="handleCreated"
                      @onExpand="onExpand"
                    ></ztree>
                  </div>
                </div>
                <div class="marginright30">
                  <div class="left_name">数据包</div>
                  <div class="left_tree">
                    <ztree
                      :setting="setting"
                      :nodes="nodes1"
                      @onClick="onClick"
                      @onCreated="handleCreated"
                    ></ztree>
                  </div>
                </div>
                <div class="marginright30">
                  <div class="left_name">模型库</div>
                  <div class="left_tree">
                    <ztree
                      :setting="setting"
                      :nodes="nodes2"
                      @onClick="onClick"
                      @onCreated="handleCreated"
                    ></ztree>
                  </div>
                </div>
              </div>
            </Col>
            <Col span="1">
              <div class="datatreating_firstitem_middle">
                <div class="widthborder8"></div>
              </div>
            </Col>
            <Col span="17">
              <div class="datatreating_firstitem_right">
                <div class="datatreating_fr_content">
                  <div class="lf">
                    <div class="header_iconconent cursorpointer" @click="choseleadingin">
                      <img class="icon" src="../../assets/images/leadingin.png" />
                      <span class="span">外部数据导入</span>
                    </div>
                    <div class="header_iconconent cursorpointer" @click="addtabs">
                      <img class="icon" src="../../assets/images/createdata.png" />
                      <span class="span">生成数据</span>
                    </div>
                    <div class="header_iconconent cursorpointer" @click="downloaddata">
                      <img class="icon" src="../../assets/images/download.png" />
                      <span class="span">下载模板</span>
                    </div>
                  </div>
                  <div class="rg">
                    <div class="header_iconconent marginright0">
                      <img class="icon" src="../../assets/images/search@2x.png" />
                      <input placeholder="关键字搜索" class="datasearch_input" />
                    </div>
                  </div>
                </div>
                <div class="datatreating_fr_table">
                  <Table
                    class="facedata-table account-table"
                    stripe
                    :columns="table.columns"
                    :data="table.data"
                  ></Table>
                </div>
                <!-- <div class="datatreating_fr_page">
                  <div class="facedata-pagination">
                    <Page :total="table.total" :current="table.page" size="small" @on-change="changePage" :pageSize="table.pagesize"></Page>
                  </div>
                </div>-->
              </div>
            </Col>
          </Row>
        </div>
        <div v-else-if="item.name=='2'">
          <iframe 
            src="http://192.168.1.236:8081/miner/v3/desktopmin/index.html?id='dap.store'"
            class="myiframe"
            frameborder="0"
          ></iframe>
        </div>
        <div v-else>
          <div class="datatreating_fr_table">
            <Table
              class="facedata-table account-table"
              stripe
              :columns="othertable.columns"
              :data="othertable.data"
            ></Table>
          </div>
          <div class="datatreating_fr_page">
            <span class="pageclass" @click="changeothertablefirstPage">首页</span>
            <div class="facedata-pagination">
              <Page
                :total="othertable.total"
                :current="othertable.page"
                size="small"
                @on-change="changeothertablePage"
                :pageSize="othertable.pagesize"
              ></Page>
              
            </div>
            <span class="pageclass" @click="changeothertablelastePage">尾页</span>
          </div>
        </div>
      </TabPane>
    </Tabs>
    <!-- 导入弹窗 start -->
    <Modal v-model="datatreating_modal" width="600" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">外部数据导入</div>
      <div class="datamodal_content">
        <div class="datamodal_item">
          <div class="datamodal_item-title">选择表:</div>
          <div class="datamodal_item_flex" style="position: relative;">
            <div class="choose_biao">
              <div>{{choosename}}</div>
              <img class="icon" src="../../assets/images/add@2x.png" />
            </div>
            <!-- accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"-->
            <!-- application/vnd.ms-excel -->
            <input
              type="file"
              id="resource"
              name="resource" ref="resource"
              
              accept="application/vnd.ms-excel" 
              style="width:100%;height:32px;position:absolute;left:0;top:0;opacity:0;"
              @change="UploadMore"
            />
          </div>
        </div>
        <!-- <div class="datamodal_item">
          <div class="datamodal_item-title">描述:</div>
          <div class="datamodal_item_flex">
            <textarea v-model="leadingindescribe" class="textarea-control" placeholder="非必填"></textarea>
          </div>
        </div> -->
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="lendinginleavefail">退出</button>
        <button class="btn" @click="lendinginsave">下一步</button>
      </div>
    </Modal>
    <!-- 导入的sheet项 -->
    <Modal v-model="datatreatingsheet_modal" width="600" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">请选择需要导入的sheet页</div>
      <div class="datatreting-sheet-content">
        <ztree
          :setting="setting"
          :nodes="nodes3"
          @onClick="onClickLeadinSheet"
          @onCreated="handleCreatedLeadinSheet" 
        ></ztree>
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="datatreatingsheetfail">退出</button>
        <button class="btn" @click="sheetsavebutton">下一步</button>
      </div>
    </Modal>
    <!-- sheet保存 -->
    <Modal v-model="datatreatingsheetsave_modal" width="1000" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">保存</div>
      <Row class="Systemicselection_head_content">
        <Col span="6">
          <ztree
            :setting="setting"
            :nodes="nodes4"
            @onClick="onClick4"
            @onExpand="onExpand4"
            @onCreated="handleCreated4" 
          ></ztree>
        </Col>
        <Col span="1">
        </col>
        <Col span="17">
        <div class="sheetsavetable-content">
            <Table
            class="facedata-table account-table"
            stripe
            :columns="sheettable.columns"
            :data="sheettable.data"
            @on-row-click="clickRow"
          ></Table>
        </div>
        </Col>
      </Row>
      <Row>
        <Col span="23">
          <div class="sheetsaveserchtit-content">
            <span>名称：</span>
            <Input v-model="sheetsavesearchtit"></Input>
          </div>
        </col>
      </Row>
      <div class="datamodal_footer">
        <button class="btn" @click="datatreatingsheetsavefail">退出</button>
        <button class="btn" @click="lendinginsheetsave">下一步</button>
      </div>
    </Modal>
    <!-- 配置第一步 -->
    <Modal v-model="firstsheetsave_modal" width="1000" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">配置第一步</div>
      <Row class="Systemicselection_head_content">
        <Col span="24">
        
          <Form ref="formCustom" :model="formCustom" :label-width="80">
            <FormItem label="是否标题" prop="passwd">
              <RadioGroup v-model="formCustom.hasHeader" style="text-align:left;width:100%;padding-left:20px">
                <Radio label="1">是</Radio>
                <Radio label="0">否</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="列区间">
              <Row>
                <Col span="12">
                    <FormItem label="开始" :label-width="40">
                        <Input type="number" v-model="formCustom.startRow" :max="formCustom.startRow"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="结束" :label-width="40">
                      <Input type="number" v-model="formCustom.endRow" :max="formCustom.endRow"></Input>
                    </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="行区间" prop="age">
              <Row>
                <Col span="12">
                    <FormItem label="开始" :label-width="40">
                        <Input type="number" v-model="formCustom.startCol" :max="formCustom.startCol"></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="结束" :label-width="40">
                      <Input type="number" v-model="formCustom.endCol" :max="formCustom.endCol"></Input>
                    </FormItem>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </Col>
      </Row>
      <div class="datamodal_footer">
        <Button @click="firstsheetsavefail" style="margin-left: 8px;margin-right:10px">退出</Button>
        <Button @click="lendinginsavefirst('formCustom')">下一步</Button>
      </div>
    </Modal>
    <!-- 配置第二步 -->
    <Modal v-model="sencdsheetsave_modal" width="1000" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">配置第二步</div>
      <Row class="sencdsheetsave-modal-content1">
        <Col span="24">
          <div class="secondtable-content">
              <Table
              class="facedata-table account-table"
              stripe
              :columns="sheetseetingtable1.columns"
              :data="sheetseetingtable1.data"
            >
            </Table>
          </div>
        </Col>
      </Row>
      <Row class="sencdsheetsave-modal-content2">
        <Col span="24">
        <div class="secondtable-content">
            <Table
            class="facedata-table account-table"
            stripe
            :columns="sheetseetingtable2.columns"
            :data="sheetseetingtable2.data"
          ></Table>
        </div>
        </Col>
      </Row>
      <div class="datamodal_footer">
        <button class="btn" @click="sencdsheetsavefail">退出</button>
        <button class="btn" @click="secondlendinginsave">下一步</button>
      </div>
    </Modal>
    <!-- 导入成功系统提示弹窗 -->
    <Modal v-model="systemtips_modal" width="600" class-name="vertical-center-modal" :closable="false">
      <div class="layer_header" style="cursor: move;">系统提示</div>
      <div class="systemtips_content">
        <img class="icon" src="../../assets/images/wrong.png" />
        <div class="successtips">导入成功</div>
      </div>
      <div class="datamodal_content">
        <div class="datamodal_item">
          <div class="datamodal_item-title">本次操作说明:</div>
          <div class="datamodal_item_flex">
            <textarea v-model="leadingindescribe" class="textarea-control" placeholder="非必填"></textarea>
          </div>
        </div>
      </div>
      <div class="datamodal_footer1">
        <button class="btn" @click="systemtipsmodalfail">退出</button>
        <button class="btn" @click="systemtipsmodalconfirm">确定</button>
      </div>
    </Modal>
    <!-- 导入检查失败弹窗 -->
    <Modal v-model="doCheckDatasFail_modal" width="600" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">上传日志按钮弹窗</div>
      <div class="leadingInFail_content">
        <div class="datamodal_item-logcontent" v-html="doCheckDatasFaillog"></div>
        
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="downloadFaillog">下载日志文件</button>
      </div>
    </Modal>
    <!-- 导入失败弹窗 -->
    <Modal v-model="leadingInFail_modal" width="600" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">导入失败</div>
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
    <!-- 导入弹窗 end -->
    <!-- 下载模版 -->
    <Modal v-model="downloadTemplate_modal" width="600" class-name="vertical-center-modal">
      <!-- 下载模版 -->
      <div class="layer_header" style="cursor: move;">下载模板</div>
      <div class="datamodal_content">
        <div class="datamodal_item">
          <div class="datamodal_item-title">模板类型:</div>
          <div class="datamodal_item_flex">
            <Select v-model="downloadtemplatetype" clearable class="downloadtemplate_content">
              <Option
                v-for="item in DownloadtemplateList"
                :value="item.fileAllPath"
                :key="item.fileAllPath"
              >{{ item.fileName }}</Option>
            </Select>
          </div>
        </div>
        <!-- <div class="datamodal_item">
          <div class="datamodal_item-title">模板名称:</div>
          <div class="datamodal_item_flex">
            <textarea v-model="templatename" class="textarea-control" placeholder="非必填"></textarea>
          </div>
        </div>-->
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="downloadTemplate_modal=false">退出</button>
        <button class="btn" @click="downloadEXCEL">下载</button>
      </div>
    </Modal>
    <!-- 报错弹框 -->
    <Modal v-model="errorTips_modal" width="600" class-name="vertical-center-modal">
      <div class="errorTips_modal">
        <img class="errorTips_modal_tips" src="../../assets/images/wrong@3x.png" alt />

        <div class="forget_tips_text" v-for="(node,index) in err_list" :key="index">{{node}}</div>
      </div>
    </Modal>
    <!-- 删除确认弹框 -->
    <Modal :mask-closable="true" v-model="delModal" width="360" class-name="mr-del-modal">
      <div style="text-align:center;margin-bottom: 30px;font-size: 14px">确认删除该条数据</div>
      <div class="facedata-btn-box">
        <div
          class="facedata-btn-confirm"
          style="margin-right: 20px"
          @click="datatreatingtableDel"
        >删除</div>
        <div class="facedata-btn-cancel" @click="delModal=false">取消</div>
      </div>
    </Modal>
  </div>
</template>
<script>
import linetree from "../components/linetree/linetree";
import { Tabs, TabPane } from "../components/tabs/index";
import ztree from "../components/ztree/ztree";
let Base64 = require("js-base64").Base64;

const simpleData = [
  { id: 1, pid: 0, name: "随意勾选 1", open: false },
  { id: 11, pid: 1, name: "随意勾选 1-1", open: false },
  { id: 111, pid: 11, name: "随意勾选 1-1-1", open: false },
  { id: 112, pid: 11, open: false, name: "随意勾选 1-1-2" },
  { id: 12, pid: 1, name: "随意勾选 1-2", open: false },
  { id: 121, pid: 12, name: "随意勾选 1-2-1", open: false },
  { id: 122, pid: 12, name: "随意勾选 1-2-2", open: false },
  { id: 2, pid: 0, name: "随意勾选 2-1", open: false },
  { id: 21, pid: 2, name: "随意勾选 2-1", open: false },
  { id: 22, pid: 2, name: "随意勾选 2-2", open: false },
  { id: 221, pid: 22, name: "随意勾选 2-2-1", checked: true, open: false },
  { id: 222, pid: 22, name: "随意勾选 2-2-2", open: false },
  { id: 23, pid: 2, name: "随意勾选 2-3", open: false },
];

export default {
  name: "Datatreating",
  components: {
    linetree,
    Tabs,
    TabPane,
    ztree,
  },
  data() {
    return {
      delModal: false, // 删除确认弹框
      delID: "",

      currenttableid: "",

      ztreeObj: null,
      ztreeObj4: null, //导入保存左边的树
      setting: {
        async: {
          autoParam: [],
          enable: true,
        },
        data: {
          simpleData: {
            enable: true,
            pIdKey: "pid",
          },
        },
        view: {
          dblClickExpand: false, //屏蔽掉双击事件
          showIcon: true,
        },
      },

      nodes: [], //数据表 树
      nodes1: [], //数据包 树
      nodes2: [], //模型库 树
      treenodeID: null, //记录数据表树的id

      nodes3: [],//导入的sheet项
      nodes4: [],//sheet保存的树

      errorTips_modal: false, //错误弹框
      err_list: [], //错误信息列表

      datatreating_modal: false, //导入弹窗
      datatreatingsheet_modal: false, //导入sheet页
      ztreeUploadingObj: null,
      leadinUploadingid: "", //上传文件后返回的文件id
      leadinUploadingname:'',//上传文件后返回的文件名称
      unloadFile: null, //上传的文件
      leadinUploadingsheets: [], //上传文件后的文件sheets
      isClickSheets: false, //是否确定过sheet
      sheetsavesearchtit: "", //保存 搜索框名称
      currentsheettreeId:'',//保存弹框左边树id
      currentsheetindex:'',//
      choosesheetTreeNode:{},//请选择需要导入的sheet节点
      datatreatingsheetsave_modal: false, //保存sheet页
      firstsheetsave_modal: false, //配置第一步弹框
      sencdsheetsave_modal: false, //配置第二步弹框
      doCheckDatasFail_modal:false,//导入检查失败
      doCheckDatasFaillog:'',//导入检查失败日志
      docheckResultFileId:'',//导入检查失败的checkResultFileId
      formCustom: {
        hasHeader: "1",
        startCol: "",
        startRow: "",
        endCol:"",
        endRow: "",
      },
      currentfetchData:{
        "dir":3, //3保存弹框左边目录树目录ID
        "tableId":null, //4写死
        "tableDesc":"", //5input值名称
        "override":null, //6写死
        "fileColumns":[], //7文件列信息
        "hasHeader":true,//8是否表头
        "sheetIndexes":[],//9Sheet页索引
        "startRow":"",//10行区间开始
        "endRow":"",//11行区间结束
        "startCol":"",//12列区间开始
        "endCol":"",//13列区间结束
        "curSheetIndex":0,//14固定0
        "type":"excel", //15类型excel(默认)
        "fileId":0, //16上传文件返回的fileID
        "fileName":"", //17文件名称
        "templateName":"",  //18模板名称，默认空
        "hasTemplate":false,  //19是否模板，默认false
        "templateId":null,  //20模板ID
        "fileInfo":{
          "fileName":"", //21文件名称
          "sheets":[], //22文件Sheet信息
          "type":"XLSX" //23文件类型
        },
        "logIds":null, //26null
        "id":0//27写死
      },
      borrowloadlist:[
        {value:"INT",},
        {value:"NUMERIC"},
        {value:"DOUBLE"},
        {value:"DATE"},
        {value:"TIME"},
        {value:"TIMESTAMP"},
        {value:"VARCHAR"},
        {value:"NVARCHAR"},
      ],
      doImportresult:'',//配置第二部确定接口返回的值

      choosename: "", //导入上传文件
      leadingindescribe: "", //导入描述

      leadingInFail_modal: false, //导入失败弹窗
      leadinginfailinfo:
        "以下字段为空或与模板样式不符，以下字段为空或与模板样式不", //导入失败的文本框

      downloadTemplate_modal: false, //下载模版弹窗
      // templatename: "2020914KPI2101", //模版名称
      DownloadtemplateList: [],//下载模版列表
      downloadtemplatetype: "", //下载模版类型选择的id

      systemtips_modal: false, //系统提示弹窗

      tabsvalue: "1", //tab选项卡的选定
      tabIndex: 1,
      TabList: [
        {
          label: "数据预处理",
          name: "1",
          index: "1",
          paramId: "",
        },
      ],//数据处理
      table: {
        page: 1,
        pagesize: 400,
        total: 0,
        columns: [
          {
            title: "名称",
            key: "name",
            width: "200",
            align: "center",
          },
          {
            title: "拥有者",
            key: "ownerName",
            align: "center",
          },
          {
            title: "来源",
            key: "source",
            align: "center",
          },
          {
            title: "更新时间",
            key: "createTime",
            align: "center",
          },
          {
            title: "操作",
            align: "center",
            render: (h, params) => {
              let result = "0";
              let arr = [];
              arr.push(
                  h('Tooltip', {
                      props: {
                          placement: 'top',
                          transfer: true
                      }
                  }, [ 
                    h("i", {
                  attrs: {
                    class: "iconfont icon-edit",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.addTab(params.row);
                    },
                  },
                }), h('span', {
                      slot: 'content',
                      style: {
                          whiteSpace: 'normal'
                      }
                  }, '修改')
                  ])
              )
              arr.push(
                    h('Tooltip', {
                        props: {
                            placement: 'top',
                            transfer: true
                        }
                    }, [ h("i", {
                  attrs: {
                    class: "iconfont icon-delete",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                      //  this.datatreatingtableDel(params.row);
                    },
                  },
                }), h('span', {
                        slot: 'content',
                        style: {
                            whiteSpace: 'normal'
                        }
                    }, '删除')
                    ])
                )
              return h('div', arr);

              // return h("div", [
              //   h("i", {
              //     attrs: {
              //       class: "iconfont icon-edit",
              //     },
              //     style: {},
              //     on: {
              //       click: () => {
              //         this.addTab(params.row);
              //       },
              //     },
              //   }),

              //   h("i", {
              //     attrs: {
              //       class: "iconfont icon-delete",
              //     },
              //     style: {},
              //     on: {
              //       click: () => {
              //         this.delID = params.row.id;
              //         this.delModal = true;
              //         //  this.datatreatingtableDel(params.row);
              //       },
              //     },
              //   }),
              // ]);
            },
          },
        ],
        data: [],
      },
      othertablelistdata: null, //除数据处理
      othertable: {
        page: 1,
        pagesize: 10,
        total: 0,
        lastpage:1,
        columns: [],
        data: [],
      },
      sheettable: {
        columns: [
          {
            title: " ",
            type: "index",
            align: "center",
            
          },
          {
            title: "名称",
            key: "name",
            align: "center",
          },
          {
            title: "拥有者",
            key: "ownerName",
            align: "center",
          },
          {
            title: "修改日期",
            key: "createTime",
            align: "center",
          },
        ],
        data: [],
      },//sheet保存右边的表格
      sheetseetingtable1: {
        columns: [
          {
            title: '字段索引',
            key: 'fieldDesc',
            align: "center",
          },
          {
            title: '字段名',
            key: 'name',
            align: "center",
            render: (h, params) => {
                // isclickname
                let isclickname =true
              if (params.row.isclickname) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      attrs: {
                        id:"tableInput"+params.row._index,
                      },
                      props: {
                          value: params.row.name,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.sheetseetingtable1.data[params.row._index].name = event.target.value
                               this.sheetseetingtable1.data[params.row._index].isclickname=false
                             
                          }
                      }
                  }),
                ])
              } else  {
                  return h("div", [
                    h(
                      "span",
                      {
                        attrs: {
                          class: "cursor",
                        },
                        on: {
                          click: () => {
                            setTimeout( ()=> {
                              this.$nextTick(()=>{
                                document.getElementById('tableInput'+params.row._index).children[0].children[1].focus();
                              })
                            },300)
                           this.sheetseetingtable1.data[params.row._index].isclickname=true
                          },
                        },
                      },
                      params.row.name
                    ),
                  ]);
              }
            }
          },
          {
            title: '字段描述',
            key: 'desc',
            align: "center",
            render: (h, params) => {
              // isclickdesc
              if (params.row.isclickdesc) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      attrs: {
                        id:"onetableInput"+params.row._index,
                      },
                      props: {
                          value: params.row.desc,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.sheetseetingtable1.data[params.row._index].desc = event.target.value
                               this.sheetseetingtable1.data[params.row._index].isclickdesc=false
                              //  this.currentfetchData.fileColumns[params.row._index]=this.sheetseetingtable1.data
                          }
                      }
                  }),
                ])
              } else  {
                  return h("div", [
                    h(
                      "span",
                      {
                        attrs: {
                          class: "cursor",
                        },
                        on: {
                          click: () => {
                            setTimeout( ()=> {
                              this.$nextTick(()=>{
                                document.getElementById('onetableInput'+params.row._index).children[0].children[1].focus();
                              })
                            },300)
                            this.sheetseetingtable1.data[params.row._index].isclickdesc=true
                          },
                        },
                      },
                      params.row.desc
                    ),
                  ]);
              }
                
            }
          },
          {
            title: '字段类型',
            key: 'type',
            align: "center",
            render: (h, params) => {
              var that = this;
              if (params.row.isclicktype) {      
                return h("div", [
                  h(
                      "Select", {
                          props: {
                              value: params.row.type,//默认值
                                transfer:true,
                          },
                          on: {
                              'on-change': (event) => {
                               
                                  that.sheetseetingtable1.data[params.row._index].type = event;//datalist为table中的数据集
                                  that.sheetseetingtable1.data[params.row._index].isclicktype=false
                                
                              }
                          },
                      },
                      that.borrowloadlist.map(function (type) {//borrowloadlist为select数据源
                          return h('Option', {
                              props: {
                                  value: type.value//绑定的值
                              }
                          }, type.value);//显示的值
                      })

                  )

                ]);
              } else  {
                  return h("div", [
                    h(
                      "span",
                      {
                        attrs: {
                          class: "cursor",
                        },
                        on: {
                          click: () => {
                            that.sheetseetingtable1.data[params.row._index].isclicktype=true
                          },
                        },
                      },
                      params.row.type
                    ),
                  ]);
              }
            }
          },
          {
            title: '字段长度',
            key: 'length',
            align: "center",
            render: (h, params) => {
              // isclicklength
              if (params.row.isclicklength) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      attrs: {
                        id:"twotableInput"+params.row._index,
                      },
                      props: {
                          value: params.row.length,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.sheetseetingtable1.data[params.row._index].length = event.target.value
                              this.sheetseetingtable1.data[params.row._index].isclicklength=false
                              // this.currentfetchData.fileColumns[params.row._index]=this.sheetseetingtable1.data
                          }
                      }
                  }),
                ])
              } else  {
                  return h("div", [
                    h(
                      "span",
                      {
                        attrs: {
                          class: "cursor",
                        },
                        on: {
                          click: () => {
                            setTimeout( ()=> {
                              this.$nextTick(()=>{
                                document.getElementById('twotableInput'+params.row._index).children[0].children[1].focus();
                              })
                            },300)
                            this.sheetseetingtable1.data[params.row._index].isclicklength=true
                          },
                        },
                      },
                      params.row.length
                    ),
                  ]);
              }
            }
          },
          {
            title: '字段精度',
            key: 'scale',
            align: "center",
            render: (h, params) => {
              // isclickscale
              if (params.row.isclickscale) {      
                  return h('div', [
                    h('Input', {
                        style: {
                            padding: '8px'
                        },
                        attrs: {
                          id:"threetableInput"+params.row._index,
                        },
                        props: {
                            value: params.row.scale,//默认值
                            autofocus: true,
                        },
                        on: {
                            'on-blur': (event) => {
                                this.sheetseetingtable1.data[params.row._index].scale = event.target.value
                                this.sheetseetingtable1.data[params.row._index].isclickscale=false
                                // this.currentfetchData.fileColumns[params.row._index]=this.sheetseetingtable1.data
                            }
                        }
                    }),
                ])
                } else  {
                    return h("div", [
                      h(
                        "span",
                        {
                          attrs: {
                            class: "cursor",
                          },
                          on: {
                            click: () => {
                              setTimeout( ()=> {
                                  this.$nextTick(()=>{
                                document.getElementById('threetableInput'+params.row._index).children[0].children[1].focus();
                              })
                            },300)
                              this.sheetseetingtable1.data[params.row._index].isclickscale=true
                              // this.currentfetchData.fileColumns[params.row._index]=this.sheetseetingtable1.data
                            },
                          },
                        },
                        params.row.scale
                      ),
                    ]);
                }

                
            }
          },
          {
            title: '固定值',
            key: 'value',
            align: "center",
            render: (h, params) => {
              // isclickvalue
              let that =this
              if (params.row.isclickvalue) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      attrs: {
                          id:"fourtableInput"+params.row._index,
                        },
                      props: {
                          value: params.row.value,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              that.sheetseetingtable1.data[params.row._index].value = event.target.value
                              that.sheetseetingtable1.data[params.row._index].isclickvalue=false
                          }
                      }
                  }),
              ])
              } else  {
                  return h("div", [
                    h(
                      "span",
                      {
                        attrs: {
                          class: "cursor",
                        },
                        on: {
                          click: () => {
                            setTimeout( ()=> {
                                  this.$nextTick(()=>{
                                document.getElementById('fourtableInput'+params.row._index).children[0].children[1].focus();
                              })
                            },300)
                           that.sheetseetingtable1.data[params.row._index].isclickvalue=true
                          },
                        },
                      },
                      params.row.value
                    ),
                  ]);
              }
            }
          
          },
        ],
        data: [],
      },//配置第二步的上面表格
      sheetseetingtable2: {
        columns: [],
        data: [],
      },//配置第二步的下面表格
      
    };
  },
  computed: {

  },
  created() {
    //获取根目录
    this.getdata(0);
  },
  mounted() {},
  methods: {
    //获取数据处理左边的树
    getdata(id) {
      var that = this;
      var query = {
        action: "Service",
        method: "getExplorerChildren",
        data: [id],
      };
      let newResult = new Array();
      that.$http
        .post(that.PATH.getExplorerChildren, JSON.stringify(query))
        .then(
          (success) => {
            newResult = success.data.result;
            // newResult=[]
            if (newResult.length > 0) {
              newResult.forEach((v, i) => {
                newResult[i].open = false;
                if (newResult[i].right - newResult[i].left != 1) {
                  newResult[i].isParent = true;
                  newResult[i].children = [];
                }
                if (newResult[i].right - newResult[i].left == 1) {
                  newResult[i].isParent = false;
                }
              });
            }
            this.nodes = newResult;
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    datatreatingtableDel() {
      var that = this;
      var query = {
        action: "Service",
        method: "delete",
        data: [that.delID],
      };
      let newResult = new Array();
      that.$http.post(that.PATH.DATATREATINGDELETE, JSON.stringify(query)).then(
        (success) => {
          that.delModal = false;
          that.$Message.success({
            content: "删除成功",
            duration: 1,
          });
          that.ztreeObj.getNodeByParam("id", that.treenodeID);
          that.gettable(
            that.currenttableid,
            that.table.page,
            that.table.pagesize
          );
        },
        (error) => {
          that.$Message.error({
            content: "删除失败,请联系管理员",
            duration: 1,
          });
          // that.err_list = ["登录异常", "请联系管理员"];
          // that.errorTips_modal = true;
        }
      );
    },
    gettable(id, page, pagesize) {
      var that = this;
      var query = {
        action: "Service",
        method: "getByCatalog",
        data: [id, page, pagesize],
      };
      let newtabledata = [];
      let datavbmodaltypelist=[]
      let datasdmodaltypelist=[]
      let datascmodaltypelist=[]
      let datasemodaltypelist=[]
      let datascdemodaltypelist=[]
      let datavkpmodaltypelist=[]
      let modaltype = new Object();

      // that.table.data = newtabledata.result.data;
      //     that.table.total = Number(newtabledata.result.count);
      that.$Spin.show();
      that.$http.post(that.PATH.getByCatalog, JSON.stringify(query)).then(
        (success) => {
          
          that.$Spin.hide();
          newtabledata = success.data.result.data;
          if (newtabledata.length > 0) {
            newtabledata.forEach((v, i) => {
              newtabledata[i].createTime = that.getNweDate(
                v.createTime,
                "year"
              );
            });
          }
          // newtabledata=success.data.result.data
          that.table.data = newtabledata;
          // that.table.total = Number(success.data.result.count);
          //储存localstore
          if (newtabledata.length > 0) {
            //   因子分析datavb入库------RKPI综合得分
            //     因子分析datasd入库------总行
            //     因子分析datasc入库------分行
            //     因子分析datase入库------监管
            //     因子分析datascde入库------综合
            //     因子分析datavkpi入库------rkpi和审核发现
            newtabledata.forEach((v, i) => {
              if (v.name.indexOf("因子分析datavb入库")!= -1&&v.name.indexOf("_因子载荷")== -1) {
                // modaltype[v.name] = v.param;
                datavbmodaltypelist.push(v)
              } else if (v.name.indexOf("因子分析datasd入库") != -1&&v.name.indexOf("_因子载荷")== -1){
                // modaltype[v.name] = v.param;
                datasdmodaltypelist.push(v)
              } else if (v.name.indexOf("因子分析datasc入库") != -1&&v.name.indexOf("_因子载荷")== -1){
                // modaltype[v.name] = v.param;
                datascmodaltypelist.push(v)
              } else if (v.name.indexOf("因子分析datase入库") != -1&&v.name.indexOf("_因子载荷")== -1){
                // modaltype[v.name] = v.param;
                datasemodaltypelist.push(v)
              } else if (v.name.indexOf("因子分析datascde入库") != -1&&v.name.indexOf("_因子载荷")== -1){
                // modaltype[v.name] = v.param;
                datascdemodaltypelist.push(v)
              } else if (v.name.indexOf("因子分析datavkpi入库") != -1&&v.name.indexOf("_因子载荷")== -1){
                // modaltype[v.name] = v.param;
                datavkpmodaltypelist.push(v)
              }
            });
            if(datavbmodaltypelist.length>0){
              that.sortByKey(datavbmodaltypelist,'createTime')
              modaltype[datavbmodaltypelist[0].name]=datavbmodaltypelist[0].param
            }
            if(datasdmodaltypelist.length>0){
              that.sortByKey(datasdmodaltypelist,'createTime')
              modaltype[datasdmodaltypelist[0].name]=datasdmodaltypelist[0].param
            }
            if(datascmodaltypelist.length>0){
              that.sortByKey(datascmodaltypelist,'createTime')
              modaltype[datascmodaltypelist[0].name]=datascmodaltypelist[0].param
            }
            if(datasemodaltypelist.length>0){
              that.sortByKey(datasemodaltypelist,'createTime')
              modaltype[datasemodaltypelist[0].name]=datasemodaltypelist[0].param
            }
            if(datascdemodaltypelist.length>0){
              that.sortByKey(datascdemodaltypelist,'createTime')
              modaltype[datascdemodaltypelist[0].name]=datascdemodaltypelist[0].param
            }
            if(datavkpmodaltypelist.length>0){
              that.sortByKey(datavkpmodaltypelist,'createTime')
              modaltype[datavkpmodaltypelist[0].name]=datavkpmodaltypelist[0].param
            }

            localStorage.setItem("modaltype", JSON.stringify(modaltype));
          }
        },
        (error) => {
          that.$Spin.hide();
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    //数组对象方法排序:升序
    sortByKey(array, key) {
      return array.sort(function (a, b) {
        var value1 = a[key];
        var value2 = b[key];
        return value1 - value2;
      });
    },
    onExpand: function (evt, treeId, treeNode) {
      // 点击事件
      if (treeNode.open) {
        this.treeClick(evt, treeId, treeNode);
      }
    },
    onClick: function (evt, treeId, treeNode) {
      // 点击事件
      if (!treeNode.open) {
        this.treeClick(evt, treeId, treeNode);
      }
    },
    treeClick: function (evt, treeId, treeNode) {
      // 点击事件
      this.treenodeID = treeNode.id;
      const parentZNode = this.ztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      const childNodes = this.ztreeObj.transformToArray(treeNode); //获取子节点集合
      var that = this;
      var query = {
        action: "Service",
        method: "getExplorerChildren",
        data: [treeNode.id],
      };
      if (treeNode.right - treeNode.left == 1) {
        //文件,获取右边的表格
        // this.gettable(treeNode.id)
        this.table.page = 1;
        this.currenttableid = treeNode.id;
        this.gettable(treeNode.id, this.table.page, this.table.pagesize);
      } else {
        //文件夹
        treeNode.children = [];
        that.gettable(treeNode.id, that.table.page, that.table.pagesize);
        if (treeNode.isParent) {
          that.$http
            .post(that.PATH.getExplorerChildren, JSON.stringify(query))
            .then(
              (success) => {
                const childrenData = eval(success.data.result);
                //判断子节点是否包含子元素
                // for(var i in childrenData){
                //     if(childrenData[i].isContainSon === 1){
                //         childrenData[i].isParent = true;
                //     }
                // };
                childrenData.forEach((v, i) => {
                  childrenData[i].open = false;
                  if (childrenData[i].right - childrenData[i].left != 1) {
                    childrenData[i].isParent = true;
                    childrenData[i].children = [];
                  }
                  if (childrenData[i].right - childrenData[i].left == 1) {
                    childrenData[i].isParent = false;
                  }
                });
                this.ztreeObj.refresh();
                this.ztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
                that.ztreeObj.selectNode(parentZNode, true);
              },
              (error) => {
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
              }
            );
        }
      }
    },
    //分页切换
    changePage(page) {
      this.table.page = page;
      this.gettable(this.currenttableid, this.table.page, this.table.pagesize);
    },
    //tab上的分页切换
    changeothertablePage(page) {
      this.othertable.page = page;
      this.getTableData(this.othertable.columns, this.othertablelistdata.param);
    },
    //切换首页
    changeothertablefirstPage(){
      this.othertable.page = 1;
      this.getTableData(this.othertable.columns, this.othertablelistdata.param);
    },
    //切换尾页
    changeothertablelastePage(){
      this.othertable.page = this.othertable.lastpage
      this.getTableData(this.othertable.columns, this.othertablelistdata.param);
    },
    // 选择导入
    choseleadingin() {
      this.resetLeadinData()
      this.datatreating_modal = true;
      this.unloadFile = null;
      this.choosename = "";
    },
    //导入保存
    lendinginsave() {
      // this.systemtips_modal = true;
      let that = this;
      if (that.choosename != "") {
        var formData = new FormData(); // FormData 对象
        formData.append("file", that.unloadFile[0], that.unloadFile[0].name);
        that.$http
          .post("/miner/v3/sys/explorer/dfi.upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((success) => {
            let res = success.data;
            that.leadinUploadingid = res.fileId;
            that.leadinUploadingname = res.currentFileName;
            that.datatreatingsheet_modal = true;
            that.datatreating_modal = false;
            that.isClickSheets = false;
            that.unloadFile = null;
            that.choosename = "";
            //获取树的列表
            that.getLeadInLIST(that.leadinUploadingid);


            that.currentfetchData.fileId=res.fileId
            
            
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        this.$Message.error({
          content: "请上传文件",
          duration: 1,
        });
      }
    },
    //上传excel
    UploadMore(e) {
      let files = e.target.files || e.dataTransfer.files;
      var editorupload = document.getElementById("resource"); //根据id选择器选中对象
      editorupload.type = "text";
      this.unloadFile = files;
      this.choosename = files[0].name;
      editorupload.type = "file";
    },
    getLeadInLIST(fileId) {
      var that = this;
      var query = {
        action: "Service",
        method: "getExcelInfo",
        data: [fileId],
      };
      let newResult = new Array();
      that.$http
        .post(that.PATH.EXPLORERGETEXCELINFO, JSON.stringify(query))
        .then(
          (success) => {
            let res = success.data.result;
            // {"fileName":"附件1-经营&资产质量类指标.xlsx","sheets":[{"index":1,"name":"Sheet1"}],"type":"XLSX"}
            res.open = true;
            res.name = res.fileName;
            res.children = res.sheets;
            that.leadinUploadingsheets = res.sheets; //上传文件后的文件sheets
            newResult.push(res);
            that.nodes3 = newResult;
            // this.nodes = newResult;
            that.currentfetchData.fileName=res.fileName
            that.currentfetchData.fileInfo.fileName = res.fileName
            that.currentfetchData.fileInfo.sheets = res.sheets
            that.currentfetchData.fileInfo.fileName = res.fileName
            
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //导入sheet项
    sheetsavebutton() {
      if (!this.isClickSheets) {
        this.$Message.error({
          content: "请选择sheet",
          duration: 1,
        });
      } else {
        this.datatreatingsheetsave_modal = true;
        this.datatreatingsheet_modal = false;
        this.RequestcheckSheets(
          this.leadinUploadingid,
          this.leadinUploadingsheets
        );
        this.RequestGetSaveTreeList();
      }
    },
    RequestcheckSheets(fileId, sheets) {
      var that = this;
      var query = {
        action: "Service",
        method: "checkSheets",
        data: [fileId, sheets],
      };
      let newResult = new Array();
      that.$http
        .post(that.PATH.EXPLORERCHECKSHEETS, JSON.stringify(query))
        .then(
          (success) => {},
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    RequestGetSaveTreeList() {
      var that = this;
      var query = {
        action: "Service",
        method: "getChildrenBySource",
        data: ["EXPLORER", 0],
      };
      that.$http
        .post(that.PATH.EXPLORERGETCHILDRENBYSOURCELIST, JSON.stringify(query))
        .then(
          (success) => {
            let res = success.data.result;

            if (res.length > 0) {
              res.forEach((v, i) => {
                res[i].open = false;
                if (res[i].right - res[i].left != 1) {
                  res[i].isParent = true;
                  res[i].children = [];
                }
                if (res[i].right - res[i].left == 1) {
                  res[i].isParent = false;
                }
              });
            }
            that.nodes4 = res;
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    clickRow(row,index){
      this.sheetsavesearchtit=row.name
    },
    //sheet保存
    lendinginsheetsave() {
       //alert(this.sheetsavesearchtit);
      //Anne周
      //调用isNameExit 接口  data：[this.sheetsavesearchtit,所属目录id]
      if(this.sheetsavesearchtit==''){
        this.$Message.error({
          content: "名称必填",
          duration: 1,
        });
        return
      }else{
        var that = this;
        that.currentfetchData.tableDesc= that.sheetsavesearchtit
        var query = {
          action: "Service",
          method: "isNameExit",
          data: [that.sheetsavesearchtit, that.currentsheettreeId],
        };
        that.$http
          .post(that.PATH.EXPLORERisNameExit, JSON.stringify(query))
          .then(
            (success) => {

              
            },
            (error) => {
              that.err_list = ["登录异常", "请联系管理员"];
              that.errorTips_modal = true;
            }
          );
      
        that.firstsheetsave_modal = true;
        that.datatreatingsheetsave_modal = false;
        // that.RequestRecommend()
        that.RequestgetDefaultTemplet()
      }
      
    },
    //调用recommend 接口   data：["监管检查发现 - 正确.xls"] //上传文件名
    RequestRecommend(){
      
      var that = this;
      var query = {
        action: "Service",
        method: "EXPLORERRECOMMEND",
        data: [that.leadinUploadingname],
      };
      that.$http
        .post(that.PATH.EXPLORERisNameExit, JSON.stringify(query))
        .then(
          (success) => {

            
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
      
    },
    // //调用 getDefaultTemplet 接口  data:[1608437202000019, 1]   //160开头的是 上传时返回的文件id ，1 固定
    RequestgetDefaultTemplet(){
      var that = this;
      var query = {
        action: "Service",
        method: "getDefaultTemplet",
        data: [that.leadinUploadingid, that.choosesheetTreeNode.index],
      };
      that.$http
        .post(that.PATH.EXPLORERGETDEFAULTemplet, JSON.stringify(query))
        .then(
          (success) => {
            let res=success.data.result
            if(res.hasHeader==true){
              that.formCustom.hasHeader ="1"
            }else{
              that.formCustom.hasHeader ="0"
            }
            that.formCustom.startCol=res.startCol
            if(res.fileColumns.length>0){
              res.fileColumns.forEach((v,i)=>{
                v.value='  '
              })
            }
            that.formCustom.endCol =res.endCol
            that.formCustom.startRow =res.startRow
            that.formCustom.endRow =res.endRow
            let newfileColums = res.fileColumns
            if(newfileColums.length>0){
              newfileColums.forEach((v,i)=>{
                
                newfileColums[i].isclickvalue= false
                newfileColums[i].isclickscale= false
                newfileColums[i].isclicklength= false
                newfileColums[i].isclicktype= false
                newfileColums[i].isclickdesc= false
                newfileColums[i].isclickname= false
              })
            }
            that.sheetseetingtable1.data=newfileColums

            that.currentfetchData.fileColumns = res.fileColumns
            that.currentfetchData.startRow = res.startRow
            that.currentfetchData.endRow = res.endRow
            that.currentfetchData.startCol = res.startCol
            that.currentfetchData.endCol = res.endCol
            that.currentfetchData.hasHeader = res.hasHeader
          
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //配置第二步确认
    secondlendinginsave() {
      var that = this;
      that.currentfetchData.fileColumns=that.sheetseetingtable1.data
      
      var query = {
        action: "Service",
        method: "doCheckDatas",
        data: [that.leadinUploadingid,that.currentfetchData],
      };
      that.$http
        .post(that.PATH.DOCHECKDATTAS, JSON.stringify(query))
        .then(
          (success) => {
            let res=success.data.result
            if(res.length>0){
              if(res[0].checkResultFileId>0){
                that.docheckResultFileId = res[0].checkResultFileId
                that.doCheckDatasFaillog = res[0].checkResult
                that.doCheckDatasFail_modal=true
                that.sencdsheetsave_modal=false
              }else{
                that.secondlendinginsavedoCheckDatas()
              }
            }
            // that.doImportresult=res
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
        // that.ReupdateRemark()
    
    },
    //下载日志文件
    downloadFaillog(){
       let that = this;
            let fileName=encodeURI('导入日志');
      // let url =
      //   "http://192.168.1.236:8081/miner/v3/sys/explorer/document.kbsdownload?fileId="+that.docheckResultFileId +"&fileName=" +
      //   fileName+'.csv';
      
        let url =
        "http://192.168.1.236:8081/miner/sys/explorer/attachement.attachment.down?fileId="+that.docheckResultFileId +"&fileName=" +
        fileName+'.csv';
      let a = document.createElement("a");
      a.id = "temp";
      document.body.appendChild(a);
      a.addEventListener("click", function () {
        window.open(url, '',"");
        // encodeURI(
      });
      a.click();
      document.body.removeChild(a);
    },
    //配置第二步确认接口返回正确的
    secondlendinginsavedoCheckDatas(){
      var that = this;
      that.currentfetchData.fileColumns=that.sheetseetingtable1.data
      var query = {
        action: "Service",
        method: "doImport",
        data: [that.leadinUploadingid,that.currentfetchData],
      };
      that.$http
        .post(that.PATH.EXPLORERDOAUTOIMPORT, JSON.stringify(query))
        .then(
          (success) => {
            let res=success.data.result
            if(success.data.state=='1'){
              that.$Message.error({
                content: success.data.result,
                duration: 1,
              });
            }else if(success.data.state=='0'){
              that.doImportresult=res
              that.systemtips_modal = true;
              that.sencdsheetsave_modal = false; //配置第一步弹框消失
            }
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
        // that.ReupdateRemark()
    
    },
    //系统提示确定
    systemtipsmodalconfirm(){
      let that =this
      that.ReupdateRemark(that.doImportresult)
    },
    ReupdateRemark(id){
      this.systemtips_modal = true;
      this.sencdsheetsave_modal = false; //配置第一步弹框消失
      var that = this;
      
      var query = {
        action: "Service",
        method: "updateRemark",
        data: [id,that.leadingindescribe],
      };
      that.$http
        .post(that.PATH.LEADINIMPORTLOG, JSON.stringify(query))
        .then(
          (success) => {
            let res=success.data.result
            that.systemtips_modal=false
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //导入推出
    lendinginleavefail() {
      // this.leadingInFail_modal = true;
      this.resetLeadinData()
    },
    //导入sheet项退出
    datatreatingsheetfail() {
      // this.datatreatingsheet_modal = true;
      // this.isClickSheets = false;
      this.resetLeadinData()
    },
    //sheet保存弹框退出
    datatreatingsheetsavefail() {
      // this.datatreatingsheetsave_modal = false;
      this.resetLeadinData()
    },
    //配置第一步退出
    firstsheetsavefail() {
      this.firstsheetsave_modal = false;
      this.resetLeadinData()
    },
    //配置第二步退出
    sencdsheetsavefail() {
      this.sencdsheetsave_modal = false;
      this.resetLeadinData()
    },
    //系统提示
    systemtipsmodalfail(){
      this.systemtips_modal = false;
      this.resetLeadinData()
    },
    //重置掉导入弹框的数据
    resetLeadinData(){
      let that=this
      that.nodes3=[]//导入的sheet项
      that.nodes4=[]//sheet保存的树
      that.systemtips_modal=false //系统提示弹窗
      that.leadingindescribe="" //导入描述
      that.sheetseetingtable2.data=[] //配置第二步的下面表格
      that.sheetseetingtable2.columns=[]//配置第二步的下面表格
      that.sheetseetingtable1.data=[] //配置第二步的上面表格
      that.sheettable.data=[] //sheet保存右边的表格
      that.datatreating_modal=false  //导入弹窗
      that.datatreatingsheet_modal=false  //导入sheet页
      that.ztreeUploadingObj=null 
      that.leadinUploadingid=""  //上传文件后返回的文件id
      that.leadinUploadingname='' //上传文件后返回的文件名称
      that.unloadFile=null  //上传的文件
      that.leadinUploadingsheets=[]  //上传文件后的文件sheets
      that.isClickSheets=false  //是否确定过sheet
      that.sheetsavesearchtit=""  //保存 搜索框名称
      that.currentsheettreeId='' //保存弹框左边树id
      that.currentsheetindex='' //
      that.choosesheetTreeNode={} //请选择需要导入的sheet节点
      that.datatreatingsheetsave_modal=false  //保存sheet页
      that.firstsheetsave_modal=false  //配置第一步弹框
      that.sencdsheetsave_modal= false  //配置第二步弹框
      that.formCustom= {
        hasHeader: "1",
        startCol: "",
        startRow: "",
        endCol:"",
        endRow: "",
      }
      that.currentfetchData={
        "dir":3, //3保存弹框左边目录树目录ID
        "tableId":null, //4写死
        "tableDesc":"", //5input值名称
        "override":null, //6写死
        "fileColumns":[], //7文件列信息
        "hasHeader":true,//8是否表头
        "sheetIndexes":[],//9Sheet页索引
        "startRow":"",//10行区间开始
        "endRow":"",//11行区间结束
        "startCol":"",//12列区间开始
        "endCol":"",//13列区间结束
        "curSheetIndex":0,//14固定0
        "type":"excel", //15类型excel(默认)
        "fileId":0, //16上传文件返回的fileID
        "fileName":"", //17文件名称
        "templateName":"",  //18模板名称，默认空
        "hasTemplate":false,  //19是否模板，默认false
        "templateId":null,  //20模板ID
        "fileInfo":{
          "fileName":"", //21文件名称
          "sheets":[], //22文件Sheet信息
          "type":"XLSX" //23文件类型
        },
        "logIds":null, //26null
        "id":0//27写死
      }
      that.doImportresult='' //配置第二部确定接口返回的值
      that.choosename= ""  //导入上传文件
      that.leadingindescribe= ""  //导入描述

    },
    //下载数据
    downloaddata() {
      this.downloadTemplate_modal = true;
      var that = this;
      var query = {
        action: "Service",
        method: "getTemplateFiles",
        data: [],
      };
      let newResult = new Array();
      that.$http.post(that.PATH.GETTEMPLATEFIES, JSON.stringify(query)).then(
        (success) => {
          var res = success.data.result;
          if (res.length > 0) {
            that.DownloadtemplateList = success.data.result;
          }
        },
        (error) => {
          that.$Message.error({
            content: "删除失败,请联系管理员",
            duration: 1,
          });
          // that.err_list = ["登录异常", "请联系管理员"];
          // that.errorTips_modal = true;
        }
      );
    },
    //
    onExpand3: function (evt, treeId, treeNode) {
      // 点击事件
      if (treeNode.open) {
        this.treeClick(evt, treeId, treeNode);
      }
    },
    //导入的sheet页
    onClickLeadinSheet: function (evt, treeId, treeNode) {
      // 点击事件
      if(treeNode.index){
        this.choosesheetTreeNode={}
        this.isClickSheets = true;
        this.choosesheetTreeNode=treeNode
        this.currentsheetindex = treeNode.index

        this.currentfetchData.sheetIndexes=[treeNode.index]
      }else{
        this.isClickSheets = false;
        this.$Message.error({
          content: "当前不能选择，请选择其他sheet",
          duration: 1,
        });
      }
      
    },
    onExpand4: function (evt, treeId, treeNode) {
      // 点击事件
      if (treeNode.open) {
        this.SheetSavetreeClick(evt, treeId, treeNode);
      }
    },
    onClick4: function (evt, treeId, treeNode) {
      // 点击事件
      if (!treeNode.open) {
        this.SheetSavetreeClick(evt, treeId, treeNode);
      }
    },
    SheetSavetreeClick: function (evt, treeId, treeNode) {
      // 点击事件
      // this.treenodeID = treeNode.id;
      const parentZNode = this.ztreeObj4.getNodeByParam(
        "id",
        treeNode.id,
        null
      ); //获取指定父节点
      const childNodes = this.ztreeObj4.transformToArray(treeNode); //获取子节点集合
      var that = this;
      var query = {
        action: "Service",
        method: "getChildrenBySource",
        data: ["EXPLORER", treeNode.id],
      };
      that.currentsheettreeId = treeNode.id;
      that.currentfetchData.dir = treeNode.id
      
      if (treeNode.right - treeNode.left == 1) {
        //文件,获取右边的表格
        that.table.page = 1;
        that.getsearchnoPageTable(treeNode.id, treeNode.name);
      } else {
        //文件夹
        treeNode.children = [];
        that.getsearchnoPageTable(treeNode.id, treeNode.name);
        if (treeNode.isParent) {
          that.$http
            .post(that.PATH.EXPLORERGETCHILDRENBYSOURCE, JSON.stringify(query))
            .then(
              (success) => {
                const childrenData = eval(success.data.result);
                //判断子节点是否包含子元素
                // for(var i in childrenData){
                //     if(childrenData[i].isContainSon === 1){
                //         childrenData[i].isParent = true;
                //     }
                // };
                childrenData.forEach((v, i) => {
                  childrenData[i].open = false;
                  if (childrenData[i].right - childrenData[i].left != 1) {
                    childrenData[i].isParent = true;
                    childrenData[i].children = [];
                  }
                  if (childrenData[i].right - childrenData[i].left == 1) {
                    childrenData[i].isParent = false;
                  }
                });
                // ztreeObj4s
                that.ztreeObj4.refresh();
                that.ztreeObj4.addNodes(parentZNode, childrenData, false); //添加节点
                that.ztreeObj4.selectNode(parentZNode, true);
              },
              (error) => {
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
              }
            );
        }
      }
    },
    getsearchnoPageTable(id, title) {
      var that = this;
      var query = {
        action: "Service",
        method: "searchNoPage",
        data: ["", ["table"], ["导入表"], id],
      };
      // {"action":"Service","method":"searchNoPage","data":["EXPLORER",["table"],["\u5bfc\u5165\u8868"],13]}
      let newtabledata = [];
      let modaltype = new Object();

      that.$Spin.show();
      that.$http
        .post(that.PATH.EXPLORERSEARCHNoPage, JSON.stringify(query))
        .then(
          (success) => {
            //   createTime
            that.$Spin.hide();
            let res = success.data.result;
            if (res.length > 0) {
              res.forEach((v, i) => {
                res[i].createTime = that.getNweDate(v.createTime, "year");
              });
            }
            // that.table.data = newtabledata;
            that.sheettable.data = res;
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //配置第一步保存按钮
    lendinginsavefirst(name) {
      var that = this;
      that.sencdsheetsave_modal = true;
      that.firstsheetsave_modal = false;
      if(that.formCustom.hasHeader=='1'){
        that.currentfetchData.hasHeader =true
      }else{
        that.currentfetchData.hasHeader =false
      }

      that.currentfetchData.startRow = that.formCustom.startRow
      that.currentfetchData.endRow = that.formCustom.endRow
      that.currentfetchData.startCol = that.formCustom.startCol
      that.currentfetchData.endCol = that.formCustom.endCol


      
      var query = {
        action: "Service",
        method: "fetchData",
        data: [that.leadinUploadingid,that.currentfetchData],
      };
      that.sheetseetingtable2.columns=[]
      that.sheetseetingtable2.data=[]
      that.$Spin.show();
      that.$http
        .post(that.PATH.EXPLORERFETCHDATA, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            let newkey = []
            if(res.length>0){
              for(let key in res[0]){
                  newkey.push(key)
              }

            }
            for(let i=0;i<newkey.length;i++){
              that.sheetseetingtable2.columns.push({
                title:newkey[i],
                key:newkey[i],
                align: "center",
              })
            }
            
            that.sheetseetingtable2.columns[0].fixed = 'left'
            that.sheetseetingtable2.data=res
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    },

    handleCreated: function (ztreeObj) {
      this.ztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], false);
    },
    handleCreatedLeadinSheet: function (newztreeObj) {
      let that = this;
      that.ztreeUploadingObj = newztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      newztreeObj.expandNode(newztreeObj.getNodes()[0], true);
    },
    handleCreated4: function (ztreeObj) {
      let that = this;
      that.ztreeObj4 = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      that.ztreeObj4.expandNode(that.ztreeObj.getNodes()[0], false);
    },
    tabclick(item) {
      // this.tabsvalue = item.toString();
      if (item.name == 1) {
        this.tabsvalue = item.name.toString();
      } else if (item.name == 1) {
        this.tabsvalue = item.name.toString();
      } else {
        this.othertable.page = 1;
        this.tabsvalue = item.name.toString();
        this.getnewDataTableCol(item.paramId);
      }
    },
    addtabs() {
      let tabIndex = this.tabIndex;
      this.tabIndex = tabIndex + 1;
      let ishasdata = true;
      if (this.TabList.length > 0) {
        this.TabList.filter(function (item) {
          if (item.name == "2") {
            ishasdata = false;
          }
        });
        if (ishasdata) {
          this.TabList.push({
            name: 2,
            label: "生成数据",
            index: tabIndex,
            paramId: "",
          });
          this.tabsvalue = "2";
        }
        if (!ishasdata) {
          this.tabsvalue = "2";
        }
      }
    },
    //增加tab
    addTab(params) {

      let oneTabitem = new Array();
      let tabIndex = this.tabIndex;
      oneTabitem = this.TabList.filter(function (item) {
        return item.label == params.name;
      });

      this.othertable.page = 1;
      if (oneTabitem.length > 0) {
        this.tabsvalue = oneTabitem[0].index.toString();
        // this.getnewDataTableCol(params.param)
      } else {
        if (tabIndex == 1) {
          this.tabIndex = tabIndex + 2;
        } else {
          this.tabIndex = tabIndex + 1;
        }
        this.TabList.push({
          name: this.tabIndex,
          label: params.name,
          index: this.tabIndex,
          paramId: params.param,
        });

        this.getnewDataTableCol(params.param);
        this.tabsvalue = this.tabIndex.toString();
      }
      this.othertablelistdata = params;
    },
    getnewDataTableCol(id) {
      var that = this;
      var query = {
        action: "Service",
        method: "getColumns",
        data: [id],
      };
      //用下面的that.getData2(res)，这个需要删掉，暂时使用
      // that.getData2([]);
      let newResult = new Array();
      that.$Spin.show();
      that.$http.post(that.PATH.GETCOLUMS, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide();
          var res = success.data.result;
          that.othertable.columns = [];
          that.othertable.data = [];
          if (res.length > 0) {
            newResult = success.data.result;
            newResult.forEach((v, i) => {
              v.title = v.desc;
              v.key = v.name;
              // name
              v.align = "center";
            });
            // {
            // title: "名称",
            // key: "name",
            // width:'200',
            //   // align: "center",
            // },
            that.othertable.columns = newResult;
            that.getTableData(res, id);
            that.gettablepagetotal(res, id);
          }
        },
        (error) => {
          that.$Spin.hide();
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    getTableData(list, id) {
      var that = this;
      var list_data = [];
      if (list.length > 0) {
        list.forEach((node) => {
          list_data.push(node.name);
        });
      }

      var query_data = [
        {
          conditions: [],
          entityId: id,
          fields: list_data,
          orderBy: [],
        },
        that.othertable.page,
        that.othertable.pagesize,
      ];
      var query = {
        action: "Service",
        method: "pageQueryNoCount",
        data: query_data,
      };
      that.$Spin.show();
      that.$http.post(that.PATH.PAGEQUERYNOCOUNT, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide();
          if (success.data.state == "0") {
            var res = success.data.result;
            //周
            that.othertable.data = res;
          }
        },
        (error) => {
          that.$Spin.hide();
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    gettablepagetotal(list, id) {
      var that = this;
      var list_data = [];
      if (list.length > 0) {
        list.forEach((node) => {
          list_data.push(node.name);
        });
      }

      var query_data = [
        {
          conditions: [],
          entityId: id,
          fields: list_data,
          orderBy: [],
        },
      ];
      var query = {
        action: "Service",
        method: "getCount",
        data: query_data,
      };
      that.$Spin.show();
      that.$http.post(that.PATH.PAGEQUERYNOCOUNT, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide();
          var res = success.data.result;
          //周
          that.othertable.total = res;
          that.othertable.lastpage =that.pageTotal(res,that.othertable.pagesize)
        },
        (error) => {
          that.$Spin.hide();
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    //关闭tab的x
    closeicon(index) {
      this.TabList.splice(index, 1);
      if (this.TabList.length > 0) {
        let newname = this.TabList[this.TabList.length - 1].name;
        this.tabsvalue = newname.toString();
      }
    },

    //下载excel
    downloadEXCEL() {
      let that = this;
      let url =
        "http://192.168.1.236:8081/miner/v3/sys/explorer/document.kbsdownload?delete=n&path=" +
        Base64.encode(encodeURI(that.downloadtemplatetype)).replace(
          /\+/g,
          "%2B"
        );
      let a = document.createElement("a");
      a.id = "temp";
      document.body.appendChild(a);
      a.addEventListener("click", function () {
        window.open(encodeURI(url), "_blank");
      });
      a.click();
      document.body.removeChild(a);
    },
    
    //时间戳转日期
    getNweDate(timeStamp, startType) {
      var d = null;
      if (timeStamp.toString().length == 10) {
        d = new Date(timeStamp * 1000);
      } else if (timeStamp.toString().length >= 13) {
        d = new Date(timeStamp);
      }
      const year = d.getFullYear();
      const month = this.getHandledValue(d.getMonth() + 1);
      const date = this.getHandledValue(d.getDate());
      const hours = this.getHandledValue(d.getHours());
      const minutes = this.getHandledValue(d.getMinutes());
      const second = this.getHandledValue(d.getSeconds());
      let resStr = "";
      if (startType === "year")
        resStr =
          year +
          "-" +
          month +
          "-" +
          date +
          " " +
          hours +
          ":" +
          minutes +
          ":" +
          second;
      else resStr = month + "-" + date + " " + hours + ":" + minutes;
      return resStr;
    },
    getHandledValue(num) {
      return num < 10 ? "0" + num : num;
    },
  },
};
</script>
<style lang="scss">
#Datatreating {
  min-width: 1200px;
  height: 100%;
  padding: 50px 70px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: #f5f5f5;
  .tabs-animation {
    width: 100%;
  }
  .ico_docu {
    margin-right: 2px;
    background: url("../../assets/images/5.png") no-repeat;
    background-size: 20px 20px !important;
  }
  .ico_open {
    margin-right: 2px;
    background: url("../../assets/images/4.png") no-repeat;
    background-size: 20px 20px !important;
  }
  .ico_close {
    margin-right: 2px;
    background: url("../../assets/images/6.png") no-repeat;
    background-size: 20px 20px !important;
  }
  #tabs {
    width: 100%;
    overflow: auto;
    .tabs-nav {
      width: 100%;
      //    border-bottom: 1px solid #ddd;
      display: flex;
      background: #f5f5f5;
      border-radius: 10px 10px 0 0;

      .tabs-tab {
        // width: 170px;
        max-width: 240px;
        // flex:1;
        display: inline-block;
        vertical-align: middle;
        padding: 0 20px;
        cursor: pointer;
        text-align: center;
        line-height: 50px;
        height: 50px;
        position: relative;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.4);
        letter-spacing: 0;
        background: #e8e8e8;
        .newtabs-tab-tit {
          display: inline-block;
          // min-width: 100px;
          // width: 100px;
          max-width: 180px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
        }
        .tabs_right_bottom {
          width: 10px;
          height: 10px;
          // background: #F5F5F5;
          background: #fff;
          position: absolute;
          bottom: 0px;
          right: -10px;
          z-index: 1;
          // border-radius: 0px 0 20px 0 !important;
          .tabs_border {
            width: 10px;
            height: 10px;
            // background: #fff;
            background: #e8e8e8;
            border-radius: 0px 0 0 10px !important;
          }
        }
        .tabs_left_bottom {
          width: 10px;

          height: 10px;
          // background: #e8e8e8;
          background: #fff;
          position: absolute;
          bottom: 0px;
          left: -10px;
          z-index: 1;
          // border-radius: 0px 0 20px 0 !important;
          .tabs_border {
            width: 10px;
            height: 10px;
            // background: #fff;
            background: #e8e8e8;
            border-radius: 0px 0px 10px 0px !important;
          }
        }
        .middle_line {
          position: absolute;
          top: 26px;
          left: 0;
          width: 1px;
          height: 14px;
          background: rgba(0, 0, 0, 0.2);
        }
        .middle_line1 {
          position: absolute;
          top: 26px;
          right: -1px;
          width: 1px;
          height: 14px;
          background: #f5f5f5;
          z-index: 111;
        }
        &.active {
          background: #fff;
          border-radius: 10px 10px 0 0px;
          color: #246fea !important;
        }
        .tip {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f00;
          text-align: center;
          line-height: 20px;
          display: inline-block;
          color: #fff;
          font-size: 12px;
          position: relative;
          top: -15px;
        }
        &.disabled {
          color: #999;
          cursor: not-allowed;
        }
      }
      .tabs-tab:first-child {
        .middle_line {
          position: absolute;
          top: 26px;
          left: 0;
          width: 0px !important;
          height: 14px;
          background: rgba(0, 0, 0, 0.2);
        }
      }
      .tabs-tab:last-child {
        .tabs_right_bottom {
          width: 10px;
          height: 10px;
          // background: #F5F5F5;
          background: #fff;
          position: absolute;
          bottom: 0px;
          right: -10px;
          z-index: 1;
          // border-radius: 0px 0 20px 0 !important;
          .tabs_border {
            width: 10px;
            height: 10px;
            // background: #fff;
            background: #f5f5f5 !important;
            border-radius: 0px 0 0 10px !important;
          }
        }
      }
    }
    .tabs-content {
      padding: 30px 50px;
      background: #ffffff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 0 10px 10px 10px;
      min-height: 970px;
      .tab-pane {
        display: none;
        &.active {
          display: block;
        }
      }
    }
    .clearfix {
      &:after {
        clear: both;
      }
    }
  }
  .datatreating_firstitem {
    .datatreating_firstitem_left {
      // width: 380px;
      // border-right: 6px solid #e8e8e8;
      .marginright30 {
        // margin-right: 20Px;
      }
      .left_name {
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0;
        line-height: 24px;
        padding: 20px 0px;
        border-bottom: 1px solid #e8e8e8;
        box-shadow: #e8e8e8;
      }
      .left_tree {
        padding: 20px 0px 50px 0px;
      }
    }
    .datatreating_firstitem_middle {
      width: 50px;
      text-align: center;
      .widthborder8 {
        width: 6px;
        height: 800px;
        background: #e8e8e8;
        margin: 0 auto;
      }
    }
    .datatreating_firstitem_right {
      // flex: 1;
      // margin-left: 50px;
      .datatreating_fr_content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        .lf {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .cursorpointer {
          cursor: pointer;
        }
        .header_iconconent {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          height: 38px;
          line-height: 38px;
          padding: 0px 30px;
          margin-right: 20px;
          .icon {
            width: 18px;
            height: 17px;
          }
          .span {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.4);
            letter-spacing: 0;
            line-height: 14px;
            padding-left: 6px;
          }
          .datasearch_input {
            height: 38px;
            line-height: 38px;
            border: none;
            background: none;
            outline: none;
            margin-left: 10px;
          }
        }
        .marginright0 {
          margin-right: 0px !important;
        }
      }
    }
  }
  .datatreating_fr_table {
    height: 787px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    padding: 20px;
  }
  //表格
  .facedata-table.ivu-table-wrapper {
    margin: 0 auto;
    border: none;
    // box-shadow: 0px 0px 1px 0px #ece6e6;
    transition: all 0.2s linear;
    &:hover {
      // box-shadow: 0px 2px 10px 2px #ece6e6;
    }
    .ivu-table {
      background: none;
      &:before,
      &:after {
        background-color: transparent;
      }
    }
    .ivu-table-header {
      height: 80px;
      line-height: 80px;
      background: rgb(239, 239, 239);
    }
    .ivu-table-tbody {
      color: var(--font);
      .ivu-table-row {
        height: 44px;
        line-height: 44px;
      }
    }
    tr:nth-child(2n) td {
      background-color: rgb(239, 239, 239);
    }
    tr:nth-child(2n + 1) td {
      background-color: rgb(247, 247, 247);
    }
    th {
      background-color: rgb(239, 239, 239);
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
    }
    th,
    td {
      border: none;
      font-size: 14px;
    }
    .ivu-table-body tr.ivu-table-row-hover {
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
      transition: color 0.3s;
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
  .datatreating_fr_page {
    margin-top: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    // height: 40px;
    justify-content:center;
    .pageclass{
      cursor: pointer;
      margin:10px 10px 50px 10px;
      // 0.1rem 0.1rem 0.5rem 0.1rem;
      background: rgba(0, 0, 0, 0.10);
      border-radius: 0.02rem;
      padding:0px 4px;
      font-size: 12px;
    }
    .pageclass:hover{
      color: #2d8cf0;
    }
  }
}
.ivu-modal {
  // min-width: 600px;
  // width: 600px !important;
  // height: 334px;
  // top: 300px;
  .cursor{
    display: inline-block;
    width: 100%;
    min-height: 18px;
  }
  .sheetsavetable-content{
    height: 500px;
   overflow-y: auto;
  }
  .ivu-modal-content {
    background: #ffffff;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    .ivu-modal-close {
      right: 14px;
      top: 14px;
    }
    .layer_header {
      text-align: left;
      // height: 60px;
      padding-top: 20px;
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
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
    }
    .datatreting-sheet-content {
      height: 500px;
      overflow-y: auto;
      padding-top: 30px;
    }
    .datamodal_content {
      padding: 30px 20px;
      // min-height: 200px;
      // overflow: scroll;
      .datamodal_item {
        display: flex;
        margin-bottom: 20px;
        .datamodal_item-title {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.8);
          letter-spacing: 0;
          line-height: 44px;
          width: 90px;
        }
        .datamodal_item_flex {
          flex: 1;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          .ivu-select-selection {
            width: 100%;
            border: none !important;
            background: none !important;
            -webkit-box-shadow: none;
            box-shadow: none;
            margin: 0 -10px;
          }
          .ivu-select-placeholder {
            width: 100%;
          }
        }
        .textarea-control {
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
        .choose_biao {
          // width: 410px;
          // min-width: 410Px;
          // background: rgba(0,0,0,0.05);
          border-radius: 10px;
          height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 10px;
          .icon {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            // position: absolute;
          }
        }
        .downloadtemplate_content {
          // width: 410px;
          // min-width: 410Px;
          width: 100%;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 10px;
          box-sizing: border-box;
          border: none;
          .ivu-select-dropdown-list {
            height: 100px;
            overflow: auto;
          }
        }
        .downloadtemplate {
          // display: flex;
          // width: 390px;
          // min-width: 390Px;
          width: 100%;
          // justify-content: space-between;
          // align-items:center;
          color: rgba(0, 0, 0, 0.8);
        }
        .ivu-select-dropdown {
          width: 410px;
        }
      }
    }
    .leadingInFail_content {
      padding: 30px 20px;
      .datamodal_item-title1 {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0;
        line-height: 16px;
      }
      .datamodal_item-logcontent{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0;
        line-height: 30px;
        text-align: left;
      }
      .datamodal_item_textarea {
        margin-top: 20px;
        // width: 500px;
        // min-width: 500Px;
        width: 100%;
        height: 192px;
        border-radius: 10px;
        .textarea-control1 {
          padding: 20px 20px;
          border-radius: 10px;
          width: 100%;
          height: 100%;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          outline: none;
        }
      }
    }
    .sheetsaveserchtit-content {
      display: flex;
      padding: 30px 0px;
      span {
        width: 100px;
      }
    }
    .datamodal_footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0px 20px 14px 20px;
    }
    .systemtips_content {
      text-align: center;
      .icon {
        width: 120px;
        height: 120px;
        margin-top: 50px;
      }
      .successtips {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #246fea;
        letter-spacing: 0;
        line-height: 16px;
        margin-bottom: 50px;
      }
    }
    .datamodal_footer1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn {
      display: inline-block;
      // width: 100px;
      border: 0;
      background: #fff;
      border-radius: 3px;
      color: #246fea;
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
      // height: 40px;
      line-height: 40px;
      padding: 0 20px;
      cursor: pointer;
      -webkit-transition: opacity 0.3s;
      transition: opacity 0.3s;
      overflow: hidden;
      border: 1px solid #246fea;
      border-radius: 5px;
      margin-left: 10px;
      outline: none;
    }
  }
  .Systemicselection_head_content {
    padding: 30px 0px;
    height: 500px;
    overflow: auto;
  }
  .ivu-form-item .ivu-form-item .ivu-form-item-content {
    margin-left: 80px !important;
  }
  .sencdsheetsave-modal-content1 {
    padding: 50px 0px 20px 0px;
  }
  .sencdsheetsave-modal-content2 {
    padding: 0px 0px 50px 0px;
  }
  .secondtable-content{
    height: 300px;
    overflow-y: auto;
  }
}
//全局的报错弹框
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1400px;

  .ivu-modal {
    // width: 300px !important;
    // height: 300px;

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
.iframe-content{
  min-width: 800Px;
  width:1000px;
  height:800px;
  overflow:hidden;
  margin:0 auto;
  // .myiframe {
  //    min-width: 800Px;
  //     width:1000px;
  //   height: 900px;
  //   overflow:auto;
  //   margin:0 auto;
  // }

}
  .myiframe {
  width: 100%;
  height: 900px;
}
</style>

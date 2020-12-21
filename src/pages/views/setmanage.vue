<template>
  <div id="Setmanage">
    <NewTabs
      class="tabs-animation"
      :active="tabsvalue"
      v-on:tabclick="tabclick"
    >
      <!-- 算法右侧 -->
      <div v-if="tabsvalue == '1'" slot="right_button">
        <div class="search_iconconent">
          <img class="icon" src="../../assets/images/search@2x.png" />
          <input placeholder="关键字搜索" class="datasearch_input" />
        </div>
      </div>
      <!-- 数据参数右侧 -->
      <div v-if="tabsvalue == '2'" slot="right_button">
        <div class="displayflex">
          <div class="header-right-button" @click="choseleadingin">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/shangchuan.png" />
            <span class="span">上传模版</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <!-- 系统日志右侧 -->
      <div v-if="tabsvalue == '3'" slot="right_button">
        <div class="displayflex">
          <div class="header-right-button" @click="choseleadingin">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/shangchuan.png" />
            <span class="span">上传模版</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <!-- 用户右侧 -->
      <div v-if="tabsvalue == '4'" slot="right_button">
        <div class="displayflex">
          <div class="header-right-button" @click="choseleadingin">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/authorization.png" />
            <span class="span">授权</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <!-- 角色权限右侧 -->
      <div v-if="tabsvalue == '5'" slot="right_button">
        <div class="displayflex">
          <div class="header-right-button" @click="choseleadingin">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/resources.png" />
            <span class="span">分配资源</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <!-- 部门右侧 -->
      <div v-if="tabsvalue == '6'" slot="right_button">
        <div class="displayflex">
          <div class="header-right-button" @click="choseleadingin">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div class="header-right-button" @click="choseleadingin">
            <img class="icon" src="../../assets/images/form.png" />
            <span class="span">分配表</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/user.png" />
            <span class="span">切换用户</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <!-- 机构右侧 -->
      <div v-if="tabsvalue == '7'" slot="right_button">
        <div class="displayflex">
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <!-- 标准目录右侧 -->
      <div v-if="tabsvalue == '8'" slot="right_button">
        <div class="displayflex">
          <div
            class="header-right-button marginright50"
            @click="choseleadingin"
          >
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div class="search_iconconent">
            <img class="icon" src="../../assets/images/search@2x.png" />
            <input placeholder="关键字搜索" class="datasearch_input" />
          </div>
        </div>
      </div>
      <NewTabPane
        :name="item.name"
        v-for="(item, index) in setmanageTabList"
        :key="index"
        :label="item.label"
      >
        <!-- 算法表格 -->
        <NewTabPane v-if="item.name == '1'">
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <Table
                class="facedata-table account-table"
                stripe
                :columns="arithmetictable.columns"
                :data="arithmetictable.data"
              ></Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <div class="facedata-pagination">
              <div class="facedata-pagination">
                <Page
                  :total="arithmetictable.total"
                  :current="arithmetictable.page"
                  size="small"
                  @on-change="changearithmetictablePage"
                  :pageSize="arithmetictable.pagesize"
                ></Page>
              </div>
            </div>
          </div>
        </NewTabPane>
        <!-- 数据参数 -->
        <div v-else-if="item.name == '2'">
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <Table
                class="facedata-table account-table"
                stripe
                :columns="parametertable.columns"
                :data="parametertable.data"
              ></Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <div class="facedata-pagination">
              <Page
                :total="parametertable.total"
                :current="parametertable.page"
                size="small"
                @on-change="changeparametertablePage"
                :pageSize="parametertable.pagesize"
              ></Page>
            </div>
          </div>
        </div>
        <!-- 系统日志 -->
        <div v-else-if="item.name == '3'">
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <Table
                class="facedata-table account-table"
                stripe
                :columns="systemtable.columns"
                :data="systemtable.data"
              ></Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <div class="facedata-pagination">
              <Page
                :total="systemtable.total"
                :current="systemtable.page"
                size="small"
                @on-change="changesystemtablePage"
                :pageSize="systemtable.pagesize"
              ></Page>
            </div>
          </div>
        </div>
        <!-- 用户 -->
        <div v-else-if="item.name == '4'">
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <Table
                class="facedata-table account-table"
                stripe
                :columns="userdatatable.columns"
                :data="userdatatable.data"
              ></Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <div class="facedata-pagination">
              <Page
                :total="userdatatable.total"
                :current="userdatatable.page"
                size="small"
                @on-change="changeuserdatatablePage"
                :pageSize="userdatatable.pagesize"
              ></Page>
            </div>
          </div>
        </div>
        <!-- 角色权限 -->
        <div v-else-if="item.name == '5'">
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <Table
                class="facedata-table account-table"
                stripe
                :columns="roletable.columns"
                :data="roletable.data"
              ></Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <div class="facedata-pagination">
              <Page
                :total="roletable.total"
                :current="roletable.page"
                size="small"
                @on-change="changeroletablePage"
                :pageSize="roletable.pagesize"
              ></Page>
            </div>
          </div>
        </div>
        <!-- 部门 -->
        <div v-else-if="item.name == '6'" class="datatreating_firstitem">
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
                    <!-- <linetree :pd="tagtree.linetreelist" @itemClick="itemClick"></linetree> -->
                  </div>
                </div>
                <div class="margintop200">
                  <div class="left_name">管辖机构</div>
                  <Table
                    class="facedata-table1 account-table1"
                    stripe
                    :columns="departmentlefttable.columns"
                    :data="departmentlefttable.data"
                  ></Table>
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
                <div class="datatreating_fr_table">
                  <Table
                    class="facedata-table account-table"
                    stripe
                    :columns="departmenttable.columns"
                    :data="departmenttable.data"
                  ></Table>
                </div>
                <div class="datatreating_fr_page">
                  <div class="facedata-pagination">
                    <Page
                      :total="departmenttable.total"
                      :current="departmenttable.page"
                      size="small"
                      @on-change="changedepartmenttablePage"
                      :pageSize="departmenttable.pagesize"
                    ></Page>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <!-- 机构 -->
        <div v-else-if="item.name == '7'" class="datatreating_firstitem">
          <Row>
            <Col span="6">
              <div class="datatreating_firstitem_left">
                <div class="marginright30">
                  <div class="left_name">数据表</div>
                  <div class="left_tree">
                    <ztree
                      :setting="setting"
                      :nodes="departmentnodes"
                      @onClick="onClick"
                      @onCreated="handleCreated"
                      @onExpand="onExpand"
                    ></ztree>
                    <!-- <linetree :pd="tagtree.linetreelist" @itemClick="itemClick"></linetree> -->
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
                <div class="datatreating_fr_table">
                  <Table
                    class="facedata-table account-table"
                    stripe
                    :columns="organizationtable.columns"
                    :data="organizationtable.data"
                  ></Table>
                </div>
                <div class="datatreating_fr_page">
                  <div class="facedata-pagination">
                    <Page
                      :total="organizationtable.total"
                      :current="organizationtable.page"
                      size="small"
                      @on-change="changeorganizationtablePage"
                      :pageSize="organizationtable.pagesize"
                    ></Page>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <!-- 标准目录 -->
        <div v-else>
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <!-- <Table class="facedata-table account-table" stripe :columns="standardtable.columns" :data="standardtable.data"></Table> -->
              <div class="setmanagetree-tit">目录名称</div>
              <div>
                <div></div>
              </div>
              <div class="setmanagetree">
                <ztree
                  :setting="datatreatingsetting"
                  :nodes="datatreatingnodes"
                  @onClick="onClick"
                  @onCreated="handleCreated"
                  @onExpand="onExpand"
                ></ztree>
              </div>
            </div>
          </div>
        </div>
      </NewTabPane>
    </NewTabs>
    <!-- 导入弹窗 -->
    <Modal
      width="600"
      v-model="datatreating_modal"
      class-name="vertical-center-modal"
    >
      <!-- 导入 -->
      <div class="layer_header" style="cursor: move">导入</div>
      <div class="datamodal_content">
        <div class="datamodal_item">
          <div class="datamodal_item-title">选择表:</div>
          <div class="datamodal_item_flex">
            <div class="choose_biao">
              <div>{{ choosename }}</div>
              <img class="icon" src="../../assets/images/add@2x.png" />
            </div>
            <input
              type="file"
              id="editorupload"
              accept="image/gif, image/jpeg, image/png, image/jpg"
              style="
                width: 100px;
                height: 32px;
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
              "
              @change="UploadMore"
            />
          </div>
        </div>
        <div class="datamodal_item">
          <div class="datamodal_item-title">描述:</div>
          <div class="datamodal_item_flex">
            <textarea
              v-model="leadingindescribe"
              class="textarea-control"
              placeholder="非必填"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="lendinginleavefail">退出</button>
        <button class="btn" @click="lendinginsave">保存</button>
      </div>
    </Modal>
    <!-- 系统提示弹窗 -->
    <Modal
      width="600"
      v-model="systemtips_modal"
      class-name="vertical-center-modal"
      :closable="false"
    >
      <!-- 导入失败 -->
      <div class="layer_header" style="cursor: move">系统提示</div>
      <div class="systemtips_content">
        <img class="icon" src="../../assets/images/wrong.png" />
        <div class="successtips">导入成功</div>
      </div>
      <div class="datamodal_footer1">
        <button class="btn" @click="systemtips_modal = false">确定</button>
      </div>
    </Modal>
    <!-- 导入失败弹窗 -->
    <Modal
      width="600"
      v-model="leadingInFail_modal"
      class-name="vertical-center-modal"
    >
      <!-- 导入失败 -->
      <div class="layer_header" style="cursor: move">导入失败</div>
      <div class="leadingInFail_content">
        <div class="datamodal_item-title1">以下字段为空或与模板样式不符:</div>
        <div class="datamodal_item_textarea">
          <textarea
            class="textarea-control1"
            v-model="leadinginfailinfo"
            placeholder="非必填"
          ></textarea>
        </div>
      </div>
      <div class="datamodal_footer">
        <button class="btn">导出错误日志</button>
        <button class="btn">修改数据字典</button>
      </div>
    </Modal>
    <!-- 下载模版 -->
    <Modal
      width="600"
      v-model="downloadTemplate_modal"
      class-name="vertical-center-modal"
    >
      <!-- 下载模版 -->
      <div class="layer_header" style="cursor: move">下载模版</div>
      <div class="datamodal_content">
        <div class="datamodal_item">
          <div class="datamodal_item-title">模板类型:</div>
          <div class="datamodal_item_flex">
            <Select v-model="model8" clearable class="downloadtemplate_content">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <div class="datamodal_item">
          <div class="datamodal_item-title">模板名称:</div>
          <div class="datamodal_item_flex">
            <textarea
              v-model="templatename"
              class="textarea-control"
              placeholder="非必填"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="datamodal_footer">
        <button class="btn">退出</button>
        <button class="btn">保存</button>
      </div>
    </Modal>
    <!-- 目录 增加目录名称 -->
    <Modal
      width="300"
      v-model="datatreatingEdit_modal"
      class-name="vertical-center-modal"
    >
      <div class="datamodal_content">
        <Input v-model="datatreatingEditname" placeholder="请输入节点名称" />
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="canceldatatreatingEditmodal">取消</button>
        <button class="btn" @click="confirmdatatreatingEditmodal">确定</button>
      </div>
    </Modal>
    <!-- 错误提示 -->
    <Modal
      width="300"
      v-model="errorTips_modal"
      class-name="vertical-center-modal"
    >
      <div class="errorTips_modal">
        <img
          class="errorTips_modal_tips"
          src="../../assets/images/wrong@3x.png"
          alt
        />

        <div
          class="forget_tips_text"
          v-for="(node, index) in err_list"
          :key="index"
        >
          {{ node }}
        </div>
      </div>
    </Modal>
    <!-- 删除确认弹框 -->
    <Modal
      width="360"
      :mask-closable="true"
      v-model="delModal"
      class-name="mr-del-modal"
    >
      <div style="text-align: center; margin-bottom: 30px; font-size: 14px">
        确认删除该条数据
      </div>
      <div class="facedata-btn-box">
        <div
          class="facedata-btn-confirm"
          style="margin-right: 20px"
          @click="datatreatingmenuDel"
        >
          删除
        </div>
        <div class="facedata-btn-cancel" @click="delModal = false">取消</div>
      </div>
    </Modal>
  </div>
</template>
<script>
import linetree from "../components/linetree/linetree";
import { NewTabs, NewTabPane } from "../components/newtabs/index";
import ztree from "../components/ztree/ztree1";
function addDiyDom(treeId, treeNode) {
  var sObj = $("#" + treeNode.tId + "_span");
  if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) return;
  var addStr =
    "<span style='margin-left:300px;' class='button add' id='addBtn_" +
    treeNode.tId +
    "' title='add node' onfocus='this.blur();'></span>";
  sObj.after(addStr);
}
export default {
  name: "Setmanage",
  components: {
    linetree,
    NewTabs,
    NewTabPane,
    ztree,
  },
  data() {
    return {
      delID: "",
      delModal: false, //删除弹框
      datatreatingEdit_modal: false,
      datatreatingEditname: "", //目录节点名称
      nodeitem: null, //暂存node节点信息
      datatreatingtype: "new",
      ztreeObj: null,
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
      }, //树节点设置
      nodes: [],
      departmentnodes: [],

      datatreatingsetting: {
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
          showIcon: true,
          // addDiyDom:this.addDiyDom,
          addHoverDom: this.addHoverDom,
          removeHoverDom: this.removeHoverDom,
        },
      }, //树节点设置
      datatreatingnodes: [],

      allAlign: null,

      errorTips_modal: false, //错误弹框
      err_list: [], //错误信息列表

      datatreating_modal: false, //导入弹窗
      choosename: "", //导入选择表
      leadingindescribe: "", //导入描述

      leadingInFail_modal: false, //导入失败弹窗
      leadinginfailinfo:
        "以下字段为空或与模板样式不符，以下字段为空或与模板样式不", //导入失败的文本框

      downloadTemplate_modal: false, //下载模版弹窗
      templatename: "2020914KPI2101", //模版名称
      model8: "",

      systemtips_modal: false, //系统提示弹窗

      tabsvalue: "1", //tab选项卡的选定
      tabIndex: 1,
      setmanageTabList: [
        {
          label: "算法",
          name: "1",
          index: "1",
        },
        {
          label: "数据参数",
          name: "2",
          index: "2",
        },
        {
          label: "系统日志",
          name: "3",
          index: "3",
        },
        {
          label: "用户",
          name: "4",
          index: "4",
        },
        {
          label: "角色权限",
          name: "5",
          index: "5",
        },
        {
          label: "部门",
          name: "6",
          index: "6",
        },
        {
          label: "机构",
          name: "7",
          index: "7",
        },
        {
          label: "标准目录",
          name: "8",
          index: "8",
        },
      ],

      arithmetictable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "算法名称",
            key: "id",
            width: "200",
            align: "center",
          },
          {
            title: "参数名称",
            key: "name",
            width: "200",
            align: "center",
          },
          {
            title: "参数值",
            key: "name1",
            width: "200",
            align: "center",
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              let result = "0";
              return h("div", [
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
                }),

                // h("i", {
                //     attrs: {
                //         class: "iconfont icon-delete"
                //     },
                //     style: {

                //     },
                //     on: {
                //         click: () => {
                //         this.delID = params.row.id;
                //         this.delModal = true;
                //         }
                //     },

                // })
              ]);
            },
          },
        ],
        data: [
          {
            id: "因子分析",
            name: "阔值",
            name1: "0.8",
          },
          {
            id: "主成分分析",
            name: "阔值",
            name1: "0.8",
          },
          {
            id: "相关性分析",
            name: "阔值",
            name1: "0.8",
          },
        ],
      }, //算法表格
      parametertable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "算法名称",
            key: "id",
            width: "200",
            align: "center",
          },
          {
            title: "参数名称",
            key: "name",
            width: "200",
            align: "center",
          },
          {
            title: "参数值",
            key: "name1",
            width: "200",
            align: "center",
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              let result = "0";
              return h("div", [
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
                }),

                h("i", {
                  attrs: {
                    class: "iconfont icon-delete",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
              ]);
            },
          },
        ],
        data: [
          {
            id: "因子分析",
            name: "阔值",
            name1: "0.8",
          },
          {
            id: "主成分分析",
            name: "阔值",
            name1: "0.8",
          },
          {
            id: "相关性分析",
            name: "阔值",
            name1: "0.8",
          },
        ],
      }, //数据参数表格
      systemtable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: " 操作人",
            key: "name3",
            align: "center",
          },
          {
            title: "操作时间",
            key: "name4",
            align: "center",
          },
          {
            title: "所属单位",
            key: "name5",
            align: "center",
          },
          {
            title: "模块",
            key: "name6",
            align: "center",
          },
          {
            title: "操作类型",
            key: "name7",
            align: "center",
          },
          {
            title: "操作内容",
            width: "300",
            key: "name8",
            align: "left",
          },
        ],
        data: [
          {
            name3: "李四",
            name4: "2020年11月15日  12:30",
            name5: "大数据实验室",
            name6: "用户登录",
            name7: "用户登录",
            name8: "用户李四退出系统",
          },
          {
            name3: "张三",
            name4: "2020年11月15日  12:30",
            name5: "大数据实验室",
            name6: "用户登录",
            name7: "用户登录",
            name8: "用户张三退出系统",
          },
          {
            name3: "李萌",
            name4: "2020年11月15日  12:30",
            name5: "大数据实验室",
            name6: "用户登录",
            name7: "用户登录",
            name8: "用户李萌退出系统",
          },
        ],
      }, //系统日志表格
      userdatatable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "账号",
            key: "name",
            align: "center",
          },
          {
            title: "名称",
            key: "name1",
            align: "center",
          },
          {
            title: "邮箱",
            key: "name2",
            align: "center",
          },
          {
            title: "电话",
            key: "name3",
            align: "center",
          },
          {
            title: "角色",
            key: "name4",
            align: "center",
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              let result = "0";
              return h("div", [
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
                }),
                h("i", {
                  attrs: {
                    class: "ivu-icon ivu-icon-ios-remove-circle-outline",
                  },
                  style: {
                    marginRight: "30",
                  },
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
                h("i", {
                  attrs: {
                    class: "ivu-icon ivu-icon-ios-lock-outline",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
              ]);
            },
          },
        ],
        data: [
          {
            name: "00311983",
            name1: "李四",
            name2: "",
            name3: "",
            name4: "审计员审计员",
          },
          {
            name: "00311983",
            name1: "张三",
            name2: "",
            name3: "",
            name4: "审计员审计员",
          },
          {
            name: "00311983",
            name1: "刘丽",
            name2: "",
            name3: "",
            name4: "审计员审计员",
          },
        ],
      }, //用户表格
      roletable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "角色名称",
            key: "name",
            width: "200",
            align: "center",
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              let result = "0";
              return h("div", [
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
                }),

                h("i", {
                  attrs: {
                    class: "iconfont icon-delete",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
              ]);
            },
          },
        ],
        data: [
          {
            name: "FData",
          },
          {
            name: "agate",
          },
          {
            name: "审计员",
          },
        ],
      }, //角色权限表格
      departmentlefttable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "机构代码",
            key: "id",
            align: "center",
          },
          {
            title: "机构名称",
            key: "name",
            align: "center",
          },
        ],
        data: [
          {
            id: "1",
            name: "市北D",
          },
          {
            id: "2",
            name: "苏州N",
          },
          {
            id: "3",
            name: "深圳E",
          },
        ],
      }, //部门左边表格
      departmenttable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "排名",
            key: "id",
            align: "center",
          },
          {
            title: "机构名称",
            key: "name",
            align: "center",
          },
          {
            title: "风险因子2",
            key: "name1",
            align: "center",
          },
          {
            title: " ",
            align: "center",
            render: (h, params) => {
              let result = "0";
              return h("div", [
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
                }),

                h("i", {
                  attrs: {
                    class: "iconfont icon-delete",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
              ]);
            },
          },
        ],
        data: [
          {
            id: "1",
            name: "市北D",
            name1: "-0.20933",
          },
          {
            id: "2",
            name: "苏州N",
            name1: "-0.1933",
          },
          {
            id: "3",
            name: "深圳E",
            name1: "-0.10933",
          },
          {
            id: "4",
            name: "南京G",
            name1: "0.2033",
          },
          {
            id: "1",
            name: "市北D",
            name1: "-0.20933",
          },
          {
            id: "2",
            name: "苏州N",
            name1: "-0.1933",
          },
          {
            id: "3",
            name: "深圳E",
            name1: "-0.10933",
          },
          {
            id: "4",
            name: "南京G",
            name1: "0.2033",
          },
          {
            id: "3",
            name: "深圳E",
            name1: "-0.10933",
          },
          {
            id: "4",
            name: "南京G",
            name1: "0.2033",
          },
        ],
      }, //部门右边表格
      organizationtable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "账号",
            key: "name",
            align: "center",
            width: "100",
          },
          {
            title: "名称",
            key: "name1",
            align: "center",
            width: "100",
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              let result = "0";
              return h("div", [
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
                }),

                h("i", {
                  attrs: {
                    class: "iconfont icon-delete",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
              ]);
            },
          },
        ],
        data: [
          {
            name: "FData",
            name1: "FData",
          },
          {
            name: "agate",
            name1: "FData",
          },
          {
            name: "审计员",
            name1: "FData",
          },
        ],
      }, //机构表格
      standardtable: {
        page: 1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "目录名称",
            key: "name",
            align: "center",
          },
          {
            title: "管理员",
            key: "name1",
            align: "center",
          },
          {
            title: "快捷名称",
            key: "name2",
            align: "center",
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              return h("div", [
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
                }),
                h("i", {
                  attrs: {
                    class: "ivu-icon ivu-icon-ios-remove-circle-outline",
                  },
                  style: {
                    marginRight: "30",
                  },
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
                h("i", {
                  attrs: {
                    class: "ivu-icon ivu-icon-ios-lock-outline",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
                h("i", {
                  attrs: {
                    class: "ivu-icon ivu-icon-ios-reorder",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.delModal = true;
                    },
                  },
                }),
              ]);
            },
          },
        ],
        data: [
          {
            name: "FData",
            name1: "FData",
            name2: "FData",
          },
          {
            name: "FData",
            name1: "FData",
            name2: "FData",
          },
          {
            name: "FData",
            name1: "FData",
            name2: "FData",
          },
        ],
      }, //标准目录表格

      cityList: [
        {
          label: "123",
          value: "111",
        },
      ],
    };
  },
  created() {
    this.getDataTreeList();
  },
  mounted() {},
  methods: {
    //获取标准目录的列表
    getDataTreeList() {
      this.datatreatingnodes = [];
      this.getdatatreatingdata("ICE", -1); //获取目录的列表
      this.getdatatreatingdata("DAP", -2); //获取目录的列表
      this.getdatatreatingdata("EXPLORER", -3); //获取目录的列表
      this.getdatatreatingdata("DAPAPP", -4); //获取目录的列表
      this.getdatatreatingdata("RISK", -5); //获取目录的列表
    },
    sortByKey(array, key) {
      return array.sort(function (a, b) {
        var value1 = a[key];
        var value2 = b[key];
        return value1 - value2;
      });
    },
    getdatatreatingdata(source, id) {
      var that = this;
      var query = {
        action: "Service",
        method: "getChildrenBySource",
        data: [source, id],
        type: "rpc",
        tid: 5,
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETCHILDRENBYSOURCELIST, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // console.log(success.data);
            let newResult = success.data.result;
            if (newResult.length > 0) {
              newResult.forEach((v, i) => {
                newResult[i].open = false;

                newResult[i].isParent = true;
                newResult[i].children = [];
                // if (newResult[i].right - newResult[i].left != 1) {
                //     newResult[i].isParent = true;
                //     newResult[i].children = [];
                // }
                // if (newResult[i].right - newResult[i].left == 1) {
                //     newResult[i].isParent = false;
                // }
                that.datatreatingnodes.push(newResult[i]);
              });
            }
            that.sortByKey(that.datatreatingnodes, "id");
            // that.datatreatingnodes.push(newResult)
            // console.log(that.datatreatingnodes)
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    onExpand: function (evt, treeId, treeNode) {
      // 点击事件
      if (treeNode.open) {
        this.treeClick(treeId, treeNode);
      }
    },
    onClick: function (evt, treeId, treeNode) {
      // 点击事件
      if (!treeNode.open) {
        this.treeClick(treeId, treeNode);
      }
    },

    treeClick: function (treeId, treeNode) {
      // 点击事件
      // console.log(treeNode.open,'onClick');
      this.treenodeID = treeNode.id;
      const parentZNode = this.ztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      console.log(treeNode, "treeNode");
      var that = this;
      var query = {
        action: "Service",
        method: "getChildrenBySource",
        data: [treeNode.source, treeNode.id],
      };
      if (treeNode.right - treeNode.left == 1) {
        //文件,获取右边的表格
      } else {
        //文件夹
        treeNode.children = [];
        if (treeNode.isParent) {
          that.$http
            .post(that.PATH.GETCHILDRENBYSOURCELIST, JSON.stringify(query))
            .then(
              (success) => {
                // console.log(success.data.result);
                const childrenData = eval(success.data.result);
                //判断子节点是否包含子元素
                childrenData.forEach((v, i) => {
                  childrenData[i].open = false;

                  // childrenData[i].isParent = true;
                  // childrenData[i].children = [];
                  if (childrenData[i].right - childrenData[i].left != 1) {
                    childrenData[i].isParent = true;
                    childrenData[i].children = [];
                  }
                  if (childrenData[i].right - childrenData[i].left == 1) {
                    childrenData[i].isParent = false;
                  }
                });
                // console.log(childrenData)
                this.ztreeObj.refresh();
                this.ztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
              },
              (error) => {
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
              }
            );
        }
      }
    },
    //刷新当前选择节点的父节点
    refreshParentNode(treeNode) {
      const parentZNode = this.ztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      // console.log(parentZNode,'parentZNode')
      let parentNode = treeNode.getParentNode();
      // console.log(treeNode.getParentNode(),'treeNode')
      var that = this;
      if (parentNode) {
        var query = {
          action: "Service",
          method: "getChildrenBySource",
          data: [parentNode.source, parentNode.id],
        };
        if (parentNode.right - parentNode.left != 1) {
          //文件夹
          parentNode.children = [];
          if (parentNode.isParent) {
            that.$http
              .post(that.PATH.GETCHILDRENBYSOURCELIST, JSON.stringify(query))
              .then(
                (success) => {
                  // console.log(success.data.result);
                  const childrenData = eval(success.data.result);
                  //判断子节点是否包含子元素
                  childrenData.forEach((v, i) => {
                    childrenData[i].open = false;

                    childrenData[i].isParent = true;
                    childrenData[i].children = [];
                    // if (childrenData[i].right - childrenData[i].left != 1) {
                    //     childrenData[i].isParent = true;
                    //     childrenData[i].children = [];
                    // }
                    // if (childrenData[i].right - childrenData[i].left == 1) {
                    //     childrenData[i].isParent = false;
                    // }
                  });
                  // console.log(childrenData)
                  this.ztreeObj.refresh();
                  this.ztreeObj.addNodes(parentNode, childrenData, false); //添加节点
                },
                (error) => {
                  that.err_list = ["登录异常", "请联系管理员"];
                  that.errorTips_modal = true;
                }
              );
          }
        }
      } else {
        that.getDataTreeList();
      }
    },
    addDiyDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      // var itemnode = document.getElementById(`${treeNode.tId}_a`);
      let that = this;
      // console.log(item,'item')
      if (item && !item.querySelector(".tree_extra_btn")) {
        const delbtn = document.createElement("sapn");
        delbtn.id = `${treeid}_${treeNode.id}_delbtn`;
        delbtn.classList.add("tree_extra_delbtn");
        delbtn.innerText = "   删除";
        delbtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.delModal = true;
          that.nodeitem = treeNode;
        });
        item.appendChild(delbtn);
        const renamebtn = document.createElement("sapn");
        renamebtn.id = `${treeid}_${treeNode.id}_renamebtn`;
        renamebtn.classList.add("tree_extra_renamebtn");
        renamebtn.innerText = "   重命名   ";
        renamebtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.datatreatingtype = "edit";
          that.datatreatingEdit_modal = true;
          that.datatreatingEditname = treeNode.name;
          that.nodeitem = treeNode;
          // this.clickRename(treeNode)
        });
        item.appendChild(renamebtn);
        const addbtn = document.createElement("sapn");
        addbtn.id = `${treeid}_${treeNode.id}_addbtn`;
        addbtn.classList.add("tree_extra_addbtn");
        // <i class="ivu-icon ivu-icon-ios-checkmark"></i>
        // <Icon type="ios-add" />
        addbtn.innerText = "   增加   ";
        addbtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.datatreatingtype = "new";
          that.datatreatingEdit_modal = true;
          that.datatreatingEditname = "";
          that.nodeitem = treeNode;
          // this.clickaddbtn(treeNode)
        });
        item.appendChild(addbtn);
      }
    },
    onRename(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if (item) {
        const btn = item.querySelector(".tree_extra_addbtn");
        if (btn) {
          item.removeChild(btn);
        }
      }
    },
    addHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      let that = this;
      if (item && !item.querySelector(".tree_extra_delbtn")) {
        const btn = document.createElement("sapn");
        btn.id = `${treeid}_${treeNode.id}_btn`;
        btn.classList.add("tree_extra_delbtn");
        btn.innerText = "删除";
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.delModal = true;
          that.nodeitem = treeNode;
        });
        item.appendChild(btn);
      }
      if (item && !item.querySelector(".tree_extra_renamebtn")) {
        const renamebtn = document.createElement("sapn");
        renamebtn.id = `${treeid}_${treeNode.id}_renamebtn`;
        renamebtn.classList.add("tree_extra_renamebtn");
        renamebtn.innerText = "   重命名   ";
        renamebtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.datatreatingtype = "edit";
          that.datatreatingEdit_modal = true;
          that.datatreatingEditname = treeNode.name;
          that.nodeitem = treeNode;
          // this.clickRename(treeNode)
        });
        item.appendChild(renamebtn);
      }
      if (item && !item.querySelector(".tree_extra_addbtn")) {
        const addbtn = document.createElement("sapn");
        addbtn.id = `${treeid}_${treeNode.id}_addbtn`;
        addbtn.classList.add("tree_extra_addbtn");
        // <i class="ivu-icon ivu-icon-ios-checkmark"></i>
        // <Icon type="ios-add" />
        addbtn.innerText = "   增加   ";
        addbtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.datatreatingtype = "new";
          that.datatreatingEdit_modal = true;
          that.datatreatingEditname = "";
          that.nodeitem = treeNode;
          // this.clickaddbtn(treeNode)
        });
        item.appendChild(addbtn);
      }
    },
    removeHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if (item) {
        const btn = item.querySelector(".tree_extra_delbtn");
        if (btn) {
          item.removeChild(btn);
        }
        const addbtn = item.querySelector(".tree_extra_addbtn");
        if (addbtn) {
          item.removeChild(addbtn);
        }
        const renamebtn = item.querySelector(".tree_extra_renamebtn");
        if (renamebtn) {
          item.removeChild(renamebtn);
        }
      }
    },
    refreshcurrentNode: function (treeId, treeNode) {
      // 点击事件
      // console.log(treeNode.open,'onClick');
      this.treenodeID = treeNode.id;
      const parentZNode = this.ztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      var that = this;
      var query = {
        action: "Service",
        method: "getChildrenBySource",
        data: [treeNode.source, treeNode.id],
      };
      treeNode.children = [];
      that.$http
        .post(that.PATH.GETCHILDRENBYSOURCELIST, JSON.stringify(query))
        .then(
          (success) => {
            // console.log(success.data.result);
            const childrenData = eval(success.data.result);
            //判断子节点是否包含子元素
            childrenData.forEach((v, i) => {
              childrenData[i].open = false;

              childrenData[i].isParent = true;
              childrenData[i].children = [];
              // if (childrenData[i].right - childrenData[i].left != 1) {
              //     childrenData[i].isParent = true;
              //     childrenData[i].children = [];
              // }
              // if (childrenData[i].right - childrenData[i].left == 1) {
              //     childrenData[i].isParent = false;
              // }
            });
            // console.log(childrenData)
            this.ztreeObj.refresh();
            this.ztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //弹框取消
    canceldatatreatingEditmodal() {
      this.datatreatingEdit_modal = false;
    },
    //弹框确定
    confirmdatatreatingEditmodal() {
      let that = this;
      let nodeinfo = that.nodeitem;
      if (that.datatreatingtype == "edit") {
        that.RenameDatatreatinNode(
          nodeinfo.id,
          that.datatreatingEditname,
          nodeinfo.source
        );
      } else {
        that.addDatatreatinNode(
          nodeinfo.id,
          that.datatreatingEditname,
          nodeinfo.source
        );
      }
    },
    addDatatreatinNode(nodeid, nodename, source) {
      var that = this;
      var query = {
        action: "Service",
        method: "add",
        data: [nodeid, nodename, source],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETCHILDRENBYSOURCEADD, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // console.log(success.data);
            // that.getdatatreatingdata()
            that.datatreatingEdit_modal = false;
            that.refreshcurrentNode("", that.nodeitem);
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    RenameDatatreatinNode(nodeid, nodename) {
      var that = this;
      var query = {
        action: "Service",
        method: "rename",
        data: [nodeid, nodename],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETCHILDRENBYSOURCERENAME, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            console.log(success.data);
            that.datatreatingEdit_modal = false;
            // that.getdatatreatingdata()
            that.refreshParentNode(that.nodeitem);
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //删除弹框
    datatreatingmenuDel() {
      var that = this;
      let treeNodeinfo = that.nodeitem;
      var query = {
        action: "Service",
        method: "delete",
        data: [treeNodeinfo.id],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETCHILDRENBYSOURCEDEL, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            console.log(success.data);
            // that.getdatatreatingdata()
            that.delModal = false;
            that.refreshParentNode(that.nodeitem);
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },

    //切换算法的分页
    changearithmetictablePage(page) {
      this.arithmetictable.page = page;
    },
    //切换数据参数的分页
    changeparametertablePage(page) {
      this.parametertable.page = page;
    },
    //切换系统日志的分页
    changesystemtablePage(page) {
      this.systemtable.page = page;
    },
    //切换用户的分页
    changeuserdatatablePage(page) {
      this.userdatatable.page = page;
    },
    //切换角色权限的分页
    changeroletablePage(page) {
      this.roletable.page = page;
    },
    //切换部门的分页
    changedepartmenttablePage(page) {
      this.departmenttable.page = page;
    },
    //切换机构的分页
    changeorganizationtablePage(page) {
      this.organizationtable.page = page;
    },
    //切换标准目录的分页
    changestandardtablePage(page) {
      this.standardtable.page = page;
    },
    // 选择导入
    choseleadingin() {
      this.datatreating_modal = true;
    },
    //导入保存
    lendinginsave() {
      this.systemtips_modal = true;
    },
    //导入推出
    lendinginleavefail() {
      this.leadingInFail_modal = true;
    },
    //下载数据
    downloaddata() {
      this.downloadTemplate_modal = true;
    },
    handleCreated: function (ztreeObj) {
      this.ztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], false);
    },
    tabclick(item) {
      // console.log(item,'item')
      this.tabsvalue = item.toString();
    },
    //增加tab
    addTab(params) {
      let tabIndex = this.tabIndex;
      if (tabIndex == 1) {
        this.tabIndex = tabIndex + 2;
      } else {
        this.tabIndex = tabIndex + 1;
      }
      this.setmanageTabList.push({
        name: this.tabIndex,
        label: "xxx-xx",
        index: this.tabIndex,
      });
      this.tabsvalue = this.tabIndex.toString();
      // console.log(this.setmanageTabList)
      // this.isTip = false;
    },
    closeicon(index) {
      // console.log(item)
      this.setmanageTabList.splice(index, 1);
      if (this.setmanageTabList.length > 0) {
        // console.log(this.setmanageTabList[this.setmanageTabList.length-1].name.toString(),'1234')
        let newname = this.setmanageTabList[this.setmanageTabList.length - 1]
          .name;
        this.tabsvalue = newname.toString();
      }
    },
    UploadMore(e) {},
  },
};
</script>
<style lang="scss">
#Setmanage {
  min-width: 1200px;
  height: 100%;
  padding: 50px 70px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: #f5f5f5;
  .tabs-animation {
    width: 100%;
    background: #fff;
    padding: 35px 50px;
  }
  .displayflex {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .marginright50 {
    margin-right: 50px !important;
  }
  .search_iconconent {
    cursor: pointer;
    flex: 1;
    display: flex;
    // justify-content:center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 38px;
    line-height: 38px;
    padding: 0px 30px;

    width: 174px;
    position: relative;
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
  .header-right-button {
    flex: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 38px;
    line-height: 38px;
    // padding:0px 30px;
    margin-right: 20px;
    font-size: 14px !important;
    color: rgba(0, 0, 0, 0.4);
    letter-spacing: 0;
    width: 140px;
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
      padding-left: 10px;
    }
    .datasearch_input {
      height: 38px;
      line-height: 38px;
      border: none;
      background: none;
      outline: none;
      margin-left: 10px;
    }
    &:hover {
      color: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.4);
      .span {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
  #newtabs {
    background: #fff;
    .newtabs-nav {
      padding: 48px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .newtabs-tab-left {
      width: 800px;
    }
    .newtabs-tab-right {
      flex: 1;
      // text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .newtabs-tab {
      display: inline-block;
      margin-right: 30px;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.4);
      letter-spacing: 0;
      line-height: 38px;
      cursor: pointer;
    }
    .newtabs-tab.active {
      opacity: 0.8;
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #000000;
      letter-spacing: 0;
      line-height: 24px;
    }
    .middle_line1 {
      width: 30px;
      height: 4px;
      background: #246fea;
      border-radius: 2px;
      margin: 15px auto 0px;
    }
  }
  .datatreating_firstitem {
    .datatreating_firstitem_left {
      // width: 380px;
      // border-right: 6px solid #e8e8e8;
      .marginright30 {
        // margin-right: 20Px;
      }
      .margintop200 {
        margin-top: 200px;
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
  }
  .datatreating_fr_table {
    height: 787px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    overflow: hidden;
    // padding: 20px;
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
          color: #246fea;
        }
      }
      &.icon-delete {
        font-size: 20px;
        &:hover {
          color: #246fea;
        }
      }
    }
    .ivu-icon {
      cursor: pointer;
      font-size: 24px;
      vertical-align: middle;
      color: var(--icon) !important;
      transition: color 0.3s;
      margin: 0 20px 0 0;
      &.ivu-icon-ios-remove-circle-outline {
        color: var(--icon) !important;
        &:hover {
          color: #246fea !important;
        }
      }
      &.ivu-icon-ios-lock-outline {
        color: var(--icon) !important;
        &:hover {
          color: #246fea !important;
        }
      }
      &.ivu-icon-ios-reorder {
        color: var(--icon) !important;
        &:hover {
          color: #246fea !important;
        }
      }
    }
    .ivu-icon:last-child {
      margin-right: 0px !important;
    }
  }
  .facedata-table1.ivu-table-wrapper {
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
      background: #fff;
    }
    .ivu-table-tbody {
      color: var(--font);
      .ivu-table-row {
        height: 44px;
        line-height: 44px;
      }
    }
    tr:nth-child(2n) td {
      background-color: rgba(0, 0, 0, 0.02);
    }
    tr:nth-child(2n + 1) td {
      background-color: rgba(0, 0, 0, 0.05);
    }
    th {
      background-color: #fff;
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
          color: #246fea;
        }
      }
      &.icon-delete {
        font-size: 20px;
        &:hover {
          color: #246fea;
        }
      }
    }
    .ivu-icon {
      cursor: pointer;
      font-size: 24px;
      vertical-align: middle;
      color: var(--icon) !important;
      transition: color 0.3s;
      margin: 0 20px 0 0;
      &.ivu-icon-ios-remove-circle-outline {
        color: var(--icon) !important;
        &:hover {
          color: #246fea !important;
        }
      }
      &.ivu-icon-ios-lock-outline {
        color: var(--icon) !important;
        &:hover {
          color: #246fea !important;
        }
      }
      &.ivu-icon-ios-reorder {
        color: var(--icon) !important;
        &:hover {
          color: #246fea !important;
        }
      }
    }
    .ivu-icon:last-child {
      margin-right: 0px !important;
    }
  }
  .datatreating_fr_page {
    margin-top: 30px;
  }
  .setmanagetree-tit {
    padding: 50px 0px 0px 110px;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 0;
    line-height: 24px;
  }
  .setmanagetree {
    height: 600px;
    // overflow: scroll;
    overflow-y: auto;
    margin: 30px 50px 0px 50px;
  }
  .tree_extra_addbtn {
    // margin-left: 200px;
    // display: inline-block;
    float: right;
    margin-left: 10px;

    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px !important;
  }
  .tree_extra_renamebtn {
    float: right;
    margin-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px !important;
  }
  .tree_extra_renamebtn:hover,
  .tree_extra_delbtn:hover,
  .tree_extra_addbtn:hover {
    border-color: #000;
    color: #000;
  }
  .tree_extra_delbtn {
    margin-right: 10px;
    float: right;
    margin-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px !important;
  }
}
.ivu-modal {
  // min-width: 600Px;
  // width: 600px !important;
  height: 334px;
  top: 300px;

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
      // height: 60px;
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
    .datamodal_content {
      padding: 30px 20px;
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
    .datamodal_footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
.myiframe {
  width: 100%;
  height: 900px;
}
</style>

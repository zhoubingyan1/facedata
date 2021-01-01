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
          <div class="header-right-button" @click="userAddUser">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="userauthorization"
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
          <div class="header-right-button" @click="openrolepopup">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div
            class="header-right-button marginright50"
            @click="distributionResource"
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
            @click="addOrgbtnClick"
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
            @click="addbtnClick"
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
      <NewTabPane :name="item.name" v-for="(item, index) in setmanageTabList" :key="index" :label="item.label">
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
                highlight-row
                ref="usercurrentRowTable"
                @on-current-change="userCurrentChange"
                @on-row-click="userRowClick"
              >
              </Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <span class="pageclass" @click="changeuserdatatablefirstPage">首页</span>
            <div class="facedata-pagination">
              <Page
                :total="userdatatable.total"
                :current="userdatatable.page"
                size="small"
                @on-change="changeuserdatatablePage"
                :pageSize="userdatatable.pagesize"
              ></Page>
            </div>
            <span class="pageclass" @click="changeuserdatatablelastPage">尾页</span>
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
                highlight-row
                ref="rolecurrentRowTable"
                @on-current-change="roleCurrentChange"
                @on-row-click="roleRowClick"
              ></Table>
            </div>
          </div>
          <div class="datatreating_fr_page">
            <div class="facedata-pagination">
              <!-- <Page
                :total="roletable.total"
                :current="roletable.page"
                size="small"
                @on-change="changeroletablePage"
                :pageSize="roletable.pagesize"
              ></Page> -->
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
                      :setting="departmentsetting"
                      :nodes="departmentnodes"
                      @onClick="departmentonClick"
                      @onCreated="departmentCreated"
                      @onExpand="departmentonExpand"
                    ></ztree>
                    
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
          <!-- <Row>
            <Col span="6">
              <div class="datatreating_firstitem_left">
                <div class="marginright30">
                  <div class="left_name">数据表</div>
                  <div class="left_tree">
                    <ztree
                      :setting="setting"
                      :nodes="organizationnodes"
                      @onClick="onClick"
                      @onCreated="handleCreated"
                      @onExpand="onExpand"
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
          </Row> -->
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              <div class="setmanagetree-tit">机构名称</div>
              <div class="setmanagetree">
                <ztree
                  :setting="organizationsetting"
                  :nodes="organizationnodes"
                  @onClick="organizationonClick"
                  @onCreated="organizationCreated"
                  @onExpand="organizationonExpand"
                ></ztree>
              </div>
            </div>
          </div>
        </div>
        <!-- 标准目录 -->
        <div v-else>
          <div class="datatreating_fr_table">
            <div class="datatreating_fr_table">
              
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
    <!-- 错误提示 -->
    <Modal width="300" v-model="errorTips_modal" class-name="vertical-center-modal">
      <div class="errorTips_modal">
        <img class="errorTips_modal_tips" src="../../assets/images/wrong@3x.png" alt />
        <div class="forget_tips_text" v-for="(node, index) in err_list" :key="index">
          {{ node }}
        </div>
      </div>
    </Modal>
    <!-- 机构 增加 -->
    <Modal width="300" v-model="organizationEdit_modal" class-name="vertical-center-modal">
      <div v-if="organizationtype=='edit'" style="text-align: center; margin-bottom: 10px; font-size: 14px">
        添加机构
      </div>
      <div v-if="organizationtype=='new'" style="text-align: center; margin-bottom: 10px; font-size: 14px">
        更新机构
      </div>
      <div class="datamodal_content">
        <Form ref="formVaildate" :model="formVaildate" :label-width="80">
            <FormItem label="机构名称:" >
               <Input type="text" v-model="formVaildate.name"></Input>
            </FormItem>
            <FormItem label="机构编码:" >
               <Input type="text" v-model="formVaildate.code"></Input>
            </FormItem>
            <FormItem label="机构描述:" >
               <Input type="text" v-model="formVaildate.remark"></Input>
            </FormItem>
          </Form>
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="cancelorganizationEditmodal">取消</button>
        <button class="btn" @click="confirmorganizationEditmodal">确定</button>
      </div>
    </Modal>
    <!-- 机构删除弹框 -->
    <Modal width="360" :mask-closable="true" v-model="orgdelModal" class-name="mr-del-modal">
      <div style="text-align: center; margin-bottom: 30px; font-size: 14px">
        确认删除该条数据
      </div>
      <div class="facedata-btn-box">
        <div
          class="facedata-btn-confirm"
          style="margin-right: 20px"
          @click="organizationmenuDel"
        >
          删除
        </div>
        <div class="facedata-btn-cancel" @click="cancelorganizationEditmodal">取消</div>
      </div>
    </Modal>
    <!-- 用户 授权 -->
    <Modal width="600" :mask-closable="true" v-model="userauthorizationModal" class-name="mr-del-modal">
      <div class="userauthtree-content">
        <div class="displayflex">
          <div class="header-right-button" @click="openrolepopup">
            <img class="icon" src="../../assets/images/new.png" />
            <span class="span">新建</span>
          </div>
          <div class="header-right-button marginright50" @click="userdistributionResource">
            <img class="icon" src="../../assets/images/resources.png" />
            <span class="span">分配资源</span>
          </div>
        </div>
      </div>
      <div class="userauthtreelist_content">
        <!-- :check-strictly="true"  -->
        <Tree ref="userroletree" :render="renderContent" :data="useroleList" show-checkbox @on-check-change="userroletreechange" @on-select-change="userRoleSelectChange"></Tree>
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="canceluserauthorizationmodal">取消</button>
        <button class="btn" @click="confirmuserauthorizationmodal">确定</button>
      </div>
    </Modal>
    <!-- 用户 禁用 -->
    <Modal width="360" :mask-closable="true" v-model="userforbiddenModal" class-name="mr-del-modal">
      <div style="text-align: center; margin-bottom: 30px; font-size: 14px">
        确定对选中的用户进行该操作吗
      </div>
      <div class="facedata-btn-box">
        <div class="facedata-btn-confirm" v-if="userforbiddenTypes=='notstartusing'"  style="margin-right: 20px" @click="confirmuserforbidden">
          禁用
        </div>
        <div v-if="userforbiddenTypes=='startusing'" class="facedata-btn-confirm" style="margin-right: 20px" @click="confirmuserforbidden">
          启用
        </div>
        <div class="facedata-btn-cancel" @click="canceluserforbiddenmodal">取消</div>
      </div>
    </Modal>
    <!-- 角色 分配资源 -->
    <Modal width="600" v-model="roleDistribution_modal" class-name="vertical-center-modal">
      <div class="layer_header" style="cursor: move;">分配资源</div>
      <div class="roleDistribution_content">
        <!-- :check-strictly="true" -->
        <Tree ref="roletree" :data="roleDistributionList" show-checkbox @on-check-change="roletreechange"></Tree>
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="cancelroleDistributionmodal">取消</button>
        <button class="btn" @click="confirmroleDistributionmodal">确定</button>
      </div>
    </Modal>
    <!-- 角色 增加、修改 -->
    <Modal width="300" v-model="roleEdit_modal" class-name="vertical-center-modal">
      <div class="datamodal_content">
        <Input v-model="roleEditname" placeholder="请输入角色名称" />
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="cancelroleEditmodal">取消</button>
        <button class="btn" @click="confirmroleEditmodal">确定</button>
      </div>
    </Modal>
    <!-- 角色删除弹框 -->
    <Modal width="360" :mask-closable="true" v-model="delRoleModal" class-name="mr-del-modal">
      <div style="text-align: center; margin-bottom: 30px; font-size: 14px">
        确认删除该条数据
      </div>
      <div class="facedata-btn-box">
        <div class="facedata-btn-confirm" style="margin-right: 20px" @click="rolemenuDel">
          删除
        </div>
        <div class="facedata-btn-cancel" @click="cancelroleEditmodal">取消</div>
      </div>
    </Modal>
    <!-- 目录 增加目录名称 -->
    <Modal width="300" v-model="datatreatingEdit_modal" class-name="vertical-center-modal">
      <div class="datamodal_content">
        <Input v-model="datatreatingEditname" placeholder="请输入节点名称" />
      </div>
      <div class="datamodal_footer">
        <button class="btn" @click="canceldatatreatingEditmodal">取消</button>
        <button class="btn" @click="confirmdatatreatingEditmodal">确定</button>
      </div>
    </Modal>
    <!-- 目录删除确认弹框 -->
    <Modal width="360" :mask-closable="true" v-model="delModal" class-name="mr-del-modal">
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
        <div class="facedata-btn-cancel" @click="canceldatatreatingEditmodal">取消</div>
      </div>
    </Modal>
  </div>
</template>
<script>
import { NewTabs, NewTabPane } from "../components/newtabs/index";
import ztree from "../components/ztree/ztree1";
import Vue from 'vue';
import { Tree} from 'view-design';
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
    NewTabs,
    NewTabPane,
    ztree,
    Tree
  },
  data() {
    return {
      martId:sessionStorage.getItem("martId"),
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
      datatreatingnodes:[
        // {
        //     id : -1,
        //     name : "指标库",
        //     source : 'ICE',
        //     leaf : false,
        //     index : 0,
        //     right :20,
        //     left:18,
        //     isParent:true,
        //     isNotShowIcon:true,
        // },
        {
            id : -2,
            name : "数据模型库",
            source : 'DAP',
            leaf : false,
            index : 1,
            right :30,
            left:18, 
            isParent:true,
            isNotShowIcon:true,
        },
        {
            id : -3,
            name : "数据管理器",
            source : 'EXPLORER',
            leaf : false,
            index : 2,
            right :50,
            left:18, 
            isParent:true,
            isNotShowIcon:true,
        },//新增应用模型库
        {
            id : -4,
            name : "应用模型库",
            source : 'DAPAPP',
            leaf : false,
            index : 3,
            right :40,
            left:32, 
            isParent:true,
            isNotShowIcon:true,
        },
        // {
        //     id : -5,
        //     name : "风险评估",
        //     source : 'RISK',
        //     leaf : false,
        //     index : 4,
        //     right :20,
        //     left:16, 
        //     isParent:true,
        //     isNotShowIcon:true,
        // }
      ],

      allAlign: null,

      errorTips_modal: false, //错误弹框
      err_list: [], //错误信息列表

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


      userTypes:'new', //用户新增类型 edit 用户修改类型
      userforbiddenTypes:"notstartusing",//用户禁用、启用弹框类型
      userItemData:{}, //用户的行数据
      userforbiddenModal:false,//用户禁用弹框
      useroleList:[],//用户角色列表
      chooseauthrole:[],
      userauthorizationModal:false,//用户授权弹框
      newuserdatatabledata:{
      },//暂存的用户列表
      userdatatable: {
        page: 1,
        lastpage:1,
        pagesize: 15,
        total: 50,
        columns: [
          {
            title: "账号",
            // key: "code",
            align: "center",
            render: (h, params) => {
              if (params.row.isclick) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      props: {
                          value: this.newuserdatatabledata.code,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.newuserdatatabledata.code = event.target.value
                              
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
                            
                          },
                        },
                      },
                      params.row.code
                    ),
                  ]);
              }
            }
          },
          {
            title: "名称",
            // key: "name",
            align: "center",
            render: (h, params) => {
              if (params.row.isclick) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      props: {
                          value: this.newuserdatatabledata.name,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.newuserdatatabledata.name = event.target.value
                              
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
            title: "邮箱",
            // key: "email",
            align: "center",
            render: (h, params) => {
              if (params.row.isclick) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      props: {
                          value: this.newuserdatatabledata.email,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.newuserdatatabledata.email = event.target.value
                              
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
                            
                          },
                        },
                      },
                      params.row.email
                    ),
                  ]);
              }
            }
          },
          {
            title: "电话",
            // key: "tel",
            align: "center",
            render: (h, params) => {
              if (params.row.isclick) {      
                return h('div', [
                  h('Input', {
                      style: {
                          padding: '8px'
                      },
                      props: {
                          value: this.newuserdatatabledata.tel,//默认值
                          autofocus: true,
                      },
                      on: {
                          'on-blur': (event) => {
                              this.newuserdatatabledata.tel = event.target.value
                              
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
                            
                          },
                        },
                      },
                      params.row.tel
                    ),
                  ]);
              }
            }
          },
          {
            title: "角色",
            align: "center",
            width:200,
            ellipsis:true,
            render: (h, params) => {
              let result = "";
              let newresult=[]
              if(params.row.roles.length>0){
                params.row.roles.forEach((v,i)=>{
                  newresult.push(v.name)
                })
                result = newresult.toString();
              }else{
                result = ''
              }
              let tableTxt = null
              if(result){
                  if(result.length > 10){
                      tableTxt = result.substring(0, 10) + '.....'
                  }else{
                      tableTxt = result
                  }
              }
              return h('Tooltip', {
                  props: {
                    trigger:"hover",
                    placement: "bottom",
                    wordWrap:true,
                    width:200
                  },
                  attrs:{
                    class:'tooltipscontent'
                  }
              },[tableTxt,h('p', { slot: 'content',style: {whiteSpace: 'normal', wordBreak: 'break-all'}}, result) ])
            }
          },
          {
            title: " ",
            align: "right",
            render: (h, params) => {
              let result = "0";
              let arr = [];
              if(params.row.isclick==true){
                return h("div",{
                style: {
                      position: 'relative',
                      display: 'inline-block',
                  }
                }, [
                h("button", {
                  
                  style: {
                    paddingRight:'10px',
                    display:
                        params.row.usershowRightIcon==true&&params.row.isclick==true
                          ? "inline-block"
                          : "none"
                  },
                  on: {
                    click: () => {
                       this.userdatatable.data[params.row._index].isclick=false
                       this.userdatatable.data[params.row._index].tel=this.newuserdatatabledata.tel
                       this.userdatatable.data[params.row._index].email=this.newuserdatatabledata.email
                       this.userdatatable.data[params.row._index].name=this.newuserdatatabledata.name
                       this.userdatatable.data[params.row._index].code=this.newuserdatatabledata.code 

                       if(this.userTypes=='new'){
                         this.userAddData(params)
                       }else{
                        this.userUndate(params)
                       }
                       
                    },
                  },
                },"保存"),
                h("button", {
                  
                  style: {
                      display:
                        params.row.usershowRightIcon==true&&params.row.isclick==true
                          ? "inline-block"
                          : "none"
                  },
                  on: {
                    click: () => {
                      this.userdatatable.data[params.row._index].isclick=false
                      if (Object.keys(this.newuserdatatabledata).length == 0) {
                        this.userdatatable.data.splice(0, 1)
                      }
                      //  this.getAllRichUserList() //获取用户列表
                      
                    },
                  },
                },"取消"),
              ]);
              }else{
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
                  style: {
                      display:
                        params.row.usershowRightIcon==true&&params.row.isclick==false
                          ? "inline-block"
                          : "none"
                  },
                  on: {
                    click: () => {
                      this.userdatatable.data.forEach((v,i)=>{
                        this.userdatatable.data[i].isclick=false
                      })
                      this.newuserdatatabledata=params.row
                      this.userdatatable.data[params.row._index].isclick=true
                      this.userTypes='edit'
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
                    class: "ivu-icon ivu-icon-ios-remove-circle-outline",
                  },
                  style: {
                    marginRight: "30",
                      display:
                        params.row.usershowRightIcon==true&params.row.isclick==false
                          ? "inline-block"
                          : "none"
                  },
                  on: {
                    click: () => {
                      
                      this.delID = params.row.id;
                      this.userforbiddenModal = true;
                      this.userforbiddenTypes="startusing"
                    },
                  },
                }), h('span', {
                        slot: 'content',
                        style: {
                            whiteSpace: 'normal'
                        }
                    }, '启用')
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
                    class: "ivu-icon ivu-icon-ios-lock-outline",
                  },
                  style: {
                      display:
                        params.row.usershowRightIcon==true&params.row.isclick==false
                          ? "inline-block"
                          : "none"
                  },
                  on: {
                    click: () => {
                      this.delID = params.row.id;
                      this.userforbiddenModal = true;
                      this.userforbiddenTypes="notstartusing"
                    },
                  },
                }), h('span', {
                        slot: 'content',
                        style: {
                            whiteSpace: 'normal'
                        }
                    }, '禁用')
                    ])
                )
                return h('div', arr);
              }
              
          },
          },
        ],
        data: [
        ],
      }, //用户表格


      roleDistribution_modal:false,//分配资源弹框
      roleTypes:'new',
      roleEditname:'',//角色编辑名称
      roleEdit_modal:false,//角色编辑
      delRoleModal:false,
      roleItemData:{},//暂存的角色一行数据
      roleDistributionList:[],//分配资源的列表
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

              let arr = [];
              arr.push(
                  h('Tooltip', {
                      props: {
                          placement: 'top',
                          transfer: true
                      }
                  }, [ h("i", {
                  attrs: {
                    class: "iconfont icon-edit",
                  },
                  style: {
                      display:
                        params.row.roleshowRightIcon==true
                          ? "inline-block"
                          : "none"
                  },
                  on: {
                    click: () => {
                      this.roleItemData = params.row
                      this.roleTypes='edit'
                      this.roleEditname=params.row.name
                      this.roleEdit_modal=true
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
                  style: {
                      display:
                        params.row.roleshowRightIcon==true
                          ? "inline-block"
                          : "none"
                    },
                  on: {
                    click: () => {
                      this.roleItemData = params.row
                      this.delRoleModal = true;
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
            },
          },
        ],
        data: [],
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
      departmentnodes: [],//部门左边树
      departmentsetting:{
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
          addHoverDom: this.departmentaddHoverDom,
          removeHoverDom: this.departmentremoveHoverDom,
          txtSelectedEnable: true
        },
      },
      departztreeObj:null,
      departmenttype: "new", //部门
      deptnodeitem:null,//部门树暂存节点

      organizationtype: "new", //机构
      orgnodeitem:null,//机构树暂存节点
      parentPid:null,//当前选中父节点id
      OrgztreeObj: null,
      orgdelModal:false,//机构删除弹框
      organizationEdit_modal:false,//机构增加弹框
      formVaildate:{
        code:'',//机构编码
        name:"",//机构名称
        remark:'',//机构备注
      },
      organizationsetting :{
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
          addHoverDom: this.organizationaddHoverDom,
          removeHoverDom: this.organizationremoveHoverDom,
          txtSelectedEnable: true
        },
      },
      organizationnodes: [],//机构树
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
    };
  },
  created() {
    this.getroletabledata() //获取角色列表
    this.getAllRichUserList() //获取用户列表
    this.getOrganizationList() //获取机构列表

    this.getDeptLeftTreeList()
  },
  mounted() {
     
  },
  methods: {
    //最上面的tab切换
    tabclick(item) {
      this.tabsvalue = item.toString();
    },
    //重置页面数据
    resettabcut(){
      //用户
      this.userTypes='new' //用户的默认弹框类型是新增
      this.userItemData={} //用户的params的row数据置为空
      this.userdatatable.page=1 //用户的page为1

      //角色
      this.roleDistribution_modal=false//分配资源弹框
      this.roleTypes='new'
      this.roleEditname=''//角色编辑名称
      this.roleEdit_modal=false//角色编辑
      this.delRoleModal=false
      this.roleItemData={}//暂存的角色一行数据

      //机构
      this.organizationtype= "new" //机构
      this.orgnodeitem=null//机构树暂存节点
      this.parentPid=null//当前选中父节点id
      this.OrgztreeObj= null
      this.orgdelModal=false//机构删除弹框
      this.organizationEdit_modal=false//机构增加弹框
      this.formVaildate={
        code:'',//机构编码
        name:"",//机构名称
        remark:'',//机构备注
      }

      //部门
        

    },
    //获取标准目录的列表
    getDataTreeList() {
      this.datatreatingnodes = [
        // {
        //     id : -1,
        //     name : "指标库",
        //     source : 'ICE',
        //     leaf : false,
        //     index : 0,
        //     children:[]
        // },
        {
            id : -2,
            name : "数据模型库",
            source : 'DAP',
            leaf : false,
            index : 1,
            children:[]
        },
        {
            id : -3,
            name : "数据管理器",
            source : 'EXPLORER',
            leaf : false,
            index : 2,
            children:[]
        },
        {
            id : -4,
            name : "应用模型库",
            source : 'DAPAPP',
            leaf : false,
            index : 3,
            children:[]
        },
        // {
        //     id : -5,
        //     name : "风险评估",
        //     source : 'RISK',
        //     leaf : false,
        //     index : 4,
        //     children:[]
        // }
      ];
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
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETCHILDRENBYSOURCELIST, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let newResult = success.data.result;
            if (newResult.length > 0) {
              newResult.forEach((v, i) => {
                newResult[i].open = false;

                // newResult[i].isParent = true;
                // newResult[i].children = [];
                if (newResult[i].right - newResult[i].left != 1) {
                    newResult[i].isParent = true;
                    newResult[i].children = [];
                }
                if (newResult[i].right - newResult[i].left == 1) {
                    newResult[i].isParent = false;
                }
                that.datatreatingnodes.forEach((v,i)=>{
                    if(v.id==id){
                        that.datatreatingnodes.children.push(newResult[i])
                    }
                })
                // that.datatreatingnodes.push(newResult[i]);
              });
            }
            that.sortByKey(that.datatreatingnodes, "id");
            // that.datatreatingnodes.push(newResult)
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //标准目录生成的树
    handleCreated: function (ztreeObj) {
      this.ztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], false);
    },
    //目录树点击
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
      this.nodeitem = treeNode;
    },

    treeClick: function (treeId, treeNode) {
      // 点击事件
      const parentZNode = this.ztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      let nowParentNode = treeNode.getParentNode();
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
                const childrenData = eval(success.data.result);
                if(!nowParentNode){
                  childrenData.forEach((v, i) => {
                    childrenData[i].isNotShowIcon = true;

                  });
                }
                
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
      let parentNode = treeNode.getParentNode();
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
                  
                  that.ztreeObj.refresh();
                  that.ztreeObj.addNodes(parentNode, childrenData, false); //添加节点
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
      that.nodeitem=null
    },
    addHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      let that = this;
      if(!treeNode.isNotShowIcon){
        if (item && !item.querySelector(".tree_extra_delbtn")) {
          const btn = document.createElement("sapn");
          btn.id = `${treeid}_${treeNode.id}_btn`;
          btn.classList.add("tree_extra_delbtn");
          // btn.innerText = "删除";
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
          // renamebtn.innerText = "   重命名   ";
          renamebtn.addEventListener("click", (e) => {
            e.stopPropagation();
            that.datatreatingtype = "edit";
            that.datatreatingEdit_modal = true;
            that.datatreatingEditname = treeNode.name;
            that.nodeitem = treeNode;
            // this.clickRename(treeNode)
          });
          renamebtn.addEventListener("mouseover", (e)=>{
              e.stopPropagation();
          });
          renamebtn.addEventListener("mouseout", (e)=>{
              e.stopPropagation();
          });
          item.appendChild(renamebtn);
        }
        // if (item && !item.querySelector(".tree_extra_addbtn")) {
        //   const addbtn = document.createElement("sapn");
        //   addbtn.id = `${treeid}_${treeNode.id}_addbtn`;
        //   addbtn.classList.add("tree_extra_addbtn");
        //   // addbtn.innerText = "   增加   ";
        //   var editStr ='<span class="">增加</span>'
        //   addbtn.addEventListener("click", (e) => {
        //     e.stopPropagation();
        //     that.datatreatingtype = "new";
        //     that.datatreatingEdit_modal = true;
        //     that.datatreatingEditname = "";
        //     that.nodeitem = treeNode;
        //     // this.clickaddbtn(treeNode)
        //   });

        //   item.appendChild(addbtn);
        // }
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
            this.ztreeObj.refresh();
            this.ztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
            this.nodeitem=null
          },
          (error) => {
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //目录新建
    addbtnClick(){
      let that=this
      if(that.nodeitem!=null){
        if(!that.nodeitem.isNotShowIcon){
          that.datatreatingtype = "new";
          that.datatreatingEdit_modal = true;
          that.datatreatingEditname = "";
        }else{
          that.$Message.error({
            content: "该节点不支持新增",
            duration: 1,
          });
        }
        
      }else{
        that.$Message.error({
          content: "请选择标准目录节点",
          duration: 1,
        });
      }
      
      
    },
    //弹框取消
    canceldatatreatingEditmodal() {
      this.datatreatingEdit_modal = false;
      this.delModal=false
      // this.nodeitem=null
      // this.ztreeObj.checkAllNodes(false)
    },
    //弹框确定
    confirmdatatreatingEditmodal() {
      let that = this;
      let nodeinfo = that.nodeitem;
      if(that.datatreatingEditname!=''){
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
      }else{
        that.$Message.error({
          content: "文字不能为空",
          duration: 1,
        });
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
    //目录删除弹框
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
    //获取角色列表
    getroletabledata() {
      var that = this;
      var query = {
        action: "Service",
        method: "getAllRole",
        data: null,
      };
      
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLEGETALLROLE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            if(res.length>0){
              res.forEach((v,i)=>{
                res[i].roleshowRightIcon=false
                res[i].index=i
                res[i]._highlight =false
              })
            }
            that.roletable.data = res
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //角色编辑确认
    confirmroleEditmodal(){
      if(this.roleEditname!=""){
        if(this.roleTypes=='new'){
          this.AddRole()
        }else{
          this.EditRole()
        }
      }else{
        this.$Message.error({
          content: "请填写角色名称",
          duration: 1,
        });
      }
      
    },
    //修改角色
    EditRole(){
      var that = this;
      let treeNodeinfo = that.nodeitem;
      var query = {
        action: "Service",
        method: "update",
        data: [{id:that.roleItemData.id,name:that.roleEditname,martId:that.roleItemData.martId}],
      };
      // {"action":"Service","method":"update","data":[{"id":6,"name":"\u975e\u73b0\u573a\u56e2\u961f","martId":1}],"type":"rpc","tid":3}
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLEUPDATE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getdatatreatingdata()
            let res =success.data.data
            if(success.data.state=='0'){
              that.roleEdit_modal=false
              // that.roleItemData={}
              that.getroletabledata()
              that.roleEditname=""
              //用户下的角色编辑
              if(that.userauthorizationModal==true){
                that.getauthorizationList()
              }
            }

          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    
    
    },
    //增加角色
    AddRole(){
      // roleEditname
      var that = this;
      let treeNodeinfo = that.nodeitem;
      var query = {
        action: "Service",
        method: "add",
        data: [{"id":0,"name":that.roleEditname,"martId":that.martId}],
      };
      // {"action":"Service","method":"add","data":[{"id":0,"name":"saddsa","martId":0}],"type":"rpc","tid":4}
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROKEADD, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getdatatreatingdata()
            let res =success.data.data
            if(success.data.state=='0'){
              that.roleEdit_modal=false
              that.roleEditname=""
              that.getroletabledata()
              //用户下的角色新增
              if(that.userauthorizationModal==true){
                that.getauthorizationList()
              }
            }
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    
    },
    //角色删除弹框确定
    rolemenuDel(){
      var that = this;
      var query = {
        action: "Service",
        method: "checkDelete",
        data: [that.roleItemData.id],
      };
      // {"action":"Service","method":"checkDelete","data":[8],"type":"rpc","tid":5}
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLECHECKDELETE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getdatatreatingdata()
            let res =success.data.result
            if(res){
              
              that.reallyDelRole()
            }
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    },
    //真正角色 删除
    reallyDelRole(){
      var that = this;
      var query = {
        action: "Service",
        method: "delete",
        data: [{id:that.roleItemData.id,name:that.roleItemData.name,martId:that.roleItemData.martId}],
      };
      // {"action":"Service","method":"delete","data":[{"id":8,"name":"saddsa","martId":1}],"type":"rpc","tid":6}
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLEDELETE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getdatatreatingdata()
            let res =success.data.data
            if(success.data.state==0){
              that.delRoleModal=false
              // that.roleItemData={}
              that.getroletabledata()
              //用户下的角色删除
              if(that.userauthorizationModal==true){
                that.getauthorizationList()
              }
            }
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //角色删除弹框、编辑弹框取消
    cancelroleEditmodal(){
      this.roleEdit_modal=false
      this.delRoleModal=false
      this.roleEditname=''
      // this.roleItemData={}
    },
    //打开新建弹框
    openrolepopup(){
      //新增角色
      this.roleEdit_modal=true
      this.roleTypes='new'
    },
    //打开分配资源列表
    distributionResource(){
      
      if(Object.keys(this.roleItemData).length>0){
        this.roleDistribution_modal=true
        this.getDistributionList()
      }else{
        this.$Message.error({
          content: "请选中角色",
          duration: 1,
        });
      }
      
    },
    //获取分配资源列表
    getDistributionList(){
      var that = this;
      var query = {
        action: "Service",
        method: "getResourceTree",
        data: null,
      };
      let newResouceList=new Array()
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLEGETRESOURCETREELIST, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            if (res.length > 0) {
              newResouceList = [];
              res.forEach((v, i) => {
                if (v.id == "00") {
                  var node = {};
                  node.id = v.id;
                  node.module = v.module;
                  node.title = v.name;
                  node.checked = false
                  node.children = [];
                  newResouceList.push(node);
                }
              });
              for (var i = 0; i < res.length; i++) {
                var n_index = newResouceList.findIndex((n) => {
                  return n.module == res[i].module;
                });
                if (n_index < 0) {
                  continue;
                }
                if (newResouceList[n_index].children) {
                  if(res[i].id!=='00'){
                    var nodes = {};
                    nodes.id = res[i].id;
                    nodes.module = res[i].module;
                    nodes.title = res[i].name;
                    nodes.checked = false
                    newResouceList[n_index].children.push(nodes);
                  }
                }
              }
            }
            that.roleDistributionList = newResouceList;
            that.distributionResourceData(that.roleItemData.id)
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    
    },
    //获取该角色的资源
    distributionResourceData(id){
      var that = this;
      var query = {
        action: "Service",
        method: "getRoleResource",
        data: [id],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLEGETRESOURCE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res =success.data.result
            let roledatalist=new Array()
            let newroleDistributionList=that.roleDistributionList
            if(res.length>0){
              res.forEach((v,i)=>{
                var nodes={}
                let newnode=[]
                newnode=res[i].split(",")
                nodes.module=newnode[0]
                nodes.id=newnode[1]
                roledatalist.push(nodes)
              })
              
              if (newroleDistributionList.length > 0) {
              roledatalist.forEach((Highlight) => {
                if (Highlight.id == "00") {
                  //不勾选父节点
                  return true;
                }
                //父节点序号
                var n_index = newroleDistributionList.findIndex((n) => {
                  return n.module == Highlight.module;
                });
                if (n_index < 0) {
                  //没找到父节点
                  return true;
                }
                if (newroleDistributionList[n_index].children.length <= 0) {
                  //子节点不存在
                  return true;
                }
                //子节点序号
                var n_index_child = newroleDistributionList[
                  n_index
                ].children.findIndex((n) => {
                  return n.id == Highlight.id;
                });
                if (n_index_child < 0) {
                  //没找到子节点
                  return true;
                }
                newroleDistributionList[n_index].children[
                  n_index_child
                ].checked = true;
              });
            }
              
            }
            that.roleDistributionList = newroleDistributionList;

          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    },
    //分配资源取消
    cancelroleDistributionmodal(){
      this.roleDistribution_modal=false
      // this.roleItemData={}
    },
    //分配资源 确认
    confirmroleDistributionmodal(){
      let rolecurrenttdata=this.$refs.roletree.getCheckedNodes()
      let roledata=new Array()
      if(rolecurrenttdata.length>0){
        rolecurrenttdata.forEach((v,i)=>{
          var nodes=''
          nodes=v.module+','+v.id
          // rolecurrenttdata
          roledata.push(nodes)
        })
      }
      var that = this;
      var query = {
        action: "Service",
        method: "setRoleResource",
        data: [that.roleItemData.id,roledata],
      };
      // {"action":"Service","method":"setRoleResource","data":[8,["sys.org,00","sys.org,01","sys.org,02","sys.org,03","sys.org,04","sys.org,05","sys.org,06","dap.editor,00","dap.editor,01","dap.editor,03","dap.editor,04","dap.editor,06","dap.editor,08"]],"type":"rpc","tid":10}
      that.$Spin.show();
      that.$http
        .post(that.PATH.ROLESETRESOURCE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getdatatreatingdata()
            that.roleDistribution_modal=false
            //用户下授权 分配资源确认
            if(that.userauthorizationModal==true){
              that.getauthorizationList()
            }else{
              //角色下的表格取消高亮
              // that.$refs.rolecurrentRowTable[0].clearCurrentRow()
            }
            
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );

    
    
    },
    //角色树点击
    roletreechange(item,data){
    },
    //角色选中高亮
    roleCurrentChange(currentRow,oldCurrentRow){
      this.roleItemData=currentRow
      this.roletable.data[currentRow.index]._highlight=true
      this.roletable.data.forEach((v,i)=>{
        if(currentRow.id!=v.id){
          this.roletable.data[i]._highlight=false
        }
      })
    },
    //角色单行点击
    roleRowClick(row,index){
      this.roletable.data[index].roleshowRightIcon=true
      this.roletable.data.forEach((v,i)=>{
        if(row.id!=v.id){
          this.roletable.data[i].roleshowRightIcon=false
        }
      })
    },
    //获取用户列表
    getAllRichUserList(){
      var that = this;
      var query = {
        action: "Service",
        method: "getAllRichUser",
        data: [that.userdatatable.page,that.userdatatable.pagesize,false],
      };
      let newResouceList=new Array()
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETALLRICHUSELIST, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            if(res.data.length>0){
              res.data.forEach((v,i)=>{
                res.data[i].isclick = false
                res.data[i].usershowRightIcon = false
                res.data[i]._highlight =false
                res.data[i].index=i
              })
            }
            that.userdatatable.total = res.count
            that.userdatatable.lastpage = that.pageTotal(res.count,that.userdatatable.pagesize)
            that.userdatatable.data=res.data
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //切换用户列表的分页
    changeuserdatatablePage(page) {
      this.userdatatable.page = page;
      this.getAllRichUserList()
    },
    //切换用户第一页
    changeuserdatatablefirstPage(){
      this.userdatatable.page = 1;
      this.getAllRichUserList()
    },
    //切换用户最后一页
    changeuserdatatablelastPage(){
      this.userdatatable.page = this.userdatatable.lastpage
      this.getAllRichUserList()
    },
    //用户选中高亮
    userCurrentChange(currentRow,oldCurrentRow){
      this.userItemData=currentRow
      if(!currentRow.isclick){
        this.userdatatable.data[currentRow.index]._highlight=true
        this.userdatatable.data.forEach((v,i)=>{
          if(currentRow.id!=v.id){
            this.userdatatable.data[i]._highlight=false
          }
        })
      }
      
      
    },
    //用户单行点击
    userRowClick(row,index){
      this.userdatatable.data[index].usershowRightIcon=true
      this.userdatatable.data.forEach((v,i)=>{
        if(row.id!=v.id){
          this.userdatatable.data[i].usershowRightIcon=false
        }
      })
    },
    //用户新增
    userAddData(params){
      var that = this;
      var query = {
        action: "Service",
        method: "add",
        data: [{"id":0,"code":that.newuserdatatabledata.code,"name":that.newuserdatatabledata.name,"stopped":that.newuserdatatabledata.stopped,"change":that.newuserdatatabledata.change,"email":that.newuserdatatabledata.email,"tel":that.newuserdatatabledata.tel}],
      };
      // {"action":"Service","method":"update","data":[{"id":53,"code":"1111111","name":"sdsafvddfdf","stopped":false,"change":true,"email":"","tel":""}],"type":"rpc","tid":4}
      
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETALLRICHUSADD, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            that.getAllRichUserList()
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    
    },
    //用户更新
    userUndate(params){
      var that = this;
      var query = {
        action: "Service",
        method: "update",
        data: [{"id":that.newuserdatatabledata.id,"code":that.newuserdatatabledata.code,"name":that.newuserdatatabledata.name,"stopped":that.newuserdatatabledata.stopped,"change":that.newuserdatatabledata.change,"email":that.newuserdatatabledata.email,"tel":params.row.tel}],
      };
      // {"action":"Service","method":"update","data":[{"id":53,"code":"1111111","name":"sdsafvddfdf","stopped":false,"change":true,"email":"","tel":""}],"type":"rpc","tid":4}
      
      that.$Spin.show();
      that.$http
        .post(that.PATH.GETALLRICHUSUPDATE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            that.getAllRichUserList()
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    },
    //用户右侧点击新建
    userAddUser(){
      this.userTypes='new'
      this.newuserdatatabledata={}
      this.userdatatable.data.unshift({
        change: false,
        code: "",
        email: "",
        errorCount: 0,
        id: 0,
        isclick: true,
        name: "",
        stopped: false,
        tel: "",
        usershowRightIcon: true,
        roles:[]
      })
    },
    //用户禁用弹框取消
    canceluserforbiddenmodal(){
      this.userforbiddenModal=false
    },
    //用户禁用弹框授权
    confirmuserforbidden(){
      if(this.userforbiddenTypes=='notstartusing'){
        //禁用
        this.stopUser(false)
      }else{
        //启用
        this.stopUser(true)
      }
    },
    //用户禁用、启用请求接口
    stopUser(usertype){
      var that = this;
      var query = {
        action: "Service",
        method: "stopUser",
        data: [that.userItemData.id,usertype],
      };
      // {"action":"Service","method":"stopUser","data":[53,true]}
      
      that.$Spin.show();
      that.$http
        .post(that.PATH.STOPUSER, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            that.userforbiddenModal=false
            that.getAllRichUserList()
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    
    
    },
    //角色授权打开弹框
    userauthorization(){
      this.roleItemData={}
      if(Object.keys(this.userItemData).length>0){
        this.userauthorizationModal=true
        this.getauthorizationList()
        }else{
        this.$Message.error({
          content: "请选中某个用户",
          duration: 1,
        });
      }
    },
    //获取授权下面的角色列表
    getauthorizationList(){
      var that = this;
        var query = {
          action: "Service",
          method: "getAllRole",
          data: null,
        };
        // {"action":"Service","method":"stopUser","data":[53,true]}
        
        that.$Spin.show();
        that.$http
          .post(that.PATH.GETALLROLE, JSON.stringify(query))
          .then(
            (success) => {
              that.$Spin.hide();
              let res = success.data.result;
              res.forEach((v,i)=>{
                v.title=v.name
              })
              that.useroleList=res
              
            },
            (error) => {
              that.$Spin.hide();
              that.err_list = ["登录异常", "请联系管理员"];
              that.errorTips_modal = true;
            }
          );
    },
    userroletreechange(){

    },
    canceluserauthorizationmodal(){
      this.userauthorizationModal=false
    },
    confirmuserauthorizationmodal(){
      let rolecurrenttdata=this.$refs.userroletree.getCheckedNodes()
      if(rolecurrenttdata.length>0){
        rolecurrenttdata.forEach((v,i)=>{
          this.chooseauthrole.push(v.id)
        })
      }
      var that = this;
      var query = {
        action: "Service",
        method: "setUserRoles",
        data: [that.userItemData.id,that.chooseauthrole],
      };
      
      that.$Spin.show();
      that.$http
        .post(that.PATH.SETUSERROLES, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            that.userauthorizationModal=false
            that.getAllRichUserList()
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    },  
    renderContent (h, { root, node, data }) {
        return h('span', {
            style: {
                display: 'inline-block',
                width: '100%'
            }
        }, [
            h('span', [
                h('span', data.title)
            ]),
            h('span', {
                style: {
                    display: 'inline-block',
                    float: 'right',
                }
            }, [
                h('i', {
                  
                    attrs: {
                      class: "iconfont icon-edit",
                    },
                    style: {
                      marginRight:'10px'
                    },
                    on: {
                        click: () => { 
                          this.roleItemData = data
                          this.roleTypes='edit'
                          this.roleEditname=data.name
                          this.roleEdit_modal=true
                        }
                    }
                }),
                h('i', {
                    attrs: {
                      class: "iconfont icon-delete",
                    },
                    on: {
                        click: () => { 
                          this.roleItemData = data
                          this.delRoleModal = true;
                        }
                    }
                })
            ])
        ]);
    },
    //打开用户情况下 分配资源列表
    userdistributionResource(){
      
      if(Object.keys(this.roleItemData).length>0){
        this.roleDistribution_modal=true
        this.getDistributionList()
      }else{
        this.$Message.error({
          content: "请选中角色",
          duration: 1,
        });
      }
      
    },
    //授权分配 下的树点击
    userRoleSelectChange(treeitem,item){
      this.roleItemData=item
    },

    //机构列表
    getOrganizationList(){
      var that = this;
      var query = {
        action: "Service",
        method: "getChildren",
        data: [0],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.ORGANIZATIONGETLIST, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            if (res.length > 0) {
              res.forEach((v, i) => {
                res[i].open = false;

                res[i].isParent = true;
                res[i].children = [];
                // if (res[i].right - res[i].left != 1) {
                //     res[i].isParent = true;
                //     res[i].children = [];
                // }
                // if (res[i].right - res[i].left == 1) {
                //     res[i].isParent = false;
                // }
              
              });
              that.organizationnodes = res
            }
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //机构树点击
    organizationonClick: function (evt, treeId, treeNode) {
      if (!treeNode.open) {
        this.organizationontreeClick(treeId, treeNode);
       
      }
      const orgparentZNode = this.OrgztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      if(orgparentZNode){
        this.parentPid = orgparentZNode.id
      }else{
        this.parentPid = 1
      }
      
      this.orgnodeitem = treeNode;
    },
    organizationonExpand: function (evt, treeId, treeNode) {
      if (treeNode.open) {
        this.organizationontreeClick(treeId, treeNode);
      }
    },
    organizationontreeClick: function (treeId, treeNode) {
      const parentZNode = this.OrgztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      var that = this;
      var query = {
        action: "Service",
        method: "getChildren",
        data: [treeNode.id],
      };
      if (treeNode.right - treeNode.left == 1) {
      } else {
        treeNode.children = [];
        if (treeNode.isParent) {
          that.$http
            .post(that.PATH.ORGANIZATIONGETLIST, JSON.stringify(query))
            .then(
              (success) => {
                const childrenData = eval(success.data.result);
                //判断子节点是否包含子元素
                childrenData.forEach((v, i) => {
                  childrenData[i].open = false;
                  childrenData[i].isParent = true;
                  childrenData[i].children = [];
                  // if (childrenData[i].right - childrenData[i].left != 1) {
                  //   childrenData[i].isParent = true;
                  //   childrenData[i].children = [];
                  // }
                  // if (childrenData[i].right - childrenData[i].left == 1) {
                  //   childrenData[i].isParent = false;
                  // }
                });
                
                that.OrgztreeObj.refresh();
                that.OrgztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
                that.orgnodeitem =null
              },
              (error) => {
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
              }
            );
        }
      }
    },
    organizationCreated(ztreeObj){
      this.OrgztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], false);
    },
    organizationaddHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      var node = this.OrgztreeObj.getNodeByParam(treeNode.id,1);
      let that = this;
      if (item && !item.querySelector(".tree_extra_delbtn")) {
        const btn = document.createElement("sapn");
        btn.id = `${treeid}_${treeNode.id}_btn`;
        btn.classList.add("tree_extra_delbtn");
        // btn.innerText = "删除";
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.orgdelModal = true;
          that.orgnodeitem = treeNode;
          
          that.OrgztreeObj.selectNode(node)
        });
        item.appendChild(btn);
      }
      if (item && !item.querySelector(".tree_extra_renamebtn")) {
        const renamebtn = document.createElement("sapn");
        renamebtn.id = `${treeid}_${treeNode.id}_renamebtn`;
        renamebtn.classList.add("tree_extra_renamebtn");
        // renamebtn.innerText = "   重命名   ";
        renamebtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.organizationtype = "edit";
          that.organizationEdit_modal = true;
          // that.datatreatingEditname = treeNode.name;
          that.formVaildate.code=treeNode.code
          that.formVaildate.name=treeNode.name
          that.formVaildate.remark=treeNode.remark
          that.orgnodeitem = treeNode;
          that.OrgztreeObj.selectNode(node)
          // this.clickRename(treeNode)
        });
        item.appendChild(renamebtn);
      }
      
    },
    organizationremoveHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if (item) {
        const btn = item.querySelector(".tree_extra_delbtn");
        if (btn) {
          item.removeChild(btn);
        }
        const renamebtn = item.querySelector(".tree_extra_renamebtn");
        if (renamebtn) {
          item.removeChild(renamebtn);
        }
      }
    },
    //机构删除弹框
    organizationmenuDel() {
      var that = this;
      let treeNodeinfo = that.orgnodeitem;
      
      let data=new Object()
      data={
        id:treeNodeinfo.id,
        pid:treeNodeinfo.pid,
        layer:treeNodeinfo.layer,
        code:treeNodeinfo.code,
        name:treeNodeinfo.name,
        remark:treeNodeinfo.remark}
      var query = {
        action: "Service",
        method: "delete",
        data: [data],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.ORGANIZATIONGETDELETE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getorganizationdata()
            that.orgdelModal = false;
            that.refreshOrgParentNode(that.orgnodeitem);
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //机构删除弹框取消
    cancelorganizationEditmodal(){
      this.organizationEdit_modal = false;
      this.orgdelModal=false
    },
    //机构弹框确定
    confirmorganizationEditmodal() {
      let that = this;
      let nodeinfo = that.orgnodeitem;
      let data={}
      if (that.organizationtype == "edit") {
        data = {
          id:nodeinfo.id,
          pid:nodeinfo.pid,
          layer:nodeinfo.layer,
          code:that.formVaildate.code,
          name:that.formVaildate.name,
          remark:that.formVaildate.remark,
          // parentId:1,
          // leaf:false
        }
        that.RenameOrganizationNode(data);
      } else {
        data = {
          id:0,
          pid:that.parentPid,
          layer:nodeinfo.layer,
          code:that.formVaildate.code,
          name:that.formVaildate.name,
          remark:that.formVaildate.remark,
          // parentId:1,
          // leaf:false
        }
        that.addDOrganizationNode(data);
      }
    },
    addDOrganizationNode(node) {
      var that = this;
      var query = {
        action: "Service",
        method: "add",
        data: [node],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.ORGANIZATIONGETADD, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            // that.getdatatreatingdata()
            that.organizationEdit_modal = false;
            
            that.refreshOrgcurrentNode("", that.orgnodeitem);
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    RenameOrganizationNode(node) {
      var that = this;
      var query = {
        action: "Service",
        method: "update",
        data: [node],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.ORGANIZATIONGETUPDATE, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            that.organizationEdit_modal = false;
            // that.getdatatreatingdata()
            that.refreshOrgParentNode(that.orgnodeitem);
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    },
    //机构新建
    addOrgbtnClick(){
      let that=this
      that.organizationtype = "new";
      that.formVaildate={
        code:"",
        name:'',
        remark:''
      }
      if(that.orgnodeitem!=null){
        // if(!that.orgnodeitem.isNotShowIcon){
        //   that.organizationtype = "new";
        //   that.organizationEdit_modal = true;
          
        // }else{
        //   that.$Message.error({
        //     content: "该节点不支持新增",
        //     duration: 1,
        //   });
        // }
        that.organizationEdit_modal = true; 
      }else{
        that.$Message.error({
          content: "请选择机构节点",
          duration: 1,
        });
      }
      
      
    },
    //刷新当前选择节点的父节点
    refreshOrgParentNode(treeNode) {
      const parentZNode = this.OrgztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      let parentNode = treeNode.getParentNode();
      var that = this;
      if (parentNode) {
        var query = {
          action: "Service",
          method: "getChildren",
          data: [parentNode.id],
        };
        if (parentNode.right - parentNode.left != 1) {
          //文件夹
          parentNode.children = [];
          if (parentNode.isParent) {
            that.$http
              .post(that.PATH.ORGANIZATIONGETLIST, JSON.stringify(query))
              .then(
                (success) => {
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
                  
                  that.OrgztreeObj.refresh();
                  that.OrgztreeObj.addNodes(parentNode, childrenData, false); //添加节点
                  that.orgnodeitem =null
                },
                (error) => {
                  that.err_list = ["登录异常", "请联系管理员"];
                  that.errorTips_modal = true;
                }
              );
          }
        }
      } else {
        that.getOrganizationList();
      }
      that.orgnodeitem=null
    },
    //刷新当前的节点
    refreshOrgcurrentNode: function (treeId, treeNode) {
      // 点击事件
      const parentZNode = this.OrgztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      var that = this;
      var query = {
        action: "Service",
        method: "getChildren",
        data: [treeNode.id],
      };
      treeNode.children = [];
      that.$http
          .post(that.PATH.ORGANIZATIONGETLIST, JSON.stringify(query))
          .then(
            (success) => {
              const childrenData = eval(success.data.result);
              //判断子节点是否包含子元素
              childrenData.forEach((v, i) => {
                childrenData[i].open = false;
                childrenData[i].isParent = true;
                childrenData[i].children = [];
                // if (childrenData[i].right - childrenData[i].left != 1) {
                //   childrenData[i].isParent = true;
                //   childrenData[i].children = [];
                // }
                // if (childrenData[i].right - childrenData[i].left == 1) {
                //   childrenData[i].isParent = false;
                // }
              });
              
              this.OrgztreeObj.refresh();
              this.OrgztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
              that.orgnodeitem=null
            },
            (error) => {
              that.err_list = ["登录异常", "请联系管理员"];
              that.errorTips_modal = true;
            }
          );
      
      
    },

    
    //部门
    getDeptLeftTreeList(){
      var that = this;
      var query = {
        action: "Service",
        method: "getChildren",
        data: [0],
      };
      that.$Spin.show();
      that.$http
        .post(that.PATH.DEPTGETCHILDRENLIST, JSON.stringify(query))
        .then(
          (success) => {
            that.$Spin.hide();
            let res = success.data.result;
            if (res.length > 0) {
              res.forEach((v, i) => {
                res[i].open = false;

                res[i].isParent = true;
                res[i].children = [];
                // if (res[i].right - res[i].left != 1) {
                //     res[i].isParent = true;
                //     res[i].children = [];
                // }
                // if (res[i].right - res[i].left == 1) {
                //     res[i].isParent = false;
                // }
              
              });
              that.departmentnodes = res
            }
          },
          (error) => {
            that.$Spin.hide();
            that.err_list = ["登录异常", "请联系管理员"];
            that.errorTips_modal = true;
          }
        );
    
    },
    departmentonClick: function (evt, treeId, treeNode) {
      if (!treeNode.open) {
        this.departmenttreeClick(treeId, treeNode);
       
      }
      // const orgparentZNode = this.departztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      // if(orgparentZNode){
      //   this.parentPid = orgparentZNode.id
      // }else{
      //   this.parentPid = 1
      // }
      
      this.deptnodeitem = treeNode;
    },
    departmentonExpand: function (evt, treeId, treeNode) {
      if (treeNode.open) {
        this.departmenttreeClick(treeId, treeNode);
      }
      
    },
    departmenttreeClick: function (treeId, treeNode) {
      const parentZNode = this.departztreeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
      var that = this;
      var query = {
        action: "Service",
        method: "getChildren",
        data: [treeNode.id],
      };
      if (treeNode.right - treeNode.left == 1) {
      } else {
        treeNode.children = [];
        if (treeNode.isParent) {
          that.$http
            .post(that.PATH.DEPTGETCHILDRENLIST, JSON.stringify(query))
            .then(
              (success) => {
                const childrenData = eval(success.data.result);
                //判断子节点是否包含子元素
                childrenData.forEach((v, i) => {
                  childrenData[i].open = false;
                  childrenData[i].isParent = true;
                  childrenData[i].children = [];
                  // if (childrenData[i].right - childrenData[i].left != 1) {
                  //   childrenData[i].isParent = true;
                  //   childrenData[i].children = [];
                  // }
                  // if (childrenData[i].right - childrenData[i].left == 1) {
                  //   childrenData[i].isParent = false;
                  // }
                });
                
                that.departztreeObj.refresh();
                that.departztreeObj.addNodes(parentZNode, childrenData, false); //添加节点
                that.deptnodeitem =null
              },
              (error) => {
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
              }
            );
        }
      }
    },
    departmentCreated(ztreeObj){
      this.departztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], false);    
    },
    departmentaddHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      var node = this.departztreeObj.getNodeByParam(treeNode.id,1);
      let that = this;
      if (item && !item.querySelector(".tree_extra_delbtn")) {
        const btn = document.createElement("sapn");
        btn.id = `${treeid}_${treeNode.id}_btn`;
        btn.classList.add("tree_extra_delbtn");
        // btn.innerText = "删除";
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          // that.orgdelModal = true;
          that.deptnodeitem = treeNode;
          
          that.departztreeObj.selectNode(node)
        });
        item.appendChild(btn);
      }
      if (item && !item.querySelector(".tree_extra_renamebtn")) {
        const renamebtn = document.createElement("sapn");
        renamebtn.id = `${treeid}_${treeNode.id}_renamebtn`;
        renamebtn.classList.add("tree_extra_renamebtn");
        // renamebtn.innerText = "   重命名   ";
        renamebtn.addEventListener("click", (e) => {
          e.stopPropagation();
          that.departmenttype = "edit";
          // that.organizationEdit_modal = true;
          that.deptnodeitem = treeNode;
          that.departztreeObj.selectNode(node)
          // this.clickRename(treeNode)
        });
        item.appendChild(renamebtn);
      }
      
    },
    departmentremoveHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if (item) {
        const btn = item.querySelector(".tree_extra_delbtn");
        if (btn) {
          item.removeChild(btn);
        }
        const renamebtn = item.querySelector(".tree_extra_renamebtn");
        if (renamebtn) {
          item.removeChild(renamebtn);
        }
      }
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
    // 选择导入
    choseleadingin() {

    },

    
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
    overflow: auto;
    // padding: 20px;
  }
  .tooltipscontent{
    word-break:break-all; 

word-wrap:break-word;
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
    .ivu-table-row-highlight td, .ivu-table-stripe .ivu-table-body tr.ivu-table-row-highlight:nth-child(2n) td, .ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-highlight:nth-child(2n) td, tr.ivu-table-row-highlight.ivu-table-row-hover td {
        background-color: #fff !important;
        box-shadow: 0 10px 0px 0px rgba(0,0,0,0.10);
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

    // border: 1px solid rgba(0, 0, 0, 0.4);
    // padding: 6px 8px;
    // border-radius: 4px;
    // font-size: 12px;
    // line-height: 14px !important;

    display: inline-block;
    background: url(../../assets/images/setmanage/delete.png) no-repeat center center;
    background-size: 20px 20px !important;
    position: relative;
    line-height: 24px;
    height: 40px;
    width: 24px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
  }
  .tree_extra_renamebtn {
    float: right;
    margin-left: 10px;
    display: inline-block;
    background: url(../../assets/images/setmanage/edit.png) no-repeat center center;
    background-size: 20px 20px !important;
    position: relative;
    line-height: 24px;
    height: 40px;
    width: 24px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
  }
  .tree_extra_renamebtn:hover{
    background: url(../../assets/images/setmanage/edit-h.png) no-repeat center center;
  }
  .tree_extra_renamebtn:hover::before{
    content: "重命名";
    position: absolute;
    // left: -14px;
    // top:-26px;
    // pointer-events: none;
    z-index: -1;

    word-break: keep-all;
    white-space: nowrap;
    position: absolute;
    padding:4px 8px;
    display: block;
    color: #fff;
    background: rgba(0,0,0,0.70);
    border-radius: 5px;
    font-size: 14px;
    line-height:20px;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .tree_extra_renamebtn:hover::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #fff;
    height: 7px;
    line-height: 13px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0,0,0,0.70);
  }
  .tree_extra_renamebtn:hover,
  .tree_extra_delbtn:hover,
  .tree_extra_addbtn:hover {
    border-color: #000;
    color: #000;
  }
  .tree_extra_delbtn {
    margin-right:30px;
    float: right;
    margin-left: 30px;
    display: inline-block;
    background: url(../../assets/images/setmanage/delete.png) no-repeat center center;
    background-size: 20px 20px !important;
    position: relative;
    line-height: 24px;
    height: 40px;
    width: 24px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
  }
  .tree_extra_delbtn:hover::before{
    content: "删除";
    position: absolute;
    // left: -14px;
    // top:-26px;
    // pointer-events: none;
    z-index: -1;

    word-break: keep-all;
    white-space: nowrap;
    position: absolute;
    padding:4px 8px;
    display: block;
    color: #fff;
    background: rgba(0,0,0,0.70);
    border-radius: 5px;
    font-size: 14px;
    line-height:20px;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .tree_extra_delbtn:hover::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #fff;
    height: 7px;
    line-height: 13px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0,0,0,0.70);
  }
  .tree_extra_delbtn:hover{
    background: url(../../assets/images/setmanage/delete-h.png) no-repeat center center;
  }
}
.ivu-modal {
  // min-width: 600Px;
  // width: 600px !important;
  // height: 334px;
  // top: 300px;

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
      // margin-top: -30px;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
    }
    .roleDistribution_content{
      // padding: 30px 20px;
      height: 500px;
      overflow: auto;
      margin:30px 30px;
      text-align: left;
      
    }
    .userauthtree-content{
      padding: 30px 20px 0px;
      .displayflex {
        display: flex;
        justify-content: flex-end;
        align-items: center;
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
    }
    .userauthtreelist_content{
      padding: 30px 0px;
      height: 500px;
      overflow: auto;
      .ivu-tree-title{
        width: 80%;
        display: inline-block;
        margin: 0;
        padding: 0 4px;
        border-radius: 3px;
        cursor: pointer;
        vertical-align: top;
        color: #515a6e;
        transition: all .2s ease-in-out;
      }
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

    // text-align: center;
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

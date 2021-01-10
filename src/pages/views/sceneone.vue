<template>
  <div id="Sceneone">

    <Row :gutter="52">
      <Col span="8">
        <div class="rkpi_index_content height465">
          <div class="rkpi_index_content_title">
            <span class="title">RKPI综合得分</span>
            <!-- <span class="title_mini">RKPI Composite Score</span> -->
          </div>
          <div class="heightoverflow">
            <div class="rkpi_index_content_sort">
              <div class="left_sort">
                <div class="left_sorttit">中间值: {{map_list[0].map_top.mediannumber}}</div>
              </div>
              <div class="right_sort">
                <Select v-model="map_list[0].sort" @on-change="newRKPIsort(0)">
                  <Option value="scoreup">得分升序</Option>
                  <Option value="scoredown">得分降序</Option>
                  <Option value="organizationup">机构名升序</Option>
                  <Option value="organizationdown">机构名降序</Option>
                </Select>
              </div>
            </div>
            <div class="rkpi_item">
              <div
                v-for="(item,index) in map_list[0].map_top.table_1"
                :key="index"
                class="rkpi_item_content"
                 @click="isshowfirsttable(item,index,0)"
              >
                <Row>
                  <Col span="12" class="rkpi_item_title">{{item.name}}</Col>
                  <Col
                    span="12"
                    class="rkpi_item_righttitle"
                    style="text-align:right;"
                  >{{item.number}}</Col>
                </Row>
                <div class="progress-content">
                  <v-progress-linear
                    background-color="rgba(0,0,0,0.05)"
                    color="#008000"
                    :value="item.scoreleft"
                    height="10"
                    stream
                    reverse
                  ></v-progress-linear>
                  <v-progress-linear
                    background-color="rgba(0,0,0,0.05)"
                    color="#f00"
                    :value="item.scoreright"
                    height="10"
                  ></v-progress-linear>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span="8">
        <div class="rkpi_index_content height465">
          <div class="rkpi_index_content_title">
            <span class="title">审计综合得分</span>
            <!-- <span class="title_mini">RKPI and Audit Findings</span> -->
          </div>
          <div class="heightoverflow">
            <NewTabs class="tabs-animation" :active="tabsvalue" v-on:tabclick="tabclick">
              <NewTabPane label="总行" name="1">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{map_list[1].map_top.mediannumber}}</div>
                  </div>
                  <div class="right_sort">
                    <Select v-model="map_list[1].sort" @on-change="newRKPIsort(1)">
                      <Option value="scoreup">得分升序</Option>
                      <Option value="scoredown">得分降序</Option>
                      <Option value="organizationup">机构名升序</Option>
                      <Option value="organizationdown">机构名降序</Option>
                    </Select>
                  </div>
                </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in map_list[1].map_top.table_1"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{item.name}}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align:right;"
                      >{{item.number}}</Col>
                    </Row>
                    <div class="progress-content">
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#008000"
                        :value="item.scoreleft"
                        height="10"
                        stream
                        reverse
                      ></v-progress-linear>
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#f00"
                        :value="item.scoreright"
                        height="10"
                      ></v-progress-linear>
                    </div>
                    

                  </div>
                </div>
              </NewTabPane>
              <NewTabPane label="分行" name="2">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{map_list[2].map_top.mediannumber}}</div>
                    </div>
                    <div class="right_sort">
                      <Select v-model="map_list[2].sort" @on-change="newRKPIsort(2)">
                        <Option value="scoreup">得分升序</Option>
                        <Option value="scoredown">得分降序</Option>
                        <Option value="organizationup">机构名升序</Option>
                        <Option value="organizationdown">机构名降序</Option>
                      </Select>
                    </div>
                  </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in map_list[2].map_top.table_1"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{item.name}}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align:right;"
                      >{{item.number}}</Col>
                    </Row>
                    <div class="progress-content">
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#008000"
                        :value="item.scoreleft"
                        height="10"
                        stream
                        reverse
                      ></v-progress-linear>
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#f00"
                        :value="item.scoreright"
                        height="10"
                      ></v-progress-linear>
                    </div>

                  </div>
                </div>
              </NewTabPane>
              <NewTabPane label="监督" name="3">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{map_list[3].map_top.mediannumber}}</div>
                    </div>
                    <div class="right_sort">
                      <Select v-model="map_list[3].sort" @on-change="newRKPIsort(3)">
                        <Option value="scoreup">得分升序</Option>
                        <Option value="scoredown">得分降序</Option>
                        <Option value="organizationup">机构名升序</Option>
                        <Option value="organizationdown">机构名降序</Option>
                      </Select>
                    </div>
                  </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in map_list[3].map_top.table_1"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{item.name}}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align:right;"
                      >{{item.number}}</Col>
                    </Row>
                    <div class="progress-content">
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#008000"
                        :value="item.scoreleft"
                        height="10"
                        stream
                        reverse
                      ></v-progress-linear>
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#f00"
                        :value="item.scoreright"
                        height="10"
                      ></v-progress-linear>
                    </div>

                  </div>
                </div>
              </NewTabPane>
              <NewTabPane label="综合" name="4">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{map_list[4].map_top.mediannumber}}</div>
                    </div>
                    <div class="right_sort">
                      <Select v-model="map_list[4].sort" @on-change="newRKPIsort(4)">
                        <Option value="scoreup">得分升序</Option>
                        <Option value="scoredown">得分降序</Option>
                        <Option value="organizationup">机构名升序</Option>
                        <Option value="organizationdown">机构名降序</Option>
                      </Select>
                    </div>
                  </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in map_list[4].map_top.table_1"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{item.name}}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align:right;"
                      >{{item.number}}</Col>
                    </Row>
                    <div class="progress-content">
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#008000"
                        :value="item.scoreleft"
                        height="10"
                        stream
                        reverse
                      ></v-progress-linear>
                      <v-progress-linear
                        background-color="rgba(0,0,0,0.05)"
                        color="#f00"
                        :value="item.scoreright"
                        height="10"
                      ></v-progress-linear>
                    </div>

                  </div>
                </div>
              </NewTabPane>
            </NewTabs>
          </div>
        </div>
      </Col>
      <Col span="8">
        <div class="rkpi_index_content height465">
          <div class="rkpi_index_content_title">
            <span class="title">RKPI和审核发现</span>
            <!-- <span class="title_mini">RKPI and Audit Findings</span> -->
          </div>
          <div class="heightoverflow">
            <div class="rkpi_index_content_sort">
              <div class="left_sort">
                <div class="left_sorttit">中间值: {{map_list[5].map_top.mediannumber}}</div>
              </div>
              <div class="right_sort">
                <Select v-model="map_list[5].sort" @on-change="newRKPIsort(5)">
                  <Option value="scoreup">得分升序</Option>
                  <Option value="scoredown">得分降序</Option>
                  <Option value="organizationup">机构名升序</Option>
                  <Option value="organizationdown">机构名降序</Option>
                </Select>
              </div>
            </div>
            <div class="rkpi_item">
              <div
                v-for="(item,index) in map_list[5].map_top.table_1"
                :key="index"
                class="rkpi_item_content"
                @click="ishowtable"
              >
                <Row>
                  <Col span="12" class="rkpi_item_title">{{item.name}}</Col>
                  <Col
                    span="12"
                    class="rkpi_item_righttitle"
                    style="text-align:right;"
                  >{{item.number}}</Col>
                </Row>
                <div class="progress-content">
                  <v-progress-linear
                    background-color="rgba(0,0,0,0.05)"
                    color="#008000"
                    :value="item.scoreleft"
                    height="10"
                    stream
                    reverse
                  ></v-progress-linear>
                  <v-progress-linear
                    background-color="rgba(0,0,0,0.05)"
                    color="#f00"
                    :value="item.scoreright"
                    height="10"
                  ></v-progress-linear>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <!-- 表格 -->
    <Row v-if="ishowtable">
      <Col span="9" class="index_row1">
        <vxe-table
            border="none"
            ref="ktable"
            align="center"
            height="576"
            stripe
            :data="table1.data"
            highlight-hover-row
            highlight-current-row
            class="myfirsttable firststyle"
            @cell-click="cell_click1"
            @header-cell-click="header_cell_click1"
          >
            <vxe-table-column type="seq" title="  " width="20"></vxe-table-column>
            <vxe-table-column
              v-for="(n, index) in table1.data[0]"
              :key="index"
              :field="n.key"
              minWidth=120
              :title="n.key == 'ORG' ? '组织' : n.key"
            >
              <template v-slot="{ row }">
                <span
                  v-if="row[index].key == 'ORG'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value }}
                </span>
                <span
                  v-else-if="row[index].key == 'ROW_NEXT'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value }}
                </span>
                <div
                  v-else
                  class="num_split_5"
                  :style="{ color: row[index].fontcolor }"
                  :class="{ select_block: row[index].selected }"
                  
                >
                  <div>
                    {{ row[index].value.toString().split(".")[0] }}
                  </div>
                  <div>
                    .{{ row[index].value.toString().split(".")[1] }}
                  </div>
                </div>
              </template>
            </vxe-table-column>
          </vxe-table>
      </Col>
      <Col v-if="ishowtable" span="7" offset="1" class="index_row1" >
        <div class="index_row1_title">旋转后的成分矩阵</div>
        <vxe-table
            border="none"
            ref="ktable1"
            align="center"
            height="546"
            stripe
            class="myfirsttable seconstyle"
            :data="table2.data"
            highlight-hover-column
            highlight-current-column
            @cell-click="cell_click2"
            @header-cell-click="header_cell_click2"
          >
            <vxe-table-column
              v-for="(n, index) in table2.data[0]"
              :key="index"
              :field="n.key"
              minWidth=120
              :title="n.key"
            >
              <template v-slot="{ row }">
                <span
                  v-if="row[index].key == 'ICE'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value }}
                </span>
                <span
                  v-else-if="row[index].key == 'ROW_NEXT'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value }}
                </span>
                <span
                  v-else-if="row[index].key == 'CREATETIME'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value }}
                </span>
                <div
                  v-else
                  class="num_split_5"
                  :style="{ color: row[index].fontcolor }"
                  :class="{ select_block: row[index].selected }"
                >
                  <div>
                    {{ row[index].value.toString().split(".")[0] }}
                  </div>
                  <div>
                    .{{ row[index].value.toString().split(".")[1] }}
                  </div>
                </div>
              </template>
            </vxe-table-column>
          </vxe-table>
      </Col>
      <Col v-if="ishowtable" span="6" offset="1" class="index_row1" >
        <vxe-table
            border="none"
            ref="ktable3"
            align="center"
            height="576"
            stripe
            :data="table3.data"
            highlight-current-row
            @cell-click="cell_click3"
            class="myfirsttable firststyle"
          >
            <vxe-table-column
              v-for="(n, index) in table3.data[0]"
              :key="index"
              :field="n.key"
              minWidth=120
              :title="n.key == 'ORG' ? '组织' : n.key"
            >
              <template v-slot="{ row }">
                <span
                  v-if="row[index].key == '经营单位'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value}}
                </span>
                <div
                  v-else
                  class="num_split_5"
                  :style="{ color: row[index].fontcolor }"
                  :class="{ select_block: row[index].selected }"
                  
                >
                  <div>
                    {{ row[index].value.toString().split(".")[0] }} 
                  </div>
                  <div>
                    .{{ row[index].value.toString().split(".")[1] }} 
                  </div>
                </div>
              </template>
            </vxe-table-column>
          </vxe-table>
      
      </Col>
    </Row>
    <Row v-if="table3.data.length>0">
      <Col v-if="ishowtable" span="24" class="index_row1">
        <vxe-table 
            border="none"
            ref="ktable4"
            align="center"
            height="576"
            stripe
            :data="table4.data"
            highlight-hover-row
            highlight-current-row
            class="myfirsttable firststyle"
          >
            <vxe-table-column 
              v-for="(n, index) in table4.data[0]"
              :key="index"
              :field="n.key"
              minWidth=120
              :title="n.key == 'ORG' ? '组织' : n.key"
            >
              <template v-slot="{ row }">
                <span
                  v-if="row[index].key == 'ORG'"
                  :style="{ color: row[index].fontcolor }"
                  >{{ row[index].value }}
                </span>
                <div
                  v-else
                  class="num_split_5"
                  :style="{ color: row[index].fontcolor }"
                  :class="{ select_block: row[index].selected }"
                  
                >
                  <div>
                    {{ row[index].value.toString().split(".")[0] }}
                  </div>
                  <div>
                    .{{ row[index].value.toString().split(".")[1] }}
                  </div>
                </div>
              </template>
            </vxe-table-column>
          </vxe-table>
      </Col>
    </Row>
  </div>
</template>
<script>


import echarts from "echarts";
import { on, off } from "@/utils/tools";
// import { Tabs, TabPane } from "../components/tabs/index";
import { NewTabs,NewTabPane} from '../components/newtabs/index'
export default {
  name: "Sceneone",
  // components: { Tabs, TabPane },
  components: { NewTabs, NewTabPane },
  data() {
    return {
      mediannumber: 0, //综合得分中间值
      firstsort: "scoreup",
      mediannumber1:0,//总行中间值
      firstsort1:'scoreup',

      mediannumber2:0,//分行中间值
      firstsort2:'scoreup',

      mediannumber3:0,//监督中间值
      firstsort3:'scoreup',

      mediannumber4:0,//综合中间值
      firstsort4:'scoreup',

      mediannumber5:0,//rkpi和审核发现中间值
      firstsort5:'scoreup',

      tabsvalue:'1',

      ishowtable: false,
      dom: null,
      dom1: null,
      echarts: echarts,

      default_sort:'scoreup',
      map_list:[
        {map_top:[],sort:'scoreup'},
        {map_top:[],sort:'scoreup'},
        {map_top:[],sort:'scoreup'},
        {map_top:[],sort:'scoreup'},
        {map_top:[],sort:'scoreup'},
        {map_top:[],sort:'scoreup'}
      ],

      firstrkpilist1:[],//综合得分
      firstrkpilist2:[],//总行
      firstrkpilist3:[],//分行
      firstrkpilist4:[],//监督
      firstrkpilist5:[],//综合
      firstrkpilist6:[],//RKPI和审核发现

      rkpilist: [],
      table: {
        columns: [
        ],
        data: [],
      },
      table1: {
        columns: [],
        data: [],
      },
      table2:{
        columns: [
        ],
        data: [],
      },
      table2CurrentColumnIndex:0,
      table3:{
        columns: [
        ],
        data: [],
      },
      table4:{
        columns: [
        ],
        data: [],
      },

      // selectRow: null,
      currentObjIndex:0,
      data_table: [],
      firsttablecolums:[],//暂存第一个表格的表头
      secondtablecols:[],//暂存第二个表格的第一列
      thirdlyTableData:[],//第三个表格暂存的表内容
      tablerow_index3:0,//暂存第三个高亮的行
      default_color: "rgba(0,0,0,0.80)",
      max_color: "#FD5056",
      select_color: "#246FEA",
    };
  },
  created() {
    //RKPI综合得分
    let datavbmodaltypeObj = localStorage.getItem("datavbmodaltypeObj");
    //总行datasd
    let datasdmodaltypeObj = localStorage.getItem("datasdmodaltypeObj");
    //分行datasc
    let datascmodaltypeObj = localStorage.getItem("datascmodaltypeObj");
    //监管datase
    let datasemodaltypeObj = localStorage.getItem("datasemodaltypeObj");
    //综合datascde
    let datascdemodaltypeObj = localStorage.getItem("datascdemodaltypeObj");
    //rkpi和审核发现datavkpi
    let datavkpimodaltypeObj = localStorage.getItem("datavkpimodaltypeObj");

    this.map_list[0]=this.InitData(datavbmodaltypeObj,"datavb");
    this.map_list[1]=this.InitData(datasdmodaltypeObj,"datasd");
    this.map_list[2]=this.InitData(datascmodaltypeObj,"datasc");
    this.map_list[3]=this.InitData(datasemodaltypeObj,"datase");
    this.map_list[4]=this.InitData(datascdemodaltypeObj,"datascde");
    this.map_list[5]=this.InitData(datavkpimodaltypeObj,"datavkpi");

    // console.log(this.map_list,'this.map_list')
    this.map_list.forEach((v,i)=>{
      this.newgetData(v.map_top,i);
      this.newgetData(v.map_1,i);
      this.newgetData(v.map_2,i);
      this.newgetData(v.map_3,i);
      this.newgetData(v.map_4,i);
    })
    
  },
  mounted() {
  },
  methods: {
    InitData(model,key){
      var data_model;
      var node;
      data_model=model;
      node={};
      node.sort =this.default_sort
      node.key=key;
      node.map_top={};
      node.map_1={};
      node.map_2={};
      node.map_3={};
      node.map_4={};

      if (data_model) {
        data_model = JSON.parse(data_model);
        if (Object.keys(data_model).length > 0) {
          for (const i in data_model) {
            if (data_model.hasOwnProperty(i)) {
              if (i.indexOf(`因子分析${key}入库`) != -1&&i.indexOf("_因子载荷")== -1){
                // this.getData(node.map_top={};,'0');
                node.map_top.key=i;
                node.map_top.value=data_model[i];
                node.map_top.id=key+'indexdata'
                node.map_top.index=0;
                node.map_1.key=i;
                node.map_1.value=data_model[i];
                node.map_1.id=key+'indexdata'
                node.map_1.index=1;
              }else if (i.indexOf(`因子分析${key}入库`) != -1&&i.indexOf("_因子载荷")!= -1){
                node.map_2.key=i;
                node.map_2.value=data_model[i];
                node.map_2.id=key+'indexdata1'
                node.map_2.index=2;
              }else if (i == `${key}入库`){
                node.map_3.key=i;
                node.map_3.value=data_model[i];
                node.map_3.id=key+'indexdata2'
                node.map_3.index=3;
              } 
            }
          }
        }
      }
      return node;
    },
    //获取列表
    getData(id,datatype) {
      if(datatype==null){
        return
      }
      var that = this;
      var query = {
        action: "Service",
        method: "getColumns",
        data: [id],
      };
      that.$Spin.show()
      that.$http.post(that.PATH.GETCOLUMS, JSON.stringify(query)).then(
        (success) => {
        
          that.$Spin.hide()
          // console.log(success);
          if(success.data.result){
            var res = success.data.result;
            if(res.length>0){
              that.getData2(res, id,datatype);
              //RKPI综合得分
              if(datatype=='datavbindexdata2'){
                  //下面第三个表格
                  // console.log(res,'res2')
                  that.table2.columns = [];
                  that.disposethirdlyTableheader(res)
              }
              
            }
            
          }
          
        },
        (error) => {
          that.$Spin.hide()
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    newgetData(node,modal_index) {
      if(!node){
        return;
      }
      var that = this;
      var query = {
        action: "Service",
        method: "getColumns",
        data: [node.value],
      };
      // that.$Spin.show()
      that.$http.post(that.PATH.GETCOLUMS, JSON.stringify(query)).then(
        (success) => {
        
          that.$Spin.hide()
          // console.log(success);
          if(success.data.result){
            var res = success.data.result;
            if(res.length>0){
              
              that.newgetData2(res, node,modal_index);
              // that.newdisposethirdlyTableheader(res,modal_index)
              // console.log(that.map_list[node.index],'123')
              // console.log( that.map_list[modal_index],node.index,"_______");
              if(node.index!=0){
                that.map_list[modal_index]['map_'+node.index].table_columns=res;
              }
              
              
              // // //RKPI综合得分
              // if(datatype=='datavbindexdata2'){
              //     //下面第三个表格
              //     // console.log(res,'res2')
              //     that.table2.columns = [];
              //     that.disposethirdlyTableheader(res)
              // }
              
            }
            
          }
          
        },
        (error) => {
          that.$Spin.hide()
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    newgetData2(list, p_node,modal_index) {
      var that = this;
      var id=p_node.value;
      var datatype=p_node.id;
      var list_data = [];
      let hassum = true
      if (list.length > 0) {
        list.forEach((node) => {
          list_data.push(node.name);
          if (node.name.indexOf("SUM")!= -1) {
            //包含SUM
            hassum=true
          }else{
            hassum=false
          }
        });
      }
      var hasorderBy = []
      // [{ name: "SUM", asc: false }]
      if(hassum){
        hasorderBy=[{ name: "SUM", asc: false }]
      }else{
        hasorderBy=[]
      }
      var query_data = [
          {
            conditions: [],
            entityId: id,
            fields: list_data,
            orderBy: hasorderBy,
          },
          1,
          30,
        ];
      
      var query = {
        action: "Service",
        method: "pageQueryNoCount",
        data: query_data,
      };
      // let newfirstrkpilist = []
      let newscorelist=[] //进度条列表
      let middlenumber=new Number()

      // that.$Spin.show()
      that.$http.post(that.PATH.PAGEQUERYNOCOUNT, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide()
          var res = success.data.result;
          let newResult = success.data.result;
          //周
          if(Array.isArray(res)==true){
            if(p_node.index==0){
              if(res.length>0){
                res.forEach((v,i)=>{
                  res[i].name = v.ORG
                  res[i].number =that.tofix(v.SUM,6)
                  newscorelist.push(res[i].number)
                  res[i].strokeWidth = 5
                  res[i].strokeColor = ["#92BBFF", "#92BBFF"]
                })
                //处理进度条值
                that.get_progress(res)
                //取综合得分中间值
                middlenumber = newscorelist[Math.floor((newscorelist.length- 1)/ 2)]
                // that.sortByKey(res,'number')
                this.map_list[modal_index].map_top.table_1=res
                this.map_list[modal_index].map_top.mediannumber=middlenumber
                that.newRKPIsort(modal_index)
              }
            }else{
              this.map_list[modal_index]['map_'+p_node.index].table_1=res;
              this.map_list[modal_index]['map_'+p_node.index].newtable_1=[];
              // console.log(p_node,'p_node')
              // switch(p_node.index){
              //   case 1:
              //      if (modal_index==0){
              //        that.newdisposeFirstTable(res,modal_index)
              //      }
                   
              //   break;
              //   case 2:
              //     //  that.newdisposeSecondTable(res,modal_index)
              //     this.map_list[modal_index]['map_2'].newtable_1 = res
              //   break;
              //   case 3:
              //     //  that.newdisposethirdlyTable(res,modal_index)
              //      this.map_list[modal_index]['map_3'].newtable_1 = res
              //   break;
              //   default:
              //     console.log(p_node,'p_nodep_node')
              // }
             
            }
            that.$forceUpdate()
            
            // console.log(this.map_list,'1223')

          }
        },
        (error) => {
          that.$Spin.hide()
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    getData2(list, id,datatype) {
      var that = this;
      var list_data = [];
      let hassum = true
      if (list.length > 0) {
        list.forEach((node) => {
          list_data.push(node.name);
          if (node.name.indexOf("SUM")!= -1) {
            //包含SUM
            hassum=true
          }else{
            hassum=false
          }
        });
      }
      var hasorderBy = []
      // [{ name: "SUM", asc: false }]
      if(hassum){
        hasorderBy=[{ name: "SUM", asc: false }]
      }else{
        hasorderBy=[]
      }
      var query_data = [
          {
            conditions: [],
            entityId: id,
            fields: list_data,
            orderBy: hasorderBy,
          },
          1,
          30,
        ];
      
      var query = {
        action: "Service",
        method: "pageQueryNoCount",
        data: query_data,
      };
      // let newfirstrkpilist = []
      let newscorelist=[] //进度条列表
      let middlenumber=new Number()

      that.$Spin.show()
      that.$http.post(that.PATH.PAGEQUERYNOCOUNT, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide()
          var res = success.data.result;
          let newResult = success.data.result;

          if(Array.isArray(res)==true){
            if(res.length>0){
              res.forEach((v,i)=>{
                res[i].name = v.ORG
                res[i].number =that.tofix(v.SUM,6)
                newscorelist.push(res[i].number)
                res[i].strokeWidth = 5
                res[i].strokeColor = ["#92BBFF", "#92BBFF"]
              })
              //处理进度条值
              that.get_progress(res)
              //取综合得分中间值
              middlenumber = newscorelist[Math.floor((newscorelist.length- 1)/ 2)]
              
            }
            //RKPI综合得分datavb
            if(datatype =='datavbindexdata'){
              that.firstrkpilist1= res
              // //处理默认的得分升序
              that.sortByKey(that.firstrkpilist1,'number')
              that.mediannumber=middlenumber 
              
              that.disposeFirstTable(newResult,'1')
            }else if(datatype =='datavbindexdata1'){
              //下面第二个表格
              that.firstrkpilistObj1.secondTabble.data=newResult
              that.disposeSecondTable(newResult,'1')
      
            }else if(datatype =='datavbindexdata2'){
              //下面第三个表格
              // this.thirdlyTableData =newResult
              that.firstrkpilistObj1.thirdyTabble.data=newResult
              // that.disposethirdlyTable(newResult)
            }

            //总行datasd
            if(datatype=='datasdindexdata'){
              that.firstrkpilist2= res
              // //处理默认的得分升序
              that.mediannumber1=middlenumber 
              that.sortByKey(that.firstrkpilist2,'number')
              that.firstrkpilistObj2.firstTabble.data=newResult
              that.disposeFirstTable(newResult,'2')
            }else if(datatype=='datasdindexdata1'){
              that.firstrkpilistObj2.secondTabble.data=newResult
              that.disposeSecondTable(newResult,'2')
              
            }else if(datatype=='datasdindexdata2'){
             that.firstrkpilistObj2.thirdyTabble.data=newResult
            }else if(datatype=='datasdindexdata3'){
              that.firstrkpilistObj2.fourTabble.data=newResult
            }
            //分行datasc
            if(datatype=='datascindexdata'){
              that.firstrkpilist3= res
              // //处理默认的得分升序
              that.mediannumber2=middlenumber 
              that.sortByKey(that.firstrkpilist3,'number')
              that.firstrkpilistObj3.firstTabble.data=newResult
              that.disposeFirstTable(newResult,'3')
            }else if(datatype=='datascindexdata1'){
               that.firstrkpilistObj3.secondTabble.data=newResult
               that.disposeSecondTable(newResult,'3')
              
            }else if(datatype=='datascindexdata2'){
               that.firstrkpilistObj3.thirdyTabble.data=newResult
            }else if(datatype=='datascindexdata3'){
               that.firstrkpilistObj3.fourTabble.data=newResult
            }
             //监管datase
            if(datatype=='dataseindexdata'){
              that.firstrkpilist4= res
              // //处理默认的得分升序
              that.mediannumber3=middlenumber 
              that.sortByKey(that.firstrkpilist4,'number')
              that.firstrkpilistObj4.firstTabble.data=newResult
              that.disposeFirstTable(newResult,'4')
            }else if(datatype=='dataseindexdata1'){
              that.firstrkpilistObj4.secondTabble.data=newResult
              that.disposeSecondTable(newResult,'4')
            }else if(datatype=='dataseindexdata2'){
              that.firstrkpilistObj4.thirdyTabble.data=newResult
            }else if(datatype=='dataseindexdata3'){
              that.firstrkpilistObj4.fourTabble.data=newResult
            }
            //综合datascde
            if(datatype=='datascdeindexdata'){
              that.firstrkpilist5= res
              // //处理默认的得分升序
              that.mediannumber4=middlenumber 
              that.sortByKey(that.firstrkpilist5,'number')
              that.firstrkpilistObj5.firstTabble.data=newResult
              that.disposeFirstTable(newResult,'5')
            }else if(datatype=='datascdeindexdata1'){
              that.firstrkpilistObj5.secondTabble.data=newResult
              that.disposeSecondTable(newResult,'5')
            }else if(datatype=='datascdeindexdata2'){
              that.firstrkpilistObj5.thirdyTabble.data=newResult
            }else if(datatype=='datascdeindexdata3'){
              that.firstrkpilistObj5.fourTabble.data=newResult
            }
            //rkpi和审核发现datavkpi
            if(datatype=='datavkpiindexdata'){
              that.firstrkpilist6= res
              // //处理默认的得分升序
              that.mediannumber5=middlenumber 
              that.sortByKey(that.firstrkpilist6,'number')
            }

          }
        },
        (error) => {
          that.$Spin.hide()
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    newdisposeFirstTable(list,type) {
      var zuzhi = "ORG";
      //列名
      var key_list = [];
      var sort_key_list = [];
      for (var name in list[0]) {
        if(name!='SUM'&&name!='ROW_NEXT'){
          key_list.push(name);
        }
      }
      // console.log(key_list, "列名1");
      //排序
      sort_key_list.push(zuzhi);
      key_list.forEach((n) => {
        // n == "ORG"||n == "SUM"? "" : sort_key_list.push(n);
        n == "ORG"? "" : sort_key_list.push(n);
      });
      // sort_key_list.push("SUM");
      // console.log(sort_key_list, "排序后列名");
      // this.firsttablecolums = sort_key_list
      this.map_list[type]['map_1'].sort_columns_list=sort_key_list

      //建造对象
      var list_model = new Array();

      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell];
          node.value = list[row][sort_key_list[cell]];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);

          if (node.key != zuzhi) {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
            //找行最大值
            if (Math.abs(node.value) > row_max) {
              row_max = Math.abs(node.value);
              row_max_cell = cell;
            }
          }
        }
        // node_list[row_max_cell].fontcolor = this.max_color;
        list_model.push(node_list);
      }
      this.map_list[type]['map_1'].newtable_1=list_model
      // console.log(this.map_list,type,'123')
     // console.log(list_model,'234')
    
        // console.log(this.map_list[type]['map_2'],type,'1223')
      // this.map_list[type].map_2.newtable_1 = 
      this.$nextTick(()=>{
          this.newdisposeSecondTable(type)
      })
     

      
    },
    //处理下面的第二个表格
    newdisposeSecondTable(type) {
      var list=this.map_list[type].map_2.table_1;
      // this.map_list[modal_index]['map_'+p_node.index].table_1
      console.log(list,type,'disposeSecondTable')
      var zuzhi = "ICE";
      var creacttime = "CREATETIME";
      //列名
      var key_list = [];
      var sort_key_list = [];
      let common_key_list=[]
      let firstsort_key_list = []
      for (var name in list[0]) {
        if(name!='name'&&name!='number'&&name!='scoreleft'&&name!='scoreright'&&name!='strokeColor'&&name!='strokeWidth'){
          key_list.push(name);
        }
        
      }
      //从第一个表格头找到相同的
      firstsort_key_list.push(zuzhi);
      if(this.map_list[type]['map_1'].sort_columns_list.length>0){
        common_key_list=this.map_list[type]['map_1'].sort_columns_list.filter(function(n) {
            return key_list.indexOf(n) != -1
        });
      }
      sort_key_list = [...firstsort_key_list,...common_key_list]
    
      //建造对象
      var list_model = new Array();

      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell];
          node.value = list[row][sort_key_list[cell]];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);

          if (node.key != zuzhi&&node.key!=creacttime&&node.key!='ROW_NEXT') {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
            //找行最大值
            if (Math.abs(node.value) > row_max) {
              row_max = Math.abs(node.value);
              row_max_cell = cell;
              
            }
          }
        }
        node_list[row_max_cell].fontcolor = this.select_color;
        list_model.push(node_list);
      }
 
      console.log(this.map_list[type]['map_2'],"!!!!!!!!!!")
      this.currentObjIndex=type
      this.map_list[type]['map_2'].newtable_1=list_model
      this.$forceUpdate()

      // this.newdisposethirdlyTableheader(this.map_list[type]['map_2'].secondtablecols,type)
      
    },
    //处理下面的第三个表格头
    newdisposethirdlyTableheader(list,type){
      console.log(this.map_list[type]['map_2']);
      console.log(list,type,'1233_______')
      var zuzhi = "ORG";
      //列名
      var key_list = [];
      var sort_key_list = [];
      let common_key_list=[]
      let firstsort_key_list = []
      for (var name in list) {
        key_list.push({desc:list[name].desc,name:list[name].name})
        
      }
      console.log(key_list, "排序后列名");
      this.map_list[type]['map_3'].newtable_columns=key_list
      // this.table3.columns = key_list
      
    },
    //处理下面的第三个表格
    newdisposethirdlyTable(model_index) {
      // console.log(headercolumlist,'headercolumlist')
      let common_key_list=[]
      let sort_key_list =[]
      let first_key_list=[]
      // console.log(this.map_list[model_index]['map_3'].table_columns)
      first_key_list.push(this.map_list[model_index]['map_3'].table_columns[0])
      
      this.map_list[model_index]['map_3'].secondtablecols.forEach((key,index) => {
        this.map_list[model_index]['map_3'].table_columns.forEach((item,j) => {
            if(item.desc === key) {
              common_key_list.push(this.map_list[model_index]['map_3'].table_columns[j])
            }
        })
      })
      // console.log(common_key_list,'common_key_list')
     
      sort_key_list = [...first_key_list,...common_key_list]
      // console.log(sort_key_list,'sort_key_list')
      //建造对象
      var list_model = new Array();
      var list =this.map_list[model_index]['map_3'].table_1
      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell].desc;
          node.value = list[row][sort_key_list[cell].name];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);
          if (node.key!='经营单位') {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
          }
        }
        list_model.push(node_list);
      }
      // this.table3.data = list_model
      // console.log(list_model,'map_3.newtable_1')
      this.map_list[model_index]['map_3'].newtable_1=list_model
      console.log(this.map_list[model_index]['map_3'].newtable_1,'this.table3.data')
      // this.tab
      this.table3.data=this.map_list[model_index].map_3.newtable_1

      this.thirdlysetHigthRow()
    },
    //处理下面的第一个表格
    disposeFirstTable(list,type) {
      var zuzhi = "ORG";
      //列名
      var key_list = [];
      var sort_key_list = [];
      for (var name in list[0]) {
        if(name!='name'&&name!='number'&&name!='scoreleft'&&name!='scoreright'&&name!='strokeColor'&&name!='strokeWidth'&&name!='SUM'&&name!='ROW_NEXT'){
          key_list.push(name);
        }
      }
      // console.log(key_list, "列名1");
      //排序
      sort_key_list.push(zuzhi);
      key_list.forEach((n) => {
        // n == "ORG"||n == "SUM"? "" : sort_key_list.push(n);
        n == "ORG"? "" : sort_key_list.push(n);
      });
      // sort_key_list.push("SUM");
      // console.log(sort_key_list, "排序后列名");
      this.firsttablecolums = sort_key_list

      //建造对象
      var list_model = new Array();

      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell];
          node.value = list[row][sort_key_list[cell]];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);

          if (node.key != zuzhi) {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
            //找行最大值
            if (Math.abs(node.value) > row_max) {
              row_max = Math.abs(node.value);
              row_max_cell = cell;
            }
          }
        }
        // node_list[row_max_cell].fontcolor = this.max_color;
        list_model.push(node_list);
      }

      
      that.firstrkpilistObj1.firstTabble.data=list_model


      
    },
    //处理下面的第二个表格
    disposeSecondTable(list) {
      // console.log(list,'disposeSecondTable')
      var zuzhi = "ICE";
      var creacttime = "CREATETIME";
      //列名
      var key_list = [];
      var sort_key_list = [];
      let common_key_list=[]
      let firstsort_key_list = []
      for (var name in list[0]) {
        if(name!='name'&&name!='number'&&name!='scoreleft'&&name!='scoreright'&&name!='strokeColor'&&name!='strokeWidth'){
          key_list.push(name);
        }
        
      }
      //从第一个表格头找到相同的
      firstsort_key_list.push(zuzhi);
      if(this.firsttablecolums.length>0){
        common_key_list=this.firsttablecolums.filter(function(n) {
            return key_list.indexOf(n) != -1
        });
      }
      sort_key_list = [...firstsort_key_list,...common_key_list]
    
      //建造对象
      var list_model = new Array();

      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell];
          node.value = list[row][sort_key_list[cell]];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);

          if (node.key != zuzhi&&node.key!=creacttime&&node.key!='ROW_NEXT') {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
            //找行最大值
            if (Math.abs(node.value) > row_max) {
              row_max = Math.abs(node.value);
              row_max_cell = cell;
              
            }
          }
        }
        node_list[row_max_cell].fontcolor = this.select_color;
        list_model.push(node_list);
      }

      
      let secondtablecols=[]
      list_model.forEach((v,i)=>{
        secondtablecols.push(v.value)
      })
      this.secondtablecols=secondtablecols
      this.table1.data = list_model

      
      
    },
    //处理下面的第三个表格头
    disposethirdlyTableheader(list){
      var zuzhi = "ORG";
      //列名
      var key_list = [];
      var sort_key_list = [];
      let common_key_list=[]
      let firstsort_key_list = []
      for (var name in list) {
        key_list.push({desc:list[name].desc,name:list[name].name})
        
      }
      console.log(key_list, "排序后列名");
      this.table3.columns = key_list
      
    },
    //处理下面的第三个表格
    disposethirdlyTable(list,headercolumlist) {
      // console.log(headercolumlist,'headercolumlist')
      let common_key_list=[]
      let first_key_list=[]
      let sort_key_list =[]
      first_key_list.push(this.table3.columns[0])
        headercolumlist.forEach((key,index) => {
          this.table3.columns.forEach((item,j) => {
              if(item.desc === key) {
                common_key_list.push(this.table3.columns[j])
              }
          })
      })
      // console.log(common_key_list,'common_key_list')
      sort_key_list = [...first_key_list,...common_key_list]
      //建造对象
      var list_model = new Array();

      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell].desc;
          node.value = list[row][sort_key_list[cell].name];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);
          if (node.key!='经营单位') {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
          }
        }
        list_model.push(node_list);
      }
      this.table3.data = list_model
      this.thirdlysetHigthRow()
    },
    //第三个表格高亮
    thirdlysetHigthRow(){
        let firsttabble1columns=new Object()  //第一个表格行数据
        firsttabble1columns=this.$refs.ktable.getCurrentRecord()
        //修改第一个表格高亮行选中
        let firsthightRowName = ''
        if(firsttabble1columns.length>0){
          firsttabble1columns.map((w,j)=>{
            if(w.key=='ORG'){
              firsthightRowName=w.value
            }
          })
        }
        
        // console.log(this.table3.data,'this.table3.data')
        var row_max3 = 0;
        var row_max3_cell = 0;
        let row_index3=0 //索引
        this.table3.data.map((v,i)=>{
          if(v[0].value==firsthightRowName){
            row_index3=i
          }else{
            v.map((w,j)=>{
              w.fontcolor=this.default_color
            })
          }
        })
        this.table3.data[row_index3].map((v,i)=>{
          v.fontcolor = this.select_color
          if (Math.abs(v.value) > row_max3) {
            row_max3 = Math.abs(v.value);
            row_max3_cell = i
          }
        })
        this.table3.data[row_index3][row_max3_cell].fontcolor=this.max_color
        this.$nextTick(()=>{
          this.tablerow_index3=row_index3
          this.$refs.ktable3.setCurrentRow(this.$refs.ktable3.getData(row_index3));
        })
        

    },
    //处理下面的第四个表格
    disposefourTable(list) {
      var zuzhi = "ICE";
      var creacttime = "CREATETIME";
      //列名
      var key_list = [];
      var sort_key_list = [];
      let common_key_list=[]
      let firstsort_key_list = []
      for (var name in list[0]) {
        if(name!='name'&&name!='number'&&name!='scoreleft'&&name!='scoreright'&&name!='strokeColor'&&name!='strokeWidth'){
          key_list.push(name);
        }
        
      }
      // console.log(key_list,this.firsttablecolums, "列名");
      //排序
      firstsort_key_list.push(zuzhi);
      if(this.firsttablecolums.length>0){
        common_key_list=this.firsttablecolums.filter(function(n) {
            return key_list.indexOf(n) != -1
        });
      }
      sort_key_list = [...firstsort_key_list,...common_key_list]
      //排序
      // sort_key_list.push(zuzhi);
      // key_list.forEach((n) => {
      //   n == "ICE" ||n=='CREATETIME'||n=='ROW_NEXT'? "" : sort_key_list.push(n);
      // });
      // sort_key_list.push("CREATETIME");
      // console.log(sort_key_list, "排序后列名");

      //建造对象
      var list_model = new Array();

      for (var row = 0; row < list.length; row++) {
        var node_list = new Array();

        var row_max = 0;
        var row_max_cell = 0;
        for (var cell = 0; cell < sort_key_list.length; cell++) {
          var node = {};
          node.cell = cell;
          node.row = row;
          node.key = sort_key_list[cell];
          node.value = list[row][sort_key_list[cell]];
          node.fontcolor = this.default_color;
          node.selected = false;
          node_list.push(node);

          if (node.key != zuzhi&&node.key!=creacttime&&node.key!='ROW_NEXT') {
            //小数位
            node.value = Number(Number(node.value).toFixed(5));
            //找行最大值
            if (Math.abs(node.value) > row_max) {
              row_max = Math.abs(node.value);
              row_max_cell = cell;
              
            }
          }
        }
        node_list[row_max_cell].fontcolor = this.select_color;
        list_model.push(node_list);
      }

      
      // this.table1.data = list_model
      
      
    },
    //tab切换
    tabclick(item){
        this.tabsvalue = item.toString();
    },
    newRKPIsort(i){
      let data =this.map_list[i].sort
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.map_list[i].map_top.table_1, "number");
        // 下面对应的表格排序
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.map_list[i].map_top.table_1, "number");
        // 下面对应的表格排序
      } else if (data == "organizationup") {
        // 机构名升序
        this.map_list[i].map_top.table_1.sort(this.nameasc("name"));
        // 下面对应的表格排序
      } else if (data == "organizationdown") {
        // 机构名降序
        this.map_list[i].map_top.table_1.sort(this.namedesc("name"));
        // 下面对应的表格排序
      }
      this.$forceUpdate()
    },
    //进度条算法
    get_progress(list) {
      var max = Math.max.apply(
        Math,
        list.map((item) => {
          return Number(item.number);
        })
      );
      var min = Math.min.apply(
        Math,
        list.map((item) => {
          return Number(item.number);
        })
      );
      var cha = 0;
      // if (min < 0) {
      //   cha = -1 * min;
      //   max = max - min;
      //   min = 0;
      // }
      // console.log(cha,'cha');
      for (var i = 0; i < list.length; i++) {
        if(((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100>=0){
          list[i].scoreright =((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100
          list[i].scoreleft=0
        }else{
          list[i].scoreleft =Math.abs(((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100)
          list[i].scoreright =0
        }
        // list[i].score =
          ((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100;
      }
      // console.log(list,'123');
    },

    //数组对象方法排序:升序
    sortByKey(array, key) {
      return array.sort(function (a, b) {
        var value1 = a[key];
        var value2 = b[key];
        return value1 - value2;
      });
    },
    //数组对象方法排序:降序
    sortDownByKey(array, key) {
      return array.sort(function (a, b) {
        var value1 = a[key];
        var value2 = b[key];
        return value2 - value1;
      });
    },
    //正序
    numasc(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    },
    //倒序
    numdesc(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      };
    },
    //字母正
    nameasc(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1[0].charCodeAt() - value2[0].charCodeAt();
      };
    },
    //字母倒
    namedesc(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2[0].charCodeAt() - value1[0].charCodeAt();
      };
    },
    //强制保留6位小数
    tofix(val, len) {
      var f = parseFloat(val);
      if (isNaN(f)) {
        return false;
      }
      var f = Math.round(val * Math.pow(10, len)) / Math.pow(10, len);
      var s = f.toString();
      var rs = s.indexOf(".");
      if (rs < 0) {
        rs = s.length;
        s += ".";
      }
      while (s.length <= rs + len) {
        s += "0";
      }
      return s;
    },
    //初始化数据
    isshowfirsttable(item,index,typeindex){
      // console.log(item,index,typeindex)
      this.newdisposeFirstTable(this.map_list[typeindex].map_1.table_1,typeindex)
      this.table1.data=this.map_list[typeindex].map_1.newtable_1
      this.ishowtable =true
      this.$nextTick(()=>{
        this.table2.data=this.map_list[typeindex].map_2.newtable_1

        // this.SelectRowColor(index);
        this.selectRowmap1(index,true)
        // this.selectRowmap1block(index)
        // this.$nextTick(()=>{
        //   this.$refs.ktable.setCurrentRow(this.$refs.ktable.getData(row_index))
          
        // })
        
      })
      
    },
    //第一个表格块点击
    cell_click1(event) {
      // console.log(event,'event');
      //赋值选中
      // this.SelectRowColor(event.rowIndex);
      this.selectRowmap1(event.rowIndex,false)
      this.selectRowmap1block(event.rowIndex,event.columnIndex-1)
      this.selectcellmap2(event.columnIndex-1)
      
      // console.log(event.rowIndex,event.columnIndex-1,1231234)
      // //防止序号
      // if (event.columnIndex > 0) {
        
      //   //this.table1.data[event.rowIndex][event.columnIndex - 1].selected = true;
      // }
      // //防止机构
      // if(event.columnIndex > 1){
      //   // columnIndex
      //   this.table2CurrentColumnIndex = [event.columnIndex-1]
      //   this.secondtableClick(event.columnIndex-1) //处理第二个表格列高亮
      // }
    },
    //第一个表格头点击
    header_cell_click1(event) {
      //console.log(event);
    },
    //设置选中颜色
    SelectRowColor(row_index) {
      var row_max = 0;
      var row_max_cell = 0;
      // console.log(this.table1.data,row_index,'row_index')
      this.table1.data[row_index].map((n,i) => {
        if (n.fontcolor != this.max_color) n.fontcolor = this.select_color;
        if (Math.abs(n.value) > row_max) {
          row_max = Math.abs(n.value);
          row_max_cell = i
        }
      });
      this.table1.data[row_index][row_max_cell].fontcolor=this.max_color
      this.table1.data.forEach((v,i)=>{
        if(i!=row_index){
          v.map((n,i) => {
            n.selected = false;
            n.fontcolor = this.default_color;
          })
        }
      })
      //第二个表格列高亮 、第三个表格高亮 
      this.$nextTick(()=>{
        this.$refs.ktable.setCurrentRow(this.$refs.ktable.getData(row_index))
        this.secondtableClick(row_index)
      })
      
    },
    //第二个表格块点击
    cell_click2(event) {
      // console.log(event)
      if(event.columnIndex>0){
        this.selectcellmap2(event.columnIndex)
        this.selectRowmap1block(this.$refs.ktable.getRowIndex(this.$refs.ktable.getCurrentRecord()),event.columnIndex)
        
      }
      
    },
    //第二个表格头点击
    header_cell_click2(event) {
      // console.log(event);
      if(event.columnIndex>0){
        this.selectcellmap2(event.columnIndex)
        this.selectRowmap1block(this.$refs.ktable.getRowIndex(this.$refs.ktable.getCurrentRecord()),event.columnIndex)
      }
    },
    //第二个表格点击
    secondtableClick(event2columnIndex){
      // console.log(event2columnIndex,'event')
      //防止序号
      if (event2columnIndex > 0) {
        this.$refs.ktable1.setCurrentColumn(this.$refs.ktable1.getColumns()[event2columnIndex]);
        this.table2CurrentColumnIndex = [event2columnIndex-1]
        let firsttabble1columns=new Object()  //第一个表格行数据
        firsttabble1columns=this.$refs.ktable.getCurrentRecord()
        //修改第一个表格高亮行选中
        if(firsttabble1columns.length>0){
          firsttabble1columns.forEach((v,i)=>{
            if(i==event2columnIndex){
              firsttabble1columns[i].selected = true
            }else{
              firsttabble1columns[i].selected = false
            }
          })
        }
        
        var row_max = 0;
        var row_max_cell = 0;
        var row_max_row=0
        let TSsecondtablecols =[]
        // console.log(this.table2.data,'this.table2.data')
        this.table2.data.forEach((m,i) => {
          m.map((n,j) => {
            if(m[event2columnIndex].fontcolor!=this.default_color){
                if (Math.abs(n.value) > row_max) {
                  row_max = Math.abs(n.value);
                  row_max_cell = j
                  row_max_row=i
                }
            }
            if(j!=event2columnIndex){
              if (m[j].fontcolor== this.max_color) m[j].fontcolor= this.select_color;
            } 
          });
          //蓝色、红色 得到第三个表格得头
          // console.log(m[event2columnIndex],'m[event2columnIndex]')
          if(m[event2columnIndex].fontcolor!=this.default_color){
            TSsecondtablecols.push(m[0].value)
          }
          
        });
          this.table2.data[row_max_row][row_max_cell].fontcolor=this.max_color
        // console.log(TSsecondtablecols,'TSsecondtablecols')
        this.map_list[this.currentObjIndex]['map_3'].secondtablecols=TSsecondtablecols;
        // console.log(TSsecondtablecols,11223344)

       
        // this.secondtablecols = TSsecondtablecols  //第三个表格头真实信息
      
      
        //第三个表格重绘
        // console.log(this.map_list,'this.map_list[modal_index]');
        
          this.newdisposethirdlyTable(this.currentObjIndex)
        
      }
    
    },
    cell_click3( {row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode, $event}){
      // console.log(this.$refs.ktable3.getRowIndex(this.$refs.ktable3.getCurrentRecord()))
      this.$refs.ktable3.setCurrentRow(this.$refs.ktable3.getData(this.tablerow_index3));
    },
    //
    selectRowmap1(row_index,is_Init){
      var row_max = 0;
      var row_max_cell = 0;
      // console.log(this.table1.data,row_index,'row_index')
      this.table1.data[row_index].map((n,i) => {
        if (n.fontcolor != this.max_color) n.fontcolor = this.select_color;
        if (Math.abs(n.value) > row_max) {
          row_max = Math.abs(n.value);
          row_max_cell = i
        }
      });
      this.table1.data[row_index][row_max_cell].fontcolor=this.max_color
      this.table1.data.forEach((v,i)=>{
        if(i!=row_index){
          v.map((n,i) => {
            n.selected = false;
            n.fontcolor = this.default_color;
          })
        }
      })
      this.$refs.ktable.setCurrentRow(this.$refs.ktable.getData(row_index))
      if(is_Init){
        this.$nextTick(()=>{
          this.selectRowmap1block(row_index,row_max_cell)
        this.selectcellmap2(row_max_cell)
        })
        
      }
    },
    selectRowmap1block(row_index,columnIndex){
      this.table1.data[row_index].map((v,i)=>{
        v.selected = false
      })
      if(columnIndex>0){
         this.table1.data[row_index][columnIndex].selected = true;
      }
    },
    selectcellmap2(columnIndex){
      console.log(columnIndex)
      if (columnIndex > 0) {
        this.$refs.ktable1.setCurrentColumn(this.$refs.ktable1.getColumns()[columnIndex]);
        this.table2CurrentColumnIndex = [columnIndex-1]
        
        //修改第一个表格高亮行选中
        
        
        var row_max = 0;
        var row_max_cell = 0;
        var row_max_row=0
        let TSsecondtablecols =[]
        this.table2.data.forEach((m,i) => {
          m.map((n,j) => {
            if(m[columnIndex].fontcolor!=this.default_color){
                if (Math.abs(n.value) > row_max) {
                  row_max = Math.abs(n.value);
                  row_max_cell = j
                  row_max_row=i
                }
            }
            if(j!=columnIndex){
              if (m[j].fontcolor== this.max_color) m[j].fontcolor= this.select_color;
            } 
          });
          //蓝色、红色 得到第三个表格得头
          // console.log(m[columnIndex],'m[columnIndex]')
          if(m[columnIndex].fontcolor!=this.default_color){
            TSsecondtablecols.push(m[0].value)
          }
          
        });
        this.table2.data[row_max_row][row_max_cell].fontcolor=this.max_color
        this.map_list[this.currentObjIndex]['map_3'].secondtablecols=TSsecondtablecols;

        //第三个表格重绘
        this.newdisposethirdlyTable(this.currentObjIndex)
        
      }
    }
  },
};
</script>
<style lang="scss">
#Sceneone {
  min-width: 1200px;
  height: 100%;
  padding: 50px 70px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: #f5f5f5;
  .rkpi_index_content_title {
    background: #f5f5f5;
    border-radius: 15px;
    position: absolute;
    top: -30px;
    left: 38px;
    padding: 13px 20px 13px 20px;
    z-index: 1;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
      line-height: 24px;
    }
    .title_mini {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.4);
      letter-spacing: 0;
      line-height: 16px;
      margin-left: 15px;
    }
  }
  .rkpi_index_content_title1 {
    background: #f5f5f5;
    border-radius: 15px;
    position: absolute;
    top: -30px;
    left: 38px;
    padding: 20px 6px 20px 13px;
    z-index: 1;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
      line-height: 24px;
    }
    .title_mini {
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.4);
      letter-spacing: 0;
      line-height: 16px;
      margin-left: 15px;
    }
  }
  .rkpi_index_content_sort {
    display: flex;
    padding: 0px 50px 0px 50px;
    margin: 30px 0px;
    .left_sort {
      width: 261px;
      margin-right: 10px;
      background: rgba(0, 0, 0, 0.03);
      border-radius: 5px;

      .left_sorttit {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.4);
        letter-spacing: 0;
        line-height: 30px;
        margin-left: 20px;
      }
    }
    .right_sort {
      flex: 1;
      // width: 109px;
    }
  }
  .progress-content{
    display: flex;

  }
  #tabs {
    .tabs-nav {
      width: 100%;
      //    border-bottom: 1px solid #ddd;
      display: flex;
      background: #e8e8e8;
      border-radius: 10px 10px 0 0;
      .tabs-tab {
        flex: 1;
        display: inline-block;
        vertical-align: middle;
        padding: 0 20px;
        cursor: pointer;
        font-family: PingFangSC-Semibold;
        font-size: 22px;

        color: rgba(0, 0, 0, 0.4);
        letter-spacing: 0;
        text-align: center;
        line-height: 70px;
        height: 60px;
        position: relative;
        .tabs_right_top {
          width: 10px;
          height: 10px;
          // background: #F5F5F5;
          background: #fff;
          position: absolute;
          bottom: 0px;
          right: -10px;
          // border-radius: 0px 0 20px 0 !important;
          .tabs_border {
            width: 10px;
            height: 10px;
            // background: #fff;
            background: #e8e8e8;
            border-radius: 0px 0 0 10px !important;
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
          background: #e8e8e8;
          z-index: 111;
        }
        &.active {
          color: #2d8cf0;
          background: #fff;
          border-radius: 0px 10px 0 0px;
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
    }
    .tabs-content {
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
  #newtabs{
        background: #fff;
        .newtabs-nav{
            padding:0px 50px 0px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .newtabs-tab-left{
            width: 800px;
        }
        .newtabs-tab-right{
            flex:1;
            // text-align: right;
            display: flex;
            justify-content:flex-end;
            align-items: center;
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
  .tabs-content {
    height: 380px;
    overflow: hidden;
  }
  .tabs-content::-webkit-scrollbar {
    width: 4px;
    /*height: 4px;*/
  }
  .tabs-content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // background: rgba(0,0,0,0.2);
  }
  .tabs-content::-webkit-scrollbar-track {
    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    // border-radius: 0;
    // background: rgba(0,0,0,0.1);
  }

  /*实现动画*/
  .tabs-animation {
  }
  .tabs-animation .tabs-content {
    overflow: hidden;
  }
  .tabs-animation .tab-pane.active {
    animation: test 1s;
  }
  @keyframes test {
    0% {
      transform: translate(100%, 0);
      opacity: 0;
    }
  }
  .height440 {
    height: 500px;
  }
  .height465 {
    height: 465px;
  }
  .heightoverflow{
    height:400px;
    overflow: hidden;
  }
  .ivu-progress-inner {
    .ivu-progress-bg {
      height: 10px;
    }
  }

  .rkpi_index_content {
    background: #ffffff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    margin-top: 30px;
    padding-top: 50px;
    box-sizing: border-box;
    .rkpi_item {
      height: 240px;
      overflow: auto;
      padding: 0px 50px 0px 50px;
      margin-top: 25px;
      margin-bottom: 50px;
    }
    .rkpi_item1 {
      height: 330px;
      overflow: auto;
      padding: 0px 50px 0px 50px;
      margin-top: 25px;
      margin-bottom: 50px;
    }
    .rkpi_item_title {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
      line-height: 16px;
    }
    .rkpi_item::-webkit-scrollbar {
      width: 4px;
      // height: 4px;
    }
    .rkpi_item::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    .rkpi_item::-webkit-scrollbar-track {
      // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      // border-radius: 0;
      // background: rgba(0,0,0,0.1);
    }
    .rkpi_item_content {
      margin-bottom: 30px;
    }
    .rkpi_item_content:hover .rkpi_item_title,
    .rkpi_item_content:hover .rkpi_item_righttitle {
      color: #246fea;
      font-weight: bold;
    }
    .ivu-progress-bg {
      border-right: 1px solid #fff;
    }
    .rkpi_item_content:hover .ivu-progress-inner {
      .ivu-progress-bg {
        height: 20px !important;
      }
    }
    .rkpi_item_content:hover .v-progress-linear{
      height: 20px !important;
      transition:none !important;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
    }
    .rkpi_index_card {
      .ivu-tabs-nav-container {
        height: 60px;
        border-bottom: none !important;
      }
      .ivu-tabs-nav-container {
        border: none !important;
      }
      .ivu-tabs-nav {
        .ivu-tabs-tab {
          margin-right: 0px !important;
          border: none !important;
          height: 60px;
          line-height: 60px;
        }
      }
    }
  }
  .index_row {
    // margin-left: -10px;
    // margin-right: -10px;
    margin-top: 75px;
    border-radius: 10px;
    position: relative;
  }
  .index_row:hover,
  .rkpi_index_content:hover {
    background: #ffffff;
    box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.08);
  }
  .index_row1 {
    margin-top: 75px;
    border-radius: 10px;
    position: relative;
    padding: 30px 30px !important;
    background: #fff;
    // height: 576px;
    // overflow: auto;
    .index_row1_title {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
      text-align: center;
      line-height: 14px;
      margin-bottom: 30px;
    }
  }

  //表格
  .facedata-table.ivu-table-wrapper {
    margin: 0 auto;
    border: none;
    box-shadow: 0px 0px 1px 0px #ece6e6;
    transition: all 0.2s linear;
    &:hover {
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
    tr:nth-child(2n) td {
      background-color: #fff;
    }
    tr:nth-child(2n + 1) td {
      background-color: rgba(36, 111, 234, 0.05);
    }
    th {
      background-color: #fff;
    }
    th,
    td {
      border: none;
      font-size: 14px;
    }
    .ivu-table-body tr.ivu-table-row-hover {
      box-shadow: 0px 0px 1px 0px #ece6e6;
    }
    .ivu-table-body tr.ivu-table-row-hover td,
    .ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-hover td,
    tr.ivu-table-row-hover td {
      background-color: rgba(36, 111, 234, 0.1);
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
    .ivu-table-row-highlight td, .ivu-table-stripe .ivu-table-body tr.ivu-table-row-highlight:nth-child(2n) td, .ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-highlight:nth-child(2n) td, tr.ivu-table-row-highlight.ivu-table-row-hover td {
    background-color: #fff !important;
    box-shadow: 0 3px 0px 0px rgba(0,0,0,0.10);
  }
  }
  .myfirsttable.vxe-table{
    .vxe-body--row{
      background: rgba(36,111,234,0.05);
      color: rgba(0,0,0,0.80);
    }
    .vxe-body--row.row--stripe{
      background-color: #fff !important;
    }
    .row--current{
      background: #ffffff !important;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08),0px 0px 10px rgba(0, 0, 0, 0.08) !important;
      z-index:999;
    }
    .vxe-body--row.row-green {
      background-color: #187;
      color: #fff;
    }
    .vxe-header--column.col-blue {
      background-color: #2db7f5;
      color: #fff;
    }
    .vxe-body--column.col-red {
      background-color: red;
      color: #fff;
    }
    .vxe-body--column.col-orange {
      background-color: #f60;
      color: #fff;
    }
    .vxe-cell {
      white-space: pre-line;
      word-break: break-all;
      padding-left: 2px !important;
      padding-right: 2px !important;
    } 
    
  }
  .firststyle.vxe-table{
    .vxe-table--body{
      padding:10px 0px;
    }
  }
  .windows_view {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .num_split_5 {
    text-align: center;
    display: flex;
    // width: 200px;
    margin: auto;
    justify-content: center;
    align-items: center;
    height: 42px;
    line-height: 0px;
    div:nth-child(1) {
      text-align: right;
      width: 40px;
    }
    div:nth-child(2) {
      text-align: left;
      width: 90px;
    }
  }
  .select_block {
    background: rgba(211, 226, 251,0.8);
  }
  

  
}
</style>

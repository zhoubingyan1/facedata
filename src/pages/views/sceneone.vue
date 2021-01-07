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
                <div class="left_sorttit">中间值: {{mediannumber}}</div>
              </div>
              <div class="right_sort">
                <Select v-model="firstsort" @on-change="RKPIsort">
                  <Option value="scoreup">得分升序</Option>
                  <Option value="scoredown">得分降序</Option>
                  <Option value="organizationup">机构名升序</Option>
                  <Option value="organizationdown">机构名降序</Option>
                </Select>
              </div>
            </div>
            <div class="rkpi_item">
              <div
                v-for="(item,index) in firstrkpilist"
                :key="index"
                class="rkpi_item_content"
                 @click="isshowfirsttable(item,index)"
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
                    <div class="left_sorttit">中间值: {{mediannumber1}}</div>
                  </div>
                  <div class="right_sort">
                    <Select v-model="firstsort1" @on-change="RKPIsort1">
                      <Option value="scoreup">得分升序</Option>
                      <Option value="scoredown">得分降序</Option>
                      <Option value="organizationup">机构名升序</Option>
                      <Option value="organizationdown">机构名降序</Option>
                    </Select>
                  </div>
                </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in firstrkpilist1"
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
                    <div class="left_sorttit">中间值: {{mediannumber2}}</div>
                    </div>
                    <div class="right_sort">
                      <Select v-model="firstsort2" @on-change="RKPIsort2">
                        <Option value="scoreup">得分升序</Option>
                        <Option value="scoredown">得分降序</Option>
                        <Option value="organizationup">机构名升序</Option>
                        <Option value="organizationdown">机构名降序</Option>
                      </Select>
                    </div>
                  </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in firstrkpilist2"
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
                    <div class="left_sorttit">中间值: {{mediannumber3}}</div>
                    </div>
                    <div class="right_sort">
                      <Select v-model="firstsort3" @on-change="RKPIsort3">
                        <Option value="scoreup">得分升序</Option>
                        <Option value="scoredown">得分降序</Option>
                        <Option value="organizationup">机构名升序</Option>
                        <Option value="organizationdown">机构名降序</Option>
                      </Select>
                    </div>
                  </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in firstrkpilist3"
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
                    <div class="left_sorttit">中间值: {{mediannumber4}}</div>
                    </div>
                    <div class="right_sort">
                      <Select v-model="firstsort4" @on-change="RKPIsort4">
                        <Option value="scoreup">得分升序</Option>
                        <Option value="scoredown">得分降序</Option>
                        <Option value="organizationup">机构名升序</Option>
                        <Option value="organizationdown">机构名降序</Option>
                      </Select>
                    </div>
                  </div>
                <div class="rkpi_item">
                  <div
                    v-for="(item,index) in firstrkpilist4"
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
                <div class="left_sorttit">中间值: {{mediannumber5}}</div>
              </div>
              <div class="right_sort">
                <Select v-model="firstsort5" @on-change="RKPIsort5">
                  <Option value="scoreup">得分升序</Option>
                  <Option value="scoredown">得分降序</Option>
                  <Option value="organizationup">机构名升序</Option>
                  <Option value="organizationdown">机构名降序</Option>
                </Select>
              </div>
            </div>
            <div class="rkpi_item">
              <div
                v-for="(item,index) in firstrkpilist5"
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
     <!-- v-if="ishowtable1" -->
    <Row>
      <Col span="9" class="index_row1">
        <vxe-table
            border="none"
            ref="ktable"
            align="center"
            height="576"
            stripe
            :data="table.data"
            highlight-hover-row
            highlight-current-row
            
            @cell-click="cell_click"
            @header-cell-click="header_cell_click"
          >
            <vxe-table-column type="seq" title="  " width="20"></vxe-table-column>
            <vxe-table-column
              v-for="(n, index) in table.data[0]"
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
                    {{ row[index].value.toString().split(".")[0] }}.
                  </div>
                  <div>
                    {{ row[index].value.toString().split(".")[1] }}
                  </div>
                </div>
              </template>
            </vxe-table-column>
          </vxe-table>
      </Col>
      <!-- v-if="ishowtable2" -->
      <Col span="7" offset="1" class="index_row1" >
        <div class="index_row1_title">旋转后的成分矩阵</div>
        <vxe-table
            border="none"
            ref="ktable1"
            align="center"
            height="576"
            stripe
            :data="table1.data"
            highlight-hover-column
            highlight-current-column
            @cell-click="cell_click1"
            @header-cell-click="header_cell_click1"
          >
            <vxe-table-column type="seq" title="  "  width="60"></vxe-table-column>
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
                    {{ row[index].value.toString().split(".")[0] }}.
                  </div>
                  <div>
                    {{ row[index].value.toString().split(".")[1] }}
                  </div>
                </div>
              </template>
            </vxe-table-column>
          </vxe-table>
      </Col>
      <!-- v-if="ishowtable3" -->
      <Col span="6" offset="1" class="index_row1" >
        <Table
          class="facedata-table account-table"
          stripe
          :columns="table2.columns"
          :data="table2.data"
        ></Table>
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

      ishowtable1: false,
      ishowtable2: false,
      ishowtable3: false,
      dom: null,
      dom1: null,
      echarts: echarts,
      firstrkpilist:[],//综合得分
      firstrkpilist1:[],//总行
      firstrkpilist2:[],//分行
      firstrkpilist3:[],//监督
      firstrkpilist4:[],//综合
      firstrkpilist5:[],//RKPI和审核发现

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

      selectRow: null,
      selectColumn: null,

      data_table: [],
      default_color: "rgba(0,0,0,0.80)",
      max_color: "#FD5056",
      select_color: "#246FEA",
    };
  },
  created() {
    // this.getData();
    let newmodaltype = localStorage.getItem("modaltype");
    // console.log(newmodaltype, "newmodaltype", typeof newmodaltype);
    if (newmodaltype) {
      newmodaltype = JSON.parse(newmodaltype);
      if (Object.keys(newmodaltype).length > 0) {
        // console.log(111);
        for (const i in newmodaltype) {
          // console.log(i, newmodaltype[i]);
          if (newmodaltype.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datavb入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(newmodaltype[i],'indexdata');
            } else if (i.indexOf("因子分析datasd入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(newmodaltype[i],'indexdata1');
            } else if (i.indexOf("因子分析datasc入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(newmodaltype[i],'indexdata2');
            }else if (i.indexOf("因子分析datasc入库") != -1&&i.indexOf("_因子载荷")!= -1){
              this.getData(newmodaltype[i],'indexdata6');
            } else if (i.indexOf("因子分析datase入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(newmodaltype[i],'indexdata3');
            } else if (i.indexOf("因子分析datascde入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(newmodaltype[i],'indexdata4');
            } else if (i.indexOf("因子分析datavkpi入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(newmodaltype[i],'indexdata5');
            }
          }
        }
      }
    }
    
  },
  mounted() {
  },
  methods: {
    //获取列表
    getData(id,datatype) {
      if(datatype==null){
        return
      }
      var that = this;
      // var id = "ZM_10268_2_S1607337857606_s_p$DM1";
      var query = {
        action: "Service",
        method: "getColumns",
        data: [id],
      };
      //用下面的that.getData2(res)，这个需要删掉，暂时使用
      // that.getData2([]);
      that.$Spin.show()
      that.$http.post(that.PATH.GETCOLUMS, JSON.stringify(query)).then(
        (success) => {
        
          that.$Spin.hide()
          // console.log(success);
          if(success.data.result){
            var res = success.data.result;
            if(res.length>0){
              that.getData2(res, id,datatype);
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
          //周
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
            if(datatype=='indexdata'){
              // that.firstrkpilist= res
              // // //处理默认的得分升序
              // that.sortByKey(that.firstrkpilist,'number')
              // that.mediannumber=middlenumber 
              that.firstrkpilist2= res
              // //处理默认的得分升序
              that.mediannumber2=middlenumber 
              that.sortByKey(that.firstrkpilist2,'number')
              
            }else if(datatype=='indexdata1'){
              that.firstrkpilist1= res
              // //处理默认的得分升序
              that.mediannumber1=middlenumber 
              that.sortByKey(that.firstrkpilist1,'number')
            }else if(datatype=='indexdata2'){
              // that.firstrkpilist2= res
              // // //处理默认的得分升序
              // that.mediannumber2=middlenumber 
              // that.sortByKey(that.firstrkpilist2,'number')
              that.firstrkpilist= res
              // //处理默认的得分升序
              that.sortByKey(that.firstrkpilist,'number')
              that.mediannumber=middlenumber 
              that.disposeFirstTable(newResult)
            }else if(datatype=='indexdata3'){
              that.firstrkpilist3= res
              // //处理默认的得分升序
              that.mediannumber3=middlenumber 
              that.sortByKey(that.firstrkpilist3,'number')
            }else if(datatype=='indexdata4'){
              that.firstrkpilist4= res
              // //处理默认的得分升序
              that.mediannumber4=middlenumber 
              that.sortByKey(that.firstrkpilist4,'number')
            }else if(datatype=='indexdata5'){
              that.firstrkpilist5= res
              // //处理默认的得分升序
              that.mediannumber5=middlenumber 
              that.sortByKey(that.firstrkpilist5,'number')
            }else if(datatype=='indexdata6'){
              //下面第二个表格
              that.table1.columns = [];
              that.disposeSecondTable(newResult)
              
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
    out(){
      that.table.columns = [];
              let newkey = []
              // console.log(newResult,'newResult')   
              if (newResult.length > 0) {
                for(let key in newResult[0]){
                    if(key!='name'&&key!='number'&&key!='scoreleft'&&key!='scoreright'&&key!='strokeColor'&&key!='strokeWidth'){
                      newkey.push(key)
                    }
                    
                }
                for(let i=0;i<newkey.length;i++){
                  // that.table.columns.push({
                  //   title:newkey[i],
                  //   field:newkey[i],
                  //   slots:{}
                  // })
                  that.table.columns.push({
                    title:newkey[i],
                    align: "center",
                  })

                  that.table.columns.forEach((v,i)=>{
                    // v.slots.default=function ({ row }, h) { 
                    //   return [
                    //     h('span', {
                    //       style: {
                    //         color: row.showClick
                    //       },
                    //       on: {
                    //         // click: () => this.addressClickEvent(row)
                    //       }
                    //     }, row[newkey[i]])
                    //   ]
                    // }
                    v.render = function(h, params) {
                      let result = "";
                      result = params.row[newkey[i]];
                      return h("div", [
                        h(
                          "span",
                          {
                            style: {
                              color: params.row.showClick=='1'?'#246FEA':'rgba(0,0,0,0.80)'
                            },
                            on: {
                              click: () => {
                                
                              }
                            }
                          },
                          result
                        )
                      ]);
                    };
                    
                  })  
                }
                // that.tofix(v.SUM,6)
                let newtabledata=newResult
                newtabledata.forEach((v,i)=>{
                  // console.log(v[newkey[i]],'v[newkey[i]]')
                  // if(typeof v[newkey[i]]=='number'){
                  //   v[newkey[i]]=Number(that.tofix(v[newkey[i]],6))
                  // }
                  v.FACTOR_1_STEP2=that.tofix(v.FACTOR_1_STEP2,6)
                  v.FACTOR_2_STEP2=that.tofix(v.FACTOR_2_STEP2,6)
                  v.FACTOR_3_STEP2=that.tofix(v.FACTOR_3_STEP2,6)
                  v.SUM=that.tofix(v.SUM,6)
                  v.showClick='0'
                  v.index=i
                  v._highlight=false
                })
                // console.log(newtabledata,'newtabledata')
                that.table.data = newtabledata;
                that.sortByKey(that.table.data,'number')
              }
    },
    //处理下面的第一个表格
    disposeFirstTable(list) {
      var zuzhi = "ORG";
      //列名
      var key_list = [];
      var sort_key_list = [];
      for (var name in list[0]) {
        if(name!='name'&&name!='number'&&name!='scoreleft'&&name!='scoreright'&&name!='strokeColor'&&name!='strokeWidth'){
          key_list.push(name);
        }
      }

      // console.log(key_list, "列名");

      //排序
      sort_key_list.push(zuzhi);
      key_list.forEach((n) => {
        n == "ORG" || n == "SUM" ? "" : sort_key_list.push(n);
      });
      sort_key_list.push("SUM");
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

          if (node.key != zuzhi&&node.key!='ROW_NEXT') {
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

      // console.log(list_model, "建立模型对象");
      // this.data_table = list_model;
      this.table.data = list_model
      
      
    },
    //处理下面的第一个表格
    disposeSecondTable(list) {
      var zuzhi = "ORG";
      var creacttime = "CREATETIME";
      //列名
      var key_list = [];
      var sort_key_list = [];
      for (var name in list[0]) {
        if(name!='name'&&name!='number'&&name!='scoreleft'&&name!='scoreright'&&name!='strokeColor'&&name!='strokeWidth'){
          key_list.push(name);
        }
        
      }

      console.log(key_list, "列名");

      //排序
      sort_key_list.push(zuzhi);
      key_list.forEach((n) => {
        n == "ORG" ||n=='CREATETIME'? "" : sort_key_list.push(n);
      });
      sort_key_list.push("CREATETIME");
      console.log(sort_key_list, "排序后列名");

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

      console.log(list_model, "建立模型对象");
      // this.data_table = list_model;
      this.table1.data = list_model
      
      
    },
    tabclick(item){
        // console.log(item,'item')
        this.tabsvalue = item.toString();
    },
    //综合得分排序
    RKPIsort(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist, "number");
        // 下面对应的表格排序
        this.sortByKey(this.table.data, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist, "number");
        // 下面对应的表格排序
        this.sortDownByKey(this.table.data, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist.sort(this.nameasc("name"));
        // 下面对应的表格排序
        this.table.data.sort(this.nameasc("title"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist.sort(this.namedesc("name"));
        // 下面对应的表格排序
        this.table.data.sort(this.namedesc("title"));
      }
    },
    //总行排序
    RKPIsort1(data){
      if(data=='scoreup'){ 
        // 得分升序
        this.sortByKey(this.firstrkpilist1,'number')
      }else if(data=='scoredown'){
        // 得分降序
        this.sortDownByKey(this.firstrkpilist1,'number')
      }else if(data=='organizationup'){
        // 机构名升序
        this.firstrkpilist1.sort(this.nameasc('name'))
        
      }else if(data=='organizationdown'){
        // 机构名降序
        this.firstrkpilist1.sort(this.namedesc('name'))
      }
    },
    //分行排序
    RKPIsort2(data){
      if(data=='scoreup'){ 
        // 得分升序
        this.sortByKey(this.firstrkpilist2,'number')
      }else if(data=='scoredown'){
        // 得分降序
        this.sortDownByKey(this.firstrkpilist2,'number')
      }else if(data=='organizationup'){
        // 机构名升序
        this.firstrkpilist2.sort(this.nameasc('name'))
        
      }else if(data=='organizationdown'){
        // 机构名降序
        this.firstrkpilist2.sort(this.namedesc('name'))
      }
    },
    //监督排序
    RKPIsort3(data){
      if(data=='scoreup'){ 
        // 得分升序
        this.sortByKey(this.firstrkpilist3,'number')
      }else if(data=='scoredown'){
        // 得分降序
        this.sortDownByKey(this.firstrkpilist3,'number')
      }else if(data=='organizationup'){
        // 机构名升序
        this.firstrkpilist3.sort(this.nameasc('name'))
        
      }else if(data=='organizationdown'){
        // 机构名降序
        this.firstrkpilist3.sort(this.namedesc('name'))
      }
    },
    //综合排序
    RKPIsort4(data){
      if(data=='scoreup'){ 
        // 得分升序
        this.sortByKey(this.firstrkpilist4,'number')
      }else if(data=='scoredown'){
        // 得分降序
        this.sortDownByKey(this.firstrkpilist4,'number')
      }else if(data=='organizationup'){
        // 机构名升序
        this.firstrkpilist4.sort(this.nameasc('name'))
        
      }else if(data=='organizationdown'){
        // 机构名降序
        this.firstrkpilist4.sort(this.namedesc('name'))
      }
    },
    //RKPI和审核发现
    RKPIsort5(data){
      if(data=='scoreup'){ 
        // 得分升序
        this.sortByKey(this.firstrkpilist5,'number')
      }else if(data=='scoredown'){
        // 得分降序
        this.sortDownByKey(this.firstrkpilist5,'number')
      }else if(data=='organizationup'){
        // 机构名升序
        this.firstrkpilist5.sort(this.nameasc('name'))
        
      }else if(data=='organizationdown'){
        // 机构名降序
        this.firstrkpilist5.sort(this.namedesc('name'))
      }
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
    ishowtable() {
      // this.ishowtable1 = true;

    },
    ishowsecondtable() {
      // console.log(1)
      this.ishowtable2 = true;
    },
    ishowthreetable() {
      this.ishowtable3 = true;
    },
    isshowfirsttable(item,index){
      this.InitRowColor();
      // var index = 1;
      this.$refs.ktable.setCurrentRow(this.$refs.ktable.getData(index));
      this.SelectRowColor(index);
    },

    //设置高亮列
    setHigthCell() {
      this.InitRowColor();
      var index = 1;
      this.$refs.ktable.setCurrentColumn(this.$refs.ktable.getColumns()[index]);
    },
    //设置高亮行
    setHigthRow() {
      this.InitRowColor();
      var index = 1;
      this.$refs.ktable.setCurrentRow(this.$refs.ktable.getData(index));
      this.SelectRowColor(index);
      console.log();
    },
    //块点击
    cell_click(event) {
      console.log(event);
      this.InitRowColor();
      //赋值选中
      this.SelectRowColor(event.rowIndex);
      //防止序号
      if (event.columnIndex > 0) {
        this.table.data[event.rowIndex][event.columnIndex - 1].selected = true;
      }
      // columnIndex
      this.$refs.ktable1.setCurrentColumn(this.$refs.ktable1.getColumns()[event.columnIndex]);
      this.table1.data.forEach((m,i) => {
        m.map((n) => {
          console.log(n,'nn',event.row[event.columnIndex].key)
          if(n.key==event.row[event.columnIndex-1].key){
            if (n.fontcolor != this.default_color) n.fontcolor = this.max_color;
          }else{
            if (n.fontcolor != this.default_color) n.fontcolor = this.select_color;
            // n.fontcolor = this.default_color;
          }
          
        });
      });

    },
    //头点击
    header_cell_click(event) {
      //console.log(event);
    },
    //初始化颜色
    InitRowColor() {
      this.table.data.forEach((m) => {
        m.map((n) => {
          n.selected = false;
          if (n.fontcolor != this.max_color) n.fontcolor = this.default_color;
        });
      });
    },
    //设置选中颜色
    SelectRowColor(row_index) {
      this.table.data[row_index].map((n) => {
        if (n.fontcolor != this.max_color) n.fontcolor = this.select_color;
      });
    },

    InitFun(list) {
      var zuzhi = "org";
      // var list = [
      //   { test1: "1.42511", test2: "2.32531112", Sum: "5.21321234", org: "A" },
      //   { org: "B", test1: "1.42511", test2: "2.32", Sum: "5.21234" },
      //   {
      //     test1: "1.42511",
      //     test2: "-12.325313232",
      //     Sum: "-5.2123412321",
      //     org: "C",
      //   },
      // ];
      //列名
      var key_list = [];
      var sort_key_list = [];
      for (var name in list[0]) {
        key_list.push(name);
      }
      console.log(key_list, "列名");

      //排序
      sort_key_list.push(zuzhi);
      key_list.forEach((n) => {
        n == "org" || n == "Sum" ? "" : sort_key_list.push(n);
      });
      sort_key_list.push("Sum");
      console.log(sort_key_list, "排序后列名");

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
        node_list[row_max_cell].fontcolor = this.max_color;
        list_model.push(node_list);
      }

      console.log(list_model, "建立模型对象");
      this.data_table = list_model;
    },

    

    InitSecondRowColor() {
      this.table1.data.forEach((m) => {
        m.map((n) => {
          n.selected = false;
          if (n.fontcolor != this.max_color) n.fontcolor = this.default_color;
        });
      });
    },
    SelectSecondRowColor(row_index) {
      this.table1.data[row_index].map((n) => {
        if (n.fontcolor != this.max_color) n.fontcolor = this.select_color;
      });
    },

    //块点击
    cell_click1(event) {
      //console.log(event);
      // this.InitRowColor();
      // //赋值选中
      // this.SelectRowColor(event.rowIndex);
      // //防止序号
      // if (event.columnIndex > 0) {
      //   this.table.data[event.rowIndex][event.columnIndex - 1].selected = true;
      // }
    },
    //头点击
    header_cell_click1(event) {
      //console.log(event);
    },
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
  .leftecharts {
    width: 50px;
    height: 405px;
    min-height: 405px;
  }
  .reports2 {
    height: 405px;
    width: 100%;
    min-height: 405px;
    .bg1 {
      text-align: center;
      background: rgba(255, 219, 152, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg1:hover {
      background: rgba(255, 219, 152, 0.8);
    }
    .bg2 {
      text-align: center;
      background: rgba(255, 202, 156, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg2:hover {
      background: rgba(255, 202, 156, 0.8);
    }
    .bg3 {
      text-align: center;
      background: rgba(255, 178, 153, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg3:hover {
      background: rgba(255, 178, 153, 0.8);
    }
    .bg4 {
      text-align: center;
      background: rgba(255, 236, 154, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg4:hover {
      background: rgba(255, 236, 154, 0.8);
    }
    .bg5 {
      text-align: center;
      background: rgba(255, 219, 152, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg5:hover {
      background: rgba(255, 219, 152, 0.8);
    }
    .bg6 {
      text-align: center;
      background: rgba(254, 201, 152, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg6:hover {
      background: rgba(254, 201, 152, 0.8);
    }
    .bg7 {
      text-align: center;
      background: rgba(255, 246, 176, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg7:hover {
      background: rgba(255, 246, 176, 0.8);
    }
    .bg8 {
      text-align: center;
      background: rgba(255, 236, 154, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg8:hover {
      background: rgba(255, 236, 154, 0.8);
    }
    .bg9 {
      text-align: center;
      background: rgba(255, 219, 152, 1);
      height: 135px;
      cursor: pointer;
    }
    .bg9:hover {
      background: rgba(255, 219, 152, 0.8);
    }
    .middlecontent {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .reports1 {
    height: 612px;
    margin: 60px 50px 76px 50px;
    min-height: 612px;
  }
  .echartstwocontent {
    height: 560px;
    min-height: 520px;
  }
  .echartscontent {
    position: relative;
    margin: 60px 50px 0px 0px;
    display: flex;
    min-height: 400px;
  }
  .bottomlinecontent {
    position: relative;
    margin: 35px 50px 0px 50px;
    .flexlineconent {
      display: flex;
      display: -webkit-flex; /* Safari */
      align-items: center;
      justify-content: center;
    }
    .index_echartsline2 {
      width: calc(100% - 22px);
      height: 1px;
      background: #cdcdcd;
      margin-top: 1px;
      flex: 1;
    }
    .index_echarts_rightheight {
      background: #fff;
      width: 22px;
    }
    .index_echarts_rightmiddle {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      bottom: -14px;
      background: #fff;
      padding: 0px 10px;
    }
    .index_echarts_icon2 {
      color: #cdcdcd;
      margin-left: -6px;
      //  background: #fff;
    }
  }
  .leftlinecontent {
    display: flex;
    display: -webkit-flex; /* Safari */
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 15px;
    height: 465px;
    min-height: 465px;
    .index_echartsline {
      width: 1px;
      height: 387px;
      background: #cdcdcd;
    }
    .index_echarts_bottom {
      width: 15px;
      height: 50px;
      text-align: center;
      padding-top: 30px;
    }
    .index_echarts_height {
      width: 15px;
      height: 5px;
      text-align: center;
      z-index: 11;
      background: #fff;
    }
    .index_echarts_icon1 {
      background: #fff;
      color: #cdcdcd;
      height: 5px;
      line-height: 5px !important;
      margin-top: -12px;
    }
  }
  .index_echarts_leftmiddle {
    position: absolute;
    left: 0px;
    width: 20px;
    top: 140px;
    background: #fff;
    padding: 10px 0px;
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
  .mytable-style .vxe-table{
    .vxe-body--row{
      background: rgba(36,111,234,0.05);
      color: rgba(0,0,0,0.80);
    }
    .vxe-body--row.row--stripe{
      background-color: #fff !important;
    }
    .vxe-body--row.row--current {
      background: #FFFFFF !important;
      box-shadow: 0 5px 30px 0 rgba(0,0,0,0.10) !important;
      z-index: 99;
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
    height: 60px;
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
    background: rgba(36,111,234,0.2);
    border-radius: 4px;
  }
  .vxe-table--body{
    padding:10px 0px;
  }
  .vxe-table .row--current{
    background: #ffffff !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08),0px 0px 10px rgba(0, 0, 0, 0.08) !important;
    z-index:999;
  }
  
}
</style>

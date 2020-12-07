<template>
  <div id="index">
    <Row :gutter="52">
      <Col span="8">
      <div class="rkpi_index_content height415">
        <div class="rkpi_index_content_title">
          <span class="title">RKPI综合得分</span>
          <span class="title_mini">RKPI Composite Score</span>
        </div>
        <div class="rkpi_item">
          <div
            v-for="(item,index) in rkpilist"
            :key="index"
            class="rkpi_item_content"
            @click="ishowtable"
          >
            <Row>
              <Col
                span="12"
                class="rkpi_item_title"
              >{{item.name}}</Col>
              <Col
                span="12"
                class="rkpi_item_righttitle"
                style="text-align:right;"
              >{{item.number}}</Col>
            </Row>
            <Progress
              :percent="item.score"
              :stroke-width="item.strokeWidth"
              status="active"
              :stroke-color="item.strokeColor"
              hide-info
            />
          </div>
        </div>

      </div>
      </Col>
      <Col span="8">
      <div
        class="rkpi_index_content height440"
        style="margin-top:0px; padding-top:0px;"
      >
        <div class="rkpi_index_card">
          <Tabs
            class="tabs-animation"
            value="1"
          >
            <TabPane
              label="总行"
              name="1"
            >
              <div class="rkpi_item">
                <div
                  v-for="(item,index) in rkpilist1"
                  :key="index"
                  class="rkpi_item_content"
                  @click="ishowtable"
                >
                  <Row>
                    <Col
                      span="12"
                      class="rkpi_item_title"
                    >{{item.name}}</Col>
                    <Col
                      span="12"
                      class="rkpi_item_righttitle"
                      style="text-align:right;"
                    >{{item.number}}</Col>
                  </Row>
                  <Progress
                    :percent="item.score"
                    :stroke-width="item.strokeWidth"
                    status="active"
                    :stroke-color="item.strokeColor"
                    hide-info
                  />
                </div>
              </div>
            </TabPane>
            <TabPane
              label="分行"
              name="2"
            >this is tabs 2 content</TabPane>
            <TabPane
              label="监督"
              name="3"
            >this is tabs 3 content</TabPane>
            <TabPane
              label="综合"
              name="4"
            >this is tabs 4 content</TabPane>
          </Tabs>
        </div>
      </div>
      </Col>
      <Col span="8">
      <div class="rkpi_index_content height415">
        <div class="rkpi_index_content_title">
          <span class="title">RKPI和审核发现</span>
          <span class="title_mini">RKPI and Audit Findings</span>
        </div>
        <div class="rkpi_item">
          <div
            v-for="(item,index) in rkpilist1"
            :key="index"
            class="rkpi_item_content"
            @click="ishowtable"
          >
            <Row>
              <Col
                span="12"
                class="rkpi_item_title"
              >{{item.name}}</Col>
              <Col
                span="12"
                class="rkpi_item_righttitle"
                style="text-align:right;"
              >{{item.number}}</Col>
            </Row>
            <Progress
              :percent="item.score"
              :stroke-width="item.strokeWidth"
              status="active"
              :stroke-color="item.strokeColor"
              hide-info
            />
          </div>
        </div>

      </div>
      </Col>
    </Row>
    <!-- 表格 -->
    <Row>
      <Col
        span="6"
        class="index_row1"
        v-if="ishowtable1"
      >
      <Table
        class="facedata-table account-table"
        stripe
        :columns="table.columns"
        :data="table.data"
      ></Table>
      </Col>
      <Col
        span="7"
        offset="1"
        class="index_row1"
        v-if="ishowtable2"
      >
      <div class="index_row1_title">
        旋转后的成分矩阵
      </div>
      <Table
        class="facedata-table account-table"
        stripe
        :columns="table1.columns"
        :data="table1.data"
      ></Table>
      </Col>
      <Col
        span="9"
        offset="1"
        class="index_row1"
        v-if="ishowtable3"
      >
      <Table
        class="facedata-table account-table"
        stripe
        :columns="table.columns"
        :data="table.data"
      ></Table>
      </Col>
    </Row>
    <Row class="index_row">
      <Card
        shadow
        class="echartstwocontent"
      >
        <div class="rkpi_index_content_title1">
          <span class="title">风险分布热力图</span>
          <span class="title_mini">Risk Heat Map</span>
        </div>
        <div class="echartscontent">
          <div
            style="position: relative;"
            class="leftecharts"
          >
            <div class="leftlinecontent">
              <div>高</div>
              <div class="index_echarts_height">
                <Icon
                  class="index_echarts_icon1"
                  type="md-arrow-dropup"
                />
              </div>
              <div class="index_echartsline"></div>
              <div class="index_echarts_bottom">低</div>
            </div>
            <div class="index_echarts_leftmiddle">发生频率</div>
          </div>
          <div class="reports2">
            <Row
              type="flex"
              justify="center"
              align="middle"
            >

              <Col
                span="8"
                class="bg1"
              >
              <div class="middlecontent">授信-贷后检查执行</div>
              </Col>
              <Col
                span="8"
                class="bg2"
              >
              <div class="middlecontent">授信-审批条件的落实，分类准确性、全面性，不良贷款管理<br />运营-营业场所安全管理<br />新兴-同业八项规定执行；交易员行为管理<br />科技-信息科技治理，信息科技风险管理</div>
              </Col>
              <Col
                span="8"
                class="bg3"
              >
              <div></div>
              </Col>
              <Col
                span="8"
                class="bg4"
              >
              <div class="middlecontent">运营-会计业务管理<br />科技-业务连续性管理</div>
              </Col>
              <Col
                span="8"
                class="bg5"
              >
              <div class="middlecontent"></div>
              </Col>
              <Col
                span="8"
                class="bg6"
              >
              <div class="middlecontent"></div>
              </Col>
              <Col
                span="8"
                class="bg7"
              >
              <div class="middlecontent"></div>
              </Col>
              <Col
                span="8"
                class="bg8"
              >
              <div class="middlecontent"></div>
              </Col>
              <Col
                span="8"
                class="bg9"
              >
              <div class="middlecontent"></div>
              </Col>
            </Row>
          </div>
          <!-- <div class="reports2" ref="charts_two"></div> -->
        </div>
        <div class="bottomlinecontent">
          <div class="flexlineconent">
            <div class="index_echartsline2"></div>
            <div class="index_echarts_rightheight">
              <Icon
                class="index_echarts_icon2"
                type="md-arrow-dropright"
              />高
            </div>
          </div>
          <div class="index_echarts_rightmiddle">影响程度</div>
        </div>
      </Card>
    </Row>
    <Row class="index_row">
      <Card shadow>
        <div class="rkpi_index_content_title">
          <span class="title">转化率趋势图</span>
          <span class="title_mini">Risk Heat Map</span>
        </div>
        <div
          class="reports1"
          ref="charts_one"
        ></div>
      </Card>
    </Row>
  </div>
</template>
<script>
import echarts from "echarts";
import { on, off } from "@/utils/tools";
import { Tabs, TabPane } from "../components/tabs/index";
export default {
  name: "index",
  components: { Tabs, TabPane },
  data() {
    return {
      ishowtable1: false,
      ishowtable2: false,
      ishowtable3: false,
      dom: null,
      dom1: null,
      echarts: echarts,
      rkpilist: [
        {
          name: "市北分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "成都分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#FFAB92", "#FFAB92"],
        },
        {
          name: "浦东分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "市北分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "成都分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "浦东分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
      ],
      rkpilist1: [
        {
          name: "市北分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "成都分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "浦东分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "市北分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "成都分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
        {
          name: "浦东分行",
          number: "2.94016",
          score: 45,
          strokeWidth: 5,
          strokeColor: ["#92BBFF", "#92BBFF"],
        },
      ],
      table: {
        columns: [
          {
            title: "排名",
            key: "id",
            align: "center",
            render: (h, params) => {
              let result = "";
              result = params.row.id;
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      class: "cursor",
                    },
                    on: {
                      click: () => {
                        this.ishowsecondtable();
                      },
                    },
                  },
                  result
                ),
              ]);
              // return h('span',result)
            },
          },
          {
            title: "机构名称",
            key: "name",
            align: "center",
            render: (h, params) => {
              let result = "";
              result = params.row.name;
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      class: "cursor",
                    },
                    on: {
                      click: () => {
                        this.ishowsecondtable();
                      },
                    },
                  },
                  result
                ),
              ]);
              // return h('span',result)
            },
          },
          {
            title: "风险因子2",
            key: "name1",
            align: "center",
            render: (h, params) => {
              let result = "";
              result = params.row.name1;
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      class: "cursor",
                    },
                    on: {
                      click: () => {
                        this.ishowsecondtable();
                      },
                    },
                  },
                  result
                ),
              ]);
              // return h('span',result)
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
      },
      table1: {
        columns: [
          {
            title: "排名",
            key: "id",
            align: "center",
            render: (h, params) => {
              let result = "";
              result = params.row.id;
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      class: "cursor",
                    },
                    on: {
                      click: () => {
                        this.ishowthreetable();
                      },
                    },
                  },
                  result
                ),
              ]);
              // return h('span',result)
            },
          },
          {
            title: "机构名称",
            key: "name",
            align: "center",
            render: (h, params) => {
              let result = "";
              result = params.row.name;
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      class: "cursor",
                    },
                    on: {
                      click: () => {
                        this.ishowthreetable();
                      },
                    },
                  },
                  result
                ),
              ]);
              // return h('span',result)
            },
          },
          {
            title: "风险因子2",
            key: "name1",
            align: "center",
            render: (h, params) => {
              let result = "";
              result = params.row.name1;
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      class: "cursor",
                    },
                    on: {
                      click: () => {
                        this.ishowthreetable();
                      },
                    },
                  },
                  result
                ),
              ]);
              // return h('span',result)
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
      },
    };
  },
  created() {
    this.getData();
    // this.drawTwo(this.legenddata,this.xAxisdata,this.seriesdata)
  },
  mounted() {
    this.$nextTick(() => {
      // this.drawTwo(this.legenddata,this.xAxisdata,this.seriesdata)
      this.drawOne();
      on(window, "resize", this.resize);
    });
  },
  methods: {
    //获取列表
    getData() {
      var that = this;
      var id = "ZM_10268_2_S1607337857606_s_p$DM1";
      var query = {
        action: "Service",
        method: "getColumns",
        data: [id],
      };

      that.$http.post(that.PATH.GETCOLUMS, JSON.stringify(query)).then(
        (success) => {
          console.log(success);
          var res = success.data.result;
          that.getData2(res);
        },
        (error) => {
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    getData2(list) {
      var that = this;
      var id = "ZM_10268_2_S1607337857606_s_p$DM1";

      var list_data = [];
      list.forEach((node) => {
        list_data.push(node.name);
      });
      var query_data = [
        {
          conditions: [],
          entityId: id,
          fields: list_data,
          orderBy: [{ name: "SUM", asc: false }],
        },
        1,
        30,
      ];
      var query = {
        action: "Service",
        method: "pageQueryNoCount",
        data: query_data,
      };

      that.$http.post(that.PATH.PAGEQUERYNOCOUNT, JSON.stringify(query)).then(
        (success) => {
          console.log(success);
          var res = success.data.result;
        },
        (error) => {
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    drawOne() {
      // charts_one
      var legenddata = legenddata || []; //报表的标题
      var xAxisdata = xAxisdata || []; //报表得x轴
      var seriesdata = seriesdata || []; //报表得数据

      var bar_dv = this.$refs.charts_one;
      // let echarts = this.echarts.init(document.getElementById('reports'))
      this.dom = this.echarts.init(bar_dv);
      let option = {
        // dataZoom: [
        //     {
        //         id: 'dataZoomX',
        //         type: 'slider',
        //         xAxisIndex: [0],
        //         filterMode: 'filter'
        //     }
        // ],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross',
        //         label: {
        //             backgroundColor: '#6a7985'
        //         }
        //     },
        // },

        // legend: {
        //     type: 'scroll',
        //     top: 22,
        //     // data:['文章海报','视频海报'],
        //     // data:legenddata
        // },
        // grid: {
        //     left: '3%',
        //     right: '6%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        // toolbox: {
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         mark : {show: true},
        //         dataView : {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#CDCDCD",
            },
          },

          // boundaryGap: false,
          data: ["05.31", "06.10", "06.20", "06.30", "07.10", "07.20", "07.30"],
          // data: xAxisdata
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#92BBFF",
          },
          axisLine: {
            lineStyle: {
              color: "#CDCDCD",
            },
          },
          axisLabel: {
            formatter: "{value} k",
          },
          data: [],
        },
        // series:seriesdata
        series: [
          {
            name: "",
            type: "line",
            showSymbol: false,
            // type: 'bar',
            data: [1201, 1312, 1011, 1134, 9110, 2310, 2110],
            lineStyle: {
              color: "#92BBFF",
            },
            areaStyle: {
              color: "rgba(255,255,255,0)",
            },
            stack: "总量",
            markLine: {
              lineStyle: {
                color: "#FD5056",
              },
              data: [
                {
                  type: "average",
                  name: "平均值",
                },
              ],
            },
          },
          {
            name: "",
            type: "line",

            data: [2210, 1821, 1911, 2134, 2190, 3310, 3110],
            lineStyle: {
              color: "#246FEA",
            },
            areaStyle: {
              color: "#92BBFF",
            },
            stack: "总量",
            markLine: {
              lineStyle: {
                color: "#92BBFF",
              },
              data: [{ type: "median", name: "平均值" }],
            },
          },
        ],
      };

      this.dom.setOption(option, true);
    },
    drawTwo(legenddata, xAxisdata, seriesdata) {
      var legenddata = legenddata || []; //报表的标题
      var xAxisdata = xAxisdata || []; //报表得x轴
      var seriesdata = seriesdata || []; //报表得数据

      var bar_dv = this.$refs.charts_two;
      // let echarts = this.echarts.init(document.getElementById('reports'))
      this.dom1 = this.echarts.init(bar_dv);

      var series_list = [];
      var series_data = [
        { name: "", value: [0, 0, 5] },
        { name: "", value: [1, 0, 10] },
        { name: "", value: [2, 0, 15] },
        { name: "运营-会计业务管理\n科技-业务连续性管理", value: [0, 1, 10] },
        { name: "", value: [1, 1, 15] },
        { name: "", value: [2, 1, 20] },
        { name: "授信-贷后检查执行", value: [0, 2, 15] },
        {
          name:
            "授信-审批条件的落实，分类准确性、全面性，不良贷款管理\n运营-营业场所安全管理\n新兴-同业八项规定执行；交易员行为管理\n科技-信息科技治理，信息科技风险管理",
          value: [1, 2, 20],
        },
        { name: "", value: [2, 2, 30] },
      ];

      series_data.forEach((v) => {
        var node = {};
        node.name = v.name;
        (node.type = "heatmap"), (node.data = [{ value: v.value }]);
        node.label = {
          show: true,
          formatter: "{a}",
          lineHeight: 15,
          fontSize: 12,
          color: "#246FEA",
          align: "left",
          offset: [-150, 0],
          borderWidth: 0,
        };
        series_list.push(node);
      });
      // console.log(series_list);
      let option = {
        tooltip: {
          show: false,
        },
        animation: false,
        grid: {
          height: "100%",
          left: 0,
          top: 0,
          right: 0,
        },
        xAxis: {
          type: "category",
          data: [0, 1, 2],
          show: false,
        },
        yAxis: {
          type: "category",
          data: [0, 1, 2],
          show: false,
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: false,
          orient: "horizontal",
          inRange: {
            color: ["rgba(36,111,234,.1)", "rgba(36,111,234,.9)"],
          },
          show: false,
        },
        series: series_list,
      };
      this.dom1.setOption(option, true);
    },
    resize() {
      if (this.dom != null) {
        this.dom.resize();
      }
      if (this.dom1 != null) {
        this.dom1.resize();
      }
    },
    ishowtable() {
      this.ishowtable1 = true;
    },
    ishowsecondtable() {
      // console.log(1)
      this.ishowtable2 = true;
    },
    ishowthreetable() {
      this.ishowtable3 = true;
    },
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
};
</script>
<style lang="scss">
#index {
  min-width: 1200px;
  height: 100%;
  padding: 50px 70px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  .rkpi_index_content_title {
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
    height: 440px;
  }
  .height415 {
    height: 415px;
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
      height: 330px;
      overflow: scroll;
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
    height: 576px;
    overflow: scroll;
    .index_row1_title {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
      text-align: center;
      line-height: 14px;
      margin-bottom: 30px;
      text-align: right;
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
  }
}
</style>

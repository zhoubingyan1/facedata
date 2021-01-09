<template>
  <div id="index">
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
                <div class="left_sorttit">中间值: {{ mediannumber }}</div>
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
                v-for="(item, index) in firstrkpilist"
                :key="index"
                class="rkpi_item_content"
                @click="ishowtable"
              >
                <Row>
                  <Col span="12" class="rkpi_item_title">{{ item.name }}</Col>
                  <Col
                    span="12"
                    class="rkpi_item_righttitle"
                    style="text-align: right"
                    >{{ item.number }}</Col
                  >
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

                <!-- <Progress
                  :percent="item.score"
                  :stroke-width="item.strokeWidth"
                  status="active"
                  :stroke-color="item.strokeColor"
                  hide-info
                /> -->
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
            <NewTabs
              class="tabs-animation"
              :active="tabsvalue"
              v-on:tabclick="tabclick"
            >
              <NewTabPane label="总行" name="1">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{ mediannumber1 }}</div>
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
                    v-for="(item, index) in firstrkpilist1"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{
                        item.name
                      }}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align: right"
                        >{{ item.number }}</Col
                      >
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

                    <!-- <Progress
                      :percent="item.score"
                      :stroke-width="item.strokeWidth"
                      status="active"
                      :stroke-color="item.strokeColor"
                      hide-info
                    /> -->
                  </div>
                </div>
              </NewTabPane>
              <NewTabPane label="分行" name="2">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{ mediannumber2 }}</div>
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
                    v-for="(item, index) in firstrkpilist2"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{
                        item.name
                      }}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align: right"
                        >{{ item.number }}</Col
                      >
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
                    <!-- <Progress
                      :percent="item.score"
                      :stroke-width="item.strokeWidth"
                      status="active"
                      :stroke-color="item.strokeColor"
                      hide-info
                    /> -->
                  </div>
                </div>
              </NewTabPane>
              <NewTabPane label="监督" name="3">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{ mediannumber3 }}</div>
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
                    v-for="(item, index) in firstrkpilist3"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{
                        item.name
                      }}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align: right"
                        >{{ item.number }}</Col
                      >
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
                    <!-- <Progress
                      :percent="item.score"
                      :stroke-width="item.strokeWidth"
                      status="active"
                      :stroke-color="item.strokeColor"
                      hide-info
                    /> -->
                  </div>
                </div>
              </NewTabPane>
              <NewTabPane label="综合" name="4">
                <div class="rkpi_index_content_sort">
                  <div class="left_sort">
                    <div class="left_sorttit">中间值: {{ mediannumber4 }}</div>
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
                    v-for="(item, index) in firstrkpilist4"
                    :key="index"
                    class="rkpi_item_content"
                    @click="ishowtable"
                  >
                    <Row>
                      <Col span="12" class="rkpi_item_title">{{
                        item.name
                      }}</Col>
                      <Col
                        span="12"
                        class="rkpi_item_righttitle"
                        style="text-align: right"
                        >{{ item.number }}</Col
                      >
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
                    <!-- <Progress
                      :percent="item.score"
                      :stroke-width="item.strokeWidth"
                      status="active"
                      :stroke-color="item.strokeColor"
                      hide-info
                    /> -->
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
                <div class="left_sorttit">中间值: {{ mediannumber5 }}</div>
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
                v-for="(item, index) in firstrkpilist5"
                :key="index"
                class="rkpi_item_content"
                @click="ishowtable"
              >
                <Row>
                  <Col span="12" class="rkpi_item_title">{{ item.name }}</Col>
                  <Col
                    span="12"
                    class="rkpi_item_righttitle"
                    style="text-align: right"
                    >{{ item.number }}</Col
                  >
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
                <!-- <Progress
                  :percent="item.score"
                  :stroke-width="item.strokeWidth"
                  status="active"
                  :stroke-color="item.strokeColor"
                  hide-info
                /> -->
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <!-- 表格 -->
    <Row>
      <Col span="6" class="index_row1" v-if="ishowtable1">
        <Table
          class="facedata-table account-table"
          stripe
          :columns="table.columns"
          :data="table.data"
        ></Table>
      </Col>
      <Col span="7" offset="1" class="index_row1" v-if="ishowtable2">
        <div class="index_row1_title">旋转后的成分矩阵</div>
        <Table
          class="facedata-table account-table"
          stripe
          :columns="table1.columns"
          :data="table1.data"
        ></Table>
      </Col>
      <Col span="9" offset="1" class="index_row1" v-if="ishowtable3">
        <Table
          class="facedata-table account-table"
          stripe
          :columns="table.columns"
          :data="table.data"
        ></Table>
      </Col>
    </Row>
    <Row class="index_row">
      <Card shadow class="echartstwocontent">
        <div class="rkpi_index_content_title1">
          <span class="title">风险分布热力图</span>
          <span class="title_mini">Risk Heat Map</span>
        </div>
        <div class="organizationmodel">
          <Select
            v-model="organizationmodel"
            class="organizationselect"
            @on-change="change_reli"
          >
            <Option
              v-for="(item, index) in organizationList"
              :value="index"
              :key="item"
              >{{ item }}</Option
            >
          </Select>
        </div>
        <div class="echartscontent">
          <div style="position: relative" class="leftecharts">
            <div class="leftlinecontent">
              <div>高</div>
              <div class="index_echarts_height">
                <Icon class="index_echarts_icon1" type="md-arrow-dropup" />
              </div>
              <div class="index_echartsline"></div>
              <div class="index_echarts_bottom">低</div>
            </div>
            <div class="index_echarts_leftmiddle">发生频率</div>
          </div>
          <div class="reports2">
            <Row type="flex" justify="center" align="middle">
              <Col span="8" class="bg1">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[0][2]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg2">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[1][2]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg3">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[2][2]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg4">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[0][1]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg5">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[1][1]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg6">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[2][1]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg7">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[0][0]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg8">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[0][1]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
              <Col span="8" class="bg9">
                <div class="middlecontent">
                  <p v-for="(n, index) in reliMap_3_3[0][2]" :key="index">
                    {{ n.name }}({{ n.count }},{{ n.score }})
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <!-- <div class="reports2" ref="charts_two"></div> -->
        </div>
        <div class="bottomlinecontent">
          <div class="flexlineconent">
            <div class="index_echartsline2"></div>
            <div class="index_echarts_rightheight">
              <Icon class="index_echarts_icon2" type="md-arrow-dropright" />高
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
        <div class="reports1" ref="charts_one"></div>
      </Card>
    </Row>
  </div>
</template>
<script>
import echarts from "echarts";
import { on, off } from "@/utils/tools";
// import { Tabs, TabPane } from "../components/tabs/index";
import { NewTabs, NewTabPane } from "../components/newtabs/index";
export default {
  name: "index",
  // components: { Tabs, TabPane },
  components: { NewTabs, NewTabPane },
  data() {
    return {
      mediannumber: 0, //综合得分中间值
      firstsort: "scoreup",
      mediannumber1: 0, //总行中间值
      firstsort1: "scoreup",

      mediannumber2: 0, //分行中间值
      firstsort2: "scoreup",

      mediannumber3: 0, //监督中间值
      firstsort3: "scoreup",

      mediannumber4: 0, //综合中间值
      firstsort4: "scoreup",

      mediannumber5: 0, //rkpi和审核发现中间值
      firstsort5: "scoreup",

      tabsvalue: "1",
      organizationmodel: "",
      organizationList: [],

      ishowtable1: false,
      ishowtable2: false,
      ishowtable3: false,
      dom: null,
      dom1: null,
      echarts: echarts,
      firstrkpilist: [], //综合得分
      firstrkpilist1: [], //总行
      firstrkpilist2: [], //分行
      firstrkpilist3: [], //监督
      firstrkpilist4: [], //综合
      firstrkpilist5: [], //RKPI和审核发现

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
      reli_list: [],
      reliMap_3_3: [[[],[],[]],[[],[],[]],[[],[],[]]],
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
            if (i.indexOf("datacde热力图入库" != -1)) {
              // datacde热力图入库
              this.getData(newmodaltype[i], "indexdata7");
            }
          }
        }
      }
    }
    //RKPI综合得分
    let datavbmodaltypeObj = localStorage.getItem("datavbmodaltypeObj");
    if (datavbmodaltypeObj) {
      datavbmodaltypeObj = JSON.parse(datavbmodaltypeObj);
      if (Object.keys(datavbmodaltypeObj).length > 0) {
        for (const i in datavbmodaltypeObj) {
          if (datavbmodaltypeObj.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datavb入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(datavbmodaltypeObj[i],'datavbindexdata');
            }
          }
        }
      }
    }
    //总行datasd
    let datasdmodaltypeObj = localStorage.getItem("datasdmodaltypeObj");
    if (datasdmodaltypeObj) {
      datasdmodaltypeObj = JSON.parse(datasdmodaltypeObj);
      if (Object.keys(datasdmodaltypeObj).length > 0) {
        for (const i in datasdmodaltypeObj) {
          if (datasdmodaltypeObj.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datasd入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(datasdmodaltypeObj[i],'datasdindexdata');
            }
          }
        }
      }
    }
    //分行datasc
    let datascmodaltypeObj = localStorage.getItem("datascmodaltypeObj");
    if (datascmodaltypeObj) {
      datascmodaltypeObj = JSON.parse(datascmodaltypeObj);
      if (Object.keys(datascmodaltypeObj).length > 0) {
        for (const i in datascmodaltypeObj) {
          if (datascmodaltypeObj.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datasc入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(datascmodaltypeObj[i],'datascindexdata');
            }
          }
        }
      }
    }
    //监管datase
    let datasemodaltypeObj = localStorage.getItem("datasemodaltypeObj");
    if (datasemodaltypeObj) {
      datasemodaltypeObj = JSON.parse(datasemodaltypeObj);
      if (Object.keys(datasemodaltypeObj).length > 0) {
        for (const i in datasemodaltypeObj) {
          if (datasemodaltypeObj.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datase入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(datasemodaltypeObj[i],'dataseindexdata');
            }
          }
        }
      }
    }
    //综合datascde
    let datascdemodaltypeObj = localStorage.getItem("datascdemodaltypeObj");
    if (datascdemodaltypeObj) {
      datascdemodaltypeObj = JSON.parse(datascdemodaltypeObj);
      if (Object.keys(datascdemodaltypeObj).length > 0) {
        for (const i in datascdemodaltypeObj) {
          if (datascdemodaltypeObj.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datascde入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(datascdemodaltypeObj[i],'datascdeindexdata');
            }
          }
        }
      }
    }
    //rkpi和审核发现datavkpi
    let datavkpimodaltypeObj = localStorage.getItem("datavkpimodaltypeObj");
    if (datavkpimodaltypeObj) {
      datavkpimodaltypeObj = JSON.parse(datavkpimodaltypeObj);
      if (Object.keys(datavkpimodaltypeObj).length > 0) {
        for (const i in datavkpimodaltypeObj) {
          if (datavkpimodaltypeObj.hasOwnProperty(i)) {
            if (i.indexOf("因子分析datavkpi入库") != -1&&i.indexOf("_因子载荷")== -1){
              this.getData(datavkpimodaltypeObj[i],'datavkpiindexdata');
            }
          }
        }
      }
    }

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
    getData(id, datatype) {
      if (datatype == null) {
        return;
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
      that.$Spin.show();
      that.$http.post(that.PATH.GETCOLUMS, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide();
          // console.log(success);
          if (success.data.result) {
            var res = success.data.result;
            if (res.length > 0) {
              that.getData2(res, id, datatype);
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
    getData2(list, id, datatype) {
      var that = this;
      var list_data = [];
      var list_desc = [];
      if (list.length > 0) {
        list.forEach((node) => {
          list_data.push(node.name);
          list_desc.push(node.desc);
        });
      }

      if (datatype == "indexdata7") {
        var query_data = [
          {
            conditions: [],
            entityId: id,
            fields: list_data,
            orderBy: [],
          },
          1,
          30,
        ];
      } else {
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
      }

      var query = {
        action: "Service",
        method: "pageQueryNoCount",
        data: query_data,
      };
      // let newfirstrkpilist = []
      let newscorelist = []; //进度条列表
      let middlenumber = new Number();

      that.$Spin.show();
      that.$http.post(that.PATH.PAGEQUERYNOCOUNT, JSON.stringify(query)).then(
        (success) => {
          that.$Spin.hide();
          var res = success.data.result;
          //周

          // name: "市北分行",
          // number: "2.94016",
          // score: 45,
          // strokeWidth: 5,
          // strokeColor: ["#92BBFF", "#92BBFF"],
          // console.log(res);s
          if (res.length > 0) {
            if (datatype != "indexdata7") {
              res.forEach((v, i) => {
                res[i].name = v.ORG;
                res[i].number = that.tofix(v.SUM, 6);
                newscorelist.push(res[i].number);
                res[i].strokeWidth = 5;
                res[i].strokeColor = ["#92BBFF", "#92BBFF"];
              });
              //处理进度条值

              that.get_progress(res);
              //取综合得分中间值
              middlenumber =
                newscorelist[Math.floor((newscorelist.length - 1) / 2)];
            }
          }
          if (datatype == "datavbindexdata") {
            that.firstrkpilist = res;
            // //处理默认的得分升序
            that.sortByKey(that.firstrkpilist, "number");
            that.mediannumber = middlenumber;
          } else if (datatype == "datasdindexdata") {
            that.firstrkpilist1 = res;
            // //处理默认的得分升序
            that.mediannumber1 = middlenumber;
            that.sortByKey(that.firstrkpilist1, "number");
          } else if (datatype == "datascindexdata") {
            that.firstrkpilist2 = res;
            // //处理默认的得分升序
            that.mediannumber2 = middlenumber;
            that.sortByKey(that.firstrkpilist2, "number");
          } else if (datatype == "dataseindexdata") {
            that.firstrkpilist3 = res;
            // //处理默认的得分升序
            that.mediannumber3 = middlenumber;
            that.sortByKey(that.firstrkpilist3, "number");
          } else if (datatype == "datascdeindexdata") {
            that.firstrkpilist4 = res;
            // //处理默认的得分升序
            that.mediannumber4 = middlenumber;
            that.sortByKey(that.firstrkpilist4, "number");
          } else if (datatype == "datavkpiindexdata") {
            that.firstrkpilist5 = res;
            // //处理默认的得分升序
            that.mediannumber5 = middlenumber;
            that.sortByKey(that.firstrkpilist5, "number");
          } else if (datatype == "indexdata7") {
            // datacde热力图入库
            console.log(res, "res");
            let selectdata = [];
            if (res.length > 0) {
              var new_res = [];
              for (var i = 0; i < res.length; i++) {
                var v = res[i];
                var new_res_row = [];
                for (var name in res[i]) {
                  var n_index = list_data.findIndex((n2) => {
                    return n2 == name;
                  });

                  if (n_index != -1) {
                    var new_res_node = {};
                    new_res_node.name = name;
                    new_res_node.desc = list_desc[n_index];
                    new_res_node.value = res[i][name];
                    new_res_row.push(new_res_node);
                  }
                }
                new_res.push(new_res_row);
                selectdata.push(v.A1);
              }
            }
            selectdata.push("全行");
            that.organizationList = selectdata;

            console.log(new_res, "111");
            that.get_reli_data(new_res);
          }
        },
        (error) => {
          that.$Spin.hide();
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    get_reli_data(data) {
      var that = this;
      //that.reli_list
      //
      var data_list = [];
      data.forEach((n_data) => {
        var data_list_row = [];
        n_data.forEach((n_data_cell) => {
          // if (n_data_cell.name == "A1") {
          //  return true;
          // }
          var n_index = data_list_row.findIndex((c_n) => {
            if (!c_n) {
              return false;
            }
            return c_n.name == n_data_cell.desc;
          });
          if (n_index == -1) {
            //没有值
            var node = {};
            node.name = n_data_cell.desc;
            node.key = n_data_cell.name;
            node.count = n_data_cell.value;
            node.score = 0;
            data_list_row.push(node);
          } else {
            //有值
            if (data_list_row[n_index].count > n_data_cell.value) {
              data_list_row[n_index].score = data_list_row[n_index].count;
              data_list_row[n_index].count = n_data_cell.value;
            } else {
              data_list_row[n_index].score = n_data_cell.value;
            }
          }
        });
        data_list.push(data_list_row);
      });
      var new_data_list = [];
      //过滤0 数据
      data_list.forEach((n_data) => {
        new_data_list.push(n_data);
      });
      var xuni_row = [];
      for (var i = 0; i < new_data_list[0].length; i++) {
        if (i == 0) {
          var node = {};
          node.name = "A1";
          node.key = "A1";
          node.count = "全行";
          node.score = 0;
          xuni_row.push(node);
          continue;
        }
        var node = {};
        node.name = new_data_list[0][i].name;
        node.key = new_data_list[0][i].key;
        node.count = 0;
        node.score = 0;
        xuni_row.push(node);
      }

      //给全行 赋值次数和分数
      for (var x = 0; x < new_data_list.length; x++) {
        for (var y = 0; y < new_data_list[x].length; y++) {
          if (new_data_list[x][y].key == "A1") {
            continue;
          }

          xuni_row[y].count += new_data_list[x][y].count;
          xuni_row[y].score += new_data_list[x][y].score;
        }
      }

      new_data_list.push(xuni_row);
      console.log(xuni_row);
      that.reli_list = new_data_list;
      that.organizationmodel = new_data_list.length - 1;
      that.change_reli();
    },
    change_reli() {
      var data = this.reli_list[this.organizationmodel];
      data = data.slice(1, data.length);
      data = data.filter((a, i) => {
        return a.count != 0;
      });
      data = data.sort((a, b) => {
        return a.count - b.count;
      });
      console.log(data, "排序");
      var row = [0, 0, 0, 0]; //分数 平均
      var cell = [0, 0, 0, 0]; //次数 中位数
      var max_score = 0;
      var all_score = 0;
      //得到分数合
      for (var i = 0; i < data.length; i++) {
        all_score += data[i].score;

        if (data[i].score > max_score) max_score = data[i].score;
      }
      row[3] = max_score;
      var socre_center = all_score / data.length;
      //left_
      var left_list = data.filter((a, i) => {
        return a.score <= socre_center;
      });

      var right_list = data.filter((a, i) => {
        return a.score > socre_center;
      });

      //左侧平均值
      all_score = 0;
      //得到分数合
      for (var i = 0; i < left_list.length; i++) {
        all_score += left_list[i].score;
      }
      row[1] = all_score / left_list.length;

      //右侧平均值

      all_score = 0;
      //得到分数合
      for (var i = 0; i < right_list.length; i++) {
        all_score += right_list[i].score;
      }
      row[2] = all_score / right_list.length;

      //中位数

      var all_count = 0;
      var max_count = 0;
      //得到分数合
      for (var i = 0; i < data.length; i++) {
        all_count += data[i].count;
        if (data[i].count > max_count) max_count = data[i].count;
      }
      cell[3] = max_count;

      var count_center = 0;
      count_center =
        data.length / 2 === 0
          ? (data[data.length / 2].count + data[data.length / 2 - 1].count) / 2
          : data[parseInt(data.length / 2)].count;

      //left_
      left_list = data.filter((a, i) => {
        return a.count <= count_center;
      });

      right_list = data.filter((a, i) => {
        return a.count > count_center;
      });

      //左侧平均值
      count_center = 0;
      //得到分数合
      console.log(left_list.length / 2 - 0.5);
      cell[1] =
        left_list.length / 2 === 0
          ? (left_list[left_list.length / 2].count +
              left_list[left_list.length / 2 - 1].count) /
            2
          : left_list[parseInt(left_list.length / 2)].count;

      //   //右侧平均值

      cell[2] =
        right_list.length / 2 === 0
          ? (right_list[right_list.length / 2].count +
              right_list[right_list.length / 2 - 1].count) /
            2
          : right_list[parseInt(right_list.length / 2)].count;

      console.log(cell, "cell");
      console.log(row, "row");

      //初始化热力9宫格

      var row_init = 3;
      var cell_init = 3;
      var node_map = [];
      for (var x = 0; x < row_init; x++) {
        var node_row = [];
        for (var y = 0; y < cell_init; y++) {
          var node = [];
          node_row.push(node);
        }
        node_map.push(node_row);
      }

      //九宫格赋值
      data.forEach((n) => {
        var x = 0;
        var y = 0;

        row.forEach((n_s) => {
          if (n.score > n_s) {
            x++;
            return true;
          }
          return false;
        });
        cell.forEach((n_c) => {
          if (n.count > n_c) {
            y++;
            return true;
          }
          return false;
        });

        //算法降位
        x--;
        y--;
        console.log(`x:${x},y:${y}`);
        node_map[x][y].push(n);
      });

      this.reliMap_3_3 = node_map;
    },
    tabclick(item) {
      // console.log(item,'item')
      this.tabsvalue = item.toString();
    },
    //综合得分排序
    RKPIsort(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist.sort(this.nameasc("name"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist.sort(this.namedesc("name"));
      }
    },
    //总行排序
    RKPIsort1(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist1, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist1, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist1.sort(this.nameasc("name"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist1.sort(this.namedesc("name"));
      }
    },
    //分行排序
    RKPIsort2(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist2, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist2, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist2.sort(this.nameasc("name"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist2.sort(this.namedesc("name"));
      }
    },
    //监督排序
    RKPIsort3(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist3, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist3, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist3.sort(this.nameasc("name"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist3.sort(this.namedesc("name"));
      }
    },
    //综合排序
    RKPIsort4(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist4, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist4, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist4.sort(this.nameasc("name"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist4.sort(this.namedesc("name"));
      }
    },
    //RKPI和审核发现
    RKPIsort5(data) {
      if (data == "scoreup") {
        // 得分升序
        this.sortByKey(this.firstrkpilist5, "number");
      } else if (data == "scoredown") {
        // 得分降序
        this.sortDownByKey(this.firstrkpilist5, "number");
      } else if (data == "organizationup") {
        // 机构名升序
        this.firstrkpilist5.sort(this.nameasc("name"));
      } else if (data == "organizationdown") {
        // 机构名降序
        this.firstrkpilist5.sort(this.namedesc("name"));
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
        if (
          ((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100 >=
          0
        ) {
          list[i].scoreright =
            ((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100;
          list[i].scoreleft = 0;
        } else {
          list[i].scoreleft = Math.abs(
            ((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100
          );
          list[i].scoreright = 0;
        }
        // list[i].score =
        ((1 / max) * (Number(list[i].number) + cha)).toFixed(2) * 100;
      }
      // console.log(list,'123');
    },

    //数组对象方法排序:升序
    sortByKey(array, key) {
      // return array.sort(function (a, b) {
      //   var x = a[key];
      //   var y = b[key];
      //   return x < y ? -1 : x > y ? 1 : 0;
      // });
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
  background: #f5f5f5;
  .organizationmodel {
    padding-right: 50px;
    display: flex;
    justify-content: flex-end;
    .organizationselect {
      width: 200px;
    }
  }
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
  .progress-content {
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
  #newtabs {
    background: #fff;
    .newtabs-nav {
      padding: 0px 50px 0px 50px;
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
  .heightoverflow {
    height: 400px;
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
    .rkpi_item_content:hover .v-progress-linear {
      height: 20px !important;
      transition: none !important;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
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
    overflow: auto;
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
      height: 90%;
      padding-top: 5%;
      width: 90%;
      margin: auto;
      overflow: auto;
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
    margin: 30px 50px 0px 0px;
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
      margin-left: -20px;
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

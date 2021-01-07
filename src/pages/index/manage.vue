<template>
  <div class="windows_view">
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="setHigthRow">高亮行</vxe-button>
        <vxe-button @click="setHigthCell">高亮列</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border="none"
      align="center"
      ref="ktable"
      stripe
      :data="data_table"
      highlight-hover-row
      highlight-current-row
      highlight-hover-column
      highlight-current-column
      @cell-click="cell_click"
      @header-cell-click="header_cell_click"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column
        v-for="(n, index) in data_table[0]"
        :key="index"
        :field="n.key"
        :title="n.key == 'org' ? '组织' : n.key"
      >
        <template v-slot="{ row }">
          <span
            v-if="row[index].key == 'org'"
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
            .
            <div>
              {{ row[index].value.toString().split(".")[1] }}
            </div>
          </div>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data_table: [],
      default_color: "#000",
      max_color: "red",
      select_color: "blue",
    };
  },
  methods: {
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
      //console.log(event);
      this.InitRowColor();
      //赋值选中
      this.SelectRowColor(event.rowIndex);
      //防止序号
      if (event.columnIndex > 0) {
        this.data_table[event.rowIndex][event.columnIndex - 1].selected = true;
      }
    },
    //头点击
    header_cell_click(event) {
      //console.log(event);
    },
    //初始化颜色
    InitRowColor() {
      this.data_table.forEach((m) => {
        m.map((n) => {
          n.selected = false;
          if (n.fontcolor != this.max_color) n.fontcolor = this.default_color;
        });
      });
    },
    //设置选中颜色
    SelectRowColor(row_index) {
      this.data_table[row_index].map((n) => {
        if (n.fontcolor != this.max_color) n.fontcolor = this.select_color;
      });
    },
    InitFun() {
      var zuzhi = "org";
      var list = [
        { test1: "1.42511", test2: "2.32531112", Sum: "5.21321234", org: "A" },
        { org: "B", test1: "1.42511", test2: "2.32", Sum: "5.21234" },
        {
          test1: "1.42511",
          test2: "-12.325313232",
          Sum: "-5.2123412321",
          org: "C",
        },
      ];
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
  },
  mounted() {
    this.InitFun();
  },
};
</script>

<style lang="scss">

.windows_view {
  width: 100%;
  height: 100%;
  position: relative;
}
.num_split_5 {
  text-align: center;
  display: flex;
  width: max-content;
  margin: auto;
  div:nth-child(1) {
    text-align: right;
    width: 40px;
  }
  div:nth-child(2) {
    text-align: left;
    width: 70px;
  }
}
.select_block {
  background: #8181ce;
  border-radius: 4px;
}
.vxe-table .row--current{
  background: #ffffff !important;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.08),0 -5px 10px 5px rgba(0, 0, 0, 0.08) !important;
  z-index:999;
}
</style>

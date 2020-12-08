<template>
  <div
    class="content column-start-center reTree_box"
    :style="{fontSize: (size||14) +'px',lineHeight:(size||14) +'px'}"
    style="width:347px"
  >
    <div class="column-start-center basic_layer" v-for="(item,index) in formatData" :key="index">
      <div
        class="row-flex-start basic_banner"
        :class="{
          'active_color': item.expand && item.right-item.left!=1,
          
        }"
        @click="itemClick(item)"
      >
        <Icon v-if="!item.expand&&item.right-item.left!=1" type="md-arrow-dropright" />
        <Icon v-if="item.expand&&item.right-item.left
        !=1" type="md-arrow-dropdown" />
        <div v-if="item.right-item.left==1" class="noicon"></div>
        <div
          class="reTree_icon"
          :style="{height: (size||14*1.2 )+'px',width: (size||14*1.2) +'px'}"
          :class="{
          'reTree_default_icon': item.right-item.left==1,
          'reTree_collapse_icon': item.expand && item.right-item.left!=1,
          'reTree_expand_icon': !item.expand && item.right-item.left!=1,
        }"
        ></div>
        <div class="layer_text nowrap">{{item.name}}</div>
      </div>

      <lineItem v-if="item.expand&&item.right-item.left==1" v-on="$listeners" :list="item.children" :size="size"></lineItem>
    </div>
  </div>


  <!-- <div
    class="content column-start-center reTree_box"
    :style="{fontSize: (size||14) +'px',lineHeight:(size||14) +'px'}"
    style="width:347px"
  >
    <div class="column-start-center basic_layer" v-for="(item,index) in formatData" :key="index">
      <div
        class="row-flex-start basic_banner"
        :class="{
          'active_color': item.expand && item.children.length>0,
          
        }"
        @click="itemClick(item)"
      >
        <Icon v-if="!item.expand&&item.children.length>0" type="md-arrow-dropright" />
        <Icon v-if="item.expand&&item.children.length>0" type="md-arrow-dropdown" />
        <div v-if="item.children.length===0" class="noicon"></div>
        <div
          class="reTree_icon"
          :style="{height: (size||14*1.2 )+'px',width: (size||14*1.2) +'px'}"
          :class="{
          'reTree_default_icon': item.children.length===0,
          'reTree_collapse_icon': item.expand && item.children.length>0,
          'reTree_expand_icon': !item.expand && item.children.length>0,
        }"
        ></div>
        <div class="layer_text nowrap">{{item.name}}</div>
      </div>

      <lineItem v-if="item.expand&&item.children.length>0" v-on="$listeners" :list="item.children" :size="size"></lineItem>
    </div>
  </div> -->
</template>
<script>
import lineItem from "./lineItem.vue";
export default {
  inheritAttrs: false,
  props: {
    pd: {},
    size: {
      type: Number,
      default: 14
    }
  },
  components: { lineItem },
  data() {
    return {
      selectedDetail: {},
      timer: {},
      formatData: []
    };
  },
  watch: {
    pd(n, o) {
      this.formatData = this.preDealData(n);
      // console.log(this.formatData);
    }
  },
  created() {
    // console.log("lineTree create");
    console.log(this.pd,'this.pd')
    this.preDealData(this.pd);
  },

  methods: {
    preDealData(list) {
      console.log(list,'list')
      if(list.length>0){
        list.forEach(x => {
          if (!x.expand) this.$set(x, "expand", false);
          if (x.children && x.children.length > 0) this.preDealData(x.children);
          
          
        });
      }
      
      return list;
    },
    // 根据id展开树的具体项
    expandTreeItemById(idList) {
      let _this = this;
      function loopTree(list) {
        list.forEach(x => {
          if (idList.includes(x.id)) {
            _this.$set(x, "expand", true);
          } else {
            _this.$set(x, "expand", false);
          }
          if (x.children && x.children.length > 0) loopTree(x.children);
        });
        return list;
      }
      this.formatData = loopTree(this.pd);
    },
    itemClick(item){
      item.expand=!item.expand
      this.$emit('itemClick',item)
    },
    // 详情点击
    detailClick(data) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.selectedDetail = data;
        this.$emit("detailClick", data);
      }, 300);
    },
    detailDoubleClick(data) {
      clearTimeout(this.timer);
      this.selectedDetail = data;
      this.$emit("detailDoubleClick", data);
    }
  }
};
</script>
<style lang="scss" scoped>

.content {
	height: 100%;
	width: 100%;
}
.noicon{
  display: inline-block;
  // font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
  font-size: 14px;
  width:14Px;
  height: 14Px;
}
.column-start-center {
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.row-flex-start {
	display: flex;
	display: -webkit-flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.active_color{
    // color: #409EFF ;
}
.reTree_box {
  overflow-y: auto;
}
.reTree_icon {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}

.basic_layer {
  width: 100%;
  position: relative;
  color: #606764;
  cursor: pointer;
  .layer_text {
    flex: 1;
  }
}
.first_vertical_line {
  content: "";
  position: absolute;
  width: 1Px;
  left: 6px;
  top: 17px;
  background: #c3c5c8;
}
.basic_banner {
  position: relative;
  width: 100%;
  padding-bottom: 13px;
}
.second_layer {
  position: relative;
  width: 100%;
  cursor: pointer;
  padding-left: 40px;
}
.third_layer {
  position: relative;
  padding-bottom: 15px;
  width: 100%;
  padding-left: 55px;
  color: #999999;
}

.second_layer::before {
  content: "";
  position: absolute;
  height: 1Px;
  width: 15px;
  left: 20Px;
  top: 7px;
  background: #c3c5c8;
}
.third_layer::before {
  content: "";
  position: absolute;
  height: 1Px;
  width: 20px;
  left: 20Px;
  top: 7px;
  background: #c3c5c8;
}

.linkLine_default::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 1Px;
  left: 20Px;
  top: 0px;
  background: #c3c5c8;
}
.linkLine_first::after {
  content: "";
  position: absolute;
  /* 为了触顶 */
  top: -14px;
  height: calc(100% + 14px);
  width: 1Px;
  left: 20Px;
  background: #c3c5c8;
}
// 上半截
.linkLine_half_top::after {
  content: "";
  position: absolute;
  height: 24px;
  top: -14px;
  width: 1Px;
  left: 20Px;
  background: #c3c5c8;
}
.linkLine_last::after {
  content: "";
  position: absolute;
  height: 9px;
  width: 1Px;
  left: 20Px;
  top: 0px;
  background: #c3c5c8;
}
.reTree_collapse_icon {
  background: url("../../../assets/images/4.png") no-repeat center center;
  background-size: contain;
}

.reTree_default_icon {
  background: url("../../../assets/images/5.png") no-repeat center center;
  background-size: contain;
}

.reTree_expand_icon {
  background: url("../../../assets/images/6.png") no-repeat center center;
  background-size: contain;
}

</style>
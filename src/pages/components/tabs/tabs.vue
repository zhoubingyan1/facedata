
<template>
    <div id="tabs">
        <div class="tabs-nav clearfix">
            <div class="tabs-tab" v-for="(item,index) in tabsTab" :key="index" @click="_tabClick(item)"
                 :class="{'active':active==item.name,'disabled':item.disabled }">
                {{item.label}}
                <span class="tip" v-if="item.tip">{{item.tip | maxFilter(tipMax)}}</span>
                <div :class="{'tabs_right_top':active==item.name&&index!=tabsTab.length-1}">
                    <div class="tabs_border"></div>
                    
                </div>
                <div :class="{'middle_line1':active==item.name}"></div>
                <div :class="{'middle_line':active!=item.name}"></div>
                
            </div>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tabs',
        data(){
            return {
                tabsTab: this.$children,
                active: this.value//当前显示第几个
            }
        },
        props: ['value', 'onChange', 'tipMax'],
        mounted(){
        },
        components: {},
        methods: {
            _tabClick(item){
                if (!item.disabled) {
                    this.active = item.name;
                    this.$emit('input', item.name);//v-model时双向绑定
                    this.onChange ? this.onChange(item.name) : ""
                }
            }
        },
        computed: {},
        filters: {
            maxFilter(v, max){
                if (parseInt(v) > parseInt(max)) {
                    return v + '+';
                } else {
                    return v
                }
            }
        }
    }
</script>
<style scoped lang="scss">
#tabs{
  .tabs-nav{
      width:100%;
    //    border-bottom: 1px solid #ddd;
       display: flex;
       background: #E8E8E8;
        border-radius: 10px 10px 0 0;
    .tabs-tab{ 
        flex:1; 
        display: inline-block; vertical-align: middle; padding: 0 20px; cursor: pointer;
        font-family: PingFangSC-Semibold;
        font-size: 22px;
        
        color: rgba(0,0,0,0.40);
        letter-spacing: 0;
        text-align: center;
        line-height: 70px;
        height:60px;
        position: relative;
        .tabs_right_top{
            width: 10px;
            height: 10px;
            // background: #F5F5F5;
            background: #fff;
            position: absolute;
            bottom:0px;
            right: -10px;
            // border-radius: 0px 0 20px 0 !important;
            .tabs_border{
                width: 10px;
                height: 10px;
                // background: #fff;
                background: #E8E8E8;
                border-radius: 0px 0 0 10px !important;
            }
        }
        .middle_line{
            position: absolute;
            top:26px;
            left: 0;
            width: 1px;
            height: 14px;
            background: rgba(0,0,0,0.20);
        }
        .middle_line1{
            position: absolute;
            top:26px;
            right: -1px;
            width: 1px;
            height: 14px;
            background: #e8e8e8;
            z-index: 111;
        }
      &.active{ 
          color: #2d8cf0;
          background:#fff;
          border-radius: 0px 10px 0 0px ;
          color: #246FEA !important;
        }
      .tip{ width: 20px; height: 20px; border-radius: 50%; background: #f00; text-align: center; line-height: 20px; display: inline-block; color: #fff; font-size: 12px; position: relative; top: -15px; }
      &.disabled{color: #999;cursor: not-allowed}
    }
    .tabs-tab:first-child{
        .middle_line{
            position: absolute;
            top:26px;
            left: 0;
            width: 0px !important;
            height: 14px;
            background: rgba(0,0,0,0.20);
        }
    }
  }
  .tabs-content{
    .tab-pane{ display: none;
      &.active{ display: block; }
    }
  }
  .clearfix{
    &:after{
        clear: both;
    }
    }
}
</style>
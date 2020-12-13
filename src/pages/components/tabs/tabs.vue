
<template>
    <div id="tabs">
        <div class="tabs-nav clearfix">
            <div class="tabs-tab" v-for="(item,index) in tabsTab" :key="index" @click="_tabClick(item)"
                 :class="{'active':active==item.name,'disabled':item.disabled }">
                <div class="newtabs-tab-tit">{{item.label}}</div>
                <div v-if="showClose&&item.name&&index>0" class="tabscloseicon" @click.stop="_closeClick(index)">x</div>
                <span class="tip" v-if="item.tip">{{item.tip | maxFilter(tipMax)}}</span>

                <div v-if="!showClose" :class="{'tabs_right_top':active==item.name&&index!=tabsTab.length-1}">
                    <div class="tabs_border"></div>
                </div>
                <div v-if="showClose" :class="{'tabs_right_bottom':active==item.name}">
                    <div class="tabs_border"></div>
                </div>
                <div v-if="showClose" :class="{'tabs_left_bottom':active==item.name&&index!=0}">
                    <div class="tabs_border"></div>
                </div>
                <div v-if="showClose&&tabsTab.length==1" :class="{'tabs_right_bottom':active==item.name}">
                    <div class="tabs_border"></div>
                </div>

                <div v-if="!showClose" :class="{'middle_line1':active==item.name}"></div>
                <div v-if="!showClose" :class="{'middle_line':active!=item.name}"></div>
                
                <!-- <Icon class="tabscloseicon" v-if="showClose&&item.name&&index>0" type="ios-close"  /> -->
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
                // active: this.value,//当前显示第几个
            }
        },
        props: {
            showClose: {
                type: Boolean,
                default: false
            },
            active:{
                type: String,
                default: '1'
            },
            tipMax:{
                 type: Number,
            },
            onChange:{
                type:Function,
            }
        },
        mounted(){
        },
        components: {},
        methods: {
            _tabClick(item){
                if (!item.disabled) {
                    this.$emit('tabclick', item);//v-model时双向绑定
                    this.onChange ? this.onChange(item.name) : ""
                }
            },
            _closeClick(item){
                this.$emit('closeiconClick', item);//v-model时双向绑定
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
    .tabscloseicon{
       display: inline-block;
       color: rgba(0,0,0,0.20);
       vertical-align: middle;
    }
    
</style>
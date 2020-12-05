
<template>
    <div id="newtabs">
        <div class="newtabs-nav">
            <div class="newtabs-tab-left">
                <div class="newtabs-tab" v-for="(item,index) in newtabsTab" :key="index" @click="_tabClick(item)"
                    :class="{'active':active==item.name,'disabled':item.disabled }">
                    {{item.label}}
                    <div :class="{'middle_line1':active==item.name}"></div>
                </div>
            </div>
            <div class="newtabs-tab-right">
                <slot name="right_button"></slot>
            </div>
        </div>
        <div class="newtabs-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'newtabs',
        data(){
            return {
                newtabsTab: this.$children,
                // active: this.value,//当前显示第几个
            }
        },
        props: {
            active:{
                type: String,
                default: '1'
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
                    
                    this.$emit('tabclick', item.name);//v-model时双向绑定
                    this.onChange ? this.onChange(item.name) : ""
                }
            },
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

    
</style>
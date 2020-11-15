<template>
    <div id="Manage">
        1111
    </div>
</template>
<script>
export default {
    name:"Manage",
    data(){
        return{
            
        }
    },
    created(){
        // this.getData()
    },
    methods: {
        //获取列表
        getData() {
            this.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
            this.$http.get('Manager.ashx?act=GetClickList').then(
                success => {
                    // console.log(success)
                    if(success.data.code == '0') {
                        this.table.data = success.data.data1
                    }else {
                        this.$Modal.error({
                            title:'提示',
                            content: success.data.msg,
                            onOk:()=>{
                                
                            }
                        })
                    }
                },
                error => {
                
                }
            );
        }
    }
}
</script>
<style lang="scss">
#Manage{
    height: 100%;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    
}
</style>

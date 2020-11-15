<template>
    <div id="Systemicselection">
      <Row style="padding-top:40px;">
        <Col span="24">
          <img class="logoimg" :src="imgUrl" alt="">
        </Col>
      </Row>
      <div class="systemicselection_content">
        <slider animation="fade" :autoplay="false">
          <slider-item v-for="(item, index) in list" :key="index">
            <div class="selection_content">
                <div class="selection_content_item" v-for="(child, index1) in item.children" :key="index1" @click.stop="goto">
                  <Row type="flex" justify="center" align="middle" class="code-row-bg">
                    <Col span="4">
                      <img class="left_img" :src="child.imgurl" alt="" />
                    </Col>
                    <Col span="20">
                      <div class="selection_content_title">{{child.title}}</div>
                      <div class="selection_content_content">{{child.content}}</div>
                    </Col>
                  </Row>
                </div>
            </div>
          </slider-item>
        </slider>
      </div>
      
    </div>
</template>
<script>
import Slider from "../components/slider/slider"
import SliderItem from "../components/slider/slider-item"

export default {
    name:"Systemicselection",
    components: {
      Slider,
      SliderItem,
    },
    data(){
        return{
          imgUrl:require("../../assets/images/logo-data.png"),
          list: [
            {
              children:[{
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'},
                {
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'},
                {
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'},{
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'},
                {
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'},{
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'}
              ]},{
              children:[{
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'}
              ]},
              {
              children:[{
                imgurl:require( "../../assets/images/public.png"),
                title: '对公信贷', 
                content: '内容描述文本内容描述，文本内容描述文本内容描述文本内文本内'}
              ]},
          ],
        }
    },
    created(){
      
    },
    methods: {
      hello($event) {
        console.log(`hello index: ${$event}`)
        
      },
      goto(){
        this.$router.push('/index');
      }
    }
}
</script>
<style lang="scss">

#Systemicselection{
    height: 100vh;
    // background: url('~@/assets/images/bg.png') center center fixed
    //   no-repeat;
    // background-size: cover;
    background: #ffffff;
    .logoimg{
      width:252px;
      height: 52px;
      margin-left: 80px;
    }
    .systemicselection_content{
      padding:80px;
      height: 660px;
    }
    .selection_content{
      width: 1350px;
      margin:0 auto;
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-wrap:wrap ;
      .code-row-bg{
        border: 1px solid rgba(0,0,0,0.20);
        padding: 54px 40px;
      }
      .code-row-bg:hover{
        border:1px solid #fff;
        background: #FFFFFF;
        box-shadow: 0 20px 70px 0 rgba(0,0,0,0.10);
      }
      .left_img{
        width: 60px;
        height: 60px;
      }
      .selection_content_item{
        width: 649px;
        // height:194px;
        margin-bottom: 20px;
        margin-right: 50px;
      }
      .selection_content_item:nth-child(2n){
        margin-right: 0px !important;
      }
      .selection_content_title{
        font-family: PingFangSC-Semibold;
        font-size: 24px;
        color: rgba(0,0,0,0.80);
        letter-spacing: 0;
        line-height: 30px;
        margin-bottom: 10px;
        vertical-align: middle;
      }
      .selection_content_content{
        font-size: 16px;
        color: rgba(0,0,0,0.40);
        letter-spacing: 0;
        line-height: 30px;
      }
    }
}
</style>

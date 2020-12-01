<template>
    <div id="Forgetpassword">
      <Row class="login_head_content">
        <Col span="8">
          <img class="logoimg" :src="imgUrl" alt="">
        </Col>
        <Col span="8" offset="8">
          <div class="logindate">{{currentdate}}<SUP>th</SUP>. {{currentmonth}}. {{currentyear}}</div> 
        </Col>
      </Row>
      <div class="loginbox">
        <div class="loginbox_content">
          <div class="logo">
              <!-- <div class="logintitle">Hello</div> -->
              <div class="logintitletips">修改密码</div>
          </div>  
          <div class="facedata-label-input">
            <input ref="input" class="facedata-input" type="password" v-model="password" placeholder="请输入原密码" >
            <img class="usernameicon" src="../../assets/images/Password.png" >
            <Icon v-if="password!=''&&hasPW" class="eyecloseicon" type="ios-eye-outline" @click="changetypetext('open')" />
            <img v-if="password!=''&&!hasPW" class="closeicon" src="../../assets/images/invisible@2x.png"  @click="changetypetext('close')">
          </div>
          <div class="facedata-label-input">
            <input ref="input" class="facedata-input" type="password" v-model="password" placeholder="请输入新密码" >
            <img class="usernameicon" src="../../assets/images/Password.png" >
            <Icon v-if="password!=''&&hasPW" class="eyecloseicon" type="ios-eye-outline" @click="changetypetext('open')" />
            <img v-if="password!=''&&!hasPW" class="closeicon" src="../../assets/images/invisible@2x.png"  @click="changetypetext('close')">
          </div>
          <div class="facedata-label-input">
            <input ref="input" class="facedata-input" type="password" v-model="password" placeholder="请确定输入新密码" >
            <img class="usernameicon" src="../../assets/images/Password.png" >
            <Icon v-if="password!=''&&hasPW" class="eyecloseicon" type="ios-eye-outline" @click="changetypetext('open')" />
            <img v-if="password!=''&&!hasPW" class="closeicon" src="../../assets/images/invisible@2x.png"  @click="changetypetext('close')">
          </div>
          <div style="text-align:center">
              <Row class="margintop">
                  <Col span="24">
                    <div class="logintext" @click="handleSubmit()">确定</div>
                  </Col>
                  <!-- <Col span="8"><div class="loginbutton" @click="handleSubmit()"><Icon type="ios-arrow-round-forward" /></div></Col> -->
              </Row>
          </div>
        </div>  
      </div>
      <div class="loginbottom">
        FACEDATA Version 6.0 Rodian Corporation All Rights Reserved.
      </div>
      <!-- 错误弹框 -->
      <Modal
        v-model="errorTips_modal"
        class-name="vertical-center-modal"
      >
        <div class="errorTips_modal">
          <img
            class="errorTips_modal_tips"
            src="../../assets/images/wrong@3x.png"
            alt
          />

          <div
            class="forget_tips_text"
            v-for="(node,index) in err_list"
            :key="index"
          >{{node}}</div>
        </div>
      </Modal>
    </div>
</template>
<script>
export default {
    name:"Forgetpassword",
    data(){
        return{
            err_list:['密码错误','请联系管理员！'],
            imgUrl:require("../../assets/images/logo-data.png"),
            username: '',
            password:'',
            errorTips_modal:false,//密码错误框
            single:false,
            isshowcloseicon:false,
            hasPW:false
        }
    },
    created(){
      if(this.username!=''){
        this.isshowcloseicon=true
      }
      this.getNowFormatDate()
    },
    methods: {
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        let newmonth=''
        switch(month){
          case 1:
          newmonth='Jan'
          break;
          case 2:
          newmonth='Feb'
          break;
          case 3:
          newmonth='Mar'
          break;
          case 4:
          newmonth='Apr'
          break;
          case 5:
          newmonth='May'
          break;
          case 6:
          newmonth='Jun'
          break;
          case 7:
          newmonth='Jul'
          break;
          case 8:
          newmonth='Aug'
          break;
          case 9:
          newmonth='Sep'
          break;
          case 10:
          newmonth='Oct'
          break;
          case 11:
          newmonth='Nov'
          break;
          case 12:
          newmonth='Dec'
          break;
        }
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        this.currentyear=year
        this.currentmonth = newmonth
        this.currentdate=strDate
      },
      changetypetext(type){
        if(type=='open'){
          this.$refs.input.type = "password"
          this.hasPW=false
        }else if(type=='close'){
          this.$refs.input.type = "text"
          this.hasPW=true
        }
      },
      handleSubmit () {
        this.$router.push('/systemicselection');
          // if(this.password === ''&& this.username===''){
          //     this.$Modal.error({
          //         title:'提示',
          //         content: '账号或者密码不为空'
          //     })
          // }else{
          //     this.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
          //     this.$http.get('Manager.ashx?act=login&user='+this.username+'&password='+this.password).then(
          //         success => {
          //             // console.log(success)
          //             if(success.data.code == '0') {
          //                 sessionStorage.setItem('username', this.username)
          //                 this.$router.push('/index');
          //             }else {
          //                 this.$Modal.error({
          //                     title:'提示',
          //                     content: success.data.msg,
          //                     onOk:()=>{
                                  
          //                     }
          //                 })
          //             }
          //         },
          //         error => {
                  
          //         }
          //     );
          // }
          
      }
    }
}
</script>
<style lang="scss">
#Forgetpassword{
  min-width: 1400Px;
    height: 100vh;
    background: url('~@/assets/images/bg.png') center center fixed
      no-repeat;
    background-size: cover;
    position: relative;
    .login_head_content{
      padding-top: 80px;
    }
    .logoimg{
      width:252px;
      height: 52px;
      margin-left: 80px;
    }
    .logindate{
      font-size: 20px;
      color: #246FEA;
      letter-spacing: 0;
      text-align: right;
      line-height: 52px;
      padding-right:80px;
    }
    .loginbox{
        width:540px;
        height:516px;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // -webkit-transform: translate(-50%, -50%);
        // -moz-transform: translate(-50%, -50%);
        margin:138px auto 0px;
        background-color: #fff;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        background: #FFFFFF;
        box-shadow: 0 20px 70px 0 rgba(0,0,0,0.10);
        .loginbox_content{
          width:380px;
          margin:0 auto;
          .logo{
            padding-top: 50px;
            margin: 0px 0px 50px 0px;
            .logintitle{
              text-align: center;
              font-size: 70px;
              color: rgba(0,0,0,0.80);
              letter-spacing: 0;
              line-height: 98px;
            }
            .logintitletips{
              font-size: 24px;
              color: rgba(0,0,0,0.40);
              letter-spacing: 0;
              text-align: center;
              line-height: 33px;
            }
          }
          .facedata-label-input{
            position: relative;
            background: rgba(0,0,0,0.05);
            border-radius: 30px;
            height: 60px;
            margin-bottom: 20px;
            .facedata-input{
              width:100% !important;
              height:100% !important;
              line-height: 1.5;
              padding: 20px 50px 20px 70px;
              font-size: 20px;
              border: none;
              border-radius: 30px;
              color: #515a6e;
              background-color: rgba(0,0,0,0.05);
              background-image: none;
              position: relative;
              outline: none;
            }
            .usernameicon{
              width: 40px;
              height: 40px;
              text-align: center;
              position: absolute;
              left: 10px;
              top: 10px;
              z-index: 1;
            }
            .closeicon{
              width: 20px;
              height: 20px;
              text-align: center;
              position: absolute;
              right: 20px;
              top: 20px;
              z-index: 1;
            }
            .eyecloseicon{
              width: 20px;
              height: 20px;
              text-align: center;
              position: absolute;
              right: 20px;
              top: 5px;
              z-index: 1;
              font-size: 12px;
              color: rgba(0,0,0,0.40);
            }
          }
          
             
          .forgetpassword{
            font-size: 18px;
            color: #246FEA;
            letter-spacing: 0;
            text-align: left;
            line-height: 60px;
            cursor: pointer; 
          }
          .margintop{
            margin-top: 40px;
          }
          .logintext{
            font-family: PingFangSC-Medium;
            font-size: 30px;
            color: rgba(0,0,0,0.80);
            letter-spacing: 0;
            text-align: center;
            line-height: 60px;
            cursor: pointer; 
            background: #246FEA;
            color: #fff;
            box-shadow: 0 5px 20px 0 rgba(36,111,234,0.40);
            border-radius: 30px;
          }
          .loginbutton{
            width: 100px;
            height:60px;
            display: inline-block;
            background: #246FEA;
            box-shadow: 0 5px 20px 0 rgba(36,111,234,0.40);
            border-radius: 30px;
            margin-right: -25px;
            cursor: pointer; 
          }
          @keyframes hvr-icon-wobble-horizontal {
            16.65% {
              -webkit-transform: translateX(6px);
              transform: translateX(6px);
            }
            33.3% {
              -webkit-transform: translateX(-5px);
              transform: translateX(-5px);
            }
            49.95% {
              -webkit-transform: translateX(4px);
              transform: translateX(4px);
            }
            66.6% {
              -webkit-transform: translateX(-2px);
              transform: translateX(-2px);
            }
            83.25% {
              -webkit-transform: translateX(1px);
              transform: translateX(1px);
            }
            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
          }

          .loginbutton:hover .ivu-icon{
            animation-name: hvr-icon-wobble-horizontal;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
            -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
          }
          .ivu-icon{
            line-height: 60px;
            color: #fff;
            font-size: 60px;
          }
        }
        
        ::v-deep {

        }
    }
    .loginbottom{
        margin-top:200px;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: rgba(0,0,0,0.40);
        letter-spacing: 0;
        line-height: 18px;
        
    }
    
}
//全局的报错弹框
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1400px;

  .ivu-modal {
    width: 300px !important;
    height: 300px;

    text-align: center;
    top: 0;

    .ivu-modal-content {
      border-radius: 10px;
    }

    .errorTips_modal {
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #fd5056;
      letter-spacing: 0;
      text-align: center;
      line-height: 20px;

      .errorTips_modal_tips {
        width: 77px;
        height: 100px;
        margin: 10px auto 30px;
      }

      .forget_tips_text {
        margin-bottom: 10px;
      }
    }
  }
}
</style>

<template>
  <div id="login">
    <Row class="login_head_content">
      <Col span="8">
      <img
        class="logoimg"
        :src="imgUrl"
        alt
      />
      </Col>
      <Col
        span="8"
        offset="8"
      >
      <div class="logindate">
        {{currentdate}}
        <SUP>th</SUP>
        . {{currentmonth}}. {{currentyear}}
      </div>
      </Col>
    </Row>
    <div class="loginbox">
      <div class="loginbox_content">
        <div class="logo">
          <div class="logintitle">Hello</div>
          <div class="logintitletips">请登录您的账户</div>
        </div>
        <div class="facedata-label-input">
          <input
            class="facedata-input"
            v-model="username"
            placeholder="请输入账号"
          />
          <img
            class="usernameicon"
            src="../../assets/images/Username.png"
          />
          <img
            v-if="username!=''"
            class="closeicon"
            src="../../assets/images/delete@2x.png"
            @click="clearusername"
          />
        </div>
        <div class="facedata-label-input">
          <input
            ref="input"
            class="facedata-input"
            type="password"
            v-model="password"
            placeholder="请输入密码"
          />
          <img
            class="usernameicon"
            src="../../assets/images/Password.png"
          />
          <Icon
            v-if="password!=''&&hasPW"
            class="eyecloseicon"
            type="ios-eye-outline"
            @click="changetypetext('open')"
          />
          <img
            v-if="password!=''&&!hasPW"
            class="closeicon"
            src="../../assets/images/invisible@2x.png"
            @click="changetypetext('close')"
          />
        </div>
        <div style="text-align:center">
          <Row class="margintop">
            <Col
              span="8"
              class="forgetpassword"
            >
            <div @click="ForgetPassword()">忘记密码?</div>
            </Col>
            <Col
              span="6"
              offset="2"
            >
            <div
              class="logintext"
              @click="handleSubmit()"
            >登录</div>
            </Col>
            <Col span="8">
            <div
              class="loginbutton"
              @click="handleSubmit()"
            >
              <Icon type="ios-arrow-round-forward" />
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="logincheckbox">
      <Checkbox v-model="single"></Checkbox>
      <span
        class="logincheckboxtext"
        @click="single=!single"
      >我同意并遵守相关法律协议</span>
    </div>
    <div class="loginbottom">FACEDATA Version 6.0 Rodian Corporation All Rights Reserved.</div>
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
  name: "login",
  data() {
    return {
      imgUrl: require("../../assets/images/logo-data.png"),
      username: "",
      password: "",
      errorTips_modal: false, //密码错误框
      single: true,
      isshowcloseicon: false,
      hasPW: false,
      err_list: [],
    };
  },
  created() {
    if (this.username != "") {
      this.isshowcloseicon = true;
    }
    this.getNowFormatDate();
  },
  methods: {
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      let newmonth = "";
      switch (month) {
        case 1:
          newmonth = "Jan";
          break;
        case 2:
          newmonth = "Feb";
          break;
        case 3:
          newmonth = "Mar";
          break;
        case 4:
          newmonth = "Apr";
          break;
        case 5:
          newmonth = "May";
          break;
        case 6:
          newmonth = "Jun";
          break;
        case 7:
          newmonth = "Jul";
          break;
        case 8:
          newmonth = "Aug";
          break;
        case 9:
          newmonth = "Sep";
          break;
        case 10:
          newmonth = "Oct";
          break;
        case 11:
          newmonth = "Nov";
          break;
        case 12:
          newmonth = "Dec";
          break;
      }
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.currentyear = year;
      this.currentmonth = newmonth;
      this.currentdate = strDate;
    },
    clearusername() {
      this.username = "";
    },
    changetypetext(type) {
      if (type == "open") {
        this.$refs.input.type = "password";
        this.hasPW = false;
      } else if (type == "close") {
        this.$refs.input.type = "text";
        this.hasPW = true;
      }
    },
    handleSubmit() {
      var that = this;
      if (this.password === "" || this.username === "") {
        that.err_list = ["账号或密码为空"];
        that.errorTips_modal = true;
        return;
      }
      if (that.single === false) {
        that.err_list = ["请阅读并同意协议"];
        that.errorTips_modal = true;
        return;
      }
      var query = {
        action: "Service",
        method: "login",
        data: [this.username, this.password],
      };
      console.log(that.PATH.LOGIN);
      that.$http.post(that.PATH.LOGIN, JSON.stringify(query)).then(
        (success) => {
          console.log(success.data);
          var res = success.data;

          if (res.result != null) {
            var name = res.result.name;
            var user_id=res.result.user_id;
            this.$router.push("/systemicselection");
            return;
          } else {
            that.err_list = ["账号或密码错误", "请联系管理员"];
            that.errorTips_modal = true;
            return;
          }
        },
        (error) => {
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    ForgetPassword() {
      this.err_list = ["请联系管理员"];
      this.errorTips_modal = true;
      return;
    },
  },
};
</script>
<style lang="scss">
#login {
  min-width: 1400px;
  height: 100vh;
  background: url("~@/assets/images/bg.png") center center fixed no-repeat;
  background-size: cover;
  position: relative;
  .login_head_content {
    padding-top: 80px;
  }
  .logoimg {
    width: 252px;
    height: 52px;
    margin-left: 80px;
  }
  .logindate {
    font-size: 20px;
    color: #246fea;
    letter-spacing: 0;
    text-align: right;
    line-height: 52px;
    padding-right: 80px;
  }
  .loginbox {
    width: 540px;
    height: 516px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // -webkit-transform: translate(-50%, -50%);
    // -moz-transform: translate(-50%, -50%);
    margin: 138px auto 0px;
    background-color: #fff;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.1);
    .loginbox_content {
      width: 380px;
      margin: 0 auto;
      .logo {
        padding-top: 50px;
        margin: 0px 0px 50px 0px;
        .logintitle {
          text-align: center;
          font-size: 70px;
          color: rgba(0, 0, 0, 0.8);
          letter-spacing: 0;
          line-height: 98px;
        }
        .logintitletips {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.4);
          letter-spacing: 0;
          text-align: center;
          line-height: 33px;
        }
      }
      .facedata-label-input {
        position: relative;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 30px;
        height: 60px;
        margin-bottom: 20px;
        .facedata-input {
          width: 100% !important;
          height: 100% !important;
          line-height: 1.5;
          padding: 20px 50px 20px 70px;
          font-size: 20px;
          border: none;
          border-radius: 30px;
          color: #515a6e;
          background-color: rgba(0, 0, 0, 0.05);
          background-image: none;
          position: relative;
          outline: none;
        }
        .usernameicon {
          width: 40px;
          height: 40px;
          text-align: center;
          position: absolute;
          left: 10px;
          top: 10px;
          z-index: 1;
        }
        .closeicon {
          width: 20px;
          height: 20px;
          text-align: center;
          position: absolute;
          right: 20px;
          top: 20px;
          z-index: 1;
        }
        .eyecloseicon {
          width: 20px;
          height: 20px;
          text-align: center;
          position: absolute;
          right: 20px;
          top: 5px;
          z-index: 1;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.4);
        }
      }

      .forgetpassword {
        font-size: 18px;
        color: #246fea;
        letter-spacing: 0;
        text-align: left;
        line-height: 60px;
        cursor: pointer;
      }
      .margintop {
        margin-top: 40px;
      }
      .logintext {
        font-family: PingFangSC-Medium;
        font-size: 30px;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0;
        text-align: right;
        line-height: 60px;
        margin-right: -10px;
        cursor: pointer;
      }
      .loginbutton {
        width: 100px;
        height: 60px;
        display: inline-block;
        background: #246fea;
        box-shadow: 0 5px 20px 0 rgba(36, 111, 234, 0.4);
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

      .loginbutton:hover .ivu-icon {
        animation-name: hvr-icon-wobble-horizontal;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }
      .ivu-icon {
        line-height: 60px;
        color: #fff;
        font-size: 60px;
      }
    }

    ::v-deep {
    }
  }
  .logincheckbox {
    // transform: translate(-50%, -50%);
    // -webkit-transform: translate(-50%, -50%);
    // -moz-transform: translate(-50%, -50%);
    // position: absolute;
    // top:848px;
    // left: 50%;
    margin-top: 50px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
    letter-spacing: 0;
    line-height: 18px;
    .ivu-checkbox {
      display: inline-block;
    }
    .ivu-checkbox-inner {
      width: 14px;
      height: 14px;
    }
    .logincheckboxtext {
      vertical-align: middle;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #246fea;
      letter-spacing: 0;
      line-height: 14px;
      cursor: pointer;
    }
  }
  .loginbottom {
    // transform: translate(-50%, -50%);
    // -webkit-transform: translate(-50%, -50%);
    // -moz-transform: translate(-50%, -50%);
    // position: absolute;
    // bottom: 80px;
    // left: 50%;
    margin-top: 120px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
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

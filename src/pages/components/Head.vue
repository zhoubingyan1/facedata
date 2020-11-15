<template>
  <div id="heads">
    <nav class="nav_section">
      <div class="nav_section_left">
        <!-- <img :src="logo" alt="logo" @click="$router.push('/index')"> -->
       <!-- <router-link :to="{path: '/index'}">
          <img :src="logo" alt="logo">
        </router-link>-->
      </div>
      <div class="nav_section_right">
        <!-- <img :src="info&&info.headimage?info.headimage:wechatLogo" alt="真有好房"> -->
        <div v-if="info">
          <p>{{info?info.email:''}}</p>
        </div>
        <div v-if="!info" style="line-height: 40px;color: #b6b6b6">暂无数据</div>
        <aside>
          <i class="ivu-icon ivu-icon-arrow-down-b"></i>
        </aside>
        <section class="nav_section_list">
          <ul>
            <!-- <li @click="goaccount">
              <i></i>
              <span>账号详情</span>
            </li> -->
            <li @click="gopersonal">
              <i></i>
              <span>修改密码</span>
            </li>
            <li @click="loginoput">
              <i></i>
              <span>退出登录</span>
            </li>
          </ul>
        </section>
      </div>
    </nav>
    <!-- 绑定公司审核 -->
    <Modal :mask-closable="false" v-model="upDPWModal" width="535" class-name="ma-edit-modal">
      <div class="edit-modal-body">
        <Icon type="android-close" @click="upDPWModal=false"></Icon>
        <div class="title">修改密码</div>
        <Form class="lujun-form edit-form" ref="formPWValidate" :model="formPWValidate" :rules="rulePWValidate" :label-width="100" label-position="left">
          <FormItem label="旧密码" prop="old_password">
            <Input v-model="formPWValidate.old_password" placeholder="请输入旧密码"></Input>
          </FormItem>
          <FormItem label="新密码" prop="password">
            <Input v-model="formPWValidate.password" placeholder="请输入新密码"></Input>
          </FormItem>
          <FormItem label="确认新密码" prop="passwdCheck">
            <Input v-model="formPWValidate.passwdCheck" placeholder="请再次确认新密码"></Input>
          </FormItem>
        </Form>
      </div>
      <div class="lujun-btn-box">
        <div class="lujun-btn-confirm" @click="submitCompanyForm('formPWValidate')">确定</div>
        <div class="lujun-btn-cancel" style="margin-left:10px;" @click="cancelPWModal">取消</div>
      </div>
    </Modal>
    <!--<Row>-->
      <!--<Col span="20" >-->
        <!--<img class="logo" :src="logo">-->
        <!--<p class="title">P&G China CM System</p>-->
      <!--</Col>-->
      <!--<Col span="4">-->
            <!--woshi-->
      <!--</Col>-->
    <!--</Row>-->
  </div>
</template>
<script>
// import logo from "@/assets/logo.jpg";
// import wechatLogo from "@/assets/logo.jpg";
export default {
  props: {},
  data() {
    // 验证pass
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度6位及以上"));
      } else {
        if (this.formPWValidate.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formPWValidate.validateField("passwdCheck");
        }
        callback();
      }
    };
    // 验证2次pass
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else if (value !== this.formPWValidate.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
    //   logo: logo,
    //   wechatLogo: wechatLogo,
      info: null,
      upDPWModal: false, //修改密码弹框
      formPWValidate: {
        old_password: "",
        password: "",
        passwdCheck: ""
      },
      rulePWValidate: {
        old_password: [
          {
            required: true,
            message: "旧密码不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur"
          }
        ],
        passwdCheck: [
          {
            required: true,
            validator: validatePassCheck,
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    // this.getWechat();
  },
  methods: {
    goaccount() {
      //跳转账号详情
      this.$nextTick(() => {
        this.$router.push("/accountdetail");
      });
    },
    gopersonal() {
      //修改密码
      this.$nextTick(() => {
        this.upDPWModal = true;
      });
    },
    submitCompanyForm(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$http
            .post(this.PATH.CHANGEPAWWORD, {
              old_password: this.formPWValidate.old_password,
              password: this.formPWValidate.password
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$Modal.success({
                  title: "提示",
                  content: res.data.message,
                  onOk: () => {
                    this.upDPWModal = false;
                  }
                });
              } else if (res.data.code === 2001100) {
                this.$Modal.error({
                  title: "提示",
                  content: res.data.message
                });
              }else{
                this.$Modal.error({
                  title: "提示",
                  content: res.data.message
                });
              }
            });
        }
      });
    },
    cancelPWModal() {
      this.upDPWModal = false;
    },
    loginoput() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("auth_dis");
      sessionStorage.removeItem("adminname");
      sessionStorage.removeItem("bannerslist");
      sessionStorage.removeItem("activeName");
      sessionStorage.removeItem("openNames");
      this.$router.replace("/");
    },
    // getWechat() {
    //   this.$http.post(this.PATH.GETUSERINFO).then(res => {
    //     // console.log(res);
    //     if (res.data.code == 200) {
    //       this.info = res.data.data;
    //       sessionStorage.setItem("adminname", res.data.data.name);
    //     }else{
    //       this.$Modal.success({
    //         title: "提示",
    //         content: res.data.message
    //       });
    //     }
    //   });
    // }
  }
};
</script>
<style lang="scss">
#heads {
  width: 100%;
  height: 65px;
  padding: 11px 50px;
  background-color: #ffffff;
  box-shadow: 4px 2px 10px 3px #ece6e6;
  position: fixed;
  z-index: 999;
  .nav_section {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    height: 100%;
    .nav_section_left {
      float: left;
      position: relative;
      height: 100%;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        max-width: 50px;
        cursor: pointer;
      }
    }
    .nav_section_right {
      min-width: 100px;
      float: right;
      position: relative;
      cursor: default;
      &:hover {
        aside {
          i {
            transform: rotate(180deg);
          }
        }
        .nav_section_list {
          display: block;
        }
      }
      img {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      > div {
        float: left;
        margin-left: 10px;
        > p {
          margin-top: 10px;
          color: #b6b6b6;
        }
        > div {
          color: #c4c4c4;
        }
      }
      > aside {
        position: absolute;
        right: -20px;
        top: 12px;
        color: rgb(182, 182, 182);
        > i {
          transition: all 0.2s linear;
        }
      }
      > .nav_section_list {
        display: none;
        position: absolute;
        background-color: #ffffff;
        top: 38px;
        right: -10px;
        box-shadow: 4px 5px 10px 0 #e5e5e5;
        ul {
          list-style: none;
          li {
            padding: 6px 30px;
            height: 30px;
            line-height: 20px;
            color: #b6b6b6;
            cursor: pointer;

            &:hover {
              /*background-color: #ff004c;*/
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>


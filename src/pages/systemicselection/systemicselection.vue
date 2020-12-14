<template>
  <div id="Systemicselection">
    <Row class="Systemicselection_head_content">
      <Col span="24">
        <img class="logoimg" :src="imgUrl" alt="" />
      </Col>
    </Row>
    <div class="systemicselection_content">
      <slider animation="fade" :autoplay="false">
        <slider-item>
          <div class="selection_content">
            <div
              class="selection_content_item"
              v-for="(item, index) in list.slice(0, 6)"
              :key="index"
              @click.stop="goto(item.id)"
            >
              <Row
                type="flex"
                justify="center"
                align="middle"
                class="code-row-bg"
              >
                <Col span="4">
                  <img
                    class="left_img"
                    :src="require('../../assets/images/public.png')"
                    alt=""
                  />
                </Col>
                <Col span="20">
                  <div class="selection_content_title">{{ item.name }}</div>
                  <div class="selection_content_content">{{ item.remark }}</div>
                </Col>
              </Row>
            </div>
          </div>
        </slider-item>
      </slider>
    </div>
    <Modal v-model="errorTips_modal" class-name="vertical-center-modal">
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
import Slider from "../components/slider/slider";
import SliderItem from "../components/slider/slider-item";

export default {
  name: "Systemicselection",
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      errorTips_modal:false,//错误弹框
      err_list: [], //错误信息列表
      imgUrl: require("../../assets/images/logo-data.png"),
      list: [],
    };
  },
  created() {},
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      var that = this;
      var query = {
        action: "Service",
        method: "getCurUserMarts",
        data: [],
      };
      that.$http.post(that.PATH.GetMenuList, JSON.stringify(query)).then(
        (success) => {
          console.log(success.data.result);
          const res=success.data.result
          if(res.length>0){
            res.splice(0,1)
          }
          //周 修改
          if(success.data.result.length==0){
            //弹窗 内容  你没有使用本系统的权限!
            that.err_list = ["你没有使用本系统的权限!"];
            that.errorTips_modal = true;
            return;
          }
          that.list = res;
        },
        (error) => {
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    hello($event) {
      console.log(`hello index: ${$event}`);
    },
    goto(id) {
      var that = this;
      var query = {
        action: "Service",
        method: "getCurUserUnits",
        data: [id],
      };
      that.$http.post(that.PATH.SetMenu, JSON.stringify(query)).then(
        (success) => {
          console.log(1111);
          console.log(success.data.result);
          //周  和上面一样
          if(success.data.result.length==0){
            //弹窗 内容  你没有使用本系统的权限!
            that.err_list = ["你没有使用本系统的权限!"];
            that.errorTips_modal = true;
            return;
          }
          this.login(id, success.data.result[0].id);
        },
        (error) => {
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
    },
    login(mart, unit) {
      var that = this;
      mart = mart || 0;
      var query = {
        action: "Service",
        method: "setMart",
        data: [parseInt(mart)],
      };
      //设置集市 无需返回值
      that.$http.post(that.PATH.SetMart, JSON.stringify(query)).then(
        (success) => {
          if (unit != null) {
            query = {
              action: "Service",
              method: "setUnit",
              data: [parseInt(unit)],
            };

            that.$http.post(that.PATH.SetUnit, JSON.stringify(query)).then(
              (success) => {
                this.$router.push("/index");
              },
              (error) => {
                that.err_list = ["登录异常", "请联系管理员"];
                that.errorTips_modal = true;
              }
            );
          }
        },
        (error) => {
          that.err_list = ["登录异常", "请联系管理员"];
          that.errorTips_modal = true;
        }
      );
      //设置部门 无需返回值
    },
  },
};
</script>
<style lang="scss">
#Systemicselection {
  height: 100vh;
  // background: url('~@/assets/images/bg.png') center center fixed
  //   no-repeat;
  // background-size: cover;
  background: #ffffff;
  .Systemicselection_head_content {
    padding-top: 80px;
  }
  .logoimg {
    width: 252px;
    height: 52px;
    margin-left: 80px;
  }
  .systemicselection_content {
    padding: 90px 100px 90px 100px;
  }
  .selection_content {
    width: 1350px;
    margin: 0 auto;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    .code-row-bg {
      height: 194px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0px 40px;
    }
    .code-row-bg:hover {
      border: 1px solid #fff;
      background: #ffffff;
      box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.1);
    }
    .left_img {
      width: 60px;
      height: 60px;
    }
    .selection_content_item {
      width: 649px;
      height: 194px;
      margin-bottom: 20px;
      margin-right: 50px;
    }

    .selection_content_item:nth-child(2n) {
      margin-right: 0px !important;
    }
    .selection_content_item:nth-child(5),
    .selection_content_item:nth-child(6) {
      margin-bottom: 0px !important;
    }
    .selection_content_title {
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.8);
      letter-spacing: 0;
      line-height: 30px;
      margin-bottom: 10px;
      vertical-align: middle;
    }
    .selection_content_content {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.4);
      letter-spacing: 0;
      line-height: 30px;
    }
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

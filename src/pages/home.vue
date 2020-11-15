<template>
    <div id="home">
      <Layout>
        <Sider class="left_silder" ref="side1" hide-trigger collapsible :collapsed-width="0">
          <div class="index_logo">
            <img class="logoimg" src="@/assets/images/logo.png" alt="LOGO">
          </div>
            <Menu @on-select="routeTo" :active-name="activeName" :open-names="openNames" theme="dark" width="auto" accordion>
                <MenuItem name="1-1">
                  <span class="slider_circle"></span>
                  <span>场景1</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="2-1">
                  <span>场景2</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="3-1">
                  <span>场景3</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <!-- <MenuItem name="4-1">
                  <span>场景4</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="5-1">
                  <span>场景5</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem> -->
            </Menu>
            <div>
              <Calendar
                ref="Calendar"
                :markDateMore="arr"
                :markDate="arr2"
                v-on:isToday="clickToday"
                agoDayHide="1530115221"
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
              ></Calendar>
            </div>
            <div class="system_bottom">
            系统管理
            </div>
        </Sider>
        <Layout>
            <Header>
              <div class="container_head">
                <div class="header_search">
                    <img class="header_search_img" src="@/assets/images/search@2x.png" alt="LOGO">
                    <input class="header_search_input" placeholder="搜索" >
                  </div>
                <div>
                    <div class="user_info">
                        <span class="username">{{username}}</span>
                        <img :src="wechatLogo" class="useicon">
                        <section class="nav_section_list">
                          <ul>
                              <li @click="loginout">
                                <span>登出</span>
                              </li>
                          </ul>
                        </section>
                    </div>
                </div>
            </div>
            </Header>
            <Content>
              <router-view/>
            </Content>
        </Layout>
    </Layout>
    </div>
</template>
<script>
import routers from '@/router/routePath'
import wechatLogo from "@/assets/images/logo.png";
import Calendar from "./components/vue-calendar-component/vue-calendar-component";
export default {
    name:"home",
    components: {
      Calendar
    },
    data(){
        return{
          arr2: [],
          arr: [
            {
              date: "2018/8/1",
              className: "mark1"
            },
            {
              date: "2018/8/13",
              className: "mark2"
            }
          ],
          wechatLogo:wechatLogo,
          routes: routers.routes,
          username:'Natasha',
          activeName: '1-1',
          openNames: ['1']
        }
    },
    computed: {
    },
    created () {
      this.setNav()
      function format(date, index) {
        date = new Date(date);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`;
      }
      setTimeout(() => {
        this.arr = [
          {
            date: format(new Date(), 3),
            className: "mark1"
          },
          {
            date: format(new Date(), 12),
            className: "mark2"
          }
        ];
        this.arr.push({
          date: format(new Date(), 15),
          className: "mark1"
        });
      }, 300);
    },
    watch: {
      '$route': 'setNav'
    },
    methods: {
      loginout(){
        sessionStorage.removeItem('username')
        this.$router.push({ name:'login'});
      },
      routeTo(name) {
        switch (name) {
          case "1-1":
            this.$router.push({ name:'index'})
            break
          case "2-1":
            this.$router.push({ name:'manage'})
            break
          default:
        }
      },
      //设置菜单高亮
      setNav() {
        let routeName = this.$route.name
        // console.log(this.routes)
        this.activeName = this.routes[routeName].id
        this.openNames = this.routes[routeName].parent
        /*this.$nextTick(function () {
          this.$refs.Menu.updateOpened()
          this.$refs.Menu.updateActiveName()
        })*/
      },
      clickDay(data) {
        console.log("选中了", data); //选中某天
        this.$toast("选中了" + data);
      },
      clickToday(data) {
        console.log("跳到了本月今天", data); //跳到了本月
      },
      changeDate(data) {
        this.$toast("切换到的月份为" + data);
        console.log("左右点击切换月份", data); //左右点击切换月份
      },
      demo() {
        this.$refs.Calendar.ChoseMonth("2018-12-13"); //跳到12月12日选中12月12日
      }
    }
}
</script>
<style lang="scss">
#home{
    height: 100%;
    .left_silder{
      width: 220px !important;
      // min-width: 200px !important;
      // max-width: 200px !important;
      // flex: 0 0 200px !important;
      .system_bottom{
        text-align: center;
        opacity: 0.4;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
        line-height: 16px;
        margin-top: 60px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(0,0,0,0.20);
        box-shadow: 0 0 0 0 rgba(0,0,0,0.20);
      }
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title{
      background: #272b2f;
      /*color: var(--base);*/
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-child-item-active>.ivu-menu-submenu-title{
      color: var(--base)
    }
    .menu-item .iconfont{
      position: relative;
      top: -6px;
    }
    .index_logo{
      width:58px;
      margin:80px auto 76px;
      .logoimg{
        width: 58px;
        height: 52px;
      }
    }
    
}
.ivu-layout-header{
  padding: 0px !important;
}

.container_head{
    width: 100%;
    height: 80px;
    background: #F5F5F5;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.20);
    border-bottom: 1px solid rgba(0,0,0,0.10);
    display: flex;
    justify-content:flex-end;
    .header_search{
      background: #E8E8E8;
      border-radius: 20px;
      width: 300px;
      height: 40px;
      margin-top: 20px;
      margin-right:30px;
      padding:4px 10px 4px 46px;
      position: relative;
      .header_search_img{
        position: absolute;
        top:10px;
        left: 20px;
        width: 20px;
        height:20px;
      }
      .header_search_input{
        display: block;
        background: #E8E8E8;
        border-radius: 20px;
        border:none !important;
        outline: none;
        width: 200px;
        height: 38px;
        margin-top:-2px;

      }
    }
    .username{
      display: inline-block;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      text-align: right;
      line-height: 80px;
      vertical-align: middle;
      margin-top:-30px;
      margin-right: 20px;
    }
    .user_info{
      
      color: #fff;
      position: relative;
      font-size: 14px;
      line-height: 80px;
      margin-right: 40px;
      cursor: pointer;
      height: 80px;
      &:hover{
        .nav_section_list{
          display: block;
        }
      }
    }
      .nav_section_list{
        display: none;
        z-index: 999;
        position: absolute;
        background-color: #ffffff;
        top: 45px;
        right: -3px;
        /*box-shadow: 4px 5px 10px 0 #e5e5e5;*/
        transition: all .2s linear;
        // border-radius: 4px;
        &:hover{
          background-color: var(--base);
          color: #fff !important;
        }
        ul{
          list-style: none;
          li{
            width: 80px;
            text-align: center;
            height: 30px;
            color: #000;
            cursor: pointer;
            font-size: 12px;
            line-height: 30px;
          }
        }
      }
    // >div{
    //   position: relative;
    //   height: 100%;
    //   >img{
    //     position: absolute;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     width: 40px;
    //     margin-left:50px; 
    //   }
    //   >i{
    //     margin: 18px 20px 0 20px;
    //   }
    //   .ivu-icon-md-menu:before{
    //     color: var(--base);
    //   }
    
    
    .useicon{
      width: 40px;
      height: 40px;
      margin-top:20px;
      border:1px solid rgba(0,0,0,0.20);
      border-radius: 50%;
      overflow: hidden;
    }
    .ivu-icon{
      color: #999;
    }
    
  }
  .ivu-layout-sider{
    background: #fff !important;
  }
  .ivu-layout.ivu-layout-has-sider{
    height: 100%;

  }
  .ivu-layout-sider{
    overflow: auto;
  }
  .ivu-menu-dark{
    background: #fff;
    padding: 10px 0 100px 20px;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
    
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    background: #F5F5F5 !important;
    border-radius: 40px 0 0 40px !important;
    color: var(--base) !important;
    .right_top{
      width: 20px;
      height: 20px;
      background: #F5F5F5;
      //  background: #fff;
      position: absolute;
      top:-20px;
      right: 0;
      // border-radius: 0px 0 20px 0 !important;
      .border{
        width: 20px;
        height: 20px;
        background: #fff;
        // background: #F5F5F5;
        border-radius: 0px 0 20px 0 !important;
      }
    }
    .right_bottom{
      width: 20px;
      height: 20px;
      background: #F5F5F5;
      //  background: #fff;
      position: absolute;
      bottom:-20px;
      right: 0;
      // border-radius: 0px 0 20px 0 !important;
      .border{
        width: 20px;
        height: 20px;
        background: #fff;
        // background: #F5F5F5;
        border-radius: 0px 20px 0px 0 !important;
      }
    }
    .sildercircle{
      position: absolute;
      left: 40px;
      top:30px;
      background: #246FEA;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
 .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
    background: #272b2f !important;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover,.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover,.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover{
    background: #F5F5F5 !important;
    border-radius: 40px 0 0 40px !important;
    color: var(--base) !important;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover{
    
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item{
    background: #fff !important;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: rgba(0,0,0,0.40);
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
    margin-bottom: 20px;
    border-radius: 40px 0 0 40px !important;
    position: relative;
  }
  
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title{
    background: #272b2f !important;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
    border-right: none;
    color: var(--base) !important;;
    background: #272b2f !important;
    z-index: 99;
  }
  .ivu-menu-submenu{
    white-space: nowrap;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    /*width: 69px;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    /*vertical-align: bottom;*/
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>



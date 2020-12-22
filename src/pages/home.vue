<template>
    <div id="home">
      <Layout>
        <Sider class="left_silder" ref="side1" hide-trigger collapsible :collapsed-width="0">
          <div class="index_logo">
            <img class="logoimg" src="@/assets/images/logo.png" alt="LOGO">
          </div>
          <!-- 对公 -->
          <div v-if="businessactive=='1'">
            <Menu @on-select="routeTo" :active-name="activeName" :open-names="openNames" theme="dark" width="auto" accordion>
                <MenuItem name="1-1">
                  <span class="slider_circle"></span>
                  <span>WorkSpace</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="2-1">
                  <span>场景1</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="3-1">
                  <span>场景2</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="4-1">
                  <span>场景3</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="5-1">
                  <span>数据预处理</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="6-1">
                  <span>应用建模</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="7-1">
                  <span>系统管理</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
            </Menu>
          </div>
          <!-- 对私 -->
          <div v-if="businessactive=='2'">
            <Menu @on-select="routeTo" :active-name="activeName" :open-names="openNames" theme="dark" width="auto" accordion>
                <MenuItem name="11-1">
                  <span class="slider_circle"></span>
                  <span>WorkSpace</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="12-1">
                  <span>场景1</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="13-1">
                  <span>场景2</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="14-1">
                  <span>场景3</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="15-1">
                  <span>数据预处理</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="16-1">
                  <span>应用建模</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="17-1">
                  <span>系统管理</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
            </Menu>
          </div>  
          <!-- 同业 -->
          <div v-if="businessactive=='3'">
            <Menu @on-select="routeTo" :active-name="activeName" :open-names="openNames" theme="dark" width="auto" accordion>
                <MenuItem name="21-1">
                  <span class="slider_circle"></span>
                  <span>WorkSpace</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="22-1">
                  <span>场景1</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="23-1">
                  <span>场景2</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="24-1">
                  <span>场景3</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="25-1">
                  <span>数据预处理</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="26-1">
                  <span>应用建模</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
                <MenuItem name="27-1">
                  <span>系统管理</span>
                  <div class="right_top">
                    <div class="border"></div>
                  </div>
                  <div class="right_bottom">
                    <div class="border"></div>
                  </div>
                  <div class="sildercircle"></div>
                </MenuItem>
            </Menu>
          </div> 
          <!-- 日历 -->
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
          <!-- <div class="system_bottom">
          系统管理
          </div> -->
        </Sider>
        <Layout class="minindex_left_content">
            <Header>
              <div class="container_head">
                <div class="container_head_left">
                  <div class="header-select-content">
                    <Select v-model="yearmodel" class="header-selects">
                        <Option v-for="item in yearList" :value="item" :key="item">{{ item}}</Option>
                    </Select>
                  </div>
                  <div class="header-switch-container">
                      <div class="header-switch-content">
                        <div class="header-switch-tab" :class="{'active':businessactive==item.type}" v-for="(item,index) in businesstypelist" :key="index" @click="headerTab(item)">{{item.name}}</div>
                      </div>
                  </div>
                </div>
                <div  class="container_head_right">
                  <div class="header-select-content1">
                    <Select v-model="citymodel" class="header-selects1">
                        <Option v-for="item in cityList" :value="item" :key="item">{{ item}}</Option>
                    </Select>
                  </div>
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
          yearmodel:'2018',
          yearList:['2020','2019','2018','2017','2016','2015'],
          citymodel:'上海',
          cityList:['上海','北京'],
          businessactive:'1',
          businesstypelist:[{name:'对公',type:'1'},{name:'对私',type:'2'},{name:'同业',type:'3'}],
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
          username:sessionStorage.getItem("UserName"),
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
      headerTab(item){
        console.log(this.activeName,item,'this.activeName')
        this.businessactive = item.type
        switch (this.activeName) {
          case "1-1":
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'index'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "2-1":
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'sceneone'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break  
          case "3-1":
            //场景2
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'scenetwo'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "4-1":
            //场景3
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'scenethree'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break  
          case "5-1":
            //数据预处理
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'datatreating'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break 
          case "6-1":
            //应用建模
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'applicationmodel'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break   
          case "7-1":
            //系统管理
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'setmanage'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "11-1":
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'index'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "12-1":
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'sceneone'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break  
          case "13-1":
            //场景2
           if(item.type=='1'){
              //对公
              this.$router.push({ name:'scenetwo'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "14-1":
            //场景3
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'scenethree'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break  
          case "15-1":
            //数据预处理
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'datatreating'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break 
          case "16-1":
            //应用建模
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'applicationmodel'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break   
          case "17-1":
            //系统管理
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'setmanage'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
            
          case "21-1":
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'index'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "22-1":
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'sceneone'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break  
          case "23-1":
            //场景2
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'scenetwo'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break
          case "24-1":
            //场景3
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'scenethree'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break  
          case "25-1":
            //数据预处理
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'datatreating'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break 
          case "26-1":
            //应用建模
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'applicationmodel'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            break   
          case "27-1":
            //系统管理
            if(item.type=='1'){
              //对公
              this.$router.push({ name:'setmanage'})
            }else if(item.type=='2'){
              this.$router.push({ name:'publicindex'})
            }else if(item.type=='3'){
              this.$router.push({ name:'publicindex'})
            }
            
            break
              
          default:
        }
        
      },
      routeTo(name) {
        switch (name) {
          case "1-1":
            this.$router.push({ name:'index'})
            break
          case "2-1":
            this.$router.push({ name:'sceneone'})
            break  
          case "3-1":
            //场景2
            this.$router.push({ name:'scenetwo'})
            break
          case "4-1":
            //场景3
            this.$router.push({ name:'scenethree'})
            break  
          case "5-1":
            //数据预处理
            this.$router.push({ name:'datatreating'})
            break 
          case "6-1":
            //应用建模
            this.$router.push({ name:'applicationmodel'})
            break   
          case "7-1":
            //系统管理
            console.log(11)
            this.$router.push({ name:'setmanage'})
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
        // console.log("选中了", data); //选中某天
        this.$toast("选中了" + data);
      },
      clickToday(data) {
        // console.log("跳到了本月今天", data); //跳到了本月
      },
      changeDate(data) {
        this.$toast("切换到的月份为" + data);
        // console.log("左右点击切换月份", data); //左右点击切换月份
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
      width: 220Px !important;
      min-width: 220Px !important;
      max-width: 220Px !important;
      flex: 0 0 220Px !important;
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
    .left_silder::-webkit-scrollbar {
        width: 4px;    
        /*height: 4px;*/
    }
    .left_silder::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        // background: rgba(0,0,0,0.2);
    }
    .left_silder::-webkit-scrollbar-track {
        // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        // border-radius: 0;
        // background: rgba(0,0,0,0.1);

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
    .header-switch-container{
      padding: 25px 0px;
      line-height: 28px !important;
    }
    .header-switch-content{
      // width: 208px;
      height: 30px;
      background: #E8E8E8;
      border-radius: 10px;
      line-height: 28px !important;
      padding: 2px 4px;
      .header-switch-tab{
        display: inline-block;
        height: 26px;
        padding: 0 20px;
        cursor: pointer;
        font-size: 14px;
        color: rgba(0,0,0,0.40);
        line-height: 28px !important;
        border-radius: 10px;
      }
      .active{
        background: #FFFFFF;
      }




    }
    
}
.ivu-layout-header{
  padding: 0px !important;
  height: 80px;
  .header-select-content{
    width: 78px;
    margin-right: 30px;
  }
  .header-select-content1{
    width: 91px;
    margin-right: 30px;
  }
  
}
.header-select-content .header-selects{
  width: 100%;
  background: #E8E8E8;
  border-radius: 10px;
  border:none;
  height: 30px;
  line-height: 30px;
   .ivu-icon-ios-arrow-down:before{
    content:"\F33D";
  }
  .ivu-select-placeholder,.ivu-select-selection{
    background: #E8E8E8;
    border-radius: 10px;
    border:none;
    height: 30px;
    line-height: 30px;
  }
  .ivu-select-visible .ivu-select-selection{
    box-shadow:none;
  }
  .ivu-select-selected-value{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(0,0,0,0.40);
    letter-spacing: 0;
    line-height: 30px;
  }
}
.header-select-content1 .header-selects1{
  width: 100%;
  background: #E8E8E8;
  border-radius: 10px;
  border:none;
  height: 40px;
  line-height: 40px;
  .ivu-icon-ios-arrow-down:before{
    content:"\F33D";
  }
  .ivu-select-placeholder,.ivu-select-selection{
    background: #E8E8E8;
    border-radius: 10px;
    border:none;
    height: 40px;
    line-height: 40px;
  }
  .ivu-select-visible .ivu-select-selection{
    box-shadow:none;
  }
  .ivu-select-selected-value{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: rgba(0,0,0,0.40);
    letter-spacing: 0;
    line-height: 40px;
  }
}

.container_head{
    width: 100%;
    height: 80px;
    background: #F5F5F5;
    // box-shadow: 0 0 0 0 rgba(0,0,0,0.20);
    border-bottom: 1px solid rgba(0,0,0,0.10);
    display: flex;
    justify-content:space-between;
    align-items: center;
    .container_head_left{
      display: flex;
      justify-content:flex-start;
      align-items: center;
      padding: 0 70px;
    }
    .container_head_right{
      display: flex;
      justify-content:flex-start;
      align-items: center;
      // padding: 0 50px;
    }
    .header_search{
      background: #E8E8E8;
      border-radius: 20px;
      width: 300px;
      height: 40px;
      // margin-top: 20px;
      margin-right:100px;
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
      margin-right: 50px;
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
    background: #fff !important;
    padding: 0px 0 155px 20px;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
    
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    background: #F5F5F5 !important;
    border-radius: 40px 0 0 40px !important;
    color: var(--base) !important;
    height: 40px;
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
      left: 20px;
      top:16px;
      background: #246FEA;
      width: 10px;
      height: 10px;
      border-radius: 10px;
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
    font-size: 16px !important;
    color: rgba(0,0,0,0.40) !important;
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
    margin-bottom: 30px;
    border-radius: 40px 0 0 40px !important;
    position: relative;
    padding: 0px 20px !important;
    height: 40px;

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
.minindex_left_content{
  min-width:880Px;
}
.minindex_left_content::-webkit-scrollbar {
    width: 6px;    
    /*height: 4px;*/
}
.minindex_left_content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
    // background: rgba(0,0,0,0.2);
}
.minindex_left_content::-webkit-scrollbar-track {
    // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    // border-radius: 0;
    // background: rgba(0,0,0,0.1);

}
</style>



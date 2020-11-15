<template>
  <div id="sideNav"><!-- :active-name="activeName" :open-names="openNames"-->
    <Menu @on-select="routeTo" :active-name="activeName" :open-names="openNames" theme="dark" width="auto" accordion>
          <!-- <template slot="title">
              <Icon class="iconfont icon-pinpai"></Icon>
              <span></span>
          </template> -->
      <!-- <MenuItem name="1-1">
        <Icon class="iconfont icon-shouye2"></Icon>
          <span>首页</span>
      </MenuItem> -->
      <Submenu name="2">
          <template slot="title">
              <Icon class="iconfont icon-chanpinguanli"></Icon>
              <span>活动管理</span>
          </template>
          <MenuItem name="2-1">
              <span>活动列表</span>
          </MenuItem>
          </Submenu>
          <Submenu name="3">
          <template slot="title">
              <Icon class="iconfont icon-dingdanguanli"></Icon>
              <span>爆料管理</span>
          </template>
          <MenuItem name="3-1">
              <span>爆料列表</span>
          </MenuItem>
          <MenuItem name="3-2">
              <span>24小时热榜</span>
          </MenuItem>
          <MenuItem name="3-3">
              <span>爆料库</span>
          </MenuItem>
          <MenuItem name="3-4">
              <span>爆料类型管理</span>
          </MenuItem>
          <MenuItem name="3-5">
              <span>Banner管理</span>
          </MenuItem>
            <MenuItem name="3-6">
              <span>学堂管理</span>
            </MenuItem>
      </Submenu>
      <Submenu name="4">
          <template slot="title">
              <Icon class="iconfont icon-yonghuguanli"></Icon>
              <span>用户管理</span>
          </template>
          <MenuItem name="4-1">
              <span>用户列表</span>
          </MenuItem>
      </Submenu>
      <Submenu name="5">
          <template slot="title">
              <Icon class="iconfont icon-zhanghuguanli"></Icon>
              <span>管理中心</span>
          </template>
          <MenuItem name="5-1">
              <span>更改密码</span>
          </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
import routers from "../router/routePath"
export default {
  data() {
    return {
      routes: routers.routes,
      token: sessionStorage.getItem("token"),
      // menuList: [
      //   {
      //     id: "1",
      //     class: "iconfont icon-xingxing",
      //     name: "个性化营销",
      //     children: [
      //       { id: "1-1", name: "消息推送" },
      //       { id: "1-2", name: "欢迎语设置" },
      //       { id: "1-3", name: "菜单设置" }
      //     ]
      //   },
      //   {
      //     id: "2",
      //     class: "iconfont icon-geren",
      //     name: "用户管理",
      //     children: [{ id: "2-1", name: "用户列表" }]
      //   },
      //   {
      //     id: "3",
      //     class: "iconfont icon-zu",
      //     name: "用户画像",
      //     children: [
      //       { id: "3-1", name: "用户标签" },
      //       { id: "3-2", name: "用户画像" }
      //     ]
      //   },
      //   {
      //     id: "4",
      //     class: "iconfont icon-shuju",
      //     name: "数据分析",
      //     children: [
      //       { id: "4-1", name: "用户数据分析" },
      //       { id: "4-2", name: "活动数据分析" }
      //     ]
      //   },
      //   {
      //     id: "5",
      //     class: "iconfont icon-box",
      //     name: "O2O服务",
      //     children: [{ id: "5-1", name: "门店位置" }]
      //   },
      //   {
      //     id: "6",
      //     class: "iconfont icon-shezhi",
      //     name: "设置",
      //     children: [
      //       { id: "6-1", name: "账号管理" },
      //       { id: "6-2", name: "角色管理" },
      //       { id: "6-3", name: "部门管理" },
      //       { id: "6-4", name: "任务管理" }
      //     ]
      //   }
      // ],
      menuList: null,
      activeName: '1-1',
      openNames: ['1']
    };
  },
  created() {
    this.setNav()
    // console.log(this.activeName,this.openNames,'跳转后')
    // this.$nextTick(function () {
    //   this.$refs.Menus.updateOpened()
    //   this.$refs.Menus.updateActiveName()
    // })
  },
  watch: {
    $route: "setNav",
  }, 
  methods: {
    routeTo(name) {
        switch (name) {
          case "1-1":
            this.$router.push({ name:'index'})
            break
          case "2-1":
            this.$router.push({ name:'ActivityList'})
            break
          case "3-1":
            this.$router.push({ name: "tipoffList" })
            break
          case "3-2":
            this.$router.push({ name: "CompanyHeadline" })
            break
          case "3-3":
            this.$router.push({ name: "tipoffLibrary" })
            break
          case "3-4":
            this.$router.push({ name: "tipoffManagement" })
            break
          case "3-5":
            this.$router.push({ name: "bannerManagement" })
            break
          case "3-6":
            this.$router.push({ name: "schoolManagement" })
            break
          case "4-1":
            this.$router.push({ name: "userList" })
            break
          case "5-1":
            this.$router.push({ name: "ChangePassword" })
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
      }
  }
};
</script>
<style lang="scss">
#sideNav {
  width: 240px;
  height: 100%;
  float: left;
  .ivu-menu-light.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    border-right: none;
    border-left: 4px solid var(--base);
    color: var(--base);
    &:after {
      background: var(--base);
    }
  }
  .ivu-menu-submenu-title {
    font-size: 14px;
    color: var(--nav);
  }
  .ivu-menu-item {
    font-size: 14px;
    color: var(--font);
  }
  > .ivu-menu {
    height: 94%;
    overflow-y: auto;
    margin-top: 65px;
    padding-bottom: 20px;
    box-shadow: -2px -1px 10px 0 #ece6e6;
    position: fixed;
    transition: all 0.2s linear;
    &:hover {
      box-shadow: 3px 1px 20px 0 #ece6e6;
    }
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 55px;
      background-color: #fff;
    }
  }
  // .ivu-menu-submenu {
  //   &:first-of-type {
  //     .ivu-icon-ios-arrow-down {
  //       display: none;
  //     }
  //   }
  // }
  .iconfont {
    font-size: 16px;
    vertical-align:middle;
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    display: none;
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item {
    border-right: none;
  }
  .activeSubMenu .ivu-menu-submenu-title {
    // color: var(--base);
  }
}
</style>

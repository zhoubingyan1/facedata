// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/utils/requests'
import requestURL from '@/router/urlpath'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/global.css'

import '@/utils/rem'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/display.css'


// Vue.use(ElementUI, {
//   size: 'small',
// })
import ViewUI from 'view-design';

// import style
import 'view-design/dist/styles/iview.css';


import {
  getCookie,
  setCookie,
  delCookie,
  copyContent,
  getFormatDate,
  getenumlistContent,
  formatTime,
  pageTotal
} from '@/utils/util'

import Vuetify from 'vuetify'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie
Vue.prototype.delCookie = delCookie
Vue.prototype.copyContent = copyContent
Vue.prototype.getFormatDate = getFormatDate
Vue.prototype.getenumlistContent = getenumlistContent
Vue.prototype.formatTime = formatTime
Vue.prototype.pageTotal = pageTotal

Vue.use(ViewUI);

Vue.use(iView)

Vue.config.productionTip = false
Vue.prototype.PATH = requestURL


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  
  template: '<App/>'
})

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

Vue.use(iView)

Vue.config.productionTip = false
Vue.prototype.PATH = requestURL


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

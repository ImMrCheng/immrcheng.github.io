// package
import Vue from 'vue'
// Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// script
import router from './router/index.js'
import store from './store/index.js'
import ajax from './ajax/index.js'
import utils from './utils/index.js'
import App from './App.js'
// css
import 'styles/index.styl'
import './utils/directives'
// use
Vue.use(ElementUI)
Vue.use(utils)
Vue.use(ajax)

// export
export default new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')

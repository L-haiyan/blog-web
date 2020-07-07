import Vue from 'vue'
import App from './App'
import router from './router'
//手动配置elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue ({
  el : '#app',
  render: h=>h(App),
  router
})

import Vue from 'vue'
import App from './App'
import router from './router'
import './filter'

import store from './store'
//手动配置elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './mock/mockServer'
import VueParticles from 'vue-particles'
import axios from 'axios'
//减少控制台问题提示
Vue.config.productionTip = false
//以指定某个请求应该发送凭据
axios.defaults.withCredentials = true
//全局注册
Vue.prototype.$http = axios
// ----------------------------------------
    // 全局注册
    // import with ES6
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    // use
    Vue.use(mavonEditor)
//-----------------------------------------
    //代码高亮
    import $ from 'jquery'
    import 'highlight.js/styles/googlecode.css'
    import './tools/hljs/hl.js'
    import hljs from 'highlight.js'
    Vue.directive('highlight', function (el) {
        let blocks = el.querySelectorAll('pre code')
        blocks.forEach((block) => {
          hljs.highlightBlock(block)
        })
      })
    
    hljs.highlightCode = function () { 
        //自定义highlightCode方法，将只执行一次的逻辑去掉
        let blocks = document.querySelectorAll('pre code');
        [].forEach.call(blocks, hljs.highlightBlock);
    };
    //代码行号

//--------图片懒加载-------
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:'/img.jpg',                    //报错时需要的图片
  loading:'/img/jpg'				     //加载时需要的图片
})



//粒子特效
Vue.use(VueParticles)

//-------------------------------------

Vue.use(ElementUI)

new Vue ({
  el : '#app',
  render: h=>h(App),
  router,
  store,
  data() {
    return { value: '' }
}
})

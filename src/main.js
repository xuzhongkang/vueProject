import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import iView from 'iview';
// 引用axios，并设置基础URL为后端服务api地址
import axios from "axios";
// axios.defaults.baseURL = 'https://localhost:8888/api'

// 将API方法绑定到全局,把axios挂载到vue构造函数的prototype属性上，组件中通过this.axios来拿到axios
Vue.prototype.$axios = axios
//消息提示的环境配置
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(iView);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

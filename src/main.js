import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import 'iview/dist/styles/iview.css'
import iView from 'iview';
// 引用axios，并设置基础URL为后端服务api地址
import axios from "axios";
axios.defaults.baseURL = 'https://localhost:8888/api'

// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(iView);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

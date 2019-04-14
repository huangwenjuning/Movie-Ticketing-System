// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import http from './http';
import './assets/styles/iconfont/iconfont.css';
// import './assets/styles/reset.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import '@/assets/styles/index.styl';

Vue.use(Mint);
Vue.config.productionTip = false;
Vue.prototype.$http = http;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

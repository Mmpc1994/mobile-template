// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/services/class-component-hooks.ts';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Vant from 'vant';
import 'vant/lib/vant-css/index.css';


Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

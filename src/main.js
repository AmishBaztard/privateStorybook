/*!

  =========================================================
  * Vue Paper Dashboard 2 PRO - V2.3.0
  =========================================================

  * Product Page: https://www.creative-tim.com/product/vue-paper-dashboard-2-pro
  * Available with purchase of license from https://www.creative-tim.com/product/vue-paper-dashboard-2-pro
  * Copyright 2019 Creative Tim (https://www.creative-tim.com)
  * License Creative Tim (https://www.creative-tim.com/license)

  =========================================================

*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRouterPrefetch from 'vue-router-prefetch';
import VueSweetalert2 from 'vue-sweetalert2';
import VueNotify from 'vue-notifyjs';



import VueCookies from 'vue-cookies';
import router from '@/routes/router';
import store from './store';
import App from './App';



Vue.config.devtools = true;
Vue.config.performance = true;

const { $cookies } = Vue;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store,
});

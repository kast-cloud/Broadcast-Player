import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './helpers/filter.js';

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue(); // Global event bus


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

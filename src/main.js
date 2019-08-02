import '@babel/polyfill';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mutationobserver-shim';
import Vue from 'vue';
import App from './App.vue';
import './plugins/bootstrap-vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
Vue.use(BootstrapVue);

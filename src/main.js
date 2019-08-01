import '@babel/polyfill'
import 'mutationobserver-shim'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
Vue.use(BootstrapVue);

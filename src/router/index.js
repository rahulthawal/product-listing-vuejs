import productdetails from '@/components/ProductDetails';
import productlist from '@/components/ProductList';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'productlist',
      component: productlist
    },
    {
      path: '/product/:productId',
      name: 'productdetails',
      component: productdetails
    }
  ]
});

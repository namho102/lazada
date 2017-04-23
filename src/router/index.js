import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

import Search from '@/components/Search'
import OrderHistory from '@/components/OrderHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/product-detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/orderhistory',
      name: 'OrderHistory',
      component: OrderHistory
    }
  ]
})

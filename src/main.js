// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      user_id: ''
    }
  },
  methods:  {
    ObjectId: (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
        s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h)),
    isLogged() {
      return localStorage.getItem('user_id')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#all',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
import Onlineusers from '@/pages/Onlineusers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Onlineusers',
      component: Onlineusers
    }
  ]
})

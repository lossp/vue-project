import Vue from 'vue'
import Router from 'vue-router'
import Topbar from '@/components/Topbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Topbar',
      component: Topbar
    }
  ]
})

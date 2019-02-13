import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})

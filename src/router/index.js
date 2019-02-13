import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Demo from '@/components/Demo'
import Inquire from '@/components/Inquire'
import Initialize from '@/components/Initialize'
import Show from '@/components/Show'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/initialize',
      component: Initialize,
      children: [
        {
          path: 'inquire',
          component: Inquire,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'show',
          component: Show,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'result',
          component: Result
        }
      ]
    }
  ]
})

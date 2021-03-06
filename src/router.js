import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', redirect: '/1'
    }
    ,{
      path: '/:id',
      name: 'semaphore',
      component: () => import('./components/semaphore.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'slide1',
      component: () => import(/* webpackChunkName: "about" */ './views/slide1.vue')
    }
    ,{
      path: '/1',
      name: 'slide1',
      component: () => import(/* webpackChunkName: "about" */ './views/slide1.vue')
    },
    {
      path: '/2',
      name: 'slide2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/slide2.vue')
    },
    {
      path: '/3',
      name: 'slide3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/slide3.vue')
    }
  ]
})

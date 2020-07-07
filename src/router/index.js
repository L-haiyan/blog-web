import Vue from 'vue'
import Router from 'vue-router'
// import Link from '../pages/Link/Link.vue'
// import Home from '../pages/Home.vue'
const Home = () => import('../pages/Home.vue')
const Link = () => import('../pages/Link/Link.vue')
const Essay = () => import('../pages/Essay/Essay.vue')
const Aboutme = () => import('../pages/Aboutme/Aboutme.vue')
const Time = () => import('../pages/Time/Time.vue')
const Words = () => import('../pages/Words/Words.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
        {
          path: '/link',
          component: Link
        },
        {
          path: '/essay',
          component: Essay
        },
        {
          path: '/aboutme',
          component: Aboutme
        },
        {
          path: '/time',
          component: Time
        },
        {
          path: '/words',
          component: Words
        },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

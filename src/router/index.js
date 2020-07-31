import Vue from 'vue'
import Router from 'vue-router'

//前端页面
// import Link from '../pages/Link/Link.vue'
// import Home from '../pages/Home.vue'
const Home = () => import('../pages/Home.vue')
const Link = () => import('../pages/Link/Link.vue')
const Essay = () => import('../pages/Essay/Essay.vue')
const Aboutme = () => import('../pages/Aboutme/Aboutme.vue')
const Time = () => import('../pages/Time/Time.vue')
const Words = () => import('../pages/Words/Words.vue')
const Fill = () => import('../pages/Essay/Fill/Fill.vue')
const Detail = ()=>import('../pages/Essay/Detail/Detail.vue')
const Essays = () =>import('../pages/Essay/Essays/Essays.vue')
const Login = ()=>import('../pages/Login.vue')

//后台管理系统页面
const Bindex = ()=>import('../pages/Admin/Bindex.vue')
const Blink = ()=>import('../pages/Admin/Blink/Blink.vue')
const Btime = ()=>import('../pages/Admin/Btime/Btime.vue')
const Bwords = ()=>import('../pages/Admin/Bwords/Bwords.vue')
const Bessay = ()=>import('../pages/Admin/Bessay/Bessay.vue')
const AddEssay = ()=>import('../pages/Admin/Bessay/AddEssay/AddEssay.vue')
const AddBlink = ()=>import('../pages/Admin/Blink/AddBlink/AddBlink.vue')
const EditEssay = ()=>import('../pages/Admin/Bessay/EditEssay/EditEssay.vue')


Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


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
          component: Essay,
          redirect:'/essay/essays',
          children: [
            {path:'/essay/note',component:Fill},
            {path:'/essay/web',component:Fill},
            {path:'/essay/daily',component:Fill},
            {path:'/essay/resource',component:Fill},
            {path:'/essay/bug',component:Fill},
            {path:'/essay/detail',component:Detail},
            {path:'/essay/essays',component:Essays}
        ]
      },

        {
          path:'/essay',redirect:'/essay/essays'
        },
        {
          path: '/aboutme',
          component: Aboutme
        },
        {
          path: '/time',
          component: Time,
        //   beforeEnter: (to, from, next) => {
        //     let token = localStorage.getItem('Authorization')

        //     if (token) {
        //         next()
        //     } else {
        //         next('/')
        //     }
        // }
        },
        {
          path: '/words',
          component: Words
        },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/admin',
      component:Bindex,
      children:[
        {path:'/admin/bessay',component:Bessay},
        {path:'/admin/bwords',component:Bwords},
        {path:'/admin/blink',component:Blink},
        {path:'/admin/btime',component:Btime},
        {path:'/admin/addEssay',component:AddEssay},
        {path:'/admin/addBlink',component:AddBlink},
        {path:'/admin/editEssay',component:EditEssay}
      ],
      redirect:'/admin/bessay'
    }
  ]
})

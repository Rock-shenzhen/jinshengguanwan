import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import layout from '../view/layout.vue'
import home from '../view/home/index'
import news from '../view/news/index'
import we from '../view/we/index'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
        { path: '/home', name: 'home', component: home },
        { path: '/news', name: 'news', component: news },
        { path: '/we', name: 'we', component: we },
      ]
    }
  ]
})

export default router
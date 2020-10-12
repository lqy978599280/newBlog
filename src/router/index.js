import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/link',
        name: 'link',
        component: () => import('../views/link.vue')
      },
      {
        path: '/process',
        name: 'process',
        component: () => import('../views/process.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
      },
      {
        path: '/suggestion',
        name: 'suggestion',
        component: () => import('../views/suggestion.vue')
      },
      {
        path: '/singleBlog:id',
        name: 'singleBlog',
        component: () => import('../views/singleBlog.vue')
      },
      {
        path: '/blogging',
        name: 'blogging',
        component: () => import('../views/blogging.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

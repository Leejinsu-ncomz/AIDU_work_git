import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

const portalHomeRouter = [
  {
    path: 'main',
    name: 'UserHome',
    title: 'home',
    component: () => import('@/views/project/aiduMain')
  }
]

const projectRouter = [
  {
    path: 'project',
    name: 'ProjectList',
    title: '나의 프로젝트',
    component: () => import('@/views/project/m2_01_01_000')
  }
]

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/main',
      children: [
        ...portalHomeRouter,
        ...projectRouter
      ]
    }
  ]
})

export default router

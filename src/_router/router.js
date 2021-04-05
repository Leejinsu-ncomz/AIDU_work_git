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
    component: () => import('@/views/project/m2_01_01_000'),
    children: [
      {
        path: 'main',
        name: 'ProjectDetail',
        title: '기본정보',
        component: () => import('@/views/project/m2_02_01_000')
      }
    ]
  }
]
const example = [
  {
    path: 'example',
    name: 'example',
    title: '예시',
    component: () => import('@/views/example/example.vue')
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
        ...projectRouter,
        ...example
      ]
    }
  ]
})

export default router

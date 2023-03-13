import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      redirect: '/project/list',
      children: [
        {
          path: 'list',
          name: 'project-list',
          component: () => import('../views/ProjectListView.vue')
        },
        {
          path: 'gallery',
          name: 'project-gallery',
          component: () => import('../views/ProjectGalleryView.vue')
        },
        {
          path: ':id',
          name: 'project-detail',
          component: () => import('../views/ProjectDetailView.vue')
        }
      ]
    },
    {
      path: '/weeklyzine',
      name: 'weeklyzine',
      redirect: '/weeklyzine/list',
      children: [
        {
          path: 'list',
          name: 'weeklyzine-list',
          component: () => import('../views/WeeklyzineListView.vue')
        },
        {
          path: ':id',
          name: 'weeklyzine-detail',
          component: () => import('../views/WeeklyzineDetailView.vue')
        }
      ]
    },
    {
      path: '/notice',
      name: 'notice',
      redirect: '/notice/list',
      children: [
        {
          path: 'list',
          name: 'notice-list',
          component: () => import('../views/NoticeListView.vue')
        },
        {
          path: ':id',
          name: 'notice-detail',
          component: () => import('../views/NoticeDetailView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

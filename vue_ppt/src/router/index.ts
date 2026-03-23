import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/demo',
      component: () => import('@/presentations/demo/index.vue')
    },
    {
      path: '/qwen3-next-bench',
      component: () => import('@/presentations/qwen3-next-bench/index.vue')
    },
    {
      path: '/design-language-template',
      component: () => import('@/presentations/design-language-template/index.vue')
    },
    {
      path: '/ai-skill-tree',
      component: () => import('@/presentations/ai-skill-tree/index.vue')
    },
    {
      path: '/ppt-test01',
      component: () => import('@/presentations/ppt_test01/index.vue')
    },
    {
      path: '/tv-buying-guide',
      component: () => import('@/presentations/tv-buying-guide/index.vue')
    },
    {
      path: '/tv-select',
      component: () => import('@/presentations/tv-select/index.vue')
    },
    {
      path: '/product-showcase',
      component: () => import('@/presentations/product-showcase/index.vue')
    },
    {
      path: '/xidiji-select',
      component: () => import('@/presentations/xidiji-select/index.vue')
    },
    {
      path: '/xidiji-showcase',
      component: () => import('@/presentations/xidiji-showcase/index.vue')
    }
  ],
})

export default router

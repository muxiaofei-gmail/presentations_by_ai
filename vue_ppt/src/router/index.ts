import { createRouter, createWebHistory } from 'vue-router'
import {
  VALID_PRODUCT_TYPES,
  PRICE_RANGES,
  isValidProductType,
  isValidPriceRange,
  getDefaultPriceRange,
  getLegacyRedirects
} from './routes/product-showcase'

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
      path: '/xidiji-select',
      component: () => import('@/presentations/xidiji-select/index.vue')
    },
    {
      path: '/saodiji-select',
      component: () => import('@/presentations/saodiji-select/index.vue')
    },

    // ========== 电视产品卡片展示（独立路由，无价位分档） ==========
    {
      path: '/TV-showcase',
      name: 'TV-showcase',
      component: () => import('@/presentations/TV-showcase/index.vue')
    },
    // 向后兼容：原路径重定向到新路径
    {
      path: '/tv-product-showcase',
      redirect: '/TV-showcase'
    },
    {
      path: '/product-showcase',
      redirect: '/TV-showcase'
    },

    // ========== 动态产品展示路由（洗地机/扫地机器人等） ==========
    {
      path: '/product-showcase/:productType/:priceRange',
      name: 'product-showcase-dynamic',
      component: () => import('@/presentations/product-showcase/index.vue'),
      beforeEnter: (to, from, next) => {
        const { productType, priceRange } = to.params

        // 验证产品类型
        if (!isValidProductType(productType as string)) {
          next({ path: '/', replace: true })
          return
        }

        // 验证价位分档
        if (!isValidPriceRange(productType as string, priceRange as string)) {
          // 重定向到该产品类型的第一个价位
          const defaultRange = getDefaultPriceRange(productType as any)
          next({
            path: `/product-showcase/${productType}/${defaultRange}`,
            replace: true
          })
          return
        }

        next()
      },
      props: true
    },

    // ========== 旧路由重定向（向后兼容） ==========
    // 自动从 getLegacyRedirects() 获取
    ...Object.entries(getLegacyRedirects()).map(([fromPath, toPath]) => ({
      path: fromPath,
      redirect: toPath
    }))
  ],
})

export default router
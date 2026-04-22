<!--
  统一产品展示入口
  接收路由参数动态渲染对应价位的产品展示

  URL 格式：/product-showcase/:productType/:priceRange
  示例：/product-showcase/xidiji/1500
-->
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import BackgroundManager from '../../shared/backgrounds/background-manager.vue'
import { backgroundRegistry } from '../../shared/backgrounds/registry'
import {
  createPresentationContext,
  providePresentationContext
} from '../../shared/presentation/presentation-context'

import SlideIntro1 from './slides/SlideIntro1.vue'
import SlideIntro2 from './slides/SlideIntro2.vue'
import SlideIntro3 from './slides/SlideIntro3.vue'
import SlideOutro from './slides/SlideOutro.vue'
import DynamicProductCard from '../../shared/product-card/DynamicProductCard.vue'

import { getProductsSync } from '@/data/products/registry'
import { useShowcaseNavigation } from './composables/useShowcaseNavigation'
import type { Product } from '@/shared/product-card/types'

// 路由参数
const route = useRoute()
const productType = computed(() => route.params.productType as string)
const priceRange = computed(() => route.params.priceRange as string)

// 产品数据
const products = ref<Product[]>([])

// 监听路由变化，加载对应产品数据
watch(
  [productType, priceRange],
  ([type, range]) => {
    products.value = getProductsSync(type as any, range)
  },
  { immediate: true }
)

// 演示配置
const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'soft-mesh',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: `${productType.value}-showcase-${priceRange.value}`,
  persist: true
})

providePresentationContext(presentationContext)

// 导航逻辑
const {
  currentIndex,
  slideDirection,
  currentPageType,
  currentProductIndex,
  currentIntroIndex,
  nextSlide,
  prevSlide,
  goToSlide
} = useShowcaseNavigation({
  products: products.value,
  introSlides: 3,
  outroSlides: 1
})

// 动态计算总页数
const dynamicTotalSlides = computed(() => 3 + products.value.length + 1)
</script>

<template>
  <div class="presentation-page">
    <BackgroundManager />

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <div
        :key="currentIndex"
        class="slide-transition-wrapper"
        :class="['slide-' + slideDirection]"
      >
        <!-- 开头页 -->
        <SlideIntro1
          v-if="currentPageType === 'intro' && currentIntroIndex === 0"
          :product-type="productType"
          :price-range="priceRange"
        />
        <SlideIntro2 v-else-if="currentPageType === 'intro' && currentIntroIndex === 1" />
        <SlideIntro3 v-else-if="currentPageType === 'intro' && currentIntroIndex === 2" />

        <!-- 产品卡片页 -->
        <DynamicProductCard
          v-else-if="currentPageType === 'product'"
          :product="products[currentProductIndex]"
          :direction="slideDirection"
        />

        <!-- 结尾页 -->
        <SlideOutro
          v-else-if="currentPageType === 'outro'"
          :product-type="productType"
          :price-range="priceRange"
        />
      </div>
    </div>

    <!-- 导航指示器 -->
    <div class="nav-indicator">
      <button class="nav-btn prev" @click="prevSlide" title="上一个 (←)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div class="page-dots">
        <span
          v-for="i in dynamicTotalSlides"
          :key="i"
          class="dot"
          :class="{ active: i - 1 === currentIndex }"
          @click="goToSlide(i - 1)"
        ></span>
      </div>
      <button class="nav-btn next" @click="nextSlide" title="下一个 (→)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.presentation-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #0f0f1a;
}

.content-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* 导航指示器 */
.nav-indicator {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 20;
  padding: 0.35rem 0.75rem;
  background: rgba(120, 145, 159, 0.15);
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(120, 145, 159, 0.25);
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #78919F;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  color: #9ab3bf;
  background: rgba(120, 145, 159, 0.2);
}

.nav-btn svg {
  width: 0.875rem;
  height: 0.875rem;
}

.page-dots {
  display: flex;
  gap: 0.35rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: rgba(120, 145, 159, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot:hover {
  background: rgba(120, 145, 159, 0.6);
}

.dot.active {
  background: #78919F;
}

/* 页面切换动画 */
.slide-transition-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-transition-wrapper.slide-next {
  animation: slideFromRight 0.45s ease-out;
}

.slide-transition-wrapper.slide-prev {
  animation: slideFromLeft 0.45s ease-out;
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
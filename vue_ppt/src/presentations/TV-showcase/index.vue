<!--
  电视产品卡片展示页面
  展示所有电视产品（无价位分档，直接展示全部产品）
-->
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import BackgroundManager from '../../shared/backgrounds/background-manager.vue'
import { backgroundRegistry } from '../../shared/backgrounds/registry'
import {
  createPresentationContext,
  providePresentationContext
} from '../../shared/presentation/presentation-context'

import { ProductCard } from '@/shared/product-card'
import { products } from './products'

// 演示配置
const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'soft-mesh',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'tv-product-showcase',
  persist: true
})

providePresentationContext(presentationContext)

// 当前产品索引
const currentIndex = ref(0)
const currentProduct = computed(() => products[currentIndex.value])
const totalProducts = computed(() => products.length)

// 切换方向: 'next' 或 'prev'
const slideDirection = ref<'next' | 'prev'>('next')

// 切换产品
const nextProduct = () => {
  slideDirection.value = 'next'
  currentIndex.value = (currentIndex.value + 1) % products.length
}

const prevProduct = () => {
  slideDirection.value = 'prev'
  currentIndex.value = (currentIndex.value - 1 + products.length) % products.length
}

// 点击圆点切换
const goToProduct = (index: number) => {
  slideDirection.value = index > currentIndex.value ? 'next' : 'prev'
  currentIndex.value = index
}

// 键盘导航
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault()
    nextProduct()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    prevProduct()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="product-showcase-page">
    <BackgroundManager />
    <div class="content-wrapper">
      <div
        :key="currentProduct.id"
        class="product-transition-wrapper"
        :class="['slide-' + slideDirection]"
      >
        <ProductCard :product="currentProduct" :direction="slideDirection" />
      </div>
    </div>

    <!-- 导航指示器 -->
    <div class="nav-indicator" v-if="totalProducts > 1">
      <button class="nav-btn prev" @click="prevProduct" title="上一个 (←)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div class="page-dots">
        <span
          v-for="(product, index) in products"
          :key="product.id"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToProduct(index)"
          :title="product.model"
        ></span>
      </div>
      <button class="nav-btn next" @click="nextProduct" title="下一个 (→)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-showcase-page {
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
  max-width: 200px;
  overflow-x: auto;
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

/* 产品切换动画 */
.product-transition-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-transition-wrapper.slide-next {
  animation: slideFromRight 0.45s ease-out;
}

.product-transition-wrapper.slide-prev {
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
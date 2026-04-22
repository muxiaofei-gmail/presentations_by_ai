<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import BackgroundManager from '../../shared/backgrounds/background-manager.vue'
import { backgroundRegistry } from '../../shared/backgrounds/registry'
import {
  createPresentationContext,
  providePresentationContext
} from '../../shared/presentation/presentation-context'

import SlideIntro1 from './slide-intro-1.vue'
import SlideIntro2 from './slide-intro-2.vue'
import SlideIntro3 from './slide-intro-3.vue'
import SlideOutro from './slide-outro.vue'
import SaodijiShowcase1000Card from '../../shared/product-card/cards/SaodijiShowcase1000Card.vue'
import { products } from './products'

// 演示配置
const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'soft-mesh',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'saodiji-showcase-1000',
  persist: true
})

providePresentationContext(presentationContext)

// 总页数：3个开头页 + 产品数量 + 1个结尾页
const INTRO_SLIDES = 3
const totalSlides = INTRO_SLIDES + products.length + 1
const currentIndex = ref(0)

// 当前页面类型
const currentPageType = computed(() => {
  if (currentIndex.value < INTRO_SLIDES) return 'intro'
  if (currentIndex.value === totalSlides - 1) return 'outro'
  return 'product'
})

// 当前产品索引（如果是在产品页）
const currentProductIndex = computed(() => {
  if (currentPageType.value === 'product') {
    return currentIndex.value - INTRO_SLIDES
  }
  return -1
})

// 当前开头页索引
const currentIntroIndex = computed(() => {
  if (currentPageType.value === 'intro') {
    return currentIndex.value
  }
  return -1
})

// 切换方向
const slideDirection = ref<'next' | 'prev'>('next')

// 切换页面
const nextSlide = () => {
  slideDirection.value = 'next'
  currentIndex.value = (currentIndex.value + 1) % totalSlides
}

const prevSlide = () => {
  slideDirection.value = 'prev'
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides
}

// 点击圆点切换
const goToSlide = (index: number) => {
  slideDirection.value = index > currentIndex.value ? 'next' : 'prev'
  currentIndex.value = index
}

// 键盘导航
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault()
    nextSlide()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    prevSlide()
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
        <SlideIntro1 v-if="currentPageType === 'intro' && currentIntroIndex === 0" />
        <SlideIntro2 v-else-if="currentPageType === 'intro' && currentIntroIndex === 1" />
        <SlideIntro3 v-else-if="currentPageType === 'intro' && currentIntroIndex === 2" />

        <!-- 产品卡片页 -->
        <SaodijiShowcase1000Card
          v-else-if="currentPageType === 'product'"
          :product="products[currentProductIndex]"
          :direction="slideDirection"
        />

        <!-- 结尾页 -->
        <SlideOutro v-else-if="currentPageType === 'outro'" />
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
          v-for="i in totalSlides"
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
/**
 * 产品展示导航逻辑复用
 * 提供统一的幻灯片导航管理
 */

import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Product } from '@/shared/product-card/types'

interface ShowcaseNavigationConfig {
  /** 产品列表 */
  products: Product[]
  /** 开头页数量 */
  introSlides?: number
  /** 结尾页数量 */
  outroSlides?: number
}

export function useShowcaseNavigation(config: ShowcaseNavigationConfig) {
  const { products, introSlides = 3, outroSlides = 1 } = config

  // 计算总页数
  const totalSlides = computed(() => introSlides + products.length + outroSlides)

  // 当前索引
  const currentIndex = ref(0)

  // 切换方向
  const slideDirection = ref<'next' | 'prev'>('next')

  // 当前页面类型
  const currentPageType = computed(() => {
    if (currentIndex.value < introSlides) return 'intro'
    if (currentIndex.value >= totalSlides.value - outroSlides) return 'outro'
    return 'product'
  })

  // 当前产品索引
  const currentProductIndex = computed(() => {
    if (currentPageType.value === 'product') {
      return currentIndex.value - introSlides
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

  // 当前结尾页索引
  const currentOutroIndex = computed(() => {
    if (currentPageType.value === 'outro') {
      return currentIndex.value - (totalSlides.value - outroSlides)
    }
    return -1
  })

  // 导航函数
  const nextSlide = () => {
    slideDirection.value = 'next'
    currentIndex.value = (currentIndex.value + 1) % totalSlides.value
  }

  const prevSlide = () => {
    slideDirection.value = 'prev'
    currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
  }

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

  return {
    totalSlides,
    currentIndex,
    slideDirection,
    currentPageType,
    currentProductIndex,
    currentIntroIndex,
    currentOutroIndex,
    nextSlide,
    prevSlide,
    goToSlide
  }
}
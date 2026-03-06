<script setup lang="ts">
import type { Product, ProductCardConfig } from './types'
import ProductCard from './ProductCard.vue'

const props = withDefaults(defineProps<{
  product: Product
  cardConfig?: ProductCardConfig
  slideNumber?: number
  totalSlides?: number
}>(), {
  slideNumber: 1,
  totalSlides: 1
})
</script>

<template>
  <div class="product-slide">
    <ProductCard :product="product" :config="cardConfig" />

    <!-- 幻灯片页码指示器 -->
    <div v-if="totalSlides > 1" class="slide-indicator">
      <span class="current">{{ slideNumber }}</span>
      <span class="separator">/</span>
      <span class="total">{{ totalSlides }}</span>
    </div>
  </div>
</template>

<style scoped>
.product-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slide-indicator {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: rgb(var(--surface-muted) / 0.8);
  border-radius: 2rem;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
}

.slide-indicator .current {
  font-weight: 700;
  color: rgb(var(--accent) / 1);
}

.slide-indicator .separator {
  color: rgb(var(--text-muted) / 1);
}

.slide-indicator .total {
  color: rgb(var(--text-muted) / 1);
}
</style>
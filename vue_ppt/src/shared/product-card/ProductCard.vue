<!--
  电视产品卡片组件 (ProductCard.vue)
  基于基础卡片组件构建，引用可复用的子组件
  保持与现有电视产品数据的向后兼容性
-->
<script setup lang="ts">
import type { Product } from './types'

import BaseProductCard from './components/BaseProductCard.vue'
import SpecGrid from './components/SpecGrid.vue'
import ProsConsSection from './components/ProsConsSection.vue'
import AudienceCard from './components/AudienceCard.vue'

const props = withDefaults(defineProps<{
  product: Product
  direction?: 'next' | 'prev'
}>(), {
  direction: 'next'
})
</script>

<template>
  <BaseProductCard :product="product" :direction="direction">
    <template #image>
      <img v-if="product.imageUrl" :src="product.imageUrl" :alt="product.model" class="product-image" />
    </template>
    <template #specs>
      <SpecGrid :specs="product.specs" title="产品参数" />
    </template>
    <template #pros-cons>
      <ProsConsSection :pros="product.pros" :cons="product.cons" />
    </template>
    <template #audience>
      <AudienceCard :text="product.targetAudience" />
    </template>
  </BaseProductCard>
</template>

<style scoped>
.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(236, 72, 153, 0.15);
}
</style>
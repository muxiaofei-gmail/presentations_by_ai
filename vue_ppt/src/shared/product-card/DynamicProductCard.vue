<!--
  动态产品卡片选择器
  根据产品类型自动选择对应的卡片组件
-->
<script setup lang="ts">
import { computed } from 'vue'
import type { Product, BaseProduct } from './types'
import { isXidijiProduct, isSaodijiProduct } from './types'

import XidijiProductCard from './cards/XidijiProductCard.vue'
import SaodijiProductCard from './cards/SaodijiProductCard.vue'
import BaseProductCard from './components/BaseProductCard.vue'

const props = defineProps<{
  product: Product
  direction?: 'next' | 'prev'
}>()

// 根据产品类型动态选择卡片组件
const cardComponent = computed(() => {
  if (isXidijiProduct(props.product)) return XidijiProductCard
  if (isSaodijiProduct(props.product)) return SaodijiProductCard
  // 默认使用 BaseProductCard（向后兼容，处理 TVProduct 等）
  return BaseProductCard
})
</script>

<template>
  <component :is="cardComponent" :product="product as BaseProduct" :direction="direction" />
</template>
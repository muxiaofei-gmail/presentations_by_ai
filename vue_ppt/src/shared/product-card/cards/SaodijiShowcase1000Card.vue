<!--
  扫地机器人产品卡片组件 (SaodijiShowcase1000Card.vue)
  基于基础卡片组件构建，引用可复用的子组件
-->
<script setup lang="ts">
import type { SaodijiProduct } from '../types'

import BaseProductCard from '../components/BaseProductCard.vue'
import SpecGrid from '../components/SpecGrid.vue'
import ProsConsSection from '../components/ProsConsSection.vue'
import AudienceCard from '../components/AudienceCard.vue'

defineProps<{
  product: SaodijiProduct
  direction?: 'next' | 'prev'
}>()
</script>

<template>
  <BaseProductCard :product="product" :direction="direction">
    <template #specs>
      <SpecGrid :specs="product.specs" />
    </template>
    <template #pros-cons>
      <ProsConsSection :pros="product.pros" :cons="product.cons" />
    </template>
    <template #audience>
      <AudienceCard :text="product.targetAudience" />
    </template>
  </BaseProductCard>
</template>
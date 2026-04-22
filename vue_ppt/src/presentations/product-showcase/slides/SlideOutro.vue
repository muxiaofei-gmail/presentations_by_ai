<!--
  结尾页
  结束页引导（静态内容）
-->
<script setup lang="ts">
import { computed } from 'vue'
import { PRICE_RANGES, getPriceRangeInfo } from '@/router/routes/product-showcase'
import { getProductConfig } from '@/shared/product-card/config'

const props = defineProps<{
  productType: string
  priceRange: string
}>()

// 计算下一个价位信息
const nextPriceInfo = computed(() => {
  const ranges = PRICE_RANGES[props.productType as any]
  const currentIndex = ranges?.findIndex(r => r.key === props.priceRange)
  if (currentIndex !== -1 && currentIndex < ranges.length - 1) {
    return ranges[currentIndex + 1]
  }
  return null
})

// 获取产品类型名称
const typeName = computed(() => {
  return getProductConfig(props.productType as any)?.typeName || '产品'
})
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <h1 class="title">
        <span class="title-gradient">更多价位</span>
      </h1>
      <p class="subtitle" v-if="nextPriceInfo">
        {{ nextPriceInfo.label }} {{ typeName }}推荐
      </p>
      <p class="subtitle" v-else>
        已浏览全部 {{ typeName }}价位
      </p>
      <div class="info-section">
        <p class="info-text">抖音粉丝群领取纸质对比文档</p>
        <p class="info-text">各类目家电好价线报</p>
      </div>
      <p class="author">胡侃</p>
    </div>
  </section>
</template>

<style scoped>
.slide-shell {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4rem);
}

.title-block {
  text-align: center;
  padding: clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 40px 100px rgba(15, 23, 42, 0.18);
  max-width: min(90vw, 900px);
}

.title {
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 900;
  margin: 0 0 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.title-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #10b981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  color: #1e293b;
  margin: 0 0 2rem;
  font-weight: 600;
}

.info-section {
  margin: 0 0 1.5rem;
}

.info-text {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0.5rem 0;
  font-weight: 500;
}

.author {
  font-size: 1rem;
  color: #94a3b8;
  margin: 0;
}
</style>
<!--
  ==================================================================================
  基础产品卡片组件 (BaseProductCard.vue)
  ==================================================================================

  【功能说明】
  产品卡片的基础骨架组件，提供统一的布局、样式和动画。
  所有产品类型的卡片都应基于此组件构建。

  【布局结构】
  ┌─────────────────────────────────────────────────────────────────┐
  │  Header: 品牌 + 型号                          日常价 | 活动价   │
  ├────────────────────────────┬────────────────────────────────────┤
  │    产品主图                 │        参数网格 (slot)             │
  │    (image-card)            │                                    │
  ├────────────────────────────┼────────────────────────────────────┤
  │   优缺点 (slot)             │        适合人群 (slot)             │
  └────────────────────────────┴────────────────────────────────────┘
  │  Footer: 来源标识                                              │
  └─────────────────────────────────────────────────────────────────┘

  【Slots】
  - image: 产品图片区域（可选，洗地机卡片可留空用于视频叠加）
  - specs: 参数网格区域
  - pros-cons: 优缺点区域
  - audience: 适合人群区域

  【使用示例】
  <BaseProductCard
    :product="product"
    :direction="'next'"
  >
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
  ==================================================================================
-->
<script setup lang="ts">
import type { BaseProduct } from '../types'

const props = withDefaults(defineProps<{
  product: BaseProduct
  direction?: 'next' | 'prev'
}>(), {
  direction: 'next'
})

// 格式化价格
const formatPrice = (price: number): string => {
  return price.toLocaleString('zh-CN')
}
</script>

<template>
  <div class="product-card-wrapper" :class="['direction-' + direction]">
    <div class="background-glow"></div>

    <!-- 顶部标题栏 -->
    <header class="header">
      <div class="title-left">
        <span class="brand">{{ product.brand }}</span>
        <span class="model">{{ product.model }}</span>
      </div>

      <div class="price-tags">
        <div class="price-tag regular" v-if="product.price.regularPrice">
          <svg class="price-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <span>日常价 {{ formatPrice(product.price.regularPrice) }}</span>
        </div>

        <div class="price-tag sale" v-if="product.price.salePrice">
          <svg class="price-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          <span>粉丝群线报好价 {{ formatPrice(product.price.salePrice) }}</span>
        </div>
      </div>
    </header>

    <!-- 2x2 网格布局容器 -->
    <div class="grid-container">
      <!-- 左上卡片：产品主图/视频区域 -->
      <div class="card image-card">
        <div class="image-wrapper">
          <slot name="image"></slot>
        </div>
      </div>

      <!-- 右上卡片：参数网格 (slot) -->
      <div class="card specs-card">
        <slot name="specs"></slot>
      </div>

      <!-- 左下卡片：优缺点 (slot) -->
      <div class="card pros-cons-card">
        <slot name="pros-cons"></slot>
      </div>

      <!-- 右下卡片：适合人群 (slot) -->
      <div class="card audience-card">
        <slot name="audience"></slot>
      </div>
    </div>

    <!-- 底部 Footer -->
    <footer class="footer">
      <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
        <line x1="10" y1="12" x2="10" y2="16"/>
        <line x1="10" y1="8" x2="10.01" y2="8"/>
        <line x1="14" y1="12" x2="14" y2="16"/>
        <line x1="14" y1="8" x2="14.01" y2="8"/>
      </svg>
      <span class="footer-text">{{ product.source || '胡侃-进抖音粉丝群，有家电好价线报' }}</span>
    </footer>
  </div>
</template>

<style scoped>
/* ==================== 1. 根容器布局 ==================== */
.product-card-wrapper {
  position: relative;
  width: 70%;
  height: 90%;
  padding: 2rem;
  overflow: hidden;
  margin: auto;
}

/* ==================== 2. 背景效果 ==================== */
.background-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 20%, rgb(var(--accent-primary) / 0.15), transparent 100%),
    radial-gradient(ellipse at 80% 80%, rgb(var(--accent-secondary) / 0.1), transparent 100%),
    radial-gradient(ellipse at 50% 50%, rgb(var(--accent) / 0.08), transparent 100%);
  pointer-events: none;
  border-radius: 0.75rem;
}

/* ==================== 3. 头部区域 ==================== */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.title-left {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.brand {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--accent-primary) / 1);
  transition: transform 0.25s ease, color 0.25s ease;
  cursor: default;
}

.brand:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.model {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--accent-secondary) / 1);
  transition: transform 0.25s ease, color 0.25s ease;
  cursor: default;
}

.model:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.price-tags {
  display: flex;
  gap: 0.4rem;
  transform: scale(0.8);
  transform-origin: right center;
}

.price-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: default;
}

.price-tag:hover {
  transform: scale(1.08);
}

.price-tag.regular {
  background: linear-gradient(135deg, rgb(var(--accent-primary) / 1), rgb(var(--accent-primary) / 0.8));
}

.price-tag.regular:hover {
  box-shadow: 0 4px 20px rgb(var(--accent-primary) / 0.4);
}

.price-tag.sale {
  background: linear-gradient(135deg, rgb(var(--secondary) / 1), rgb(var(--secondary) / 0.8));
}

.price-tag.sale:hover {
  box-shadow: 0 4px 20px rgb(var(--secondary) / 0.4);
}

.price-icon {
  width: 1.75rem;
  height: 1.75rem;
}

/* ==================== 4. 网格布局 ==================== */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 0.5rem 1rem;
  height: calc(100% - 6rem);
  position: relative;
  z-index: 1;
}

/* ==================== 5. 卡片通用样式 ==================== */
.card {
  background: rgb(var(--card-background) / 0.3);
  border-radius: 0.75rem;
  padding: 0.6rem 0.75rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgb(var(--card-border-color) / 0.08);
  overflow: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgb(0 0 0 / 0.15), 0 4px 12px rgb(var(--accent-primary) / 0.1);
  border-color: rgb(var(--accent-primary) / 0.2);
}

/* ==================== 6. 产品主图/视频卡片 ==================== */
.image-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  backdrop-filter: none;
}

.image-card:hover {
  transform: scale(1.02);
  box-shadow: none;
  border: none;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ==================== 7. 参数卡片 ==================== */
.specs-card {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2.25rem;
}

/* ==================== 8. 优缺点卡片 ==================== */
.pros-cons-card {
  display: flex;
  padding: 1.6rem;
}

/* ==================== 9. 适合人群卡片 ==================== */
.audience-card {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
}

/* ==================== 10. 底部 Footer ==================== */
.footer {
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.footer:hover {
  transform: translateY(-2px);
}

.footer-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: rgb(var(--accent-primary) / 1);
  transition: transform 0.3s ease;
}

.footer:hover .footer-icon {
  transform: rotate(15deg) scale(1.1);
}

.footer-text {
  font-size: 1.25rem;
  color: rgb(var(--on_surface_variant) / 1);
}

/* ==================== 11. 响应式适配 ==================== */
@media (max-width: 1024px) {
  .product-card-wrapper {
    padding: 1rem;
  }

  .brand, .model {
    font-size: 2rem;
  }

  .price-tag {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  .card {
    padding: 1rem;
  }
}

/* ==================== 12. 入场动画 ==================== */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.direction-next .image-card {
  animation: fadeInRight 0.5s ease-out 0.1s both;
}

.direction-next .specs-card {
  animation: fadeInRight 0.5s ease-out 0.25s both;
}

.direction-next .pros-cons-card {
  animation: fadeInRight 0.5s ease-out 0.15s both;
}

.direction-next .audience-card {
  animation: fadeInRight 0.5s ease-out 0.35s both;
}

.direction-prev .image-card {
  animation: fadeInLeft 0.5s ease-out 0.25s both;
}

.direction-prev .specs-card {
  animation: fadeInLeft 0.5s ease-out 0.1s both;
}

.direction-prev .pros-cons-card {
  animation: fadeInLeft 0.5s ease-out 0.35s both;
}

.direction-prev .audience-card {
  animation: fadeInLeft 0.5s ease-out 0.15s both;
}

/* ==================== 13. Cinematic Editorial 特殊样式 ==================== */
/* Cinematic Editorial 主题下的 No-Line 规则增强 */
:root[data-theme="cinematic"] .card {
  border: none;
  background: rgb(var(--surface_container) / 0.95);
}

/* image-card 保持透明背景（产品图片区域） */
:root[data-theme="cinematic"] .image-card {
  background: transparent;
  border: none;
}

:root[data-theme="cinematic"] .card:hover {
  box-shadow: 0 32px 32px rgb(var(--on_surface) / 0.06);
  transform: translateY(-2px);
}

/* image-card hover 不添加阴影效果 */
:root[data-theme="cinematic"] .image-card:hover {
  box-shadow: none;
  transform: scale(1.02);
}

/* Cinematic Editorial 主题下的渐变按钮 */
:root[data-theme="cinematic"] .price-tag.regular {
  background: linear-gradient(135deg, rgb(var(--primary) / 1), rgb(var(--primary_container) / 1));
  color: rgb(var(--on_primary) / 1);
}

:root[data-theme="cinematic"] .price-tag.sale {
  background: linear-gradient(135deg, rgb(var(--secondary) / 1), rgb(var(--secondary) / 0.8));
  color: rgb(var(--on_secondary) / 1);
}

/* Cinematic Editorial 主题下的品牌名称颜色 */
:root[data-theme="cinematic"] .brand {
  color: rgb(var(--primary) / 1);
}

:root[data-theme="cinematic"] .model {
  color: rgb(var(--primary) / 1);
}
</style>
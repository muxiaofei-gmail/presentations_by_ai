<!--
  ==================================================================================
  洗地机产品卡片组件 (XidijiProductCard.vue)
  ==================================================================================

  【功能说明】
  用于展示洗地机产品的详细信息，采用 2x2 网格布局。
  继承自 BaseProduct 类型，专门针对洗地机产品优化。

  【布局结构示意图】
  ┌─────────────────────────────────────────────────────────────────┐
  │  Header: 品牌 + 型号                          日常价 | 活动价   │
  ├────────────────────────────┬────────────────────────────────────┤
  │                            │                                    │
  │      产品主图 (2fr)         │         产品参数 (specs-card)      │
  │      (image-card)          │         2列网格展示8项参数          │
  │                            │                                    │
  ├────────────────────────────┼────────────────────────────────────┤
  │   优点 (pros-section)       │         适合人群                   │
  │   ✓ 项目列表               │         支持高亮关键词              │
  │   ─────────────            │         (audience-card)            │
  │   缺点 (cons-section)       │                                    │
  │   ✗ 项目列表               │                                    │
  └────────────────────────────┴────────────────────────────────────┘
  │  Footer: 来源标识                                              │
  └─────────────────────────────────────────────────────────────────┘
  ==================================================================================
-->
<script setup lang="ts">
import type { XidijiProduct } from '../types'

// ==================== Props 定义 ====================
const props = withDefaults(defineProps<{
  product: XidijiProduct
  direction?: 'next' | 'prev'
}>(), {
  direction: 'next'
})

// ==================== 工具函数 ====================
const formatPrice = (price: number): string => {
  return price.toLocaleString('zh-CN')
}

const highlightText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')
}

// 生成推荐星星
const getRecommendStars = (level?: number): string => {
  if (!level) return ''
  return '⭐'.repeat(level)
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
          <span>活动价 {{ formatPrice(product.price.salePrice) }}</span>
        </div>
      </div>
    </header>

    <!-- 2x2 网格布局容器 -->
    <div class="grid-container">
      <!-- 左上卡片：产品主图 -->
      <div class="card image-card">
        <div class="image-wrapper">
          <img :src="product.imageUrl" :alt="product.model" class="product-image" />
        </div>
        <!-- 推荐指数 -->
        <div class="recommend-badge" v-if="product.recommendLevel">
          <span class="recommend-label">推荐指数</span>
          <span class="recommend-stars">{{ getRecommendStars(product.recommendLevel) }}</span>
        </div>
      </div>

      <!-- 右上卡片：产品参数 -->
      <div class="card specs-card">
        <h3 class="card-title">
          <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          核心参数
        </h3>

        <div class="specs-grid">
          <div
            class="spec-item"
            :class="{ 'spec-important': spec.important }"
            v-for="spec in product.specs"
            :key="spec.name"
          >
            <span class="spec-name">{{ spec.name }}</span>
            <span class="spec-value">{{ spec.value }}</span>
          </div>
        </div>
      </div>

      <!-- 左下卡片：优缺点对比 -->
      <div class="card pros-cons-card">
        <div class="pros-section">
          <h3 class="section-title pros-title">
            <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </svg>
            优点
          </h3>
          <ul class="pros-list">
            <li v-for="(pro, index) in product.pros" :key="index">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>{{ pro.text }}</span>
            </li>
          </ul>
        </div>

        <div class="divider"></div>

        <div class="cons-section">
          <h3 class="section-title cons-title">
            <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
            </svg>
            缺点
          </h3>
          <ul class="cons-list">
            <li v-for="(con, index) in product.cons" :key="index">
              <svg class="cross-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <span>{{ con.text }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右下卡片：适合人群 -->
      <div class="card audience-card">
        <h3 class="card-title">
          <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          适合人群
        </h3>
        <p class="audience-text" v-html="highlightText(product.targetAudience)"></p>
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
      <span class="footer-text">{{ product.source || '胡侃' }}</span>
    </footer>
  </div>
</template>

<style scoped>
/*
  ==================================================================================
  洗地机产品卡片样式
  复用电视卡片的样式结构，保持一致性
  ==================================================================================
*/

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
    radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.15), transparent 100%),
    radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.1), transparent 100%),
    radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.08), transparent 100%);
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
  color: #ec4899;
}

.model {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f97316;
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
}

.price-tag.regular {
  background: linear-gradient(135deg, #ec4899, #db2777);
}

.price-tag.sale {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
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
  background: rgba(220, 220, 220, 0.3);
  border-radius: 0.75rem;
  padding: 0.6rem 0.75rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: auto;
}

/* ==================== 6. 产品主图卡片 ==================== */
.image-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  position: relative;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.75rem;
}

/* 推荐指数徽章 */
.recommend-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(4px);
}

.recommend-label {
  font-size: 0.75rem;
  color: #9ca3af;
}

.recommend-stars {
  font-size: 0.875rem;
}

/* ==================== 7. 参数卡片 ==================== */
.specs-card {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2.25rem;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #9ca3af;
  margin: 0 0 0.5rem 0;
}

.title-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: #ec4899;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 0.5rem;
  flex: 1;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.spec-item:hover {
  background-color: rgba(236, 72, 153, 0.08);
}

/* 重要参数高亮 */
.spec-item.spec-important {
  background: rgba(236, 72, 153, 0.05);
  border-left: 2px solid #ec4899;
  padding-left: 0.5rem;
  margin-left: 0;
}

.spec-item.spec-important .spec-value {
  color: #ec4899;
  font-weight: 700;
}

.spec-name {
  font-size: 0.9375rem;
  color: #9ca3af;
  line-height: 1.4;
}

.spec-value {
  font-size: 1.03125rem;
  font-weight: 600;
  color: #f97316;
  line-height: 1.4;
}

/* ==================== 8. 优缺点卡片 ==================== */
.pros-cons-card {
  display: flex;
  gap: 0.5rem;
  padding: 1.6rem;
}

.pros-section,
.cons-section {
  flex: 1;
  min-width: 0;
}

.divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #9ca3af;
  margin: 0 0 0.75rem 0;
}

.pros-title .title-icon,
.cons-title .title-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: #ec4899;
}

.pros-list,
.cons-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pros-list li,
.cons-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1.03125rem;
  color: #9ca3af;
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  border-radius: 0.5rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.pros-list li:hover {
  transform: translateX(6px);
  background-color: rgba(236, 72, 153, 0.08);
}

.cons-list li:hover {
  transform: translateX(6px);
  background-color: rgba(249, 115, 22, 0.08);
}

.check-icon,
.cross-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.check-icon {
  color: #ec4899;
}

.cross-icon {
  color: #f97316;
}

/* ==================== 9. 适合人群卡片 ==================== */
.audience-card {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
}

.audience-text {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.3;
  margin: 0;
}

.audience-text :deep(.highlight) {
  color: #f97316;
  font-weight: 600;
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
  color: #ec4899;
  transition: transform 0.3s ease;
}

.footer:hover .footer-icon {
  transform: rotate(15deg) scale(1.1);
}

.footer-text {
  font-size: 1.25rem;
  color: #9ca3af;
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

  .card-title {
    font-size: 1.25rem;
  }

  .spec-name {
    font-size: 0.75rem;
  }

  .spec-value {
    font-size: 0.875rem;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .pros-list li,
  .cons-list li {
    font-size: 0.875rem;
  }

  .audience-text {
    font-size: 0.875rem;
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
</style>
<!--
  ProsConsSection.vue - 优缺点区块组件
  可复用的优缺点对比展示组件

  Props:
  - pros: ProsConsItem[] - 优点列表
  - cons: ProsConsItem[] - 缺点列表
-->
<script setup lang="ts">
import type { ProsConsItem } from '../types'

defineProps<{
  pros: ProsConsItem[]
  cons: ProsConsItem[]
}>()
</script>

<template>
  <div class="pros-cons-content">
    <!-- 优点区域 -->
    <div class="pros-section">
      <h3 class="section-title pros-title">
        <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        </svg>
        优点
      </h3>
      <ul class="pros-list">
        <li v-for="(pro, index) in pros" :key="index">
          <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span>{{ pro.text }}</span>
        </li>
      </ul>
    </div>

    <!-- 分隔线 -->
    <div class="divider"></div>

    <!-- 缺点区域 -->
    <div class="cons-section">
      <h3 class="section-title cons-title">
        <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
        </svg>
        缺点
      </h3>
      <ul class="cons-list">
        <li v-for="(con, index) in cons" :key="index">
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
</template>

<style scoped>
.pros-cons-content {
  display: flex;
  gap: 0.5rem;
  height: 100%;
}

.pros-section,
.cons-section {
  flex: 1;
  min-width: 0;
}

.divider {
  width: 1px;
  background: rgb(var(--outline_variant) / 0.1);
  flex-shrink: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--on_surface_variant) / 1);
  margin: 0 0 0.75rem 0;
}

.pros-title .title-icon,
.cons-title .title-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: rgb(var(--accent-primary) / 1);
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
  color: rgb(var(--on_surface_variant) / 1);
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  border-radius: 0.5rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.pros-list li:hover {
  transform: translateX(6px);
  background-color: rgb(var(--accent-primary) / 0.08);
}

.cons-list li:hover {
  transform: translateX(6px);
  background-color: rgb(var(--accent-secondary) / 0.08);
}

.check-icon,
.cross-icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.check-icon {
  color: rgb(var(--accent-primary) / 1);
}

.cross-icon {
  color: rgb(var(--accent-secondary) / 1);
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 1.25rem;
  }

  .pros-list li,
  .cons-list li {
    font-size: 0.875rem;
  }
}

/* ==================== Cinematic Editorial 特殊样式 ==================== */
/* No-Line 规则：分隔线改为背景色变化 */
:root[data-theme="cinematic"] .divider {
  width: 0;
  background: transparent;
  margin: 0 0.5rem;
}

/* 优点图标使用 primary 色 */
:root[data-theme="cinematic"] .pros-title .title-icon {
  color: rgb(var(--primary) / 1);
}

/* 缺点图标使用 secondary 色 */
:root[data-theme="cinematic"] .cons-title .title-icon {
  color: rgb(var(--secondary) / 1);
}

:root[data-theme="cinematic"] .check-icon {
  color: rgb(var(--primary) / 1);
}

:root[data-theme="cinematic"] .cross-icon {
  color: rgb(var(--secondary) / 1);
}

:root[data-theme="cinematic"] .pros-list li:hover {
  background-color: rgb(var(--primary) / 0.08);
}

:root[data-theme="cinematic"] .cons-list li:hover {
  background-color: rgb(var(--secondary) / 0.08);
}
</style>
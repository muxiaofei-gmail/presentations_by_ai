<!--
  SpecGrid.vue - 参数网格组件
  可复用的产品参数展示组件，支持2列网格布局

  Props:
  - specs: ProductSpec[] - 参数数组
  - title?: string - 标题（默认"核心参数"）
-->
<script setup lang="ts">
import type { ProductSpec } from '../types'

defineProps<{
  specs: ProductSpec[]
  title?: string
}>()
</script>

<template>
  <div class="specs-card-content">
    <h3 class="card-title">
      <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
      {{ title || '核心参数' }}
    </h3>

    <div class="specs-grid">
      <div
        class="spec-item"
        :class="{ 'spec-important': spec.important }"
        v-for="spec in specs"
        :key="spec.name"
      >
        <span class="spec-name">{{ spec.name }}</span>
        <span class="spec-value">{{ spec.value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.specs-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--on_surface_variant) / 1);
  margin: 0 0 0.5rem 0;
}

.title-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: rgb(var(--accent-primary) / 1);
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
  background-color: rgb(var(--accent-primary) / 0.08);
}

.spec-item.spec-important {
  background: rgb(var(--accent-primary) / 0.05);
  border-left: 2px solid rgb(var(--accent-primary) / 1);
  padding-left: 0.5rem;
  margin-left: 0;
}

.spec-item.spec-important .spec-value {
  color: rgb(var(--accent-primary) / 1);
  font-weight: 700;
}

.spec-name {
  font-size: 0.9375rem;
  color: rgb(var(--on_surface_variant) / 1);
  line-height: 1.4;
}

.spec-value {
  font-size: 1.03125rem;
  font-weight: 600;
  color: rgb(var(--accent-secondary) / 1);
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .card-title {
    font-size: 1.25rem;
  }

  .spec-name {
    font-size: 0.75rem;
  }

  .spec-value {
    font-size: 0.875rem;
  }
}

/* ==================== Cinematic Editorial 特殊样式 ==================== */
:root[data-theme="cinematic"] .card-title {
  color: rgb(var(--on_surface_variant) / 1);
}

:root[data-theme="cinematic"] .title-icon {
  color: rgb(var(--primary) / 1);
}

:root[data-theme="cinematic"] .spec-item:hover {
  background-color: rgb(var(--primary) / 0.08);
}

:root[data-theme="cinematic"] .spec-item.spec-important {
  background: rgb(var(--primary) / 0.05);
  border-left: 2px solid rgb(var(--primary) / 1);
}

:root[data-theme="cinematic"] .spec-item.spec-important .spec-value {
  color: rgb(var(--primary) / 1);
}

:root[data-theme="cinematic"] .spec-value {
  color: rgb(var(--tertiary) / 1); /* 使用 tertiary 色显示技术参数 */
}
</style>
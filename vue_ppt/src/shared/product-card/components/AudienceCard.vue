<!--
  AudienceCard.vue - 适合人群卡片组件
  可复用的目标人群展示组件，支持Markdown **高亮**语法

  Props:
  - text: string - 适合人群描述文本（支持**高亮**语法）
  - title?: string - 标题（默认"适合人群"）
-->
<script setup lang="ts">
defineProps<{
  text: string
  title?: string
}>()

const highlightText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')
}
</script>

<template>
  <div class="audience-content">
    <h3 class="card-title">
      <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
      {{ title || '适合人群' }}
    </h3>
    <p class="audience-text" v-html="highlightText(text)"></p>
  </div>
</template>

<style scoped>
.audience-content {
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

.audience-text {
  font-size: 1rem;
  color: rgb(var(--on_surface_variant) / 1);
  line-height: 1.3;
  margin: 0;
}

.audience-text :deep(.highlight) {
  color: rgb(var(--accent-secondary) / 1);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .card-title {
    font-size: 1.25rem;
  }

  .audience-text {
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

:root[data-theme="cinematic"] .audience-text {
  color: rgb(var(--on_surface_variant) / 1);
}

:root[data-theme="cinematic"] .audience-text :deep(.highlight) {
  color: rgb(var(--tertiary) / 1); /* 使用 tertiary 色显示高亮 */
}
</style>
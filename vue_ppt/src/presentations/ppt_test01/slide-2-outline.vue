<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">目录</h2>
      <ul class="outline-list">
        <li class="outline-item">第一部分：介绍</li>
        <li class="outline-item">第二部分：内容展示</li>
        <li class="outline-item">第三部分：总结</li>
      </ul>
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
  background: radial-gradient(100% 120% at 50% 0%, rgba(139, 92, 246, 0.1), transparent 60%),
    #f8fafc;
}

.content-block {
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
  max-width: min(90vw, 800px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #6366f1;
}

.outline-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.outline-item {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: #334155;
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 0.75rem;
  border-left: 4px solid #6366f1;
  transition: transform 0.2s, background 0.2s;
}

.outline-item:hover {
  transform: translateX(8px);
  background: rgba(99, 102, 241, 0.12);
}
</style>
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <h2 class="section-title">进抖音粉丝群</h2>
      <div class="benefit-list">
        <div class="benefit-item">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <span>纸质对比文档</span>
        </div>
        <div class="benefit-item">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <span>各类目家电好价线报</span>
        </div>
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

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 2rem;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #1e293b;
  font-weight: 600;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #10b981;
  flex-shrink: 0;
}

.author {
  font-size: 1rem;
  color: #94a3b8;
  margin: 0;
}
</style>
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <h2 class="section-title">按价位整理，直接抄作业</h2>
      <div class="price-list">
        <div class="price-item">
          <span class="price-label">1000-3000元</span>
          <span class="price-desc">已发布</span>
        </div>
        <div class="price-item">
          <span class="price-label">3000-4500元</span>
          <span class="price-desc">已发布</span>
        </div>
        <div class="price-item active">
          <span class="price-label">4500元以上</span>
          <span class="price-desc">本期推荐</span>
        </div>
      </div>
      <p class="note">热门好用的款式，全都有</p>
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
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 2rem;
}

.price-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.price-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 1rem;
}

.price-item.active {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15));
  border: 2px solid #10b981;
}

.price-label {
  font-size: clamp(1.3rem, 3.5vw, 1.8rem);
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.price-desc {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: #64748b;
  font-weight: 500;
}

.note {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0;
}
</style>
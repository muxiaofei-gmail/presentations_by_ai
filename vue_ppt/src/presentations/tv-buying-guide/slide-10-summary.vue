<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">选购要点总结</h2>
      <p class="section-subtitle">记住这三点就够了</p>
      <div class="summary-list">
        <div class="summary-item">
          <span class="summary-number">1</span>
          <div class="summary-content">
            <span class="summary-title">先定预算和尺寸</span>
            <span class="summary-desc">这是最基本的两条线，确定了才能往下选</span>
          </div>
        </div>
        <div class="summary-item">
          <span class="summary-number">2</span>
          <div class="summary-content">
            <span class="summary-title">看清核心参数</span>
            <span class="summary-desc">分辨率4K、刷新率按需选、HDR看杜比视界</span>
          </div>
        </div>
        <div class="summary-item">
          <span class="summary-number">3</span>
          <div class="summary-content">
            <span class="summary-title">选择靠谱品牌</span>
            <span class="summary-desc">主流品牌品控和售后都有保障</span>
          </div>
        </div>
      </div>
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

.content-block {
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
  max-width: min(90vw, 700px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem;
  text-align: center;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0 0 2rem;
  text-align: center;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.summary-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.summary-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.1);
}

.summary-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border-radius: 50%;
  font-weight: 800;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.summary-title {
  font-weight: 800;
  color: #1e293b;
  font-size: 1.15rem;
}

.summary-desc {
  font-size: 0.95rem;
  color: #64748b;
}
</style>
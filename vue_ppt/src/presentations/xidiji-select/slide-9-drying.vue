<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心三</span>
        <h2 class="section-title">后勤一：自清洁烘干</h2>
        <p class="section-subtitle">用完还得手洗滚刷，买来绝对吃灰</p>
      </div>
      <div class="compare-grid">
        <div class="compare-card bad">
          <div class="compare-badge">❌ 不推荐</div>
          <h3 class="compare-title">离心甩干 / 自然晾干</h3>
          <div class="compare-problems">
            <p class="problem-item">🌧️ 南方梅雨季不好用</p>
            <p class="problem-item">🦠 潮湿天气隔夜发霉发臭</p>
            <p class="problem-item">😤 让你怀疑人生</p>
          </div>
        </div>
        <div class="compare-card good">
          <div class="compare-badge">✅ 推荐</div>
          <h3 class="compare-title">热风烘干</h3>
          <div class="compare-specs">
            <div class="spec-row">
              <span class="spec-icon">⏱️</span>
              <span class="spec-text">烘干时间 ≤ 2小时</span>
            </div>
            <div class="spec-row">
              <span class="spec-icon">🌡️</span>
              <span class="spec-text">70℃ 以上热水洗</span>
            </div>
            <div class="spec-row">
              <span class="spec-icon">✨</span>
              <span class="spec-text">彻底软化油污</span>
            </div>
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
  max-width: min(90vw, 1000px);
  width: 100%;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.core-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  padding: 0.25rem 1rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0;
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.compare-card {
  padding: 1.5rem;
  border-radius: 1rem;
  border: 2px solid transparent;
}

.compare-card.bad {
  background: rgba(239, 68, 68, 0.05);
  border-color: #ef4444;
}

.compare-card.good {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05));
  border-color: #10b981;
}

.compare-badge {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.compare-card.bad .compare-badge {
  color: #ef4444;
}

.compare-card.good .compare-badge {
  color: #10b981;
}

.compare-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem;
}

.compare-problems {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.problem-item {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  padding: 0.5rem;
  background: rgba(239, 68, 68, 0.08);
  border-radius: 0.5rem;
}

.compare-specs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.spec-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  background: rgba(16, 185, 129, 0.08);
  border-radius: 0.5rem;
}

.spec-icon {
  font-size: 1.25rem;
}

.spec-text {
  font-size: 0.95rem;
  color: #475569;
  font-weight: 500;
}
</style>
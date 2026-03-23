<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心三</span>
        <h2 class="section-title">后勤二：续航配置</h2>
        <p class="section-subtitle">根据户型算明白账</p>
      </div>
      <div class="target-box">
        <span class="target-icon">🏠</span>
        <span class="target-text">大户型（120平以上）配置标准</span>
      </div>
      <div class="specs-grid">
        <div class="spec-card">
          <span class="spec-icon">🔋</span>
          <div class="spec-value">≥4000<span class="unit">mAh</span></div>
          <p class="spec-label">电池容量</p>
        </div>
        <div class="spec-card">
          <span class="spec-icon">⏰</span>
          <div class="spec-value">≥40<span class="unit">分钟</span></div>
          <p class="spec-label">续航时间</p>
        </div>
        <div class="spec-card">
          <span class="spec-icon">💧</span>
          <div class="spec-value">≥800<span class="unit">ml</span></div>
          <p class="spec-label">清水箱容量</p>
        </div>
      </div>
      <div class="warning">
        <span class="warning-icon">😅</span>
        <span class="warning-text">避免拖一半没电没水的尴尬</span>
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
  max-width: min(90vw, 900px);
  width: 100%;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
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

.target-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: 1rem;
  border: 1px solid #6366f1;
  margin-bottom: 1.5rem;
}

.target-icon {
  font-size: 1.5rem;
}

.target-text {
  font-size: 1.1rem;
  font-weight: 700;
  color: #6366f1;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.spec-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.spec-card:hover {
  border-color: #6366f1;
}

.spec-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.spec-value {
  font-size: 2.5rem;
  font-weight: 900;
  color: #1e293b;
}

.spec-value .unit {
  font-size: 1rem;
  color: #64748b;
}

.spec-label {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0.5rem 0 0;
}

.warning {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 1rem;
  border: 1px solid #f59e0b;
}

.warning-icon {
  font-size: 1.25rem;
}

.warning-text {
  font-size: 1rem;
  color: #b45309;
  font-weight: 600;
}
</style>
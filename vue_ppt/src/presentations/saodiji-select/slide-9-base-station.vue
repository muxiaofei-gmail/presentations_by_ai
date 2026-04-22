<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">红线三 · 后半</span>
        <h2 class="section-title">基站清理</h2>
        <p class="section-subtitle">底盘必须能拆卸水洗</p>
      </div>
      <div class="comparison-section">
        <div class="comparison-card good">
          <span class="card-icon">✓</span>
          <h3 class="card-title">正确的基站设计</h3>
          <ul class="card-list">
            <li>底盘可拆卸</li>
            <li>直接水洗清理</li>
            <li>真正解放双手</li>
          </ul>
        </div>
        <div class="comparison-card bad">
          <span class="card-icon">×</span>
          <h3 class="card-title">反面场景</h3>
          <ul class="card-list">
            <li>花几千块买全能基站</li>
            <li>底盘积泥还得用牙刷刷</li>
            <li>那就不叫解放双手</li>
          </ul>
        </div>
      </div>
      <div class="warning-box">
        <span class="warning-icon">💡</span>
        <span class="warning-text">买前确认基站底盘能否拆卸水洗</span>
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

.comparison-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.comparison-card {
  padding: 2rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: transform 0.3s;
}

.comparison-card:hover {
  transform: translateY(-4px);
}

.comparison-card.good {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.08));
  border: 2px solid #10b981;
}

.comparison-card.bad {
  background: rgba(239, 68, 68, 0.08);
  border: 2px solid #ef4444;
}

.card-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.comparison-card.good .card-icon {
  color: #10b981;
}

.comparison-card.bad .card-icon {
  color: #ef4444;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.card-list li {
  font-size: 1rem;
  color: #475569;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.comparison-card.good .card-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

.comparison-card.bad .card-list li::before {
  content: "×";
  position: absolute;
  left: 0;
  color: #ef4444;
  font-weight: 700;
}

.warning-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(245, 158, 11, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">预算分档</h2>
      <p class="section-subtitle">按预算对号入座</p>
      <div class="budget-cards">
        <div class="budget-card entry">
          <div class="budget-badge">入门档</div>
          <div class="budget-range">1000 - 3000元</div>
          <ul class="budget-features">
            <li>LDS激光导航</li>
            <li>扭屁股贴边拖地</li>
            <li>基础防缠绕</li>
          </ul>
        </div>
        <div class="budget-card advanced">
          <div class="budget-badge">全能档</div>
          <div class="budget-range">3000 - 4500元</div>
          <ul class="budget-features">
            <li>+ AI避障功能</li>
            <li>+ 机械臂设计</li>
            <li>+ 基站可拆卸</li>
          </ul>
        </div>
        <div class="budget-card flagship">
          <div class="budget-badge">顶配档</div>
          <div class="budget-range">4500元以上</div>
          <ul class="budget-features">
            <li>全功能旗舰</li>
            <li>高端避障系统</li>
            <li>全能基站</li>
          </ul>
        </div>
      </div>
      <div class="preview-note">
        <span class="preview-icon">📺</span>
        <span class="preview-text">下期详细型号推荐清单，已整理在抖音粉丝群</span>
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

.budget-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.budget-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  border: 2px solid transparent;
  text-align: center;
  transition: transform 0.3s;
}

.budget-card:hover {
  transform: translateY(-4px);
}

.budget-card.entry {
  border-color: #f59e0b;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(251, 191, 36, 0.05));
}

.budget-card.advanced {
  border-color: #10b981;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05));
}

.budget-card.flagship {
  border-color: #6366f1;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
}

.budget-badge {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.budget-card.entry .budget-badge {
  background: #fef3c7;
  color: #b45309;
}

.budget-card.advanced .budget-badge {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white;
}

.budget-card.flagship .budget-badge {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.budget-range {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.budget-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.budget-features li {
  font-size: 1rem;
  color: #475569;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.budget-features li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #6366f1;
  font-weight: 700;
}

.preview-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.preview-icon {
  font-size: 1.25rem;
}

.preview-text {
  font-size: 1rem;
  color: #475569;
  font-weight: 500;
}
</style>
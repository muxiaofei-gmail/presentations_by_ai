<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">红线一</span>
        <h2 class="section-title">导航和避障</h2>
        <p class="section-subtitle">LDS激光导航是底线</p>
      </div>
      <div class="requirement-cards">
        <div class="requirement-card must">
          <div class="card-badge">底线要求</div>
          <div class="card-content">
            <p class="card-title">LDS激光导航</p>
            <ul class="card-list">
              <li>机身顶部或内部必须有雷达</li>
              <li>能精确建图，记住你家地图</li>
            </ul>
          </div>
        </div>
        <div class="requirement-card avoid">
          <div class="card-badge">避坑</div>
          <div class="card-content">
            <p class="card-title">随机导航机器</p>
            <ul class="card-list">
              <li>四处乱碰，记不住地图</li>
              <li>纯纯的电子垃圾</li>
              <li>哪怕只卖几百块也别碰</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="warning-box">
        <span class="warning-icon">⚠️</span>
        <span class="warning-text">没有雷达的机器 = 电子垃圾，别碰</span>
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

.requirement-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.requirement-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  border: 2px solid transparent;
  transition: transform 0.3s;
}

.requirement-card:hover {
  transform: translateY(-4px);
}

.requirement-card.must {
  border-color: #10b981;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05));
}

.requirement-card.avoid {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
}

.card-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.requirement-card.must .card-badge {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white;
}

.requirement-card.avoid .card-badge {
  background: #fef3c7;
  color: #b45309;
}

.card-content {
  text-align: left;
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
}

.card-list li {
  font-size: 0.95rem;
  color: #475569;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.requirement-card.must .card-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

.requirement-card.avoid .card-list li::before {
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
  background: rgba(239, 68, 68, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.warning-icon {
  font-size: 1.25rem;
}

.warning-text {
  font-size: 1rem;
  color: #dc2626;
  font-weight: 600;
}
</style>
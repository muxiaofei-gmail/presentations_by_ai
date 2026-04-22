<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">选购要点总结</h2>
      <div class="summary-grid">
        <div class="summary-card core">
          <span class="card-icon">✅</span>
          <h3 class="card-title">核心指标</h3>
          <ul class="card-list">
            <li>LDS激光导航</li>
            <li>扭屁股贴边拖地</li>
            <li>机械臂（预算≥2000）</li>
            <li>AI避障（预算≥3000）</li>
            <li>防缠绕滚刷</li>
            <li>基站底盘可拆卸</li>
          </ul>
        </div>
        <div class="summary-card avoid">
          <span class="card-icon">⚠️</span>
          <h3 class="card-title">避坑指南</h3>
          <ul class="card-list">
            <li>随机导航机器别碰</li>
            <li>无AI避障别买（预算≥3000）</li>
            <li>无机械臂旗舰机拉黑</li>
            <li>纯胶毛滚刷慎选</li>
            <li>基站底盘不可拆慎选</li>
          </ul>
        </div>
      </div>
      <div class="conclusion">
        <span class="conclusion-icon">✨</span>
        <div class="conclusion-content">
          <p class="conclusion-title">买到一台</p>
          <p class="conclusion-highlight">真正解放双手的地面清洁神器</p>
          <p class="conclusion-title">不再伺候赛博祖宗</p>
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
  max-width: min(90vw, 900px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.summary-card {
  padding: 1.5rem;
  border-radius: 1rem;
  border: 2px solid transparent;
}

.summary-card.core {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
  border-color: #6366f1;
}

.summary-card.avoid {
  background: rgba(239, 68, 68, 0.05);
  border-color: #ef4444;
}

.card-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.1rem;
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
  font-size: 1rem;
  color: #475569;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.summary-card.core .card-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

.summary-card.avoid .card-list li::before {
  content: "×";
  position: absolute;
  left: 0;
  color: #ef4444;
  font-weight: 700;
}

.conclusion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border-radius: 1rem;
  border: 2px solid #10b981;
}

.conclusion-icon {
  font-size: 2rem;
}

.conclusion-content {
  text-align: left;
}

.conclusion-title {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}

.conclusion-highlight {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #ec4899, #10b981);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0.25rem 0;
}
</style>
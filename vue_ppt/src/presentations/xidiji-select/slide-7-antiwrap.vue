<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心二</span>
        <h2 class="section-title">硬指标二：防缠绕系统</h2>
        <p class="section-subtitle">洗地机易不易用的分水岭</p>
      </div>
      <div class="problem-box">
        <span class="problem-icon">😤</span>
        <span class="problem-text">家里有长发或宠物？滚刷缠成毛线团，清理很麻烦</span>
      </div>
      <div class="solutions">
        <h3 class="solutions-title">必须盯紧这些技术：</h3>
        <div class="solution-grid">
          <div class="solution-card">
            <span class="solution-icon">🪮</span>
            <h4 class="solution-name">梳齿设计</h4>
            <p class="solution-desc">自动梳理毛发，防止缠绕</p>
          </div>
          <div class="solution-card">
            <span class="solution-icon">✂️</span>
            <h4 class="solution-name">主动切割</h4>
            <p class="solution-desc">自动切断缠绕的毛发</p>
          </div>
          <div class="solution-card">
            <span class="solution-icon">🔄</span>
            <h4 class="solution-name">毛发分离</h4>
            <p class="solution-desc">特殊机制分离毛发到污水箱</p>
          </div>
        </div>
      </div>
      <div class="conclusion">
        <span class="conclusion-badge">目标</span>
        <span class="conclusion-text">真正免手拽</span>
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

.problem-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(239, 68, 68, 0.3);
  margin-bottom: 1.5rem;
}

.problem-icon {
  font-size: 1.5rem;
}

.problem-text {
  font-size: 1rem;
  color: #dc2626;
  font-weight: 600;
}

.solutions {
  margin-bottom: 1.5rem;
}

.solutions-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem;
  text-align: center;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.solution-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  text-align: center;
  border: 2px solid transparent;
  transition: border-color 0.3s, transform 0.3s;
}

.solution-card:hover {
  border-color: #6366f1;
  transform: translateY(-2px);
}

.solution-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
}

.solution-name {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.solution-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}

.conclusion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border-radius: 1rem;
  border: 2px solid #10b981;
}

.conclusion-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.conclusion-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: #10b981;
}
</style>
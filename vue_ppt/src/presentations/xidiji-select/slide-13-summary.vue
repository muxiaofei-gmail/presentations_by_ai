<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">选购要点总结</h2>
      <div class="summary-grid">
        <div class="summary-card core">
          <span class="card-icon">💪</span>
          <h3 class="card-title">四个核心指标</h3>
          <ul class="card-list">
            <li>吸力 ≥ 15000Pa</li>
            <li>防缠绕系统</li>
            <li>热风烘干</li>
            <li>真平躺 + 三侧贴边</li>
          </ul>
        </div>
        <div class="summary-card avoid">
          <span class="card-icon">⚠️</span>
          <h3 class="card-title">避坑指南</h3>
          <ul class="card-list">
            <li>直播间清库存套路</li>
            <li>耗材刺客</li>
            <li>假平躺参数</li>
          </ul>
        </div>
      </div>
      <div class="conclusion">
        <span class="conclusion-icon">✨</span>
        <div class="conclusion-content">
          <p class="conclusion-title">买到一台</p>
          <p class="conclusion-highlight">拖得干净、用得爽</p>
          <p class="conclusion-title">的地面清洁神器</p>
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
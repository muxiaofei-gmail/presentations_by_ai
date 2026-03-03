<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心二</span>
        <h2 class="section-title">画质三维硬指标</h2>
        <p class="section-subtitle">想要画面通透、色彩真实，必须卡死这三点</p>
      </div>
      <div class="indicators">
        <div class="indicator-card">
          <div class="indicator-icon">☀️</div>
          <div class="indicator-value">1000+ 尼特</div>
          <div class="indicator-name">峰值亮度</div>
          <p class="indicator-desc">阳光下的波光粼粼、爆炸场景才有真实亮眼感</p>
        </div>
        <div class="indicator-card">
          <div class="indicator-icon">🔲</div>
          <div class="indicator-value">千级分区</div>
          <div class="indicator-name">背光分区</div>
          <p class="indicator-desc">百级起步，千级优秀。分区越多，光晕越少</p>
        </div>
        <div class="indicator-card">
          <div class="indicator-icon">🎨</div>
          <div class="indicator-value">DCI-P3 95%</div>
          <div class="indicator-name">色域覆盖</div>
          <p class="indicator-desc">必须90%以上，否则红不是红，绿不是绿</p>
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

.indicators {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.indicator-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  text-align: center;
  border: 1px solid rgba(99, 102, 241, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
}

.indicator-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
}

.indicator-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.indicator-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: #6366f1;
  margin-bottom: 0.25rem;
}

.indicator-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.indicator-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
</style>
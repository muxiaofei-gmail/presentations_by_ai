<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心二</span>
        <h2 class="section-title">硬指标三：平躺与贴边</h2>
        <p class="section-subtitle">传统拖把够不到的才是痛点</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-header">
            <span class="feature-icon">🛋️</span>
            <h3 class="feature-title">真平躺</h3>
          </div>
          <div class="feature-specs">
            <div class="spec-item">
              <span class="spec-value">180°</span>
              <span class="spec-label">平躺角度</span>
            </div>
            <div class="spec-item">
              <span class="spec-value">≤12<span class="unit">cm</span></span>
              <span class="spec-label">机身厚度</span>
            </div>
          </div>
          <p class="feature-note">钻进沙发底、床底等家具底部</p>
        </div>
        <div class="feature-card">
          <div class="feature-header">
            <span class="feature-icon">📐</span>
            <h3 class="feature-title">三侧贴边</h3>
          </div>
          <div class="feature-specs">
            <div class="spec-item">
              <span class="spec-value">≤5<span class="unit">mm</span></span>
              <span class="spec-label">贴边距离</span>
            </div>
            <div class="spec-item">
              <span class="spec-value">3</span>
              <span class="spec-label">贴边侧数</span>
            </div>
          </div>
          <p class="feature-note">墙角边缘不留黑线</p>
        </div>
      </div>
      <div class="warning">
        <span class="warning-icon">⚠️</span>
        <span class="warning-text">别看厂商演示在空旷平地拖得欢，沙发底、床底才是真正的痛点！</span>
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.feature-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid #6366f1;
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.feature-icon {
  font-size: 2rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.feature-specs {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.spec-item {
  text-align: center;
}

.spec-value {
  font-size: 2rem;
  font-weight: 900;
  color: #6366f1;
  display: block;
}

.spec-value .unit {
  font-size: 1rem;
  color: #64748b;
}

.spec-label {
  font-size: 0.85rem;
  color: #64748b;
}

.feature-note {
  font-size: 0.95rem;
  color: #475569;
  margin: 0;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(99, 102, 241, 0.2);
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
  font-size: 0.95rem;
  color: #b45309;
  font-weight: 600;
}
</style>
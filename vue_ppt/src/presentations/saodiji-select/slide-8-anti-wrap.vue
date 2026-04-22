<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">红线三</span>
        <h2 class="section-title">防缠绕设计</h2>
        <p class="section-subtitle">家里有长发或养宠物的，这是刚需</p>
      </div>
      <div class="brush-section">
        <div class="brush-types">
          <div class="brush-type good">
            <span class="type-icon">✓</span>
            <h3 class="type-title">刀片切割结构</h3>
            <p class="type-desc">主动切断缠绕的毛发</p>
          </div>
          <div class="brush-type good">
            <span class="type-icon">✓</span>
            <h3 class="type-title">气旋结构</h3>
            <p class="type-desc">气流引导防缠绕</p>
          </div>
          <div class="brush-type bad">
            <span class="type-icon">×</span>
            <h3 class="type-title">传统纯胶毛滚刷</h3>
            <p class="type-desc">清理毛发会让你崩溃</p>
          </div>
        </div>
      </div>
      <div class="warning-box">
        <span class="warning-icon">⚠️</span>
        <span class="warning-text">买前看清滚刷设计，别选纯胶毛滚刷</span>
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

.brush-section {
  margin-bottom: 2rem;
}

.brush-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.brush-type {
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s;
}

.brush-type:hover {
  transform: translateY(-4px);
}

.brush-type.good {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border: 2px solid #10b981;
}

.brush-type.bad {
  background: rgba(239, 68, 68, 0.08);
  border: 2px solid #ef4444;
}

.type-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.brush-type.good .type-icon {
  color: #10b981;
}

.brush-type.bad .type-icon {
  color: #ef4444;
}

.type-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.type-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
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
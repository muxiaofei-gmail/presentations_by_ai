<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心三</span>
        <h2 class="section-title">后勤三：助力轮设计</h2>
        <p class="section-subtitle">女生、老人刚需</p>
      </div>
      <div class="feature-box">
        <div class="feature-main">
          <span class="feature-icon">🛒</span>
          <h3 class="feature-title">双向助力万向轮</h3>
          <p class="feature-desc">前后推拉都有助力，像有个人在帮你推</p>
        </div>
      </div>
      <div class="benefits">
        <div class="benefit-card">
          <span class="benefit-icon">👩</span>
          <p class="benefit-text">女生单手推拉不费力</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">👴</span>
          <p class="benefit-text">老人使用不费腰</p>
        </div>
        <div class="benefit-card">
          <span class="benefit-icon">🏠</span>
          <p class="benefit-text">大户型清洁更轻松</p>
        </div>
      </div>
      <div class="tip">
        <span class="tip-icon">💡</span>
        <span class="tip-text">没有助力轮的洗地机，用久了手腕和腰部会很累</span>
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

.feature-box {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.feature-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: 1.5rem;
  border: 2px solid #6366f1;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.feature-desc {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  text-align: center;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benefit-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.benefit-icon {
  font-size: 1.5rem;
}

.benefit-text {
  font-size: 0.95rem;
  color: #475569;
  margin: 0;
  font-weight: 500;
}

.tip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 1rem;
  border: 1px solid #10b981;
}

.tip-icon {
  font-size: 1.25rem;
}

.tip-text {
  font-size: 0.95rem;
  color: #059669;
  font-weight: 600;
}
</style>
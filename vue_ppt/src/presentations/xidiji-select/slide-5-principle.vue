<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心一</span>
        <h2 class="section-title">洗地机为什么强？</h2>
        <p class="section-subtitle">三合一清洁方式，对付复杂家居环境的最优解</p>
      </div>
      <div class="process-flow">
        <div class="process-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3 class="step-title">前滚刷高速洗</h3>
            <p class="step-desc">高速旋转清洗顽固污渍</p>
          </div>
        </div>
        <div class="process-arrow">→</div>
        <div class="process-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3 class="step-title">中间强力抽污</h3>
            <p class="step-desc">瞬间吸走污水和垃圾</p>
          </div>
        </div>
        <div class="process-arrow">→</div>
        <div class="process-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3 class="step-title">后置刮条擦干</h3>
            <p class="step-desc">不留水痕，地面即拖即干</p>
          </div>
        </div>
      </div>
      <div class="notice">
        <span class="notice-icon">⚠️</span>
        <span class="notice-text">怕水实木地板除外</span>
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
  max-width: min(90vw, 1100px);
  width: 100%;
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
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

.process-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.process-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: border-color 0.3s, transform 0.3s;
  min-width: 220px;
}

.process-step:hover {
  border-color: #6366f1;
  transform: translateY(-2px);
}

.step-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 50%;
  flex-shrink: 0;
}

.step-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.25rem;
}

.step-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

.process-arrow {
  font-size: 2rem;
  color: #6366f1;
  font-weight: 700;
}

.notice {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 999px;
  border: 1px solid #f59e0b;
}

.notice-icon {
  font-size: 1.25rem;
}

.notice-text {
  font-size: 1rem;
  font-weight: 600;
  color: #b45309;
}

@media (max-width: 768px) {
  .process-flow {
    flex-direction: column;
  }

  .process-arrow {
    transform: rotate(90deg);
  }
}
</style>
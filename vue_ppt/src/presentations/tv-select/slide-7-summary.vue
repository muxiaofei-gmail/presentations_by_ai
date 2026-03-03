<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">选购要点总结</h2>
      <div class="summary-list">
        <div class="summary-item">
          <span class="summary-icon">✓</span>
          <span class="summary-text">认准 <strong>Mini LED</strong></span>
        </div>
        <div class="summary-item">
          <span class="summary-icon">✓</span>
          <span class="summary-text">盯紧 <strong>亮度、分区、色域</strong> 三大硬指标</span>
        </div>
        <div class="summary-item">
          <span class="summary-icon">✓</span>
          <span class="summary-text">避开 <strong>假接口和假高刷</strong> 的坑</span>
        </div>
      </div>
      <div class="conclusion">
        <span class="conclusion-text">画质顶、用得爽的好电视</span>
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
  max-width: min(90vw, 700px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(16, 185, 129, 0.08);
  border-radius: 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.summary-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  flex-shrink: 0;
}

.summary-text {
  font-size: 1.1rem;
  color: #1e293b;
}

.summary-text strong {
  color: #10b981;
}

.conclusion {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: 0.75rem;
}

.conclusion-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #6366f1;
}
</style>
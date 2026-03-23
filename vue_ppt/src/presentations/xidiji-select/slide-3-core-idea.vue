<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">三个核心指标</h2>
      <p class="section-subtitle">死磕三个指标，避开90%的工业垃圾</p>
      <div class="cores-grid">
        <div class="core-card">
          <span class="core-number">01</span>
          <h3 class="core-title">搞懂真实定位</h3>
          <p class="core-desc">谁需要洗地机？适合什么场景？</p>
        </div>
        <div class="core-card">
          <span class="core-number">02</span>
          <h3 class="core-title">清洁三维硬指标</h3>
          <p class="core-desc">吸力、防缠绕、死角覆盖</p>
        </div>
        <div class="core-card">
          <span class="core-number">03</span>
          <h3 class="core-title">后勤与自清洁</h3>
          <p class="core-desc">热风烘干、续航水箱、助力系统</p>
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

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem;
  text-align: center;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0 0 2rem;
  text-align: center;
}

.cores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.core-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  border: 2px solid transparent;
  text-align: center;
  transition: transform 0.3s, border-color 0.3s;
}

.core-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
}

.core-number {
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.core-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.core-desc {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}
</style>
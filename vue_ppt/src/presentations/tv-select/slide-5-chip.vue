<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心三</span>
        <h2 class="section-title">看大脑和接口</h2>
      </div>
      <div class="two-cols">
        <div class="col-card">
          <div class="col-icon">🧠</div>
          <h3 class="col-title">电视芯片</h3>
          <p class="col-desc">芯片不强，用两年卡成PPT</p>
          <div class="col-highlight">
            <span class="highlight-label">认准</span>
            <span class="highlight-value">联发科 Pentonic 700</span>
            <span class="highlight-sub">MT9653 或同级别高端芯片</span>
          </div>
        </div>
        <div class="col-card">
          <div class="col-icon">🎮</div>
          <h3 class="col-title">HDMI 2.1 接口</h3>
          <p class="col-desc">主机玩家的满血保障</p>
          <div class="col-highlight">
            <span class="highlight-label">必须</span>
            <span class="highlight-value">满血 48Gbps</span>
            <span class="highlight-sub">支持 VRR + ALLM</span>
          </div>
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
  margin: 0;
}

.two-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.col-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
}

.col-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.col-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.col-desc {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0 0 1rem;
}

.col-highlight {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
}

.highlight-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.highlight-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.highlight-sub {
  display: block;
  font-size: 0.85rem;
  color: #64748b;
}
</style>
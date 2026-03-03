<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心一</span>
        <h2 class="section-title">看屏幕技术</h2>
        <p class="section-subtitle">2026年的版本之子</p>
      </div>
      <div class="compare-grid">
        <div class="screen-card featured">
          <div class="screen-badge recommend">推荐</div>
          <h3 class="screen-name">Mini LED</h3>
          <ul class="screen-features">
            <li>亮度高、控光好</li>
            <li>暗场黑得下去</li>
            <li>无烧屏担忧</li>
          </ul>
          <p class="screen-conclusion">大多数家庭的最优解</p>
        </div>
        <div class="screen-card">
          <div class="screen-badge premium">高端</div>
          <h3 class="screen-name">OLED</h3>
          <ul class="screen-features">
            <li>极致画质</li>
            <li>黑色纯净</li>
          </ul>
          <p class="screen-conclusion">价格贵、可能烧屏</p>
        </div>
        <div class="screen-card">
          <div class="screen-badge budget">入门</div>
          <h3 class="screen-name">普通 LED</h3>
          <ul class="screen-features">
            <li>价格便宜</li>
            <li>技术成熟</li>
          </ul>
          <p class="screen-conclusion">画质一般</p>
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
  max-width: min(90vw, 1100px);
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

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.screen-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid transparent;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.screen-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1);
}

.screen-card.featured {
  border-color: #6366f1;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
}

.screen-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.screen-badge.recommend {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.screen-badge.premium {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
}

.screen-badge.budget {
  background: #e2e8f0;
  color: #64748b;
}

.screen-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 1rem;
}

.screen-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  text-align: left;
}

.screen-features li {
  font-size: 0.95rem;
  color: #475569;
  padding: 0.35rem 0;
  padding-left: 1.25rem;
  position: relative;
}

.screen-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

.screen-conclusion {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  font-weight: 500;
}
</style>
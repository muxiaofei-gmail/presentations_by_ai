<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">选购的第一念头</h2>
      <div class="misconception-box">
        <div class="misconception-item">
          <span class="quote-icon">"</span>
          <p class="misconception-text">我要选个吸力大的，10000帕起步</p>
        </div>
        <div class="misconception-item">
          <span class="quote-icon">"</span>
          <p class="misconception-text">有钱我就冲20000帕</p>
        </div>
      </div>
      <div class="truth-section">
        <span class="truth-label">真相</span>
        <ul class="truth-list">
          <li>2026年吸力参数普遍过剩</li>
          <li>日常家用根本体验不出太大区别</li>
          <li>过分追求大吸力容易被商家误导</li>
        </ul>
      </div>
      <div class="warning-grid">
        <div class="warning-card">
          <span class="warning-emoji">🤖</span>
          <p class="warning-title">人工智障</p>
          <p class="warning-desc">图便宜买了个天天撞墙的机器</p>
        </div>
        <div class="warning-card">
          <span class="warning-emoji">👴</span>
          <p class="warning-title">赛博祖宗</p>
          <p class="warning-desc">花高价请了个需要天天手动清理的机器</p>
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
  margin: 0 0 1.5rem;
  text-align: center;
}

.misconception-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.misconception-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(239, 68, 68, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.quote-icon {
  font-size: 1.5rem;
  color: #ef4444;
  font-weight: 700;
}

.misconception-text {
  font-size: 1.1rem;
  color: #475569;
  margin: 0;
  font-weight: 500;
}

.truth-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border-radius: 1rem;
  border: 2px solid #10b981;
}

.truth-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.truth-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.truth-list li {
  font-size: 1rem;
  color: #475569;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.truth-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

.warning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.warning-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  text-align: center;
  border: 2px solid transparent;
  transition: transform 0.3s;
}

.warning-card:hover {
  transform: translateY(-4px);
}

.warning-emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.warning-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.warning-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}
</style>
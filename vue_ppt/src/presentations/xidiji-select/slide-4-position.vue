<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">核心一</span>
        <h2 class="section-title">谁需要洗地机？</h2>
        <p class="section-subtitle">地面清洁领域的"版本之子"</p>
      </div>
      <div class="people-grid">
        <div class="people-card">
          <span class="people-icon">👶</span>
          <h3 class="people-title">熊孩子家庭</h3>
          <p class="people-desc">满地爬、到处弄脏的熊孩子</p>
        </div>
        <div class="people-card">
          <span class="people-icon">🐕</span>
          <h3 class="people-title">宠物家庭</h3>
          <p class="people-desc">养了掉毛怪的宠物家庭</p>
        </div>
        <div class="people-card">
          <span class="people-icon">🍳</span>
          <h3 class="people-title">重油污厨房</h3>
          <p class="people-desc">经常需要清理厨房重油污</p>
        </div>
      </div>
      <div class="conclusion">
        <span class="conclusion-icon">✨</span>
        <span class="conclusion-text">听我的，无脑冲洗地机</span>
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

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.people-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s;
}

.people-card:hover {
  transform: translateY(-4px);
}

.people-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.75rem;
}

.people-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.people-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

.conclusion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border-radius: 1rem;
  border: 2px solid #10b981;
}

.conclusion-icon {
  font-size: 1.5rem;
}

.conclusion-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: #10b981;
}
</style>
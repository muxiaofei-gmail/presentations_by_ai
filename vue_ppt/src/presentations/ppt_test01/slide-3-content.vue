<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">内容展示</h2>
      <div class="content-grid">
        <div class="card">
          <div class="card-icon">📊</div>
          <h3 class="card-title">数据展示</h3>
          <p class="card-desc">在这里展示关键数据和统计信息</p>
        </div>
        <div class="card">
          <div class="card-icon">💡</div>
          <h3 class="card-title">核心观点</h3>
          <p class="card-desc">突出显示最重要的见解和发现</p>
        </div>
        <div class="card">
          <div class="card-icon">🎯</div>
          <h3 class="card-title">行动建议</h3>
          <p class="card-desc">提供明确的下一步行动指南</p>
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
  background: radial-gradient(100% 120% at 0% 50%, rgba(236, 72, 153, 0.1), transparent 60%),
    radial-gradient(100% 120% at 100% 50%, rgba(16, 185, 129, 0.1), transparent 60%),
    #f8fafc;
}

.content-block {
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
  max-width: min(90vw, 1100px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.15);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.card-desc {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
</style>
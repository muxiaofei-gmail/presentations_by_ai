<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">红线二</span>
        <h2 class="section-title">边角覆盖率</h2>
        <p class="section-subtitle">大面扫得干净，墙角总留灰？</p>
      </div>
      <div class="level-cards">
        <div class="level-card baseline">
          <div class="level-badge">及格线</div>
          <div class="level-title">扭屁股贴边拖地</div>
          <p class="level-desc">选购的最低门槛</p>
          <p class="level-note">机器必须支持贴边清洁动作</p>
        </div>
        <div class="level-card recommended">
          <div class="level-badge">推荐（预算≥2000元）</div>
          <div class="level-title">机械臂款式</div>
          <p class="level-desc">拖布或边刷能主动伸出</p>
          <p class="level-note">清理墙角死角更彻底</p>
        </div>
      </div>
      <div class="warning-box">
        <span class="warning-icon">⚠️</span>
        <span class="warning-text">大几千的旗舰机没有机械臂 = 直接拉黑，别听商家忽悠</span>
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

.level-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.level-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  border: 2px solid transparent;
  text-align: center;
  transition: transform 0.3s;
}

.level-card:hover {
  transform: translateY(-4px);
}

.level-card.baseline {
  border-color: #f59e0b;
}

.level-card.recommended {
  border-color: #10b981;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05));
}

.level-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.level-card.baseline .level-badge {
  background: #fef3c7;
  color: #b45309;
}

.level-card.recommended .level-badge {
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: white;
}

.level-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.level-desc {
  font-size: 1rem;
  color: #475569;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.level-note {
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
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <span class="core-label">红线二 · 进阶</span>
        <h2 class="section-title">机械臂功能</h2>
        <p class="section-subtitle">拖布或边刷能主动伸出清理死角</p>
      </div>
      <div class="arm-cards">
        <div class="arm-card">
          <span class="arm-icon">🔧</span>
          <h3 class="arm-title">边刷伸出</h3>
          <p class="arm-desc">主动伸出边刷，清理墙角死角</p>
          <p class="arm-note">解决边角遗漏问题</p>
        </div>
        <div class="arm-card">
          <span class="arm-icon">🧹</span>
          <h3 class="arm-title">拖布伸出</h3>
          <p class="arm-desc">拖布贴边拖地，覆盖率更高</p>
          <p class="arm-note">墙边不留灰</p>
        </div>
      </div>
      <div class="warning-box">
        <span class="warning-icon">⚠️</span>
        <div class="warning-content">
          <p class="warning-title">避坑提醒</p>
          <p class="warning-text">别听商家忽悠，大几千的旗舰机没有机械臂 = 直接拉黑</p>
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
  margin: 0 0 0.5rem;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0;
}

.arm-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.arm-card {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.08));
  border-radius: 1.5rem;
  border: 2px solid #10b981;
  text-align: center;
  transition: transform 0.3s;
}

.arm-card:hover {
  transform: translateY(-4px);
}

.arm-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.arm-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.75rem;
}

.arm-desc {
  font-size: 1rem;
  color: #475569;
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.arm-note {
  font-size: 0.85rem;
  color: #10b981;
  margin: 0;
  font-weight: 600;
}

.warning-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(239, 68, 68, 0.08);
  border-radius: 1rem;
  border: 2px solid rgba(239, 68, 68, 0.3);
}

.warning-icon {
  font-size: 1.5rem;
}

.warning-content {
  flex: 1;
}

.warning-title {
  font-size: 1rem;
  font-weight: 700;
  color: #dc2626;
  margin: 0 0 0.5rem;
}

.warning-text {
  font-size: 1rem;
  color: #475569;
  margin: 0;
}
</style>
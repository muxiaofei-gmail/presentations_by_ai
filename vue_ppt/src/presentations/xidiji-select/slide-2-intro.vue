<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">现在的洗地机市场</h2>
      <div class="points">
        <div class="point-item">
          <span class="point-icon">😱</span>
          <span class="point-text">群魔乱舞，参数多到让人头皮发麻</span>
        </div>
        <div class="point-item">
          <span class="point-icon">📢</span>
          <span class="point-text">几万帕吸力、AI智能识别等各种天花乱坠的参数</span>
        </div>
        <div class="point-item highlight">
          <span class="point-icon">❓</span>
          <span class="point-text">怎么挑？怎么避坑？</span>
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
  max-width: min(90vw, 800px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.points {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.point-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: transform 0.2s;
}

.point-item:hover {
  transform: translateX(8px);
}

.point-item.highlight {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-color: #6366f1;
}

.point-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.point-text {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #1e293b;
  font-weight: 500;
}

.point-item.highlight .point-text {
  font-weight: 700;
  color: #6366f1;
}
</style>
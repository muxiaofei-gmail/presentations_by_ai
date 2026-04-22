<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <h1 class="title">
        <span class="title-gradient">选购心法</span>
      </h1>
      <div class="tips-list">
        <div class="tip-item">
          <span class="tip-num">一</span>
          <span class="tip-text">重量决定使用频率，轻便是王道</span>
        </div>
        <div class="tip-item">
          <span class="tip-num">二</span>
          <span class="tip-text">长发或养宠，防缠绕必须带</span>
        </div>
        <div class="tip-item">
          <span class="tip-num">三</span>
          <span class="tip-text">厨房重油污，认准热水/蒸汽洗</span>
        </div>
        <div class="tip-item">
          <span class="tip-num">四</span>
          <span class="tip-text">家里有小朋友，除菌功能不能省</span>
        </div>
        <div class="tip-item">
          <span class="tip-num">五</span>
          <span class="tip-text">全屋木地板，速干技术很重要</span>
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

.title-block {
  text-align: center;
  padding: clamp(2.5rem, 6vw, 4rem) clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 40px 100px rgba(15, 23, 42, 0.18);
  max-width: min(90vw, 900px);
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin: 0 0 2rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.title-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #10b981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 0.75rem;
}

.tip-num {
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 2rem;
  text-align: center;
  flex-shrink: 0;
}

.tip-text {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: #1e293b;
  font-weight: 500;
  text-align: left;
}
</style>
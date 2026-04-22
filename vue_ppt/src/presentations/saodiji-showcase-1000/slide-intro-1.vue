<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <p class="price-range">1000-3000元入门档</p>
      <h1 class="title">
        <span class="title-normal">扫地机器人</span>
        <span class="title-gradient">怎么选？</span>
      </h1>
      <p class="subtitle">热门好用的款式，直接抄作业</p>
      <p class="author">胡侃</p>
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
  padding: clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 40px 100px rgba(15, 23, 42, 0.18);
  max-width: min(90vw, 900px);
}

.price-range {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: #ec4899;
  font-weight: 600;
  margin: 0 0 1rem;
  letter-spacing: 0.1em;
}

.title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  margin: 0 0 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.title-normal {
  color: #1e293b;
}

.title-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #10b981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #64748b;
  margin: 0 0 1rem;
  font-weight: 500;
}

.author {
  font-size: 1rem;
  color: #94a3b8;
  margin: 0;
}
</style>
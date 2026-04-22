<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <p class="price-tag">1500-2000元价位</p>
      <h1 class="title">
        <span class="title-normal">洗地机</span>
        <span class="title-gradient">怎么选？</span>
      </h1>
      <p class="subtitle">大家好，我是胡侃</p>
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

.price-tag {
  display: inline-block;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: white;
  background: linear-gradient(135deg, #ec4899, #f97316);
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  margin: 0 0 1.5rem;
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
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: #64748b;
  margin: 0;
  font-weight: 500;
}
</style>
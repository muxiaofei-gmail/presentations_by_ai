<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="end-block">
      <h2 class="end-title">感谢观看</h2>
      <p class="end-subtitle">下期聊具体的电视型号怎么选</p>
      <div class="end-brand">胡侃</div>
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

.end-block {
  text-align: center;
  padding: clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 40px 100px rgba(15, 23, 42, 0.18);
  max-width: min(90vw, 700px);
}

.end-title {
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #10b981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.end-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: #64748b;
  margin: 0 0 1.5rem;
  font-weight: 500;
}

.end-brand {
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: #6366f1;
  padding: 0.5rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 999px;
}
</style>
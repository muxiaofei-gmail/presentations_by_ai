<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <h1 class="title">PPT Test 01</h1>
      <p class="subtitle">这是一个新的演示文稿模板</p>
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
  background: radial-gradient(120% 140% at 85% 10%, rgba(99, 102, 241, 0.15), transparent 55%),
    radial-gradient(90% 120% at 10% 90%, rgba(16, 185, 129, 0.12), transparent 60%),
    #f8fafc;
}

.title-block {
  text-align: center;
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.15);
  max-width: min(90vw, 900px);
}

.title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  color: #1e293b;
  margin: 0 0 1rem;
  letter-spacing: -0.03em;
}

.subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #64748b;
  margin: 0;
  font-weight: 500;
}
</style>
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="end-block">
      <h2 class="end-title">谢谢观看</h2>
      <p class="end-subtitle">Thank You</p>
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
  background: radial-gradient(120% 140% at 50% 50%, rgba(99, 102, 241, 0.2), transparent 60%),
    #f8fafc;
}

.end-block {
  text-align: center;
  padding: clamp(3rem, 8vw, 6rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85));
  border-radius: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 40px 100px rgba(15, 23, 42, 0.18);
}

.end-title {
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 900;
  color: #1e293b;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.end-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #6366f1;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.1em;
}
</style>
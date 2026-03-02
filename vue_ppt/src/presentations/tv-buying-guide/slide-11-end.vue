<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="end-block">
      <h2 class="end-title">谢谢观看</h2>
      <p class="end-subtitle">祝你选到心仪的电视</p>
      <div class="end-tips">
        <span>如有问题，欢迎留言讨论</span>
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
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #64748b;
  margin: 0 0 1.5rem;
  font-weight: 600;
}

.end-tips {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 999px;
}

.end-tips span {
  font-size: 0.95rem;
  color: #6366f1;
  font-weight: 600;
}
</style>
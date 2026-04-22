<template>
  <div class="soft-mesh-background" aria-hidden="true">
    <div class="layer mesh-gradient" />
    <div class="glass-veil" />
  </div>
</template>

<script setup lang="ts">
// No script needed; purely visual background.
</script>

<style scoped>
.soft-mesh-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  /* 使用主题背景色作为基础 */
  background-color: rgb(var(--surface) / 1);
}

.layer {
  position: absolute;
  inset: 0;
}

.mesh-gradient {
  background-image:
    radial-gradient(1000px 520px at 12% 18%, rgb(var(--accent) / 0.35), transparent 60%),
    radial-gradient(820px 480px at 82% 28%, rgb(var(--accent-primary) / 0.30), transparent 60%),
    radial-gradient(900px 560px at 56% 82%, rgb(var(--tertiary) / 0.28), transparent 60%),
    linear-gradient(180deg, rgb(var(--surface) / 1), rgb(var(--surface-muted) / 1));
  filter: saturate(1.12) contrast(1.04);
}

.glass-veil {
  position: absolute;
  inset: 0;
  background: rgb(var(--surface_container) / 0.12);
  backdrop-filter: blur(4px) saturate(1.02);
  -webkit-backdrop-filter: blur(4px) saturate(1.02);
  pointer-events: none;
}
</style>

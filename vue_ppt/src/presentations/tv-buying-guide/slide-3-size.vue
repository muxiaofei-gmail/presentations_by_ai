<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">多大尺寸合适？</h2>
      <p class="section-subtitle">根据观看距离选择</p>
      <div class="size-table">
        <div class="size-row header">
          <div class="size-cell">观看距离</div>
          <div class="size-cell">推荐尺寸</div>
        </div>
        <div class="size-row">
          <div class="size-cell distance">2 - 2.5米</div>
          <div class="size-cell inch">55英寸</div>
        </div>
        <div class="size-row">
          <div class="size-cell distance">2.5 - 3米</div>
          <div class="size-cell inch">65英寸</div>
        </div>
        <div class="size-row">
          <div class="size-cell distance">3 - 3.5米</div>
          <div class="size-cell inch">75英寸</div>
        </div>
        <div class="size-row">
          <div class="size-cell distance">3.5米以上</div>
          <div class="size-cell inch">85英寸+</div>
        </div>
      </div>
      <div class="formula">
        <span class="formula-label">简单公式：</span>
        <span class="formula-text">距离（米）× 25 = 建议尺寸（英寸）</span>
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
  max-width: min(90vw, 700px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem;
  text-align: center;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0 0 2rem;
  text-align: center;
}

.size-table {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.size-row {
  display: flex;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.size-row:last-child {
  border-bottom: none;
}

.size-row.header {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.size-row.header .size-cell {
  color: white;
  font-weight: 700;
}

.size-row:not(.header):nth-child(even) {
  background: rgba(99, 102, 241, 0.05);
}

.size-cell {
  flex: 1;
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}

.size-cell.distance {
  color: #475569;
  font-weight: 600;
}

.size-cell.inch {
  color: #6366f1;
  font-weight: 800;
}

.formula {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 0.75rem;
  text-align: center;
  border-left: 4px solid #10b981;
}

.formula-label {
  font-weight: 600;
  color: #475569;
}

.formula-text {
  font-weight: 700;
  color: #10b981;
}
</style>
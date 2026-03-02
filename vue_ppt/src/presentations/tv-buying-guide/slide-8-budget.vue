<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">不同预算怎么选？</h2>
      <div class="budget-list">
        <div class="budget-item">
          <div class="budget-range">
            <span class="budget-price">3000元以下</span>
            <span class="budget-label">入门级</span>
          </div>
          <p class="budget-desc">满足基本需求，画质别有太高期待</p>
        </div>
        <div class="budget-item featured">
          <div class="budget-range">
            <span class="budget-price">3000 - 6000元</span>
            <span class="budget-label recommend">性价比之选</span>
          </div>
          <p class="budget-desc">主流选择，能买到不错的 Mini LED 电视</p>
        </div>
        <div class="budget-item">
          <div class="budget-range">
            <span class="budget-price">6000 - 10000元</span>
            <span class="budget-label">进阶级</span>
          </div>
          <p class="budget-desc">画质明显提升，适合对画质有要求的家庭</p>
        </div>
        <div class="budget-item">
          <div class="budget-range">
            <span class="budget-price">10000元以上</span>
            <span class="budget-label premium">旗舰级</span>
          </div>
          <p class="budget-desc">画质、做工、体验都顶级，适合发烧友</p>
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
  max-width: min(90vw, 700px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.budget-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.budget-item {
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: transform 0.2s, box-shadow 0.2s;
}

.budget-item:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
}

.budget-item.featured {
  border-color: #6366f1;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
}

.budget-range {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.budget-price {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1e293b;
}

.budget-label {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: #e2e8f0;
  color: #64748b;
  font-weight: 600;
}

.budget-label.recommend {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.budget-label.premium {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
}

.budget-desc {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}
</style>
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">主流品牌推荐</h2>
      <div class="brands-grid">
        <div class="brand-card">
          <div class="brand-name">索尼</div>
          <div class="brand-tag premium">高端</div>
          <p class="brand-desc">画质调教出色，适合追求画质、预算充足的用户</p>
        </div>
        <div class="brand-card">
          <div class="brand-name">三星</div>
          <div class="brand-tag premium">高端</div>
          <p class="brand-desc">面板自产自销，高端 QLED 表现出色</p>
        </div>
        <div class="brand-card">
          <div class="brand-name">LG</div>
          <div class="brand-tag">进阶</div>
          <p class="brand-desc">OLED 电视首选，C 系列性价比很高</p>
        </div>
        <div class="brand-card featured">
          <div class="brand-name">TCL / 海信</div>
          <div class="brand-tag recommend">推荐</div>
          <p class="brand-desc">国产双雄，Mini LED 性价比突出，大多数人最稳妥的选择</p>
        </div>
        <div class="brand-card">
          <div class="brand-name">小米</div>
          <div class="brand-tag">入门</div>
          <p class="brand-desc">智能生态完善，价格亲民，适合追求性价比的用户</p>
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
  max-width: min(90vw, 1000px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
}

.brand-card {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s;
}

.brand-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1);
}

.brand-card.featured {
  border-color: #6366f1;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.brand-tag {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: #e2e8f0;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.brand-tag.premium {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
}

.brand-tag.recommend {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.brand-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
</style>
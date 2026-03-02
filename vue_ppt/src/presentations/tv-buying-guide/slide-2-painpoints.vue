<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">买电视的困惑</h2>
      <div class="cards-grid">
        <div class="pain-card">
          <div class="card-icon">😵</div>
          <h3 class="card-title">参数复杂看不懂</h3>
          <p class="card-desc">HDR、杜比视界、MEMC...专业术语让人头晕</p>
        </div>
        <div class="pain-card">
          <div class="card-icon">🔍</div>
          <h3 class="card-title">型号众多挑花眼</h3>
          <p class="card-desc">字母数字组合像乱码，不知道怎么选</p>
        </div>
        <div class="pain-card">
          <div class="card-icon">💰</div>
          <h3 class="card-title">价格差异大</h3>
          <p class="card-desc">同尺寸从两三千到两三万，差在哪？</p>
        </div>
        <div class="pain-card">
          <div class="card-icon">😱</div>
          <h3 class="card-title">害怕买完就降价</h3>
          <p class="card-desc">刚买完发现更便宜的型号，后悔莫及</p>
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
  max-width: min(90vw, 1100px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.pain-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pain-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.card-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
</style>
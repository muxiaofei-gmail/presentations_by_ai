<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">分辨率与刷新率</h2>
      <div class="two-cols">
        <div class="col">
          <h3 class="col-title">
            <span class="col-icon">📺</span>
            分辨率
          </h3>
          <div class="items">
            <div class="item">
              <span class="item-name">1080P</span>
              <span class="item-desc">入门级，小尺寸电视</span>
            </div>
            <div class="item highlight">
              <span class="item-name">4K</span>
              <span class="item-desc">主流选择，推荐 ✓</span>
            </div>
            <div class="item">
              <span class="item-name">8K</span>
              <span class="item-desc">内容少，性价比低</span>
            </div>
          </div>
        </div>
        <div class="col">
          <h3 class="col-title">
            <span class="col-icon">⚡</span>
            刷新率
          </h3>
          <div class="items">
            <div class="item">
              <span class="item-name">60Hz</span>
              <span class="item-desc">标准，看电影够用</span>
            </div>
            <div class="item highlight">
              <span class="item-name">120Hz</span>
              <span class="item-desc">看球赛、玩游戏推荐 ✓</span>
            </div>
            <div class="item">
              <span class="item-name">144Hz+</span>
              <span class="item-desc">高端游戏电视</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tip">
        <span class="tip-icon">💡</span>
        <span>看电影选60Hz够用，看球赛玩游戏一定要上120Hz</span>
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
  max-width: min(90vw, 900px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.two-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.col-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem;
}

.col-icon {
  font-size: 1.5rem;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 0.75rem;
  border: 2px solid transparent;
}

.item.highlight {
  background: rgba(99, 102, 241, 0.1);
  border-color: #6366f1;
}

.item-name {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
}

.item-desc {
  font-size: 0.9rem;
  color: #64748b;
}

.tip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 0.75rem;
  border-left: 4px solid #10b981;
}

.tip-icon {
  font-size: 1.25rem;
}

.tip span:last-child {
  font-weight: 600;
  color: #1e293b;
}
</style>
<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">三大恶心陷阱</h2>
      <p class="section-subtitle">厂商的文字游戏坑多着呢</p>
      <div class="traps-grid">
        <div class="trap-card">
          <div class="trap-number">01</div>
          <h3 class="trap-title">直播间套路</h3>
          <div class="trap-details">
            <p class="trap-item">❌ "半价秒杀" = 老款清库存</p>
            <p class="trap-item">❌ 演示用"糖水"，不是真油污</p>
            <p class="trap-tip">💡 带瓶酱油去实机测试</p>
          </div>
        </div>
        <div class="trap-card">
          <div class="trap-number">02</div>
          <h3 class="trap-title">耗材刺客</h3>
          <div class="trap-details">
            <p class="trap-item">❌ 滚刷大几十上百块</p>
            <p class="trap-item">❌ 滤网不能水洗只能换</p>
            <p class="trap-tip">💡 买前算耗材单价，看能否平替</p>
          </div>
        </div>
        <div class="trap-card">
          <div class="trap-number">03</div>
          <h3 class="trap-title">假平躺</h3>
          <div class="trap-details">
            <p class="trap-item">❌ 平躺后吸力明显下降</p>
            <p class="trap-item">❌ 平躺后水箱漏水</p>
            <p class="trap-tip">💡 看清楚参数，问清楚客服</p>
          </div>
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
  margin: 0 0 0.5rem;
  text-align: center;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #ef4444;
  margin: 0 0 2rem;
  text-align: center;
  font-weight: 600;
}

.traps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.trap-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid #ef4444;
}

.trap-number {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ef4444, #f97316);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.trap-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem;
}

.trap-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trap-item {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  padding: 0.5rem;
  background: rgba(239, 68, 68, 0.05);
  border-radius: 0.5rem;
}

.trap-tip {
  font-size: 0.9rem;
  color: #059669;
  margin: 0;
  padding: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 0.5rem;
  font-weight: 600;
}
</style>
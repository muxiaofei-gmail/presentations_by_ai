<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <div class="header">
        <h2 class="section-title">三大恶心陷阱</h2>
        <p class="section-subtitle">厂商的文字游戏坑多着呢</p>
      </div>
      <div class="traps-list">
        <div class="trap-item">
          <div class="trap-number">1</div>
          <div class="trap-content">
            <h3 class="trap-title">假 HDMI 2.1</h3>
            <p class="trap-desc">商品页标着2.1，带宽只有18Gbps，本质是HDMI 2.0换马甲</p>
            <span class="trap-tip">💡 一定要问客服：是不是满血48Gbps</span>
          </div>
        </div>
        <div class="trap-item">
          <div class="trap-number">2</div>
          <div class="trap-content">
            <h3 class="trap-title">假高刷</h3>
            <p class="trap-desc">用DLG/HSR技术牺牲一半分辨率换来的假高刷，画面变糊</p>
            <span class="trap-tip">💡 只要原生4K 144Hz或120Hz</span>
          </div>
        </div>
        <div class="trap-item">
          <div class="trap-number">3</div>
          <div class="trap-content">
            <h3 class="trap-title">开机广告和系统封闭</h3>
            <p class="trap-desc">花大几千买电视还要天天看广告，装APP都受限</p>
            <span class="trap-tip">💡 严重影响日常体验，直接拉黑</span>
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
  max-width: min(90vw, 800px);
  width: 100%;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ef4444;
  margin: 0 0 0.5rem;
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #64748b;
  margin: 0;
}

.traps-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.trap-item {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(254, 226, 226, 0.3);
  border-radius: 1rem;
  border-left: 4px solid #ef4444;
}

.trap-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  font-weight: 800;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.trap-content {
  flex: 1;
}

.trap-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.35rem;
}

.trap-desc {
  font-size: 0.95rem;
  color: #475569;
  margin: 0 0 0.5rem;
}

.trap-tip {
  display: inline-block;
  font-size: 0.85rem;
  color: #6366f1;
  font-weight: 600;
}
</style>
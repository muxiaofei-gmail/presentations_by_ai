<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">屏幕类型怎么选？</h2>
      <div class="compare-grid">
        <div class="screen-card lcd">
          <div class="screen-header">
            <span class="screen-tag">性价比</span>
            <h3 class="screen-name">LCD</h3>
          </div>
          <p class="screen-desc">液晶电视，技术成熟价格实惠</p>
          <div class="screen-info">
            <div class="info-item pros">
              <span class="info-label">优点</span>
              <span>价格亲民、技术成熟、寿命长</span>
            </div>
            <div class="info-item cons">
              <span class="info-label">缺点</span>
              <span>对比度一般、暗部细节较弱</span>
            </div>
            <div class="info-item scene">
              <span class="info-label">适合</span>
              <span>预算有限、日常观看</span>
            </div>
          </div>
        </div>
        <div class="screen-card miniled featured">
          <div class="screen-header">
            <span class="screen-tag recommend">推荐</span>
            <h3 class="screen-name">Mini LED</h3>
          </div>
          <p class="screen-desc">LCD升级版，高亮度高对比度</p>
          <div class="screen-info">
            <div class="info-item pros">
              <span class="info-label">优点</span>
              <span>亮度高、对比度好、性价比高</span>
            </div>
            <div class="info-item cons">
              <span class="info-label">缺点</span>
              <span>可能略有光晕、略厚</span>
            </div>
            <div class="info-item scene">
              <span class="info-label">适合</span>
              <span>追求画质的主流用户</span>
            </div>
          </div>
        </div>
        <div class="screen-card oled">
          <div class="screen-header">
            <span class="screen-tag premium">高端</span>
            <h3 class="screen-name">OLED</h3>
          </div>
          <p class="screen-desc">像素自发光，极致画质</p>
          <div class="screen-info">
            <div class="info-item pros">
              <span class="info-label">优点</span>
              <span>黑色纯净、对比度无限、超薄</span>
            </div>
            <div class="info-item cons">
              <span class="info-label">缺点</span>
              <span>价格贵、可能烧屏、亮度有限</span>
            </div>
            <div class="info-item scene">
              <span class="info-label">适合</span>
              <span>画质发烧友、预算充足</span>
            </div>
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
  max-width: min(90vw, 1200px);
  width: 100%;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.screen-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  border: 2px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s;
}

.screen-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1);
}

.screen-card.featured {
  border-color: #6366f1;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
}

.screen-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.screen-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: #e2e8f0;
  color: #64748b;
  font-weight: 600;
}

.screen-tag.recommend {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.screen-tag.premium {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
}

.screen-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}

.screen-desc {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0 0 1rem;
}

.screen-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.03);
}

.info-label {
  font-weight: 700;
  color: #475569;
  margin-right: 0.5rem;
}

.info-item.pros .info-label {
  color: #10b981;
}

.info-item.cons .info-label {
  color: #ef4444;
}

.info-item.scene .info-label {
  color: #6366f1;
}
</style>
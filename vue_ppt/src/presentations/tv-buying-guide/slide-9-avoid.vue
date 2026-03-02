<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">避坑指南</h2>
      <div class="avoid-list">
        <div class="avoid-item">
          <span class="avoid-icon">⚠️</span>
          <div class="avoid-content">
            <span class="avoid-title">不要只看宣传参数</span>
            <span class="avoid-desc">峰值亮度、对比度等，实际效果要看评测</span>
          </div>
        </div>
        <div class="avoid-item">
          <span class="avoid-icon">⚠️</span>
          <div class="avoid-content">
            <span class="avoid-title">注意系统广告</span>
            <span class="avoid-desc">有些品牌开机广告、系统广告很多，买前了解清楚</span>
          </div>
        </div>
        <div class="avoid-item">
          <span class="avoid-icon">⚠️</span>
          <div class="avoid-content">
            <span class="avoid-title">关注售后服务</span>
            <span class="avoid-desc">电视是大件，选择售后网点多的品牌更放心</span>
          </div>
        </div>
        <div class="avoid-item">
          <span class="avoid-icon">⚠️</span>
          <div class="avoid-content">
            <span class="avoid-title">警惕虚假 HDR</span>
            <span class="avoid-desc">低端机也说支持 HDR，实际效果可能和没有一样</span>
          </div>
        </div>
        <div class="avoid-item">
          <span class="avoid-icon">⚠️</span>
          <div class="avoid-content">
            <span class="avoid-title">考虑实际使用场景</span>
            <span class="avoid-desc">客厅还是卧室？白天看多还是晚上？都会影响选择</span>
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

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem;
  text-align: center;
}

.avoid-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.avoid-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(254, 243, 199, 0.3);
  border-radius: 0.75rem;
  border-left: 4px solid #f59e0b;
  transition: transform 0.2s;
}

.avoid-item:hover {
  transform: translateX(8px);
}

.avoid-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.avoid-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.avoid-title {
  font-weight: 700;
  color: #1e293b;
  font-size: 1rem;
}

.avoid-desc {
  font-size: 0.9rem;
  color: #64748b;
}
</style>
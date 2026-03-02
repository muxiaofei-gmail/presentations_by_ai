<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-block">
      <h2 class="section-title">选购核心参数清单</h2>
      <div class="checklist">
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">分辨率</span>
            <span class="check-value">推荐 4K</span>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">刷新率</span>
            <span class="check-value">游戏用户选 120Hz+</span>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">HDR</span>
            <span class="check-value">支持杜比视界更佳</span>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">接口</span>
            <span class="check-value">HDMI 2.1 必备</span>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">运行内存</span>
            <span class="check-value">3GB 起步</span>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">存储空间</span>
            <span class="check-value">16GB 起步</span>
          </div>
        </div>
        <div class="check-item">
          <span class="check-icon">✓</span>
          <div class="check-content">
            <span class="check-name">系统</span>
            <span class="check-value">注意广告问题</span>
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

.checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.75rem;
  border: 1px solid rgba(99, 102, 241, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.check-item:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
}

.check-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
}

.check-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.check-name {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
}

.check-value {
  color: #6366f1;
  font-weight: 600;
  font-size: 0.95rem;
}
</style>
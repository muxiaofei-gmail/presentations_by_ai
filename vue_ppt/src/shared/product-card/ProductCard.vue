<!--
  ==================================================================================
  产品卡片组件 (ProductCard.vue)
  ==================================================================================

  【功能说明】
  用于展示单个产品的详细信息，适用于电视、家电等大型商品展示。
  采用 2x2 网格布局，包含四个核心区域：产品主图、产品参数、优缺点对比、适合人群。
  支持深色主题，带有玻璃态（glassmorphism）视觉效果。

  【布局结构示意图】
  ┌─────────────────────────────────────────────────────────────────┐
  │  Header: 品牌 + 型号                          日常价 | 活动价   │
  ├────────────────────────────┬────────────────────────────────────┤
  │                            │                                    │
  │      产品主图 (2fr)         │         产品参数 (specs-card)      │
  │      (image-card)          │         2列网格展示8项参数          │
  │                            │                                    │
  ├────────────────────────────┼────────────────────────────────────┤
  │   优点 (pros-section)       │         适合人群                   │
  │   ✓ 项目列表               │         支持高亮关键词              │
  │   ─────────────            │         (audience-card)            │
  │   缺点 (cons-section)       │                                    │
  │   ✗ 项目列表               │                                    │
  └────────────────────────────┴────────────────────────────────────┘
  │  Footer: 来源标识 (如 "四正讲家电")                              │
  └─────────────────────────────────────────────────────────────────┘

  【配色方案】
  - 品牌色/主色调: #ec4899 (玫粉色) - 用于品牌名、图标、优点标记
  - 强调色/高亮色: #f97316 (亮橙色) - 用于型号、参数值、缺点标记、高亮文本
  - 活动价标签: #3b82f6 (蓝色) - 区分活动价格
  - 文字颜色: #9ca3af (浅灰色) - 正文文字
  - 卡片背景: rgba(220, 220, 220, 0.6) (半透明灰色) - 玻璃态效果

  【技术要点】
  - CSS Grid 实现 2x2 网格布局，行高比例为 2fr:1fr
  - backdrop-filter 实现毛玻璃效果
  - v-html 指令渲染高亮文本（注意 XSS 风险，仅用于可信数据）
  - CSS 变量可通过父组件覆盖

  【依赖】
  - Product 类型来自 ./types.ts

  【作者】AI Assistant
  【创建日期】2024
  ==================================================================================
-->
<script setup lang="ts">
import type { Product } from './types'

// ==================== Props 定义 ====================
/**
 * 组件属性
 * @property product - 产品数据对象，包含品牌、型号、价格、参数、优缺点等信息
 * @property direction - 入场动画方向，'next' 从右侧淡入，'prev' 从左侧淡入
 * @example
 * <ProductCard :product="{
 *   id: 'hisense-e7n-pro',
 *   brand: '海信电视',
 *   model: 'E7N Pro',
 *   price: { regularPrice: 9999, salePrice: 7967 },
 *   ...
 * }" direction="next" />
 */
const props = withDefaults(defineProps<{
  product: Product
  direction?: 'next' | 'prev'
}>(), {
  direction: 'next'
})

// ==================== 工具函数 ====================
/**
 * 格式化价格数字
 * 使用中文本地化格式，添加千位分隔符
 * @example formatPrice(7967) => "7,967"
 * @example formatPrice(12999) => "12,999"
 * @param price - 价格数值（单位：元）
 * @returns 格式化后的价格字符串
 */
const formatPrice = (price: number): string => {
  return price.toLocaleString('zh-CN')
}

/**
 * 高亮文本处理
 * 将 Markdown 风格的 **文本** 语法转换为 HTML 的 <span class="highlight"> 元素
 * 用于在"适合人群"区域高亮显示关键信息
 *
 * @example
 * highlightText("推荐给**懒人**玩家")
 * // 返回: "推荐给<span class="highlight">懒人</span>玩家"
 *
 * @param text - 原始文本，可能包含 **高亮** 标记
 * @returns 处理后的 HTML 字符串，可直接用于 v-html
 */
const highlightText = (text: string): string => {
  // 正则说明：匹配 **xxx** 格式，其中 xxx 为需要高亮的内容
  // \*\* 匹配两个星号，(.*?) 非贪婪匹配任意字符
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')
}
</script>

<template>
  <!--
    产品卡片根容器
    - 占据父容器 80% 的宽高，居中显示
    - 内边距 2rem，提供内容呼吸空间
    - overflow: hidden 确保内容不溢出
    - 根据 direction 属性应用不同的入场动画方向
  -->
  <div class="product-card-wrapper" :class="['direction-' + direction]">
    <!--
      背景光晕效果层
      - 使用多层径向渐变叠加，营造科技感氛围
      - pointer-events: none 确保不影响交互
      - 颜色：紫色、粉色、紫罗兰色的渐变光晕
    -->
    <div class="background-glow"></div>

    <!--
      ==================== 顶部标题栏 ====================
      布局：flex 两端对齐
      左侧：品牌 + 型号
      右侧：价格标签（日常价、活动价）
    -->
    <header class="header">
      <!-- 左侧标题区域：品牌和型号并排显示 -->
      <div class="title-left">
        <!-- 品牌名称：玫粉色，较大字号 -->
        <span class="brand">{{ product.brand }}</span>
        <!-- 产品型号：亮橙色，较大字号 -->
        <span class="model">{{ product.model }}</span>
      </div>

      <!-- 右侧价格标签区域 -->
      <div class="price-tags">
        <!--
          日常价标签
          - 仅当存在 regularPrice 时显示
          - 玫粉色渐变背景
          - 图标：显示器/电视图标
        -->
        <div class="price-tag regular" v-if="product.price.regularPrice">
          <svg class="price-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- 显示器外框 -->
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <!-- 显示器支架 -->
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <span>日常价 {{ formatPrice(product.price.regularPrice) }}</span>
        </div>

        <!--
          活动价标签
          - 仅当存在 salePrice 时显示
          - 蓝色渐变背景，突出促销信息
          - 图标：价格标签/优惠图标
        -->
        <div class="price-tag sale" v-if="product.price.salePrice">
          <svg class="price-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- 标签形状 -->
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <!-- 标签上的圆点 -->
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          <span>活动价 {{ formatPrice(product.price.salePrice) }}</span>
        </div>
      </div>
    </header>

    <!--
      ==================== 2x2 网格布局容器 ====================
      布局说明：
      - grid-template-columns: 1fr 1fr（左右两列等宽）
      - grid-template-rows: 2fr 1fr（上行占2份，下行占1份，比例2:1）
      - 高度计算：100% - 4.5rem（预留 header 和 footer 空间）

      网格分布：
      | 左上(2fr) | 右上(2fr) |
      | 左下(1fr) | 右下(1fr) |
    -->
    <div class="grid-container">
      <!--
        ==================== 左上卡片：产品主图 ====================
        占据网格位置：第1行第1列
        功能：展示产品实物图片
        样式：居中对齐，图片自适应容器
      -->
      <div class="card image-card">
        <div class="image-wrapper">
          <!--
            产品图片
            - max-width/max-height: 100% 确保不超出容器
            - object-fit: contain 保持图片比例
          -->
          <img :src="product.imageUrl" :alt="product.model" class="product-image" />
        </div>
      </div>

      <!--
        ==================== 右上卡片：产品参数 ====================
        占据网格位置：第1行第2列
        功能：以2列网格展示产品核心参数（通常8项）
        样式：卡片标题 + 参数网格
      -->
      <div class="card specs-card">
        <!-- 卡片标题：齿轮图标 + 文字 -->
        <h3 class="card-title">
          <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- 齿轮/设置图标 -->
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          产品参数
        </h3>

        <!--
          参数网格：2列布局
          每项包含：参数名(浅灰) + 参数值(亮橙色)
          典型参数：峰值亮度、背光分区、色域、刷新率等
        -->
        <div class="specs-grid">
          <div class="spec-item" v-for="spec in product.specs" :key="spec.name">
            <span class="spec-name">{{ spec.name }}</span>
            <span class="spec-value">{{ spec.value }}</span>
          </div>
        </div>
      </div>

      <!--
        ==================== 左下卡片：优缺点对比 ====================
        占据网格位置：第2行第1列
        功能：左右分栏展示优点和缺点
        布局：flex 水平排列，中间有分隔线
      -->
      <div class="card pros-cons-card">
        <!-- 优点区域 -->
        <div class="pros-section">
          <h3 class="section-title pros-title">
            <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <!-- 点赞/好评图标 -->
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </svg>
            优点
          </h3>
          <!-- 优点列表：带勾选图标 -->
          <ul class="pros-list">
            <li v-for="(pro, index) in product.pros" :key="index">
              <!-- 勾选图标：圆形内有对勾 -->
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>{{ pro.text }}</span>
            </li>
          </ul>
        </div>

        <!-- 分隔线：半透明白色竖线 -->
        <div class="divider"></div>

        <!-- 缺点区域 -->
        <div class="cons-section">
          <h3 class="section-title cons-title">
            <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <!-- 踩/差评图标 -->
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
            </svg>
            缺点
          </h3>
          <!-- 缺点列表：带叉号图标 -->
          <ul class="cons-list">
            <li v-for="(con, index) in product.cons" :key="index">
              <!-- 叉号图标：圆形内有X -->
              <svg class="cross-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <span>{{ con.text }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!--
        ==================== 右下卡片：适合人群 ====================
        占据网格位置：第2行第2列
        功能：描述产品的目标用户群体
        特点：支持 **文本** 语法高亮关键信息
      -->
      <div class="card audience-card">
        <h3 class="card-title">
          <svg class="title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- 用户/人物图标 -->
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          适合人群
        </h3>
        <!--
          适合人群描述文本
          - 使用 v-html 渲染，支持 HTML 标签
          - highlightText 函数将 **xxx** 转为 <span class="highlight">xxx</span>
          - 安全警告：仅用于可信数据，避免 XSS 攻击
        -->
        <p class="audience-text" v-html="highlightText(product.targetAudience)"></p>
      </div>
    </div>

    <!--
      ==================== 底部 Footer ====================
      功能：显示内容来源/作者标识
      位置：绝对定位在左下角
      样式：图标 + 文字，玫粉色图标
    -->
    <footer class="footer">
      <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <!-- 信息/关于图标 -->
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
        <line x1="10" y1="12" x2="10" y2="16"/>
        <line x1="10" y1="8" x2="10.01" y2="8"/>
        <line x1="14" y1="12" x2="14" y2="16"/>
        <line x1="14" y1="8" x2="14.01" y2="8"/>
      </svg>
      <!-- 来源标识：默认显示"四正讲家电" -->
      <span class="footer-text">{{ product.source || '四正讲家电' }}</span>
    </footer>
  </div>
</template>

<style scoped>
/*
  ==================================================================================
  产品卡片样式 (ProductCard Styles)
  ==================================================================================

  【设计原则】
  1. 使用 rem 单位，便于响应式缩放（默认 1rem = 16px）
  2. 深色主题为主，配合玻璃态效果
  3. 颜色变量化，便于后期主题定制

  【CSS 架构】
  1. 根容器布局
  2. 背景效果
  3. 头部区域
  4. 网格布局
  5. 卡片通用样式
  6. 各卡片特定样式
  7. 底部 Footer
  8. 响应式适配
  ==================================================================================
*/

/* ==================== 1. 根容器布局 ==================== */
/**
 * 产品卡片根容器
 * - 相对定位，作为内部绝对定位元素的参考
 * - 占据父容器 80% 的宽高，实现留白效果
 * - margin: auto 实现水平垂直居中
 */
.product-card-wrapper {
  position: relative;
  width: 70%;
  height: 90%;
  padding: 2rem; /* 内边距：2rem ≈ 32px */
  overflow: hidden;
  margin: auto;
}

/* ==================== 2. 背景效果 ==================== */
/**
 * 背景光晕效果层
 * 使用多层径向渐变叠加，营造科技感氛围
 *
 * 渐变说明：
 * - 第一层：紫色光晕，位于左上角 (20%, 20%)
 * - 第二层：粉色光晕，位于右下角 (80%, 80%)
 * - 第三层：紫罗兰光晕，位于中心 (50%, 50%)
 *
 * pointer-events: none 确保背景不影响用户交互
 */
.background-glow {
  position: absolute;
  inset: 0; /* 等同于 top: 0; right: 0; bottom: 0; left: 0; */
  background:
    radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.15), transparent 100%),  /* 紫色光晕 */
    radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.1), transparent 100%),   /* 粉色光晕 */
    radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.08), transparent 100%);   /* 中心光晕 */
  pointer-events: none;
  border-radius: 0.75rem; 
}

/* ==================== 3. 头部区域 ==================== */
/**
 * 顶部标题栏
 * 布局：flex 两端对齐，左侧品牌型号，右侧价格标签
 */
.header {
  display: flex;
  justify-content: space-between; /* 两端对齐 */
  align-items: center;            /* 垂直居中 */
  margin-bottom: 0.5rem;          /* 与下方网格的间距 */
  position: relative;
  z-index: 1; /* 确保在背景光晕之上 */
}

/**
 * 左侧标题容器
 * align-items: baseline 使品牌和型号底部对齐
 */
.title-left {
  display: flex;
  align-items: baseline; /* 基线对齐，使大小不同的文字底部对齐 */
  gap: 0.25rem;          /* 品牌和型号之间的间距 */
}

/**
 * 品牌名称样式
 * 字体：2.5rem ≈ 40px，加粗
 * 颜色：#ec4899 玫粉色（品牌主色）
 */
.brand {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ec4899; /* 玫粉色 - Tailwind pink-500 */
}

/**
 * 产品型号样式
 * 字体：2.5rem ≈ 40px，加粗
 * 颜色：#f97316 亮橙色（强调色）
 */
.model {
  font-size: 2.5rem;
  font-weight: 700;
  color: #f97316; /* 亮橙色 - Tailwind orange-500 */
}

/**
 * 价格标签容器
 * transform: scale(0.8) 整体缩小，避免价格标签过大
 * transform-origin: right center 从右侧中心缩放，保持右对齐
 */
.price-tags {
  display: flex;
  gap: 0.4rem; /* 日常价和活动价之间的间距 */
  transform: scale(0.8);
  transform-origin: right center;
}

/**
 * 价格标签通用样式
 * 胶囊形状（圆角 9999px），白色文字
 */
.price-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;           /* 图标与文字的间距 */
  padding: 0.6rem 1.2rem; /* 内边距 */
  border-radius: 9999px;  /* 完全圆角，胶囊形状 */
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

/**
 * 日常价标签样式
 * 渐变背景：玫粉色渐变
 */
.price-tag.regular {
  background: linear-gradient(135deg, #ec4899, #db2777); /* pink-500 到 pink-600 */
}

/**
 * 活动价标签样式
 * 渐变背景：蓝色渐变，突出促销信息
 */
.price-tag.sale {
  background: linear-gradient(135deg, #3b82f6, #2563eb); /* blue-500 到 blue-600 */
}

/**
 * 价格图标尺寸
 */
.price-icon {
  width: 1.75rem;  /* 28px */
  height: 1.75rem;
}

/* ==================== 4. 网格布局 ==================== */
/**
 * 2x2 网格容器
 *
 * 布局说明：
 * - grid-template-columns: 1fr 1fr  → 左右两列等宽
 * - grid-template-rows: 2fr 1fr     → 上行占 2 份，下行占 1 份（比例 2:1）
 * - gap: 行间距 0.5rem，列间距 1rem
 * - height: calc(100% - 4.5rem) → 减去 header 和预留的 footer 空间
 *
 * 网格分布示意图：
 * | 左上(2fr) | 右上(2fr) |
 * | 左下(1fr) | 右下(1fr) |
 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 0.5rem 1rem; /* 行间距 列间距 */
  height: calc(100% - 6rem); /* 动态计算高度 */
  position: relative;
  z-index: 1;
}

/* ==================== 5. 卡片通用样式 ==================== */
/**
 * 卡片通用样式
 * 玻璃态效果：半透明背景 + 模糊滤镜 + 细边框
 */
.card {
  background: rgba(220, 220, 220, 0.3);       /* 半透明灰色背景 */
  border-radius: 0.75rem;                      /* 圆角 12px */
  padding: 0.6rem 0.75rem;                     /* 内边距 */
  backdrop-filter: blur(12px);                 /* 毛玻璃模糊效果 */
  border: 1px solid rgba(255, 255, 255, 0.08); /* 细微白色边框 */
  overflow: auto;                              /* 内容溢出时滚动 */
}

/* ==================== 6. 各卡片特定样式 ==================== */

/* ---------- 6.1 产品主图卡片 ---------- */
/**
 * 产品主图卡片
 * 居中对齐，图片自适应容器
 * 取消背景色，保持纯透明
 */
.image-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent; /* 取消灰色背景，保持透明 */
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/**
 * 产品图片样式
 * max-width/max-height: 100% 确保不超出容器
 * object-fit: contain 保持图片原始比例
 * border-radius 添加圆角
 */
.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 保持比例，完整显示 */
  border-radius: 0.75rem; /* 添加圆角 */
}

/* ---------- 6.2 产品参数卡片 ---------- */
/**
 * 产品参数卡片
 * 垂直布局，标题在上，参数网格在下
 * 增加左右内边距，让参数网格与卡片边缘有更多空间
 */
.specs-card {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2.25rem; /* 增加左右内边距 */
}

/**
 * 卡片标题样式
 * 图标 + 文字水平排列
 */
.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;      /* 图标与文字的间距 */
  font-size: 1.5rem;
  font-weight: 600;
  color: #9ca3af;   /* 浅灰色 - Tailwind gray-400 */
  margin: 0 0 0.5rem 0;
}

/**
 * 标题图标样式
 */
.title-icon {
  width: 1.75rem;  /* 28px */
  height: 1.75rem;
  color: #ec4899;  /* 玫粉色 */
}

/**
 * 参数网格
 * 2列布局，每行显示 2 个参数
 * 减小列间距，让内容更紧凑
 */
.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 0.5rem; /* 行间距 列间距 - 减小列间距 */
  flex: 1;
}

/**
 * 单个参数项
 * 垂直布局：参数名在上，参数值在下
 */
.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/**
 * 参数名称样式
 * 较小字号，浅灰色
 */
.spec-name {
  font-size: 0.9375rem; /* 15px */
  color: #9ca3af;       /* 浅灰色 */
  line-height: 1.4;
}

/**
 * 参数值样式
 * 略大字号，加粗，亮橙色
 */
.spec-value {
  font-size: 1.03125rem; /* 16.5px */
  font-weight: 600;
  color: #f97316;        /* 亮橙色 - Tailwind orange-500 */
  line-height: 1.4;
}

/* ---------- 6.3 优缺点卡片 ---------- */
/**
 * 优缺点卡片
 * 水平布局，左侧优点，右侧缺点，中间分隔线
 */
.pros-cons-card {
  display: flex;
  gap: 0.5rem;
  padding: 1.6rem; /* 增加左右内边距 */
}

/**
 * 优点/缺点区域
 * 各占一半宽度
 */
.pros-section,
.cons-section {
  flex: 1;
  min-width: 0; /* 防止内容溢出 */
}

/**
 * 中间分隔线
 * 1px 宽的半透明白色竖线
 */
.divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
  flex-shrink: 0; /* 不收缩 */
}

/**
 * 区块标题样式
 */
.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #9ca3af;
  margin: 0 0 0.75rem 0;
}

/**
 * 优点/缺点标题图标
 */
.pros-title .title-icon,
.cons-title .title-icon {
  width: 1.75rem;
  height: 1.75rem;
  color: #ec4899;
}

/**
 * 优点/缺点列表样式
 * 去除默认列表样式
 */
.pros-list,
.cons-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/**
 * 列表项样式
 * 图标 + 文字水平排列
 */
.pros-list li,
.cons-list li {
  display: flex;
  align-items: flex-start; /* 顶部对齐 */
  gap: 0.5rem;
  font-size: 1.03125rem;
  color: #9ca3af;
  line-height: 1.5;
}

/**
 * 勾选/叉号图标尺寸
 */
.check-icon,
.cross-icon {
  width: 1.125rem;  /* 18px */
  height: 1.125rem;
  flex-shrink: 0;    /* 不收缩 */
  margin-top: 0.125rem; /* 微调与文字的对齐 */
}

/**
 * 勾选图标颜色（优点）
 */
.check-icon {
  color: #ec4899; /* 玫粉色 */
}

/**
 * 叉号图标颜色（缺点）
 */
.cross-icon {
  color: #f97316; /* 亮橙色 */
}

/* ---------- 6.4 适合人群卡片 ---------- */
/**
 * 适合人群卡片
 * 垂直布局
 */
.audience-card {
  display: flex;
  flex-direction: column;
  padding: 1.6rem ; /* 增加左右内边距 */
  
}

/**
 * 适合人群描述文本
 */
.audience-text {
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.3;
  margin: 0;
}

/**
 * 高亮文本样式
 * 使用 :deep() 选择器穿透 scoped 样式
 * 用于 v-html 渲染的高亮内容
 */
.audience-text :deep(.highlight) {
  color: #f97316;   /* 亮橙色 */
  font-weight: 600;
}

/* ==================== 7. 底部 Footer ==================== */
/**
 * 底部 Footer
 * 绝对定位在左下角
 * z-index: 10 确保在最上层，不被其他元素遮挡
 */
.footer {
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
}

/**
 * Footer 图标样式
 */
.footer-icon {
  width: 1.5rem;  /* 24px */
  height: 1.5rem;
  color: #ec4899;
}

/**
 * Footer 文字样式
 */
.footer-text {
  font-size: 1.25rem; /* 20px */
  color: #9ca3af;
}

/* ==================== 8. 响应式适配 ==================== */
/**
 * 响应式断点：1024px 以下（平板设备）
 * 整体缩小字号和间距
 */
@media (max-width: 1024px) {
  .product-card-wrapper {
    padding: 1rem;
  }

  /* 品牌和型号字号缩小 */
  .brand, .model {
    font-size: 2rem;
  }

  /* 价格标签缩小 */
  .price-tag {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  /* 卡片内边距调整 */
  .card {
    padding: 1rem;
  }

  /* 卡片标题字号缩小 */
  .card-title {
    font-size: 1.25rem;
  }

  /* 参数名字号缩小 */
  .spec-name {
    font-size: 0.75rem; /* 12px */
  }

  /* 参数值字号缩小 */
  .spec-value {
    font-size: 0.875rem; /* 14px */
  }

  /* 区块标题字号缩小 */
  .section-title {
    font-size: 1.25rem;
  }

  /* 优缺点列表项字号缩小 */
  .pros-list li,
  .cons-list li {
    font-size: 0.875rem;
  }

  /* 适合人群文本字号缩小 */
  .audience-text {
    font-size: 0.875rem;
  }
}

/* ==================== 9. 交互动效 ==================== */
/*
  动效设计原则：
  1. 使用 CSS transform 实现位移和缩放（GPU 加速，性能更好）
  2. transition 时长控制在 200-300ms，响应迅速且流畅
  3. 微妙的阴影变化增加层次感
  4. 避免过度动画，保持专业简洁
*/

/* ---------- 9.1 卡片悬停效果 ---------- */
/**
 * 卡片悬停效果
 * - 轻微上浮（translateY）
 * - 阴影增强，营造浮起感
 * - 边框发光效果
 */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(236, 72, 153, 0.1);
  border-color: rgba(236, 72, 153, 0.2);
}

/* 产品主图卡片 - 纯放大效果，无阴影 */
.image-card:hover {
  transform: scale(1.02);
  box-shadow: none;
  border-color: transparent;
}

/* ---------- 9.2 品牌和型号悬停效果 ---------- */
/**
 * 品牌名称悬停
 * - 轻微缩放
 * - 颜色渐变过渡
 */
.brand {
  transition: transform 0.25s ease, color 0.25s ease;
  cursor: default;
}

.brand:hover {
  transform: scale(1.05);
  color: #f472b6; /* pink-400 更亮的粉色 */
}

/**
 * 产品型号悬停
 * - 轻微缩放
 * - 颜色渐变过渡
 */
.model {
  transition: transform 0.25s ease, color 0.25s ease;
  cursor: default;
}

.model:hover {
  transform: scale(1.05);
  color: #fb923c; /* orange-400 更亮的橙色 */
}

/* ---------- 9.3 价格标签悬停效果 ---------- */
/**
 * 价格标签悬停
 * - 缩放效果
 * - 阴影发光
 */
.price-tag {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: default;
}

.price-tag:hover {
  transform: scale(1.08);
}

.price-tag.regular:hover {
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.4);
}

.price-tag.sale:hover {
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

/* ---------- 9.4 参数项悬停效果 ---------- */
/**
 * 单个参数项悬停
 * - 背景高亮
 * - 参数值颜色变化
 */
.spec-item {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.spec-item:hover {
  background-color: rgba(236, 72, 153, 0.08);
}

.spec-item:hover .spec-value {
  color: #fb923c; /* 更亮的橙色 */
}

/* ---------- 9.5 优缺点列表项悬停效果 ---------- */
/**
 * 列表项悬停
 * - 右移效果
 * - 图标颜色变化
 */
.pros-list li,
.cons-list li {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  border-radius: 0.5rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.pros-list li:hover {
  transform: translateX(6px);
  background-color: rgba(236, 72, 153, 0.08);
}

.pros-list li:hover .check-icon {
  color: #f472b6; /* pink-400 */
}

.cons-list li:hover {
  transform: translateX(6px);
  background-color: rgba(249, 115, 22, 0.08);
}

.cons-list li:hover .cross-icon {
  color: #fb923c; /* orange-400 */
}

/* ---------- 9.6 产品图片悬停效果 ---------- */
/**
 * 产品图片悬停
 * - 轻微缩放
 * - 阴影效果
 */
.product-image {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.product-image:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

/* ---------- 9.7 高亮文本悬停效果 ---------- */
/**
 * 高亮文本悬停
 * - 颜色变化
 * - 下划线效果
 */
.audience-text :deep(.highlight) {
  transition: color 0.2s ease;
  cursor: default;
}

.audience-text :deep(.highlight:hover) {
  color: #f97316;
}

/* ---------- 9.8 Footer 悬停效果 ---------- */
/**
 * Footer 悬停
 * - 整体轻微上浮
 */
.footer {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.footer:hover {
  transform: translateY(-2px);
}

.footer-icon {
  transition: transform 0.3s ease;
}

.footer:hover .footer-icon {
  transform: rotate(15deg) scale(1.1);
}

/* ---------- 9.9 入场动画（方向感知） ---------- */
/**
 * 卡片入场动画
 * 根据切换方向决定淡入方向：
 * - direction-next: 从右侧依次淡入（左列先，右列后）
 * - direction-prev: 从左侧依次淡入（右列先，左列后）
 */

/* 向右切换 - 从右侧淡入 */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 向左切换 - 从左侧淡入 */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/**
 * 向右切换时的动画顺序
 * 左列（主图、优缺点）先出现，右列（参数、适合人群）后出现
 */
.direction-next .image-card {
  animation: fadeInRight 0.5s ease-out 0.1s both;
}

.direction-next .specs-card {
  animation: fadeInRight 0.5s ease-out 0.25s both;
}

.direction-next .pros-cons-card {
  animation: fadeInRight 0.5s ease-out 0.15s both;
}

.direction-next .audience-card {
  animation: fadeInRight 0.5s ease-out 0.35s both;
}

/**
 * 向左切换时的动画顺序
 * 右列（参数、适合人群）先出现，左列（主图、优缺点）后出现
 */
.direction-prev .image-card {
  animation: fadeInLeft 0.5s ease-out 0.25s both;
}

.direction-prev .specs-card {
  animation: fadeInLeft 0.5s ease-out 0.1s both;
}

.direction-prev .pros-cons-card {
  animation: fadeInLeft 0.5s ease-out 0.35s both;
}

.direction-prev .audience-card {
  animation: fadeInLeft 0.5s ease-out 0.15s both;
}
</style>
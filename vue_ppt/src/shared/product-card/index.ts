// 产品卡片组件导出
export { default as ProductCard } from './ProductCard.vue'
export { default as ProductSlide } from './ProductSlide.vue'
export { default as XidijiShowcase1500Card } from './cards/XidijiShowcase1500Card.vue'
export { default as XidijiShowcase2000Card } from './cards/XidijiShowcase2000Card.vue'
export { default as XidijiShowcase3000Card } from './cards/XidijiShowcase3000Card.vue'
export { default as SaodijiShowcase1000Card } from './cards/SaodijiShowcase1000Card.vue'
export { default as SaodijiShowcase3000Card } from './cards/SaodijiShowcase3000Card.vue'
export { default as SaodijiShowcase4500Card } from './cards/SaodijiShowcase4500Card.vue'

// 基础组件导出
export { default as BaseProductCard } from './components/BaseProductCard.vue'
export { default as SpecGrid } from './components/SpecGrid.vue'
export { default as ProsConsSection } from './components/ProsConsSection.vue'
export { default as AudienceCard } from './components/AudienceCard.vue'

// 类型导出
export type {
  Product,
  TVProduct,
  XidijiProduct,
  SaodijiProduct,
  BaseProduct,
  ProductSpec,
  ProductPrice,
  ProsConsItem,
  ProductCardConfig,
  RecommendLevel
} from './types'

// 类型守卫导出
export { isTVProduct, isXidijiProduct, isSaodijiProduct } from './types'

// 配置系统导出
export type { ProductConfig, ProductType, SpecTemplateItem } from './config'
export { getProductConfig, getAllProductTypes, registerProductConfig, configRegistry } from './config'
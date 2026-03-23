// 产品卡片组件导出
export { default as ProductCard } from './ProductCard.vue'
export { default as ProductSlide } from './ProductSlide.vue'
export { default as XidijiProductCard } from './cards/XidijiProductCard.vue'

// 类型导出
export type {
  Product,
  TVProduct,
  XidijiProduct,
  BaseProduct,
  ProductSpec,
  ProductPrice,
  ProsConsItem,
  ProductCardConfig,
  RecommendLevel
} from './types'

// 类型守卫导出
export { isTVProduct, isXidijiProduct } from './types'

// 配置系统导出
export type { ProductConfig, ProductType, SpecTemplateItem } from './config'
export { getProductConfig, getAllProductTypes, registerProductConfig, configRegistry } from './config'
/**
 * 产品展示路由参数定义与验证
 *
 * 设计理念：
 * 1. 配置驱动 - 价位分档可配置
 * 2. 类型安全 - TypeScript 联合类型
 * 3. 易扩展 - 新增产品只需添加配置
 */

// 价位分档项
export interface PriceRangeItem {
  /** 价位标识键 */
  key: string
  /** 显示标签 */
  label: string
  /** 最低价格 */
  min: number
  /** 最高价格（Infinity 表示无上限） */
  max: number
}

// 各产品类型的价位分档定义
export const PRICE_RANGES: Record<string, PriceRangeItem[]> = {
  xidiji: [
    { key: '1500', label: '1500-2000元', min: 1500, max: 2000 },
    { key: '2000', label: '2000-3000元', min: 2000, max: 3000 },
    { key: '3000', label: '3000元以上', min: 3000, max: Infinity }
  ],
  saodiji: [
    { key: '1000', label: '1000-3000元', min: 1000, max: 3000 },
    { key: '3000', label: '3000-4500元', min: 3000, max: 4500 },
    { key: '4500', label: '4500元以上', min: 4500, max: Infinity }
  ]
}

// 支持的产品类型（从 PRICE_RANGES 自动推导）
export type SupportedProductType = keyof typeof PRICE_RANGES

// 获取所有支持的产品类型
export const VALID_PRODUCT_TYPES: SupportedProductType[] = Object.keys(PRICE_RANGES) as SupportedProductType[]

/**
 * 验证产品类型是否有效
 */
export function isValidProductType(productType: string): productType is SupportedProductType {
  return VALID_PRODUCT_TYPES.includes(productType as SupportedProductType)
}

/**
 * 验证价位分档是否有效
 */
export function isValidPriceRange(productType: string, priceRange: string): boolean {
  if (!isValidProductType(productType)) {
    return false
  }
  const ranges = PRICE_RANGES[productType]
  return ranges.some(r => r.key === priceRange)
}

/**
 * 获取价位分档信息
 */
export function getPriceRangeInfo(productType: SupportedProductType, priceRange: string): PriceRangeItem | undefined {
  return PRICE_RANGES[productType]?.find(r => r.key === priceRange)
}

/**
 * 获取产品类型的第一个价位分档（用于默认重定向）
 */
export function getDefaultPriceRange(productType: SupportedProductType): string {
  return PRICE_RANGES[productType]?.[0]?.key || ''
}

/**
 * 获取产品类型的所有价位分档
 */
export function getPriceRangesForType(productType: SupportedProductType): PriceRangeItem[] {
  return PRICE_RANGES[productType] || []
}

/**
 * 注册新的产品类型（扩展接口）
 */
export function registerProductType(
  productType: string,
  priceRanges: PriceRangeItem[]
): void {
  PRICE_RANGES[productType] = priceRanges
}

/**
 * 获取旧路由到新路由的重定向映射
 */
export function getLegacyRedirects(): Record<string, string> {
  const redirects: Record<string, string> = {}

  for (const [productType, ranges] of Object.entries(PRICE_RANGES)) {
    for (const range of ranges) {
      // 生成旧路由格式到新路由格式的映射
      const legacyPath = `/${productType}-showcase-${range.key}`
      const newPath = `/product-showcase/${productType}/${range.key}`
      redirects[legacyPath] = newPath
    }
  }

  return redirects
}
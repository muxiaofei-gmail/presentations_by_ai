/**
 * 导航配置统一生成
 *
 * 从路由配置自动生成 Home.vue 导航项，避免手动同步维护
 */

import { PRICE_RANGES, getPriceRangeInfo } from './product-showcase'
import type { SupportedProductType } from './product-showcase'
import { getProductConfig } from '@/shared/product-card/config'
import type { ProductType } from '@/shared/product-card/config'

// 展示页导航项
export interface ShowcaseNavItem {
  productType: SupportedProductType
  priceRange: string
  route: string
  title: string
  description: string
}

/**
 * 自动生成所有产品展示页的导航项
 */
export function generateShowcaseNavItems(): ShowcaseNavItem[] {
  const items: ShowcaseNavItem[] = []

  for (const [productType, ranges] of Object.entries(PRICE_RANGES)) {
    const config = getProductConfig(productType as ProductType)
    const typeName = config?.typeName || productType

    for (const range of ranges) {
      items.push({
        productType: productType as SupportedProductType,
        priceRange: range.key,
        route: `/product-showcase/${productType}/${range.key}`,
        title: `${typeName}产品展示 ${range.label}`,
        description: `产品卡片模板演示 - ${typeName}产品展示`
      })
    }
  }

  return items
}

/**
 * 获取产品展示分类的导航项（用于 Home.vue 的 product-showcase 分类）
 */
export function getProductShowcaseCategory() {
  const items = generateShowcaseNavItems()

  return {
    id: 'product-showcase',
    name: '产品卡片模板',
    expanded: false,
    presentations: [
      // 电视产品展示（无价位分档，放在第一位）
      {
        id: 'TV-showcase',
        title: 'TV-showcase',
        description: '产品卡片模板演示 - 电视/大家电产品展示（30款产品）',
        route: '/TV-showcase'
      },
      // 其他产品展示（有价位分档）
      ...items.map(item => ({
        id: `${item.productType}-${item.priceRange}`,
        title: item.title,
        description: item.description,
        route: item.route
      }))
    ]
  }
}
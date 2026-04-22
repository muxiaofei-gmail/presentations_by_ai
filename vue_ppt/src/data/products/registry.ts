/**
 * 产品数据注册与加载
 *
 * 设计理念：
 * 1. 统一数据源 - 所有产品数据集中管理
 * 2. 懒加载支持 - 动态导入减少初始加载
 * 3. 类型安全 - TypeScript 类型约束
 */

import type { Product, XidijiProduct, SaodijiProduct } from '@/shared/product-card/types'
import type { SupportedProductType } from '@/router/routes/product-showcase'

// 产品数据加载器类型
type ProductLoader = () => Promise<Product[]>

// 同步产品数据导入（立即加载）
import { products as xidiji1500 } from './xidiji/products-1500'
import { products as xidiji2000 } from './xidiji/products-2000'
import { products as xidiji3000 } from './xidiji/products-3000'
import { products as saodiji1000 } from './saodiji/products-1000'
import { products as saodiji3000 } from './saodiji/products-3000'
import { products as saodiji4500 } from './saodiji/products-4500'

// 产品数据映射表（同步）
const productDataMap: Record<SupportedProductType, Record<string, Product[]>> = {
  xidiji: {
    '1500': xidiji1500,
    '2000': xidiji2000,
    '3000': xidiji3000
  },
  saodiji: {
    '1000': saodiji1000,
    '3000': saodiji3000,
    '4500': saodiji4500
  }
}

// 产品数据加载器映射（懒加载）
const productLoaders: Record<SupportedProductType, Record<string, ProductLoader>> = {
  xidiji: {
    '1500': () => import('./xidiji/products-1500').then(m => m.products),
    '2000': () => import('./xidiji/products-2000').then(m => m.products),
    '3000': () => import('./xidiji/products-3000').then(m => m.products)
  },
  saodiji: {
    '1000': () => import('./saodiji/products-1000').then(m => m.products),
    '3000': () => import('./saodiji/products-3000').then(m => m.products),
    '4500': () => import('./saodiji/products-4500').then(m => m.products)
  }
}

/**
 * 同步获取产品数据
 */
export function getProductsSync(productType: SupportedProductType, priceRange: string): Product[] {
  return productDataMap[productType]?.[priceRange] || []
}

/**
 * 异步获取产品数据（懒加载）
 */
export async function getProducts(productType: SupportedProductType, priceRange: string): Promise<Product[]> {
  const loader = productLoaders[productType]?.[priceRange]
  if (!loader) {
    console.warn(`No products found for ${productType}/${priceRange}`)
    return []
  }
  return loader()
}

/**
 * 检查产品类型是否有对应价位的数据
 */
export function hasProducts(productType: SupportedProductType, priceRange: string): boolean {
  return !!productLoaders[productType]?.[priceRange]
}

/**
 * 注册新产品数据（扩展接口）
 */
export function registerProducts(
  productType: string,
  priceRange: string,
  loader: ProductLoader,
  data?: Product[]
): void {
  // 注册懒加载器
  if (!productLoaders[productType as SupportedProductType]) {
    productLoaders[productType as SupportedProductType] = {}
  }
  productLoaders[productType as SupportedProductType][priceRange] = loader

  // 注册同步数据（可选）
  if (data) {
    if (!productDataMap[productType as SupportedProductType]) {
      productDataMap[productType as SupportedProductType] = {}
    }
    productDataMap[productType as SupportedProductType][priceRange] = data
  }
}
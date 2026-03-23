/**
 * 产品卡片类型定义
 * 支持多种产品类型的模块化设计
 *
 * 设计原则：
 * 1. 基础接口定义所有产品共享的属性
 * 2. 通过 type 字段区分产品类型
 * 3. specs 使用通用结构，具体内容由配置文件定义
 */

import type { ProductType } from './config'

/** 产品参数项 */
export interface ProductSpec {
  /** 参数名称 */
  name: string
  /** 参数值 */
  value: string
  /** 是否重要参数（用于高亮显示） */
  important?: boolean
}

/** 优缺点项 */
export interface ProsConsItem {
  /** 内容文本 */
  text: string
  /** 是否高亮显示 */
  highlight?: boolean
}

/** 产品价格信息 */
export interface ProductPrice {
  /** 日常价 */
  regularPrice?: number
  /** 活动价 */
  salePrice?: number
  /** 货币单位，默认 CNY */
  currency?: string
}

/** 推荐指数 */
export type RecommendLevel = 1 | 2 | 3 | 4 | 5

/**
 * 基础产品接口
 * 所有产品类型共享的属性
 */
export interface BaseProduct {
  /** 产品ID */
  id: string
  /** 产品类型 */
  type: ProductType
  /** 品牌名称 */
  brand: string
  /** 产品型号 */
  model: string
  /** 产品图片URL */
  imageUrl: string
  /** 价格信息 */
  price: ProductPrice
  /** 产品参数列表 */
  specs: ProductSpec[]
  /** 优点列表 */
  pros: ProsConsItem[]
  /** 缺点列表 */
  cons: ProsConsItem[]
  /** 适合人群描述 (支持Markdown **高亮** 语法) */
  targetAudience: string
  /** 底部来源标识 */
  source?: string
  /** 推荐指数 (1-5星) */
  recommendLevel?: RecommendLevel
}

/**
 * 电视产品类型
 * 保持与现有数据结构的兼容性
 */
export interface TVProduct extends BaseProduct {
  type: 'tv'
}

/**
 * 洗地机产品类型
 */
export interface XidijiProduct extends BaseProduct {
  type: 'xidiji'
}

/**
 * 产品联合类型
 * 支持所有已注册的产品类型
 */
export type Product = TVProduct | XidijiProduct

/** 产品卡片配置 */
export interface ProductCardConfig {
  /** 是否显示价格 */
  showPrice?: boolean
  /** 自定义类名 */
  customClass?: string
}

/**
 * 类型守卫：判断是否为电视产品
 */
export function isTVProduct(product: Product): product is TVProduct {
  return product.type === 'tv'
}

/**
 * 类型守卫：判断是否为洗地机产品
 */
export function isXidijiProduct(product: Product): product is XidijiProduct {
  return product.type === 'xidiji'
}
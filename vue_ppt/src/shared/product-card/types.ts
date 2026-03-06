/**
 * 产品卡片类型定义
 * 基于 2x2 网格布局的产品展示模板
 */

/** 产品参数项 */
export interface ProductSpec {
  /** 参数名称 */
  name: string
  /** 参数值 */
  value: string
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

/** 产品数据 */
export interface Product {
  /** 产品ID */
  id: string
  /** 品牌名称 */
  brand: string
  /** 产品型号 */
  model: string
  /** 产品图片URL */
  imageUrl: string
  /** 价格信息 */
  price: ProductPrice
  /** 产品参数列表 (8项) */
  specs: ProductSpec[]
  /** 优点列表 */
  pros: ProsConsItem[]
  /** 缺点列表 */
  cons: ProsConsItem[]
  /** 适合人群描述 (支持HTML高亮) */
  targetAudience: string
  /** 底部来源标识 */
  source?: string
}

/** 产品卡片配置 */
export interface ProductCardConfig {
  /** 是否显示价格 */
  showPrice?: boolean
  /** 自定义类名 */
  customClass?: string
}
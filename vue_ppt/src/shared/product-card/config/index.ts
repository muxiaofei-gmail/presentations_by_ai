/**
 * 产品卡片配置系统
 *
 * 设计理念：
 * 1. 配置驱动 - 每种产品类型有独立配置
 * 2. 类型安全 - TypeScript 联合类型
 * 3. 易扩展 - 新增产品只需添加配置
 */

// 产品类型定义
export type ProductType = 'tv' | 'xidiji' | 'saodiji'

// 配置接口
export interface ProductConfig {
  /** 产品类型标识 */
  type: ProductType
  /** 产品类型名称（中文） */
  typeName: string
  /** 参数模板定义 */
  specsTemplate: SpecTemplateItem[]
  /** 是否显示价格 */
  showPrice?: boolean
  /** 主题配置（可选，默认使用全局配色） */
  theme?: {
    primaryColor?: string
    accentColor?: string
  }
}

// 参数模板项
export interface SpecTemplateItem {
  /** 参数键名 */
  key: string
  /** 参数显示名称 */
  name: string
  /** 单位（可选） */
  unit?: string
  /** 是否重要参数（可选，用于高亮显示） */
  important?: boolean
}

// 配置注册表
const configRegistry: Record<ProductType, ProductConfig> = {
  // 电视产品配置
  tv: {
    type: 'tv',
    typeName: '电视',
    specsTemplate: [
      { key: 'peakBrightness', name: '峰值亮度', unit: '尼特' },
      { key: 'backlightZones', name: '背光分区数量' },
      { key: 'colorGamut', name: '色域范围' },
      { key: 'refreshRate', name: '刷新率' },
      { key: 'memory', name: '内存组合' },
      { key: 'speaker', name: '音响' },
      { key: 'interface', name: '接口规格' },
      { key: 'hasAd', name: '是否有开机广告' }
    ]
  },

  // 洗地机产品配置
  xidiji: {
    type: 'xidiji',
    typeName: '洗地机',
    specsTemplate: [
      { key: 'suction', name: '吸力', unit: 'Pa', important: true },
      { key: 'antiWrap', name: '防缠绕技术', important: true },
      { key: 'runtime', name: '续航时间', unit: '分钟' },
      { key: 'dryTime', name: '烘干时间', unit: '分钟', important: true },
      { key: 'layFlat', name: '平躺角度', unit: '°' },
      { key: 'bodyHeight', name: '机身厚度', unit: 'cm' },
      { key: 'edgeClean', name: '贴边设计' },
      { key: 'special', name: '特殊功能' }
    ]
  },

  // 扫地机器人产品配置
  saodiji: {
    type: 'saodiji',
    typeName: '扫地机器人',
    specsTemplate: [
      { key: 'navigation', name: '导航方式', important: true },
      { key: 'suction', name: '吸力', unit: 'Pa' },
      { key: 'avoidance', name: '避障能力', important: true },
      { key: 'edgeCoverage', name: '边角覆盖', important: true },
      { key: 'antiWrap', name: '防缠绕', important: true },
      { key: 'baseStation', name: '基站功能' }
    ]
  }
}

/**
 * 获取产品配置
 */
export function getProductConfig(type: ProductType): ProductConfig {
  return configRegistry[type]
}

/**
 * 获取所有产品类型
 */
export function getAllProductTypes(): ProductType[] {
  return Object.keys(configRegistry) as ProductType[]
}

/**
 * 注册新的产品配置
 * 用于后续扩展其他产品类型
 */
export function registerProductConfig(config: ProductConfig): void {
  configRegistry[config.type] = config
}

export { configRegistry }
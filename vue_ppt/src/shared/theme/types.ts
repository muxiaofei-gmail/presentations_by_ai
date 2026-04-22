/**
 * 主题 ID 类型
 * - 'light': 原有明亮风格 (Daylight)
 * - 'dark': 原有深色风格 (Midnight)
 * - 'cinematic': Cinematic Editorial 风格 (新增)
 */
export type ThemeId = 'light' | 'dark' | 'cinematic' | (string & {})

/**
 * 基础主题 Token（原有风格使用）
 */
export type BaseThemeToken =
  | 'surface'
  | 'surface-muted'
  | 'text-primary'
  | 'text-muted'
  | 'accent'
  | 'border'
  | 'highlight'

/**
 * Cinematic Editorial 专属 Token
 * 多层级 Surface 系统 + 三色体系 + 边框/轮廓系统
 */
export type CinematicToken =
  // Surface 层级系统（深度层级）
  | 'surface_container_lowest'    // #000000 - 最底层
  | 'surface_container_low'       // #0c1324 - 低层级
  | 'surface_container'           // #12192b - 标准层级
  | 'surface_container_high'      // #1d253b - 高层级
  | 'surface_container_highest'   // #2d3548 - 最高层级
  | 'surface_bright'              // 用于玻璃拟态
  // 色彩体系
  | 'primary'                     // #FF8A00 - 主色
  | 'primary_container'           // 用于渐变终点
  | 'secondary'                   // #002fa7 - 辅色
  | 'tertiary'                    // #00D4FF - 第三色
  // 文字/图标颜色
  | 'on_primary'                  // #542a00 - primary 上的文字
  | 'on_secondary'                // secondary 上的文字
  | 'on_tertiary'                 // tertiary 上的文字
  | 'on_surface'                  // #e0e5fb - surface 上的文字
  | 'on_surface_variant'          // #a5aabf - 次级文字
  // 边框/轮廓系统
  | 'outline'                     // #424859 - 标准轮廓
  | 'outline_variant'             // 轮廓变体（用于 Ghost Border）
  // 产品卡片专用
  | 'accent-primary'              // 卡片主强调色
  | 'accent-secondary'            // 卡片次强调色
  | 'card-border-color'           // 卡片边框色（No-Line 规则）
  | 'card-background'             // 卡片背景色

/**
 * 完整主题 Token 类型（所有风格共用）
 */
export type ThemeToken = BaseThemeToken | CinematicToken

/**
 * 主题定义接口
 */
export interface ThemeDefinition {
  id: ThemeId
  name: string
  description: string
  tokens: Partial<Record<ThemeToken, string>>
  /** 是否使用 Manrope 字体 */
  useManrope?: boolean
}

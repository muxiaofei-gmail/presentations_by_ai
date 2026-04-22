import type { ThemeDefinition } from './types'

/**
 * RGB 颜色值转换辅助函数
 * 输入格式: '#RRGGBB' -> 输出格式: 'R G B' (用于 CSS rgb() 函数)
 */
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return hex
  return `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
}

export const themeRegistry: ThemeDefinition[] = [
  // ==================== 原有风格：明亮主题 ====================
  {
    id: 'light',
    name: 'Daylight',
    description: '明亮配色，适合光线充足的演示环境。',
    tokens: {
      surface: '255 255 255',
      'surface-muted': '248 250 252',
      'text-primary': '15 23 42',
      'text-muted': '71 85 105',
      accent: '79 70 229',
      border: '148 163 184',
      highlight: '252 211 77',
      // 为原有风格也定义 cinematic token 的兼容值
      'surface_container': '248 250 252',
      'surface_container_low': '241 245 249',
      'surface_container_high': '226 232 240',
      'primary': '79 70 229',
      'on_surface': '15 23 42',
      'on_surface_variant': '71 85 105',
      'accent-primary': '236 72 153',   // pink-500
      'accent-secondary': '249 115 22', // orange-500
      'card-border-color': '255 255 255', // 8% opacity 在 CSS 中设置
      'card-background': '220 220 220'
    }
  },
  // ==================== 原有风格：深色主题 ====================
  {
    id: 'dark',
    name: 'Midnight',
    description: '深色配色，适用于暗房或灯光昏暗的场景。',
    tokens: {
      surface: '17 24 39',
      'surface-muted': '30 41 59',
      'text-primary': '226 232 240',
      'text-muted': '148 163 184',
      accent: '129 140 248',
      border: '71 85 105',
      highlight: '253 224 71',
      // 为原有风格也定义 cinematic token 的兼容值
      'surface_container': '30 41 59',
      'surface_container_low': '24 32 48',
      'surface_container_high': '37 48 63',
      'primary': '129 140 248',
      'on_surface': '226 232 240',
      'on_surface_variant': '148 163 184',
      'accent-primary': '236 72 153',   // pink-500
      'accent-secondary': '249 115 22', // orange-500
      'card-border-color': '255 255 255', // 8% opacity 在 CSS 中设置
      'card-background': '220 220 220'
    }
  },
  // ==================== 新增风格：Cinematic Editorial ====================
  {
    id: 'cinematic',
    name: 'Cinematic Editorial',
    description: '电影编辑风格，深邃的暗色主题，无边框设计，适合产品画廊展示。',
    useManrope: true,
    tokens: {
      // Surface 层级系统 - 深邃的暗色调
      surface: hexToRgb('#080e1d'),               // 基础背景
      'surface-muted': hexToRgb('#0c1324'),       // 次级背景
      'surface_container_lowest': hexToRgb('#000000'),  // 最底层
      'surface_container_low': hexToRgb('#0c1324'),     // 低层级
      'surface_container': hexToRgb('#12192b'),         // 标准层级（卡片）
      'surface_container_high': hexToRgb('#1d253b'),    // 高层级
      'surface_container_highest': hexToRgb('#2d3548'), // 最高层级
      'surface_bright': hexToRgb('#3d4a5c'),            // 玻璃拟态用

      // 三色体系
      primary: hexToRgb('#FF8A00'),             // 主色 - 橙色
      'primary_container': hexToRgb('#ff9f4d'), // 渐变终点
      secondary: hexToRgb('#002fa7'),           // 辅色 - 蓝色
      tertiary: hexToRgb('#00D4FF'),            // 第三色 - 青色

      // 文字/图标颜色
      'on_primary': hexToRgb('#542a00'),        // primary 上的深色文字
      'on_secondary': hexToRgb('#ffffff'),      // secondary 上的白色文字
      'on_tertiary': hexToRgb('#003d4f'),       // tertiary 上的深色文字
      'on_surface': hexToRgb('#e0e5fb'),        // 主文字色
      'on_surface_variant': hexToRgb('#a5aabf'), // 次级文字

      // 边框/轮廓系统
      outline: hexToRgb('#424859'),
      'outline_variant': hexToRgb('#424859'),   // 用于 Ghost Border (15% opacity)

      // 文本相关（兼容原有 token）
      'text-primary': hexToRgb('#e0e5fb'),
      'text-muted': hexToRgb('#a5aabf'),
      accent: hexToRgb('#FF8A00'),
      border: hexToRgb('#424859'),
      highlight: hexToRgb('#00D4FF'),

      // 产品卡片专用 - No-Line 规则
      'accent-primary': hexToRgb('#FF8A00'),    // 主强调色改为橙色
      'accent-secondary': hexToRgb('#002fa7'),  // 次强调色改为蓝色
      'card-border-color': '0 0 0',             // transparent (No-Line)
      'card-background': hexToRgb('#12192b')    // 使用 surface_container
    }
  }
]

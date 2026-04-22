/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 基础颜色（原有风格）
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-muted': 'rgb(var(--surface-muted) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        highlight: 'rgb(var(--highlight) / <alpha-value>)',
        // Cinematic Editorial Surface 层级
        'surface-lowest': 'rgb(var(--surface_container_lowest) / <alpha-value>)',
        'surface-low': 'rgb(var(--surface_container_low) / <alpha-value>)',
        'surface-container': 'rgb(var(--surface_container) / <alpha-value>)',
        'surface-high': 'rgb(var(--surface_container_high) / <alpha-value>)',
        'surface-highest': 'rgb(var(--surface_container_highest) / <alpha-value>)',
        'surface-bright': 'rgb(var(--surface_bright) / <alpha-value>)',
        // Cinematic Editorial 色彩体系
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-container': 'rgb(var(--primary_container) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--tertiary) / <alpha-value>)',
        // Cinematic Editorial 文字颜色
        'on-primary': 'rgb(var(--on_primary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--on_secondary) / <alpha-value>)',
        'on-tertiary': 'rgb(var(--on_tertiary) / <alpha-value>)',
        'on-surface': 'rgb(var(--on_surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--on_surface_variant) / <alpha-value>)',
        // Cinematic Editorial 边框/轮廓
        outline: 'rgb(var(--outline) / <alpha-value>)',
        'outline-variant': 'rgb(var(--outline_variant) / <alpha-value>)',
        // 产品卡片专用
        'accent-primary': 'rgb(var(--accent-primary) / <alpha-value>)',
        'accent-secondary': 'rgb(var(--accent-secondary) / <alpha-value>)',
        'card-border': 'rgb(var(--card-border-color) / <alpha-value>)',
        'card-bg': 'rgb(var(--card-background) / <alpha-value>)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(var(--accent) / 0.35)',
        // Cinematic Editorial Ambient Shadow
        ambient: '0 32px 32px rgb(var(--on_surface) / 0.06)',
        // 玻璃拟态阴影
        glass: '0 40px 120px rgba(0, 0, 0, 0.35)'
      },
      fontFamily: {
        // Manrope 字体（Cinematic Editorial 专用）
        manrope: ['Manrope', 'system-ui', 'sans-serif']
      },
      backdropBlur: {
        glass: '20px'
      }
    }
  },
  plugins: []
}

import { computed, inject, provide, reactive, readonly, watch } from 'vue'
import type { ComputedRef, DeepReadonly } from 'vue'

import type { BackgroundModuleMeta } from '../backgrounds/types'
import type { LocaleCode, LocaleMeta } from '../i18n/types'
import type { ThemeDefinition, ThemeId } from '../theme/types'
import { themeRegistry } from '../theme/themes'
import { applyThemeToDocument } from '../theme/apply-theme'

const PresentationContextSymbol = Symbol('PresentationContext')

const STORAGE_PREFIX = 'ppt-preferences'
const STORAGE_VERSION = 'v1'

const createStorageKey = (contextKey?: string) =>
  `${STORAGE_PREFIX}:${STORAGE_VERSION}:${contextKey ?? 'global'}`

const isBrowser = typeof window !== 'undefined'

export interface PresentationPreferences {
  backgroundId: string
  locale: LocaleCode
  themeId: ThemeId
}

export interface PresentationContext {
  state: DeepReadonly<PresentationPreferences>
  backgrounds: BackgroundModuleMeta[]
  locales: LocaleMeta[]
  themes: ThemeDefinition[]
  activeBackground: ComputedRef<BackgroundModuleMeta | undefined>
  activeLocale: ComputedRef<LocaleMeta | undefined>
  activeTheme: ComputedRef<ThemeDefinition | undefined>
  setBackground(backgroundId: string): void
  setLocale(locale: LocaleCode): void
  setTheme(themeId: ThemeId): void
  resetToDefaults(): void
}

interface CreatePresentationContextOptions {
  defaults: Partial<PresentationPreferences>
  backgrounds: BackgroundModuleMeta[]
  locales: LocaleMeta[]
  themes?: ThemeDefinition[]
  contextKey?: string
  persist?: boolean
}

const normalizeLocale = (code: LocaleCode, locales: LocaleMeta[], fallback: LocaleCode): LocaleCode => {
  const match = locales.find(locale => locale.code === code)
  if (match) return match.code
  const fallbackLocale = locales.find(locale => locale.code === fallback)
  return fallbackLocale?.code ?? locales[0]?.code ?? code
}

const normalizeBackground = (id: string, backgrounds: BackgroundModuleMeta[], fallback: string) => {
  const match = backgrounds.find(background => background.id === id)
  if (match) return match.id
  return backgrounds[0]?.id ?? fallback
}

const normalizeTheme = (id: ThemeId, themes: ThemeDefinition[], fallback: ThemeId): ThemeId => {
  const match = themes.find(theme => theme.id === id)
  if (match) return match.id
  const fallbackTheme = themes.find(theme => theme.id === fallback)
  return fallbackTheme?.id ?? themes[0]?.id ?? 'dark'
}

const applyLocaleMeta = (meta: LocaleMeta | undefined) => {
  if (!isBrowser) return
  const root = document.documentElement
  if (meta) {
    root.lang = meta.code
    root.dir = meta.direction ?? 'ltr'
  } else {
    root.lang = ''
    root.dir = 'ltr'
  }
}

export const createPresentationContext = (
  options: CreatePresentationContextOptions
): PresentationContext => {
  const shouldPersist = options.persist !== false
  const storageKey = shouldPersist ? createStorageKey(options.contextKey) : null

  const backgroundsMap = new Map(options.backgrounds.map(background => [background.id, background]))
  const themes = options.themes ?? themeRegistry
  const themesMap = new Map(themes.map(theme => [theme.id, theme]))

  const defaults: PresentationPreferences = {
    backgroundId: normalizeBackground(
      options.defaults.backgroundId ?? 'soft-mesh',
      options.backgrounds,
      options.defaults.backgroundId ?? 'soft-mesh'
    ),
    locale: normalizeLocale(
      options.defaults.locale ?? 'zh-Hans',
      options.locales,
      options.defaults.locale ?? 'zh-Hans'
    ),
    themeId: normalizeTheme(
      options.defaults.themeId ?? 'dark',
      themes,
      options.defaults.themeId ?? 'dark'
    )
  }

  let initial: PresentationPreferences = { ...defaults }

  if (shouldPersist && storageKey && isBrowser) {
    try {
      const stored = window.localStorage.getItem(storageKey)
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<PresentationPreferences>
        initial = {
          backgroundId: normalizeBackground(parsed.backgroundId ?? '', options.backgrounds, defaults.backgroundId),
          locale: normalizeLocale(parsed.locale ?? '', options.locales, defaults.locale),
          themeId: normalizeTheme(parsed.themeId ?? '', themes, defaults.themeId)
        }
      }
    } catch (error) {
      console.warn('Failed to parse stored presentation preferences. Resetting to defaults.', error)
    }
  }

  const state = reactive<PresentationPreferences>({ ...initial })

  const persist = () => {
    if (!shouldPersist || !storageKey || !isBrowser) return
    const payload = JSON.stringify({
      backgroundId: state.backgroundId,
      locale: state.locale,
      themeId: state.themeId
    })
    window.localStorage.setItem(storageKey, payload)
  }

  const activeBackground = computed(() => backgroundsMap.get(state.backgroundId))
  const activeLocale = computed(() => options.locales.find(locale => locale.code === state.locale))
  const activeTheme = computed(() => themesMap.get(state.themeId))

  // 初始化时应用主题
  if (isBrowser && activeTheme.value) {
    applyThemeToDocument(activeTheme.value)
  }

  watch(
    () => state.locale,
    () => {
      applyLocaleMeta(activeLocale.value)
      persist()
    },
    { immediate: true }
  )

  watch(
    () => state.backgroundId,
    () => {
      persist()
    }
  )

  watch(
    () => state.themeId,
    () => {
      if (activeTheme.value) {
        applyThemeToDocument(activeTheme.value)
      }
      persist()
    },
    { immediate: true }
  )

  const setBackground = (backgroundId: string) => {
    const normalized = normalizeBackground(backgroundId, options.backgrounds, state.backgroundId)
    state.backgroundId = normalized
  }

  const setLocale = (locale: LocaleCode) => {
    const normalized = normalizeLocale(locale, options.locales, state.locale)
    state.locale = normalized
  }

  const setTheme = (themeId: ThemeId) => {
    const normalized = normalizeTheme(themeId, themes, state.themeId)
    state.themeId = normalized
  }

  const resetToDefaults = () => {
    state.backgroundId = defaults.backgroundId
    state.locale = defaults.locale
    state.themeId = defaults.themeId
  }

  const context: PresentationContext = {
    state: readonly(state),
    backgrounds: options.backgrounds,
    locales: options.locales,
    themes,
    activeBackground,
    activeLocale,
    activeTheme,
    setBackground,
    setLocale,
    setTheme,
    resetToDefaults
  }

  return context
}

export const providePresentationContext = (context: PresentationContext) => {
  provide(PresentationContextSymbol, context)
}

export const usePresentationContext = (): PresentationContext => {
  const context = inject<PresentationContext | null>(PresentationContextSymbol, null)
  if (!context) {
    throw new Error('Presentation context is not provided. Please call providePresentationContext in a parent component.')
  }
  return context
}

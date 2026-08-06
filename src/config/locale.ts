export const defaultLocale = 'zh'
export const supportedLocales = ['zh', 'en'] as const

export type Locale = (typeof supportedLocales)[number]
export interface LocaleOption {
  code: Locale
  label: string
  shortLabel: string
  htmlLang: string
}

export const localeOptions: readonly LocaleOption[] = [
  {
    code: 'zh',
    label: '简体中文',
    shortLabel: '中文',
    htmlLang: 'zh-CN',
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
  },
] as const

function normalizeBasePath(basePath: string): string {
  if (!basePath || basePath === '/') return ''
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
}

function getRuntimeBasePath(): string {
  return normalizeBasePath(import.meta.env.BASE_URL ?? '/')
}

function stripBasePath(pathname: string): string {
  const basePath = getRuntimeBasePath()
  if (!basePath) return pathname
  return pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname
}

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale {
  const localizedPath = stripBasePath(pathname)
  const firstSegment = localizedPath.split('/').filter(Boolean)[0]
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale
}

function withBasePath(path: string): string {
  const basePath = getRuntimeBasePath()
  return basePath ? `${basePath}${path}` : path
}

export function getLocalizedPath(locale: Locale, path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const localeRoot = `/${locale}`

  if (normalizedPath === '/') {
    return withBasePath(`${localeRoot}/`)
  }

  return withBasePath(`${localeRoot}${normalizedPath}`)
}

export function getLocalizedSectionHref(locale: Locale, href: string): string {
  if (!href.startsWith('#')) return href
  return `${getLocalizedPath(locale, '/')}${href}`
}

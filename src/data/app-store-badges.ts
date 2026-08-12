import type { Locale } from '../config/locale'

const badgeBase = '/uDeck/badges'

export const appStoreBadges: Record<
  Locale,
  { light: string; dark: string; alt: string }
> = {
  zh: {
    light: `${badgeBase}/CN(SC)/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg`,
    dark: `${badgeBase}/CN(SC)/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_CNSC_RGB_wht_092917.svg`,
    alt: '在 App Store 上下载',
  },
  en: {
    light: `${badgeBase}/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg`,
    dark: `${badgeBase}/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg`,
    alt: 'Download on the App Store',
  },
}

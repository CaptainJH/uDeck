import type { Locale } from '../config/locale'

export const macDownloadLabels: Record<
  Locale,
  { supertitle: string; title: string; ariaLabel: string }
> = {
  zh: {
    supertitle: '下载',
    title: 'Mac 版',
    ariaLabel: '下载 Mac 版',
  },
  en: {
    supertitle: 'Download for',
    title: 'Mac',
    ariaLabel: 'Download for Mac',
  },
}

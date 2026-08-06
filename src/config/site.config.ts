/**
 * ===================================================
 * SITE CONFIGURATION
 * ===================================================
 * Edit this file to customize the entire landing page.
 * No need to touch any component code.
 * ===================================================
 */

import { siteConfigSchema } from './site.config.schema'
import { pricingConfig } from './pricing.config'
import { defaultLocale, type Locale } from './locale'

const siteUrl = 'https://captainjh.github.io/uDeck'
const defaultOgImage = '/uDeck/appstore.png'
const privacyPolicyUrl = 'https://captainjh.github.io/privacy-policy/uDeck/index.html'
const termsUrl = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
const contactEmail = 'mailto:heqi.ju@outlook.com'

const localizedSiteConfigs = {
  zh: {
    brand: {
      name: 'uDeck',
      tagline: '把 iPhone 变成 Mac 的高速随身盘',
      logo: '/uDeck/appstore.png',
    },
    nav: {
      links: [
        { label: '功能', href: '#features' },
        { label: '使用', href: '#how-it-works' },
        { label: '对比', href: '#comparison' },
        { label: '价格', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: { label: '免费下载', href: '#pricing' },
    },
    seo: {
      siteUrl,
      defaultOgImage,
      twitterHandle: undefined as string | undefined,
      lang: 'zh-CN',
    },
    umami: {
      src: 'https://cloud.umami.is/script.js' as string,
    },
    ui: {
      localeLabel: '语言',
      languageSwitch: {
        zh: '中文',
        en: 'EN',
      },
      toggleMenuLabel: '切换菜单',
      toggleThemeLabel: '切换主题',
      skipToContentLabel: '跳到主要内容',
    },
    hero: {
      badge: 'iPhone ↔ Mac 高速随身盘',
      title: '把 iPhone，变成 Mac 随手可及的高速随身盘',
      description:
        '无需云端中转，也不必受限于无线网速。插上数据线，在 iPhone 上轻点 Mount，你的 iPhone 即可作为原生虚拟磁盘挂载至 Mac Finder。',
      primaryCta: { label: '免费下载', href: '#pricing' },
      secondaryCta: { label: '了解更多', href: '#features' },
      stats: [
        { value: 'USB', label: '极速直连' },
        { value: '100%', label: '本地隐私' },
        { value: '0', label: '订阅费用' },
      ],
    },
    howItWorks: {
      badge: '使用',
      title: '极简三步，即刻开启',
      description: '无需改变习惯，像 U 盘一样使用你的 iPhone',
      steps: [
        {
          number: 1,
          title: '连接与启动',
          description: '使用 USB 数据线连接 iPhone 与 Mac，启动 uDeck。',
        },
        {
          number: 2,
          title: '一键 Mount',
          description: '在 iPhone 端轻点 Mount，即刻建立高速数据通道。',
        },
        {
          number: 3,
          title: 'Finder 随心掌控',
          description:
            '点击 Open in Finder，像使用 U 盘一样开始工作。完成后点击 Unmount，即可安全断开。',
        },
      ],
    },
    features: {
      badge: '功能',
      title: '为高效而生，原生且纯粹',
      description: '不绕过系统，不改变习惯，只为 USB 文件桥接做到极致。',
      items: [
        {
          icon: 'folder',
          title: 'Finder 原生无缝融合',
          description:
            '挂载后，uDeck 直达 Finder 侧边栏。批量拖拽、重命名、直接用 Mac 软件打开编辑，一切自然流畅。',
        },
        {
          icon: 'bolt',
          title: 'USB 极速通道，离线即用',
          description:
            '不再受 Wi-Fi 信号波动困扰，不消耗手机流量。即便在无网的飞机上、现场拍摄或出差途中，传输依然稳如磐石。',
        },
        {
          icon: 'shield-good',
          title: '100% 留存本地，隐私无忧',
          description:
            '数据只在手机与 Mac 之间直连流动。没有云端上传，没有账号依赖，敏感文件与隐私内容完全由你掌控。',
        },
        {
          icon: 'link',
          title: '双端协同，传输状态一目了然',
          description:
            '在 iPhone 上轻松管理应用内文件；挂载期间，实时掌控传输速率、电量与存储状态。Mac 端随时一键唤起，掌控全局。',
        },
      ],
    },
    pricing: pricingConfig.zh,
    faq: {
      badge: 'FAQ',
      title: '常见问题',
      contactLead: '找不到答案？欢迎',
      contactLinkLabel: '联系我们',
      contactHref: contactEmail,
      contactTail: '。',
      items: [
        {
          question: 'uDeck 是什么？',
          answer:
            'uDeck 是一款 iPhone 与 Mac 之间的 USB 文件桥接工具。它会将 iPhone 中的文件以虚拟磁盘形式挂载到 Mac，让你能通过 Finder 原生管理文件。',
        },
        {
          question: '免费版与 Pro 版有什么区别？',
          answer:
            '你可以免费下载并使用 uDeck 的核心挂载与文件管理功能。如果需要传输数 GB 的超大视频或大量素材，Pro 版将解锁 USB 全速传输。只需一次性付费 ¥18，永久享受，绝无订阅费用。',
        },
        {
          question: '传输时需要连接网络吗？',
          answer:
            '文件传输完全在本地进行，不需要网络。只有下载 Mac companion app 或检查软件更新时才需要互联网连接。',
        },
        {
          question: '文件会上传到云端吗？',
          answer:
            '不会。传输过程全程通过 USB 在本地进行，文件始终停留在你的 iPhone 与 Mac 上。',
        },
        {
          question: '可以在 Finder 中直接修改文件吗？',
          answer:
            '可以。你可以在 Finder 中创建、复制、编辑、重命名和删除文件，所有变更会同步回 iPhone。',
        },
        {
          question: '为什么传输时需要保持 iPhone 应用在前台？',
          answer:
            '为了避免 iOS 系统回收后台资源而中断文件写入，uDeck 在挂载期间需要保持稳定的数据桥接。传输完成后，可以安全 Unmount 并切换应用。',
        },
        {
          question: '为什么 Mount 按钮显示不可用？',
          answer:
            '请确认 Mac 上的 uDeck Companion 已启动、iPhone 与 Mac 已通过 USB 线缆正确连接，且 iPhone 应用当前处于前台。',
        },
        {
          question: 'Mac 提示需要启用 File System Extension？',
          answer:
            '这是 macOS 为保障虚拟磁盘安全运行提供的标准机制。按照引导在「系统设置 → 登录项与扩展」中开启一次，即可使用 Finder 原生挂载体验。',
        },
        {
          question: '支持 Wi-Fi、Windows 或 Android 吗？',
          answer:
            '当前版本专注于 iPhone 与 Mac 之间稳定的 USB 直连和 Finder 原生工作流。',
        },
        {
          question: '传输完成后可以直接拔掉数据线吗？',
          answer:
            '建议先在 iPhone 中点击 Unmount/Eject，或在 Mac Finder 侧边栏中弹出 uDeck 磁盘，再断开 USB 线，保障文件完整写入。',
        },
      ],
    },
    comparison: {
      badge: '对比',
      title: '为什么选择 uDeck？',
      description: '看看 uDeck 与传统传输方式的区别。',
      featureColumnLabel: '核心维度',
      columns: [
        { name: 'uDeck', highlighted: true },
        { name: 'AirDrop', highlighted: false },
        { name: 'WebDAV', highlighted: false },
        { name: '云盘服务', highlighted: false },
      ],
      rows: [
        {
          feature: '无需注册 / 登录账号',
          values: [true, false, true, false],
        },
        {
          feature: '跨 Apple ID 直连',
          values: [true, false, true, false],
        },
        {
          feature: '设置成本',
          values: [true, true, false, false],
        },
        {
          feature: 'Finder 原生挂载与直接编辑',
          values: [true, false, '—', '—'],
        },
        {
          feature: 'GB 级大文件 / 批量传输',
          values: [true, false, false, false],
        },
        {
          feature: '完全脱离网络 / 离线可用',
          values: [true, '—', false, false],
        },
      ],
    },
    footer: {
      description: '把 iPhone 变成 Mac 原生高速随身盘。一次买断，终身使用。',
      copyright: '保留所有权利。',
      columns: [
        {
          title: '产品',
          links: [
            { label: '功能', href: '#features', target: undefined, rel: undefined },
            { label: '价格', href: '#pricing', target: undefined, rel: undefined },
            { label: '下载', href: '#pricing', target: undefined, rel: undefined },
          ],
        },
        {
          title: '支持',
          links: [
            { label: 'FAQ', href: '#faq', target: undefined, rel: undefined },
            { label: '联系我们', href: contactEmail, target: undefined, rel: undefined },
          ],
        },
        {
          title: '法律',
          links: [
            { label: '隐私政策', href: privacyPolicyUrl, target: '_blank', rel: 'noopener' },
            { label: '服务条款', href: termsUrl, target: '_blank', rel: 'noopener' },
          ],
        },
      ],
    },
  },
  en: {
    brand: {
      name: 'uDeck',
      tagline: 'Turn your iPhone into a fast pocket drive for Mac',
      logo: '/uDeck/appstore.png',
    },
    nav: {
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Compare', href: '#comparison' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: { label: 'Free Download', href: '#pricing' },
    },
    seo: {
      siteUrl,
      defaultOgImage,
      twitterHandle: undefined as string | undefined,
      lang: 'en',
    },
    umami: {
      src: 'https://cloud.umami.is/script.js' as string,
    },
    ui: {
      localeLabel: 'Language',
      languageSwitch: {
        zh: '中文',
        en: 'EN',
      },
      toggleMenuLabel: 'Toggle menu',
      toggleThemeLabel: 'Toggle theme',
      skipToContentLabel: 'Skip to main content',
    },
    hero: {
      badge: 'iPhone ↔ Mac over fast USB',
      title: 'Turn your iPhone into a fast pocket drive for Mac',
      description:
        'No cloud relay. No Wi-Fi bottlenecks. Plug in a cable, tap Mount on your iPhone, and uDeck mounts your files in Mac Finder like a native virtual drive.',
      primaryCta: { label: 'Free Download', href: '#pricing' },
      secondaryCta: { label: 'Learn More', href: '#features' },
      stats: [
        { value: 'USB', label: 'Direct speed' },
        { value: '100%', label: 'Local privacy' },
        { value: '0', label: 'Subscription fees' },
      ],
    },
    howItWorks: {
      badge: 'How It Works',
      title: 'Get started in three simple steps',
      description: 'No workflow changes required. Use your iPhone like a USB drive.',
      steps: [
        {
          number: 1,
          title: 'Connect and launch',
          description: 'Connect your iPhone and Mac with a USB cable, then launch uDeck.',
        },
        {
          number: 2,
          title: 'Tap Mount',
          description: 'Tap Mount on your iPhone to open a fast local transfer channel instantly.',
        },
        {
          number: 3,
          title: 'Work in Finder',
          description:
            'Open the mounted drive in Finder and work as usual. When finished, tap Unmount to disconnect safely.',
        },
      ],
    },
    features: {
      badge: 'Features',
      title: 'Built for fast, native file workflows',
      description: 'No system hacks. No workflow changes. Just a focused USB file bridge done right.',
      items: [
        {
          icon: 'folder',
          title: 'Native Finder integration',
          description:
            'Once mounted, uDeck appears right in Finder. Drag files in bulk, rename items, or open and edit them directly with your Mac apps.',
        },
        {
          icon: 'bolt',
          title: 'Fast USB transfer, fully offline',
          description:
            'Skip unstable Wi-Fi and save mobile data. Even on flights, on set, or during travel, transfers stay steady and predictable.',
        },
        {
          icon: 'shield-good',
          title: '100% local, privacy first',
          description:
            'Your data moves only between your iPhone and Mac. No cloud upload, no account dependency, and no extra copy of sensitive files.',
        },
        {
          icon: 'link',
          title: 'Clear status across both devices',
          description:
            'Manage app files on iPhone while keeping an eye on transfer speed, battery, and storage status during mounting. Open Finder anytime from the Mac side.',
        },
      ],
    },
    pricing: pricingConfig.en,
    faq: {
      badge: 'FAQ',
      title: 'Frequently asked questions',
      contactLead: 'Need more help? ',
      contactLinkLabel: 'Contact us',
      contactHref: contactEmail,
      contactTail: '.',
      items: [
        {
          question: 'What is uDeck?',
          answer:
            'uDeck is a USB file bridge between iPhone and Mac. It mounts files from your iPhone as a virtual drive on macOS so you can manage them directly in Finder.',
        },
        {
          question: 'What is the difference between Free and Pro?',
          answer:
            'The free version covers core mounting and file management. Pro unlocks full USB transfer speed for large videos and bulk media with a one-time purchase and no subscription.',
        },
        {
          question: 'Does file transfer require internet access?',
          answer:
            'No. File transfer happens entirely on your local USB connection. Internet is only needed for things like downloading the Mac companion app or checking for updates.',
        },
        {
          question: 'Are my files uploaded to the cloud?',
          answer:
            'No. Transfers happen locally over USB, and your files stay on your iPhone and Mac.',
        },
        {
          question: 'Can I edit files directly in Finder?',
          answer:
            'Yes. You can create, copy, edit, rename, and delete files in Finder, and the changes sync back to your iPhone.',
        },
        {
          question: 'Why does the iPhone app need to stay in the foreground?',
          answer:
            'Keeping the app active helps iOS avoid reclaiming background resources during file writes, which keeps the mounted connection stable until you unmount safely.',
        },
        {
          question: 'Why is the Mount button unavailable?',
          answer:
            'Make sure uDeck Companion is running on your Mac, the USB cable is connected properly, and the iPhone app is currently open in the foreground.',
        },
        {
          question: 'Why does macOS ask me to enable File System Extension?',
          answer:
            'That is part of the standard macOS security model for virtual drives. Enable it once in System Settings, then Finder mounting will work normally.',
        },
        {
          question: 'Does uDeck support Wi-Fi, Windows, or Android?',
          answer:
            'The current version focuses on a stable USB workflow between iPhone and Mac with native Finder integration.',
        },
        {
          question: 'Can I unplug the cable right after transfer?',
          answer:
            'It is safer to unmount first from the iPhone app or eject the uDeck disk from Finder before disconnecting the USB cable.',
        },
      ],
    },
    comparison: {
      badge: 'Compare',
      title: 'Why choose uDeck?',
      description: 'See how uDeck compares with traditional transfer methods.',
      featureColumnLabel: 'Key criteria',
      columns: [
        { name: 'uDeck', highlighted: true },
        { name: 'AirDrop', highlighted: false },
        { name: 'WebDAV', highlighted: false },
        { name: 'Cloud Drive', highlighted: false },
      ],
      rows: [
        {
          feature: 'No account sign-up required',
          values: [true, false, true, false],
        },
        {
          feature: 'Works across different Apple IDs',
          values: [true, false, true, false],
        },
        {
          feature: 'Setup effort',
          values: [true, true, false, false],
        },
        {
          feature: 'Native Finder mounting and editing',
          values: [true, false, '—', '—'],
        },
        {
          feature: 'Large files and bulk transfer',
          values: [true, false, false, false],
        },
        {
          feature: 'Fully offline and network-free',
          values: [true, '—', false, false],
        },
      ],
    },
    footer: {
      description: 'Turn your iPhone into a native fast pocket drive for Mac. One purchase, lifetime use.',
      copyright: 'All rights reserved.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Features', href: '#features', target: undefined, rel: undefined },
            { label: 'Pricing', href: '#pricing', target: undefined, rel: undefined },
            { label: 'Download', href: '#pricing', target: undefined, rel: undefined },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'FAQ', href: '#faq', target: undefined, rel: undefined },
            { label: 'Contact us', href: contactEmail, target: undefined, rel: undefined },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: privacyPolicyUrl, target: '_blank', rel: 'noopener' },
            { label: 'Terms of Service', href: termsUrl, target: '_blank', rel: 'noopener' },
          ],
        },
      ],
    },
  },
} as const

siteConfigSchema.parse(localizedSiteConfigs.zh)
siteConfigSchema.parse(localizedSiteConfigs.en)

export function getSiteConfig(locale: Locale = defaultLocale) {
  return localizedSiteConfigs[locale]
}

export const siteConfig = getSiteConfig(defaultLocale)
export type SiteConfig = (typeof localizedSiteConfigs)[Locale]

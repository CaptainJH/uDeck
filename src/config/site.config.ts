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

const defaultLang = 'zh'

const siteConfigRaw = {
  /** ---- Brand ---- */
  brand: {
    name: 'uDeck',
    tagline: '把 iPhone 变成 Mac 的高速随身盘',
    logo: '/uDeck/appstore.png',
  },

  /** ---- Navigation ---- */
  nav: {
    links: [
      { label: '功能', href: '#features' },
      { label: '三步使用', href: '#how-it-works' },
      { label: '对比', href: '#comparison' },
      { label: '价格', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: '免费下载', href: '#pricing' },
  },

  /** ---- SEO & language (@astrojs/sitemap uses seo.siteUrl) ---- */
  seo: {
    siteUrl: 'https://captainjh.github.io/uDeck',
    defaultOgImage: '/uDeck/appstore.png',
    twitterHandle: undefined as string | undefined,
    lang: 'zh-CN',
  },

  /**
   * ---- Umami Analytics ----
   * Set PUBLIC_UMAMI_WEBSITE_ID in your .env file to enable analytics.
   * Change src only if you use a self-hosted Umami instance.
   */
  umami: {
    src: 'https://cloud.umami.is/script.js' as string,
  },

  /** ---- Hero Section ---- */
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

  /** ---- How It Works Section ---- */
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

  /** ---- Features Section ---- */
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

  /** ---- Pricing Section ---- */
  pricing: pricingConfig[defaultLang],

  /** ---- FAQ Section ---- */
  faq: {
    badge: 'FAQ',
    title: '常见问题',
    description: '找不到答案？欢迎联系我们。',
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

  /** ---- Comparison Table Section ---- */
  comparison: {
    badge: '对比',
    title: '为什么选择 uDeck？',
    description: '看看 uDeck 与传统传输方式的区别。',
    columns: [
      {
        name: 'uDeck',
        highlighted: true,
      },
      {
        name: 'AirDrop',
        highlighted: false,
      },
      {
        name: 'WebDAV',
        highlighted: false,
      },
      {
        name: '云盘服务',
        highlighted: false,
      },
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

  /** ---- Footer ---- */
  footer: {
    description: '把 iPhone 变成 Mac 原生高速随身盘。一次买断，终身使用。',
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
          { label: '联系我们', href: 'mailto:heqi.ju@outlook.com', target: undefined, rel: undefined },
        ],
      },
      {
        title: '法律',
        links: [
          { label: '隐私政策', href: 'https://captainjh.github.io/privacy-policy/uDeck/index.html', target: '_blank', rel: 'noopener' },
          { label: '服务条款', href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/', target: '_blank', rel: 'noopener' },
        ],
      },
    ],
  },
}

export const siteConfig = siteConfigSchema.parse(siteConfigRaw) as typeof siteConfigRaw
export type SiteConfig = typeof siteConfig

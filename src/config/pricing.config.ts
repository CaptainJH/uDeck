export interface PricingPlan {
  name: string
  description: string
  priceType: 'free' | 'one-time'
  price: number
  currency: string
  priceLabel: string
  featured: boolean
  features: string[]
  cta: { label: string; href: string }
}

export interface PricingSection {
  badge: string
  title: string
  description: string
  toggle: boolean
  plans: PricingPlan[]
}

export const pricingConfig: Record<string, PricingSection> = {
  zh: {
    badge: '价格',
    title: '简单透明的付费方式',
    description: '拒绝订阅陷阱。一次付费，终身拥有。',
    toggle: false,
    plans: [
      {
        name: '免费版',
        description: '核心挂载与文件管理',
        priceType: 'free',
        price: 0,
        currency: '¥',
        priceLabel: '免费',
        featured: false,
        features: [
          'Finder 原生挂载',
          '文件浏览、编辑与管理',
          '基础传输速度',
          '100% 本地隐私',
        ],
        cta: { label: '免费下载', href: '#' },
      },
      {
        name: 'uDeck Pro',
        description: '一次性买断',
        priceType: 'one-time',
        price: 18,
        currency: '¥',
        priceLabel: '¥18 一次性',
        featured: true,
        features: [
          '包含免费版所有功能',
          'USB 全速传输',
          '大文件 / 海量素材传输',
          '终身使用',
          '无订阅费用',
        ],
        cta: { label: '立即购买', href: '#' },
      },
    ],
  },
  en: {
    badge: 'Pricing',
    title: 'Simple, transparent pricing',
    description: 'No subscription traps. Pay once, own forever.',
    toggle: false,
    plans: [
      {
        name: 'Free',
        description: 'Core mounting and file management',
        priceType: 'free',
        price: 0,
        currency: '$',
        priceLabel: 'Free',
        featured: false,
        features: [
          'Finder native mounting',
          'Browse, edit, and manage files',
          'Basic transfer speed',
          '100% local privacy',
        ],
        cta: { label: 'Free Download', href: '#' },
      },
      {
        name: 'uDeck Pro',
        description: 'One-time purchase',
        priceType: 'one-time',
        price: 3,
        currency: '$',
        priceLabel: '$3 one-time',
        featured: true,
        features: [
          'Everything in Free',
          'USB full-speed transfer',
          'Large files / bulk media',
          'Lifetime access',
          'No subscription fees',
        ],
        cta: { label: 'Buy Now', href: '#' },
      },
    ],
  },
}

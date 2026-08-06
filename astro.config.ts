import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { siteConfig } from './src/config/site.config'

export default defineConfig({
  site: siteConfig.seo.siteUrl,
  integrations: [sitemap()],
})

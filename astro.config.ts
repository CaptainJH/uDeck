import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { siteConfig } from './src/config/site.config'

// GitHub Pages serves project sites under a subpath (/uDeck/).
// If you later add a custom domain served at root, remove this base option.
export default defineConfig({
  site: siteConfig.seo.siteUrl,
  base: '/uDeck',
  integrations: [sitemap()],
})

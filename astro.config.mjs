import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live at https://alrafat.github.io (GitHub Pages).
export default defineConfig({
  site: 'https://alrafat.github.io',
  integrations: [sitemap()],
});

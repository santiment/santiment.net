import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, mergeConfig } from 'astro/config'
import { AstroSvelteCtxPlugin } from 'san-webkit-next/plugins/vite.js'

import { createAstroConfig } from 'san-webkit-next/vite.config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const viteBase = await createAstroConfig()

const viteConfig = mergeConfig(viteBase, {
  define: {
    __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: '0',
    __SVELTEKIT_PATHS_BASE__: '""',
    __SVELTEKIT_ASSETS__: '""',
    __SVELTEKIT_APP_VERSION__: '""',
    __SVELTEKIT_PATHS_ASSETS__: '""',
    __SVELTEKIT_PAYLOAD__: '""',
    __SVELTEKIT_APP_DIR__: '""',
    __SVELTEKIT_PATHS_RELATIVE__: '""',
  },
  resolve: {
    alias: [{ find: '@sentry/sveltekit', replacement: '@sentry/astro' }],
  },
  ssr: {
    noExternal: ['san-webkit-next'],
  },

  optimizeDeps: {
    exclude: ['svelte', '@astrojs/svelte'],
  },

  plugins: [AstroSvelteCtxPlugin(path.resolve(__dirname, './src/svelte-root.js'))],
})

const siteUrl = process.env.SITE_URL || 'https://santiment.net'

export default defineConfig({
  site: siteUrl,
  integrations: [
    svelte({
      extensions: ['.svelte'],
    }),
    tailwind(),
  ],
  redirects: {
    '/sansheets': 'https://sheets.santiment.net/',
    '/sandata': '/',
    '/about-santiment/how-to-buy-san': 'https://academy.santiment.net/san-tokens/how-to-buy-san/',
    '/about-santiment/team': '/team',
    '/about-santiment/transparency': '/',
    '/about-santiment/jobs': '/jobs',
    '/about-santiment': '/about',
    '/about-santiment/contact': '/about',
    '/discord': 'https://discord.gg/xyJzfkyYbr',
    '/terms-conditions': '/terms',
  },
  vite: viteConfig,
  base: '/',
  publicDir: './static',
  outDir: './public',
  server: {
    port: 3000,
  },
})

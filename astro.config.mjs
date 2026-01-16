import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig, mergeConfig } from 'astro/config'

import { createAstroConfig } from 'san-webkit-next/vite.config.js'

export default (async () => {
  const viteBase = await createAstroConfig()

  const viteConfig = mergeConfig(viteBase, {
    resolve: {
      alias: [{ find: '@sentry/sveltekit', replacement: '@sentry/astro' }],
    },
  })

  const siteUrl = process.env.SITE_URL || 'https://santiment.net'

  return defineConfig({
    output: 'static',
    integrations: [svelte(), tailwind()],
    vite: viteConfig,
    ssr: {
      noExternal: ['san-webkit-next'],
    },
    prefetch: {
      prefetchAll: false,
      defaultStrategy: 'hover',
    },
    base: '/',
    site: siteUrl,
    publicDir: './static',
    outDir: './public',
    server: {
      port: 3000,
    },
  })
})()

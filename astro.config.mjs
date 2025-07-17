import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig, mergeConfig } from 'astro/config'
import { createAstroConfig } from 'san-webkit-next/vite.config.js'

// TODO: Move to san-webkit-next
const viteBase = await createAstroConfig()

const viteConfig = mergeConfig(viteBase, {
  define: {
    __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: '0',
  },
})

export default defineConfig({
  integrations: [svelte(), tailwind()],
  vite: viteConfig,
  publicDir: './static',
  outDir: './public',
  server: {
    port: 3000,
  },
})

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { createAstroConfig } from 'san-webkit-next/vite.config.js'

const viteConfig = await createAstroConfig()

export default defineConfig({
  integrations: [svelte(), tailwind()],
  vite: viteConfig,
  publicDir: './static',
  server: {
    port: 3000,
  },
})

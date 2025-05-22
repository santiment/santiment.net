import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { createConfig } from 'san-webkit-next/vite.config.js'
import { mergeConfig } from 'vite'

const viteConfig = mergeConfig(createConfig({ sveltekit: () => {} }), {
  define: {
    'process.env.MEDIA_PATH': JSON.stringify('/webkit'),
    'process.env.ICONS_PATH': JSON.stringify(process.env.MEDIA_PATH + '/icons'),
  },
})

export default defineConfig({
  integrations: [svelte(), tailwind()],
  vite: viteConfig,
  publicDir: './static',
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: ['san-webkit-next', 'san-webkit'],
  },
})

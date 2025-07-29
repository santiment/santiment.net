import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig, mergeConfig } from 'astro/config'

import { createAstroConfig } from 'san-webkit-next/vite.config.js'

export default (async () => {
  const viteBase = await createAstroConfig()

  const viteConfig = mergeConfig(viteBase, {
    define: {
      __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: '0',
    },
  })

  const viteAssetProtectionPatch = {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.includes('webkit/')) {
              const path = assetInfo.name.split('webkit/').pop()
              return `webkit/${path}`
            }
            return 'assets/[name].[hash][extname]'
          },
        },
      },
    },
  }

  const finalViteConfig = mergeConfig(viteConfig, viteAssetProtectionPatch)

  return defineConfig({
    integrations: [svelte(), tailwind()],
    vite: finalViteConfig,
    ssr: {
      noExternal: ['san-webkit-next'],
    },
    publicDir: './static',
    outDir: './public',
    server: {
      port: 3000,
    },
  })
})()

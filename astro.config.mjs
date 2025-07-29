import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig, mergeConfig } from 'astro/config'
import { createAstroConfig } from 'san-webkit-next/vite.config.js'

import fs from 'fs'
import path from 'path'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const syncWebkitAssetsPlugin = () => {
  return {
    name: 'sync-webkit-assets-plugin',
    enforce: 'pre',
    buildStart() {
      try {
        const libBasePath = path.dirname(require.resolve('san-webkit-next/vite.config.js'));
        const staticWebkitDir = path.resolve(process.cwd(), 'static/webkit');

        fs.rmSync(staticWebkitDir, { recursive: true, force: true });

        const targets = ['icons', 'illus', 'sprites'];

        for (const dir of targets) {
          const sourcePath = path.resolve(libBasePath, 'dist', dir);
          const destPath = path.join(staticWebkitDir, dir);

          if (fs.existsSync(sourcePath)) {
            fs.cpSync(sourcePath, destPath, { recursive: true });
          }
        }
      } catch (e) {
        console.error('Sync Webkit Assets Plugin Error:', e)
      }
    },
  }
}

const viteBase = await createAstroConfig()

if (viteBase.plugins) {
  viteBase.plugins.unshift(syncWebkitAssetsPlugin())
}

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

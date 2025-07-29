import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

try {
  console.log('--- [PREBUILD] Starting: Copying webkit assets ---')

  const libBasePath = path.dirname(require.resolve('san-webkit-next/vite.config.js'))
  const staticDir = path.resolve(process.cwd(), 'static/webkit')

  const targets = ['icons', 'illus', 'sprites']

  for (const dir of targets) {
    const sourcePath = path.resolve(libBasePath, 'dist', dir)
    const destPath = path.join(staticDir, dir)

    if (fs.existsSync(sourcePath)) {
      fs.rmSync(destPath, { recursive: true, force: true })
      fs.mkdirSync(destPath, { recursive: true })
      fs.cpSync(sourcePath, destPath, { recursive: true, force: true })
      console.log(`--- [PREBUILD] OK: Copied ${sourcePath} to ${destPath}`)
    } else {
      console.warn(`--- [PREBUILD] WARN: Source path not found, skipping: ${sourcePath}`)
    }
  }
  console.log('--- [PREBUILD] Finished: All assets copied successfully ---')
} catch (e) {
  console.error('--- [PREBUILD] ERROR: Failed to copy prebuild assets ---')
  console.error(e)
  process.exit(1)
}

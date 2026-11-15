import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function previewCleanUrls(): Plugin {
  const rewrite = (url: string | undefined, root: string) => {
    if (!url || url.includes('.') || url.startsWith('/@')) return
    const clean = url.split('?')[0].replace(/\/$/, '') || '/'
    const html = clean === '/' ? path.join(root, 'index.html') : path.join(root, `${clean.slice(1)}.html`)
    if (fs.existsSync(html)) return `${clean === '/' ? '/' : clean}.html`
  }
  return {
    name: 'preview-clean-urls',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const query = req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
        const nextUrl = rewrite(req.url, path.join(server.config.root, 'dist'))
        if (nextUrl) req.url = nextUrl + query
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), previewCleanUrls()],
})

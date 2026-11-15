import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const mode = process.argv[2] === 'dev' ? 'dev' : 'prod'

const vite = await createServer({
  root,
  mode,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const { PRERENDER_PATHS, indexablePaths, SITE_URL } = await vite.ssrLoadModule('/src/data/site.ts')
  const template = await readFile(path.join(dist, 'index.html'), 'utf8')

  for (const route of PRERENDER_PATHS) {
    const { html, head } = await render(route)
    const page = template
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    const file = await fileFor(route)
    await writeFile(file, page)
    process.stdout.write(`prerendered ${route}\n`)
  }

  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = indexablePaths()
    .map(
      (route) =>
        `  <url><loc>${SITE_URL}${route === '/' ? '/' : route}</loc><lastmod>${lastmod}</lastmod></url>`,
    )
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap)
  await writeFile(path.join(root, 'public', 'sitemap.xml'), sitemap)
} finally {
  await vite.close()
}

async function fileFor(route) {
  if (route === '/') return path.join(dist, 'index.html')
  if (route === '/404') return path.join(dist, '404.html')
  const file = path.join(dist, `${route.slice(1)}.html`)
  await mkdir(path.dirname(file), { recursive: true })
  return file
}

import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App'
import { headHtml } from './seo/head'

export function render(pathname: string) {
  const html = renderToString(
    <StrictMode>
      <App path={pathname} />
    </StrictMode>,
  )
  return { html, head: headHtml(pathname) }
}

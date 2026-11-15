import { graphForPath } from '../../seo/structuredData'

export function JsonLd({ path }: { path: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphForPath(path)) }}
    />
  )
}

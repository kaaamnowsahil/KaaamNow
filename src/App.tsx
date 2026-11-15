import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Hero } from './components/hero/Hero'
import { HomeGuide } from './components/seo/HomeGuide'
import { JsonLd } from './components/seo/JsonLd'
import { LandingView } from './components/seo/LandingView'
import { NotFoundPage } from './components/seo/NotFoundPage'
import { Audiences } from './components/sections/Audiences'
import { Benefits } from './components/sections/Benefits'
import { BusinessCategories } from './components/sections/BusinessCategories'
import { Categories } from './components/sections/Categories'
import { FinalCta } from './components/sections/FinalCta'
import { HowItWorks } from './components/sections/HowItWorks'
import { ProductPreview } from './components/sections/preview/ProductPreview'
import { ComingSoonProvider } from './context/ComingSoonProvider'
import { pageForPath } from './data/site'
import { AccountDeletionPortal } from './pages/AccountDeletionPortal'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TeamPage } from './pages/TeamPage'
import { TermsPage } from './pages/TermsPage'
import { applyPageMeta, metaForPath } from './seo/pageMeta'

function normalizePath(pathname: string) {
  const raw = pathname.replace(/\/+$/, '') || '/'
  if (raw === '/index.html') return '/'
  if (raw === '/404.html') return '/404'
  return raw
}

function browserPath() {
  if (typeof window === 'undefined') return '/'
  const path = normalizePath(window.location.pathname)
  if (path === '/' && window.location.hash === '#team') return '/team'
  return path
}

export default function App({ path: pathProp }: { path?: string }) {
  const path = normalizePath(pathProp ?? browserPath())

  useEffect(() => {
    if (path === '/team' && window.location.pathname !== '/team') {
      window.history.replaceState(null, '', '/team')
    }
    applyPageMeta(metaForPath(path))
  }, [path])

  const landing = pageForPath(path)
  if (landing) return <LandingView page={landing} />
  if (path.startsWith('/jobs/') || path.startsWith('/hire-workers/') || path === '/404') {
    return <NotFoundPage />
  }
  if (path === '/account-deletion') return <AccountDeletionPortal />
  if (path === '/privacy') return <PrivacyPolicy />
  if (path === '/team') return <TeamPage />
  if (path === '/terms' || path === '/terms/workers' || path === '/terms/businesses') {
    return <TermsPage path={path} />
  }
  if (path !== '/') return <NotFoundPage />

  return (
    <MotionConfig reducedMotion="user">
      <ComingSoonProvider>
        <JsonLd path="/" />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Hero />
          <HomeGuide />
          <Benefits />
          <HowItWorks />
          <Audiences />
          <Categories />
          <BusinessCategories />
          <ProductPreview />
          <FinalCta />
        </main>
        <Footer />
      </ComingSoonProvider>
    </MotionConfig>
  )
}

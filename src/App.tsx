import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Hero } from './components/hero/Hero'
import { Audiences } from './components/sections/Audiences'
import { Benefits } from './components/sections/Benefits'
import { BusinessCategories } from './components/sections/BusinessCategories'
import { Categories } from './components/sections/Categories'
import { FinalCta } from './components/sections/FinalCta'
import { HowItWorks } from './components/sections/HowItWorks'
import { ProductPreview } from './components/sections/preview/ProductPreview'
import { ComingSoonProvider } from './context/ComingSoonProvider'
import { AccountDeletionPortal } from './pages/AccountDeletionPortal'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TeamPage } from './pages/TeamPage'
import { TermsPage } from './pages/TermsPage'
import { applyPageMeta, metaForPath } from './seo/pageMeta'

export default function App() {
  const raw = window.location.pathname.replace(/\/+$/, '') || '/'
  const path =
    (raw === '/' || raw === '/index.html') && window.location.hash === '#team'
      ? '/team'
      : raw === '/index.html'
        ? '/'
        : raw
  useEffect(() => {
    if (path === '/team' && window.location.pathname !== '/team') {
      window.history.replaceState(null, '', '/team')
    }
    applyPageMeta(metaForPath(path))
  }, [path])
  if (path === '/account-deletion') {
    return <AccountDeletionPortal />
  }
  if (path === '/privacy') {
    return <PrivacyPolicy />
  }
  if (path === '/team') {
    return <TeamPage />
  }
  if (path === '/terms' || path === '/terms/workers' || path === '/terms/businesses') {
    return <TermsPage path={path} />
  }

  return (
    <MotionConfig reducedMotion="user">
      <ComingSoonProvider>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Hero />
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

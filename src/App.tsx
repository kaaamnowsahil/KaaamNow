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
import { Team } from './components/sections/Team'
import { ProductPreview } from './components/sections/preview/ProductPreview'
import { ComingSoonProvider } from './context/ComingSoonProvider'

export default function App() {
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
          <Team />
          <FinalCta />
        </main>
        <Footer />
      </ComingSoonProvider>
    </MotionConfig>
  )
}

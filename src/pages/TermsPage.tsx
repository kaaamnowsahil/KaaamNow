import { useEffect, type ReactNode } from 'react'
import { PageHeader } from '../components/PageHeader'
import { BUSINESS_RULES, COMMON_RULES, WORKER_RULES, type TermsSection } from '../data/termsRules'
import styles from './PrivacyPolicy.module.css'

type TermsPath = '/terms' | '/terms/workers' | '/terms/businesses'

const PAGES: Record<TermsPath, { title: string; lede: string; rules: TermsSection[] }> = {
  '/terms': {
    title: 'Marketplace rules',
    lede: 'Worker rules and business rules are on their own pages. The rules that are the same for both are in one section below.',
    rules: [],
  },
  '/terms/workers': {
    title: 'Rules for workers',
    lede: 'These rules apply when you pick up shifts or Live Work on KaaamNow.',
    rules: WORKER_RULES,
  },
  '/terms/businesses': {
    title: 'Rules for businesses',
    lede: 'These rules apply when you post shifts or Live Work on KaaamNow.',
    rules: BUSINESS_RULES,
  },
}

function RuleBody({ body }: { body: string }) {
  const blocks: ReactNode[] = []
  let paragraph: string[] = []
  let list: string[] = []

  const flushParagraph = () => {
    if (paragraph.length === 0) return
    blocks.push(<p key={`p-${blocks.length}`}>{paragraph.join(' ')}</p>)
    paragraph = []
  }

  const flushList = () => {
    if (list.length === 0) return
    blocks.push(
      <ul key={`ul-${blocks.length}`}>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>,
    )
    list = []
  }

  for (const line of body.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }
    if (trimmed.startsWith('- ')) {
      flushParagraph()
      list.push(trimmed.slice(2))
      continue
    }
    flushList()
    paragraph.push(trimmed)
  }
  flushParagraph()
  flushList()
  return <>{blocks}</>
}

function RuleSections({ sections }: { sections: TermsSection[] }) {
  return sections.map((section, index) => (
    <section className={styles.section} key={section.title}>
      <h2>
        {index + 1}. {section.title}
      </h2>
      <RuleBody body={section.body} />
    </section>
  ))
}

export function TermsPage({ path }: { path: TermsPath }) {
  const page = PAGES[path]

  useEffect(() => {
    const previous = document.title
    document.title = `${page.title} — KaaamNow`
    return () => {
      document.title = previous
    }
  }, [page.title])

  return (
    <div className={styles.page}>
      <PageHeader />

      <main className={`container ${styles.main}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Legal</p>
          <h1>{page.title}</h1>
          <p className={styles.lede}>{page.lede}</p>
          <p className={styles.updated}>Effective 4 November 2026</p>
        </div>

        <nav className={styles.switcher} aria-label="Rules">
          <a href="/terms" aria-current={path === '/terms' ? 'page' : undefined}>
            Shared rules
          </a>
          <a href="/terms/workers" aria-current={path === '/terms/workers' ? 'page' : undefined}>
            For workers
          </a>
          <a href="/terms/businesses" aria-current={path === '/terms/businesses' ? 'page' : undefined}>
            For businesses
          </a>
        </nav>

        <RuleSections sections={page.rules} />

        <section className={styles.section} id="common" aria-labelledby="common-rules-title">
          <h2 id="common-rules-title">Rules for everyone</h2>
          <p>These rules apply to both workers and businesses.</p>
          {COMMON_RULES.map((section) => (
            <div key={section.title}>
              <h3 className={styles.subheading}>{section.title}</h3>
              <RuleBody body={section.body} />
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

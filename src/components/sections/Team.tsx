import { Quote } from 'lucide-react'
import { fill } from '../../i18n/siteCopy'
import { useLocale } from '../../i18n/locale'
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Team.module.css'

interface Founder {
  id: string
  name: string
  role: string
  email: string
  photo: string
  thought: string
}

const FOUNDERS: Founder[] = [
  {
    id: 'anisha',
    name: 'Anisha Shrivastava',
    role: 'Co-founder & CPO',
    email: 'anisha.shrivastava@kaaamnow.in',
    photo: '/team/anisha-shrivastava.webp',
    thought:
      'Great products get out of the way. If posting a shift feels as easy as sending a message, we’ve done our job.',
  },
  {
    id: 'sumit',
    name: 'Sumit Pandey',
    role: 'Co-founder & COO',
    email: 'sumit.pandey@kaaamnow.in',
    photo: '/team/sumit-pandey.webp',
    thought:
      'Every shift is a promise — to the business and to the worker. Our job is to make sure it’s kept, every time.',
  },
]

export function Team() {
  const { copy } = useLocale()
  const team = copy.team
  return (
    <section id="team" className="section section--alt" aria-labelledby="team-title">
      <div className="container">
        <SectionHeader
          id="team-title"
          eyebrow={team.eyebrow}
          title={
            <>
              {team.title} <span className="gradient-text">{team.accent}</span>
            </>
          }
          description={team.description}
        />

        <Reveal>
          <figure className={styles.mission}>
            <span className={styles.missionIcon} aria-hidden="true">
              <Quote size={22} strokeWidth={2} />
            </span>
            <blockquote className={styles.missionQuote}>
              <p>
                {team.quote} <span className="gradient-text">{team.quoteAccent}</span>
              </p>
            </blockquote>
            <figcaption className={styles.missionCaption}>{team.caption}</figcaption>
          </figure>
        </Reveal>

        <RevealGroup as="ul" className={styles.grid} staggerBy={0.12}>
          {FOUNDERS.map((founder, index) => (
            <RevealItem as="li" key={founder.id} className={styles.item}>
              <article className={styles.card} aria-labelledby={`founder-${founder.id}`}>
                <div className={styles.photoWrap}>
                  <img
                    className={styles.photo}
                    src={founder.photo}
                    alt={fill(team.portrait, { name: founder.name })}
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.role}>{team.roles[index]}</span>
                </div>

                <div className={styles.body}>
                  <h3 id={`founder-${founder.id}`} className={styles.name}>
                    {founder.name}
                  </h3>
                  <a className={styles.email} href={`mailto:${founder.email}`}>
                    {founder.email}
                  </a>
                  <blockquote className={styles.thought}>
                    <p>“{team.thoughts[index]}”</p>
                  </blockquote>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

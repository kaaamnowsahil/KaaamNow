import { Quote } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import styles from './Team.module.css'

interface Founder {
  id: string
  name: string
  role: string
  photo: string
  thought: string
}

const FOUNDERS: Founder[] = [
  {
    id: 'anisha',
    name: 'Anisha Shrivastava',
    role: 'Co-founder & CPO',
    photo: '/team/anisha-shrivastava.webp',
    thought:
      'Great products get out of the way. If posting a shift feels as easy as sending a message, we’ve done our job.',
  },
  {
    id: 'sumit',
    name: 'Sumit Pandey',
    role: 'Co-founder & COO',
    photo: '/team/sumit-pandey.webp',
    thought:
      'Every shift is a promise — to the business and to the worker. Our job is to make sure it’s kept, every time.',
  },
  {
    id: 'sahil',
    name: 'Sahil Shrivastava',
    role: 'Co-founder & CTO',
    photo: '/team/sahil-shrivastava.webp',
    thought:
      'Technology should remove the waiting between a business that needs help and a person who’s ready to work.',
  },
]

export function Team() {
  return (
    <section id="team" className="section section--alt" aria-labelledby="team-title">
      <div className="container">
        <SectionHeader
          id="team-title"
          eyebrow="The founders"
          title={
            <>
              Built by people who <span className="gradient-text">believe in work.</span>
            </>
          }
          description="KaaamNow is being built by a small team that wants flexible work to feel fair, fast, and dependable for everyone involved."
        />

        <Reveal>
          <figure className={styles.mission}>
            <span className={styles.missionIcon} aria-hidden="true">
              <Quote size={22} strokeWidth={2} />
            </span>
            <blockquote className={styles.missionQuote}>
              <p>
                Work shouldn’t wait. Every open shift is a business that needs a hand and someone
                ready to earn — <span className="gradient-text">KaaamNow exists to bring them together, right when it matters.</span>
              </p>
            </blockquote>
            <figcaption className={styles.missionCaption}>The KaaamNow founding team</figcaption>
          </figure>
        </Reveal>

        <RevealGroup as="ul" className={styles.grid} staggerBy={0.12}>
          {FOUNDERS.map((founder) => (
            <RevealItem as="li" key={founder.id} className={styles.item}>
              <article className={styles.card} aria-labelledby={`founder-${founder.id}`}>
                <div className={styles.photoWrap}>
                  <img
                    className={styles.photo}
                    src={founder.photo}
                    alt={`Portrait of ${founder.name}`}
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.role}>{founder.role}</span>
                </div>

                <div className={styles.body}>
                  <h3 id={`founder-${founder.id}`} className={styles.name}>
                    {founder.name}
                  </h3>
                  <blockquote className={styles.thought}>
                    <p>“{founder.thought}”</p>
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

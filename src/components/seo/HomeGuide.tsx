import { APP_LINKS, CATEGORIES, CITIES, HOME_FAQS, cityJobsPath } from '../../data/site'
import styles from './HomeGuide.module.css'

export function HomeGuide() {
  return (
    <section className={`section ${styles.guide}`} aria-labelledby="guide-title">
      <div className="container">
        <h2 id="guide-title">Workers ke liye</h2>
        <p>
          Apne shehar ki open shifts dekho. Har card pe area, time aur pay pehle se likha hota hai,
          isliye aap accept karne se pehle amount jaan lete ho. Daily wage, hourly aur part-time
          alag-alag posts hain. Aap wahi lo jo aaj ke schedule mein fit ho.
        </p>
        <p>
          Helper, delivery, security, waiter ya kitchen support, packing, loading, warehouse aur
          event staff, yeh categories isliye bani hain taaki aapko har job na dikhe. Phone se
          account banta hai. Apply karna free hai. Ek time pe ek shift, taaki do jagah ka promise
          ek saath na ho.
        </p>
        <p>
          <a href={APP_LINKS.findWork}>Kaam dhoondo</a>
        </p>

        <h2>Businesses ke liye</h2>
        <p>
          Jab aapko poori payroll team nahi, sirf ek shift chahiye, tab job post karo. Category,
          area, hours aur pay aap likhte ho. Workers ko wahi dikhta hai. Restaurants, shops,
          warehouses, events aur factories isi flow se daily shift, hourly cover ya temporary
          staffing le sakte hain.
        </p>
        <p>
          Applicants usi posting se aate hain. Seats bhar jayein to listing band karo. Arrival aur
          completion app ke andar record hote hain. Platform fee tab dikhti hai jab aap booking
          confirm karte ho. Is site pe koi flat “itne rupaye mein staff” wala package nahi hai.
        </p>
        <p>
          <a href={APP_LINKS.hireWorkers}>Workers hire karo</a>
        </p>

        <h2>Kaise kaam karta hai</h2>
        <ol className={styles.steps}>
          <li>
            <h3>Account banao</h3>
            <p>Worker ho ya business, phone number se sign up karo. Shehar aur role usi waqt set hota hai.</p>
          </li>
          <li>
            <h3>Job post karo ya dhoondo</h3>
            <p>
              Business shift likhta hai, pay ke saath. Worker apni category ki list padhta hai aur
              jo time theek lage use choose karta hai.
            </p>
          </li>
          <li>
            <h3>Kaam karo ya staff paao</h3>
            <p>
              Shift ke din dono taraf app se confirm karte hain. Kaam khatam hote hi woh booking
              close hoti hai. Agli shift ke liye nayi post ya nayi list.
            </p>
          </li>
        </ol>

        <h2>Popular job categories</h2>
        <ul className={styles.links}>
          {CATEGORIES.map((category) => (
            <li key={category.path}>
              <a href={category.path}>{category.label}</a>
            </li>
          ))}
        </ul>

        <h2>Cities jahan hum hain</h2>
        <p>
          Abhi yeh pages Ludhiana, Delhi, Chandigarh aur Jaipur ke liye hain. Har shehar ki jobs
          alag hain, kyunki businesses apna area khud choose karte hain.
        </p>
        <ul className={styles.links}>
          {CITIES.map((city) => (
            <li key={city.slug}>
              <a href={cityJobsPath(city.slug)}>Daily wage jobs in {city.name}</a>
            </li>
          ))}
        </ul>

        <h2>FAQs</h2>
        <div className={styles.faqs}>
          {HOME_FAQS.map((faq) => (
            <details key={faq.question} open>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

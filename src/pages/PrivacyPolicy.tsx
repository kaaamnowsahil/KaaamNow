import { useEffect, type ReactNode } from 'react'
import { PageHeader } from '../components/PageHeader'
import styles from './PrivacyPolicy.module.css'

const SECTIONS: { title: string; body: ReactNode }[] = [
  {
    title: '1. Who we are',
    body: (
      <>
        <p>
          KaaamNow (kaaamnow.in and the KaaamNow apps) is operated by KAAAMNOW TECHNOLOGY LLP,
          148, 1st Main, 1st Cross, Malleshpallya, 1st floor, Bengaluru, Karnataka 560075, India
          (“KaaamNow”, “we”, “us”).
        </p>
        <p>
          KaaamNow is a marketplace. It connects businesses and households who need work done with
          people who want to do that work. This policy explains what personal information we
          collect, why we use it, and the choices you have.
        </p>
      </>
    ),
  },
  {
    title: '2. Who this applies to',
    body: (
      <p>
        This policy applies to businesses, workers, and anyone who visits our website or uses the
        KaaamNow apps. You must be at least 18 years old to create an account. We do not knowingly
        collect information from anyone under 18.
      </p>
    ),
  },
  {
    title: '3. Information we collect',
    body: (
      <>
        <p>We collect only what we need to run bookings, payments, and support.</p>
        <ul>
          <li>
            <strong>Account.</strong> Your mobile number, verified with a one-time code, plus your
            name, profile details, and photo.
          </li>
          <li>
            <strong>Work.</strong> The shifts and Live Work you post or accept, workplace address,
            check-in and completion codes, ratings, and messages with support.
          </li>
          <li>
            <strong>Location.</strong> Your device location, so we can show nearby work and confirm
            you are at the workplace. See section 5.
          </li>
          <li>
            <strong>Payments.</strong> Booking amounts, wallet balance, refunds, and, for workers,
            the UPI ID or bank account in your own name that you use for withdrawals. Card and UPI
            payments are handled by our payment partner. We do not store full card numbers.
          </li>
          <li>
            <strong>Device.</strong> The device and app information needed to sign you in, send
            booking alerts, and keep the service secure, including a push-notification token.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. How we use it',
    body: (
      <ul>
        <li>Create and secure your account, and send the one-time sign-in code.</li>
        <li>Show nearby shifts and Live Work, and match a business with a worker.</li>
        <li>Run check-in, attendance, pay, refunds, cancellations, and withdrawals.</li>
        <li>Send booking, payment, and support alerts you need to complete the work.</li>
        <li>Handle disputes, safety reports, fraud, strikes, and account bans.</li>
        <li>Keep records the law requires, including payment and tax records.</li>
      </ul>
    ),
  },
  {
    title: '5. Location',
    body: (
      <>
        <p>
          Location is used to show work within about 30 km and to confirm a worker is within 200
          metres of the workplace at check-in.
        </p>
        <p>
          Live location is shared with the other party on a booking only while a booked worker is
          travelling to the job or the job is in progress. Sharing stops when the booking ends.
          The other party otherwise sees only what the work needs: name, photo, rating, and the
          work address.
        </p>
        <p>
          You can turn location off in your phone settings. Nearby work and check-in will not work
          without it.
        </p>
      </>
    ),
  },
  {
    title: '6. Who we share it with',
    body: (
      <>
        <p>We do not sell your personal information. We share it only in these cases:</p>
        <ul>
          <li>
            <strong>The other party on a booking,</strong> limited to what they need to do or
            receive the work.
          </li>
          <li>
            <strong>Razorpay,</strong> our payment partner, to take business payments and send
            worker withdrawals. Razorpay processes that payment data under its own terms.
          </li>
          <li>
            <strong>Google,</strong> for maps and address lookup, and through Firebase to deliver
            push notifications to your device.
          </li>
          <li>
            <strong>Our messaging partner,</strong> to send the one-time sign-in code to your
            mobile number.
          </li>
          <li>
            <strong>Authorities,</strong> when the law requires it, or when we need to protect a
            person from harm or investigate fraud.
          </li>
        </ul>
        <p>
          Support staff can see a booking’s records — codes, times, locations, and messages — when
          you contact support or there is a dispute.
        </p>
      </>
    ),
  },
  {
    title: '7. How long we keep it',
    body: (
      <p>
        We keep your information while your account is open and for as long as we need it to run
        KaaamNow, resolve a dispute, or meet a legal duty. Payment and tax records are kept for the
        period Indian law requires. When you delete your account, personal details are anonymised.
        Records we must keep by law stay on file without your name attached where the law allows.
      </p>
    ),
  },
  {
    title: '8. Your choices',
    body: (
      <>
        <ul>
          <li>Update your name, photo, and payout details in the app.</li>
          <li>Turn off push notifications in the app or in your phone settings.</li>
          <li>Turn off location in your phone settings. Nearby work and check-in need location.</li>
          <li>
            Ask us what we hold, ask for a correction, or complain, using the contacts in section
            11.
          </li>
          <li>
            Delete your account from your profile in the app, or at{' '}
            <a href="/account-deletion">kaaamnow.in/account-deletion</a>. Open bookings, unpaid
            amounts, and open disputes have to be settled first.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '9. Security',
    body: (
      <p>
        Sign-in uses a one-time code sent to your mobile number. Do not share that code or your
        account. We use access controls and encrypted connections to protect account and payment
        data. No method of storage or transmission is completely secure.
      </p>
    ),
  },
  {
    title: '10. Changes',
    body: (
      <p>
        If this policy changes, we will update this page and the date at the top. Continued use of
        KaaamNow after the new date means you accept the updated policy. The current version is
        always the one published here.
      </p>
    ),
  },
  {
    title: '11. Contact',
    body: (
      <>
        <p>
          Questions or complaints about your information: write to{' '}
          <a href="mailto:sumit.pandey@kaaamnow.in">sumit.pandey@kaaamnow.in</a> or{' '}
          <a href="mailto:anishasriwastav53@gmail.com">anishasriwastav53@gmail.com</a>, or use
          Contact support in the app.
        </p>
        <p>
          KAAAMNOW TECHNOLOGY LLP, 148, 1st Main, 1st Cross, Malleshpallya, 1st floor, Bengaluru,
          Karnataka 560075, India. Phone:{' '}
          <a href="tel:+918618796332">+91 86187 96332</a>. We acknowledge complaints within 24
          hours and aim to resolve them within 15 days.
        </p>
        <p>
          Marketplace rules are in the <a href="/terms">Terms</a>.
        </p>
      </>
    ),
  },
]

export function PrivacyPolicy() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Privacy Policy — KaaamNow'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className={styles.page}>
      <PageHeader />

      <main className={`container ${styles.main}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Legal</p>
          <h1>Privacy Policy</h1>
          <p className={styles.lede}>
            How KaaamNow collects, uses, and shares information when you hire workers or pick up
            work.
          </p>
          <p className={styles.updated}>Last updated 12 November 2026</p>
        </div>

        {SECTIONS.map((section) => (
          <section className={styles.section} key={section.title}>
            <h2>{section.title}</h2>
            {section.body}
          </section>
        ))}
      </main>
    </div>
  )
}

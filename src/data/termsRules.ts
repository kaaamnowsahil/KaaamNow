import { LEGAL_EMAIL, SUPPORT_EMAIL } from './contacts'

export type TermsSection = {
  title: string
  body: string
}

export const COMMON_RULES: TermsSection[] = [
  {
    title: 'About KaaamNow',
    body: 'KaaamNow (kaaamnow.in and the KaaamNow apps) is an online platform owned and operated by KAAAMNOW TECHNOLOGY LLP, a limited liability partnership registered in India ("KaaamNow", "we", "us"). It connects people, shops, offices and households who need work done ("Business") with people who want to do that work ("Worker"). KaaamNow is an intermediary. It is not the employer of any Worker, does not supervise or perform the work and does not guarantee its quality. The agreement for the work is between the Business and the Worker. KaaamNow provides matching, booking, payment handling, the fee rules in these terms, and support.\n\nBy creating an account or using KaaamNow you agree to these terms. If you do not agree, do not use KaaamNow.\n',
  },
  {
    title: 'Who can use KaaamNow',
    body: '- You must be at least 18 years old and able to enter a legally binding agreement in India.\n- Give true and complete details and keep them up to date. Your mobile number is verified by OTP.\n- One person may hold one account. Do not share your account, OTP or login with anyone; you are responsible for everything done from your account.\n- Each account currently works in one role. A Worker profile and a Business profile keep separate history, and you can never book your own work.\n',
  },
  {
    title: 'Your conduct',
    body: 'You must not:\n- give false details, impersonate someone or create more than one account;\n- harass, threaten, abuse or discriminate against anyone;\n- ask for or accept payment for KaaamNow bookings outside KaaamNow;\n- fake a check-in, location, code or attendance;\n- post or accept illegal, dangerous or adult work;\n- misuse, copy, scrape or try to break the platform.\nBreaking these rules can lead to fees, strikes, suspension or a permanent ban.\n',
  },
  {
    title: 'Safety and emergencies',
    body: 'Every booking has an Emergency / Contact support button. In immediate danger, call 112 first. Support can see the booking and both parties and will step in.\n',
  },
  {
    title: 'Your data and location',
    body: '- We collect your mobile number, name, profile details, photo, ratings, booking and payment history, and the device information needed to run the app.\n- Your location is used to show nearby work and to check attendance. Live location is shared with the other party only while a booked Worker is travelling to or working at the job, and sharing stops when the booking ends.\n- The other party in a booking sees only what is needed for the work (for example name, photo, rating and the work address).\n- Payments and payouts are handled by our licensed payment partners; KaaamNow does not store full card numbers.\n- We do not sell your personal data. We keep data only as long as needed to run KaaamNow and as required by law (for example payment and tax records).\n',
  },
  {
    title: 'Ratings',
    body: 'Businesses and Workers can rate each other after the work. Ratings must be honest and about the work. We may remove reviews that are abusive, fake or unrelated.\n',
  },
  {
    title: 'Disputes and support',
    body: 'Contact support from the booking or by email. Our team reviews the booking, the app records (codes, times, locations and messages) and both sides. Support can waive or change any fee, strike or voucher for a booking, with a recorded reason. Disputes about the quality of the work itself are between the Business and the Worker; support helps both sides and applies these terms.\n',
  },
  {
    title: 'Suspension and account deletion',
    body: '- We may limit, suspend or close an account that breaks these terms or the law, or puts others at risk. Where possible we tell you why.\n- You can ask to delete your account from your profile in the app or at kaaamnow.in/account-deletion. Open bookings, unpaid amounts or open disputes must be settled first. After deletion your personal details are anonymised; records we must keep by law are retained.\n',
  },
  {
    title: 'Limits of responsibility',
    body: 'KaaamNow is provided "as is". To the extent the law allows, KaaamNow is not responsible for the conduct of Businesses or Workers, for the quality or result of the work, or for injury, loss or damage caused by a party to a booking. Where KaaamNow is responsible, its total liability for a booking is limited to the platform charge it earned on that booking. Nothing in these terms limits rights you have under Indian consumer law that cannot be limited.\n',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms. When they change, the app shows the new version and you must accept it before your next booking. All amounts and percentages in these terms are the current values; the exact amount is always shown in the app before you confirm.\n',
  },
  {
    title: 'Governing law',
    body: 'These terms are governed by the laws of India.\n',
  },
  {
    title: 'Contact and grievances',
    body: `Questions or complaints: write to ${LEGAL_EMAIL} or ${SUPPORT_EMAIL}, or use Contact support in the app. KAAAMNOW TECHNOLOGY LLP, 148, 1st Main, 1st Cross, Malleshpallya, 1st floor, Bengaluru, Karnataka 560075, India. We acknowledge complaints within 24 hours and aim to resolve them within 15 days.`,
  },
]

export const WORKER_RULES: TermsSection[] = [
  {
    title: 'Booking scheduled shifts',
    body: '- Booking is instant: when you book a shift your place is confirmed. No approval is needed.\n- You can book until 2 hours before the start, up to 5 upcoming bookings at a time, and never two shifts that overlap.\n- Shifts are shown within about 30 km of your location. A banned account cannot book.\n',
  },
  {
    title: 'On the day of a scheduled shift',
    body: "- Check-in opens 30 minutes before the start. Be within 200 metres of the workplace and enter the 4-character code the Business gives you.\n- Your location is shared with the Business while you travel to the shift and stops when the shift ends.\n- To finish early, both sides must agree: the side ending the shift enters a one-time PIN shown on the other side's app.\n- Near the end, the Business may ask for extra time. If you accept, the extra time is paid at 130% of the hourly rate. Extra time not approved in the app is not paid.\n- If you do not check in before the shift ends, the booking is marked as a no-show automatically (see section 7).\n",
  },
  {
    title: 'Live Work',
    body: '- Live Work requests go to nearby Workers; the first to accept is booked.\n- If nobody accepts, the Business may raise the pay by ₹10, ₹20 or ₹30 (per hour for hourly work, on the task price for task work) and send the request again, up to 3 searches in total. The raised pay is shown on the request, and you receive it minus the 4% platform charge.\n- On arrival, enter the arrival code from the Business to start the work.\n- When the work is done, ask the Business for the completion code and enter it to finish. Hourly work is paid for the time actually worked, up to the booked time plus any extra time you accepted. Task work is paid the full task price.\n',
  },
  {
    title: 'Pay and withdrawals',
    body: '- You receive the agreed pay minus the 4% platform charge. Scheduled shifts are paid after the Business approves the hours; Live Work is paid when you finish with the completion code (or when it completes automatically after the booked time).\n- Pay goes to your KaaamNow wallet. You can withdraw from ₹100 to a UPI ID or bank account in your own name.\n- Withdrawals are sent by our payment partner. A withdrawal is only complete when the payment partner confirms it.\n- You are responsible for your own income tax. KaaamNow deducts tax only where the law requires it.\n',
  },
  {
    title: 'Cancellations, no-shows and walk-offs',
    body: 'Fees are taken from your wallet. If the wallet goes negative, the amount is recovered from your next earnings; you can keep working while it is negative.\n\nScheduled shifts:\n- More than 12 hours before the start: free.\n- 12 to 6 hours before: ₹49.\n- 6 to 2 hours before: ₹89.\n- Less than 2 hours before: ₹149 and ½ strike.\n- No-show (you do not check in before the shift ends): 50% of your pay, up to ₹399, and 1 strike.\n- Walk-off (you leave or refuse to work during the shift): you are paid only for the hours worked, minus 4%, minus a penalty of 50% of the booking amount.\n- If the Business cancels, you get compensation: 30% of your pay (12 to 6 hours before the start), 40% (6 to 2 hours) or 80% (less than 2 hours). If the Business stops the work without reason, you get 80% of your pay.\n\nLive Work:\n- You cancel after accepting, before you start: ₹149 and ½ strike.\n- The Business cancels before you enter the arrival code: the booking ends and you are not paid.\n- You force-cancel after starting (no code needed): you are not paid for the job.\n- The Business force-cancels after you started (no code needed): you get 80% of your pay.\n',
  },
  {
    title: 'Strikes',
    body: '2 strikes within 90 days: fewer shifts are shown to you for 7 days. 3 strikes within 90 days: your account is banned. You can ask support to review a strike or a ban.\n',
  },
]

export const BUSINESS_RULES: TermsSection[] = [
  {
    title: 'Posting scheduled shifts',
    body: '- A shift must start at least 24 hours after posting and at most 60 days ahead.\n- Describe the work, place, time and pay honestly. The workplace must be safe and the work legal.\n- You pay the full amount when you post: Worker pay + 4% platform charge + the payment gateway charge (about 2%). The money is held until you approve the hours.\n- Workers within about 30 km are notified. Booking is instant until 2 hours before the start. Seats still empty 2 hours before the start are cancelled with a 100% refund for those seats and a free platform charge voucher.\n',
  },
  {
    title: 'On the day of a scheduled shift',
    body: '- Each booking has a 4-character code shown only to you. Give it to the Worker on arrival; they must be within 200 metres of the workplace to check in.\n- To finish early, both sides must agree with a one-time PIN; you then pay for the hours actually worked.\n- Extra time (overtime) is charged at 130% of the hourly rate, plus the platform and gateway charges, only when you request it and the Worker accepts in the app.\n- After the shift, review and approve the hours. The Worker is paid after approval.\n',
  },
  {
    title: 'Live Work',
    body: "- You pay first: Worker pay + 4% platform charge + 2% tax on (pay + platform charge). Live Work has no payment gateway charge.\n- Nearby Workers get the request and the first to accept is booked.\n- If no Worker accepts during a search, you choose within 10 minutes: get a full refund, or raise the pay by ₹10, ₹20 or ₹30 (per hour for hourly work, on the task price for task work) and search again. You can search up to 3 times in total and pay only once upfront. The raised amount, with the 4% platform charge and tax on it, is added to your final bill and paid at the end.\n- If you don't choose within 10 minutes, or nobody accepts after the 3rd search, your payment is refunded in full automatically.\n- Give the Worker the arrival code when they arrive; the work then starts. When the work is done, give the Worker the completion code.\n- Hourly work is billed only for the time actually worked, up to the booked time plus any extra time; the rest of your payment is refunded. Task work is billed at the full task price.\n- Extra time is requested by you, accepted by the Worker and charged at 130% of the hourly rate.\n",
  },
  {
    title: 'Payments and refunds',
    body: '- Payments are processed by our licensed payment partner. A booking is confirmed only after the payment partner confirms your payment.\n- Refunds go back to the original payment method. How long a refund takes to reach you depends on your bank.\n- On any cancellation the payment gateway charge is not refundable; the platform charge is refunded together with the refundable part of the pay.\n- Promo codes and vouchers apply only as shown in the app and cannot be exchanged for cash.\n',
  },
  {
    title: 'Cancellations and no-shows',
    body: 'Scheduled shifts (percent of the Worker pay; part of it goes to the Worker):\n- No Worker booked yet: free.\n- More than 12 hours before the start: free.\n- 12 to 6 hours before: 50% (30% goes to the Worker).\n- 6 to 2 hours before: 70% (40% goes to the Worker).\n- Less than 2 hours before: 100% (80% goes to the Worker).\n- If you stop the work or refuse the Worker without reason: you pay 100%; the Worker gets 80%.\n- If a Worker cancels less than 2 hours before, does not show up or walks off, you get a refund for that seat and a free platform charge voucher. A Worker who has not checked in 30 minutes after the start can be marked as a no-show; if nobody checks in before the shift ends, it is marked automatically.\n\nLive Work:\n- Before the Worker enters the arrival code (even after they accepted): free, full refund.\n- The Worker cancels before starting: no charge; we look for another Worker.\n- You force-cancel after the Worker started (no code needed): you pay 100%. "End work" without the completion code counts as a force cancel.\n- The Worker force-cancels after starting: you are not charged (full refund) and you get a free platform charge voucher.\n',
  },
  {
    title: 'Free platform charge voucher',
    body: 'The voucher waives the platform charge and the payment gateway charge on your next booking. It is valid for 60 days, cannot be transferred and is not cash.\n',
  },
]

/**
 * Major-city landing pages. The product itself is pan-India: a worker sets
 * their own city and a business posts its own area. These pages exist so
 * common city searches reach that screen. They are not a coverage limit.
 */

export type CityFaq = { question: string; answer: string }

export type City = {
  slug: string
  name: string
  jobs: {
    title: string
    description: string
    h1: string
    paragraphs: string[]
    faqs: CityFaq[]
  }
  hire: {
    title: string
    description: string
    h1: string
    paragraphs: string[]
    faqs: CityFaq[]
  }
}

type Profile = {
  slug: string
  name: string
  state: string
  scene: string
  areas: string
  workerDay: string
  businessDay: string
}

const payNote =
  'Pay is written on every listing before you accept. There is no city-wide rate here, because the amount depends on the job, the hours, and the category.'

const PROFILES: Profile[] = [
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    scene:
      'A warehouse loads in the morning, a restaurant needs extra hands at lunch, and an event needs ushers in the evening. Demand changes by neighbourhood, not by one office.',
    areas: 'Okhla and Naraina godowns, Karol Bagh and Lajpat Nagar shops, and banquet and delivery pockets in Dwarka',
    workerDay:
      'Someone takes an evening retail shift inside NCR, someone else weekend kitchen support, someone else one day of promo staff. Take a listing farther out only when the area on the card is on your route.',
    businessDay:
      'A busy weekend, a stock count, or a wedding evening does not justify a full payroll team, but the floor cannot run empty. Write how many people, which category, the hours, and the pay.',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    scene:
      'Work follows local-train timings too. Loading comes up at the docks and the Bhiwandi godowns, counter support in the Andheri and Dadar markets, and one-night events in the south or the western suburbs.',
    areas: 'Dadar and Crawford markets, Andheri and Goregaon shops, Bhiwandi warehouses, and Bandra and Lower Parel venues',
    workerDay:
      'Morning loading and an evening shop shift fit the same day only when the hours do not overlap. Decide the harbour, central, or western line from the area on the card. “Mumbai” is not one route.',
    businessDay:
      'A store needs a sale weekend, a godown needs an inbound spike, a venue needs only a setup crew. Write the zone clearly. “All of Mumbai” does not tell a worker which station.',
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    scene:
      'Factories and warehouses sit around Peenya and Electronics City, offices along Whitefield and the ORR need moving or pantry cover, and retail has a different rush from KR Market to the malls.',
    areas: 'Peenya Industrial Area, KR Market, Whitefield, Electronics City, and cafes and venues in Indiranagar–Koramangala',
    workerDay:
      'Traffic is part of a shift in this city. Leave according to the start time on the card. Part-time is often an evening cafe or store shift. Daily-wage packing or loading is often in the morning.',
    businessDay:
      'A campus needs event ushers, a warehouse needs pick-and-pack cover, a restaurant needs the dinner rush. Write the address. Stopping at “Bengaluru” makes Whitefield and Peenya the same commute.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    scene:
      'Industrial and godown work sits toward Jeedimetla and Uppal, shops in Kukatpally and Ameerpet, office support and events in Gachibowli and Madhapur, and daily cover in the old-city markets.',
    areas: 'Kukatpally, Ameerpet, Uppal, Jeedimetla, Gachibowli, and the Charminar–Begum Bazaar markets',
    workerDay:
      'The distance between the two clusters is long. Do not put a Secunderabad shift and a Gachibowli shift on the same day unless the hours on the cards allow it. Read the area first.',
    businessDay:
      'An exhibition stall, a cloud-kitchen rush, and a godown count each need a different category. Keep the pay upfront so only people ready for that amount apply.',
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    scene:
      'The Ambattur and Sriperumbudur industrial belt needs factory support, shops in T Nagar and Anna Nagar need retail, George Town needs loading, and beaches or halls need event cover.',
    areas: 'T Nagar, Anna Nagar, Ambattur, George Town, Guindy, and offices and cafes on OMR',
    workerDay:
      'Heat and distance both matter. One day’s loading and an evening shop shift are separate posts. Take only the one whose end time does not clash with your next plan.',
    businessDay:
      'A textile sale, an auto-belt dispatch, or an evening at a marriage hall: write the staffing window and post it. Do not treat this as a stand-in for a permanent role. It is short cover.',
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    scene:
      'Trading and loading sit toward Burrabazar and Howrah, offices and events in Salt Lake and New Town, and restaurants and shops peak differently at Gariahat and Park Street.',
    areas: 'Burrabazar, Howrah, Salt Lake, New Town, Gariahat, and Park Street',
    workerDay:
      'Check the ferry or local-train time before the shift. A market morning and an office-side afternoon are not the same. Use the category to separate helper, warehouse, restaurant, and event.',
    businessDay:
      'If you need extra hands for Puja season or a trade fair, write the dates on the post. Do not leave an old shift open after the season ends.',
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    scene:
      'Factories and warehouses in Chakan and Pimpri–Chinchwad need floor cover, offices in Hinjewadi need support staff, and cafes in Kothrud or Camp need short shifts.',
    areas: 'Pimpri–Chinchwad, Chakan, Hinjewadi, Kothrud, Hadapsar, and Camp',
    workerDay:
      'The factory belt and the IT side are different commutes. Do not accept a “Pune job” without reading the area on the card. Evening hours help part-time students only when the end time is clear.',
    businessDay:
      'A production spike on one line, an office moving day, or a cafe weekend. Keep the headcount and category right, or a shop helper will see a factory-floor listing.',
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    scene:
      'Packing and loading sit in the Naroda and Odhav industrial areas, retail and events around CG Road and Law Garden, and hotel and office cover on SG Highway.',
    areas: 'Naroda, Odhav, CG Road, SG Highway, Maninagar, and Sarkhej',
    workerDay:
      'Textile and trading markets start early. An evening event or store shift is a separate post. Keep one shift at a time.',
    businessDay:
      'Packing a consignment, a showroom weekend, or a banquet night. Break “staff needed” into a category, a locality, and pay.',
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    scene:
      'Tourism, hotels, and handicraft godowns run on their own season, and units toward Sitapura need packing cover. Banquet crews are in demand on wedding dates.',
    areas: 'MI Road, C-Scheme, Tonk Road, Sitapura, and workshops in the walled city',
    workerDay:
      'In the heat, the timing of a far shift matters too. Do not pair a hotel evening with a unit morning when the cards overlap. Read the area separately.',
    businessDay:
      'A wedding weekend, a tourist rush, or godown packing. Do not mix a helper and an event host in one post. Write the venue area.',
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    scene:
      'Daily shop support sits in the Aminabad and Chowk markets, cafes, offices, and events in Gomti Nagar, and warehouses toward Nadarganj or Talkatora.',
    areas: 'Aminabad, Chowk, Gomti Nagar, Hazratganj, Alambagh, and Nadarganj',
    workerDay:
      'A full market shift and an evening part-time shift in Gomti Nagar tire you in different ways. Trust the hours on the card. If it says “flexible” and has no time, skip it.',
    businessDay:
      'An exhibition, a restaurant dinner, or a godown inbound. Write the dates. For next week, make a new post. Do not quietly change the old one.',
  },
  {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    scene:
      'Textile markets and processing units need packing and helper cover, shops on Ring Road and in Varachha need retail, and factory shifts sit toward Sachin GIDC.',
    areas: 'Ring Road, Varachha, Katargam, Sachin GIDC, and Udhna',
    workerDay:
      'A textile-dispatch rush and an evening shop shift are not the same post. Read both the category and the area. Applying is free, but one slot holds one booking.',
    businessDay:
      'When an order spike needs extra hands, post a daily or temporary shift. Do not wait for a full payroll team. Write how many cases and how long, in one line.',
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh',
    scene:
      'Work across the tri-city is spread through sector markets, hotels, malls, and support roles in IT parks. Sometimes a showroom needs floor staff, sometimes a hotel needs banquet cover, sometimes an office needs moving help for a day.',
    areas: 'Sector 17, Sector 22, Industrial Area, around Elante, and the Zirakpur or Mohali edge when the business posted that area',
    workerDay:
      'Students and people with another shift often take four or five evening hours. Morning loading is separate. Panchkula or Mohali appears only when that area is on the card.',
    businessDay:
      'A banquet, a showroom weekend, an office move. Write the sector or locality. Do not join Industrial Area and Sector 17 with one “Chandigarh” post.',
  },
  {
    slug: 'indore',
    name: 'Indore',
    state: 'Madhya Pradesh',
    scene:
      'The Sanwer and Pithampur industrial belt needs factory support, godowns in Palda and Sirpur need loading, and the Vijay Nagar and Rajwada markets need shop and event cover.',
    areas: 'Vijay Nagar, Palasia, Rajwada, Palda, Sanwer Road, and Pithampur',
    workerDay:
      'A morning slot in the industrial belt and an afternoon in the city market are different commutes. Take only a shift whose pay and end time are both clear.',
    businessDay:
      'Extra cover on a plant shift, a weekend in the cloth market, or a wedding crew. If the category is wrong, the alert goes to the wrong people.',
  },
  {
    slug: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    scene:
      'Loading and shop work sit in the Ernakulam markets and toward the port, office and event support in Kakkanad, and hotels and restaurants peak around Willingdon Island and MG Road.',
    areas: 'Ernakulam market, MG Road, Kakkanad, Edappally, Fort Kochi, and port-side godowns',
    workerDay:
      'Check the ferry or bus time before the shift. Do not overlap an event night and a market morning. Pay will be on the card. Later negotiation is not part of this page.',
    businessDay:
      'A hotel weekend, a godown inbound, or an exhibition. Write the headcount, and ask for dress or tools only when the post says so clearly.',
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    scene:
      'Engineering units, textile support, and foundries need shop-floor cover. Retail sits in the Gandhipuram and Town Hall markets, and support around shops and hospitals in Peelamedu and RS Puram is separate.',
    areas: 'Gandhipuram, Town Hall, Peelamedu, RS Puram, and the industrial belts named on the posting',
    workerDay:
      'Treat a factory-gate shift and market part-time as different cards. Tiruppur work appears in this list only when a business posted that area.',
    businessDay:
      'Packing a dispatch, a showroom’s festival weekend, or a loading day at a unit. Hours and pay upfront, so a worker arrives ready.',
  },
  {
    slug: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    scene:
      'Daily shop work sits in the Sitabuldi and Itwari markets, warehouses and industrial cover toward Hingna and MIHAN, and events and restaurants on Central Avenue.',
    areas: 'Sitabuldi, Itwari, Hingna, MIHAN, and Central Avenue',
    workerDay:
      'A full market day and an industrial-belt shift can appear in the same list, but the area is different. Skip the travel you do not want to do.',
    businessDay:
      'Extra hands at a mandi, a warehouse count, or an evening at a hall. Write temporary dates. Do not post a permanent job in this format.',
  },
  {
    slug: 'bhopal',
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    scene:
      'Shops, cafes, and offices sit in New Market and MP Nagar, industrial cover in Govindpura, and a different residential demand toward Misrod or Bairagarh.',
    areas: 'MP Nagar, New Market, Govindpura, Misrod, and Bairagarh',
    workerDay:
      'An evening cafe shift and morning loading are separate posts. Take part-time only when the end time does not clash with home or another duty.',
    businessDay:
      'An office move, a shop festival, or short cover at a plant. Write the locality. “Bhopal” alone is not an address.',
  },
  {
    slug: 'patna',
    name: 'Patna',
    state: 'Bihar',
    scene:
      'Shops, coaching hubs, and restaurants are busy on Boring Road and Fraser Road, godowns and events toward Patliputra and Didarganj, and short retail cover on Exhibition Road.',
    areas: 'Boring Road, Fraser Road, Patliputra, Exhibition Road, and Didarganj',
    workerDay:
      'Part-time around the coaching belt is often in the evening. A godown morning is separate. Keep the two cards apart after you read the times.',
    businessDay:
      'A function, a store weekend, or unloading at a warehouse. Set the pay yourself. This page has no fixed wage chart for Patna.',
  },
  {
    slug: 'bhubaneswar',
    name: 'Bhubaneswar',
    state: 'Odisha',
    scene:
      'Retail and cafes sit in Saheed Nagar and Jayadev Vihar, office support in Patia and Infocity, and industrial and godown work in Rasulgarh and Mancheswar.',
    areas: 'Saheed Nagar, Jayadev Vihar, Patia, Rasulgarh, and Mancheswar',
    workerDay:
      'Do not treat a short office-side shift and industrial loading as the same thing. Both area and category filter the list. Applying is free.',
    businessDay:
      'A campus event, a shop’s festival week, or a dispatch day at a unit. Close the listing when the seats are full, and post a new one for the next date.',
  },
  {
    slug: 'guwahati',
    name: 'Guwahati',
    state: 'Assam',
    scene:
      'Trading and shop support sit in Paltan Bazaar and Fancy Bazaar, hotels, offices, and events on GS Road, and separate industrial and market cover toward Noonmati or Beltola.',
    areas: 'Paltan Bazaar, Fancy Bazaar, GS Road, Noonmati, and Beltola',
    workerDay:
      'In the rainy months, read both the time and the area of a far shift. A market morning and a GS Road evening are different bookings.',
    businessDay:
      'A hotel peak, an extra counter in a bazaar, or a night at a venue. Write the instructions in one line so the worker arrives prepared.',
  },
  {
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    scene:
      'Loading and factory support sit in the port and the Gajuwaka–Autonagar industrial belt, shops and restaurants in Dwaraka Nagar and MVP, and event cover at beach-side venues.',
    areas: 'Gajuwaka, Autonagar, Dwaraka Nagar, MVP Colony, and the port-side yards named on the posting',
    workerDay:
      'The plant side and the beach-road side are different commutes. Take a night shift only when the hours are complete on the card. Assume a vehicle only when the post asks for one.',
    businessDay:
      'An extra gang at a yard, a store weekend, or an evening at a hall. Give security and helper separate categories.',
  },
  {
    slug: 'ludhiana',
    name: 'Ludhiana',
    state: 'Punjab',
    scene:
      'Hosiery units, cycle-parts workshops, dyeing houses, and packaging floors often need extra hands for one shift, not a full job. This is one industrial city in Punjab, not a limit on the rest of India.',
    areas: 'Units, godowns, and shops around Focal Point, Gill Road, Dugri, Chandigarh Road, and Model Town',
    workerDay:
      'Some days there is more packing, some days loading, some days only a counter. A factory morning and a shop afternoon are separate posts. A listing from another city is not mixed in here.',
    businessDay:
      'If dispatch grows, packing stalls, or a shop needs weekend cover, post a daily shift. There is no separate “Ludhiana package” rate. The worker sees the pay you write.',
  },
]

function jobsPage(city: Profile): City['jobs'] {
  return {
    title: `Daily Wage & Part-Time Jobs in ${city.name} | KaaamNow`,
    description: `Find daily wage, hourly, and part-time jobs in ${city.name}. Pay is shown upfront and applying is free. KaaamNow lists work across India.`,
    h1: `Daily wage and part-time jobs in ${city.name}`,
    paragraphs: [
      `${city.name} is in ${city.state}. ${city.scene} KaaamNow puts these short openings in one list: daily wage, hourly, and part-time. Pay, time, and area show as soon as a job opens, so you can see whether the shift fits your day. The platform covers India. The ${city.name} list is only the businesses that post an area in this city.`,
      `${city.areas} are not the same commute. ${city.workerDay} That is why “work in ${city.name}” means a different shift for each person. You choose a category, such as helper, packing, loading, delivery, warehouse, restaurant, security, or event, and you see only those cards.`,
      `An account starts with a phone number. You then set ${city.name} and the kind of work. When a business posts a shift in that category, the listing shows the hours and the pay upfront. Applying is free. If you take a shift, arrival and completion are confirmed in the app, so both sides know the work happened. ${payNote}`,
      `Part-time in ${city.name} is a short window: an evening retail shift, weekend kitchen support, or a few hours at an event. Daily wage is usually one day or one shift. Temporary work can run for a few days, and every posting comes with its own dates. You cannot take overlapping shifts. A job in this ${city.state} city is not attached to another state’s page.`,
      `If you are in ${city.name} and want to see work for today or this week, open the worker app and read the open shifts in your area. This page takes a ${city.name} search to that screen. Live jobs appear in the app, not on this marketing page. If your city is not in this list, you can still set your area in the app, because hiring runs across India wherever a business posts.`,
    ],
    faqs: [
      {
        question: `How do I find a daily wage job in ${city.name}?`,
        answer: `Create an account in the KaaamNow worker app, set ${city.name}, and read the open shifts in your category. Every card shows the time and the pay first.`,
      },
      {
        question: `Can I also find work outside ${city.name}?`,
        answer:
          'Yes. KaaamNow covers India. A shift in another city appears when you choose that area. By default you see posts in your own city.',
      },
      {
        question: 'Is there a charge to apply?',
        answer: 'No. Reading a job and applying are free. The pay is the amount shown on the listing.',
      },
      {
        question: 'Can I take only part-time work?',
        answer:
          'Yes. Choose the shift whose hours match your time. Daily, hourly, and part-time posts can be separate.',
      },
    ],
  }
}

function hirePage(city: Profile): City['hire'] {
  return {
    title: `Hire Workers in ${city.name} – Daily Shift & Temporary Staff | KaaamNow`,
    description: `Need a helper, delivery, security, or event staff in ${city.name}? Post the job on KaaamNow. Hiring runs across India, for the area you set.`,
    h1: `Hire workers in ${city.name}`,
    paragraphs: [
      `Businesses in ${city.name} often need one shift, not a whole team. ${city.businessDay} On KaaamNow you post a job for a daily shift, hourly cover, or temporary staff. You write the area, the time, and the pay, and the worker sees the same thing. The platform is not limited to ${city.name}. You post the area of the Indian city where you work.`,
      `${city.areas} can all use this flow. ${city.scene} You choose the category, whether helper, loader, packer, delivery support, counter staff, or event crew, so the alert does not go to the wrong people. Turn “staff needed in ${city.name}” into a clear post. Do not leave a vague message.`,
      `Hiring is a straight sequence. Create a business account, fill in the shift, and set the pay upfront. Workers in that category and area see the job. You can close the listing when the seats are full. On the day, arrival and completion are recorded in the app. This page does not claim a separate package rate for ${city.name}. The worker sees the amount you post. The platform fee appears when you confirm the booking in the app.`,
      `Temporary staffing here is not a named agency contract. It is a dated shift you can close when the seats are full. If you need people again tomorrow, post again. Workers outside ${city.state} see a ${city.name} job only when that area is selected, not by default. Do not run two cities from one post.`,
      `Make the first posting from the business app. Decide the category first, then write the ${city.name} area and the hours. Live applicants come from that posting. Today’s headcount is not shown on this marketing page, because it changes through the day.`,
    ],
    faqs: [
      {
        question: `How do I hire a helper in ${city.name}?`,
        answer:
          'Post a helper shift in the business app, write the area and the hours, and set the pay upfront. Workers see that same detail.',
      },
      {
        question: 'Can I hire for only a few hours?',
        answer: 'Yes, if you post an hourly or short daily shift and write a clear end time.',
      },
      {
        question: `Will only people in ${city.name} apply?`,
        answer:
          'Workers who keep that area on their list. KaaamNow runs across India, and a worker outside your area sees the listing only when it matches their filter.',
      },
      {
        question: 'How much pay should I write?',
        answer: `Whatever you want to pay for that shift. The site does not fix a rate for ${city.name}. The worker will see the amount you post.`,
      },
    ],
  }
}

export const CITIES: City[] = PROFILES.map((city) => ({
  slug: city.slug,
  name: city.name,
  jobs: jobsPage(city),
  hire: hirePage(city),
}))

/**
 * Editable public-site facts. Landing copy for each city and category lives here
 * so a new city is one object, not a new template.
 *
 * App screens stay on APP_ORIGIN. That host is the signed-in product, not a
 * duplicate of this marketing site, so it is not redirected here.
 */

export const SITE_URL = 'https://kaaamnow.in'
export const SITE_NAME = 'KaaamNow'
export const LOCALE = 'en_IN'
export const LANG = 'en-IN'
export const OG_IMAGE_PATH = '/og-image.png'

/** Signed-in web app. Do not point these paths at SITE_URL. */
export const APP_ORIGIN = 'https://www.kaaamnow.in'

export const APP_LINKS = {
  findWork: `${APP_ORIGIN}/worker/home`,
  hireWorkers: `${APP_ORIGIN}/business/home`,
  faq: `${APP_ORIGIN}/faq`,
} as const

export const CONTACT = {
  phoneDisplay: '+91 86187 96332',
  phoneSchema: '+91-861-879-6332',
  supportEmail: 'support@kaaamnow.in',
  helpEmail: 'help@kaaamnow.in',
  infoEmail: 'info@kaaamnow.in',
  legalEmail: 'legal@kaaamnow.in',
} as const

/** Fill the TODO values, then they are added to Organization.sameAs. */
export const SOCIAL = {
  instagram: 'https://www.instagram.com/kaaamnow',
  linkedin: 'https://www.linkedin.com/company/kaaamnow',
  facebook: 'TODO',
  youtube: 'TODO',
} as const

export const COMPANY = {
  legalName: 'KAAAMNOW TECHNOLOGY LLP',
  streetAddress: '148, 1st Main, 1st Cross, Malleshpallya, 1st floor',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560075',
  country: 'IN',
  mapsUrl: 'https://maps.app.goo.gl/MQSiFBDAWncA9dyP6',
} as const

export type Faq = { question: string; answer: string }
export type Crumb = { name: string; href: string }
export type RelatedLink = { label: string; href: string }

export type LandingPage = {
  path: string
  title: string
  description: string
  h1: string
  paragraphs: string[]
  faqs: Faq[]
  crumbs: Crumb[]
  related: RelatedLink[]
}

export type City = {
  slug: string
  name: string
  jobs: Omit<LandingPage, 'path' | 'crumbs' | 'related'>
  hire: Omit<LandingPage, 'path' | 'crumbs' | 'related'>
}

export type Category = Omit<LandingPage, 'crumbs' | 'related'> & { label: string }

const payNote =
  'Har listing pe pay pehle se likha hota hai. Yahan koi shehar-wide rate nahi diya gaya, kyunki amount job, hours aur category pe depend karta hai.'

export const CITIES: City[] = [
  {
    slug: 'ludhiana',
    name: 'Ludhiana',
    jobs: {
      title: 'Daily Wage & Part-Time Jobs in Ludhiana | KaaamNow',
      description:
        'Ludhiana me daily wage, hourly aur part-time jobs dhoondo. Pay upfront, apply free. Aaj hi KaaamNow pe kaam paao.',
      h1: 'Ludhiana me Daily Wage aur Part-Time Jobs',
      paragraphs: [
        'Ludhiana Punjab ka industrial shehar hai, aur yahan kaam ki demand factory gate se lekar shop floor tak roz badalti rehti hai. Hosiery units, cycle-parts workshops, dyeing houses aur packaging floors aksar ek shift ke liye extra haath mangte hain, poori naukri ke liye nahi. KaaamNow unhi short openings ko ek list mein lata hai: daily wage, hourly aur part-time. Job khulte hi pay, time aur area dikhta hai, isliye aap pehle dekh sakte ho ki shift aapke din mein fit hoti hai ya nahi.',
        'Focal Point, Gill Road, Dugri aur Chandigarh Road ke aas-paas chhote units aur godowns dono hain. Kisi din packing zyada hoti hai, kisi din loading, kisi din sirf ek counter pe madad chahiye hoti hai. Isliye yahan “kaam chahiye Ludhiana” ka matlab har kisi ke liye alag hai. Koi subah ki factory shift leta hai, koi dopahar ke baad delivery ya shop support. Aap category chunte ho, jaise helper, packing, loading, delivery ya warehouse, aur sirf wahi cards dekhte ho.',
        'Account phone number se banta hai. Uske baad aap apni city aur kaam ki type set karte ho. Jab koi business us category mein shift post karta hai, listing pe hours aur pay upfront hote hain. Apply karna free hai. Agar aap shift lete ho, to arrival aur completion app ke andar confirm hote hain, taaki dono taraf ko pata ho kaam hua. Koi bhi rate yahan estimate ke tor pe nahi likha gaya. ' +
          payNote,
        'Part-time bhi isi shehar mein common hai: ek retail counter ki shaam ki shift, ek event ki kuch ghante, ya ek godown ka half day. Daily wage jobs aksar ek din ya ek shift ki hoti hain. Temporary kaam kuch din chal sakta hai, lekin har posting apni dates ke saath aati hai. Aap overlapping shifts nahi le sakte, isliye ek time pe ek jagah par hi commitment rehti hai.',
        'Agar aap abhi Ludhiana mein ho aur aaj ya is hafte ka kaam dekhna chahte ho, to worker app kholo aur apne area ki open shifts padho. Delhi, Chandigarh ya Jaipur ki listings yahan mix nahi hoti. Shehar ke page ka matlab sirf itna hai ki aap us city ke searches se sahi screen tak pahunch jao. Jo jobs live hain, woh app mein dikhti hain, is marketing page pe nahi.',
      ],
      faqs: [
        {
          question: 'Ludhiana mein daily wage job kaise dhoondun?',
          answer:
            'KaaamNow worker app mein account banao, Ludhiana set karo, aur apni category ki open shifts dekho. Har card pe time aur pay pehle se likha hota hai.',
        },
        {
          question: 'Kya Ludhiana ki factory aur hosiery shifts bhi aati hain?',
          answer:
            'Businesses jo packing, loading, helper ya warehouse cover post karte hain, unki shifts list mein aati hain. Kaun si unit aaj hiring kar rahi hai, yeh us din ki live posts pe depend karta hai.',
        },
        {
          question: 'Apply karne ka koi charge hai?',
          answer: 'Nahi. Job dekhna aur apply karna free hai. Pay wahi hota hai jo listing pe dikhaya gaya ho.',
        },
        {
          question: 'Main sirf part-time le sakta hoon?',
          answer:
            'Haan. Aap wahi shift chuno jiske hours aapke time se match karte hon. Daily, hourly aur part-time posts alag-alag ho sakte hain.',
        },
      ],
    },
    hire: {
      title: 'Hire Workers in Ludhiana – Daily Shift & Temporary Staff | KaaamNow',
      description:
        'Ludhiana me helper, delivery, security ya event staff chahiye? KaaamNow pe job post karo aur jaldi workers hire karo.',
      h1: 'Ludhiana me Workers Hire Karo',
      paragraphs: [
        'Ludhiana ke businesses ko aksar poori team nahi, ek shift chahiye hoti hai. Hosiery ka dispatch badh jaye, cycle-parts ki packing ruk jaye, ya ek shop ko weekend cover chahiye, to permanent hiring slow padti hai. KaaamNow pe aap daily shift, hourly ya temporary staff ke liye job post karte ho. Area, time aur pay aap likhte ho, aur wahi worker ko dikhta hai.',
        'Yeh page factories, warehouses, retail shops, dhabas, banquet halls aur chhote offices ke liye hai jo Focal Point, Gill, Model Town ya station ke aas-paas kaam karte hain. Helper, loader, packer, delivery support, counter staff ya event crew, category aap choose karte ho taaki galat log ko alert na jaye. “Mazdoor chahiye Ludhiana” ya “staff chahiye Ludhiana” jaisi zaroorat isi flow mein aati hai: post, pay dikhao, applicants dekho.',
        'Hiring ka order seedha hai. Business account banao, shift ka detail bharo, pay upfront set karo. Workers jo us category aur area mein hain, unhe job dikhti hai. Aap listing band kar sakte ho jab seats bhar jayein. Kaam ke din arrival aur completion app mein record hote hain. Pricing ka koi alag “Ludhiana package” is page pe claim nahi kiya gaya. Jo amount aap post karte ho, worker wahi dekhta hai. Platform fee tab dikhti hai jab aap app mein booking confirm karte ho.',
        'Temporary staffing ka matlab yahan ek lambe contract ki jagah ek clearly dated shift hai. Kal subah ke char ghante, ya is hafte ki teen shaam. Agar aapko roz ek nayi jagah cover chahiye, har din nayi post karo, purani post ko chupchaap extend mat samjho. Chandigarh ya Delhi ki team yahan se hire nahi hoti. Location aapki posting ka hissa hai.',
        'Shuru karne ke liye business app kholo aur pehli shift post karo. Agar aap pehle dekhna chahte ho ki worker kin categories mein aate hain, homepage ki job categories se un pages ko padh lo, phir wahi category post mein select karna.',
      ],
      faqs: [
        {
          question: 'Ludhiana mein helper kaise hire karun?',
          answer:
            'Business app mein shift post karo, category helper chuno, area aur pay likho. Workers ko wahi detail dikhegi jo aapne post ki hai.',
        },
        {
          question: 'Kya ek din ki staffing ho sakti hai?',
          answer:
            'Haan. Daily shift ya kuch ghante ki hourly post kar sakte ho. Dates aur end time posting mein clear hone chahiye.',
        },
        {
          question: 'Staff ko pay kab pata chalta hai?',
          answer: 'Jab aap job post karte ho tab. Pay listing pe upfront hota hai, baad mein surprise ke tor pe nahi judta.',
        },
        {
          question: 'Kya yeh sirf factories ke liye hai?',
          answer:
            'Nahi. Shops, warehouses, events aur kitchens bhi daily ya part-time cover post kar sakte hain, jab unke paas us category ka kaam ho.',
        },
      ],
    },
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    jobs: {
      title: 'Daily Wage & Part-Time Jobs in Delhi | KaaamNow',
      description:
        'Delhi me daily wage, hourly aur part-time jobs dhoondo. Pay upfront, apply free. Aaj hi KaaamNow pe kaam paao.',
      h1: 'Delhi me Daily Wage aur Part-Time Jobs',
      paragraphs: [
        'Delhi mein kaam ek jagah nahi tikta. Subah ek warehouse mein loading hoti hai, dopahar ek restaurant ko extra hands chahiye, shaam ek event ko ushers. Daily wage aur part-time yahan isliye chalte hain kyunki demand neighbourhood ke hisaab se badalti hai, ek hi office ke hisaab se nahi. KaaamNow un openings ko ek list mein rakhta hai jismein time, area aur pay pehle se likha hota hai.',
        'Okhla aur Naraina ke godowns, Karol Bagh aur Lajpat Nagar ki shops, Dwarka aur Noida border ke paas ke banquet aur delivery pockets, sab ka kaam ek jaise nahi hota. Isliye aap category chunte ho. Helper, delivery, packing, security support, restaurant ya event staff. “Kaam chahiye Delhi” search karne wale ko har listing nahi chahiye, sirf woh shift chahiye jo uske aaj ke route mein pade.',
        'Sign up phone se hota hai. Phir aap Delhi set karke open shifts padhte ho. Apply free hai. Agar aap shift accept karte ho, to us slot pe dusri shift nahi le sakte. Arrival aur completion app ke flow se mark hote hain, taaki aap aur business dono ko attendance ka record mile. ' +
          payNote,
        'Part-time jobs Delhi mein aksar shaam ki retail duty, weekend kitchen support, ya ek din ka promo staff hoti hain. Daily wage zyada tar ek shift ya ek din ki hoti hai. Temporary runs kuch din ki ho sakti hain, lekin har post apni dates ke saath aati hai. Aap door ke shehar ki job isliye skip kar sakte ho kyunki area card pe hota hai.',
        'Live jobs is marketing page pe inventory ki tarah nahi chipki hoti. Jo aaj open hai, woh worker app mein hai. Yahan se seedha wahi screen kholo, Delhi choose karke list padho, aur jis shift ka pay aur time clear ho usi ko lo.',
      ],
      faqs: [
        {
          question: 'Delhi mein part-time job kahan dikhegi?',
          answer:
            'Worker app mein Delhi aur part-time ya hourly filter ke saath open shifts dekho. Har card pe area, time aur pay hota hai.',
        },
        {
          question: 'Kya NCR ki har society cover hoti hai?',
          answer:
            'Sirf wahi areas jahan koi business ne shift post ki ho. Listing ka area padh lo. Koi bhi promise nahi hai ki har sector mein aaj job hogi.',
        },
        {
          question: 'Delivery jobs alag se milti hain?',
          answer:
            'Jab koi business delivery support post karta hai tab. Category delivery chuno, phir sirf wahi cards aayenge.',
        },
        {
          question: 'Paise listing ke baad badal sakte hain?',
          answer: 'Nahi. Jo pay post pe likha hai, wahi aapko dikhta hai. Apply karne se pehle wahi amount padh lo.',
        },
      ],
    },
    hire: {
      title: 'Hire Workers in Delhi – Daily Shift & Temporary Staff | KaaamNow',
      description:
        'Delhi me helper, delivery, security ya event staff chahiye? KaaamNow pe job post karo aur jaldi workers hire karo.',
      h1: 'Delhi me Workers Hire Karo',
      paragraphs: [
        'Delhi mein ek busy weekend, ek stock count, ya ek shaadi ki shaam poori payroll team justify nahi karti. Phir bhi floor khaali nahi chal sakta. KaaamNow businesses ko daily shift, hourly aur temporary staff post karne deta hai, pay upfront ke saath. Worker wahi shehar aur category dekhta hai jo aap select karte ho.',
        'Restaurants Lajpat Nagar mein, warehouses Okhla mein, shops Karol Bagh mein, aur venues jo Dwarka ya south Delhi mein ek raat ka crew mangte hain, sab isi flow ko use kar sakte hain. “Staff chahiye Delhi” ko ek clear post banao: kitne log, kaun si category, kitne baje se kitne baje, kitna pay. Galat category mat chuno, warna helper ko security ki listing mil jayegi.',
        'Account banne ke baad aap shift describe karte ho aur pay set karte ho. Jab tak aap app mein confirm nahi karte, worker ko final booking nahi milti. Platform fee aur taxes wahi dikhte hain jahan payment hoti hai. Is page pe koi Delhi-only price list nahi hai, kyunki aap khud rate rakhte ho. ' +
          'Jo rate aap likhte ho, listing pe wahi rehta hai.',
        'Temporary staffing yahan ek named agency contract nahi hai. Yeh ek dated shift hai jise aap band kar sakte ho jab seats full hon. Agar kal phir log chahiye, nayi post karo. Ludhiana ya Jaipur ke workers ko Delhi ki job tabhi dikhegi jab aap unka area select karo, default nahi.',
        'Pehli posting business app se karo. Category pages, jaise restaurant staff ya warehouse, padh ke decide karo kaun sa label aapke kaam ke sabse kareeb hai, phir wahi chuno.',
      ],
      faqs: [
        {
          question: 'Delhi mein event staff kaise book karun?',
          answer:
            'Business app mein event staff category ki shift post karo, venue area aur hours likho, pay upfront set karo.',
        },
        {
          question: 'Kya main sirf chaar ghante ke liye hire kar sakta hoon?',
          answer: 'Haan, agar aap hourly ya short daily shift post karte ho aur end time clear likhte ho.',
        },
        {
          question: 'Workers ko meri poori contact list dikhti hai?',
          answer:
            'Nahi. Unhe woh job detail dikhti hai jo aap posting mein daalte ho, taaki woh shift samajh saken.',
        },
        {
          question: 'Agar koi na aaye to kya karun?',
          answer:
            'App mein us booking ka status dikhta hai. Support usi booking se contact kiya ja sakta hai. Yahan koi alag Delhi helpline number nahi hai.',
        },
      ],
    },
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    jobs: {
      title: 'Daily Wage & Part-Time Jobs in Chandigarh | KaaamNow',
      description:
        'Chandigarh me daily wage, hourly aur part-time jobs dhoondo. Pay upfront, apply free. Aaj hi KaaamNow pe kaam paao.',
      h1: 'Chandigarh me Daily Wage aur Part-Time Jobs',
      paragraphs: [
        'Chandigarh tri-city ka kaam sector markets, hotels, Elante jaise malls, aur IT parks ke support roles mein bikhra hua hai. Yahan roz ek hi factory gate pe line nahi lagti. Kabhi ek showroom ko floor staff chahiye, kabhi ek hotel ko banquet cover, kabhi ek office ko ek din ka moving help. Daily wage, hourly aur part-time posts isi mix ko cover karti hain.',
        'Sector 17, Sector 22, Industrial Area Phase 1 aur Zirakpur ke edge pe jo businesses post karte hain, unka area card pe likha aata hai. Aap Mohali side ka lamba commute tabhi lo jab time aur pay aapko theek lage. “Part time jobs Chandigarh” dhoondte waqt category filter use karo: retail, helper, restaurant, event ya warehouse. Warna aapko woh shifts bhi dikhengi jo aapke skill se door hain.',
        'Phone se account banta hai. Chandigarh select karke list kholo. Apply free hai. Shift lene ke baad us time window mein doosri job mat rakho. Check-in us jagah ke aas-paas hota hai jahan business ne address diya hai. ' +
          payNote,
        'Students aur dusri shift karne wale log yahan aksar shaam ki chaar-paanch ghante ki duty lete hain. Daily wage workers subah ki loading ya housekeeping cover lete hain. Temporary assignments, jaise ek exhibition ke teen din, alag posts hoti hain jinme dates likhi hoti hain. Koi bhi post “hamesha ke liye” nahi hoti jab tak usme wahi na likha ho, aur KaaamNow permanent naukri board bhi nahi hai.',
        'Agar aap tri-city mein ho, worker app kholo aur aaj ki open shifts padho. Is page ka kaam sirf itna hai ki Chandigarh ki search seedha us kaam tak pahunche. Live cards app mein update hote hain.',
      ],
      faqs: [
        {
          question: 'Chandigarh mein part-time kaam kaise milta hai?',
          answer:
            'Worker app mein shehar Chandigarh rakho aur jin hours mein aap free ho, un shifts ko padho. Pay aur end time pehle se dikhte hain.',
        },
        {
          question: 'Kya Panchkula ya Mohali ki jobs bhi isi list mein hain?',
          answer:
            'Sirf tab, jab business ne us area ki shift post ki ho aur area aapke filter mein aata ho. Card ka area alag se padho.',
        },
        {
          question: 'Hotel ya mall ki shift alag category hai?',
          answer:
            'Restaurant, retail ya event staff mein se jo posting ke kareeb ho, woh category chuno. Business bhi wahi label use karta hai.',
        },
        {
          question: 'Kya experience likhna zaroori hai?',
          answer:
            'Profile mein jo aap likhte ho worker dekhta hai business. Jhoothi skill mat likho. Kai helper aur support shifts on-the-job hoti hain, lekin yeh har post ke liye true nahi hai.',
        },
      ],
    },
    hire: {
      title: 'Hire Workers in Chandigarh – Daily Shift & Temporary Staff | KaaamNow',
      description:
        'Chandigarh me helper, delivery, security ya event staff chahiye? KaaamNow pe job post karo aur jaldi workers hire karo.',
      h1: 'Chandigarh me Workers Hire Karo',
      paragraphs: [
        'Chandigarh ke hotels, cafes, sector markets aur chhote warehouses ko kabhi-kabhi sirf ek shift ki team chahiye hoti hai. Poori mahine ki hiring isliye atakti hai kyunki kaam khud teen din ya teen ghante ka hota hai. KaaamNow pe aap wahi window post karte ho, pay ke saath, aur workers jo us category mein hain unhe yahi detail dikhti hai.',
        'Ek banquet ko servers chahiye, ek showroom ko weekend floor staff, ek office ko shifting ke liye helpers. “Staff chahiye Chandigarh” ko vague message mat chhodo. Post mein category, sector ya locality, start, end, aur pay likho. Security support aur event crew ko helper wali post mat bhejo.',
        'Business account ke baad aap shift create karte ho. Pay aap set karte ho, koi Chandigarh rate card is website pe fixed nahi hai. Jo fees app checkout pe dikhti hain, wahi lagti hain. Is page pe unhe dohra kar ek number nahi banaya gaya, taaki purana figure galat na pade.',
        'Temporary cover ka sahi istemal yeh hai ki aap dates khatam hote hi post band samjho. Agli weekend ke liye nayi shift banao. Workers tri-city ke bahar se tabhi aayenge jab aap unka area allow karo. Sector 17 ki dukaan ko Industrial Area ka commute tabhi samajh aata hai jab aapne address clearly likha ho.',
        'Hire karna ho to business app kholo. Pehle homepage se category padh lo agar label clear na ho, phir wahi naam se post karo jisse worker ko kaam pehchan aa jaye.',
      ],
      faqs: [
        {
          question: 'Chandigarh mein temporary staff kaise post karun?',
          answer:
            'Business app mein nayi shift kholo, dates aur hours likho, category chuno, aur pay upfront set karo.',
        },
        {
          question: 'Kya main ek hi post se kayi din cover kar sakta hoon?',
          answer:
            'Tab, jab aap wahi dates posting mein likho. Alag weekends ke liye alag posts zyada clear rehti hain.',
        },
        {
          question: 'Local sector ke bahar ke log apply karenge?',
          answer:
            'Jo worker us area ko apni list mein rakhte hain. Address aur timing clear likhne se galat commute wale log khud skip karte hain.',
        },
        {
          question: 'Payment listing ke baad change ho sakti hai?',
          answer: 'Post pe jo pay hai wahi worker dekhta hai. Badalna ho to nayi posting se karo, purani listing ko chupke mat badlo.',
        },
      ],
    },
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    jobs: {
      title: 'Daily Wage & Part-Time Jobs in Jaipur | KaaamNow',
      description:
        'Jaipur me daily wage, hourly aur part-time jobs dhoondo. Pay upfront, apply free. Aaj hi KaaamNow pe kaam paao.',
      h1: 'Jaipur me Daily Wage aur Part-Time Jobs',
      paragraphs: [
        'Jaipur mein kaam tourism, hotels, handicraft godowns, aur Sitapura side ke industrial units ke beech banta hai. Season pe banquet aur heritage-side venues ko extra staff chahiye hota hai. Doosre hafte ek workshop ko sirf packing cover chahiye. Daily wage aur part-time isliye yahan ek dusre jaise nahi hote. KaaamNow har post ko uske time, area aur pay ke saath dikhata hai.',
        'MI Road aur C-Scheme ke cafes, Tonk Road ke warehouses, Sitapura ke units, aur walled city ke workshops, sab ka commute alag hai. “Helper jobs Jaipur” dhoondte waqt area padho. Garmi mein door ki shift ka time bhi matter karta hai, isliye start aur end card pe hote hain. Category chuno: helper, packing, restaurant, event, delivery ya warehouse.',
        'Account phone number se banta hai. Jaipur set karke list kholo aur apply karo, yeh free hai. Ek time pe ek shift. Agar aap accept karte ho to usi booking ke hisaab se pahunchna hota hai. ' +
          payNote,
        'Part-time yahan aksar shaam ki hotel ya shop duty hoti hai. Daily wage ek din ki loading, housekeeping ya stall help ho sakti hai. Temporary kaam, jaise ek wedding season ka teen din, alag dates ke saath aata hai. Permanent naukri ya visa-style contract is app ka format nahi hai.',
        'Aaj ki open shifts dekhni hon to worker app kholo. Yeh page Jaipur ki search ko us list tak le jata hai. Jobs ki ginti yahan likhi nahi gayi, kyunki woh din bhar badalti rehti hai.',
      ],
      faqs: [
        {
          question: 'Jaipur mein daily wage job kahan se shuru karun?',
          answer:
            'Worker app mein Jaipur select karo aur aaj ki shifts padho. Pay, area aur hours usi card pe hote hain.',
        },
        {
          question: 'Kya hotel aur wedding staff ki alag posts aati hain?',
          answer:
            'Jab venue ya hotel unhe post kare. Event staff ya restaurant category chuno, phir titles padho.',
        },
        {
          question: 'Sitapura aur walled city ki jobs ek saath aati hain?',
          answer: 'List mein dono aa sakti hain. Har card ka area alag hota hai. Jo commute aap nahi karna chahte, use skip karo.',
        },
        {
          question: 'Kya mujhe khud ka vehicle chahiye?',
          answer:
            'Sirf tab, jab posting mein wahi likha ho. Delivery support aur on-site helper ki zaroorat ek jaise nahi hoti.',
        },
      ],
    },
    hire: {
      title: 'Hire Workers in Jaipur – Daily Shift & Temporary Staff | KaaamNow',
      description:
        'Jaipur me helper, delivery, security ya event staff chahiye? KaaamNow pe job post karo aur jaldi workers hire karo.',
      h1: 'Jaipur me Workers Hire Karo',
      paragraphs: [
        'Jaipur ke hotels, banquet halls, handicraft stores aur Sitapura ke units ko mahine bhar ki team se zyada aksar ek peak shift chahiye hoti hai. Wedding dates, tourist weekends, ya ek consignment ki packing, teeno ka staff alag hota hai. KaaamNow pe aap daily, hourly ya temporary shift post karte ho aur pay pehle hi likh dete ho.',
        '“Mazdoor chahiye Jaipur” ya “staff chahiye Jaipur” ko ek category do. Helper aur loader ko event host mat bulao. Venue ka area likho, chahe woh Tonk Road ho ya walled city, taaki worker commute samajh sake. Shops jo sirf Sunday cover chahti hain, unke liye ek din ki post kaafi hai.',
        'Aap business account se shift banate ho, seats aur pay set karte ho. Koi Jaipur package rate is page pe advertised nahi hai. Aapka diya hua pay hi listing hai. App jab payment maangta hai tab platform charges wahi screen dikhati hai.',
        'Temporary staffing ka yahan matlab hai clearly bounded dates. Season khatam hote hi purani post ko open mat chhodo. Nayi date ho to nayi shift. Workers doosre shehar se isliye nahi ghuste kyunki aapne Jaipur ka area choose kiya hai.',
        'Post karne ke liye business app use karo. Category page padh ke label confirm kar lo, phir usi naam se hiring shuru karo.',
      ],
      faqs: [
        {
          question: 'Jaipur mein banquet ke liye staff kaise milega?',
          answer:
            'Event staff category mein shift post karo, venue area, hours aur headcount likho, pay upfront rakho.',
        },
        {
          question: 'Kya handicraft godown ke liye packing staff post kar sakta hoon?',
          answer: 'Haan. Warehouse ya helper category mein se jo kaam ke kareeb ho use karo, aur packing clearly likho.',
        },
        {
          question: 'Ek Sunday ke liye hire kar sakta hoon?',
          answer: 'Haan. Start aur end usi din ke likho. Agle Sunday ke liye alag post karo.',
        },
        {
          question: 'Kitna pay likhun?',
          answer:
            'Jo aap us shift ke liye dena chahte ho. Site koi Jaipur rate fix nahi karti. Worker wahi amount dekhega jo aap post karoge.',
        },
      ],
    },
  },
]

export const CATEGORIES: Category[] = [
  {
    label: 'Daily wage jobs',
    path: '/daily-wage-jobs',
    title: 'Daily Wage Jobs in India | KaaamNow',
    description:
      'Daily wage jobs dhoondo jahan shift, area aur pay pehle se dikhe. KaaamNow pe aaj ka kaam dekho ya ek din ki team hire karo.',
    h1: 'Daily Wage Jobs, Shift aur Pay Upfront',
    paragraphs: [
      'Daily wage ka matlab yahan ek din ya ek shift ka kaam hai, koi open-ended naukri nahi. Business ko aaj extra haath chahiye, worker ko usi din ka clear slot. KaaamNow pe listing tabhi samajh aati hai jab area, start, end aur pay saath mein hon. Aap card padh kar decide karte ho, baad mein rate ka surprise nahi hota.',
      'Is category mein helper, loading, packing, housekeeping cover aur ek-din ki shop support aa sakti hai, jab business ne daily wage chuna ho. Har shehar ki list alag hoti hai. Ludhiana ki factory shift aur Jaipur ki banquet shift ek hi page pe mix nahi hoti. Shehar chuno, phir us din ki posts padho.',
      'Workers ke liye apply free hai. Ek waqt pe ek shift. Businesses ke liye posting ka kaam utna hi hai: category daily wage rakho, seats likho, pay set karo. Platform tab numbers dikhata hai jab aap app mein booking complete karte ho. Yahan koi national daily rate announce nahi kiya gaya.',
      'Agar aapko lagataar kai din kaam chahiye, har din ki post alag ho sakti hai ya aap dates ek hi temporary post mein likh sakte ho, jab tak app woh format deta hai. “Roz ka kaam” aur “hamesha ki naukri” ko ek mat samjho. Yeh page pehla wala hai.',
    ],
    faqs: [
      {
        question: 'Daily wage job aur part-time mein farak kya hai?',
        answer:
          'Daily wage aksar ek din ya ek poori shift hoti hai. Part-time kam ghante ki ho sakti hai aur hafte mein sirf kuch din. Dono mein pay posting pe likha hota hai.',
      },
      {
        question: 'Kaun se shehar cover hain?',
        answer: 'Abhi marketing pages Ludhiana, Delhi, Chandigarh aur Jaipur ke liye hain. App mein wahi shifts dikhti hain jo businesses post karte hain.',
      },
      {
        question: 'Kya main roz nayi job le sakta hoon?',
        answer: 'Haan, jab tak shifts overlap na karein aur aap unhe accept kar chuke ho.',
      },
    ],
  },
  {
    label: 'Part-time jobs',
    path: '/part-time-jobs',
    title: 'Part-Time Jobs in India | KaaamNow',
    description:
      'Part-time jobs near you: kam ghante ki shifts, pay upfront. KaaamNow pe kaam dhoondo ya short-hour staff hire karo.',
    h1: 'Part-Time Jobs, Kam Ghante, Clear Pay',
    paragraphs: [
      'Part-time yahan un shifts ke liye hai jo aapka poora din nahi le leti. Shaam ke chaar ghante ek counter pe, weekend ki kitchen help, ya hafte mein do dopahar ki packing. Log “part time jobs near me” isliye dhoondte hain kyunki unke paas college, dusri duty ya ghar ka time pehle se bhara hota hai.',
      'KaaamNow pe part-time tab useful hai jab hours card pe hon. “Flexible” likh kar time chhupaana nahi hota. Worker dekhta hai ki shift uske route mein hai ya nahi, aur pay usi card pe hota hai. Business ko bhi fayda hai: aap sirf peak hours ke liye log bulwaate ho, poori salary bandhi nahi hoti.',
      'Categories jaise retail, restaurant, delivery support ya event aksar part-time hoti hain, lekin har post ka label business chahta hai. Shehar pages, Ludhiana se Jaipur tak, isi tarah ki short shifts dikhane ke liye hain. Live list app mein hai.',
      'Apply free hai. Agar aap shift lete ho to us window mein doosri part-time mat rakhna. Businesses ko chahiye ki woh end time clearly likhein, taaki “near me” ka matlab sirf area na ho, balki aaj ki availability bhi ho.',
    ],
    faqs: [
      {
        question: 'Part-time job kitne ghante ki hoti hai?',
        answer: 'Jitne ghante us posting mein likhe hon. Koi ek fixed national duration nahi hai.',
      },
      {
        question: 'Kya students apply kar sakte hain?',
        answer: 'Haan, agar aap 18 ya usse zyada ho aur us shift ke hours mein available ho. Site age policy app ke terms mein hai.',
      },
      {
        question: 'Near me kaise kaam karta hai?',
        answer: 'Aap app mein apna area dete ho. Jo businesses us area mein post karte hain, wahi cards saamne aate hain.',
      },
    ],
  },
  {
    label: 'Temporary staffing',
    path: '/temporary-staffing',
    title: 'Temporary Staffing for Short Cover | KaaamNow',
    description:
      'Temporary staffing for a few hours or a few days. Post a shift with pay upfront, or find short cover on KaaamNow.',
    h1: 'Temporary Staffing, Kuch Ghante ya Kuch Din',
    paragraphs: [
      'Temporary staffing ka yahan matlab hai ek bounded cover: ek exhibition, ek leave, ek stock-take, ek wedding weekend. Yeh lambe agency contract ki jagah ek posting hai jismein dates, headcount aur pay likhe hote hain. Jab dates khatam, kaam khatam.',
      'Businesses isliye use karte hain kyunki permanent hiring unke kal ke gap ko nahi bharti. Workers isliye lete hain kyunki unhe pata hota hai shift kab rukegi. KaaamNow beech mein listing, acceptance aur completion rakhta hai. Employer-employee ka daava is page pe nahi kiya ja raha. Kaam ka agreement posting ke terms ke mutabiq business aur worker ke beech hota hai.',
      'Aap helper, warehouse, event, restaurant ya delivery support mein se jo cover chahiye woh category chuno. Shehar alag se set hota hai. Ludhiana ki unit aur Delhi ka venue ek hi temporary post se nahi chalte.',
      'Fees aur cancellation rules app mein us waqt dikhte hain jab aap booking karte ho. Unhe yahan ek number mein summarize nahi kiya gaya, taaki galat figure na phail sake. Short cover chahiye ho to business app se post karo. Cover lena ho to worker app kholo.',
    ],
    faqs: [
      {
        question: 'Temporary staffing kitne din ki ho sakti hai?',
        answer: 'Jitne din aap posting mein likho. Yeh page kisi ek package length ko fix nahi karta.',
      },
      {
        question: 'Kya yeh manpower agency contract hai?',
        answer:
          'Nahi. Aap ek shift post karte ho aur worker use accept karta hai. Lambi agency agreement is flow ka hissa nahi hai.',
      },
      {
        question: 'Completion kaise confirm hoti hai?',
        answer: 'App ke andar completion step se, taaki dono taraf ke paas us booking ka record rahe.',
      },
    ],
  },
  {
    label: 'Helper jobs',
    path: '/helper-jobs',
    title: 'Helper Jobs | KaaamNow',
    description:
      'Helper jobs for loading, shop support and daily cover. Pay upfront on every shift. Find work or hire helpers on KaaamNow.',
    h1: 'Helper Jobs, Roz ka Clear Kaam',
    paragraphs: [
      'Helper jobs un shifts ko kehte hain jahan ek extra jodi haath chahiye: loading, unloading, counter ke peeche support, ya ek floor ko shift ke dauran sambhalna. Yeh skilled trade licence ka daava nahi hai. Phir bhi kaam real hai, isliye time aur pay card pe hone chahiye.',
      'Ludhiana ke units, Delhi ke markets, Chandigarh ke sector shops aur Jaipur ke godowns, sab helper cover post kar sakte hain. Worker ko category helper chun kar sirf wahi list dikhegi. “Helper chahiye” likhna kaafi nahi. Area aur hours likho.',
      'Apply free hai. Business pay khud set karta hai. Is page pe koi helper wage chart nahi hai. Jo amount post pe hai wahi maanna. Agar kaam heavy lifting hai to posting mein wahi likho, taaki log prepared aayein.',
    ],
    faqs: [
      {
        question: 'Helper job mein kya kaam hota hai?',
        answer: 'Woh jo us posting mein likha ho: loading, shop support, ya general cover. Title padh lo, assume mat karo.',
      },
      {
        question: 'Kya tools mere hone chahiye?',
        answer: 'Sirf tab jab posting mein likha ho. Warna business ko site pe jo chahiye woh dena hota hai.',
      },
    ],
  },
  {
    label: 'Delivery jobs',
    path: '/delivery-jobs',
    title: 'Delivery Jobs | KaaamNow',
    description:
      'Delivery support shifts with area and pay shown first. Pick a job or post delivery cover on KaaamNow.',
    h1: 'Delivery Jobs, Area aur Pay Pehle',
    paragraphs: [
      'Delivery jobs is app mein tab aati hain jab koi business short cover maangta hai, na ki ek alag courier network ke tor pe. Ek shop ko shaam ki deliveries ke liye ek insaan chahiye, ya ek warehouse ko local drops. Route, area aur pay posting pe hona chahiye.',
      'Aap category delivery choose karke cards padhte ho. Vehicle ki zaroorat tabhi hai jab post mein likhi ho. Bahut si support shifts sirf parcel counter ya short drops hoti hain. Assume karke bike mat le aana.',
      'Businesses ko chahiye ki woh zone clearly likhein. “Poora shehar” ek route nahi hota. Worker usi zone ki shift leta hai jise woh cover kar sake. Pay upfront hai, per drop ka alag secret math yahan nahi chalaya jata jab tak posting mein wahi na ho.',
    ],
    faqs: [
      {
        question: 'Kya har delivery job ke liye bike chahiye?',
        answer: 'Nahi. Sirf jab posting mein vehicle likha ho. Warna on-foot ya shop-support ho sakta hai.',
      },
      {
        question: 'Zone kaun decide karta hai?',
        answer: 'Business, posting mein. Aap card padh kar decide karte ho ki woh area aapke liye hai ya nahi.',
      },
    ],
  },
  {
    label: 'Security guard jobs',
    path: '/security-guard-jobs',
    title: 'Security Guard Jobs | KaaamNow',
    description:
      'Security cover shifts where the post says so. Read hours and pay first, then apply or hire on KaaamNow.',
    h1: 'Security Guard Jobs, Shift Clear Rakho',
    paragraphs: [
      'Security guard jobs tab list hoti hain jab business ne security support ki shift post ki ho. Yeh page kisi licence ko automatic approve nahi karta. Agar posting mein licence ya experience likha hai, wahi maano. General helper wali post ko security mat samjho.',
      'Gate cover, event entry, ya ek site ki night shift, teeno ka time aur pay alag hota hai. Card pe dono honge. Aap sirf wahi lo jise aap poora kar sako. Chhod kar nikalna us booking ke rules ke under aata hai, jo app mein dikhte hain.',
      'Hire karte waqt category security rakho, post aur instructions clearly likho, aur pay upfront set karo. Kisi bhi “guaranteed guard in 10 minutes” jaisa claim yahan nahi hai. Availability us waqt ke workers pe depend karti hai.',
    ],
    faqs: [
      {
        question: 'Kya licence ke bina apply karun?',
        answer: 'Agar post licence maangti hai to nahi. Agar nahi maangti, phir bhi duties padh lo aur jhooth mat likho.',
      },
      {
        question: 'Night shift alag se dikhegi?',
        answer: 'Hours card pe hote hain. Night ho ya day, wahi time decide karta hai.',
      },
    ],
  },
  {
    label: 'Warehouse jobs',
    path: '/warehouse-jobs',
    title: 'Warehouse Jobs | KaaamNow',
    description:
      'Warehouse shifts for picking, packing and loading. Pay and hours are on the job. Find work or hire floor cover.',
    h1: 'Warehouse Jobs, Pick, Pack aur Load',
    paragraphs: [
      'Warehouse jobs mein picking, packing, sorting aur loading aata hai, jab business ne woh shift post ki ho. Ek din ka inbound spike ya ek hafte ki counting, dono temporary ho sakte hain. Permanent storekeeper role is page ka promise nahi hai.',
      'Okhla, Focal Point, Sitapura ya Industrial Area, area card pe hoga. Aap shehar page se us city ki warehouse demand samajh sakte ho, phir app mein live shifts dekho. Safety shoes ya ID ki zaroorat tabhi hai jab post mein likhi ho.',
      'Businesses ko floor ka kaam ek line mein likhna chahiye: kitne cases, kitni der, kitne log. Pay upfront rakho. Galat category, jaise restaurant, se warehouse crew nahi milta.',
    ],
    faqs: [
      {
        question: 'Kya heavy loading alag se likhni chahiye?',
        answer: 'Haan. Jo kaam body pe heavy hai use posting mein likho, taaki log prepared aayein.',
      },
      {
        question: 'Ek shift mein kitne log rakhun?',
        answer: 'Jitni seats aap post karte ho. App us headcount ke hisaab se booking karta hai.',
      },
    ],
  },
  {
    label: 'Event staff',
    path: '/event-staff',
    title: 'Event Staff | KaaamNow',
    description:
      'Hire event staff or pick up a shift at a venue. Hours and pay are on the post before anyone accepts.',
    h1: 'Event Staff, Ek Raat ya Ek Weekend',
    paragraphs: [
      'Event staff ushers, registration, setup crew aur floor hosts ke liye hota hai, ek show ya ek shaadi ki tarikh ke saath. Kaam khatam, shift khatam. KaaamNow pe event tab dikhta hai jab organiser ne post kiya ho, kisi bhi calendar ke automatic event nahi.',
      'Delhi, Jaipur aur Chandigarh mein venues aksar ek raat ka crew mangte hain. Ludhiana mein exhibitions aur local functions bhi. Area aur call time card pe hon. Late brief se time badlega to woh pehle se likha hona chahiye, warna worker usi window ke liye aata hai.',
      'Hire karte waqt headcount, dress agar koi ho, aur pay likho. “Smart casual” ambiguous hai, ek line kaafi hai. Workers ko chahiye ki woh sirf wahi event lo jiska end time unke agle plan se nahi takraye.',
    ],
    faqs: [
      {
        question: 'Kya main sirf setup ke liye log manga sakta hoon?',
        answer: 'Haan. Post mein setup likho aur end time usi hisaab se rakho. Hosting alag post ho sakti hai.',
      },
      {
        question: 'Dress code kaun batata hai?',
        answer: 'Business, posting mein. Jo nahi likha, use assume mat karo.',
      },
    ],
  },
  {
    label: 'Restaurant staff',
    path: '/restaurant-staff',
    title: 'Restaurant Staff | KaaamNow',
    description:
      'Kitchen helpers, servers and floor cover for a shift. Pay is shown before you take the job or post it.',
    h1: 'Restaurant Staff, Ek Service ka Cover',
    paragraphs: [
      'Restaurant staff is category mein servers, kitchen helpers, cleaning cover aur kabhi-kabhi counter support aata hai. Yeh tab hai jab ek service rush hai ya koi leave pe hai. Poori kitchen team replace karne ka claim nahi hai.',
      'Delhi ke cafes, Jaipur ke hotels, Chandigarh ke sector restaurants aur Ludhiana ke dhabas ya family restaurants, sab ek shift post kar sakte hain. Dinner rush aur lunch rush ka time alag hota hai, isliye hours likhna zaroori hai. Pay card pe hota hai.',
      'Workers ko chahiye ki woh hygiene aur timing seriously len. Businesses ko chahiye ki woh role ek line mein likhein: floor, dish, ya prep. Galat expectation se shift beech mein toot-ti hai, aur uska record app mein rehta hai.',
    ],
    faqs: [
      {
        question: 'Kya cook ki vacancy bhi yahan hai?',
        answer: 'Sirf tab jab post mein cooking likhi ho. Kitchen helper aur head cook ek role nahi hai.',
      },
      {
        question: 'Dinner shift kitne baje end honi chahiye?',
        answer: 'Woh time jo aap post karte ho. Worker usi end time ko dekh kar accept karta hai.',
      },
    ],
  },
]

export const HOME_FAQS: Faq[] = [
  {
    question: 'KaaamNow kya hai?',
    answer:
      'KaaamNow India ka flexible work platform hai. Workers daily shift, hourly aur part-time kaam dhoondte hain, aur businesses kam time ke liye staff hire karte hain. Har job pe pay pehle se dikhta hai.',
  },
  {
    question: 'Kaam kaise dhoondun?',
    answer:
      'Worker app mein phone se account banao, apna shehar aur category chuno, aur open shifts padho. Jo time aur pay aapko theek lage, usi ko lo. Apply karna free hai.',
  },
  {
    question: 'Workers kaise hire karun?',
    answer:
      'Business app mein shift post karo: category, area, hours aur pay. Workers ko wahi detail dikhti hai. Seats bharte hi aap listing band kar sakte ho.',
  },
  {
    question: 'Pay kab dikhta hai?',
    answer:
      'Job post hote hi. Worker accept karne se pehle amount dekh leta hai. Yahan koi shehar-wide rate list nahi hai, kyunki pay har posting apna hota hai.',
  },
  {
    question: 'Kaun se shehar mein pages hain?',
    answer:
      'Ludhiana, Delhi, Chandigarh aur Jaipur. App mein wahi shifts dikhti hain jo businesses un areas mein post karte hain.',
  },
]

export function cityJobsPath(slug: string) {
  return `/jobs/${slug}`
}

export function cityHirePath(slug: string) {
  return `/hire-workers/${slug}`
}

export function findCity(slug: string) {
  return CITIES.find((city) => city.slug === slug)
}

export function findCategory(path: string) {
  return CATEGORIES.find((category) => category.path === path)
}

function relatedCities(current: string, kind: 'jobs' | 'hire'): RelatedLink[] {
  return CITIES.filter((city) => city.slug !== current).map((city) => ({
    label: kind === 'jobs' ? `${city.name} jobs` : `Hire in ${city.name}`,
    href: kind === 'jobs' ? cityJobsPath(city.slug) : cityHirePath(city.slug),
  }))
}

export function pageForPath(pathname: string): LandingPage | null {
  const path = pathname.replace(/\/+$/, '') || '/'
  const category = findCategory(path)
  if (category) {
    return {
      ...category,
      crumbs: [
        { name: 'Home', href: '/' },
        { name: category.label, href: category.path },
      ],
      related: [
        ...CITIES.map((city) => ({ label: `${category.label} in ${city.name}`, href: cityJobsPath(city.slug) })),
        ...CATEGORIES.filter((item) => item.path !== category.path).slice(0, 4).map((item) => ({
          label: item.label,
          href: item.path,
        })),
      ],
    }
  }

  const jobs = path.match(/^\/jobs\/([a-z0-9-]+)$/)
  if (jobs) {
    const city = findCity(jobs[1])
    if (!city) return null
    return {
      path,
      ...city.jobs,
      crumbs: [
        { name: 'Home', href: '/' },
        { name: 'Jobs', href: '/daily-wage-jobs' },
        { name: city.name, href: path },
      ],
      related: [
        { label: `Hire workers in ${city.name}`, href: cityHirePath(city.slug) },
        ...relatedCities(city.slug, 'jobs'),
        ...CATEGORIES.slice(0, 4).map((item) => ({ label: item.label, href: item.path })),
      ],
    }
  }

  const hire = path.match(/^\/hire-workers\/([a-z0-9-]+)$/)
  if (hire) {
    const city = findCity(hire[1])
    if (!city) return null
    return {
      path,
      ...city.hire,
      crumbs: [
        { name: 'Home', href: '/' },
        { name: 'Hire', href: '/temporary-staffing' },
        { name: city.name, href: path },
      ],
      related: [
        { label: `Jobs in ${city.name}`, href: cityJobsPath(city.slug) },
        ...relatedCities(city.slug, 'hire'),
        ...CATEGORIES.slice(0, 4).map((item) => ({ label: item.label, href: item.path })),
      ],
    }
  }

  return null
}

export function indexablePaths() {
  return [
    '/',
    ...CATEGORIES.map((category) => category.path),
    ...CITIES.flatMap((city) => [cityJobsPath(city.slug), cityHirePath(city.slug)]),
  ]
}

export const PRERENDER_PATHS = [
  ...indexablePaths(),
  '/team',
  '/privacy',
  '/terms',
  '/terms/workers',
  '/terms/businesses',
  '/account-deletion',
  '/404',
]

export function socialProfiles() {
  return Object.values(SOCIAL).filter((url) => url.startsWith('https://'))
}

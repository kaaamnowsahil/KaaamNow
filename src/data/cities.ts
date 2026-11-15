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
  'Har listing pe pay pehle se likha hota hai. Yahan koi shehar-wide rate nahi diya gaya, kyunki amount job, hours aur category pe depend karta hai.'

const PROFILES: Profile[] = [
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    scene:
      'Subah ek warehouse mein loading hoti hai, dopahar ek restaurant ko extra hands chahiye, shaam ek event ko ushers. Demand neighbourhood ke hisaab se badalti hai, ek hi office ke hisaab se nahi.',
    areas: 'Okhla aur Naraina ke godowns, Karol Bagh aur Lajpat Nagar ki shops, Dwarka ke banquet aur delivery pockets',
    workerDay:
      'Koi NCR ke andar shaam ki retail duty leta hai, koi weekend kitchen support, koi ek din ka promo staff. Door ki listing tabhi lo jab area card aapke route mein ho.',
    businessDay:
      'Ek busy weekend, ek stock count, ya ek shaadi ki shaam poori payroll team justify nahi karti, lekin floor khaali nahi chal sakta. Post mein kitne log, kaun si category, kitne baje se kitne baje, aur kitna pay likho.',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    scene:
      'Local trains ke timing pe kaam bhi bandha hota hai. Docks aur Bhiwandi side ke godowns mein loading aati hai, Andheri aur Dadar ke markets mein counter support, aur south ya western suburbs mein ek raat ke events.',
    areas: 'Dadar aur Crawford ke markets, Andheri aur Goregaon ke shops, Bhiwandi–Bhiwandi road ke warehouses, Bandra aur Lower Parel ke venues',
    workerDay:
      'Subah ki loading aur shaam ki shop duty ek hi din mein tabhi fit hoti hai jab hours overlap na karein. Harbour, central ya western line ka commute card ke area se decide karo, “Mumbai” ek route nahi hai.',
    businessDay:
      'Ek store ko sale weekend chahiye, ek godown ko inbound spike, ek venue ko sirf setup crew. Zone clearly likho. “Poora Mumbai” likhna worker ko station nahi batata.',
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    scene:
      'Peenya aur Electronics City ke aas-paas factories aur warehouses hain, Whitefield aur ORR pe offices ko moving ya pantry cover chahiye hota hai, aur KR Market se malls tak retail ka alag rush hai.',
    areas: 'Peenya Industrial Area, KR Market, Whitefield, Electronics City aur Indiranagar–Koramangala ke cafes aur venues',
    workerDay:
      'Traffic is shehar mein shift ka hissa hai. Jo card pe start time hai, usi ke hisaab se niklo. Part-time aksar shaam ki cafe ya store duty hoti hai. Daily wage packing ya loading aksar subah ki hoti hai.',
    businessDay:
      'Ek campus ko event ushers chahiye, ek warehouse ko pick-pack cover, ek restaurant ko dinner rush. Address likho, “Bengaluru” mat likh ke chhod do, warna Whitefield aur Peenya ek hi commute ban jayega.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    scene:
      'Jeedimetla aur Uppal side pe industrial aur godown ka kaam hai, Kukatpally aur Ameerpet pe shops, Gachibowli aur Madhapur pe office support aur events, aur purani city ke markets pe daily cover.',
    areas: 'Kukatpally, Ameerpet, Uppal, Jeedimetla, Gachibowli aur Charminar–Begum Bazaar ke markets',
    workerDay:
      'Do clusters ke beech ka distance lamba hai. Secunderabad side ki shift aur Gachibowli ki shift ko tabhi ek din mein mat rakho jab cards ke hours allow karein. Area pehle padho.',
    businessDay:
      'Ek exhibition stall, ek cloud-kitchen rush, ya ek godown ki counting, teeno ke liye alag category chuno. Pay upfront rakho taaki sirf wahi log aayein jo us amount pe taiyar hon.',
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    scene:
      'Ambattur aur Sriperumbudur ki industrial belt mein factory support chahiye hota hai, T Nagar aur Anna Nagar ki shops mein retail, George Town mein loading, aur beaches ya halls mein event cover.',
    areas: 'T Nagar, Anna Nagar, Ambattur, George Town, Guindy aur OMR ke offices aur cafes',
    workerDay:
      'Garmi aur distance dono matter karte hain. Ek din ki loading aur shaam ki shop duty alag posts hain. Sirf wahi lo jiska end time aapke agle plan se na takraye.',
    businessDay:
      'Textile sale, auto-belt dispatch, ya ek marriage hall ki shaam, staffing ka window likh ke post karo. Permanent role ka substitute mat samjho. Yeh short cover hai.',
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    scene:
      'Burrabazar aur Howrah side pe trading aur loading hai, Salt Lake aur New Town pe offices aur events, aur Gariahat ya Park Street pe restaurants aur shops ka peak alag hai.',
    areas: 'Burrabazar, Howrah, Salt Lake, New Town, Gariahat aur Park Street',
    workerDay:
      'Ferry ya local ka time shift se pehle dekh lo. Market ki subah aur office-side ki dopahar ek jaise nahi hoti. Category se helper, warehouse, restaurant ya event alag karo.',
    businessDay:
      'Puja season ya ek trade fair ka extra haath chahiye ho to dates post mein likho. Season khatam hote hi purani shift ko open mat chhodo.',
  },
  {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    scene:
      'Chakan aur Pimpri–Chinchwad ki factories aur warehouses ko floor cover chahiye hota hai, Hinjewadi ke offices ko support staff, aur Kothrud ya camp ke cafes ko short shifts.',
    areas: 'Pimpri–Chinchwad, Chakan, Hinjewadi, Kothrud, Hadapsar aur Camp',
    workerDay:
      'Factory belt aur IT side ka commute alag hai. Card ka area padhe bina “Pune job” accept mat karo. Part-time students ke liye shaam ke hours tabhi useful hain jab end time clear ho.',
    businessDay:
      'Ek line ki production spike, ek office ka shifting day, ya ek cafe ka weekend. Headcount aur category sahi rakho, warna shop helper ko factory floor ki listing mil jayegi.',
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    scene:
      'Naroda aur Odhav ke industrial areas mein packing aur loading hai, CG Road aur Law Garden ke aas-paas retail aur events, aur SG Highway pe hotels aur offices ka cover.',
    areas: 'Naroda, Odhav, CG Road, SG Highway, Maninagar aur Sarkhej',
    workerDay:
      'Textile aur trading markets ki subah jaldi shuru hoti hai. Shaam ki event ya store duty alag post hai. Ek time pe ek shift rakho.',
    businessDay:
      'Ek consignment ki packing, ek showroom ka weekend, ya ek banquet ki raat. “Staff chahiye” ko category, locality aur pay mein tod do.',
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    scene:
      'Tourism, hotels aur handicraft godowns ka season alag hai, aur Sitapura side ke units ko packing cover chahiye hota hai. Wedding dates pe banquet crew ki demand badhti hai.',
    areas: 'MI Road, C-Scheme, Tonk Road, Sitapura aur walled city ke workshops',
    workerDay:
      'Garmi mein door ki shift ka time bhi matter karta hai. Hotel ki shaam aur unit ki subah ko tabhi jod ke mat dekho jab cards overlap karein. Area alag se padho.',
    businessDay:
      'Ek wedding weekend, ek tourist rush, ya ek godown ki packing. Helper aur event host ko ek post mein mat mila do. Venue ka area likho.',
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    scene:
      'Aminabad aur Chowk ke markets mein daily shop support hai, Gomti Nagar mein cafes, offices aur events, aur Nadarganj ya Talkatora side pe warehouses.',
    areas: 'Aminabad, Chowk, Gomti Nagar, Hazratganj, Alambagh aur Nadarganj',
    workerDay:
      'Market ki poori shift aur Gomti Nagar ki shaam ki part-time alag tarah ki thakan hai. Jo hours card pe hain wahi maano. “Flexible” likha ho aur time na ho to skip karo.',
    businessDay:
      'Ek exhibition, ek restaurant ka dinner, ya ek godown ka inbound. Dates likho. Agle hafte ke liye nayi post, purani ko chupke mat badlo.',
  },
  {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    scene:
      'Textile markets aur processing units ko packing aur helper cover chahiye hota hai, Ring Road aur Varachha ke shops ko retail, aur Sachin GIDC side pe factory shifts.',
    areas: 'Ring Road, Varachha, Katargam, Sachin GIDC aur Udhna',
    workerDay:
      'Textile dispatch ki rush aur shop ki shaam ek jaise posts nahi hain. Category aur area dono padho. Apply free hai, lekin ek slot pe ek hi booking.',
    businessDay:
      'Order spike pe extra haath chahiye hon to daily ya temporary shift post karo, poori payroll team ka wait mat karo. Kitne cases aur kitni der, ek line mein likho.',
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    state: 'Chandigarh',
    scene:
      'Tri-city ka kaam sector markets, hotels, malls aur IT parks ke support roles mein bikhra hai. Kabhi showroom ko floor staff chahiye, kabhi hotel ko banquet cover, kabhi office ko ek din ka moving help.',
    areas: 'Sector 17, Sector 22, Industrial Area, Elante ke aas-paas, aur Zirakpur ya Mohali ka edge jab business ne wahi area post kiya ho',
    workerDay:
      'Students aur dusri shift wale aksar shaam ke chaar-paanch ghante lete hain. Subah ki loading alag hoti hai. Panchkula ya Mohali tabhi aati hai jab card pe woh area ho.',
    businessDay:
      'Ek banquet, ek showroom ka weekend, ek office ki shifting. Sector ya locality likho. Industrial Area aur Sector 17 ko ek hi “Chandigarh” post se mat jodo.',
  },
  {
    slug: 'indore',
    name: 'Indore',
    state: 'Madhya Pradesh',
    scene:
      'Sanwer aur Pithampur ki industrial belt mein factory support hai, Palda aur Sirpur ke godowns mein loading, aur Vijay Nagar ya Rajwada ke markets mein shop aur event cover.',
    areas: 'Vijay Nagar, Palasia, Rajwada, Palda, Sanwer Road aur Pithampur',
    workerDay:
      'Industrial belt ka subah ka slot aur city market ki dopahar alag commute hai. Sirf wahi shift lo jiska pay aur end time dono clear hon.',
    businessDay:
      'Ek plant ka extra shift cover, ek cloth market ka weekend, ya ek wedding ka crew. Category galat pad gayi to galat log ko alert jayega.',
  },
  {
    slug: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    scene:
      'Ernakulam ke markets aur port side pe loading aur shop work hai, Kakkanad pe office aur event support, aur Willingdon ya MG Road pe hotels aur restaurants ka peak.',
    areas: 'Ernakulam market, MG Road, Kakkanad, Edappally, Fort Kochi aur port-side godowns',
    workerDay:
      'Ferry ya bus ka time shift se pehle check karo. Event ki raat aur market ki subah ko overlap mat karo. Pay card pe hoga, baad ka negotiation is page ka hissa nahi.',
    businessDay:
      'Ek hotel ka weekend, ek godown ka inbound, ya ek exhibition. Headcount likho aur dress ya tools tabhi maango jab post mein clearly ho.',
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    scene:
      'Engineering units, textile support aur foundries ko shop-floor cover chahiye hota hai. Gandhipuram aur Town Hall ke markets mein retail hai, Peelamedu aur RS Puram mein shops aur hospitals ke aas-paas ka support alag hai.',
    areas: 'Gandhipuram, Town Hall, Peelamedu, RS Puram aur industrial belts jo posting mein likhi hon',
    workerDay:
      'Factory gate ki shift aur market ki part-time ko alag cards samjho. Tiruppur side ka kaam tabhi is list mein aata hai jab business ne wahi area post kiya ho.',
    businessDay:
      'Ek dispatch ki packing, ek showroom ka festival weekend, ya ek unit ka loading day. Hours aur pay upfront, taaki worker taiyar hokar aaye.',
  },
  {
    slug: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    scene:
      'Sitabuldi aur Itwari ke markets mein daily shop work hai, Hingna aur MIHAN side pe warehouses aur industrial cover, aur Central Avenue pe events aur restaurants.',
    areas: 'Sitabuldi, Itwari, Hingna, MIHAN aur Central Avenue',
    workerDay:
      'Market ka poora din aur industrial belt ki shift ek hi list mein dikh sakti hai, lekin area alag hota hai. Jo travel aap nahi karna chahte use skip karo.',
    businessDay:
      'Ek mandi ka extra haath, ek warehouse ki counting, ya ek hall ki shaam. Temporary dates likho. Hamesha ki naukri is format mein mat post karo.',
  },
  {
    slug: 'bhopal',
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    scene:
      'New Market aur MP Nagar mein shops, cafes aur offices hain, Govindpura mein industrial cover, aur Misrod ya Bairagarh side pe alag residential demand.',
    areas: 'MP Nagar, New Market, Govindpura, Misrod aur Bairagarh',
    workerDay:
      'Shaam ki cafe duty aur subah ki loading alag posts hain. Part-time tab lo jab end time aapke ghar ya dusri duty se takraye nahi.',
    businessDay:
      'Ek office ka shifting, ek shop ka festival, ya ek plant ka short cover. Locality likho. “Bhopal” akela address nahi hai.',
  },
  {
    slug: 'patna',
    name: 'Patna',
    state: 'Bihar',
    scene:
      'Boring Road aur Fraser Road pe shops, coaching hubs aur restaurants ka rush hai, Patliputra aur Didarganj side pe godowns aur events, aur Exhibition Road pe short retail cover.',
    areas: 'Boring Road, Fraser Road, Patliputra, Exhibition Road aur Didarganj',
    workerDay:
      'Coaching belt ke aas-paas part-time aksar shaam ko hoti hai. Godown ki subah alag hai. Dono cards ko time dekh kar alag rakho.',
    businessDay:
      'Ek function, ek store ka weekend, ya ek warehouse ka unloading. Pay khud set karo. Is page pe Patna ka koi fixed wage chart nahi hai.',
  },
  {
    slug: 'bhubaneswar',
    name: 'Bhubaneswar',
    state: 'Odisha',
    scene:
      'Saheed Nagar aur Jayadev Vihar pe retail aur cafes hain, Patia aur Infocity pe office support, aur Rasulgarh ya Mancheswar pe industrial aur godown work.',
    areas: 'Saheed Nagar, Jayadev Vihar, Patia, Rasulgarh aur Mancheswar',
    workerDay:
      'Office-side ki short shift aur industrial loading ko mix mat samjho. Area aur category dono se filter hota hai. Apply karna free hai.',
    businessDay:
      'Ek campus event, ek shop ka festival week, ya ek unit ka dispatch day. Seats bharte hi listing band karo aur agli date ke liye nayi post karo.',
  },
  {
    slug: 'guwahati',
    name: 'Guwahati',
    state: 'Assam',
    scene:
      'Paltan Bazaar aur Fancy Bazaar mein trading aur shop support hai, GS Road pe hotels, offices aur events, aur Noonmati ya Beltola side pe alag industrial aur market cover.',
    areas: 'Paltan Bazaar, Fancy Bazaar, GS Road, Noonmati aur Beltola',
    workerDay:
      'Barish ke mahine mein door ki shift ka time aur area dono padh lo. Market ki subah aur GS Road ki shaam alag bookings hain.',
    businessDay:
      'Ek hotel ka peak, ek bazaar ka extra counter, ya ek venue ki raat. Instructions ek line mein likho, taaki worker taiyari ke saath aaye.',
  },
  {
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    scene:
      'Port aur Gajuwaka–Autonagar ki industrial belt mein loading aur factory support hai, Dwaraka Nagar aur MVP pe shops aur restaurants, aur beach-side venues pe event cover.',
    areas: 'Gajuwaka, Autonagar, Dwaraka Nagar, MVP Colony aur port-side yards jinhe posting naam se likhe',
    workerDay:
      'Plant side aur beach-road side ka commute alag hai. Night shift tabhi lo jab hours poore card pe hon. Vehicle ki zaroorat tabhi maano jab post mein likhi ho.',
    businessDay:
      'Ek yard ka extra gang, ek store ka weekend, ya ek hall ki shaam. Security aur helper ko alag category do.',
  },
  {
    slug: 'ludhiana',
    name: 'Ludhiana',
    state: 'Punjab',
    scene:
      'Hosiery units, cycle-parts workshops, dyeing houses aur packaging floors aksar ek shift ke liye extra haath mangte hain, poori naukri ke liye nahi. Yeh Punjab ka ek industrial shehar hai, poore India ka limit nahi.',
    areas: 'Focal Point, Gill Road, Dugri, Chandigarh Road aur Model Town ke aas-paas ke units, godowns aur shops',
    workerDay:
      'Kisi din packing zyada hoti hai, kisi din loading, kisi din sirf ek counter. Factory ki subah aur shop ki dopahar alag posts hain. Doosre shehar ki listing yahan mix nahi hoti.',
    businessDay:
      'Dispatch badh jaye, packing ruk jaye, ya ek shop ko weekend cover chahiye, to daily shift post karo. “Ludhiana package” koi alag rate nahi hai. Jo pay aap likhte ho wahi worker dekhta hai.',
  },
]

function jobsPage(city: Profile): City['jobs'] {
  return {
    title: `Daily Wage & Part-Time Jobs in ${city.name} | KaaamNow`,
    description: `${city.name} me daily wage, hourly aur part-time jobs dhoondo. Pay upfront, apply free. KaaamNow poore India mein kaam dikhata hai.`,
    h1: `${city.name} me Daily Wage aur Part-Time Jobs`,
    paragraphs: [
      `${city.name} ${city.state} mein hai. ${city.scene} KaaamNow inhi short openings ko ek list mein lata hai: daily wage, hourly aur part-time. Job khulte hi pay, time aur area dikhta hai, isliye aap pehle dekh sakte ho ki shift aapke din mein fit hoti hai ya nahi. Platform poore India ka hai. ${city.name} ki list sirf un businesses ki hai jo is shehar ka area post karte hain.`,
      `${city.areas} ek jaise commute nahi hain. ${city.workerDay} Isliye “kaam chahiye ${city.name}” ka matlab har kisi ke liye alag shift hai. Aap category chunte ho, jaise helper, packing, loading, delivery, warehouse, restaurant, security ya event, aur sirf wahi cards dekhte ho.`,
      `Account phone number se banta hai. Uske baad aap ${city.name} aur kaam ki type set karte ho. Jab koi business us category mein shift post karta hai, listing pe hours aur pay upfront hote hain. Apply karna free hai. Agar aap shift lete ho, to arrival aur completion app ke andar confirm hote hain, taaki dono taraf ko pata ho kaam hua. ${payNote}`,
      `Part-time ${city.name} mein ek chhoti window hoti hai: shaam ki retail duty, weekend kitchen support, ya ek event ke kuch ghante. Daily wage aksar ek din ya ek shift ki hoti hai. Temporary kaam kuch din chal sakta hai, lekin har posting apni dates ke saath aati hai. Aap overlapping shifts nahi le sakte. ${city.state} ke is shehar ki job doosre state ke page pe nahi chipki hoti.`,
      `Agar aap abhi ${city.name} mein ho aur aaj ya is hafte ka kaam dekhna chahte ho, to worker app kholo aur apne area ki open shifts padho. Yeh page ${city.name} ki search ko us screen tak le jata hai. Jo jobs live hain, woh app mein dikhti hain, is marketing page pe nahi. Aapka shehar is list mein na bhi ho, app mein apna area set kar sakte ho, kyunki hiring poore India mein chalti hai jahan business post kare.`,
    ],
    faqs: [
      {
        question: `${city.name} mein daily wage job kaise dhoondun?`,
        answer: `KaaamNow worker app mein account banao, ${city.name} set karo, aur apni category ki open shifts dekho. Har card pe time aur pay pehle se likha hota hai.`,
      },
      {
        question: `Kya ${city.name} ke alawa bhi kaam mil sakta hai?`,
        answer:
          'Haan. KaaamNow poore India mein hai. Doosre shehar ki shift tab dikhti hai jab aap us area ko choose karte ho. Default mein aap apne shehar ki posts dekhte ho.',
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
  }
}

function hirePage(city: Profile): City['hire'] {
  return {
    title: `Hire Workers in ${city.name} – Daily Shift & Temporary Staff | KaaamNow`,
    description: `${city.name} me helper, delivery, security ya event staff chahiye? KaaamNow pe job post karo. Hiring poore India mein, aapke area ke hisaab se.`,
    h1: `${city.name} me Workers Hire Karo`,
    paragraphs: [
      `${city.name} ke businesses ko aksar poori team nahi, ek shift chahiye hoti hai. ${city.businessDay} KaaamNow pe aap daily shift, hourly ya temporary staff ke liye job post karte ho. Area, time aur pay aap likhte ho, aur wahi worker ko dikhta hai. Yeh sirf ${city.name} tak band platform nahi hai. Aap jis Indian shehar mein kaam karte ho, wahi area post karte ho.`,
      `${city.areas} sab isi flow mein aa sakte hain. ${city.scene} Helper, loader, packer, delivery support, counter staff ya event crew, category aap choose karte ho taaki galat log ko alert na jaye. “Staff chahiye ${city.name}” ko ek clear post banao, ek vague message mat chhodo.`,
      `Hiring ka order seedha hai. Business account banao, shift ka detail bharo, pay upfront set karo. Workers jo us category aur area mein hain, unhe job dikhti hai. Aap listing band kar sakte ho jab seats bhar jayein. Kaam ke din arrival aur completion app mein record hote hain. ${city.name} ka koi alag package rate is page pe claim nahi hai. Jo amount aap post karte ho, worker wahi dekhta hai. Platform fee tab dikhti hai jab aap app mein booking confirm karte ho.`,
      `Temporary staffing yahan ek named agency contract nahi hai. Yeh ek dated shift hai jise aap band kar sakte ho jab seats full hon. Agar kal phir log chahiye, nayi post karo. ${city.state} ke bahar ke workers ko ${city.name} ki job tabhi dikhegi jab area wahi select ho, default nahi. Do shehron ko ek hi post se mat chalao.`,
      `Pehli posting business app se karo. Category pehle decide karo, phir ${city.name} ka area aur hours likho. Live applicants isi posting se aate hain. Marketing page pe aaj ki headcount nahi dikhai gayi, kyunki woh din bhar badalti rehti hai.`,
    ],
    faqs: [
      {
        question: `${city.name} mein helper kaise hire karun?`,
        answer:
          'Business app mein helper category ki shift post karo, area aur hours likho, aur pay upfront set karo. Workers wahi detail dekhte hain.',
      },
      {
        question: 'Kya main sirf kuch ghante ke liye hire kar sakta hoon?',
        answer: 'Haan, agar aap hourly ya short daily shift post karte ho aur end time clear likhte ho.',
      },
      {
        question: `Kya sirf ${city.name} ke log apply karenge?`,
        answer:
          'Jo workers us area ko apni list mein rakhte hain. KaaamNow poore India mein chalta hai, lekin aapke area ke bahar ka worker tabhi dekhta hai jab listing uske filter mein aati hai.',
      },
      {
        question: 'Kitna pay likhun?',
        answer: `Jo aap us shift ke liye dena chahte ho. Site ${city.name} ka koi rate fix nahi karti. Worker wahi amount dekhega jo aap post karoge.`,
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

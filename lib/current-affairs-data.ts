export interface CurrentAffairsPost {
  slug: string;
  title: string;
  dateRange: string;
  publishedDate: string;
  category: 'National' | 'International' | 'Economy' | 'Sci-Tech' | 'Sports' | 'All';
  excerpt: string;
  targetExams: string[];
  isFeatured?: boolean;
  keyPoints?: string[];
  quizQuestions?: { question: string; options: string[]; answer: string }[];
  content?: string;
}

export const currentAffairsPosts: CurrentAffairsPost[] = [
  {
    slug: 'weekly-current-affairs-may-4-10-2026',
    title: 'Weekly Current Affairs: May 4–10, 2026 — Press Freedom Index, SC Judges Bill & Kerala Election Results',
    dateRange: 'May 4–10, 2026',
    publishedDate: 'May 11, 2026',
    category: 'National',
    excerpt:
      "This week: India slips to 157th in World Press Freedom Index, Cabinet clears SC Judges Amendment Bill (33→37), UDF sweeps Kerala with 102 seats ending LDF's decade-long rule, NSE launches Electronic Gold Receipts, and RBI appoints new Deputy Governor.",
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    keyPoints: [
      'India ranked 157th (down from 151st) in the 2026 World Press Freedom Index by Reporters Without Borders (RSF). Norway retained 1st place; Eritrea last.',
      'Cabinet approved Supreme Court (Number of Judges) Amendment Bill, 2026 — increasing SC judge strength from 33 to 37 (excluding CJI), first increase since 2019.',
      "UDF swept Kerala Assembly Elections with 102 seats, ending the LDF's decade-long rule. BJP-NDA won a third straight term in Assam. Both results declared May 4.",
      'India and Vietnam elevated ties to "Enhanced Comprehensive Strategic Partnership" during President To Lam\'s visit (May 5–7); new trade target $25 billion by 2030.',
      'NSE launched the Electronic Gold Receipt (EGR) segment on May 4, 2026 — SEBI-regulated, dematerialised gold ownership, T+1 settlement.',
      'Rohit Jain appointed RBI Deputy Governor (effective May 3, 2026), succeeding T. Rabi Sankar.',
      'Cabinet approved "Mission for Cotton Productivity" (₹5,659.22 Cr outlay, 2026–27 to 2030–31) — target: lint yield from 440 to 755 kg/ha.',
      "RBI repatriated ~104 tonnes of gold from the UK; ~77% of India's gold reserves now held domestically.",
      'IIT Delhi study: fully mitigating SO₂ emissions from coal plants could prevent ~1,24,564 deaths annually in India.',
      'R. Vaishali won the FIDE Women\'s Candidates 2026 in Cyprus — official challenger for World Women\'s Chess Championship.',
    ],
    quizQuestions: [
      {
        question: "India's rank in the 2026 World Press Freedom Index published by RSF is:",
        options: ['147th', '151st', '157th', '162nd'],
        answer: '157th',
      },
      {
        question: 'The Supreme Court (Number of Judges) Amendment Bill, 2026 proposes to increase SC judge strength (excluding CJI) to:',
        options: ['35', '36', '37', '40'],
        answer: '37',
      },
      {
        question: 'Which alliance won the 2026 Kerala Assembly Elections with 102 seats?',
        options: ['LDF', 'BJP-NDA', 'UDF', 'AAP-Congress'],
        answer: 'UDF',
      },
      {
        question: 'Rohit Jain succeeded which outgoing Deputy Governor at the RBI?',
        options: ['M. D. Patra', 'T. Rabi Sankar', 'M. Rajeshwar Rao', 'Swaminathan J.'],
        answer: 'T. Rabi Sankar',
      },
    ],
    content: `
## National Affairs

**World Press Freedom Index 2026 — India at 157th**
India slipped to 157th place out of 180 countries in the 2026 World Press Freedom Index, published by Reporters Without Borders (RSF) on April 30, 2026. This is a decline of 6 positions from 151st in 2025. Norway retained the top position; Eritrea ranked last. The index evaluates five indicators: political, economic, legal, social, and security environments for journalists. RSF described India's media as being in an "unofficial state of emergency," citing concentrated media ownership and pressure on independent journalism.

*Why it matters for exams: International Rankings — frequently asked in UPSC GS Paper 2, SSC CGL GA, IBPS PO, and State PSC prelims.*

---

**Supreme Court (Number of Judges) Amendment Bill, 2026**
The Union Cabinet approved a bill to increase the sanctioned strength of Supreme Court judges from 33 to 37 (not counting the Chief Justice of India). This is the first such increase since 2019. The move aims to address a backlog of over 92,000 pending cases. Article 124(1) of the Constitution empowers Parliament to determine the number of Supreme Court judges by law.

*Why it matters: Indian Polity — UPSC Prelims GS2, SSC CPO, RRB NTPC, and all Banking exams.*

---

**Kerala & Assam Assembly Election Results (May 4, 2026)**
The Congress-led United Democratic Front (UDF) swept the Kerala Assembly Elections with 102 seats out of 140 — ending the Left Democratic Front's decade-long rule and delivering the most decisive UDF mandate since 1977. In Assam, the BJP-led NDA secured a third consecutive term in the 126-seat assembly. Both sets of results were declared on May 4, 2026.

*Why it matters: Indian Polity and Current Events — State elections are important for UPSC, SSC CGL GA, and all State PSC examinations.*

---

## International Affairs

**India-Vietnam "Enhanced Comprehensive Strategic Partnership"**
During President To Lam's visit to India (May 5–7, 2026), both nations elevated their bilateral ties to an "Enhanced Comprehensive Strategic Partnership." A new bilateral trade target of $25 billion by 2030 was established. The year 2026 marks the 10th anniversary of the initial Comprehensive Strategic Partnership signed in 2016.

**INS Sagardhwani — Sagar Maitri Mission SM-5**
The Indian Navy's oceanographic research vessel INS Sagardhwani arrived at Cam Ranh, Vietnam on May 5, 2026, as part of the Sagar Maitri (SM-5) initiative — promoting scientific cooperation in ocean research among Indian Ocean Region (IOR) countries.

**Exercise CINBAX-II (India–Cambodia)**
The 2nd edition of the bilateral military exercise between India and Cambodia commenced on May 4, 2026. India was represented by the Maratha Light Infantry regiment.

*Why it matters: International Relations and Defence — relevant for UPSC GS2, NDA, CDS, and CAPF examinations.*

---

## Economy & Finance

**NSE Launches Electronic Gold Receipts (EGR)**
The National Stock Exchange (NSE) launched the Electronic Gold Receipt (EGR) segment on May 4, 2026. EGRs are SEBI-regulated, dematerialised securities representing physical gold ownership stored in SEBI-accredited vaults. They are tradeable in smaller denominations with a T+1 settlement cycle — providing a transparent, exchange-traded alternative to physical gold investment.

**Rohit Jain Appointed RBI Deputy Governor**
Rohit Jain, formerly Executive Director at the RBI, assumed charge as Deputy Governor effective May 3, 2026, for a three-year term. He succeeds T. Rabi Sankar, who retired after his extended tenure. Jain will oversee key departments including Financial Markets Regulation, Foreign Exchange, Fintech, and Payment Systems.

**RBI Repatriates ~104 Tonnes of Gold**
Reports confirmed on May 7, 2026 that India repatriated approximately 104 tonnes of gold from the United Kingdom. With this, around 77% of India's total gold reserves are now held domestically — reflecting the RBI's ongoing strategy of reducing dependence on foreign vaults.

**Bank Credit Growth at 15.9% in FY26**
Scheduled Commercial Banks recorded non-food credit growth of 15.9% in FY 2025–26 — a strong indicator of industrial activity and consumer demand, supporting Viksit Bharat growth targets.

**Mission for Cotton Productivity (₹5,659 Crore)**
The Cabinet approved the "Mission for Cotton Productivity" for 2026–27 to 2030–31, with a total outlay of ₹5,659.22 crore. It targets an increase in cotton production to 498 lakh bales and aims to raise lint productivity from 440 kg/ha to 755 kg/ha by 2031. The mission aligns with the government's 5F vision: Farm to Fibre to Factory to Fashion to Foreign.

*Why it matters: Economy and Agriculture — key for UPSC GS3, SSC CGL, IBPS PO Mains, and SBI PO.*

---

## Environment & Science

**IIT Delhi Study: SO₂ Emissions and Health Impact**
A new IIT Delhi study estimates that fully mitigating sulphur dioxide (SO₂) emissions from coal-fired power plants could prevent approximately 1,24,564 deaths annually in India. SO₂ reacts in the atmosphere to form secondary PM2.5 particulates — a major public health hazard particularly across northern India.

**AMOC Could Slow by 59% by 2100**
New research indicates the Atlantic Meridional Overturning Circulation (AMOC) — the ocean "conveyor belt" that regulates global temperatures — could slow by up to 59% by 2100 due to climate change, with serious implications for global weather patterns and sea level rise.

**Rusty-Spotted Cat Sighted in Aravallis**
Researchers confirmed the first photographic evidence of the Rusty-spotted cat (Prionailurus rubiginosus) in the Aravalli scrublands near Delhi. It is one of the world's smallest wild cat species, native only to India, Sri Lanka, and parts of Nepal.

**Caracals Spotted in Rajasthan's Shahgarh Region**
Rare caracals were sighted in the Shahgarh region of Rajasthan in the first week of May 2026. Caracals are listed under Schedule I of the Wildlife (Protection) Act, 1972 — the highest level of legal protection in India.

*Why it matters: Environment and Ecology — vital for UPSC Prelims GS Paper 3, SSC CGL, RRB NTPC, and Banking GK sections.*

---

## Appointments & Sports

**R. Vaishali Wins FIDE Women's Candidates 2026**
Indian Grandmaster R. Vaishali won the FIDE Women's Candidates Tournament held in Cyprus, becoming the official challenger for the World Women's Chess Championship 2026.

**BNSS — Sentence Remission Powers (Section 473)**
Discussions on Section 473 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) — formerly Section 432 of the CrPC — clarified that state governments hold the power to remit sentences "at any time." However, Section 475 (formerly Section 433A CrPC) mandates that life convicts in capital cases must serve a minimum of 14 years before eligibility for release.

*Why it matters: Legal/Constitutional GK — relevant for UPSC, SSC CPO, and State PSC law sections.*
    `,
  },
  {
    slug: 'weekly-current-affairs-april-27-may-4-2026',
    title: "Weekly Roundup: Census 2027, Ladakh's New Districts & Army Appointments",
    dateRange: 'April 27 – May 4, 2026',
    publishedDate: 'May 4, 2026',
    category: 'National',
    excerpt:
      "This week: India launches its first-ever Digital Census 2027, Ladakh gets 5 new districts, Lt Gen Dhiraj Seth appointed Vice Chief of Army, and Shekha Jheel becomes India's 99th Ramsar Site.",
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    keyPoints: [
      "India officially begins rollout of Census 2027 — the country's first-ever Digital Census.",
      'Census 2027 mascots: "Pragati" (Progress) and "Vikas" (Development). Self-enumeration available in 16 languages.',
      'LG Vinai Kumar Saxena approves 5 new districts in Ladakh: Nubra, Sham, Changthang, Zanskar, and Drass.',
      'Ladakh now has 7 total districts — up from just Leh and Kargil previously.',
      'Lt Gen Dhiraj Seth appointed as the new Vice Chief of the Indian Army.',
      'Ashwini Bhide becomes the first-ever female Commissioner of BMC (Brihanmumbai Municipal Corporation).',
      "Shekha Jheel Bird Sanctuary (Aligarh, UP) designated as India's 99th Ramsar Site.",
      'UP now has 12 Ramsar wetland sites — the highest count among all Indian states.',
    ],
    quizQuestions: [
      {
        question: "What are the mascots of India's Census 2027?",
        options: ['"Gyan" and "Shakti"', '"Pragati" and "Vikas"', '"Bharat" and "Mata"', '"Desh" and "Kaal"'],
        answer: '"Pragati" and "Vikas"',
      },
      {
        question: 'How many total districts does Ladakh have after the addition of 5 new districts?',
        options: ['5', '6', '7', '8'],
        answer: '7',
      },
      {
        question: "Which wetland has been designated as India's 99th Ramsar Site?",
        options: [
          'Loktak Lake, Manipur',
          'Chilika Lake, Odisha',
          'Shekha Jheel Bird Sanctuary, UP',
          'Wular Lake, J&K',
        ],
        answer: 'Shekha Jheel Bird Sanctuary, UP',
      },
    ],
    content: `
## National Affairs

**Commencement of Census 2027**
India has officially started the rollout of Census 2027 — a landmark exercise and the country's first-ever Digital Census. The Census was originally scheduled for 2021 but was delayed due to the COVID-19 pandemic. Key features include a Self-Enumeration facility available in 16 languages, allowing citizens to fill in their own data via a mobile app or web portal. The government has officially named the two mascots of Census 2027: "Pragati" (representing Progress) and "Vikas" (representing Development).

*Why it matters for exams: Demography, Social Issues — UPSC GS Paper 1, SSC CGL General Awareness, State PSC prelims.*

---

**5 New Districts Created in Ladakh**
Lieutenant Governor Vinai Kumar Saxena approved the creation of 5 new districts in the Union Territory of Ladakh. The new districts are: Nubra, Sham, Changthang, Zanskar, and Drass. Prior to this decision, Ladakh had only 2 districts — Leh and Kargil. With this addition, Ladakh now has a total of 7 districts.

Context: Ladakh was carved out as a separate Union Territory from Jammu and Kashmir on October 31, 2019 (Reorganisation Act, 2019).

*Why it matters: Geography and Polity — direct question potential for SSC CGL, SSC CPO, and State PSC geography/polity sections.*

---

## Appointments

**New Vice Chief of the Indian Army**
Lt Gen Dhiraj Seth has been appointed as the Vice Chief of the Indian Army. The Vice Chief of Army Staff (VCOAS) is the second highest position in the Indian Army, after the Chief of Army Staff.

**First Female BMC Commissioner**
Ashwini Bhide has been appointed as the Commissioner of the Brihanmumbai Municipal Corporation (BMC), making her the first-ever woman to hold this position. BMC is the richest municipal corporation in India and one of the largest in Asia.

*Why it matters: Appointments are a high-probability topic for Banking (IBPS PO, SBI PO) and SSC CPO exams.*

---

## Environment

**India's 99th Ramsar Site**
Shekha Jheel Bird Sanctuary, located in Aligarh district of Uttar Pradesh, has been officially designated as a Ramsar Site — making it India's 99th Ramsar Wetland. With this addition, Uttar Pradesh now has 12 Ramsar sites, the highest count among all Indian states.

What is a Ramsar Site? It is a wetland site designated under the Ramsar Convention (1971), an international treaty for the conservation and sustainable use of wetlands. India became a signatory in 1982.

*Why it matters: Environment and Ecology — vital for UPSC Prelims GS Paper 1, SSC CGL, RRB NTPC, and Banking GK sections.*
    `,
  },
  {
    slug: 'weekly-current-affairs-april-20-26-2026',
    title: 'Weekly Current Affairs Roundup: April 20–26, 2026',
    dateRange: 'April 20–26, 2026',
    publishedDate: 'April 26, 2026',
    category: 'Economy',
    excerpt:
      "Key updates this week: IMF World Economic Outlook April 2026, India's defence export record, SEBI's new F&O regulations, and the Ganga Expressway inauguration.",
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'SBI PO', 'State PSC'],
    isFeatured: false,
    keyPoints: [
      "IMF projects India's GDP at 6.8% for FY2026-27 in its April 2026 World Economic Outlook — fastest growing major economy.",
      "India's defence exports cross ₹23,000 crore in FY2025-26, setting a new all-time record.",
      'SEBI raises minimum F&O contract size to ₹20 lakh from ₹5 lakh to protect retail investors.',
      'PM Modi inaugurates the Ganga Expressway (594 km) in UP — India\'s longest expressway.',
      'India ratifies ILO Convention No. 190 on workplace violence and harassment.',
      'ISRO announces Chandrayaan-4 target launch window: August 2026.',
    ],
    quizQuestions: [
      {
        question: 'What is the length of the Ganga Expressway inaugurated by PM Modi?',
        options: ['480 km', '540 km', '594 km', '612 km'],
        answer: '594 km',
      },
      {
        question: 'What is the new minimum F&O contract size set by SEBI?',
        options: ['₹5 lakh', '₹10 lakh', '₹15 lakh', '₹20 lakh'],
        answer: '₹20 lakh',
      },
      {
        question: 'India ratified which ILO Convention related to workplace harassment?',
        options: ['Convention No. 87', 'Convention No. 138', 'Convention No. 182', 'Convention No. 190'],
        answer: 'Convention No. 190',
      },
    ],
    content: `
## Economy

**IMF World Economic Outlook — April 2026**
The International Monetary Fund (IMF) released its April 2026 World Economic Outlook, projecting global growth at 3.2%. India's growth is projected at 6.8% for FY2026-27, making it the fastest-growing major economy for the third consecutive year. China's growth is projected at 4.5%.

*Why it matters: Economy section — UPSC Prelims, IBPS PO, SBI PO Mains.*

---

**SEBI F&O Lot Size Reform**
The Securities and Exchange Board of India (SEBI) introduced revised lot-size norms for Futures and Options (F&O) contracts, raising the minimum contract size to Rs 20 lakh from Rs 5 lakh. The move aims to reduce retail speculation and protect small investors from leveraged losses.

---

## National Affairs

**Ganga Expressway Inauguration**
Prime Minister Narendra Modi inaugurated the Ganga Expressway in Uttar Pradesh — India's longest expressway at 594 km, connecting Meerut to Prayagraj. The project cost approximately Rs 36,230 crore and will reduce travel time significantly.

**India's Defence Exports Record**
India's defence exports crossed Rs 23,000 crore in FY2025-26, setting a new all-time record. The government targets Rs 50,000 crore by 2029. Major export destinations include Armenia, Philippines, Egypt, and Vietnam.

---

## International

**India Ratifies ILO Convention 190**
India formally ratified the International Labour Organization's Convention No. 190, which addresses violence and harassment at the workplace. India is among the first major Asian economies to ratify it.

---

## Space

**Chandrayaan-4 Launch Date**
ISRO announced August 2026 as the target launch window for Chandrayaan-4, India's lunar sample-return mission. The mission will land on the Moon's south pole region and return lunar soil samples to Earth.
    `,
  },
];

export const caCategories = ['All', 'National', 'International', 'Economy', 'Sci-Tech', 'Sports'] as const;
export type CaCategory = typeof caCategories[number];

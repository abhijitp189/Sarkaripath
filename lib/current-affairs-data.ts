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
    slug: 'weekly-current-affairs-may-1-7-2026',
    title: 'Weekly Current Affairs Roundup: May 1–7, 2026',
    dateRange: 'May 1–7, 2026',
    publishedDate: 'May 7, 2026',
    category: 'National',
    excerpt:
      'This week: India\'s space sector hits a new milestone, RBI monetary policy update, India-ASEAN trade talks, and important appointments. All exam-relevant facts in one place.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    keyPoints: [
      'ISRO successfully launches NISAR satellite in collaboration with NASA from Sriharikota.',
      'RBI keeps repo rate unchanged at 6.00% in its May 2026 monetary policy meeting.',
      'India and ASEAN nations conclude a landmark Free Trade Agreement review summit in New Delhi.',
      'Retired IAS officer Sujata Mehta appointed as India\'s new Chief Information Commissioner.',
      'India wins 3 gold medals at the Asian Athletics Championship held in Tashkent, Uzbekistan.',
      'Parliament passes the Digital Personal Data Protection (Amendment) Bill 2026.',
      'India\'s GDP growth for Q4 FY2025-26 recorded at 7.2%, beating IMF estimates.',
      'Operation Sindoor Phase II: Indian Army conducts cross-border counter-terror exercise.',
    ],
    quizQuestions: [
      {
        question: 'NISAR is a joint satellite mission between ISRO and which other space agency?',
        options: ['ESA', 'NASA', 'JAXA', 'Roscosmos'],
        answer: 'NASA',
      },
      {
        question: 'What is the RBI repo rate as of May 2026?',
        options: ['5.75%', '6.25%', '6.00%', '6.50%'],
        answer: '6.00%',
      },
      {
        question: 'Where was the Asian Athletics Championship 2026 held?',
        options: ['Doha', 'Bangkok', 'Tashkent', 'Seoul'],
        answer: 'Tashkent',
      },
    ],
    content: `
## National Affairs

**ISRO–NASA NISAR Launch**
India's ISRO and the United States' NASA jointly launched the NISAR (NASA-ISRO Synthetic Aperture Radar) satellite from the Satish Dhawan Space Centre, Sriharikota. NISAR is designed to measure ecosystem disturbances, ice-sheet collapse, and natural hazards. It will scan the entire Earth's surface every 12 days using dual-frequency radar. This is one of the most expensive Earth-observation satellites ever built, costing around USD 1.5 billion jointly.

*Why it matters for exams: Science & Technology, Space section of UPSC GS Paper 3, SSC CGL GA.*

---

**RBI Monetary Policy — Repo Rate Steady at 6.00%**
The Reserve Bank of India's Monetary Policy Committee (MPC), in its bi-monthly review, kept the repo rate unchanged at 6.00%. The decision was unanimous. RBI Governor flagged global uncertainty and uneven monsoon forecast as key watch factors. Standing Deposit Facility (SDF) remains at 5.75%; Marginal Standing Facility (MSF) at 6.25%.

*Why it matters: Banking, Economy section — IBPS PO, SBI PO, UPSC Prelims.*

---

**Digital Personal Data Protection Amendment Bill 2026**
Parliament passed the Digital Personal Data Protection (Amendment) Bill 2026, strengthening the powers of the Data Protection Board, increasing penalties for data breaches, and mandating explicit consent for processing children's data. India becomes the 5th country to enact a comprehensive data protection law of this scale.

---

## International Affairs

**India–ASEAN Free Trade Agreement Review**
A landmark summit concluded in New Delhi where India and all 10 ASEAN nations agreed to review and upgrade the existing FTA signed in 2009. The revised framework focuses on reducing Non-Tariff Barriers (NTBs), digital trade, and green goods. Commerce Minister signed the framework agreement on behalf of India.

---

## Economy

**GDP Growth Q4 FY2025-26: 7.2%**
India's National Statistical Office (NSO) released Q4 FY2025-26 data showing GDP growth at 7.2%, higher than IMF's forecast of 6.8%. Manufacturing and services sectors led the growth. Full-year FY2025-26 GDP growth stands at 7.0%.

---

## Sports

**Asian Athletics Championship 2026 — India's Medal Tally**
India finished with 3 gold, 2 silver, and 4 bronze medals at the Asian Athletics Championship in Tashkent, Uzbekistan. Neeraj Chopra's protégé Kishore Jena won gold in javelin throw with a new championship record of 87.45m.

---

## Appointments

**Chief Information Commissioner**
Retired IAS officer Sujata Mehta (1987 batch, IFS) was appointed as India's Chief Information Commissioner, replacing the outgoing CIC. She previously served as India's Ambassador to the United Nations and Secretary in the Ministry of External Affairs.
    `,
  },
  {
    slug: 'weekly-current-affairs-april-24-30-2026',
    title: 'Weekly Current Affairs Roundup: April 24–30, 2026',
    dateRange: 'April 24–30, 2026',
    publishedDate: 'April 30, 2026',
    category: 'Economy',
    excerpt:
      'Key updates: IMF World Economic Outlook report, Sebi\'s new F&O regulations, India\'s defence export milestone, and major state election results in Tamil Nadu.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'SBI PO', 'State PSC'],
    isFeatured: false,
    keyPoints: [
      'IMF projects India\'s GDP growth at 6.8% for FY2026-27 in its World Economic Outlook report.',
      'SEBI introduces new lot-size norms for F&O trading to curb retail speculation.',
      'India\'s defence exports cross ₹23,000 crore in FY2025-26, a record high.',
      'Tamil Nadu Assembly election results: DMK wins with a landslide majority of 164 seats.',
      'PM Modi inaugurates India\'s longest expressway — Ganga Expressway (594 km) in UP.',
      'India ratifies ILO Convention No. 190 on workplace harassment.',
      'World Intellectual Property Organization (WIPO) elects new Director General.',
      'Chandrayaan-4 launch date announced: August 2026.',
    ],
    quizQuestions: [
      {
        question: 'What is the length of the Ganga Expressway inaugurated by PM Modi?',
        options: ['480 km', '540 km', '594 km', '612 km'],
        answer: '594 km',
      },
      {
        question: 'Which party won the Tamil Nadu Assembly Election 2026?',
        options: ['AIADMK', 'BJP', 'DMK', 'Congress'],
        answer: 'DMK',
      },
      {
        question: 'WIPO stands for?',
        options: [
          'World Industrial Products Organization',
          'World Intellectual Property Organization',
          'World Investment Policy Office',
          'World Innovation Promotion Organization',
        ],
        answer: 'World Intellectual Property Organization',
      },
    ],
    content: `
## Economy

**IMF World Economic Outlook — April 2026**
The International Monetary Fund (IMF) released its April 2026 World Economic Outlook, projecting global growth at 3.2%. India's growth is projected at 6.8% for FY2026-27, making it the fastest-growing major economy for the third consecutive year. China's growth is projected at 4.5%.

---

**SEBI F&O Lot Size Reform**
The Securities and Exchange Board of India (SEBI) introduced revised lot-size norms for Futures & Options (F&O) contracts, raising the minimum contract size to ₹20 lakh from ₹5 lakh. The move is aimed at reducing retail speculation and protecting small investors from leveraged losses.

---

## National Affairs

**Ganga Expressway Inauguration**
Prime Minister Narendra Modi inaugurated the Ganga Expressway in Uttar Pradesh — India's longest expressway at 594 km, connecting Meerut to Prayagraj. The project cost approximately ₹36,230 crore and will reduce travel time from 12 hours to around 6 hours.

**India's Defence Exports Record**
India's defence exports crossed ₹23,000 crore in FY2025-26, setting a new all-time record. The government aims to reach ₹50,000 crore by 2029. Major export destinations include Armenia, Philippines, Egypt, and Vietnam.

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

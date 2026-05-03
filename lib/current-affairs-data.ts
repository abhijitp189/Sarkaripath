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

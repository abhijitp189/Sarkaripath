import type { NewsItem, QuizQuestion, StaticGkLink } from './current-affairs-data';

export const jul06_12_newsItems: NewsItem[] = [
  /* ── INTERNATIONAL ────────────────────────────────────────────────────── */
  {
    id: 'modi-three-nation-tour-2026',
    category: 'international',
    headline: 'PM Modi Completes Three-Nation Tour of Indonesia, Australia & New Zealand',
    eventDate: 'July 6–11, 2026',
    location: 'Jakarta / Melbourne / Auckland',
    summary:
      'Prime Minister Narendra Modi undertook a three-nation Indo-Pacific tour from July 6 to 11, 2026, covering Indonesia (July 6–8), Australia (July 8–10) and New Zealand (July 10–11). The tour was aimed at strengthening India’s Act East Policy, the MAHASAGAR Vision, and the commitment to a free, open and inclusive Indo-Pacific.',
    keyFacts: [
      'Indonesia leg (July 6–8) at the invitation of President Prabowo Subianto, who personally received PM Modi at Jakarta airport — his first bilateral visit since ties were elevated to a Comprehensive Strategic Partnership in 2018.',
      'Australia leg (July 8–10) at the invitation of PM Anthony Albanese in Melbourne; New Zealand leg (July 10–11) at the invitation of PM Christopher Luxon in Auckland.',
      'PM Modi also visited the historic Prambanan Temple complex in Yogyakarta, Indonesia, where India committed to conservation cooperation.',
      'President Prabowo was the chief guest at India’s Republic Day celebrations on January 26, 2025.',
    ],
    whyItMatters:
      'High-profile bilateral visits, the Act East Policy, and Indo-Pacific partnerships are core International Relations topics across UPSC, SSC, Banking, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'India’s Act East Policy (announced in 2014) upgraded the earlier Look East Policy of 1991. MAHASAGAR stands for Mutual and Holistic Advancement for Security and Growth Across Regions.',
  },
  {
    id: 'india-nz-strategic-partnership-2026',
    category: 'international',
    headline: 'India and New Zealand Elevate Ties to a Strategic Partnership',
    eventDate: 'July 11, 2026',
    location: 'Auckland, New Zealand',
    summary:
      'PM Narendra Modi and New Zealand PM Christopher Luxon elevated bilateral relations to a Strategic Partnership during talks in Auckland on July 11, 2026, and endorsed the “India–New Zealand Strategic Partnership: Roadmap to 2030”. It was the first visit to New Zealand by an Indian Prime Minister in 40 years.',
    keyFacts: [
      'The visit produced 18 outcomes across maritime cooperation, counter-terrorism, trade, tourism and culture.',
      'Both sides set a target to double bilateral trade to NZD 7 billion by 2030 and agreed on a Joint Working Group on Counter-Terrorism.',
      'The elevation follows the India–New Zealand Free Trade Agreement concluded earlier in 2026.',
      'The “Roadmap to 2030” will guide joint action over the next four years across defence, technology, education, sport and Indo-Pacific cooperation.',
    ],
    whyItMatters:
      'New strategic partnerships, trade targets, and FTA milestones are frequently asked in UPSC, Banking, and State PSC current-affairs sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'New Zealand’s capital is Wellington and its currency is the New Zealand Dollar (NZD). Christopher Luxon has been the Prime Minister of New Zealand since 2023.',
  },

  /* ── SUMMITS & MoUs ───────────────────────────────────────────────────── */
  {
    id: 'india-australia-summit-outcomes-2026',
    category: 'summits',
    headline: 'India-Australia Summit in Melbourne Delivers 18 Outcomes, Including Uranium Supply',
    eventDate: 'July 8–10, 2026',
    location: 'Melbourne, Australia',
    summary:
      'PM Modi’s visit to Australia (July 8–10) with PM Anthony Albanese produced 18 major outcomes, headlined by an administrative arrangement under the India-Australia Civil Nuclear Agreement enabling the supply of Australian uranium to India, a Joint Declaration on Defence and Security Cooperation, and a Maritime Security Collaboration Roadmap.',
    keyFacts: [
      'The civil-nuclear administrative arrangement enables Australian uranium exports to India for exclusively peaceful purposes, diversifying India’s energy sources.',
      'Australia agreed to return three Tamil Nadu-origin antiquities: a sacred Nandi sculpture, a bronze trident with Bhadrakali, and a six-headed Skanda statue.',
      'AustralianSuper announced an additional AU$500 million investment in India’s National Investment and Infrastructure Fund (NIIF); a Rooftop Solar Training Academy was operationalised at Pandit Deendayal Energy University, Gandhinagar, to train 2,000 women and youth.',
      'An India-Australia Sports Collaboration Roadmap was linked to the 2032 Brisbane Olympics and the 2030 Commonwealth Games in Ahmedabad; an MoU was also signed under the Australia-Canada-India Technology and Innovation (ACITI) Partnership.',
    ],
    whyItMatters:
      'Civil nuclear cooperation, uranium supply, and India-Australia CECA progress are high-probability questions for UPSC Mains (IR), Banking, and SSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'India and Australia signed a Civil Nuclear Cooperation Agreement in 2014 and elevated ties to a Comprehensive Strategic Partnership in 2020. The Economic Cooperation and Trade Agreement (ECTA) came into force in December 2022.',
  },
  {
    id: 'un-global-dialogue-ai-governance-2026',
    category: 'summits',
    headline: 'India Participates in Inaugural UN Global Dialogue on AI Governance in Geneva',
    eventDate: 'July 6–7, 2026',
    location: 'Geneva, Switzerland',
    summary:
      'Union Minister of State Kirti Vardhan Singh led the Indian delegation at the inaugural United Nations Global Dialogue on Artificial Intelligence Governance, held in Geneva from July 6–7, 2026, where India reaffirmed its “AI for All” vision of responsible, inclusive and human-centric AI.',
    keyFacts: [
      'The forum was established under UN General Assembly Resolution 79/325, following the Global Digital Compact adopted under the Pact for the Future in September 2024.',
      'India advocated oversight mechanisms, human-rights protection, and safeguards against misuse of AI.',
      'It is a universal, multi-stakeholder forum for consensus-based AI governance and AI capacity-building in developing countries.',
    ],
    whyItMatters:
      'Global AI governance frameworks and India’s “AI for All” stance are emerging Science-Tech and IR topics for UPSC and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Global Digital Compact was adopted at the UN Summit of the Future (September 2024) as part of the Pact for the Future. India’s national AI programme is the IndiaAI Mission, approved in 2024.',
  },
  {
    id: 'brics-meetings-kochi-guwahati-2026',
    category: 'summits',
    headline: 'India Hosts BRICS Women Working Group in Kochi and Anti-Drug Agencies Meet in Guwahati',
    eventDate: 'Week of July 6, 2026',
    location: 'Kochi & Guwahati',
    summary:
      'Under its 2026 BRICS chairship, India hosted the BRICS Women Working Group meeting in Kochi, focused on women-led development, digital financial inclusion, entrepreneurship, skilling, climate action and nutrition, and the BRICS Anti-Drug Agencies meeting in Guwahati, covering synthetic drugs, darknet trafficking and cryptocurrency-linked drug flows.',
    keyFacts: [
      'Venue pairing to remember: Kochi — Women Working Group; Guwahati — Anti-Drug Agencies meeting.',
      'The Kochi meeting reflected the policy shift from women’s welfare to women-led development.',
      'The Guwahati meeting also covered precursor diversion and international narcotics cooperation.',
    ],
    whyItMatters:
      'India’s 2026 BRICS chairship events — and their host cities — are classic match-the-pair questions for SSC, Banking, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC', 'Police'],
    staticGkConnect:
      'BRICS comprises Brazil, Russia, India, China, and South Africa along with newer members admitted since 2024. India holds the BRICS chairship for 2026.',
  },

  /* ── DEFENCE ──────────────────────────────────────────────────────────── */
  {
    id: 'india-indonesia-brahmos-astra-deal-2026',
    category: 'defence',
    headline: 'India and Indonesia Sign $600 Million-Plus BrahMos and Astra Missile Deal',
    eventDate: 'July 7, 2026',
    location: 'Jakarta, Indonesia',
    summary:
      'After talks between PM Modi and President Prabowo Subianto in Jakarta on July 7, 2026, India and Indonesia announced 20 outcomes, including Indonesia’s procurement of BrahMos supersonic cruise missiles and Astra air-to-air missiles from India in a deal worth over USD 600 million.',
    keyFacts: [
      'The agreements include a contract between Indonesia’s Defence Ministry and BrahMos Aerospace, and a pact between Bharat Dynamics Limited (BDL) and Indonesian company Republikorp on air-to-air missile systems.',
      'Indonesia is set to become the third export customer of the BrahMos system, after the Philippines and Vietnam.',
      'The two sides agreed to revive joint development of Indonesia’s Sabang Port — less than 100 nautical miles from Indira Point, India’s southernmost tip — and to increase coast guard cooperation.',
      'Other outcomes: cooperation in critical minerals and rare-earth magnets, a SAIL–PT Krakatau Steel JV for a stainless-steel slab facility, RBI–Bank Indonesia local currency transaction guidelines, and an IIM Bangalore branch campus in Indonesia.',
    ],
    whyItMatters:
      'Defence exports, the BrahMos programme, and Astra missile facts are staple questions for Defence (NDA/CDS/AFCAT), UPSC, and SSC exams.',
    examRelevance: ['UPSC', 'Defence', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'BrahMos is a supersonic cruise missile developed by BrahMos Aerospace, an India-Russia joint venture named after the Brahmaputra and Moskva rivers. Astra is India’s indigenous Beyond Visual Range air-to-air missile developed by DRDO.',
  },
  {
    id: 'drdo-pinaka-lrgr-test-2026',
    category: 'defence',
    headline: 'DRDO Successfully Flight-Tests Pinaka Long Range Guided Rocket at Chandipur',
    eventDate: 'July 8, 2026',
    location: 'ITR Chandipur, Odisha',
    summary:
      'The Defence Research and Development Organisation (DRDO) conducted a successful flight-test of the Pinaka Long Range Guided Rocket (LRGR) at the Integrated Test Range, Chandipur, Odisha, on July 8, 2026. The rocket was tested for a user-defined minimum range of 60 km and struck the designated target with precision.',
    keyFacts: [
      'The rocket executed all planned in-flight manoeuvres; range instruments tracked the flight throughout, confirming system accuracy.',
      'Designed by the Armament Research and Development Establishment (ARDE) with the High Energy Materials Research Laboratory (HEMRL), supported by DRDL and Research Centre Imarat.',
      'The LRGR variant can engage targets across 60–120 km with multiple warhead options, extending the Pinaka system’s reach.',
      'Defence Minister Rajnath Singh congratulated DRDO, the Indian Army and industry partners.',
    ],
    whyItMatters:
      'Missile tests, their ranges, and developing laboratories are recurring Defence and Science-Tech questions in NDA, CDS, AFCAT, SSC, and Police exams.',
    examRelevance: ['Defence', 'UPSC', 'SSC', 'Police', 'Railway'],
    staticGkConnect:
      'Pinaka is a multi-barrel rocket launcher system named after the bow of Lord Shiva, developed by DRDO and inducted into the Indian Army. The Integrated Test Range at Chandipur, Odisha, is DRDO’s main missile-testing facility.',
  },

  /* ── AWARDS & HONOURS ─────────────────────────────────────────────────── */
  {
    id: 'modi-bintang-adipurna-2026',
    category: 'awards',
    headline: 'PM Modi Conferred Indonesia’s Highest Honour — Bintang Republik Indonesia Adipurna',
    eventDate: 'July 7, 2026',
    location: 'Merdeka Palace, Jakarta',
    summary:
      'Indonesia conferred its highest state honour, the Bintang Republik Indonesia Adipurna, on PM Narendra Modi on July 7, 2026, at the Merdeka Palace in Jakarta. President Prabowo Subianto presented the award in recognition of Modi’s role in elevating India-Indonesia ties to a Comprehensive Strategic Partnership.',
    keyFacts: [
      'Modi is only the second Indian Prime Minister to receive the honour, after Jawaharlal Nehru, who was awarded it in 1995 during Indonesia’s 50th year of independence.',
      'The Adipurna is the highest of the five classes of the Bintang Republik Indonesia (Star of the Republic of Indonesia), instituted in 1959; the President of Indonesia is the order’s Grand Master.',
      'Past foreign recipients include Fidel Castro, Ayub Khan, Leonid Brezhnev, and Josip Broz Tito.',
    ],
    whyItMatters:
      'Foreign honours conferred on Indian leaders — with the awarding country and previous Indian recipients — are classic one-mark questions across SSC, Banking, Railway, and State PSC exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'UPSC', 'State PSC'],
    staticGkConnect:
      'Indonesia’s capital is Jakarta (with Nusantara being developed as the new capital), and its currency is the Rupiah. Jawaharlal Nehru received the Bintang Adipurna in 1995.',
  },
  {
    id: 'bismillah-khan-yuva-puraskar-2025',
    category: 'awards',
    headline: 'Acharya Ranchhodlal Goswami Wins Ustad Bismillah Khan Yuva Puraskar for Haveli Sangeet',
    eventDate: 'July 2026',
    location: 'New Delhi',
    summary:
      'Acharya Ranchhodlal Goswami of Ahmedabad was selected for the Ustad Bismillah Khan Yuva Puraskar 2025 by the Sangeet Natak Akademi, in recognition of his contribution to Haveli Sangeet — a devotional temple-music tradition.',
    keyFacts: [
      'The Ustad Bismillah Khan Yuva Puraskar is conferred by the Sangeet Natak Akademi, which functions under the Union Ministry of Culture.',
      'The award recognises outstanding young talent in music, dance, and drama.',
      'Haveli Sangeet is a devotional music tradition associated with temples (havelis) of the Pushtimarg tradition.',
    ],
    whyItMatters:
      'Sangeet Natak Akademi awards and Indian classical/devotional music traditions feature in Art & Culture sections of UPSC, SSC, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The Sangeet Natak Akademi, established in 1952, is India’s national academy for music, dance and drama. Ustad Bismillah Khan, after whom the Yuva Puraskar is named, was the legendary shehnai maestro and Bharat Ratna recipient (2001).',
  },

  /* ── ECONOMY & BANKING ────────────────────────────────────────────────── */
  {
    id: 'epfo-cites-2-01-launch-2026',
    category: 'economy',
    headline: 'EPFO Launches CITES 2.01 Platform; FY26 PF Interest to Be Credited by July 15',
    eventDate: 'July 8, 2026',
    location: 'New Delhi',
    summary:
      'Union Labour and Employment Minister Mansukh Mandaviya launched the Employees’ Provident Fund Organisation’s upgraded Centralised IT Enabled Services (CITES 2.01) platform on July 8, 2026, migrating about 34 crore member accounts from over 120 decentralised databases to a single unified national system.',
    keyFacts: [
      'EPF interest at 8.25% for FY 2025–26 — an estimated ₹1.44 lakh crore — will be credited to about 34 crore accounts and visible in passbooks by July 15, months ahead of the usual October–November timeline.',
      'The auto-settlement limit for eligible advance claims was raised from ₹1 lakh to ₹5 lakh for fully KYC-compliant members.',
      'Partial-withdrawal categories were cut from 13 to 3 — essential needs, housing needs, and special circumstances — and members can withdraw up to 75% of their total PF balance.',
      'Aadhaar-linked UAN accounts now transfer automatically on job change; the CITES project was approved by the Central Board of Trustees in 2021, with implementation from January 2023.',
    ],
    whyItMatters:
      'EPFO reforms, the EPF interest rate, and the nodal ministry are high-probability questions in Banking, SSC, EPFO, and UPSC exams.',
    examRelevance: ['Banking', 'SSC', 'UPSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'The EPFO functions under the Ministry of Labour and Employment and administers the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952. Its apex decision-making body is the Central Board of Trustees.',
  },
  {
    id: 'imf-weo-july-2026-india-forecast',
    category: 'economy',
    headline: 'IMF Trims India’s FY27 Growth Forecast to 6.4% in July WEO Update',
    eventDate: 'July 2026',
    location: 'Washington, D.C., USA',
    summary:
      'The International Monetary Fund’s July 2026 World Economic Outlook Update, titled “Global Economy in Crosscurrents of War and Technology”, revised India’s FY 2026–27 growth projection down to 6.4% from the 6.5% projected in April, while raising the FY28 forecast to 6.7% from 6.5%.',
    keyFacts: [
      'India’s GDP grew 7.7% in FY26 (the financial year ended March 2026).',
      'The Asian Development Bank separately lowered India’s FY27 forecast to 6.6% from 6.9% and raised its FY27 inflation forecast to 5.2% from 4.5%, citing high global energy prices and food inflation.',
      'The World Bank projected India to remain the fastest-growing major economy, with 6.6% growth in FY27.',
    ],
    whyItMatters:
      'Growth forecasts from the IMF, World Bank, and ADB — with the exact numbers and report titles — are staple Economy questions for Banking, UPSC, and SSC exams.',
    examRelevance: ['Banking', 'UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The IMF, headquartered in Washington, D.C., publishes the World Economic Outlook twice a year (April and October) with updates in January and July. The World Bank publishes Global Economic Prospects; the ADB publishes the Asian Development Outlook.',
  },

  /* ── APPOINTMENTS ─────────────────────────────────────────────────────── */
  {
    id: 'mahesh-pai-south-indian-bank-2026',
    category: 'appointments',
    headline: 'RBI Approves Mahesh Muralidhar Pai as MD & CEO of South Indian Bank',
    eventDate: 'July 2026',
    location: 'Thrissur, Kerala',
    summary:
      'The Reserve Bank of India approved the appointment of Mahesh Muralidhar Pai as Managing Director and CEO of South Indian Bank for a three-year term beginning October 1, 2026. He succeeds P.R. Seshadri, who remains in office until September 30, 2026.',
    keyFacts: [
      'Pai currently serves as Chief General Manager at Canara Bank, with nearly three decades of experience across treasury, forex, retail banking, agriculture and MSME.',
      'The RBI also approved the re-appointment of N.S. Vishwanathan as Non-Executive (Part-time) Chairman of Axis Bank for three years, from October 27, 2026 to October 26, 2029.',
      'South Indian Bank is a private-sector bank headquartered in Thrissur, Kerala.',
    ],
    whyItMatters:
      'Bank MD & CEO appointments are among the most frequently asked Banking Awareness questions in IBPS, SBI, and RBI exams.',
    examRelevance: ['Banking', 'SSC', 'UPSC'],
    staticGkConnect:
      'South Indian Bank was founded in 1929 and is headquartered in Thrissur, Kerala. N.S. Vishwanathan is a former Deputy Governor of the RBI.',
  },

  /* ── REPORTS & INDICES ────────────────────────────────────────────────── */
  {
    id: 'udise-plus-2025-26-report',
    category: 'reports',
    headline: 'Ministry of Education Releases UDISE+ 2025–26 Report on School Education',
    eventDate: 'July 7, 2026',
    location: 'New Delhi',
    summary:
      'The Ministry of Education released the Unified District Information System for Education Plus (UDISE+) 2025–26 report on July 7, 2026, covering enrolment, teachers, infrastructure, retention, transition and gender parity in Indian school education.',
    keyFacts: [
      'The number of teachers rose 8.3% to 1,02,73,020 in 2025–26, from 94,83,294 in 2022–23.',
      'Reported Pupil-Teacher Ratios: Foundational 10, Preparatory 12, Middle 17, Secondary 21 — all better than the NEP 2020-recommended 30:1.',
      'Dropout rates declined across levels: Preparatory 1.8% (from 2.3%), Middle 3.6%, and Secondary 7.0% (from 8.2%).',
    ],
    whyItMatters:
      'UDISE+ statistics, PTR figures, and NEP benchmarks are directly relevant for Teaching exams (CTET, KVS, NVS, DSSSB) and appear in UPSC and SSC as well.',
    examRelevance: ['Teaching', 'UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'UDISE+ is the Ministry of Education’s database on school education. The National Education Policy (NEP) 2020 recommends a Pupil-Teacher Ratio of 30:1 and restructured schooling into the 5+3+3+4 format.',
  },
  {
    id: 'jaipur-happy-city-index-2026',
    category: 'reports',
    headline: 'Jaipur Ranks 6th Globally in Happy City Index 2026 — Only Indian City in Top 10',
    eventDate: 'July 2026',
    location: 'Jaipur, Rajasthan',
    summary:
      'Jaipur became the only Indian city to feature in the top 10 of the Happy City Index 2026, ranking 6th globally. The index, published by the London-based Institute for Quality of Life, evaluates cities on citizens’ wellbeing and quality of life.',
    keyFacts: [
      'Jaipur ranked 6th globally — the only Indian city in the top 10.',
      'The Happy City Index assesses parameters such as governance, environment, economy, health and citizens’ quality of life.',
    ],
    whyItMatters:
      'Index rankings involving Indian cities are classic one-mark questions in SSC, Banking, Railway, and State PSC (especially RPSC) exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'Jaipur, the capital of Rajasthan, was founded in 1727 by Maharaja Sawai Jai Singh II and is a UNESCO World Heritage City (inscribed 2019), known as the Pink City.',
  },
  {
    id: 'global-passport-index-2026',
    category: 'reports',
    headline: 'Sweden Tops Global Passport Index 2026; India Ranked 125th',
    eventDate: 'July 2026',
    location: 'Global',
    summary:
      'Sweden topped the Global Passport Index 2026 released by Global Citizen Solutions (GCS), while India was ranked 125th.',
    keyFacts: [
      'Sweden secured the top position in the GCS Global Passport Index 2026.',
      'India slipped to the 125th position in the ranking.',
      'The GCS index evaluates passports on mobility as well as broader factors, distinguishing it from purely visa-free-count rankings.',
    ],
    whyItMatters:
      'Passport and mobility index rankings — the topper and India’s rank — are recurring GK questions for SSC, Banking, and Railway exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'The better-known Henley Passport Index ranks passports purely by visa-free destination count. Sweden’s capital is Stockholm and its currency is the Swedish Krona.',
  },

  /* ── NATIONAL ─────────────────────────────────────────────────────────── */
  {
    id: 'pachpadra-refinery-inauguration-2026',
    category: 'national',
    headline: 'PM Modi Dedicates India’s First Greenfield Refinery-cum-Petrochemical Complex at Pachpadra',
    eventDate: 'July 4, 2026',
    location: 'Pachpadra, Balotra district, Rajasthan',
    summary:
      'PM Narendra Modi dedicated to the nation India’s first greenfield integrated refinery-cum-petrochemical complex at Pachpadra in Rajasthan’s Balotra district on July 4, 2026, as part of a slate of development projects worth around ₹1.06 lakh crore. (Included this week as it was not covered in the previous digest.)',
    keyFacts: [
      'Built at an investment of more than ₹79,450 crore by HPCL Rajasthan Refinery Limited (HRRL), a joint venture between Hindustan Petroleum Corporation Limited and the Government of Rajasthan.',
      'Refining capacity of 9 Million Metric Tonnes Per Annum (MMTPA) with an integrated petrochemical capacity of 2.4 MMTPA and a Nelson Complexity Index of 17 — among the highest in India.',
      'The inauguration, originally scheduled for April 21, 2026, was postponed after a fire in the Crude Distillation Unit on April 20.',
      'On the same day, PM Modi launched the Modified UDAN Scheme (₹28,840 crore over 10 years; 100 aerodromes and 200 helipads), laid the foundation of Jaipur Metro Phase 2 (₹13,000+ crore), and inaugurated the new Jodhpur Airport terminal.',
    ],
    whyItMatters:
      'India’s first greenfield refinery — its location, capacity, and JV partners — is a high-probability question for RPSC, SSC, Banking, and UPSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'The Nelson Complexity Index measures a refinery’s sophistication. HPCL is a Maharatna CPSE under the Ministry of Petroleum and Natural Gas. UDAN (Ude Desh ka Aam Nagrik) is the regional air-connectivity scheme launched in 2016.',
  },
  {
    id: 'jalalabad-parashurampuri-rename-2026',
    category: 'national',
    headline: 'UP Cabinet Approves Renaming of Jalalabad Town as Parashurampuri',
    eventDate: 'July 6, 2026',
    location: 'Shahjahanpur district, Uttar Pradesh',
    summary:
      'The Uttar Pradesh Cabinet, chaired by CM Yogi Adityanath, approved the renaming of Jalalabad town in Shahjahanpur district as Parashurampuri on July 6, 2026. The town’s municipal body will be renamed Parashurampuri Nagar Palika Parishad.',
    keyFacts: [
      'The renaming reflects the town’s religious significance as the believed birthplace of Lord Parashuram.',
      'The Ministry of Home Affairs issued a No Objection Certificate for the change on August 19, 2025.',
      'Municipal resolutions supporting the proposal were passed in 2018 and 2023.',
    ],
    whyItMatters:
      'Place renamings — old name, new name, and state — are classic one-liners for UPPSC, UP Police, SSC, and Railway exams.',
    examRelevance: ['State PSC', 'SSC', 'Police', 'Railway'],
    staticGkConnect:
      'Renaming a city or town requires state cabinet approval and a No Objection Certificate from the Union Ministry of Home Affairs. Shahjahanpur is in the Rohilkhand region of Uttar Pradesh.',
  },
  {
    id: 'narmada-four-state-payment-pact-2026',
    category: 'national',
    headline: 'Four States Sign Narmada Project Payment Pact Resolving Cost-Sharing Dispute',
    eventDate: 'July 8, 2026',
    location: 'New Delhi',
    summary:
      'Madhya Pradesh, Gujarat, Rajasthan and Maharashtra signed a payment agreement on the Sardar Sarovar (Narmada) project, resolving a long-pending cost-sharing dispute connected to the Narmada Water Disputes Tribunal award.',
    keyFacts: [
      'The four signatories are the party states of the Narmada Water Disputes Tribunal award: Madhya Pradesh, Gujarat, Rajasthan and Maharashtra.',
      'The pact settles pending payment obligations linked to the Sardar Sarovar Project.',
    ],
    whyItMatters:
      'Inter-state river disputes and their tribunals are core Polity/Geography topics for UPSC, MPSC, RPSC, and MPPSC exams.',
    examRelevance: ['UPSC', 'State PSC', 'SSC'],
    staticGkConnect:
      'The Narmada Water Disputes Tribunal was constituted in 1969 and gave its final award in 1979. The Sardar Sarovar Dam is located at Kevadia, Gujarat, near the Statue of Unity. Inter-state river disputes are adjudicated under the Inter-State River Water Disputes Act, 1956 (Article 262).',
  },
  {
    id: 'jalbhara-gi-tag-822-2026',
    category: 'national',
    headline: 'West Bengal’s Chandannagar Jalbhara Sweet Gets GI Tag; India’s GI Count Reaches 822',
    eventDate: 'July 2026',
    location: 'Chandannagar, West Bengal',
    summary:
      'West Bengal’s Chandannagar Jalbhara sweet — known for its 220-year-old tradition, chhena shell and liquid nolen-gur filling — received the Geographical Indication (GI) tag, taking India’s total GI-tagged products to 822.',
    keyFacts: [
      'India’s total GI-tagged products now stand at 822, of which 125 were registered between April 2025 and March 2026.',
      'Among the 125 new GIs, Madhya Pradesh led with 26, followed by West Bengal (24) and Jharkhand (11).',
      'Jalbhara is a traditional sweet of Chandannagar, a former French colonial town in West Bengal’s Hooghly district.',
    ],
    whyItMatters:
      'New GI tags — the product, state, and running national total — are among the most frequently asked GK questions in SSC, Banking, Railway, and WBCS exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'GI tags are governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999, administered by the GI Registry in Chennai. Darjeeling Tea was India’s first GI-tagged product (2004).',
  },

  /* ── SCIENCE & TECH ───────────────────────────────────────────────────── */
  {
    id: 'isro-ce20-hot-test-lvm3-m7-2026',
    category: 'science',
    headline: 'ISRO Conducts Flight Acceptance Hot Test of CE20 Cryogenic Engine for LVM3-M7',
    eventDate: 'July 6, 2026',
    location: 'IPRC Mahendragiri, Tamil Nadu',
    summary:
      'ISRO successfully conducted the flight acceptance hot test of the CE20 cryogenic engine for the seventh operational LVM3 mission (LVM3-M7) on July 6, 2026, at the Main Engine & Stage Test facility of the ISRO Propulsion Complex (IPRC), Mahendragiri, Tamil Nadu.',
    keyFacts: [
      'The engine operated at 19.5 tonnes of thrust for 45 seconds and 22 tonnes for 25 seconds, verifying performance for the LVM3-M7 mission.',
      'The CE20 is the indigenous cryogenic engine that powers the upper (C25) stage of the LVM3.',
    ],
    whyItMatters:
      'ISRO engine tests, launch vehicles, and their stages are staple Science-Tech questions across UPSC, SSC, Railway, and Banking exams.',
    examRelevance: ['UPSC', 'SSC', 'Railway', 'Banking', 'Defence'],
    staticGkConnect:
      'LVM3 (formerly GSLV Mk III) is India’s heaviest operational launch vehicle, which carried Chandrayaan-3 in 2023. The ISRO Propulsion Complex at Mahendragiri, Tamil Nadu, tests liquid and cryogenic engines.',
  },

  /* ── SPORTS ───────────────────────────────────────────────────────────── */
  {
    id: 'wimbledon-2026-sinner-noskova',
    category: 'sports',
    headline: 'Jannik Sinner and Linda Noskova Win Wimbledon 2026 Singles Titles',
    eventDate: 'July 11–12, 2026',
    location: 'All England Club, London',
    summary:
      'Jannik Sinner (Italy) defended his men’s singles title and Linda Noskova (Czech Republic) won her first Grand Slam at the 139th Wimbledon Championships, held from June 29 to July 12, 2026, at the All England Club, London.',
    keyFacts: [
      'Sinner beat Alexander Zverev (Germany) 6–7, 7–6, 6–3, 6–4 in the final on July 12 — his fifth Grand Slam title and second straight Wimbledon crown.',
      'Noskova defeated compatriot Karolina Muchova 6–2, 5–7, 6–3 in an all-Czech final on July 11; at 21 years and 236 days she is the youngest Wimbledon women’s champion since Petra Kvitova in 2011.',
      'Total prize money was £64.2 million — a record 20% year-on-year rise — with each singles champion receiving £3.6 million.',
      'Video review technology was used at Wimbledon for the first time in 2026.',
    ],
    whyItMatters:
      'Grand Slam winners and runners-up are guaranteed Sports GK questions in SSC, Banking, Railway, and State PSC exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'Wimbledon, the oldest of the four Grand Slams (first held in 1877), is the only major played on grass. The other three majors are the Australian Open, French Open (Roland Garros), and US Open.',
  },
  {
    id: 'first-womens-test-lords-2026',
    category: 'sports',
    headline: 'Lord’s Hosts Its First-Ever Women’s Test as India Take On England',
    eventDate: 'July 10, 2026',
    location: 'Lord’s, London',
    summary:
      'Lord’s staged a women’s Test match for the first time in its history — 142 years after hosting its first men’s Test in 1884 — as England faced India in a four-day Test starting July 10, 2026. India scored 285 on the opening day, with half-centuries from Smriti Mandhana (83), Harmanpreet Kaur (58) and Deepti Sharma (57).',
    keyFacts: [
      'The four-day Test was scheduled for July 10–13, 2026; the result will be covered in next week’s digest.',
      'The match came just over 50 years after the first women’s match of any kind at Lord’s — an ODI on August 4, 1976, in which England beat Australia.',
      'India were captained by Harmanpreet Kaur and England by Nat Sciver-Brunt.',
    ],
    whyItMatters:
      '“Firsts” in cricket history — venues, dates, and captains — are favourite Sports GK questions for SSC, Railway, and Banking exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'Lord’s Cricket Ground in London, owned by the Marylebone Cricket Club (MCC), is known as the “Home of Cricket”. It hosted its first men’s Test in 1884 between England and Australia.',
  },
];

export const jul06_12_staticGk: StaticGkLink[] = [
  {
    newsItem: 'PM Modi toured Indonesia, Australia and New Zealand from July 6–11.',
    staticFact:
      'India’s Act East Policy (2014) upgraded the Look East Policy of 1991. MAHASAGAR stands for Mutual and Holistic Advancement for Security and Growth Across Regions.',
  },
  {
    newsItem: 'India and Indonesia signed a $600 million-plus BrahMos and Astra missile deal.',
    staticFact:
      'BrahMos Aerospace is an India-Russia joint venture named after the Brahmaputra and Moskva rivers. Astra is DRDO’s indigenous Beyond Visual Range air-to-air missile.',
  },
  {
    newsItem: 'PM Modi received Indonesia’s highest honour, the Bintang Republik Indonesia Adipurna.',
    staticFact:
      'The order was instituted in 1959 and has five classes, with Adipurna the highest. Jawaharlal Nehru received the same honour in 1995.',
  },
  {
    newsItem: 'An India-Australia arrangement enabled Australian uranium supply to India.',
    staticFact:
      'India and Australia signed a Civil Nuclear Cooperation Agreement in 2014; their Economic Cooperation and Trade Agreement (ECTA) came into force in December 2022.',
  },
  {
    newsItem: 'India and New Zealand elevated ties to a Strategic Partnership.',
    staticFact:
      'New Zealand’s capital is Wellington. The last Indian PM to visit New Zealand before 2026 did so four decades earlier.',
  },
  {
    newsItem: 'DRDO flight-tested the Pinaka Long Range Guided Rocket at 60 km.',
    staticFact:
      'Pinaka, named after Lord Shiva’s bow, is a DRDO-developed multi-barrel rocket launcher system. The Integrated Test Range at Chandipur, Odisha, is DRDO’s main test facility.',
  },
  {
    newsItem: 'EPFO launched CITES 2.01; FY26 PF interest (8.25%) will be credited by July 15.',
    staticFact:
      'The EPFO functions under the Ministry of Labour and Employment and administers the EPF & MP Act, 1952. Its apex body is the Central Board of Trustees.',
  },
  {
    newsItem: 'The IMF trimmed India’s FY27 growth forecast to 6.4%.',
    staticFact:
      'The IMF publishes the World Economic Outlook in April and October, with updates in January and July. It is headquartered in Washington, D.C.',
  },
  {
    newsItem: 'UDISE+ 2025–26 reported over 1.02 crore school teachers in India.',
    staticFact:
      'NEP 2020 recommends a Pupil-Teacher Ratio of 30:1 and restructured schooling into the 5+3+3+4 curricular format.',
  },
  {
    newsItem: 'Chandannagar Jalbhara received a GI tag, taking India’s total to 822.',
    staticFact:
      'GI tags are granted under the GI Act, 1999 by the GI Registry in Chennai. Darjeeling Tea was India’s first GI-tagged product (2004).',
  },
  {
    newsItem: 'PM Modi dedicated the Pachpadra refinery — India’s first greenfield refinery-petrochemical complex.',
    staticFact:
      'HPCL is a Maharatna CPSE under the Ministry of Petroleum and Natural Gas. The Nelson Complexity Index measures a refinery’s sophistication.',
  },
  {
    newsItem: 'Jannik Sinner and Linda Noskova won the Wimbledon 2026 singles titles.',
    staticFact:
      'Wimbledon, first held in 1877, is the oldest Grand Slam and the only one played on grass.',
  },
];

export const jul06_12_quiz: QuizQuestion[] = [
  {
    id: 'jul06-q1',
    question: 'PM Modi’s three-nation tour from July 6–11, 2026 covered Indonesia, Australia, and which third country?',
    options: ['Japan', 'New Zealand', 'Fiji', 'Singapore'],
    correctIndex: 1,
    explanation:
      'The tour covered Indonesia (July 6–8), Australia (July 8–10), and New Zealand (July 10–11), concluding in Auckland.',
    category: 'international',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q2',
    question: 'India and Indonesia signed a missile deal worth over USD 600 million in July 2026 covering BrahMos and which other missile?',
    options: ['Akash', 'Astra', 'Prithvi', 'Nag'],
    correctIndex: 1,
    explanation:
      'The July 7, 2026 agreements in Jakarta covered BrahMos supersonic cruise missiles and Astra beyond-visual-range air-to-air missiles.',
    category: 'defence',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q3',
    question: 'Which honour was conferred on PM Modi by Indonesia on July 7, 2026?',
    options: [
      'Bintang Jasa Utama',
      'Bintang Republik Indonesia Adipurna',
      'Order of the Rising Sun',
      'Order of Merdeka',
    ],
    correctIndex: 1,
    explanation:
      'Indonesia conferred its highest state honour, the Bintang Republik Indonesia Adipurna, on PM Modi at the Merdeka Palace, Jakarta.',
    category: 'awards',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q4',
    question: 'Who was the only other Indian Prime Minister to receive Indonesia’s Bintang Adipurna before Narendra Modi?',
    options: ['Indira Gandhi', 'Atal Bihari Vajpayee', 'Jawaharlal Nehru', 'Rajiv Gandhi'],
    correctIndex: 2,
    explanation:
      'Jawaharlal Nehru received the Bintang Adipurna in 1995, when Indonesia marked its 50th year of independence.',
    category: 'awards',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q5',
    question: 'The July 2026 India-Australia summit enabled the supply of which resource to India under a civil nuclear arrangement?',
    options: ['Thorium', 'Lithium', 'Uranium', 'Plutonium'],
    correctIndex: 2,
    explanation:
      'An administrative arrangement under the India-Australia Civil Nuclear Agreement enables the supply of Australian uranium to India for peaceful purposes.',
    category: 'summits',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q6',
    question: 'India and New Zealand set a target to double bilateral trade to what value by 2030?',
    options: ['NZD 5 billion', 'NZD 7 billion', 'NZD 10 billion', 'NZD 12 billion'],
    correctIndex: 1,
    explanation:
      'During PM Modi’s Auckland visit (July 11, 2026), the two sides targeted doubling bilateral trade to NZD 7 billion by 2030 under the new Strategic Partnership.',
    category: 'international',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q7',
    question: 'DRDO flight-tested the Pinaka Long Range Guided Rocket on July 8, 2026 from which test range?',
    options: [
      'Pokhran Field Firing Range',
      'Integrated Test Range, Chandipur',
      'Dr APJ Abdul Kalam Island',
      'Wheeler Island',
    ],
    correctIndex: 1,
    explanation:
      'The Pinaka LRGR was flight-tested at the Integrated Test Range, Chandipur, Odisha, for a user-defined minimum range of 60 km.',
    category: 'defence',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q8',
    question: 'The EPFO’s upgraded IT platform launched on July 8, 2026 is called what?',
    options: ['EPFO 3.0', 'CITES 2.01', 'e-Nidhi 2.0', 'DigiPF'],
    correctIndex: 1,
    explanation:
      'Labour Minister Mansukh Mandaviya launched the Centralised IT Enabled Services (CITES 2.01) platform, unifying about 34 crore member accounts on one national database.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q9',
    question: 'What is the EPF interest rate for FY 2025–26, to be credited to members by July 15, 2026?',
    options: ['8.10%', '8.15%', '8.25%', '8.50%'],
    correctIndex: 2,
    explanation:
      'EPF interest at 8.25% for FY 2025–26 — an estimated ₹1.44 lakh crore — will be credited to about 34 crore accounts by July 15, 2026.',
    category: 'economy',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q10',
    question: 'In its July 2026 World Economic Outlook Update, the IMF projected India’s FY27 GDP growth at what rate?',
    options: ['6.2%', '6.4%', '6.6%', '6.9%'],
    correctIndex: 1,
    explanation:
      'The IMF trimmed India’s FY27 growth forecast to 6.4% (from 6.5% in April), while raising the FY28 forecast to 6.7%.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q11',
    question: 'The RBI approved whose appointment as MD & CEO of South Indian Bank from October 1, 2026?',
    options: ['P.R. Seshadri', 'Mahesh Muralidhar Pai', 'N.S. Vishwanathan', 'Ashok Vaswani'],
    correctIndex: 1,
    explanation:
      'Mahesh Muralidhar Pai, currently CGM at Canara Bank, was approved as South Indian Bank MD & CEO for three years, succeeding P.R. Seshadri.',
    category: 'appointments',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q12',
    question: 'According to the UDISE+ 2025–26 report, the number of school teachers in India rose to approximately what figure?',
    options: ['82 lakh', '95 lakh', '1.03 crore', '1.20 crore'],
    correctIndex: 2,
    explanation:
      'The UDISE+ 2025–26 report recorded 1,02,73,020 teachers — an 8.3% rise from 94,83,294 in 2022–23.',
    category: 'reports',
    difficulty: 'hard',
  },
  {
    id: 'jul06-q13',
    question: 'Which was the only Indian city in the top 10 of the Happy City Index 2026?',
    options: ['Bengaluru', 'Pune', 'Jaipur', 'Indore'],
    correctIndex: 2,
    explanation:
      'Jaipur ranked 6th globally in the Happy City Index 2026 — the only Indian city in the top 10.',
    category: 'reports',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q14',
    question: 'India’s first greenfield integrated refinery-cum-petrochemical complex, dedicated on July 4, 2026, is located at which place?',
    options: ['Barmer', 'Pachpadra (Balotra)', 'Paradip', 'Bina'],
    correctIndex: 1,
    explanation:
      'The ₹79,450+ crore complex at Pachpadra in Rajasthan’s Balotra district was developed by HPCL Rajasthan Refinery Limited (HRRL), an HPCL-Rajasthan government JV.',
    category: 'national',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q15',
    question: 'Jalalabad town, renamed Parashurampuri by the UP Cabinet in July 2026, is in which district?',
    options: ['Bareilly', 'Shahjahanpur', 'Fatehpur', 'Muzaffarnagar'],
    correctIndex: 1,
    explanation:
      'The UP Cabinet approved renaming Jalalabad in Shahjahanpur district as Parashurampuri, reflecting its association with Lord Parashuram.',
    category: 'national',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q16',
    question: 'Which West Bengal sweet received a Geographical Indication (GI) tag in July 2026?',
    options: ['Joynagar Moa', 'Chandannagar Jalbhara', 'Sitabhog', 'Sarpuria'],
    correctIndex: 1,
    explanation:
      'Chandannagar’s Jalbhara — with its chhena shell and liquid nolen-gur filling — got the GI tag, taking India’s total GI products to 822.',
    category: 'national',
    difficulty: 'medium',
  },
  {
    id: 'jul06-q17',
    question: 'Who won the Wimbledon 2026 men’s singles title?',
    options: ['Alexander Zverev', 'Novak Djokovic', 'Jannik Sinner', 'Carlos Alcaraz'],
    correctIndex: 2,
    explanation:
      'Jannik Sinner beat Alexander Zverev 6–7, 7–6, 6–3, 6–4 on July 12, 2026 to defend his Wimbledon title — his fifth Grand Slam overall.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q18',
    question: 'Who won the Wimbledon 2026 women’s singles title in an all-Czech final?',
    options: ['Karolina Muchova', 'Linda Noskova', 'Iga Swiatek', 'Aryna Sabalenka'],
    correctIndex: 1,
    explanation:
      'Linda Noskova defeated Karolina Muchova 6–2, 5–7, 6–3 on July 11, 2026 — her first Grand Slam, as the youngest Wimbledon women’s champion since Petra Kvitova in 2011.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q19',
    question: 'On July 10, 2026, Lord’s hosted its first-ever women’s Test match between England and which team?',
    options: ['Australia', 'South Africa', 'India', 'New Zealand'],
    correctIndex: 2,
    explanation:
      'England vs India was the first women’s Test at Lord’s, 142 years after the venue’s first men’s Test in 1884.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jul06-q20',
    question: 'The inaugural UN Global Dialogue on AI Governance (July 6–7, 2026) was held in which city?',
    options: ['New York', 'Geneva', 'Paris', 'Vienna'],
    correctIndex: 1,
    explanation:
      'The inaugural UN Global Dialogue on AI Governance was held in Geneva; India’s delegation was led by MoS Kirti Vardhan Singh, reaffirming the “AI for All” vision.',
    category: 'summits',
    difficulty: 'medium',
  },
];

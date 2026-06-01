import type { NewsItem, QuizQuestion, StaticGkLink } from './current-affairs-data';

export const may25_31_newsItems: NewsItem[] = [
  /* ── NATIONAL ─────────────────────────────────────────────────────────── */
  {
    id: 'assam-uniform-civil-code-bill-2026',
    category: 'national',
    headline: 'Assam Assembly Passes the Uniform Civil Code Bill 2026',
    eventDate: 'May 27, 2026',
    location: 'Guwahati, Assam',
    summary:
      'The 126-member Assam Assembly passed the Uniform Civil Code Bill 2026 by a voice vote to provide a common civil framework in the state. The legislation completely excludes the Scheduled Tribes population, which constitutes 12.45 percent of Assam\u2019s population. Assam became the third state after Uttarakhand and Gujarat to pass such legislation.',
    keyFacts: [
      'Date of passage: May 27, 2026.',
      'Assam is the 3rd state after Uttarakhand and Gujarat to pass a UCC bill.',
      'Scheduled Tribes (12.45% of Assam\u2019s population) are fully exempted.',
      'Passed by voice vote in the 126-member assembly.',
    ],
    whyItMatters:
      'Uniform Civil Code is a critical Indian Polity topic for UPSC GS Paper 2 (Directive Principles under Article 44), SSC CGL, and all State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'Uniform Civil Code is a Directive Principle of State Policy under Article 44 of the Indian Constitution. Goa was the only Indian state with a common civil code (Portuguese Civil Code 1867) until Uttarakhand enacted its UCC in 2024.',
  },
  {
    id: 'sc-cbi-probe-actor-death',
    category: 'national',
    headline: 'Supreme Court Backs CBI Probe in Actor Death Case',
    eventDate: 'May 25, 2026',
    location: 'New Delhi',
    summary:
      'The Supreme Court backed the Madhya Pradesh government\u2019s decision to transfer the unnatural death case of a model-turned-actor to the Central Bureau of Investigation. The apex court registered a suo motu case to monitor the legal transparency of the matter.',
    keyFacts: [
      'Date of hearing: May 25, 2026.',
      'Investigating agency: Central Bureau of Investigation (CBI).',
      'State involved: Madhya Pradesh.',
      'Court registered a suo motu case for monitoring.',
    ],
    whyItMatters:
      'CBI jurisdiction and Supreme Court\u2019s suo motu powers are important Polity topics for UPSC, SSC CPO, and Police examinations.',
    examRelevance: ['UPSC', 'State PSC', 'Police'],
    staticGkConnect:
      'The CBI was established in 1963 on the recommendation of the Santhanam Committee. It operates under the Delhi Special Police Establishment Act, 1946. CBI requires state government consent to investigate cases within a state\u2019s jurisdiction.',
  },
  {
    id: 'high-level-committee-demographic-change',
    category: 'national',
    headline: 'Government Constitutes High-Level Committee on Unnatural Demographic Change',
    eventDate: 'May 26, 2026',
    location: 'New Delhi',
    summary:
      'Union Home Minister Amit Shah announced the formation of a high-level committee to assess domestic demographic changes. The panel, chaired by retired Supreme Court Justice Prakash Prabhakar Naolekar, will examine issues arising from illegal immigration across different states.',
    keyFacts: [
      'Committee chairman: Retired Supreme Court Justice Prakash Prabhakar Naolekar.',
      'Announced on May 26, 2026, by Union Home Minister Amit Shah.',
      'Focus: Comprehensive assessment of border demographic changes and illegal immigration.',
    ],
    whyItMatters:
      'Committees and commissions set up by the government are frequently asked in UPSC Prelims, SSC CGL, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Police'],
    staticGkConnect:
      'The Ministry of Home Affairs is responsible for internal security, border management, and immigration. The Foreigners Act, 1946, and the Citizenship Act, 1955, are the key legislations governing citizenship and immigration in India.',
  },
  {
    id: 'supreme-court-yamuna-cleaning-committee',
    category: 'environment',
    headline: 'Supreme Court Orders Committee Under Home Secretary to Clean Yamuna River',
    eventDate: 'May 27, 2026',
    location: 'New Delhi',
    summary:
      'The Supreme Court constituted a high-level committee headed by the Union Home Secretary to draw up an action plan to restore the Yamuna river. The court expressed deep concern that the river has been reduced to a sewage canal and gave eight weeks to submit a comprehensive Yamuna Action Plan.',
    keyFacts: [
      'Committee head: Union Home Secretary.',
      'Timeline: Eight weeks to submit a comprehensive Yamuna Action Plan.',
      'Ordered on May 27, 2026, by Justices Manoj Misra and Manmohan.',
      'Court observed that Yamuna has been reduced to a sewage canal.',
    ],
    whyItMatters:
      'River conservation and SC directives on environmental issues are critical for UPSC GS Paper 3 (Environment), SSC CGL, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Yamuna is the longest tributary of the Ganga, originating from the Yamunotri glacier in Uttarakhand. Previous Yamuna Action Plans (YAP-I in 1993, YAP-II in 2004, YAP-III in 2018) have been implemented with limited success.',
  },
  {
    id: 'sc-aravalli-public-consultation',
    category: 'environment',
    headline: 'Supreme Court Directs Larger Public Consultations to Define Aravalli Ranges',
    eventDate: 'May 25, 2026',
    location: 'New Delhi',
    summary:
      'The Supreme Court directed that the expert committee tasked with defining the Aravalli hills and ranges must involve larger public participation. The process must incorporate insights from domain experts and local stakeholders.',
    keyFacts: [
      'Directive date: May 25, 2026.',
      'Region: Aravalli hills and mountain ranges.',
      'Mandate: Ensure comprehensive consultation with stakeholders and ecological experts.',
    ],
    whyItMatters:
      'Aravalli conservation and biodiversity issues are important for UPSC Environment and Geography papers, SSC CGL, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Aravallis are the oldest fold mountains in India, stretching from Gujarat to Delhi (about 800 km). Guru Shikhar (1,722 m) in Mount Abu, Rajasthan, is the highest peak of the Aravalli Range.',
  },
  {
    id: 'monsoon-forecast-stock-market-fall',
    category: 'environment',
    headline: 'Stock Markets Fall Over Reports of Below-Normal Monsoon Season',
    eventDate: 'May 29, 2026',
    location: 'Mumbai',
    summary:
      'Concerns over a below-normal monsoon season triggered significant selling across Indian benchmark indices. BSE Sensex fell by 1,092 points on May 29, 2026. The projection sparked anxieties regarding inflation and agricultural output.',
    keyFacts: [
      'Date of market impact: May 29, 2026.',
      'BSE Sensex fell by 1,092 points.',
      'Reason: Reports indicating potential below-normal monsoon rainfall.',
    ],
    whyItMatters:
      'Monsoon impact on markets and agriculture is a key topic for UPSC GS Paper 3, Banking exams (IBPS PO, SBI PO), and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'Banking', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Indian Meteorological Department (IMD) is headquartered in New Delhi and is the principal agency for weather forecasting. The Long Period Average (LPA) of monsoon rainfall for India is 87 cm (1971\u20132020 baseline).',
  },

  /* ── INTERNATIONAL ────────────────────────────────────────────────────── */
  {
    id: 'us-secretary-rubio-india-visit',
    category: 'international',
    headline: 'US Secretary of State Marco Rubio Visits New Delhi for Strategic Talks',
    eventDate: 'May 24\u201326, 2026',
    location: 'New Delhi',
    summary:
      'U.S. Secretary of State Marco Rubio visited New Delhi to strengthen bilateral ties and address regional security issues ahead of a Quad ministerial meeting. He emphasized that tactical relations with other nations will not come at the expense of India ties.',
    keyFacts: [
      'Guest: U.S. Secretary of State Marco Rubio.',
      'Date of interactions: May 24\u201326, 2026.',
      'Core focus: Strategic partnership and maintaining a free and open Indo-Pacific region.',
    ],
    whyItMatters:
      'India-US relations and Indo-Pacific strategy are high-priority topics for UPSC GS Paper 2 International Relations, SSC CGL, and Banking current affairs.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The US Secretary of State is the country\u2019s top diplomat and heads the Department of State. The India-US strategic partnership was upgraded to a Comprehensive Global Strategic Partnership during the Trump-Modi summit in 2020.',
  },
  {
    id: 'senegal-new-prime-minister',
    category: 'international',
    headline: 'Senegal President Appoints Senior Economist Lo as New Prime Minister',
    eventDate: 'May 25, 2026',
    location: 'Dakar, Senegal',
    summary:
      'Senegal President Bassirou Diomaye Faye appointed a senior economist named Lo as the country\u2019s new Prime Minister. The decision follows the dismissal of the previous Prime Minister Ousmane Sonko amid a deep political and debt crisis.',
    keyFacts: [
      'Date of appointment: May 25, 2026.',
      'Country: Senegal (Capital: Dakar, Currency: CFA Franc).',
      'Mandate: Deploy economic expertise to steer the country out of public debt.',
    ],
    whyItMatters:
      'International appointments and African politics are tested in UPSC Prelims, SSC CGL GA, and Banking current affairs sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking'],
    staticGkConnect:
      'Senegal is located in West Africa. Capital: Dakar. Currency: West African CFA Franc. Senegal gained independence from France in 1960.',
  },
  {
    id: 'us-iran-ceasefire-extension',
    category: 'international',
    headline: 'United States and Iran Negotiators Agree on Ceasefire Extension Deal Framework',
    eventDate: 'May 28\u201329, 2026',
    location: 'International',
    summary:
      'Negotiators from the United States and Iran reached a tentative agreement on a memorandum of understanding to extend their fragile ceasefire by 60 days. The deal framework also includes launching formal negotiations regarding Iran\u2019s nuclear programme.',
    keyFacts: [
      'Ceasefire duration: Proposed 60-day extension agreement.',
      'Key objective: Halt hostilities and launch diplomatic talks on uranium stockpiles.',
      'Date of briefing: May 28\u201329, 2026.',
    ],
    whyItMatters:
      'Iran nuclear issue and US foreign policy in West Asia are critical for UPSC GS Paper 2 International Relations and SSC CGL current affairs.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'Iran\u2019s nuclear programme has been a major international issue since 2003. The JCPOA (Joint Comprehensive Plan of Action) was signed in 2015 by Iran and P5+1 nations. The US withdrew from JCPOA in 2018 under President Trump.',
  },

  /* ── ECONOMY & FINANCE ────────────────────────────────────────────────── */
  {
    id: 'fuel-prices-hiked-fourth-time',
    category: 'economy',
    headline: 'Fuel Prices Hiked Across India for Fourth Time in Ten Days',
    eventDate: 'May 25, 2026',
    location: 'India',
    summary:
      'Standalone prices of petrol and diesel were increased by an average of 2.8 rupees per litre, marking the fourth fuel price increase within ten days. The cumulative increase is around 7.5 rupees per litre across four tranches since May 15, 2026.',
    keyFacts: [
      'Average hike: 2.7 to 2.8 rupees per litre on May 25, 2026.',
      'Cumulative increase: Around 7.5 rupees per litre since May 15.',
      'Driven by global fuel volatility and domestic pricing revisions.',
    ],
    whyItMatters:
      'Fuel pricing and its inflationary impact are important for UPSC GS Paper 3 (Economy), Banking exams, and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway'],
    staticGkConnect:
      'India deregulated petrol prices in 2010 and diesel prices in 2014. Fuel pricing in India follows the Trade Parity Pricing (TPP) formula \u2014 a weighted combination of 80% Import Parity Price and 20% Export Parity Price.',
  },
  {
    id: 'india-us-critical-minerals-framework',
    category: 'economy',
    headline: 'India and United States Finalize Key Critical Minerals Cooperation Framework',
    eventDate: 'May 26, 2026',
    location: 'New Delhi',
    summary:
      'India and the United States signed a framework agreement to ensure steady supplies of critical minerals. The partnership aims to secure global technology supply chains against dominant export controls on rare earth elements.',
    keyFacts: [
      'Signing date: May 26, 2026.',
      'Participants: India and the United States.',
      'Signed on the sidelines of the Quad Foreign Ministers meeting in New Delhi.',
    ],
    whyItMatters:
      'Critical minerals policy and supply chain security are increasingly tested in UPSC GS Paper 3 (Economy/Science), SSC CGL, and Banking examinations.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'Critical minerals include lithium, cobalt, nickel, and rare earth elements essential for EVs, semiconductors, and defence. India identified 30 critical minerals in its 2023 report by the Ministry of Mines. China controls about 60% of global rare earth mining and 90% of processing.',
  },
  {
    id: 'cotton-customs-duty-exemption',
    category: 'economy',
    headline: 'Government Exempts All Customs Duties on Cotton Imports Until October',
    eventDate: 'May 30, 2026',
    location: 'New Delhi',
    summary:
      'The Union Finance Ministry issued an official notification completely exempting cotton imports from customs duties for five months (June 1 to October 31, 2026). The move aims to assist the domestic textile and apparel manufacturing sector by reducing raw material input costs.',
    keyFacts: [
      'Effective period: June 1, 2026, to October 31, 2026.',
      'Notified on May 30, 2026, by the Finance Ministry.',
      'Objective: Boost domestic raw material availability and lower costs for textile manufacturers.',
    ],
    whyItMatters:
      'Trade policy and customs duty changes are key topics for UPSC GS Paper 3 (Economy), Banking current affairs, and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'India is the world\u2019s second-largest cotton producer after China. Maharashtra, Gujarat, and Telangana are the top cotton-producing states. The textile industry is the second-largest employer in India after agriculture.',
  },
  {
    id: 'rbi-balance-of-payments-deficit',
    category: 'reports',
    headline: 'Reserve Bank Data Highlights Sharp Balance of Payments Outflow Surge',
    eventDate: 'May 29, 2026',
    location: 'Mumbai',
    summary:
      'The latest financial report from the RBI revealed a significant widening of the Balance of Payments gap. The BoP deficit reached 30.8 billion dollars for FY 2025\u201326, a more than six-fold increase compared to FY 2024\u201325.',
    keyFacts: [
      'BoP deficit: 30.8 billion dollars for FY 2025\u201326.',
      'Change: More than six-fold increase compared to FY 2024\u201325.',
      'Date reported: May 29, 2026.',
    ],
    whyItMatters:
      'Balance of Payments is a core topic for UPSC GS Paper 3 (Economy), Banking exams (IBPS PO, SBI PO), and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'Banking', 'SSC', 'State PSC'],
    staticGkConnect:
      'Balance of Payments (BoP) has two accounts: Current Account (trade, services, remittances) and Capital Account (FDI, FPI, loans). A BoP deficit means total outflows exceed inflows. RBI uses forex reserves to manage BoP imbalances.',
  },

  /* ── SCIENCE & TECHNOLOGY ──────────────────────────────────────────────── */
  {
    id: 'africa-cdc-ebola-vaccine',
    category: 'science',
    headline: 'African Union Health Agency Vows Ebola Bundibugyo Vaccine Delivery by Year End',
    eventDate: 'May 28, 2026',
    location: 'International',
    summary:
      'The Africa Centres for Disease Control and Prevention announced that a vaccine against the Bundibugyo strain of the Ebola virus will be ready by the end of 2026. The development aims to counter regional outbreaks in central Africa.',
    keyFacts: [
      'Timeline: Expected by end of 2026.',
      'Announced by: Director General of Africa CDC on May 28, 2026.',
      'Target strain: Bundibugyo strain of Ebola virus.',
    ],
    whyItMatters:
      'Disease outbreaks, vaccines, and international health organizations are frequently tested in UPSC Prelims, SSC CGL, and Banking GK sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Teaching'],
    staticGkConnect:
      'Ebola Virus Disease (EVD) was first identified in 1976 near the Ebola River in the Democratic Republic of Congo. There are six known species of Ebola virus. The Bundibugyo species was first discovered in 2007 in Uganda.',
  },
  {
    id: 'nta-cuet-retest',
    category: 'science',
    headline: 'NTA Announces Re-Test for Common University Entrance Test Candidates',
    eventDate: 'May 30, 2026',
    location: 'India',
    summary:
      'The first shift of the CUET undergraduate admissions was disrupted at several centres due to a technical glitch. The National Testing Agency announced that a re-test will be conducted for the 3,765 affected candidates.',
    keyFacts: [
      'Total affected candidates: 3,765 students scheduled for a mandatory re-test.',
      'Date of incident: May 30, 2026.',
      'Conducting body: National Testing Agency (NTA).',
    ],
    whyItMatters:
      'NTA and its examinations (CUET, NEET, JEE) are important for SSC, Teaching, and State PSC General Awareness sections.',
    examRelevance: ['SSC', 'Teaching', 'State PSC'],
    staticGkConnect:
      'The National Testing Agency (NTA) was established in 2017. It conducts CUET, NEET-UG, JEE Main, UGC NET, and other national entrance examinations. CUET-UG was introduced in 2022 for undergraduate admissions to central universities.',
  },
  {
    id: 'blue-moon-may-31',
    category: 'science',
    headline: 'Astronomers Record Rare Blue Moon Phenomenon on May 31',
    eventDate: 'May 31, 2026',
    location: 'International',
    summary:
      'Astronomers documented the second full moon within a single calendar month, known as a Blue Moon. Experts clarified that the term is a calendar designation and does not alter the moon\u2019s actual colour. The moon\u2019s synodic period of 29.5 days makes two full moons possible in a 31-day month.',
    keyFacts: [
      'Date of occurrence: May 31, 2026.',
      'Scientific context: Moon synodic period is 29.5 days.',
      'Observed by astronomers at Bosscha Observatory.',
    ],
    whyItMatters:
      'Astronomical phenomena are tested in UPSC Prelims (Science), SSC CGL, Railway exams, and Teaching examinations.',
    examRelevance: ['UPSC', 'SSC', 'Railway', 'Teaching'],
    staticGkConnect:
      'A Blue Moon is the second full moon in a single calendar month. A Supermoon occurs when a full moon coincides with the moon\u2019s closest approach to Earth (perigee). The synodic period (new moon to new moon) is approximately 29.53 days.',
  },

  /* ── SPORTS ───────────────────────────────────────────────────────────── */
  {
    id: 'esha-singh-world-record',
    category: 'sports',
    headline: 'Indian Shooter Esha Singh Breaks World Record at ISSF World Cup Munich',
    eventDate: 'May 27, 2026',
    location: 'Munich, Germany',
    summary:
      'Indian shooter Esha Singh, 21, broke the world record with a score of 43/50 in the Women\u2019s 25m Pistol final at the ISSF World Cup in Munich, clinching gold and defeating reigning Olympic champion Yang Ji-in.',
    keyFacts: [
      'Athlete: Esha Singh.',
      'Age: 21 years old.',
      'Event: ISSF World Cup Rifle/Pistol, Munich, Germany.',
      'Score: 43/50 in the final \u2014 new world record (senior and junior).',
      'Defeated reigning Olympic champion Yang Ji-in (South Korea).',
    ],
    whyItMatters:
      'Indian sports achievements and world records are frequently asked in SSC CGL, Banking, Railway, and State PSC examinations.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC', 'Police'],
    staticGkConnect:
      'The International Shooting Sport Federation (ISSF) is the governing body for shooting sports globally. India has won multiple Olympic medals in shooting, including Abhinav Bindra\u2019s gold in 2008 Beijing Olympics (10m Air Rifle).',
  },
  {
    id: 'vinesh-phogat-asian-games-trials',
    category: 'sports',
    headline: 'Wrestler Vinesh Phogat Knocked Out of Asian Games Selection Trials',
    eventDate: 'May 30, 2026',
    location: 'New Delhi',
    summary:
      'Star Indian wrestler Vinesh Phogat lost her semifinal bout 4\u20136 to Meenakshi Goyat in the women\u2019s 53kg category at the Indira Gandhi International Stadium. The defeat concluded her bid for a spot at the upcoming Asian Games.',
    keyFacts: [
      'Match date: May 30, 2026.',
      'Result: Lost 4\u20136 to Meenakshi Goyat in the semifinals.',
      'Venue: Indira Gandhi Indoor Stadium, New Delhi.',
      'Category: Women\u2019s 53kg.',
    ],
    whyItMatters:
      'Wrestling and Asian Games are important for Sports GK in SSC CGL, Banking, Railway, and State PSC examinations.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'The Asian Games are held every four years and are organized by the Olympic Council of Asia (OCA). The next Asian Games are scheduled for Nagoya, Japan (2026). Vinesh Phogat was disqualified from the 2024 Paris Olympics 50kg final for being overweight.',
  },
  {
    id: 'psg-champions-league-2026',
    category: 'sports',
    headline: 'Paris Saint-Germain Retains UEFA Champions League Title in Shootout Victory',
    eventDate: 'May 30, 2026',
    location: 'Budapest, Hungary',
    summary:
      'Paris Saint-Germain won back-to-back European football titles by defeating Arsenal in a dramatic penalty shootout (4\u20133) in Budapest. The final had ended 1\u20131 after extra time.',
    keyFacts: [
      'Winning team: Paris Saint-Germain.',
      'Runner-up: Arsenal FC.',
      'Shootout score: 4\u20133 on penalties, May 30, 2026.',
      'Venue: Budapest, Hungary.',
    ],
    whyItMatters:
      'Major international sports tournaments are tested in SSC CGL, Banking, and Railway General Awareness sections.',
    examRelevance: ['SSC', 'Banking', 'Railway'],
    staticGkConnect:
      'The UEFA Champions League is the premier European club football competition, organized by the Union of European Football Associations (UEFA) since 1955. Real Madrid holds the record for most titles (15 as of 2024).',
  },

  /* ── AWARDS & HONOURS ─────────────────────────────────────────────────── */
  {
    id: 'padma-vibhushan-dharmendra',
    category: 'awards',
    headline: 'President Confers Posthumous Padma Vibhushan on Actor Dharmendra',
    eventDate: 'May 25, 2026',
    location: 'New Delhi',
    summary:
      'President Droupadi Murmu presented the prestigious civilian honours at Rashtrapati Bhavan. A posthumous Padma Vibhushan was awarded to veteran actor Dharmendra, received by his wife Hema Malini.',
    keyFacts: [
      'Ceremony date: May 25, 2026.',
      'Award: Padma Vibhushan (Posthumous).',
      'Recipient: Actor Dharmendra (received by Hema Malini).',
      'Venue: Rashtrapati Bhavan, New Delhi.',
    ],
    whyItMatters:
      'Padma awards and their recipients are frequently asked in UPSC Prelims, SSC CGL, Banking, Railway, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'Padma Awards are conferred in three categories: Padma Vibhushan (exceptional and distinguished service), Padma Bhushan (distinguished service of a high order), and Padma Shri (distinguished service). They are announced on the eve of Republic Day every year.',
  },
  {
    id: 'padma-vibhushan-n-rajam',
    category: 'awards',
    headline: 'Renowned Violinist N. Rajam Receives the Padma Vibhushan Award',
    eventDate: 'May 25, 2026',
    location: 'New Delhi',
    summary:
      'President Droupadi Murmu conferred the country\u2019s second-highest civilian honour on veteran violinist N. Rajam for her exemplary contributions to Indian classical music.',
    keyFacts: [
      'Date conferred: May 25, 2026.',
      'Award: Padma Vibhushan.',
      'Recipient: Violinist N. Rajam.',
    ],
    whyItMatters:
      'Indian classical music and cultural awards are tested in UPSC Art & Culture, SSC CGL, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'N. Rajam is a pioneer of the Gayaki Ang (vocal style) technique on the violin. She belongs to the Banaras Gharana of Hindustani classical music. The violin was adapted for Indian classical music in the 18th century.',
  },
  {
    id: 'padma-bhushan-uday-kotak',
    category: 'awards',
    headline: 'Veteran Banker Uday Kotak Conferred with the Padma Bhushan',
    eventDate: 'May 25, 2026',
    location: 'New Delhi',
    summary:
      'President Droupadi Murmu presented the Padma Bhushan during an official investiture ceremony on prominent Indian banker Uday Kotak.',
    keyFacts: [
      'Date of investiture: May 25, 2026.',
      'Award: Padma Bhushan.',
      'Recipient: Veteran banker Uday Kotak.',
    ],
    whyItMatters:
      'Banking personalities and Padma awards are tested in IBPS PO, SBI PO, SSC CGL, and UPSC current affairs sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'Uday Kotak is the founder and former CEO of Kotak Mahindra Bank. Kotak Mahindra Finance was the first NBFC to receive a banking licence from the RBI (in 2003). The Kotak Committee (2017) recommended corporate governance reforms for listed companies.',
  },

  /* ── APPOINTMENTS ──────────────────────────────────────────────────────── */
  {
    id: 'new-cds-raja-subramani',
    category: 'appointments',
    headline: 'General N. S. Raja Subramani Assumes Office as Third Chief of Defence Staff',
    eventDate: 'May 31, 2026',
    location: 'New Delhi',
    summary:
      'General N. S. Raja Subramani formally assumed charge as India\u2019s third Chief of Defence Staff and Secretary of the Department of Military Affairs. He succeeded General Anil Chauhan and was originally commissioned into the Garhwal Rifles in December 1985.',
    keyFacts: [
      'Date of assuming charge: May 31, 2026.',
      'Role: 3rd Chief of Defence Staff (CDS).',
      'Regimental affiliation: Garhwal Rifles (commissioned December 1985).',
      'Predecessor: General Anil Chauhan.',
    ],
    whyItMatters:
      'CDS appointment and defence hierarchy are important for UPSC, SSC, Defence, Banking, and Police examinations.',
    examRelevance: ['UPSC', 'SSC', 'Defence', 'Banking', 'State PSC', 'Police'],
    staticGkConnect:
      'The post of CDS was created on January 1, 2020, on the recommendation of the Kargil Review Committee (1999). Gen. Bipin Rawat was the first CDS. The CDS is the permanent chairman of the Chiefs of Staff Committee and heads the Department of Military Affairs.',
  },
  {
    id: 'karnataka-cm-siddaramaiah-resigns',
    category: 'appointments',
    headline: 'Karnataka Chief Minister Siddaramaiah Resigns Following High Command Directives',
    eventDate: 'May 28, 2026',
    location: 'Bengaluru, Karnataka',
    summary:
      'Karnataka Chief Minister Siddaramaiah formally submitted his resignation to the Special Secretary to Governor Thawar Chand Gehlot. The development followed a political transition directive from the party\u2019s central high command.',
    keyFacts: [
      'Date of resignation: May 28, 2026.',
      'Outgoing leader: Siddaramaiah.',
      'Submitted to: Special Secretary to Governor Thawar Chand Gehlot.',
    ],
    whyItMatters:
      'State-level political transitions and Chief Minister changes are important for UPSC Polity, SSC CGL, and all State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'Under Article 164, the Chief Minister is appointed by the Governor and holds office during the pleasure of the Governor. The CM is the leader of the majority party in the state legislature.',
  },
  {
    id: 'dk-shivakumar-karnataka-cm',
    category: 'appointments',
    headline: 'D. K. Shivakumar Announced as the New Chief Minister of Karnataka',
    eventDate: 'May 28, 2026',
    location: 'Bengaluru, Karnataka',
    summary:
      'Senior Congress leader D. K. Shivakumar was named as the next Chief Minister of Karnataka. The swearing-in ceremony is scheduled for June 3, 2026, at the Glass House at Lok Bhavan in Bengaluru.',
    keyFacts: [
      'Scheduled swearing-in: June 3, 2026.',
      'Venue: Glass House at Lok Bhavan, Bengaluru.',
      'Party: Indian National Congress.',
    ],
    whyItMatters:
      'State government transitions and political leadership changes are critical for UPSC, SSC, and State PSC current affairs.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'Karnataka has 224 Assembly constituencies and 28 Lok Sabha seats. The Governor of Karnataka is Thawar Chand Gehlot. Bengaluru is the state capital, and Belgaum (Belagavi) is the second capital.',
  },

  /* ── DEFENCE & SECURITY ────────────────────────────────────────────────── */
  {
    id: 'quad-maritime-surveillance',
    category: 'defence',
    headline: 'Quad Foreign Ministers Meeting Expands Indo-Pacific Maritime Surveillance',
    eventDate: 'May 26, 2026',
    location: 'New Delhi',
    summary:
      'Foreign ministers of the Quad nations agreed to expand critical mineral collaboration and enhance joint maritime surveillance frameworks across the Indo-Pacific region to improve regional infrastructure security.',
    keyFacts: [
      'Event date: May 26, 2026.',
      'Hosting Minister: External Affairs Minister S. Jaishankar.',
      'Participants: US Secretary of State Marco Rubio, Australian FM Penny Wong, Japanese FM Toshimitsu Motegi.',
    ],
    whyItMatters:
      'Quad grouping and Indo-Pacific security are high-priority topics for UPSC GS Paper 2, SSC CGL, and Defence examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Defence'],
    staticGkConnect:
      'The Quad (Quadrilateral Security Dialogue) consists of India, USA, Japan, and Australia. It was revived in 2017 after being first proposed by Japanese PM Shinzo Abe in 2007. The Quad focuses on a free, open, and inclusive Indo-Pacific.',
  },
  {
    id: 'amit-shah-border-tour',
    category: 'defence',
    headline: 'Union Home Minister Amit Shah Launches Strategic Border Security Tour',
    eventDate: 'May 26, 2026',
    location: 'Rajasthan',
    summary:
      'Union Home Minister Amit Shah initiated a three-week tour of India\u2019s international border outposts, starting from Rajasthan. He will interact with state governments and BSF personnel to assess operational readiness along the Pakistan and Bangladesh borders.',
    keyFacts: [
      'Commencement: May 26, 2026.',
      'Starting state: Rajasthan.',
      'Agencies involved: Border Security Force (BSF) and regional security networks.',
    ],
    whyItMatters:
      'Border security and BSF operations are tested in UPSC, SSC CPO, Defence, and Police examinations.',
    examRelevance: ['UPSC', 'SSC', 'Defence', 'Police'],
    staticGkConnect:
      'The BSF was raised on December 1, 1965, after the 1965 India-Pakistan War. It is the primary border guarding force for India\u2019s borders with Pakistan and Bangladesh. BSF headquarters is in New Delhi, and it falls under the Ministry of Home Affairs.',
  },
  {
    id: 'nausena-shaurya-vatika-lucknow',
    category: 'defence',
    headline: 'Union Defence Minister Inaugurates Nausena Shaurya Vatika Memorial in Lucknow',
    eventDate: 'May 30, 2026',
    location: 'Lucknow, Uttar Pradesh',
    summary:
      'The Union Defence Minister inaugurated the Nausena Shaurya Vatika park and naval exhibit in Lucknow, honouring the valour, history, and sacrifices of Indian Navy personnel.',
    keyFacts: [
      'Event date: May 30, 2026.',
      'Location: Lucknow, Uttar Pradesh.',
      'Dedication: Commemoration of Indian Navy achievements.',
    ],
    whyItMatters:
      'Defence memorials and Navy-related news are tested in SSC CGL, Defence, Railway, and State PSC examinations.',
    examRelevance: ['SSC', 'Defence', 'Railway', 'State PSC'],
    staticGkConnect:
      'The Indian Navy was founded on October 26, 1612 (as the East India Company\u2019s Marine). Navy Day is celebrated on December 4 (commemorating the 1971 attack on Karachi harbour). The current motto is \u201cSham No Varunah\u201d (May the Lord of Water be auspicious unto us).',
  },

  /* ── SCHEMES & POLICIES ────────────────────────────────────────────────── */
  {
    id: 'sarthak-pds-scheme-extension',
    category: 'national',
    headline: 'Union Cabinet Approves Extension of SARTHAK-PDS Scheme for Five Years',
    eventDate: 'May 2026',
    location: 'New Delhi',
    summary:
      'The Cabinet Committee on Economic Affairs approved the continuation of the SARTHAK-PDS scheme with a central outlay of \u20B925,530 crore. The scheme provides states with financial assistance for automation and internal transport handling of food grains, extended for five years aligned with the 16th Finance Commission cycle.',
    keyFacts: [
      'Scheme: SARTHAK-PDS (Scheme for Assistance in Ration Transport and Handling with Automation in PDS).',
      'Central outlay: \u20B925,530 crore.',
      'Extension period: Five years (aligned with 16th Finance Commission cycle).',
    ],
    whyItMatters:
      'Government schemes and PDS reforms are high-priority topics for UPSC GS Paper 2/3, SSC CGL, Banking, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'The Public Distribution System (PDS) is managed by the Department of Food and Public Distribution under the Ministry of Consumer Affairs. The National Food Security Act (NFSA), 2013, covers approximately 81 crore beneficiaries across India.',
  },
  {
    id: 'iaf-exam-paper-security',
    category: 'national',
    headline: 'Government Proposes Involving Indian Air Force for Entrance Paper Security',
    eventDate: 'May 29, 2026',
    location: 'New Delhi',
    summary:
      'Following recent exam paper leaks, the central government drafted a proposal to deploy the Indian Air Force logistics command to manage transportation of national examination papers from presses to centres. The target test is NEET-UG 2026 re-test scheduled for June 21.',
    keyFacts: [
      'Proposal date: May 29, 2026.',
      'Target test: NEET-UG 2026 re-test (June 21).',
      'Managing entity: Indian Air Force (IAF) logistics command.',
    ],
    whyItMatters:
      'Exam security measures and NTA-related news are important for SSC, Teaching, Defence, and UPSC current affairs.',
    examRelevance: ['UPSC', 'SSC', 'Defence', 'Teaching'],
    staticGkConnect:
      'NEET-UG is conducted by the NTA for admissions to MBBS, BDS, and other medical courses. The IAF is one of three branches of the Indian Armed Forces. IAF Headquarters is at Vayu Bhawan, New Delhi.',
  },
  {
    id: 'sc-school-facilities-compliance',
    category: 'national',
    headline: 'Supreme Court Directs Strict Compliance for Basic Facilities in Schools',
    eventDate: 'May 25, 2026',
    location: 'New Delhi',
    summary:
      'The Supreme Court directed the central government to ensure state compliance regarding essential school infrastructure for girls, including mandatory provision of free sanitary napkins and functional gender-segregated toilets. The order is a compliance follow-up on the apex court\u2019s January 30 judgment.',
    keyFacts: [
      'Order date: May 25, 2026.',
      'Core mandate: Free sanitary napkins and functional segregated toilets in all schools.',
      'Legal reference: Follow-up on SC\u2019s January 30 judgment.',
    ],
    whyItMatters:
      'Right to Education and school infrastructure are tested in UPSC GS Paper 2, State PSC, and Teaching examinations.',
    examRelevance: ['UPSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The Right to Education Act (RTE), 2009, mandates free and compulsory education for children aged 6\u201314 (Article 21A). Swachh Vidyalaya Abhiyan was launched in 2014 to ensure separate toilets for boys and girls in all government schools.',
  },

  /* ── REPORTS & INDICES ──────────────────────────────────────────────────── */
  {
    id: 'delhi-electoral-roll-mapping',
    category: 'reports',
    headline: 'Delhi Chief Electoral Officer Highlights Very Low Electoral Roll Mapping',
    eventDate: 'May 27, 2026',
    location: 'New Delhi',
    summary:
      'The Chief Electoral Officer of Delhi released a report flagging extremely low numbers in electoral roll mapping at only 42.53 percent. The deficiency is primarily attributed to regional migration and locked residential homes.',
    keyFacts: [
      'Current mapping percentage: Only 42.53%.',
      'Date released: May 27, 2026.',
      'Primary reasons: High population migration and unverified locked premises.',
    ],
    whyItMatters:
      'Electoral processes and ECI reports are important for UPSC GS Paper 2 (Polity), SSC CGL, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Election Commission of India (ECI) is an autonomous constitutional body under Article 324 of the Constitution. The Chief Election Commissioner and Election Commissioners are appointed by the President. Voter ID (EPIC) was introduced in 1993.',
  },
  {
    id: 'us-defence-stockpile-report',
    category: 'reports',
    headline: 'Strategic Report Outlines Depletion in United States Defence Weapons Stockpile',
    eventDate: 'May 27, 2026',
    location: 'International',
    summary:
      'A strategic report detailed a sharp depletion in US military weapons reserves due to counter-strikes and military defence actions in West Asia. Rebuilding stockpiles could take up to three years.',
    keyFacts: [
      'Date of report: May 27, 2026.',
      'Recovery projection: Up to three years to rebuild depleted stockpiles.',
      'Root cause: High ammunition usage in regional conflicts.',
    ],
    whyItMatters:
      'US defence policy and global military balance are tested in UPSC GS Paper 2 (International Relations), SSC CGL, and Defence examinations.',
    examRelevance: ['UPSC', 'SSC', 'Defence'],
    staticGkConnect:
      'The US Department of Defense (Pentagon) is headquartered in Arlington, Virginia. The US is the world\u2019s largest military spender, accounting for roughly 40% of global military expenditure.',
  },

  /* ── SUMMITS & CONFERENCES ──────────────────────────────────────────────── */
  {
    id: 'quad-fm-meet-new-delhi',
    category: 'summits',
    headline: 'External Affairs Minister Hosts Quad Foreign Ministers Meet in New Delhi',
    eventDate: 'May 26, 2026',
    location: 'Hyderabad House, New Delhi',
    summary:
      'India hosted the Quad Foreign Ministers meeting to step up tri-service coordination, supply chain resilience, and maritime security. The ministers reviewed geopolitical developments across the Indo-Pacific, and firmed up a critical minerals deal.',
    keyFacts: [
      'Date: May 26, 2026.',
      'Venue: Hyderabad House, New Delhi.',
      'Key outcome: Critical minerals deal and expanded maritime surveillance.',
    ],
    whyItMatters:
      'Quad summits and India\u2019s role in the Indo-Pacific are critical topics for UPSC GS Paper 2, SSC CGL, and State PSC examinations.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'Hyderabad House is the venue for high-level diplomatic meetings in New Delhi. The Quad Leaders\u2019 Summit was first held in Washington D.C. in 2021. India hosted the Quad Leaders\u2019 Summit in 2023 (virtual, September).',
  },
  {
    id: 'white-house-iran-deal-review',
    category: 'summits',
    headline: 'White House Situation Room Meeting Reviews Draft US\u2013Iran Agreement',
    eventDate: 'May 29, 2026',
    location: 'Washington D.C., USA',
    summary:
      'US President Donald Trump convened an urgent two-hour meeting in the Situation Room. The conference analysed the proposed memorandum of understanding regarding Iran\u2019s highly enriched uranium stockpiles and maritime passages through the Strait of Hormuz.',
    keyFacts: [
      'Conference date: May 29, 2026.',
      'Meeting type: White House Situation Room briefing.',
      'Core focus: Iran nuclear capability and Strait of Hormuz accessibility.',
    ],
    whyItMatters:
      'US-Iran relations and nuclear diplomacy are key topics for UPSC GS Paper 2, SSC CGL, and Banking current affairs.',
    examRelevance: ['UPSC', 'SSC'],
    staticGkConnect:
      'The Strait of Hormuz connects the Persian Gulf to the Gulf of Oman. About 20\u201325% of global oil passes through this strait. It is bounded by Iran on the north and Oman/UAE on the south.',
  },
  {
    id: 'western-premiers-summit-canada',
    category: 'summits',
    headline: 'Western Premiers Summit Concludes in Kananaskis Amid Internal Tensions',
    eventDate: 'May 26, 2026',
    location: 'Kananaskis, Alberta, Canada',
    summary:
      'The annual summit of Canada\u2019s western provincial premiers and northern territorial leaders concluded in Alberta. Discussions revealed friction over regional resource management, legislative bills, and provincial separation trends.',
    keyFacts: [
      'Concluding date: May 26, 2026.',
      'Venue: Kananaskis, Alberta, Canada.',
      'Central topics: Regional autonomy, infrastructure, and federal privacy legislation.',
    ],
    whyItMatters:
      'International governance and federalism topics are tested in UPSC GS Paper 2 and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'SSC'],
    staticGkConnect:
      'Canada is a parliamentary democracy with a federal structure of 10 provinces and 3 territories. The Prime Minister is the head of government. Capital: Ottawa. Currency: Canadian Dollar.',
  },

  /* ── BOOKS & AUTHORS ───────────────────────────────────────────────────── */
  {
    id: 'shivraj-chouhan-book-apnapan',
    category: 'books',
    headline: 'Agriculture Minister Shivraj Singh Chouhan Launches Book Titled Apnapan',
    eventDate: 'May 26, 2026',
    location: 'New Delhi',
    summary:
      'Union Minister Shivraj Singh Chouhan launched his book titled Apnapan in New Delhi. The book documents his three-decade association with PM Modi and governance philosophies. Former VP M. Venkaiah Naidu and former PM H.D. Deve Gowda were present.',
    keyFacts: [
      'Release date: May 26, 2026.',
      'Author: Union Minister Shivraj Singh Chouhan.',
      'Dignitaries: Former VP M. Venkaiah Naidu and former PM H.D. Deve Gowda.',
    ],
    whyItMatters:
      'Books by prominent political figures are tested in SSC CGL, Banking, Railway, and State PSC General Awareness.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
  },
  {
    id: 'vaishnavi-patel-book-demons',
    category: 'books',
    headline: 'Author Vaishnavi Patel Releases Novel We Dance Upon Demons',
    eventDate: 'May 2026',
    location: 'International',
    summary:
      'Acclaimed author Vaishnavi Patel released her speculative fiction novel blending mythology and character-driven historical lore.',
    keyFacts: [
      'Publication: May 2026.',
      'Title: We Dance Upon Demons.',
      'Author: Vaishnavi Patel.',
    ],
    whyItMatters:
      'Recent book publications are tested in SSC CGL and Banking General Awareness sections.',
    examRelevance: ['SSC', 'Banking', 'State PSC'],
  },
  {
    id: 'shannon-chakraborty-tapestry-of-fate',
    category: 'books',
    headline: 'Novelist Shannon Chakraborty Releases The Tapestry of Fate',
    eventDate: 'May 2026',
    location: 'International',
    summary:
      'Best-selling author Shannon Chakraborty published her latest epic fantasy novel tracking historical adventures, folklore, and mythical maritime expeditions.',
    keyFacts: [
      'Publication: May 2026.',
      'Title: The Tapestry of Fate.',
      'Author: Shannon Chakraborty.',
    ],
    whyItMatters:
      'Literature and book publications are tested in SSC and Banking General Awareness.',
    examRelevance: ['SSC', 'Banking'],
  },

  /* ── OBITUARIES ────────────────────────────────────────────────────────── */
  {
    id: 'anik-dutta-passes-away',
    category: 'obituaries',
    headline: 'Renowned Film Director Anik Dutta Passes Away at 66',
    eventDate: 'May 27, 2026',
    location: 'India',
    summary:
      'Noted Indian filmmaker Anik Dutta, famous for directing the critically acclaimed Bengali film Bhooter Bhabishyat, passed away on May 27, 2026, after a fall from the terrace of his residence in Kolkata.',
    keyFacts: [
      'Date of death: May 27, 2026.',
      'Known for: Directing iconic Bengali satirical and cultural films including Bhooter Bhabishyat.',
      'Debuted as a director in 2012; last film was Joto Kando Kolkatatei (2025).',
    ],
    whyItMatters:
      'Deaths of prominent cultural figures are tested in SSC CGL, Banking, Railway, and State PSC current affairs.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
  },
  {
    id: 'soma-somasegar-passes-away',
    category: 'obituaries',
    headline: 'Indian-Origin Tech Veteran Soma Somasegar Passes Away',
    eventDate: 'May 30, 2026',
    location: 'International',
    summary:
      'Senior Indian-origin technology executive and venture capitalist Soma Somasegar passed away at the age of 59. He was a former Corporate Vice President at Microsoft and a prominent global tech investor.',
    keyFacts: [
      'Date of passing: May 30, 2026.',
      'Age: 59 years old.',
      'Corporate role: Former Corporate Vice President at Microsoft.',
    ],
    whyItMatters:
      'Notable personalities in tech and business are tested in SSC and Banking General Awareness.',
    examRelevance: ['SSC', 'Banking', 'State PSC'],
  },
  {
    id: 'shyam-lal-meena-passes-away',
    category: 'obituaries',
    headline: 'Veteran Olympian Archer Shyam Lal Meena Passes Away at 61',
    eventDate: 'May 31, 2026',
    location: 'India',
    summary:
      'Veteran Indian sportsman Shyam Lal Meena, a member of India\u2019s first-ever Olympic archery contingent, passed away at 61 after a prolonged illness. He was a pioneer in modern Indian competitive archery.',
    keyFacts: [
      'Announcement date: May 31, 2026.',
      'Age: 61 years old.',
      'Legacy: Member of India\u2019s first Olympic archery team.',
    ],
    whyItMatters:
      'Sports personalities and Olympic history are tested in SSC CGL, Banking, Railway, and State PSC examinations.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
  },
];

/* ── STATIC GK BOX ──────────────────────────────────────────────────────── */

export const may25_31_staticGk: StaticGkLink[] = [
  {
    newsItem: 'Assam passes Uniform Civil Code Bill 2026',
    staticFact: 'Uniform Civil Code (UCC) is a Directive Principle under Article 44 of the Constitution. Goa had a common civil code since the Portuguese era (1867). Uttarakhand was the first state to enact its own UCC in 2024, followed by Gujarat.',
  },
  {
    newsItem: 'General N. S. Raja Subramani becomes 3rd CDS',
    staticFact: 'The CDS post was created on January 1, 2020, on the recommendation of the Kargil Review Committee (1999). Gen. Bipin Rawat was the 1st CDS (2020\u20132021), Gen. Anil Chauhan was the 2nd CDS (2022\u20132026).',
  },
  {
    newsItem: 'India-US Critical Minerals Framework signed',
    staticFact: 'India identified 30 critical minerals (2023, Ministry of Mines report). China controls ~60% of global rare earth mining and ~90% of processing. Lithium reserves were discovered in Reasi, J&K, in 2023.',
  },
  {
    newsItem: 'Quad Foreign Ministers Meet in New Delhi',
    staticFact: 'The Quad (India, USA, Japan, Australia) was revived in 2017 after being first proposed by Japanese PM Shinzo Abe in 2007. The first Quad Leaders\u2019 Summit was held in Washington D.C. in September 2021.',
  },
  {
    newsItem: 'Supreme Court orders Yamuna cleaning committee',
    staticFact: 'The Yamuna is the longest tributary of the Ganga (1,376 km). It originates from Yamunotri glacier in Uttarakhand. Previous Yamuna Action Plans: YAP-I (1993), YAP-II (2004), YAP-III (2018).',
  },
  {
    newsItem: 'RBI reports BoP deficit of $30.8 billion',
    staticFact: 'Balance of Payments (BoP) has two components: Current Account (trade, services, remittances) and Capital Account (FDI, FPI, loans). India\u2019s forex reserves peaked at $704.89 billion in September 2024.',
  },
  {
    newsItem: 'Blue Moon observed on May 31, 2026',
    staticFact: 'A Blue Moon is the second full moon in a single calendar month. The moon\u2019s synodic period is 29.53 days. A Supermoon occurs when a full moon coincides with lunar perigee (closest to Earth).',
  },
  {
    newsItem: 'Padma Awards investiture at Rashtrapati Bhavan',
    staticFact: 'Padma awards hierarchy: Bharat Ratna (highest) \u2192 Padma Vibhushan \u2192 Padma Bhushan \u2192 Padma Shri. Padma Awards are announced on the eve of Republic Day (January 25) each year.',
  },
  {
    newsItem: 'Karnataka CM change: Siddaramaiah to D.K. Shivakumar',
    staticFact: 'Karnataka has 224 Assembly constituencies and 28 Lok Sabha seats. Under Article 164, the CM is appointed by the Governor. The Governor of Karnataka is Thawar Chand Gehlot.',
  },
  {
    newsItem: 'BSF border security tour by Home Minister',
    staticFact: 'The Border Security Force (BSF) was raised on December 1, 1965. It guards India\u2019s borders with Pakistan and Bangladesh. BSF falls under the Ministry of Home Affairs. India shares land borders with 7 countries.',
  },
];

/* ── QUIZ ────────────────────────────────────────────────────────────────── */

export const may25_31_quiz: QuizQuestion[] = [
  {
    id: 'may25-q1',
    question: 'Assam became which number state in India to pass a Uniform Civil Code Bill?',
    options: ['First', 'Second', 'Third', 'Fourth'],
    correctIndex: 2,
    explanation: 'Assam became the third state after Uttarakhand and Gujarat to pass the Uniform Civil Code Bill 2026 on May 27, 2026.',
    category: 'national',
    difficulty: 'easy',
  },
  {
    id: 'may25-q2',
    question: 'Who assumed charge as India\u2019s third Chief of Defence Staff on May 31, 2026?',
    options: ['General Anil Chauhan', 'General Dhiraj Seth', 'General N. S. Raja Subramani', 'General Manoj Pande'],
    correctIndex: 2,
    explanation: 'General N. S. Raja Subramani assumed charge as India\u2019s 3rd CDS on May 31, 2026, succeeding General Anil Chauhan. He was commissioned into the Garhwal Rifles in December 1985.',
    category: 'appointments',
    difficulty: 'easy',
  },
  {
    id: 'may25-q3',
    question: 'The India-US Critical Minerals Cooperation Framework was signed on the sidelines of which meeting?',
    options: ['G20 Foreign Ministers Meet', 'BRICS Summit', 'Quad Foreign Ministers Meeting', 'UN General Assembly'],
    correctIndex: 2,
    explanation: 'The framework was signed on May 26, 2026, on the sidelines of the Quad Foreign Ministers meeting held at Hyderabad House, New Delhi.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'may25-q4',
    question: 'What was the Balance of Payments (BoP) deficit reported by the RBI for FY 2025\u201326?',
    options: ['$10.2 billion', '$20.5 billion', '$30.8 billion', '$45.1 billion'],
    correctIndex: 2,
    explanation: 'The RBI data reported on May 29, 2026, showed the BoP deficit reached $30.8 billion for FY 2025\u201326, a more than six-fold increase from the previous fiscal year.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'may25-q5',
    question: 'The Supreme Court ordered a committee headed by whom to formulate a Yamuna Action Plan?',
    options: ['Chief Justice of India', 'Union Environment Minister', 'Union Home Secretary', 'NITI Aayog CEO'],
    correctIndex: 2,
    explanation: 'The Supreme Court constituted a committee headed by the Union Home Secretary on May 27, 2026, giving eight weeks to submit a comprehensive Yamuna Action Plan.',
    category: 'environment',
    difficulty: 'medium',
  },
  {
    id: 'may25-q6',
    question: 'Which team won the 2026 UEFA Champions League title?',
    options: ['Arsenal FC', 'Real Madrid', 'Paris Saint-Germain', 'Manchester City'],
    correctIndex: 2,
    explanation: 'Paris Saint-Germain won their second consecutive Champions League title by defeating Arsenal 4\u20133 in a penalty shootout in Budapest on May 30, 2026.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'may25-q7',
    question: 'Who was conferred a posthumous Padma Vibhushan on May 25, 2026?',
    options: ['N. Rajam', 'Uday Kotak', 'Dharmendra', 'Anik Dutta'],
    correctIndex: 2,
    explanation: 'President Droupadi Murmu presented a posthumous Padma Vibhushan to veteran actor Dharmendra at Rashtrapati Bhavan on May 25, 2026. The award was received by his wife Hema Malini.',
    category: 'awards',
    difficulty: 'easy',
  },
  {
    id: 'may25-q8',
    question: 'What is the central outlay approved for the extension of the SARTHAK-PDS scheme?',
    options: ['\u20B915,530 crore', '\u20B920,530 crore', '\u20B925,530 crore', '\u20B930,530 crore'],
    correctIndex: 2,
    explanation: 'The Cabinet Committee on Economic Affairs approved the SARTHAK-PDS extension with a central outlay of \u20B925,530 crore for five years, aligned with the 16th Finance Commission cycle.',
    category: 'national',
    difficulty: 'medium',
  },
  {
    id: 'may25-q9',
    question: 'D.K. Shivakumar was announced as the new Chief Minister of which state?',
    options: ['Telangana', 'Kerala', 'Karnataka', 'Tamil Nadu'],
    correctIndex: 2,
    explanation: 'Senior Congress leader D.K. Shivakumar was named as the next Chief Minister of Karnataka following Siddaramaiah\u2019s resignation on May 28, 2026. The swearing-in is scheduled for June 3, 2026.',
    category: 'appointments',
    difficulty: 'easy',
  },
  {
    id: 'may25-q10',
    question: 'The Union Finance Ministry exempted customs duties on cotton imports for which period?',
    options: ['June 1 to August 31, 2026', 'June 1 to October 31, 2026', 'July 1 to December 31, 2026', 'May 30 to September 30, 2026'],
    correctIndex: 1,
    explanation: 'The Finance Ministry exempted all customs duties on cotton imports from June 1 to October 31, 2026, to reduce raw material costs for the textile sector.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'may25-q11',
    question: 'A Blue Moon was observed on May 31, 2026. What is a Blue Moon?',
    options: [
      'A moon that appears blue in colour due to atmospheric conditions',
      'The second full moon in a single calendar month',
      'A full moon that coincides with a lunar eclipse',
      'The closest full moon to Earth in a given year',
    ],
    correctIndex: 1,
    explanation: 'A Blue Moon is the second full moon within a single Gregorian calendar month. The term is a calendar designation and does not alter the moon\u2019s colour.',
    category: 'science',
    difficulty: 'easy',
  },
  {
    id: 'may25-q12',
    question: 'The Quad Foreign Ministers Meeting in New Delhi on May 26, 2026 was hosted by:',
    options: ['Defence Minister Rajnath Singh', 'PM Narendra Modi', 'EAM S. Jaishankar', 'NSA Ajit Doval'],
    correctIndex: 2,
    explanation: 'External Affairs Minister S. Jaishankar hosted the Quad Foreign Ministers Meeting at Hyderabad House, New Delhi, on May 26, 2026.',
    category: 'summits',
    difficulty: 'easy',
  },
  {
    id: 'may25-q13',
    question: 'Who launched the book titled Apnapan on May 26, 2026?',
    options: ['Rajnath Singh', 'Shivraj Singh Chouhan', 'Amit Shah', 'Narendra Modi'],
    correctIndex: 1,
    explanation: 'Union Agriculture Minister Shivraj Singh Chouhan launched his book Apnapan in New Delhi on May 26, 2026, with former VP M. Venkaiah Naidu and former PM H.D. Deve Gowda in attendance.',
    category: 'books',
    difficulty: 'easy',
  },
  {
    id: 'may25-q14',
    question: 'The electoral roll mapping percentage reported for Delhi in May 2026 was:',
    options: ['32.53%', '42.53%', '52.53%', '62.53%'],
    correctIndex: 1,
    explanation: 'The Delhi Chief Electoral Officer reported that only 42.53% of electoral rolls had been mapped, attributing the low figure to high migration and locked premises.',
    category: 'reports',
    difficulty: 'medium',
  },
  {
    id: 'may25-q15',
    question: 'Consider the following statements:\n1. Assam\u2019s UCC Bill exempts all tribal communities in the state.\n2. Scheduled Tribes constitute 12.45% of Assam\u2019s population.\n3. Uttarakhand was the first state to pass a UCC.\nWhich of the above statements are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', 'All of the above'],
    correctIndex: 3,
    explanation: 'All three statements are correct. Assam\u2019s UCC Bill specifically exempts Scheduled Tribes (12.45% of population). Uttarakhand was the first state to enact a UCC in 2024, followed by Gujarat and then Assam.',
    category: 'national',
    difficulty: 'hard',
  },
  {
    id: 'may25-q16',
    question: 'The proposed US\u2013Iran ceasefire extension deal framework includes an extension period of:',
    options: ['30 days', '45 days', '60 days', '90 days'],
    correctIndex: 2,
    explanation: 'Negotiators reached a tentative agreement to extend the ceasefire by 60 days, with a framework to launch formal negotiations on Iran\u2019s nuclear programme.',
    category: 'international',
    difficulty: 'medium',
  },
  {
    id: 'may25-q17',
    question: 'Indian shooter Esha Singh broke a world record in shooting trials in May 2026. Which of the following is true about her achievement?',
    options: [
      'She is 19 years old',
      'She defeated the reigning World Champion',
      'She defeated the reigning Olympic champion',
      'She won at the Asian Games',
    ],
    correctIndex: 2,
    explanation: 'Esha Singh, aged 21, set a world record score of 43/50 in the Women\u2019s 25m Pistol final at the ISSF World Cup in Munich on May 27, 2026, defeating reigning Olympic champion Yang Ji-in.',
    category: 'sports',
    difficulty: 'medium',
  },
  {
    id: 'may25-q18',
    question: 'The BSE Sensex fell by how many points on May 29, 2026, due to below-normal monsoon concerns?',
    options: ['592 points', '792 points', '1,092 points', '1,292 points'],
    correctIndex: 2,
    explanation: 'The BSE Sensex fell by 1,092 points on May 29, 2026, triggered by concerns over below-normal monsoon rainfall and its impact on inflation and agricultural output.',
    category: 'environment',
    difficulty: 'medium',
  },
  {
    id: 'may25-q19',
    question: 'Consider the following about the Padma Awards investiture ceremony on May 25, 2026:\n1. N. Rajam received the Padma Vibhushan for contributions to Indian classical music.\n2. Uday Kotak received the Padma Bhushan.\n3. Dharmendra received the Padma Vibhushan posthumously.\nWhich of the statements given above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', 'All of the above'],
    correctIndex: 3,
    explanation: 'All three statements are correct. N. Rajam (violinist) and Dharmendra (actor, posthumous) received the Padma Vibhushan, while Uday Kotak (banker) received the Padma Bhushan on May 25, 2026.',
    category: 'awards',
    difficulty: 'hard',
  },
  {
    id: 'may25-q20',
    question: 'The government proposed involving the Indian Air Force for security of which upcoming examination\u2019s papers?',
    options: ['UPSC CSE 2026', 'SSC CGL 2026', 'NEET-UG 2026 re-test', 'CUET-UG 2026'],
    correctIndex: 2,
    explanation: 'The government proposed using IAF logistics to transport NEET-UG 2026 re-test papers securely from presses to examination centres. The re-test is scheduled for June 21, 2026.',
    category: 'national',
    difficulty: 'medium',
  },
];

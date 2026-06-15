import type { NewsItem, QuizQuestion, StaticGkLink } from './current-affairs-data';

export const jun08_14_newsItems: NewsItem[] = [
  /* ── NATIONAL ─────────────────────────────────────────────────────────── */
  {
    id: 'amit-shah-border-demographics-committee-2026',
    category: 'national',
    headline: 'Amit Shah Chairs High-Level Committee Meeting on Border District Demographics',
    eventDate: 'June 13, 2026',
    location: 'New Delhi',
    summary:
      'Union Home Minister Amit Shah chaired a high-level committee meeting to evaluate population shifts in border districts. He directed officials to visit border areas, metropolitan cities, and industrial towns to assess structural population changes caused by illegal migration and unnatural causes.',
    keyFacts: [
      'Committee chair: Union Home Minister Amit Shah.',
      'Focus: Population structure changes due to illegal migration in border districts.',
      'Officials directed to visit border areas, metro cities, and industrial towns.',
      'Date of instruction: June 13, 2026.',
    ],
    whyItMatters:
      'Border security and demographic changes are important topics for UPSC GS Paper 3 (Internal Security), SSC, State PSC, and Police recruitment exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Police'],
    staticGkConnect:
      'India shares land borders with 7 countries: Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar, and Afghanistan (PoK). The Border Security Force (BSF) guards the India-Pakistan and India-Bangladesh borders.',
  },
  {
    id: 'nta-cuet-pg-normalisation-clarification-2026',
    category: 'national',
    headline: 'NTA Clarifies No Score Normalisation Applied in CUET PG 2026',
    eventDate: 'June 2026',
    location: 'New Delhi',
    summary:
      'The National Testing Agency released an official clarification stating that score normalisation was not applied to any subject exams of the Common University Entrance Test (CUET) Postgraduate 2026. Tests were rescheduled for 565 candidates across 28 subjects due to localised law-and-order disruptions in Tura, Meghalaya.',
    keyFacts: [
      'Conducting body: National Testing Agency (NTA).',
      'No normalisation applied to any CUET PG 2026 subject exam.',
      'Number of affected candidates: 565 across 28 subjects.',
      'Disruption location: Tura, Meghalaya.',
    ],
    whyItMatters:
      'NTA examination controversies and policies are frequently asked in Teaching, SSC, and Banking GK sections.',
    examRelevance: ['SSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The National Testing Agency (NTA) was established in 2017 as an autonomous body under the Ministry of Education. It conducts major national-level entrance tests including NEET, JEE Main, CUET, and UGC NET.',
  },
  {
    id: 'mp-rajya-sabha-nomination-rejected-2026',
    category: 'national',
    headline: 'Congress Candidate Meenakshi Natarajan\u2019s Rajya Sabha Nomination Rejected; SC Refuses to Stall Election',
    eventDate: 'June 9\u201312, 2026',
    location: 'Madhya Pradesh',
    summary:
      'The nomination paper of Indian National Congress candidate Meenakshi Natarajan for the Rajya Sabha seat from Madhya Pradesh was rejected during the formal scrutiny phase. On June 12, the Supreme Court refused to stall the election process, dismissing Natarajan\u2019s writ petition citing Article 329, which bars judicial interference once the election process begins.',
    keyFacts: [
      'Candidate: Meenakshi Natarajan (Indian National Congress).',
      'Legislative body: Rajya Sabha from Madhya Pradesh.',
      'Supreme Court dismissal date: June 12, 2026.',
      'Constitutional basis: Article 329 (bar on judicial intervention in ongoing elections).',
      'Outcome: Three BJP candidates declared elected unopposed.',
    ],
    whyItMatters:
      'Rajya Sabha election procedures, Article 329, and the role of the Election Commission and Supreme Court are important Polity topics for UPSC, SSC, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Rajya Sabha is the Upper House of Parliament with a maximum strength of 250 members (238 elected + 12 nominated by the President). Article 329 of the Constitution bars judicial interference in electoral matters once an election process has begun.',
  },

  /* ── INTERNATIONAL ────────────────────────────────────────────────────── */
  {
    id: 'india-nepal-railway-connectivity-2026',
    category: 'international',
    headline: 'India and Nepal Discuss Cross-Border Railway Connectivity in Kathmandu',
    eventDate: 'June 11\u201312, 2026',
    location: 'Kathmandu, Nepal',
    summary:
      'Delegations from India and Nepal held the 10th Project Steering Committee and 8th Joint Working Group meetings in Kathmandu to enhance cross-border railway infrastructure. Discussions focused on operationalising passenger train services on the Janakpur\u2013Ayodhya section.',
    keyFacts: [
      'Meetings: 10th Project Steering Committee and 8th Joint Working Group on railways.',
      'Location: Kathmandu, Nepal.',
      'Focus: Passenger train connectivity on the Janakpur\u2013Ayodhya section.',
      'Meeting dates: June 11 and June 12, 2026.',
    ],
    whyItMatters:
      'India\u2019s neighbourhood-first policy and cross-border connectivity projects are important for UPSC GS Paper 2 (International Relations) and Railway exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'India and Nepal share an open border of about 1,770 km. The India-Nepal Treaty of Peace and Friendship was signed in 1950. Nepal is a landlocked country bordered by India on three sides and China on the north.',
  },
  {
    id: 'us-iran-ceasefire-agreement-2026',
    category: 'international',
    headline: 'United States and Iran Reach Ceasefire Agreement; Strait of Hormuz to Reopen',
    eventDate: 'June 11\u201314, 2026',
    location: 'West Asia',
    summary:
      'US President Donald Trump announced a ceasefire agreement with Iran to end the West Asia conflict. The agreement, mediated primarily by Pakistan, calls for cessation of strikes on all fronts, lifting of the US naval blockade on Iranian ports, and toll-free shipping passage through the Strait of Hormuz. The deal was later confirmed by Iran\u2019s Deputy Foreign Minister.',
    keyFacts: [
      'Primary mediator: Pakistan.',
      'Key provisions: Ceasefire, lifting of US naval blockade, toll-free reopening of Strait of Hormuz.',
      'Date of announcement: June 11\u201314, 2026.',
      'Confirmed by US President Donald Trump and Iranian officials.',
    ],
    whyItMatters:
      'The West Asia conflict, the Strait of Hormuz (through which ~20% of global oil passes), and international peace agreements are vital for UPSC, SSC, Banking, and Defence exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC', 'Defence'],
    staticGkConnect:
      'The Strait of Hormuz connects the Persian Gulf to the Gulf of Oman and the Arabian Sea. Approximately 20\u201325% of global oil trade passes through it. It lies between Iran and Oman, with the narrowest point about 33 km wide.',
  },
  {
    id: 'eu-21st-sanctions-package-russia-2026',
    category: 'international',
    headline: 'European Commission Proposes 21st Sanctions Package Against Russia',
    eventDate: 'June 9, 2026',
    location: 'Brussels, Belgium',
    summary:
      'European Commission President Ursula von der Leyen announced the 21st comprehensive sanctions package against Russia, focused on energy, financial services, crypto-assets, trade, and (for the first time) fisheries. The package targets banks, refineries, and crypto operators, with new export controls affecting entities in third countries including India, China, T\u00FCrkiye, Kyrgyzstan, Kazakhstan, and the UAE.',
    keyFacts: [
      'Proposing body: European Commission.',
      'Package number: 21st round of sanctions.',
      'Sectors targeted: Energy, financial services, crypto-assets, trade, fisheries.',
      'Third-country entities affected: Including firms in India, China, T\u00FCrkiye, Kazakhstan, UAE.',
      'Date of proposal: June 9, 2026.',
    ],
    whyItMatters:
      'EU sanctions on Russia, India\u2019s trade balancing, and their impact on Indian firms are relevant for UPSC GS Paper 2 (IR), Banking, and SSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'The European Commission is the executive branch of the European Union, headquartered in Brussels. EU sanctions on Russia were massively expanded after Russia\u2019s invasion of Ukraine in February 2022.',
  },

  /* ── ECONOMY ──────────────────────────────────────────────────────────── */
  {
    id: 'fuel-prices-drop-3-percent-2026',
    category: 'economy',
    headline: 'India\u2019s Fuel Prices Drop 3.1% Over Four Years Despite Global Volatility',
    eventDate: 'June 13, 2026',
    location: 'New Delhi',
    summary:
      'Union Petroleum Minister Hardeep Singh Puri announced that fuel prices in India fell by approximately 3.1% from May 2022 to May 2026. The reduction was maintained despite severe global price volatility triggered by the West Asia conflict, with domestic crude oil, LPG, and natural gas stocks reported as comfortable.',
    keyFacts: [
      'Minister: Hardeep Singh Puri (Petroleum and Natural Gas).',
      'Price reduction: Approximately 3.1% over May 2022 to May 2026.',
      'Context: Despite West Asia conflict-driven global fuel volatility.',
      'Supply status: Domestic stocks of crude oil, LPG, and natural gas reported comfortable.',
    ],
    whyItMatters:
      'Fuel pricing, India\u2019s energy security, and petroleum sector policies are important Economy topics for UPSC GS Paper 3, Banking, and SSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'India is the world\u2019s third-largest oil consumer and imports about 85% of its crude oil. Petrol and diesel were deregulated in June 2010 and October 2014 respectively. LPG subsidy is transferred via PAHAL (Direct Benefit Transfer for LPG).',
  },
  {
    id: 'gold-silver-prices-surge-2026',
    category: 'economy',
    headline: 'Gold and Silver Prices Surge in India on Easing Inflation Concerns',
    eventDate: 'June 12, 2026',
    location: 'India',
    summary:
      'Domestic gold and silver prices witnessed a sharp upward surge across major Indian commercial hubs. Market analysts attributed the rally to reduced global inflation anxieties and positive sentiment following the West Asia diplomatic breakthrough.',
    keyFacts: [
      'Drivers: Easing inflation worries and expectations of international geopolitical stability.',
      'Date of surge: June 12, 2026.',
    ],
    whyItMatters:
      'Gold price trends, inflation dynamics, and their interplay with geopolitical events are frequently tested in Banking (IBPS PO, SBI PO) and UPSC Economy sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'India is the world\u2019s second-largest consumer of gold (after China). The Sovereign Gold Bond Scheme was launched in November 2015 by the RBI to reduce physical gold demand.',
  },

  /* ── SCIENCE & TECHNOLOGY ─────────────────────────────────────────────── */
  {
    id: 'varya-ai-video-model-india-2026',
    category: 'science',
    headline: 'India Launches Varya, Its First Distilled Video Generation AI Model',
    eventDate: 'June 12, 2026',
    location: 'New Delhi',
    summary:
      'Homegrown startup Avataar launched Varya, India\u2019s first distilled video-generation AI model, under the IndiaAI Mission. The model uses a distillation technique reducing video generation from 50 steps to 4 steps at a cost of \u20B90.48 per second \u2014 up to 10 times more cost-efficient than leading global video models. Launched in the presence of MeitY Secretary S. Krishnan.',
    keyFacts: [
      'Model name: Varya \u2014 India\u2019s first distilled video generation AI model.',
      'Developer: Avataar (backed by Peak XV), supported by the IndiaAI Mission.',
      'Key innovation: Distillation compresses 50-step process to 4 steps.',
      'Cost efficiency: \u20B90.48 per second, up to 10x cheaper than global rivals.',
      'Parameters: 14 billion (per Outlook Business).',
      'Date: June 12, 2026.',
    ],
    whyItMatters:
      'Indigenous AI development, the IndiaAI Mission, and India\u2019s digital economy push are vital Science & Tech topics for UPSC, SSC, and Banking exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The IndiaAI Mission was launched in 2025 to bolster India\u2019s sovereign AI capabilities. India was ranked 5th most digitalised economy and 4th on the AI Capability Index in the SIDE Report 2026.',
  },

  /* ── ENVIRONMENT ──────────────────────────────────────────────────────── */
  {
    id: 'great-nicobar-resettlement-census-2026',
    category: 'environment',
    headline: 'Government Announces Resettlement Census in Great Nicobar for Development Project',
    eventDate: 'June 10, 2026',
    location: 'Great Nicobar Island',
    summary:
      'The Ministry of Environment, Forest and Climate Change directed local authorities to initiate a comprehensive demographic and ecological census for resettlement in Great Nicobar. The exercise is mandatory to clear land for the Great Nicobar holistic development project, which includes a strategic international transshipment terminal.',
    keyFacts: [
      'Target area: Great Nicobar Island.',
      'Objective: Demographic and land resettlement census.',
      'Key infrastructure: International Transshipment Terminal and greenfield city.',
      'Ministry: Environment, Forest and Climate Change.',
      'Announcement date: June 10, 2026.',
    ],
    whyItMatters:
      'The Great Nicobar development project, its environmental impact, and tribal resettlement are critical topics for UPSC GS Paper 3 (Environment) and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Defence'],
    staticGkConnect:
      'Great Nicobar is the southernmost island of India, located about 150 km from Sumatra (Indonesia). Indira Point, the southernmost tip of India, is located here. The island is home to the Shompen and Nicobarese tribes and falls within the Great Nicobar Biosphere Reserve.',
  },

  /* ── DEFENCE ──────────────────────────────────────────────────────────── */
  {
    id: 'iaf-an32-crash-jorhat-2026',
    category: 'defence',
    headline: 'Five IAF Personnel Killed in AN-32 Transport Aircraft Crash in Assam',
    eventDate: 'June 13, 2026',
    location: 'Jorhat, Assam',
    summary:
      'An Indian Air Force AN-32 transport aircraft crashed during a landing attempt at Rowriah Air Force Station in Jorhat, Assam. Five air force personnel were killed, and a formal Court of Inquiry was immediately constituted by Air Headquarters. The co-pilot survived and is undergoing medical treatment.',
    keyFacts: [
      'Aircraft: IAF AN-32 transport aircraft.',
      'Crash location: Rowriah Air Force Station, Jorhat district, Assam.',
      'Date: June 13, 2026.',
      'Deceased: Sqn Ldr Prashant Singh, Flt Lt Shubham Kumar, Sgt Jitendra Sharma, Agniveervayu Khemaram Kumawat, Agniveervayu Danish Alam.',
      'One co-pilot survived; Court of Inquiry constituted.',
    ],
    whyItMatters:
      'IAF aircraft, military accidents, and the Court of Inquiry process are important for Defence, SSC, and Railway exam GK.',
    examRelevance: ['UPSC', 'SSC', 'Defence', 'State PSC', 'Railway', 'Police'],
    staticGkConnect:
      'The Antonov AN-32 is a twin-engine military transport aircraft of Soviet origin, inducted into the IAF in 1984. The IAF is the fourth-largest air force in the world. The Air Force Station at Jorhat is a major base for operations in India\u2019s northeast.',
  },

  /* ── SPORTS ───────────────────────────────────────────────────────────── */
  {
    id: 'qatar-switzerland-draw-fifa-wc-2026',
    category: 'sports',
    headline: 'Qatar Earn 1\u20131 Draw Against Switzerland in FIFA World Cup 2026',
    eventDate: 'June 13, 2026',
    location: 'FIFA World Cup 2026 \u2014 Group B',
    summary:
      'Qatar secured a 1\u20131 draw against Switzerland in their Group B match at the FIFA World Cup 2026. This is Qatar\u2019s second consecutive World Cup appearance, after hosting in 2022, and their first via qualification.',
    keyFacts: [
      'Tournament: FIFA World Cup 2026 Group Stage.',
      'Match: Switzerland 1 \u2013 Qatar 1 (Group B).',
      'Date: June 13, 2026.',
      'Significance: Qatar\u2019s first WC appearance via qualification.',
    ],
    whyItMatters:
      'FIFA World Cup results are frequently asked in SSC, Railway, and Banking GK sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'The FIFA World Cup 2026 is being co-hosted by the United States, Canada, and Mexico \u2014 the first time three nations co-host the tournament. It features 48 teams for the first time (expanded from 32), playing 104 matches across 12 groups of four.',
  },
  {
    id: 'morocco-brazil-draw-fifa-wc-2026',
    category: 'sports',
    headline: 'Morocco Hold Five-Time Champions Brazil to 1\u20131 Draw in World Cup Opener',
    eventDate: 'June 13, 2026',
    location: 'MetLife Stadium, New Jersey',
    summary:
      'African football powerhouse Morocco forced a 1\u20131 draw against five-time world champions Brazil in their Group C opener of the FIFA World Cup 2026 at MetLife Stadium in New Jersey.',
    keyFacts: [
      'Tournament: FIFA World Cup 2026 Group C opener.',
      'Match: Brazil 1 \u2013 Morocco 1.',
      'Venue: MetLife Stadium, New Jersey.',
      'Date: June 13, 2026.',
    ],
    whyItMatters:
      'FIFA World Cup group stage results and host nation details are important for SSC and Railway GK.',
    examRelevance: ['SSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'Brazil holds the record for the most FIFA World Cup titles (5: 1958, 1962, 1970, 1994, 2002). Morocco reached the semi-finals at the 2022 FIFA World Cup in Qatar, the first African nation to achieve this.',
  },

  /* ── APPOINTMENTS ─────────────────────────────────────────────────────── */
  {
    id: 'dhiraj-seth-coas-appointment-2026',
    category: 'appointments',
    headline: 'Lt Gen Dhiraj Seth Appointed Next Chief of the Army Staff',
    eventDate: 'June 13, 2026',
    location: 'New Delhi',
    summary:
      'The Union Government appointed Lieutenant General Dhiraj Seth as the next Chief of the Army Staff (COAS). He will assume command on June 30, 2026, succeeding General Upendra Dwivedi. Lt Gen Seth, currently Vice Chief of the Army Staff, is an alumnus of the National Defence Academy and was commissioned into the Armoured Corps in December 1986.',
    keyFacts: [
      'Appointee: Lt Gen Dhiraj Seth (current Vice Chief of Army Staff).',
      'New designation: 31st Chief of the Army Staff.',
      'Effective date: June 30, 2026.',
      'Succeeding: General Upendra Dwivedi (retiring).',
      'Background: NDA alumnus, commissioned into Armoured Corps (2nd Lancers \u2014 Gardner\u2019s Horse) in December 1986.',
      'First Armoured Corps officer to head the army since 1997 (after General Shankar Roychowdhury).',
    ],
    whyItMatters:
      'Service chiefs appointments are very high-frequency questions in SSC, Banking, Railway, Defence, and Police exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railway', 'State PSC', 'Defence', 'Police'],
    staticGkConnect:
      'The Chief of the Army Staff is the professional head of the Indian Army. Above the service chiefs is the Chief of Defence Staff (CDS), currently General N.S. Raja Subramani (3rd CDS, since May 31, 2026). Army Day is observed on January 15.',
  },
  {
    id: 'dinesh-trivedi-hc-bangladesh-2026',
    category: 'appointments',
    headline: 'Dinesh Trivedi Assumes Charge as India\u2019s High Commissioner to Bangladesh',
    eventDate: 'June 12, 2026',
    location: 'Dhaka, Bangladesh',
    summary:
      'Former Union Railway Minister and BJP leader Dinesh Trivedi assumed charge as India\u2019s High Commissioner to Bangladesh in Dhaka on June 12, 2026. He had received his Letters of Credence from President Droupadi Murmu on June 5, 2026. He succeeds career diplomat Pranay Verma (now Ambassador to Belgium and the EU) and is the first political appointee as India\u2019s envoy to Bangladesh in over three decades.',
    keyFacts: [
      'Appointee: Dinesh Trivedi (former Union Railway Minister).',
      'Designation: High Commissioner of India to Bangladesh.',
      'Letters of Credence: Received from President Droupadi Murmu on June 5, 2026.',
      'Assumed charge in Dhaka: June 12, 2026.',
      'Succeeds: Pranay Kumar Verma (moved to Brussels as Ambassador to Belgium/EU).',
      'Notable: First political appointee to this post in over three decades.',
    ],
    whyItMatters:
      'Diplomatic appointments and India-Bangladesh relations are relevant for UPSC GS Paper 2 (IR) and Banking/SSC GK.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'A High Commissioner is the equivalent of an Ambassador between Commonwealth nations. India and Bangladesh share a 4,096 km border \u2014 India\u2019s longest international border. Key treaties include the Ganges Water Treaty (1996) and the Land Boundary Agreement (2015).',
  },

  /* ── SUMMITS ──────────────────────────────────────────────────────────── */
  {
    id: 'bharat-innovates-2026-nice',
    category: 'summits',
    headline: 'PM Modi and Macron Inaugurate Bharat Innovates 2026 in Nice, France',
    eventDate: 'June 14, 2026',
    location: 'Nice, France',
    summary:
      'Prime Minister Narendra Modi and French President Emmanuel Macron jointly inaugurated the Bharat Innovates 2026 deep-tech exhibition at the Palais des Expositions in Nice. The maiden edition of the event featured 120 Indian deep-tech startups, around 20 Institutes of Excellence, and over 350 international venture capital investors across 13 critical technology sectors, including semiconductors, space, biotech, and clean energy.',
    keyFacts: [
      'Event: Bharat Innovates 2026 under the India-France Year of Innovation.',
      'Venue: Palais des Expositions, Nice, France.',
      'Indian delegation: 120 deep-tech startups and ~20 Institutes of Excellence.',
      'Investors: Over 350 international venture capital firms.',
      'Technology sectors: 13 critical pillars including semiconductors, space, biotech.',
      'Organising ministry: Ministry of Education.',
      'Date: June 14, 2026.',
    ],
    whyItMatters:
      'India-France strategic partnership, technology diplomacy, and global summits are high-priority UPSC, SSC, and Banking topics.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC', 'Defence', 'Railway'],
    staticGkConnect:
      'India and France have a \u201cSpecial Global Strategic Partnership\u201d upgraded in February 2026. 2026 is being celebrated as the India-France Year of Innovation. France is a key defence partner (Rafale jets, Scorpene submarines) and is a UNSC permanent member (P5).',
  },
];

/* ── STATIC GK REFRESHER ──────────────────────────────────────────────── */

export const jun08_14_staticGk: StaticGkLink[] = [
  {
    newsItem: 'The Strait of Hormuz is central to the US-Iran ceasefire and maritime security discussions this week.',
    staticFact:
      'The Strait of Hormuz connects the Persian Gulf to the Gulf of Oman. About 20\u201325% of global oil trade passes through it. It is bordered by Iran (north) and Oman/UAE (south), with a navigable width of about 33 km at its narrowest point.',
  },
  {
    newsItem: 'Lt Gen Dhiraj Seth appointed as the next Chief of the Army Staff.',
    staticFact:
      'The Chief of Army Staff is the professional head of the Indian Army. Above the three service chiefs is the Chief of Defence Staff (CDS). The current CDS is General N.S. Raja Subramani (3rd CDS, took charge May 31, 2026). The first CDS was General Bipin Rawat (January 1, 2020).',
  },
  {
    newsItem: 'India launched Varya, the first distilled video AI model under IndiaAI Mission.',
    staticFact:
      'The IndiaAI Mission aims to build sovereign AI computing infrastructure under the Ministry of Electronics and IT (MeitY). India ranked 5th most digitalised economy and 4th on the AI Capability Index in the SIDE Report 2026.',
  },
  {
    newsItem: 'FIFA World Cup 2026 group stage matches began this week.',
    staticFact:
      'The FIFA World Cup 2026 is co-hosted by the USA, Canada, and Mexico \u2014 the first tri-nation host. It features a record 48 teams (expanded from 32) playing 104 matches across 12 groups of four. FIFA was founded in 1904 and is headquartered in Zurich, Switzerland.',
  },
  {
    newsItem: 'India and Nepal held railway connectivity meetings in Kathmandu.',
    staticFact:
      'India shares a 1,770 km open border with Nepal. The India-Nepal Treaty of Peace and Friendship was signed in 1950. Nepal is a landlocked country bordered by India (south, east, west) and China/Tibet (north).',
  },
  {
    newsItem: 'European Commission proposed 21st sanctions package against Russia.',
    staticFact:
      'The European Commission is the executive branch of the European Union, headquartered in Brussels. EU sanctions on Russia began in 2014 (after the annexation of Crimea) and were massively expanded after Russia\u2019s invasion of Ukraine in February 2022.',
  },
  {
    newsItem: 'Dinesh Trivedi assumed charge as India\u2019s High Commissioner to Bangladesh.',
    staticFact:
      'A High Commissioner is the equivalent of an Ambassador in Commonwealth countries. India and Bangladesh share a 4,096 km border \u2014 India\u2019s longest international border. The Land Boundary Agreement (2015) resolved decades-old enclave disputes between the two nations.',
  },
  {
    newsItem: 'IAF AN-32 transport aircraft crashed at Jorhat killing five personnel.',
    staticFact:
      'The Antonov AN-32 is a twin-engine military transport aircraft inducted into the IAF in 1984. The IAF, the world\u2019s fourth-largest air force, was established on October 8, 1932. Air Force Day is observed on October 8.',
  },
];

/* ── QUIZ QUESTIONS (15 MCQs) ─────────────────────────────────────────── */

export const jun08_14_quiz: QuizQuestion[] = [
  {
    id: 'jun08-q1',
    question: 'Who chaired the high-level committee meeting on demographic change in border districts on June 13, 2026?',
    options: ['Rajnath Singh', 'Amit Shah', 'Narendra Modi', 'Nirmala Sitharaman'],
    correctIndex: 1,
    explanation: 'Union Home Minister Amit Shah chaired the high-level committee meeting to evaluate population shifts in border districts.',
    category: 'national',
    difficulty: 'easy',
  },
  {
    id: 'jun08-q2',
    question: 'What is the name of India\u2019s first distilled video-generation AI model launched under the IndiaAI Mission?',
    options: ['Shakti', 'Varya', 'Prajna', 'Dhruva'],
    correctIndex: 1,
    explanation: 'Varya, developed by startup Avataar, was launched on June 12, 2026. It reduces video generation from 50 steps to 4 steps at \u20B90.48 per second.',
    category: 'science',
    difficulty: 'easy',
  },
  {
    id: 'jun08-q3',
    question: 'Lt Gen Dhiraj Seth was appointed as the next Chief of the Army Staff, succeeding:',
    options: ['General Manoj Pande', 'General Anil Chauhan', 'General Upendra Dwivedi', 'General M.M. Naravane'],
    correctIndex: 2,
    explanation: 'Lt Gen Dhiraj Seth will succeed General Upendra Dwivedi as the 31st COAS, effective June 30, 2026.',
    category: 'appointments',
    difficulty: 'easy',
  },
  {
    id: 'jun08-q4',
    question: 'The US-Iran ceasefire agreement announced in June 2026 was primarily mediated by:',
    options: ['Qatar', 'Turkey', 'Pakistan', 'Saudi Arabia'],
    correctIndex: 2,
    explanation: 'Pakistan was the primary mediator of the US-Iran ceasefire framework that called for reopening the Strait of Hormuz to toll-free shipping.',
    category: 'international',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q5',
    question: 'Boualem Khoukhi, who scored for his team in the FIFA World Cup 2026 Group B match, plays for which nation?',
    options: ['Morocco', 'Qatar', 'Switzerland', 'Brazil'],
    correctIndex: 1,
    explanation: 'Qatar defender Boualem Khoukhi scored for Qatar in their 1\u20131 draw against Switzerland in a Group B match on June 13, 2026.',
    category: 'sports',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q6',
    question: 'The FIFA World Cup 2026 is jointly hosted by:',
    options: ['USA, UK, and France', 'USA, Canada, and Mexico', 'Brazil, Argentina, and Chile', 'Japan, South Korea, and Australia'],
    correctIndex: 1,
    explanation: 'The FIFA World Cup 2026 is the first to be co-hosted by three nations: the United States, Canada, and Mexico. It features 48 teams.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jun08-q7',
    question: 'The Brazil vs Morocco 1\u20131 draw in the FIFA World Cup 2026 was played at which venue?',
    options: ['SoFi Stadium', 'BMO Field', 'MetLife Stadium', 'Estadio Azteca'],
    correctIndex: 2,
    explanation: 'The Brazil-Morocco 1\u20131 draw, a Group C opener, was played at MetLife Stadium in New Jersey on June 13, 2026.',
    category: 'sports',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q8',
    question: 'The "Bharat Innovates 2026" exhibition in Nice, France, featured how many Indian deep-tech startups?',
    options: ['80', '100', '120', '150'],
    correctIndex: 2,
    explanation: 'Bharat Innovates 2026, inaugurated by PM Modi and President Macron on June 14, 2026, showcased 120 Indian deep-tech startups across 13 sectors.',
    category: 'summits',
    difficulty: 'easy',
  },
  {
    id: 'jun08-q9',
    question: 'Dinesh Trivedi, who assumed charge as India\u2019s High Commissioner to Bangladesh in June 2026, previously served as:',
    options: ['Union Defence Minister', 'Union Railway Minister', 'Union External Affairs Minister', 'Union Home Minister'],
    correctIndex: 1,
    explanation: 'Dinesh Trivedi was the Union Railway Minister in 2011\u201312 under the UPA government. He succeeds career diplomat Pranay Verma in Dhaka.',
    category: 'appointments',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q10',
    question: 'The European Commission proposed its ___ package of sanctions against Russia in June 2026.',
    options: ['18th', '19th', '20th', '21st'],
    correctIndex: 3,
    explanation: 'The European Commission proposed its 21st comprehensive sanctions package against Russia on June 9, 2026, expanding restrictions to third-country entities including some in India.',
    category: 'international',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q11',
    question: 'The IAF AN-32 aircraft that crashed killing five personnel on June 13, 2026, met with an accident while landing at:',
    options: ['Tezpur Air Force Station', 'Hashimara Air Force Station', 'Rowriah Air Force Station, Jorhat', 'Chabua Air Force Station'],
    correctIndex: 2,
    explanation: 'The AN-32 transport aircraft crashed during landing at Rowriah Air Force Station in Jorhat district, Assam.',
    category: 'defence',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q12',
    question: 'The Janakpur\u2013Ayodhya passenger train section was the focus of which bilateral meetings in Kathmandu in June 2026?',
    options: ['India\u2013Bhutan SSC and JEG', 'India\u2013Nepal 10th PSC and 8th JWG', 'India\u2013China NPC and JCM', 'India\u2013Bangladesh JTC and JBG'],
    correctIndex: 1,
    explanation: 'The 10th Project Steering Committee (PSC) and 8th Joint Working Group (JWG) of India and Nepal met in Kathmandu on June 11\u201312, 2026, focusing on the Janakpur\u2013Ayodhya passenger train section.',
    category: 'international',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q13',
    question: 'India\u2019s fuel prices dropped by approximately what percentage from May 2022 to May 2026, according to Union Minister Hardeep Singh Puri?',
    options: ['1.5%', '3.1%', '5.0%', '7.2%'],
    correctIndex: 1,
    explanation: 'Union Minister Hardeep Singh Puri announced that fuel prices in India fell by approximately 3.1% over the four-year period despite global volatility.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'jun08-q14',
    question: 'Consider the following statements about the Meenakshi Natarajan Rajya Sabha case (June 2026):\n1. Her nomination was rejected during scrutiny.\n2. The Supreme Court refused to stall the Madhya Pradesh election process.\n3. The Court cited Article 329 in its dismissal.\nWhich of the above are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', 'All of the above'],
    correctIndex: 3,
    explanation: 'All three statements are correct. The Supreme Court on June 12, 2026 dismissed Congress leader Meenakshi Natarajan\u2019s writ petition, citing Article 329 which bars judicial intervention in ongoing elections.',
    category: 'national',
    difficulty: 'hard',
  },
  {
    id: 'jun08-q15',
    question: 'The Great Nicobar resettlement census announced in June 2026 is primarily to facilitate which project?',
    options: ['Indira Point Lighthouse Restoration', 'Andaman Trunk Road Expansion', 'International Transshipment Terminal and greenfield city', 'Sentinelese Tribe Relocation'],
    correctIndex: 2,
    explanation: 'The census is to clear land for the Great Nicobar holistic development project, which includes an International Transshipment Terminal and greenfield city infrastructure.',
    category: 'environment',
    difficulty: 'medium',
  },
];

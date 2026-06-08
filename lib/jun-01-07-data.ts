import type { NewsItem, QuizQuestion, StaticGkLink } from './current-affairs-data';

export const jun01_07_newsItems: NewsItem[] = [
  /* ── NATIONAL ─────────────────────────────────────────────────────────── */
  {
    id: 'delhi-hc-right-to-be-forgotten-2026',
    category: 'national',
    headline: 'Delhi High Court Recognizes Right to Be Forgotten in Judicial Records',
    eventDate: 'June 1, 2026',
    location: 'New Delhi',
    summary:
      'The Delhi High Court officially recognized an individual\u2019s right to be forgotten, directing search engines to disable name-based access to specific historical court orders. This landmark ruling balances public interest with personal privacy and digital rehabilitation.',
    keyFacts: [
      'Decision date: June 1, 2026.',
      'Judicial body: Delhi High Court.',
      'The right to be forgotten is treated as an extension of the right to privacy under Article 21.',
      'Search engines directed to disable name-based access to specific court orders.',
    ],
    whyItMatters:
      'The right to be forgotten and its constitutional basis under Article 21 (right to privacy, as per the Puttaswamy judgment) is a high-priority Polity topic for UPSC GS Paper 2 and State PSC examinations.',
    examRelevance: ['UPSC', 'State PSC', 'Police'],
    staticGkConnect:
      'The Supreme Court of India recognized the right to privacy as a fundamental right under Article 21 in the landmark K.S. Puttaswamy v. Union of India (2017) judgment. The Digital Personal Data Protection Act, 2023, also addresses aspects of data erasure.',
  },
  {
    id: 'cbse-chairman-secretary-transferred-2026',
    category: 'national',
    headline: 'Centre Transfers Top CBSE Officials Over Technology Row',
    eventDate: 'June 2, 2026',
    location: 'New Delhi',
    summary:
      'The central government ordered the immediate transfer of CBSE Chairman Rahul Singh and Secretary Himanshu Gupta following an administrative row surrounding the newly introduced On-Screen Marking (OSM) system for evaluating examination papers.',
    keyFacts: [
      'CBSE Chairman transferred: Rahul Singh.',
      'CBSE Secretary transferred: Himanshu Gupta.',
      'Core issue: Administrative implementation of the On-Screen Marking system.',
    ],
    whyItMatters:
      'Transfers of key officials in educational bodies and examination-related controversies are frequently asked in SSC, Banking GK, and Teaching recruitment exams.',
    examRelevance: ['SSC', 'Banking', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The Central Board of Secondary Education (CBSE) was established in 1962 and is headquartered in New Delhi. It operates under the Ministry of Education. CBSE conducts the Class 10 and Class 12 board examinations across India.',
  },
  {
    id: 'pm-modi-gujarat-daman-projects-2026',
    category: 'national',
    headline: 'PM Modi Launches ₹21,770 Crore Development Projects in Gujarat & Daman',
    eventDate: 'June 5, 2026',
    location: 'Gujarat & Daman',
    summary:
      'Prime Minister Narendra Modi visited western India to inaugurate and lay foundation stones for massive infrastructure projects. Surat received projects worth over ₹18,800 crore and Daman received around ₹2,970 crore, targeting connectivity, urban development, and energy sectors.',
    keyFacts: [
      'Value of Surat projects: Over ₹18,800 crore.',
      'Value of Daman projects: Around ₹2,970 crore.',
      'Date of inauguration: June 5, 2026.',
      'Focus areas: Connectivity, urban development, and energy.',
    ],
    whyItMatters:
      'Major government infrastructure projects and their financial outlay are important for UPSC GS Paper 3 (Infrastructure), SSC CGL, and Railway exam General Awareness sections.',
    examRelevance: ['UPSC', 'SSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'Daman and Diu was merged with Dadra & Nagar Haveli on January 26, 2020, to form a single UT: Dadra and Nagar Haveli and Daman and Diu. Gujarat is home to India\u2019s longest coastline among all states (1,600 km).',
  },
  {
    id: 'cabinet-approves-delhi-ncr-vehicle-replacement-2026',
    category: 'national',
    headline: 'Union Cabinet Approves ₹9,585 Crore Commercial Vehicle Replacement Scheme for Delhi-NCR',
    eventDate: 'June 3, 2026',
    location: 'New Delhi',
    summary:
      'The Union Cabinet approved a two-year environment-focused initiative to eliminate older commercial vehicles from the Delhi-NCR region. The policy provides financial incentives to replace 2.07 lakh polluting buses and trucks with BS-VI compliant or electric vehicles.',
    keyFacts: [
      'Scheme budget: ₹9,585 crore.',
      'Operational duration: Two years.',
      'Target: Replacement of 2.07 lakh older commercial vehicles in Delhi-NCR.',
      'Target technology: Bharat Stage-VI compliant or electric vehicles.',
    ],
    whyItMatters:
      'Government schemes for pollution control and vehicle scrappage policy are important for UPSC GS Paper 3 (Environment) and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'State PSC', 'SSC', 'Railway'],
    staticGkConnect:
      'Bharat Stage (BS) emission norms are based on European emission standards. India leapfrogged from BS-IV to BS-VI on April 1, 2020. The Vehicle Scrappage Policy was announced in 2021 to phase out unfit and old vehicles.',
  },
  {
    id: 'atf-price-stabilization-fund-2026',
    category: 'national',
    headline: 'Centre Launches ₹10,000 Crore Price Stabilization Fund for Aviation Turbine Fuel',
    eventDate: 'June 3, 2026',
    location: 'New Delhi',
    summary:
      'The union government established a dedicated price stabilization fund to insulate domestic airlines from international energy market volatility. The fund helps prevent sudden surges in passenger airfares due to fuel price shocks.',
    keyFacts: [
      'Fund name: Aviation Turbine Fuel Price Stabilisation Fund.',
      'Financial allocation: ₹10,000 crore.',
      'Beneficiaries: Scheduled Indian commercial airlines.',
      'Implementation: June 2026.',
    ],
    whyItMatters:
      'Price stabilization funds and government intervention in fuel markets are key Economy topics for UPSC, Banking (IBPS PO, SBI PO), and SSC examinations.',
    examRelevance: ['UPSC', 'Banking', 'SSC'],
    staticGkConnect:
      'India already operates a Price Stabilization Fund (PSF) for essential commodities like pulses, onions, and potatoes under the Department of Consumer Affairs. Aviation Turbine Fuel (ATF) is not covered under the Administered Price Mechanism.',
  },
  {
    id: 'navachar-mantra-initiative-2026',
    category: 'national',
    headline: 'Ministry of Skill Development Launches Navachar Mantra National Innovation Initiative',
    eventDate: 'June 4, 2026',
    location: 'New Delhi',
    summary:
      'Minister of State Jayant Chaudhary launched the Navachar Mantra initiative at IIT Delhi. The program focuses on discovering, mentoring, and financially scaling grassroots sustainable innovations and rural entrepreneurship.',
    keyFacts: [
      'Scheme title: Navachar Mantra Initiative.',
      'Launching ministry: Ministry of Skill Development and Entrepreneurship.',
      'Academic partner: IIT Delhi.',
      'Target beneficiaries: Grassroots inventors, students, and rural startup innovators.',
    ],
    whyItMatters:
      'Government initiatives for skill development, innovation, and entrepreneurship are important for UPSC GS Paper 3 and SSC General Awareness.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'Key innovation schemes include Atal Innovation Mission (AIM), Startup India (launched January 16, 2016), and MUDRA Yojana. India\u2019s Global Innovation Index 2024 rank was 39th (published by WIPO).',
  },

  /* ── INTERNATIONAL ────────────────────────────────────────────────────── */
  {
    id: 'germany-abolishes-transit-visa-indians-2026',
    category: 'international',
    headline: 'Germany Abolishes Airport Transit Visa Requirement for Indian Travelers',
    eventDate: 'June 3, 2026',
    location: 'Berlin, Germany',
    summary:
      'Germany abolished the mandatory airport transit visa (Type A visa) requirement for Indian citizens staying within international airport transit zones. The rule change, published in the German Federal Law Gazette, facilitates easier transit through German hubs to third countries.',
    keyFacts: [
      'Effective date: June 3, 2026.',
      'Visa type affected: Airport Transit Visa (Type A).',
      'Published in: German Federal Law Gazette.',
      'Applies to Indian citizens transiting through German airports.',
    ],
    whyItMatters:
      'Visa policy changes between India and major nations are frequently asked in UPSC Prelims International Relations and Banking GK sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'Germany is the largest economy in Europe and the 3rd largest globally. Its capital is Berlin, currency is the Euro, and Chancellor is the head of government. Germany is part of the Schengen Area, which allows passport-free movement across 27 European countries.',
  },
  {
    id: 'unsc-non-permanent-members-elected-2026',
    category: 'international',
    headline: 'UNGA Elects Five Non-Permanent Members to UN Security Council',
    eventDate: 'June 3, 2026',
    location: 'New York, USA',
    summary:
      'The United Nations General Assembly elected five non-permanent members to the Security Council for a two-year term beginning January 1, 2027. Kyrgyzstan secured a seat for the first time in its history, marking a diplomatic milestone.',
    keyFacts: [
      'Election date: June 3, 2026.',
      'Elected nations: Germany, The Philippines, Austria, Portugal, and Kyrgyzstan.',
      'Term: Two years beginning January 1, 2027.',
      'Historic first: Kyrgyzstan\u2019s first-ever UNSC non-permanent seat.',
    ],
    whyItMatters:
      'UNSC composition, non-permanent member elections, and India\u2019s campaign for permanent membership are high-priority International Relations topics for UPSC and SSC exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The UN Security Council has 15 members: 5 permanent (P5 — US, UK, France, Russia, China) with veto power, and 10 non-permanent members elected for 2-year terms. India has served as a non-permanent member 8 times, most recently in 2021–22.',
  },
  {
    id: 'myanmar-president-india-visit-2026',
    category: 'international',
    headline: 'Myanmar President U Min Aung Hlaing Completes Official State Visit to India',
    eventDate: 'June 1, 2026',
    location: 'New Delhi',
    summary:
      'Myanmar President U Min Aung Hlaing concluded a five-day state visit to India (May 30 – June 3, 2026) focused on deepening cross-border security and bilateral trade ties. Official joint statements detailing mutual administrative commitments were released.',
    keyFacts: [
      'Visiting dignitary: President U Min Aung Hlaing.',
      'Duration: May 30 to June 3, 2026.',
      'Joint statement date: June 1, 2026.',
      'Core focus: Border management and bilateral infrastructure development.',
    ],
    whyItMatters:
      'India-Myanmar relations, especially border management and the Act East Policy, are important for UPSC GS Paper 2 (International Relations) and Defence exams.',
    examRelevance: ['UPSC', 'State PSC', 'Defence'],
    staticGkConnect:
      'India and Myanmar share a 1,643 km land border across Arunachal Pradesh, Nagaland, Manipur, and Mizoram. The India-Myanmar-Thailand Trilateral Highway and the Kaladan Multimodal Transit Transport Project are key bilateral infrastructure projects.',
  },

  /* ── ECONOMY ──────────────────────────────────────────────────────────── */
  {
    id: 'rbi-mpc-repo-rate-unchanged-june-2026',
    category: 'economy',
    headline: 'RBI MPC Keeps Policy Repo Rate Unchanged at 5.25%',
    eventDate: 'June 6, 2026',
    location: 'Mumbai',
    summary:
      'The Monetary Policy Committee of the Reserve Bank of India voted unanimously to maintain the benchmark interest rate at 5.25%. The central bank highlighted supply-side factors and external energy shocks as key reasons for maintaining its neutral stance.',
    keyFacts: [
      'Policy repo rate: Maintained at 5.25%.',
      'Standing Deposit Facility (SDF) rate: 5.00%.',
      'Marginal Standing Facility (MSF) and Bank Rate: 5.50%.',
      'Decision: Unanimous by all MPC members.',
    ],
    whyItMatters:
      'RBI monetary policy decisions, repo rate, and the MPC framework are among the most frequently asked questions in Banking (IBPS PO, SBI PO), UPSC, and SSC examinations.',
    examRelevance: ['Banking', 'UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'The RBI Monetary Policy Committee (MPC) was constituted under Section 45ZB of the RBI Act. It has 6 members — 3 from RBI (including the Governor who is the ex-officio chairperson) and 3 external members appointed by the Government. Current RBI Governor: Sanjay Malhotra.',
  },
  {
    id: 'nso-gdp-growth-7-7-percent-fy26',
    category: 'economy',
    headline: 'NSO Provisional Estimates Show India\u2019s Real GDP Growth at 7.7% for FY 2025-26',
    eventDate: 'June 2, 2026',
    location: 'New Delhi',
    summary:
      'The National Statistics Office released provisional estimates showing India\u2019s real GDP grew at 7.7% for Financial Year 2025-26, surpassing government expectations. The Q4 (January-March) GDP growth stood at 7.8%, and GVA growth reached 7.9% compared to 7.3% in the previous fiscal year.',
    keyFacts: [
      'Annual Real GDP growth: 7.7% for FY 2025-26.',
      'Q4 GDP growth: 7.8% (January–March period).',
      'Gross Value Added (GVA) growth: 7.9% vs. 7.3% in FY 2024-25.',
      'Revised base year: 2022-23 utilized for calculations.',
    ],
    whyItMatters:
      'GDP growth figures, GVA data, and NSO releases are among the most asked Economy topics in UPSC Prelims, Banking exams, and SSC CGL General Awareness.',
    examRelevance: ['UPSC', 'Banking', 'SSC', 'State PSC'],
    staticGkConnect:
      'The National Statistics Office (NSO) was formed by merging the CSO and NSSO in 2019. It operates under the Ministry of Statistics and Programme Implementation. GDP at constant prices is called Real GDP, while GDP at current prices is Nominal GDP.',
  },
  {
    id: 'india-drops-to-seventh-market-cap-2026',
    category: 'economy',
    headline: 'India Slips to 7th Spot in Global Market Capitalization Rankings',
    eventDate: 'June 4, 2026',
    location: 'Mumbai',
    summary:
      'Sustained foreign institutional selling caused India to drop to the 7th position in global market capitalization rankings, with a valuation of USD 4.84 trillion. South Korea overtook India with a valuation of USD 5.01 trillion, as compiled by Bloomberg.',
    keyFacts: [
      'India\u2019s market capitalization: USD 4.84 trillion.',
      'South Korea\u2019s market capitalization: USD 5.01 trillion.',
      'India\u2019s new global position: 7th.',
      'Data source: Bloomberg market analytics.',
    ],
    whyItMatters:
      'Global market capitalization rankings and FII/FPI flows are important for Banking exams and UPSC Economy sections.',
    examRelevance: ['Banking', 'SSC', 'UPSC'],
    staticGkConnect:
      'India\u2019s two primary stock exchanges are the Bombay Stock Exchange (BSE, established 1875 — Asia\u2019s oldest) and the National Stock Exchange (NSE, established 1992). SEBI (Securities and Exchange Board of India) is the market regulator, established in 1992.',
  },

  /* ── SCIENCE & TECHNOLOGY ─────────────────────────────────────────────── */
  {
    id: 'mega-science-vision-2035-climate-report',
    category: 'science',
    headline: 'Mega Science Vision-2035 Climate Research Report Submitted to Government',
    eventDate: 'June 2, 2026',
    location: 'New Delhi',
    summary:
      'The Mega Science Vision-2035 report on climate research infrastructure was submitted to the Office of the Principal Scientific Adviser. It highlights critical deficits in scientific calibration and manufacturing capabilities and recommends mission-mode development of an indigenous Earth System Model using AI.',
    keyFacts: [
      'Report title: Mega Science Vision-2035 Report on Climate Research.',
      'Submitted to: Office of the Principal Scientific Adviser.',
      'Key recommendation: Mission-mode development of an indigenous Earth System Model using AI.',
    ],
    whyItMatters:
      'Science and technology policy reports, especially those involving climate research and AI, are important for UPSC GS Paper 3 and State PSC Science & Tech sections.',
    examRelevance: ['UPSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'India\u2019s Principal Scientific Adviser is appointed by the Prime Minister and advises the Cabinet on S&T policy. Key science missions include National Supercomputing Mission, Deep Ocean Mission, and National Quantum Mission.',
  },
  {
    id: 'orbit-space-tech-accelerator-cohort-3',
    category: 'science',
    headline: 'T-Hub Launches Third Cohort of ORBIT Space-Tech Accelerator Programme',
    eventDate: 'June 3, 2026',
    location: 'Hyderabad',
    summary:
      'T-Hub officially launched the third cohort of its ORBIT Space-Tech Accelerator Programme, supported by Atal Innovation Mission. The program onboarded 13 specialized domestic ventures to nurture early-stage commercial aerospace startups.',
    keyFacts: [
      'Accelerator name: ORBIT Space-Tech Accelerator Programme.',
      'Supporting body: Atal Innovation Mission.',
      'Startups onboarded: 13 domestic ventures.',
      'Venue: T-Hub facility in Hyderabad.',
    ],
    whyItMatters:
      'Space startup ecosystem and government innovation programs are relevant for SSC, Railway, and State PSC Science & Tech sections.',
    examRelevance: ['SSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'T-Hub is India\u2019s largest technology incubator, located in Hyderabad. The Atal Innovation Mission (AIM) was set up by NITI Aayog in 2016 to promote innovation and entrepreneurship. IN-SPACe (Indian National Space Promotion and Authorization Centre) promotes private space activity.',
  },
  {
    id: 'saurabh-vijay-indiaai-mission-ceo',
    category: 'science',
    headline: 'UIDAI CEO Saurabh Vijay Takes Charge of IndiaAI Mission',
    eventDate: 'June 4, 2026',
    location: 'New Delhi',
    summary:
      'Saurabh Vijay, the CEO of the Unique Identification Authority of India (UIDAI), took over as CEO of the IndiaAI Mission following a re-allocation of technology portfolios by the Ministry of Electronics and Information Technology. He succeeds Abhishek Singh.',
    keyFacts: [
      'Appointed official: Saurabh Vijay.',
      'New additional designation: CEO, IndiaAI Mission.',
      'Predecessor: Abhishek Singh.',
      'Nodal ministry: Ministry of Electronics and Information Technology.',
    ],
    whyItMatters:
      'Appointments in key technology bodies (UIDAI, IndiaAI Mission) are frequently asked in SSC, Banking, and State PSC examinations.',
    examRelevance: ['SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'UIDAI was established in 2009 and is responsible for the Aadhaar project. It operates under the Ministry of Electronics and Information Technology. The IndiaAI Mission was launched with a budget of ₹10,372 crore to build AI compute capacity and ecosystem in India.',
  },

  /* ── ENVIRONMENT ──────────────────────────────────────────────────────── */
  {
    id: 'surha-taal-100th-ramsar-site-india',
    category: 'environment',
    headline: 'Surha Taal Designated as India\u2019s 100th Ramsar Site on World Environment Day',
    eventDate: 'June 5, 2026',
    location: 'Ballia, Uttar Pradesh',
    summary:
      'On World Environment Day, the Ministry of Environment, Forest and Climate Change designated the Surha Taal wetland (also known as Jai Prakash Narayan Bird Sanctuary) as India\u2019s 100th Ramsar Site. This makes India the leading nation in Asia for total protected wetland counts under the Ramsar Convention.',
    keyFacts: [
      'Site name: Surha Taal (Jai Prakash Narayan Bird Sanctuary).',
      'Location: Ballia district, Uttar Pradesh.',
      'Milestone: India\u2019s 100th Ramsar Site.',
      'Total Ramsar Sites in Uttar Pradesh: 13.',
      'Announcement: World Environment Day, June 5, 2026.',
    ],
    whyItMatters:
      'Ramsar Sites are among the most frequently asked Environment topics in UPSC Prelims, SSC CGL, RRB NTPC, and State PSC examinations. The 100th site milestone is a landmark fact.',
    examRelevance: ['UPSC', 'State PSC', 'SSC', 'Railway', 'Teaching'],
    staticGkConnect:
      'The Ramsar Convention was signed in 1971 in Ramsar, Iran, and India became a signatory in 1982. India\u2019s first Ramsar Sites (1981) were Chilika Lake (Odisha) and Keoladeo National Park (Rajasthan). Uttar Pradesh has the most Ramsar Sites of any Indian state.',
  },
  {
    id: 'kerala-hawk-wildlife-crime-system-2026',
    category: 'environment',
    headline: 'Kerala Forest Department Introduces HAWK Digital Wildlife Crime Tracking System',
    eventDate: 'June 6, 2026',
    location: 'Kerala',
    summary:
      'The Kerala Forest Department implemented the Hostile Activity Watch Kernel (HAWK) system, an advanced digital platform to link the judiciary with wildlife offense monitoring. HAWK tracks poaching and forest violations dynamically from the field level to judicial resolution.',
    keyFacts: [
      'System name: HAWK (Hostile Activity Watch Kernel).',
      'Launched by: Kerala Forest Department.',
      'Implementation date: June 6, 2026.',
      'Core objective: Digital end-to-end management of wildlife crimes.',
    ],
    whyItMatters:
      'Wildlife protection technology and forest department initiatives are important for State PSC, UPSC Environment, and Police examinations.',
    examRelevance: ['State PSC', 'UPSC', 'Police'],
    staticGkConnect:
      'Key wildlife protection laws in India include the Wildlife Protection Act, 1972, the Forest Conservation Act, 1980, and the Biological Diversity Act, 2002. India has 108 National Parks and 567 Wildlife Sanctuaries. Project Tiger was launched in 1973.',
  },
  {
    id: 'sc-agasthyamalai-encroachments-removal-2026',
    category: 'environment',
    headline: 'Supreme Court Orders Removal of Encroachments in Agasthyamalai Biosphere',
    eventDate: 'June 2, 2026',
    location: 'New Delhi',
    summary:
      'The Supreme Court directed Tamil Nadu and Kerala to execute a time-bound eviction plan in the Agasthyamalai ecological landscape. The ruling aims to restore critical wildlife corridors and check illegal constructions in the fragile biosphere reserve.',
    keyFacts: [
      'Directive date: June 2, 2026.',
      'Ecological region: Agasthyamalai landscape.',
      'Responsible states: Tamil Nadu and Kerala.',
      'Mandate: Time-bound eviction and environmental monitoring.',
    ],
    whyItMatters:
      'Supreme Court environmental directives and biosphere reserves are critical for UPSC GS Paper 3 (Environment) and State PSC examinations.',
    examRelevance: ['UPSC', 'State PSC', 'Police'],
    staticGkConnect:
      'Agasthyamalai Biosphere Reserve is located in the southern Western Ghats across Tamil Nadu and Kerala. India has 18 biosphere reserves, of which 12 are part of the UNESCO World Network of Biosphere Reserves. The Western Ghats are a UNESCO World Heritage Site.',
  },

  /* ── SPORTS ───────────────────────────────────────────────────────────── */
  {
    id: 'praggnanandhaa-norway-chess-2026',
    category: 'sports',
    headline: 'Praggnanandhaa Wins Historic Norway Chess 2026 Title',
    eventDate: 'June 6, 2026',
    location: 'Stavanger, Norway',
    summary:
      'Indian Grandmaster Rameshbabu Praggnanandhaa delivered a masterful performance to win the Norway Chess 2026 title in Stavanger, becoming the first Indian chess player to win this prestigious elite tournament.',
    keyFacts: [
      'Tournament: Norway Chess 2026.',
      'Champion: Rameshbabu Praggnanandhaa.',
      'Historic status: First Indian to win the Norway Chess title.',
      'Victory date: June 6, 2026.',
    ],
    whyItMatters:
      'Indian achievements in chess are frequently asked in SSC, Railway, Banking, and State PSC General Knowledge sections.',
    examRelevance: ['SSC', 'Railway', 'Banking', 'State PSC'],
    staticGkConnect:
      'India\u2019s Gukesh D. became the youngest ever World Chess Champion in December 2024 at age 18. Viswanathan Anand was the first Indian Grandmaster (1988) and was World Champion from 2007 to 2013. FIDE (Fédération Internationale des Échecs) governs world chess.',
  },
  {
    id: 'indian-women-football-saff-championship-2026',
    category: 'sports',
    headline: 'Indian Women\u2019s Football Team Wins SAFF Women\u2019s Championship 2026',
    eventDate: 'June 7, 2026',
    summary:
      'The Indian Women\u2019s Football Team won the SAFF Women\u2019s Championship 2026, displaying exceptional defensive and offensive coordination to clinch the South Asian regional title.',
    keyFacts: [
      'Tournament: SAFF Women\u2019s Championship 2026.',
      'Winner: India.',
      'Final match date: June 7, 2026.',
      'Governing body: South Asian Football Federation.',
    ],
    whyItMatters:
      'SAFF tournaments and Indian football achievements are important for SSC, Railway, Defence, and Police exam GK sections.',
    examRelevance: ['SSC', 'Railway', 'Defence', 'Police'],
    staticGkConnect:
      'The South Asian Football Federation (SAFF) was founded in 1997 and is headquartered in Dhaka, Bangladesh. The All India Football Federation (AIFF) was founded in 1937. India hosted the FIFA U-17 World Cup in 2017.',
  },
  {
    id: 'india-mens-u18-hockey-asia-cup-gold-2026',
    category: 'sports',
    headline: 'Indian Men\u2019s U-18 Hockey Team Wins Asia Cup Gold',
    eventDate: 'June 6, 2026',
    summary:
      'The Indian Men\u2019s U-18 Hockey Team won gold at the Men\u2019s U18 Asia Cup 2026. Simultaneously, the Indian Women\u2019s U-18 Hockey Team secured the bronze medal in their category.',
    keyFacts: [
      'Men\u2019s achievement: Gold at Men\u2019s U18 Asia Cup 2026.',
      'Women\u2019s achievement: Bronze at Women\u2019s U18 Asia Cup 2026.',
      'Conclusion date: June 6, 2026.',
    ],
    whyItMatters:
      'Hockey tournaments and India\u2019s junior-level achievements are relevant for SSC, Railway, and Police GK sections.',
    examRelevance: ['SSC', 'Railway', 'Police'],
    staticGkConnect:
      'Hockey India is the governing body for field hockey in India. India won Olympic hockey gold 8 times (last in 1980). India won the bronze medal at the 2020 Tokyo Olympics and retained a medal at Paris 2024. The Asian Hockey Federation (AHF) governs continental hockey.',
  },

  /* ── AWARDS ───────────────────────────────────────────────────────────── */
  {
    id: 'major-abhilasha-barak-un-gender-award-2026',
    category: 'awards',
    headline: 'Major Abhilasha Barak Receives UN Military Gender Advocate Award',
    eventDate: 'June 7, 2026',
    summary:
      'Indian Army officer Major Abhilasha Barak was selected for the prestigious United Nations Military Gender Advocate of the Year Award. The award recognizes her outstanding contributions to gender mainstreaming and community defense frameworks during international peacekeeping deployment.',
    keyFacts: [
      'Award: UN Military Gender Advocate of the Year Award.',
      'Recipient: Major Abhilasha Barak.',
      'Conferral date: June 7, 2026.',
      'Awarding body: United Nations.',
    ],
    whyItMatters:
      'UN awards to Indian armed forces personnel are important for UPSC, Defence, SSC, and Police exam GK sections.',
    examRelevance: ['UPSC', 'Defence', 'SSC', 'State PSC', 'Police'],
    staticGkConnect:
      'India is the largest contributor of troops to UN Peacekeeping operations. The UN Military Gender Advocate Award was established in 2016. Major Abhilasha Barak also made history as the first woman combat aviator in the Indian Army.',
  },
  {
    id: 'dalai-lama-grammy-trophy-dharamshala-2026',
    category: 'awards',
    headline: '14th Dalai Lama Receives Physical Grammy Award Trophy in Dharamshala',
    eventDate: 'June 3, 2026',
    location: 'Dharamshala, Himachal Pradesh',
    summary:
      'The 14th Dalai Lama, Tenzin Gyatso, formally received the physical Grammy Award trophy at his official residence in Dharamshala. He won the award in the Best Audiobook, Narration, and Storytelling Recording category for his album "Meditations: The Reflections of His Holiness the Dalai Lama."',
    keyFacts: [
      'Recipient: 14th Dalai Lama, Tenzin Gyatso.',
      'Album: Meditations: The Reflections of His Holiness the Dalai Lama.',
      'Category: Best Audiobook, Narration, and Storytelling Recording.',
      'Presentation venue: Dharamshala residence.',
    ],
    whyItMatters:
      'International awards and Indian connections are frequently asked in SSC, State PSC, and Teaching exam GK sections.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The Grammy Awards are presented by the Recording Academy (USA) and are one of the most prestigious music awards globally. The Dalai Lama received the Nobel Peace Prize in 1989. Dharamshala in Himachal Pradesh is the seat of the Central Tibetan Administration.',
  },
  {
    id: 'national-egovernance-awards-2026',
    category: 'awards',
    headline: '16 Projects Win National Awards for e-Governance 2026',
    eventDate: 'June 5, 2026',
    location: 'New Delhi',
    summary:
      'The Ministry of Personnel, Public Grievances and Pensions declared 16 projects as winners of the National Awards for e-Governance 2026. The projects were recognized for using technology to enhance citizen-centric public service delivery, with 10 Gold and 6 Silver awards.',
    keyFacts: [
      'Award name: National Awards for e-Governance 2026.',
      'Total projects honored: 16.',
      'Award breakdown: 10 Gold and 6 Silver Awards.',
      'Nodal body: Department of Administrative Reforms and Public Grievances (DARPG).',
    ],
    whyItMatters:
      'e-Governance initiatives and DARPG awards are important for UPSC GS Paper 2 (Governance) and Banking/SSC General Awareness.',
    examRelevance: ['UPSC', 'Banking', 'SSC', 'State PSC'],
    staticGkConnect:
      'The Department of Administrative Reforms and Public Grievances (DARPG) functions under the Ministry of Personnel, Public Grievances and Pensions. Key e-governance programs include Digital India (launched July 1, 2015), UMANG app, and DigiLocker.',
  },

  /* ── APPOINTMENTS ─────────────────────────────────────────────────────── */
  {
    id: 'justice-v-mohana-supreme-court-2026',
    category: 'appointments',
    headline: 'Justice V. Mohana Sworn in as Supreme Court Judge — 12th Woman Justice',
    eventDate: 'June 2, 2026',
    location: 'New Delhi',
    summary:
      'Justice V. Mohana was formally sworn in as a judge of the Supreme Court of India by the Chief Justice. Her elevation marks a demographic milestone — she is the 12th woman judge in the history of the Supreme Court of India.',
    keyFacts: [
      'Swearing-in date: June 2, 2026.',
      'Appointed: Justice V. Mohana.',
      'Milestone: 12th woman judge in Supreme Court history.',
      'Appointing authority: President of India.',
    ],
    whyItMatters:
      'Supreme Court appointments and landmark milestones are among the highest-frequency Polity questions in UPSC, SSC, and State PSC examinations.',
    examRelevance: ['UPSC', 'State PSC', 'SSC', 'Police'],
    staticGkConnect:
      'The first woman judge of the Supreme Court was Justice M. Fathima Beevi (1989). The Supreme Court of India was established on January 28, 1950. Article 124 deals with the establishment and constitution of the Supreme Court. Maximum sanctioned strength is 34 judges (including CJI).',
  },
  {
    id: 'justice-meenakshi-madan-rai-patna-hc-cj-2026',
    category: 'appointments',
    headline: 'Justice Meenakshi Madan Rai Appointed Chief Justice of Patna High Court',
    eventDate: 'June 5, 2026',
    location: 'Patna, Bihar',
    summary:
      'The President of India appointed Justice Meenakshi Madan Rai as the Chief Justice of the Patna High Court. She transitioned to the role following the retirement of former Chief Justice Sangam Kumar Sahu on June 4, 2026.',
    keyFacts: [
      'Effective date: June 5, 2026.',
      'Appointed: Justice Meenakshi Madan Rai.',
      'New role: Chief Justice, Patna High Court.',
      'Predecessor: Chief Justice Sangam Kumar Sahu (retired June 4, 2026).',
    ],
    whyItMatters:
      'High Court Chief Justice appointments are regularly asked in State PSC, UPSC, and SSC examinations.',
    examRelevance: ['State PSC', 'UPSC', 'SSC'],
    staticGkConnect:
      'The Patna High Court was established in 1916 and is one of the oldest High Courts in India. Under Article 217, High Court judges are appointed by the President in consultation with the CJI and the Governor of the state. Bihar has 40 Lok Sabha constituencies.',
  },
  {
    id: 'abhishek-singh-dg-nta-2026',
    category: 'appointments',
    headline: 'Abhishek Singh Takes Charge as Director General of NTA',
    eventDate: 'June 3, 2026',
    location: 'New Delhi',
    summary:
      'Senior bureaucrat Abhishek Singh officially took charge as the Director General of the National Testing Agency (NTA). He transitioned from his executive portfolio at the IndiaAI Mission.',
    keyFacts: [
      'Appointed official: Abhishek Singh.',
      'New role: Director General, National Testing Agency.',
      'Previous role: Head of IndiaAI Mission rollout.',
      'Effective: June 2026.',
    ],
    whyItMatters:
      'NTA leadership changes are directly relevant for Teaching, SSC, and Banking exam aspirants, as NTA conducts NEET, JEE, UGC NET, CUET, and other major entrance exams.',
    examRelevance: ['Teaching', 'SSC', 'State PSC', 'Banking'],
    staticGkConnect:
      'The National Testing Agency (NTA) was established in 2017 as an autonomous body under the Ministry of Education. It conducts NEET-UG, JEE Main, UGC NET, CUET, and GPAT. NTA is headquartered in New Delhi.',
  },

  /* ── DEFENCE ──────────────────────────────────────────────────────────── */
  {
    id: 'india-us-29th-army-staff-talks-2026',
    category: 'defence',
    headline: 'India & US Conduct 29th Annual Army Staff Talks in Hawaii',
    eventDate: 'June 6, 2026',
    location: 'Hawaii, USA',
    summary:
      'Senior military delegations from India and the US held the 29th Army-to-Army Staff Talks to align strategic priorities. Discussions covered training exchanges, technological collaboration, and uncrewed combat system integration, hosted at US Indo-Pacific Command headquarters.',
    keyFacts: [
      'Mechanism: 29th India-US Army-to-Army Staff Talks.',
      'Concluding date: June 6, 2026.',
      'Venue: Hawaii (US Indo-Pacific Command headquarters).',
      'Focus: Training exchanges, tech collaboration, uncrewed combat systems.',
    ],
    whyItMatters:
      'India-US defence cooperation and joint military exercises are high-priority topics for Defence, UPSC, and SSC examinations.',
    examRelevance: ['Defence', 'UPSC', 'SSC', 'State PSC'],
    staticGkConnect:
      'India-US major defence exercises include Yudh Abhyas (Army), Malabar (Navy), and Cope India (Air Force). India signed foundational defence agreements with the US: LEMOA (2016), COMCASA (2018), BECA (2020), and iCET (2023).',
  },
  {
    id: 'zorawar-light-tank-tejastra-showcase-2026',
    category: 'defence',
    headline: 'Indigenous Zorawar Light Tank & Tejastra Counter-Drone Platform Showcased',
    eventDate: 'June 5, 2026',
    location: 'Hazira, Gujarat',
    summary:
      'India showcased its indigenously developed 25-tonne Zorawar light combat tank alongside the Tejastra directed energy counter-drone platform at the Hazira industrial facility in Gujarat. Both systems are optimized for rapid deployment and combat operations in high-altitude terrain.',
    keyFacts: [
      'Light tank: Zorawar (25-tonne, transportable via C-17 Globemaster).',
      'Counter-drone system: Tejastra Directed Energy Weapon.',
      'Venue: Hazira industrial facility, Gujarat.',
      'Designed for: High-altitude combat operations.',
    ],
    whyItMatters:
      'Indigenous defence manufacturing and DRDO/Make in India defence platforms are important for Defence, SSC, and Railway GK sections.',
    examRelevance: ['Defence', 'SSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'Zorawar is developed jointly by DRDO and L&T. India\u2019s main battle tank is the Arjun MBT (designed by DRDO\u2019s CVRDE). The Defence Acquisition Procedure 2020 promotes indigenous defence production. C-17 Globemaster III is a strategic transport aircraft used by the IAF.',
  },
  {
    id: 'project-kusha-air-defence-progress-2026',
    category: 'defence',
    headline: 'Defence Ministry Progresses with Project Kusha Long-Range Air Defence System',
    eventDate: 'June 4, 2026',
    location: 'New Delhi',
    summary:
      'The Ministry of Defence made substantial progress on Project Kusha, India\u2019s indigenous long-range layered air defence shield. The system uses three distinct interceptor missile variants — M1 (120–150 km range), M2 (~250 km), and M3 (up to 400 km) — to neutralize cruise missiles, drones, and stealth aircraft.',
    keyFacts: [
      'Program: Project Kusha Air Defence System.',
      'M1 interceptor range: 120–150 km.',
      'M2 interceptor range: ~250 km.',
      'M3 interceptor range: Up to 400 km.',
      'Targeted induction: Phased rollout between 2028 and 2030.',
    ],
    whyItMatters:
      'Indigenous defence systems and missile technology are key topics for Defence, UPSC, and SSC examinations.',
    examRelevance: ['Defence', 'SSC', 'UPSC', 'State PSC'],
    staticGkConnect:
      'India\u2019s existing air defence systems include the Akash (medium-range) and Barak-8 / MRSAM (Indo-Israeli joint development). The DRDO also developed the Ballistic Missile Defence (BMD) system with Prithvi Air Defence (PAD) and Advanced Air Defence (AAD) interceptors.',
  },
  {
    id: 'india-zimbabwe-joint-defence-committee-2026',
    category: 'defence',
    headline: 'India & Zimbabwe Conduct Inaugural Joint Defence Committee Meeting',
    eventDate: 'June 3, 2026',
    location: 'New Delhi',
    summary:
      'India and Zimbabwe held their first bilateral Joint Defence Committee meeting in New Delhi, establishing formal operational coordination protocols and expanding institutional training exchange programs.',
    keyFacts: [
      'Summit: Inaugural India-Zimbabwe Joint Defence Committee Meeting.',
      'Venue: New Delhi.',
      'Cooperation areas: Military training, air asset maintenance, and logistics.',
      'Timeline: First week of June 2026.',
    ],
    whyItMatters:
      'India\u2019s bilateral defence cooperation with African nations is relevant for UPSC International Relations and Defence exam GK sections.',
    examRelevance: ['UPSC', 'Defence', 'SSC', 'State PSC'],
    staticGkConnect:
      'India\u2019s defence cooperation with Africa includes the India-Africa Defence Ministers\u2019 Conclave (first held in Lucknow, 2020). Zimbabwe\u2019s capital is Harare and its currency is the Zimbabwe Dollar. India\u2019s Africa policy is guided by the principles of South-South Cooperation.',
  },

  /* ── REPORTS ──────────────────────────────────────────────────────────── */
  {
    id: 'side-report-india-digital-economy-2026',
    category: 'reports',
    headline: 'India Ranked 5th Most Digitalized Economy in SIDE Report 2026',
    eventDate: 'June 4, 2026',
    location: 'New Delhi',
    summary:
      'The ICRIER-Prosus Center released the State of India\u2019s Digital Economy (SIDE) 2026 report, tracking technology parameters across 71 economies. India was ranked the 5th most digitalized economy globally and 4th on the AI Capability Index.',
    keyFacts: [
      'Report: State of India\u2019s Digital Economy (SIDE) 2026.',
      'Publisher: ICRIER-Prosus Center for Internet and Digital Economy.',
      'India\u2019s digital rank: 5th most digitalized economy.',
      'India\u2019s AI capability rank: 4th globally.',
    ],
    whyItMatters:
      'India\u2019s digital economy rankings and technology indices are high-frequency topics for UPSC, Banking, and SSC examinations.',
    examRelevance: ['UPSC', 'Banking', 'SSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'ICRIER (Indian Council for Research on International Economic Relations) is a New Delhi-based economic policy think tank. Key digital indicators: India has the world\u2019s largest biometric ID (Aadhaar) system, UPI recorded 14+ billion transactions per month in 2024.',
  },
  {
    id: 'nso-gva-estimates-fy26',
    category: 'reports',
    headline: 'NSO Releases Annual GVA Estimates — Secondary Sector at 8.8%, Tertiary at 9.3%',
    eventDate: 'June 2, 2026',
    location: 'New Delhi',
    summary:
      'The National Statistical Office published its annual GVA (Gross Value Added) estimates for FY 2025-26, showing strong sectoral expansion. Total GVA was estimated at ₹294.91 lakh crore, with the secondary sector at 8.8% growth and tertiary sector at 9.3% growth.',
    keyFacts: [
      'Total GVA: ₹294.91 lakh crore for FY 2025-26.',
      'Secondary sector growth: 8.8%.',
      'Tertiary sector growth: 9.3%.',
      'Ministry: Ministry of Statistics and Programme Implementation.',
    ],
    whyItMatters:
      'GVA sectoral data and NSO reports are critical for UPSC Economy, Banking, and SSC General Awareness.',
    examRelevance: ['UPSC', 'Banking', 'SSC', 'State PSC'],
    staticGkConnect:
      'GVA = GDP minus net product taxes. The three sectors: Primary (agriculture), Secondary (industry/manufacturing), and Tertiary (services). India\u2019s economy is service-sector dominant, with services contributing about 54% of GVA.',
  },

  /* ── SUMMITS ──────────────────────────────────────────────────────────── */
  {
    id: 'eac-pm-high-level-meeting-june-2026',
    category: 'summits',
    headline: 'PM Modi Chairs High-Level EAC-PM Meeting on Growth and Stability',
    eventDate: 'June 6, 2026',
    location: 'New Delhi',
    summary:
      'Prime Minister Narendra Modi chaired a session of the Economic Advisory Council to the PM (EAC-PM), focusing on sustaining India\u2019s domestic growth trajectory amid global supply chain disruptions and geopolitical conflicts.',
    keyFacts: [
      'Meeting: High-Level EAC-PM Session.',
      'Chaired by: Prime Minister Narendra Modi.',
      'Date: June 6, 2026.',
      'Agenda: Growth scaling, macro stability, and inflation management.',
    ],
    whyItMatters:
      'EAC-PM meetings and economic advisory mechanisms are important for UPSC GS Paper 3 and Banking exam GK.',
    examRelevance: ['UPSC', 'Banking', 'State PSC', 'SSC'],
    staticGkConnect:
      'The Economic Advisory Council to the PM (EAC-PM) is a non-constitutional, non-permanent body that advises the PM on economic issues. Its current Chairman is Dr. Bibek Debroy. NITI Aayog (est. 2015) replaced the Planning Commission as India\u2019s principal think tank.',
  },
  {
    id: 'pm-setu-steering-committee-3rd-meeting-2026',
    category: 'summits',
    headline: '3rd National Steering Committee Meeting of PM-SETU Held in New Delhi',
    eventDate: 'June 5, 2026',
    location: 'New Delhi',
    summary:
      'The Ministry of Skill Development and Entrepreneurship hosted the third steering session of the PM-SETU (Pradhan Mantri Skilling and Employability Transformation through Upgraded ITIs) program. The forum reviewed technical upgrades and infrastructure updates across regional training institutes.',
    keyFacts: [
      'Event: 3rd National Steering Committee Meeting of PM-SETU.',
      'Chaired by: Debashree Mukherjee (Secretary, MoSDE).',
      'Venue: Kaushal Bhawan, New Delhi.',
      'Focus: ITI technical upgrades and infrastructure.',
    ],
    whyItMatters:
      'Government skill development programs and ITI upgrades are important for UPSC, SSC, Teaching, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Teaching', 'State PSC'],
    staticGkConnect:
      'PM-SETU was announced in Union Budget 2023-24 to upgrade 1,000+ ITIs. India has over 15,000 ITIs (Industrial Training Institutes). The National Skill Development Corporation (NSDC) operates under the Ministry of Skill Development and Entrepreneurship.',
  },

  /* ── BOOKS ────────────────────────────────────────────────────────────── */
  {
    id: 'when-audit-matters-book-release-2026',
    category: 'books',
    headline: 'VP Radhakrishnan Releases "When Audit Matters" by Vinod Rai',
    eventDate: 'June 3, 2026',
    location: 'New Delhi',
    summary:
      'Vice-President C.P. Radhakrishnan released the book "When Audit Matters: CAG Interventions That Made a Difference," edited by Vinod Rai (former Comptroller and Auditor General), at Upa-Rashtrapati Bhavan.',
    keyFacts: [
      'Book: When Audit Matters: CAG Interventions That Made a Difference.',
      'Editor: Vinod Rai (former CAG of India).',
      'Release date: June 3, 2026.',
      'Released by: Vice-President C.P. Radhakrishnan.',
    ],
    whyItMatters:
      'Books by notable public figures and CAG-related topics are asked in UPSC, SSC, and Banking GK sections.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'The Comptroller and Auditor General (CAG) of India is a constitutional authority under Article 148. Vinod Rai served as CAG from 2008 to 2013 and was known for the 2G spectrum and coal allocation audits. The current CAG is Girish Chandra Murmu.',
  },
  {
    id: 'smriti-irani-hindu-in-oxford-2026',
    category: 'books',
    headline: 'Smriti Irani Releases Book "A Hindu in Oxford"',
    eventDate: 'June 4, 2026',
    location: 'New Delhi',
    summary:
      'Former Union Minister Smriti Irani released her new book "A Hindu in Oxford" during a literary event in New Delhi. The book details contemporary perspectives on political and institutional changes.',
    keyFacts: [
      'Book title: A Hindu in Oxford.',
      'Author: Smriti Irani.',
      'Launch: First week of June 2026.',
      'Venue: New Delhi.',
    ],
    whyItMatters:
      'Books by Indian political figures are frequently asked in SSC, Railway, and State PSC GK sections.',
    examRelevance: ['SSC', 'State PSC', 'Railway'],
  },
  {
    id: 'its-not-over-yet-salma-hussain-2026',
    category: 'books',
    headline: 'Novel "It\u2019s Not Over Yet" by Salma Hussain Featured in Literary Review',
    eventDate: 'June 2, 2026',
    summary:
      'The literary platform Peerbagh featured Salma Hussain\u2019s young adult novel "It\u2019s Not Over Yet" in its contemporary literary review. The novel chronicles the cultural experiences of a South Asian family set in Toronto.',
    keyFacts: [
      'Book title: It\u2019s Not Over Yet.',
      'Author: Salma Hussain.',
      'Featured on: Peerbagh literary platform.',
      'Setting: Toronto-based contemporary young adult narrative.',
    ],
    whyItMatters:
      'Books and authors are a standard GK topic for SSC, Teaching, and State PSC exams.',
    examRelevance: ['SSC', 'Teaching', 'State PSC'],
  },

  /* ── OBITUARIES ───────────────────────────────────────────────────────── */
  {
    id: 'subhash-kashyap-passes-away-2026',
    category: 'obituaries',
    headline: 'Constitutional Expert & Former Lok Sabha Secretary General Subhash C. Kashyap Passes Away',
    eventDate: 'June 4, 2026',
    location: 'New Delhi',
    summary:
      'Noted constitutional luminary and former Lok Sabha Secretary-General Dr. Subhash C. Kashyap passed away at the age of 97. He was globally renowned for his authoritative treatises on the Indian Constitution and parliamentary procedures.',
    keyFacts: [
      'Deceased: Dr. Subhash C. Kashyap.',
      'Date of demise: June 4, 2026.',
      'Age: 97 years.',
      'Key legacy: Former Lok Sabha Secretary-General and author of foundational political science works.',
    ],
    whyItMatters:
      'Dr. Kashyap\u2019s contributions to constitutional scholarship and parliamentary procedure are directly relevant for UPSC Polity and SSC GK.',
    examRelevance: ['UPSC', 'State PSC', 'SSC'],
    staticGkConnect:
      'The Lok Sabha Secretary-General is the chief administrative officer of the Lower House of Parliament. The Lok Sabha was first constituted on April 17, 1952, after India\u2019s first general elections. Article 79 of the Constitution defines Parliament as President + Rajya Sabha + Lok Sabha.',
  },
  {
    id: 'jp-das-odia-poet-passes-away-2026',
    category: 'obituaries',
    headline: 'Renowned Odia Poet & Former IAS Officer Jagannath Prasad Das Passes Away',
    eventDate: 'June 3, 2026',
    location: 'Bhubaneswar, Odisha',
    summary:
      'Celebrated Odia literary figure, playwright, and former IAS officer Jagannath Prasad Das (J.P. Das) passed away at the age of 90 in Bhubaneswar, leaving behind decades of contribution to poetry, art history, and literature.',
    keyFacts: [
      'Deceased: Jagannath Prasad Das (J.P. Das).',
      'Date of demise: June 3, 2026.',
      'Age: 90 years.',
      'Legacy: Former IAS officer, Odia poet, playwright, and art historian.',
    ],
    whyItMatters:
      'Notable literary personalities and their contributions are asked in SSC, Railway, and State PSC GK sections.',
    examRelevance: ['SSC', 'Railway', 'State PSC'],
  },
  {
    id: 'salim-kumar-actor-passes-away-2026',
    category: 'obituaries',
    headline: 'National Award-Winning Malayalam Actor Salim Kumar Passes Away',
    eventDate: 'June 6, 2026',
    location: 'Kochi, Kerala',
    summary:
      'Acclaimed Malayalam cinema veteran Salim Kumar passed away at the age of 56 in Kochi. His career spanned over three decades and earned him both state and national artistic accolades, including the National Film Award.',
    keyFacts: [
      'Deceased: Salim Kumar.',
      'Date of demise: June 6, 2026.',
      'Age: 56 years.',
      'Key distinction: National Film Award-winning actor with over three decades of service.',
    ],
    whyItMatters:
      'National Film Award winners and notable personalities in Indian cinema are relevant for SSC, Railway, and State PSC GK sections.',
    examRelevance: ['SSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'The National Film Awards are presented by the Directorate of Film Festivals (under the Ministry of Information and Broadcasting). They have been awarded annually since 1954. The Dadasaheb Phalke Award is the highest honour in Indian cinema.',
  },
];

/* ── STATIC GK ────────────────────────────────────────────────────────── */

export const jun01_07_staticGk: StaticGkLink[] = [
  {
    newsItem: 'Delhi HC recognizes right to be forgotten under Article 21',
    staticFact: 'The right to privacy was declared a fundamental right under Article 21 in K.S. Puttaswamy v. Union of India (2017), a landmark 9-judge bench decision. The Digital Personal Data Protection Act, 2023, governs data processing in India.',
  },
  {
    newsItem: 'Germany abolishes transit visa for Indians',
    staticFact: 'Germany is the largest economy in the Eurozone and 3rd largest globally. Its capital is Berlin, currency is Euro, and the head of government is the Chancellor. The Schengen Area has 27 member countries allowing passport-free movement.',
  },
  {
    newsItem: 'UNGA elects 5 new non-permanent UNSC members',
    staticFact: 'The UN Security Council has 15 members: 5 permanent (US, UK, France, Russia, China) with veto power and 10 non-permanent elected for 2-year terms. India has been a non-permanent member 8 times, most recently in 2021–22.',
  },
  {
    newsItem: 'RBI MPC keeps repo rate unchanged at 5.25%',
    staticFact: 'The RBI\u2019s Monetary Policy Committee (MPC) has 6 members — 3 RBI nominees (including Governor as chairperson) and 3 external members. The MPC was constituted under Section 45ZB of the RBI Act. Current Governor: Sanjay Malhotra.',
  },
  {
    newsItem: 'India\u2019s GDP grows at 7.7% in FY 2025-26',
    staticFact: 'GDP at constant prices = Real GDP; GDP at current prices = Nominal GDP. The National Statistics Office (NSO) was formed by merging CSO and NSSO in 2019, under the Ministry of Statistics and Programme Implementation.',
  },
  {
    newsItem: 'Surha Taal designated as India\u2019s 100th Ramsar Site',
    staticFact: 'The Ramsar Convention was signed in 1971 in Iran. India joined in 1982. India\u2019s first two Ramsar Sites were Chilika Lake (Odisha) and Keoladeo NP (Rajasthan) in 1981. Uttar Pradesh has the most Ramsar Sites among Indian states.',
  },
  {
    newsItem: 'Praggnanandhaa wins Norway Chess 2026',
    staticFact: 'Gukesh D. became the youngest World Chess Champion in December 2024 at age 18. Viswanathan Anand was India\u2019s first Grandmaster (1988) and World Champion 2007–2013. FIDE governs international chess.',
  },
  {
    newsItem: 'Major Abhilasha Barak wins UN Military Gender Advocate Award',
    staticFact: 'India is the largest contributor of troops to UN Peacekeeping. The UN Military Gender Advocate Award was established in 2016. The first Indian woman officer in the Indian Army was commissioned in 1992.',
  },
  {
    newsItem: 'Justice V. Mohana sworn in as 12th woman SC judge',
    staticFact: 'The first woman SC judge was Justice M. Fathima Beevi (1989). The Supreme Court was established on January 28, 1950. Article 124 governs SC composition. Maximum sanctioned strength: 34 judges including CJI.',
  },
  {
    newsItem: 'India-US hold 29th Army-to-Army Staff Talks in Hawaii',
    staticFact: 'India-US key defence exercises: Yudh Abhyas (Army), Malabar (Navy), Cope India (Air Force). Foundational defence agreements: LEMOA (2016), COMCASA (2018), BECA (2020), iCET (2023).',
  },
  {
    newsItem: 'Project Kusha air defence system makes progress',
    staticFact: 'India\u2019s existing air defence systems include Akash (medium-range, DRDO), Barak-8/MRSAM (Indo-Israeli), and the Ballistic Missile Defence with PAD and AAD interceptors. S-400 Triumf systems were acquired from Russia.',
  },
  {
    newsItem: 'VP releases "When Audit Matters" edited by Vinod Rai',
    staticFact: 'The CAG is a constitutional authority under Article 148. Vinod Rai served as CAG (2008–2013) and conducted the 2G spectrum and Coalgate audits. Current CAG: Girish Chandra Murmu.',
  },
  {
    newsItem: 'Union Cabinet approves ₹9,585 crore vehicle replacement scheme for Delhi-NCR',
    staticFact: 'India leapfrogged from BS-IV to BS-VI emission norms on April 1, 2020. The Vehicle Scrappage Policy was announced in 2021. Bharat Stage norms are based on European emission standards.',
  },
  {
    newsItem: 'Dr. Subhash C. Kashyap, former Lok Sabha Secretary-General, passes away at 97',
    staticFact: 'The Lok Sabha Secretary-General is the chief administrative officer of the Lower House. The first Lok Sabha was constituted on April 17, 1952. Article 79 defines Parliament as President + Rajya Sabha + Lok Sabha.',
  },
  {
    newsItem: 'SIDE Report 2026: India ranked 5th most digitalized economy',
    staticFact: 'ICRIER is a New Delhi-based economic policy think tank. India\u2019s UPI processed 14+ billion transactions/month in 2024. The Digital India programme was launched on July 1, 2015.',
  },
];

/* ── QUIZ ────────────────────────────────────────────────────────────────── */

export const jun01_07_quiz: QuizQuestion[] = [
  {
    id: 'jun01-q1',
    question: 'Surha Taal, designated as India\u2019s 100th Ramsar Site, is located in which state?',
    options: ['Madhya Pradesh', 'Rajasthan', 'Uttar Pradesh', 'Bihar'],
    correctIndex: 2,
    explanation: 'Surha Taal (Jai Prakash Narayan Bird Sanctuary) is located in Ballia district, Uttar Pradesh. It was designated as India\u2019s 100th Ramsar Site on World Environment Day, June 5, 2026.',
    category: 'environment',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q2',
    question: 'What is the policy repo rate after the RBI MPC decision in June 2026?',
    options: ['4.75%', '5.00%', '5.25%', '5.50%'],
    correctIndex: 2,
    explanation: 'The RBI MPC voted unanimously to maintain the policy repo rate at 5.25%. The SDF rate is 5.00% and MSF/Bank Rate is 5.50%.',
    category: 'economy',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q3',
    question: 'Rameshbabu Praggnanandhaa became the first Indian to win which elite chess tournament?',
    options: ['Tata Steel Chess', 'Wijk aan Zee', 'Norway Chess', 'Sinquefield Cup'],
    correctIndex: 2,
    explanation: 'Praggnanandhaa won the Norway Chess 2026 title in Stavanger on June 6, 2026, becoming the first Indian chess player to win this elite tournament.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q4',
    question: 'Major Abhilasha Barak received which United Nations award?',
    options: ['UN Peace Medal', 'UN Secretary-General\u2019s Medal', 'UN Military Gender Advocate of the Year Award', 'UN Civilian Service Award'],
    correctIndex: 2,
    explanation: 'Major Abhilasha Barak of the Indian Army was conferred the UN Military Gender Advocate of the Year Award on June 7, 2026.',
    category: 'awards',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q5',
    question: 'What was India\u2019s Real GDP growth rate for Financial Year 2025-26 as per NSO provisional estimates?',
    options: ['6.5%', '7.0%', '7.7%', '8.2%'],
    correctIndex: 2,
    explanation: 'The NSO released provisional estimates showing India\u2019s real GDP grew at 7.7% for FY 2025-26, with Q4 growth at 7.8%.',
    category: 'economy',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q6',
    question: 'Justice V. Mohana became the ___ woman judge in the history of the Supreme Court of India.',
    options: ['10th', '11th', '12th', '13th'],
    correctIndex: 2,
    explanation: 'Justice V. Mohana was sworn in on June 2, 2026, as the 12th woman judge in the history of the Supreme Court of India.',
    category: 'appointments',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q7',
    question: 'The Union Cabinet approved a commercial vehicle replacement scheme for Delhi-NCR worth:',
    options: ['\u20B97,585 crore', '\u20B98,585 crore', '\u20B99,585 crore', '\u20B910,585 crore'],
    correctIndex: 2,
    explanation: 'The Union Cabinet approved a ₹9,585 crore two-year scheme to replace 2.07 lakh older commercial vehicles in Delhi-NCR with BS-VI or electric vehicles.',
    category: 'national',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q8',
    question: 'Which country abolished the airport transit visa requirement for Indian travelers in June 2026?',
    options: ['France', 'Germany', 'United Kingdom', 'Netherlands'],
    correctIndex: 1,
    explanation: 'Germany abolished the airport transit visa (Type A visa) requirement for Indian citizens effective June 3, 2026, as published in the German Federal Law Gazette.',
    category: 'international',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q9',
    question: 'In the UNSC non-permanent member elections (June 2026), which country secured a seat for the first time in its history?',
    options: ['Austria', 'Portugal', 'The Philippines', 'Kyrgyzstan'],
    correctIndex: 3,
    explanation: 'Kyrgyzstan secured a non-permanent UNSC seat for the first time in its history during the UNGA election on June 3, 2026.',
    category: 'international',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q10',
    question: 'The HAWK (Hostile Activity Watch Kernel) system for tracking wildlife crimes was launched by which state?',
    options: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Assam'],
    correctIndex: 2,
    explanation: 'The Kerala Forest Department implemented the HAWK system on June 6, 2026, to digitally track wildlife offenses from field level to judicial resolution.',
    category: 'environment',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q11',
    question: 'According to the SIDE Report 2026, India is ranked ___ most digitalized economy globally.',
    options: ['3rd', '4th', '5th', '6th'],
    correctIndex: 2,
    explanation: 'The ICRIER-Prosus State of India\u2019s Digital Economy (SIDE) 2026 report ranked India as the 5th most digitalized economy and 4th on the AI Capability Index.',
    category: 'reports',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q12',
    question: 'The book "When Audit Matters" edited by former CAG Vinod Rai was released by:',
    options: ['President of India', 'Prime Minister', 'Vice-President C.P. Radhakrishnan', 'Chief Justice of India'],
    correctIndex: 2,
    explanation: 'Vice-President C.P. Radhakrishnan released the book "When Audit Matters: CAG Interventions That Made a Difference" on June 3, 2026, at Upa-Rashtrapati Bhavan.',
    category: 'books',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q13',
    question: 'Project Kusha is India\u2019s indigenous program for developing which capability?',
    options: ['Nuclear submarine fleet', 'Long-range air defence system', 'Hypersonic missile technology', 'Stealth fighter aircraft'],
    correctIndex: 1,
    explanation: 'Project Kusha is India\u2019s indigenous long-range layered air defence system with three interceptor variants (M1, M2, M3) covering ranges from 120 km to 400 km. Induction is planned between 2028 and 2030.',
    category: 'defence',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q14',
    question: 'The indigenous Zorawar Light Tank weighs approximately:',
    options: ['15 tonnes', '20 tonnes', '25 tonnes', '30 tonnes'],
    correctIndex: 2,
    explanation: 'The Zorawar is a 25-tonne indigenous light combat tank transportable via C-17 Globemaster aircraft, designed for high-altitude terrain combat.',
    category: 'defence',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q15',
    question: 'Consider the following statements:\n1. India\u2019s real GDP grew at 7.7% in FY 2025-26.\n2. The tertiary sector GVA growth was 9.3%.\n3. The NSO used 2011-12 as the base year for these calculations.\nWhich of the above statements are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', 'All of the above'],
    correctIndex: 0,
    explanation: 'Statements 1 and 2 are correct. However, Statement 3 is incorrect — the NSO used the revised 2022-23 base year for these calculations, not the older 2011-12 base year.',
    category: 'economy',
    difficulty: 'hard',
  },
  {
    id: 'jun01-q16',
    question: 'The India-US Army-to-Army Staff Talks held in June 2026 were the:',
    options: ['25th edition', '27th edition', '29th edition', '31st edition'],
    correctIndex: 2,
    explanation: 'The 29th India-US Army-to-Army Staff Talks were held in Hawaii at the headquarters of the US Indo-Pacific Command, concluding on June 6, 2026.',
    category: 'defence',
    difficulty: 'medium',
  },
  {
    id: 'jun01-q17',
    question: 'Which of the following teams won the SAFF Women\u2019s Championship 2026?',
    options: ['Bangladesh', 'Nepal', 'India', 'Sri Lanka'],
    correctIndex: 2,
    explanation: 'The Indian Women\u2019s Football Team won the SAFF Women\u2019s Championship 2026, with the final played on June 7, 2026.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q18',
    question: 'Dr. Subhash C. Kashyap, who passed away in June 2026, was the former:',
    options: ['Rajya Sabha Chairman', 'Attorney General of India', 'Lok Sabha Secretary-General', 'Chief Election Commissioner'],
    correctIndex: 2,
    explanation: 'Dr. Subhash C. Kashyap was a noted constitutional expert and former Lok Sabha Secretary-General who passed away at the age of 97 on June 4, 2026.',
    category: 'obituaries',
    difficulty: 'easy',
  },
  {
    id: 'jun01-q19',
    question: 'Consider the following about the Delhi HC ruling on the right to be forgotten (June 2026):\n1. It directed search engines to disable name-based access to certain court orders.\n2. The right was recognized as an extension of Article 19 (freedom of speech).\n3. It balances public interest with personal privacy.\nWhich of the above are correct?',
    options: ['1 and 2 only', '1 and 3 only', '2 and 3 only', 'All of the above'],
    correctIndex: 1,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect — the right to be forgotten was recognized as an extension of Article 21 (right to life and personal liberty / right to privacy), not Article 19.',
    category: 'national',
    difficulty: 'hard',
  },
  {
    id: 'jun01-q20',
    question: 'India slipped to which position in global market capitalization rankings in June 2026?',
    options: ['5th', '6th', '7th', '8th'],
    correctIndex: 2,
    explanation: 'India dropped to the 7th position with a valuation of USD 4.84 trillion, as South Korea (USD 5.01 trillion) overtook India, according to Bloomberg data.',
    category: 'economy',
    difficulty: 'medium',
  },
];

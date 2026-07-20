import type { NewsItem, QuizQuestion, StaticGkLink } from './current-affairs-data';

export const jul13_19_newsItems: NewsItem[] = [
  /* ── ECONOMY & BANKING ────────────────────────────────────────────────── */
  {
    id: 'india-uk-fta-in-force-2026',
    category: 'economy',
    headline: 'India-UK Free Trade Agreement (CETA) Enters into Force',
    eventDate: 'July 15, 2026',
    location: 'New Delhi / London',
    summary:
      'The India-UK Comprehensive Economic and Trade Agreement (CETA) formally entered into force on July 15, 2026, along with the Double Contributions Convention. It is India’s most comprehensive trade agreement with a G7 economy and the UK’s most significant bilateral trade deal since leaving the EU.',
    keyFacts: [
      'From day one, the UK removes duties on 99% of Indian tariff lines — India’s textiles, leather and footwear, gems and jewellery, and plastics now enter the British market at zero duty.',
      'India’s import tariff on Scotch whisky drops from 150% to 75% at entry into force, falling further to 40% over the following decade.',
      'The agreement was signed on July 24, 2025 by PM Narendra Modi and UK PM Keir Starmer; it is forecast to raise bilateral trade by about £25.5 billion annually in the long run.',
      'Under the Double Contributions Convention, Indian companies in the UK are exempt from social security contributions for up to five years for employees moved from India.',
    ],
    whyItMatters:
      'FTA milestones — the partner country, signing and entry-into-force dates, and headline tariff changes — are high-probability questions for UPSC, Banking, and SSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'CETA stands for Comprehensive Economic and Trade Agreement. India’s earlier major trade pacts include ECTA with Australia (2022) and CEPA with the UAE (2022). The UK’s capital is London and its currency is the Pound Sterling.',
  },
  {
    id: 'cpi-june-2026-retail-inflation',
    category: 'economy',
    headline: 'Retail Inflation Rises to 4.38% in June 2026 — First Breach of 4% Under New CPI Series',
    eventDate: 'July 13, 2026',
    location: 'New Delhi',
    summary:
      'The National Statistics Office (NSO) under the Ministry of Statistics and Programme Implementation released June 2026 CPI data on July 13, 2026. Retail inflation rose to 4.38% from 3.93% in May — the first time inflation has crossed 4% under the new CPI series with base year 2024.',
    keyFacts: [
      'Food inflation (CFPI) rose to 5.32% in June from 4.78% in May; rural retail inflation was 4.74% and urban 3.92%.',
      'The RBI’s mandate is to keep CPI at 4% with a tolerance band of 2% on either side; the next Monetary Policy Committee (MPC) meeting is scheduled for August 3–5, 2026.',
      'The all-India CPI general index for June 2026 (provisional) stood at 107.00; CPI data for July 2026 will be released on August 12, 2026.',
      'Ginger prices rose 50.41% year-on-year and tomatoes 31.92%, while potatoes saw deflation of 20.34%.',
    ],
    whyItMatters:
      'The exact CPI figure, the CFPI, the RBI’s inflation target band, and MPC meeting dates are staple questions in Banking, SSC, and UPSC Economy sections.',
    examRelevance: ['Banking', 'SSC', 'UPSC', 'Railway', 'State PSC'],
    staticGkConnect:
      'CPI is released monthly by the NSO; the new series uses base year 2024. The RBI’s flexible inflation targeting framework (4% ± 2%) was adopted in 2016 under the amended RBI Act.',
  },
  {
    id: 'wpi-june-2026-wholesale-inflation',
    category: 'economy',
    headline: 'Wholesale Inflation (WPI) Rises to 9.87% in June 2026',
    eventDate: 'July 14, 2026',
    location: 'New Delhi',
    summary:
      'The Ministry of Commerce and Industry released June 2026 WPI data on July 14, 2026. Wholesale inflation rose to 9.87% year-on-year, up from 9.68% in May, driven mainly by mineral oils, food articles, basic metals, and chemicals.',
    keyFacts: [
      'The all-commodities WPI index stood at 110.2 in June (base year 2022–23), up from 109.9 in May.',
      'Fuel and Power recorded the highest group inflation at 27.41% (moderating from 30.33% in May); the WPI Food Index rose to 6.14% from 4.49%.',
      'The final WPI inflation for April 2026 was revised upward to 8.36% from the provisional 8.26%.',
      'Alongside WPI, the government released the Output Producer Price Index (PPI) — 109.9 for all commodities in June.',
    ],
    whyItMatters:
      'WPI vs CPI distinctions, the releasing ministry, and the base year are classic one-mark questions in Banking, SSC, and Railway exams.',
    examRelevance: ['Banking', 'SSC', 'UPSC', 'Railway'],
    staticGkConnect:
      'WPI is released by the Office of the Economic Adviser, Ministry of Commerce and Industry, with base year 2022–23. CPI (base 2024) is released by the NSO under MoSPI — the RBI targets CPI, not WPI.',
  },

  /* ── SCIENCE & TECH ───────────────────────────────────────────────────── */
  {
    id: 'india-first-hydrogen-train-2026',
    category: 'science',
    headline: 'PM Modi Flags Off India’s First Hydrogen-Powered Train on the Jind–Sonipat Route',
    eventDate: 'July 17, 2026',
    location: 'Jind, Haryana',
    summary:
      'Prime Minister Narendra Modi flagged off India’s first hydrogen-powered passenger train from Jind, Haryana on July 17, 2026. The 10-coach train runs on an 89-km route between Jind and Sonipat and has been dubbed the “NaMo Green Rail”. India joins Germany, China, Japan and the US in operating hydrogen trains.',
    keyFacts: [
      'The train is powered by a 1,200-kilowatt hydrogen fuel cell propulsion system, described by officials as the world’s most powerful for a train.',
      'With a capacity of around 2,600 passengers, Indian Railways calls it the world’s longest hydrogen-fuelled passenger rail service; it emits only water and steam.',
      'Approved operating speed is 75 kmph with a design speed of 110 kmph; the route connects Jind Junction, Gohana Junction and Sonipat.',
      'India’s largest railway hydrogen storage and refuelling facility (about 3,000 kg capacity) was also inaugurated at Jind; Indian Railways targets net-zero carbon emissions by 2030.',
    ],
    whyItMatters:
      'This is the single most important item of the week for Railway exams — the route, state, fuel-cell capacity, passenger capacity, and net-zero target are all likely questions.',
    examRelevance: ['Railway', 'SSC', 'UPSC', 'Banking', 'State PSC', 'Defence'],
    staticGkConnect:
      'Hydrogen fuel cells generate electricity by combining hydrogen and oxygen, emitting only water. Germany launched the world’s first hydrogen train fleet in 2022. India’s first passenger train ran in 1853 from Mumbai (Bombay) to Thane.',
  },
  {
    id: 'gaganyaan-crew-module-tests-jul-2026',
    category: 'science',
    headline: 'ISRO Completes Key Gaganyaan Crew Module Qualification Tests',
    eventDate: 'July 12, 2026',
    location: 'India',
    summary:
      'ISRO announced on July 12, 2026 the successful completion of a series of qualification tests for the Gaganyaan Crew Module, validating safety systems for splashdown, module separation and re-entry. (Included this week as it was not covered in the previous digest.)',
    keyFacts: [
      'The Crew Module Uprighting System (CMUS) test validated the cold-gas inflation system that automatically returns the capsule to an upright position after sea splashdown.',
      'The Crew Module–Service Module Connect-Disconnect System (CS-CDS) test confirmed clean separation of the CSU-2 umbilical connector before re-entry.',
      'Earlier in July, ISRO also conducted the fifth Integrated Main Parachute Airdrop Test (IMAT-05) at the ADRDE drop zone in Sheopur, Madhya Pradesh — the Crew Module uses 10 parachutes of 4 types.',
      'Gaganyaan’s first uncrewed test flight (G1), carrying the half-humanoid robot Vyommitra, is planned for the second half of 2026, with the first crewed flight targeted for 2027.',
    ],
    whyItMatters:
      'Gaganyaan milestones — test names, the Vyommitra robot, and mission timelines — are recurring Science & Tech questions across UPSC, SSC, and Railway exams.',
    examRelevance: ['UPSC', 'SSC', 'Railway', 'Banking', 'Defence'],
    staticGkConnect:
      'Gaganyaan is India’s human spaceflight programme; success would make India the fourth nation to launch its own crewed spacecraft after the USSR/Russia, the USA, and China. The selected astronaut-designates are IAF pilots.',
  },

  /* ── INTERNATIONAL ────────────────────────────────────────────────────── */
  {
    id: 'india-unsc-shanti-campaign-2026',
    category: 'international',
    headline: 'India Launches UNSC 2028–29 Campaign with “SHANTI” Theme at UN Headquarters',
    eventDate: 'July 13, 2026',
    location: 'New York, USA',
    summary:
      'External Affairs Minister Dr. S. Jaishankar officially launched India’s campaign for a non-permanent seat on the United Nations Security Council for the 2028–29 term at a special event at UN Headquarters in New York on July 13, 2026.',
    keyFacts: [
      'The campaign theme is SHANTI — “Securing Holistic Advancement through Norms, Trust, Integrity”.',
      'Elections for the 2028–29 term will be held in June 2027, when India and Tajikistan will contest the sole seat in the Asia-Pacific Group category.',
      'India last served on the UNSC in 2021–22 — its eighth term as a non-permanent member.',
      'Jaishankar highlighted India’s peacekeeping record of nearly 3,00,000 personnel deployed across about 50 UN missions, and pitched a stronger voice for the Global South.',
    ],
    whyItMatters:
      'The SHANTI acronym, election year, rival candidate, and India’s previous UNSC terms are ready-made questions for UPSC, SSC, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'The UNSC has 15 members — 5 permanent (P5) with veto power and 10 non-permanent members elected for two-year terms by the UN General Assembly. India is a founding member of the UN (1945).',
  },

  /* ── SUMMITS & MoUs ───────────────────────────────────────────────────── */
  {
    id: 'brics-lemm-hyderabad-2026',
    category: 'summits',
    headline: 'India Hosts 12th BRICS Labour and Employment Ministers’ Meeting in Hyderabad',
    eventDate: 'July 15–16, 2026',
    location: 'Hyderabad, Telangana',
    summary:
      'Under its 2026 BRICS Chairship, India hosted the 12th BRICS Labour and Employment Ministers’ Meeting (LEMM) in Hyderabad on July 15–16, 2026, chaired by Union Labour and Employment Minister Mansukh Mandaviya.',
    keyFacts: [
      'The theme was “Building for Resilience, Innovation, Cooperation and Sustainability (BRICS)”.',
      'Discussions covered social security and labour-market formalisation, women’s workforce participation, skills development, and digital public infrastructure for worker welfare — particularly gig workers.',
      'The meeting followed the Third BRICS Employment Working Group (EWG), held on July 13–14, 2026, which finalised a draft declaration on labour cooperation.',
    ],
    whyItMatters:
      'India’s 2026 BRICS chairship events and their host cities are classic match-the-pair questions for SSC, Banking, and State PSC exams.',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'State PSC'],
    staticGkConnect:
      'India holds the BRICS chairship for 2026. Earlier chairship meetings were hosted in Kochi (Women Working Group) and Guwahati (Anti-Drug Agencies). The EPFO and labour codes fall under the Ministry of Labour and Employment.',
  },

  /* ── AWARDS & HONOURS ─────────────────────────────────────────────────── */
  {
    id: 'jnanpith-vairamuthu-ceremony-2026',
    category: 'awards',
    headline: '60th Jnanpith Award Presented to Tamil Poet Vairamuthu in New Delhi',
    eventDate: 'July 13, 2026',
    location: 'New Delhi',
    summary:
      'The 60th Jnanpith Award (for the year 2025) was formally presented to Tamil poet, lyricist and novelist R. Vairamuthu at a ceremony in New Delhi on July 13, 2026, by former Union Minister Dr. Karan Singh. His selection had been announced by the Bharatiya Jnanpith on March 14, 2026.',
    keyFacts: [
      'Vairamuthu is the third Tamil writer to win India’s highest literary honour, after Akilan (1975) and Jayakanthan (2002).',
      'The award carries a cash prize of ₹11 lakh, a citation plaque, and a bronze statue of Vagdevi (Saraswati).',
      'He won the Sahitya Akademi Award (2003) for the novel Kallikkaattu Ithigaasam, holds 7 National Film Awards, and received the Padma Shri (2003) and Padma Bhushan (2014).',
      'The selection committee for the 60th award was chaired by writer Pratibha Ray.',
    ],
    whyItMatters:
      'Jnanpith winners — the edition number, language, and previous winners from the same language — are among the most frequently asked Awards questions in SSC, State PSC, and Teaching exams.',
    examRelevance: ['UPSC', 'SSC', 'State PSC', 'Teaching'],
    staticGkConnect:
      'The Jnanpith Award, instituted in 1961 by the Bharatiya Jnanpith, was first awarded in 1965 to Malayalam writer G. Sankara Kurup. Ashapurna Devi (Bengali) was the first woman recipient (1976).',
  },
  {
    id: 'india-ipho-2026-five-golds',
    category: 'awards',
    headline: 'All Five Indian Students Win Gold at IPhO 2026 — India Joint World No. 1',
    eventDate: 'July 12, 2026',
    location: 'Bucaramanga, Colombia',
    summary:
      'All five members of the Indian team won gold medals at the 56th International Physics Olympiad (IPhO) 2026, held in Bucaramanga, Colombia, and concluding on July 12. India secured the joint World No. 1 rank. (Included this week as it was not covered in the previous digest.)',
    keyFacts: [
      'India finished joint World No. 1 alongside China, Kazakhstan, Russia, South Korea and Taiwan, among 381 students from 87 countries.',
      'The gold medallists: Kanishk Jain (Pune), Riddhesh Anant Bendale (Indore), Rishit Garg (Delhi), Shresth Suraiya (Mumbai) and Svarit Joshi (Ahmedabad).',
      'The Indian team is selected and trained by the Homi Bhabha Centre for Science Education (HBCSE), a centre of TIFR under the Department of Atomic Energy.',
      'India’s previous all-gold clean sweep at the IPhO came in 2018.',
    ],
    whyItMatters:
      'International Olympiad results — the host city, India’s rank, and the training institute (HBCSE-TIFR) — appear regularly in SSC, Teaching, and State PSC GK sections.',
    examRelevance: ['SSC', 'UPSC', 'Teaching', 'State PSC'],
    staticGkConnect:
      'The International Physics Olympiad is one of the world’s premier competitions for pre-university students; each country can send a maximum of five students. HBCSE in Mumbai runs India’s National Olympiad Programme.',
  },

  /* ── APPOINTMENTS ─────────────────────────────────────────────────────── */
  {
    id: 'tummala-earth-sciences-secretary-2026',
    category: 'appointments',
    headline: 'Dr. Srinivasa Kumar Tummala Appointed Secretary, Ministry of Earth Sciences',
    eventDate: 'July 16, 2026',
    location: 'New Delhi',
    summary:
      'The Appointments Committee of the Cabinet (ACC) approved the appointment of Dr. Srinivasa Kumar Tummala as Secretary, Ministry of Earth Sciences (MoES), for a two-year tenure, via an order issued on July 16, 2026.',
    keyFacts: [
      'Dr. Tummala currently heads the Indian Ocean Tsunami Warning and Mitigation System (IOTWMS) Secretariat under UNESCO’s Intergovernmental Oceanographic Commission in Perth, Australia.',
      'He earlier served as Director of the Indian National Centre for Ocean Information Services (INCOIS), Hyderabad, and is regarded as an architect of India’s tsunami warning infrastructure.',
      'The MoES is responsible for weather forecasting (IMD), ocean sciences, seismology, polar research, and the Deep Ocean Mission.',
    ],
    whyItMatters:
      'Secretary-level appointments to scientific ministries — the person, ministry, and tenure — are typical Appointments questions in Banking and SSC exams.',
    examRelevance: ['SSC', 'Banking', 'UPSC', 'State PSC'],
    staticGkConnect:
      'INCOIS, headquartered in Hyderabad, operates India’s tsunami early warning centre. The India Meteorological Department (IMD), founded in 1875, functions under the Ministry of Earth Sciences.',
  },

  /* ── DEFENCE ──────────────────────────────────────────────────────────── */
  {
    id: 'ins-mahendragiri-commissioned-2026',
    category: 'defence',
    headline: 'INS Mahendragiri, Final Project 17A Stealth Frigate, Commissioned at Visakhapatnam',
    eventDate: 'July 11, 2026',
    location: 'Visakhapatnam, Andhra Pradesh',
    summary:
      'Defence Minister Rajnath Singh commissioned INS Mahendragiri (F38), a Project 17A Nilgiri-class stealth guided-missile frigate, at Visakhapatnam on July 11, 2026. It is the final ship of the seven-ship Project 17A programme. (Included this week as it was not covered in the previous digest.)',
    keyFacts: [
      'The frigate has over 75% indigenous content, was designed in-house by the Indian Navy’s Warship Design Bureau, and built by Mazagon Dock Shipbuilders Limited (MDL), Mumbai.',
      'It is armed with BrahMos supersonic cruise missiles and the Barak-8 surface-to-air missile system, and has joined the Eastern Fleet headquartered at Visakhapatnam.',
      'The ship is named after the Mahendragiri mountain peak in the Eastern Ghats of Odisha.',
      'Project 17A frigates are an advanced follow-on to the Shivalik class with enhanced stealth and upgraded weapons and sensors.',
    ],
    whyItMatters:
      'Warship commissionings — the class, builder, base, and namesake — are staple Defence questions for NDA, CDS, AFCAT, SSC, and Police exams.',
    examRelevance: ['Defence', 'SSC', 'UPSC', 'Police', 'Railway'],
    staticGkConnect:
      'The Nilgiri class (Project 17A) succeeds the Shivalik class (Project 17). BrahMos is an India-Russia joint venture named after the Brahmaputra and Moskva rivers; Barak-8 was developed jointly with Israel.',
  },

  /* ── SPORTS ───────────────────────────────────────────────────────────── */
  {
    id: 'fifa-world-cup-2026-final-spain',
    category: 'sports',
    headline: 'Spain Win FIFA World Cup 2026, Beating Argentina 1-0 in the Final',
    eventDate: 'July 19, 2026',
    location: 'East Rutherford, New Jersey, USA',
    summary:
      'Spain defeated Argentina 1-0 after extra time in the FIFA World Cup 2026 final on July 19, 2026 at the New York/New Jersey Stadium (MetLife Stadium), East Rutherford, with substitute Ferran Torres scoring the winner in the 106th minute. It is Spain’s second World Cup title after 2010.',
    keyFacts: [
      'The 2026 edition — the first with 48 teams — was co-hosted by the USA, Canada and Mexico, the first men’s World Cup in North America in over three decades.',
      'Argentina goalkeeper Emiliano Martínez made 11 saves, the most ever recorded in a men’s World Cup final; Argentina’s Enzo Fernández was sent off in stoppage time.',
      'France’s Kylian Mbappé finished as the tournament’s top scorer with 10 goals and became the all-time leading World Cup goal-scorer; England beat France in the third-place match.',
      'Spain became the first champion to concede only one goal en route to the title, extending their unbeaten run to 38 matches.',
    ],
    whyItMatters:
      'World Cup winners, hosts, venues, and Golden Boot facts are guaranteed Sports GK questions in SSC, Banking, Railway, and Police exams for the next several years.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC', 'Police'],
    staticGkConnect:
      'Spain first won the World Cup in 2010 (beating the Netherlands 1-0 in extra time). Argentina won the previous edition in Qatar 2022. The 2030 World Cup will be hosted across Spain, Portugal and Morocco, with centenary matches in South America.',
  },
  {
    id: 'icc-hall-of-fame-2026-ganguly',
    category: 'sports',
    headline: 'Sourav Ganguly, Anjum Chopra and Kevin Pietersen Inducted into ICC Hall of Fame',
    eventDate: 'July 11, 2026',
    location: 'Edinburgh, Scotland',
    summary:
      'The ICC inducted former India captains Sourav Ganguly and Anjum Chopra, along with former England captain Kevin Pietersen, into the ICC Hall of Fame as the Class of 2026 at a ceremony in Edinburgh on July 11, 2026. (Included this week as it was not covered in the previous digest.)',
    keyFacts: [
      'The three inductions take the total number of ICC Hall of Fame members to 125.',
      'Ganguly is the 10th Indian men’s cricketer in the Hall of Fame; he scored 18,575 international runs (7,212 in Tests, 11,363 in ODIs) and led India to the 2003 World Cup final.',
      'Anjum Chopra is only the third Indian woman inducted, after Diana Edulji and Neetu David.',
      'Players become eligible for induction five years after their final international appearance.',
    ],
    whyItMatters:
      'Hall of Fame inductions — names, countries, and running totals — are quick one-mark Sports questions in SSC, Banking, and Railway exams.',
    examRelevance: ['SSC', 'Banking', 'Railway', 'State PSC'],
    staticGkConnect:
      'The ICC (International Cricket Council), headquartered in Dubai, launched the Hall of Fame in 2009. Sunil Gavaskar, Sachin Tendulkar, Rahul Dravid, MS Dhoni and Virender Sehwag are among earlier Indian inductees.',
  },

  /* ── OBITUARIES ───────────────────────────────────────────────────────── */
  {
    id: 's-janaki-obituary-2026',
    category: 'obituaries',
    headline: 'Legendary Playback Singer S. Janaki, “Nightingale of South India”, Passes Away at 88',
    eventDate: 'July 11, 2026',
    location: 'Mysuru, Karnataka',
    summary:
      'Veteran playback singer S. Janaki, revered as the “Nightingale of South India”, passed away at a hospital in Mysuru, Karnataka on July 11, 2026, at the age of 88, following cardiac arrest. (Included this week as it was not covered in the previous digest.)',
    keyFacts: [
      'In a career spanning about six decades from her 1957 debut, she recorded tens of thousands of songs across 17 languages, with Kannada and Malayalam among her most prolific.',
      'She won 4 National Film Awards and 33 State Film Awards, and was honoured with the Padma Bhushan.',
      'She was celebrated for her collaborations with composers such as Ilaiyaraaja and M. S. Viswanathan, and duets with S. P. Balasubrahmanyam.',
    ],
    whyItMatters:
      'Obituaries of Padma awardees and National Film Award winners — the person, field, and title — appear as one-liners in SSC, Railway, and State PSC exams.',
    examRelevance: ['SSC', 'Railway', 'State PSC', 'Police'],
    staticGkConnect:
      'The National Film Awards are administered by the National Film Development Corporation under the Ministry of Information and Broadcasting. The Padma Bhushan is India’s third-highest civilian honour.',
  },
];

export const jul13_19_staticGk: StaticGkLink[] = [
  {
    newsItem: 'The India-UK CETA entered into force on July 15, 2026.',
    staticFact:
      'CETA was signed on July 24, 2025 by PM Modi and PM Keir Starmer. India’s ECTA with Australia came into force in December 2022; CEPA with the UAE in May 2022.',
  },
  {
    newsItem: 'Retail inflation rose to 4.38% in June 2026 — above 4% for the first time under the new series.',
    staticFact:
      'The RBI targets CPI at 4% with a ±2% band under the flexible inflation targeting framework adopted in 2016. CPI is released by the NSO (MoSPI) with base year 2024.',
  },
  {
    newsItem: 'WPI inflation rose to 9.87% in June 2026.',
    staticFact:
      'WPI is released by the Ministry of Commerce and Industry with base year 2022–23. The RBI targets CPI, not WPI — a classic exam distinction.',
  },
  {
    newsItem: 'PM Modi flagged off India’s first hydrogen train on the Jind–Sonipat route.',
    staticFact:
      'Hydrogen fuel cells emit only water and steam. Germany launched the world’s first hydrogen train fleet in 2022; India’s first passenger train ran from Mumbai to Thane in 1853.',
  },
  {
    newsItem: 'India launched its UNSC 2028–29 campaign with the SHANTI theme.',
    staticFact:
      'SHANTI = Securing Holistic Advancement through Norms, Trust, Integrity. The UNSC has 5 permanent and 10 non-permanent members; India has served eight terms, most recently 2021–22.',
  },
  {
    newsItem: 'Hyderabad hosted the 12th BRICS Labour and Employment Ministers’ Meeting.',
    staticFact:
      'India holds the BRICS chairship for 2026. BRICS originally comprised Brazil, Russia, India, China and South Africa, with new members admitted since 2024.',
  },
  {
    newsItem: 'The 60th Jnanpith Award was presented to Vairamuthu.',
    staticFact:
      'The Jnanpith Award (instituted 1961, first given 1965 to G. Sankara Kurup) is India’s highest literary honour, presented by the Bharatiya Jnanpith with a ₹11 lakh prize and a Vagdevi statue.',
  },
  {
    newsItem: 'All five Indian students won gold at the 56th IPhO in Colombia.',
    staticFact:
      'India’s Olympiad teams are trained by HBCSE, a TIFR centre under the Department of Atomic Energy. India’s previous IPhO all-gold sweep was in 2018.',
  },
  {
    newsItem: 'INS Mahendragiri, the last Project 17A frigate, was commissioned at Visakhapatnam.',
    staticFact:
      'Project 17A (Nilgiri-class) frigates succeed the Shivalik class. The Eastern Naval Command is headquartered at Visakhapatnam; the Western Naval Command at Mumbai.',
  },
  {
    newsItem: 'Spain won the FIFA World Cup 2026, beating Argentina 1-0.',
    staticFact:
      'The 2026 World Cup was the first with 48 teams, co-hosted by the USA, Canada and Mexico. Spain’s first title came in 2010; Argentina won in 2022.',
  },
  {
    newsItem: 'Sourav Ganguly and Anjum Chopra entered the ICC Hall of Fame.',
    staticFact:
      'The ICC is headquartered in Dubai. Diana Edulji and Neetu David were the first two Indian women in the Hall of Fame.',
  },
  {
    newsItem: 'Dr. Srinivasa Kumar Tummala became Secretary, Ministry of Earth Sciences.',
    staticFact:
      'The MoES oversees the IMD (founded 1875), INCOIS Hyderabad, and the Deep Ocean Mission, which includes the Samudrayaan crewed submersible project.',
  },
];

export const jul13_19_quiz: QuizQuestion[] = [
  {
    id: 'jul13-q1',
    question: 'The India-UK Comprehensive Economic and Trade Agreement (CETA) entered into force on which date?',
    options: ['July 1, 2026', 'July 15, 2026', 'July 24, 2026', 'August 1, 2026'],
    correctIndex: 1,
    explanation:
      'CETA entered into force on July 15, 2026, along with the Double Contributions Convention. It was signed on July 24, 2025.',
    category: 'economy',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q2',
    question: 'Under the India-UK CETA, what percentage of Indian tariff lines get duty-free access to the UK from day one?',
    options: ['85%', '90%', '95%', '99%'],
    correctIndex: 3,
    explanation:
      'The UK removes duties on 99% of Indian tariff lines from entry into force, covering textiles, leather, gems and jewellery, and plastics.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q3',
    question: 'India’s CPI retail inflation for June 2026 stood at what rate?',
    options: ['3.93%', '4.38%', '5.32%', '9.87%'],
    correctIndex: 1,
    explanation:
      'CPI inflation rose to 4.38% in June 2026 from 3.93% in May — the first breach of 4% under the new 2024-base series. 5.32% was food (CFPI) inflation and 9.87% was WPI.',
    category: 'economy',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q4',
    question: 'The RBI is mandated to keep CPI inflation at what target, with what tolerance band?',
    options: ['4% ± 1%', '4% ± 2%', '5% ± 2%', '6% ± 2%'],
    correctIndex: 1,
    explanation:
      'Under the flexible inflation targeting framework, the RBI must keep CPI at 4% with a tolerance band of 2% on either side (2%–6%).',
    category: 'economy',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q5',
    question: 'WPI inflation for June 2026, released on July 14, stood at:',
    options: ['8.36%', '9.68%', '9.87%', '10.20%'],
    correctIndex: 2,
    explanation:
      'WPI inflation rose to 9.87% in June 2026 from 9.68% in May. April’s final figure was revised to 8.36%.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q6',
    question: 'The Wholesale Price Index (WPI) is released by which ministry?',
    options: [
      'Ministry of Finance',
      'Ministry of Statistics and Programme Implementation',
      'Ministry of Commerce and Industry',
      'NITI Aayog',
    ],
    correctIndex: 2,
    explanation:
      'WPI is released by the Office of the Economic Adviser under the Ministry of Commerce and Industry. CPI is released by the NSO under MoSPI.',
    category: 'economy',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q7',
    question: 'India’s first hydrogen-powered train runs on which route?',
    options: ['Jind–Sonipat', 'Rewari–Rohtak', 'Kalka–Shimla', 'Jind–Panipat'],
    correctIndex: 0,
    explanation:
      'The train runs on the 89-km Jind–Sonipat route in Haryana, flagged off by PM Modi from Jind on July 17, 2026.',
    category: 'science',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q8',
    question: 'India’s first hydrogen train is powered by a fuel cell propulsion system of what capacity?',
    options: ['600 kW', '800 kW', '1,000 kW', '1,200 kW'],
    correctIndex: 3,
    explanation:
      'The 1,200-kW hydrogen fuel cell propulsion system has been described as the world’s most powerful for a train.',
    category: 'science',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q9',
    question: 'Which country launched the world’s first hydrogen-powered train fleet in 2022?',
    options: ['Japan', 'Germany', 'China', 'USA'],
    correctIndex: 1,
    explanation:
      'Germany launched the world’s first hydrogen train fleet in 2022. India joined the group of hydrogen-train operators on July 17, 2026.',
    category: 'science',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q10',
    question: 'India’s campaign theme for the UNSC 2028–29 non-permanent seat is:',
    options: ['SETU', 'SHANTI', 'SAGAR', 'VASUDHA'],
    correctIndex: 1,
    explanation:
      'SHANTI stands for “Securing Holistic Advancement through Norms, Trust, Integrity”. It was launched by EAM S. Jaishankar at UN Headquarters on July 13, 2026.',
    category: 'international',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q11',
    question: 'India will contest the UNSC 2028–29 Asia-Pacific seat against which country in the June 2027 election?',
    options: ['Nepal', 'Kazakhstan', 'Tajikistan', 'Vietnam'],
    correctIndex: 2,
    explanation:
      'India and Tajikistan will contest the sole Asia-Pacific Group seat. India last served on the UNSC in 2021–22, its eighth term.',
    category: 'international',
    difficulty: 'hard',
  },
  {
    id: 'jul13-q12',
    question: 'The 12th BRICS Labour and Employment Ministers’ Meeting (July 2026) was held in which Indian city?',
    options: ['Kochi', 'Guwahati', 'Hyderabad', 'New Delhi'],
    correctIndex: 2,
    explanation:
      'Hyderabad hosted the 12th BRICS LEMM on July 15–16, 2026, chaired by Union Labour Minister Mansukh Mandaviya under India’s 2026 BRICS Chairship.',
    category: 'summits',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q13',
    question: 'The 60th Jnanpith Award was presented in July 2026 to which writer?',
    options: ['Gulzar', 'Damodar Mauzo', 'R. Vairamuthu', 'Pratibha Ray'],
    correctIndex: 2,
    explanation:
      'Tamil poet and lyricist R. Vairamuthu received the 60th Jnanpith Award at a New Delhi ceremony on July 13, 2026 — the third Tamil writer to win it.',
    category: 'awards',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q14',
    question: 'Vairamuthu is the third Tamil writer to win the Jnanpith Award. Who were the first two?',
    options: [
      'Subramania Bharati and Kalki',
      'Akilan and Jayakanthan',
      'Jayakanthan and Sujatha',
      'Akilan and Kannadasan',
    ],
    correctIndex: 1,
    explanation:
      'Akilan won the Jnanpith in 1975 and D. Jayakanthan in 2002 — the only earlier Tamil recipients.',
    category: 'awards',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q15',
    question: 'The 56th International Physics Olympiad 2026, where all five Indian students won gold, was held in:',
    options: ['Paris, France', 'Isfahan, Iran', 'Bucaramanga, Colombia', 'Tokyo, Japan'],
    correctIndex: 2,
    explanation:
      'IPhO 2026 was held in Bucaramanga, Colombia. India finished joint World No. 1; its previous all-gold sweep was in 2018.',
    category: 'awards',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q16',
    question: 'Which institute selects and trains India’s teams for international science Olympiads like the IPhO?',
    options: ['IISc Bengaluru', 'HBCSE-TIFR, Mumbai', 'IIT Bombay', 'NCERT'],
    correctIndex: 1,
    explanation:
      'The Homi Bhabha Centre for Science Education (HBCSE), a TIFR centre under the Department of Atomic Energy, runs India’s National Olympiad Programme.',
    category: 'awards',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q17',
    question: 'Dr. Srinivasa Kumar Tummala was appointed in July 2026 as Secretary of which ministry?',
    options: [
      'Ministry of Science and Technology',
      'Ministry of Earth Sciences',
      'Ministry of Environment, Forest and Climate Change',
      'Ministry of Jal Shakti',
    ],
    correctIndex: 1,
    explanation:
      'The ACC appointed Dr. Tummala — former INCOIS Director and head of the UNESCO-IOC tsunami warning secretariat — as Secretary, Ministry of Earth Sciences, for two years.',
    category: 'appointments',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q18',
    question: 'INS Mahendragiri, commissioned on July 11, 2026 at Visakhapatnam, belongs to which class of frigates?',
    options: ['Shivalik class', 'Nilgiri class (Project 17A)', 'Talwar class', 'Visakhapatnam class'],
    correctIndex: 1,
    explanation:
      'INS Mahendragiri is the final Project 17A Nilgiri-class stealth frigate, built by Mazagon Dock Shipbuilders with over 75% indigenous content.',
    category: 'defence',
    difficulty: 'medium',
  },
  {
    id: 'jul13-q19',
    question: 'Who scored the winning goal for Spain in the FIFA World Cup 2026 final against Argentina?',
    options: ['Lamine Yamal', 'Ferran Torres', 'Rodri', 'Álvaro Morata'],
    correctIndex: 1,
    explanation:
      'Substitute Ferran Torres scored in the 106th minute (extra time) as Spain beat Argentina 1-0 at MetLife Stadium, East Rutherford, on July 19, 2026.',
    category: 'sports',
    difficulty: 'easy',
  },
  {
    id: 'jul13-q20',
    question: 'Who finished as the top scorer (Golden Boot) of the FIFA World Cup 2026?',
    options: ['Lionel Messi', 'Kylian Mbappé', 'Harry Kane', 'Lamine Yamal'],
    correctIndex: 1,
    explanation:
      'Kylian Mbappé finished with 10 goals, also becoming the all-time leading World Cup goal-scorer. England beat France in the third-place match.',
    category: 'sports',
    difficulty: 'medium',
  },
];

import type { NewsCategory } from './current-affairs-theme';
import { may11_17_newsItems, may11_17_staticGk, may11_17_quiz } from './may-11-17-data';
import { may18_24_newsItems, may18_24_staticGk, may18_24_quiz } from './may-18-24-data';
import { may25_31_newsItems, may25_31_staticGk, may25_31_quiz } from './may-25-31-data';
import { jun01_07_newsItems, jun01_07_staticGk, jun01_07_quiz } from './jun-01-07-data';
import { jun08_14_newsItems, jun08_14_staticGk, jun08_14_quiz } from './jun-08-14-data';
import { jun15_21_newsItems, jun15_21_staticGk, jun15_21_quiz } from './jun-15-21-data';
import { jun22_28_newsItems, jun22_28_staticGk, jun22_28_quiz } from './jun-22-28-data';
import { jun29_jul05_newsItems, jun29_jul05_staticGk, jun29_jul05_quiz } from './jun-29-jul-05-data';
import { jul06_12_newsItems, jul06_12_staticGk, jul06_12_quiz } from './jul-06-12-data';
import { jul13_19_newsItems, jul13_19_staticGk, jul13_19_quiz } from './jul-13-19-data';

/* ── Interfaces ────────────────────────────────────────────────────────── */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: NewsCategory;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface NewsItem {
  id: string;
  category: NewsCategory;
  headline: string;
  eventDate: string;
  location?: string;
  summary: string;
  keyFacts: string[];
  whyItMatters: string;
  examRelevance: ('UPSC' | 'SSC' | 'Banking' | 'Railway' | 'Defence' | 'State PSC' | 'Teaching' | 'Police')[];
  staticGkConnect?: string;
}

export interface StaticGkLink {
  newsItem: string;
  staticFact: string;
}

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
  newsItems?: NewsItem[];
  staticGkBox?: StaticGkLink[];
  quiz?: QuizQuestion[];
  weekRange?: string;
}

export const caCategories = ['All', 'National', 'International', 'Economy', 'Sci-Tech', 'Sports'] as const;
export type CaCategory = (typeof caCategories)[number];

/* ── Posts ──────────────────────────────────────────────────────────────── */

export const currentAffairsPosts: CurrentAffairsPost[] = [
  /* ═══ NEW: July 13–19, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-july-13-19-2026',
    title:
      'Weekly Current Affairs: July 13\u201319, 2026 \u2014 India-UK FTA in Force, India\u2019s First Hydrogen Train, CPI at 4.38%, SHANTI UNSC Campaign, 60th Jnanpith to Vairamuthu & Spain Win the FIFA World Cup',
    dateRange: 'July 13\u201319, 2026',
    publishedDate: 'July 20, 2026',
    category: 'All',
    excerpt:
      'This week: the India-UK CETA enters into force with 99% of Indian tariff lines duty-free into the UK; PM Modi flags off India\u2019s first hydrogen-powered train on the Jind\u2013Sonipat route; CPI inflation rises to 4.38% \u2014 the first breach of 4% under the new series \u2014 while WPI hits 9.87%; EAM Jaishankar launches India\u2019s UNSC 2028\u201329 campaign with the SHANTI theme; Hyderabad hosts the 12th BRICS Labour Ministers\u2019 Meeting; the 60th Jnanpith Award is presented to Vairamuthu; Dr. Srinivasa Kumar Tummala becomes Earth Sciences Secretary; and Spain beat Argentina 1-0 to win the FIFA World Cup 2026. Plus catch-ups: INS Mahendragiri\u2019s commissioning, India\u2019s five IPhO golds, the ICC Hall of Fame Class of 2026, Gaganyaan crew module tests, and the passing of S. Janaki.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'July 13\u201319, 2026',
    newsItems: jul13_19_newsItems,
    staticGkBox: jul13_19_staticGk,
    quiz: jul13_19_quiz,
    keyPoints: [
      'The India-UK Comprehensive Economic and Trade Agreement (CETA) entered into force on July 15, 2026 \u2014 the UK removes duties on 99% of Indian tariff lines, and India\u2019s Scotch whisky tariff falls from 150% to 75% (then 40% over a decade).',
      'PM Modi flagged off India\u2019s first hydrogen-powered train from Jind, Haryana on July 17 \u2014 a 10-coach, ~2,600-passenger train on the 89-km Jind\u2013Sonipat route with a 1,200-kW fuel cell, the world\u2019s most powerful for a train.',
      'CPI retail inflation rose to 4.38% in June 2026 (from 3.93% in May) \u2014 the first breach of 4% under the new 2024-base series; food inflation (CFPI) was 5.32%. The next RBI MPC meeting is August 3\u20135.',
      'WPI wholesale inflation rose to 9.87% in June (from 9.68% in May), driven by mineral oils, food articles, basic metals and chemicals; Fuel and Power inflation was 27.41%.',
      'EAM Dr. S. Jaishankar launched India\u2019s UNSC 2028\u201329 campaign at UN Headquarters on July 13 with the theme SHANTI \u2014 Securing Holistic Advancement through Norms, Trust, Integrity; India faces Tajikistan in the June 2027 election.',
      'India hosted the 12th BRICS Labour and Employment Ministers\u2019 Meeting in Hyderabad (July 15\u201316), chaired by Mansukh Mandaviya under India\u2019s 2026 BRICS Chairship.',
      'The 60th Jnanpith Award was presented to Tamil poet R. Vairamuthu in New Delhi on July 13 \u2014 the third Tamil writer to win, after Akilan (1975) and Jayakanthan (2002).',
      'The ACC appointed Dr. Srinivasa Kumar Tummala \u2014 former INCOIS Director and UNESCO-IOC tsunami warning chief \u2014 as Secretary, Ministry of Earth Sciences, for two years (order dated July 16).',
      'Spain won the FIFA World Cup 2026, beating Argentina 1-0 in extra time on July 19 at MetLife Stadium; Ferran Torres scored the winner, and Kylian Mbapp\u00e9 took the Golden Boot with 10 goals, becoming the all-time World Cup top scorer.',
      'Catch-up from July 11: Defence Minister Rajnath Singh commissioned INS Mahendragiri \u2014 the final Project 17A Nilgiri-class stealth frigate (75%+ indigenous, built by MDL) \u2014 at Visakhapatnam.',
      'Catch-up from July 11: Sourav Ganguly, Anjum Chopra and Kevin Pietersen were inducted into the ICC Hall of Fame (Class of 2026) in Edinburgh, taking total members to 125.',
      'Catch-up from July 12: all five Indian students won gold at the 56th International Physics Olympiad in Bucaramanga, Colombia \u2014 India finished joint World No. 1.',
      'Catch-up from July 12: ISRO completed key Gaganyaan Crew Module qualification tests, including the Crew Module Uprighting System (CMUS) and the CM\u2013SM Connect-Disconnect System.',
      'Catch-up from July 11: legendary playback singer S. Janaki, the \u201cNightingale of South India\u201d and four-time National Film Award winner, passed away in Mysuru at 88.',
    ],
  },
  /* ═══ July 6–12, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-july-6-12-2026',
    title:
      'Weekly Current Affairs: July 6\u201312, 2026 \u2014 PM Modi\u2019s Three-Nation Tour, $600 Million BrahMos-Astra Deal with Indonesia, Bintang Adipurna Honour, EPFO CITES 2.01, Pinaka LRGR Test & Sinner-Noskova Win Wimbledon',
    dateRange: 'July 6\u201312, 2026',
    publishedDate: 'July 13, 2026',
    category: 'All',
    excerpt:
      'This week: PM Modi completes a three-nation tour of Indonesia, Australia and New Zealand; India and Indonesia sign a $600 million-plus BrahMos-Astra missile deal; Modi becomes the second Indian PM after Nehru to receive Indonesia\u2019s highest honour, the Bintang Republik Indonesia Adipurna; an India-Australia arrangement enables Australian uranium supply; India and New Zealand elevate ties to a Strategic Partnership; DRDO flight-tests the Pinaka LRGR at 60 km; EPFO launches CITES 2.01 with FY26 interest (8.25%) due by July 15; the IMF trims India\u2019s FY27 forecast to 6.4%; Jaipur ranks 6th on the Happy City Index 2026; Jannik Sinner and Linda Noskova win Wimbledon; and Lord\u2019s hosts its first-ever women\u2019s Test.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'July 6\u201312, 2026',
    newsItems: jul06_12_newsItems,
    staticGkBox: jul06_12_staticGk,
    quiz: jul06_12_quiz,
    keyPoints: [
      'PM Modi undertook a three-nation tour of Indonesia (July 6\u20138), Australia (July 8\u201310) and New Zealand (July 10\u201311), advancing the Act East Policy and MAHASAGAR Vision.',
      'India and Indonesia announced 20 outcomes in Jakarta on July 7, headlined by a $600 million-plus deal for BrahMos cruise missiles and Astra air-to-air missiles \u2014 Indonesia becomes the third BrahMos export customer.',
      'PM Modi was conferred Indonesia\u2019s highest honour, the Bintang Republik Indonesia Adipurna \u2014 only the second Indian PM after Jawaharlal Nehru (1995).',
      'The India-Australia summit in Melbourne delivered 18 outcomes, including an administrative arrangement under the Civil Nuclear Agreement enabling Australian uranium supply to India and the return of three Tamil Nadu-origin antiquities.',
      'India and New Zealand elevated ties to a Strategic Partnership with a \u201cRoadmap to 2030\u201d and a target to double trade to NZD 7 billion by 2030 \u2014 the first Indian PM visit to NZ in 40 years.',
      'DRDO successfully flight-tested the Pinaka Long Range Guided Rocket (LRGR) at ITR Chandipur on July 8, hitting a target at a user-defined 60 km range.',
      'EPFO launched the CITES 2.01 platform on July 8; FY 2025\u201326 EPF interest at 8.25% (\u20B91.44 lakh crore across ~34 crore accounts) will be credited by July 15, and the auto-settlement limit rose from \u20B91 lakh to \u20B95 lakh.',
      'The IMF\u2019s July WEO Update trimmed India\u2019s FY27 growth forecast to 6.4%; India\u2019s GDP grew 7.7% in FY26.',
      'The RBI approved Mahesh Muralidhar Pai as MD & CEO of South Indian Bank (from October 1, 2026) and re-approved N.S. Vishwanathan as Axis Bank\u2019s part-time Chairman.',
      'The UDISE+ 2025\u201326 report recorded 1,02,73,020 school teachers (up 8.3%) with dropout rates falling across all levels.',
      'Jaipur ranked 6th on the Happy City Index 2026 \u2014 the only Indian city in the top 10; Sweden topped the GCS Global Passport Index 2026 with India at 125th.',
      'Catch-up from July 4: PM Modi dedicated India\u2019s first greenfield refinery-cum-petrochemical complex at Pachpadra, Rajasthan (\u20B979,450+ crore, 9 MMTPA, HPCL-Rajasthan JV) and launched the Modified UDAN Scheme.',
      'Jannik Sinner (5th Grand Slam) and Linda Noskova (first Grand Slam, all-Czech final) won the Wimbledon 2026 singles titles; Lord\u2019s hosted its first-ever women\u2019s Test from July 10, with India scoring 285 on Day 1.',
      'West Bengal\u2019s Chandannagar Jalbhara sweet received a GI tag, taking India\u2019s GI total to 822.',
    ],
  },
  /* ═══ June 29 – July 5, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-june-29-july-5-2026',
    title:
      'Weekly Current Affairs: June 29 \u2013 July 5, 2026 \u2014 VB-G RAM G Replaces MGNREGA, 16th India-Japan Summit, Air Marshal Ashutosh Dixit New Air Vice Chief, Vikram Misri Extension & Vaibhav Sooryavanshi\u2019s Record India Debut',
    dateRange: 'June 29 \u2013 July 5, 2026',
    publishedDate: 'July 6, 2026',
    category: 'All',
    excerpt:
      'This week: the VB\u2013G RAM G Act, 2025 replaces MGNREGA from July 1 with a 125-day rural job guarantee; Japanese PM Sanae Takaichi visits New Delhi for the 16th India-Japan Annual Summit; Air Marshal Ashutosh Dixit becomes the 51st Vice Chief of the Air Staff; Foreign Secretary Vikram Misri gets a one-year extension; the RBI names Ravi Shankar as Executive Director; Sunil Bharti Mittal receives the 2026 USISPF Leadership Award; 15-year-old Vaibhav Sooryavanshi becomes India\u2019s youngest international cricket debutant; and India observes the 20th National Statistics Day, National Doctors\u2019 Day, and nine years of GST.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'June 29 \u2013 July 5, 2026',
    newsItems: jun29_jul05_newsItems,
    staticGkBox: jun29_jul05_staticGk,
    quiz: jun29_jul05_quiz,
    keyPoints: [
      'The Viksit Bharat\u2013G RAM G Act, 2025 came into force on July 1, 2026, repealing MGNREGA (2005) and raising the rural wage-employment guarantee from 100 to 125 days per household per year, with a \u20B9300 daily floor wage and a \u20B995,692.31 crore allocation for FY 2026\u201327.',
      'Japanese PM Sanae Takaichi (Japan\u2019s first female PM) made her first official visit to India (July 1\u20133) for the 16th India-Japan Annual Summit; the two sides adopted joint statements on Economic Security, Artificial Intelligence, and Energy Resilience.',
      'Air Marshal Ashutosh Dixit assumed charge as the 51st Vice Chief of the Air Staff on July 1, 2026, succeeding Air Marshal Nagesh Kapoor.',
      'The Appointments Committee of the Cabinet extended Foreign Secretary Vikram Misri\u2019s tenure by one year, up to July 14, 2027.',
      'The RBI appointed Ravi Shankar as Executive Director (effective July 1) to head the Department of Statistics and Information Management (DSIM).',
      'Sunil Bharti Mittal, Founder and Chairman of Bharti Enterprises, received the 2026 USISPF Leadership Award at the ninth USISPF Annual Leadership Summit in Washington, D.C.',
      '15-year-old Vaibhav Sooryavanshi became India\u2019s youngest international debutant (15 years, 99 days) in the 2nd T20I vs England at Old Trafford on July 4, surpassing Sachin Tendulkar.',
      'India observed the 20th National Statistics Day (June 29) with the theme \u201cUnlocking the Potential of Administrative Data,\u201d honouring P.C. Mahalanobis.',
      'National Doctors\u2019 Day (July 1) was observed with the theme \u201cBehind the Mask: Who Heals the Healers?\u201d, commemorating Dr. B.C. Roy.',
      'GST Day (July 1) marked nine years since the Goods and Services Tax was rolled out on July 1, 2017.',
    ],
  },
  /* ═══ NEW: June 22–28, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-june-22-28-2026',
    title:
      'Weekly Current Affairs: June 22\u201328, 2026 \u2014 BRICS NSA & Energy Meetings, Padma Awards 2026, CPCL 28th Navratna, ISRO Semi-Cryogenic Test, Mahesh Dixit New IB Chief & Alan Greenspan Dies',
    dateRange: 'June 22\u201328, 2026',
    publishedDate: 'June 29, 2026',
    category: 'All',
    excerpt:
      'This week: India hosts the BRICS National Security Advisers\u2019 Meeting (chaired by Ajit Doval) and the 11th BRICS Energy Ministers\u2019 Meeting in Gurugram; President Murmu confers 65 Padma Awards at the second 2026 investiture; CPCL becomes India\u2019s 28th Navratna CPSE; the MHA amends the FCRA Rules for NGOs; Amit Shah launches NAFEX.in and the Narcotics Control Vision Document 2026\u201329; ISRO hot-tests its semi-cryogenic engine at 175 tonnes; India becomes the world\u2019s top ship-recycling nation (35.4%); Mahesh Dixit is named the new IB Director; the DGCA conducts the first GAGAN-based jet landing at Udaipur; and former US Fed Chairman Alan Greenspan dies at 100.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'June 22\u201328, 2026',
    newsItems: jun22_28_newsItems,
    staticGkBox: jun22_28_staticGk,
    quiz: jun22_28_quiz,
    keyPoints: [
      'India hosted the BRICS National Security Advisers\u2019 Meeting (June 22\u201323), chaired by NSA Ajit Doval under India\u2019s 2026 BRICS Presidency, and the 11th BRICS Energy Ministers\u2019 Meeting in Gurugram (June 25\u201326), themed \"Sarveshaam Urjam (Energy for All)\".',
      'The Ministry of Home Affairs amended the Foreign Contribution (Regulation) Rules, 2011 via a gazette notification on June 22, tightening disclosure norms for NGOs receiving foreign funds.',
      'Chennai Petroleum Corporation Ltd (CPCL) became India\u2019s 28th Navratna CPSE, granted by the Finance Ministry / Department of Public Enterprises.',
      'President Droupadi Murmu conferred 65 Padma Awards (2 Vibhushan, 7 Bhushan, 56 Shri) at the second 2026 Civil Investiture Ceremony on June 23; Padma Bhushan recipients included Mammootty, Alka Yagnik, Vijay Amritraj, Uday Kotak, and Piyush Pandey.',
      'Tushar Mehta was reappointed Solicitor General of India for three years from July 1, 2026 (approved by the ACC).',
      'Amit Shah launched NAFEX.in (a NAFED digital auction platform) on June 23, plus the NAFED-KALYAN Scholarship Scheme and the DRISHTI Portal.',
      'ISRO conducted the 8th hot test of its semi-cryogenic engine power head at 175 tonnes thrust (88% of target) at IPRC, Mahendragiri, on June 24 \u2014 the SE2000 engine will replace the L110 core stage of the LVM3.',
      'India became the world\u2019s leading ship-recycling nation with a 35.4% global share in 2025 (UNCTAD report), meeting the Maritime India Vision 2030 target five years early.',
      'Senior IPS officer Mahesh Dixit (1993 batch) was appointed the new Director of the Intelligence Bureau, succeeding Tapan Kumar Deka.',
      'Amit Shah launched the Vision Document on Narcotics Control (2026\u20132029) at the 10th NCORD apex-level meeting on June 27.',
      'The DGCA conducted India\u2019s first GAGAN-based satellite landing approach on a jet aircraft (an IndiGo Airbus A320) at Udaipur on June 27.',
      'Former US Federal Reserve Chairman Alan Greenspan \u2014 the \"Maestro\" who led the Fed from 1987 to 2006 \u2014 died on June 22, 2026, aged 100.',
      'Important days this week: World Rainforest Day (June 22), International Olympic Day (June 23), International Day of Women in Diplomacy (June 24), and Day of the Seafarer (June 25).',
    ],
  },
  /* ═══ NEW: June 15–21, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-june-15-21-2026',
    title:
      'Weekly Current Affairs: June 15\u201321, 2026 \u2014 G7 Summit in \u00C9vian, India\u2013EU FTA by 2026, Bimal Patel Elected to ITLOS, 12th Yoga Day, INS Dunagiri Commissioned & India Win FIH Women\u2019s Nations Cup',
    dateRange: 'June 15\u201321, 2026',
    publishedDate: 'June 23, 2026',
    category: 'All',
    excerpt:
      'This week: India joins the 52nd G7 Summit in \u00C9vian (France) as a Partner Country and reaffirms the India\u2013EU FTA will be signed by end-2026; jurist Bimal N. Patel is elected to ITLOS; Hitesh Joshi becomes CMD of GIC Re; PM Modi disburses \u20B92,400 crore under PM-VBRY and commissions INS Dunagiri, INS Sanshodhak and INS Agray in Kolkata; the 12th International Day of Yoga is observed with the theme "Yoga for Healthy Ageing"; India\u2019s women win the FIH Nations Cup; and Vaibhav Sooryavanshi hits the fastest fifty in List A history.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'June 15\u201321, 2026',
    newsItems: jun15_21_newsItems,
    staticGkBox: jun15_21_staticGk,
    quiz: jun15_21_quiz,
    keyPoints: [
      'The 52nd G7 Summit was held in \u00C9vian-les-Bains, France (June 15\u201317, 2026); India attended as a Partner Country and PM Modi joined the outreach sessions.',
      'India and the EU reaffirmed (June 17) they will sign their concluded Free Trade Agreement by the end of 2026; it will cut tariffs on 99% of Indian exports to the EU.',
      'Indian jurist Bimal N. Patel was elected a Judge of the International Tribunal for the Law of the Sea (ITLOS) for the 2026\u20132035 term; he takes office on October 1, 2026.',
      'Hitesh Rameshchandra Joshi was appointed Chairman-cum-Managing Director (CMD) of GIC Re, India\u2019s national reinsurer, effective June 16, 2026.',
      'PM Modi disbursed around \u20B92,400 crore under the Pradhan Mantri Viksit Bharat Rozgar Yojana (PM-VBRY) on June 19, supporting 15 lakh jobs (scheme outlay: \u20B999,446 crore).',
      'The 12th International Day of Yoga (June 21) was observed with the theme "Yoga for Healthy Ageing"; PM Modi led the main event from Red Road, Kolkata.',
      'PM Modi commissioned three indigenous GRSE-built warships \u2014 INS Dunagiri (Project 17A stealth frigate), INS Sanshodhak (survey vessel) and INS Agray (anti-submarine warfare craft) \u2014 in Kolkata on June 21.',
      'India\u2019s women\u2019s hockey team won the FIH Women\u2019s Nations Cup 2025-26, beating New Zealand 2-0 in the Auckland final, and earned promotion to the FIH Pro League.',
      'India\u2019s men\u2019s hockey team beat the Netherlands 3-2 in Rotterdam in the FIH Pro League on June 21 (Player of the Match: Hardik Singh).',
      '15-year-old Vaibhav Sooryavanshi hit the fastest fifty in List A cricket history (11 balls) in the India A vs Sri Lanka A tri-series final, scoring 94 off 29 balls.',
      'On June 19, the RBI issued the final revised Kisan Credit Card (KCC) Directions, 2026, applicable from January 1, 2027 (deferred from the proposed July 1, 2026).',
    ],
  },
  /* ═══ NEW: June 8–14, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-june-08-14-2026',
    title: 'Weekly Current Affairs: June 8\u201314, 2026 \u2014 US-Iran Ceasefire Deal, Lt Gen Dhiraj Seth Next COAS, Varya AI Model Launch, FIFA WC 2026 Begins, Bharat Innovates 2026 & IAF AN-32 Crash',
    dateRange: 'June 8\u201314, 2026',
    publishedDate: 'June 15, 2026',
    category: 'All',
    excerpt:
      'This week: US and Iran reach ceasefire (Pakistan-mediated) to reopen the Strait of Hormuz, Lt Gen Dhiraj Seth appointed next COAS, India launches Varya (first distilled video AI model), FIFA World Cup 2026 group stage kicks off with Qatar-Switzerland and Brazil-Morocco draws, PM Modi and Macron inaugurate Bharat Innovates 2026 in Nice, IAF AN-32 crashes in Jorhat killing five, Dinesh Trivedi assumes charge as HC to Bangladesh, EU proposes 21st Russia sanctions package, and SC dismisses Meenakshi Natarajan\u2019s Rajya Sabha plea.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'June 8\u201314, 2026',
    newsItems: jun08_14_newsItems,
    staticGkBox: jun08_14_staticGk,
    quiz: jun08_14_quiz,
    keyPoints: [
      'The United States and Iran reached a ceasefire agreement (announced June 11\u201314, 2026), mediated by Pakistan, ending the West Asia conflict and reopening the Strait of Hormuz to toll-free shipping.',
      'Lt Gen Dhiraj Seth appointed the next (31st) Chief of Army Staff, effective June 30, 2026, succeeding General Upendra Dwivedi. He is the first Armoured Corps officer to head the army since 1997.',
      'India launched Varya, the country\u2019s first distilled video-generation AI model, built by startup Avataar under the IndiaAI Mission. Cost: \u20B90.48/second \u2014 up to 10x cheaper than global rivals.',
      'FIFA World Cup 2026 group stage began \u2014 Qatar drew 1\u20131 with Switzerland (Group B), Morocco held Brazil 1\u20131 at MetLife Stadium (Group C).',
      'PM Modi and French President Macron inaugurated Bharat Innovates 2026 in Nice, France (June 14), showcasing 120 Indian deep-tech startups and ~20 Institutes of Excellence across 13 technology sectors.',
      'Five IAF personnel killed in AN-32 transport aircraft crash during landing at Rowriah Air Force Station, Jorhat, Assam. Court of Inquiry constituted.',
      'European Commission proposed its 21st sanctions package against Russia (June 9), targeting energy, financial services, crypto, trade, and fisheries \u2014 including third-country entities in India, China, T\u00FCrkiye, Kazakhstan, and the UAE.',
      'Dinesh Trivedi assumed charge as India\u2019s High Commissioner to Bangladesh in Dhaka on June 12, 2026 \u2014 the first political appointee to this post in over three decades.',
      'Supreme Court on June 12 refused to stall the Madhya Pradesh Rajya Sabha election after Congress leader Meenakshi Natarajan\u2019s nomination was rejected, citing Article 329.',
      'India and Nepal held the 10th Project Steering Committee and 8th Joint Working Group meetings in Kathmandu (June 11\u201312) on cross-border railway connectivity on the Janakpur\u2013Ayodhya section.',
      'Union Petroleum Minister Hardeep Singh Puri announced that India\u2019s fuel prices dropped by ~3.1% from May 2022 to May 2026 despite global volatility from the West Asia conflict.',
      'Centre announced a resettlement census in Great Nicobar Island for the holistic development project, including the International Transshipment Terminal and greenfield city.',
      'Gold and silver prices surged across Indian markets on June 12, 2026, on easing inflation concerns following the West Asia diplomatic breakthrough.',
    ],
  },
  /* ═══ NEW: June 1–7, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-june-01-07-2026',
    title: 'Weekly Current Affairs: June 1\u20137, 2026 \u2014 India\u2019s 100th Ramsar Site, RBI Holds Repo Rate at 5.25%, Praggnanandhaa Wins Norway Chess, GDP Growth 7.7%, Project Kusha Air Defence & UNSC Elections',
    dateRange: 'June 1\u20137, 2026',
    publishedDate: 'June 8, 2026',
    category: 'All',
    excerpt:
      'This week: Surha Taal becomes India\u2019s 100th Ramsar Site on World Environment Day, RBI MPC unanimously holds repo rate at 5.25%, NSO reports 7.7% GDP growth for FY26, Praggnanandhaa wins historic Norway Chess title, Major Abhilasha Barak wins UN Military Gender Advocate Award, Germany abolishes transit visa for Indians, UNGA elects 5 new non-permanent UNSC members (including Kyrgyzstan\u2019s first-ever seat), Project Kusha air defence progresses, Zorawar light tank showcased, and India\u2019s market cap drops to 7th globally.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: false,
    weekRange: 'June 1\u20137, 2026',
    newsItems: jun01_07_newsItems,
    staticGkBox: jun01_07_staticGk,
    quiz: jun01_07_quiz,
    keyPoints: [
      'Surha Taal (Jai Prakash Narayan Bird Sanctuary) in Ballia, Uttar Pradesh, designated as India\u2019s 100th Ramsar Site on World Environment Day (June 5). UP now has 13 Ramsar Sites.',
      'RBI MPC voted unanimously to keep the policy repo rate unchanged at 5.25%. SDF at 5.00%, MSF/Bank Rate at 5.50%.',
      'NSO provisional estimates: India\u2019s real GDP grew at 7.7% for FY 2025-26. Q4 growth at 7.8%, GVA growth at 7.9%.',
      'Rameshbabu Praggnanandhaa became the first Indian to win the Norway Chess title (Oslo, June 5, 2026).',
      'Major Abhilasha Barak conferred the UN Military Gender Advocate of the Year Award (June 6).',
      'Germany abolished airport transit visa (Type A) requirement for Indian citizens (effective June 3).',
      'UNGA elected 5 non-permanent UNSC members: Austria, Kyrgyzstan, Portugal, Trinidad and Tobago, Zimbabwe. Kyrgyzstan\u2019s first-ever seat. Term starts January 1, 2027.',
      'India\u2019s market capitalization slipped to 7th globally (USD 4.84 trillion), overtaken by South Korea (USD 5.01 trillion).',
      'Justice V. Mohana sworn in as 12th woman judge in the history of the Supreme Court of India (June 2).',
      'Union Cabinet approved \u20B99,585 crore two-year scheme to replace 2.07 lakh old commercial vehicles in Delhi-NCR with BS-VI or electric vehicles.',
      'Project Kusha long-range air defence system progresses: 3 interceptor variants (M1: 120\u2013150 km, M2: ~250 km, M3: up to 400 km). Induction: 2028\u20132030.',
      'Indigenous 25-tonne Zorawar light tank and Tejastra counter-drone directed energy weapon showcased in Gujarat.',
      'India & US held 29th Army-to-Army Staff Talks in Hawaii at US Indo-Pacific Command HQ.',
      'SIDE Report 2026: India ranked 5th most digitalized economy and 4th on AI Capability Index globally.',
      'Dr. Subhash C. Kashyap, former Lok Sabha Secretary-General and constitutional expert, passed away at age 97.',
    ],
  },
  /* ═══ NEW: May 25–31, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-may-25-31-2026',
    title: 'Weekly Current Affairs: May 25\u201331, 2026 \u2014 Assam Passes UCC Bill, New CDS Gen. Raja Subramani, India-US Critical Minerals Pact, Karnataka CM Change & PSG Retains Champions League',
    dateRange: 'May 25\u201331, 2026',
    publishedDate: 'June 1, 2026',
    category: 'All',
    excerpt:
      'This week: Assam becomes third state to pass a Uniform Civil Code Bill, General N.S. Raja Subramani takes charge as India\u2019s 3rd CDS, India-US sign critical minerals cooperation framework at Quad FM meet, D.K. Shivakumar named Karnataka CM after Siddaramaiah resigns, Supreme Court orders Yamuna cleaning committee, RBI reports $30.8B BoP deficit, cotton import duty exempted, PSG wins Champions League, and Padma Awards investiture at Rashtrapati Bhavan.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'May 25\u201331, 2026',
    newsItems: may25_31_newsItems,
    staticGkBox: may25_31_staticGk,
    quiz: may25_31_quiz,
    keyPoints: [
      'General N.S. Raja Subramani officially took charge as India\u2019s 3rd Chief of Defence Staff on May 31, 2026.',
      'Assam Assembly passed the Uniform Civil Code Bill 2026 on May 27 \u2014 3rd state after Uttarakhand and Gujarat. Scheduled Tribes (12.45% of population) exempted.',
      'India and the United States signed a critical minerals cooperation framework on May 26, 2026, to secure rare earth supply chains.',
      'Quad Foreign Ministers met at Hyderabad House, New Delhi (May 26), hosted by EAM S. Jaishankar with US, Australia, and Japan counterparts.',
      'Supreme Court constituted a committee under Union Home Secretary to formulate a Yamuna Action Plan (8-week deadline).',
      'Central government set up a high-level committee on demographic change under retired SC Justice Prakash Prabhakar Naolekar.',
      'Karnataka CM Siddaramaiah resigned on May 28; D.K. Shivakumar named successor, swearing-in on June 3, 2026.',
      'Union Finance Ministry exempted all customs duties on cotton imports from June 1 to October 31, 2026.',
      'Paris Saint-Germain won 2nd consecutive UEFA Champions League title, defeating Arsenal 4\u20133 on penalties in Budapest.',
      'RBI data: Balance of Payments deficit reached $30.8 billion for FY 2025\u201326 \u2014 six-fold increase from previous year.',
      'Padma Awards investiture: Dharmendra (Padma Vibhushan, posthumous), N. Rajam (Padma Vibhushan), Uday Kotak (Padma Bhushan).',
      'Cabinet approved SARTHAK-PDS scheme extension (\u20B925,530 crore central outlay) for five years.',
      'Union Minister Shivraj Singh Chouhan launched his book Apnapan on May 26, 2026.',
      'BSE Sensex fell 1,092 points on May 29 over below-normal monsoon concerns.',
      'Indian shooter Esha Singh set a world record (43/50) at the ISSF World Cup Munich on May 27, winning gold in Women\u2019s 25m Pistol.',
    ],
  },
  /* ═══ NEW: May 18–24, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-may-18-24-2026',
    title: 'Weekly Current Affairs: May 18\u201324, 2026 \u2014 Gaganyaan G-1 Cleared, Chandrayaan-3 Wins Goddard Award, PM Modi\u2019s Nordic Summit & Record-Breaking Athletics',
    dateRange: 'May 18\u201324, 2026',
    publishedDate: 'May 25, 2026',
    category: 'All',
    excerpt:
      'This week: Gaganyaan G-1 unmanned mission cleared for launch, Chandrayaan-3 wins the 2026 Goddard Astronautics Award, PM Modi attends Third India-Nordic Summit and receives the FAO Agricola Medal, Agni-1 tested, Suryastra 300-km rocket system flagged off, VD Satheesan sworn in as Kerala CM, and a record-breaking week at the Senior Athletics Federation Cup in Ranchi.',
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'May 18\u201324, 2026',
    newsItems: may18_24_newsItems,
    staticGkBox: may18_24_staticGk,
    quiz: may18_24_quiz,
    keyPoints: [
      'Gaganyaan G-1 unmanned mission cleared by National Review Committee; launch expected within 3\u20134 months from May 24, 2026.',
      'Chandrayaan-3 lunar mission wins the 2026 Goddard Astronautics Award from the American Institute of Aeronautics and Astronautics (AIAA) in Washington DC.',
      'PM Modi attends Third India-Nordic Summit in Oslo (May 19) with all five Nordic nations (Norway, Sweden, Finland, Iceland, Denmark); bilateral upgraded to Green Technology and Innovation Strategic Partnership.',
      'PM Modi receives Grand Cross of the Royal Norwegian Order of Merit (Oslo, May 18) and FAO Agricola Medal (Rome, May 20) — 2nd Indian PM after Manmohan Singh (2008) to win the Agricola Medal.',
      'India-Norway Business and Research Summit held in Oslo on May 18, focusing on deep-sea mining, offshore wind, and marine resources.',
      'Cyprus President Nikos Christodoulides makes official state visit to India; joint declaration signed (May 22).',
      'Agni-1 short-range ballistic missile successfully test-fired from Chandipur, Odisha (May 22).',
      'Defence Minister Rajnath Singh flags off Suryastra \u2014 India\u2019s first 300-km Universal Rocket Launching System \u2014 at Shirdi (May 23).',
      'VD Satheesan (UDF/Congress) sworn in as Chief Minister of Kerala on May 18, 2026.',
      'NITI Aayog convenes first Education-to-Employment Committee meeting under CEO Smt. Nidhi Chibber (May 22).',
      "Historic week at Senior Athletics Federation Cup, Ranchi: Gurindervir Singh clocks 10.09s (men's 100m NR, first Indian under 10.10s); Vishal TK clocks 44.98s (400m NR, first Indian under 45s); Tejaswin Shankar scores 8,057 pts (decathlon NR, first Indian above 8,000); Dev Meena & Kuldeep Kumar clear 5.45m (joint pole vault NR).",
      '19th Rozgar Mela: PM distributes 51,000+ appointment letters via video conferencing (May 23).',
      'International Day for Biological Diversity observed on May 22; theme: \u201cActing Locally for Global Impact.\u201d',
    ],
  },
  /* ═══ NEW: May 11–17, 2026 (Rich Format) ═══ */
  {
    slug: 'weekly-current-affairs-may-11-17-2026',
    title: 'Weekly Current Affairs: May 11\u201317, 2026 \u2014 India-Netherlands Semiconductor Pact, WHO Ebola PHEIC & Amit Shah\'s WB Age Relaxation Clarified',
    dateRange: 'May 11\u201317, 2026',
    publishedDate: 'May 18, 2026',
    category: 'All',
    excerpt: "This week: Amit Shah's age relaxation promise clarified (West Bengal state jobs, not central SSC), India-Netherlands semiconductor deal with ASML-Tata, WHO declares Ebola PHEIC, first Made-in-India C-295 ready for flight, CCPA cracks down on e-commerce and coaching institutes, and Kami Rita Sherpa's 32nd Everest summit.",
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: true,
    weekRange: 'May 11\u201317, 2026',
    newsItems: may11_17_newsItems,
    staticGkBox: may11_17_staticGk,
    quiz: may11_17_quiz,
    keyPoints: [
      'CLARIFICATION: Amit Shah\'s "5-year age relaxation for SSC candidates" (March 2026 WB rally) referred to West Bengal School Service Commission (state jobs) — NOT the central Staff Selection Commission. No central SSC notification issued; check ssc.gov.in for official rules.',
      'India-Netherlands summit: ASML\u2013Tata Electronics semiconductor pact aligns with India Semiconductor Mission.',
      'WHO declares Ebola outbreak in DRC and Uganda a Public Health Emergency of International Concern (PHEIC).',
      'First Made-in-India Airbus C-295 transport aircraft ready for flight testing at Tata-Airbus facility in Vadodara.',
      'CCPA penalises coaching institutes for misleading ads; issues notices to Amazon, Flipkart over herbicide sales.',
      "Sikkim celebrates 51st Statehood Day \u2014 became India's 22nd state via 36th Amendment (1975).",
      'Delhi announces \u20b910 crore collateral-free loans for women-led startups and SHGs.',
      'Kami Rita Sherpa scales Everest for a record 32nd time.',
      "India's first Integrated CCUS Field Lab inaugurated by Union Education Minister Dharmendra Pradhan at IIT Bombay under 'Bharat Innovates 2026'.",
      'CAFE III emission norms for passenger vehicles expected by end of May 2026.',
    ],
  },
  /* ═══ ORIGINAL POSTS (preserved verbatim from repo) ═══ */
  {
    slug: 'weekly-current-affairs-may-4-10-2026',
    title: 'Weekly Current Affairs: May 4–10, 2026 — Press Freedom Index, SC Judges Bill & Kerala Election Results',
    dateRange: 'May 4–10, 2026',
    publishedDate: 'May 11, 2026',
    category: 'National',
    excerpt:
      "This week: India slips to 157th in World Press Freedom Index, Cabinet clears SC Judges Amendment Bill (33→37), UDF sweeps Kerala with 102 seats ending LDF's decade-long rule, NSE launches Electronic Gold Receipts, and RBI appoints new Deputy Governor.",
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: false,
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
    isFeatured: false,
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

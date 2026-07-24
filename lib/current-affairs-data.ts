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
  /** Set only when an archived post is materially corrected/updated. Drives sitemap lastModified. */
  updatedDate?: string;
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
    slug: 'weekly-current-affairs-april-27-may-4-2026',
    title: "Weekly Roundup: Census 2027, Ladakh's New Districts & Army Appointments",
    dateRange: 'April 27 – May 4, 2026',
    publishedDate: 'May 4, 2026',
    updatedDate: '2026-07-24',
    category: 'National',
    excerpt:
      "This week: India launches its first-ever Digital Census 2027, Ladakh gets 5 new districts, Lt Gen Dhiraj Seth appointed Vice Chief of Army, and Shekha Jheel becomes India's 99th Ramsar Site.",
    targetExams: ['UPSC', 'SSC CGL', 'IBPS PO', 'RRB NTPC', 'State PSC'],
    isFeatured: false,
    keyPoints: [
      "Census 2027 — India's first-ever fully digital Census — moves into its operational phase.",
      'Census 2027 mascots "Pragati" (female enumerator, Progress) and "Vikas" (male enumerator, Development) were unveiled on 5 March 2026 by Home Minister Amit Shah.',
      'Self-Enumeration is available in 16 languages via the official portal se.census.gov.in.',
      'Census 2027 reference date: 1 March 2027 (1 October 2026 for snow-bound areas). First Census to enumerate caste since 1931.',
      'LG Vinai Kumar Saxena notified 5 new districts in Ladakh on 27 April 2026: Nubra, Sham, Changthang, Zanskar and Drass.',
      'Ladakh now has 7 total districts — 3 carved out of Leh and 2 out of Kargil, up from just Leh and Kargil previously.',
      'Lt Gen Dhiraj Seth became Vice Chief of the Army Staff on 1 April 2026 — and has since been appointed Chief of the Army Staff with effect from 30 June 2026.',
      'Ashwini Bhide became the first-ever female Commissioner of BMC (Brihanmumbai Municipal Corporation) on 31 March 2026.',
      "Shekha Jheel Bird Sanctuary (Aligarh, UP) was designated India's 99th Ramsar Site on 22 April 2026.",
      'Tamil Nadu has the highest number of Ramsar sites in India (20) — NOT Uttar Pradesh. India crossed 100 Ramsar sites on 5 June 2026.',
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
      {
        question: 'Which Indian state has the highest number of Ramsar sites?',
        options: ['Uttar Pradesh', 'Tamil Nadu', 'Kerala', 'West Bengal'],
        answer: 'Tamil Nadu',
      },
      {
        question: 'Who took over as Chief of the Army Staff with effect from 30 June 2026?',
        options: [
          'Gen Upendra Dwivedi',
          'Lt Gen Sandeep Jain',
          'Gen Dhiraj Seth',
          'Lt Gen Pushpendra Pal Singh',
        ],
        answer: 'Gen Dhiraj Seth',
      },
    ],
    content: `
**Fact-check update — 24 July 2026:** This archive page has been re-verified against official sources. One factual error has been corrected (the state with the most Ramsar sites), and two items have changed since this issue was first published — the Army Vice Chief and India's Ramsar site count. Look for the Correction and Update notes below, and study those versions.

## National Affairs

**Commencement of Census 2027**
Census 2027 is the country's first-ever fully digital Census. It was originally due in 2021 but was postponed because of the COVID-19 pandemic. The Government notified its intent to conduct it through a Gazette Notification on 16 June 2025. On 5 March 2026, Union Home Minister Amit Shah unveiled the two official mascots and soft-launched four digital tools developed by C-DAC: the Houselisting Block Creator web application, the HLO mobile application, the Self-Enumeration Portal and the Census Management and Monitoring System.

The mascots are "Pragati", a female enumerator representing progress, and "Vikas", a male enumerator representing development. Together they symbolise the equal participation of women and men in building a developed India by 2047.

A Self-Enumeration facility is available in 16 languages through the official portal se.census.gov.in. Households can submit their own details before the door-to-door visit, and a unique identification number is generated on submission for the enumerator to verify. President Droupadi Murmu and Vice President C. P. Radhakrishnan both self-enumerated on 1 April 2026.

Census 2027 runs in two phases — Houselisting and Housing Census (April to September 2026) and Population Enumeration (February 2027) — and will engage more than 30 lakh enumerators, supervisors and officials, making it the world's largest census exercise. The reference date is 1 March 2027 for most States and Union Territories, and 1 October 2026 for snow-bound areas. It will also be the first Census since 1931 to enumerate caste.

**Exam pointers:** This will be India's 16th Census, and the first since 2011. It is conducted under the Census Act, 1948 and the Census Rules, 1990, by the Office of the Registrar General and Census Commissioner under the Ministry of Home Affairs. The Registrar General and Census Commissioner of India is Mritunjay Kumar Narayan. India's first non-synchronous Census was held in 1872 under Lord Mayo; the first synchronous Census was in 1881.

*Why it matters for exams: Demography, Social Issues — UPSC GS Paper 1, SSC CGL General Awareness, State PSC prelims.*

---

**5 New Districts Created in Ladakh**
Lieutenant Governor Vinai Kumar Saxena notified the creation of 5 new districts in the Union Territory of Ladakh on 27 April 2026. The new districts are Nubra, Sham, Changthang, Zanskar and Drass. Prior to this, Ladakh had only 2 districts — Leh and Kargil. With this addition, Ladakh now has a total of 7 districts.

Three of the new districts were carved out of Leh — Nubra (headquarters: Diskit), Sham (Khaltse) and Changthang (Nyoma). Two were carved out of Kargil — Zanskar (Padum) and Drass (Drass-Ranbirpura). The Ministry of Home Affairs had approved the proposal in August 2024; this notification gave it legal effect and also defined the territorial limits of all seven districts.

Context: Ladakh was carved out as a separate Union Territory from Jammu and Kashmir on 31 October 2019 under the Jammu and Kashmir Reorganisation Act, 2019.

**Note for aspirants:** Vinai Kumar Saxena took oath as the 4th Lieutenant Governor of Ladakh on 13 March 2026, succeeding Kavinder Gupta. He was previously the Lieutenant Governor of Delhi from 2022 to 2026, so older notes may still list him under Delhi.

*Why it matters: Geography and Polity — direct question potential for SSC CGL, SSC CPO, and State PSC geography/polity sections.*

---

## Appointments

**New Vice Chief of the Indian Army**
Lt Gen Dhiraj Seth assumed charge as the 49th Vice Chief of the Army Staff (VCOAS) on 1 April 2026, succeeding Lt Gen Pushpendra Pal Singh. The Vice Chief of Army Staff is the second highest position in the Indian Army, after the Chief of the Army Staff.

**Update (July 2026):** Lt Gen Dhiraj Seth has since been appointed Chief of the Army Staff with effect from the afternoon of 30 June 2026, succeeding General Upendra Dwivedi, who retired the same day. An alumnus of the National Defence Academy, he was commissioned into the Armoured Corps in December 1986 and is the first Armoured Corps officer to head the Indian Army since 1997. Lt Gen Sandeep Jain, of the Mahar Regiment, took over as Vice Chief of the Army Staff on 1 July 2026. For any exam held after June 2026, the correct answers are: Chief of the Army Staff — General Dhiraj Seth; Vice Chief of the Army Staff — Lt Gen Sandeep Jain.

**First Female BMC Commissioner**
Ashwini Bhide, a 1995-batch IAS officer, took charge as Municipal Commissioner of the Brihanmumbai Municipal Corporation (BMC) on 31 March 2026, becoming the first woman to hold the post in the civic body's more than 160-year history. She succeeded Bhushan Gagrani and was picked by Chief Minister Devendra Fadnavis. She continues to hold additional charge as Managing Director of the Mumbai Metro Rail Corporation (MMRC), which is executing Metro Line 3, the Aqua Line. BMC is the richest municipal corporation in India and one of the largest in Asia.

*Why it matters: Appointments are a high-probability topic for Banking (IBPS PO, SBI PO) and SSC CPO exams.*

---

## Environment

**India's 99th Ramsar Site**
Shekha Jheel Bird Sanctuary, located in Aligarh district of Uttar Pradesh, was designated a Ramsar Site on 22 April 2026 — Earth Day — in an announcement by Union Environment Minister Bhupender Yadav. It became India's 99th Ramsar Wetland and Uttar Pradesh's 12th at the time.

Shekha Jheel is a 25-hectare freshwater perennial wetland that came into existence in 1852 following construction of the Upper Ganga Canal, which divides the lake into two parts. It lies on the Central Asian Flyway and is a wintering habitat for over 166 waterbird species, including the bar-headed goose and the painted stork, alongside fauna such as the blackbuck and nilgai.

**Correction:** An earlier version of this page stated that Uttar Pradesh had the highest number of Ramsar sites among Indian states. That was wrong. Tamil Nadu has the highest number of Ramsar sites in India with 20; Uttar Pradesh is second. Please correct this in your notes.

**Update (July 2026):** India crossed the 100-site milestone on 5 June 2026, World Environment Day, when the Jai Prakash Narayan Bird Sanctuary — popularly known as Surha Tal — in Ballia district, Uttar Pradesh was designated India's 100th Ramsar Site. Surha Tal is an oxbow lake formed by a meander of the Ganga and was declared a bird sanctuary in 1991. That designation took Uttar Pradesh's tally to 13. Tamil Nadu still leads with 20.

What is a Ramsar Site? It is a wetland site designated under the Ramsar Convention, an international treaty for the conservation and sustainable use of wetlands, signed at Ramsar in Iran on 2 February 1971 — now marked every year as World Wetlands Day. India became a signatory in 1982. India's first two Ramsar sites, both designated in 1981, were Chilika Lake in Odisha and Keoladeo National Park in Rajasthan.

**Ramsar quick facts:** India has the highest number of Ramsar sites in Asia and ranks third in the world, after the United Kingdom (176) and Mexico (144). Largest Ramsar site in India: Sundarbans Wetland, West Bengal. Smallest: Renuka Wetland, Himachal Pradesh. Two Indian sites are on the Montreux Record — Keoladeo National Park and Loktak Lake.

*Why it matters: Environment and Ecology — vital for UPSC Prelims GS Paper 1, SSC CGL, RRB NTPC, and Banking GK sections.*
    `,
  },
];

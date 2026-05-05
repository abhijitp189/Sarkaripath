// lib/eligibility-data.ts
// All eligibility rules for the 5 major exams

export const STATES_UTS = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli',
  'Daman & Diu', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

export const JK_STATES = ['Jammu & Kashmir', 'Ladakh'];

export type Category =
  | 'General' | 'OBC' | 'SC' | 'ST' | 'EWS'
  | 'PwBD-General' | 'PwBD-OBC' | 'PwBD-SC/ST' | 'Ex-Serviceman';

export type Qualification =
  | '8th Pass' | '10th Pass' | '12th Pass' | 'Diploma' | 'Graduate' | 'Post Graduate';

export type Nationality =
  | 'Indian Citizen' | 'OCI' | 'NRI' | 'Nepal/Bhutan Citizen';

export type Gender = 'Male' | 'Female' | 'Transgender';

export const QUAL_RANK: Record<Qualification, number> = {
  '8th Pass': 1, '10th Pass': 2, '12th Pass': 3,
  'Diploma': 4, 'Graduate': 5, 'Post Graduate': 6,
};

// ─── Age rules per category per exam ─────────────────────────────────────────
export interface AgeRule {
  min: number;
  max: number;
  label: string;
}

export type AgeRuleMap = Record<string, AgeRule>;

// UPSC IAS
export const UPSC_AGE: AgeRuleMap = {
  'General':        { min: 21, max: 32, label: '21–32 years' },
  'OBC':            { min: 21, max: 35, label: '21–35 years (+3)' },
  'SC':             { min: 21, max: 37, label: '21–37 years (+5)' },
  'ST':             { min: 21, max: 37, label: '21–37 years (+5)' },
  'EWS':            { min: 21, max: 32, label: '21–32 years' },
  'PwBD-General':   { min: 21, max: 42, label: '21–42 years (+10)' },
  'PwBD-OBC':       { min: 21, max: 45, label: '21–45 years (+13)' },
  'PwBD-SC/ST':     { min: 21, max: 47, label: '21–47 years (+15)' },
  'Ex-Serviceman':  { min: 21, max: 37, label: '21–37 years (+5)' },
};
export const UPSC_AGE_JK: AgeRule = { min: 21, max: 37, label: '21–37 years (J&K domicile bonus)' };

// SSC CGL
export const SSC_AGE: AgeRuleMap = {
  'General':        { min: 18, max: 32, label: '18–32 years' },
  'OBC':            { min: 18, max: 35, label: '18–35 years (+3)' },
  'SC':             { min: 18, max: 37, label: '18–37 years (+5)' },
  'ST':             { min: 18, max: 37, label: '18–37 years (+5)' },
  'EWS':            { min: 18, max: 32, label: '18–32 years' },
  'PwBD-General':   { min: 18, max: 42, label: '18–42 years (+10)' },
  'PwBD-OBC':       { min: 18, max: 45, label: '18–45 years (+13)' },
  'PwBD-SC/ST':     { min: 18, max: 47, label: '18–47 years (+15)' },
  'Ex-Serviceman':  { min: 18, max: 32, label: '18–32 years (3 yrs after discharge)' },
};

// IBPS PO
export const IBPS_AGE: AgeRuleMap = {
  'General':        { min: 20, max: 30, label: '20–30 years' },
  'OBC':            { min: 20, max: 33, label: '20–33 years (+3)' },
  'SC':             { min: 20, max: 35, label: '20–35 years (+5)' },
  'ST':             { min: 20, max: 35, label: '20–35 years (+5)' },
  'EWS':            { min: 20, max: 30, label: '20–30 years' },
  'PwBD-General':   { min: 20, max: 40, label: '20–40 years (+10)' },
  'PwBD-OBC':       { min: 20, max: 43, label: '20–43 years (+13)' },
  'PwBD-SC/ST':     { min: 20, max: 45, label: '20–45 years (+15)' },
  'Ex-Serviceman':  { min: 20, max: 35, label: '20–35 years (+5)' },
};

// SBI PO
export const SBI_AGE: AgeRuleMap = {
  'General':        { min: 21, max: 30, label: '21–30 years' },
  'OBC':            { min: 21, max: 33, label: '21–33 years (+3)' },
  'SC':             { min: 21, max: 35, label: '21–35 years (+5)' },
  'ST':             { min: 21, max: 35, label: '21–35 years (+5)' },
  'EWS':            { min: 21, max: 30, label: '21–30 years' },
  'PwBD-General':   { min: 21, max: 40, label: '21–40 years (+10)' },
  'PwBD-OBC':       { min: 21, max: 43, label: '21–43 years (+13)' },
  'PwBD-SC/ST':     { min: 21, max: 45, label: '21–45 years (+15)' },
  'Ex-Serviceman':  { min: 21, max: 35, label: '21–35 years (+5)' },
};

// RRB NTPC – Graduate posts
export const RRB_GRAD_AGE: AgeRuleMap = {
  'General':        { min: 18, max: 33, label: '18–33 years' },
  'OBC':            { min: 18, max: 36, label: '18–36 years (+3)' },
  'SC':             { min: 18, max: 38, label: '18–38 years (+5)' },
  'ST':             { min: 18, max: 38, label: '18–38 years (+5)' },
  'EWS':            { min: 18, max: 33, label: '18–33 years' },
  'PwBD-General':   { min: 18, max: 43, label: '18–43 years (+10)' },
  'PwBD-OBC':       { min: 18, max: 46, label: '18–46 years (+13)' },
  'PwBD-SC/ST':     { min: 18, max: 48, label: '18–48 years (+15)' },
  'Ex-Serviceman':  { min: 18, max: 33, label: '18–33 + service period' },
};

// RRB NTPC – Undergraduate posts
export const RRB_UG_AGE: AgeRuleMap = {
  'General':        { min: 18, max: 30, label: '18–30 years' },
  'OBC':            { min: 18, max: 33, label: '18–33 years (+3)' },
  'SC':             { min: 18, max: 35, label: '18–35 years (+5)' },
  'ST':             { min: 18, max: 35, label: '18–35 years (+5)' },
  'EWS':            { min: 18, max: 30, label: '18–30 years' },
  'PwBD-General':   { min: 18, max: 40, label: '18–40 years (+10)' },
  'PwBD-OBC':       { min: 18, max: 43, label: '18–43 years (+13)' },
  'PwBD-SC/ST':     { min: 18, max: 45, label: '18–45 years (+15)' },
  'Ex-Serviceman':  { min: 18, max: 30, label: '18–30 + service period' },
};

// ─── Attempt limits ───────────────────────────────────────────────────────────
export const UPSC_ATTEMPTS: Record<string, number | 'Unlimited'> = {
  'General': 6, 'EWS': 6,
  'OBC': 9,
  'SC': 'Unlimited', 'ST': 'Unlimited',
  'PwBD-General': 9, 'PwBD-OBC': 9,
  'PwBD-SC/ST': 'Unlimited',
  'Ex-Serviceman': 9,
};

// SSC CGL, IBPS PO, SBI PO, RRB NTPC — no attempt limit
export const NO_ATTEMPT_LIMIT = 'No limit';

// ─── Physical standards ───────────────────────────────────────────────────────
export interface VisionStandard {
  distantUncorrected?: string;
  distantCorrected?: string;
  near?: string;
  colourBlindness: 'Not Allowed' | 'Allowed';
  nightBlindness?: 'Not Allowed' | 'Allowed';
}

export interface PhysicalStandard {
  heightMale?: number;
  heightFemale?: number;
  chestNormal?: number;
  chestExpanded?: number;
  weightNote?: string;
  vision?: VisionStandard;
}

// SSC CPO sub-check
export const SSC_CPO_PHYSICAL: PhysicalStandard = {
  heightMale: 170, heightFemale: 157,
  chestNormal: 80, chestExpanded: 85,
  vision: {
    distantCorrected: '6/6 one eye, 6/9 other',
    near: 'N/9 one eye, N/12 other',
    colourBlindness: 'Not Allowed',
  },
};

// RRB NTPC vision (all posts)
export const RRB_VISION: VisionStandard = {
  distantUncorrected: '6/9 one eye AND 6/12 other',
  distantCorrected: '6/6 one eye AND 6/9 other',
  near: 'Sn 0.6 one eye and Sn 0.8 other',
  colourBlindness: 'Not Allowed',
  nightBlindness: 'Not Allowed',
};

// RRB Station Master height
export const RRB_SM_PHYSICAL: PhysicalStandard = {
  heightMale: 158, heightFemale: 152,
  weightNote: 'Proportionate to height',
  vision: RRB_VISION,
};

export const VISION_OPTIONS = ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', 'Worse'];

// Vision rank — lower index = better vision
export const VISION_RANK: Record<string, number> = {
  '6/6': 0, '6/9': 1, '6/12': 2, '6/18': 3,
  '6/24': 4, '6/36': 5, '6/60': 6, 'Worse': 7,
};

// ─── Exam metadata ────────────────────────────────────────────────────────────
export interface ExamMeta {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  slug: string;
  tip: string;
}

export const EXAMS: ExamMeta[] = [
  {
    id: 'upsc',
    name: 'UPSC Civil Services (IAS/IPS/IFS)',
    shortName: 'UPSC IAS',
    icon: '🏛️',
    slug: 'upsc-ias',
    tip: 'You are eligible for UPSC CSE 2026! Start with NCERTs (Class 6–12), build your NCERT base, then move to standard references. The 2026 notification was released in February.',
  },
  {
    id: 'ssc',
    name: 'SSC Combined Graduate Level (CGL)',
    shortName: 'SSC CGL',
    icon: '📝',
    slug: 'ssc-cgl',
    tip: 'You qualify for SSC CGL 2026! The notification is out — focus on Quantitative Aptitude and Reasoning for Tier 1. In-hand salary can reach ₹75,000/month for top posts.',
  },
  {
    id: 'ibps',
    name: 'IBPS Probationary Officer (PO)',
    shortName: 'IBPS PO',
    icon: '🏦',
    slug: 'ibps-po',
    tip: 'IBPS PO 2026 is expected July–August. Master puzzles, seating arrangement, and DI. In-hand salary ~₹52,000–₹65,000/month (Metro city) under 12th Bipartite Settlement.',
  },
  {
    id: 'sbi',
    name: 'SBI Probationary Officer (PO)',
    shortName: 'SBI PO',
    icon: '💼',
    slug: 'sbi-po',
    tip: 'SBI PO 2026 notification was released in March. Practice mock tests daily and aim for ₹75,000/month in-hand salary at one of India\'s biggest banks.',
  },
  {
    id: 'rrb',
    name: 'RRB NTPC (Non-Technical Popular Categories)',
    shortName: 'RRB NTPC',
    icon: '🚂',
    slug: 'rrb-ntpc',
    tip: 'Railway career awaits! RRB NTPC 2026 notification is expected. General Awareness accounts for 40 marks — read Lucent GK and follow current affairs daily.',
  },
];

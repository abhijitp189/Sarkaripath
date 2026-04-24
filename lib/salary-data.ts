// lib/salary-data.ts
// Salary data verified from 7th Pay Commission guidelines, 2025-2026
// Sources: adda247, careerpower, oliveboard, bankersadda, ixambee

export type CityType = 'X' | 'Y' | 'Z';
export type SectorType = 'central' | 'banking' | 'banking_sbi';

export interface Post {
  name: string;
  basic: number;
  level?: number;
}

export interface ExamData {
  type: SectorType;
  da: number;
  perks: string[];
  posts: Post[];
}

export const CITY_LABELS: Record<CityType, string> = {
  X: 'X — Metro (Delhi, Mumbai, Bengaluru, Pune, Chennai, Hyderabad)',
  Y: 'Y — Large City (5L+ population)',
  Z: 'Z — Small Town / Rural Area',
};

export const examSalaryData: Record<string, ExamData> = {
  'UPSC IAS': {
    type: 'central',
    da: 0.53,
    perks: [
      'Official bungalow / government quarters',
      'Government vehicle with driver',
      'Domestic support staff',
      'CGHS cashless medical for entire family',
      'Free electricity, water & telephone at official residence',
      'Leave Travel Concession (LTC) for family',
      'NPS pension + gratuity on retirement',
    ],
    posts: [
      { name: 'IAS Officer — Entry Level (SDM / Asst Collector)', basic: 56100, level: 10 },
    ],
  },

  'SSC CGL': {
    type: 'central',
    da: 0.53,
    perks: [
      'CGHS medical cover for employee & family',
      'NPS pension + gratuity',
      '30 days Earned Leave per year',
      'Leave Travel Concession (LTC)',
      'Central Govt Group Insurance (CGEGIS)',
      'Reimbursement of children\'s tuition fee (limited)',
    ],
    posts: [
      { name: 'Tax Assistant / Upper Division Clerk (UDC)', basic: 25500, level: 4 },
      { name: 'Auditor / Accountant / Junior Accountant', basic: 29200, level: 5 },
      { name: 'Inspector of Posts / Sub-Inspector (CBI/NIA)', basic: 35400, level: 6 },
      { name: 'ASO / Income Tax Inspector / Inspector CGST', basic: 44900, level: 7 },
      { name: 'Asst Audit Officer / Asst Accounts Officer (AAO)', basic: 47600, level: 8 },
    ],
  },

  'IBPS PO': {
    type: 'banking',
    da: 0.465,
    perks: [
      'Staff home/car loan at highly concessional interest rates',
      'Leased accommodation or HRA',
      'Medical reimbursement for employee & family',
      'NPS pension',
      'Leave Fare Concession (LFC)',
      'Canteen / subsidised meals at office',
    ],
    posts: [
      { name: 'Probationary Officer — Nationalised Banks', basic: 48480 },
    ],
  },

  'SBI PO': {
    type: 'banking_sbi',
    da: 0.465,
    perks: [
      'Staff home/car/personal loan at concessional rates',
      'Leased accommodation (SBI pays rent directly)',
      'Cashless medical for employee & family',
      'NPS pension',
      'Newspaper, phone & furniture allowance',
      'Leave Fare Concession (LFC)',
      'One of the highest salary packages in banking sector',
    ],
    posts: [
      { name: 'Probationary Officer — State Bank of India', basic: 56480 },
    ],
  },

  'RRB NTPC': {
    type: 'central',
    da: 0.53,
    perks: [
      'Free railway passes for employee & family (unlimited travel)',
      'Railway hospital / CGHS medical cover',
      'NPS pension + gratuity',
      'Railway quarters at many postings',
      'Uniform allowance',
      'Children\'s school pass on trains',
    ],
    posts: [
      { name: 'Junior Clerk cum Typist / Train Clerk / Jr Time Keeper', basic: 19900, level: 2 },
      { name: 'Commercial cum Ticket Clerk', basic: 21700, level: 3 },
      { name: 'Traffic Assistant', basic: 25500, level: 4 },
      { name: 'Goods Guard / Senior Clerk / Sr Time Keeper / JAA', basic: 29200, level: 5 },
      { name: 'Station Master / Commercial Apprentice', basic: 35400, level: 6 },
    ],
  },
};

export interface SalaryBreakdown {
  basicPay: number;
  da: number;
  hra: number;
  ta: number;
  specialAllowance?: number;
  cca?: number;
  grossSalary: number;
  npsDeduction: number;
  otherDeductions: number;
  inHandSalary: number;
}

export function calculateSalary(
  examName: string,
  postBasic: number,
  city: CityType
): SalaryBreakdown {
  const exam = examSalaryData[examName];

  if (exam.type === 'central') {
    const da = Math.round(postBasic * exam.da);
    const hraRate = city === 'X' ? 0.27 : city === 'Y' ? 0.18 : 0.09;
    const hra = Math.round(postBasic * hraRate);
    const ta = city === 'Z' ? 1800 : 3600;
    const grossSalary = postBasic + da + hra + ta;
    const npsDeduction = Math.round(postBasic * 0.10);
    const otherDeductions = 620; // CGHS ₹500 + GIS ₹120
    const inHandSalary = grossSalary - npsDeduction - otherDeductions;
    return { basicPay: postBasic, da, hra, ta, grossSalary, npsDeduction, otherDeductions, inHandSalary };
  } else {
    // Banking sector
    const da = Math.round(postBasic * exam.da);
    const specialAllowance = Math.round(postBasic * 0.0775);
    const hraRate = city === 'X' ? 0.09 : city === 'Y' ? 0.08 : 0.07;
    const hra = Math.round(postBasic * hraRate);
    const ccaRate = city === 'X' ? 0.04 : city === 'Y' ? 0.03 : 0;
    const cca = Math.round(postBasic * ccaRate);
    const ta = 2500;
    const grossSalary = postBasic + da + specialAllowance + hra + cca + ta;
    const npsDeduction = Math.round(postBasic * 0.10);
    const otherDeductions = 200; // Professional Tax
    const inHandSalary = grossSalary - npsDeduction - otherDeductions;
    return { basicPay: postBasic, da, hra, ta, specialAllowance, cca, grossSalary, npsDeduction, otherDeductions, inHandSalary };
  }
}

export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

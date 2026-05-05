'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  STATES_UTS, JK_STATES, QUAL_RANK,
  UPSC_AGE, UPSC_AGE_JK, UPSC_ATTEMPTS,
  SSC_AGE, SSC_CPO_PHYSICAL,
  IBPS_AGE,
  SBI_AGE,
  RRB_GRAD_AGE, RRB_UG_AGE, RRB_VISION, RRB_SM_PHYSICAL,
  VISION_RANK, VISION_OPTIONS, EXAMS,
  type Category, type Qualification, type Nationality, type Gender,
} from '@/lib/eligibility-data';

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  dob: string;
  gender: Gender | '';
  category: Category | '';
  state: string;
  qualification: Qualification | '';
  nationality: Nationality | '';
  attempts: Record<string, number>;
  height: string;
  weight: string;
  chestNormal: string;
  chestExpanded: string;
  visionRight: string;
  visionLeft: string;
  colourBlind: 'Yes' | 'No' | '';
}

interface CheckResult {
  passed: boolean;
  label: string;
  detail: string;
}

interface ExamResult {
  examId: string;
  status: 'eligible' | 'partial' | 'ineligible';
  checks: CheckResult[];
  tip: string;
  partialNote?: string;
  salary?: string;
  notification2026?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function calcAge(dob: string): number {
  const birth = new Date(dob);
  const ref = new Date(new Date().getFullYear(), 7, 1); // 1 Aug
  let age = ref.getFullYear() - birth.getFullYear();
  const mDiff = ref.getMonth() - birth.getMonth();
  if (mDiff < 0 || (mDiff === 0 && ref.getDate() < birth.getDate())) age--;
  return age;
}

function getAgeRule(map: Record<string, { min: number; max: number; label: string }>, category: string) {
  return map[category] ?? map['General'];
}

function visionOk(v: string, maxRank: number): boolean {
  return (VISION_RANK[v] ?? 99) <= maxRank;
}

function checkAge(age: number, rule: { min: number; max: number; label: string }): CheckResult {
  const passed = age >= rule.min && age <= rule.max;
  return {
    passed,
    label: '📅 Age',
    detail: passed
      ? `Age ${age} yrs is within the limit (${rule.label})`
      : `Age ${age} yrs is outside the limit (${rule.label})`,
  };
}

function checkQual(userQual: Qualification, required: Qualification): CheckResult {
  const passed = QUAL_RANK[userQual] >= QUAL_RANK[required];
  return {
    passed,
    label: '🎓 Qualification',
    detail: passed
      ? `${userQual} meets the requirement (minimum: ${required})`
      : `${required} required — you have: ${userQual}`,
  };
}

function checkNationality(nat: Nationality, exam: string): CheckResult {
  if (nat === 'Indian Citizen') return { passed: true, label: '🪪 Nationality', detail: 'Indian citizens are eligible' };
  if (exam === 'upsc' && (nat === 'OCI' || nat === 'Nepal/Bhutan Citizen')) {
    return { passed: true, label: '🪪 Nationality', detail: `${nat} — eligible for certain UPSC services (check specific post)` };
  }
  return { passed: false, label: '🪪 Nationality', detail: `${nat} — not eligible for ${exam.toUpperCase()}` };
}

function checkAttempts(used: number, limit: number | 'Unlimited'): CheckResult {
  if (limit === 'Unlimited') {
    return { passed: true, label: '🔁 Attempt Count', detail: `Unlimited attempts allowed for your category (${used} used)` };
  }
  const remaining = (limit as number) - used;
  const passed = remaining > 0;
  return {
    passed,
    label: '🔁 Attempt Count',
    detail: passed
      ? `${used} of ${limit} attempts used — ${remaining} remaining`
      : `All ${limit} attempts exhausted for your category`,
  };
}

// ─── 2026 exam metadata overlay ───────────────────────────────────────────────
const EXAM_2026_INFO: Record<string, { salary: string; notification: string }> = {
  upsc: { salary: '₹56,100–₹2,50,000/month (Pay Level 10–18)', notification: 'Feb 2026 (released)' },
  ssc:  { salary: '₹25,500–₹1,51,100/month (Pay Level 4–8)', notification: 'Apr 2026 (released)' },
  ibps: { salary: '~₹52,000–₹65,000/month (in-hand, Metro)', notification: 'Jul–Aug 2026 (expected)' },
  sbi:  { salary: '~₹65,000–₹75,000/month (in-hand, Metro)', notification: 'Mar 2026 (released)' },
  rrb:  { salary: '₹19,900–₹35,400/month (Pay Level 2–6)', notification: 'TBN — based on prior cycle patterns' },
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function EligibilityChecker() {
  const [form, setForm] = useState<FormData>({
    dob: '', gender: '', category: '', state: '', qualification: '', nationality: '',
    attempts: { upsc: 0, ssc: 0, ibps: 0, sbi: 0, rrb: 0 },
    height: '', weight: '', chestNormal: '', chestExpanded: '',
    visionRight: '', visionLeft: '', colourBlind: '',
  });
  const [showPhysical, setShowPhysical] = useState(false);
  const [results, setResults] = useState<ExamResult[] | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  function setField<K extends keyof FormData>(k: K, v: FormData[K]) {
    setForm(prev => ({ ...prev, [k]: v }));
  }

  function validate(): string[] {
    const errs: string[] = [];
    if (!form.dob) errs.push('Date of Birth is required');
    if (!form.gender) errs.push('Gender is required');
    if (!form.category) errs.push('Category is required');
    if (!form.state) errs.push('State of Domicile is required');
    if (!form.qualification) errs.push('Highest Qualification is required');
    if (!form.nationality) errs.push('Nationality is required');
    return errs;
  }

  function computeResults() {
    const errs = validate();
    if (errs.length) { setErrors(errs); return; }
    setErrors([]);

    const age = calcAge(form.dob);
    const cat = form.category as Category;
    const qual = form.qualification as Qualification;
    const nat = form.nationality as Nationality;
    const gender = form.gender as Gender;
    const isJK = JK_STATES.includes(form.state);
    const examResults: ExamResult[] = [];

    // ── UPSC IAS ────────────────────────────────────────────────────────────
    {
      const ageRule = isJK ? UPSC_AGE_JK : getAgeRule(UPSC_AGE, cat);
      const ageCheck = checkAge(age, ageRule);
      const qualCheck = checkQual(qual, 'Graduate');
      const natCheck = checkNationality(nat, 'upsc');
      const attemptLimit = UPSC_ATTEMPTS[cat] ?? 6;
      const attCheck = checkAttempts(form.attempts.upsc, attemptLimit as number | 'Unlimited');
      const domCheck: CheckResult = {
        passed: true, label: '🗺️ Domicile',
        detail: isJK ? 'J&K domicile: extra age relaxation of +5 years applied' : 'No domicile restriction — open to all Indian citizens',
      };
      const finalYearCheck: CheckResult = {
        passed: QUAL_RANK[qual] >= QUAL_RANK['Graduate'],
        label: '📚 Final Year',
        detail: QUAL_RANK[qual] >= QUAL_RANK['Graduate']
          ? 'Completed graduation ✓ (Final year students also allowed for UPSC CSE)'
          : 'Graduation required — final year students ARE allowed to appear',
      };
      const checks = [ageCheck, qualCheck, finalYearCheck, attCheck, domCheck, natCheck];
      const allPass = [ageCheck, qualCheck, attCheck, natCheck].every(c => c.passed);
      examResults.push({
        examId: 'upsc',
        status: allPass ? 'eligible' : 'ineligible',
        checks,
        tip: EXAMS[0].tip,
        salary: EXAM_2026_INFO.upsc.salary,
        notification2026: EXAM_2026_INFO.upsc.notification,
      });
    }

    // ── SSC CGL ─────────────────────────────────────────────────────────────
    {
      const ageRule = getAgeRule(SSC_AGE, cat);
      const ageCheck = checkAge(age, ageRule);
      const qualCheck = checkQual(qual, 'Graduate');
      const natCheck = checkNationality(nat, 'ssc');
      const attCheck: CheckResult = { passed: true, label: '🔁 Attempt Count', detail: 'No attempt limit — appear every year until age limit is reached' };
      const domCheck: CheckResult = { passed: true, label: '🗺️ Domicile', detail: 'No domicile restriction — pan-India recruitment' };
      const finalYearCheck: CheckResult = {
        passed: QUAL_RANK[qual] >= QUAL_RANK['Graduate'],
        label: '📚 Final Year',
        detail: QUAL_RANK[qual] >= QUAL_RANK['Graduate']
          ? 'Graduation met ✓ (Final year students also eligible for SSC CGL)'
          : 'Graduation required — final year students ARE allowed to appear for SSC CGL',
      };

      let physCheck: CheckResult | null = null;
      if (showPhysical && form.height) {
        const h = parseFloat(form.height);
        const minH = gender === 'Female' ? SSC_CPO_PHYSICAL.heightFemale! : SSC_CPO_PHYSICAL.heightMale!;
        const minCN = SSC_CPO_PHYSICAL.chestNormal!;
        const minCE = SSC_CPO_PHYSICAL.chestExpanded!;
        let cpoFail = false;
        let cpoDetail = '';
        if (h < minH) {
          cpoFail = true; cpoDetail = `Height ${h}cm is below CPO Sub-Inspector requirement (${minH}cm for ${gender})`;
        } else if (gender !== 'Female' && form.chestNormal && parseFloat(form.chestNormal) < minCN) {
          cpoFail = true; cpoDetail = `Chest (normal) ${form.chestNormal}cm below CPO requirement (min ${minCN}cm)`;
        } else if (gender !== 'Female' && form.chestExpanded && parseFloat(form.chestExpanded) < minCE) {
          cpoFail = true; cpoDetail = `Chest (expanded) ${form.chestExpanded}cm below CPO requirement (min ${minCE}cm)`;
        } else {
          cpoDetail = `Physical standards met ✓ (Height: ${h}cm, CPO minimum: ${minH}cm for ${gender})`;
        }
        physCheck = { passed: !cpoFail, label: '💪 Physical (CPO post only)', detail: cpoDetail };
      }

      const mainChecks = [ageCheck, qualCheck, finalYearCheck, attCheck, domCheck, natCheck];
      const mainPass = mainChecks.every(c => [ageCheck, qualCheck, natCheck].includes(c) ? c.passed : true);
      const cpoPass = physCheck ? physCheck.passed : null;
      const allChecks = physCheck ? [...mainChecks, physCheck] : mainChecks;

      let status: ExamResult['status'] = 'ineligible';
      if (ageCheck.passed && qualCheck.passed && natCheck.passed) {
        if (cpoPass === null || cpoPass) status = 'eligible';
        else status = 'partial';
      }

      examResults.push({
        examId: 'ssc',
        status,
        checks: allChecks,
        tip: EXAMS[1].tip,
        partialNote: status === 'partial'
          ? 'Eligible for all SSC CGL posts (Inspector, Auditor, Tax Assistant, ASO etc.) except Sub-Inspector CPO due to physical standards. You can still build a great govt career!'
          : undefined,
        salary: EXAM_2026_INFO.ssc.salary,
        notification2026: EXAM_2026_INFO.ssc.notification,
      });
    }

    // ── IBPS PO ─────────────────────────────────────────────────────────────
    {
      const ageRule = getAgeRule(IBPS_AGE, cat);
      const ageCheck = checkAge(age, ageRule);
      const qualCheck = checkQual(qual, 'Graduate');
      const natCheck = checkNationality(nat, 'ibps');
      const attCheck: CheckResult = { passed: true, label: '🔁 Attempt Count', detail: 'No official attempt limit for IBPS PO' };
      const domCheck: CheckResult = { passed: true, label: '🗺️ Domicile', detail: 'No domicile restriction — pan-India recruitment' };
      const gradComplete: CheckResult = {
        passed: QUAL_RANK[qual] >= QUAL_RANK['Graduate'],
        label: '📚 Graduation Status',
        detail: QUAL_RANK[qual] >= QUAL_RANK['Graduate']
          ? 'Completed graduation ✓ — you are eligible (⚠️ final-year students are NOT eligible for IBPS PO)'
          : 'Completed graduation required — final-year students are NOT eligible for IBPS PO 2026',
      };
      const checks = [ageCheck, qualCheck, gradComplete, attCheck, domCheck, natCheck];
      const allPass = [ageCheck, qualCheck, gradComplete, natCheck].every(c => c.passed);
      examResults.push({
        examId: 'ibps',
        status: allPass ? 'eligible' : 'ineligible',
        checks,
        tip: EXAMS[2].tip,
        salary: EXAM_2026_INFO.ibps.salary,
        notification2026: EXAM_2026_INFO.ibps.notification,
      });
    }

    // ── SBI PO ──────────────────────────────────────────────────────────────
    {
      const ageRule = getAgeRule(SBI_AGE, cat);
      const ageCheck = checkAge(age, ageRule);
      const qualCheck = checkQual(qual, 'Graduate');
      const natCheck = checkNationality(nat, 'sbi');
      const attCheck: CheckResult = { passed: true, label: '🔁 Attempt Count', detail: 'No official attempt limit for SBI PO' };
      const domCheck: CheckResult = { passed: true, label: '🗺️ Domicile', detail: 'No domicile restriction — pan-India recruitment' };
      const gradComplete: CheckResult = {
        passed: QUAL_RANK[qual] >= QUAL_RANK['Graduate'],
        label: '📚 Graduation Status',
        detail: QUAL_RANK[qual] >= QUAL_RANK['Graduate']
          ? 'Completed graduation ✓ — you are eligible (⚠️ final-year students are NOT eligible for SBI PO)'
          : 'Completed graduation required — final-year students are NOT eligible for SBI PO 2026',
      };
      const checks = [ageCheck, qualCheck, gradComplete, attCheck, domCheck, natCheck];
      const allPass = [ageCheck, qualCheck, gradComplete, natCheck].every(c => c.passed);
      examResults.push({
        examId: 'sbi',
        status: allPass ? 'eligible' : 'ineligible',
        checks,
        tip: EXAMS[3].tip,
        salary: EXAM_2026_INFO.sbi.salary,
        notification2026: EXAM_2026_INFO.sbi.notification,
      });
    }

    // ── RRB NTPC ────────────────────────────────────────────────────────────
    {
      const gradAgeRule = getAgeRule(RRB_GRAD_AGE, cat);
      const ugAgeRule = getAgeRule(RRB_UG_AGE, cat);
      const gradAgeCheck = checkAge(age, gradAgeRule);
      const ugAgeCheck = checkAge(age, ugAgeRule);
      const gradQualCheck = checkQual(qual, 'Graduate');
      const ugQualCheck = checkQual(qual, '12th Pass');
      const natCheck = checkNationality(nat, 'rrb');
      const attCheck: CheckResult = { passed: true, label: '🔁 Attempt Count', detail: 'No attempt limit for RRB NTPC' };
      const domCheck: CheckResult = {
        passed: true, label: '🗺️ Domicile',
        detail: 'No strict domicile restriction. Note: Station Master & some posts require regional language knowledge.',
      };

      let visionCheck: CheckResult | null = null;
      if (showPhysical && form.visionRight && form.visionLeft) {
        const rightOk = visionOk(form.visionRight, VISION_RANK['6/9']);
        const leftOk = visionOk(form.visionLeft, VISION_RANK['6/12']);
        const bothOk = (rightOk && leftOk) || (visionOk(form.visionLeft, VISION_RANK['6/9']) && visionOk(form.visionRight, VISION_RANK['6/12']));
        const cbOk = form.colourBlind !== 'Yes';
        const passed = bothOk && cbOk;
        visionCheck = {
          passed,
          label: '👁️ Vision / Physical',
          detail: passed
            ? `Vision meets Railway standard ✓ (6/9 one eye, 6/12 other). No colour blindness.`
            : !cbOk
              ? 'Colour blindness disqualifies from RRB NTPC — Railway requires normal colour vision'
              : `Vision does not meet Railway standard — requires 6/9 (one eye) AND 6/12 (other) without glasses`,
        };
      } else if (showPhysical) {
        visionCheck = { passed: true, label: '👁️ Vision / Physical', detail: 'Enter vision values above to check Railway vision standards' };
      }

      const eligGrad = gradAgeCheck.passed && gradQualCheck.passed;
      const eligUG = ugAgeCheck.passed && ugQualCheck.passed;
      const visionPass = visionCheck ? visionCheck.passed : true;

      let status: ExamResult['status'];
      let partialNote: string | undefined;
      if ((eligGrad || eligUG) && visionPass) {
        status = eligGrad && eligUG ? 'eligible' : 'partial';
        if (!eligGrad && eligUG) partialNote = 'Eligible for Under-Graduate posts (Junior Clerk, Ticket Collector, Commercial Apprentice — 18–30 yrs) but not Graduate posts (Station Master, Goods Guard — 18–33 yrs).';
        if (eligGrad && !eligUG) partialNote = 'Eligible for Graduate posts (Station Master, Goods Guard, Senior Commercial Apprentice — up to 33 yrs). Undergraduate posts require younger age.';
      } else if (!visionPass) {
        status = 'ineligible';
      } else {
        status = 'ineligible';
      }

      const checks: CheckResult[] = [
        {
          passed: eligGrad,
          label: '📅 Age & Qual — Graduate Posts (up to 33 yrs)',
          detail: eligGrad
            ? `Eligible for graduate posts ✓ (${gradAgeRule.label}) — Station Master, Goods Guard, Senior Commercial Apprentice`
            : `Not eligible for graduate posts — ${!gradAgeCheck.passed ? gradAgeCheck.detail : gradQualCheck.detail}`,
        },
        {
          passed: eligUG,
          label: '📅 Age & Qual — UG Posts 12th Pass (up to 30 yrs)',
          detail: eligUG
            ? `Eligible for UG posts ✓ (${ugAgeRule.label}) — Junior Clerk, Ticket Collector, Commercial Apprentice`
            : `Not eligible for UG posts — ${!ugAgeCheck.passed ? ugAgeCheck.detail : ugQualCheck.detail}`,
        },
        attCheck, domCheck, natCheck,
      ];
      if (visionCheck) checks.push(visionCheck);

      examResults.push({
        examId: 'rrb',
        status,
        checks,
        tip: EXAMS[4].tip,
        partialNote,
        salary: EXAM_2026_INFO.rrb.salary,
        notification2026: EXAM_2026_INFO.rrb.notification,
      });
    }

    setResults(examResults);
    setTimeout(() => document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  const exam = EXAMS;
  const eligibleCount = results?.filter(r => r.status === 'eligible').length ?? 0;
  const partialCount = results?.filter(r => r.status === 'partial').length ?? 0;

  return (
    <div className="max-w-3xl mx-auto">
      {/* ── FORM ── */}
      <div className="card p-6 sm:p-8 mb-8">

        {/* Step 1 */}
        <h2 className="font-heading font-bold text-lg text-surface-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xs font-bold">1</span>
          Your Personal Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
            <input type="date" value={form.dob} onChange={e => setField('dob', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Gender <span className="text-red-500">*</span></label>
            <div className="flex gap-2">
              {(['Male', 'Female', 'Transgender'] as Gender[]).map(g => (
                <button key={g} onClick={() => setField('gender', g)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${form.gender === g ? 'bg-primary-500 text-white border-primary-500' : 'border-surface-300 text-surface-600 hover:border-primary-400'}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Category <span className="text-red-500">*</span></label>
            <select value={form.category} onChange={e => setField('category', e.target.value as Category)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white">
              <option value="">Select category</option>
              {['General', 'OBC', 'SC', 'ST', 'EWS', 'PwBD-General', 'PwBD-OBC', 'PwBD-SC/ST', 'Ex-Serviceman'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Nationality <span className="text-red-500">*</span></label>
            <select value={form.nationality} onChange={e => setField('nationality', e.target.value as typeof form.nationality)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white">
              <option value="">Select nationality</option>
              {['Indian Citizen', 'OCI', 'NRI', 'Nepal/Bhutan Citizen'].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">State / UT of Domicile <span className="text-red-500">*</span></label>
            <select value={form.state} onChange={e => setField('state', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white">
              <option value="">Select state / UT</option>
              {STATES_UTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Highest Qualification <span className="text-red-500">*</span></label>
            <select value={form.qualification} onChange={e => setField('qualification', e.target.value as typeof form.qualification)}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none text-sm bg-white">
              <option value="">Select qualification</option>
              {['8th Pass', '10th Pass', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate'].map(q => <option key={q}>{q}</option>)}
            </select>
          </div>
        </div>

        {/* Step 2 — Attempt History */}
        <div className="mb-6">
          <h2 className="font-heading font-bold text-lg text-surface-900 mb-1 flex items-center gap-2">
            <span className="w-7 h-7 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-xs font-bold">2</span>
            Attempt History
          </h2>
          <p className="text-xs text-surface-400 mb-3 ml-9">Enter 0 if you have never attempted the exam. Only UPSC has an attempt limit.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {exam.map(e => (
              <div key={e.id}>
                <label className="block text-xs font-medium text-surface-600 mb-1">{e.shortName}</label>
                <input type="number" min={0} max={20} value={form.attempts[e.id]}
                  onChange={ev => setField('attempts', { ...form.attempts, [e.id]: Math.max(0, parseInt(ev.target.value) || 0) })}
                  className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Step 3 — Physical Standards */}
        <div className="mb-6">
          <button onClick={() => setShowPhysical(!showPhysical)}
            className="flex items-center gap-2 w-full text-left py-3 px-4 bg-surface-50 rounded-xl border border-surface-200 hover:border-primary-300 transition-colors">
            <span className="w-7 h-7 bg-surface-200 rounded-lg flex items-center justify-center text-surface-600 text-xs font-bold">3</span>
            <span className="font-heading font-semibold text-surface-700 text-sm flex-1">Physical Standards</span>
            <span className="text-xs text-surface-400 mr-2">Optional — for CPO & Railway posts</span>
            <svg className={`w-4 h-4 text-surface-400 transition-transform ${showPhysical ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showPhysical && (
            <div className="mt-3 p-4 bg-surface-50 rounded-xl border border-surface-200">
              <p className="text-xs text-surface-500 mb-4">Fill to check eligibility for <strong>SSC CPO (Sub-Inspector)</strong> and <strong>RRB NTPC Railway posts</strong>. Leave blank to skip.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-medium text-surface-600 mb-1">Height (cm)</label>
                  <input type="number" value={form.height} onChange={e => setField('height', e.target.value)} placeholder="e.g. 168"
                    className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-surface-600 mb-1">Weight (kg)</label>
                  <input type="number" value={form.weight} onChange={e => setField('weight', e.target.value)} placeholder="e.g. 65"
                    className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm" />
                </div>
                {form.gender !== 'Female' && (
                  <>
                    <div>
                      <label className="block text-xs font-medium text-surface-600 mb-1">Chest Normal (cm)</label>
                      <input type="number" value={form.chestNormal} onChange={e => setField('chestNormal', e.target.value)} placeholder="e.g. 82"
                        className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-surface-600 mb-1">Chest Expanded (cm)</label>
                      <input type="number" value={form.chestExpanded} onChange={e => setField('chestExpanded', e.target.value)} placeholder="e.g. 87"
                        className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm" />
                    </div>
                  </>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-surface-600 mb-1">Vision — Right Eye</label>
                  <select value={form.visionRight} onChange={e => setField('visionRight', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm bg-white">
                    <option value="">Select</option>
                    {VISION_OPTIONS.map(v => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-surface-600 mb-1">Vision — Left Eye</label>
                  <select value={form.visionLeft} onChange={e => setField('visionLeft', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-surface-300 focus:border-primary-500 outline-none text-sm bg-white">
                    <option value="">Select</option>
                    {VISION_OPTIONS.map(v => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-surface-600 mb-1">Colour Blindness</label>
                  <div className="flex gap-2">
                    {(['Yes', 'No'] as const).map(v => (
                      <button key={v} onClick={() => setField('colourBlind', v)}
                        className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${form.colourBlind === v ? (v === 'Yes' ? 'bg-red-500 text-white border-red-500' : 'bg-emerald-500 text-white border-emerald-500') : 'border-surface-300 text-surface-600 hover:border-primary-400'}`}>
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700 space-y-1">
                <div><strong>🚂 Railway NTPC:</strong> 6/9 (one eye) + 6/12 (other) without glasses · No colour blindness · No night blindness</div>
                <div><strong>📝 SSC CPO:</strong> Height 170cm (M) / 157cm (F) · Chest 80/85cm (M) · Vision corrected 6/6 + 6/9</div>
                <div><strong>🚂 Station Master (RRB):</strong> Height 158cm (M) / 152cm (F) · Same vision as NTPC standard</div>
              </div>
            </div>
          )}
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Please fill in the required fields:</p>
            <ul className="space-y-1">
              {errors.map(e => <li key={e} className="text-sm text-red-600 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{e}</li>)}
            </ul>
          </div>
        )}

        <button onClick={computeResults} className="w-full btn-primary py-4 text-base font-heading font-bold">
          🔍 Run Deep Eligibility Check →
        </button>
      </div>

      {/* ── RESULTS ── */}
      {results && (
        <div id="results-section">
          {/* Summary banner */}
          <div className={`rounded-2xl p-5 mb-6 flex items-center gap-4 ${eligibleCount > 0 ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
            <span className="text-4xl">{eligibleCount + partialCount >= 3 ? '🎉' : eligibleCount > 0 ? '✅' : '😔'}</span>
            <div>
              <p className="font-heading font-bold text-surface-900 text-lg">
                Eligible for <span className={eligibleCount > 0 ? 'text-emerald-600' : 'text-red-500'}>{eligibleCount} of 5</span> exams
                {partialCount > 0 && <span className="text-amber-600 ml-1.5 text-base">+ {partialCount} partial</span>}
              </p>
              <p className="text-sm text-surface-500 mt-0.5">
                Age as of 1 August {new Date().getFullYear()}: <strong>{calcAge(form.dob)} years</strong> · Category: <strong>{form.category}</strong>
                {JK_STATES.includes(form.state) && <span className="ml-2 badge badge-primary">J&K bonus applied</span>}
              </p>
            </div>
          </div>

          {/* Per-exam cards */}
          <div className="space-y-4">
            {results.map(r => {
              const meta = exam.find(e => e.id === r.examId)!;
              const info = EXAM_2026_INFO[r.examId];
              const statusStyle = {
                eligible:   'border-l-emerald-500 bg-white',
                partial:    'border-l-amber-500 bg-white',
                ineligible: 'border-l-red-400 bg-white',
              }[r.status];
              const badge = {
                eligible:   { text: '✅ Eligible', cls: 'bg-emerald-100 text-emerald-800' },
                partial:    { text: '⚠️ Partially Eligible', cls: 'bg-amber-100 text-amber-800' },
                ineligible: { text: '❌ Not Eligible', cls: 'bg-red-100 text-red-700' },
              }[r.status];

              return (
                <div key={r.examId} className={`card border-l-4 ${statusStyle} overflow-hidden`}>
                  <div className="p-5">
                    {/* Card header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{meta.icon}</span>
                        <div>
                          <h3 className="font-heading font-bold text-surface-900">{meta.shortName}</h3>
                          <p className="text-xs text-surface-400">{meta.name}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ${badge.cls}`}>{badge.text}</span>
                    </div>

                    {/* 2026 info strip */}
                    <div className="flex flex-wrap gap-3 mb-4 p-3 bg-surface-50 rounded-xl text-xs">
                      <span><span className="text-surface-400">💰 2026 Salary:</span> <strong className="text-emerald-600">{info.salary}</strong></span>
                      <span><span className="text-surface-400">📅 Notification:</span> <strong className="text-primary-600">{info.notification}</strong></span>
                    </div>

                    {/* Partial note */}
                    {r.partialNote && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3 text-xs text-amber-800 font-medium">{r.partialNote}</div>
                    )}

                    {/* Check list */}
                    <div className="space-y-2">
                      {r.checks.map((c, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm">
                          <span className={`flex-shrink-0 mt-0.5 text-base font-bold ${c.passed ? 'text-emerald-500' : 'text-red-500'}`}>{c.passed ? '✓' : '✗'}</span>
                          <div>
                            <span className="font-medium text-surface-700">{c.label}:</span>{' '}
                            <span className={c.passed ? 'text-surface-600' : 'text-red-600'}>{c.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA footer */}
                    {r.status !== 'ineligible' && (
                      <div className="mt-4 pt-4 border-t border-surface-200 flex items-center justify-between gap-3">
                        <p className="text-xs text-surface-500 italic">💡 {r.tip}</p>
                        <Link href={`/exams/${meta.slug}`} className="text-xs font-semibold text-primary-500 hover:text-primary-600 whitespace-nowrap flex items-center gap-1">
                          Full 2026 Guide <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-surface-400 mt-6 p-4 bg-surface-50 rounded-xl">
            <strong>Disclaimer:</strong> This is an approximate eligibility check based on general official criteria for 2026 notifications. Age is calculated as of 1 August {new Date().getFullYear()}. Specific cut-off dates and rules may vary per notification. Always verify from the official exam notification before applying.
          </p>
        </div>
      )}
    </div>
  );
}

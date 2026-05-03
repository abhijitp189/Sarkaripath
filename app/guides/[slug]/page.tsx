import Link from 'next/link';
import { Metadata } from 'next';
import { guides } from '@/lib/exams-data';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return { title: 'Guide Not Found' };

  const seoTitles: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'Government Exam Preparation for Beginners 2026 – Step-by-Step Roadmap | TaiyarHo',
    'how-to-fill-government-job-application-form': 'How to Fill Government Job Application Forms – Step by Step Guide (2026) | TaiyarHo',
    'best-free-resources-government-exams': 'Best Free Resources for Government Exam Preparation (2026) – 50+ Verified Links | TaiyarHo',
    'age-limit-relaxation-government-jobs': 'Age Limit & Relaxation for Government Jobs (2026) – Complete Guide for OBC, SC/ST, EWS, PwBD, Ex-Servicemen | TaiyarHo',
    'study-plan-working-professionals': 'Government Exam Preparation for Working Professionals 2026 – Study Plan, Schedule & Strategy | TaiyarHo',
    'documents-needed-government-job': 'Documents Required for Government Job 2026 – Complete Checklist for Application & Document Verification | TaiyarHo',
  };

  const seoDescriptions: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'Complete beginner\'s roadmap to government exam preparation in 2026. Which exam to choose, 12-month study plan, free resources, daily timetables, and the mistakes that fail 90% of aspirants. From zero to selection.',
    'how-to-fill-government-job-application-form': 'Complete step-by-step guide for filling online application forms for SSC, UPSC, IBPS, SBI, and Railway exams. Covers OTR registration, photo & signature upload specs, fee payment, common mistakes to avoid, and correction window details.',
    'best-free-resources-government-exams': 'Comprehensive 2026 guide to 50+ free resources for Indian government exam preparation. Official government platforms (NCERT, DIKSHA, SWAYAM), YouTube channels, mock test sites, apps, previous year papers, and current affairs sources — all verified and free.',
    'age-limit-relaxation-government-jobs': 'Complete 2026 guide to age limits and relaxation rules for Indian government exams. Covers OBC (+3 yrs), SC/ST (+5 yrs), PwBD (+10–15 yrs), Ex-Servicemen, and EWS rules for UPSC, SSC CGL, IBPS PO, SBI PO, and RRB NTPC — with a quick-check table and common mistakes to avoid.',
    'study-plan-working-professionals': 'How to crack government exams while working full-time in 2026. Covers the 3-phase 12-month blueprint, real daily schedules, 14-hour weekend strategy, best apps for micro-learning, and how to manage burnout as a working aspirant.',
    'documents-needed-government-job': 'Complete 2026 checklist of documents needed for government job applications and document verification. Covers ID proof, educational certificates, OBC/SC/ST/EWS reservation documents, NOC, and pro tips to avoid rejection in SSC, IBPS, UPSC, SBI, and Railway exams.',
  };

  const seoKeywords: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'government exam preparation for beginners 2026, how to start government exam preparation, sarkari exam ki taiyari kaise kare, government exam study plan, which government exam to choose, 12 month government exam roadmap',
    'how-to-fill-government-job-application-form': 'how to fill government job application form, SSC CGL application form, UPSC application form, IBPS PO apply online, RRB NTPC application, government exam form filling, photo signature upload government exam, OTR registration, sarkari naukri form kaise bhare',
    'best-free-resources-government-exams': 'free resources government exam preparation 2026, free study material UPSC SSC Banking Railway, best free YouTube channels government exams, NCERT free textbooks, free mock tests government exams, DIKSHA app, SWAYAM, sarkari exam free resources, previous year papers download, muft study material sarkari naukri',
    'age-limit-relaxation-government-jobs': 'age limit government jobs India 2026, age relaxation OBC SC ST EWS PwBD ex-servicemen, sarkari naukri age limit, UPSC SSC CGL IBPS PO SBI PO RRB NTPC age limit, government exam age relaxation rules, umar mein choot sarkari naukri, age relaxation central government',
    'study-plan-working-professionals': 'government exam preparation while working full time, sarkari exam naukri ke saath taiyari, working professional study plan 2026, UPSC preparation job, SSC CGL banking exam while employed, time management government exam, study schedule working professional, sarkari naukri taiyari job ke saath',
    'documents-needed-government-job': 'documents for government job India 2026, document verification DV government exam, OBC NCL certificate validity, documents needed SSC CGL IBPS PO UPSC, government job document checklist, sarkari naukri ke liye documents, name mismatch affidavit, EWS certificate format, government job rejection reasons',
  };

  return {
    title: seoTitles[params.slug] || `${guide.title} | TaiyarHo`,
    description: seoDescriptions[params.slug] || guide.description,
    keywords: seoKeywords[params.slug] || undefined,
    alternates: {
      canonical: `https://www.taiyarho.in/guides/${params.slug}/`,
    },
    openGraph: {
      title: seoTitles[params.slug] || `${guide.title} | TaiyarHo`,
      description: seoDescriptions[params.slug] || guide.description,
      url: `https://www.taiyarho.in/guides/${params.slug}/`,
      siteName: 'TaiyarHo',
      locale: 'en_IN',
      type: 'article',
    },
  };
}

// Guide content — in a real app this would come from MDX files or a CMS
const guideContent: Record<string, { sections: { heading: string; content: string }[] }> = {
  'age-limit-relaxation-government-jobs': {
    sections: [
      {
        heading: 'How Age Limits Work',
        content: 'Every government exam has a minimum and maximum age limit. The age is calculated as on a specific date mentioned in the notification (usually 1st January or 1st August of the exam year). The upper age limit varies by exam — UPSC CSE allows up to 32 years, SSC CGL up to 32 years, Banking exams up to 30 years, and Railway exams up to 33 years. Age limits can vary even between different posts within the same exam.',
      },
      {
        heading: 'OBC Age Relaxation',
        content: 'OBC (Non-Creamy Layer) candidates get 3 years of age relaxation in almost all central government exams. This means if the upper age limit is 30, OBC candidates can apply up to age 33. You need a valid OBC Non-Creamy Layer certificate issued within the relevant financial year. The creamy layer income limit is reviewed periodically by the government.',
      },
      {
        heading: 'SC/ST Age Relaxation',
        content: 'SC (Scheduled Caste) and ST (Scheduled Tribe) candidates get 5 years of age relaxation in central government exams. Additionally, for UPSC CSE, SC/ST candidates get unlimited attempts until the age limit. A valid caste certificate from the competent authority is required. The certificate should be in the prescribed format as mentioned in the exam notification.',
      },
      {
        heading: 'EWS Age Relaxation',
        content: 'EWS (Economically Weaker Section) candidates from the General category are eligible for 10% reservation in government jobs. However, EWS candidates typically do NOT get age relaxation — they follow the General category age limit. The EWS certificate must be obtained fresh every year as it is based on the previous year\'s family income.',
      },
      {
        heading: 'PwBD Age Relaxation',
        content: 'Persons with Benchmark Disability (PwBD) get significant age relaxation: +10 years for General, +13 years for OBC, and +15 years for SC/ST candidates. The disability should be 40% or more as certified by the competent authority. Different exams may have different definitions of eligible disabilities for specific posts.',
      },
      {
        heading: 'Ex-Servicemen Age Relaxation',
        content: 'Ex-Servicemen typically get 3-5 years of age relaxation after deduction of military service rendered. The exact relaxation varies by exam. Some exams like SSC have separate reservation quotas for Ex-Servicemen. Widows and divorced/judicially separated women from the defence forces also get age relaxation in certain exams.',
      },
    ],
  },
  'how-to-fill-government-job-application-form': {
    sections: [
      {
        heading: 'Why Filling the Form Correctly Matters',
        content: 'Every year, thousands of government job applications are rejected before the exam even begins — not because candidates lack eligibility, but because of avoidable mistakes in the application form. A wrong date of birth, an incorrectly sized photograph, a mismatched name spelling, or a missed fee payment can disqualify you silently. Most recruiting bodies like SSC, UPSC, IBPS, and RRB do not notify you about form rejection — your application simply disappears from the system. The application form is the first stage of your selection process, and getting it right is non-negotiable. This guide walks you through every step of the online application process for major government exams in India, covering SSC (ssc.gov.in), UPSC (upsconline.nic.in), IBPS (ibps.in), SBI (sbi.co.in), and RRB (rrbcdg.gov.in). While each exam portal looks slightly different, the overall process follows the same structure: registration, form filling, document upload, fee payment, and submission.',
      },
      {
        heading: 'Documents and Information to Keep Ready Before You Start',
        content: 'Before you open the application portal, gather everything you will need. Having all your details and documents ready prevents last-minute errors. You will need: your Aadhaar card number (mandatory for most exams), a valid mobile number and email ID (you will receive OTPs, registration IDs, and admit card links on these — do not change them mid-process), your 10th (matriculation) marksheet for name, date of birth, roll number, board name, and passing year (this is the base reference document for all government exams — your name and date of birth must match your 10th certificate exactly), your 12th and graduation marksheets with percentage and passing year, your caste/category certificate if applicable (OBC Non-Creamy Layer, SC, ST, EWS — ensure it is in the format prescribed by the central government and issued by the competent authority), a PwBD certificate if applicable (40% or more disability certified by a government medical board), a recent passport-size colour photograph in JPG/JPEG format with a plain white or light background (specifications vary by exam — details in the Photo and Signature section below), your signature scanned in JPG/JPEG format on a white sheet using black ink, and a left-hand thumb impression scanned (required by IBPS and some banking exams). Keep all files saved in a folder on your computer or phone, clearly labelled — for example, "Photo_SSC.jpg", "Signature_SSC.jpg", "Thumb_IBPS.jpg".',
      },
      {
        heading: 'Step 1: One-Time Registration (OTR) — Your Permanent Exam Profile',
        content: 'Most major exam bodies now use a One-Time Registration (OTR) system. This means you create your profile once and can reuse it for all future exams conducted by that body. For SSC exams (CGL, CHSL, MTS, GD, CPO): visit ssc.gov.in and click "Register / Login" or use the MySSC app. You will enter your name, date of birth, father\'s name, mobile number, email ID, and Aadhaar number. After submitting, you receive a Registration ID and password via SMS and email. For UPSC exams (CSE, NDA, CDS, CAPF): visit upsconline.nic.in and click "New Registration" under the OTR section. Verify your email ID and mobile number via OTP, then create a password. UPSC\'s new portal (launched 2025) requires you to fill personal details, upload documents, and complete a Common Application Form — all of which are saved permanently in your profile. For IBPS exams (PO, Clerk, SO, RRB): visit ibps.in and click on the relevant exam notification link, then select "New Registration". Enter your name, mobile number, email ID, and a security code. You will receive login credentials on your registered mobile and email. For RRB exams (NTPC, Group D, ALP): visit the regional RRB website (e.g., rrbcdg.gov.in, rrbchennai.gov.in) and register with basic details. Important: save your Registration ID and password securely. Write them down and take a screenshot. You will need these credentials for downloading admit cards, checking results, and applying for future exams.',
      },
      {
        heading: 'Step 2: Log In and Select the Exam You Want to Apply For',
        content: 'After registration, log in to the portal using your Registration ID (or email/mobile for UPSC) and your password. Navigate to the active exam notifications — for SSC, this appears under "Apply" or "Latest Notifications" on ssc.gov.in; for IBPS, you will see the relevant "CRP PO/MT" or "CRP Clerk" link; for UPSC, go to "Latest Notification" in your OTR dashboard; for RRB, click on the specific recruitment link. Click on the exam you want to apply for. Read the instructions and eligibility criteria displayed on the screen carefully before proceeding. Each exam portal will show the start date, last date, and fee payment deadline. A critical rule: never wait for the last day. Apply at least 5–7 days before the deadline. Server crashes and payment failures are common on the final day, and the exam body will not extend the deadline for you.',
      },
      {
        heading: 'Step 3: Fill Personal Details Accurately',
        content: 'This is the section where most errors happen. You will be asked to enter: your full name (must match your 10th marksheet exactly — spelling, order of first/middle/last name, and initials must be identical), father\'s name and mother\'s name (again, exactly as on your 10th certificate), date of birth (as on your 10th certificate — this is the only document accepted as proof of birth for government exams), gender, nationality, religion, marital status, and correspondence and permanent address. For category selection, choose carefully: General, OBC (Non-Creamy Layer), SC, ST, EWS, or PwBD. If you are OBC, you must have a Non-Creamy Layer certificate valid for the current financial year. If your certificate has expired or is in the wrong format, your reservation benefit will be denied during document verification even if you clear the exam. Double-check every field before moving to the next section. Some portals like SSC and UPSC offer a correction window after submission — but it is limited to specific fields (usually name, father\'s name, mother\'s name, date of birth, gender, and matriculation roll number). Fields like category and address may not be editable.',
      },
      {
        heading: 'Step 4: Fill Educational Qualification Details',
        content: 'Enter your educational qualifications starting from 10th (matriculation). You will typically be asked for: 10th board name, roll number, passing year, and percentage or CGPA. 12th board name, stream, passing year, and percentage. Graduation degree name, university, passing year, and percentage. Post-graduation details, if applicable. For SSC exams: the 10th roll number and board name are mandatory fields — SSC uses these as a primary reference. For banking exams (IBPS, SBI): you must also indicate your computer course or IT knowledge. Mention your proficiency (course name, duration, institution). Some exams require you to select whether you have completed a certificate course, a diploma, or have studied computer science/IT as a subject in your degree. For UPSC CSE: you will select your optional subject for Mains, your preferred language for answering, and the compulsory Indian language for Paper A. Ensure your graduation percentage is accurate — if you have a CGPA, convert it to percentage using your university\'s official conversion formula before entering it. A mismatch discovered during document verification can lead to cancellation even after you have cleared the exam.',
      },
      {
        heading: 'Step 5: Upload Photograph and Signature (Exam-Wise Specifications)',
        content: 'This is the most common reason for silent form rejection. Each exam body has specific size, dimension, and format requirements. SSC (CGL, CHSL, MTS, GD): Photograph must be in JPG format, between 4 KB and 12 KB in file size, with dimensions of 100×120 pixels. The photo must have a white or light-coloured background with the face clearly visible. Signature must be in JPG format, between 1 KB and 12 KB, with clear black or blue ink on a white sheet. UPSC (CSE, NDA, CDS): Photograph must be in JPG format, between 20 KB and 300 KB, with dimensions of approximately 200×230 pixels. The photo must have a plain white background with the candidate\'s name and date printed at the bottom of the photograph. UPSC also requires a triple signature — sign your name three times vertically on a plain white sheet using black ink, scan all three signatures together as one single image file. UPSC\'s new portal also requires a live photo capture during form submission. IBPS and SBI (PO, Clerk, SO): Photograph must be in JPG format, between 20 KB and 50 KB, dimensions 200×230 pixels, white background. Signature must be between 10 KB and 20 KB, dimensions 140×60 pixels, in black ink on white paper. IBPS also requires a left-hand thumb impression (scanned, 10 KB–20 KB, JPG) and a handwritten declaration in English in your own handwriting stating that all information provided is correct and true. RRB (NTPC, Group D, ALP): Photograph must be in JPG format, between 20 KB and 50 KB, dimensions approximately 3.5×4.5 cm (similar to a standard passport photo), with a plain white background. The photo should be taken on or after the notification date. Signature in black ink on white paper, JPG format, between 10 KB and 20 KB. Important tip: use a free online photo resizer tool to adjust your photo and signature to the exact file size and pixel dimensions. Several free tools are available that let you select your specific exam and automatically resize to the correct specifications.',
      },
      {
        heading: 'Step 6: Choose Exam Centres, Post Preferences, and Other Options',
        content: 'Most exams allow you to select 3–4 preferred exam centre cities. Choose cities that are closest to your location and easy to travel to — the conducting body will try to allot your first preference, but there is no guarantee. For banking exams (IBPS PO, SBI PO): you will also select your preferred banks in order of priority. Your bank posting after final selection depends partly on this preference order, so think carefully about where you are willing to work. IBPS allows you to choose from 11 participating public sector banks. For SSC CGL: you may need to indicate post preferences (e.g., Inspector of Income Tax, Sub-Inspector in CBI, Assistant Audit Officer, etc.) either during the application or after the exam in a separate post-preference form. For UPSC CSE: you will rank your preferred services (IAS, IPS, IFS, IRS, etc.) and select your optional subject and examination language. Some exams ask whether you wish to opt for Pre-Examination Training (PET), which is available for SC/ST/OBC/EWS candidates in some banking and central government exams.',
      },
      {
        heading: 'Step 7: Pay the Application Fee',
        content: 'Application fees for most government exams can be paid online through net banking, debit card, credit card, or UPI. Some exams like SSC also accept payment through SBI challan (offline). Typical fee structure: SSC exams (CGL, CHSL, MTS): ₹100 for General and OBC candidates. Female candidates and SC/ST/PwBD/Ex-Servicemen candidates are exempted from paying the fee. UPSC CSE: ₹100 for General and OBC candidates. Female candidates and SC/ST/PwBD candidates are exempted. IBPS PO: ₹850 for General and OBC candidates, ₹175 for SC/ST/PwBD candidates. SBI PO: ₹750 for General/EWS/OBC candidates, ₹125 for SC/ST/PwBD candidates. RRB NTPC: ₹500 for General and OBC candidates, ₹250 for SC/ST/PwBD/Female/Transgender/Minorities/EBC candidates (a portion is refunded after appearing in the exam). Important: your application is NOT considered submitted until the fee is paid. If the payment fails, log back in and retry — do not submit a second application. Check your bank statement before retrying to ensure the first attempt did not debit the amount. If amount is debited but the portal shows payment failure, wait 48–72 hours — it usually auto-reconciles. If it does not, contact the exam body\'s helpline with your transaction reference number.',
      },
      {
        heading: 'Step 8: Preview, Verify, and Submit the Form',
        content: 'Before final submission, every portal shows a preview of your complete application form. This is your last chance to verify everything. Check systematically: is your name spelled correctly and matching your 10th certificate? Is your date of birth correct? Is your category selection accurate? Are the uploaded photo and signature clear and meeting specifications? Are your educational details (percentage, passing year) accurate? Are your exam centre choices correct? After verifying, click the final "Submit" button. Once submitted, most portals do not allow any changes except through a limited correction window (if offered). SSC offers a correction window of 2–3 days after the application period closes, where you can edit specific fields (name, father\'s name, mother\'s name, DOB, gender, matriculation details). IBPS offers a 2-day correction window with a ₹200 fee, but email ID and mobile number cannot be changed. UPSC generally does not allow corrections after final submission — verify everything before you click submit.',
      },
      {
        heading: 'Step 9: Download and Save Confirmation',
        content: 'After successful submission, you will see a confirmation page with your application number or registration number. Take these steps immediately: take a screenshot of the confirmation page, download or print the submitted application form as a PDF (most portals offer a "Print Application" option), save the payment receipt or transaction ID separately, and note down your Registration ID and password in a safe place. You will need the application print-out during document verification after the exam. Some exam bodies like IBPS issue a call letter that must be printed and brought to the exam centre along with a photo ID. Keep these documents safely until the entire recruitment process (exam, result, document verification, joining) is complete — this can take 8–18 months.',
      },
      {
        heading: 'Common Mistakes That Lead to Form Rejection',
        content: 'Based on official guidelines and candidate experiences, these are the most frequent errors that cause application rejection: Name mismatch — your application name must match your 10th marksheet letter-for-letter. Even small differences like "Mohammad" vs "Mohammed" or "Subramaniam" vs "Subramanian" can cause problems during document verification. Wrong date of birth — this must match your 10th certificate exactly. Wrong category selection — choosing General when you are OBC, or selecting OBC without a valid Non-Creamy Layer certificate, leads to rejection. If your OBC NCL certificate has expired, you will lose the reservation benefit. Uploading the wrong photo or signature format — using PNG instead of JPG, exceeding the file size limit, or uploading a blurry or old photograph are common causes. For IBPS exams, uploading a signature in capital letters instead of a running-hand signature leads to rejection. Not paying the fee — many candidates fill the entire form but forget to complete payment. The application remains incomplete. Submitting multiple applications — some exams (like SSC) explicitly state that if duplicate applications are found, all of them may be cancelled. Apply only once per exam. Incorrect educational details — entering the wrong passing year, wrong percentage, or wrong university name can cause your candidature to be cancelled during document verification, even after you have cleared the written exam.',
      },
      {
        heading: 'Using the Correction Window Effectively',
        content: 'SSC typically opens a correction window for 2–3 days after the application deadline closes. During this window, you can edit: name, father\'s name, mother\'s name, date of birth, gender, and 10th roll number. You can make corrections up to two times. Log in with your registration ID and password, make the changes, and re-submit. IBPS provides a correction window (usually 2 days) where you can update most details except your name, email ID, and mobile number. A correction fee of ₹200 is charged. UPSC does not provide a correction window for most exams — this is why it is critical to verify every detail before submitting your UPSC application. RRB also offers limited correction opportunities — check the official notification for specific details. If you discover a major error after the correction window has closed, write an application to the exam body\'s helpline or the nearest regional office explaining the mistake. Attach supporting documents. While there is no guarantee this will be accepted, it creates a record that can help you during document verification.',
      },
      {
        heading: 'Official Websites for Applying to Major Government Exams',
        content: 'Always apply through the official website only. Beware of fake websites that look similar but are designed to steal your money or personal data. SSC exams (CGL, CHSL, MTS, GD, CPO, Stenographer): ssc.gov.in — this is the only official SSC website. You can also use the MySSC mobile app available on Google Play Store. UPSC exams (CSE, NDA, CDS, CAPF, ESE, CMS): upsconline.nic.in for OTR and applications, upsc.gov.in for notifications and results. IBPS exams (PO, Clerk, SO, RRB Officer): ibps.in — the only official IBPS portal. SBI exams (PO, Clerk, SO): sbi.co.in/careers — navigate to the recruitment section. RRB Railway exams (NTPC, Group D, ALP, JE): each RRB has its own regional website — rrbcdg.gov.in (Delhi), rrbchennai.gov.in (Chennai), rrbmumbai.gov.in (Mumbai), and so on. The exam notification will mention which RRB website to use. Never pay anyone to fill your form on your behalf. The process is straightforward, and this guide has everything you need.',
      },
      {
        heading: 'Quick Checklist Before You Submit',
        content: 'Before clicking "Final Submit", run through this checklist: Name, father\'s name, and mother\'s name match your 10th marksheet exactly. Date of birth is correct and matches your 10th certificate. Category (General/OBC/SC/ST/EWS/PwBD) is selected correctly with a valid certificate. Photo is recent (within last 3 months), in JPG format, within the specified file size, with white background. Signature is in black ink on white paper, in JPG format, within the specified file size. Educational details (board, percentage, passing year) are accurate. Exam centre preferences are filled in. Application fee is paid and confirmed. You have saved or printed the confirmation page and noted your registration number. Taking five extra minutes to verify everything can save you from months of regret. Fill the form carefully, apply early, and focus on your preparation. Good luck with your exam!',
      },
    ],
  },
};

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  const content = guideContent[params.slug];

  if (!guide) {
    return (
      <div className="container-main py-20 text-center">
        <h1 className="text-2xl font-heading font-bold text-surface-800 mb-4">Guide Not Found</h1>
        <Link href="/guides" className="btn-primary">Browse All Guides</Link>
      </div>
    );
  }

  // Full rich article for the beginner roadmap
  if (params.slug === 'how-to-start-government-exam-preparation') {
    return <GovExamBeginnersGuide guide={guide} />;
  }

  // Full rich article for the free resources guide
  if (params.slug === 'best-free-resources-government-exams') {
    return <FreeResourcesGuide guide={guide} />;
  }

  // Full rich article for how to fill application form guide
  if (params.slug === 'how-to-fill-government-job-application-form') {
    return <FillFormGuide guide={guide} />;
  }

  // Full rich article for age limit & relaxation guide
  if (params.slug === 'age-limit-relaxation-government-jobs') {
    return <AgeRelaxationGuide guide={guide} />;
  }

  // Full rich article for working professionals study plan
  if (params.slug === 'study-plan-working-professionals') {
    return <WorkingProfessionalsGuide guide={guide} />;
  }

  // Full rich article for documents needed guide
  if (params.slug === 'documents-needed-government-job') {
    return <DocumentsGuide guide={guide} />;
  }

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">{guide.category}</span>
      </nav>

      <article className="max-w-3xl">
        <span className="badge badge-accent mb-4">{guide.category}</span>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-4">{guide.title}</h1>
        <p className="text-lg text-surface-500 leading-relaxed mb-8">{guide.description}</p>

        {content ? (
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-heading font-bold text-surface-800 mb-3">{section.heading}</h2>
                <p className="text-surface-600 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center border-dashed border-2 border-surface-300">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-heading font-bold text-lg text-surface-700 mb-2">Content Coming Soon</h3>
            <p className="text-sm text-surface-500">This guide is being prepared. Check back soon for the complete article.</p>
          </div>
        )}

        {/* Related */}
        <div className="mt-12 pt-8 border-t border-surface-200">
          <h3 className="font-heading font-bold text-lg text-surface-800 mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.filter((g) => g.slug !== params.slug).slice(0, 4).map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card p-4 group">
                <span className="badge badge-accent mb-2 text-xs">{g.category}</span>
                <h4 className="font-semibold text-sm text-surface-800 group-hover:text-primary-500 transition-colors">{g.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.description,
            author: {
              '@type': 'Organization',
              name: 'TaiyarHo',
              url: 'https://www.taiyarho.in',
            },
            publisher: {
              '@type': 'Organization',
              name: 'TaiyarHo',
              url: 'https://www.taiyarho.in',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.taiyarho.in/guides/${params.slug}`,
            },
            ...(params.slug === 'how-to-fill-government-job-application-form'
              ? {
                  '@type': 'HowTo',
                  name: guide.title,
                  description: guide.description,
                  step: content
                    ? content.sections
                        .filter((s) => s.heading.toLowerCase().startsWith('step'))
                        .map((s, i) => ({
                          '@type': 'HowToStep',
                          position: i + 1,
                          name: s.heading,
                          text: s.content.substring(0, 200),
                        }))
                    : [],
                }
              : {}),
          }),
        }}
      />
    </div>
  );
}

// ─── GOVERNMENT EXAM BEGINNERS GUIDE — FULL RICH ARTICLE ─────────────────────
function GovExamBeginnersGuide({ guide }: { guide: { slug: string; title: string; description: string; category: string; readTime: string } }) {
  const toc = [
    { id: 'why', label: 'Why Government Jobs?' },
    { id: 'choose', label: 'Which Exam to Choose' },
    { id: 'roadmap', label: '12-Month Roadmap' },
    { id: 'subjects', label: 'Subject-wise Strategy' },
    { id: 'timetable', label: 'Daily Study Timetable' },
    { id: 'resources', label: 'Free Resources' },
    { id: 'mistakes', label: 'Mistakes to Avoid' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Beginner&apos;s Roadmap 2026</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-surface-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-accent-500/20 border border-accent-500/40 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                  Updated April 2026
                </span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Beginners</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">2026 Roadmap</span>
                <span className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded">Free Guide</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                Government Exam Preparation for Beginners 2026 — <span className="text-accent-300 italic">From Zero to Selection</span>
              </h1>
              <p className="text-primary-200 text-base leading-relaxed mb-5 max-w-2xl">
                No coaching, no background, no idea where to start? This guide gives you the complete roadmap — which exam to pick, what to study, and a 12-month plan to get selected. 100% free.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-primary-300">
                <span>📅 April 2026</span>
                <span>⏱ {guide.readTime}</span>
                <span>🎯 For fresh starters, 18–30 yrs</span>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Exams Covered', value: '100+', sub: 'Across 8 categories' },
              { label: 'Min. Qualification', value: '8th Pass', sub: 'Some exams need just 8th' },
              { label: 'Avg. Starting Salary', value: '₹25K–₹60K', sub: 'Before DA/HRA' },
              { label: 'Avg. Prep Time', value: '6–12 mo', sub: 'For most beginner exams' },
            ].map(f => (
              <div key={f.label} className="card p-4 text-center">
                <div className="text-xs text-surface-400 uppercase tracking-wide font-semibold">{f.label}</div>
                <div className="text-xl font-heading font-bold text-accent-500 mt-1">{f.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          <GCallout type="info" title="🎯 Who Is This Guide For?">
            This guide is for complete beginners — students who just graduated, working professionals thinking of switching, or anyone who has heard about &quot;sarkari naukri&quot; but doesn&apos;t know where to start. No prior knowledge assumed.
          </GCallout>

          {/* Mobile TOC */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          {/* WHY GOVT JOBS */}
          <GSection id="why" title="Why Government Jobs Are Still Worth It in 2026">
            <p className="text-surface-600 leading-relaxed mb-5">
              Every year, over 3 crore candidates apply for government exams in India. Government jobs offer benefits that most private sector positions simply cannot match, especially at the entry level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                { icon: '🔒', title: 'Job Security', desc: 'No layoffs, no downsizing. Your job is protected till retirement at 58–60.' },
                { icon: '💰', title: 'Salary + Perks', desc: '7th Pay Commission salary, DA, HRA, pension, medical benefits, LTC.' },
                { icon: '⚖️', title: 'Work-Life Balance', desc: 'Fixed working hours, gazetted holidays, earned leave. No midnight emails.' },
                { icon: '🏥', title: 'Medical & Pension', desc: 'CGHS/State health scheme for you and family. Pension after retirement.' },
                { icon: '📈', title: 'Career Growth', desc: 'Time-bound promotions. Many Group C officers retire as Group B or Group A.' },
                { icon: '🏡', title: 'Social Status', desc: 'Government officer designation carries weight, especially in tier-2/3 cities.' },
              ].map(item => (
                <div key={item.title} className="card p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-surface-800 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <GCallout type="tip" title="✅ Reality Check">
              Government jobs are competitive — but government exams have a <strong>defined syllabus, a transparent process, and no referral culture</strong>. If you study the right things, you will clear.
            </GCallout>
          </GSection>

          {/* WHICH EXAM */}
          <GSection id="choose" title="Which Government Exam Should You Choose?">
            <p className="text-surface-600 leading-relaxed mb-5">
              This is the most important decision you&apos;ll make. Use this table to match your qualification to the right exam.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Your Qualification</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Best Exams to Target</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Salary Range</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['8th / 10th Pass', 'SSC MTS, RRB Group D, State Police Constable', '₹18K–₹25K', 'Easy–Medium'],
                    ['12th Pass', 'SSC CHSL, SSC GD, Railway NTPC, Delhi Police', '₹22K–₹35K', 'Medium'],
                    ['Graduate (Any)', 'SSC CGL, IBPS PO/Clerk, RBI Assistant, State PSC', '₹30K–₹55K', 'Medium–Hard'],
                    ['Graduate (Specific)', 'UPSC IAS, UPSC ESE, SSC JE, SEBI, RBI Grade B', '₹50K–₹2L', 'Hard–Very Hard'],
                    ['Post Graduate', 'UGC NET, KVS PGT, NVS, UPSC, NABARD', '₹55K–₹1.5L', 'Hard'],
                  ].map(([qual, exams, salary, diff], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{qual}</td>
                      <td className="p-3 text-surface-600">{exams}</td>
                      <td className="p-3 text-emerald-600 font-semibold text-xs">{salary}</td>
                      <td className="p-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          diff === 'Easy–Medium' ? 'bg-emerald-100 text-emerald-700' :
                          diff === 'Medium' ? 'bg-blue-100 text-blue-700' :
                          diff === 'Medium–Hard' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>{diff}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { cat: 'SSC Exams', icon: '📝', exams: 'CGL, CHSL, MTS, GD, CPO', bestFor: 'Graduates wanting central govt desk jobs', prep: '6–8 months' },
                { cat: 'Banking Exams', icon: '🏦', exams: 'IBPS PO, SBI PO, RBI Assistant', bestFor: 'Graduates who like numbers and finance', prep: '4–6 months' },
                { cat: 'Railway Exams', icon: '🚂', exams: 'RRB NTPC, Group D, ALP, JE', bestFor: '10th/12th pass, huge vacancies', prep: '4–6 months' },
                { cat: 'UPSC Exams', icon: '🏛️', exams: 'IAS, NDA, CDS, CAPF', bestFor: 'Top-tier aspirants, leadership roles', prep: '12–24 months' },
                { cat: 'State PSC', icon: '🗺️', exams: 'MPSC, UPPSC, BPSC, RPSC', bestFor: 'Want to serve in home state', prep: '8–14 months' },
                { cat: 'Defence Exams', icon: '🎖️', exams: 'NDA, CDS, AFCAT, Agniveer', bestFor: 'Physically fit, want armed forces life', prep: '4–8 months' },
              ].map(item => (
                <div key={item.cat} className="card p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-heading font-bold text-surface-800">{item.cat}</span>
                  </div>
                  <div className="text-xs text-surface-500 mb-2">Popular: {item.exams}</div>
                  <div className="text-xs text-surface-600 mb-1"><strong>Best for:</strong> {item.bestFor}</div>
                  <div className="text-xs text-primary-500 font-semibold">Prep time: {item.prep}</div>
                </div>
              ))}
            </div>
            <GCallout type="warning" title="⚡ Golden Rule for Beginners">
              Pick <strong>one exam category</strong> and prepare for 2–3 exams within it. SSC CGL + CHSL + NTPC makes sense (70–80% overlap). SSC CGL + UPSC IAS + IBPS PO together does not.
            </GCallout>
            <p className="text-sm text-surface-500 mt-4">
              Not sure which exam you qualify for? Use our <Link href="/tools/eligibility-checker" className="text-primary-500 font-semibold hover:underline">Eligibility Checker</Link> — enter your age and qualification, and it shows every exam you can apply for.
            </p>
          </GSection>

          {/* 12-MONTH ROADMAP */}
          <GSection id="roadmap" title="The 12-Month Roadmap: From Zero to Selection">
            <p className="text-surface-600 leading-relaxed mb-6">
              Most government exams for graduates (SSC, Banking, Railway) can be cracked within 6–12 months of focused preparation. Here is a phase-wise roadmap that works for almost every beginner.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  phase: 'Phase 1', title: 'Foundation', months: 'Month 1–3', color: 'bg-blue-500', pct: '25%',
                  tasks: ['Download and study the official syllabus of your target exam', 'Start with NCERT books (Class 6–10) for Maths, Science, and Social Studies', 'Learn one subject at a time — finish basics before moving to the next', 'Read one newspaper daily (The Hindu / Indian Express) for current affairs', 'Maintain a handwritten formula notebook from day one'],
                  tip: 'Don\'t take mock tests yet. Build concepts first. Speed comes later.',
                },
                {
                  phase: 'Phase 2', title: 'Building', months: 'Month 4–6', color: 'bg-amber-500', pct: '50%',
                  tasks: ['Move to standard reference books (R.S. Aggarwal, S.P. Bakshi, Lucent GK)', 'Start solving topic-wise previous year questions', 'Begin sectional mock tests (one subject at a time)', 'Revise NCERT notes weekly — do not forget the foundation', 'Compile a monthly current affairs PDF and revise it regularly'],
                  tip: 'By Month 6, you should have covered 80% of the syllabus at least once.',
                },
                {
                  phase: 'Phase 3', title: 'Practice & Mock Tests', months: 'Month 7–10', color: 'bg-orange-500', pct: '80%',
                  tasks: ['Take 2–3 full-length mock tests every week', 'Analyze every mock: find weak topics, time-wasters, silly mistakes', 'Solve last 5 years of previous year papers of your target exam', 'Focus on speed and accuracy — learn shortcuts and elimination techniques', 'Revise current affairs from last 6 months thoroughly'],
                  tip: 'Your rank is decided by mock test performance, not how many books you read.',
                },
                {
                  phase: 'Phase 4', title: 'Revision & Exam', months: 'Month 11–12', color: 'bg-emerald-500', pct: '100%',
                  tasks: ['Stop learning new topics — only revise what you already know', 'Take one full-length mock daily in exam-like conditions', 'Revise formula notebook, error notebook, and current affairs notes', 'Practice time management: decide which questions to skip in advance', 'Sleep well, eat well, and stay calm in the week before the exam'],
                  tip: 'In the last month, revision beats new learning. Trust your preparation.',
                },
              ].map(phase => (
                <div key={phase.phase} className="card overflow-hidden">
                  <div className="flex items-center gap-4 p-5 border-b border-surface-100">
                    <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-heading font-bold text-sm">{phase.phase.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-heading font-bold text-surface-900">{phase.phase}: {phase.title}</span>
                        <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded">{phase.months}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-surface-100 rounded-full h-1.5 overflow-hidden max-w-[200px]">
                          <div className={`h-full rounded-full ${phase.color}`} style={{ width: phase.pct }} />
                        </div>
                        <span className="text-xs text-surface-400">{phase.pct} syllabus</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-2 mb-3">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 ${phase.color} rounded-full mt-1.5 flex-shrink-0`} />
                          <span className="text-sm text-surface-600">{task}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-surface-50 rounded-lg p-3 text-xs text-surface-500">
                      <strong className="text-surface-700">Pro tip:</strong> {phase.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="info" title="📌 What If You Have Less Than 6 Months?">
              Compress Phases 1 and 2 into 2 months total. Skip NCERT and go directly to standard books + previous year papers. Many candidates clear SSC CHSL, Banking Clerk, and RRB Group D in 3–4 months of focused study.
            </GCallout>
          </GSection>

          {/* SUBJECT STRATEGY */}
          <GSection id="subjects" title="Subject-wise Preparation Strategy">
            <p className="text-surface-600 leading-relaxed mb-6">Most government exams test four core subjects. Here is what to focus on in each.</p>
            <GSubjectCard
              num="1" name="Quantitative Aptitude / Maths" meta="Tested in: SSC, Banking, Railway, State PSC" badge="Practice Heavy"
              desc="This is where most beginners struggle — and where toppers score highest. The secret is daily practice, not just reading theory."
              hotTopics={['Percentage', 'Profit & Loss', 'Ratio & Proportion', 'Time & Work', 'Simple & Compound Interest']}
              normalTopics={['Number System', 'Average', 'Speed & Distance', 'Geometry', 'Trigonometry', 'Algebra', 'Data Interpretation', 'Mensuration']}
            />
            <GSubjectCard
              num="2" name="Reasoning & Logic" meta="Tested in: SSC, Banking, Railway, Defence" badge="High Scoring"
              desc="Easiest subject to score in for beginners. No formulas to memorize — it is pure pattern recognition. Solve 20–30 questions daily."
              hotTopics={['Coding–Decoding', 'Blood Relations', 'Syllogism', 'Puzzles & Seating Arrangement', 'Direction Sense']}
              normalTopics={['Series', 'Analogies', 'Classification', 'Order & Ranking', 'Inequality', 'Data Sufficiency', 'Venn Diagrams', 'Mirror & Water Images']}
            />
            <GSubjectCard
              num="3" name="English Language" meta="Tested in: SSC, Banking, UPSC (CSAT), Defence" badge="Differentiator"
              desc="Even Hindi-medium students can master English for exams. Focus on grammar rules and reading comprehension."
              hotTopics={['Reading Comprehension', 'Error Detection', 'Fill in the Blanks (Cloze)', 'Sentence Improvement']}
              normalTopics={['Synonyms & Antonyms', 'One Word Substitution', 'Idioms & Phrases', 'Para Jumbles', 'Spelling Errors', 'Active/Passive Voice', 'Direct/Indirect Speech']}
            />
            <GSubjectCard
              num="4" name="General Awareness / GK" meta="Tested in: All government exams" badge="Score Booster"
              desc="Static GK (history, geography, polity, science) + Current Affairs (last 6–12 months). NCERT for static GK. Daily reading for current affairs."
              hotTopics={['Current Affairs (last 6 months)', 'Indian History', 'Indian Polity & Constitution', 'Geography']}
              normalTopics={['Economics & Budget', 'General Science', 'Government Schemes', 'Sports & Awards', 'Important Days', 'Computer Basics', 'Banking Awareness']}
            />
            <GCallout type="tip" title="✅ Priority Order for Beginners">
              <strong>Start with:</strong> Reasoning (easiest wins) → Maths (needs most practice) → English (grammar rules) → GK (daily habit). Master one at a time in the first 2 months, then study all four daily.
            </GCallout>
          </GSection>

          {/* TIMETABLE */}
          <GSection id="timetable" title="Daily Study Timetable for Beginners">
            <p className="text-surface-600 leading-relaxed mb-5">Consistent 5–6 focused hours beat irregular 10-hour marathons. Two plans — full-time aspirants and working professionals.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div className="card overflow-hidden">
                <div className="bg-primary-500 text-white p-4">
                  <div className="font-heading font-bold">Full-Time Aspirant</div>
                  <div className="text-xs text-primary-100">5–6 hours/day | 6 days/week</div>
                </div>
                <div className="p-4">
                  {[
                    { time: '7:00–7:30 AM', task: 'Newspaper reading (current affairs)', tag: 'GK' },
                    { time: '8:00–10:00 AM', task: 'Maths — new concepts + practice', tag: 'Maths' },
                    { time: '10:30–12:00 PM', task: 'Reasoning — topic-wise questions', tag: 'Reasoning' },
                    { time: '2:00–3:00 PM', task: 'English — grammar + comprehension', tag: 'English' },
                    { time: '3:30–4:30 PM', task: 'GK — static + revision', tag: 'GK' },
                    { time: '8:00–9:00 PM', task: 'Revision + error notebook', tag: 'Revision' },
                  ].map((slot, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-surface-100 last:border-0">
                      <span className="text-xs text-surface-400 w-24 flex-shrink-0 font-mono">{slot.time}</span>
                      <span className="text-sm text-surface-700 flex-1">{slot.task}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${slot.tag === 'Maths' ? 'bg-blue-100 text-blue-700' : slot.tag === 'Reasoning' ? 'bg-purple-100 text-purple-700' : slot.tag === 'English' ? 'bg-amber-100 text-amber-700' : slot.tag === 'GK' ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-100 text-surface-600'}`}>{slot.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card overflow-hidden">
                <div className="bg-surface-800 text-white p-4">
                  <div className="font-heading font-bold">Working Professional</div>
                  <div className="text-xs text-surface-300">3–4 hours/day | 7 days/week</div>
                </div>
                <div className="p-4">
                  {[
                    { time: '6:00–7:00 AM', task: 'Maths — practice 30 questions', tag: 'Maths' },
                    { time: '7:00–7:30 AM', task: 'Newspaper scan (headlines)', tag: 'GK' },
                    { time: 'Commute', task: 'YouTube lectures or GK revision app', tag: 'Flexible' },
                    { time: 'Lunch Break', task: 'English — 1 RC passage + grammar quiz', tag: 'English' },
                    { time: '9:00–10:30 PM', task: 'Reasoning + revision + mock analysis', tag: 'Reasoning' },
                    { time: 'Weekends', task: 'Full-length mock test + deep analysis', tag: 'Mock' },
                  ].map((slot, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-surface-100 last:border-0">
                      <span className="text-xs text-surface-400 w-24 flex-shrink-0 font-mono">{slot.time}</span>
                      <span className="text-sm text-surface-700 flex-1">{slot.task}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${slot.tag === 'Maths' ? 'bg-blue-100 text-blue-700' : slot.tag === 'Reasoning' ? 'bg-purple-100 text-purple-700' : slot.tag === 'English' ? 'bg-amber-100 text-amber-700' : slot.tag === 'GK' ? 'bg-emerald-100 text-emerald-700' : slot.tag === 'Mock' ? 'bg-accent-50 text-accent-700' : 'bg-surface-100 text-surface-600'}`}>{slot.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <GCallout type="tip" title="✅ Consistency Beats Intensity">
              4 hours every single day for 6 months beats 12 hours for 10 days and then burning out. See our <Link href="/guides/study-plan-working-professionals" className="text-emerald-700 underline font-semibold">full guide for working professionals</Link>.
            </GCallout>
          </GSection>

          {/* FREE RESOURCES */}
          <GSection id="resources" title="Best Free Resources (No Money Needed)">
            <p className="text-surface-600 leading-relaxed mb-5">You do <strong>not</strong> need expensive coaching or premium apps to crack government exams.</p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-surface-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Resource</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Best For</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Cost</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['NCERT Books (ncert.nic.in)', 'Foundation for all subjects', 'Free', '⭐⭐⭐⭐⭐'],
                    ['YouTube (StudyIQ, Adda247, Exampur)', 'Video lectures for all exams', 'Free', '⭐⭐⭐⭐⭐'],
                    ['Official exam websites (ssc.gov.in, ibps.in)', 'Previous year papers + notifications', 'Free', '⭐⭐⭐⭐⭐'],
                    ['Testbook / Oliveboard free mocks', 'Mock tests with analysis', 'Free (limited)', '⭐⭐⭐⭐'],
                    ['Daily newspaper (The Hindu / Indian Express)', 'Current affairs', '₹0–₹300/mo', '⭐⭐⭐⭐⭐'],
                    ['TaiyarHo.in', 'Exam guides, eligibility checker, resources', 'Free', '⭐⭐⭐⭐⭐'],
                  ].map(([resource, best, cost, rating], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{resource}</td>
                      <td className="p-3 text-surface-600 text-xs">{best}</td>
                      <td className="p-3"><span className={`text-xs font-semibold px-2 py-0.5 rounded ${cost === 'Free' ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-100 text-surface-600'}`}>{cost}</span></td>
                      <td className="p-3 text-xs">{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                { subject: 'Maths', book: 'Quantitative Aptitude — R.S. Aggarwal', price: '~₹500' },
                { subject: 'Reasoning', book: 'A Modern Approach — R.S. Aggarwal', price: '~₹450' },
                { subject: 'English', book: 'Objective General English — S.P. Bakshi', price: '~₹350' },
                { subject: 'GK', book: "Lucent's General Knowledge", price: '~₹250' },
              ].map(item => (
                <div key={item.subject} className="card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-heading font-bold text-xs flex-shrink-0">{item.subject.slice(0, 2).toUpperCase()}</div>
                  <div><div className="text-sm font-semibold text-surface-800">{item.book}</div><div className="text-xs text-surface-400">{item.price}</div></div>
                </div>
              ))}
            </div>
            <p className="text-sm text-surface-500">Full curated list at our <Link href="/resources" className="text-primary-500 font-semibold hover:underline">Free Resources Hub</Link> and <Link href="/guides/best-free-resources-government-exams" className="text-primary-500 font-semibold hover:underline">Best Free Resources guide</Link>.</p>
          </GSection>

          {/* MISTAKES */}
          <GSection id="mistakes" title="8 Mistakes That Fail 90% of Beginners">
            <div className="space-y-3 mb-6">
              {[
                { num: '1', mistake: 'Preparing for too many exams at once', fix: 'Pick one exam category. Prepare for 2–3 exams within that category only.' },
                { num: '2', mistake: 'Buying 10 books and finishing none', fix: 'One book per subject. Finish it completely. Revise 3–4 times. Then (maybe) add another.' },
                { num: '3', mistake: 'Skipping mock tests until "syllabus is complete"', fix: 'Start mocks by Month 3. The syllabus is never "complete." Mocks show you what matters.' },
                { num: '4', mistake: 'Ignoring current affairs until exam month', fix: 'Read 30 minutes of news daily from day one. Current affairs is 20–25% of most exams.' },
                { num: '5', mistake: 'Not analyzing mock tests after taking them', fix: 'Spend equal time analyzing as taking the test. Find WHY you got wrong — not just WHAT.' },
                { num: '6', mistake: 'Studying 12 hours on Day 1, zero on Day 5', fix: 'Consistency wins. Even 2 hours daily beats random 10-hour bursts.' },
                { num: '7', mistake: 'Only reading theory, never practicing questions', fix: 'For every 1 hour of theory, spend 2 hours solving questions.' },
                { num: '8', mistake: 'Following 20 YouTube channels and Telegram groups', fix: 'Pick 2–3 quality sources. Information overload is worse than no information.' },
              ].map(item => (
                <div key={item.num} className="card p-4 flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                  <div>
                    <div className="font-semibold text-surface-800 text-sm mb-1">❌ {item.mistake}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">✅ <strong>Fix:</strong> {item.fix}</div>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="warning" title="⚠️ The #1 Reason Aspirants Quit">
              They compare their beginning with someone else&apos;s middle. Everyone started from zero. Focus on <strong>your</strong> daily progress, not others&apos; highlight reels.
            </GCallout>
          </GSection>

          {/* FAQ */}
          <GSection id="faq" title="Frequently Asked Questions">
            <div className="space-y-0">
              {[
                { q: 'Can I crack a government exam without coaching?', a: 'Absolutely. Lakhs of candidates clear SSC, Banking, and Railway exams every year through self-study using free YouTube lectures, NCERT books, and mock tests. Coaching is optional — strategy and consistency are not.' },
                { q: 'How many hours should I study daily as a beginner?', a: 'Start with 3–4 focused hours and gradually increase to 5–6 hours. Quality matters more than quantity. Four distraction-free hours beat eight hours of distracted study.' },
                { q: 'What is the easiest government exam to crack?', a: 'For 10th/12th pass: RRB Group D and SSC MTS have the simplest syllabi. For graduates: Banking Clerk exams (IBPS Clerk, SBI Clerk) have shorter syllabi and relatively lower cut-offs.' },
                { q: 'I am a Hindi-medium student. Can I still prepare?', a: 'Yes. Most exams (SSC, Railway, State PSC) are available in Hindi medium. For the English section, focus on grammar rules and basic comprehension — you do not need fluent English.' },
                { q: 'Is there an age limit for government exams?', a: 'Yes. Most central government exams have an upper age limit of 27–32 years for general category, with relaxations for OBC (+3 years), SC/ST (+5 years), and PwBD (+10 years). See our Age Relaxation guide for details.' },
                { q: 'How much does government exam preparation cost?', a: 'You can prepare almost entirely for free. If you want books, budget ₹1,500–₹2,000 for four standard books. A premium mock test subscription costs ₹300–₹500/year. Total: under ₹2,500.' },
                { q: 'Which exam should I start with if I have no idea?', a: 'If you are a graduate, start with SSC CGL or IBPS PO. They have well-defined syllabi, regular annual recruitment, large vacancies, and plenty of free study material. Use our Eligibility Checker to see all exams you qualify for.' },
                { q: 'Can working professionals prepare for government exams?', a: 'Yes. Many successful candidates study 3–4 hours daily (early morning + late night + weekends). The key is consistency and using commute time for passive learning like podcasts and audio current affairs.' },
              ].map((faq, i) => (
                <details key={i} className="border-b border-surface-200 group">
                  <summary className="flex items-start gap-3 py-4 cursor-pointer list-none font-medium text-surface-800 hover:text-primary-500 transition-colors">
                    <span className="w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{faq.q}</span>
                    <svg className="w-4 h-4 text-surface-400 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="pl-9 pb-4 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </GSection>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="font-heading font-bold text-xl mb-2">Start Your Government Exam Journey Today — It&apos;s Free</h3>
            <p className="text-primary-100 text-sm mb-5 max-w-xl mx-auto">Browse exam guides, use the eligibility checker, and access free resources on TaiyarHo. No registration. No fees. Just start.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/exams" className="bg-white text-primary-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">Browse All Exams →</Link>
              <Link href="/tools/eligibility-checker" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">Check Your Eligibility</Link>
            </div>
          </div>

          <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
            This guide is for informational purposes only. Exam patterns, eligibility, and syllabi may change — always verify from official exam websites. Last updated: April 2026.
          </p>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
              <ol className="space-y-2 list-decimal list-inside">
                {toc.map(item => (
                  <li key={item.id} className="text-sm">
                    <a href={`#${item.id}`} className="text-primary-500 hover:text-primary-600 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-5 bg-primary-50 border-primary-200">
              <h3 className="font-heading font-semibold text-primary-800 mb-3 text-sm">Popular Exam Guides</h3>
              <div className="space-y-2">
                <Link href="/exams/ssc-cgl" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">SSC CGL →</Link>
                <Link href="/exams/ibps-po" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">IBPS PO →</Link>
                <Link href="/exams/rrb-ntpc" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">RRB NTPC →</Link>
                <Link href="/exams/upsc-ias" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">UPSC IAS →</Link>
              </div>
            </div>
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Find Your Exams</h3>
              <p className="text-xs text-surface-500 mb-3">Enter your age and qualification — see every exam you qualify for.</p>
              <Link href="/tools/eligibility-checker" className="btn-primary text-xs w-full text-center">Check Eligibility →</Link>
            </div>
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Free Resources</h3>
              <p className="text-xs text-surface-500 mb-3">Books, YouTube channels, apps, and mock tests — all free.</p>
              <Link href="/resources" className="text-sm text-primary-500 hover:text-primary-600 font-medium">View Resources →</Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, datePublished: '2026-04-27', dateModified: '2026-04-27', author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' }, publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' }, mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.taiyarho.in/guides/how-to-start-government-exam-preparation' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Can I crack a government exam without coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lakhs of candidates clear SSC, Banking, and Railway exams every year through self-study.' } }, { '@type': 'Question', name: 'How many hours should I study daily?', acceptedAnswer: { '@type': 'Answer', text: 'Start with 3–4 focused hours and gradually increase to 5–6 hours.' } }, { '@type': 'Question', name: 'Which exam should I start with if I have no idea?', acceptedAnswer: { '@type': 'Answer', text: 'If you are a graduate, start with SSC CGL or IBPS PO.' } }] }) }} />
    </div>
  );
}

// ─── FREE RESOURCES GUIDE — FULL RICH ARTICLE ──────────────────────────────
function FreeResourcesGuide({ guide }: { guide: { slug: string; title: string; description: string; category: string; readTime: string } }) {
  const toc = [
    { id: 'why-free', label: 'Why Free Resources Are Enough' },
    { id: 'govt-platforms', label: 'Official Government Platforms' },
    { id: 'youtube', label: 'Free YouTube Channels' },
    { id: 'mock-tests', label: 'Free Mock Test Platforms' },
    { id: 'websites', label: 'Websites for Study Material' },
    { id: 'apps', label: 'Free Mobile Apps' },
    { id: 'pyq', label: 'Previous Year Papers' },
    { id: 'current-affairs', label: 'Current Affairs Resources' },
    { id: 'community', label: 'Telegram & Communities' },
    { id: 'strategy', label: 'How to Use These Effectively' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Free Resources 2026</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10 max-w-6xl">
        <article>
          {/* Hero */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge badge-accent">{guide.category}</span>
              <span className="text-xs text-surface-400">Updated April 2026</span>
              <span className="text-xs text-surface-400">•</span>
              <span className="text-xs text-surface-400">{guide.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-surface-900 mb-4 leading-tight">
              Best Free Resources for Government Exam Preparation (2026)
            </h1>
            <p className="text-lg text-surface-500 leading-relaxed mb-6">
              You do not need expensive coaching to crack a government exam. This guide lists 50+ verified free resources — official government platforms, YouTube channels, mock test sites, apps, and study material sources — that lakhs of successful candidates use every year. Every link has been verified as of April 2026.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-xs text-primary-700 font-medium">Free Resources</div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-600">8</div>
                <div className="text-xs text-emerald-700 font-medium">Govt Platforms</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-xs text-amber-700 font-medium">YouTube Channels</div>
              </div>
              <div className="bg-violet-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-violet-600">100%</div>
                <div className="text-xs text-violet-700 font-medium">Free to Access</div>
              </div>
            </div>
          </div>

          {/* ── Section 1: Why Free Resources Are Enough ────────────────────── */}
          <GSection id="why-free" title="1. Why Free Resources Are Enough to Crack Any Government Exam">
            <p className="text-surface-600 leading-relaxed mb-4">
              Every year, lakhs of candidates clear SSC, Banking, Railway, and even UPSC exams through self-study using only free resources. The internet has fundamentally changed competitive exam preparation — you now have access to the same quality of teaching that coaching centres charge lakhs for, completely free on platforms like YouTube, DIKSHA, and SWAYAM.
            </p>
            <p className="text-surface-600 leading-relaxed mb-4">
              What matters is not how much you spend, but how consistently and strategically you study. A student watching Drishti IAS videos on YouTube has access to the same content as someone sitting in a Delhi coaching centre. The difference is discipline, not money.
            </p>
            <GCallout type="tip" title="The ₹0 Success Formula">
              NCERT textbooks (free) + one good YouTube channel per subject + free mock tests + previous year papers = everything you need. This is the exact combination that toppers across SSC, Banking, and Railway exams recommend.
            </GCallout>
          </GSection>

          {/* ── Section 2: Official Government Platforms ────────────────────── */}
          <GSection id="govt-platforms" title="2. Official Government Platforms (100% Free, 100% Reliable)">
            <p className="text-surface-600 leading-relaxed mb-5">
              The Indian government provides several high-quality digital education platforms that most aspirants do not know about or underuse. These are the most reliable sources because they are created by official bodies like NCERT, the Ministry of Education, and UGC.
            </p>

            <div className="space-y-4 mb-6">
              <ResourceCard
                icon="📚"
                name="NCERT Textbooks (Class 6–12)"
                url="https://ncert.nic.in/textbook.php"
                desc="The absolute foundation for every government exam. Free PDF downloads of all textbooks from Class 6 to 12 in English and Hindi. Cover History, Geography, Polity, Economy, and Science from NCERT before touching any other book."
                tags={['All Exams', 'Must-Have']}
                highlight
              />
              <ResourceCard
                icon="📱"
                name="DIKSHA (Digital Infrastructure for Knowledge Sharing)"
                url="https://diksha.gov.in"
                desc="India's national digital learning platform by the Ministry of Education. Offers NCERT content with video explanations, practice questions, and AI-powered learning in 36 languages. Scan QR codes in your NCERT textbooks for instant video lessons."
                tags={['All Exams', 'Multilingual']}
              />
              <ResourceCard
                icon="🎓"
                name="SWAYAM (Free Online Courses)"
                url="https://swayam.gov.in"
                desc="Free university-level courses by IIT and top university professors. Covers subjects like Public Administration, Political Science, Economics, and Mathematics. Completion certificates available. Excellent for UPSC optional subjects and in-depth learning."
                tags={['UPSC', 'State PSC', 'Teaching']}
              />
              <ResourceCard
                icon="📖"
                name="e-Pathshala (NCERT Mobile App)"
                url="https://epathshala.nic.in"
                desc="Official NCERT app with all textbooks, audio content, and video lessons. Works offline after download — perfect for students with limited internet. Available on both Android and iOS."
                tags={['All Exams', 'Offline Access']}
              />
              <ResourceCard
                icon="📄"
                name="NIOS (National Institute of Open Schooling)"
                url="https://www.nios.ac.in"
                desc="Free study material for secondary and senior secondary subjects. Excellent for building basics if your school education was weak. Material available in Hindi, English, and Urdu."
                tags={['All Exams', 'Basics']}
              />
              <ResourceCard
                icon="🏛️"
                name="IGNOU eGyanKosh"
                url="https://egyankosh.ac.in"
                desc="Massive repository of free university-level content from IGNOU. Covers Public Administration, Political Science, History, Sociology, and more — directly useful for UPSC Mains optional subjects and State PSC preparation."
                tags={['UPSC', 'State PSC']}
              />
              <ResourceCard
                icon="📊"
                name="Economic Survey of India"
                url="https://www.indiabudget.gov.in/economicsurvey/"
                desc="Annual publication by the Ministry of Finance. Essential reading for Economy sections in UPSC, Banking, and SSC exams. Contains the latest economic data, policy analysis, and government initiatives."
                tags={['UPSC', 'Banking', 'SSC']}
              />
              <ResourceCard
                icon="⚖️"
                name="PRS Legislative Research"
                url="https://prsindia.org"
                desc="Independent research on Indian legislation. Provides simplified explanations of Bills, Acts, policy briefs, and Parliament sessions. One of the best free resources for Polity and Governance preparation."
                tags={['UPSC', 'State PSC']}
              />
            </div>

            <GCallout type="info" title="Government Platform Tip">
              Download the DIKSHA app and scan the QR codes printed inside your NCERT books — each code links directly to video explanations, practice questions, and interactive content for that chapter. This feature alone replaces the need for many paid video courses.
            </GCallout>
          </GSection>

          {/* ── Section 3: YouTube Channels ─────────────────────────────────── */}
          <GSection id="youtube" title="3. Best Free YouTube Channels (by Exam Category)">
            <p className="text-surface-600 leading-relaxed mb-5">
              YouTube is the single most powerful free resource for government exam preparation. These channels provide complete courses, daily current affairs, and topic-wise lectures — all free. Subscribe to 3–4 channels relevant to your target exam and follow their playlists systematically.
            </p>

            <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">🏛️ For UPSC &amp; State PSC</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <YTCard name="Drishti IAS" url="https://www.youtube.com/@DrishtiIASvideos" desc="Hindi medium UPSC preparation — daily current affairs, prelims & mains lectures, and answer writing" lang="Hindi" />
              <YTCard name="StudyIQ IAS" url="https://www.youtube.com/@StudyIQEducationLtd" desc="Daily current affairs and subject-wise lectures by Gaurav Munjal and team for UPSC and all exams" lang="Hindi/English" />
              <YTCard name="Unacademy IAS" url="https://www.youtube.com/@UnacademyIASEnglish" desc="Free UPSC lectures by top educators on History, Geography, Polity, Economy, and optional subjects" lang="English/Hindi" />
              <YTCard name="Mrunal Patel" url="https://www.youtube.com/@TheMrunalPatel" desc="Economy, Polity, and current affairs analysis — especially strong for UPSC Prelims and banking awareness" lang="English/Hindi" />
            </div>

            <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">📝 For SSC &amp; Railway</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <YTCard name="Exampur" url="https://www.youtube.com/@Exampur__Official" desc="Free live classes for Railway, SSC, and State exams — Maths, Reasoning, GK, and English" lang="Hindi" />
              <YTCard name="Rakesh Yadav Readers" url="https://www.youtube.com/@rakeshyadav_sir" desc="Mathematics shortcuts and advanced-level problem solving for SSC CGL and Railway exams" lang="Hindi" />
              <YTCard name="Adda247" url="https://www.youtube.com/@adabornindia" desc="Comprehensive classes for Banking, SSC, and Railway exams with daily quizzes and mock analysis" lang="Hindi/English" />
              <YTCard name="Gagan Pratap Maths" url="https://www.youtube.com/@GaganPratapMaths" desc="One of the most popular Maths channels for SSC — clear explanations and shortcuts for Quant" lang="Hindi" />
            </div>

            <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">🏦 For Banking &amp; Insurance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <YTCard name="Adda247 (Banking)" url="https://www.youtube.com/@adabornindia" desc="Complete Banking exam coverage — IBPS PO, SBI PO, RBI, NABARD. Daily CA and topic-wise lectures" lang="Hindi/English" />
              <YTCard name="Oliveboard" url="https://www.youtube.com/@Oliveboard" desc="Banking exam specialists — free classes for IBPS, SBI, RBI Grade B with strong focus on Reasoning and DI" lang="English/Hindi" />
              <YTCard name="Bankers Adda" url="https://www.youtube.com/@BankersAdda" desc="Focus on banking awareness, financial news analysis, and exam-specific preparation" lang="Hindi/English" />
            </div>

            <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">🎖️ For Defence &amp; Teaching</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <YTCard name="Defence Adda247" url="https://www.youtube.com/@DefenceAdda247" desc="NDA, CDS, AFCAT, CAPF preparation with daily classes and mock test discussions" lang="Hindi" />
              <YTCard name="Exampur (by Vivek Sir)" url="https://www.youtube.com/@Exampur__Official" desc="Covers CTET, State TET, DSSSB, and KVS along with SSC and Railway exams" lang="Hindi" />
            </div>

            <GCallout type="warning" title="Avoid This Common Mistake">
              Do not subscribe to 10+ channels thinking &quot;more is better.&quot; Pick 2–3 channels for your target exam and follow one teacher per subject consistently. Jumping between channels creates confusion and wastes time. Consistency beats variety.
            </GCallout>
          </GSection>

          {/* ── Section 4: Mock Test Platforms ──────────────────────────────── */}
          <GSection id="mock-tests" title="4. Free Mock Test Platforms">
            <p className="text-surface-600 leading-relaxed mb-5">
              Mock tests are the single most important practice tool after covering basics. These platforms offer limited free mocks — use them wisely. Take at least one full-length mock per week from Month 2 of your preparation.
            </p>

            <div className="space-y-4 mb-6">
              <ResourceCard
                icon="📝"
                name="Testbook (Free Mocks)"
                url="https://testbook.com"
                desc="India's largest test platform. Offers free daily quizzes and limited full-length mocks for SSC, Banking, Railway, Teaching, and Defence exams. The free tier includes 2–3 mocks per exam with detailed solutions."
                tags={['All Exams', 'Daily Quizzes']}
                highlight
              />
              <ResourceCard
                icon="📊"
                name="Oliveboard (Free Mocks)"
                url="https://www.oliveboard.in"
                desc="Strong in Banking and SSC mocks. Offers free sectional tests and a few full-length mocks. Known for high-quality Reasoning and DI questions that closely mirror actual exam difficulty."
                tags={['Banking', 'SSC']}
              />
              <ResourceCard
                icon="🎯"
                name="Prepp.in (Free Test Series)"
                url="https://prepp.in"
                desc="Offers free mock tests for 500+ exams including SSC, Railway, Banking, State exams. Provides free previous year papers in online test format with detailed analytics."
                tags={['All Exams', 'PYQs Online']}
              />
              <ResourceCard
                icon="📱"
                name="Adda247 (Free Daily Quizzes)"
                url="https://www.adda247.com"
                desc="Daily free quizzes on Quant, Reasoning, English, and GA for Banking, SSC, and Railway exams. Their free quiz section is excellent for daily practice."
                tags={['Banking', 'SSC', 'Railway']}
              />
              <ResourceCard
                icon="🏛️"
                name="IBPS Official Free Mock Test"
                url="https://ibps.in"
                desc="IBPS releases free official mock tests before every exam cycle (PO, Clerk, SO, RRB). These are the closest to the actual exam interface. Always attempt these when available."
                tags={['Banking', 'Official']}
              />
              <ResourceCard
                icon="📋"
                name="SSC Official Practice Sets"
                url="https://ssc.gov.in"
                desc="SSC occasionally publishes practice sets and sample papers on their official website. Check the 'For Candidates' section for available previous year question papers."
                tags={['SSC', 'Official']}
              />
            </div>

            <GCallout type="tip" title="Mock Test Strategy">
              Take the mock test in exam conditions — full length, timed, no breaks, no phone. Then spend equal time analyzing it: which questions did you get wrong? Why? Which topics need revision? This analysis is more valuable than the test itself.
            </GCallout>
          </GSection>

          {/* ── Section 5: Websites for Study Material ─────────────────────── */}
          <GSection id="websites" title="5. Best Free Websites for Study Material">
            <p className="text-surface-600 leading-relaxed mb-5">
              Beyond official platforms, these websites provide high-quality free study material, notes, and exam-specific content.
            </p>

            <div className="space-y-4 mb-6">
              <ResourceCard
                icon="🔍"
                name="Insights on India"
                url="https://www.insightsonindia.com"
                desc="Daily current affairs analysis, editorial breakdowns, and free study materials for UPSC. Their daily current affairs compilation is used by thousands of serious aspirants."
                tags={['UPSC']}
              />
              <ResourceCard
                icon="📰"
                name="Forum IAS Blog"
                url="https://blog.forumias.com"
                desc="Answer writing practice, mains-focused content, and current affairs compilations for UPSC aspirants. Excellent for developing answer writing skills."
                tags={['UPSC']}
              />
              <ResourceCard
                icon="🌐"
                name="GKToday"
                url="https://www.gktoday.in"
                desc="Daily current affairs, monthly compilations, and GK quizzes covering all government exams. Available in both English and Hindi."
                tags={['All Exams', 'Current Affairs']}
              />
              <ResourceCard
                icon="🏦"
                name="RBI Website"
                url="https://www.rbi.org.in"
                desc="The best free source for banking awareness. Read RBI press releases, monetary policy updates, and publications. Questions in banking exams are directly sourced from RBI announcements."
                tags={['Banking', 'Official']}
              />
              <ResourceCard
                icon="📜"
                name="India Code (Legislative Department)"
                url="https://www.indiacode.nic.in"
                desc="Complete repository of all Central Acts and Rules. Useful for detailed study of specific laws mentioned in Polity syllabus."
                tags={['UPSC', 'State PSC']}
              />
              <ResourceCard
                icon="📈"
                name="PIB (Press Information Bureau)"
                url="https://pib.gov.in"
                desc="Official government press releases and policy announcements. A reliable primary source for current affairs — avoids media bias and gives you factual information directly."
                tags={['UPSC', 'SSC', 'Banking']}
              />
            </div>
          </GSection>

          {/* ── Section 6: Free Mobile Apps ────────────────────────────────── */}
          <GSection id="apps" title="6. Free Mobile Apps for On-the-Go Preparation">
            <p className="text-surface-600 leading-relaxed mb-5">
              These apps help you utilize commuting time, breaks, and small pockets of free time for revision and practice. Most offer both free and paid tiers — the free tier is sufficient for practice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <AppCard name="Testbook" platform="Android & iOS" desc="Daily free quizzes, live classes, and limited mock tests for all government exams" free="Free quizzes + 2–3 mocks per exam" />
              <AppCard name="Adda247" platform="Android & iOS" desc="Free daily practice sets, GK updates, and exam notifications for Banking, SSC, Railway" free="Daily free quizzes + CA updates" />
              <AppCard name="DIKSHA" platform="Android & iOS" desc="Official government learning app — NCERT content with videos, practice questions, AI assistance" free="Completely free" />
              <AppCard name="e-Pathshala" platform="Android & iOS" desc="Official NCERT app with textbooks, audio books, and video content — works offline" free="Completely free" />
              <AppCard name="Pratiyogita Darpan" platform="Android & iOS" desc="Monthly current affairs magazine with quizzes in both Hindi and English — essential for GK sections" free="Free monthly issues" />
              <AppCard name="GKToday" platform="Android & iOS" desc="Daily current affairs, GK quizzes, and monthly compilations. Clean interface with bilingual content" free="Free daily content" />
            </div>

            <GCallout type="info" title="Smart Phone Usage">
              Turn your smartphone into a study tool, not a distraction. Set up these apps on your home screen and replace social media scrolling with 10-minute quiz sessions. Even 30 minutes of daily app-based practice adds up to 180+ hours over 12 months.
            </GCallout>
          </GSection>

          {/* ── Section 7: Previous Year Papers ─────────────────────────────── */}
          <GSection id="pyq" title="7. Previous Year Question Papers — The Most Underrated Free Resource">
            <p className="text-surface-600 leading-relaxed mb-5">
              Previous year papers (PYQs) are the single most effective preparation tool — and they are completely free. Solving 5–10 years of PYQs gives you more insight into exam patterns, difficulty levels, and frequently asked topics than any coaching class.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="text-left p-3 font-heading font-semibold text-primary-800">Exam Body</th>
                    <th className="text-left p-3 font-heading font-semibold text-primary-800">Official PYQ Source</th>
                    <th className="text-left p-3 font-heading font-semibold text-primary-800">Exams Covered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  <tr className="hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">UPSC</td>
                    <td className="p-3"><a href="https://upsc.gov.in/examinations/previous-question-papers" className="text-primary-500 hover:text-primary-600 underline" target="_blank" rel="noopener noreferrer">upsc.gov.in/examinations/previous-question-papers</a></td>
                    <td className="p-3 text-surface-600">CSE, NDA, CDS, CAPF, ESE</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">SSC</td>
                    <td className="p-3"><a href="https://ssc.gov.in/for-candidates/previous-year-question-paper" className="text-primary-500 hover:text-primary-600 underline" target="_blank" rel="noopener noreferrer">ssc.gov.in → For Candidates → Previous Year Papers</a></td>
                    <td className="p-3 text-surface-600">CGL, CHSL, MTS, GD, CPO</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">IBPS</td>
                    <td className="p-3"><a href="https://ibps.in" className="text-primary-500 hover:text-primary-600 underline" target="_blank" rel="noopener noreferrer">ibps.in (mock tests before each exam)</a></td>
                    <td className="p-3 text-surface-600">PO, Clerk, SO, RRB</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">RRB</td>
                    <td className="p-3"><a href="https://rrbcdg.gov.in" className="text-primary-500 hover:text-primary-600 underline" target="_blank" rel="noopener noreferrer">Regional RRB websites (e.g., rrbcdg.gov.in)</a></td>
                    <td className="p-3 text-surface-600">NTPC, Group D, ALP, JE</td>
                  </tr>
                  <tr className="hover:bg-surface-50">
                    <td className="p-3 font-medium text-surface-800">SBI</td>
                    <td className="p-3"><a href="https://sbi.co.in/careers" className="text-primary-500 hover:text-primary-600 underline" target="_blank" rel="noopener noreferrer">sbi.co.in/careers</a></td>
                    <td className="p-3 text-surface-600">SBI PO, Clerk, SO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <GCallout type="tip" title="PYQ Strategy">
              Start solving PYQs from Month 2 of your preparation — do not wait until you have &quot;finished the syllabus.&quot; That day never comes. PYQs help you understand what the exam actually asks, which is often different from what you expect. Solve the papers first without a timer, then with exam-time conditions.
            </GCallout>
          </GSection>

          {/* ── Section 8: Current Affairs Resources ────────────────────────── */}
          <GSection id="current-affairs" title="8. Free Current Affairs Resources">
            <p className="text-surface-600 leading-relaxed mb-5">
              Current affairs carry significant weight in almost every government exam — from 25% in SSC to nearly 50% in Banking and UPSC Prelims (combined with static GK). Here are the best free sources to stay updated.
            </p>

            <div className="space-y-4 mb-6">
              <div className="card p-5">
                <h4 className="font-heading font-semibold text-surface-800 mb-3">📰 Daily Sources</h4>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-1 flex-shrink-0">•</span><span><strong>The Hindu / Indian Express</strong> — read one newspaper daily. Focus on editorials, national news, and economy sections. Available free online.</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-1 flex-shrink-0">•</span><span><strong>PIB (pib.gov.in)</strong> — official government press releases. No opinion, just facts. Best for UPSC-level current affairs.</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-1 flex-shrink-0">•</span><span><strong>YouTube daily CA videos</strong> — StudyIQ, Drishti IAS, and Adda247 upload 15–20 minute daily current affairs summaries. Watch one every morning.</span></li>
                </ul>
              </div>
              <div className="card p-5">
                <h4 className="font-heading font-semibold text-surface-800 mb-3">📅 Monthly Compilations</h4>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-1 flex-shrink-0">•</span><span><strong>Drishti IAS Monthly Current Affairs</strong> — available free on their website. Comprehensive monthly digest in Hindi and English.</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-1 flex-shrink-0">•</span><span><strong>GKToday Monthly Magazine</strong> — free monthly current affairs PDF covering national, international, economy, sports, and awards.</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-1 flex-shrink-0">•</span><span><strong>Pratiyogita Darpan</strong> — long-running current affairs magazine available as a free app with monthly issues.</span></li>
                </ul>
              </div>
            </div>

            <GCallout type="warning" title="Current Affairs Focus Areas for 2026">
              Focus on: government schemes and policies, Supreme Court judgments, international summits (G20, COP, BRICS), economic indicators (GDP, inflation, RBI policy), awards and appointments, and sports events. For Banking exams, also cover RBI circulars, SEBI updates, and budget highlights.
            </GCallout>
          </GSection>

          {/* ── Section 9: Telegram & Communities ───────────────────────────── */}
          <GSection id="community" title="9. Telegram Groups & Online Communities">
            <p className="text-surface-600 leading-relaxed mb-4">
              Telegram has become a major hub for exam preparation. Groups share daily current affairs PDFs, free study materials, exam notifications, and cut-off discussions. However, be selective — joining too many groups creates information overload and distracts from actual study.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="card p-5 border-l-4 border-emerald-400">
                <h4 className="font-heading font-semibold text-emerald-800 text-sm mb-2">✅ Good Practices</h4>
                <ul className="text-sm text-surface-600 space-y-1">
                  <li>• Join only 2–3 quality groups for your target exam</li>
                  <li>• Use groups for daily CA PDFs and notifications</li>
                  <li>• Follow official channels of Testbook, Adda247, Oliveboard</li>
                  <li>• Mute group notifications — check once daily</li>
                </ul>
              </div>
              <div className="card p-5 border-l-4 border-red-400">
                <h4 className="font-heading font-semibold text-red-800 text-sm mb-2">❌ Avoid</h4>
                <ul className="text-sm text-surface-600 space-y-1">
                  <li>• Joining 10+ groups — leads to information overload</li>
                  <li>• Relying on Telegram as your primary study source</li>
                  <li>• Downloading random PDFs without verifying quality</li>
                  <li>• Getting into exam anxiety discussions in groups</li>
                </ul>
              </div>
            </div>

            <GCallout type="info" title="Recommended Communities">
              Look for official Telegram channels of Testbook, Adda247, and Drishti IAS — these share verified content. For peer discussion, platforms like Reddit (r/UPSC, r/IndianGovtJobs) and exam-specific forums can be helpful for strategy discussions and motivation.
            </GCallout>
          </GSection>

          {/* ── Section 10: How to Use Effectively ──────────────────────────── */}
          <GSection id="strategy" title="10. How to Use Free Resources Effectively — A 5-Step Strategy">
            <p className="text-surface-600 leading-relaxed mb-5">
              Having access to free resources is not enough — you need a system to use them effectively. Here is a proven 5-step approach that successful self-study candidates follow.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: '1', title: 'Start with NCERT + One YouTube Channel', desc: 'Read NCERT books chapter by chapter. Watch the corresponding video lecture on your chosen YouTube channel. Make short handwritten notes. This builds your foundation in 2–3 months.' },
                { step: '2', title: 'Add One Reference Book per Subject', desc: 'After NCERT, pick ONE standard reference book per subject (Laxmikanth for Polity, Bipan Chandra for History, etc.). Do not collect multiple books — finish one completely before starting another.' },
                { step: '3', title: 'Start Daily Current Affairs from Day 1', desc: 'Watch one 15-minute daily CA video every morning. Read one newspaper (The Hindu or Indian Express). Maintain a handwritten CA notebook organized by month. Focus on the last 6–12 months for your exam.' },
                { step: '4', title: 'Begin Mock Tests from Month 2', desc: 'Start with sectional tests (one subject at a time), then move to full-length mocks by Month 4. Take one full mock per week. Analyze every mock — spend as much time on analysis as on the test itself.' },
                { step: '5', title: 'Revise Ruthlessly — The 3R Method', desc: 'Read → Revise → Re-revise. Revision is non-negotiable. Revise your notes every weekend. Do a complete revision in the last 30 days before the exam. The candidate who revises more wins.' },
              ].map((s) => (
                <div key={s.step} className="card p-5 flex gap-4">
                  <div className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">{s.step}</div>
                  <div>
                    <h4 className="font-heading font-semibold text-surface-800 mb-1">{s.title}</h4>
                    <p className="text-sm text-surface-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GSection>

          {/* ── Section 11: FAQs ───────────────────────────────────────────── */}
          <GSection id="faq" title="11. Frequently Asked Questions">
            <div className="space-y-4">
              {[
                { q: 'Can I crack a government exam without any paid resources?', a: 'Yes. Lakhs of candidates clear SSC, Banking, and Railway exams every year using only free resources. Even for UPSC, many candidates from the top 100 have used primarily free materials. What matters is consistency, strategy, and discipline — not money.' },
                { q: 'Which is the best free resource for government exams?', a: 'NCERT textbooks are the absolute best free resource — they are the foundation for every exam. After that, YouTube channels for video learning and free mock tests for practice complete the trifecta. Everything else is supplementary.' },
                { q: 'Are free mock tests accurate enough for real exam practice?', a: 'Free mocks from platforms like Testbook, Oliveboard, and Adda247 are generally good quality and follow the exam pattern closely. The best mocks are the official ones released by IBPS and SSC — always attempt these when available. For UPSC, previous year papers are more valuable than any mock.' },
                { q: 'How many YouTube channels should I follow?', a: 'Follow a maximum of 2–3 channels for your target exam. Pick one channel per subject and stick with it. Jumping between 10 channels creates confusion and wastes time. Consistency with one good teacher beats sampling from many.' },
                { q: 'Is Telegram necessary for exam preparation?', a: 'No. Telegram is useful for getting daily current affairs PDFs and exam notifications quickly, but it is not essential. Everything available on Telegram groups is also available on official websites and YouTube channels. Use it as a supplement, not a primary source.' },
                { q: 'How do I know if a free resource is reliable?', a: 'Stick to: official government websites (.gov.in, .nic.in), established YouTube channels with 500K+ subscribers, and well-known platforms like Testbook, Adda247, and Oliveboard. Avoid random PDFs and unverified Telegram content. When in doubt, cross-check with official syllabus documents.' },
                { q: 'Do I need a newspaper subscription for current affairs?', a: 'No. The Hindu and Indian Express both have free online editions. You can read the important articles without a physical subscription. Alternatively, daily current affairs videos on YouTube cover the same content in 15–20 minutes.' },
              ].map((faq, i) => (
                <details key={i} className="card group">
                  <summary className="p-4 cursor-pointer font-heading font-semibold text-surface-800 text-sm flex items-center gap-2 hover:text-primary-600">
                    <span className="text-primary-500 group-open:rotate-90 transition-transform flex-shrink-0">▶</span>
                    {faq.q}
                  </summary>
                  <div className="px-4 pb-4 pt-0 text-sm text-surface-600 leading-relaxed border-t border-surface-100 mt-1 ml-6">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </GSection>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="font-heading font-bold text-xl mb-2">You Have Everything You Need — Start Now</h3>
            <p className="text-primary-100 text-sm mb-5 max-w-xl mx-auto">Every resource on this page is free. The only cost is your time and discipline. Start with NCERT, pick a YouTube channel, and take your first mock test this week.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/exams" className="bg-white text-primary-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">Browse All Exams →</Link>
              <Link href="/tools/eligibility-checker" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">Check Your Eligibility</Link>
            </div>
          </div>

          <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
            All links verified as of April 2026. This guide is for informational purposes only. Websites, apps, and features may change — always verify from official sources. TaiyarHo is not affiliated with any platform mentioned above. Last updated: April 2026.
          </p>
        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
              <ol className="space-y-2 list-decimal list-inside">
                {toc.map(item => (
                  <li key={item.id} className="text-sm">
                    <a href={`#${item.id}`} className="text-primary-500 hover:text-primary-600 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-5 bg-emerald-50 border-emerald-200">
              <h3 className="font-heading font-semibold text-emerald-800 mb-3 text-sm">🎯 Quick Start Kit</h3>
              <div className="space-y-2 text-sm text-emerald-700">
                <a href="https://ncert.nic.in/textbook.php" className="block hover:underline font-medium" target="_blank" rel="noopener noreferrer">1. Download NCERT Books →</a>
                <Link href="/resources" className="block hover:underline font-medium">2. View All Resources →</Link>
                <Link href="/tools/eligibility-checker" className="block hover:underline font-medium">3. Find Your Exams →</Link>
                <Link href="/guides/how-to-start-government-exam-preparation" className="block hover:underline font-medium">4. Read Beginner&apos;s Guide →</Link>
              </div>
            </div>
            <div className="card p-5 bg-primary-50 border-primary-200">
              <h3 className="font-heading font-semibold text-primary-800 mb-3 text-sm">Popular Exam Guides</h3>
              <div className="space-y-2">
                <Link href="/exams/ssc-cgl" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">SSC CGL →</Link>
                <Link href="/exams/ibps-po" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">IBPS PO →</Link>
                <Link href="/exams/rrb-ntpc" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">RRB NTPC →</Link>
                <Link href="/exams/upsc-ias" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">UPSC IAS →</Link>
              </div>
            </div>
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Find Your Exams</h3>
              <p className="text-xs text-surface-500 mb-3">Enter your age and qualification — see every exam you qualify for.</p>
              <Link href="/tools/eligibility-checker" className="btn-primary text-xs w-full text-center">Check Eligibility →</Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Schema.org Article + FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        datePublished: '2026-04-27',
        dateModified: '2026-04-27',
        author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
        publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://www.taiyarho.in' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.taiyarho.in/guides/best-free-resources-government-exams' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can I crack a government exam without any paid resources?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lakhs of candidates clear SSC, Banking, and Railway exams every year using only free resources. What matters is consistency, strategy, and discipline — not money.' } },
          { '@type': 'Question', name: 'Which is the best free resource for government exams?', acceptedAnswer: { '@type': 'Answer', text: 'NCERT textbooks are the best free resource — they are the foundation for every exam. After that, YouTube channels for video learning and free mock tests for practice.' } },
          { '@type': 'Question', name: 'Are free mock tests accurate enough for real exam practice?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Free mocks from Testbook, Oliveboard, and Adda247 follow the exam pattern closely. Official mocks from IBPS and SSC are the most accurate.' } },
          { '@type': 'Question', name: 'How many YouTube channels should I follow?', acceptedAnswer: { '@type': 'Answer', text: 'Follow a maximum of 2–3 channels for your target exam. Pick one channel per subject and stick with it consistently.' } },
          { '@type': 'Question', name: 'Do I need a newspaper subscription for current affairs?', acceptedAnswer: { '@type': 'Answer', text: 'No. The Hindu and Indian Express have free online editions. Daily current affairs YouTube videos cover the same content in 15–20 minutes.' } },
        ],
      }) }} />
    </div>
  );
}

// ─── HELPER COMPONENTS FOR FREE RESOURCES GUIDE ──────────────────────────────
function ResourceCard({ icon, name, url, desc, tags, highlight }: { icon: string; name: string; url: string; desc: string; tags: string[]; highlight?: boolean }) {
  return (
    <div className={`card p-5 ${highlight ? 'ring-2 ring-primary-200 bg-primary-50/30' : ''}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <a href={url} className="font-heading font-semibold text-surface-900 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">{name}</a>
            {highlight && <span className="text-xs bg-primary-100 text-primary-700 font-semibold px-2 py-0.5 rounded-full">⭐ Essential</span>}
          </div>
          <p className="text-sm text-surface-600 leading-relaxed mb-2">{desc}</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-surface-100 text-surface-600 font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
            <a href={url} className="text-xs text-primary-500 hover:text-primary-600 font-medium ml-auto flex-shrink-0" target="_blank" rel="noopener noreferrer">Visit →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function YTCard({ name, url, desc, lang }: { name: string; url: string; desc: string; lang: string }) {
  return (
    <a href={url} className="card p-4 group hover:shadow-md transition-shadow" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500 text-lg">▶</span>
        <span className="font-heading font-semibold text-surface-800 group-hover:text-primary-500 transition-colors text-sm">{name}</span>
      </div>
      <p className="text-xs text-surface-500 leading-relaxed mb-2">{desc}</p>
      <span className="text-xs bg-red-50 text-red-600 font-medium px-2 py-0.5 rounded-full">{lang}</span>
    </a>
  );
}

function AppCard({ name, platform, desc, free }: { name: string; platform: string; desc: string; free: string }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-heading font-semibold text-surface-800 text-sm">{name}</span>
        <span className="text-xs bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full">{platform}</span>
      </div>
      <p className="text-xs text-surface-500 leading-relaxed mb-2">{desc}</p>
      <span className="text-xs text-emerald-600 font-medium">✓ {free}</span>
    </div>
  );
}

// ─── HOW TO FILL GOVERNMENT JOB APPLICATION FORM — FULL RICH ARTICLE ─────────
function FillFormGuide({ guide }: { guide: { slug: string; title: string; description: string; category: string; readTime: string } }) {
  const toc = [
    { id: 'docs', label: 'Documents to Keep Ready' },
    { id: 'otr', label: 'Step 1: OTR Registration' },
    { id: 'login', label: 'Step 2: Log In & Select Exam' },
    { id: 'personal', label: 'Step 3: Personal Details' },
    { id: 'education', label: 'Step 4: Educational Details' },
    { id: 'upload', label: 'Step 5: Photo & Signature Upload' },
    { id: 'centres', label: 'Step 6: Centre & Preferences' },
    { id: 'fee', label: 'Step 7: Pay Application Fee' },
    { id: 'preview', label: 'Step 8: Preview & Submit' },
    { id: 'confirmation', label: 'Step 9: Save Confirmation' },
    { id: 'mistakes', label: 'Common Mistakes' },
    { id: 'correction', label: 'Using the Correction Window' },
    { id: 'websites', label: 'Official Websites' },
    { id: 'checklist', label: 'Pre-Submit Checklist' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Application Form</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10 max-w-6xl">
        <article>
          {/* Blue gradient hero — required for all guide pages */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Updated April 2026
                </span>
                <span className="bg-white/10 text-white/70 text-xs px-2.5 py-1 rounded">Application</span>
                <span className="bg-white/10 text-white/70 text-xs px-2.5 py-1 rounded">Step-by-Step</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
                How to Fill Government Job <span className="text-yellow-200">Application Forms</span> (Step by Step)
              </h1>
              <p className="text-primary-100 text-base leading-relaxed mb-5 max-w-2xl">
                Complete guide for SSC, UPSC, IBPS, SBI, and Railway exam forms — OTR registration, photo &amp; signature specs, fee payment, and how to avoid silent rejection.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-primary-200">
                <span>📅 April 2026</span>
                <span>⏱ {guide.readTime}</span>
                <span>📋 9 Steps covered</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Exams Covered', value: '5+', sub: 'SSC, UPSC, IBPS, SBI, RRB' },
              { label: 'Steps in Process', value: '9', sub: 'Registration to confirmation' },
              { label: 'Common Mistakes', value: '8', sub: 'That cause silent rejection' },
              { label: 'Photo Specs Listed', value: '4', sub: 'Exam-wise requirements' },
            ].map(f => (
              <div key={f.label} className="card p-4 text-center">
                <div className="text-xs text-surface-400 uppercase tracking-wide font-semibold">{f.label}</div>
                <div className="text-xl font-heading font-bold text-primary-500 mt-1">{f.value}</div>
                <div className="text-xs text-surface-400 mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>

          <GCallout type="warning" title="⚠️ Why This Matters">
            Every year, thousands of applications are rejected silently — not for lacking eligibility, but for avoidable form errors. SSC, UPSC, IBPS, and RRB <strong>do not notify you about rejection</strong>. Your application simply disappears. Read this guide before you apply.
          </GCallout>

          {/* Mobile TOC */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          {/* DOCUMENTS */}
          <GSection id="docs" title="Documents and Information to Keep Ready">
            <p className="text-surface-600 leading-relaxed mb-5">
              Before you open any application portal, gather everything you need. Last-minute scrambling causes mistakes. Keep all files in one clearly labelled folder on your device.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { icon: '🪪', title: 'Aadhaar Card', desc: 'Mandatory for most exams. Keep the number ready — do not rely on memory.' },
                { icon: '📱', title: 'Mobile & Email', desc: 'You\'ll receive OTPs, registration IDs, and admit card links. Do not change these mid-process.' },
                { icon: '📋', title: '10th Marksheet', desc: 'Your name, date of birth, roll number, board name must match exactly. This is the base document for all govt exams.' },
                { icon: '🎓', title: '12th & Graduation', desc: 'Percentage and passing year for both. If you have a CGPA, convert it to percentage first.' },
                { icon: '🏷️', title: 'Category Certificate', desc: 'OBC Non-Creamy Layer, SC, ST, or EWS — must be in central government format from the competent authority.' },
                { icon: '🖼️', title: 'Photo & Signature', desc: 'Recent passport-size JPG photo (plain white background) + signature in black ink. Specifications vary by exam — see Step 5.' },
                { icon: '👆', title: 'Thumb Impression', desc: 'Left-hand thumb impression scanned on white paper — required by IBPS and some banking exams.' },
                { icon: '♿', title: 'PwBD Certificate', desc: '40%+ disability certified by a government medical board, if applicable.' },
              ].map(item => (
                <div key={item.title} className="card p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-heading font-semibold text-surface-800 text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="tip" title="✅ Pro Tip: Name Everything Clearly">
              Save your files as: <strong>Photo_SSC.jpg</strong>, <strong>Signature_SSC.jpg</strong>, <strong>Thumb_IBPS.jpg</strong>. Confusion between files is a common cause of uploading the wrong document.
            </GCallout>
          </GSection>

          {/* OTR */}
          <GSection id="otr" title="Step 1: One-Time Registration (OTR) — Your Permanent Exam Profile">
            <GCallout type="info" title="ℹ️ What Is OTR?">
              Most major exam bodies now use a One-Time Registration system. You create your profile once and reuse it for all future exams by the same body. This saves time and prevents re-entering details for every notification.
            </GCallout>
            <div className="space-y-4 mt-5">
              {[
                { exam: 'SSC (CGL, CHSL, MTS, GD, CPO)', url: 'ssc.gov.in', steps: 'Click "Register / Login" or use the MySSC app. Enter your name, DOB, father\'s name, mobile, email, and Aadhaar. You\'ll receive a Registration ID and password via SMS and email.' },
                { exam: 'UPSC (CSE, NDA, CDS, CAPF)', url: 'upsconline.nic.in', steps: 'Click "New Registration" under the OTR section. Verify email and mobile via OTP, then create a password. UPSC\'s new portal (2025) saves personal details, documents, and a Common Application Form permanently.' },
                { exam: 'IBPS (PO, Clerk, SO, RRB)', url: 'ibps.in', steps: 'Click the relevant exam notification link, then "New Registration". Enter your name, mobile, email, and security code. Login credentials arrive on your registered mobile and email.' },
                { exam: 'RRB (NTPC, Group D, ALP)', url: 'rrbcdg.gov.in (or your regional RRB)', steps: 'Visit your regional RRB website and register with basic details. The notification will specify which RRB site to use.' },
              ].map((item, i) => (
                <div key={item.exam} className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <div className="font-heading font-semibold text-surface-800 mb-1">{item.exam}</div>
                      <div className="text-xs text-primary-500 mb-2">🌐 {item.url}</div>
                      <p className="text-sm text-surface-600 leading-relaxed">{item.steps}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="warning" title="⚠️ Save Your Credentials Immediately">
              Write down your Registration ID and password. Screenshot it. You will need these for admit cards, results, and all future exams. Losing credentials means contacting helplines — which takes days.
            </GCallout>
          </GSection>

          {/* LOGIN */}
          <GSection id="login" title="Step 2: Log In and Select the Exam You Want to Apply For">
            <p className="text-surface-600 leading-relaxed mb-4">
              After registration, log in using your Registration ID (or email/mobile for UPSC) and password. Navigate to the active exam notifications:
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
              <table className="w-full text-sm">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Portal</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Where to Find Active Exams</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC', '"Apply" or "Latest Notifications" on ssc.gov.in'],
                    ['IBPS', '"CRP PO/MT" or "CRP Clerk" link on ibps.in'],
                    ['UPSC', '"Latest Notification" in your OTR dashboard'],
                    ['RRB', 'Specific recruitment link on the regional RRB website'],
                  ].map(([portal, where], i) => (
                    <tr key={portal} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-semibold text-primary-600">{portal}</td>
                      <td className="p-3 text-surface-600">{where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <GCallout type="warning" title="⚠️ Never Apply on the Last Day">
              Server crashes and payment failures are common on the final day. Apply at least 5–7 days before the deadline. The exam body will not extend the deadline for you.
            </GCallout>
          </GSection>

          {/* PERSONAL DETAILS */}
          <GSection id="personal" title="Step 3: Fill Personal Details Accurately">
            <p className="text-surface-600 leading-relaxed mb-5">
              This is the section where most rejection-causing errors happen. Every field must match your 10th marksheet exactly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { field: 'Full Name', rule: 'Must match your 10th marksheet exactly — spelling, order of first/middle/last name, and initials must be identical.' },
                { field: "Father's & Mother's Name", rule: 'Again, exactly as on your 10th certificate. No abbreviations unless that\'s how it appears in the certificate.' },
                { field: 'Date of Birth', rule: 'Must match your 10th certificate. This is the only document accepted as date of birth proof for government exams.' },
                { field: 'Category', rule: 'Choose carefully: General, OBC-NCL, SC, ST, EWS, or PwBD. OBC certificate must be Non-Creamy Layer and valid for the current financial year.' },
                { field: 'Correspondence Address', rule: 'Use a complete, correct address. Admit cards and documents are sent here. Pin code must be correct.' },
                { field: 'Gender, Nationality, Religion', rule: 'Standard fields — fill accurately. Some exams use these for quota eligibility.' },
              ].map(item => (
                <div key={item.field} className="card p-4 border-l-4 border-primary-200">
                  <div className="font-heading font-semibold text-surface-800 text-sm mb-1">{item.field}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{item.rule}</div>
                </div>
              ))}
            </div>
            <GCallout type="info" title="ℹ️ Correction Windows Are Limited">
              Some portals (SSC, IBPS) offer a correction window — but it only covers specific fields like name and DOB. Category and address fields may not be editable. Get it right the first time.
            </GCallout>
          </GSection>

          {/* EDUCATION */}
          <GSection id="education" title="Step 4: Fill Educational Qualification Details">
            <p className="text-surface-600 leading-relaxed mb-4">
              Enter qualifications from 10th (matriculation) onward. The fields you&apos;ll need for each level:
            </p>
            <div className="space-y-3 mb-5">
              {[
                { level: '10th (Matriculation)', fields: 'Board name, roll number, passing year, percentage or CGPA — mandatory for SSC (used as primary reference)' },
                { level: '12th', fields: 'Board name, stream (Science/Commerce/Arts), passing year, percentage' },
                { level: 'Graduation', fields: 'Degree name, university name, passing year, percentage. Also computer course details for banking exams.' },
                { level: 'Post-Graduation', fields: 'Degree, university, year, percentage — if applicable' },
              ].map((item, i) => (
                <div key={item.level} className="card p-4 flex gap-3">
                  <div className="w-7 h-7 bg-surface-100 rounded-lg flex items-center justify-center text-sm font-bold text-surface-600 flex-shrink-0">{i + 1}</div>
                  <div>
                    <div className="font-heading font-semibold text-surface-800 text-sm">{item.level}</div>
                    <div className="text-xs text-surface-500 mt-1 leading-relaxed">{item.fields}</div>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="warning" title="⚠️ CGPA to Percentage Conversion">
              If you have a CGPA, convert it to percentage using your university&apos;s official conversion formula <strong>before</strong> entering it. A mismatch discovered during document verification can cancel your candidature even after you&apos;ve cleared the written exam.
            </GCallout>
          </GSection>

          {/* PHOTO & SIGNATURE */}
          <GSection id="upload" title="Step 5: Upload Photograph and Signature">
            <GCallout type="warning" title="⚠️ Most Common Reason for Silent Rejection">
              Wrong photo/signature format, size, or dimensions is the most frequent cause of applications being silently rejected. Each exam body has specific requirements. Check the table below before uploading.
            </GCallout>
            <div className="overflow-x-auto rounded-xl border border-surface-200 my-5">
              <table className="w-full text-sm">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Exam</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Photo (JPG)</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Signature (JPG)</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Extra Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC (CGL, CHSL, MTS, GD)', '100×120 px, 4–12 KB, white/light bg', '1–12 KB, black/blue ink on white', '—'],
                    ['UPSC (CSE, NDA, CDS)', '200×230 px, 20–300 KB, plain white bg + name & date printed at bottom', 'Triple signature (3 signatures on one sheet)', 'Live photo capture during form submission (new portal)'],
                    ['IBPS & SBI (PO, Clerk, SO)', '200×230 px, 20–50 KB, white bg', '140×60 px, 10–20 KB, black ink on white', 'Left-hand thumb impression (10–20 KB, JPG) + handwritten declaration'],
                    ['RRB (NTPC, Group D, ALP)', '3.5×4.5 cm passport size, 20–50 KB, white bg — photo taken after notification date', '10–20 KB, black ink on white', '—'],
                  ].map(([exam, photo, sign, extra], i) => (
                    <tr key={exam} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-semibold text-surface-800 text-xs">{exam}</td>
                      <td className="p-3 text-surface-600 text-xs">{photo}</td>
                      <td className="p-3 text-surface-600 text-xs">{sign}</td>
                      <td className="p-3 text-surface-500 text-xs italic">{extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <GCallout type="tip" title="✅ Use a Free Online Photo Resizer">
              Several free tools let you select your specific exam and automatically resize photo and signature to the correct specifications. Search &quot;photo resizer for SSC / UPSC / IBPS&quot; — saves time and prevents size errors.
            </GCallout>
          </GSection>

          {/* CENTRES */}
          <GSection id="centres" title="Step 6: Choose Exam Centres, Post Preferences, and Other Options">
            <p className="text-surface-600 leading-relaxed mb-5">
              Most exams let you select 3–4 preferred exam centre cities. The conducting body will try to allot your first preference — but there is no guarantee. Choose cities that are closest and easy to travel to on exam day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { exam: 'IBPS PO / SBI PO', detail: 'Select preferred banks in order of priority. Your posting after final selection depends on this — think carefully about where you\'re willing to work. IBPS has 11 participating public sector banks.' },
                { exam: 'SSC CGL', detail: 'You may indicate post preferences (Inspector of Income Tax, Sub-Inspector in CBI, AAO, etc.) during the application or in a separate post-preference form after the exam.' },
                { exam: 'UPSC CSE', detail: 'Rank your preferred services (IAS, IPS, IFS, IRS, etc.) and select your optional subject and examination language.' },
                { exam: 'Pre-Examination Training', detail: 'Some banking and central government exams offer PET for SC/ST/OBC/EWS candidates. Opt in if eligible — it\'s free coaching and helps you prepare.' },
              ].map(item => (
                <div key={item.exam} className="card p-4 border-t-4 border-primary-300">
                  <div className="font-heading font-semibold text-surface-800 text-sm mb-2">{item.exam}</div>
                  <div className="text-xs text-surface-500 leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>
          </GSection>

          {/* FEE */}
          <GSection id="fee" title="Step 7: Pay the Application Fee">
            <p className="text-surface-600 leading-relaxed mb-4">
              Fees can be paid via net banking, debit/credit card, or UPI. SSC also accepts SBI challan (offline). Exempted categories vary by exam — check the notification carefully.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-5">
              <table className="w-full text-sm">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Exam</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">General / OBC</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">SC / ST / PwBD / Female</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC (CGL, CHSL, MTS)', '₹100', 'Exempt (₹0)'],
                    ['UPSC CSE', '₹100', 'Exempt (₹0) for Female/SC/ST/PwBD'],
                    ['IBPS PO', '₹850', '₹175'],
                    ['SBI PO', '₹750 (+ GST)', '₹125 (+ GST)'],
                    ['RRB NTPC', '₹500', '₹250 (partial refund on appearing)'],
                  ].map(([exam, gen, sc], i) => (
                    <tr key={exam} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-semibold text-surface-800">{exam}</td>
                      <td className="p-3 text-surface-700">{gen}</td>
                      <td className="p-3 text-emerald-600 font-semibold text-xs">{sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <GCallout type="warning" title="⚠️ Payment Failure? Do Not Submit Again">
              Your application is NOT submitted until the fee is paid. If payment fails, log back in and retry. If the amount was debited but the portal shows failure, wait 48–72 hours — it usually auto-reconciles. If not, contact the helpline with your transaction reference number. Do not submit a second application.
            </GCallout>
          </GSection>

          {/* PREVIEW */}
          <GSection id="preview" title="Step 8: Preview, Verify, and Submit the Form">
            <p className="text-surface-600 leading-relaxed mb-5">
              Before final submission, every portal shows a preview of your complete application. This is your <strong>last chance</strong> to verify everything. Check systematically:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {[
                '✅ Name matches your 10th marksheet exactly',
                '✅ Date of birth is correct',
                '✅ Category is selected accurately',
                '✅ Photo is clear, correct format and size',
                '✅ Signature is legible and within size limits',
                '✅ Educational details (%, passing year) are accurate',
                '✅ Exam centre preferences are filled in',
                '✅ Application fee is paid and confirmed',
              ].map(item => (
                <div key={item} className="card p-3 text-sm text-surface-700 font-medium">{item}</div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-xl border border-surface-200">
              <table className="w-full text-sm">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Exam</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Correction Window?</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">What Can Be Changed?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC', '2–3 days after application closes', 'Name, father\'s/mother\'s name, DOB, gender, 10th roll number (up to 2 edits)'],
                    ['IBPS', '2 days (₹200 fee)', 'Most fields except name, email ID, and mobile number'],
                    ['UPSC', 'None', 'No corrections allowed after final submission'],
                    ['RRB', 'Limited — check notification', 'Specific to each notification'],
                  ].map(([exam, window, what], i) => (
                    <tr key={exam} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-semibold text-surface-800">{exam}</td>
                      <td className="p-3 text-surface-600">{window}</td>
                      <td className="p-3 text-surface-600">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GSection>

          {/* CONFIRMATION */}
          <GSection id="confirmation" title="Step 9: Download and Save Confirmation">
            <p className="text-surface-600 leading-relaxed mb-5">
              After successful submission, take these steps <strong>immediately</strong> — do not close the confirmation page before completing them:
            </p>
            <div className="space-y-3 mb-5">
              {[
                { n: '1', action: 'Screenshot the confirmation page', why: 'Contains your application number — your only proof of submission before receiving the formal confirmation email.' },
                { n: '2', action: 'Download/print the submitted application form as PDF', why: 'Most portals offer a "Print Application" option. You need this during document verification.' },
                { n: '3', action: 'Save the payment receipt and transaction ID separately', why: 'Required if a payment dispute arises later.' },
                { n: '4', action: 'Note your Registration ID and password in a safe place', why: 'Needed for admit card, results, and all future exams from the same body.' },
              ].map(item => (
                <div key={item.n} className="card p-4 flex gap-3">
                  <div className="w-7 h-7 bg-primary-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{item.n}</div>
                  <div>
                    <div className="font-heading font-semibold text-surface-800 text-sm mb-1">{item.action}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="info" title="ℹ️ Keep Everything Till Final Joining">
              The entire recruitment process (exam → result → document verification → joining) can take 8–18 months. Keep all documents safely until you have officially joined the post.
            </GCallout>
          </GSection>

          {/* MISTAKES */}
          <GSection id="mistakes" title="Common Mistakes That Lead to Form Rejection">
            <p className="text-surface-600 leading-relaxed mb-5">
              These are the most frequent errors based on official guidelines and candidate experiences across lakhs of applications:
            </p>
            <div className="space-y-3">
              {[
                { mistake: 'Name Mismatch', detail: 'Your application name must match your 10th marksheet letter-for-letter. Even small differences like "Mohammad" vs "Mohammed" or "Subramaniam" vs "Subramanian" cause problems in DV.' },
                { mistake: 'Wrong Date of Birth', detail: 'Must match your 10th certificate exactly. No exceptions, no alternative documents accepted.' },
                { mistake: 'Wrong Category Selection', detail: 'Choosing General when you\'re OBC, or selecting OBC without a valid Non-Creamy Layer certificate. If your OBC NCL certificate has expired, you lose the reservation benefit.' },
                { mistake: 'Wrong Photo/Signature Format', detail: 'Using PNG instead of JPG, exceeding the file size limit, uploading a blurry photo, or for IBPS — signing in capital letters instead of a running-hand signature.' },
                { mistake: 'Fee Not Paid', detail: 'Many candidates fill the entire form but forget to complete payment. The application remains incomplete and invalid.' },
                { mistake: 'Multiple Applications', detail: 'SSC explicitly states that if duplicate applications are found, all of them may be cancelled. Apply only once per exam.' },
                { mistake: 'Incorrect Educational Details', detail: 'Wrong passing year, wrong percentage, or wrong university name leads to cancellation during DV — even after clearing the written exam.' },
                { mistake: 'Email/Mobile Changed Mid-Process', detail: 'Admit cards and results are sent to the registered contact. Changing these after registration means missing critical communications.' },
              ].map((item, i) => (
                <div key={item.mistake} className="card p-4 border-l-4 border-red-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-red-500 font-bold text-sm">✗</span>
                    <div className="font-heading font-semibold text-surface-800 text-sm">{item.mistake}</div>
                  </div>
                  <div className="text-xs text-surface-500 leading-relaxed pl-5">{item.detail}</div>
                </div>
              ))}
            </div>
          </GSection>

          {/* CORRECTION WINDOW */}
          <GSection id="correction" title="Using the Correction Window Effectively">
            <p className="text-surface-600 leading-relaxed mb-5">
              If you spot an error after submission, check whether the exam body offers a correction window — and act fast. The window typically opens within 1–3 days of the application period closing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { exam: 'SSC', when: '2–3 days after application deadline', how: 'Log in with Registration ID and password. You can make up to 2 corrections to: name, father\'s/mother\'s name, DOB, gender, 10th roll number.' },
                { exam: 'IBPS', when: 'Usually 2 days, ₹200 fee', how: 'Most details editable except name, email ID, and mobile number.' },
                { exam: 'UPSC', when: 'No correction window', how: 'Verify everything before submission. No changes allowed after final submit.' },
                { exam: 'RRB', when: 'Limited — check notification', how: 'Look for specific correction details in the official notification for each recruitment.' },
              ].map(item => (
                <div key={item.exam} className="card p-5">
                  <div className="font-heading font-bold text-primary-600 mb-1">{item.exam}</div>
                  <div className="text-xs text-surface-500 mb-2 font-semibold uppercase tracking-wide">When: {item.when}</div>
                  <p className="text-sm text-surface-600 leading-relaxed">{item.how}</p>
                </div>
              ))}
            </div>
            <GCallout type="tip" title="✅ If Window Has Closed and Error Is Major">
              Write an application to the exam body&apos;s helpline or nearest regional office explaining the mistake. Attach supporting documents. While there is no guarantee, it creates a record that can help you during document verification.
            </GCallout>
          </GSection>

          {/* OFFICIAL WEBSITES */}
          <GSection id="websites" title="Official Websites for Applying to Major Government Exams">
            <GCallout type="warning" title="⚠️ Beware of Fake Websites">
              Always apply through the official website only. Fake portals that look identical are designed to steal your money and personal data. Bookmark the official URLs below.
            </GCallout>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {[
                { body: 'SSC', exams: 'CGL, CHSL, MTS, GD, CPO, Stenographer', url: 'ssc.gov.in', extra: 'Also available on the MySSC mobile app (Google Play).' },
                { body: 'UPSC', exams: 'CSE, NDA, CDS, CAPF, ESE, CMS', url: 'upsconline.nic.in (applications) + upsc.gov.in (notifications)', extra: '' },
                { body: 'IBPS', exams: 'PO, Clerk, SO, RRB Officer', url: 'ibps.in', extra: 'Only one official IBPS portal.' },
                { body: 'SBI', exams: 'PO, Clerk, SO', url: 'sbi.co.in/careers', extra: 'Navigate to the Recruitment section.' },
                { body: 'RRB (Railway)', exams: 'NTPC, Group D, ALP, JE', url: 'Regional RRB website (rrbcdg.gov.in, rrbchennai.gov.in, rrbmumbai.gov.in, etc.)', extra: 'The notification will specify which regional RRB to use.' },
              ].map(item => (
                <div key={item.body} className="card p-4 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-heading font-bold text-surface-800">{item.body}</div>
                    <span className="badge-primary text-xs">{item.exams.split(',').length} exams</span>
                  </div>
                  <div className="text-xs text-surface-500 mb-1">Exams: {item.exams}</div>
                  <div className="text-xs text-primary-600 font-semibold break-all">🌐 {item.url}</div>
                  {item.extra && <div className="text-xs text-surface-400 mt-1 italic">{item.extra}</div>}
                </div>
              ))}
            </div>
          </GSection>

          {/* CHECKLIST */}
          <GSection id="checklist" title="Quick Checklist Before You Submit">
            <p className="text-surface-600 leading-relaxed mb-5">
              Take five extra minutes to run through this list. It can save you months of regret.
            </p>
            <div className="card p-6 bg-emerald-50 border-emerald-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Name, father\'s and mother\'s name match your 10th marksheet exactly',
                  'Date of birth is correct and matches your 10th certificate',
                  'Category (General/OBC/SC/ST/EWS/PwBD) is selected correctly with a valid certificate',
                  'Photo is recent (within last 3 months), JPG format, within specified file size, white background',
                  'Signature is black ink on white paper, JPG, within specified file size',
                  'Educational details (board, percentage, passing year) are accurate',
                  'Exam centre preferences are filled in',
                  'Application fee is paid and confirmed',
                  'You have saved or printed the confirmation page and noted your registration number',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-emerald-800">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-surface-600 text-sm leading-relaxed">Fill the form carefully, apply early, and focus on your preparation. Good luck with your exam! 🎯</p>
            </div>
          </GSection>

          {/* Related Guides */}
          <div className="mt-12 pt-8 border-t border-surface-200">
            <h3 className="font-heading font-bold text-lg text-surface-800 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { slug: 'how-to-start-government-exam-preparation', cat: 'Getting Started', title: 'Government Exam Preparation for Beginners 2026 – Step-by-Step Roadmap' },
                { slug: 'best-free-resources-government-exams', cat: 'Resources', title: 'Best Free Resources for Government Exam Preparation (2026)' },
                { slug: 'age-limit-relaxation-government-jobs', cat: 'Eligibility', title: 'Complete Guide to Age Limit & Relaxation for Government Jobs' },
                { slug: 'documents-needed-government-job', cat: 'Documents', title: 'Documents Required for Government Job (2026) – Complete Checklist' },
              ].map(g => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="card p-4 group">
                  <span className="badge-primary mb-2 text-xs inline-block">{g.cat}</span>
                  <h4 className="font-semibold text-sm text-surface-800 group-hover:text-primary-500 transition-colors leading-snug">{g.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            {/* TOC */}
            <div className="card p-5">
              <div className="text-xs font-heading font-semibold uppercase tracking-wide text-surface-500 mb-4">On This Page</div>
              <nav className="space-y-1">
                {toc.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-sm text-surface-500 hover:text-primary-500 hover:bg-primary-50 px-2 py-1.5 rounded-lg transition-colors"
                  >
                    <span className="w-1 h-1 bg-surface-300 rounded-full flex-shrink-0" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Key Portals Card */}
            <div className="card p-5 bg-primary-50 border-primary-200">
              <div className="text-xs font-heading font-semibold uppercase tracking-wide text-primary-600 mb-3">Official Apply Portals</div>
              <div className="space-y-2 text-sm">
                {[
                  { name: 'SSC', url: 'https://ssc.gov.in' },
                  { name: 'UPSC', url: 'https://upsconline.nic.in' },
                  { name: 'IBPS', url: 'https://www.ibps.in' },
                  { name: 'SBI Careers', url: 'https://sbi.co.in/careers' },
                  { name: 'RRB CDG', url: 'https://rrbcdg.gov.in' },
                ].map(item => (
                  <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-primary-600 hover:text-primary-800 font-medium">
                    <span>{item.name}</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Eligibility Tool CTA */}
            <div className="card p-5 bg-emerald-50 border-emerald-200">
              <div className="text-sm font-heading font-semibold text-emerald-800 mb-2">Check Your Eligibility</div>
              <p className="text-xs text-emerald-600 mb-3">See which exams you qualify for based on your age, qualification, and category.</p>
              <Link href="/tools/eligibility-checker" className="btn-primary text-sm w-full text-center block">
                Check Eligibility →
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── AGE LIMIT & RELAXATION GUIDE — FULL RICH ARTICLE ────────────────────────
function AgeRelaxationGuide({ guide }: { guide: { slug: string; title: string; description: string; category: string; readTime: string } }) {
  const toc = [
    { id: 'how-age-works', label: 'How Age Limits Work' },
    { id: 'quick-table', label: 'Quick Reference Table' },
    { id: 'obc', label: 'OBC Age Relaxation' },
    { id: 'sc-st', label: 'SC / ST Age Relaxation' },
    { id: 'ews', label: 'EWS — No Relaxation' },
    { id: 'pwbd', label: 'PwBD Age Relaxation' },
    { id: 'ex-servicemen', label: 'Ex-Servicemen Relaxation' },
    { id: 'other-categories', label: 'Other Categories' },
    { id: 'exam-wise', label: 'Exam-Wise Age Limits' },
    { id: 'documents', label: 'Documents Required' },
    { id: 'mistakes', label: 'Common Mistakes' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Age Limit &amp; Relaxation</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <article>
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl p-8 mb-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-white/20 text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">{guide.category}</span>
              <span className="text-white/70 text-xs">Updated April 2026</span>
              <span className="text-white/50 text-xs">•</span>
              <span className="text-white/70 text-xs">{guide.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 leading-tight">
              Complete Guide to Age Limit &amp; Relaxation for Government Jobs (2026)
            </h1>
            <p className="text-white/85 leading-relaxed text-base mb-6">
              Every central government exam has a maximum age limit. If you belong to OBC, SC/ST, PwBD, or are an Ex-Serviceman, you are entitled to extra years. This guide covers every rule, with a quick-check table, exam-wise limits, required documents, and the mistakes that cost candidates their chance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { num: '+3 yrs', label: 'OBC relaxation', color: 'bg-white/20' },
                { num: '+5 yrs', label: 'SC / ST relaxation', color: 'bg-white/20' },
                { num: '+10 yrs', label: 'PwBD (General)', color: 'bg-white/20' },
                { num: '0 yrs', label: 'EWS relaxation', color: 'bg-white/10' },
              ].map(item => (
                <div key={item.label} className={`${item.color} rounded-xl p-4 text-center`}>
                  <div className="text-2xl font-bold text-white">{item.num}</div>
                  <div className="text-xs text-white/80 font-medium mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 — How Age Limits Work */}
          <GSection id="how-age-works" title="How Age Limits Work in Government Exams">
            <p className="text-surface-600 leading-relaxed mb-4">
              Every government exam notification specifies a <strong>minimum age</strong> and a <strong>maximum age (upper age limit)</strong>. Your age is calculated as on a specific <em>cut-off date</em> mentioned in the notification — not the date you are applying. Always use this cut-off date when checking your eligibility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[
                { exam: 'UPSC / SSC exams', cutoff: '1st August of the exam year', note: 'E.g., for UPSC CSE 2026: age as on 01-08-2026' },
                { exam: 'SSC CGL / CHSL', cutoff: '1st January of the exam year', note: 'E.g., for SSC CGL 2026: age as on 01-01-2026' },
                { exam: 'Banking (IBPS / SBI)', cutoff: '1st of the notification month', note: 'Exact date mentioned in the CRP notification' },
              ].map(item => (
                <div key={item.exam} className="card p-4">
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">{item.exam}</div>
                  <div className="font-heading font-semibold text-surface-800 text-sm mb-1">{item.cutoff}</div>
                  <div className="text-xs text-surface-400">{item.note}</div>
                </div>
              ))}
            </div>
            <GCallout type="warning" title="⚠️ Critical Rule — Always Use Your 10th Certificate DOB">
              The date of birth on your Class 10 (Matriculation) marksheet is the <strong>only accepted proof</strong> for government exams. Your Aadhaar or voter card date may differ — it does not matter. Only the 10th certificate DOB is considered.
            </GCallout>
            <p className="text-surface-600 leading-relaxed mt-4 text-sm">
              Age relaxation means the government permits candidates from certain reserved categories to apply even if they exceed the general upper age limit. The relaxation is added on top of the upper age limit. So if the upper age limit is 30, an OBC candidate (who gets +3 years) can apply up to age 33.
            </p>
          </GSection>

          {/* Section 2 — Quick Table */}
          <GSection id="quick-table" title="Quick Reference: Age Relaxation at a Glance">
            <p className="text-sm text-surface-500 mb-4">Standard relaxations for central government exams (SSC, UPSC, Railways, Banking). These are the default central government rules — state PSC exams may differ. Always verify the official notification.</p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Category</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Relaxation</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Effective Max Age*</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Certificate Needed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['General / EWS', 'None', '30 yrs (Banking) / 32 yrs (SSC, UPSC)', 'No certificate needed'],
                    ['OBC (Non-Creamy Layer)', '+3 years', '33 yrs / 35 yrs', 'OBC-NCL certificate (valid for current financial year)'],
                    ['SC / ST', '+5 years', '35 yrs / 37 yrs', 'SC/ST caste certificate from competent authority'],
                    ['PwBD — General', '+10 years', '40 yrs / 42 yrs', 'Disability certificate (min 40% disability)'],
                    ['PwBD — OBC', '+13 years (10+3)', '43 yrs / 45 yrs', 'Both OBC-NCL + Disability certificate'],
                    ['PwBD — SC/ST', '+15 years (10+5)', '45 yrs / 47 yrs', 'Both SC/ST caste + Disability certificate'],
                    ['Ex-Servicemen (Group C/D)', 'Actual service + 3 yrs deducted from age', 'Varies by service length', 'Discharge / Service certificate'],
                    ['Ex-Servicemen (Group A/B Competitive)', 'Max +5 years (min 5 yrs service)', 'Varies', 'Discharge certificate + service record'],
                    ['Widows / Divorced Women (certain exams)', 'Up to 35 yrs (General) / 38 yrs (OBC) / 40 yrs (SC/ST)', 'Exam-specific', 'Death certificate / Court order + affidavit'],
                  ].map(([cat, relax, maxAge, cert], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800 text-xs">{cat}</td>
                      <td className="p-3"><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${relax === 'None' ? 'bg-surface-100 text-surface-500' : 'bg-emerald-100 text-emerald-700'}`}>{relax}</span></td>
                      <td className="p-3 text-xs text-surface-600">{maxAge}</td>
                      <td className="p-3 text-xs text-surface-500">{cert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400">* &ldquo;Effective Max Age&rdquo; shown for 30 yrs (Banking) / 32 yrs (SSC/UPSC) base limits. Railway NTPC base is 33 yrs so add relaxation accordingly. Always check the official notification for the exact upper age limit of the specific post.</p>
          </GSection>

          {/* Section 3 — OBC */}
          <GSection id="obc" title="OBC Age Relaxation — 3 Years (Non-Creamy Layer Only)">
            <p className="text-surface-600 leading-relaxed mb-4">
              OBC (Other Backward Classes) candidates who belong to the <strong>Non-Creamy Layer (NCL)</strong> get 3 years of age relaxation in all central government recruitment. This is mandated by the Government of India and applies across UPSC, SSC, IBPS, SBI, and RRB exams.
            </p>
            <GCallout type="warning" title="⚠️ Creamy Layer OBC Candidates Get No Relaxation">
              If your family income exceeds the Creamy Layer threshold (currently ₹8 lakh per annum), you are classified as OBC Creamy Layer. You cannot claim OBC reservation or age relaxation — you apply as General category.
            </GCallout>
            <div className="space-y-3 mt-5">
              <div className="card p-4">
                <div className="font-heading font-semibold text-surface-800 mb-2 text-sm">📄 OBC-NCL Certificate Requirements</div>
                <ul className="text-sm text-surface-600 space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must be issued by the competent authority (Sub-Divisional Officer / District Magistrate / Revenue Officer / Tehsildar — as prescribed by the exam body)</li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must be in the <strong>central government format</strong> (Annexure — Format prescribed in the notification). State OBC certificates in state formats may not be valid for central exams</li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must be valid for the current financial year (April–March). Certificates issued in a previous year for the previous financial year are considered expired</li>
                  <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must clearly state &ldquo;Non-Creamy Layer&rdquo; — a certificate without this phrase is not accepted for central government exams</li>
                </ul>
              </div>
              <GCallout type="tip" title="✅ Tip: Renew Your OBC-NCL Certificate Every Year">
                Many candidates lose their relaxation benefit because their OBC-NCL certificate expired. Get a fresh certificate every April (start of financial year). It costs nothing and takes 1–2 weeks to process at your local tahsil/tehsil office.
              </GCallout>
            </div>
          </GSection>

          {/* Section 4 — SC/ST */}
          <GSection id="sc-st" title="SC / ST Age Relaxation — 5 Years">
            <p className="text-surface-600 leading-relaxed mb-4">
              Scheduled Caste (SC) and Scheduled Tribe (ST) candidates get <strong>5 years of age relaxation</strong> in all central government recruitment, in addition to reservation benefits. This is one of the most substantial age relaxations available and applies to UPSC, SSC, Banking, and Railway exams uniformly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { title: 'UPSC CSE', gen: '32 yrs', sc_st: '37 yrs (no attempt limit)', note: 'SC/ST also get unlimited attempts until age 37' },
                { title: 'SSC CGL', gen: '32 yrs', sc_st: '37 yrs', note: 'Most posts. Some posts have lower base limits' },
                { title: 'IBPS PO', gen: '30 yrs', sc_st: '35 yrs', note: 'Standard banking CRP notification rules' },
                { title: 'RRB NTPC (Graduate)', gen: '33 yrs', sc_st: '38 yrs', note: 'Graduate level posts. UG posts: 30 → 35 yrs' },
              ].map(item => (
                <div key={item.title} className="card p-4">
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">{item.title}</div>
                  <div className="flex gap-4 mb-2">
                    <div><div className="text-xs text-surface-400">General</div><div className="font-heading font-bold text-surface-800">{item.gen}</div></div>
                    <div><div className="text-xs text-surface-400">SC / ST</div><div className="font-heading font-bold text-emerald-600">{item.sc_st}</div></div>
                  </div>
                  <div className="text-xs text-surface-400">{item.note}</div>
                </div>
              ))}
            </div>
            <div className="card p-4">
              <div className="font-heading font-semibold text-surface-800 mb-2 text-sm">📄 SC/ST Certificate Requirements</div>
              <ul className="text-sm text-surface-600 space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Issued by competent authority (District Magistrate / Sub-Divisional Officer / Tehsildar)</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must be in the format prescribed by the Government of India (the format is mentioned in the official notification)</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>SC/ST certificates do not expire — but must be valid as per the notification (no fresh certificate needed annually unlike OBC-NCL)</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>For ST candidates who have migrated from their original state: the notification will specify which state&apos;s certificate is acceptable</li>
              </ul>
            </div>
          </GSection>

          {/* Section 5 — EWS */}
          <GSection id="ews" title="EWS — 10% Reservation But NO Age Relaxation">
            <GCallout type="warning" title="⚠️ EWS Candidates Follow General Category Age Limits">
              EWS (Economically Weaker Section) candidates get 10% reservation in central government jobs. However, they do <strong>NOT</strong> get any age relaxation. EWS candidates must meet the same age limit as General category candidates.
            </GCallout>
            <p className="text-surface-600 leading-relaxed mt-4 mb-4">
              This is a common source of confusion. Many aspirants assume EWS means they get relaxation like OBC. That is incorrect. EWS is purely a reservation in seats — the age limit remains the same as General category.
            </p>
            <div className="card p-4 mb-4">
              <div className="font-heading font-semibold text-surface-800 mb-2 text-sm">📄 EWS Certificate Requirements</div>
              <ul className="text-sm text-surface-600 space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must be issued by: District Magistrate / Additional District Magistrate / Collector / Deputy Commissioner / Additional Deputy Commissioner / 1st Class Stipendiary Magistrate / Sub-Divisional Magistrate / Taluka Magistrate / Executive Magistrate / Extra Assistant Commissioner / Chief Presidency Magistrate / Additional Chief Presidency Magistrate / Presidency Magistrate / Revenue Officer not below the rank of Tehsildar / Sub-Divisional Officer of the area where the candidate or his/her family normally resides</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Must be obtained <strong>fresh every year</strong> — based on the income of the previous financial year (April–March). An EWS certificate issued for 2024–25 income cannot be used to claim EWS for a 2026 recruitment if the cut-off date is in 2026</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Family income must be below ₹8 lakh per annum from all sources in the preceding year, and the family must not own more than 5 acres of agricultural land, a flat above 1,000 sq ft, or a residential plot above 100 sq yd in notified municipalities (200 sq yd elsewhere)</li>
              </ul>
            </div>
          </GSection>

          {/* Section 6 — PwBD */}
          <GSection id="pwbd" title="PwBD Age Relaxation — 10 to 15 Years">
            <p className="text-surface-600 leading-relaxed mb-4">
              Persons with Benchmark Disability (PwBD) — earlier called PH (Physically Handicapped) — receive the <strong>largest age relaxation</strong> in government recruitment. The relaxation is cumulative with category relaxation.
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-100">
                  <tr>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide text-surface-600">PwBD Category</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide text-surface-600">Age Relaxation</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide text-surface-600">Formula</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PwBD (General / EWS)', '+10 years', 'Base limit + 10'],
                    ['PwBD + OBC', '+13 years', 'Base limit + 10 (PwBD) + 3 (OBC)'],
                    ['PwBD + SC / ST', '+15 years', 'Base limit + 10 (PwBD) + 5 (SC/ST)'],
                  ].map(([cat, relax, formula], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800 text-xs">{cat}</td>
                      <td className="p-3"><span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">{relax}</span></td>
                      <td className="p-3 text-xs text-surface-500">{formula}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card p-4 mb-4">
              <div className="font-heading font-semibold text-surface-800 mb-2 text-sm">📋 Eligible Disability Types (as per RPwD Act, 2016)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Blindness and Low Vision',
                  'Deaf and Hard of Hearing',
                  'Locomotor Disability (including Cerebral Palsy, Leprosy Cured, Dwarfism, Acid Attack Victims, Muscular Dystrophy)',
                  'Autism, Intellectual Disability, Specific Learning Disability, Mental Illness',
                  'Multiple Disabilities (combination of above)',
                  'Deaf-Blindness',
                ].map(type => (
                  <div key={type} className="flex items-start gap-2 text-xs text-surface-600 bg-surface-50 rounded-lg p-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-4">
              <div className="font-heading font-semibold text-surface-800 mb-2 text-sm">📄 PwBD Certificate Requirements</div>
              <ul className="text-sm text-surface-600 space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Disability must be <strong>40% or more</strong> — certified by a government medical authority (Central/State Medical Board)</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>Certificate issued by the competent authority constituted under the Rights of Persons with Disabilities Act, 2016</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>The post must be identified as suitable for the specific type of disability — this is mentioned in the official notification. Not all posts are available for all disability types</li>
                <li className="flex items-start gap-2"><span className="text-primary-500 mt-0.5 flex-shrink-0">▸</span>A scribe is allowed in the exam for certain disability types — apply for it at the time of form filling</li>
              </ul>
            </div>
          </GSection>

          {/* Section 7 — Ex-Servicemen */}
          <GSection id="ex-servicemen" title="Ex-Servicemen Age Relaxation — Service Length + 3 Years">
            <p className="text-surface-600 leading-relaxed mb-4">
              Ex-Servicemen (ESM) get a unique age relaxation formula: the actual period of military service rendered is deducted from the candidate&apos;s actual age, and the resultant age must not exceed the upper age limit of the post by more than 3 years. This is governed by the <em>Ex-Servicemen (Re-employment in Central Civil Services and Posts) Rules, 1979</em>, amended in 2012.
            </p>
            <div className="card p-5 mb-5 bg-primary-50 border-primary-200">
              <div className="font-heading font-semibold text-primary-800 mb-3 text-sm">📐 How to Calculate Ex-Servicemen Age Relaxation</div>
              <div className="text-sm text-primary-700 leading-relaxed space-y-2">
                <p><strong>Formula for Group B (Non-Gazetted), C, and D posts:</strong></p>
                <p className="bg-white rounded-lg p-3 font-mono text-xs text-surface-800">
                  Effective Age = Actual Age − Military Service Rendered<br />
                  If Effective Age ≤ (Post Upper Limit + 3 years) → Eligible
                </p>
                <p className="text-xs text-primary-600 mt-2"><strong>Example:</strong> A candidate aged 45 with 13 years of military service.<br />
                Effective Age = 45 − 13 = 32. Post upper limit = 30.<br />
                32 ≤ 30 + 3 = 33 ✅ → Eligible</p>
              </div>
            </div>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-100">
                  <tr>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide text-surface-600">Post Type</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide text-surface-600">Relaxation Rule</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide text-surface-600">Min Service Required</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Group B (Non-Gazetted), C, D', 'Deduct service from age; resultant age must not exceed upper limit + 3 yrs', 'No minimum service required'],
                    ['Group A and B (Non-Competitive — direct recruitment)', 'Upper age limit relaxed by military service + 3 years', 'No minimum service required'],
                    ['Group A and B (Competitive — All India exam like UPSC)', 'Maximum 5 years relaxation', 'Minimum 5 years of military service'],
                  ].map(([type, rule, min], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800 text-xs">{type}</td>
                      <td className="p-3 text-xs text-surface-600">{rule}</td>
                      <td className="p-3 text-xs text-surface-500">{min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card p-4 mb-4">
              <div className="font-heading font-semibold text-surface-800 mb-2 text-sm">📋 Reservation for Ex-Servicemen in Central Government Jobs</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { post: 'Group C Posts', quota: '10% reservation', note: 'Central Government direct recruitment' },
                  { post: 'Group D Posts', quota: '20% reservation', note: 'Central Government direct recruitment' },
                  { post: 'Paramilitary (CRPF, BSF, etc.)', quota: '10% (up to Asst. Commandant level)', note: 'All paramilitary forces' },
                ].map(item => (
                  <div key={item.post} className="bg-surface-50 rounded-lg p-3">
                    <div className="text-xs font-semibold text-surface-700 mb-1">{item.post}</div>
                    <div className="text-sm font-heading font-bold text-emerald-600 mb-1">{item.quota}</div>
                    <div className="text-xs text-surface-400">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <GCallout type="info" title="ℹ️ Ex-Servicemen Status After First Government Job">
              Once an ex-serviceman secures a central government job by using ESM benefits, their ex-serviceman status for <strong>re-employment purposes ceases</strong>. They can only avail age relaxation (not reservation) for applying to higher posts thereafter. This is as per DoPT OM No. 36034/27/84-Estt(SCT).
            </GCallout>
          </GSection>

          {/* Section 8 — Other Categories */}
          <GSection id="other-categories" title="Other Categories With Age Relaxation">
            <div className="space-y-3">
              {[
                {
                  title: 'Central Government Employees (Departmental Candidates)',
                  icon: '🏛️',
                  content: 'Serving central government employees get 5 years of age relaxation for posts filled through open competition (SSC/UPSC). Up to 3 years for posts filled via employment exchange (not competitive exam). They must produce a &ldquo;No Objection Certificate&rdquo; (NOC) from their current department.',
                },
                {
                  title: 'Widows / Divorced / Judicially Separated Women',
                  icon: '👤',
                  content: 'In certain exams (especially SSC and state PSC), widows, divorced women, and women judicially separated and not remarried get age relaxation: up to 35 years for General, 38 years for OBC, and 40 years for SC/ST. Not universally applicable — check the specific exam notification.',
                },
                {
                  title: 'Retrenched Central Government Employees',
                  icon: '📋',
                  content: 'Retrenched central government employees with a minimum of 6 months of continuous service are eligible for age relaxation equal to the period of their previous service + 3 years. This applies to posts filled through employment exchange, not through UPSC or SSC competitive exams.',
                },
                {
                  title: 'NCC Whole-Time Cadet Instructors',
                  icon: '🎖️',
                  content: 'Persons who served as whole-time Cadet Instructors in the National Cadet Corps (NCC) are eligible for age relaxation equal to their period of NCC service + 3 years, for posts filled through employment exchange.',
                },
              ].map(item => (
                <div key={item.title} className="card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <div className="font-heading font-semibold text-surface-800 text-sm">{item.title}</div>
                  </div>
                  <p className="text-sm text-surface-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              ))}
            </div>
          </GSection>

          {/* Section 9 — Exam-Wise */}
          <GSection id="exam-wise" title="Exam-Wise Age Limits (2026)">
            <p className="text-sm text-surface-500 mb-4">General category upper age limits are shown. Add relaxation as per your category. Always verify from the official notification — post-wise limits within the same exam may vary.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-surface-200 rounded-xl overflow-hidden">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Exam</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Min Age</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Max Age (General)</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">OBC</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">SC/ST</th>
                    <th className="text-left p-3 font-heading font-semibold text-xs uppercase tracking-wide">Cut-off Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['UPSC CSE (IAS)', '21', '32', '35', '37', '1st August'],
                    ['SSC CGL', '18', '27–32 (post-wise)', '30–35', '32–37', '1st January'],
                    ['SSC CHSL', '18', '27', '30', '32', '1st January'],
                    ['SSC MTS', '18', '25', '28', '30', '1st August'],
                    ['IBPS PO (CRP PO)', '20', '30', '33', '35', '1st of notification month'],
                    ['IBPS Clerk (CRP Clerk)', '20', '28', '31', '33', '1st of notification month'],
                    ['SBI PO', '21', '30', '33', '35', '1st April'],
                    ['SBI Clerk', '20', '28', '31', '33', '1st April'],
                    ['RRB NTPC (Graduate)', '18', '33', '36', '38', '1st January of notification year'],
                    ['RRB NTPC (Undergraduate)', '18', '30', '33', '35', '1st January of notification year'],
                    ['RRB Group D', '18', '33', '36', '38', '1st July of notification year'],
                    ['SSC CPO (SI/ASI)', '20', '25', '28', '30', '1st August'],
                    ['SSC GD Constable', '18', '23', '26', '28', 'As per notification'],
                  ].map(([exam, min, max, obc, scst, cutoff], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800 text-xs">{exam}</td>
                      <td className="p-3 text-xs text-surface-600 text-center">{min}</td>
                      <td className="p-3 text-xs font-semibold text-surface-700 text-center">{max}</td>
                      <td className="p-3 text-xs text-emerald-700 font-medium text-center">{obc}</td>
                      <td className="p-3 text-xs text-emerald-700 font-medium text-center">{scst}</td>
                      <td className="p-3 text-xs text-surface-400">{cutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-3">Sources: UPSC CSE Notification, SSC CGL Notification, IBPS CRP PO/MT Notification, SBI PO Notification, RRB NTPC Notification (various cycles). All figures are for central government exams. State PSC exams have separate age limits. Always verify from the official notification PDF before applying.</p>
          </GSection>

          {/* Section 10 — Documents */}
          <GSection id="documents" title="Documents Required to Claim Age Relaxation">
            <p className="text-surface-600 leading-relaxed mb-4">
              Age relaxation is not automatically granted. You must claim it during the application and produce the relevant documents at the document verification stage. Providing false documents leads to permanent disqualification and possible criminal action.
            </p>
            <div className="space-y-3">
              {[
                { cat: 'All Candidates', icon: '📋', docs: ['Class 10 (Matriculation) marksheet — proof of Date of Birth. This is the ONLY accepted document. Aadhaar, voter card, or driving licence are NOT accepted as age proof in government exams.'] },
                { cat: 'OBC (Non-Creamy Layer)', icon: '🟡', docs: ['OBC-NCL certificate in the central government format', 'Issued by SDO / District Magistrate / Tehsildar', 'Valid for the current financial year (April–March)', 'Must explicitly state "Non-Creamy Layer"'] },
                { cat: 'SC / ST', icon: '🟠', docs: ['Caste certificate issued by District Magistrate / SDO / Revenue Officer', 'In the Government of India prescribed format (Annexure — given in the notification)', 'No annual renewal required'] },
                { cat: 'EWS', icon: '🔵', docs: ['Income and asset certificate in the prescribed format', 'Issued by Tehsildar / SDO / District Magistrate', 'Must be renewed every financial year', 'Based on family income of the previous year'] },
                { cat: 'PwBD', icon: '♿', docs: ['Disability certificate issued by a government medical board or authority under RPwD Act, 2016', 'Must certify minimum 40% disability', 'Certificate mentioning the type and percentage of disability', 'Posts must be identified suitable for your disability type'] },
                { cat: 'Ex-Servicemen', icon: '🎖️', docs: ['Discharge certificate (from Army / Navy / Air Force)', 'Service certificate showing exact period of service', 'For UPSC competitive exams: certificate of minimum 5 years of service', 'PPO (Pension Payment Order) if applicable'] },
              ].map(item => (
                <div key={item.cat} className="card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <div className="font-heading font-semibold text-surface-800 text-sm">{item.cat}</div>
                  </div>
                  <ul className="space-y-1">
                    {item.docs.map(doc => (
                      <li key={doc} className="text-xs text-surface-600 flex items-start gap-2">
                        <span className="text-primary-400 mt-0.5 flex-shrink-0">▸</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GSection>

          {/* Section 11 — Mistakes */}
          <GSection id="mistakes" title="Common Mistakes That Cost Candidates Their Chance">
            <div className="space-y-3 mb-6">
              {[
                { num: '1', mistake: 'Using an expired OBC-NCL certificate', fix: 'OBC-NCL certificates are valid only for the current financial year. Get a fresh one every April. Many candidates submit documents from a year or two ago and lose their reservation and relaxation benefit at DV stage.' },
                { num: '2', mistake: 'Using an EWS certificate older than one year', fix: 'Like OBC-NCL, the EWS certificate must be based on the previous year\'s income. A certificate from 2023–24 income cannot be used for 2026 recruitment.' },
                { num: '3', mistake: 'Calculating age using today\'s date instead of the cut-off date', fix: 'Always calculate your age as on the cut-off date mentioned in the notification (e.g., 01-01-2026 or 01-08-2026). Using today\'s date leads to incorrect eligibility checks.' },
                { num: '4', mistake: 'Using state OBC format certificate for central government exams', fix: 'Central government exams require OBC-NCL certificates in the central government format (specified in the notification as an Annexure). State formats are not accepted. Get the correct format from your tehsil office.' },
                { num: '5', mistake: 'Assuming EWS gets the same relaxation as OBC', fix: 'EWS gets 10% reservation but ZERO age relaxation. EWS candidates apply under General category age limits. This is different from OBC, SC, or ST.' },
                { num: '6', mistake: 'Not claiming relaxation during form filling', fix: 'You must select your correct category (OBC/SC/ST/PwBD/ESM) in the application form to claim relaxation. You cannot retroactively claim it after submission in most exams.' },
                { num: '7', mistake: 'Misunderstanding Ex-Servicemen relaxation as flat years', fix: 'ESM relaxation is not a flat "+5 years". It is a formula: deduct your military service from your actual age, and the result must not exceed the post limit by more than 3 years. Read the formula in Section 7 carefully.' },
              ].map(item => (
                <div key={item.num} className="card p-4 flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                  <div>
                    <div className="font-semibold text-surface-800 text-sm mb-1">❌ {item.mistake}</div>
                    <div className="text-xs text-surface-500 leading-relaxed">✅ <strong>Fix:</strong> {item.fix}</div>
                  </div>
                </div>
              ))}
            </div>
          </GSection>

          {/* Section 12 — FAQ */}
          <GSection id="faq" title="Frequently Asked Questions">
            <div className="space-y-0">
              {[
                { q: 'Can I combine relaxations from two categories?', a: 'Yes, in specific cases. PwBD candidates who also belong to OBC or SC/ST get cumulative relaxation (PwBD + OBC = +13 years; PwBD + SC/ST = +15 years). Similarly, UPSC allows SC/ST/OBC candidates who are also Ex-Servicemen or PwBD to claim cumulative relaxation. However, you cannot combine OBC + SC/ST — you claim only one category.' },
                { q: 'My OBC certificate is from the previous financial year. Can I use it?', a: 'Usually no. OBC-NCL certificates must be valid for the current financial year (April–March). A certificate from last year\'s financial year is considered expired for central government recruitment. Always get a fresh certificate before applying. The specific cut-off year is mentioned in the official notification.' },
                { q: 'Does EWS get age relaxation in banking exams (IBPS / SBI)?', a: 'No. EWS candidates follow General category age limits in all central government exams, including IBPS and SBI banking exams. EWS only provides 10% reservation in seats — no age relaxation.' },
                { q: 'I am an OBC candidate but applied as General. Can I change my category later?', a: 'In most exams, once the application is submitted, the category cannot be changed (even in the correction window). This is why it is critical to select the correct category from the beginning. Some exams (like SSC) may allow category corrections during the correction window — check the official notification.' },
                { q: 'Does the PwBD relaxation apply to all government jobs?', a: 'PwBD relaxation applies to posts that are identified as suitable for persons with the specific type of disability. Not all posts are suitable for all disability types. The list of identified posts is mentioned in the exam notification. Additionally, the disability must be certified at 40% or more.' },
                { q: 'For UPSC CSE, how many attempts do OBC and SC/ST candidates get?', a: 'General category and EWS: 6 attempts till age 32. OBC (NCL): 9 attempts till age 35. SC/ST: Unlimited attempts till age 37. PwBD (General/OBC): 9 attempts till age 42/45 respectively. PwBD (SC/ST): Unlimited attempts till age 47.' },
                { q: 'Does age relaxation apply to state PSC exams?', a: 'State PSC exams follow their own age relaxation rules, which may be more generous than central government rules. For example, some state PSC exams offer 5 years relaxation for OBC instead of 3. Always check the specific state PSC notification for accurate limits.' },
                { q: 'Can I use my Aadhaar card date of birth for age proof?', a: 'No. For government exams, the Class 10 (Matriculation) marksheet is the only accepted age proof. Your Aadhaar card, voter ID, PAN card, or driving licence are NOT accepted as age proof. Even if your Aadhaar shows a different DOB, only the 10th marksheet DOB is considered.' },
              ].map((faq, i) => (
                <details key={i} className="border-b border-surface-200 group">
                  <summary className="flex items-start gap-3 py-4 cursor-pointer list-none font-medium text-surface-800 hover:text-primary-500 transition-colors">
                    <span className="w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{faq.q}</span>
                    <svg className="w-4 h-4 text-surface-400 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="pl-9 pb-4 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </GSection>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-center text-white mb-10">
            <div className="text-3xl mb-3">🧮</div>
            <h3 className="text-xl font-heading font-bold mb-2">Check Your Eligibility Now</h3>
            <p className="text-white/80 text-sm mb-5">Enter your age, category, and qualification — see every government exam you qualify for across 100+ exams.</p>
            <Link href="/tools/eligibility-checker" className="inline-flex items-center gap-2 bg-white text-primary-700 font-heading font-semibold px-6 py-3 rounded-full hover:bg-surface-50 transition-colors text-sm">
              Open Eligibility Checker →
            </Link>
          </div>

          {/* Related Guides */}
          <div className="mt-4 pt-8 border-t border-surface-200">
            <h3 className="font-heading font-bold text-lg text-surface-800 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guides.filter((g) => g.slug !== guide.slug).slice(0, 4).map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="card p-4 group">
                  <span className="badge badge-accent mb-2 text-xs">{g.category}</span>
                  <h4 className="font-semibold text-sm text-surface-800 group-hover:text-primary-500 transition-colors">{g.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="card p-5 border-l-4 border-primary-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
              <ol className="space-y-2 list-decimal list-inside">
                {toc.map(item => (
                  <li key={item.id} className="text-sm">
                    <a href={`#${item.id}`} className="text-primary-500 hover:text-primary-600 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-5 bg-primary-50 border-primary-200">
              <h3 className="font-heading font-semibold text-primary-800 mb-3 text-sm">🧮 Eligibility Checker</h3>
              <p className="text-xs text-primary-700 mb-3">Enter your details — see every exam you are eligible for, with category relaxation applied automatically.</p>
              <Link href="/tools/eligibility-checker" className="btn-primary text-xs w-full text-center block">Check Eligibility →</Link>
            </div>
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-3 text-sm">Popular Exam Pages</h3>
              <div className="space-y-2">
                <Link href="/exams/upsc-ias" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">UPSC IAS →</Link>
                <Link href="/exams/ssc-cgl" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">SSC CGL →</Link>
                <Link href="/exams/ibps-po" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">IBPS PO →</Link>
                <Link href="/exams/sbi-po" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">SBI PO →</Link>
                <Link href="/exams/rrb-ntpc" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">RRB NTPC →</Link>
              </div>
            </div>
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-surface-800 mb-2 text-sm">Related Guides</h3>
              <div className="space-y-2">
                <Link href="/guides/how-to-start-government-exam-preparation" className="text-sm text-primary-500 hover:text-primary-600 font-medium block">How to Start Preparation →</Link>
                <Link href="/guides/documents-needed-government-job" className="text-sm text-primary-500 hover:text-primary-600 font-medium block">Documents Required →</Link>
                <Link href="/guides/how-to-fill-government-job-application-form" className="text-sm text-primary-500 hover:text-primary-600 font-medium block">How to Fill Application Form →</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Schema.org FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How much age relaxation do OBC candidates get in government exams?', acceptedAnswer: { '@type': 'Answer', text: 'OBC (Non-Creamy Layer) candidates get 3 years of age relaxation in central government exams. An expired or Creamy Layer OBC certificate does not qualify for relaxation.' } },
          { '@type': 'Question', name: 'Does EWS category get age relaxation in government jobs?', acceptedAnswer: { '@type': 'Answer', text: 'No. EWS candidates get 10% reservation in seats but do not get any age relaxation. They must meet the General category age limit.' } },
          { '@type': 'Question', name: 'How is age relaxation calculated for Ex-Servicemen?', acceptedAnswer: { '@type': 'Answer', text: 'Deduct the period of actual military service from the actual age. If the resultant age does not exceed the upper age limit by more than 3 years, the candidate is eligible.' } },
          { '@type': 'Question', name: 'How many years of age relaxation do SC/ST candidates get?', acceptedAnswer: { '@type': 'Answer', text: 'SC and ST candidates get 5 years of age relaxation in all central government exams.' } },
          { '@type': 'Question', name: 'What is the age relaxation for PwBD candidates in government jobs?', acceptedAnswer: { '@type': 'Answer', text: 'PwBD (General/EWS) candidates get 10 years. PwBD + OBC get 13 years (10+3). PwBD + SC/ST get 15 years (10+5).' } },
        ]
      }) }} />
    </div>
  );
}

// ─── SHARED HELPERS (guide-local) ─────────────────────────────────────────────
function GSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">{title}</h2>
      {children}
    </section>
  );
}

function GCallout({ type, title, children }: { type: 'info' | 'tip' | 'warning'; title: string; children: React.ReactNode }) {
  const styles = { info: 'bg-blue-50 border-blue-500 text-blue-800', tip: 'bg-emerald-50 border-emerald-500 text-emerald-800', warning: 'bg-amber-50 border-amber-500 text-amber-800' };
  return (
    <div className={`p-4 rounded-r-xl border-l-4 my-5 text-sm leading-relaxed ${styles[type]}`}>
      <div className="font-semibold text-xs uppercase tracking-wide mb-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}

function GSubjectCard({ num, name, meta, badge, desc, hotTopics, normalTopics }: { num: string; name: string; meta: string; badge: string; desc: string; hotTopics: string[]; normalTopics: string[] }) {
  return (
    <div className="card mb-5 overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-surface-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{num}</div>
          <div><div className="font-heading font-semibold text-surface-900">{name}</div><div className="text-xs text-surface-400">{meta}</div></div>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full flex-shrink-0">{badge}</span>
      </div>
      <div className="p-5">
        <p className="text-sm text-surface-500 mb-3">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {hotTopics.map(t => <span key={t} className="text-xs bg-accent-50 border border-accent-200 text-accent-700 font-medium px-3 py-1 rounded-full">🔥 {t}</span>)}
          {normalTopics.map(t => <span key={t} className="text-xs bg-white border border-surface-200 text-surface-600 px-3 py-1 rounded-full">{t}</span>)}
        </div>
        <p className="text-xs text-surface-400 mt-3">🔥 Hot topics appear most frequently in previous year papers</p>
      </div>
    </div>
  );
}

// ─── WORKING PROFESSIONALS GUIDE ──────────────────────────────────────────────
function WorkingProfessionalsGuide({ guide }: { guide: { slug: string; title: string; description: string; category: string; readTime: string } }) {
  const toc = [
    { id: 'advantage', label: 'The Working Professional Advantage' },
    { id: 'blueprint', label: 'The 3-Phase Blueprint' },
    { id: 'daily-schedule', label: 'The Real Daily Schedule' },
    { id: 'weekend', label: 'The Weekend Marathon' },
    { id: 'tech-stack', label: 'Tech Stack for 2026' },
    { id: 'mental-health', label: 'Mental Health & Guilt' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Strategy</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <article>
          {/* Hero */}
          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 mb-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-white/20 text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">{guide.category}</span>
              <span className="text-white/70 text-xs">Updated April 2026</span>
              <span className="text-white/50 text-xs">•</span>
              <span className="text-white/70 text-xs">{guide.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 leading-tight">
              The 2026 Survival &amp; Success Guide: Cracking Government Exams While Working Full-Time
            </h1>
            <p className="text-white/85 leading-relaxed text-base mb-6">
              A no-fluff, friend-to-friend playbook for working professionals who want a government job in 2026 — without quitting, burning out, or giving up weekends forever.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { num: '3–4 hrs', label: 'Daily study target' },
                { num: '14 hrs', label: 'Weekend harvest' },
                { num: '12 mo', label: 'Avg. prep cycle' },
                { num: '24 May', label: 'UPSC Prelims 2026' },
              ].map(item => (
                <div key={item.label} className="bg-white/15 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-white">{item.num}</div>
                  <div className="text-xs text-white/80 font-medium mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile TOC */}
          <div className="card p-5 mb-10 border-l-4 border-primary-500 lg:hidden">
            <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📖 Table of Contents</div>
            <ol className="grid grid-cols-2 gap-x-4 gap-y-1.5 list-decimal list-inside">
              {toc.map(item => (
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a></li>
              ))}
            </ol>
          </div>

          <GCallout type="info" title="📌 Quick Context: Key 2026 Dates">
            UPSC Prelims 2026 is on <strong>May 24, 2026</strong>. SSC CGL 2026 notification is expected in <strong>early January 2026</strong>. IBPS PO and RRB NTPC cycles typically open in <strong>June–August</strong>. Plan your Phase 1 start date around these anchors.
          </GCallout>

          {/* SECTION 1 */}
          <GSection id="advantage" title="The Working Professional Advantage">
            <p className="text-surface-600 leading-relaxed mb-4">
              Let me be straight with you — yes, your employed classmates who study 8 hours a day have a time advantage. But that doesn&apos;t mean you&apos;re behind. In fact, working full-time gives you three things that full-time aspirants struggle to fake.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: '🧠', title: 'Real-World Context', desc: 'Office politics, governance, budgets, deadlines — you\'ve lived them. UPSC\'s Ethics and GS2 paper rewards this maturity. Your examples in answers will feel genuine, not bookish.' },
                { icon: '⏰', title: 'Discipline Under Pressure', desc: 'You already wake up on time, manage priorities, and deliver under deadlines. That\'s half the mental game of exam prep already won. A first-year aspirant has to build that muscle from scratch.' },
                { icon: '🎯', title: 'Interview Edge', desc: 'Interviewers frequently ask about your current job. A working professional who can say "I handled X, which connects to Y policy" stands out immediately over someone who hasn\'t worked a day.' },
              ].map(c => (
                <div key={c.title} className="card p-5">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <div className="font-heading font-bold text-surface-800 mb-2">{c.title}</div>
                  <p className="text-sm text-surface-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-surface-600 leading-relaxed">
              Also — and I say this from experience — working makes you value study time intensely. You can&apos;t afford to waste it. That focused urgency, when channelled right, produces better retention than 6 distracted hours on a couch.
            </p>
          </GSection>

          {/* SECTION 2 */}
          <GSection id="blueprint" title="The 3-Phase Blueprint (12 Months)">
            <p className="text-surface-600 leading-relaxed mb-6">
              Don&apos;t try to do everything at once. Here&apos;s how to break 12 months into three clean phases so you always know exactly what you&apos;re working on.
            </p>
            {[
              {
                phase: 'Phase 1',
                months: 'Months 1–4',
                title: 'Building the Static Base',
                color: 'bg-blue-50 border-blue-200',
                headColor: 'text-blue-700',
                badgeColor: 'bg-blue-100 text-blue-700',
                goal: 'Build an unshakeable foundation in Polity, History, Geography, and Quantitative Aptitude.',
                tasks: [
                  'Polity: NCERT Class 11–12 + Laxmikant (1 reading, don\'t memorize — just build a mental map)',
                  'History: NCERT Class 6–12 Modern India + Spectrum for modern history',
                  'Geography: NCERT Class 11–12. Focus on physical geography first.',
                  'Quant: Whichever book fits your exam — RS Aggarwal for SSC/Banking; skip for UPSC',
                  'No current affairs yet — you\'ll add it in Phase 2',
                ],
                tip: '2026 shift: Exams now test Analytical Application — not just "who wrote the Constitution" but "why Article 356 was amended and what it means for federalism today." Read with a "so what?" mindset from Day 1.',
              },
              {
                phase: 'Phase 2',
                months: 'Months 5–8',
                title: 'Integration: Current Affairs + Weekly Mocks',
                color: 'bg-amber-50 border-amber-200',
                headColor: 'text-amber-700',
                badgeColor: 'bg-amber-100 text-amber-700',
                goal: 'Weave current affairs into your static knowledge and start mock tests.',
                tasks: [
                  'Read The Hindu or Indian Express daily — 30 min maximum, focus only on Governance, Economy, Environment',
                  'Link every news piece to a static topic: "RBI rate cut" → link to Monetary Policy chapter',
                  'One full-length mock every weekend + 1 hour of analysis',
                  'Start answer-writing practice (UPSC aspirants): 150-word answers twice a week',
                  'Digital-first in 2026: Most mock platforms now have remote proctoring. Get used to the format early.',
                ],
                tip: 'Don\'t take mocks just to "see where you stand." Take them to find your weakest topic that week and attack it the next Monday. That loop is what makes mocks worth it.',
              },
              {
                phase: 'Phase 3',
                months: 'Final 4 Months',
                title: 'Revision, Speed, and Answer Writing',
                color: 'bg-emerald-50 border-emerald-200',
                headColor: 'text-emerald-700',
                badgeColor: 'bg-emerald-100 text-emerald-700',
                goal: 'Stop adding new material. Revise hard, go fast, sharpen writing.',
                tasks: [
                  'Only revise what you\'ve already studied — no new books',
                  '2 full-length mocks per week + deep analysis',
                  'Previous year papers (last 5 years): do them timed, in exam conditions',
                  'For UPSC: 3 answer writing sessions per week minimum',
                  'Current affairs: switch from full newspaper to monthly compilation PDFs',
                ],
                tip: 'Cutting off new material is hard psychologically — it feels like you\'re leaving gaps. You\'re not. Revision converts weak memory to strong memory. That\'s the real work.',
              },
            ].map(p => (
              <div key={p.phase} className={`card border ${p.color} mb-6 overflow-hidden`}>
                <div className="p-5 border-b border-current/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${p.badgeColor}`}>{p.phase}</span>
                    <span className="text-xs text-surface-400">{p.months}</span>
                  </div>
                  <h3 className={`font-heading font-bold text-lg ${p.headColor}`}>{p.title}</h3>
                  <p className="text-sm text-surface-600 mt-1">{p.goal}</p>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 mb-4">
                    {p.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-surface-700">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/60 rounded-lg p-3 text-xs text-surface-500 italic border border-current/10">
                    💡 {p.tip}
                  </div>
                </div>
              </div>
            ))}
          </GSection>

          {/* SECTION 3 */}
          <GSection id="daily-schedule" title="The &lsquo;Real&rsquo; Daily Schedule">
            <p className="text-surface-600 leading-relaxed mb-5">
              I know you&apos;ve seen those idealistic timetables with colour-coded blocks. This isn&apos;t that. This is built around the reality that you might have a late meeting on a Tuesday, or your commute got cancelled because of rain. Build in slack.
            </p>
            <div className="card overflow-hidden mb-6">
              <div className="bg-surface-800 text-white p-4">
                <div className="font-heading font-bold">Weekday Schedule — Working Professional</div>
                <div className="text-xs text-surface-300 mt-0.5">Target: 3–4 focused hours/day across 3 windows</div>
              </div>
              {[
                { time: '6:00–8:30 AM', label: 'Deep Work Block', task: 'Newspaper (30 min) + Static subject study (1.5 hrs) + Quick revision notes (30 min)', tag: 'Static', color: 'bg-blue-100 text-blue-700', icon: '🌅' },
                { time: 'Commute', label: 'Micro-Learning', task: 'Audio current affairs (InShorts audio, Daily CA podcast) or flashcard app — no laptop needed', tag: 'Current Affairs', color: 'bg-purple-100 text-purple-700', icon: '🚇' },
                { time: 'Lunch Break', label: 'Quick Hit', task: '15-question quiz on your phone (Testbook, GKToday) — builds speed and daily habit', tag: 'Quiz', color: 'bg-amber-100 text-amber-700', icon: '🍱' },
                { time: '7:00–9:30 PM', label: 'Practice Block', task: 'Maths / Reasoning practice questions (1 hr) + weak area from morning\'s newspaper (30 min) + next day\'s topic preview (15 min)', tag: 'Practice', color: 'bg-emerald-100 text-emerald-700', icon: '🌙' },
              ].map((slot, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 border-b border-surface-100 last:border-0 ${i % 2 === 1 ? 'bg-surface-50/50' : ''}`}>
                  <div className="text-xl flex-shrink-0 mt-0.5">{slot.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-surface-400 font-medium">{slot.time}</span>
                      <span className="font-heading font-semibold text-surface-800 text-sm">{slot.label}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${slot.color}`}>{slot.tag}</span>
                    </div>
                    <p className="text-sm text-surface-600">{slot.task}</p>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="warning" title="⚠️ Real Talk: What If You Have a Late Meeting?">
              If the office keeps you until 9 PM, skip the evening block. Don&apos;t try to study at 10:30 PM — your retention is near zero after a tiring day. Instead, protect your <strong>6 AM block like it&apos;s a doctor&apos;s appointment</strong>. That morning window is non-negotiable. The evening slot is flexible.
            </GCallout>
            <p className="text-surface-600 leading-relaxed mt-4">
              For the commute window — if you drive, don&apos;t study. Use audio only. If you take the metro or bus, this is gold: 30–45 minutes of flashcards or a short video lecture. Over 6 months, that&apos;s roughly 100 extra hours of passive learning. That&apos;s not nothing.
            </p>
          </GSection>

          {/* SECTION 4 */}
          <GSection id="weekend" title="The Weekend Marathon (Without the Burnout)">
            <p className="text-surface-600 leading-relaxed mb-5">
              Weekends are your power days. The goal is 14 hours total across Saturday and Sunday — but the way you split it matters more than the total.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              {[
                {
                  day: 'Saturday',
                  emoji: '📚',
                  blocks: [
                    { time: '6:00–9:00 AM', task: 'Deep subject study — one full topic (3 hrs)' },
                    { time: '10:00 AM–1:00 PM', task: 'Mock test — full length, timed, phone away (3 hrs)' },
                    { time: '2:00–4:00 PM', task: 'Mock analysis — go over every wrong answer (2 hrs)' },
                    { time: '5:00–7:00 PM', task: 'Weak area from mock — targeted practice (2 hrs)' },
                    { time: 'Evening', task: 'Rest. No screens ideally. Walk, eat well, sleep by 10 PM.' },
                  ],
                  total: '10 hrs',
                },
                {
                  day: 'Sunday',
                  emoji: '🔁',
                  blocks: [
                    { time: '6:00–8:00 AM', task: 'Full week revision — notes only, no re-reading books (2 hrs)' },
                    { time: '9:00–11:00 AM', task: 'Current affairs consolidation — weekly summary (2 hrs)' },
                    { time: '11:00 AM–1:00 PM', task: 'Answer writing / previous year papers (2 hrs)' },
                    { time: 'Afternoon', task: 'Buffer / catch-up time. Family time. Breathe.' },
                    { time: 'Evening', task: 'Plan next week\'s schedule. Set Monday targets.' },
                  ],
                  total: '6 hrs',
                },
              ].map(d => (
                <div key={d.day} className="card overflow-hidden">
                  <div className="bg-primary-500 text-white p-4 flex items-center justify-between">
                    <div className="font-heading font-bold">{d.emoji} {d.day}</div>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-semibold">{d.total} study</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {d.blocks.map((b, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-xs text-surface-400 font-mono w-28 flex-shrink-0 pt-0.5">{b.time}</span>
                        <span className="text-sm text-surface-700">{b.task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="tip" title="✅ The One Rule for Weekends">
              Never study past 8 PM on Sunday. Your brain needs to reset for Monday. A tired Monday means a wasted weekday morning — and that&apos;s your most valuable study window.
            </GCallout>
          </GSection>

          {/* SECTION 5 */}
          <GSection id="tech-stack" title="Tech Stack for 2026: Study Smarter, Not Heavier">
            <p className="text-surface-600 leading-relaxed mb-5">
              You don&apos;t need to carry a bag full of books on the train. In 2026, your phone is your study room. Here&apos;s what actually works.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-surface-800 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Tool / App</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">Best For</th>
                    <th className="text-left p-3 font-semibold text-xs uppercase tracking-wide">When to Use</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Anki (flashcard app)', 'Polity articles, History dates, Quant formulas', 'Commute, lunch break — 10 min sessions'],
                    ['Testbook / Oliveboard', 'Full-length mocks + topic quizzes', 'Weekends for full mocks; weekdays for topic drills'],
                    ['InShorts / Briefing app', 'Quick current affairs in 60-word bites', 'Morning while getting ready (audio mode)'],
                    ['YouTube (StudyIQ, Exampur)', 'Concept videos for tough topics', 'Evening block when reading feels slow'],
                    ['Claude / ChatGPT', 'Explaining concepts in simple language, self-quiz', 'When you\'re stuck on a concept at 10 PM'],
                    ['Google Calendar', 'Blocking study slots, exam countdown', 'Every Sunday — plan the next week'],
                    ['Telegram channels (exam-specific)', 'Daily PDFs, PYQs, notifications', 'Morning — 5 min scan only, don\'t scroll'],
                  ].map(([tool, best, when], i) => (
                    <tr key={i} className={`border-t border-surface-100 ${i % 2 === 1 ? 'bg-surface-50' : ''}`}>
                      <td className="p-3 font-medium text-surface-800">{tool}</td>
                      <td className="p-3 text-surface-600 text-xs">{best}</td>
                      <td className="p-3 text-surface-500 text-xs">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <GCallout type="info" title="📱 2026 Trend: AI-Powered Micro-Learning">
              AI tools are genuinely useful for gap-time studying now. Ask Claude or ChatGPT to quiz you on a topic, explain a concept in 3 sentences, or generate 10 MCQs on Directive Principles. It&apos;s like having a patient tutor in your pocket. The key is using it actively — not passively reading AI outputs like a textbook.
            </GCallout>
            <p className="text-surface-600 leading-relaxed mt-4">
              One more thing on 2026 exams: remote proctoring is becoming more common for online mocks and, in some cases, preliminary rounds. Get comfortable studying with a webcam. Practice at home with your phone camera on — it removes the anxiety of feeling watched on exam day.
            </p>
          </GSection>

          {/* SECTION 6 */}
          <GSection id="mental-health" title="Mental Health: Handling the Working Professional&rsquo;s Guilt">
            <p className="text-surface-600 leading-relaxed mb-4">
              Here&apos;s something no one talks about. When you work a full day, come home tired, and then sit down to study, there&apos;s this crushing guilt that says: <em>"Everyone else is studying more. I&apos;m going to fail."</em>
            </p>
            <p className="text-surface-600 leading-relaxed mb-4">
              That guilt is a liar. It destroys more preparation cycles than Netflix ever has. Here&apos;s how to keep it in check.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: '📊',
                  title: 'Track Output, Not Hours',
                  desc: 'Don\'t measure how long you sat at the desk. Measure what you finished. "I completed 40 Polity MCQs and revised the Fundamental Rights chapter" is a successful session. "I studied for 2 hours" might be zero output. Output tracking kills guilt because it\'s honest.',
                },
                {
                  icon: '🗓️',
                  title: 'Build in Official Guilt-Free Days',
                  desc: 'One day off per month is not weakness — it\'s maintenance. Tell yourself: "I\'m taking Sunday the 20th off." Having it planned means you won\'t feel like you\'re slipping when it arrives. Unplanned breaks become spirals. Planned breaks become recharges.',
                },
                {
                  icon: '🔕',
                  title: 'The "Done for Today" Signal',
                  desc: 'When you close your books, physically put them away. Shut the laptop. Put your phone in another room. The brain needs a signal that study mode is off. Without it, you sit with your family but you\'re mentally still at your desk — which means you neither rest nor study well.',
                },
                {
                  icon: '🧘',
                  title: 'Burnout Looks Like Procrastination',
                  desc: 'If you keep delaying your morning study session, you\'re probably not lazy — you\'re probably burned out. The fix isn\'t more discipline. It\'s two or three lighter days: 45 minutes instead of 2.5 hours. Coming back at 70% is infinitely better than not coming back at all.',
                },
              ].map(item => (
                <div key={item.title} className="card p-5 flex gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-heading font-semibold text-surface-800 mb-1">{item.title}</div>
                    <p className="text-sm text-surface-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <GCallout type="tip" title="💬 Final Thought">
              I&apos;ve seen people with 8-hour-a-day prep schedules fail, and I&apos;ve seen working professionals clear UPSC with 3.5 hours a day. The difference was never time. It was <strong>consistency and quality of attention</strong>. You&apos;re not at a disadvantage. You&apos;re just playing a different — and winnable — game.
            </GCallout>
          </GSection>

          {/* FAQ */}
          <GSection id="faq" title="FAQs">
            <div className="divide-y divide-surface-200">
              {[
                { q: 'Can I really prepare for UPSC while working full-time?', a: 'Yes — but be honest about timelines. Working professionals typically need 2–3 years for UPSC, versus 1.5 years for a full-time aspirant. For SSC CGL, IBPS PO, or RRB NTPC, a working professional can clear in 6–12 months of focused prep.' },
                { q: 'What if I can only study 1.5 hours on weekdays?', a: 'That\'s fine for Banking and SSC exams. Use weekdays for 1.5 focused hours + commute micro-learning, and load the weekend with 6–8 hours. The total weekly hours still add up to a serious preparation if you protect the quality.' },
                { q: 'Should I take a study leave before the exam?', a: 'For UPSC Mains — strongly consider 2–3 weeks of earned leave. For Prelims and objective exams (SSC, Banking), it\'s usually not necessary if your Phase 3 revision is on track. Don\'t take leave impulsively; plan it 2 months out.' },
                { q: 'How do I handle exam day anxiety after a tiring work week?', a: 'The week before any exam, deliberately reduce office workload if possible. Sleep 7–8 hours. Don\'t study the night before — revision only. Your brain consolidates memory during sleep; a rested brain on exam day outperforms a cramming brain every time.' },
                { q: 'Is morning studying better than night studying?', a: 'For most people, yes — especially working professionals. Willpower and focus are highest in the morning. By evening, decision fatigue from work has set in. But if you\'re genuinely a night person and your evening energy is high, the morning-evening split is flexible. What matters is protecting that one deep-work slot, wherever it falls.' },
              ].map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-start gap-3 py-4 cursor-pointer list-none font-medium text-surface-800 hover:text-primary-500 transition-colors">
                    <span className="w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    <span className="flex-1">{faq.q}</span>
                    <svg className="w-4 h-4 text-surface-400 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="pl-9 pb-4 text-sm text-surface-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </GSection>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="font-heading font-bold text-xl mb-2">Start Your Prep Today — Everything on TaiyarHo Is Free</h3>
            <p className="text-primary-100 text-sm mb-5 max-w-xl mx-auto">Check which exams you qualify for, read exam-specific guides, and use the eligibility checker — no login, no fees.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/exams" className="bg-white text-primary-600 font-heading font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all text-sm">Browse All Exams →</Link>
              <Link href="/tools/eligibility-checker" className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">Check Your Eligibility</Link>
            </div>
          </div>

          <p className="text-xs text-surface-400 bg-surface-50 rounded-lg p-4">
            This guide is for informational purposes only. Exam patterns, eligibility, and syllabi may change — always verify from official exam websites. Last updated: April 2026.
          </p>
        </article>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-4">📖 Contents</div>
              <ol className="space-y-2 list-decimal list-inside">
                {toc.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-primary-500 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-5 border-l-4 border-accent-500">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">🗓️ Key 2026 Dates</div>
              <div className="space-y-2">
                {[
                  { date: 'Jan 2026', event: 'SSC CGL Notification (expected)' },
                  { date: '24 May 2026', event: 'UPSC Prelims 2026' },
                  { date: 'Jun–Aug 2026', event: 'IBPS PO & RRB NTPC cycles' },
                ].map(d => (
                  <div key={d.date} className="flex gap-2">
                    <span className="text-xs font-semibold text-accent-600 w-20 flex-shrink-0">{d.date}</span>
                    <span className="text-xs text-surface-600">{d.event}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📚 Related Guides</div>
              <div className="space-y-3">
                {guides.filter(g => g.slug !== guide.slug).slice(0, 4).map(g => (
                  <Link key={g.slug} href={`/guides/${g.slug}`} className="block text-sm text-primary-500 hover:underline leading-snug">
                    {g.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DOCUMENTS NEEDED FOR GOVERNMENT JOB — Full Rich Guide
// ─────────────────────────────────────────────────────────────────────────────
function DocumentsGuide({ guide }: { guide: { slug: string; title: string; description: string; category: string; readTime: string } }) {
  const tocItems = [
    { id: 'summary', label: 'Quick Summary' },
    { id: 'master-list', label: 'Master Document List' },
    { id: 'identity', label: 'Identity & Age Proof' },
    { id: 'education', label: 'Educational Credentials' },
    { id: 'reservation', label: 'Reservation Certificates' },
    { id: 'special', label: 'Special Documents' },
    { id: 'application-vs-dv', label: 'Application vs DV Stage' },
    { id: 'pro-tips', label: 'Pro Tips' },
    { id: 'mistakes', label: 'Common Mistakes' },
    { id: 'salary', label: 'Jobs Paying ₹50,000+/month' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <div className="container-main py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-surface-500 mb-6">
        <Link href="/" className="hover:text-primary-500">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-primary-500">Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-surface-800">Documents</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <article>
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl p-8 mb-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-white/20 text-white text-xs font-heading font-semibold px-3 py-1 rounded-full">{guide.category}</span>
              <span className="text-white/70 text-xs">Updated May 2026</span>
              <span className="text-white/50 text-xs">•</span>
              <span className="text-white/70 text-xs">15 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 leading-tight">
              Documents Required for Government Job (2026) – Complete Checklist
            </h1>
            <p className="text-white/85 leading-relaxed text-base">
              From the online application stage to the final Document Verification (DV) round — this guide covers every document you need, what format it must be in, and the mistakes that cause even toppers to get rejected.
            </p>
          </div>

          {/* Quick Summary Box */}
          <div id="summary" className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-heading font-bold text-amber-800 mb-3">⚡ Quick Summary — What You Need to Know</h2>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>✅ <strong>Stage 1 (Online Application):</strong> Scanned copies of photo, signature, and basic ID — kept under specific file size limits.</li>
              <li>✅ <strong>Stage 2 (Document Verification / DV):</strong> Originals + 2 self-attested photocopies of every document listed in the appointment letter.</li>
              <li>✅ <strong>OBC-NCL certificates</strong> must be issued within the current or immediately previous financial year — this is the #1 reason for DV rejection.</li>
              <li>✅ <strong>Name mismatches</strong> are fixable with an affidavit + gazette notification — but you need to arrange this before DV day.</li>
              <li>✅ <strong>If you are a serving government employee,</strong> you will need an NOC from your current employer — don't forget it.</li>
            </ul>
          </div>

          {/* Master Document List */}
          <DocSection id="master-list" title="📋 The Master Document Checklist">
            <p className="text-surface-600 leading-relaxed mb-4">
              Below is the full list of documents you will need across all major central government exams (SSC, UPSC, IBPS, SBI, Railway). Not every document applies to every candidate — pick what is relevant to your situation.
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200 mb-4">
              <table className="w-full text-sm">
                <thead className="bg-primary-50 text-primary-800">
                  <tr>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Category</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Documents</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Who Needs It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    { cat: 'Identity & Age', docs: 'Aadhaar, PAN, Voter ID, Passport, 10th Marksheet', who: 'All candidates' },
                    { cat: 'Education', docs: '10th, 12th, Graduation (all semester marksheets + degree/provisional)', who: 'All candidates' },
                    { cat: 'Reservation', docs: 'OBC-NCL / SC / ST / EWS certificate (Central Govt format)', who: 'Reserved category candidates' },
                    { cat: 'Disability', docs: 'PwBD certificate from CMO/Government hospital board', who: 'PwBD candidates' },
                    { cat: 'Ex-Servicemen', docs: 'Discharge certificate, service certificate, pension payment order', who: 'Ex-servicemen' },
                    { cat: 'Employment', docs: 'NOC from current employer, service certificate', who: 'Serving Govt employees' },
                    { cat: 'Domicile', docs: 'State domicile certificate (for State-specific posts)', who: 'Candidates applying for State quota posts' },
                    { cat: 'Experience', docs: 'Experience letters on letterhead, appointment order', who: 'Posts requiring work experience' },
                    { cat: 'Photo', docs: 'Passport-size photographs (6–10 copies, recent)', who: 'All candidates' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-700 whitespace-nowrap">{row.cat}</td>
                      <td className="px-4 py-3 text-surface-600">{row.docs}</td>
                      <td className="px-4 py-3 text-surface-500 text-xs">{row.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DocSection>

          {/* Identity & Age Proof */}
          <DocSection id="identity" title="🪪 Identity & Age Proof Documents">
            <p className="text-surface-600 leading-relaxed mb-4">
              These are the documents you use to prove who you are and how old you are. The most important one is your <strong>Class 10 (Matriculation) Marksheet</strong> — every recruiting body treats it as the primary document for both identity and date of birth.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: '10th / Matriculation Marksheet',
                  badge: 'Must-Have',
                  badgeColor: 'bg-red-100 text-red-700',
                  detail: 'This is the base document for your name and date of birth in every government exam. Your name must match this marksheet exactly in your application form and all other certificates. Make sure you have both the original and at least 3 self-attested photocopies.',
                },
                {
                  name: 'Aadhaar Card',
                  badge: 'Must-Have',
                  badgeColor: 'bg-red-100 text-red-700',
                  detail: 'Mandatory for most central exams (SSC, IBPS, RRB). Carry both the physical card and download an e-Aadhaar from the UIDAI website as a backup. Your Aadhaar name and DOB should ideally match your 10th marksheet.',
                },
                {
                  name: 'PAN Card',
                  badge: 'Important',
                  badgeColor: 'bg-amber-100 text-amber-700',
                  detail: 'Required during document verification for most Central Government posts, especially those that fall under income tax deduction categories (banking, revenue department). Some recruitment bodies also ask for it during salary account opening.',
                },
                {
                  name: 'Voter ID Card',
                  badge: 'Useful Backup',
                  badgeColor: 'bg-blue-100 text-blue-700',
                  detail: 'Accepted as valid photo ID at exam centres and during DV. Also serves as address proof. Download a digital voter card from voters.eci.gov.in if you have lost the original.',
                },
                {
                  name: 'Passport (if available)',
                  badge: 'Optional',
                  badgeColor: 'bg-green-100 text-green-700',
                  detail: 'Useful as an additional strong ID document. For posts involving international travel or security clearance (like IFS, foreign services), having a passport is an advantage during verification.',
                },
              ].map((doc, i) => (
                <div key={i} className="card p-4 flex gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading font-semibold text-surface-800 text-sm">{doc.name}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${doc.badgeColor}`}>{doc.badge}</span>
                    </div>
                    <p className="text-sm text-surface-600 leading-relaxed">{doc.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </DocSection>

          {/* Educational Credentials */}
          <DocSection id="education" title="🎓 Educational Credentials">
            <p className="text-surface-600 leading-relaxed mb-5">
              You need to carry all educational certificates from 10th onwards. The typical mistake aspirants make is bringing only the final degree certificate — DV officers often ask for individual semester marksheets too.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: 'Class 10 Certificate & Marksheet',
                  tip: 'Carry both the pass certificate and the marksheet separately. Some boards issue them as one document, some as two. DV officers check the full name, date of birth, board name, roll number, and year of passing.',
                },
                {
                  name: 'Class 12 Certificate & Marksheet',
                  tip: 'Required for most Central Government exams. The stream (Science/Commerce/Arts) sometimes matters for specific posts. Carry originals and two photocopies.',
                },
                {
                  name: 'Graduation Degree or Provisional Certificate',
                  tip: 'If you have not yet received your original degree, a Provisional Certificate issued by your university is accepted in most exams. Make sure it is stamped and signed by a competent university authority, not just a department head.',
                },
                {
                  name: 'All Semester / Year Marksheets (Graduation)',
                  tip: 'This is the document most candidates forget. DV officers ask for semester-wise or year-wise marksheets to verify attendance requirements, individual subject scores, and to calculate overall percentage. Carry all 6 (or 8) semesters.',
                },
                {
                  name: 'Consolidated Marksheet (if issued)',
                  tip: 'Some universities issue a consolidated marksheet showing all years/semesters together. Carry it as well — it speeds up the verification process.',
                },
                {
                  name: 'Post-Graduation Marksheets & Degree (if applicable)',
                  tip: 'Required only if the post demands a post-graduate qualification or if you have mentioned it in your application. Carry originals + 2 attested copies.',
                },
              ].map((doc, i) => (
                <div key={i} className="bg-surface-50 border-l-4 border-primary-400 rounded-r-xl p-4">
                  <p className="font-heading font-semibold text-surface-800 text-sm mb-1">{doc.name}</p>
                  <p className="text-sm text-surface-600 leading-relaxed">{doc.tip}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-5">
              <p className="text-sm text-blue-800 font-semibold mb-1">📌 If you studied from a foreign university:</p>
              <p className="text-sm text-blue-700">Your degree must be recognised by the Association of Indian Universities (AIU). Get an Equivalence Certificate from AIU (aiu.ac.in) before appearing for DV. Without this, your foreign degree is not valid for Central Government posts.</p>
            </div>
          </DocSection>

          {/* Reservation / Category Documents */}
          <DocSection id="reservation" title="📜 Reservation / Category Documents (OBC / SC / ST / EWS)">
            <p className="text-surface-600 leading-relaxed mb-2">
              Reservation documents are the most scrutinised at DV. Even a single-day expiry or a wrong format can cause rejection. Read this section carefully if you belong to OBC, SC, ST, or EWS.
            </p>

            {/* OBC */}
            <div className="mt-5">
              <h3 className="text-base font-heading font-bold text-surface-800 mb-3">OBC-NCL Certificate</h3>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-3">
                <p className="text-sm font-semibold text-orange-800 mb-1">⚠️ The #1 Document Verification Rejection Reason</p>
                <p className="text-sm text-orange-700">An expired OBC-NCL certificate gets more candidates rejected at DV than any other document issue. Don't let this happen to you.</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Validity Period', content: 'OBC-NCL certificates are valid only for the financial year in which they are issued (April to March). If your certificate was issued in FY 2024–25 and your DV is in May 2025, it is already expired. Most recruiting bodies ask for a certificate issued in the current financial year OR the immediately preceding financial year, depending on their notification.' },
                  { label: 'Central vs. State Format', content: 'This is the most common format-related error. For Central Government exams (SSC, IBPS, UPSC, Railways), your OBC certificate must be in the Central Government format — it must state that you belong to OBC as per the Central List and are not in the Creamy Layer. A State Government format OBC certificate — which most State Governments issue by default — is NOT accepted for Central Government posts. Ask your Tehsildar or SDM office for a certificate "in the prescribed format for Central Government services."' },
                  { label: 'Who Issues It', content: 'The certificate must be issued by a competent authority — usually the Sub-Divisional Magistrate (SDM), District Magistrate (DM), Tehsildar, or Revenue Officer authorised by the State Government. Certificates from unofficial sources or panchayat offices are not accepted.' },
                  { label: 'Non-Creamy Layer Clause', content: 'Your certificate must clearly state that you do not belong to the Creamy Layer. The Creamy Layer threshold is a family income of ₹8 lakh per year (as of 2024 — subject to revision). If your family income exceeds this limit, you are no longer eligible for OBC reservation in Central Government exams.' },
                ].map((item, i) => (
                  <div key={i} className="card p-4">
                    <p className="font-semibold text-surface-700 text-sm mb-1">{item.label}</p>
                    <p className="text-sm text-surface-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SC/ST */}
            <div className="mt-6">
              <h3 className="text-base font-heading font-bold text-surface-800 mb-3">SC / ST Caste Certificate</h3>
              <div className="space-y-3">
                {[
                  { label: 'Validity', content: 'SC and ST certificates do not expire — they are issued once and are valid for life. However, the certificate must be in the format prescribed by the Central Government for Central Govt posts.' },
                  { label: 'Who Issues It', content: 'District Magistrate (DM), Sub-Divisional Magistrate (SDM), Tehsildar, or any other officer authorised by the State Government for issuing SC/ST certificates.' },
                  { label: 'Central Format Requirement', content: 'Just like OBC, the SC/ST certificate must be in the Central Government format for Central Govt jobs. State formats are generally accepted for SC/ST (more lenient than OBC), but some SSC and Railway notifications explicitly ask for the Central format. Check your notification.' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <p className="font-semibold text-surface-700 text-sm mb-1">{item.label}</p>
                    <p className="text-sm text-surface-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EWS */}
            <div className="mt-6">
              <h3 className="text-base font-heading font-bold text-surface-800 mb-3">EWS (Economically Weaker Section) Certificate</h3>
              <div className="space-y-3">
                {[
                  { label: 'Who Needs It', content: 'General (unreserved) category candidates whose family annual income is below ₹8 lakh and who do not own agricultural land above 5 acres, a residential flat above 1000 sq. ft., a residential plot above 100 sq. yards in notified municipalities, or a residential plot above 200 sq. yards in non-notified areas.' },
                  { label: 'Validity Period', content: 'EWS certificates must be renewed every year. The certificate issued for a particular financial year is valid for that year only. For DV purposes, the certificate must relate to the financial year in which the notification or application was made — check your exam notification for the exact requirement.' },
                  { label: 'Age Relaxation Note', content: 'EWS candidates get 10% reservation in Central Government jobs but do NOT get any age relaxation. They must meet the General category age limit. This is different from OBC (which gets +3 years) and SC/ST (which gets +5 years).' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                    <p className="font-semibold text-surface-700 text-sm mb-1">{item.label}</p>
                    <p className="text-sm text-surface-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </DocSection>

          {/* Special Documents */}
          <DocSection id="special" title="📂 Special Documents">
            <p className="text-surface-600 leading-relaxed mb-5">
              These documents apply to specific situations. If any of these apply to you, start arranging them early — some take weeks to process.
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: '🏛️',
                  name: 'NOC (No Objection Certificate) for Serving Employees',
                  detail: 'If you are already working in a Central or State Government job and applying for a new government post, you need an NOC from your current employer. The NOC must be on official letterhead, signed by your appointing authority (not just your manager), and state that your department has no objection to you applying for and joining the new post. Some departments issue this freely; others may require you to apply in writing and wait several weeks. Start the process as soon as you clear the written exam. Without an NOC, you cannot be considered for appointment even if you top the merit list.',
                },
                {
                  icon: '♿',
                  name: 'PwBD (Persons with Benchmark Disability) Certificate',
                  detail: 'The disability must be 40% or more as certified by the competent authority — a government-run medical board (CMO or Medical Superintendent of a District/Civil Hospital). The certificate must clearly state the type of disability, percentage of disability, and permanent or temporary status. The format is prescribed in the Rights of Persons with Disabilities Act 2016 (RPWD Act). This certificate entitles you to reservation, age relaxation (General +10 years, OBC +13 years, SC/ST +15 years), and post-specific concessions.',
                },
                {
                  icon: '🎖️',
                  name: 'Ex-Servicemen Documents',
                  detail: 'You need: a Discharge Certificate (issued when you left military service), a Service Certificate (details of your rank, dates of service, and type of discharge), and a Pension Payment Order (PPO) if applicable. For widows of Ex-Servicemen claiming their dependent quota, a marriage certificate and the Ex-Serviceman\'s death certificate are also required. The age relaxation formula for Ex-Servicemen is: (Actual Age) minus (Period of Military Service) must not exceed the upper age limit by more than 3 years.',
                },
                {
                  icon: '💼',
                  name: 'Experience Letters (for Posts Requiring Work Experience)',
                  detail: 'For posts that demand prior work experience (e.g., certain SSC posts, IBPS Specialist Officer, or State PSC Group B posts), you need experience letters from each employer on their official letterhead. The letter must state your designation, nature of work, period of employment (start and end dates), and whether the employment was full-time or part-time. Self-certification of experience is not accepted.',
                },
                {
                  icon: '📍',
                  name: 'Domicile Certificate',
                  detail: 'Required for State Government jobs and for Central Government posts that have a State-wise quota or "Local candidate" preference. Issued by the Tehsildar or SDM of your district. Some states require you to have lived there for a minimum number of years (usually 10–15 years). For Central Govt exams, domicile is generally not required unless specified in the notification.',
                },
              ].map((doc, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{doc.icon}</span>
                    <div>
                      <p className="font-heading font-bold text-surface-800 text-sm mb-2">{doc.name}</p>
                      <p className="text-sm text-surface-600 leading-relaxed">{doc.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DocSection>

          {/* Application vs DV Stage */}
          <DocSection id="application-vs-dv" title="⏱️ What You Need: Online Application vs. Document Verification">
            <p className="text-surface-600 leading-relaxed mb-5">
              The documents required at the online application stage and the DV stage are very different. Many aspirants confuse the two and either over-prepare at application time or under-prepare at DV.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-heading font-bold text-blue-800 mb-3 text-base">🖥️ Online Application Stage</h3>
                <p className="text-xs text-blue-700 mb-3">You only upload scanned digital files — no originals needed.</p>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>📷 <strong>Recent passport-size photo</strong> (JPG, 20–50 KB, white background)</li>
                  <li>✍️ <strong>Signature</strong> (JPG, 10–20 KB, black ink on white paper)</li>
                  <li>👆 <strong>Left thumb impression</strong> (IBPS/SBI only — JPG, 10–20 KB)</li>
                  <li>📝 <strong>Handwritten declaration</strong> (IBPS — JPG, your own handwriting)</li>
                  <li>🔢 Aadhaar number, mobile, email entered manually</li>
                  <li>📊 Educational details entered manually (no certificate upload)</li>
                  <li>📂 Category certificate details entered — no upload usually required</li>
                </ul>
                <p className="text-xs text-blue-600 mt-3">⚠️ UPSC is an exception — their new portal requires document uploads during registration itself.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-heading font-bold text-green-800 mb-3 text-base">📁 Document Verification (DV) Stage</h3>
                <p className="text-xs text-green-700 mb-3">Bring originals + 2 self-attested photocopies of everything.</p>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>🪪 <strong>All identity documents</strong> (Aadhaar, PAN, Voter ID)</li>
                  <li>🎓 <strong>All educational certificates</strong> (10th to highest, all semester marksheets)</li>
                  <li>📜 <strong>Reservation certificate</strong> (fresh, in Central Govt format)</li>
                  <li>📋 <strong>Admit card + call letter</strong> from all exam stages</li>
                  <li>🏛️ <strong>NOC</strong> (if serving in Govt job)</li>
                  <li>♿ <strong>PwBD certificate</strong> (if applicable)</li>
                  <li>🎖️ <strong>Ex-SM documents</strong> (if applicable)</li>
                  <li>📸 <strong>6–8 passport photos</strong> (recent, same as submitted online)</li>
                  <li>📄 <strong>Printed application form</strong> from online submission</li>
                </ul>
              </div>
            </div>
            <div className="bg-surface-100 rounded-xl p-4 mt-5">
              <p className="text-sm text-surface-700 font-semibold mb-1">📌 Self-Attestation — Do It Right</p>
              <p className="text-sm text-surface-600">On each photocopy, write <em>"Self-Attested"</em>, sign with your full signature, and write the date. Some bodies also ask for your name and application number. Never get photocopies attested by someone else for government DV — self-attestation is the accepted norm. Gazetted officer attestation is only required if specifically mentioned in the appointment letter.</p>
            </div>
          </DocSection>

          {/* Pro Tips */}
          <DocSection id="pro-tips" title="💡 Pro Tips — The Stuff Most Guides Don't Tell You">
            <div className="space-y-5">

              <div className="card p-5 border-l-4 border-amber-400">
                <h3 className="font-heading font-semibold text-surface-800 mb-2">Name Mismatch? Don't Panic — Here's the Fix</h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-3">
                  It is common for names to be spelled differently across documents — for example, "Abhijit" in your 10th marksheet and "Abhijeet" in your Aadhaar, or "Md." vs "Mohammad." DV officers flag these, but they will not automatically reject you. Here's what you need to arrange before DV day:
                </p>
                <ol className="space-y-2 text-sm text-surface-600 list-decimal list-inside">
                  <li><strong>Affidavit:</strong> Get a sworn affidavit on non-judicial stamp paper from a Notary Public stating that both names refer to the same person. This is the most widely accepted solution.</li>
                  <li><strong>Gazette Notification:</strong> For permanent resolution, publish a name change notice in the State or Central Gazette. This is a formal legal process but makes your corrected name officially recognised. Useful if you want to update all documents uniformly.</li>
                  <li><strong>Newspaper Advertisement:</strong> Some bodies accept a newspaper advertisement of name change (in two newspapers, one regional and one English daily) along with an affidavit.</li>
                </ol>
                <p className="text-sm text-surface-600 mt-3">The safest approach is an affidavit + a request letter to the DV officer explaining the discrepancy. Arrange this before your DV date.</p>
              </div>

              <div className="card p-5 border-l-4 border-red-400">
                <h3 className="font-heading font-semibold text-surface-800 mb-2">Lost Your Certificates? Here's How to Get Duplicates</h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-2">
                  If you have lost a certificate, act immediately — replacement processes take time.
                </p>
                <ul className="space-y-2 text-sm text-surface-600">
                  <li>📄 <strong>10th / 12th Marksheet:</strong> Apply to your Board office (CBSE, ICSE, or State Board) for a duplicate. You will need your old roll number or hall ticket number. CBSE offers duplicate certificates online through cbse.gov.in.</li>
                  <li>🎓 <strong>Graduation Degree:</strong> Contact your university's examination or registrar section. Most universities take 3–6 weeks to issue a duplicate or a new provisional certificate.</li>
                  <li>🪪 <strong>Aadhaar Card:</strong> Download an e-Aadhaar from uidai.gov.in using your enrolled mobile number — it is legally equivalent to the physical card.</li>
                  <li>📝 <strong>Category Certificate:</strong> Apply afresh from your Tehsildar/SDM office. A new certificate is the cleanest solution.</li>
                </ul>
              </div>

              <div className="card p-5 border-l-4 border-green-400">
                <h3 className="font-heading font-semibold text-surface-800 mb-2">The "Crucial Date" — One Concept Most Aspirants Miss</h3>
                <p className="text-sm text-surface-600 leading-relaxed">
                  Every exam notification mentions a "Crucial Date" — the date on which eligibility (age, qualification, category) is determined. If the crucial date is 1 August 2025 and your OBC-NCL certificate was issued in September 2025, it is valid. But if your certificate was issued in January 2025 and you are appearing for DV in December 2025 — and the notification said the certificate must be valid "as on the date of DV" — it may be expired. Read your notification carefully. The crucial date varies by exam: it is typically 1 January, 1 August, or the closing date of the application.
                </p>
              </div>

              <div className="card p-5 border-l-4 border-primary-400">
                <h3 className="font-heading font-semibold text-surface-800 mb-2">Build Your "DV Ready" Document Folder Now</h3>
                <p className="text-sm text-surface-600 leading-relaxed">
                  Don't wait for the DV call letter to start collecting documents. Start a physical folder today with originals and a digital folder on your phone with scanned copies. Label everything clearly. When your DV date arrives (which is often announced with only 7–10 days notice), you should be ready without any scrambling.
                </p>
              </div>
            </div>
          </DocSection>

          {/* Common Mistakes */}
          <DocSection id="mistakes" title="🚫 Common Mistakes to Avoid at Document Verification">
            <div className="space-y-3">
              {[
                { mistake: 'Carrying an expired OBC-NCL certificate', fix: 'Get a fresh certificate from your SDM/Tehsildar office every year. Check your notification for the exact validity requirement.' },
                { mistake: 'OBC certificate in State format (not Central Government format)', fix: 'Specifically request a certificate "in the prescribed format for Central Government services" from the issuing authority.' },
                { mistake: 'Missing semester marksheets', fix: 'Carry all semester or year-wise marksheets, not just the final year or consolidated marksheet.' },
                { mistake: 'Name mismatch across documents', fix: 'Get a notarised affidavit explaining the discrepancy. Arrange it before your DV date.' },
                { mistake: 'Not bringing the original application printout', fix: 'Print your application form at every stage (application submission, admit card), and carry all of them to DV.' },
                { mistake: 'Forgetting the NOC if serving in a government job', fix: 'Apply for NOC from your employer as soon as you clear the written exam. It can take weeks.' },
                { mistake: 'Photocopies without self-attestation', fix: 'Write "Self-Attested", sign, and date every photocopy before arriving for DV.' },
                { mistake: 'EWS certificate from the wrong financial year', fix: 'EWS certificates must be renewed annually. Carry a fresh one for the relevant financial year.' },
                { mistake: 'Relying only on e-documents (soft copies)', fix: 'Always carry physical originals. Most DV panels ask for originals to physically verify. E-copies on your phone are a backup, not a substitute.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 card p-4">
                  <span className="text-red-500 text-lg flex-shrink-0">✗</span>
                  <div>
                    <p className="text-sm font-semibold text-surface-800 mb-1">{item.mistake}</p>
                    <p className="text-sm text-surface-600"><span className="text-green-600 font-semibold">Fix: </span>{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </DocSection>

          {/* Salary Section */}
          <DocSection id="salary" title="💰 Which Government Jobs Pay ₹50,000+ Per Month?">
            <p className="text-surface-600 leading-relaxed mb-5">
              Many aspirants ask this question — and the answer depends on the post, pay level, and allowances. Here are the most realistic government jobs where in-hand salary crosses ₹50,000 per month (including HRA, DA, and other allowances as applicable in major cities).
            </p>
            <div className="overflow-x-auto rounded-xl border border-surface-200">
              <table className="w-full text-sm">
                <thead className="bg-primary-50 text-primary-800">
                  <tr>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Post / Exam</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Pay Level</th>
                    <th className="text-left px-4 py-3 font-heading font-semibold">Approx. In-Hand (City)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100">
                  {[
                    { post: 'IAS / IPS / IFS (UPSC CSE)', level: 'Level 10 (₹56,100 basic) → Level 18', salary: '₹70,000 – ₹2,50,000+' },
                    { post: 'SSC CGL — Inspector of Income Tax, CBI Sub-Inspector', level: 'Level 7 (₹44,900 basic) + allowances', salary: '₹55,000 – ₹70,000 (metros)' },
                    { post: 'SSC CGL — Assistant Section Officer (MEA, CSS)', level: 'Level 7 (₹44,900 basic) + allowances', salary: '₹55,000 – ₹65,000' },
                    { post: 'IBPS PO / SBI PO (Probationary Officer)', level: 'JMGS-I (₹48,480 – ₹85,920 scale)', salary: '₹52,000 – ₹65,000 (metros)' },
                    { post: 'RBI Grade B Officer', level: 'Grade B (₹55,200 basic)', salary: '₹80,000 – ₹1,00,000+' },
                    { post: 'NABARD Grade A', level: 'Grade A (₹44,500 basic + allowances)', salary: '₹55,000 – ₹70,000' },
                    { post: 'State PSC Class II Officers (e.g., Deputy SP, SDM)', level: 'PB-3 / Level 10 equivalent', salary: '₹50,000 – ₹80,000 (varies by state)' },
                    { post: 'SSC CGL — Auditor / Accountant (CAG)', level: 'Level 5 (₹29,200 basic) — lower, but rises fast with promotions', salary: '₹38,000 – ₹48,000 initially; ₹55,000+ after 5–7 yrs' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                      <td className="px-4 py-3 font-semibold text-surface-700">{row.post}</td>
                      <td className="px-4 py-3 text-surface-600 text-xs">{row.level}</td>
                      <td className="px-4 py-3 text-green-700 font-semibold text-xs">{row.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-surface-400 mt-3">Note: In-hand salaries are estimates including HRA and DA as applicable in Class X cities. Salaries change with DA revisions. Always check the official notification for the most current pay scale.</p>
          </DocSection>

          {/* FAQ */}
          <DocSection id="faq" title="❓ Frequently Asked Questions">
            <div className="space-y-4">
              {[
                {
                  q: 'What documents are needed for a government job?',
                  a: 'The core documents every candidate needs are: Aadhaar card, PAN card, Class 10 marksheet (for identity + DOB), Class 12 marksheet, graduation degree + all semester marksheets, a recent passport-size photograph, and a reservation certificate if you belong to OBC/SC/ST/EWS. Serving government employees also need an NOC, and PwBD candidates need a disability certificate. The full exam-specific list is always published in the official appointment/DV call letter.',
                },
                {
                  q: 'Which document is required when applying for a job (online application)?',
                  a: 'At the online application stage, you only need digital copies. The main ones are: a scanned passport-size photograph (JPG, 20–50 KB), a scanned signature (JPG, 10–20 KB), and your Aadhaar/enrollment number. Your educational and category details are usually entered manually — no certificate upload is required for SSC, IBPS, or RRB at this stage.',
                },
                {
                  q: 'Can I get rejected in document verification?',
                  a: 'Yes. Rejection at DV does happen, and it is more common than most aspirants realise. The most frequent reasons are: an expired or incorrectly formatted OBC-NCL certificate, name or date-of-birth mismatch between documents, missing semester marksheets, no NOC for serving government employees, and PwBD certificate from a non-government hospital. Rejection at DV means your candidature is cancelled and the next candidate on the merit list is called — even after you cleared the written exam and interview.',
                },
                {
                  q: 'Is self-attestation enough for photocopies at DV?',
                  a: 'Yes, self-attestation is the accepted standard for Central Government document verification. Write "Self-Attested", sign, and date each photocopy. Gazetted officer attestation is only needed if the appointment letter specifically asks for it (rare for most exams).',
                },
                {
                  q: 'How many passport-size photographs should I bring to DV?',
                  a: 'Bring at least 8–10 recent passport-size photographs. DV offices often ask for 2–4 photos, and there are sometimes multiple stages (medical examination, joining formalities) that each need separate sets. Use photographs taken on the same day in the same clothes as far as possible — consistency helps.',
                },
                {
                  q: 'What if my OBC-NCL certificate expired just last month?',
                  a: 'Get a fresh certificate immediately. The process at your Tehsildar or SDM office typically takes 7–15 working days. Many offices now have Tatkal or same-week processing for these. Do not attend DV with an expired certificate — you will be rejected and given no second chance on the spot.',
                },
              ].map((item, i) => (
                <details key={i} className="card p-5 group" open={i === 0}>
                  <summary className="font-heading font-semibold text-surface-800 text-sm cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-primary-500 ml-4 flex-shrink-0">▾</span>
                  </summary>
                  <p className="text-sm text-surface-600 leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </DocSection>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl p-8 text-center text-white mt-10">
            <h2 className="text-xl font-heading font-bold mb-3">Ready for Your Exam?</h2>
            <p className="text-white/80 text-sm mb-5">Start preparing with our free tools and 100+ exam pages.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/tools/eligibility-checker" className="bg-white text-primary-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors">Check Eligibility</Link>
              <Link href="/exams" className="border border-white/40 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors">Browse All Exams</Link>
            </div>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block mt-2">
          <div className="sticky top-24 space-y-5">
            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">📑 Contents</div>
              <nav className="space-y-1">
                {tocItems.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-surface-600 hover:text-primary-500 py-1 transition-colors leading-snug">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">🔗 Related Guides</div>
              <div className="space-y-3">
                <Link href="/guides/how-to-fill-government-job-application-form" className="block text-sm text-primary-500 hover:underline leading-snug">How to Fill Application Form →</Link>
                <Link href="/guides/age-limit-relaxation-government-jobs" className="block text-sm text-primary-500 hover:underline leading-snug">Age Limit & Relaxation Guide →</Link>
                <Link href="/guides/how-to-start-government-exam-preparation" className="block text-sm text-primary-500 hover:underline leading-snug">Beginner's Preparation Roadmap →</Link>
              </div>
            </div>
            <div className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-surface-500 mb-3">🚀 Quick Links</div>
              <div className="space-y-2">
                <Link href="/exams/ssc-cgl" className="block text-sm text-primary-500 hover:underline">SSC CGL →</Link>
                <Link href="/exams/ibps-po" className="block text-sm text-primary-500 hover:underline">IBPS PO →</Link>
                <Link href="/exams/sbi-po" className="block text-sm text-primary-500 hover:underline">SBI PO →</Link>
                <Link href="/tools/eligibility-checker" className="block text-sm text-primary-500 hover:underline">Eligibility Checker →</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Schema.org FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What documents are needed for a government job?', acceptedAnswer: { '@type': 'Answer', text: 'Core documents: Aadhaar card, PAN card, Class 10 marksheet, Class 12 marksheet, graduation degree + all semester marksheets, passport-size photographs, and reservation certificate (OBC-NCL/SC/ST/EWS if applicable). Serving govt employees also need an NOC.' } },
          { '@type': 'Question', name: 'Can I get rejected in document verification?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Common rejection reasons include: expired OBC-NCL certificate, wrong format (State format instead of Central Government format), name mismatch, missing semester marksheets, and no NOC for serving government employees.' } },
          { '@type': 'Question', name: 'What is the validity period of an OBC-NCL certificate for Central Government jobs?', acceptedAnswer: { '@type': 'Answer', text: 'OBC-NCL certificates are valid for the financial year in which they are issued (April to March). Most Central Government exams require a certificate from the current or immediately preceding financial year.' } },
          { '@type': 'Question', name: 'Which government jobs pay ₹50,000 per month?', acceptedAnswer: { '@type': 'Answer', text: 'Jobs paying ₹50,000+ per month (in-hand, metros) include: IAS/IPS via UPSC CSE, SSC CGL Inspector of Income Tax, SSC CGL Assistant Section Officer in MEA/CSS, IBPS PO / SBI PO, RBI Grade B Officer, and NABARD Grade A Officer.' } },
        ],
      })}} />
    </div>
  );
}

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-5 pb-3 border-b border-surface-200">{title}</h2>
      {children}
    </section>
  );
}

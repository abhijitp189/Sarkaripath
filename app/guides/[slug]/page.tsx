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
  };

  const seoDescriptions: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'Complete beginner\'s roadmap to government exam preparation in 2026. Which exam to choose, 12-month study plan, free resources, daily timetables, and the mistakes that fail 90% of aspirants. From zero to selection.',
    'how-to-fill-government-job-application-form': 'Complete step-by-step guide for filling online application forms for SSC, UPSC, IBPS, SBI, and Railway exams. Covers OTR registration, photo & signature upload specs, fee payment, common mistakes to avoid, and correction window details.',
    'best-free-resources-government-exams': 'Comprehensive 2026 guide to 50+ free resources for Indian government exam preparation. Official government platforms (NCERT, DIKSHA, SWAYAM), YouTube channels, mock test sites, apps, previous year papers, and current affairs sources — all verified and free.',
    'age-limit-relaxation-government-jobs': 'Complete 2026 guide to age limits and relaxation rules for Indian government exams. Covers OBC (+3 yrs), SC/ST (+5 yrs), PwBD (+10–15 yrs), Ex-Servicemen, and EWS rules for UPSC, SSC CGL, IBPS PO, SBI PO, and RRB NTPC — with a quick-check table and common mistakes to avoid.',
  };

  const seoKeywords: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'government exam preparation for beginners 2026, how to start government exam preparation, sarkari exam ki taiyari kaise kare, government exam study plan, which government exam to choose, 12 month government exam roadmap',
    'how-to-fill-government-job-application-form': 'how to fill government job application form, SSC CGL application form, UPSC application form, IBPS PO apply online, RRB NTPC application, government exam form filling, photo signature upload government exam, OTR registration, sarkari naukri form kaise bhare',
    'best-free-resources-government-exams': 'free resources government exam preparation 2026, free study material UPSC SSC Banking Railway, best free YouTube channels government exams, NCERT free textbooks, free mock tests government exams, DIKSHA app, SWAYAM, sarkari exam free resources, previous year papers download, muft study material sarkari naukri',
    'age-limit-relaxation-government-jobs': 'age limit government jobs India 2026, age relaxation OBC SC ST EWS PwBD ex-servicemen, sarkari naukri age limit, UPSC SSC CGL IBPS PO SBI PO RRB NTPC age limit, government exam age relaxation rules, umar mein choot sarkari naukri, age relaxation central government',
  };

  return {
    title: seoTitles[params.slug] || `${guide.title} | TaiyarHo`,
    description: seoDescriptions[params.slug] || guide.description,
    keywords: seoKeywords[params.slug] || undefined,
    alternates: {
      canonical: `https://taiyarho.in/guides/${params.slug}`,
    },
    openGraph: {
      title: seoTitles[params.slug] || `${guide.title} | TaiyarHo`,
      description: seoDescriptions[params.slug] || guide.description,
      url: `https://taiyarho.in/guides/${params.slug}`,
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

  // Full rich article for age limit & relaxation guide
  if (params.slug === 'age-limit-relaxation-government-jobs') {
    return <AgeRelaxationGuide guide={guide} />;
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
              url: 'https://taiyarho.in',
            },
            publisher: {
              '@type': 'Organization',
              name: 'TaiyarHo',
              url: 'https://taiyarho.in',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://taiyarho.in/guides/${params.slug}`,
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
                    ['YouTube (StudyIQ, Adda247, Wifistudy)', 'Video lectures for all exams', 'Free', '⭐⭐⭐⭐⭐'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, datePublished: '2026-04-27', dateModified: '2026-04-27', author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://taiyarho.in' }, publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://taiyarho.in' }, mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taiyarho.in/guides/how-to-start-government-exam-preparation' } }) }} />
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
              <YTCard name="StudyIQ IAS" url="https://www.youtube.com/@StudyIQIAS" desc="Daily current affairs and subject-wise lectures by Gaurav Munjal and team for UPSC and all exams" lang="Hindi/English" />
              <YTCard name="Unacademy IAS" url="https://www.youtube.com/@UnacademyIAS" desc="Free UPSC lectures by top educators on History, Geography, Polity, Economy, and optional subjects" lang="English/Hindi" />
              <YTCard name="Mrunal Patel" url="https://www.youtube.com/@MrunalPatel" desc="Economy, Polity, and current affairs analysis — especially strong for UPSC Prelims and banking awareness" lang="English/Hindi" />
            </div>

            <h3 className="font-heading font-semibold text-surface-800 mb-3 text-base">📝 For SSC &amp; Railway</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <YTCard name="Wifistudy (by Unacademy)" url="https://www.youtube.com/@wabornindia" desc="Free live classes for Railway, SSC, and Defence exams — Maths, Reasoning, GK, and English" lang="Hindi" />
              <YTCard name="Rakesh Yadav Readers" url="https://www.youtube.com/@RAKESHYADAVREADERSPUBLICATI" desc="Mathematics shortcuts and advanced-level problem solving for SSC CGL and Railway exams" lang="Hindi" />
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
              <YTCard name="Exampur (by Vivek Sir)" url="https://www.youtube.com/@exampur" desc="Covers CTET, State TET, DSSSB, and KVS along with SSC and Railway exams" lang="Hindi" />
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
        author: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://taiyarho.in' },
        publisher: { '@type': 'Organization', name: 'TaiyarHo', url: 'https://taiyarho.in' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taiyarho.in/guides/best-free-resources-government-exams' },
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

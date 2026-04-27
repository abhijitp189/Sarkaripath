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
  };

  const seoDescriptions: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'Complete beginner\'s roadmap to government exam preparation in 2026. Which exam to choose, 12-month study plan, free resources, daily timetables, and the mistakes that fail 90% of aspirants. From zero to selection.',
    'how-to-fill-government-job-application-form': 'Complete step-by-step guide for filling online application forms for SSC, UPSC, IBPS, SBI, and Railway exams. Covers OTR registration, photo & signature upload specs, fee payment, common mistakes to avoid, and correction window details.',
  };

  const seoKeywords: Record<string, string> = {
    'how-to-start-government-exam-preparation': 'government exam preparation for beginners 2026, how to start government exam preparation, sarkari exam ki taiyari kaise kare, government exam study plan, which government exam to choose, 12 month government exam roadmap',
    'how-to-fill-government-job-application-form': 'how to fill government job application form, SSC CGL application form, UPSC application form, IBPS PO apply online, RRB NTPC application, government exam form filling, photo signature upload government exam, OTR registration, sarkari naukri form kaise bhare',
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
  'best-free-resources-government-exams': {
    sections: [
      {
        heading: 'Free YouTube Channels',
        content: 'YouTube is the single best free resource for government exam preparation. Top channels include: Unacademy (separate channels for UPSC, SSC, Banking), StudyIQ (all exams), Adda247 (Banking and SSC focus), Drishti IAS (Hindi medium UPSC), Wifistudy (Railway and SSC), and Mrunal Patel (Economy and current affairs). Subscribe to 3-4 channels relevant to your exam and follow their free playlists systematically.',
      },
      {
        heading: 'Free Websites for Study Material',
        content: 'NCERT official website (ncert.nic.in) has all textbooks for free — these are the foundation for every exam. Insights on India and Forum IAS are excellent for UPSC. GK Today provides daily current affairs. PRS Legislative Research is invaluable for Polity. For banking, the RBI website itself is the best resource for banking awareness. All official exam body websites have previous year papers available for free.',
      },
      {
        heading: 'Free Mock Test Platforms',
        content: 'Several platforms offer free mock tests: Testbook (limited free mocks for all exams), Oliveboard (free mocks for banking exams), Adda247 (free daily quizzes), IBPS official website (releases free mock tests before every exam), and SSC official website (practice sets). Take at least one free mock per week during your preparation.',
      },
      {
        heading: 'Telegram Groups and Apps',
        content: 'Telegram has become a hub for exam preparation. Join groups for your specific exam — they share daily current affairs PDFs, free study materials, and exam notifications. Be selective and join only 2-3 quality groups to avoid information overload. Popular apps include Pratiyogita Darpan (current affairs), GKToday, and exam-specific apps from Adda247 and Testbook.',
      },
      {
        heading: 'Previous Year Question Papers',
        content: 'Previous year papers are the most underrated free resource. Every official exam website publishes past papers. Solving 5-10 years of previous papers gives you more insight than any coaching class. You\'ll understand the exam pattern, difficulty level, frequently asked topics, and time management requirements. We link official PYQ sources on every exam page.',
      },
    ],
  },
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

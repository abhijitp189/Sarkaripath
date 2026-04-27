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
    'how-to-fill-government-job-application-form': 'How to Fill Government Job Application Forms – Step by Step Guide (2026) | TaiyarHo',
  };

  const seoDescriptions: Record<string, string> = {
    'how-to-fill-government-job-application-form': 'Complete step-by-step guide for filling online application forms for SSC, UPSC, IBPS, SBI, and Railway exams. Covers OTR registration, photo & signature upload specs, fee payment, common mistakes to avoid, and correction window details.',
  };

  const seoKeywords: Record<string, string> = {
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
  'how-to-start-government-exam-preparation': {
    sections: [
      {
        heading: '🔄 This Guide Has Been Expanded',
        content: 'We have upgraded this guide into a comprehensive, in-depth blog post with a 12-month roadmap, exam comparison tables, subject-wise strategy, daily timetables, and more. Please visit our new article: Government Exam Preparation for Beginners 2026 – Step-by-Step Roadmap.',
      },
    ],
  },
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

        {params.slug === 'how-to-start-government-exam-preparation' ? (
          <div className="card p-8 text-center border-2 border-primary-200 bg-primary-50">
            <div className="text-4xl mb-3">🚀</div>
            <h2 className="font-heading font-bold text-xl text-primary-800 mb-3">This Guide Has Been Upgraded!</h2>
            <p className="text-sm text-surface-600 leading-relaxed mb-5 max-w-xl mx-auto">
              We&apos;ve expanded this guide into a comprehensive, in-depth article with a 12-month preparation roadmap, exam comparison tables, subject-wise strategy, daily timetables for students and working professionals, free resources, and common mistakes to avoid.
            </p>
            <Link href="/blog/government-exam-preparation-beginners-2026" className="btn-primary inline-flex items-center gap-2">
              Read the Full 2026 Roadmap →
            </Link>
          </div>
        ) : content ? (
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

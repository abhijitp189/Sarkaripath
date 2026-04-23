# SarkariPath – Free Indian Government Exam Preparation Guide

A clean, modern, SEO-optimized static website for Indian government exam preparation.

## Features
- 5 major exams covered (UPSC IAS, SSC CGL, IBPS PO, RRB NTPC, SBI PO)
- Complete syllabus, exam pattern, study plans, best books, free resources
- Eligibility checker tool
- Preparation guides
- Curated free resources hub
- Google AdSense ready
- SEO optimized (sitemap, robots.txt, structured data, OG tags)
- Mobile-first responsive design

## Quick Deploy to Vercel

### Step 1: Upload to GitHub
1. Go to github.com → click "+" → "New repository"
2. Name it `sarkaripath` → click "Create repository"
3. Click "uploading an existing file"
4. Drag and drop ALL files from this folder
5. Click "Commit changes"

### Step 2: Deploy on Vercel
1. Go to vercel.com → "Add New Project"
2. Import your `sarkaripath` repo from GitHub
3. Framework: Next.js (auto-detected)
4. Click "Deploy"
5. Your site is live!

### Step 3: Custom Domain (Optional)
1. Buy a domain (e.g., sarkaripath.in from GoDaddy/BigRock)
2. In Vercel: Settings → Domains → Add your domain
3. Copy DNS records to your domain registrar
4. Wait 24 hours

### Step 4: Google AdSense (Optional)
1. Apply at google.com/adsense
2. After approval, add your AdSense ID:
   - In Vercel: Settings → Environment Variables
   - Add: `NEXT_PUBLIC_ADSENSE_ID` = `ca-pub-XXXXXXXX`
3. Redeploy

## Local Development (Optional)
```bash
npm install
npm run dev
```
Open http://localhost:3000

## How to Update Content
Edit the file `lib/exams-data.ts` to add/modify exams.
Edit files in `app/guides/[slug]/page.tsx` to add guide content.
Commit changes on GitHub → Vercel auto-deploys.

## Tech Stack
- Next.js 14 (Static Export)
- TypeScript
- Tailwind CSS
- No database needed

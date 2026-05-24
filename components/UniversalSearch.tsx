'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { allExams } from '@/lib/exams-data';
import { guides } from '@/lib/exams-data';
import { blogPosts } from '@/lib/blog-data';
import { currentAffairsPosts } from '@/lib/current-affairs-data';

/* ─── Types ──────────────────────────────────────────────────── */

interface SearchResult {
  type: 'exam' | 'blog' | 'guide' | 'current-affairs';
  title: string;
  subtitle: string;
  href: string;
  category: string;
  score: number;
  keywords: string[];
}

/* ─── Alias / Synonym Map ────────────────────────────────────── 
   Maps common misspellings, abbreviations, Hindi terms, 
   and colloquial names to the canonical search terms.
   Each key is a term people might type; values are what 
   we actually search against.
*/

const ALIASES: Record<string, string[]> = {
  // Common abbreviations & alternate names
  'ias': ['upsc civil services', 'upsc ias'],
  'ips': ['upsc civil services', 'upsc ias'],
  'ifs': ['upsc civil services', 'upsc indian forest service', 'upsc ifs'],
  'nda': ['upsc nda', 'national defence academy'],
  'cds': ['upsc cds', 'combined defence services'],
  'capf': ['upsc capf', 'central armed police forces'],
  'ese': ['upsc engineering services', 'upsc ese'],
  'cgl': ['ssc cgl', 'combined graduate level'],
  'chsl': ['ssc chsl', 'combined higher secondary level'],
  'mts': ['ssc mts', 'multi tasking staff'],
  'cpo': ['ssc cpo', 'central police organisation'],
  'gd': ['ssc gd constable'],
  'ntpc': ['rrb ntpc', 'non technical popular categories'],
  'alp': ['rrb alp', 'assistant loco pilot'],
  'rpf': ['rpf constable', 'rpf si', 'railway protection force'],
  'po': ['ibps po', 'sbi po', 'probationary officer'],
  'clerk': ['ibps clerk', 'sbi clerk'],
  'rrb': ['ibps rrb', 'rrb ntpc', 'regional rural banks'],
  'rbi': ['rbi grade b', 'reserve bank of india'],
  'lic': ['lic aao', 'life insurance corporation'],
  'nabard': ['nabard grade a', 'nabard grade b'],
  'sebi': ['sebi grade a'],
  'afcat': ['afcat', 'air force common admission test'],
  'ctet': ['ctet', 'central teacher eligibility test'],
  'net': ['ugc net', 'national eligibility test'],
  'kvs': ['kvs', 'kendriya vidyalaya sangathan'],
  'nvs': ['nvs', 'navodaya vidyalaya samiti'],
  'dsssb': ['dsssb', 'delhi subordinate services selection board'],
  'mpsc': ['mpsc', 'maharashtra public service commission'],
  'uppsc': ['uppsc', 'uttar pradesh public service commission'],
  'bpsc': ['bpsc', 'bihar public service commission'],
  'rpsc': ['rpsc', 'rajasthan public service commission'],
  'mppsc': ['mppsc', 'madhya pradesh public service commission'],
  'wbcs': ['wbcs', 'west bengal civil service'],
  'tnpsc': ['tnpsc', 'tamil nadu public service commission'],
  'kpsc': ['kpsc', 'karnataka public service commission'],
  'hpsc': ['hpsc', 'haryana public service commission'],
  'jpsc': ['jpsc', 'jharkhand public service commission'],
  'opsc': ['opsc', 'odisha public service commission'],
  'ukpsc': ['ukpsc', 'uttarakhand public service commission'],
  'appsc': ['appsc', 'andhra pradesh public service commission'],
  'tspsc': ['tspsc', 'telangana public service commission'],
  'kas': ['kpsc kas', 'karnataka administrative service'],
  'hcs': ['hpsc hcs', 'haryana civil services'],
  'hpas': ['hpas', 'himachal pradesh administrative services'],
  
  // Colloquial / intent-based terms
  'bank exam': ['ibps po', 'sbi po', 'ibps clerk', 'sbi clerk', 'rbi grade b', 'banking'],
  'bank po': ['ibps po', 'sbi po'],
  'banking exam': ['ibps po', 'sbi po', 'ibps clerk', 'banking'],
  'railway exam': ['rrb ntpc', 'rrb group d', 'rrb alp', 'railway'],
  'train exam': ['rrb ntpc', 'rrb group d', 'railway'],
  'police exam': ['ssc cpo', 'ssc gd', 'delhi police', 'police'],
  'army exam': ['agniveer army', 'nda', 'cds', 'defence'],
  'navy exam': ['agniveer navy', 'nda', 'defence'],
  'airforce exam': ['afcat', 'agniveer air force', 'defence'],
  'air force': ['afcat', 'agniveer air force', 'defence'],
  'teacher exam': ['ctet', 'ugc net', 'kvs', 'nvs', 'teaching'],
  'teaching exam': ['ctet', 'ugc net', 'kvs', 'teaching'],
  'insurance exam': ['lic aao', 'niacl ao', 'insurance'],
  'sarkari exam': ['upsc', 'ssc', 'banking', 'railway'],
  'government exam': ['upsc', 'ssc', 'banking', 'railway'],
  'govt exam': ['upsc', 'ssc', 'banking', 'railway'],
  'civil services': ['upsc civil services', 'upsc ias'],
  'forest service': ['upsc indian forest service', 'upsc ifs'],
  'income tax': ['ssc cgl', 'income tax inspector'],
  'customs': ['ssc cgl', 'customs inspector'],
  'group d': ['rrb group d', 'railway group d'],
  'constable': ['ssc gd constable', 'rpf constable', 'delhi police constable'],
  'si': ['ssc cpo', 'rpf si', 'sub inspector'],
  'sub inspector': ['ssc cpo', 'rpf si', 'delhi police'],
  'inspector': ['ssc cgl', 'ssc cpo', 'income tax inspector'],
  'salary': ['salary', 'pay scale'],
  'eligibility': ['eligibility', 'age limit', 'qualification'],
  'syllabus': ['syllabus', 'exam pattern'],
  'admit card': ['admit card', 'hall ticket'],
  'result': ['result', 'cutoff', 'merit list'],
  'age limit': ['age limit', 'eligibility', 'age relaxation'],
  'age relaxation': ['age relaxation', 'obc', 'sc', 'st'],
  
  // Hindi / Hinglish terms people might type
  'sarkari naukri': ['upsc', 'ssc', 'banking', 'railway'],
  'naukri': ['upsc', 'ssc', 'banking', 'railway'],
  'pariksha': ['exam', 'upsc', 'ssc'],
  'bharti': ['vacancy', 'recruitment'],
  'vacancy': ['vacancy', 'recruitment'],
  'psc': ['state psc', 'upsc', 'mpsc', 'uppsc', 'bpsc'],
  
  // Common misspelling patterns
  'upse': ['upsc'],
  'upssc': ['upsc', 'uppsc'],
  'ibpsc': ['ibps'],
  'ibsp': ['ibps'],
  'scc': ['ssc'],
  'scg': ['ssc cgl'],
  'ntcp': ['rrb ntpc'],
  'rbp': ['rpf'],
  'rbb': ['rrb', 'rbi'],
  'agnieer': ['agniveer'],
  'agnivir': ['agniveer'],
  'nabarad': ['nabard'],
  'sebii': ['sebi'],
  'teet': ['ctet'],
  'ct et': ['ctet'],
  'net exam': ['ugc net'],
};

/* ─── Fuzzy Matching (Levenshtein distance) ──────────────────── */

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  
  // Use single-row optimization for memory efficiency
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  let curr = new Array<number>(n + 1);
  
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(
        prev[j] + 1,      // deletion
        curr[j - 1] + 1,  // insertion
        prev[j - 1] + cost // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

/** 
 * Check if `candidate` fuzzy-matches `query` within tolerance.
 * Tolerance scales with word length: shorter words = stricter.
 */
function fuzzyMatch(query: string, candidate: string): boolean {
  const q = query.toLowerCase();
  const c = candidate.toLowerCase();
  
  // Exact substring — always match
  if (c.includes(q) || q.includes(c)) return true;
  
  // For very short queries (≤2 chars), require exact substring
  if (q.length <= 2) return false;
  
  // Check each word in the candidate against query words
  const queryWords = q.split(/\s+/);
  const candidateWords = c.split(/\s+/);
  
  for (const qw of queryWords) {
    if (qw.length <= 2) continue; // skip tiny words
    const tolerance = qw.length <= 4 ? 1 : 2;
    const matched = candidateWords.some(cw => {
      // Prefix match (user still typing)
      if (cw.startsWith(qw) || qw.startsWith(cw)) return true;
      // Edit distance
      return levenshtein(qw, cw) <= tolerance;
    });
    if (matched) return true;
  }
  return false;
}

/* ─── Scoring ────────────────────────────────────────────────── */

function scoreResult(query: string, item: SearchResult): number {
  const q = query.toLowerCase().trim();
  const title = item.title.toLowerCase();
  const subtitle = item.subtitle.toLowerCase();
  const keywords = item.keywords.map(k => k.toLowerCase());
  const allText = [title, subtitle, ...keywords].join(' ');
  
  let score = 0;
  
  // Exact title match
  if (title === q) return 100;
  
  // Title starts with query
  if (title.startsWith(q)) score += 50;
  
  // Title contains query as substring
  if (title.includes(q)) score += 30;
  
  // Subtitle contains query
  if (subtitle.includes(q)) score += 15;
  
  // Keywords contain query
  if (keywords.some(k => k.includes(q))) score += 20;
  
  // Token-level matching: each query word scored independently
  const queryWords = q.split(/\s+/).filter(w => w.length > 0);
  let wordMatchCount = 0;
  
  for (const word of queryWords) {
    if (word.length <= 1) continue;
    if (allText.includes(word)) {
      wordMatchCount++;
      // Bonus if word matches at start of a title word
      const titleWords = title.split(/[\s()/\-–]+/);
      if (titleWords.some(tw => tw.startsWith(word))) score += 8;
      else score += 4;
    } else {
      // Fuzzy word match (typo tolerance)
      const titleWords = title.split(/[\s()/\-–]+/);
      const tolerance = word.length <= 4 ? 1 : 2;
      if (titleWords.some(tw => tw.length > 2 && levenshtein(word, tw) <= tolerance)) {
        wordMatchCount++;
        score += 2;
      }
    }
  }
  
  // Proportion of query words matched
  if (queryWords.length > 0) {
    score += Math.round((wordMatchCount / queryWords.length) * 10);
  }
  
  return score;
}

/* ─── Build Search Index ─────────────────────────────────────── */

function buildSearchIndex(): SearchResult[] {
  const examResults: SearchResult[] = allExams.map((exam) => {
    // Generate extra searchable keywords from the exam name
    const nameWords = exam.name.toLowerCase().split(/[\s()/\-–]+/).filter(w => w.length > 1);
    const keywords = [
      exam.slug.replace(/-/g, ' '),
      exam.category.toLowerCase(),
      ...(exam.description ? exam.description.toLowerCase().split(/\s+/).slice(0, 10) : []),
      ...nameWords,
    ];
    return {
      type: 'exam' as const,
      title: exam.name,
      subtitle: exam.conductingBody,
      href: `/exams/${exam.slug}`,
      category: exam.category,
      score: 0,
      keywords,
    };
  });

  const blogResults: SearchResult[] = blogPosts.map((post) => ({
    type: 'blog' as const,
    title: post.title,
    subtitle: post.category,
    href: `/blog/${post.slug}`,
    category: 'Blog',
    score: 0,
    keywords: post.tags ? post.tags.map(t => t.toLowerCase()) : [],
  }));
  
  const guideResults: SearchResult[] = guides.map((guide) => ({
    type: 'guide' as const,
    title: guide.title,
    subtitle: guide.category,
    href: `/guides/${guide.slug}`,
    category: 'Guide',
    score: 0,
    keywords: [guide.category.toLowerCase(), guide.slug.replace(/-/g, ' ')],
  }));
  
  const caResults: SearchResult[] = currentAffairsPosts.map((post) => ({
    type: 'current-affairs' as const,
    title: post.title,
    subtitle: post.dateRange,
    href: `/current-affairs/${post.slug}`,
    category: 'Current Affairs',
    score: 0,
    keywords: post.targetExams.map(e => e.toLowerCase()),
  }));

  return [...examResults, ...blogResults, ...guideResults, ...caResults];
}

/* ─── Highlight helper ───────────────────────────────────────── */

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text;
  // Try highlighting each query word
  const words = query.toLowerCase().trim().split(/\s+/).filter(w => w.length > 1);
  if (words.length === 0) return text;
  
  // Build a regex that matches any query word
  const escaped = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(pattern);
  
  if (parts.length === 1) return text;
  
  return (
    <>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <mark key={i} className="bg-primary-100 text-primary-700 rounded px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */

export default function UniversalSearch() {
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [highlighted, setHighlighted] = useState(0);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Smart search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setHighlighted(0);
      setSuggestion(null);
      return;
    }
    
    const q = query.toLowerCase().trim();
    
    // Step 1: Expand query using alias map
    let expandedTerms: string[] = [q];
    
    // Check if full query or any sub-phrase matches an alias
    if (ALIASES[q]) {
      expandedTerms = [...expandedTerms, ...ALIASES[q]];
    }
    // Also check individual words
    const queryWords = q.split(/\s+/);
    for (const word of queryWords) {
      if (ALIASES[word]) {
        expandedTerms = [...expandedTerms, ...ALIASES[word]];
      }
    }
    // Check two-word combinations
    for (let i = 0; i < queryWords.length - 1; i++) {
      const twoWord = queryWords[i] + ' ' + queryWords[i + 1];
      if (ALIASES[twoWord]) {
        expandedTerms = [...expandedTerms, ...ALIASES[twoWord]];
      }
    }
    
    // Step 2: Score every item against original + expanded terms
    const scored = searchIndex.map(item => {
      let bestScore = scoreResult(q, item);
      
      // Check expanded terms
      for (const term of expandedTerms) {
        if (term === q) continue;
        const expandedScore = scoreResult(term, item);
        // Expanded matches score slightly less than direct matches
        bestScore = Math.max(bestScore, Math.floor(expandedScore * 0.85));
      }
      
      // Step 3: Fuzzy matching as fallback
      if (bestScore === 0) {
        const allSearchable = [item.title, item.subtitle, ...item.keywords].join(' ');
        if (fuzzyMatch(q, allSearchable)) {
          bestScore = 5; // Low score but still shows up
        }
      }
      
      return { ...item, score: bestScore };
    });
    
    // Step 4: Filter, sort by score, take top 8
    const matched = scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
    
    setResults(matched);
    setHighlighted(0);
    
    // Step 5: Generate "Did you mean?" if no results
    if (matched.length === 0 && q.length >= 3) {
      // Find closest alias key
      let bestAlias: string | null = null;
      let bestDist = Infinity;
      for (const key of Object.keys(ALIASES)) {
        const dist = levenshtein(q, key);
        if (dist < bestDist && dist <= 3) {
          bestDist = dist;
          bestAlias = key;
        }
      }
      setSuggestion(bestAlias);
    } else {
      setSuggestion(null);
    }
  }, [query, searchIndex]);

  // Open/close helpers
  const openSearch = useCallback(() => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
    setSuggestion(null);
  }, []);

  // Keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        open ? closeSearch() : openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, openSearch, closeSearch]);

  // Arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[highlighted];
      if (target) {
        router.push(target.href);
        closeSearch();
      }
    }
  };

  // Click/touch outside to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open, closeSearch]);

  // Lock body scroll when search is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const categoryIcon: Record<string, string> = {
    UPSC: '🏛️',
    SSC: '📋',
    Banking: '🏦',
    Railway: '🚆',
    Defence: '🛡️',
    'State PSC': '📜',
    Teaching: '📚',
    Police: '👮',
    Blog: '✍️',
    Guide: '📖',
    'Current Affairs': '📰',
  };
  
  const typeLabel: Record<string, string> = {
    exam: 'Exam',
    blog: 'Blog',
    guide: 'Guide',
    'current-affairs': 'News',
  };
  
  const typeBadgeClass: Record<string, string> = {
    exam: 'bg-primary-100 text-primary-600',
    blog: 'bg-orange-100 text-orange-600',
    guide: 'bg-emerald-100 text-emerald-600',
    'current-affairs': 'bg-purple-100 text-purple-600',
  };

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={openSearch}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-surface-200 bg-surface-50 text-surface-500 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 text-sm"
        aria-label="Search exams and articles"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search exams...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs border border-surface-300 bg-white text-surface-400 font-mono">
          Ctrl+K
        </kbd>
      </button>

      {/* Overlay + Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-12 sm:pt-20 px-4">
          {/* Backdrop — tapping it closes search */}
          <div className="absolute inset-0 bg-surface-900/50 backdrop-blur-sm" onClick={closeSearch} />

          {/* Search panel */}
          <div
            ref={containerRef}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-surface-200 overflow-hidden"
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-surface-100">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search exams, guides, blog, current affairs..."
                className="flex-1 text-sm text-surface-800 placeholder-surface-400 outline-none bg-transparent"
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-surface-400 hover:text-surface-600 p-0.5 rounded"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {/* Close button — X icon on mobile, "Esc" label on desktop */}
              <button
                onClick={closeSearch}
                className="flex-shrink-0 flex items-center justify-center text-surface-400 border border-surface-200 rounded hover:bg-surface-100 transition-colors"
                aria-label="Close search"
              >
                <span className="sm:hidden p-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="hidden sm:inline text-xs px-2 py-1 font-mono">Esc</span>
              </button>
            </div>

            {/* Results */}
            {query.trim() && (
              <div className="max-h-80 overflow-y-auto">
                {results.length > 0 ? (
                  <ul className="py-2">
                    {results.map((result, i) => (
                      <li key={result.href}>
                        <Link
                          href={result.href}
                          onClick={closeSearch}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                            i === highlighted ? 'bg-primary-50' : 'hover:bg-surface-50'
                          }`}
                          onMouseEnter={() => setHighlighted(i)}
                        >
                          <span className="text-xl flex-shrink-0 w-7 text-center">
                            {categoryIcon[result.category] ?? '📄'}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-surface-800 truncate">
                              {highlight(result.title, query)}
                            </p>
                            <p className="text-xs text-surface-400 truncate">
                              {highlight(result.subtitle, query)}
                            </p>
                          </div>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium ${
                              typeBadgeClass[result.type] || 'bg-surface-100 text-surface-600'
                            }`}
                          >
                            {typeLabel[result.type] || result.type}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-10 text-center px-4">
                    <p className="text-sm text-surface-500">No results found for &ldquo;{query}&rdquo;</p>
                    
                    {/* "Did you mean?" suggestion */}
                    {suggestion && (
                      <button
                        onClick={() => setQuery(suggestion)}
                        className="mt-2 text-sm text-primary-600 hover:underline"
                      >
                        Did you mean <span className="font-semibold">&ldquo;{suggestion}&rdquo;</span>?
                      </button>
                    )}
                    
                    <Link
                      href={`/exams?q=${encodeURIComponent(query)}`}
                      onClick={closeSearch}
                      className="inline-block mt-3 text-xs text-primary-600 hover:underline"
                    >
                      Browse all exams →
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Empty state: show popular categories */}
            {!query.trim() && (
              <div className="p-4">
                <p className="text-xs text-surface-400 uppercase font-semibold tracking-wider mb-3">Popular Categories</p>
                <div className="flex flex-wrap gap-2">
                  {['UPSC', 'SSC', 'Banking', 'Railway', 'Defence', 'Police', 'Teaching', 'State PSC'].map((cat) => (
                    <Link
                      key={cat}
                      href={`/exams?category=${encodeURIComponent(cat)}`}
                      onClick={closeSearch}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100 text-surface-600 hover:bg-primary-50 hover:text-primary-600 text-xs font-medium transition-colors"
                    >
                      <span>{categoryIcon[cat]}</span> {cat}
                    </Link>
                  ))}
                </div>
                
                {/* Quick search suggestions */}
                <p className="text-xs text-surface-400 uppercase font-semibold tracking-wider mt-4 mb-2">Try searching</p>
                <div className="flex flex-wrap gap-2">
                  {['bank po', 'police exam', 'railway', 'teacher exam', 'current affairs'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-lg border border-surface-200 text-surface-500 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-300 text-xs font-medium transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer hint — keyboard hints on desktop, close button on mobile */}
            <div className="px-4 py-2 border-t border-surface-100 bg-surface-50 flex items-center gap-3 text-xs text-surface-400">
              <span className="hidden sm:inline">↑↓ navigate</span>
              <span className="hidden sm:inline">↵ open</span>
              <span className="hidden sm:inline">Esc close</span>
              <button onClick={closeSearch} className="sm:hidden text-primary-500 font-medium py-1">✕ Close search</button>
              <span className="ml-auto text-surface-300">Smart Search</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

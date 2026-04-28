'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { allExams } from '@/lib/exams-data';
import { blogPosts } from '@/lib/blog-data';

interface SearchResult {
  type: 'exam' | 'blog';
  title: string;
  subtitle: string;
  href: string;
  category: string;
}

function buildSearchIndex(): SearchResult[] {
  const examResults: SearchResult[] = allExams.map((exam) => ({
    type: 'exam',
    title: exam.name,
    subtitle: exam.conductingBody,
    href: `/exams/${exam.slug}`,
    category: exam.category,
  }));

  const blogResults: SearchResult[] = blogPosts.map((post) => ({
    type: 'blog',
    title: post.title,
    subtitle: post.category,
    href: `/blog/${post.slug}`,
    category: 'Blog',
  }));

  return [...examResults, ...blogResults];
}

const searchIndex = buildSearchIndex();

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-primary-100 text-primary-700 rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function UniversalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setHighlighted(0);
      return;
    }
    const q = query.toLowerCase().trim();
    const matched = searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
    setResults(matched);
    setHighlighted(0);
  }, [query]);

  // Open/close helpers
  const openSearch = useCallback(() => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
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

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, closeSearch]);

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
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-surface-900/50 backdrop-blur-sm" />

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
                placeholder="Search UPSC, Banking, SSC, Railway..."
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
              <button
                onClick={closeSearch}
                className="text-xs text-surface-400 border border-surface-200 rounded px-2 py-1 hover:bg-surface-100 font-mono"
              >
                Esc
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
                              result.type === 'exam'
                                ? 'bg-primary-100 text-primary-600'
                                : 'bg-orange-100 text-orange-600'
                            }`}
                          >
                            {result.type === 'exam' ? 'Exam' : 'Blog'}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-10 text-center">
                    <p className="text-sm text-surface-500">No results found for &ldquo;{query}&rdquo;</p>
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
              </div>
            )}

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-surface-100 bg-surface-50 flex items-center gap-3 text-xs text-surface-400">
              <span>↑↓ navigate</span>
              <span>↵ open</span>
              <span>Esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

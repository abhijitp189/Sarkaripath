'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GoogleTranslate from './GoogleTranslate';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close menu when tapping outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-surface-100 transition-colors"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? (
          <svg className="w-6 h-6 text-surface-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-surface-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay backdrop */}
      {open && (
        <div className="fixed inset-0 bg-surface-900/40 z-40" style={{ top: '56px' }} onClick={() => setOpen(false)} />
      )}

      {/* Menu panel */}
      {open && (
        <div
          className="fixed right-0 left-0 z-50 bg-white border-t border-surface-200 shadow-xl overflow-y-auto"
          style={{ top: '56px', maxHeight: 'calc(100vh - 56px)' }}
        >
          {/* Language selector - prominent on mobile */}
          <div className="px-4 py-3 bg-primary-50 border-b border-primary-100">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">Select Language</span>
            </div>
            <div className="mt-2">
              <GoogleTranslate />
            </div>
          </div>

          {/* Navigation links */}
          <nav className="py-2">
            <MobileNavItem href="/exams" icon="🏛️" label="All Exams" onClick={() => setOpen(false)} />
            <MobileNavItem href="/current-affairs" icon="📰" label="Current Affairs" onClick={() => setOpen(false)} />
            <MobileNavItem href="/blog" icon="✍️" label="Blog" onClick={() => setOpen(false)} />
            <div className="my-1 mx-4 border-t border-surface-100" />
            <MobileNavItem href="/guides" icon="📖" label="Guides" onClick={() => setOpen(false)} />
            <MobileNavItem href="/exam-calendar" icon="📅" label="Exam Calendar" onClick={() => setOpen(false)} />
            <MobileNavItem href="/resources" icon="📚" label="Resources" onClick={() => setOpen(false)} />
          </nav>

          {/* Eligibility Checker CTA */}
          <div className="px-4 py-3 border-t border-surface-100">
            <Link
              href="/tools/eligibility-checker"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-accent-500 text-white font-heading font-semibold rounded-xl hover:bg-accent-600 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Check Your Eligibility
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ href, icon, label, onClick }: { href: string; icon: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3.5 text-surface-700 hover:bg-primary-50 hover:text-primary-600 transition-colors active:bg-primary-100"
    >
      <span className="text-lg leading-none w-6 text-center">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}

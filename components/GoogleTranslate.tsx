'use client';

import { useState, useCallback } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; layout: number; autoDisplay: boolean },
          elementId: string
        ) => void;
        InlineLayout: { SIMPLE: number };
      };
    };
  }
}

export default function GoogleTranslate() {
  const [loaded, setLoaded] = useState(false);

  const loadTranslate = useCallback(() => {
    if (loaded) return;
    setLoaded(true);

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,bn,te,mr,ta,gu,kn,ml,pa,ur,or,as',
            layout: window.google.translate.InlineLayout?.SIMPLE ?? 1,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit?.();
    }
  }, [loaded]);

  return (
    <div className="flex items-center">
      {!loaded && (
        <button
          onClick={loadTranslate}
          className="flex items-center gap-1 text-surface-400 hover:text-primary-500 transition-colors px-2 py-1.5 rounded-lg hover:bg-primary-50"
          title="Translate page"
          aria-label="Translate page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
          <span className="text-xs font-medium inline">Translate</span>
        </button>
      )}
      <div id="google_translate_element" className="translate-widget" />
    </div>
  );
}

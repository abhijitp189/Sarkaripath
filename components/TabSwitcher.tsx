'use client';

import { useState } from 'react';
import QuickChecker from '@/components/QuickChecker';
import EligibilityChecker from '@/components/EligibilityChecker';

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState<'quick' | 'deep'>('quick');

  return (
    <div className="max-w-3xl">
      {/* Tab buttons */}
      <div className="flex gap-2 p-1.5 bg-surface-100 rounded-2xl mb-6 w-full sm:w-auto sm:inline-flex">
        <button
          onClick={() => setActiveTab('quick')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-200 ${
            activeTab === 'quick'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-surface-500 hover:text-surface-700'
          }`}
        >
          <span className="text-base">⚡</span>
          <div className="text-left">
            <div>Quick Check</div>
            <div className="text-xs font-normal text-surface-400">All 100 exams · 10 seconds</div>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('deep')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-200 ${
            activeTab === 'deep'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-surface-500 hover:text-surface-700'
          }`}
        >
          <span className="text-base">🔍</span>
          <div className="text-left">
            <div>Deep Check</div>
            <div className="text-xs font-normal text-surface-400">5 major exams · full rules</div>
          </div>
        </button>
      </div>

      {/* Tab description banner */}
      {activeTab === 'quick' ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3 mb-6 text-sm text-emerald-800">
          <strong>⚡ Quick Check (2026):</strong> Enter your date of birth, category, and qualification to instantly see which of the 100 government exams you are eligible for. Covers UPSC, SSC, Banking, Railway, Defence, State PSC, Teaching, and Police exams.
        </div>
      ) : (
        <div className="bg-primary-50 border border-primary-200 rounded-xl px-5 py-3 mb-6 text-sm text-primary-800">
          <strong>🔍 Deep Check (2026):</strong> Detailed eligibility breakdown for UPSC IAS, SSC CGL, IBPS PO, SBI PO, and RRB NTPC — including attempt counts, domicile rules, graduation status rules, physical standards, and 2026 salary figures.
        </div>
      )}

      {/* Tab content */}
      <div>
        {activeTab === 'quick' ? <QuickChecker /> : <EligibilityChecker />}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';

// ── 1. Cycling exam name text ────────────────────────────────────────────────
const examNames = [
  'UPSC IAS',
  'SSC CGL',
  'Banking Exams',
  'Railway Jobs',
  'State PSC Exams',
  'Defence Jobs',
  'Teaching Jobs',
  'Police Exams',
];

export function AnimatedExamText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out + slide up
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % examNames.length);
        // Fade in + slide down
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="text-accent-300 inline-block min-w-0"
      style={{
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(-14px)',
        willChange: 'opacity, transform',
      }}
    >
      {examNames[index]}
    </span>
  );
}

// ── 2. Counting stats ────────────────────────────────────────────────────────
interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { target: 100, suffix: '',  label: 'Exams Covered'  },
  { target: 200, suffix: '+', label: 'Free Resources' },
  { target: 28,  suffix: '+', label: 'States'         },
  { target: 0,   suffix: '',  label: 'Cost to You'    },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function CountingStats() {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const DURATION = 1600; // ms
    const DELAY    = 400;  // ms before counting starts

    const timeout = setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        const eased    = easeOutCubic(progress);

        setCounts(STATS.map((s) => Math.round(s.target * eased)));

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, DELAY);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
        >
          <div className="text-2xl sm:text-3xl font-heading font-bold">
            {counts[i]}{stat.suffix}
          </div>
          <div className="text-sm text-primary-200 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

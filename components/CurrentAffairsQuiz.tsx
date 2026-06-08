'use client';

import { useState, useEffect, useCallback } from 'react';
import type { QuizQuestion } from '@/lib/current-affairs-data';
import { categoryTheme } from '@/lib/current-affairs-theme';

interface Props {
  questions: QuizQuestion[];
  slug: string;
}

const difficultyColors = {
  easy: 'bg-emerald-100 text-emerald-700',
  medium: 'bg-amber-100 text-amber-700',
  hard: 'bg-red-100 text-red-700',
};

export default function CurrentAffairsQuiz({ questions, slug }: Props) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Timer only runs after quiz is started and until results are shown
  useEffect(() => {
    if (!quizStarted || showResult) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [quizStarted, startTime, showResult]);

  const handleStartQuiz = useCallback(() => {
    setStartTime(Date.now());
    setQuizStarted(true);
  }, []);

  const q = questions[current];
  const answered = answers[current] !== null;
  const correctCount = answers.filter((a, i) => a === questions[i].correctIndex).length;
  const pct = Math.round((correctCount / questions.length) * 100);

  const handleSelect = useCallback((optionIndex: number) => {
    if (answered) return;
    const newAnswers = [...answers];
    newAnswers[current] = optionIndex;
    setAnswers(newAnswers);
  }, [answered, answers, current]);

  const handleNext = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
      const finalPct = Math.round((answers.filter((a, i) => a === questions[i].correctIndex).length / questions.length) * 100);
      if (finalPct >= 90) setShowConfetti(true);
    }
  }, [current, questions.length, answers, questions]);

  const handleSkip = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  }, [current, questions.length]);

  const handleRetake = useCallback(() => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setReviewMode(false);
    setStartTime(Date.now());
    setElapsed(0);
    setShowConfetti(false);
    // quizStarted stays true — no need to show intro again
  }, [questions.length]);

  const handleCopyScore = useCallback(() => {
    const text = `I scored ${correctCount}/${questions.length} on TaiyarHo's Weekly Current Affairs Quiz! Try it: https://www.taiyarho.in/current-affairs/${slug}/`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [correctCount, questions.length, slug]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}m ${secs}s`;
  };

  const wrongQuestions = questions.filter((_, i) => answers[i] !== null && answers[i] !== questions[i].correctIndex);

  // Category breakdown
  const categoryBreakdown = () => {
    const cats: Record<string, { correct: number; total: number }> = {};
    questions.forEach((q, i) => {
      if (!cats[q.category]) cats[q.category] = { correct: 0, total: 0 };
      cats[q.category].total++;
      if (answers[i] === q.correctIndex) cats[q.category].correct++;
    });
    return Object.entries(cats).sort((a, b) => b[1].total - a[1].total);
  };

  // ── START SCREEN ────────────────────────────────────────────────────
  if (!quizStarted) {
    const diffCounts = { easy: 0, medium: 0, hard: 0 };
    questions.forEach((q) => { diffCounts[q.difficulty]++; });
    const catSet = new Set(questions.map((q) => q.category));

    return (
      <div className="bg-white rounded-2xl border border-surface-200 p-6 sm:p-8 shadow-sm text-center">
        <div className="text-5xl mb-4">🧠</div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-surface-900 mb-2">
          Ready to Test Yourself?
        </h3>
        <p className="text-surface-500 text-sm mb-6 max-w-md mx-auto">
          {questions.length} questions covering {catSet.size} categories. Read each question carefully, select your answer, and see instant feedback with explanations.
        </p>

        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          {diffCounts.easy > 0 && (
            <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${difficultyColors.easy}`}>
              {diffCounts.easy} Easy
            </span>
          )}
          {diffCounts.medium > 0 && (
            <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${difficultyColors.medium}`}>
              {diffCounts.medium} Medium
            </span>
          )}
          {diffCounts.hard > 0 && (
            <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${difficultyColors.hard}`}>
              {diffCounts.hard} Hard
            </span>
          )}
        </div>

        <button
          onClick={handleStartQuiz}
          className="btn-primary text-base min-h-[48px] px-8 inline-flex items-center gap-2"
          aria-label="Start quiz"
        >
          Start Quiz →
        </button>

        <p className="text-xs text-surface-400 mt-4">
          Timer starts when you click the button
        </p>
      </div>
    );
  }

  // ── REVIEW MODE ──────────────────────────────────────────────────────
  if (reviewMode) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setReviewMode(false)}
          className="btn-outline text-sm inline-flex items-center gap-1.5"
          aria-label="Back to results"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Results
        </button>

        {wrongQuestions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-emerald-200 p-8 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="font-heading font-bold text-xl text-emerald-800 mb-2">Perfect Score!</h3>
            <p className="text-surface-600">You answered every question correctly. Nothing to review!</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-surface-500">Reviewing {wrongQuestions.length} incorrect answer{wrongQuestions.length !== 1 ? 's' : ''}</p>
            {wrongQuestions.map((q) => {
              const qIndex = questions.indexOf(q);
              const userAnswer = answers[qIndex];
              const theme = categoryTheme[q.category] ?? categoryTheme.misc;
              return (
                <div key={q.id} className="bg-white rounded-2xl border border-surface-200 p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${theme.badgeClass}`}>
                      {theme.emoji} {theme.label}
                    </span>
                    <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${difficultyColors[q.difficulty]}`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="font-heading font-semibold text-surface-900 mb-4 whitespace-pre-line">{q.question}</p>
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, oi) => {
                      const isCorrect = oi === q.correctIndex;
                      const isUserWrong = oi === userAnswer && !isCorrect;
                      return (
                        <div
                          key={oi}
                          className={`flex items-center gap-3 p-3 rounded-xl border-2 text-sm ${
                            isCorrect ? 'border-emerald-500 bg-emerald-50' : isUserWrong ? 'border-red-500 bg-red-50' : 'border-surface-200 opacity-60'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                            isCorrect ? 'bg-emerald-500 text-white' : isUserWrong ? 'bg-red-500 text-white' : 'bg-surface-100 text-surface-500'
                          }`}>
                            {isCorrect ? '✓' : isUserWrong ? '✗' : ['A', 'B', 'C', 'D'][oi]}
                          </span>
                          <span className={isCorrect ? 'text-emerald-800 font-medium' : isUserWrong ? 'text-red-800' : 'text-surface-600'}>
                            {opt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-surface-50 border-l-4 border-primary-500 rounded-r-xl p-4">
                    <p className="text-xs font-heading font-bold text-primary-800 mb-1">💡 Explanation</p>
                    <p className="text-sm text-surface-700 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }

  // ── RESULTS SCREEN ───────────────────────────────────────────────────
  if (showResult) {
    const badge = pct >= 90 ? { icon: '🏆', color: 'text-emerald-600 bg-emerald-50 border-emerald-300', label: 'Outstanding!', ring: 'border-emerald-500' }
      : pct >= 75 ? { icon: '🥈', color: 'text-primary-600 bg-primary-50 border-primary-300', label: 'Well Done!', ring: 'border-primary-500' }
      : pct >= 50 ? { icon: '🥉', color: 'text-amber-600 bg-amber-50 border-amber-300', label: 'Good Effort!', ring: 'border-amber-500' }
      : { icon: '💪', color: 'text-red-600 bg-red-50 border-red-300', label: 'Keep Going!', ring: 'border-red-500' };

    return (
      <div className="relative">
        {/* Confetti */}
        {showConfetti && (
          <div className="pointer-events-none" aria-hidden="true">
            {['🎉', '🏆', '⭐', '🎊', '✨', '🎉', '⭐', '🎊'].map((emoji, i) => (
              <span
                key={i}
                className="confetti-piece"
                style={{ left: `${10 + i * 12}%`, animationDelay: `${i * 0.3}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-surface-200 p-6 sm:p-8 shadow-sm text-center mb-6">
          {/* Score circle */}
          <div className={`w-32 h-32 rounded-full border-4 ${badge.ring} mx-auto flex flex-col items-center justify-center mb-4`}>
            <span className="text-3xl mb-1">{badge.icon}</span>
            <span className="text-2xl font-heading font-bold text-surface-900">{correctCount}/{questions.length}</span>
          </div>
          <p className="text-lg font-heading font-bold text-surface-900 mb-1">{badge.label}</p>
          <p className="text-surface-500 text-sm mb-2">You scored {pct}%</p>
          <p className="text-xs text-surface-400">Completed in {formatTime(elapsed)}</p>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm mb-6">
          <h3 className="font-heading font-bold text-surface-900 mb-4">Category Breakdown</h3>
          <div className="space-y-3">
            {categoryBreakdown().map(([cat, data]) => {
              const theme = categoryTheme[cat as keyof typeof categoryTheme] ?? categoryTheme.misc;
              const catPct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={cat}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-heading font-medium text-surface-700">
                      {theme.emoji} {theme.label}
                    </span>
                    <span className="text-xs text-surface-500">{data.correct}/{data.total}</span>
                  </div>
                  <div className="h-2.5 bg-surface-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${catPct >= 75 ? 'bg-emerald-500' : catPct >= 50 ? 'bg-amber-500' : 'bg-red-400'}`}
                      style={{ width: `${catPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Share */}
        <div className="bg-white rounded-2xl border border-surface-200 p-5 shadow-sm mb-6">
          <p className="text-sm text-surface-600 mb-3">Share your score with friends:</p>
          <button
            onClick={handleCopyScore}
            className="btn-outline text-sm w-full flex items-center justify-center gap-2"
            aria-label="Copy score to clipboard"
          >
            {copied ? (
              <>✅ Copied!</>
            ) : (
              <>📋 Copy Score to Clipboard</>
            )}
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setReviewMode(true)}
            className="btn-outline text-sm flex-1 min-h-[44px] flex items-center justify-center gap-2"
            aria-label="Review wrong answers"
          >
            🔍 Review Wrong Answers
          </button>
          <button
            onClick={handleRetake}
            className="btn-primary text-sm flex-1 min-h-[44px] flex items-center justify-center gap-2"
            aria-label="Retake quiz"
          >
            🔁 Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // ── QUIZ IN PROGRESS ─────────────────────────────────────────────────
  const progressPct = ((current + (answered ? 1 : 0)) / questions.length) * 100;
  const theme = categoryTheme[q.category] ?? categoryTheme.misc;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-heading font-medium text-surface-600">
            Question {current + 1} of {questions.length}
          </span>
          <span className="text-xs text-surface-400">{formatTime(elapsed)}</span>
        </div>
        <div className="h-2.5 bg-primary-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-surface-200 p-4 sm:p-6 shadow-sm mb-4">
        {/* Badges row */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded-full ${difficultyColors[q.difficulty]}`}>
            {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
          </span>
          <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${theme.badgeClass}`}>
            {theme.emoji} {theme.label}
          </span>
        </div>

        {/* Question */}
        <p className="text-base sm:text-lg font-heading font-semibold text-surface-900 mb-6 whitespace-pre-line leading-relaxed">
          {q.question}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, oi) => {
            const isSelected = answers[current] === oi;
            const isCorrect = oi === q.correctIndex;
            const showFeedback = answered;

            let btnClass = 'w-full text-left p-4 rounded-xl border-2 transition-all min-h-[44px] flex items-center gap-3 text-sm sm:text-base';

            if (!showFeedback) {
              btnClass += isSelected
                ? ' border-primary-500 bg-primary-50'
                : ' border-surface-200 hover:border-primary-300 hover:bg-primary-50';
            } else if (isCorrect) {
              btnClass += ' border-emerald-500 bg-emerald-50';
            } else if (isSelected && !isCorrect) {
              btnClass += ' border-red-500 bg-red-50';
            } else {
              btnClass += ' border-surface-200 opacity-60';
            }

            const letter = ['A', 'B', 'C', 'D'][oi];

            return (
              <button
                key={oi}
                onClick={() => handleSelect(oi)}
                disabled={answered}
                className={btnClass}
                aria-label={`Option ${letter}: ${opt}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading font-bold flex-shrink-0 ${
                  showFeedback && isCorrect ? 'bg-emerald-500 text-white'
                  : showFeedback && isSelected && !isCorrect ? 'bg-red-500 text-white'
                  : isSelected ? 'bg-primary-500 text-white'
                  : 'bg-surface-100 text-surface-500'
                }`}>
                  {showFeedback && isCorrect ? '✓' : showFeedback && isSelected && !isCorrect ? '✗' : letter}
                </span>
                <span className={
                  showFeedback && isCorrect ? 'text-emerald-800 font-medium'
                  : showFeedback && isSelected && !isCorrect ? 'text-red-800'
                  : 'text-surface-700'
                }>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation (revealed after selection) */}
        {answered && (
          <div className="animate-fade-in mt-5 bg-surface-50 border-l-4 border-primary-500 rounded-r-xl p-4">
            <p className="text-xs font-heading font-bold text-primary-800 mb-1">💡 Explanation</p>
            <p className="text-sm text-surface-700 leading-relaxed">{q.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {current < questions.length - 1 ? (
          <button
            onClick={handleSkip}
            className="text-sm text-surface-400 hover:text-surface-600 transition-colors min-h-[44px] px-4"
            aria-label="Skip question"
          >
            Skip →
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={handleNext}
          disabled={!answered}
          className={`btn-primary text-sm min-h-[44px] ${!answered ? 'opacity-40 cursor-not-allowed' : ''}`}
          aria-label={current === questions.length - 1 ? 'Submit quiz' : 'Next question'}
        >
          {current === questions.length - 1 ? 'Submit Quiz →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}

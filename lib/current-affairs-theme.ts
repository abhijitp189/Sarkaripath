export const categoryTheme = {
  national:      { emoji: '🏛️', label: 'National & Polity',  bgClass: 'bg-blue-50',    borderClass: 'border-blue-500',    textClass: 'text-blue-700',    badgeClass: 'bg-blue-100 text-blue-700' },
  international: { emoji: '🌐', label: 'International',       bgClass: 'bg-purple-50',  borderClass: 'border-purple-500',  textClass: 'text-purple-700',  badgeClass: 'bg-purple-100 text-purple-700' },
  economy:       { emoji: '💰', label: 'Economy & Banking',   bgClass: 'bg-emerald-50', borderClass: 'border-emerald-500', textClass: 'text-emerald-700', badgeClass: 'bg-emerald-100 text-emerald-700' },
  science:       { emoji: '🚀', label: 'Science & Tech',      bgClass: 'bg-cyan-50',    borderClass: 'border-cyan-500',    textClass: 'text-cyan-700',    badgeClass: 'bg-cyan-100 text-cyan-700' },
  defence:       { emoji: '🛡️', label: 'Defence',             bgClass: 'bg-red-50',     borderClass: 'border-red-500',     textClass: 'text-red-700',     badgeClass: 'bg-red-100 text-red-700' },
  environment:   { emoji: '🌳', label: 'Environment',         bgClass: 'bg-green-50',   borderClass: 'border-green-500',   textClass: 'text-green-700',   badgeClass: 'bg-green-100 text-green-700' },
  sports:        { emoji: '🏆', label: 'Sports',              bgClass: 'bg-orange-50',  borderClass: 'border-orange-500',  textClass: 'text-orange-700',  badgeClass: 'bg-orange-100 text-orange-700' },
  awards:        { emoji: '🎖️', label: 'Awards & Honours',    bgClass: 'bg-amber-50',   borderClass: 'border-amber-500',   textClass: 'text-amber-700',   badgeClass: 'bg-amber-100 text-amber-700' },
  appointments:  { emoji: '👤', label: 'Appointments',        bgClass: 'bg-indigo-50',  borderClass: 'border-indigo-500',  textClass: 'text-indigo-700',  badgeClass: 'bg-indigo-100 text-indigo-700' },
  reports:       { emoji: '📊', label: 'Reports & Indices',   bgClass: 'bg-pink-50',    borderClass: 'border-pink-500',    textClass: 'text-pink-700',    badgeClass: 'bg-pink-100 text-pink-700' },
  books:         { emoji: '📚', label: 'Books & Authors',     bgClass: 'bg-violet-50',  borderClass: 'border-violet-500',  textClass: 'text-violet-700',  badgeClass: 'bg-violet-100 text-violet-700' },
  days:          { emoji: '📅', label: 'Important Days',      bgClass: 'bg-yellow-50',  borderClass: 'border-yellow-500',  textClass: 'text-yellow-700',  badgeClass: 'bg-yellow-100 text-yellow-700' },
  obituaries:    { emoji: '🕊️', label: 'Obituaries',          bgClass: 'bg-slate-50',   borderClass: 'border-slate-500',   textClass: 'text-slate-700',   badgeClass: 'bg-slate-100 text-slate-700' },
  summits:       { emoji: '🤝', label: 'Summits & MoUs',      bgClass: 'bg-teal-50',    borderClass: 'border-teal-500',    textClass: 'text-teal-700',    badgeClass: 'bg-teal-100 text-teal-700' },
  misc:          { emoji: '📌', label: 'General',             bgClass: 'bg-surface-50', borderClass: 'border-surface-500', textClass: 'text-surface-700', badgeClass: 'bg-surface-100 text-surface-700' },
} as const;

export type NewsCategory = keyof typeof categoryTheme;

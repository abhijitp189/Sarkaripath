import type { StaticGkLink } from '@/lib/current-affairs-data';

interface Props {
  links: StaticGkLink[];
}

export default function StaticGkBox({ links }: Props) {
  if (!links || links.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 my-10 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
      <h2 className="text-xl font-heading font-bold text-emerald-900 mb-1 flex items-center gap-2">
        <span>🧠</span> Static GK Refresher
      </h2>
      <p className="text-sm text-emerald-700 mb-5">
        Connect this week&apos;s news with evergreen facts that exams love
      </p>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-hidden rounded-xl border border-emerald-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-emerald-800 text-white">
              <th className="text-left py-3 px-4 font-heading font-semibold text-xs uppercase tracking-wide w-2/5">
                News Item
              </th>
              <th className="text-left py-3 px-4 font-heading font-semibold text-xs uppercase tracking-wide w-3/5">
                Static Fact to Remember
              </th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'}>
                <td className="py-3 px-4 font-heading font-semibold text-surface-800 text-sm border-r border-emerald-100">
                  {link.newsItem}
                </td>
                <td className="py-3 px-4 text-surface-700 leading-relaxed text-sm">
                  {link.staticFact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {links.map((link, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-emerald-200">
            <p className="font-heading font-semibold text-surface-800 text-sm mb-1">
              {link.newsItem}
            </p>
            <p className="text-xs text-surface-600 leading-relaxed">
              {link.staticFact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

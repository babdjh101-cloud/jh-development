import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useNavHistory } from '../context/NavigationHistoryContext';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  fallbackBackUrl?: string;
  backLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  fallbackBackUrl = '/projects',
  backLabel,
}) => {
  const { smartBack } = useNavHistory();
  const { t } = useLanguage();

  const handleSmartBack = () => {
    smartBack(fallbackBackUrl);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 px-4 sm:px-6 mb-6 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-slate-400">
        <Link
          to="/"
          className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          {t.breadcrumbs.home}
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Smart Back Action Button */}
      <button
        onClick={handleSmartBack}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
        <span>{backLabel || t.breadcrumbs.backToProjects}</span>
      </button>
    </div>
  );
};

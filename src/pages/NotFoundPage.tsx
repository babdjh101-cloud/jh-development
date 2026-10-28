import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Home, FolderKanban, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'পৃষ্ঠাটি পাওয়া যায়নি (404) | জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ'
        : 'Page Not Found (404) | J.H. Development Construction Ltd. (JHDCL)';
  }, [language]);

  return (
    <div className="pt-12 sm:pt-16 pb-20 bg-slate-950 min-h-screen flex items-center justify-center bg-blueprint-grid">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="relative inline-block">
          <div className="text-7xl sm:text-8xl font-extrabold text-slate-800 font-mono tracking-tighter">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-amber-400">
            <Compass className="w-12 h-12 animate-spin-slow" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {t.notFound.title}
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
          {t.notFound.desc}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Home className="w-4 h-4" />
            <span>{t.notFound.backHome}</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md transition-all"
          >
            <FolderKanban className="w-4 h-4 text-amber-400" />
            <span>{t.notFound.viewProjects}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

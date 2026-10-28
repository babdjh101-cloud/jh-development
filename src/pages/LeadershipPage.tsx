import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LeadershipSection } from '../components/LeadershipSection';
import { GitCommit, Layers, ShieldCheck, Users } from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'পরিচালনা পর্ষদ ও নেতৃত্ব | জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ'
        : 'Board of Directors & Leadership | J.H. Development Construction Ltd. (JHDCL)';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: t.breadcrumbs.leadership }]}
          fallbackBackUrl="/"
          backLabel={language === 'bn' ? 'মূলপাতায় ফিরে যান' : 'Back to Home'}
        />

        {/* Corporate Organogram Chart (from PDF Page 7) */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {language === 'bn' ? 'প্রাতিষ্ঠানিক অর্গানোগ্রাম (সাংগঠনিক কাঠামো)' : 'Corporate Governance Organogram'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
            {language === 'bn'
              ? 'কোম্পানির দালিলিক অর্গানোগ্রাম অনুসারে পরিচালনা পর্ষদ ও প্রশাসনিক কাঠামোর স্তরায়ন।'
              : 'Tiered governance hierarchy documented in JHDCL corporate profile (Page 7).'}
          </p>

          {/* Visual Organogram Tree */}
          <div className="max-w-3xl mx-auto space-y-4 text-center text-xs">
            {/* Level 1: Advisors */}
            <div className="inline-block px-5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-semibold shadow-md">
              Advisors / আন্তর্জাতিক উপদেষ্টা পর্ষদ
            </div>
            <div className="w-0.5 h-4 bg-amber-500/50 mx-auto" />

            {/* Level 2: Chairman */}
            <div className="inline-block px-6 py-3 rounded-lg bg-amber-500/10 border border-amber-500/40 text-amber-400 font-bold text-sm shadow-md">
              Chairman / চেয়ারম্যান
            </div>
            <div className="w-0.5 h-4 bg-amber-500/50 mx-auto" />

            {/* Level 3: Managing Director */}
            <div className="inline-block px-6 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white font-bold text-sm shadow-lg">
              Managing Director &amp; CEO / ব্যবস্থাপনা পরিচালক ও প্রধান নির্বাহী
            </div>
            <div className="w-0.5 h-6 bg-slate-700 mx-auto" />

            {/* Level 4: Dual Wings (Operations & Corporate Wings) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold block text-xs uppercase tracking-wider">
                  Corporate &amp; Finance Wing
                </span>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li>↓ Deputy Managing Director</li>
                  <li>↓ Finance Director (মোঃ আল-আমিন হাওলাদার)</li>
                  <li>↓ Sourcing Director</li>
                  <li>↓ Independence Director</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold block text-xs uppercase tracking-wider">
                  Operations &amp; Field Execution Wing
                </span>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  <li>↓ Additional Managing Director</li>
                  <li>↓ Operation Director &amp; Head (ইঞ্জিঃ শেখ সালাম জয়)</li>
                  <li>↓ Safety &amp; Security Director</li>
                  <li>↓ Executive Director &amp; Non-Executive Director</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadershipSection />
    </div>
  );
};

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FUTURE_PLANS_DATA, FuturePlanConcept } from '../data/futurePlans';
import {
  Sparkles,
  Building,
  TreePine,
  Globe2,
  ShieldAlert,
  ArrowRight,
  Layers,
  MapPin,
  Compass,
} from 'lucide-react';

export const FutureProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'ভবিষ্যৎ পরিকল্পনা ও মেগা উদ্যোগ | জেএইচডিসিএল'
        : 'Proposed Future Projects & Strategic Plans | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.projects, href: '/projects' },
            { label: language === 'bn' ? 'ভবিষ্যৎ পরিকল্পনা' : 'Proposed Future Plans' }
          ]}
          fallbackBackUrl="/projects"
          backLabel={language === 'bn' ? 'প্রকল্পসমূহে ফিরে যান' : 'Back to Projects'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Strategic Vision · 28 October 2026 Corporate Briefing
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'প্রস্তাবিত ভবিষ্যৎ পরিকল্পনা ও কৌশলগত মেগা উদ্যোগ'
              : 'Proposed Future Projects & Long-Term Strategic Initiatives'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল-এর দীর্ঘমেয়াদী মহাপরিকল্পনায় দেশের প্রতিটি উপজেলা ও জেলায় পরিকল্পিত টাউনশিপ, বাণিজ্যিক টাওয়ার এবং আন্তর্জাতিক অংশীদারিত্ব অন্তর্ভুক্ত।'
              : 'Documented directly from the JHDCL corporate strategic briefing dated 28 October 2026. These ambitious concepts outline the organization’s long-term master-planning vision for regional decentralization and sustainable urban growth.'}
          </p>
        </div>

        {/* Mandatory Transparency & Regulatory Feasibility Box */}
        <div className="p-6 rounded-xl bg-slate-900 border border-amber-500/30 mb-12 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
              {language === 'bn'
                ? 'আইনি ও সম্ভাব্যতা সংক্রান্ত প্রকাশনা নীতি'
                : 'Corporate Disclosure & Feasibility Governance'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'এই পৃষ্ঠায় প্রদর্শিত প্রকল্পসমূহ জেএইচডিসিএল-এর কর্পোরেট ব্রিফিংয়ে ঘোষিত ভবিষ্যৎ পরিকল্পনা ও কৌশলগত লক্ষ্যমাত্রা। প্রতিটি প্রকল্প সংশ্লিষ্ট এলাকা ও দেশের মাটি পরীক্ষা, পরিবেশগত ছাড়পত্র, জমি অধিগ্রহণ বা লিজ চুক্তি, সরকারি ও স্থানীয় কর্তৃপক্ষের অনুমোদন, যৌথ কনসোর্টিয়াম চুক্তি এবং অর্থায়ন নিশ্চিত হওয়া সাপেক্ষে পর্যায়ক্রমে বাস্তবায়নযোগ্য।'
                : 'All concepts presented on this page represent company-proposed forward-looking plans and strategic ambitions announced in the corporate briefing. Each concept is strictly subject to site soil investigation, environmental clearances, land acquisition or lease agreements, municipal/regulatory approvals, consortium agreements, and structured project financing.'}
            </p>
          </div>
        </div>

        {/* Future Plans List */}
        <div className="space-y-8 mb-16">
          {FUTURE_PLANS_DATA.map((plan, index) => (
            <div
              key={plan.id}
              className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl card-3d"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-4 max-w-3xl">
                  {/* Category & Volume */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-mono text-amber-400 font-semibold">
                      Concept #{index + 1}
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-300 font-medium">
                      {language === 'bn' ? plan.categoryBn : plan.categoryEn}
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="text-amber-400 font-mono">
                      {plan.statedVolume}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {language === 'bn' ? plan.titleBn : plan.titleEn}
                  </h2>

                  {/* Stated Scope */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200">
                    <span className="text-amber-400 font-semibold block text-xs mb-0.5">
                      {language === 'bn' ? 'ব্রিফিংয়ে ঘোষিত পরিধি:' : 'Scope from Corporate Briefing:'}
                    </span>
                    <span>{language === 'bn' ? plan.scopeStatedBn : plan.scopeStatedEn}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {language === 'bn' ? plan.planningDescriptionBn : plan.planningDescriptionEn}
                  </p>

                  {/* Feasibility Disclaimer */}
                  <div className="text-[11px] font-mono text-slate-400 border-l-2 border-amber-400/50 pl-3 py-0.5">
                    <span className="text-amber-400/90 font-semibold block">Feasibility Note:</span>
                    <span>{language === 'bn' ? plan.disclaimerBn : plan.disclaimerEn}</span>
                  </div>
                </div>

                {/* Right Action Box */}
                <div className="lg:w-72 shrink-0 p-5 rounded-lg bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-xs">
                    <span className="text-slate-400 block uppercase font-mono text-[10px]">
                      Partnership Status
                    </span>
                    <span className="text-white font-medium block">
                      Open for Joint Venture & Technical Consortium
                    </span>
                    <p className="text-slate-400 text-[11px]">
                      Institutional investors and landowners can propose joint development structures.
                    </p>
                  </div>

                  <Link
                    to="/connect-with-us"
                    className="w-full py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold rounded text-xs text-center transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss Partnership</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Roadmap Link */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">
              {language === 'bn'
                ? '৫ বছর ও ১০ বছর মেয়াদী বিজনেস রোডম্যাপ দেখুন'
                : 'View the 5-Year & 10-Year Corporate Roadmap'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'bn'
                ? 'নিজস্ব প্রকল্প সুদৃঢ়করণ এবং আন্তর্জাতিক সম্প্রসারণের কৌশলগত রূপরেখা।'
                : 'Explore JHDCL’s structured phase-by-phase expansion model from domestic consolidation to global joint ventures.'}
            </p>
          </div>
          <Link
            to="/business-roadmap"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            {language === 'bn' ? 'রোডম্যাপ দেখুন' : 'Explore Strategic Roadmap'}
          </Link>
        </div>

      </div>
    </div>
  );
};

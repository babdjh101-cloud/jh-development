import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_CONFIG } from '../config/company';
import { Compass, Target, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export const VisionMissionPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'রূপকল্প ও লক্ষ্য (Vision & Mission) | জেএইচডিসিএল'
        : 'Vision & Mission Statements | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: language === 'bn' ? 'রূপকল্প ও লক্ষ্য' : 'Vision & Mission' }
          ]}
          fallbackBackUrl="/about"
          backLabel={language === 'bn' ? 'পরিচিতিতে ফিরে যান' : 'Back to About'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Corporate Philosophy &amp; Principles
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn' ? 'আমাদের রূপকল্প ও লক্ষ্যমাত্রা' : 'Our Corporate Vision & Mission'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {COMPANY_CONFIG.sloganEn} —{' '}
            <span className="italic text-amber-400">{COMPANY_CONFIG.sloganBn}</span>
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Vision */}
          <div className="p-8 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl card-3d flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {language === 'bn' ? 'আমাদের রূপকল্প (Our Vision)' : 'Our Corporate Vision'}
                </h2>
                <span className="text-[11px] font-mono text-slate-400">PDF Page 5</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {t.about.visionText}
              </p>
              <div className="pt-2 text-xs text-slate-400 italic">
                “Our vision materializes our road map. We are aimed at contributing to the economic, social &amp; environmental progress and prosperity of Bangladesh through optimum use of our resources applied in constant development of our value-added products and services.”
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-amber-400">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Optimum resource allocation &amp; sustainable engineering</span>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl card-3d flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {language === 'bn' ? 'আমাদের লক্ষ্য (Our Mission)' : 'Our Corporate Mission'}
                </h2>
                <span className="text-[11px] font-mono text-slate-400">PDF Page 5</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {t.about.missionText}
              </p>
              <div className="pt-2 text-xs text-slate-400 italic">
                “Our mission defines on our road map. We excel to develop and deliver value added goods and services to our esteemed customers, consistently outperform our peers, build enduring relationship with our business associates and stakeholders provide a dynamic and challenging environment for our employees and aim to achieve incremental growth of our business there by having a positive economic and social impact on the community and the nation.”
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-amber-400">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Positive community impact &amp; long-term stakeholder partnerships</span>
            </div>
          </div>

        </div>

        {/* Corporate Status Note (Section 4 Compliance) */}
        <div className="p-5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <FileCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-200 block mb-0.5">
              {language === 'bn' ? 'দালিলিক রোডম্যাপ ও নীতি অনুমোদন' : 'Documented Roadmap Status'}
            </strong>
            {language === 'bn'
              ? 'উপরোক্ত রূপকল্প ও লক্ষ্যমাত্রার মূল বক্তব্য জেএইচডিসিএল-এর অফিশিয়াল প্রোফাইল নথি (পৃষ্ঠা ৫) থেকে গৃহীত। পরিচালনা পর্ষদের আগামী সাধারণ সভায় চূড়ান্ত আনুষ্ঠানিক প্রস্তাবনা অনুমোদনের সাপেক্ষে এটি পরিচালিত হয়।'
              : 'The statements above reflect the official roadmap text documented on Page 5 of the company profile. Final formalized vision and mission declarations remain subject to ongoing board review and ratification.'}
          </div>
        </div>

      </div>
    </div>
  );
};

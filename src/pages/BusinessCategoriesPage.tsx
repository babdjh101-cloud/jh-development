import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CATEGORIES } from '../data/businessCategories';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

export const BusinessCategoriesPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? '৫টি মূল ট্রেড-লাইসেন্স ব্যবসায়িক খাত | জেএইচডিসিএল'
        : 'Five Core Trade-Licence Business Sectors | JHDCL';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: language === 'bn' ? 'ব্যবসায়িক খাতসমূহ' : 'Business Categories' }
          ]}
          fallbackBackUrl="/"
          backLabel={language === 'bn' ? 'মূলপাতায় ফিরে যান' : 'Back to Home'}
        />

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Corporate Operating Scope
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'ট্রেড-লাইসেন্স ও কর্পোরেট প্রোফাইলে উল্লেখিত ৫টি মূল ব্যবসায়িক খাত'
              : 'Five Core Trade-Licence Business Categories'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল-এর ব্যবসায়িক কার্যক্রমকে ৫টি প্রধান ধারায় বিন্যস্ত করা হয়েছে, যার মাধ্যমে সরকারি মেগা প্রকল্প, বেসরকারি শিল্প খাত ও আন্তর্জাতিক টেন্ডারে সমন্বিত সেবা প্রদান করা হয়।'
              : 'JHDCL structure encompasses five core trade-licence operational disciplines spanning general contracting, international raw materials import, land reclamation, residential green cities, and multidisciplinary consultancy.'}
          </p>
        </div>

        {/* 5 Categories Cards Grid */}
        <div className="space-y-8">
          {BUSINESS_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d flex flex-col lg:flex-row gap-8 items-start justify-between"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
                    {cat.number}.
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {language === 'bn' ? cat.titleBn : cat.titleEn}
                  </h2>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {language === 'bn' ? cat.summaryBn : cat.summaryEn}
                </p>

                {/* Key Services List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {language === 'bn' ? 'প্রধান সেবাসমূহ' : 'Key Services & Activities'}:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {(language === 'bn' ? cat.keyServicesBn : cat.keyServicesEn).map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Client Sectors */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-500 font-medium">
                    {language === 'bn' ? 'লক্ষ্যভুক্ত ক্লায়েন্ট:' : 'Target Clients:'}
                  </span>
                  {(language === 'bn' ? cat.targetSectorsBn : cat.targetSectorsEn).map((sec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] border border-slate-800"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="w-full lg:w-72 flex-shrink-0 flex flex-col justify-between space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-slate-800 aspect-[16/10] bg-slate-950">
                  <img
                    src={cat.image}
                    alt={cat.titleEn}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>

                <Link
                  to={cat.route}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>{language === 'bn' ? 'বিস্তারিত বিভাগ দেখুন' : 'Explore Dedicated Sector Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Disclaimer Notice */}
        <div className="mt-12 p-4 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            {language === 'bn'
              ? 'ট্রেড লাইসেন্স ও ব্যবসায়িক খাতের বিবরণ কোম্পানি প্রোফাইল নথি অনুযায়ী প্রকাশিত। নির্দিষ্ট টেন্ডার বা আন্তর্জাতিক কাজের ক্ষেত্রে প্রাসঙ্গিক প্রাতিষ্ঠানিক লাইসেন্স কপি যাচাই সাপেক্ষে সরবরাহযোগ্য।'
              : 'Business categories reflect corporate trade-licence scopes documented in corporate records. Specific project tenders and contracts are governed by verified statutory documentation available upon authorized request.'}
          </div>
        </div>

      </div>
    </div>
  );
};

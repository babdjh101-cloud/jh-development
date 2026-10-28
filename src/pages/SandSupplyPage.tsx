import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SAND_CATALOG, SandItem } from '../data/materials';
import { COMPANY_CONFIG } from '../config/company';
import {
  Layers,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  Building,
  Filter,
} from 'lucide-react';

export const SandSupplyPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'বালু ও মাটির পূর্ণাঙ্গ ক্যাটালগ (১৫ ক্যাটাগরি) | জেএইচডিসিএল'
        : 'Comprehensive Sand & Soil Catalog (15 Grades) | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  // Aggregate application tags for filtering
  const applicationOptions = useMemo(() => {
    const set = new Set<string>();
    SAND_CATALOG.forEach((item) => {
      item.applicationsEn.forEach((app) => set.add(app));
    });
    return Array.from(set);
  }, []);

  const filteredItems = useMemo(() => {
    return SAND_CATALOG.filter((item) => {
      const matchSearch =
        item.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nameBn.includes(searchTerm) ||
        item.applicationsEn.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.sourceOriginEn.toLowerCase().includes(searchTerm.toLowerCase());

      const matchApp =
        selectedApplication === 'all' ||
        item.applicationsEn.includes(selectedApplication);

      return matchSearch && matchApp;
    });
  }, [searchTerm, selectedApplication]);

  const createWhatsAppLink = (item: SandItem) => {
    const text = encodeURIComponent(
      `Hello JHDCL, I would like to inquire about bulk supply specifications and delivery rates for: ${item.nameEn} (${item.nameBn}).`
    );
    return `https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.services, href: '/services' },
            { label: language === 'bn' ? 'আমদানি ও সরবরাহ' : 'Supply & Materials', href: '/services/supply-import-export' },
            { label: language === 'bn' ? 'বালু ও মাটি ক্যাটালগ' : 'Sand & Soil Catalog' }
          ]}
          fallbackBackUrl="/services/supply-import-export"
          backLabel={language === 'bn' ? 'সরবরাহ বিভাগে ফিরে যান' : 'Back to Supply Division'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              15 Sand & Soil Grades · 12 Engineering Applications
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'বালু ও মাটি সরবরাহ ক্যাটালগ (সিভিল ও মেরিন গ্রেড)'
              : 'Sand & Soil Supply Catalog: Civil, Marine & Structural Grades'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'কোম্পানির টেকনিক্যাল নির্দেশিকা অনুযায়ী ১৫টি স্বতন্ত্র বালু ও মাটি ক্যাটাগরি, উৎস এবং ১২টি প্রকৌশল প্রয়োগের বিস্তারিত তালিকা।'
              : 'Categorized directly from JHDCL corporate technical briefing documentation covering 15 specialized sand & soil types mapped against 12 core engineering applications.'}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  language === 'bn'
                    ? 'বালুর নাম, প্রয়োগ বা উৎস দিয়ে খুঁজুন (যেমন: সিলেট, প্লাস্টার, ফিল)...'
                    : 'Search by sand name, application or origin (e.g., Sylhet, Plaster, Dredged)...'
                }
                className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="all">
                  {language === 'bn' ? 'সকল প্রয়োগ (All Applications)' : 'All Applications (12 Sectors)'}
                </option>
                {applicationOptions.map((app) => (
                  <option key={app} value={app}>
                    {app}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Counter */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing {filteredItems.length} of {SAND_CATALOG.length} verified sand/soil types
            </span>
            {(searchTerm || selectedApplication !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedApplication('all');
                }}
                className="text-amber-400 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Sand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 shadow-xl card-3d flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Title & Origin */}
                <div>
                  <div className="text-[11px] font-mono text-amber-400 mb-1 flex items-center gap-1.5">
                    <span>Origin:</span>
                    <span className="text-slate-300">
                      {language === 'bn' ? item.sourceOriginBn : item.sourceOriginEn}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {language === 'bn' ? item.nameBn : item.nameEn}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'bn' ? item.nameEn : item.nameBn}
                  </p>
                </div>

                {/* Grain description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'bn' ? item.grainDescriptionBn : item.grainDescriptionEn}
                </p>

                {/* Applications list */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Key Applications:
                  </span>
                  <div className="space-y-1">
                    {(language === 'bn' ? item.applicationsBn : item.applicationsEn).map(
                      (app, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{app}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Caution note if any */}
                {(item.cautionNoteEn || item.cautionNoteBn) && (
                  <div className="p-2.5 rounded bg-amber-950/20 border border-amber-500/30 text-[11px] text-amber-300 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      {language === 'bn' ? item.cautionNoteBn : item.cautionNoteEn}
                    </span>
                  </div>
                )}
              </div>

              {/* Inquiry Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Bulk delivery</span>
                <a
                  href={createWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stone Catalog Promotion */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Complementary Mineral Aggregates
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {language === 'bn'
                ? 'দুবাই গ্যাব্রো, ভারতীয় পাকুড় ও মধ্যপাড়া পাথর ক্যাটালগ'
                : 'Looking for Dubai Gabbro or Indian Pakur Stone Aggregates?'}
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              {language === 'bn'
                ? 'আমাদের পূর্ণাঙ্গ পাথর ও অ্যাগ্রিগেট ক্যাটালগ দেখুন যেখানে স্থানীয়, ভারতীয়, আমিরাত, ভুটানি এবং ইউরোপীয় পাথরের স্পেসিফিকেশন সংকলিত।'
                : 'Browse our complete stone aggregate catalog with laboratory grading, origin specifications, and marine shipping capacity.'}
            </p>
          </div>

          <Link
            to="/materials/stone-aggregate"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>{language === 'bn' ? 'পাথর ক্যাটালগ দেখুন' : 'View Stone Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

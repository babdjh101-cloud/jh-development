import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { STONE_CATALOG, StoneItem } from '../data/materials';
import { COMPANY_CONFIG } from '../config/company';
import {
  Globe2,
  Search,
  Filter,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  AlertCircle,
  Ship,
  Sparkles,
} from 'lucide-react';

export const StoneAggregatePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'পাথর ও অ্যাগ্রিগেট ক্যাটালগ | জেএইচডিসিএল'
        : 'Stone & Aggregate Supply Catalog | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const originTabs = [
    { key: 'all', labelEn: 'All Stones', labelBn: 'সকল পাথর' },
    { key: 'local', labelEn: 'Domestic / Bangladesh', labelBn: 'দেশীয় মধ্যপাড়া ও পাথর' },
    { key: 'dubai', labelEn: 'Dubai Gabbro (UAE)', labelBn: 'দুবাই গ্যাব্রো (আমিরাত)' },
    { key: 'indian', labelEn: 'Indian Pakur & Basalt', labelBn: 'ভারতীয় পাকুড় ও ব্যাসাল্ট' },
    { key: 'bhutan', labelEn: 'Bhutanese Granite', labelBn: 'ভুটানি গ্রানাইট ও সেবক' },
    { key: 'global', labelEn: 'European Luxury Stones', labelBn: 'ইউরোপীয় মার্বেল ও স্লেট' },
  ];

  const filteredItems = useMemo(() => {
    return STONE_CATALOG.filter((item) => {
      const matchSearch =
        item.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nameBn.includes(searchTerm) ||
        item.typeEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.commonUsesEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.originCountryEn.toLowerCase().includes(searchTerm.toLowerCase());

      const matchOrigin =
        selectedOrigin === 'all' || item.originCategory === selectedOrigin;

      return matchSearch && matchOrigin;
    });
  }, [searchTerm, selectedOrigin]);

  const createWhatsAppLink = (item: StoneItem) => {
    const text = encodeURIComponent(
      `Hello JHDCL, I would like to inquire about specifications, test reports, and supply quote for: ${item.nameEn} (${item.originCountryEn}).`
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
            { label: language === 'bn' ? 'পাথর ও অ্যাগ্রিগেট ক্যাটালগ' : 'Stone & Aggregate Catalog' }
          ]}
          fallbackBackUrl="/services/supply-import-export"
          backLabel={language === 'bn' ? 'সরবরাহ বিভাগে ফিরে যান' : 'Back to Supply Division'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Globe2 className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Domestic, Indian, Dubai & Global Heavy Aggregates
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'পাথর ও হার্ড রক অ্যাগ্রিগেট ক্যাটালগ'
              : 'Stone & Hard Rock Aggregates Supply Catalog'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'মেগা অবকাঠামো, আন্তর্জাতিক রানওয়ে, রেলপথ ও উচ্চ শক্তির আরসিসি ঢালাইয়ের জন্য মধ্যপাড়া, দুবাই গ্যাব্রো, ভারতীয় পাকুড় এবং ভুটানি পাথরের সুনির্দিষ্ট তালিকা।'
              : 'Structured directly from corporate briefing data covering Madhyapara hard rock, imported Dubai Fujairah Gabbro (10-20mm & 20-40mm), Indian Pakur black stone, Bhutanese granite, and European architectural marbles.'}
          </p>
        </div>

        {/* Origin Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {originTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedOrigin(tab.key)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedOrigin === tab.key
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {language === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 shadow-xl mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                language === 'bn'
                  ? 'পাথরের নাম, দেশ বা ব্যবহার দিয়ে খুঁজুন (যেমন: গ্যাব্রো, পাকুড়, রানওয়ে, মার্বেল)...'
                  : 'Search stone by name, rock type, country, or use (e.g., Gabbro, Pakur, Ballast, Runway)...'
              }
              className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing {filteredItems.length} of {STONE_CATALOG.length} stone aggregate grades
            </span>
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="text-amber-400 hover:underline">
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Stone Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 shadow-xl card-3d flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Country of Origin & Category */}
                <div>
                  <div className="text-[11px] font-mono text-amber-400 mb-1 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{language === 'bn' ? item.originCountryBn : item.originCountryEn}</span>
                  </div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {language === 'bn' ? item.nameBn : item.nameEn}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'bn' ? item.nameEn : item.nameBn}
                  </p>
                </div>

                {/* Rock Classification */}
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Petrographic Rock Type
                  </span>
                  <span className="text-white font-medium">
                    {language === 'bn' ? item.typeBn : item.typeEn}
                  </span>
                </div>

                {/* Common Structural Uses */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Primary Engineering Applications:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'bn' ? item.commonUsesBn : item.commonUsesEn}
                  </p>
                </div>

                {/* Specification Note */}
                {(item.specificationNoteEn || item.specificationNoteBn) && (
                  <div className="p-2.5 rounded bg-slate-800/40 border border-slate-700/60 text-[11px] text-slate-300 flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                      {language === 'bn'
                        ? item.specificationNoteBn
                        : item.specificationNoteEn}
                    </span>
                  </div>
                )}
              </div>

              {/* Inquiry Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Mother vessel / barge</span>
                <a
                  href={createWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sand Catalog Promotion */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Complementary River & Structural Sand
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {language === 'bn'
                ? 'সিলেট সিলেকশন বালু ও হাইড্রোলিক ফিল বালু প্রয়োজন?'
                : 'Need Sylhet Selection Sand or Dredged Fill Sand?'}
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              {language === 'bn'
                ? 'সিলেট এফএম ২.৫–৩.০ সিলেকশন বালু এবং নদী ভরাট বালুর বিস্তারিত ক্যাটালগ দেখুন।'
                : 'View our dedicated sand supply catalog covering 15 classified sand and soil types for masonry, plaster, concrete, and hydraulic filling.'}
            </p>
          </div>

          <Link
            to="/materials/sand"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>{language === 'bn' ? 'বালু ক্যাটালগ দেখুন' : 'View Sand Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

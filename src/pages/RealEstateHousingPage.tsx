import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Building2,
  TreePine,
  Layers,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  ShoppingBag,
  Home,
  CheckCircle2,
} from 'lucide-react';

export const RealEstateHousingPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'রিয়েল এস্টেট ও গ্রিন সিটি আবাসন | জেএইচডিসিএল'
        : 'Real Estate & Green City Housing | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const developmentPillars = [
    {
      titleEn: "Modern Residential Living",
      titleBn: "আধুনিক আবাসিক আবাসন ও অ্যাপার্টমেন্ট",
      descEn: "Earthquake-resistant multi-storey residential complexes engineered with natural light corridors, basement parking, green rooftop zones, and international standard finishes.",
      descBn: "ভূমিকম্প সহনশীল আধুনিক বহুতল আবাসিক ভবন, যেখানে প্রাকৃতিক আলো-বাতাস, বেসমেন্ট কার পার্কিং ও রুফটপ গার্ডেনিং নিশ্চিত করা হয়।",
      icon: Home,
    },
    {
      titleEn: "Commercial Mega Malls & Retail Hubs",
      titleBn: "বাণিজ্যিক মেগা মল ও রিটেল কমপ্লেক্স",
      descEn: "High-footfall commercial shopping centers featuring expansive atrium designs, centralized HVAC provision, escalators, and flexible corporate office levels.",
      descBn: "সেন্ট্রালাইজড এয়ার কন্ডিশনিং, এসকেলেটর ও আধুনিক পার্কিং সুবিধাযুক্ত বহুতল শপিং মল ও করপোরেট অফিস টাওয়ার।",
      icon: ShoppingBag,
    },
    {
      titleEn: "Community Centers & Civic Spaces",
      titleBn: "কমিউনিটি সেন্টার ও সামাজিক মিলনকেন্দ্র",
      descEn: "Multi-purpose public gathering facilities designed for civic conventions, family celebrations, banquets, and regional administrative gatherings.",
      descBn: "উপজেলা ও জেলা পর্যায়ে সামাজিক সমাবেশ, পারিবারিক অনুষ্ঠান ও কনভেনশন আয়োজনের জন্য পরিকল্পিত কমিউনিটি সেন্টার।",
      icon: Building2,
    },
    {
      titleEn: "Integrated Green City Planning",
      titleBn: "পরিকল্পিত পরিবেশবান্ধব গ্রিন সিটি উপশহর",
      descEn: "Sustainable suburban townships designed with wide paved road grids, underground cabling, centralized stormwater drainage, and dedicated eco-parks.",
      descBn: "প্রশস্ত রাস্তা, আন্ডারগ্রাউন্ড ইউটিলিটি, টেকসই ড্রেনেজ ব্যবস্থা এবং লেক ও খেলার মাঠ সম্বলিত স্বয়ংসম্পূর্ণ আধুনিক উপশহর।",
      icon: TreePine,
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.services, href: '/services' },
            { label: language === 'bn' ? 'রিয়েল এস্টেট ও আবাসন' : 'Real Estate & Housing' }
          ]}
          fallbackBackUrl="/services"
          backLabel={language === 'bn' ? 'সেবাসমূহে ফিরে যান' : 'Back to Services'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Business Category 04 · Trade License
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'রিয়েল এস্টেট, বাণিজ্যিক কমপ্লেক্স ও গ্রিন সিটি আবাসন'
              : 'Real Estate, Commercial Complexes & Green City Living'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল টেকসই নির্মাণ কৌশল, নান্দনিক স্থাপত্য নকশা এবং পরিবেশবান্ধব নগর ভাবনার সমন্বয়ে আধুনিক আবাসিক ও বাণিজ্যিক প্রকল্প বাস্তবায়ন করে।'
              : 'JHDCL merges structural civil engineering with forward-thinking urban master-planning, developing high-specification residential towers, commercial retail centers, and integrated community spaces.'}
          </p>
        </div>

        {/* Transparent Marketing Claim Clarification Notice */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-amber-500/30 mb-12 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {language === 'bn' ? 'কর্পোরেট নীতি ও সার্টিফিকেশন বিজ্ঞপ্তি' : 'Corporate Governance & Certification Transparency Notice'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'কোম্পানির সাম্প্রতিক কর্পোরেট ব্রিফিংয়ে উল্লেখিত “বাংলাদেশের শীর্ষ লিড (LEED) কনস্ট্রাক্টর” শীর্ষক বক্তব্যটি প্রাতিষ্ঠানিক লক্ষ্য ও মার্কেটিং ভিশন হিসেবে উপস্থাপন করা হয়েছে। জেএইচডিসিএল প্রতিটি প্রকল্পে ইউএসজিবিসি (USGBC) বা সমমানের পরিবেশগত আন্তর্জাতিক মান অনুসরণ করতে প্রতিজ্ঞাবদ্ধ, তবে আনুষ্ঠানিক অডিট সার্টিফিকেট সাপেক্ষেই প্রতিটি প্রকল্পের স্বতন্ত্র রেটিং চূড়ান্ত করা হয়।'
                : 'The briefing statement designating JHDCL as the "Top LEED Constructor Company in Bangladesh" reflects the organization’s guiding green-building aspirations and construction benchmarks. Verified LEED ratings (Certified, Silver, Gold, Platinum) apply on a per-project basis upon formal USGBC or authorized third-party audit clearance.'}
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {developmentPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {language === 'bn' ? pillar.titleBn : pillar.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'bn' ? pillar.descBn : pillar.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Structural Warranty Included</span>
                  <Link
                    to="/projects"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sister Companies Banner */}
        <div className="p-8 rounded-xl bg-slate-900/80 border border-slate-800 mb-16">
          <h2 className="text-lg font-bold text-white mb-2">
            {language === 'bn' ? 'আবাসন খাতের সহযোগী প্রতিষ্ঠানসমূহ' : 'Dedicated Real Estate Group Subsidiaries'}
          </h2>
          <p className="text-xs text-slate-400 mb-6 max-w-2xl">
            {language === 'bn'
              ? 'জেএইচডিসিএল গ্রুপের আওতায় দুটি নিবেদিত প্রতিষ্ঠান জমি অধিগ্রহণ ও আবাসন বিক্রয়ে সক্রিয় ভূমিকা রাখছে।'
              : 'Real estate sales and individual unit developments are handled in close synergy with specialized group sister concerns.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-white">JH Real-Estate Ltd.</h3>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'bn'
                  ? 'প্রিমিয়াম আবাসিক ও বাণিজ্যিক প্রপার্টি উন্নয়ন এবং গ্রাহক হ্যান্ডওভার।'
                  : 'Turnkey residential and commercial real estate development and client handover.'}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-white">Desh Cottage Real-Estate Ltd.</h3>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'bn'
                  ? 'উপশহরভিত্তিক আবাসন ও পরিকল্পিত মডেল ভিলেজ ল্যান্ড প্রজেক্ট।'
                  : 'Suburban housing schemes, eco-cottages, and structured residential plots.'}
              </p>
            </div>
          </div>
        </div>

        {/* Future Ambitions Link */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Visionary Nationwide Roadmap</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {language === 'bn'
                ? '৫০৩ উপজেলা টাওয়ার ও ৬৪ জেলা গ্রিন সিটির ভবিষ্যৎ পরিকল্পনা'
                : '503 Upazila Towers & 64 District Green City Ambitions'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'বাংলাদেশের প্রতিটি উপজেলা ও জেলায় পরিকল্পিত টাউনশিপ ও টাওয়ার নির্মাণের প্রাতিষ্ঠানিক লক্ষ্যমাত্রা সম্পর্কে বিস্তারিত জানুন।'
                : 'Explore the full strategic scope of JHDCL’s proposed decentralization concepts, accompanied by clear feasibility and regulatory approval disclaimers.'}
            </p>
          </div>

          <Link
            to="/future-projects"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>{language === 'bn' ? 'ভবিষ্যৎ পরিকল্পনা দেখুন' : 'Explore Proposed Future Plans'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

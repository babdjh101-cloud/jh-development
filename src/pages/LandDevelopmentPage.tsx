import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Compass,
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Factory,
  Landmark,
  Globe2,
  Maximize2,
} from 'lucide-react';

export const LandDevelopmentPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'ভূমি উন্নয়ন ও ল্যান্ডলর্ড সেবা | জেএইচডিসিএল'
        : 'Land Development & Landlord Services | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const sevenSectors = [
    {
      id: "private",
      titleEn: "1. Private Sector & Real Estate Developers",
      titleBn: "১. বেসরকারি খাত ও ডেভেলপার প্রতিষ্ঠান",
      descEn: "Turnkey land parcel acquisition, perimeter boundary piling, hydraulic sand filling, and soil consolidation for private developers and corporate facilities.",
      descBn: "বেসরকারি আবাসন ও বাণিজ্যিক প্রতিষ্ঠানের জন্য নিচু জমি অধিগ্রহণ, সীমানা প্রাচীর পাইলিং এবং হাইড্রোলিক বালু ভরাট।",
    },
    {
      id: "government",
      titleEn: "2. Government Infrastructure & Civic Projects",
      titleBn: "২. সরকারি অবকাঠামো ও মেগা প্রকল্প",
      descEn: "Large-scale site reclamation, flood relief dykes, embankment raising, and administrative building site preparation under official tenders.",
      descBn: "সরকারি মেগা প্রকল্প, রেলওয়ে করিডোর ও প্রশাসনিক কমপ্লেক্সের জন্য নদী খনন বালু ভরাট ও ডাইক নির্মাণ।",
    },
    {
      id: "industrial",
      titleEn: "3. Industrial Zones & Economic Corridors (EPZs)",
      titleBn: "৩. শিল্পাঞ্চল, অর্থনৈতিক অঞ্চল ও ইপিজেড",
      descEn: "Heavy industrial ground development with high-bearing subgrade compaction, specialized drainage culverts, and heavy machinery foundations.",
      descBn: "রপ্তানি প্রক্রিয়াকরণ অঞ্চল (ইপিজেড) ও মেগা শিল্পাঞ্চলের জন্য উচ্চ লোড ক্ষমতাসম্পন্ন মাটি ও বালু ভরাট।",
    },
    {
      id: "banking",
      titleEn: "4. Banking & Financial Institutional Estates",
      titleBn: "৪. ব্যাংক ও আর্থিক প্রতিষ্ঠান সম্পত্তি",
      descEn: "Institutional land acquisition, valuation assessment, perimeter demarcation, and safe land management for banks and corporate trusts.",
      descBn: "ব্যাংক ও বিনিয়োগকারী প্রতিষ্ঠানের জন্য নিরাপদ জমি অধিগ্রহণ, সীমানা সুরক্ষা ও প্রাতিষ্ঠানিক মাস্টারপ্ল্যান।",
    },
    {
      id: "foreign",
      titleEn: "5. Foreign Investors & Multinational Consortiums",
      titleBn: "৫. বিদেশি বিনিয়োগকারী ও যৌথ কনসোর্টিয়াম",
      descEn: "Facilitating international direct investment (FDI) site preparation compliant with environmental zoning, hydrographic clearances, and local land laws.",
      descBn: "বিদেশি জয়েন্ট ভেঞ্চার ও বহুজাতিক কারখানার জন্য আইনসম্মত ভূমি উন্নয়ন ও পরিবেশগত সনদ সমন্বয়।",
    },
    {
      id: "own",
      titleEn: "6. JHDCL Own Commercial & Residential Ventures",
      titleBn: "৬. জেএইচডিসিএল-এর নিজস্ব বাণিজ্যিক ও আবাসন প্রকল্প",
      descEn: "Internal group development of strategic land banks into future housing estates, modern multi-tenant towers, and eco-parks.",
      descBn: "ভবিষ্যৎ আবাসন ও টাওয়ার নির্মাণের উদ্দেশ্যে প্রতিষ্ঠানের নিজস্ব জমিতে পরিকল্পিত সাইট প্রস্তুতি।",
    },
    {
      id: "sisters",
      titleEn: "7. Sister Concerns & Group Enterprises",
      titleBn: "৭. সহযোগী প্রতিষ্ঠান ও সিস্টার কনসার্নস",
      descEn: "Supplying stabilized land plots, hospital premises, electrical substation yards, and industrial parks across the 11 JHDCL sister companies.",
      descBn: "জেএইচডিসিএল-এর ১১টি সহযোগী প্রতিষ্ঠানের হাসপাতাল, ইলেকট্রিক্যাল সাবস্টেশন ও রিয়েল এস্টেটের ভূমি ব্যবস্থাপনা।",
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.services, href: '/services' },
            { label: language === 'bn' ? 'ভূমি উন্নয়ন' : 'Land Development' }
          ]}
          fallbackBackUrl="/services"
          backLabel={language === 'bn' ? 'সেবাসমূহে ফিরে যান' : 'Back to Services'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Business Category 03 · Trade License
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'উন্নয়ন ও ল্যান্ডলর্ড সেবা (ভূমি ক্রয়, বিক্রয় ও ইজারা)'
              : 'Development & Landlord Services (Acquisition, Sale & Lease)'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল কৌশলগত স্থানে নিচু জমি উদ্ধার, নদী থেকে বালু ভরাট, পেরিমিটার ডাইক এবং দীর্ঘমেয়াদী ইজারা ও ক্রয়ের মাধ্যমে দেশের অন্যতম নির্ভরযোগ্য ভূমি উন্নয়ন সেবা প্রদান করে।'
              : 'JHDCL operates an authorized development and landlord division, delivering strategic land purchase, structured sales, long-term leasing, and comprehensive ground preparation powered by in-house dredgers and earthmoving machinery.'}
          </p>
        </div>

        {/* Key Engineering Methodologies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-4">
              <img
                src="/images/gallery/csd_dredger_river_1.jpg"
                alt="Hydraulic Sand Filling"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 text-[11px] font-mono text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded">
                Dredging Pipeline
              </span>
            </div>
            <h2 className="text-base font-bold text-white mb-2">
              {language === 'bn' ? 'হাইড্রোলিক বালু ভরাট ও ড্রেজিং' : 'Hydraulic Sand Filling & Silt Extraction'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? '১৪″ এবং ১২″ কাটার সাকশন ড্রেজার পাইপলাইনের সাহায্যে নদী তলদেশ থেকে কোটি কোটি ঘনফুট বালু এনে নিচু ভূমি ভরাট ও টেকসই সমতলকরণ।'
                : 'Pumping riverbed sand directly via high-pressure pipelines to reclaim floodplains and low-lying agricultural terrain into stable buildable ground.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-4">
              <img
                src="/images/gallery/caterpillar_excavator_ditch.jpg"
                alt="Dyke & Embankment Works"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 text-[11px] font-mono text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded">
                Bulldozer Grading
              </span>
            </div>
            <h2 className="text-base font-bold text-white mb-2">
              {language === 'bn' ? 'পেরিমিটার ডাইক ও স্লোপ স্ট্যাবিলাইজেশন' : 'Perimeter Dyking & Slope Compaction'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'ভারী ক্যাটারপিলার এক্সকাভেটর ও বুলডোজারের মাধ্যমে সুরক্ষিত বেড়িবাঁধ নির্মাণ, যাতে বর্ষায় ভরাটকৃত মাটি ধুয়ে না যায়।'
                : 'Constructing robust earthen dykes and compacting perimeter containment slopes with heavy track machinery before initiating hydraulic fill.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-4">
              <img
                src="/images/gallery/riverbank_block_revetment_boats.jpg"
                alt="Slope Protection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 text-[11px] font-mono text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded">
                CC Block Revetment
              </span>
            </div>
            <h2 className="text-base font-bold text-white mb-2">
              {language === 'bn' ? 'নদী তীর সংরক্ষণ ও ব্লক পিচিং' : 'Revetment Pitching & Permanent Protection'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'নদী তীরবর্তী সাইটগুলোতে স্থায়ী সুরক্ষায় জিও-টেক্সটাইল ফিল্টারের ওপর আরসিসি সিসি ব্লক পিচিং করে চিরস্থায়ী ভাঙন রোধ।'
                : 'Laying precast concrete revetment blocks over geotextile filter fabrics to permanently insulate waterfront plots from seasonal hydraulic scour.'}
            </p>
          </div>
        </div>

        {/* The 7 Client Sectors */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Operational Scope from Briefing
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {language === 'bn'
                ? 'ভূমি উন্নয়ন ও সরবরাহ সেবার ৭টি প্রধান খাত'
                : 'The 7 Client & Industry Sectors Served'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'bn'
                ? 'জেএইচডিসিএল সরকারি, বেসরকারি এবং নিজস্ব সকল ক্ষেত্রে সুনির্দিষ্ট নীতিমালার ভিত্তিতে ভূমি উন্নয়ন পরিচালনা করে।'
                : 'JHDCL structure its development projects across seven explicit client domains detailed in the corporate briefing.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sevenSectors.map((sector) => (
              <div
                key={sector.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {language === 'bn' ? sector.titleBn : sector.titleEn}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {language === 'bn' ? sector.descBn : sector.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">
              {language === 'bn' ? 'ভূমি সংক্রান্ত যৌথ উন্নয়ন বা ক্রয়-বিক্রয় আলোচনা' : 'Discuss Land Development or Corporate Joint Ventures'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'bn'
                ? 'আমাদের নির্বাহী টিম সাইট পরিদর্শন ও মাটি পরীক্ষার রিপোর্ট সমন্বয় করে প্রকল্প সম্ভাব্যতা প্রস্তুত করবে।'
                : 'Our engineering and executive teams provide formal site inspections and topographic feasibility assessments.'}
            </p>
          </div>
          <Link
            to="/connect-with-us"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            {language === 'bn' ? 'যোগাযোগ করুন' : 'Initiate Inquiry'}
          </Link>
        </div>

      </div>
    </div>
  );
};

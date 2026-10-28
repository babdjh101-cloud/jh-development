import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_CONFIG } from '../config/company';
import {
  HardHat,
  Building2,
  Anchor,
  Truck,
  Train,
  Zap,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const ConstructionServicesPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'প্রথম শ্রেণির নির্মাণ সেবা | জেএইচডিসিএল'
        : 'First-Class Construction Services | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const activities = [
    {
      titleEn: "Building Construction & Superstructures",
      titleBn: "বহুতল ভবন ও প্রাতিষ্ঠানিক নির্মাণ",
      descEn: "Turnkey structural RCC casting, structural steel framing, foundation piling, and institutional complexes.",
      descBn: "আরসিসি কাঠামোগত ঢালাই, হেভি স্টিল ফ্রেমওয়ার্ক, বেসমেন্ট পাইলিং এবং আধুনিক বহুতল প্রাতিষ্ঠানিক ভবন নির্মাণ।",
      image: "/images/gallery/structural_steel_framework.jpg",
      example: "Dhaka Cantonment Building & Commercial Projects",
    },
    {
      titleEn: "River Dredging & Embankment Engineering",
      titleBn: "নদী খনন ও রিভার ট্রেইনিং বাঁধ নির্মাণ",
      descEn: "14″ and 12″ CSD cutter suction dredging, navigation channel deepening, silt extraction, and flood protection dykes.",
      descBn: "১৪″ ও ১২″ কাটার সাকশন ড্রেজার দিয়ে নদী খনন, পলি অপসারণ, নাব্যতা বৃদ্ধি এবং বন্যা নিয়ন্ত্রণ বাঁধ নির্মাণ।",
      image: "/images/gallery/csd_dredger_river_2.jpg",
      example: "Bangshi & Old-Brahmaputra River Dredging Projects",
    },
    {
      titleEn: "Roads & Highways Arterial Expansion",
      titleBn: "সড়ক ও মহাসড়ক সম্প্রসারণ ও কার্পেটিং",
      descEn: "Subgrade earthworks, aggregate base coarse leveling, vibratory road roller compaction, and asphalt concrete paving.",
      descBn: "সাবগ্রেড প্রিপারেশন, মোটর গ্রেডার লেভেলিং, ভাইব্রেটরি রোলার কম্প্যাকশন এবং বিটুমিনাস পিচ ঢালাই।",
      image: "/images/gallery/motor_grader_highway_subgrade.jpg",
      example: "Mirzapur Tangail & Naogaon Highway Extensions",
    },
    {
      titleEn: "Railway Corridors & Track Earthworks",
      titleBn: "রেলওয়ে এমব্যাঙ্কমেন্ট ও ট্র্যাক অবকাঠামো",
      descEn: "Large-volume sand filling for rail beds, ballast spreading, sleeper alignment, and track stability engineering.",
      descBn: "রেলওয়ের মাটির বাঁধ উঁচুকরণ ও বালু ভরাট, ব্যালাস্ট হ্যান্ডলিং এবং রেললাইন সারিবদ্ধকরণ কাজ।",
      image: "/images/gallery/railway_track_worker_bridge.jpg",
      example: "Norail Railway Sand Filling Project",
    },
    {
      titleEn: "Power Plant Civil Groundworks & Dredging",
      titleBn: "বিদ্যুৎ কেন্দ্র সিভিল গ্রাউন্ডওয়ার্ক ও ড্রেজিং",
      descEn: "Heavy hydraulic sand filling, perimeter flood dyking, and intake dredging for mega thermal and solar power plants.",
      descBn: "১০০ ও ২০০ মেগাওয়াট সোলার ও বিদ্যুৎ কেন্দ্র সাইটে কোটি কোটি ঘনফুট বালু ভরাট ও ড্রেনেজ অবকাঠামো।",
      image: "/images/gallery/crawler_crane_industrial_site.jpg",
      example: "Musapur 200MW & Pabna 100MW Power Plants",
    },
    {
      titleEn: "Riverbank Erosion Revetment & Block Pitching",
      titleBn: "নদী তীর সংরক্ষণ ও সিসি ব্লক পিচিং",
      descEn: "Mass casting of precast concrete revetment blocks, geo-textile filter placement, and engineered slope protection.",
      descBn: "নদী ভাঙন রোধে ভারী সিসি ব্লক কাস্টিং, জিও-টেক্সটাইল লেয়ারে ব্লক পিচিং ও টেকসই তীর সংরক্ষণ।",
      image: "/images/gallery/riverbank_block_revetment_boats.jpg",
      example: "Bogura River Block Construction",
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.services, href: '/services' },
            { label: language === 'bn' ? 'নির্মাণ সেবা' : 'Construction Services' }
          ]}
          fallbackBackUrl="/services"
          backLabel={language === 'bn' ? 'সেবাসমূহে ফিরে যান' : 'Back to Services'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <HardHat className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              First-Class Constructor Scope
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'প্রথম শ্রেণির ঠিকাদারি: সিভিল, মেরিন ও অবকাঠামো নির্মাণ'
              : 'First-Class Construction: Civil, Marine & Infrastructure Contracting'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল সরকারি ও বেসরকারি মেগা প্রকল্পে নিজস্ব ড্রেজার, ভারী যন্ত্রপাতি বহর এবং অভিজ্ঞ প্রকৌশলীদের তত্ত্বাবধানে প্রথম শ্রেণির ঠিকাদার হিসেবে সেবা প্রদান করে।'
              : 'JHDCL operates as a first-class general contractor equipped with dedicated CSD cutter suction dredgers, Caterpillar earthmoving fleets, mobile cranes, and certified engineering teams.'}
          </p>
        </div>

        {/* Detailed Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80">
                  <img
                    src={act.image}
                    alt={act.titleEn}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-[11px] font-mono text-amber-400 truncate">
                    {act.example}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {language === 'bn' ? act.titleBn : act.titleEn}
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {language === 'bn' ? act.descBn : act.descEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Related Projects</span>
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                </Link>
                <Link
                  to="/equipment"
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Machinery Used
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tender Joint Venture Banner */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {language === 'bn'
                ? 'মেগা টেন্ডার ও জয়েন্ট ভেঞ্চার (J-V) কনসোর্টিয়াম অংশীদারিত্ব'
                : 'High-Volume Tender Execution & Joint Venture Consortium'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'বৃহৎ ভলিউমের সরকারি ও বাণিজ্যিক টেন্ডারে অংশগ্রহণের জন্য দেশীয় শীর্ষ প্রতিষ্ঠান এবং ২টি আন্তর্জাতিক ইঞ্জিনিয়ারিং কোম্পানির সাথে জেএইচডিসিএল-এর জে-ভি চুক্তি রয়েছে।'
                : 'JHDCL maintains established joint-venture partnership agreements with major domestic firms and two international companies, providing combined balance sheet strength, specialized machinery, and seamless execution capacity.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <Link
              to="/connect-with-us"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <span>Submit Tender Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
            >
              <span>View J-V Partners</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

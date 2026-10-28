import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  TrendingUp,
  Target,
  Globe2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Anchor,
  Compass,
} from 'lucide-react';

export const BusinessRoadmapPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'কর্পোরেট বিজনেস রোডম্যাপ (৫ ও ১০ বছর মেয়াদী) | জেএইচডিসিএল'
        : 'Corporate Business Roadmap (5-Yr & 10-Yr Plan) | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const fiveYearPillars = [
    {
      phase: "Phase 1: 2024–2026",
      titleEn: "Heavy Fleet Modernization & Logistics Consolidation",
      titleBn: "ভারী বহর আধুনিকায়ন ও লজিস্টিক সমন্বয়",
      pointsEn: [
        "Deployment of upgraded 14″ cutter suction dredger fleet on national navigation corridors.",
        "Consolidation of bulk stone import channels through Chattogram and Mongla outer anchorages.",
        "Expansion of automated aggregate washing and grading plants across northern corridors.",
      ],
      pointsBn: [
        "জাতীয় নৌ চ্যানেলে আধুনিক ১৪ ইঞ্চি কাটার সাকশন ড্রেজার বহর নিযুক্তি।",
        "চট্টগ্রাম ও মোংলা বন্দর দিয়ে বাল্ক পাথর আমদানির চ্যানেল সুসংহতকরণ।",
        "উত্তরাঞ্চলে স্বয়ংক্রিয় পাথর ওয়াশিং ও গ্রেডিং প্ল্যান্টের সক্ষমতা বৃদ্ধি।",
      ],
    },
    {
      phase: "Phase 2: 2026–2028",
      titleEn: "Own-Project Scaling & Upazila Tower Pilot",
      titleBn: "নিজস্ব প্রকল্প সম্প্রসারণ ও উপজেলা টাওয়ার পাইলট",
      pointsEn: [
        "Transitioning balance sheet from pure contracting to 50% own-developed real estate equity.",
        "Pilot launch of 10 modern commercial-civic G+8 towers in prime upazila administrative hubs.",
        "Integration of centralized quality assurance testing labs for concrete and sand fineness.",
      ],
      pointsBn: [
        "ঠিকাদারি কাজের পাশাপাশি ৫০% নিজস্ব প্রপার্টি ইকুইটিতে রূপান্তরের কার্যক্রম।",
        "নির্বাচিত ১০টি উপজেলা সদরে আধুনিক জি+৮ বাণিজ্যিক টাওয়ারের পাইলট সূচনা।",
        "কংক্রিট ও বালু পরীক্ষার জন্য নিজস্ব অত্যাধুনিক ল্যাবরেটরি স্থাপন।",
      ],
    },
  ];

  const tenYearPillars = [
    {
      phase: "Phase 3: 2028–2031",
      titleEn: "Divisional Green Cities & Sustainable Eco-Townships",
      titleBn: "বিভাগীয় গ্রিন সিটি ও পরিবেশবান্ধব উপশহর",
      pointsEn: [
        "Development of integrated suburban townships across divisional metropolitan corridors.",
        "Full adoption of solar microgrids, greywater treatment, and energy-efficient building envelopes.",
        "Expansion of international engineering consortium partnerships with East Asian and European contractors.",
      ],
      pointsBn: [
        "বিভাগীয় মহানগরের উপকণ্ঠে সমন্বিত পরিবেশবান্ধব উপশহর নির্মাণ।",
        "সৌর বিদ্যুৎ, আধুনিক পয়ঃনিষ্কাশন এবং টেকসই গ্রিন বিল্ডিং পদ্ধতির সার্বিক প্রয়োগ।",
        "পূর্ব এশিয়া ও ইউরোপীয় শীর্ষ ঠিকাদারদের সাথে যৌথ কনসোর্টিয়াম চুক্তি সম্প্রসারণ।",
      ],
    },
    {
      phase: "Phase 4: 2031–2034",
      titleEn: "Cross-Border Infrastructure & International Developments",
      titleBn: "সীমান্তপাড় অবকাঠামো ও আন্তর্জাতিক আবাসন উদ্যোগ",
      pointsEn: [
        "Bidding on regional South Asian and Southeast Asian cross-border civil infrastructure tenders.",
        "Establishment of international joint venture development vehicles for sustainable urban complexes.",
        "Attainment of globally recognized certified green construction ratings across all group assets.",
      ],
      pointsBn: [
        "দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার আঞ্চলিক সিভিল অবকাঠামো টেন্ডারে অংশগ্রহণ।",
        "টেকসই আন্তর্জাতিক কমপ্লেক্সের জন্য যৌথ উদ্যোগ কোম্পানি প্রতিষ্ঠা।",
        "গ্রুপের সকল প্রকল্পে আন্তর্জাতিক স্বীকৃত পরিবেশগত সার্টিফিকেশন অর্জন।",
      ],
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.about, href: '/about' },
            { label: language === 'bn' ? 'বিজনেস রোডম্যাপ' : 'Business Roadmap' }
          ]}
          fallbackBackUrl="/about"
          backLabel={language === 'bn' ? 'আমাদের সম্পর্কে পৃষ্ঠায় ফিরুন' : 'Back to About Us'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Corporate Strategy · 5-Year & 10-Year Framework
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'কর্পোরেট বিজনেস রোডম্যাপ: টেকসই প্রবৃদ্ধি ও আন্তর্জাতিক রূপরেখা'
              : 'Corporate Business Roadmap: Sustainable Growth & Global Vision'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল-এর ব্যবসায়িক অগ্রযাত্রায় আগামী ৫ বছর নিজস্ব প্রকল্প সুদৃঢ়করণ এবং পরবর্তী ১০ বছর আন্তর্জাতিক বাজারে যৌথ অংশীদারিত্ব সম্প্রসারণের সুনির্দিষ্ট পরিকল্পনা প্রণয়ন করা হয়েছে।'
              : 'Formulated from executive board deliberations and briefing guidelines, JHDCL’s dual-horizon business roadmap establishes clear strategic milestones—balancing short-term domestic consolidation with long-term regional and international engineering leadership.'}
          </p>
        </div>

        {/* Five Year Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-amber-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {language === 'bn' ? 'প্রথম ৫ বছর: অভ্যন্তরীণ সক্ষমতা ও নিজস্ব প্রকল্পায়ন' : '5-Year Horizon: Domestic Capability & Own-Project Consolidation'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Focus on heavy dredging machinery, certified aggregate supply, and property equity development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fiveYearPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-amber-400 font-semibold block">
                    {pillar.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {language === 'bn' ? pillar.titleBn : pillar.titleEn}
                  </h3>
                  <div className="space-y-2.5 pt-2">
                    {(language === 'bn' ? pillar.pointsBn : pillar.pointsEn).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ten Year Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-6 h-6 text-amber-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {language === 'bn' ? '১০ বছর মেয়াদী ভিশন: বিভাগীয় গ্রিন সিটি ও আন্তর্জাতিক যৌথ উদ্যোগ' : '10-Year Horizon: Divisional Green Cities & Global Partnerships'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Strategic positioning as an international joint-venture constructor and eco-township developer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tenYearPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-amber-400 font-semibold block">
                    {pillar.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {language === 'bn' ? pillar.titleBn : pillar.titleEn}
                  </h3>
                  <div className="space-y-2.5 pt-2">
                    {(language === 'bn' ? pillar.pointsBn : pillar.pointsEn).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">
              {language === 'bn' ? 'কৌশলগত অংশীদারিত্ব বা বিনিয়োগে আগ্রহী?' : 'Interested in Consortium Partnership or Project Investment?'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'bn'
                ? 'জেএইচডিসিএল প্রাতিষ্ঠানিক বিনিয়োগকারী ও ল্যান্ডলর্ডদের সাথে যৌথ উন্নয়নে উন্মুক্ত।'
                : 'Connect with JHDCL executive leadership to explore structured joint-venture or equity arrangements.'}
            </p>
          </div>
          <Link
            to="/connect-with-us"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            {language === 'bn' ? 'যোগাযোগ করুন' : 'Initiate Discussion'}
          </Link>
        </div>

      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SISTER_CONCERNS, JOINT_VENTURE_PARTNERS } from '../data/leadership';
import {
  Users2,
  Handshake,
  ShieldCheck,
  Building2,
  Ship,
  Lock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const PartnersPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'সহযোগী প্রতিষ্ঠান ও যৌথ অংশীদার (J-V Partners) | জেএইচডিসিএল'
        : 'Sister Concerns & Joint Venture Partners | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.about, href: '/about' },
            { label: language === 'bn' ? 'সহযোগী ও অংশীদারবৃন্দ' : 'Partners & Sister Concerns' }
          ]}
          fallbackBackUrl="/about"
          backLabel={language === 'bn' ? 'আমাদের সম্পর্কে পৃষ্ঠায় ফিরুন' : 'Back to About Us'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Handshake className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Corporate Synergy & Strategic Alliances
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'সহযোগী প্রতিষ্ঠান ও যৌথ কনসোর্টিয়াম অংশীদারবৃন্দ'
              : 'Sister Concerns & Joint Venture Consortium Partners'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল গ্রুপ ১১টি বিশেষায়িত সহযোগী প্রতিষ্ঠান এবং ৭টি শীর্ষস্থানীয় যৌথ উদ্যোগ (J-V) অংশীদারের সমন্বিত আর্থিক ও কারিগরি শক্তিতে পরিচালিত।'
              : 'JHDCL leverages the operational synergies of 11 dedicated group sister concerns alongside 7 strategic joint-venture consortium partners across civil engineering, marine transport, electrical power, and material supply.'}
          </p>
        </div>

        {/* Strict Confidentiality & Credential Governance Notice */}
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 mb-12 flex items-start gap-4 shadow-xl">
          <Lock className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'bn'
                ? 'কর্পোরেট নথি গোপনীয়তা ও সত্যতা সংরক্ষণ নীতি'
                : 'Data Privacy & Corporate Credential Protection Governance'}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'bn'
                ? 'আইনি নিরাপত্তা ও সাইবার নীতিমালা অনুসারে কর শনাক্তকরণ নম্বর (TIN), ব্যাংক হিসাব নম্বর, প্রাতিষ্ঠানিক কর্মকর্তাদের ব্যক্তিগত মোবাইল ও মূল ওয়ার্ক অর্ডারের দস্তখত সংবলিত কপি উন্মুক্ত ওয়েবসাইটে প্রদর্শিত নয়। অনুমোদিত ক্লায়েন্ট, ব্যাংক ও সরকারি টেন্ডার কমিটি সরাসরি প্রধান কার্যালয় বা গোপনীয় পোর্টালের মাধ্যমে যাচাইকৃত মূল কপি পর্যবেক্ষণ করতে পারেন।'
                : 'In strict compliance with commercial non-disclosure policies and cybersecurity protocols, sensitive private identifiers (including Tax Identification Numbers, corporate bank account numbers, executive signatures on executed work orders, and internal JV deeds) are withheld from public web display. Verified original credentials are provided directly to authorized client evaluation committees, commercial banks, and statutory bodies upon formal request.'}
            </p>
          </div>
        </div>

        {/* 7 Joint Venture Partners */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Handshake className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Consortium Framework
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {language === 'bn' ? '৭টি কৌশলগত যৌথ উদ্যোগ (Joint Venture) অংশীদার' : '07 Strategic Joint Venture (J-V) Partners'}
          </h2>
          <p className="text-xs text-slate-400 mb-6 max-w-2xl">
            {language === 'bn'
              ? 'বৃহৎ মেগা প্রকল্পের টেন্ডারে সমন্বিত ব্যালেন্স শিট এবং গভীর সমুদ্রের মাদার ভেসেল পরিবহনে যৌথ অংশীদারিত্ব।'
              : 'Strategic agreements enabling combined bidding power, specialized deep-sea mother vessel transport, and heavy civil construction.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOINT_VENTURE_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-xl card-3d flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-slate-500 font-mono">Alliance #{idx + 1}</span>
                    <span className="text-amber-400 font-medium">Strategic J-V</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {language === 'bn' ? partner.nameBn : partner.nameEn}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {language === 'bn' ? partner.fieldBn : partner.fieldEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Operational Partner</span>
                  <span className="text-amber-400 font-mono">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11 Sister Concerns */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Group Subsidiaries
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {language === 'bn' ? '১১টি নিবেদিত সহযোগী প্রতিষ্ঠান (Sister Concerns)' : '11 Dedicated Sister Concerns'}
          </h2>
          <p className="text-xs text-slate-400 mb-6 max-w-2xl">
            {language === 'bn'
              ? 'আবাসন, বিদ্যুৎ, সিভিল নির্মাণ, চিকিৎসা ও লজিস্টিক খাতে জেএইচডিসিএল-এর অঙ্গ প্রতিষ্ঠানসমূহ।'
              : 'Specialized corporate entities providing vertical integration across healthcare, electrical engineering, housing, and supply chain.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SISTER_CONCERNS.map((concern, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 shadow-xl card-3d flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs">
                    <span className="text-slate-500 font-mono">Entity #{idx + 1}</span>
                    <span className="text-slate-400 font-mono text-[10px]">Group Entity</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {language === 'bn' ? concern.nameBn : concern.nameEn}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {language === 'bn' ? concern.focusBn : concern.focusEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Integrated Network</span>
                  <span className="text-amber-400">100% Group Synergy</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">
              {language === 'bn' ? 'যৌথ কনসোর্টিয়াম বা অংশীদারিত্বের প্রস্তাব পাঠাতে চান?' : 'Want to Propose a Joint-Venture Alliance or Consortium?'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'bn'
                ? 'আমাদের নির্বাহী টিম সরকারি টেন্ডার ও আন্তর্জাতিক পার্টনারশিপের প্রস্তাব পর্যালোচনা করে দ্রুত প্রত্যুত্তর দেবে।'
                : 'Submit your consortium terms or institutional collaboration scope to our executive board.'}
            </p>
          </div>
          <Link
            to="/connect-with-us"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            {language === 'bn' ? 'অংশীদারিত্ব যোগাযোগ' : 'Submit Consortium Proposal'}
          </Link>
        </div>

      </div>
    </div>
  );
};

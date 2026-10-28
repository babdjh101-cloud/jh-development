import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import { SISTER_CONCERNS, JOINT_VENTURE_PARTNERS } from '../data/leadership';
import { Building2, Compass, Shield, Landmark, Users2, ArrowUpRight, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-t border-slate-800/80" aria-label="About the Company">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.about.sectionKicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.about.leadText}
          </p>
        </div>

        {/* Narrative Grid with Image Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>

            {/* Mission & Vision Split Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-lg bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold mb-2">
                  <Compass className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <h3 className="text-sm uppercase tracking-wider">{t.about.missionTitle}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 font-semibold mb-2">
                  <Building2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <h3 className="text-sm uppercase tracking-wider">{t.about.visionTitle}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>

            {/* Legal Identification Clarity Note */}
            <div className="p-4 rounded-lg bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
              <Shield className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200 block mb-0.5">{t.about.legalNoteTitle}</strong>
                {t.about.legalNoteText}
              </div>
            </div>
          </div>

          {/* Genuine Site Visual Anchor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-xl group">
              <img
                src="/images/gallery/commercial_building_scaffolding_crane.jpg"
                alt="JHDCL Commercial Building Construction Site"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300">
                <span className="font-semibold text-white block">Relivo House &amp; Commercial Works</span>
                <span className="text-slate-400">Farmgate, Dhaka · Multi-story civil superstructure</span>
              </div>
            </div>

            {/* Document Profile Verification Citation */}
            <div className="p-4 rounded-lg bg-slate-950/90 border border-slate-800 text-xs text-slate-400 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/40 bg-black flex-shrink-0 shadow-lg p-0.5">
                  <img
                    src={COMPANY_CONFIG.logoPath}
                    alt="Official JHDCL Seal"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-slate-300 font-semibold mb-0.5">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{language === 'bn' ? 'অফিসিয়াল কর্পোরেট সিল' : 'Official Corporate Seal'}</span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">RJSC #{COMPANY_CONFIG.incorporationNo}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    {language === 'bn' ? COMPANY_CONFIG.brandShortNameBn : COMPANY_CONFIG.brandShortNameEn}
                  </div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {language === 'bn'
                  ? 'এই ওয়েবসাইটের প্রতিটি তথ্য ও কার্যক্রম জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ-এর দালিলিক প্রোফাইল অনুযায়ী সত্য ও যাচাইকৃত।'
                  : 'All operational scopes, equipment allocations, and completed project catalogs are verified against official company profile documentation.'}
              </p>
            </div>
          </div>
        </div>

        {/* Sister Concerns & Joint Ventures Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-800/80">
          
          {/* Sister Concern Companies */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t.about.sisterConcernsTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              {t.about.sisterConcernsSubtitle}
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {SISTER_CONCERNS.map((sc, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-md bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-200 line-clamp-1">
                    {language === 'bn' ? sc.nameBn : sc.nameEn}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {language === 'bn' ? sc.focusBn : sc.focusEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership & Joint Venture Companies */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users2 className="w-4 h-4 text-amber-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                {t.about.jointVenturesTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              {t.about.jointVenturesSubtitle}
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {JOINT_VENTURE_PARTNERS.map((jv, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-md bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="text-[11px] sm:text-xs font-semibold text-amber-400 flex items-center justify-between gap-1">
                    <span className="truncate">{language === 'bn' ? jv.nameBn : jv.nameEn}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 shrink-0" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {language === 'bn' ? jv.fieldBn : jv.fieldEn}
                  </div>
                </div>
              ))}
            </div>

            {/* Banking Channels & Financial Instruments */}
            <div className="mt-6 pt-5 border-t border-slate-800/60">
              <div className="flex items-center gap-2 mb-2">
                <Landmark className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  {t.about.bankingTitle}
                </h4>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
                {COMPANY_CONFIG.banks.map((bank, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span>{bank}</span>
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="text-slate-500 font-medium">Instruments:</span>
                {COMPANY_CONFIG.transactionSystems.map((tx, i) => (
                  <span key={i} className="text-slate-400">
                    {tx}
                    {i < COMPANY_CONFIG.transactionSystems.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

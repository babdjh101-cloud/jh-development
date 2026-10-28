import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BOARD_DIRECTORS, EXECUTIVE_TEAM, ADVISORS } from '../data/leadership';
import { ShieldCheck, UserCheck, Globe, Info } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="leadership" className="py-20 bg-slate-900/40 border-t border-slate-800" aria-label="Corporate Leadership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.leadership.sectionKicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
            {t.leadership.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* Board of Directors */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t.leadership.boardTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {BOARD_DIRECTORS.map((leader) => (
              <div
                key={leader.id}
                className="group bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-lg overflow-hidden transition-all duration-200 flex flex-col justify-between card-3d"
              >
                <div>
                  <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.nameEn}
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-slate-600">
                        Portrait on file
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-2.5 sm:p-4">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-0.5 sm:mb-1 truncate">
                      {language === 'bn' ? leader.roleBn : leader.roleEn}
                    </span>
                    <h4 className="text-xs sm:text-base font-bold text-white leading-tight sm:leading-snug truncate">
                      {language === 'bn' ? leader.nameBn : leader.nameEn}
                    </h4>
                    {language === 'bn' && (
                      <p className="text-[10px] sm:text-xs text-slate-500 font-mono mt-0.5 truncate">
                        {leader.nameEn}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-2.5 sm:p-4 pt-0">
                  <div className="text-[9px] sm:text-[11px] text-slate-400 border-t border-slate-900 pt-1.5 sm:pt-2 font-mono truncate">
                    {language === 'bn' ? leader.departmentBn : leader.departmentEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Management Team */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t.leadership.executiveTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-6">
            {EXECUTIVE_TEAM.map((exec) => (
              <div
                key={exec.id}
                className="group bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-lg overflow-hidden transition-all duration-200 card-3d"
              >
                <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden flex items-center justify-center">
                  {exec.image ? (
                    <>
                      <img
                        src={exec.image}
                        alt={exec.nameEn}
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    </>
                  ) : (
                    <div className="text-center p-6 flex flex-col items-center justify-center space-y-2">
                      <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold text-lg font-mono">
                        {exec.nameEn.split(' ').map((n) => n[0]).join('').slice(0, 3)}
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">Executive Profile</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {language === 'bn' ? exec.roleBn : exec.roleEn}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {language === 'bn' ? exec.nameBn : exec.nameEn}
                  </h4>
                  <div className="text-xs text-slate-400 mt-1">
                    {language === 'bn' ? exec.departmentBn : exec.departmentEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Advisors Grid */}
        <div className="p-6 rounded-lg bg-slate-950/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.leadership.advisorsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADVISORS.map((adv) => (
              <div
                key={adv.id}
                className="p-4 rounded-md bg-slate-900/60 border border-slate-800"
              >
                <div className="text-sm font-bold text-slate-200">{adv.name}</div>
                <div className="text-xs text-amber-400 mt-0.5">
                  {language === 'bn' ? adv.designationBn : adv.designationEn}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  {adv.origin}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <span>{t.leadership.profileNotice}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

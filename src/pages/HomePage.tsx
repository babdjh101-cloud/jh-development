import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Hero } from '../components/Hero';
import { PROJECTS_DATA } from '../data/projects';
import { BOARD_DIRECTORS, SISTER_CONCERNS } from '../data/leadership';
import { BUSINESS_CATEGORIES } from '../data/businessCategories';
import { GALLERY_PHOTOS } from '../data/gallery';
import { COMPANY_CONFIG } from '../config/company';
import {
  ArrowRight,
  Anchor,
  Layers,
  HardHat,
  Truck,
  CheckCircle2,
  Clock,
  Calendar,
  Building2,
  Users2,
  MessageSquare,
  ShieldCheck,
  Compass,
  Award,
  Sparkles,
  ChevronRight,
  Camera,
  Handshake,
  Check,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  // Curated flagship projects for the showcase
  const featuredProjects = PROJECTS_DATA.filter((p) => p.highlight).slice(0, 4);

  // Gallery snapshot: 4 authentic field photographs
  const gallerySnapshot = GALLERY_PHOTOS.slice(0, 4);

  // Top 3 Board Directors
  const topLeaders = BOARD_DIRECTORS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 3D Architectural Cinematic Hero */}
      <Hero />

      {/* 1. ARCHITECTURAL EXCELLENCE & STATS (PUNCHY, CONCISE, HIGH-IMPACT) */}
      <section className="py-14 sm:py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden bg-blueprint-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'প্রকৌশল শ্রেষ্ঠত্ব ও জাতীয় সক্ষমতা' : 'Engineering Excellence & Credentials'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {language === 'bn' ? (
                <>
                  জাতীয় মেগা অবকাঠামোয় <span className="text-gradient-amber">জেএইচডিসিএল</span> এর বিশ্বস্ত উপস্থিতি
                </>
              ) : (
                <>
                  Engineered For Scale: <span className="text-gradient-amber">JHDCL</span> Infrastructure Dominance
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed max-w-2xl font-normal">
              {language === 'bn'
                ? 'প্রথম শ্রেণির সরকারি ঠিকাদারি সনদ (RJSC #C-176309/2021), নিজস্ব ড্রেজার বহর এবং আন্তর্জাতিক নির্মাণ সামগ্রী আমদানি নেটওয়ার্কের সমন্বয়ে টেকসই সমাধান।'
                : '1st-Class Licensed Government Contractor uniting hydraulic CSD marine dredging, bulk earthworks, and global aggregate supply pipelines.'}
            </p>
          </div>

          {/* 4 High-Impact Numbers Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12">
            
            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight text-display-num mb-1">
                26+
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {language === 'bn' ? 'মেগা প্রকল্প বাস্তবায়ন' : 'Mega Projects Handled'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? 'পদ্মা, পায়রা, রূপপুর ও যমুনা করিডোর' : 'Padma, Payra & Jamuna Corridors'}
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/50 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight text-display-num mb-1">
                14+
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {language === 'bn' ? 'নিজস্ব ড্রেজার ও নৌবহর' : 'Dredgers & Vessels'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? '১৪" ও ১২" সিএসডি ও বাল্কহেড' : '14" & 12" CSDs & Bulkheads'}
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/50 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono tracking-tight text-display-num mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {language === 'bn' ? 'নিরাপত্তা ও গুণমান সূচক' : 'Safety & Compliance QA'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? 'বিএনবিসি ও এএসটিএম মানদণ্ড' : 'BNBC & ASTM Certified Standards'}
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/50 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono tracking-tight text-display-num mb-1">
                40+
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                {language === 'bn' ? 'বছরের সম্মিলিত নেতৃত্ব' : 'Years Leadership Legacy'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? '১৯৮২ থেকে ট্রাস্টেড ট্র্যাক রেকর্ড' : 'Pioneering Track Record'}
              </div>
            </div>

          </div>

          {/* 3 Core Dominance Pillars (Replaced 6 cluttered cards with 3 luxury architectural pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="p-5 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-all card-3d flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                  01 / Turnkey Delivery
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {language === 'bn' ? 'টার্নকি প্রকল্প বাস্তবায়ন' : 'End-to-End Turnkey Delivery'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? 'নদী ড্রেজিং ও ভূমি ভরাট থেকে শুরু করে বহুতল সুপারস্ট্রাকচার—সব কাজ নিজস্ব কারিগরি নিয়ন্ত্রণে সময়মতো সম্পন্ন হয়।'
                    : 'From hydraulic dredging and bulk earthworks to heavy civil superstructures without subcontracting delays.'}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 mt-5 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Zero Subcontracting Bottlenecks</span>
              </div>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all card-3d flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1">
                  02 / Fleet Superiority
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {language === 'bn' ? 'নিজস্ব ভারী সরঞ্জাম ও ড্রেজার' : 'In-House Machinery Ownership'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? '১৪" ও ১২" কাটার সাকশন ড্রেজার, ১৪টি বাল্কহেড, ১১টি এক্সকাভেটর এবং ১৭টি ভারী ডাম্প ট্রাক সরাসরি কোম্পানির মালিকানাধীন।'
                    : 'Direct ownership of 14″ & 12″ CSD dredgers, 14 bulkheads, 11 excavators, and 17 multi-axle dump trucks.'}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 mt-5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rapid Site Mobilization</span>
              </div>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition-all card-3d flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-widest mb-1">
                  03 / Institutional Grade
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {language === 'bn' ? '১ম শ্রেণির সরকারি লাইসেন্স' : '1st-Class Government License'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? 'আরজেএসসি নিবন্ধন (#C-176309/2021) এবং বাংলাদেশের সকল প্রধান মন্ত্রণালয়ে প্রথম শ্রেণির সরকারি দরপত্র যোগ্যতা সম্পন্ন।'
                    : 'Officially registered with RJSC (#C-176309/2021) with Tier-1 banking solvency and global supply channels.'}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 mt-5 flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Tier-1 Bank Solvency & Import Direct</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THE 5 CORE BUSINESS DIVISIONS (PREMIUM 3D SHOWCASE) */}
      <section className="py-14 sm:py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                {language === 'bn' ? 'ট্রেড লাইসেন্সভুক্ত মূল ৫টি বিভাগ' : 'Licensed Operating Divisions'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'জেএইচডিসিএল মূল ব্যবসায়িক বিভাগসমূহ' : 'Key Corporate Operating Divisions'}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors tap-effect"
            >
              <span>{language === 'bn' ? 'সকল বিভাগ বিস্তারিত দেখুন' : 'Explore All Core Divisions'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {BUSINESS_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.route}
                className="group flex flex-col justify-between p-3.5 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-400/70 transition-all card-3d"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-extrabold font-mono text-amber-400">
                      {cat.number}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Division</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-tight mb-1 sm:mb-2">
                    {language === 'bn' ? cat.titleBn : cat.titleEn}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                    {language === 'bn' ? cat.summaryBn : cat.summaryEn}
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  <span>{language === 'bn' ? 'বিস্তারিত' : 'Explore'}</span>
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SIGNATURE INFRASTRUCTURE MASTERPIECES (FLAGSHIP PROJECTS) */}
      <section className="py-14 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                {t.projects.sectionKicker}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'নির্বাচিত ও চলমান মেগা প্রকল্প' : 'Featured Infrastructure Engagements'}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/projects/completed"
                className="px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-md transition-colors tap-effect"
              >
                {t.projects.completed} (12)
              </Link>
              <Link
                to="/projects/ongoing"
                className="px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 rounded-md transition-colors tap-effect"
              >
                {t.projects.ongoing} (9)
              </Link>
              <Link
                to="/projects/upcoming"
                className="px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 rounded-md transition-colors tap-effect"
              >
                {t.projects.upcoming} (5)
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group flex flex-col justify-between bg-slate-900/60 border border-slate-800 hover:border-amber-500/60 rounded-xl overflow-hidden card-3d tap-effect"
              >
                <div>
                  <div className="relative h-32 sm:h-48 bg-slate-950 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                    
                    <div className="absolute top-2 left-2 bg-slate-950/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] sm:text-xs border border-slate-800">
                      {project.status === 'completed' && (
                        <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> <span>{t.projects.completed}</span>
                        </span>
                      )}
                      {project.status === 'ongoing' && (
                        <span className="text-amber-400 font-medium inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" /> <span>{t.projects.ongoing}</span>
                        </span>
                      )}
                      {project.status === 'upcoming' && (
                        <span className="text-sky-400 font-medium inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> <span>{t.projects.upcoming}</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/60 px-1.5 py-0.5 rounded">
                      p.{project.sourceDocPage}
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <div className="text-[10px] sm:text-xs text-amber-400 font-medium mb-1 truncate">
                      {language === 'bn' ? project.locationBn : project.locationEn}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-tight mb-1 line-clamp-2">
                      {language === 'bn' ? project.titleBn : project.titleEn}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {language === 'bn' ? project.descriptionBn : project.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="px-3 pb-3 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] sm:text-xs text-slate-300 font-semibold group-hover:text-amber-400 transition-colors">
                  <span>{t.projects.viewDetails}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md btn-sheen tap-effect group"
            >
              <span>{language === 'bn' ? 'সকল ২৬টি প্রকল্প দেখুন' : 'View Complete 26-Project Portfolio'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MARINE DREDGING FLEET & HEAVY MACHINERY (HIGH-TECH INDUSTRIAL DEPTH) */}
      <section className="py-14 sm:py-20 bg-slate-900/50 border-t border-slate-800 bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {t.equipment.sectionKicker}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.equipment.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {t.equipment.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.equipment.capacityNote}
              </p>

              <div className="pt-2">
                <Link
                  to="/equipment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all btn-sheen tap-effect group"
                >
                  <span>{language === 'bn' ? 'সম্পূর্ণ যন্ত্রপাতি তালিকা দেখুন' : 'Inspect Full Machinery Inventory'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 card-3d">
                <Anchor className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white font-mono">14″ &amp; 12″</div>
                <div className="text-xs text-slate-400 mt-0.5">CSD Hydraulic Dredgers</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 card-3d">
                <Layers className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white font-mono">14 Bulkheads</div>
                <div className="text-xs text-slate-400 mt-0.5">6k-22k CFT Transport</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 card-3d">
                <HardHat className="w-5 h-5 text-sky-400 mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white font-mono">11 Excavators</div>
                <div className="text-xs text-slate-400 mt-0.5">Caterpillar &amp; Longbow</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 card-3d">
                <Truck className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white font-mono">17 Dump Trucks</div>
                <div className="text-xs text-slate-400 mt-0.5">Tata, Ashok Leyland</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE GOVERNANCE & GROUP CONSORTIUM SYNERGY (CONSOLIDATED PRESTIGE) */}
      <section className="py-14 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                {language === 'bn' ? 'কর্পোরেট পরিচালনা ও কনসোর্টিয়াম সিনার্জি' : 'Governance & Strategic Alliances'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'পরিচালনা পর্ষদ ও সহযোগী প্রতিষ্ঠান' : 'Board of Directors & Group Consortium'}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/leadership"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors tap-effect"
              >
                <span>{language === 'bn' ? 'পর্ষদ পরিচিতি' : 'Board Profile'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-slate-600">·</span>
              <Link
                to="/partners"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors tap-effect"
              >
                <span>{language === 'bn' ? 'সহযোগী প্রতিষ্ঠান (১১টি)' : '11 Sister Concerns'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Top 3 Board Directors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {topLeaders.map((leader) => (
              <div
                key={leader.id}
                className="group p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 transition-all card-3d flex items-center gap-4"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-slate-950 border-2 border-amber-500/40 shrink-0 group-hover:border-amber-400 transition-colors">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.nameEn}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-amber-400">
                      <Users2 className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-0.5">
                    {language === 'bn' ? leader.roleBn : leader.roleEn}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight truncate">
                    {language === 'bn' ? leader.nameBn : leader.nameEn}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono mt-1">
                    {language === 'bn' ? leader.nameEn : leader.roleBn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Group Sister Concerns & Strategic J-Vs Badges */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Handshake className="w-4 h-4 text-amber-400" />
                <span>{language === 'bn' ? '১১টি সহযোগী প্রতিষ্ঠান ও ৭টি যৌথ অংশীদার (J-V)' : '11 Group Sister Concerns & 7 J-V Consortium Partners'}</span>
              </div>
              <Link
                to="/partners"
                className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>{language === 'bn' ? 'সকল পার্টনার্স দেখুন' : 'Explore Full Consortium'}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
              {SISTER_CONCERNS.slice(0, 4).map((sister, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs"
                >
                  <div className="flex items-center gap-1 text-slate-400 text-[10px] mb-1">
                    <Building2 className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{language === 'bn' ? 'সহযোগী প্রতিষ্ঠান' : 'Sister Concern'}</span>
                  </div>
                  <h4 className="font-bold text-white truncate text-xs">
                    {language === 'bn' ? sister.nameBn : sister.nameEn}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                    {language === 'bn' ? sister.focusBn : sister.focusEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. VERIFIED FIELD PHOTO GALLERY (VISUAL PROOF) */}
      <section className="py-14 sm:py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1 flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'সরাসরি সাইট পরিদর্শন ও আলোকচিত্র' : 'Authentic Field Photographic Proof'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'বাস্তব নির্মাণ ও সাইট গ্যালারি' : 'Verified Infrastructure Field Photos'}
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors tap-effect"
            >
              <span>{language === 'bn' ? 'সম্পূর্ণ ৩৯+ ছবি দেখুন' : 'View Complete Field Gallery'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {gallerySnapshot.map((photo) => (
              <Link
                key={photo.id}
                to="/gallery"
                className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400/60 transition-all card-3d aspect-[4/3] block tap-effect"
              >
                <img
                  src={photo.src}
                  alt={photo.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[9px] sm:text-[10px] text-amber-400 font-semibold border border-slate-800">
                  {language === 'bn' ? photo.categoryLabelBn : photo.categoryLabelEn}
                </div>

                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-[11px] sm:text-xs font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 leading-tight">
                    {language === 'bn' ? photo.titleBn : photo.titleEn}
                  </h4>
                  <span className="text-[9px] text-slate-400 truncate block">
                    {language === 'bn' ? photo.locationBn : photo.locationEn}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CINEMATIC TURNKEY CONSULTATION CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Ready for Tender &amp; Turnkey Execution</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            {language === 'bn'
              ? 'আপনার মেগা প্রকল্প বাস্তবায়নে আমাদের সাথে আলোচনা করুন'
              : 'Partner with JHDCL for Your Next Infrastructure Project'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            {language === 'bn'
              ? 'আমাদের বনানী ও উত্তরা কার্যালয়ে সরাসরি যোগাযোগ করুন অথবা হোয়াটসঅ্যাপে তাৎক্ষণিক অনুসন্ধান পাঠান।'
              : 'Direct corporate discussions for consortium tenders, river dredging execution, and bulk materials procurement.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md btn-sheen cta-pulse tap-effect group"
            >
              <span>{t.nav.contactUs}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                t.contact.whatsappPrefill
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all border border-emerald-500/40 btn-sheen tap-effect"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct (+880 1754 158 358)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

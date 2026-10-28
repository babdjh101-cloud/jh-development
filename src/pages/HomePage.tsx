import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Hero } from '../components/Hero';
import { PROJECTS_DATA } from '../data/projects';
import { EQUIPMENT_DATA } from '../data/equipment';
import { BOARD_DIRECTORS, SISTER_CONCERNS, JOINT_VENTURE_PARTNERS } from '../data/leadership';
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
  ExternalLink,
  Handshake,
  Check,
  ChevronRight,
  Camera,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  // Featured projects for the homepage showcase
  const featuredProjects = PROJECTS_DATA.filter((p) => p.highlight).slice(0, 6);

  // Gallery snapshot: first 4 real photos
  const gallerySnapshot = GALLERY_PHOTOS.slice(0, 4);

  // 3 Key Executive Directors
  const topLeaders = BOARD_DIRECTORS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 3D Architectural Hero */}
      <Hero />

      {/* TYPOGRAPHY & CORE BENEFITS OF ENGINEERING SECTION */}
      <section className="py-16 sm:py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden bg-blueprint-grid">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Kicker & Typography Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'প্রকৌশল উৎকর্ষতা ও জাতীয় সক্ষমতা' : 'Engineering Excellence & Core Advantages'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {language === 'bn' ? (
                <>
                  কেন বেছে নেবেন <span className="text-gradient-amber">জেএইচডিসিএল</span> এর অবকাঠামো শক্তি?
                </>
              ) : (
                <>
                  Why Choose <span className="text-gradient-amber">JHDCL</span> For National Infrastructure?
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-normal">
              {language === 'bn'
                ? 'প্রথম শ্রেণির ঠিকাদারি সনদ, নিজস্ব ড্রেজার ও ভারী যন্ত্রপাতি বহর, এবং আন্তর্জাতিক সরবরাহ শৃঙ্খলের সমন্বয়ে টেকসই ও নির্ভুল নির্মাণ সমাধান।'
                : 'Combining 1st-Class Government Contractor status, an extensive in-house marine dredger fleet, and global aggregate supply for zero-compromise execution.'}
            </p>
          </div>

          {/* High-Impact Numerical Typography Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 mb-12 sm:mb-16">
            
            <div className="p-3.5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight text-display-num mb-1">
                26+
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {language === 'bn' ? 'মেগা প্রকল্প বাস্তবায়ন' : 'Mega Projects Executed'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? 'পদ্মা, পায়রা, রূপপুর ও যমুনা করিডোর' : 'Padma, Payra, Rooppur & Jamuna'}
              </div>
            </div>

            <div className="p-3.5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight text-display-num mb-1">
                14+
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {language === 'bn' ? 'নিজস্ব ড্রেজার ও নৌবহর' : 'Dredgers & Marine Fleet'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? '১৪" ও ১২" সিএসডি ড্রেজার এবং বাল্কহেড' : '14" & 12" CSDs and bulkheads'}
              </div>
            </div>

            <div className="p-3.5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono tracking-tight text-display-num mb-1">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {language === 'bn' ? 'নিরাপত্তা ও গুণমান ইনডেক্স' : 'Safety & Compliance QA'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? 'বিএনবিসি ও এএসটিএম স্ট্যান্ডার্ড' : 'BNBC & ASTM certified testing'}
              </div>
            </div>

            <div className="p-3.5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-all card-3d">
              <div className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-mono tracking-tight text-display-num mb-1">
                40+
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {language === 'bn' ? 'বছরের সম্মিলিত অভিজ্ঞতা' : 'Years Leadership Legacy'}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                {language === 'bn' ? '১৯৮২ থেকে পরিচালনা পর্ষদের ট্র্যাক রেকর্ড' : 'Track record dating to 1982'}
              </div>
            </div>

          </div>

          {/* 6 Core Benefits Architecture Cards (2 cols on mobile, 3 on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            
            {/* Benefit 1 */}
            <div className="p-3 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                  01 / Turnkey Control
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight sm:leading-snug">
                  {language === 'bn' ? 'টার্নকি প্রকল্প বাস্তবায়ন' : 'Complete Turnkey Delivery'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                  {language === 'bn'
                    ? 'নদী ড্রেজিং ও ভূমি ভরাট থেকে শুরু করে বহুতল সুপারস্ট্রাকচার—সব কাজ নিজস্ব তত্ত্বাবধানে সাবকন্ট্রাক্টিং বিলম্ব ছাড়াই সম্পাদিত।'
                    : 'From hydraulic river channel dredging and bulk earthworks to complete multi-story superstructures without third-party bottlenecks.'}
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-slate-800/80 mt-2 sm:mt-4 flex items-center gap-1.5 text-[9px] sm:text-xs text-amber-400 font-medium">
                <Check className="w-3 h-3 text-amber-400" />
                <span>Zero Subcontracting Delays</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="p-3 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2.5 sm:mb-4">
                  <Anchor className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1">
                  02 / Fleet Superiority
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight sm:leading-snug">
                  {language === 'bn' ? 'নিজস্ব ভারী সরঞ্জাম ও ড্রেজার' : 'In-House Machinery Ownership'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                  {language === 'bn'
                    ? '১৪" ও ১২" কাটার সাকশন ড্রেজার, ১৪টি বাল্কহেড, ১১টি এক্সকাভেটর এবং ১৭টি ভারী ডাম্প ট্রাক সরাসরি কোম্পানির মালিকানাধীন।'
                    : 'Direct ownership of 14″ & 12″ CSD dredgers, 14 bulkheads, 11 heavy excavators, and 17 multi-axle dump trucks.'}
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-slate-800/80 mt-2 sm:mt-4 flex items-center gap-1.5 text-[9px] sm:text-xs text-emerald-400 font-medium">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Immediate Project Mobilization</span>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="p-3 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-2.5 sm:mb-4">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-1">
                  03 / Grade-1 Credentials
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight sm:leading-snug">
                  {language === 'bn' ? '১ম শ্রেণির সরকারি ঠিকাদারি' : '1st-Class Licensed Contractor'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                  {language === 'bn'
                    ? 'আরজেএসসি নিবন্ধন (#C-176309/2021) এবং বাংলাদেশের সকল প্রধান মন্ত্রণালয়ে প্রথম শ্রেণির সরকারি দরপত্র যোগ্যতা সম্পন্ন।'
                    : 'Registered under Companies Act with RJSC (#C-176309/2021) and certified for national ministry infrastructure bids.'}
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-slate-800/80 mt-2 sm:mt-4 flex items-center gap-1.5 text-[9px] sm:text-xs text-sky-400 font-medium">
                <Check className="w-3 h-3 text-sky-400" />
                <span>Prime Institutional Solvency</span>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="p-3 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Layers className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                  04 / Sourcing Power
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight sm:leading-snug">
                  {language === 'bn' ? 'আন্তর্জাতিক পাথর ও বালু আমদানি' : 'Global Import Supply Chain'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                  {language === 'bn'
                    ? 'দুবাই ব্ল্যাক গ্যাব্রো, ভারতীয় পাকুড় ও ভুটানি পাথর সরাসরি আমদানি এবং সিলেট বালু পাইকারি সরবরাহে দেশের শীর্ষ নেটওয়ার্ক।'
                    : 'Direct import pipelines for Dubai Black Gabbro, Indian Pakur, and Bhutanese stone aggregates with guaranteed gradation.'}
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-slate-800/80 mt-2 sm:mt-4 flex items-center gap-1.5 text-[9px] sm:text-xs text-amber-400 font-medium">
                <Check className="w-3 h-3 text-amber-400" />
                <span>Certified Aggregate Gradations</span>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="p-3 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2.5 sm:mb-4">
                  <HardHat className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest mb-1">
                  05 / Engineering QA/QC
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight sm:leading-snug">
                  {language === 'bn' ? 'কঠোর মান নিয়ন্ত্রণ ও ল্যাব টেস্টিং' : 'Rigorous QA/QC & Soil Labs'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                  {language === 'bn'
                    ? 'বুয়েট ও আন্তর্জাতিক টেস্ট রিপোর্ট সম্বলিত মৃত্তিকা পরীক্ষা, কনক্রিট কম্প্রেসিভ স্ট্রেন্থ এবং হাইড্রোলিক গ্রেডিয়েন্ট অনুমোদন।'
                    : 'Full lab validation including soil bore logs, concrete compressive tests, and hydraulic flow compliance to ASTM criteria.'}
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-slate-800/80 mt-2 sm:mt-4 flex items-center gap-1.5 text-[9px] sm:text-xs text-indigo-400 font-medium">
                <Check className="w-3 h-3 text-indigo-400" />
                <span>BUET & ASTM Standards Verified</span>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="p-3 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Handshake className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
                  06 / Consortium Synergy
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 leading-tight sm:leading-snug">
                  {language === 'bn' ? '১১টি সিস্টার কনসার্ন ও ৭টি JV' : '11 Sister Concerns & 7 J-Vs'}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed">
                  {language === 'bn'
                    ? '১১টি বিশেষায়িত সহযোগী প্রতিষ্ঠান এবং ৭টি শীর্ষস্থানীয় কনসোর্টিয়াম অংশীদারের সমন্বিত আর্থিক ও লজিস্টিক সক্ষমতা।'
                    : '11 specialized sister concerns and 7 elite joint-venture partners uniting power, logistics, and marine capabilities.'}
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-slate-800/80 mt-2 sm:mt-4 flex items-center gap-1.5 text-[9px] sm:text-xs text-amber-400 font-medium">
                <Check className="w-3 h-3 text-amber-400" />
                <span>Unrivalled Group Financial Synergy</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5 CORE BUSINESS CATEGORIES SNAPSHOT (SUBPAGE PREVIEW) */}
      <section className="py-16 sm:py-20 bg-slate-900/70 border-t border-slate-800 bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                {language === 'bn' ? 'ট্রেড লাইসেন্স ও ব্যবসায়িক অনুমোদনের ৫টি প্রধান শাখা' : 'The 5 Core Trade-Licensed Disciplines'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'জেএইচডিসিএল মূল ব্যবসায়িক বিভাগসমূহ' : 'Key Corporate Operating Divisions'}
              </h2>
            </div>
            <Link
              to="/services/construction"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors tap-effect"
            >
              <span>{language === 'bn' ? 'সকল বিভাগ বিস্তারিত দেখুন' : 'Explore All Core Divisions'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {BUSINESS_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.route}
                className="group flex flex-col justify-between p-3 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-400/60 transition-all card-3d"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-extrabold font-mono text-amber-400">
                      {cat.number}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Licensed</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-tight mb-1 sm:mb-2">
                    {language === 'bn' ? cat.titleBn : cat.titleEn}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-3 leading-tight sm:leading-relaxed">
                    {language === 'bn' ? cat.summaryBn : cat.summaryEn}
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  <span>{language === 'bn' ? 'বিস্তারিত পড়ুন' : 'View Division'}</span>
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Corporate Overview Pillar */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {t.about.sectionKicker}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.about.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {t.about.leadText}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.paragraph1}
              </p>

              {/* Quick links to deeper pages with animated CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md btn-sheen tap-effect group"
                >
                  <span>{language === 'bn' ? 'বিস্তারিত পরিচিতি পড়ুন' : 'Read Full Corporate Profile'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/leadership"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-all tap-effect"
                >
                  <Users2 className="w-4 h-4 text-amber-400" />
                  <span>{language === 'bn' ? 'পরিচালনা পর্ষদ' : 'Board & Leadership'}</span>
                </Link>
              </div>
            </div>

            {/* 3D Layered Perspective Visual Card */}
            <div className="lg:col-span-5 perspective-container">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl card-3d p-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900">
                  <img
                    src="/images/gallery/commercial_building_scaffolding_crane.jpg"
                    alt="JHDCL Construction Site"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/60 bg-black/90 shadow-xl p-0.5 backdrop-blur-sm">
                    <img
                      src={COMPANY_CONFIG.logoPath}
                      alt="JHDCL Official Seal"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      Multi-Story Civil Superstructures
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Relivo House Building &amp; Urban Complexes
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2 p-2 text-xs">
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-400 block text-[11px]">Contractor Grade:</span>
                    <strong className="text-white">1st Class Contractor</strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80">
                    <span className="text-slate-400 block text-[11px]">Registration:</span>
                    <strong className="text-amber-400 font-mono">C-176309/2021</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Overview (2 columns on mobile) */}
      <section className="py-16 sm:py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                {t.services.sectionKicker}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {t.services.title}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors tap-effect"
            >
              <span>{language === 'bn' ? 'সকল ১০টি সেবা দেখুন' : 'Explore All 10 Business Sectors'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {/* 1. River Dredging */}
            <div className="p-3 sm:p-6 rounded-lg bg-slate-950/80 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2 leading-tight sm:leading-snug">
                  {t.services.categories.riverDredging.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                  {t.services.categories.riverDredging.desc}
                </p>
              </div>
              <Link to="/services" className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 tap-effect">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 2. Sand Filling */}
            <div className="p-3 sm:p-6 rounded-lg bg-slate-950/80 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2 leading-tight sm:leading-snug">
                  {t.services.categories.sandFilling.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                  {t.services.categories.sandFilling.desc}
                </p>
              </div>
              <Link to="/services" className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 tap-effect">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 3. Building Construction */}
            <div className="p-3 sm:p-6 rounded-lg bg-slate-950/80 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <HardHat className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2 leading-tight sm:leading-snug">
                  {t.services.categories.buildingConstruction.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                  {t.services.categories.buildingConstruction.desc}
                </p>
              </div>
              <Link to="/services" className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 tap-effect">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 4. Roads & Highways */}
            <div className="p-3 sm:p-6 rounded-lg bg-slate-950/80 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2 leading-tight sm:leading-snug">
                  {t.services.categories.roadsHighways.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                  {t.services.categories.roadsHighways.desc}
                </p>
              </div>
              <Link to="/services" className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 tap-effect">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 5. Railway Projects */}
            <div className="p-3 sm:p-6 rounded-lg bg-slate-950/80 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2 leading-tight sm:leading-snug">
                  {t.services.categories.railwayProjects.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                  {t.services.categories.railwayProjects.desc}
                </p>
              </div>
              <Link to="/services" className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 tap-effect">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 6. Stone Aggregate & Import Supply */}
            <div className="p-3 sm:p-6 rounded-lg bg-slate-950/80 border border-slate-800 card-3d flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-2.5 sm:mb-4">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white mb-1 sm:mb-2 line-clamp-2 leading-tight sm:leading-snug">
                  {t.services.categories.stoneSupply.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                  {t.services.categories.stoneSupply.desc}
                </p>
              </div>
              <Link to="/services" className="mt-3 sm:mt-5 text-[10px] sm:text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 tap-effect">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Showcase with 3D Depth (2 cols on mobile) */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                {t.projects.sectionKicker}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'নির্বাচিত ও চলমান প্রকল্পসমূহ' : 'Featured Infrastructure Engagements'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                {t.projects.statusNote}
              </p>
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group flex flex-col justify-between bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 rounded-lg overflow-hidden card-3d tap-effect"
              >
                <div>
                  <div className="relative h-28 sm:h-48 bg-slate-900 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                    
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-slate-950/90 backdrop-blur-sm px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded text-[10px] sm:text-xs border border-slate-800">
                      {project.status === 'completed' && (
                        <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> <span className="hidden xs:inline">{t.projects.completed}</span><span className="xs:hidden">সম্পন্ন</span>
                        </span>
                      )}
                      {project.status === 'ongoing' && (
                        <span className="text-amber-400 font-medium inline-flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> <span className="hidden xs:inline">{t.projects.ongoing}</span><span className="xs:hidden">চলমান</span>
                        </span>
                      )}
                      {project.status === 'upcoming' && (
                        <span className="text-sky-400 font-medium inline-flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> <span className="hidden xs:inline">{t.projects.upcoming}</span><span className="xs:hidden">আসন্ন</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-3 text-[9px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/60 sm:bg-transparent px-1 sm:px-0 rounded">
                      p.{project.sourceDocPage}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-5">
                    <div className="text-[10px] sm:text-xs text-amber-400 font-medium mb-1 truncate">
                      {language === 'bn' ? project.locationBn : project.locationEn}
                    </div>
                    <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight sm:leading-snug mb-1 sm:mb-2 line-clamp-2">
                      {language === 'bn' ? project.titleBn : project.titleEn}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                      {language === 'bn' ? project.descriptionBn : project.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="px-2.5 pb-2.5 pt-1.5 sm:px-5 sm:pb-5 sm:pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] sm:text-xs text-slate-300 font-semibold group-hover:text-amber-400 transition-colors">
                  <span className="truncate">{t.projects.viewDetails}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
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

      {/* Equipment Fleet Highlight Snapshot */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-t border-slate-800 bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {t.equipment.sectionKicker}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {t.equipment.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {t.equipment.subtitle}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.equipment.capacityNote}
              </p>

              <div className="pt-2">
                <Link
                  to="/equipment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all btn-sheen tap-effect group"
                >
                  <span>{language === 'bn' ? 'সম্পূর্ণ যন্ত্রপাতি তালিকা দেখুন' : 'Inspect Full Machinery Inventory'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-2.5 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-lg bg-slate-950 border border-slate-800 card-3d">
                <Anchor className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-lg sm:text-xl font-bold text-white font-mono">14″ &amp; 12″</div>
                <div className="text-xs text-slate-400 mt-0.5">CSD Hydraulic Dredgers</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-slate-950 border border-slate-800 card-3d">
                <Layers className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-lg sm:text-xl font-bold text-white font-mono">14 Bulkheads</div>
                <div className="text-xs text-slate-400 mt-0.5">6k-22k CFT Transport</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-slate-950 border border-slate-800 card-3d">
                <HardHat className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-lg sm:text-xl font-bold text-white font-mono">11 Excavators</div>
                <div className="text-xs text-slate-400 mt-0.5">Caterpillar &amp; Longbow</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-slate-950 border border-slate-800 card-3d">
                <Truck className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-lg sm:text-xl font-bold text-white font-mono">17 Dump Trucks</div>
                <div className="text-xs text-slate-400 mt-0.5">Tata, Ashok Leyland</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & BOARD OF DIRECTORS SNAPSHOT (SUBPAGE PREVIEW) */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                {language === 'bn' ? 'কর্পোরেট পরিচালনা ও নির্বাহী নেতৃত্ব' : 'Corporate Governance & Executive Leadership'}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {language === 'bn' ? 'পরিচালনা পর্ষদের দিকনির্দেশনা' : 'Board of Directors & Visionaries'}
              </h2>
            </div>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors tap-effect"
            >
              <span>{language === 'bn' ? 'পূর্ণাঙ্গ পর্ষদ পরিচিতি' : 'View Full Board & Advisors'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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

        </div>
      </section>

      {/* SISTER CONCERNS & JOINT VENTURE PREVIEW SNAPSHOT */}
      <section className="py-16 sm:py-20 bg-slate-900/40 border-t border-slate-800 bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Handshake className="w-4 h-4" />
                <span>{language === 'bn' ? 'কর্পোরেট সমন্বয় ও কৌশলগত অংশীদার' : 'Corporate Synergy & Strategic Alliances'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'bn'
                  ? '১১টি সহযোগী প্রতিষ্ঠান ও ৭টি যৌথ অংশীদার (J-V)'
                  : '11 Sister Concerns & 7 Joint Venture Partners'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {language === 'bn'
                  ? 'জেএইচডিসিএল গ্রুপ মেরিন ট্রান্সপোর্ট, বাল্কহেড লজিস্টিকস, পাওয়ার এবং ম্যাটেরিয়াল সাপ্লাইয়ে বিশেষায়িত ১১টি গ্রুপ সহযোগী ও ৭টি কনসোর্টিয়াম পার্টনারের পূর্ণ সমন্বয়ে কাজ করে।'
                  : 'Operating with multi-disciplinary strength across marine transport, bulkhead logistics, and power engineering.'}
              </p>
              <div>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md btn-sheen tap-effect group"
                >
                  <span>{language === 'bn' ? 'সকল অংশীদার ও সনদ দেখুন' : 'Explore All Partners & J-Vs'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Quick Preview Badges (2 columns on mobile) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-3">
              {SISTER_CONCERNS.slice(0, 4).map((sister, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-lg bg-slate-950/80 border border-slate-800 card-3d"
                >
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{language === 'bn' ? 'সহযোগী প্রতিষ্ঠান' : 'Sister Concern'}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
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

      {/* INFRASTRUCTURE GALLERY SNAPSHOT (SUBPAGE PREVIEW) */}
      <section className="py-16 sm:py-20 bg-slate-950 border-t border-slate-800">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
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

      {/* Corporate Call To Action Banner with animated sheen & pulse */}
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

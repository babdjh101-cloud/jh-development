import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_CONFIG } from '../config/company';
import {
  HardHat,
  Boxes,
  Layers,
  Building2,
  FileCheck2,
  ArrowRight,
  Anchor,
  CheckCircle,
} from 'lucide-react';

export const BusinessOverviewPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'ব্যবসায়িক পর্যালোচনা ও কার্যক্রম সারসংক্ষেপ | জেএইচডিসিএল'
        : 'Corporate Business Overview & Pillars | JHDCL';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: language === 'bn' ? 'ব্যবসায়িক পর্যালোচনা' : 'Business Overview' }
          ]}
          fallbackBackUrl="/"
          backLabel={language === 'bn' ? 'মূলপাতায় ফিরে যান' : 'Back to Home'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Executive Summary
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'কর্পোরেট ব্যবসায়িক কাঠামো ও প্রধান কার্যক্রমের সারসংক্ষেপ'
              : 'Corporate Business Structure & Core Pillars'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {COMPANY_CONFIG.welcomeMessageEn}
          </p>
        </div>

        {/* Two Primary Focus Sectors Highlighted Prominently */}
        <div className="mb-14">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Primary Focus Disciplines</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Pillar 1: First-Class Construction */}
            <div className="p-8 rounded-xl bg-slate-900 border border-amber-500/30 shadow-2xl card-3d flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <HardHat className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {language === 'bn' ? 'প্রথম শ্রেণির নির্মাণ ঠিকাদারি' : 'First-Class Construction Contracting'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'bn'
                    ? 'জেএইচডিসিএল-এর মূল চালিকাশক্তি হলো ভারী সিভিল ও মেরিন নির্মাণ। নিজস্ব ড্রেজার বহর, এক্সকাভেটর, ক্রেন ও ডাম্প ট্রাকের মাধ্যমে নদী ড্রেজিং, সড়ক সম্প্রসারণ, রেলওয়ে এমব্যাঙ্কমেন্ট ও বিদ্যুৎ কেন্দ্র সাইট উন্নয়ন দ্রুততার সাথে সম্পন্ন করা হয়।'
                    : 'The operational cornerstone of JHDCL centers on first-class general contracting across civil superstructures, cutter suction river dredging, expressway asphalt paving, railway track sand filling, and power plant groundworks.'}
                </p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Documented Fleet: 14″ &amp; 12″ CSD Dredgers, 14 Bulkheads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Over 26 completed, ongoing, and upcoming civil/marine engagements</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  to="/services/construction"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Explore Construction Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Primary Pillar 2: Supplier — Import & Export */}
            <div className="p-8 rounded-xl bg-slate-900 border border-amber-500/30 shadow-2xl card-3d flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Boxes className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {language === 'bn' ? 'আমদানি, রপ্তানি ও পাইকারি সরবরাহ' : 'Supplier — Import & Export Logistics'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'bn'
                    ? 'মেগা প্রকল্পের জন্য অতি প্রয়োজনীয় দুবাই ব্ল্যাক গ্যাব্রো স্টোন, ভারতীয় পাকুড় ব্যাসাল্ট, ভুটানি গ্রানাইট এবং সিলেট/পঞ্চগড় সিলেকশন বালু আন্তর্জাতিক সোর্সিং ও রাজধানীর গাবতলী ডিপো থেকে নিরবচ্ছিন্নভাবে সরবরাহ করা হয়।'
                    : 'Large-scale aggregate logistics supplying verified high-strength aggregates: Dubai Gabbro (10-20mm & 20-40mm), Indian Pakur Basalt, Bhutanese Granite/Sebok, and premium Sylhet coarse selection sand for critical structural concrete.'}
                </p>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Shipping consortium partnerships with mother vessel capability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>15 Sand classifications &amp; 5 International Stone origins</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  to="/services/supply-import-export"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Explore Materials Supply &amp; Import</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Supporting Disciplines */}
        <div className="mb-14">
          <h2 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-3">
            {language === 'bn' ? 'সহায়ক ব্যবসায়িক ক্ষেত্রসমূহ' : 'Complementary Development Disciplines'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Land & Development */}
            <div className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <Layers className="w-5 h-5 text-amber-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">
                  {language === 'bn' ? 'উন্নয়ন ও ল্যান্ডলর্ড' : 'Development & Landlord'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {language === 'bn'
                    ? 'শিল্প ও অর্থনৈতিক অঞ্চলের জন্য নিচু জমি ভরাট, রিভার ডাইক ও দীর্ঘমেয়াদী প্রাতিষ্ঠানিক ইজারা।'
                    : 'Industrial economic zone reclamation, perimeter dyke earthworks, and institutional leasing.'}
                </p>
              </div>
              <Link to="/services/land-development" className="text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Real Estate & Housing */}
            <div className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <Building2 className="w-5 h-5 text-amber-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">
                  {language === 'bn' ? 'রিয়েল এস্টেট ও গ্রিন সিটি' : 'Real Estate & Housing'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {language === 'bn'
                    ? 'আবাসিক অ্যাপার্টমেন্ট, বাণিজ্যিক স্পেস এবং পরিবেশবান্ধব পরিকল্পিত নগর সম্প্রসারণ।'
                    : 'Residential apartment complexes, commercial retail centers, and master-planned green communities.'}
                </p>
              </div>
              <Link to="/services/real-estate-housing" className="text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Cross-Sector Consultancy */}
            <div className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <FileCheck2 className="w-5 h-5 text-amber-400 mb-3" />
                <h3 className="text-base font-bold text-white mb-2">
                  {language === 'bn' ? 'সার্বিক কনসালটেন্সি' : 'Multidisciplinary Consultancy'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {language === 'bn'
                    ? 'সিভিল ইঞ্জিনিয়ারিং সুপারভিশন, ড্রেজিং হাইড্রোগ্রাফিক সমীক্ষা ও টেন্ডার কনসোর্টিয়াম পরামর্শ।'
                    : 'Civil engineering supervision, hydrographic dredging surveys, and tender consortium consulting.'}
                </p>
              </div>
              <Link to="/services/consultancy" className="text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1">
                <span>View Details</span> <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

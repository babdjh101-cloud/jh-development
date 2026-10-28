import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  FileCheck2,
  Globe2,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Calculator,
  Waves,
} from 'lucide-react';
import { ADVISORS } from '../data/leadership';

export const ConsultancyPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'পরামর্শ ও ইঞ্জিনিয়ারিং কনসালট্যান্সি | জেএইচডিসিএল'
        : 'Consultancy & Technical Advisory Services | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const advisoryServices = [
    {
      titleEn: "Dredging & Hydrographic Bathymetry Surveys",
      titleBn: "ড্রেজিং ও হাইড্রোগ্রাফিক বাথিমেট্রি জরিপ",
      descEn: "Pre-dredge sonar sounding, cross-sectional river profiling, silt accumulation estimation, and discharge routing calculation.",
      descBn: "নদীর তলদেশের গভীরতা ও পলি জমার পরিমাণ নির্ণয়ে আধুনিক সোনার বাথিমেট্রি জরিপ এবং ড্রেজার পাইপলাইন ড্রয়িং প্রস্তুতি।",
      icon: Waves,
    },
    {
      titleEn: "Geotechnical & Soil Bearing Analysis",
      titleBn: "ভূ-প্রকৃতি, মাটি পরীক্ষা ও সয়েল বেয়ারিং ক্যাপাসিটি",
      descEn: "Borehole SPT testing, laboratory grain size distribution, triaxial shear testing, and foundation piling depth recommendations.",
      descBn: "মাটির ভারবহন ক্ষমতা যাচাই, এসপিটি বোরহোল টেস্ট ও ল্যাব টেস্টের মাধ্যমে নিরাপদ পাইল ও ফাউন্ডেশন ডিজাইন সুপারিশ।",
      icon: Compass,
    },
    {
      titleEn: "Tender Consortium & Bid Engineering",
      titleBn: "টেন্ডার কনসোর্টিয়াম ও বিড ইঞ্জিনিয়ারিং",
      descEn: "Structuring joint-venture consortium agreements, technical bid compilation, machinery deployment schedules, and financial compliance.",
      descBn: "সরকারি ও বহুজাতিক মেগা টেন্ডারে অংশগ্রহণের জন্য কনসোর্টিয়াম চুক্তি, টেকনিক্যাল স্পেসিফিকেশন ও বিওকিউ সমন্বয়।",
      icon: FileCheck2,
    },
    {
      titleEn: "Quantity Surveying, BOQ & Cost Engineering",
      titleBn: "কোয়ান্টিটি সার্ভেয়িং, বিওকিউ ও ব্যয় নির্ধারণ",
      descEn: "Precise earthwork cut-and-fill volume calculations, reinforcement steel schedules, concrete grade mix design, and cashflow modeling.",
      descBn: "মাটি কাটা ও ভরাটের সঠিক আয়তন পরিমাপ, আরসিসি রড শিডিউল এবং প্রকল্প বাস্তবায়নের নির্ভুল বাজেট ও ক্যাশফ্লো প্ল্যান।",
      icon: Calculator,
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.services, href: '/services' },
            { label: language === 'bn' ? 'পরামর্শ সেবা' : 'Consultancy Services' }
          ]}
          fallbackBackUrl="/services"
          backLabel={language === 'bn' ? 'সেবাসমূহে ফিরে যান' : 'Back to Services'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck2 className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Business Category 05 · Trade License
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'পরামর্শ ও ইঞ্জিনিয়ারিং কনসালট্যান্সি সেবা'
              : 'Consultancy Services & Multidisciplinary Advisory'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল লাইসেন্সপ্রাপ্ত পরামর্শক হিসেবে হাইড্রোগ্রাফিক নদী জরিপ, মাটি পরীক্ষা, মেগা টেন্ডার কনসোর্টিয়াম গঠন এবং আন্তর্জাতিক প্রকৌশল সহায়তা প্রদান করে।'
              : 'Authorized under its official trade license business categories, JHDCL provides high-level engineering consultancy, bathymetric river profiling, geotechnical analysis, and structured tender consortium advisory.'}
          </p>
        </div>

        {/* 4 Advisory Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {advisoryServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                    {language === 'bn' ? srv.titleBn : srv.titleEn}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'bn' ? srv.descBn : srv.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Strict Quality Assurance</span>
                  <Link
                    to="/connect-with-us"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Request Advisory</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* International Advisory Panel */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Globe2 className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              International Advisory Board
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            {language === 'bn' ? 'আন্তর্জাতিক উপদেষ্টা প্যানেল' : 'International Corporate & Technical Advisors'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-8">
            {language === 'bn'
              ? 'কোম্পানির প্রোফাইল অনুযায়ী আন্তর্জাতিক বিনিয়োগ, আধুনিক টেন্ডার পদ্ধতি ও বিদেশি যৌথ উদ্যোগের ক্ষেত্রে সম্মানিত আন্তর্জাতিক উপদেষ্টাগণ কৌশলগত দিকনির্দেশনা প্রদান করেন।'
              : 'As documented in the company profile, JHDCL retains accredited international corporate and engineering advisors to ensure alignment with global contracting standards.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ADVISORS.map((advisor) => (
              <div
                key={advisor.id}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold shrink-0">
                  {advisor.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{advisor.name}</h3>
                  <p className="text-xs text-amber-400 font-mono mt-0.5">
                    {language === 'bn' ? advisor.designationBn : advisor.designationEn}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <Globe2 className="w-3 h-3 text-slate-500" />
                    <span>{advisor.origin}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">
              {language === 'bn' ? 'প্রকল্প কনসালট্যান্সি বা যৌথ টেন্ডার আলোচনা' : 'Consultancy Inquiries & Consortium Bidding'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'bn'
                ? 'আমাদের কারিগরি টিম প্রজেক্ট আরএফপি (RFP) পর্যালোচনা করে বিশদ প্রতিবেদন প্রদান করবে।'
                : 'Share your tender documents or RFP terms for technical and financial consortium review.'}
            </p>
          </div>
          <Link
            to="/connect-with-us"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            {language === 'bn' ? 'পরামর্শের জন্য যোগাযোগ করুন' : 'Schedule Technical Discussion'}
          </Link>
        </div>

      </div>
    </div>
  );
};

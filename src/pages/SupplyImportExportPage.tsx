import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Ship,
  Truck,
  Layers,
  Globe2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Anchor,
  Sparkles,
} from 'lucide-react';

export const SupplyImportExportPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'আমদানি, রপ্তানি ও নির্মাণ সামগ্রী সরবরাহ | জেএইচডিসিএল'
        : 'Supply, Import & Export Division | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const supplyStreams = [
    {
      titleEn: "Dubai Gabbro Stone Import & Distribution",
      titleBn: "দুবাই গ্যাব্রো হার্ড রক আমদানি ও সরবরাহ",
      descEn: "Plutonic gabbro hard rock imported from Fujairah and Ras Al Khaimah (UAE) in 10–20mm and 20–40mm gradations for C40–C60+ high-strength concrete in mega bridges, ports, and runways.",
      descBn: "সংযুক্ত আরব আমিরাতের ফুজাইরাহ থেকে আমদানিকৃত উচ্চ ঘনত্বের গ্যাব্রো পাথর যা পদ্মা সেতু, বিমানবন্দর রানওয়ে এবং গভীর সমুদ্র বন্দর টার্মিনালের সর্বোচ্চ শক্তির ঢালাইয়ে ব্যবহৃত হয়।",
      image: "/images/gallery/crushing_plant_screeners.jpg",
      origin: "United Arab Emirates (Fujairah / RAK)",
    },
    {
      titleEn: "Indian Pakur Black Basalt Stone",
      titleBn: "ভারতীয় পাকুড় ব্ল্যাক ব্যাসাল্ট পাথর",
      descEn: "High-density volcanic basalt aggregate from Jharkhand and West Bengal quarries, trusted across Bangladesh for railway track ballast and high-specification civil structures.",
      descBn: "ভারতের ঝাড়খণ্ড ও পশ্চিমবঙ্গ থেকে আমদানিকৃত ভারী ব্যাসাল্ট পাথর, যা মেগা প্রকল্পের আরসিসি ও বাংলাদেশ রেলওয়ের ব্যালাস্টের প্রধান উপাদান।",
      image: "/images/gallery/excavator_dump_truck_aggregates.jpg",
      origin: "India (Pakur, Jharkhand)",
    },
    {
      titleEn: "Bhutanese Granite & Sebok Stone",
      titleBn: "ভুটানি রেড গ্রানাইট ও সেবক পাথর",
      descEn: "Himalayan crystalline granite boulders and aggregates with superior compressive strength, imported via northern land customs stations for regional highways and infrastructure.",
      descBn: "হিমালয়ান কোয়ারি থেকে সংগৃহীত টেকসই লাল পাথর ও গ্রানাইট যা উত্তরবঙ্গ ও রাজধানী ঢাকার আধুনিক অবকাঠামোয় ব্যবহৃত হয়।",
      image: "/images/gallery/crawler_crane_industrial_site.jpg",
      origin: "Bhutan / Himalayan Basin",
    },
    {
      titleEn: "Domestic Sylhet Selection Sand (FM 2.5–3.0)",
      titleBn: "সিলেট সিলেকশন বালু (এফএম ২.৫–৩.০)",
      descEn: "Premium coarse silica river sand from Jaflong and Bholaganj riverbeds, rigorously monitored for low silt percentage and optimal fineness modulus in structural RCC casting.",
      descBn: "সিলেটের জাফলং ও ভোলাগঞ্জ থেকে সংগৃহীত উচ্চ এফএম সমৃদ্ধ লালচে মোটা বালু, যা বহুতল ভবনের ফ্রেমওয়ার্ক ও মেগা ঢালাইয়ের মেরুদণ্ড।",
      image: "/images/gallery/bulkhead_vessel_sand_river.jpg",
      origin: "Sylhet, Jaflong, Bholaganj",
    },
    {
      titleEn: "Bulk River Filling Sand (Hydraulic Sourced)",
      titleBn: "নদী ভরাট বালু ও হাইড্রোলিক ফিল স্যান্ড",
      descEn: "Massive scale delivery of riverbed sand transported via high-capacity bulkheads and pumped through CSD discharge pipelines for mega townships, EPZs, and road embankments.",
      descBn: "নৌপথে বাল্কহেড কার্গো এবং ড্রেজার পাইপলাইনের মাধ্যমে শিল্পাঞ্চল, ইপিজেড ও এক্সপ্রেসওয়েতে লক্ষ লক্ষ ঘনফুট ভরাট বালু সরবরাহ।",
      image: "/images/gallery/csd_dredger_river_1.jpg",
      origin: "Padma, Meghna, Jamuna Corridors",
    },
    {
      titleEn: "European Luxury Marble & Architectural Stones",
      titleBn: "ইউরোপীয় মার্বেল, গ্রানাইট ও আর্কিটেকচারাল স্টোন",
      descEn: "Direct import of Italian Carrara marble, Spanish crema, Portuguese limestone, and Greek white stone for five-star hospitality, executive penthouses, and corporate headquarters.",
      descBn: "ইতালি, স্পেন ও পর্তুগাল থেকে সরাসরি আমদানিকৃত এক্সক্লুসিভ মার্বেল ও স্লেট যা আধুনিক লাক্সারি টাওয়ার ও করপোরেট হেডকোয়ার্টারে প্রয়োগ করা হয়।",
      image: "/images/gallery/structural_steel_framework.jpg",
      origin: "Italy, Spain, Portugal, Greece",
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.services, href: '/services' },
            { label: language === 'bn' ? 'সরবরাহ ও আমদানি-রপ্তানি' : 'Supply, Import & Export' }
          ]}
          fallbackBackUrl="/services"
          backLabel={language === 'bn' ? 'সেবাসমূহে ফিরে যান' : 'Back to Services'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Ship className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Business Category 02 · Trade License
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'সরবরাহকারী — আমদানি ও রপ্তানি বিভাগ'
              : 'Supplier Category: Import, Export & Material Supply'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'জেএইচডিসিএল দেশীয় ও আন্তর্জাতিক মেগা কনস্ট্রাকশনের জন্য সর্বোচ্চ মানের বালু, পাথর ও অবকাঠামো কাঁচামাল আমদানি এবং নির্ভরযোগ্য লজিস্টিক নেটওয়ার্কের মাধ্যমে সরবরাহ করে।'
              : 'Under its authorized trade license business category, JHDCL operates a high-volume supply division delivering certified aggregates, structural sand, and imported heavy minerals directly to major national projects.'}
          </p>
        </div>

        {/* Quick Material Catalog Navigation Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <Link
            to="/materials/sand"
            className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all card-3d flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <span>15 Classified Sand & Soil Types</span>
                <span>·</span>
                <span>12 Core Applications</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {language === 'bn' ? 'বালু ও মাটির পূর্ণাঙ্গ ক্যাটালগ দেখুন' : 'Explore Full Sand & Soil Catalog'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'bn' ? 'সিলেট সিলেকশন, ভাটি, আস্তর, ফিল ও সিলিকা বালু স্পেসিফিকেশন' : 'Sylhet selection, fill sand, astor, silica, and crushed sand specifications.'}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-amber-400 transform group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>

          <Link
            to="/materials/stone-aggregate"
            className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all card-3d flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <span>Domestic, Indian, Dubai & European Stones</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {language === 'bn' ? 'পাথর ও অ্যাগ্রিগেট ক্যাটালগ দেখুন' : 'Explore Stone & Aggregates Catalog'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'bn' ? 'দুবাই গ্যাব্রো, ভারতীয় পাকুড়, মধ্যপাড়া ও ভুটানি গ্রানাইট' : 'Dubai Gabbro, Indian Pakur, Madhyapara hard rock, and Himalayan granites.'}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-amber-400 transform group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>

        {/* Marine Logistics Joint Venture Highlight */}
        <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Anchor className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Maritime & Inland Logistics Infrastructure
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            {language === 'bn'
              ? '৫৫,০০০–৬০,০০০ টন মাদার ভেসেল ও লাইটারেজ পরিবহন কনসোর্টিয়াম'
              : '55,000–60,000 Ton Mother Vessels & River Bulkhead Fleet'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl mb-6">
            {language === 'bn'
              ? 'জেএইচডিসিএল তার কৌশলগত যৌথ অংশীদার (আনিশা ট্রেডার্স ও কনসোর্টিয়াম পার্টনার্স)-এর মাধ্যমে আরব আমিরাত ও আন্তর্জাতিক বন্দর থেকে ৫৫,০০০ থেকে ৬০,০০০ মেট্রিক টন ধারণক্ষমতাসম্পন্ন মাদার ভেসেলে সরাসরি পাথর আমদানি করে। পরবর্তীতে চট্টগ্রাম ও মোংলা বহিনোঙর থেকে দেশীয় লাইটারেজ ও বাল্কহেড বহরের মাধ্যমে প্রকল্প সাইটে সরাসরি ডেলিভারি নিশ্চিত করা হয়।'
              : 'Through established joint venture agreements with Anisha Traders and specialized maritime partners, JHDCL secures bulk sea freight aboard 55,000–60,000 DWT mother vessels from foreign deep-water ports. Raw materials are efficiently discharged at outer anchorages (Chattogram and Mongla) onto inland bulkhead fleets for direct riverine transport to project jetties across Bangladesh.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block">Ocean Carrier Capacity</span>
              <strong className="text-white text-sm">55,000 – 60,000 Metric Tons</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Inland River Barges</span>
              <strong className="text-white text-sm">Dedicated Bulkhead Vessels</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Unloading Points</span>
              <strong className="text-white text-sm">Chattogram, Mongla, Payra & River Jetties</strong>
            </div>
          </div>
        </div>

        {/* Supply Streams Grid */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white tracking-tight mb-6">
            {language === 'bn' ? 'প্রধান আমদানি ও সরবরাহ চ্যানেলসমূহ' : 'Key Import & Supply Lines'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyStreams.map((stream, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 shadow-xl card-3d flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80">
                    <img
                      src={stream.image}
                      alt={stream.titleEn}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-[11px] font-mono text-amber-400 truncate">
                      {stream.origin}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {language === 'bn' ? stream.titleBn : stream.titleEn}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {language === 'bn' ? stream.descBn : stream.descEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Continuous Bulk Supply</span>
                  <Link
                    to="/connect-with-us"
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
              {language === 'bn' ? 'আমদানি সামগ্রী সরবরাহ কোটেশন প্রয়োজন?' : 'Need Bulk Material Quotation or L/C Coordination?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {language === 'bn'
                ? 'আমাদের প্রকিউরমেন্ট টিম আপনার প্রকল্পের ভলিউম ও টেকনিক্যাল স্পেসিফিকেশন অনুযায়ী দ্রুত রেট ও ডেলিভারি শিডিউল প্রদান করবে।'
                : 'Our procurement team reviews your project grading curves, laboratory test criteria, and delivery schedules.'}
            </p>
          </div>
          <Link
            to="/connect-with-us"
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
          >
            {language === 'bn' ? 'সরবরাহ যোগাযোগ করুন' : 'Connect for Supply Inquiries'}
          </Link>
        </div>

      </div>
    </div>
  );
};

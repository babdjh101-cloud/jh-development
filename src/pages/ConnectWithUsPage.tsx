import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_CONFIG } from '../config/company';
import {
  Send,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  HardHat,
  Truck,
  TrendingUp,
  Building,
  Handshake,
  Sparkles,
  CheckCircle2,
  Heart,
  Clock,
} from 'lucide-react';

export const ConnectWithUsPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'আমাদের সাথে যুক্ত হোন (৭টি চ্যানেল) | জেএইচডিসিএল'
        : 'Connect With Us: 7 Structured Inquiry Pathways | Jamat Hazera Development Construction Ltd.';
  }, [language]);

  const pathways = [
    {
      id: 'employment',
      titleEn: '1. Employment & Careers',
      titleBn: '১. নিয়োগ ও ক্যারিয়ার আবেদন',
      icon: Briefcase,
      descEn: 'Civil engineers, site supervisors, dredger operators, surveyors, and corporate professionals seeking full-time or project-based roles.',
      descBn: 'সিভিল ইঞ্জিনিয়ার, সাইট সুপারভাইজার, ড্রেজার অপারেটর ও কর্পোরেট প্রফেশনালদের জন্য আবেদন।',
    },
    {
      id: 'subcontractor',
      titleEn: '2. Subcontractor Works',
      titleBn: '২. সাব-কন্ট্রাক্টর ও ঠিকাদারি কাজ',
      icon: HardHat,
      descEn: 'Licensed specialty subcontractors for piling, electrical MEP, steel fabrication, road carpeting, and block revetment.',
      descBn: 'পাইলিং, ইলেকট্রিক্যাল সাব-স্টেশন, স্টিল স্ট্রাকচার ও ব্লক পিচিং সাব-কন্ট্রাক্টরের জন্য।',
    },
    {
      id: 'supplier',
      titleEn: '3. Material Supplier & Vendor',
      titleBn: '৩. সামগ্রী সরবরাহকারী ও ভেন্ডর',
      icon: Truck,
      descEn: 'Quarry owners, bulk sand suppliers, transport barge operators, and equipment leasing partners.',
      descBn: 'কোয়ারি মালিক, বাল্ক বালু সরবরাহকারী, বাল্কহেড মালিক ও যন্ত্রপাতি ভেন্ডরদের জন্য।',
    },
    {
      id: 'investor',
      titleEn: '4. Institutional Financing',
      titleBn: '৪. প্রাতিষ্ঠানিক বিনিয়োগ ও অর্থায়ন',
      icon: TrendingUp,
      descEn: 'Scheduled commercial banks, non-banking financial institutions, private equity, and development funds.',
      descBn: 'তফসিলি ব্যাংক, নন-ব্যাংকিং আর্থিক প্রতিষ্ঠান ও উন্নয়ন তহবিলের জন্য।',
    },
    {
      id: 'construction-investment',
      titleEn: '5. Property Investment',
      titleBn: '৫. আবাসন ও বাণিজ্যিক বিনিয়োগ',
      icon: Building,
      descEn: 'Commercial space acquisition, retail shopping units, residential floors, and equity partnerships.',
      descBn: 'বাণিজ্যিক স্পেস, রিটেল শপ, ফ্ল্যাট বুকিং ও প্রপার্টি বিনিয়োগকারীদের জন্য।',
    },
    {
      id: 'jv-consortium',
      titleEn: '6. Joint Venture Consortium',
      titleBn: '৬. যৌথ উদ্যোগ ও টেন্ডার কনসোর্টিয়াম',
      icon: Handshake,
      descEn: 'Domestic first-class contractors and international construction firms proposing joint tender bidding.',
      descBn: 'সরকারি ও আন্তর্জাতিক মেগা টেন্ডারে যৌথ অংশগ্রহণের লক্ষ্যে কনসোর্টিয়াম চুক্তি।',
    },
    {
      id: 'mega-projects',
      titleEn: '7. Proposed Mega Projects',
      titleBn: '৭. প্রস্তাবিত মেগা প্রকল্প ও ল্যান্ডলর্ড',
      icon: Sparkles,
      descEn: 'Large land parcel owners and local leaders proposing Upazila G+8 towers or District Green City development.',
      descBn: 'উপজেলা ও জেলায় জমি মালিক ও কমিউনিটি অংশীদারিত্বে টাউনশিপ বা টাওয়ার উদ্যোগ।',
    },
  ];

  const [selectedPathway, setSelectedPathway] = useState<string>('jv-consortium');
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [dispatchMethod, setDispatchMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const selectedPathwayObj = pathways.find((p) => p.id === selectedPathway) || pathways[0];

  const buildMessageContent = () => {
    return [
      `*JHDCL Official Inquiry Portal Submission*`,
      `*Pathway:* ${selectedPathwayObj.titleEn}`,
      `*Name:* ${fullName || 'Not provided'}`,
      `*Organization:* ${organization || 'Individual / Personal'}`,
      `*Phone:* ${phone || 'Not provided'}`,
      `*Email:* ${email || 'Not provided'}`,
      `*Location / District:* ${location || 'Bangladesh'}`,
      `*Message / Proposal:*`,
      `${details || 'I would like to initiate discussion regarding this pathway.'}`,
    ].join('\n');
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const content = buildMessageContent();

    if (dispatchMethod === 'whatsapp') {
      const url = `https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(content)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const subject = encodeURIComponent(`[JHDCL Inquiry] ${selectedPathwayObj.titleEn} - ${organization || fullName}`);
      const body = encodeURIComponent(content);
      window.location.href = `mailto:${COMPANY_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.contact, href: '/contact' },
            { label: language === 'bn' ? 'কর্পোরেট ইনকোয়ারি পোর্টাল' : 'Connect With Us' }
          ]}
          fallbackBackUrl="/contact"
          backLabel={language === 'bn' ? 'যোগাযোগ পেজে ফিরুন' : 'Back to Contact'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Handshake className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              7 Dedicated Corporate Inquiry Pathways
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {language === 'bn'
              ? 'জেএইচডিসিএল-এর সাথে যুক্ত হোন: সরাসরি যোগাযোগ পোর্টাল'
              : 'Connect With JHDCL: 7 Structured Inquiry Pathways'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {language === 'bn'
              ? 'কর্পোরেট ব্রিফিংয়ের নির্দেশনা অনুসারে কর্মসংস্থান, সাব-কন্ট্রাক্টিং, নির্মাণ সামগ্রী সরবরাহ, যৌথ কনসোর্টিয়াম ও মেগা প্রকল্পের জন্য সুনির্দিষ্ট চ্যানেলে আপনার প্রস্তাব সরাসরি প্রেরণ করুন।'
              : 'Structured directly in accordance with the 28 October 2026 corporate briefing, providing tailored dispatch channels for careers, subcontracting, material procurement, institutional financing, and joint-venture consortium alliances.'}
          </p>
        </div>

        {/* 7 Pathway Selection Pills / Cards */}
        <div className="mb-10">
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            {language === 'bn' ? 'আপনার ইনকোয়ারি বা অংশীদারিত্বের ধরন নির্বাচন করুন:' : 'Select Your Specific Inquiry Pathway:'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pathways.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedPathway === p.id;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setSelectedPathway(p.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-slate-950' : 'text-amber-400'}`} />
                  <div>
                    <h2 className="text-xs font-bold leading-tight">
                      {language === 'bn' ? p.titleBn : p.titleEn}
                    </h2>
                    <p className={`text-[11px] mt-1 leading-snug line-clamp-2 ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                      {language === 'bn' ? p.descBn : p.descEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-t border-slate-800 pt-1">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase block">Selected Channel</span>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {language === 'bn' ? selectedPathwayObj.titleBn : selectedPathwayObj.titleEn}
                </h2>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            <form onSubmit={handleDispatch} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'bn' ? 'আপনার নাম *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eng. Kamal Hossain"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'bn' ? 'প্রতিষ্ঠান / পদবী' : 'Organization / Company'}
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. ABC Engineering Ltd."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'bn' ? 'মোবাইল / হোয়াটসঅ্যাপ নম্বর *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880 17XX-XXXXXX"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {language === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {language === 'bn' ? 'প্রকল্প বা কাজের অবস্থান (জেলা / উপজেলা)' : 'Project Location / District'}
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dhaka, Tangail, Bogura, Chattogram"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {language === 'bn' ? 'প্রস্তাব বা বার্তার বিবরণ *' : 'Proposal / Message Details *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    language === 'bn'
                      ? 'আপনার প্রকল্পের কাজের পরিমাণ, স্পেসিফিকেশন বা অংশীদারিত্বের রূপরেখা লিখুন...'
                      : 'Describe your project volume, material specifications, equipment requirements, or proposed partnership scope...'
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Dispatch Method Selection */}
              <div className="pt-2">
                <span className="block text-xs font-medium text-slate-300 mb-2">
                  {language === 'bn' ? 'বার্তা পাঠানোর মাধ্যম:' : 'Dispatch Channel:'}
                </span>
                <div className="flex items-center gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                    <input
                      type="radio"
                      name="dispatch"
                      checked={dispatchMethod === 'whatsapp'}
                      onChange={() => setDispatchMethod('whatsapp')}
                      className="accent-amber-400"
                    />
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp (+8801754158358)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                    <input
                      type="radio"
                      name="dispatch"
                      checked={dispatchMethod === 'email'}
                      onChange={() => setDispatchMethod('email')}
                      className="accent-amber-400"
                    />
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Official Email Client</span>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {dispatchMethod === 'whatsapp'
                      ? (language === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি পাঠান' : 'Dispatch Directly via WhatsApp')
                      : (language === 'bn' ? 'ইমেইল ক্লায়েন্টে পাঠান' : 'Open in Corporate Email Client')}
                  </span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  {language === 'bn'
                    ? 'তথ্য সরাসরি প্রি-ফরম্যাটেড আকারে আপনার নির্বাচনকৃত অ্যাপে প্রেরণ হবে।'
                    : 'Transfers cleanly formatted details directly into your device messenger or mail application.'}
                </p>
              </div>
            </form>
          </div>

          {/* Right Direct Contacts & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{language === 'bn' ? 'জরুরি সমন্বয় ও হটলাইন' : 'Immediate Direct Coordination'}</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Official WhatsApp & Calls
                  </span>
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>{COMPANY_CONFIG.whatsappFormatted}</span>
                  </a>
                  <span className="text-slate-500 block text-[10px] mt-0.5">
                    Direct executive desk · 24/7 priority
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_CONFIG.contactEmail}`}
                    className="text-sm font-semibold text-white hover:text-amber-400 block mt-0.5"
                  >
                    {COMPANY_CONFIG.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Offices Card */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{language === 'bn' ? 'কর্পোরেট অফিসসমূহ' : 'Corporate Office Locations'}</span>
              </h2>

              <div className="space-y-4 text-xs">
                <div className="border-l-2 border-amber-400 pl-3">
                  <span className="text-amber-400 font-bold block">
                    {language === 'bn' ? 'প্রধান কার্যালয় (Head Office):' : 'Head Office (Banani):'}
                  </span>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    {language === 'bn'
                      ? COMPANY_CONFIG.headOffice.addressBn
                      : COMPANY_CONFIG.headOffice.addressEn}
                  </p>
                </div>

                <div className="border-l-2 border-slate-700 pl-3">
                  <span className="text-slate-300 font-bold block">
                    {language === 'bn' ? 'কর্পোরেট কার্যালয় (Corporate Office):' : 'Corporate Office (Uttara):'}
                  </span>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    {language === 'bn'
                      ? COMPANY_CONFIG.corporateOffice.addressBn
                      : COMPANY_CONFIG.corporateOffice.addressEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Standard response time for tender inquiries and material quotations is within 24–48 business hours.
              </span>
            </div>

          </div>

        </div>

        {/* Heartfelt Gratitude & Presenter Citation Banner */}
        <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 border border-slate-800 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 mb-3 border border-amber-400/20">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            {language === 'bn' ? 'কৃতজ্ঞতা স্বীকার ও সমাপনী অভিবাদন' : 'Corporate Gratitude & Closing Citation'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-4">
            {language === 'bn'
              ? '“জামাত হাজেরা ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ (জেএইচডিসিএল)-এর পরিচালনা পর্ষদ, সম্মানিত প্রকৌশলীবৃন্দ এবং দেশ-বিদেশের শুভানুধ্যায়ীদের প্রতি আন্তরিক কৃতজ্ঞতা জ্ঞাপন করছি।”'
              : '“With heartfelt gratitude to the Board of Directors, management, engineers, field workforce, and valued institutional partners of Jamat Hazera Development Construction Ltd.”'}
          </p>
          <div className="pt-3 border-t border-slate-800/80 inline-flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>Corporate Briefing: 28 October 2026</span>
            <span>·</span>
            <span>Est. 05 October 2019</span>
            <span>·</span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>

      </div>
    </div>
  );
};

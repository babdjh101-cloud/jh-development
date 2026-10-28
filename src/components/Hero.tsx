import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import {
  ArrowRight,
  Anchor,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MapPin,
  ExternalLink,
  Layers,
  Sparkles,
  Building2,
  Calendar,
} from 'lucide-react';

interface HeroSlideItem {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  locationEn: string;
  locationBn: string;
  image: string;
  tagEn: string;
  tagBn: string;
  sourceDocPage: number;
  highlightStatEn: string;
  highlightStatBn: string;
}

const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: 'jamuna-dredging',
    titleEn: 'Jamuna River Navigation Channel Dredging',
    titleBn: 'যমুনা নদী ড্রেজিং ও নেভিগেশন চ্যানেল খনন',
    categoryEn: 'Marine Dredging & River Training',
    categoryBn: 'মেরিন ড্রেজিং ও নদী খনন',
    locationEn: 'Sirajganj - Tangail River Corridor',
    locationBn: 'সিরাজগঞ্জ - টাঙ্গাইল নদী করিডোর',
    image: '/images/gallery/csd_dredger_marine_1.jpg',
    tagEn: '14" & 12" Hydraulic CSD Fleet',
    tagBn: '১৪" ও ১২" হাইড্রোলিক সিএসডি ড্রেজার',
    sourceDocPage: 13,
    highlightStatEn: 'Deep River Channel Excavation',
    highlightStatBn: 'গভীর নদী চ্যানেল খনন',
  },
  {
    id: 'payra-housing',
    titleEn: 'Payra Deep Seaport Rehabilitation Township',
    titleBn: 'পায়রা গভীর সমুদ্রবন্দর পুনর্বাসন আবাসন প্রকল্প',
    categoryEn: 'Civil & Urban Resettlement',
    categoryBn: 'সিভিল ও পুনর্বাসন আবাসন',
    locationEn: 'Kolapara, Patuakhali',
    locationBn: 'কলাপাড়া, পটুয়াখালী',
    image: '/images/gallery/payra_resettlement_brick_housing.jpg',
    tagEn: '250+ RCC Residential Units',
    tagBn: '২৫০+ আরসিসি আবাসিক ভবন',
    sourceDocPage: 13,
    highlightStatEn: 'Turnkey Civil Execution',
    highlightStatBn: 'টার্নকি সিভিল নির্মাণ',
  },
  {
    id: 'airport-terminal-3',
    titleEn: 'Hazrat Shahjalal Int’l Airport Terminal 3',
    titleBn: 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর টার্মিনাল ৩',
    categoryEn: 'Aviation Infrastructure',
    categoryBn: 'বিমানবন্দর মেগা অবকাঠামো',
    locationEn: 'Kurmitola, Dhaka',
    locationBn: 'কুর্মিটোলা, ঢাকা',
    image: '/images/gallery/airport_terminal3_construction.jpg',
    tagEn: 'Apron & Heavy Subgrade Works',
    tagBn: 'অ্যাপ্রন ও সাবগ্রেড উন্নয়ন',
    sourceDocPage: 14,
    highlightStatEn: 'Aviation Ground Infrastructure',
    highlightStatBn: 'বিমানবন্দর গ্রাউন্ড অবকাঠামো',
  },
  {
    id: 'dhaka-chattogram-highway',
    titleEn: 'Dhaka-Chattogram 4-Lane Highway Expansion',
    titleBn: 'ঢাকা-চট্টগ্রাম চার লেন জাতীয় মহাসড়ক সম্প্রসারণ',
    categoryEn: 'Highways & Expressways',
    categoryBn: 'মহাসড়ক ও এক্সপ্রেসওয়ে',
    locationEn: 'Cumilla - Feni Highway Corridor',
    locationBn: 'কুমিল্লা - ফেনী করিডোর',
    image: '/images/gallery/four_lane_highway_roadway_system.jpg',
    tagEn: 'Heavy Asphalt Paving & Base Courses',
    tagBn: 'ভারী অ্যাসফল্ট পেভিং ও আরসিসি',
    sourceDocPage: 13,
    highlightStatEn: 'National Highway Corridor',
    highlightStatBn: 'জাতীয় মহাসড়ক করিডোর',
  },
  {
    id: 'bhairab-railway-bridge',
    titleEn: '2nd Bhairab Railway Mega Bridge & Dual Gauge',
    titleBn: '২য় ভৈরব রেলওয়ে মেগা সেতু ও ডুয়েল গেজ ট্র্যাক',
    categoryEn: 'Railway Bridges & Superstructures',
    categoryBn: 'রেলওয়ে সেতু ও সুপারস্ট্রাকচার',
    locationEn: 'Bhairab - Ashuganj Meghna River Crossing',
    locationBn: 'ভৈরব - আশুগঞ্জ মেঘনা নদী',
    image: '/images/gallery/railway_track_worker_bridge.jpg',
    tagEn: 'Heavy Substructure & Steel Tracks',
    tagBn: 'হেভি সাবস্ট্রাকচার ও রেলওয়ে ট্র্যাক',
    sourceDocPage: 13,
    highlightStatEn: 'Mega Railway Connectivity',
    highlightStatBn: 'মেগা রেল যোগাযোগ',
  },
  {
    id: 'relivo-housing-complex',
    titleEn: 'Relivo Commercial Superstructure & Complex',
    titleBn: 'রিলিভো মাল্টি-স্টোরি বাণিজ্যিক ভবন কমপ্লেক্স',
    categoryEn: 'Multi-Story Civil Superstructures',
    categoryBn: 'বহুতল বাণিজ্যিক ভবন',
    locationEn: 'Dhaka Metropolitan Area',
    locationBn: 'ঢাকা মেট্রোপলিটন এলাকা',
    image: '/images/gallery/commercial_building_scaffolding_crane.jpg',
    tagEn: 'Tower Cranes & High-Rise RCC',
    tagBn: 'টাওয়ার ক্রেন ও আরসিসি কাঠামো',
    sourceDocPage: 14,
    highlightStatEn: 'Grade-A Commercial Construction',
    highlightStatBn: 'বাণিজ্যিক ভবন নির্মাণ',
  },
  {
    id: 'riverbank-slope-protection',
    titleEn: 'Meghna & Jamuna Riverbank Geo-Protection',
    titleBn: 'মেঘনা ও যমুনা নদীর তীর সংরক্ষণ ও ব্লক ডাম্পিং',
    categoryEn: 'River Training & Slope Protection',
    categoryBn: 'নদী ভাঙন রোধ ও ব্লক ডাম্পিং',
    locationEn: 'Munshiganj & Chandpur',
    locationBn: 'মুন্সীগঞ্জ ও চাঁদপুর',
    image: '/images/gallery/riverbank_block_paving_excavators.jpg',
    tagEn: 'CC Blocks, Geo-Bags & Revetment',
    tagBn: 'সিসি ব্লক ও জিও-ব্যাগ ডাম্পিং',
    sourceDocPage: 14,
    highlightStatEn: 'Flood & Erosion Mitigation',
    highlightStatBn: 'নদী ভাঙন রোধ',
  },
];

const SLIDE_DURATION_MS = 4500; // 4.5 seconds per slide

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartXRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex];

  const goToNextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer for advancing slides every 4.5 seconds with progress bar update
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / SLIDE_DURATION_MS) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, goToNextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 45) {
      // Swiped left -> next slide
      goToNextSlide();
    } else if (diff < -45) {
      // Swiped right -> prev slide
      goToPrevSlide();
    }
    touchStartXRef.current = null;
  };

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply dynamic 3D tilt on mouse devices
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // -4 to +4 deg
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 6; // -3 to +3 deg
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-start pt-3 sm:pt-6 pb-6 sm:pb-10 overflow-hidden bg-slate-950 border-b border-slate-800/80"
      aria-label="Hero Introduction"
    >
      {/* Background authentic project visual with architectural dark overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={currentSlide.image}
          alt={currentSlide.titleEn}
          className="w-full h-full object-cover object-center filter brightness-[0.14] blur-sm transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/98 via-slate-950/90 to-slate-950" />
        <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Compact Hero Layout: Grid with Headline on Left, Single 3D Slider on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Corporate Heading, Badges & CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4">
            
            {/* Kicker Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>EST. 1982</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-mono">RJSC #{COMPANY_CONFIG.incorporationNo}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 1st Class Govt Contractor
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
              {language === 'bn' ? (
                <>
                  সিভিল ইঞ্জিনিয়ারিং, ড্রেজিং ও <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">অবকাঠামো উন্নয়ন</span>
                </>
              ) : (
                <>
                  Civil Engineering, Dredging &amp;{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                    Infrastructure Development
                  </span>
                </>
              )}
            </h1>

            {/* Concise Tagline */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {language === 'bn'
                ? '১৯৮২ সাল থেকে সরকারি মেগা প্রকল্প, মেরিন ড্রেজিং, ৪-লেন জাতীয় মহাসড়ক ও আরসিসি সিভিল অবকাঠামো বাস্তবায়নে বিশ্বস্ত প্রতিষ্ঠান।'
                : 'J.H. Development Construction Ltd. delivers specialized heavy construction, river channel dredging, bulk earthworks, and multi-disciplinary infrastructure projects across Bangladesh.'}
            </p>

            {/* Key Verified Stats Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-bold text-white font-mono">26+</span>
                <span>{language === 'bn' ? 'মেগা প্রকল্প' : 'Mega Projects'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold text-white font-mono">40+</span>
                <span>{language === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Yrs Track Record'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-bold text-white font-mono">10</span>
                <span>{language === 'bn' ? 'ব্যবসায়িক খাত' : 'Core Sectors'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 btn-sheen cta-pulse tap-effect group"
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-all tap-effect"
              >
                <Anchor className="w-4 h-4 text-amber-400" />
                <span>{t.hero.viewEquipment}</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-800 rounded-md transition-all tap-effect"
              >
                <span>{t.hero.contactUs}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium 3D Interactive Showcase with full responsive image height and compact mobile cards */}
          <div className="lg:col-span-7 xl:col-span-7 perspective-hero-stage">
            
            {/* Outer 3D Card Container with Ambient Depth Lighting and Interactive Tilt */}
            <div className="relative group">
              {/* Dynamic Ambient Glow behind 3D Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 via-sky-500/15 to-amber-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div
                className="relative rounded-2xl overflow-hidden bg-slate-900/95 border-2 border-slate-700/80 hover:border-amber-400/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-300 hero-3d-card"
                style={{
                  transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* CAD Architectural HUD Crosshairs */}
                <div className="cad-corner-tl" />
                <div className="cad-corner-tr" />
                <div className="cad-corner-bl" />
                <div className="cad-corner-br" />

                {/* Glare Glass Highlight overlay */}
                <div className="absolute inset-0 surface-glare pointer-events-none z-20" />

                {/* Slide Main Image Box: Taller height for expansive PC view and unobstructed mobile view */}
                <div className="relative w-full h-[290px] xs:h-[330px] sm:h-[400px] md:h-[440px] lg:h-[480px] overflow-hidden bg-slate-950">
                  <img
                    key={currentSlide.id}
                    src={currentSlide.image}
                    alt={currentSlide.titleEn}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient overlays: delicate at top and bottom so image is crystal-clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/20 pointer-events-none" />

                  {/* Top Badge Overlay: Sleek, compact and lightweight */}
                  <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-400/30 shadow-lg flex items-center gap-1">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate max-w-[130px] xs:max-w-[180px] sm:max-w-none">
                          {language === 'bn' ? currentSlide.categoryBn : currentSlide.categoryEn}
                        </span>
                      </span>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md border border-slate-700/60">
                        Page {currentSlide.sourceDocPage}
                      </span>
                    </div>

                    {/* Slide Counter & Pause/Play Button */}
                    <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono text-slate-300 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-md">
                        <strong className="text-amber-400 font-bold">{String(currentIndex + 1).padStart(2, '0')}</strong>
                        <span className="text-slate-500"> / </span>
                        <span>{String(totalSlides).padStart(2, '0')}</span>
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPaused(!isPaused);
                        }}
                        className="p-1 sm:p-1.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white transition-colors"
                        title={isPaused ? 'Resume Auto-Slide' : 'Pause Auto-Slide'}
                        aria-label={isPaused ? 'Resume Slide' : 'Pause Slide'}
                      >
                        {isPaused ? <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> : <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />}
                      </button>
                    </div>
                  </div>

                  {/* Mobile-Only Compact Overlay Card: Slim & unobtrusive, leaving >80% image visible */}
                  <div className="sm:hidden absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/70 shadow-xl transition-all z-10">
                    <div className="flex items-center justify-between gap-1 text-[10px] text-amber-400 mb-0.5">
                      <div className="flex items-center gap-1 truncate font-medium">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">
                          {language === 'bn' ? currentSlide.locationBn : currentSlide.locationEn}
                        </span>
                      </div>
                      <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-500/30 shrink-0">
                        {language === 'bn' ? currentSlide.tagBn : currentSlide.tagEn}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs xs:text-sm font-bold text-white truncate">
                        {language === 'bn' ? currentSlide.titleBn : currentSlide.titleEn}
                      </h3>
                      <Link
                        to={`/projects/${currentSlide.id}`}
                        className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-amber-400 shrink-0 hover:text-amber-300"
                      >
                        <span>{language === 'bn' ? 'বিস্তারিত' : 'Case Study'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Tablet & Desktop Glass Overlay Tray: Spacious, elegant with full stats */}
                  <div className="hidden sm:block absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4 p-3.5 lg:p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-2xl transition-all z-10">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400 truncate">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">
                          {language === 'bn' ? currentSlide.locationBn : currentSlide.locationEn}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30 flex-shrink-0">
                        {language === 'bn' ? currentSlide.tagBn : currentSlide.tagEn}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight mb-2">
                      {language === 'bn' ? currentSlide.titleBn : currentSlide.titleEn}
                    </h3>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                      <span className="text-slate-400 font-medium">
                        {language === 'bn' ? currentSlide.highlightStatBn : currentSlide.highlightStatEn}
                      </span>
                      <Link
                        to={`/projects/${currentSlide.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <span>{language === 'bn' ? 'বিস্তারিত প্রোফাইল দেখুন' : 'View Project Case Study'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Left & Right Arrow Buttons with glowing glass rings */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevSlide();
                    }}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-950/80 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-slate-700/70 hover:border-amber-400 transition-all opacity-80 group-hover:opacity-100 shadow-xl z-20 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextSlide();
                    }}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-950/80 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-slate-700/70 hover:border-amber-400 transition-all opacity-80 group-hover:opacity-100 shadow-xl z-20 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Countdown Progress Line at top of the slide */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 z-20">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Thumbnail / Dot Indicators */}
                <div className="px-3 sm:px-4 py-2.5 bg-slate-950 flex items-center justify-between border-t border-slate-800">
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                    {language === 'bn' ? 'স্বয়ংক্রিয়ভাবে স্লাইড হচ্ছে' : 'Auto-advancing every 4.5s'}
                  </div>

                  {/* Dots / Interactive tabs */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {HERO_SLIDES.map((slide, idx) => {
                      const isActive = idx === currentIndex;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => goToSlide(idx)}
                          className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                            isActive
                              ? 'w-6 sm:w-8 bg-amber-400'
                              : 'w-2 bg-slate-700 hover:bg-slate-500'
                          }`}
                          aria-label={`Go to slide ${idx + 1}: ${slide.titleEn}`}
                          title={slide.titleEn}
                        />
                      );
                    })}
                  </div>

                  <div className="text-[10px] sm:text-[11px] text-amber-400 font-semibold hidden sm:block">
                    {isPaused ? (language === 'bn' ? 'স্থগিত (Paused)' : 'Paused') : (language === 'bn' ? 'চলমান (Playing)' : 'Active')}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

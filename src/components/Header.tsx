import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  Globe,
  ChevronDown,
  ChevronRight,
  FolderKanban,
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Building2,
  Handshake,
  Camera,
  Send,
  Anchor,
  HardHat,
  Truck,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setProjectsDropdownOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setProjectsDropdownOpen(false);
        setMoreDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    t.contact.whatsappPrefill
  )}`;

  const isServicesActive = location.pathname.startsWith('/services');
  const isProjectsActive = location.pathname.startsWith('/projects') || location.pathname.startsWith('/future-projects');
  const isMoreActive =
    location.pathname.startsWith('/materials') ||
    location.pathname.startsWith('/gallery') ||
    location.pathname.startsWith('/partners') ||
    location.pathname.startsWith('/connect-with-us');

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs xl:text-sm font-medium transition-colors relative py-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
      isActive
        ? 'text-amber-400 font-semibold after:content-[\'\'] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-amber-400'
        : 'text-slate-300 hover:text-white after:content-[\'\'] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all'
    }`;

  return (
    <header className="sticky top-0 w-full z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-2.5 sm:py-3 transition-all">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Brand Identity / Official Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            aria-label="Jamat Hazera Development Construction Ltd. Home"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-500/50 bg-black shrink-0 group-hover:border-amber-400 transition-colors shadow-lg p-0.5">
              <img
                src={COMPANY_CONFIG.logoPath}
                alt="JHDCL Official Emblem"
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />
            </div>
            <div className="flex flex-col max-w-[200px] sm:max-w-[280px] xl:max-w-none">
              <span className="text-xs sm:text-sm xl:text-base font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors leading-tight">
                {language === 'bn' ? COMPANY_CONFIG.nameBn : COMPANY_CONFIG.nameEn}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Streamlined to fit perfectly at all widths 1024px+) */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0" aria-label="Main Navigation">
            <NavLink to="/" end className={navClass}>
              {t.nav.home}
            </NavLink>

            <NavLink to="/about" className={navClass}>
              {t.nav.about}
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={servicesDropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`inline-flex items-center gap-1 text-xs xl:text-sm font-medium transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                  isServicesActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-1">
                    <Link
                      to="/services"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{language === 'bn' ? 'সকল ১০টি বিভাগ দেখুন' : 'All 10 Core Sectors'}</span>
                    </Link>
                    <Link
                      to="/services/construction"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{language === 'bn' ? '১ম শ্রেণির সিভিল নির্মাণ' : '1st-Class Construction'}</span>
                    </Link>
                    <Link
                      to="/services/supply-import-export"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{language === 'bn' ? 'আমদানি ও সরবরাহ বিভাগ' : 'Import & Aggregate Supply'}</span>
                    </Link>
                    <Link
                      to="/services/land-development"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Anchor className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{language === 'bn' ? 'ভূমি উন্নয়ন ও নদী ড্রেজিং' : 'Dredging & Land Dev.'}</span>
                    </Link>
                    <Link
                      to="/services/real-estate-housing"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <HardHat className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{language === 'bn' ? 'রিয়েল এস্টেট ও আবাসন' : 'Real Estate & Housing'}</span>
                    </Link>
                    <Link
                      to="/services/consultancy"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{language === 'bn' ? 'প্রকৌশল ও কনসালটেন্সি' : 'Consultancy & Design'}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Projects Dropdown Menu */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                className={`inline-flex items-center gap-1 text-xs xl:text-sm font-medium transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                  isProjectsActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={projectsDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.projects}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    projectsDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 w-60 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-1">
                    <Link
                      to="/projects"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <FolderKanban className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{t.nav.projectsDropdown.all}</span>
                    </Link>

                    <Link
                      to="/projects/completed"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t.nav.projectsDropdown.completed}</span>
                    </Link>

                    <Link
                      to="/projects/ongoing"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{t.nav.projectsDropdown.ongoing}</span>
                    </Link>

                    <Link
                      to="/projects/upcoming"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{t.nav.projectsDropdown.upcoming}</span>
                    </Link>

                    <Link
                      to="/future-projects"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-amber-400 hover:bg-slate-800 rounded-md transition-colors border-t border-slate-800 pt-1.5"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{language === 'bn' ? 'ভবিষ্যৎ পরিকল্পনা' : 'Proposed Future Plans'}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/equipment" className={navClass}>
              {t.nav.equipment}
            </NavLink>

            <NavLink to="/leadership" className={navClass}>
              {t.nav.leadership}
            </NavLink>

            {/* More Mega Dropdown (Cleanly houses Materials, Gallery, Partners, Connect Portal) */}
            <div
              className="relative"
              ref={moreDropdownRef}
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`inline-flex items-center gap-1 text-xs xl:text-sm font-medium transition-colors py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                  isMoreActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>{language === 'bn' ? 'আরও ▾' : 'More'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-1">
                    <Link
                      to="/materials/sand"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{language === 'bn' ? 'বালু ও মাটি ক্যাটালগ (১৫ প্রকার)' : 'Sand & Soil Catalog'}</span>
                    </Link>

                    <Link
                      to="/materials/stone-aggregate"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{language === 'bn' ? 'পাথর ও অ্যাগ্রিগেট (দুবাই ও পাকুড়)' : 'Stone Aggregates'}</span>
                    </Link>

                    <Link
                      to="/gallery"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Camera className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{t.nav.gallery}</span>
                    </Link>

                    <Link
                      to="/partners"
                      className="flex items-center gap-2.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Handshake className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{language === 'bn' ? 'সহযোগী ও J-V অংশীদার' : 'Sister Concerns & J-Vs'}</span>
                    </Link>

                    <Link
                      to="/connect-with-us"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-amber-400 hover:bg-slate-800 rounded-md transition-colors border-t border-slate-800 pt-2"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{language === 'bn' ? 'কর্পোরেট ইনকোয়ারি পোর্টাল' : 'Connect With Us (7 Pathways)'}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navClass}>
              {t.nav.contact}
            </NavLink>
          </nav>

          {/* Right Action Cluster: Perfectly proportioned to NEVER overflow on 1024px-4K */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-md transition-all tap-effect"
              aria-label="Toggle language between English and Bangla"
              title={language === 'en' ? 'বাংলা ভাষায় দেখুন' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm btn-sheen tap-effect shrink-0"
              title="Chat directly with JHDCL on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Quick Dial: Responsively displays full text on xl+, icon pill on lg to prevent edge clipping */}
            <a
              href={`tel:${COMPANY_CONFIG.whatsappRaw}`}
              className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-all tap-effect shrink-0"
              title={`Call Official Desk: ${COMPANY_CONFIG.whatsappFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden xl:inline font-mono text-[11px] whitespace-nowrap">{COMPANY_CONFIG.whatsappFormatted}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2.5 py-1 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-md tap-effect"
              aria-label="Toggle language"
            >
              {t.nav.switchLang}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 tap-effect"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Touch-Friendly Dropdown) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[85vh] bg-slate-950/98 backdrop-blur-2xl border-t border-b border-slate-800 px-5 py-6 overflow-y-auto shadow-2xl z-50 flex flex-col justify-between">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.home}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            <Link
              to="/about"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.about}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            {/* Mobile Services Submenu */}
            <div className="rounded-md bg-slate-900/40 border border-slate-800/80 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400"
              >
                <span className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-amber-400" />
                  <span>{t.nav.services}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-amber-400' : 'text-slate-500'
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 space-y-1 bg-slate-950/60 border-t border-slate-800">
                  <Link
                    to="/services"
                    className="block px-3 py-1.5 text-xs font-semibold text-amber-400 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'সকল ১০টি বিভাগ দেখুন' : 'All 10 Core Sectors'}
                  </Link>
                  <Link
                    to="/services/construction"
                    className="block px-3 py-1.5 text-xs font-medium text-slate-200 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? '১ম শ্রেণির সিভিল নির্মাণ' : '1st-Class Construction'}
                  </Link>
                  <Link
                    to="/services/supply-import-export"
                    className="block px-3 py-1.5 text-xs font-medium text-slate-200 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'আমদানি ও সরবরাহ বিভাগ' : 'Import & Aggregate Supply'}
                  </Link>
                  <Link
                    to="/services/land-development"
                    className="block px-3 py-1.5 text-xs font-medium text-slate-200 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'ভূমি উন্নয়ন ও নদী ড্রেজিং' : 'Dredging & Land Dev.'}
                  </Link>
                  <Link
                    to="/services/real-estate-housing"
                    className="block px-3 py-1.5 text-xs font-medium text-slate-200 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'রিয়েল এস্টেট ও আবাসন' : 'Real Estate & Housing'}
                  </Link>
                  <Link
                    to="/services/consultancy"
                    className="block px-3 py-1.5 text-xs font-medium text-slate-200 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'প্রকৌশল ও কনসালটেন্সি' : 'Consultancy & Design'}
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Projects Submenu Accordion */}
            <div className="rounded-md bg-slate-900/40 border border-slate-800/80 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400"
              >
                <span className="flex items-center gap-2">
                  <FolderKanban className="w-4 h-4 text-amber-400" />
                  <span>{t.nav.projects}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProjectsOpen ? 'rotate-180 text-amber-400' : 'text-slate-500'
                  }`}
                />
              </button>

              {mobileProjectsOpen && (
                <div className="px-3 pb-3 space-y-1 bg-slate-950/60 border-t border-slate-800">
                  <Link
                    to="/projects"
                    className="block px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-amber-400 rounded-md"
                  >
                    · {t.nav.projectsDropdown.all}
                  </Link>
                  <Link
                    to="/projects/completed"
                    className="block px-3 py-1.5 text-xs font-medium text-emerald-400 hover:underline rounded-md"
                  >
                    · {t.nav.projectsDropdown.completed}
                  </Link>
                  <Link
                    to="/projects/ongoing"
                    className="block px-3 py-1.5 text-xs font-medium text-amber-400 hover:underline rounded-md"
                  >
                    · {t.nav.projectsDropdown.ongoing}
                  </Link>
                  <Link
                    to="/projects/upcoming"
                    className="block px-3 py-1.5 text-xs font-medium text-sky-400 hover:underline rounded-md"
                  >
                    · {t.nav.projectsDropdown.upcoming}
                  </Link>
                  <Link
                    to="/future-projects"
                    className="block px-3 py-1.5 text-xs font-medium text-amber-400 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'ভবিষ্যৎ পরিকল্পনা' : 'Proposed Future Plans'}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/equipment"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.equipment}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            <Link
              to="/leadership"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.leadership}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            <Link
              to="/gallery"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.gallery}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            <Link
              to="/partners"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{language === 'bn' ? 'সহযোগী ও J-V অংশীদার' : 'Sister Concerns & J-V Partners'}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.contact}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

            <Link
              to="/connect-with-us"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-md mt-2"
            >
              <span>{language === 'bn' ? 'কর্পোরেট ইনকোয়ারি পোর্টাল (৭ চ্যানেল)' : 'Connect With Us (7 Pathways)'}</span>
              <Send className="w-4 h-4 text-amber-400" />
            </Link>
          </nav>

          <div className="pt-5 border-t border-slate-800 grid grid-cols-2 gap-3 mt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-center transition-colors tap-effect"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.whatsappRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-md text-center transition-colors tap-effect"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

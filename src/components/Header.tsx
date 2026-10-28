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
  Send,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [materialsDropdownOpen, setMaterialsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const materialsDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    setMaterialsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
      if (materialsDropdownRef.current && !materialsDropdownRef.current.contains(event.target as Node)) {
        setMaterialsDropdownOpen(false);
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
        setProjectsDropdownOpen(false);
        setMaterialsDropdownOpen(false);
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

  const isProjectsActive = location.pathname.startsWith('/projects');
  const isMaterialsActive = location.pathname.startsWith('/materials');

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
      isActive
        ? 'text-amber-400 font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-400'
        : 'text-slate-300 hover:text-white after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all'
    }`;

  return (
    <header className="relative w-full z-40 bg-slate-950 border-b border-slate-800 shadow-md py-3.5 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Official Logo */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            aria-label="Jamat Hazera Development Construction Ltd. Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-500/40 bg-black flex-shrink-0 group-hover:border-amber-400 transition-colors shadow-lg p-0.5">
              <img
                src={COMPANY_CONFIG.logoPath}
                alt="JHDCL Official Emblem"
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors leading-tight">
                {language === 'bn' ? COMPANY_CONFIG.nameBn : COMPANY_CONFIG.nameEn}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Main Navigation">
            <NavLink to="/" end className={navClass}>
              {t.nav.home}
            </NavLink>

            <NavLink to="/about" className={navClass}>
              {t.nav.about}
            </NavLink>

            <NavLink to="/services" className={navClass}>
              {t.nav.services}
            </NavLink>

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
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                  isProjectsActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={projectsDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.projects}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    projectsDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Card */}
              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 w-60 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-1">
                    <Link
                      to="/projects"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <FolderKanban className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{t.nav.projectsDropdown.all}</span>
                    </Link>

                    <Link
                      to="/projects/completed"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{t.nav.projectsDropdown.completed}</span>
                    </Link>

                    <Link
                      to="/projects/ongoing"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{t.nav.projectsDropdown.ongoing}</span>
                    </Link>

                    <Link
                      to="/projects/upcoming"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <span>{t.nav.projectsDropdown.upcoming}</span>
                    </Link>

                    <Link
                      to="/future-projects"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-amber-400 hover:bg-slate-800 rounded-md transition-colors border-t border-slate-800 pt-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{language === 'bn' ? 'ভবিষ্যৎ পরিকল্পনা' : 'Proposed Future Plans'}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Materials Dropdown Menu */}
            <div
              className="relative"
              ref={materialsDropdownRef}
              onMouseEnter={() => setMaterialsDropdownOpen(true)}
              onMouseLeave={() => setMaterialsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMaterialsDropdownOpen(!materialsDropdownOpen)}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                  isMaterialsActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={materialsDropdownOpen}
                aria-haspopup="true"
              >
                <span>{language === 'bn' ? 'নির্মাণ সামগ্রী' : 'Materials'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    materialsDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {materialsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-1">
                    <Link
                      to="/materials/sand"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Layers className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{language === 'bn' ? 'বালু ও মাটি ক্যাটালগ (১৫ প্রকার)' : 'Sand & Soil Catalog (15 Types)'}</span>
                    </Link>

                    <Link
                      to="/materials/stone-aggregate"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                    >
                      <Layers className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{language === 'bn' ? 'পাথর ও অ্যাগ্রিগেট (দুবাই ও পাকুড়)' : 'Stone Aggregates (Dubai & Pakur)'}</span>
                    </Link>

                    <Link
                      to="/services/supply-import-export"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors border-t border-slate-800 pt-2"
                    >
                      <span>{language === 'bn' ? 'আমদানি-রপ্তানি বিভাগ' : 'Supply & Import Division'}</span>
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

            <NavLink to="/gallery" className={navClass}>
              {t.nav.gallery}
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              {t.nav.contact}
            </NavLink>

            {/* Dedicated Connect Portal */}
            <NavLink
              to="/connect-with-us"
              className={({ isActive }) =>
                `text-xs font-bold px-3 py-1.5 rounded transition-all ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-amber-400 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30'
                }`
              }
            >
              {language === 'bn' ? 'কানেক্ট' : 'Connect'}
            </NavLink>
          </nav>

          {/* Right Action Cluster: Language Switcher + WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle language between English and Bangla"
              title={language === 'en' ? 'বাংলা ভাষায় দেখুন' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              title="Chat directly with JHDCL on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Quick Dial */}
            <a
              href={`tel:${COMPANY_CONFIG.whatsappRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              title={`Call Official Desk: ${COMPANY_CONFIG.whatsappFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px]">{COMPANY_CONFIG.whatsappFormatted}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2.5 py-1 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-md"
              aria-label="Toggle language"
            >
              {t.nav.switchLang}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Touch-Friendly Dropdown) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 max-h-[85vh] bg-slate-950/98 backdrop-blur-xl border-t border-b border-slate-800 px-5 py-6 overflow-y-auto shadow-2xl z-50 flex flex-col justify-between">
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

            <Link
              to="/services"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{t.nav.services}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>

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

            {/* Mobile Materials Submenu Accordion */}
            <div className="rounded-md bg-slate-900/40 border border-slate-800/80 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'bn' ? 'নির্মাণ সামগ্রী ক্যাটালগ' : 'Materials Catalogs'}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileMaterialsOpen ? 'rotate-180 text-amber-400' : 'text-slate-500'
                  }`}
                />
              </button>

              {mobileMaterialsOpen && (
                <div className="px-3 pb-3 space-y-1 bg-slate-950/60 border-t border-slate-800">
                  <Link
                    to="/materials/sand"
                    className="block px-3 py-1.5 text-xs font-medium text-amber-400 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'বালু ও মাটি ক্যাটালগ (১৫ প্রকার)' : 'Sand & Soil Catalog (15 Types)'}
                  </Link>
                  <Link
                    to="/materials/stone-aggregate"
                    className="block px-3 py-1.5 text-xs font-medium text-emerald-400 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'পাথর ও অ্যাগ্রিগেট (দুবাই, পাকুড়)' : 'Stone & Aggregates Catalog'}
                  </Link>
                  <Link
                    to="/services/supply-import-export"
                    className="block px-3 py-1.5 text-xs font-medium text-slate-300 hover:underline rounded-md"
                  >
                    · {language === 'bn' ? 'আমদানি ও সরবরাহ বিভাগ' : 'Supply & Import Division'}
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
              to="/partners"
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-md"
            >
              <span>{language === 'bn' ? 'সহযোগী ও J-V অংশীদার' : 'Sister Concerns & J-V Partners'}</span>
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
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-center transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_CONFIG.whatsappRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-md text-center transition-colors"
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

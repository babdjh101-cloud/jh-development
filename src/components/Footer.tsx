import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import { ArrowUp, Building2, Phone, Mail, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.projects },
    { to: '/equipment', label: t.nav.equipment },
    { to: '/leadership', label: t.nav.leadership },
    { to: '/partners', label: language === 'bn' ? 'সহযোগী ও J-V পার্টনার্স' : 'Partners & Sister Concerns' },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
    { to: '/connect-with-us', label: language === 'bn' ? 'কর্পোরেট ইনকোয়ারি পোর্টাল' : 'Connect With Us' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs" aria-label="Corporate Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/40 bg-black flex-shrink-0 group-hover:border-amber-400 transition-colors shadow-lg p-0.5">
                <img
                  src={COMPANY_CONFIG.logoPath}
                  alt="JHDCL Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-white block group-hover:text-amber-400 transition-colors leading-tight">
                  {language === 'bn' ? COMPANY_CONFIG.nameBn : COMPANY_CONFIG.nameEn}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {COMPANY_CONFIG.sloganEn}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {language === 'bn'
                ? 'জেএইচডিসিএল সফলভাবে দেশের অভ্যন্তরে এবং আন্তর্জাতিক পরিমণ্ডলে সিভিল নির্মাণ, কাটার সাকশন ড্রেজিং, নদী তীর সংরক্ষণ এবং বৃহৎ পরিসরে পাথর ও বালু সরবরাহ সেবা প্রদান করে আসছে।'
                : 'JHDCL is successfully executing projects and providing services in the construction sector, both within Bangladesh and internationally, with specialized fleets of cutter suction dredgers and heavy machinery.'}
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  t.contact.whatsappPrefill
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors shadow-sm w-fit"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_CONFIG.whatsappFormatted}</span>
              </a>
              <span className="text-[11px] font-mono text-slate-500">
                Official RJSC Incorporation No: #{COMPANY_CONFIG.incorporationNo}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-amber-400 transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trade License & Specialized Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {language === 'bn' ? 'ব্যবসায়িক খাত ও ক্যাটালগ' : 'Divisions & Catalogs'}
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>
                <Link to="/services/construction" className="hover:text-amber-400 transition-colors">
                  · 1st Class Construction &amp; Civil Works
                </Link>
              </li>
              <li>
                <Link to="/services/supply-import-export" className="hover:text-amber-400 transition-colors">
                  · Supplier — Import &amp; Export Division
                </Link>
              </li>
              <li>
                <Link to="/services/land-development" className="hover:text-amber-400 transition-colors">
                  · Land Development &amp; Landlord Scope
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate-housing" className="hover:text-amber-400 transition-colors">
                  · Real Estate, Green City &amp; Commercial Malls
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="hover:text-amber-400 transition-colors">
                  · Engineering &amp; Dredging Consultancy
                </Link>
              </li>
              <li>
                <Link to="/materials/sand" className="hover:text-amber-400 transition-colors text-amber-400/90 font-medium">
                  · Sand &amp; Soil Catalog (15 Types)
                </Link>
              </li>
              <li>
                <Link to="/materials/stone-aggregate" className="hover:text-amber-400 transition-colors text-emerald-400/90 font-medium">
                  · Stone &amp; Aggregates (Dubai Gabbro, Pakur)
                </Link>
              </li>
              <li>
                <Link to="/future-projects" className="hover:text-amber-400 transition-colors">
                  · Proposed 503 Upazila Towers &amp; Green Cities
                </Link>
              </li>
              <li>
                <Link to="/business-roadmap" className="hover:text-amber-400 transition-colors">
                  · 5-Year &amp; 10-Year Corporate Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Registered Offices
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="border-l border-amber-400/80 pl-2.5">
                <span className="font-semibold text-slate-300 block">Banani Head Office:</span>
                <span className="text-slate-400 block leading-tight text-[11px] mt-0.5">
                  {COMPANY_CONFIG.headOffice.addressEn}
                </span>
                <span className="font-mono text-slate-400 text-[11px] block mt-0.5">
                  Phone: {COMPANY_CONFIG.headOffice.phones[0]}
                </span>
              </div>

              <div className="border-l border-slate-700 pl-2.5">
                <span className="font-semibold text-slate-300 block">Uttara Corporate Office:</span>
                <span className="text-slate-400 block leading-tight text-[11px] mt-0.5">
                  {COMPANY_CONFIG.corporateOffice.addressEn}
                </span>
                <span className="font-mono text-slate-400 text-[11px] block mt-0.5">
                  Phone: {COMPANY_CONFIG.corporateOffice.phones[0]}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-900 text-[11px]">
                <span className="text-slate-500 block">Banking Channels:</span>
                <span className="text-slate-300">
                  {COMPANY_CONFIG.bankingChannels.join(' · ')}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Disclaimer & Scroll-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-400">
              &copy; {currentYear} {COMPANY_CONFIG.nameEn}. {t.footer.copyright}
            </p>
            <p className="text-[11px] text-slate-500 max-w-3xl leading-relaxed">
              All company facts, equipment fleet counts, executive leadership profiles, and site photography are derived strictly from verified JHDCL corporate profile documentation and the 28 October 2026 corporate briefing. Unaudited marketing aspirations (such as top LEED constructor ratings or multi-upazila concept projections) are transparently declared as proposed targets subject to feasibility, land acquisition, and regulatory clearances.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shrink-0"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

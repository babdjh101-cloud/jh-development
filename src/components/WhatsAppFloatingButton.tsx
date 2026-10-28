import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import { PROJECTS_DATA } from '../data/projects';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();

  // Contextual pre-filled message generator
  let prefillMessage = t.contact.whatsappPrefill;

  if (location.pathname.startsWith('/projects/')) {
    const slug = location.pathname.replace('/projects/', '');
    const found = PROJECTS_DATA.find((p) => p.id === slug);
    if (found) {
      prefillMessage =
        language === 'bn'
          ? `আসসালামু আলাইকুম। জেএইচডিসিএল-এর "${found.titleBn}" (${found.locationBn}) প্রকল্প সম্পর্কে জানতে আগ্রহী।`
          : `Hello JHDCL, I would like to inquire about project: ${found.titleEn} (${found.locationEn}).`;
    }
  } else if (location.pathname === '/equipment') {
    prefillMessage =
      language === 'bn'
        ? `আসসালামু আলাইকুম। জেএইচডিসিএল-এর ড্রেজার, বাল্কহেড ও ভারী যন্ত্রপাতি ভাড়ার সক্ষমতা সম্পর্কে জানতে আগ্রহী।`
        : `Hello JHDCL, I would like to inquire about your dredgers, bulkheads, and heavy machinery fleet availability.`;
  } else if (location.pathname === '/services') {
    prefillMessage =
      language === 'bn'
        ? `আসসালামু আলাইকুম। জেএইচডিসিএল-এর নদী ড্রেজিং, সিভিল ও পাথর/বালু সরবরাহ কাজের বিষয়ে আলোচনা করতে চাই।`
        : `Hello JHDCL, I would like to inquire about your engineering, dredging, and aggregate supply services.`;
  }

  const cleanNumber = COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(prefillMessage)}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 border border-emerald-400/40"
        aria-label={`Chat with JHDCL on WhatsApp (${COMPANY_CONFIG.whatsappDisplay})`}
        title={`Chat with JHDCL on WhatsApp (${COMPANY_CONFIG.whatsappDisplay})`}
      >
        {/* Pulsing beacon indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageSquare className="w-5 h-5 flex-shrink-0" />

        {/* Desktop descriptive label */}
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide whitespace-nowrap">
          {language === 'bn' ? 'হোয়াটসঅ্যাপ চ্যাট' : 'Chat with JHDCL'}
        </span>

        {/* Hover Tooltip on small screen */}
        <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block sm:group-hover:hidden px-2.5 py-1 bg-slate-900 border border-slate-700 text-[11px] text-slate-200 rounded shadow-lg whitespace-nowrap">
          {COMPANY_CONFIG.whatsappDisplay}
        </div>
      </a>
    </aside>
  );
};

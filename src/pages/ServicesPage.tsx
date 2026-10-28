import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServicesSection } from '../components/ServicesSection';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'সেবাসমূহ ও সক্ষমতা | জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ'
        : 'Services & Capabilities | J.H. Development Construction Ltd. (JHDCL)';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: t.breadcrumbs.services }]}
          fallbackBackUrl="/"
          backLabel={language === 'bn' ? 'মূলপাতায় ফিরে যান' : 'Back to Home'}
        />
      </div>

      <ServicesSection />
    </div>
  );
};

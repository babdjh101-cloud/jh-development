import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GallerySection } from '../components/GallerySection';

export const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'চিত্রশালা ও সাইট ফটোগ্রাফি | জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ'
        : 'Project Field Gallery | J.H. Development Construction Ltd. (JHDCL)';
  }, [language]);

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: t.breadcrumbs.gallery }]}
          fallbackBackUrl="/"
          backLabel={language === 'bn' ? 'মূলপাতায় ফিরে যান' : 'Back to Home'}
        />
      </div>

      <GallerySection />
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_PHOTOS, GalleryPhoto, GalleryCategory } from '../data/gallery';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Maximize2, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  const handlePrev = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNext = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 bg-slate-950 border-t border-slate-800" aria-label="Field Photo Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.gallery.sectionKicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
            {t.gallery.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Bar (Segmented button control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 mb-8 max-w-fit">
          <button
            onClick={() => setSelectedCategory('all')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.gallery.all} ({GALLERY_PHOTOS.length})
          </button>

          <button
            onClick={() => setSelectedCategory('marine')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'marine'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.gallery.marine}
          </button>

          <button
            onClick={() => setSelectedCategory('civil')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'civil'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.gallery.civil}
          </button>

          <button
            onClick={() => setSelectedCategory('highway')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'highway'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.gallery.highway}
          </button>

          <button
            onClick={() => setSelectedCategory('railway')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === 'railway'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.gallery.railway}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={photo.src}
                  alt={photo.titleEn}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <span className="text-[9px] sm:text-[11px] font-semibold text-amber-400 block mb-0.5 sm:mb-1 truncate">
                  {language === 'bn' ? photo.categoryLabelBn : photo.categoryLabelEn}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-tight sm:leading-snug line-clamp-1">
                  {language === 'bn' ? photo.titleBn : photo.titleEn}
                </h3>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1 truncate text-[9px] sm:text-[11px]">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{language === 'bn' ? photo.locationBn : photo.locationEn}</span>
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 flex-shrink-0 ml-1">
                    p.{photo.pdfPage}
                  </span>
                </div>
              </div>

              {/* Top-Right Expand Icon */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-1.5 rounded bg-slate-950/80 backdrop-blur-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <ImageLightboxModal
          photo={activePhoto}
          onClose={() => setActivePhotoIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
};

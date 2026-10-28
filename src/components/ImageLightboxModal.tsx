import React, { useEffect } from 'react';
import { GalleryPhoto } from '../data/gallery';
import { useLanguage } from '../context/LanguageContext';
import { X, MapPin, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!photo) return;

    // Push state so pressing mobile back button cleanly dismisses lightbox modal
    window.history.pushState({ jhdclLightbox: true }, '');

    const handlePopState = () => {
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (window.history.state?.jhdclLightbox) {
          window.history.back();
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onPrev, onNext]);

  const handleExplicitClose = () => {
    if (window.history.state?.jhdclLightbox) {
      window.history.back();
    } else {
      onClose();
    }
  };

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={handleExplicitClose}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-amber-400">
              {language === 'bn' ? photo.categoryLabelBn : photo.categoryLabelEn}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
              <FileText className="w-3 h-3" />
              <span>PDF Page {photo.pdfPage}</span>
            </span>
          </div>

          <button
            onClick={handleExplicitClose}
            type="button"
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-md transition-colors tap-effect"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center overflow-hidden min-h-[50vh] max-h-[70vh]">
          <img
            src={photo.src}
            alt={photo.titleEn}
            className="max-h-full max-w-full object-contain select-none"
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Caption & Location Details */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {language === 'bn' ? photo.titleBn : photo.titleEn}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{language === 'bn' ? photo.locationBn : photo.locationEn}</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            Official JHDCL Profile Project Documentation
          </div>
        </div>
      </div>
    </div>
  );
};

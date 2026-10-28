import React, { useEffect } from 'react';
import { ProjectItem } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import { X, MapPin, Tag, CheckCircle2, Clock, Calendar, MessageSquare, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  // Handle hardware & browser back-button navigation on mobile devices
  useEffect(() => {
    if (!project) return;

    // Push modal state into browser history so back button closes modal rather than leaving the site
    window.history.pushState({ jhdclModal: 'project-detail' }, '');

    const handlePopState = () => {
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (window.history.state?.jhdclModal) {
          window.history.back();
        } else {
          onClose();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleExplicitClose = () => {
    if (window.history.state?.jhdclModal) {
      window.history.back();
    } else {
      onClose();
    }
  };

  if (!project) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'ongoing':
        return <Clock className="w-4 h-4 text-amber-400" />;
      case 'upcoming':
        return <Calendar className="w-4 h-4 text-sky-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return t.projects.completed;
      case 'ongoing':
        return t.projects.ongoing;
      case 'upcoming':
        return t.projects.upcoming;
      default:
        return status;
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello JHDCL, I would like to inquire about project: ${project.titleEn} (${project.locationEn})`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={handleExplicitClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            {getStatusIcon(project.status)}
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              {getStatusText(project.status)}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="font-mono text-slate-400">PDF Page {project.sourceDocPage}</span>
          </div>

          <button
            onClick={handleExplicitClose}
            type="button"
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 tap-effect"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Project Featured Image */}
          {project.image ? (
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 max-h-72">
              <img
                src={project.image}
                alt={project.titleEn}
                className="w-full h-full object-cover object-center max-h-72"
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-slate-950/80 backdrop-blur-sm rounded text-[10px] text-slate-400 font-mono">
                Verified JHDCL Field Photo
              </div>
            </div>
          ) : (
            <div className="h-44 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 text-xs">
              Project documentation record from corporate filing
            </div>
          )}

          <div>
            <h3
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold text-white tracking-tight"
            >
              {language === 'bn' ? project.titleBn : project.titleEn}
            </h3>
            {language === 'bn' && (
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {project.titleEn}
              </p>
            )}
          </div>

          {/* Metadata Row (Unboxed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block">{t.projects.locationLabel}:</span>
                <span className="text-slate-200 font-medium">
                  {language === 'bn' ? project.locationBn : project.locationEn}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Tag className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-500 block">{t.projects.categoryLabel}:</span>
                <span className="text-slate-200 font-medium">
                  {language === 'bn' ? project.categoryLabelBn : project.categoryLabelEn}
                </span>
              </div>
            </div>
          </div>

          {/* Project Detailed Prose */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Project Description &amp; Scope
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {language === 'bn' ? project.descriptionBn : project.descriptionEn}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              {language === 'bn' ? project.descriptionEn : project.descriptionBn}
            </p>
          </div>

          {/* Citation Box */}
          <div className="p-3.5 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 block mb-1">
              Source Record Reference:
            </span>
            <span>
              Documented in JHDCL Corporate Profile (Item #{project.sourceDocPage}, Section Projects Portfolio). Project classification reflects official corporate documentation.
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80">
          <button
            onClick={handleExplicitClose}
            type="button"
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors tap-effect"
          >
            {t.projects.closeModal}
          </button>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-sm btn-sheen tap-effect"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Inquire About This Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

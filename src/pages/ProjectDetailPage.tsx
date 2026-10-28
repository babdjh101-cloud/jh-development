import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import { COMPANY_CONFIG } from '../config/company';
import {
  MapPin,
  Tag,
  CheckCircle2,
  Clock,
  Calendar,
  MessageSquare,
  Mail,
  FileText,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const project = useMemo(() => {
    return PROJECTS_DATA.find((p) => p.id === id);
  }, [id]);

  useEffect(() => {
    if (project) {
      document.title =
        language === 'bn'
          ? `${project.titleBn} | জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ`
          : `${project.titleEn} | J.H. Development Construction Ltd. (JHDCL)`;
    } else {
      document.title = 'Project Not Found | JHDCL';
    }
  }, [project, language]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 bg-slate-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mx-auto">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {t.projectDetail.notFoundTitle}
          </h1>
          <p className="text-sm text-slate-400">
            {t.projectDetail.notFoundDesc}
          </p>
          <div className="pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              <span>{t.projectDetail.backToPortfolio}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related projects in the same status
  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.status === project.status && p.id !== project.id
  ).slice(0, 3);

  const categoryUrl = `/projects/${project.status}`;
  const categoryLabel =
    project.status === 'completed'
      ? t.projects.completed
      : project.status === 'ongoing'
      ? t.projects.ongoing
      : t.projects.upcoming;

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello JHDCL Corporate Office, I am inquiring regarding project: "${project.titleEn}" located at ${project.locationEn}. Please share further technical execution details.`
  )}`;

  const emailInquiryUrl = `mailto:${COMPANY_CONFIG.headOffice.emails[0]}?subject=${encodeURIComponent(
    `[JHDCL Project Inquiry] ${project.titleEn}`
  )}&body=${encodeURIComponent(
    `Project: ${project.titleEn}\nLocation: ${project.locationEn}\nStatus: ${project.status}\n\nInquiry details:`
  )}`;

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step-by-Step Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.projects, href: '/projects' },
            { label: categoryLabel, href: categoryUrl },
            { label: language === 'bn' ? project.titleBn : project.titleEn },
          ]}
          fallbackBackUrl={categoryUrl}
          backLabel={`${t.projectDetail.backToCategory} ${categoryLabel}`}
        />

        {/* Hero Banner with Genuine Extracted Image */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl mb-10">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[480px] bg-slate-950">
            {project.image ? (
              <img
                src={project.image}
                alt={project.titleEn}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-slate-600 font-mono">
                Verified Corporate Document Record
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Badges on hero image */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-semibold text-white">
                {language === 'bn' ? project.categoryLabelBn : project.categoryLabelEn}
              </span>
              <span className="px-3 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-semibold text-amber-400">
                {categoryLabel}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1 bg-slate-950/90 rounded text-[11px] text-slate-400 font-mono border border-slate-800">
              PDF Page #{project.sourceDocPage}
            </div>
          </div>
        </div>

        {/* Content Layout: 8 cols details + 4 cols sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium mb-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{language === 'bn' ? project.locationBn : project.locationEn}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'bn' ? project.titleBn : project.titleEn}
              </h1>
              {language === 'bn' && (
                <p className="text-sm text-slate-400 font-mono mt-1">
                  {project.titleEn}
                </p>
              )}
            </div>

            {/* Project Scope Description */}
            <div className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                {t.projectDetail.scope}
              </h2>
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {language === 'bn' ? project.descriptionBn : project.descriptionEn}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed italic border-t border-slate-800/80 pt-3">
                {language === 'bn' ? project.descriptionEn : project.descriptionBn}
              </p>
            </div>

            {/* Official PDF Document Citation Record */}
            <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Corporate Verification &amp; Source Archive</span>
              </div>
              <p className="leading-relaxed">
                This project record is documented under item #{project.sourceDocPage} of the official company profile (Update JHDCL-2026). Classification reflects verified corporate filings and work orders under J.H. Development Construction Ltd.
              </p>
            </div>

            {/* Direct Inquiry Actions */}
            <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Have an inquiry regarding this project?
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Contact our engineering desk for consortium participation or material tenders.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.projectDetail.inquireWhatsApp}</span>
                </a>

                <a
                  href={emailInquiryUrl}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-lg bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 pb-3 border-b border-slate-800">
                Project Profile Meta
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 block mb-0.5">{t.projectDetail.status}:</span>
                  <span className="font-semibold text-amber-400">{categoryLabel}</span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">{t.projectDetail.category}:</span>
                  <span className="text-slate-200 font-medium">
                    {language === 'bn' ? project.categoryLabelBn : project.categoryLabelEn}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">{t.projectDetail.location}:</span>
                  <span className="text-slate-200 font-medium">
                    {language === 'bn' ? project.locationBn : project.locationEn}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Corporate Contractor:</span>
                  <span className="text-slate-200 font-medium">{COMPANY_CONFIG.nameEn}</span>
                </div>

                <div>
                  <span className="text-slate-500 block mb-0.5">Citation Source:</span>
                  <span className="font-mono text-slate-400">PDF Profile Page {project.sourceDocPage}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-2">
              <span className="font-semibold text-white block">Corporate Secretariat:</span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {COMPANY_CONFIG.headOffice.addressEn}
              </p>
              <div className="pt-2 font-mono text-amber-400 text-xs">
                {COMPANY_CONFIG.whatsappDisplay}
              </div>
            </div>
          </div>

        </div>

        {/* Related Projects in same status */}
        {relatedProjects.length > 0 && (
          <div className="pt-10 border-t border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">
                {t.projectDetail.relatedProjects}
              </h2>
              <Link
                to={categoryUrl}
                className="text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>{language === 'bn' ? 'সকলটি দেখুন' : 'View All'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.id}`}
                  className="group p-2.5 sm:p-4 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-amber-400 mb-1 truncate">
                      {language === 'bn' ? rel.locationBn : rel.locationEn}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-1 sm:mb-2 line-clamp-2">
                      {language === 'bn' ? rel.titleBn : rel.titleEn}
                    </h3>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-semibold inline-flex items-center gap-1 mt-2">
                    <span className="truncate">{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

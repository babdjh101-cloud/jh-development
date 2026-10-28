import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS_DATA, ProjectStatus } from '../data/projects';
import { MapPin, ArrowRight, CheckCircle2, Clock, Calendar, Info } from 'lucide-react';

interface ProjectsCategoryPageProps {
  status: ProjectStatus;
}

export const ProjectsCategoryPage: React.FC<ProjectsCategoryPageProps> = ({ status }) => {
  const { language, t } = useLanguage();

  const categoryMeta = useMemo(() => {
    switch (status) {
      case 'completed':
        return {
          titleEn: 'Completed Projects',
          titleBn: 'সম্পন্ন প্রকল্পসমূহ',
          descEn: 'Civil, marine, dredging, and infrastructure works completed and handed over as documented in the corporate profile.',
          descBn: 'জেএইচডিসিএল কর্তৃক সফলভাবে সম্পন্ন ও হস্তান্তরিত সিভিল, নদী খনন ও অবকাঠামো প্রকল্পসমূহ।',
          icon: CheckCircle2,
          color: 'text-emerald-400',
        };
      case 'ongoing':
        return {
          titleEn: 'Ongoing Projects',
          titleBn: 'চলমান প্রকল্পসমূহ',
          descEn: 'Active river dredging, sand filling, power plant earthworks, and material distribution operations recorded in corporate records.',
          descBn: 'বর্তমানে নদী খনন, বালু ভরাট, বিদ্যুৎ কেন্দ্র গ্রাউন্ডওয়ার্ক এবং নির্মাণ সামগ্রী সরবরাহে চলমান প্রকল্পসমূহ।',
          icon: Clock,
          color: 'text-amber-400',
        };
      case 'upcoming':
        return {
          titleEn: 'Upcoming Projects',
          titleBn: 'আসন্ন প্রকল্পসমূহ',
          descEn: 'Upcoming mega infrastructure contracts, coastal sand filling works, and commercial developments scheduled in corporate filings.',
          descBn: 'আসন্ন মেগা অবকাঠামো চুক্তি, উপকূলীয় বালু ভরাট ও বাণিজ্যিক ভবন নির্মাণ সংক্রান্ত ভবিষ্যৎ প্রকল্পসমূহ।',
          icon: Calendar,
          color: 'text-sky-400',
        };
    }
  }, [status]);

  useEffect(() => {
    document.title =
      language === 'bn'
        ? `${categoryMeta.titleBn} | জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ`
        : `${categoryMeta.titleEn} | J.H. Development Construction Ltd. (JHDCL)`;
  }, [language, categoryMeta]);

  const projects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => p.status === status);
  }, [status]);

  const Icon = categoryMeta.icon;

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { label: t.breadcrumbs.projects, href: '/projects' },
            { label: language === 'bn' ? categoryMeta.titleBn : categoryMeta.titleEn },
          ]}
          fallbackBackUrl="/projects"
          backLabel={t.breadcrumbs.backToProjects}
        />

        {/* Category Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Icon className={`w-4 h-4 ${categoryMeta.color}`} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${categoryMeta.color}`}>
              {language === 'bn' ? categoryMeta.titleBn : categoryMeta.titleEn}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            {language === 'bn' ? categoryMeta.titleBn : categoryMeta.titleEn} ({projects.length})
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {language === 'bn' ? categoryMeta.descBn : categoryMeta.descEn}
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-800">
          <Link
            to="/projects"
            className="px-3.5 py-1.5 text-xs font-medium rounded-md text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
          >
            {t.projects.all} (26)
          </Link>
          <Link
            to="/projects/completed"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              status === 'completed'
                ? 'bg-emerald-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            {t.projects.completed} (12)
          </Link>
          <Link
            to="/projects/ongoing"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              status === 'ongoing'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            {t.projects.ongoing} (9)
          </Link>
          <Link
            to="/projects/upcoming"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              status === 'upcoming'
                ? 'bg-sky-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
            }`}
          >
            {t.projects.upcoming} (5)
          </Link>
        </div>

        {/* Informational Note */}
        <div className="flex items-center gap-2 mb-8 text-xs text-slate-400 bg-slate-900/60 p-3.5 rounded-md border border-slate-800">
          <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{t.projects.statusNote}</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group flex flex-col justify-between bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 rounded-lg overflow-hidden transition-all duration-200 card-3d"
            >
              <div>
                <div className="relative h-28 sm:h-48 bg-slate-950 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] sm:text-xs text-slate-600 font-mono text-center p-2">
                      JHDCL Project Record
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-3 text-[9px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/60 sm:bg-transparent px-1 sm:px-0 rounded">
                    p.{project.sourceDocPage}
                  </div>
                </div>

                <div className="p-2.5 sm:p-5">
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400 mb-1 truncate">
                    <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate text-amber-400 font-medium">
                      {language === 'bn' ? project.locationBn : project.locationEn}
                    </span>
                  </div>

                  <h2 className="text-xs sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight sm:leading-snug mb-1 sm:mb-2 line-clamp-2">
                    {language === 'bn' ? project.titleBn : project.titleEn}
                  </h2>

                  <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                    {language === 'bn' ? project.descriptionBn : project.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="px-2.5 pb-2.5 pt-1.5 sm:px-5 sm:pb-5 sm:pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">
                <span className="truncate">{t.projects.viewDetails}</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

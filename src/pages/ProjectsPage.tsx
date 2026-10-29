import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useNavHistory } from '../context/NavigationHistoryContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import { Search, MapPin, ArrowRight, CheckCircle2, Clock, Calendar, Info } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { getListState, saveListState } = useNavHistory();
  const [searchQuery, setSearchQuery] = useState(() => getListState('projects_query') || '');

  useEffect(() => {
    saveListState('projects_query', searchQuery);
  }, [searchQuery, saveListState]);

  useEffect(() => {
    document.title =
      language === 'bn'
        ? 'প্রকল্প পোর্টফোলিও | জামাত হাজেরা ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ'
        : 'Projects Portfolio | Jamat Hazera Development Construction Ltd. (JHDCL)';
  }, [language]);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return PROJECTS_DATA;
    const q = searchQuery.toLowerCase();
    return PROJECTS_DATA.filter((p) => {
      return (
        p.titleEn.toLowerCase().includes(q) ||
        p.titleBn.toLowerCase().includes(q) ||
        p.locationEn.toLowerCase().includes(q) ||
        p.locationBn.toLowerCase().includes(q) ||
        p.descriptionEn.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const counts = {
    all: PROJECTS_DATA.length,
    completed: PROJECTS_DATA.filter((p) => p.status === 'completed').length,
    ongoing: PROJECTS_DATA.filter((p) => p.status === 'ongoing').length,
    upcoming: PROJECTS_DATA.filter((p) => p.status === 'upcoming').length,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>{t.projects.completed}</span>
          </span>
        );
      case 'ongoing':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400">
            <Clock className="w-3 h-3" />
            <span>{t.projects.ongoing}</span>
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-400">
            <Calendar className="w-3 h-3" />
            <span>{t.projects.upcoming}</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-10 sm:pt-12 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: t.breadcrumbs.projects }]}
          fallbackBackUrl="/"
          backLabel={language === 'bn' ? 'মূলপাতায় ফিরে যান' : 'Back to Home'}
        />

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.projects.sectionKicker}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            {t.projects.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Navigation Links (Separate URLs!) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
            <Link
              to="/projects"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-amber-400 text-slate-950 shadow-sm"
            >
              {t.projects.all} ({counts.all})
            </Link>

            <Link
              to="/projects/completed"
              className="px-3.5 py-1.5 text-xs font-medium rounded-md text-slate-400 hover:text-white transition-colors"
            >
              {t.projects.completed} ({counts.completed})
            </Link>

            <Link
              to="/projects/ongoing"
              className="px-3.5 py-1.5 text-xs font-medium rounded-md text-slate-400 hover:text-white transition-colors"
            >
              {t.projects.ongoing} ({counts.ongoing})
            </Link>

            <Link
              to="/projects/upcoming"
              className="px-3.5 py-1.5 text-xs font-medium rounded-md text-slate-400 hover:text-white transition-colors"
            >
              {t.projects.upcoming} ({counts.upcoming})
            </Link>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? 'প্রকল্প বা অবস্থান খুঁজুন...' : 'Search project or location...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-md placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Source notice */}
        <div className="flex items-center gap-2 mb-8 text-xs text-slate-400 bg-slate-900/60 p-3.5 rounded-md border border-slate-800">
          <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{t.projects.statusNote}</span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filteredProjects.map((project) => (
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
                  
                  <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-slate-950/90 backdrop-blur-sm px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded text-[10px] sm:text-xs border border-slate-800">
                    {getStatusBadge(project.status)}
                  </div>

                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-3 text-[9px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/60 sm:bg-transparent px-1 sm:px-0 rounded">
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

import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA, ProjectItem, ProjectStatus } from '../data/projects';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Search, MapPin, ArrowRight, CheckCircle2, Clock, Calendar, Info } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Status filter
      if (selectedStatus !== 'all' && project.status !== selectedStatus) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitleEn = project.titleEn.toLowerCase().includes(query);
        const matchesTitleBn = project.titleBn.toLowerCase().includes(query);
        const matchesLocationEn = project.locationEn.toLowerCase().includes(query);
        const matchesLocationBn = project.locationBn.toLowerCase().includes(query);
        const matchesDesc = project.descriptionEn.toLowerCase().includes(query);
        return matchesTitleEn || matchesTitleBn || matchesLocationEn || matchesLocationBn || matchesDesc;
      }
      return true;
    });
  }, [selectedStatus, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: PROJECTS_DATA.length,
      completed: PROJECTS_DATA.filter((p) => p.status === 'completed').length,
      ongoing: PROJECTS_DATA.filter((p) => p.status === 'ongoing').length,
      upcoming: PROJECTS_DATA.filter((p) => p.status === 'upcoming').length,
    };
  }, []);

  const getStatusBadge = (status: ProjectStatus) => {
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
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/60 border-t border-slate-800" aria-label="Projects Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.projects.sectionKicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          {/* Segmented Filter Control (Allowed functional button tabs) */}
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
            <button
              onClick={() => setSelectedStatus('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                selectedStatus === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.all} ({counts.all})
            </button>

            <button
              onClick={() => setSelectedStatus('completed')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                selectedStatus === 'completed'
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.completed} ({counts.completed})
            </button>

            <button
              onClick={() => setSelectedStatus('ongoing')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                selectedStatus === 'ongoing'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.ongoing} ({counts.ongoing})
            </button>

            <button
              onClick={() => setSelectedStatus('upcoming')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                selectedStatus === 'upcoming'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.upcoming} ({counts.upcoming})
            </button>
          </div>

          {/* Search Input Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'bn' ? 'প্রকল্প বা এলাকা খুঁজুন...' : 'Search project or location...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-md placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Informational Source Notice (Anti-slop integrity) */}
        <div className="flex items-center gap-2 mb-8 text-xs text-slate-400 bg-slate-950/60 p-3 rounded-md border border-slate-800/80">
          <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{t.projects.statusNote}</span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-950/40 rounded-lg border border-slate-800">
            <p className="text-sm text-slate-400">
              {language === 'bn' ? 'কোনো প্রকল্প খুঁজে পাওয়া যায়নি।' : 'No projects matched your criteria.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-lg overflow-hidden transition-all duration-200"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-28 sm:h-48 bg-slate-900 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.titleEn}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] sm:text-xs text-slate-600 font-mono text-center p-2">
                        JHDCL Project Record
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                    
                    {/* Status Tag Overlay */}
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-slate-950/90 backdrop-blur-sm px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded text-[10px] sm:text-xs border border-slate-800">
                      {getStatusBadge(project.status)}
                    </div>

                    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-3 text-[9px] sm:text-[11px] font-mono text-slate-400 bg-slate-950/60 sm:bg-transparent px-1 sm:px-0 rounded">
                      p.{project.sourceDocPage}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-2.5 sm:p-5">
                    {/* Location Metadata */}
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400 mb-1 truncate">
                      <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="truncate text-amber-400 font-medium">
                        {language === 'bn' ? project.locationBn : project.locationEn}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight sm:leading-snug mb-1 sm:mb-2 line-clamp-2">
                      {language === 'bn' ? project.titleBn : project.titleEn}
                    </h3>

                    {/* Description excerpt */}
                    <p className="text-[10px] sm:text-xs text-slate-400 line-clamp-2 leading-tight sm:leading-relaxed">
                      {language === 'bn' ? project.descriptionBn : project.descriptionEn}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-2.5 pb-2.5 pt-1.5 sm:px-5 sm:pb-5 sm:pt-2 border-t border-slate-900">
                  <button
                    onClick={() => setActiveProject(project)}
                    type="button"
                    className="w-full py-1.5 sm:py-2 px-2 sm:px-3 text-[10px] sm:text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors flex items-center justify-center gap-1 sm:gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    <span className="truncate">{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};

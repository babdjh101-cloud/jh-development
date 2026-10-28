import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Building2,
  HardHat,
  Palette,
  Truck,
  Train,
  Anchor,
  Layers,
  Boxes,
  Plane,
  Zap,
  ArrowRight,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'river-dredging',
      icon: Anchor,
      title: t.services.categories.riverDredging.title,
      desc: t.services.categories.riverDredging.desc,
      filterTag: 'marine',
    },
    {
      id: 'sand-filling',
      icon: Layers,
      title: t.services.categories.sandFilling.title,
      desc: t.services.categories.sandFilling.desc,
      filterTag: 'marine',
    },
    {
      id: 'building-construction',
      icon: HardHat,
      title: t.services.categories.buildingConstruction.title,
      desc: t.services.categories.buildingConstruction.desc,
      filterTag: 'civil',
    },
    {
      id: 'roads-highways',
      icon: Truck,
      title: t.services.categories.roadsHighways.title,
      desc: t.services.categories.roadsHighways.desc,
      filterTag: 'highway',
    },
    {
      id: 'railway-projects',
      icon: Train,
      title: t.services.categories.railwayProjects.title,
      desc: t.services.categories.railwayProjects.desc,
      filterTag: 'railway',
    },
    {
      id: 'stone-supply',
      icon: Boxes,
      title: t.services.categories.stoneSupply.title,
      desc: t.services.categories.stoneSupply.desc,
      filterTag: 'supply',
    },
    {
      id: 'real-estate',
      icon: Building2,
      title: t.services.categories.realEstate.title,
      desc: t.services.categories.realEstate.desc,
      filterTag: 'civil',
    },
    {
      id: 'power-plant-civil',
      icon: Zap,
      title: t.services.categories.powerPlantCivil.title,
      desc: t.services.categories.powerPlantCivil.desc,
      filterTag: 'power',
    },
    {
      id: 'aviation-infrastructure',
      icon: Plane,
      title: t.services.categories.infrastructure.title,
      desc: t.services.categories.infrastructure.desc,
      filterTag: 'aviation',
    },
    {
      id: 'interior-design',
      icon: Palette,
      title: t.services.categories.interiorDesign.title,
      desc: t.services.categories.interiorDesign.desc,
      filterTag: 'civil',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-950 border-t border-slate-800" aria-label="Corporate Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              {t.services.sectionKicker}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-normal leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded py-1"
          >
            <span>{t.services.contactForTender}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Services Grid (2 Columns on mobile, 3 Columns on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-3 sm:p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between card-3d"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-slate-600">
                      0{index + 1}.
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors leading-tight sm:leading-snug mb-1 sm:mb-2 line-clamp-2">
                    {service.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-slate-400 leading-tight sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] sm:text-xs">
                  <a
                    href="#projects"
                    className="text-slate-400 hover:text-white inline-flex items-center gap-0.5 sm:gap-1 transition-colors"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="text-amber-400 hover:text-amber-300 font-medium"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EQUIPMENT_DATA } from '../data/equipment';
import { Anchor, Truck, HardHat, Compass, FileCheck, Layers, Gauge } from 'lucide-react';

export const EquipmentSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'marine' | 'earthmoving' | 'haulage'>('all');

  const filteredEquipment = EQUIPMENT_DATA.filter((item) => {
    if (activeTab === 'marine') {
      return item.id.includes('dredger') || item.id.includes('bulk-head');
    }
    if (activeTab === 'earthmoving') {
      return (
        item.id.includes('excavator') ||
        item.id.includes('longbow') ||
        item.id.includes('pay-loader') ||
        item.id.includes('bulldozer')
      );
    }
    if (activeTab === 'haulage') {
      return (
        item.id.includes('dump-truck') ||
        item.id.includes('crane') ||
        item.id.includes('roller') ||
        item.id.includes('soil-compactor') ||
        item.id.includes('building')
      );
    }
    return true;
  });

  return (
    <section id="equipment" className="py-20 bg-slate-950 border-t border-slate-800" aria-label="Machinery and Equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            {t.equipment.sectionKicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
            {t.equipment.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {t.equipment.subtitle}
          </p>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Anchor className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">CSD Dredgers</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">14″ &amp; 12″</div>
            <div className="text-[11px] text-slate-400 mt-0.5">China + American Built</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Bulkhead Hulls</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">14 Sets</div>
            <div className="text-[11px] text-slate-400 mt-0.5">6,000 – 22,000 CFT Capacity</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <HardHat className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">CAT Excavators</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">11 Sets</div>
            <div className="text-[11px] text-slate-400 mt-0.5">0.7m³, 0.5m³ &amp; 0.3m³ + Longbow</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Truck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Haulage Fleet</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">17 Dump Trucks</div>
            <div className="text-[11px] text-slate-400 mt-0.5">+ 50T Tadano Mobile Crane</div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800 mb-8 max-w-fit">
          <button
            onClick={() => setActiveTab('all')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Machinery ({EQUIPMENT_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('marine')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'marine'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Marine &amp; Dredging (5)
          </button>
          <button
            onClick={() => setActiveTab('earthmoving')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'earthmoving'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Excavation &amp; Earthmoving (5)
          </button>
          <button
            onClick={() => setActiveTab('haulage')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'haulage'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Haulage, Lifting &amp; Compaction (6)
          </button>
        </div>

        {/* Equipment Table (Technical Discipline) */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4 w-12 text-slate-500 font-mono">#</th>
                  <th className="py-3 px-4">{t.equipment.tableHeaders.item}</th>
                  <th className="py-3 px-4">{t.equipment.tableHeaders.quantity}</th>
                  <th className="py-3 px-4">{t.equipment.tableHeaders.manufacturer}</th>
                  <th className="py-3 px-4">{t.equipment.tableHeaders.category}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredEquipment.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-200">
                        {language === 'bn' ? item.nameBn : item.nameEn}
                      </div>
                      {item.details && (
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {item.details}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono font-semibold text-amber-400">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {item.manufacturer}
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {language === 'bn' ? item.categoryBn : item.categoryEn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Consortium / JV Tender Capacity Notice */}
        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <FileCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-200 block mb-0.5">
              {language === 'bn'
                ? 'যৌথ উদ্যোগ ও আন্তর্জাতিক টেন্ডার সক্ষমতা'
                : 'Consortium & Joint Venture Tender Capacity'}
            </strong>
            {language === 'bn'
              ? 'জেএইচডিসিএল বৃহৎ আয়তনের সরকারি ও বাণিজ্যিক টেন্ডারে অংশগ্রহণের লক্ষ্যে দেশীয় শীর্ষস্থানীয় প্রতিষ্ঠান এবং ২টি বিদেশি কোম্পানির সাথে জে-ভি (J-V) পার্টনারশিপ চুক্তিতে আবদ্ধ, যার মাধ্যমে যেকোনো মেগা প্রকল্প দ্রুত গতিতে বাস্তবায়ন সম্ভব।'
              : 'JHDCL maintains established joint-venture (J-V) consortium agreements with major domestic contractors and two international firms, enabling rapid resource mobilization for high-volume public tenders and industrial turnkey contracts.'}
          </div>
        </div>

      </div>
    </section>
  );
};

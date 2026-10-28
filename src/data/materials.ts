/**
 * Materials Catalog: Sand, Soil, Stone & Aggregates
 * Sourced directly from corporate briefing dated 28 October 2026 and profile documentation.
 */

export interface SandItem {
  id: string;
  nameEn: string;
  nameBn: string;
  applicationsEn: string[];
  applicationsBn: string[];
  grainDescriptionEn: string;
  grainDescriptionBn: string;
  sourceOriginEn: string;
  sourceOriginBn: string;
  cautionNoteEn?: string;
  cautionNoteBn?: string;
}

export interface StoneItem {
  id: string;
  nameEn: string;
  nameBn: string;
  originCategory: 'local' | 'indian' | 'dubai' | 'bhutan' | 'global';
  originCountryEn: string;
  originCountryBn: string;
  typeEn: string;
  typeBn: string;
  commonUsesEn: string;
  commonUsesBn: string;
  specificationNoteEn?: string;
  specificationNoteBn?: string;
}

// 15 Sand & Soil Categories mapped to the 12 applications from briefing
export const SAND_CATALOG: SandItem[] = [
  {
    id: "soil",
    nameEn: "Soil (Topsoil & Earthfill)",
    nameBn: "মাটি (টপসয়েল ও আর্থফিল)",
    applicationsEn: ["Land development", "Agricultural boundary grading", "Subgrade leveling"],
    applicationsBn: ["ভূমি উন্নয়ন", "কৃষি ও সীমানা উন্নয়ন", "সাবগ্রেড সমতলকরণ"],
    grainDescriptionEn: "Cohesive natural earth material for initial land development and embankment base.",
    grainDescriptionBn: "প্রাকৃতিক ভরাট মাটি যা প্রাথমিক ভূমি সমতলকরণ ও ডাইক বেস নির্মাণে ব্যবহৃত হয়।",
    sourceOriginEn: "Local Regional Deposits",
    sourceOriginBn: "আঞ্চলিক স্থানীয় উৎস",
  },
  {
    id: "vati-sand",
    nameEn: "Vati Sand (Local River Sand)",
    nameBn: "ভাটি বালু (স্থানীয় নদী বালু)",
    applicationsEn: ["Land development", "Bulk embankment formation", "Low-lying plot filling"],
    applicationsBn: ["ভূমি উন্নয়ন", "নদী বাঁধ ও এমব্যাঙ্কমেন্ট", "নিচু জমি ভরাট"],
    grainDescriptionEn: "Fine-to-medium riverine sand ideal for high-volume hydraulic land filling.",
    grainDescriptionBn: "নদী অববাহিকা থেকে ড্রেজারের মাধ্যমে সংগৃহীত সাশ্রয়ী বালু যা মেগা সাইট ভরাটে উপযোগী।",
    sourceOriginEn: "Brahmaputra, Padma & Regional Rivers",
    sourceOriginBn: "ব্রহ্মপুত্র, পদ্মা ও স্থানীয় নদীসমূহ",
  },
  {
    id: "fill-sand",
    nameEn: "Fill Sand (Engineered Ground Filling)",
    nameBn: "ফিল বালু (স্ট্রাকচারাল গ্রাউন্ড ফিলিং)",
    applicationsEn: ["Land filling and reclamation", "Foundation pre-loading", "Industrial base raising"],
    applicationsBn: ["ভূমি ভরাট ও রিক্ল্যামেশন", "ভিত্তি প্রি-লোডিং", "শিল্প কারখানা বেস উঁচুকরণ"],
    grainDescriptionEn: "Standardized backfill sand with low silt ratio suitable for compacted groundworks.",
    grainDescriptionBn: "কম পলিযুক্ত কম্প্যাক্টযোগ্য বালু যা কারখানার মেঝের নিচে স্থায়ী ভরাটে কার্যকর।",
    sourceOriginEn: "Inland Dredging Channels",
    sourceOriginBn: "ইনল্যান্ড ড্রেজিং চ্যানেল",
  },
  {
    id: "dredged-sand",
    nameEn: "Dredged Sand (Hydraulic Dredging Spoil)",
    nameBn: "ড্রেজড বালু (হাইড্রোলিক ড্রেজিং বালু)",
    applicationsEn: ["Land filling and reclamation", "Infrastructure embankment dyking"],
    applicationsBn: ["নদী খনন বালু ভরাট", "অবকাঠামো বেড়িবাঁধ নির্মাণ"],
    grainDescriptionEn: "Discharged directly from 14″ and 12″ cutter suction dredger pipelines.",
    grainDescriptionBn: "১৪ এবং ১২ ইঞ্চি কাটার সাকশন ড্রেজার পাইপলাইনের মাধ্যমে নদী থেকে সরাসরি ভরাটকৃত বালু।",
    sourceOriginEn: "Bangshi, Old-Brahmaputra & Coastal Dredging",
    sourceOriginBn: "বংশী ও পুরাতন ব্রহ্মপুত্র ড্রেজিং করিডোর",
  },
  {
    id: "fine-sand",
    nameEn: "Fine Sand",
    nameBn: "ফাইন বালু (সূক্ষ্ম দানার বালু)",
    applicationsEn: ["Plastering works", "Pipe and cable bedding", "Smooth mortar finishing"],
    applicationsBn: ["প্লাস্টারিং কাজ", "পাইপ ও আন্ডারগ্রাউন্ড ক্যাবল বেডিং", "মসৃণ ফিনিশিং"],
    grainDescriptionEn: "High-fineness mineral sand for architectural plastering and non-structural mortar.",
    grainDescriptionBn: "সূক্ষ্ম দানাবিশিষ্ট বালু যা দেয়ালের প্লাস্টার ও পাইপলাইন সুরক্ষায় ব্যবহৃত হয়।",
    sourceOriginEn: "River Washed Deposits",
    sourceOriginBn: "ধৌত নদী উৎস",
  },
  {
    id: "medium-sand",
    nameEn: "Medium Sand",
    nameBn: "মিডিয়াম বালু (মাঝারি দানার বালু)",
    applicationsEn: ["Plastering coats", "Brick masonry", "Pipe and cable bedding"],
    applicationsBn: ["প্লাস্টার স্তর", "ইট গাঁথুনি", "ইউটিলিটি পাইপ বেডিং"],
    grainDescriptionEn: "Well-graded sand providing optimal workability and adhesion for brick masonry.",
    grainDescriptionBn: "সুষম দানার বালু যা ইট গাঁথুনির মর্ডারে সর্বোচ্চ বন্ধন ও স্থায়িত্ব তৈরি করে।",
    sourceOriginEn: "Northern & Central Rivers",
    sourceOriginBn: "উত্তর ও মধ্যাঞ্চলের নদীসমূহ",
  },
  {
    id: "astor-sand",
    nameEn: "“Astor” Sand (Plaster & Pavement Grade)",
    nameBn: "আস্তর বালু (প্লাস্টার ও পেভমেন্ট গ্রেড)",
    applicationsEn: ["Plastering finishing", "Roads and highways sub-base"],
    applicationsBn: ["দেয়ালের আস্তর বা প্লাস্টার", "সড়ক ও মহাসড়ক সাব-বেস"],
    grainDescriptionEn: "Commercial term preserved from briefing; high-purity plastering sand with controlled fines.",
    grainDescriptionBn: "কোম্পানি প্রোফাইলে উল্লেখিত বিশেষ আস্তর গ্রেড বালু, যা দীর্ঘস্থায়ী প্লাস্টারের জন্য পরিচিত।",
    sourceOriginEn: "Domestic Selected Sand Depots",
    sourceOriginBn: "দেশীয় নির্বাচিত বালু ডিপো",
    cautionNoteEn: "Term preserved from corporate briefing pending exact laboratory grading classification.",
    cautionNoteBn: "কোম্পানি ব্রিফিংয়ে উল্লেখিত বাণিজ্যিক টার্ম; ল্যাব টেস্ট স্পেসিফিকেশন প্রযোজ্য।",
  },
  {
    id: "coarse-sand",
    nameEn: "Coarse Sand",
    nameBn: "কোর্স বালু (মোটা দানার বালু)",
    applicationsEn: ["Brick masonry", "Specific-task heavy concrete", "Pavement subgrade"],
    applicationsBn: ["ভারী গাঁথুনি", "বিশেষ আরসিসি কাজ", "পেভমেন্ট সাবগ্রেড"],
    grainDescriptionEn: "Angular rough-textured grains that enhance shear strength in heavy structural mortars.",
    grainDescriptionBn: "ধারালো খসখসে দানার বালু যা লোড-বেয়ারিং কাঠামোর মর্টারে শক্তিশালী বন্ধন নিশ্চিত করে।",
    sourceOriginEn: "River Quarry Sand Depots",
    sourceOriginBn: "কোয়ারি সংলগ্ন নদী ডিপো",
  },
  {
    id: "dumur-sand",
    nameEn: "Dumur Sand",
    nameBn: "ডুমুর বালু",
    applicationsEn: ["Roads and highways", "Building construction selection sand"],
    applicationsBn: ["সড়ক ও মহাসড়ক বেস", "ভবন নির্মাণ সিলেকশন বালু"],
    grainDescriptionEn: "Coarse granular sand from northern regional riverbeds (Sylhet/Panchagarh belts).",
    grainDescriptionBn: "উত্তরাঞ্চল ও পাহাড়ি নদী থেকে সংগৃহীত মোটা বালু, যা হাইওয়ে ও ঢালাই কাজে অপরিহার্য।",
    sourceOriginEn: "Panchagarh & Sylhet River Belts",
    sourceOriginBn: "পঞ্চগড় ও সিলেট নদী অববাহিকা",
  },
  {
    id: "crushed-sand",
    nameEn: "Crushed Sand / Stone Sand",
    nameBn: "ক্রাশড বালু / স্টোন স্যান্ড",
    applicationsEn: ["Heavyweight road applications", "High-strength concrete mixes", "Asphalt wearing course"],
    applicationsBn: ["ভারী লোডের রাস্তা", "উচ্চ শক্তির কংক্রিট ঢালাই", "অ্যাসফল্ট পেভিং"],
    grainDescriptionEn: "Manufactured mechanical sand produced by crushing hard rocks, free from organic impurities.",
    grainDescriptionBn: "শক্ত পাথর ভেঙে মেকানিক্যালি প্রস্তুতকৃত মিনারেল বালু যা কাদামুক্ত ও সর্বোচ্চ ঘনত্বের।",
    sourceOriginEn: "Crushing Facilities & Rock Quarries",
    sourceOriginBn: "পাথর ক্রাশিং ক্রাশার ও কোয়ারি",
  },
  {
    id: "selection-sand",
    nameEn: "Selection Sand (Sylhet & Panchagarh FM 2.5–3.0)",
    nameBn: "সিলেকশন বালু (সিলেট ও পঞ্চগড় এফএম ২.৫–৩.০)",
    applicationsEn: ["Building construction RCC casting", "Airport runways", "Bridge piers and columns"],
    applicationsBn: ["ভবন নির্মাণ আরসিসি ঢালাই", "বিমানবন্দর রানওয়ে", "সেতুর পিলার ও কলাম"],
    grainDescriptionEn: "Premium coarse silica sand with Fineness Modulus (FM) exceeding 2.5 for critical structural concrete.",
    grainDescriptionBn: "উচ্চ এফএম সমৃদ্ধ সিলেটের লাল ও মোটা সিলেকশন বালু, যা বহুতল ভবনের মেগা ঢালাইয়ে ব্যবহৃত হয়।",
    sourceOriginEn: "Sylhet, Jaflong & Panchagarh",
    sourceOriginBn: "সিলেট, জাফলং ও পঞ্চগড়",
  },
  {
    id: "silica-sand",
    nameEn: "Silica Sand (High Purity SiO₂)",
    nameBn: "সিলিকা বালু (উচ্চ বিশুদ্ধতার সিলিকা)",
    applicationsEn: ["Glass manufacturing", "Specialty chemical filtration", "Industrial casting"],
    applicationsBn: ["কাচ প্রস্তুত শিল্প", "শিল্প কারখানা ফিল্ট্রেশন", "ইন্ডাস্ট্রিয়াল ফাউন্ড্রি"],
    grainDescriptionEn: "High-silicon purity quartz sand compliant with chemical industrial manufacturing benchmarks.",
    grainDescriptionBn: "উচ্চমাত্রার কোয়ার্টজ ও সিলিকন সমৃদ্ধ সাদা বালু যা শিল্প কারখানায় কাচ তৈরিতে অপরিহার্য।",
    sourceOriginEn: "Industrial Mineral Sourcing",
    sourceOriginBn: "ইন্ডাস্ট্রিয়াল মিনারেল সোর্সিং",
  },
  {
    id: "bit-sand",
    nameEn: "Bit Sand / Asphalt Grade Sand",
    nameBn: "বিট বালু / অ্যাসফল্ট পেভিং বালু",
    applicationsEn: ["Roads and highways bituminous mix", "Asphalt mastic wearing coarse"],
    applicationsBn: ["সড়ক ও মহাসড়ক বিটুমিনাস মিক্স", "অ্যাসফল্ট কার্পেটিং"],
    grainDescriptionEn: "Clean, dry fine-to-medium aggregate specifically graded to blend with liquid bitumen for highway surfacing.",
    grainDescriptionBn: "মহাসড়কের পিচ ঢালাইয়ের জন্য নির্ধারিত মাপের পরিষ্কার বালু যা বিটুমিন ধারণক্ষমতা বৃদ্ধি করে।",
    sourceOriginEn: "Highways & Quarry Depots",
    sourceOriginBn: "হাইওয়ে সরবরাহ ডিপো",
  },
  {
    id: "sea-sand",
    nameEn: "Sea / Beach Sand",
    nameBn: "সমুদ্র / সৈকত বালু",
    applicationsEn: ["Infrastructure reclamation dykes", "Coastal marine drive sand filling"],
    applicationsBn: ["উপকূলীয় অবকাঠামো বাঁধ", "কক্সবাজার মেরিন ড্রাইভ ভরাট"],
    grainDescriptionEn: "Coastal sand used for marine dykes and coastal highway embankments where desalinated/washed.",
    grainDescriptionBn: "উপকূলীয় বাঁধ ও মেরিন ড্রাইভ সাইট উন্নয়নের জন্য সংগৃহীত সমুদ্র তীরবর্তী বালু।",
    sourceOriginEn: "Cox’s Bazar & Coastal Belt",
    sourceOriginBn: "কক্সবাজার ও উপকূলীয় অঞ্চল",
    cautionNoteEn: "Final selection depends on chloride content tests, washing, and project structural specifications.",
    cautionNoteBn: "ক্লোরাইড মান ও কাঠামো স্পেসিফিকেশন অনুযায়ী পরীক্ষার পর প্রয়োগযোগ্য।",
  },
  {
    id: "washed-sand",
    nameEn: "Washed Sand (Double-Washed Quality)",
    nameBn: "ওয়াশড বালু (ডাবল-ওয়াশড পরিষ্কার বালু)",
    applicationsEn: ["Specific-task concrete", "Structural mortar", "Export grade civil works"],
    applicationsBn: ["বিশেষ কাঠামোগত ঢালাই", "প্রিমিয়াম সিভিল নির্মাণ", "আন্তর্জাতিক স্ট্যান্ডার্ড কাজ"],
    grainDescriptionEn: "Mechanically desilted and scrubbed to eliminate clay, silt, and organic matter under 1%.",
    grainDescriptionBn: "কাদা ও পলিমুক্ত করতে যান্ত্রিকভাবে ধৌত পরিষ্কার বালু যা সর্বোচ্চ কম্প্রেসিভ স্ট্রেন্থ দেয়।",
    sourceOriginEn: "Automated Sand Washing Plants",
    sourceOriginBn: "স্বয়ংক্রিয় স্যান্ড ওয়াশিং প্ল্যান্ট",
  },
];

// Comprehensive Stone & Aggregate Catalog from briefing
export const STONE_CATALOG: StoneItem[] = [
  // LOCAL & DOMESTIC
  {
    id: "madhyapara-hard-rock",
    nameEn: "Madhyapara Hard Rock Aggregate",
    nameBn: "মধ্যপাড়া হার্ড রক পাথর",
    originCategory: "local",
    originCountryEn: "Bangladesh (Madhyapara Granite Mine)",
    originCountryBn: "বাংলাদেশ (মধ্যপাড়া গ্রানাইট খনি)",
    typeEn: "Granodiorite / Hard Rock",
    typeBn: "গ্রানোডিওরাইট / খনিজ শক্ত পাথর",
    commonUsesEn: "High-strength bridge piers, heavy rail ballast, multi-lane expressways, airport runways.",
    commonUsesBn: "পদ্মা সেতু সংলগ্ন রেলওয়ে ব্যালাস্ট, এক্সপ্রেসওয়ে ও সর্বোচ্চ লোডের মেগা ঢালাই কাজ।",
  },
  {
    id: "local-crushed-stone",
    nameEn: "Local Crushed Stone Chips (5–20mm)",
    nameBn: "দেশীয় ক্রাশড স্টোন চিপস",
    originCategory: "local",
    originCountryEn: "Bangladesh",
    originCountryBn: "বাংলাদেশ",
    typeEn: "Crushed River Boulder & Hard Gravel",
    typeBn: "ভাঙা বোল্ডার ও গ্রাভেল চিপস",
    commonUsesEn: "General RCC building casting, road base coarse, precast culverts.",
    commonUsesBn: "ভবনের ছাদ ও কলাম ঢালাই, আরসিসি ড্রেন ও প্রি-কাস্ট ব্লক নির্মাণ।",
  },
  {
    id: "river-boulder",
    nameEn: "River Boulders / Large Rocks",
    nameBn: "রিভার বোল্ডার (নদী পাথর)",
    originCategory: "local",
    originCountryEn: "Bangladesh",
    originCountryBn: "বাংলাদেশ",
    typeEn: "Natural Igneous / Sedimentary River Boulders",
    typeBn: "প্রাকৃতিক নদী বোল্ডার পাথর",
    commonUsesEn: "Riverbank revetment pitching, stone crusher input, foundation riprap.",
    commonUsesBn: "নদী তীর সংরক্ষণ ব্লক ও ক্রাশার মেশিনে পাথর কুচি তৈরির কাঁচামাল।",
  },
  {
    id: "local-white-stone",
    nameEn: "White & Decorative Pebble Stone",
    nameBn: "সাদা ও ডেকোরেটিভ পেবল স্টোন",
    originCategory: "local",
    originCountryEn: "Bangladesh (Bholaganj / Jaflong)",
    originCountryBn: "বাংলাদেশ (ভোলাগঞ্জ / জাফলং)",
    typeEn: "White Quartzite / Decorative Gravel",
    typeBn: "সাদা কোয়ার্টজাইট ও পেবল",
    commonUsesEn: "Architectural landscaping, floor terrazzo, decorative facade exposed concrete.",
    commonUsesBn: "আর্কিটেকচারাল ল্যান্ডস্কেপিং, টেরাজো ফ্লোর ও নান্দনিক সাজসজ্জা।",
  },

  // INDIAN IMPORTED STONE
  {
    id: "indian-pakur",
    nameEn: "Indian Pakur Black Stone",
    nameBn: "ভারতীয় পাকুড় ব্ল্যাক স্টোন",
    originCategory: "indian",
    originCountryEn: "India (Jharkhand / West Bengal)",
    originCountryBn: "ভারত (ঝাড়খণ্ড / পশ্চিমবঙ্গ)",
    typeEn: "High-Density Basalt",
    typeBn: "উচ্চ ঘনত্বের ব্যাসাল্ট শক্ত পাথর",
    commonUsesEn: "High-specification concrete, airport taxiways, railway track construction, mega bridge structures.",
    commonUsesBn: "বাংলাদেশে মেগা প্রজেক্টের সবচেয়ে বিশ্বস্ত পাথর, রানওয়ে ও টেকসই ঢালাইয়ে ব্যবহৃত।",
  },
  {
    id: "meghalaya-stone",
    nameEn: "Meghalaya River Boulder & Aggregate",
    nameBn: "মেঘালয়া নদী বোল্ডার ও চিপস",
    originCategory: "indian",
    originCountryEn: "India (Meghalaya State)",
    originCountryBn: "ভারত (মেঘালয় রাজ্য)",
    typeEn: "Hard Limestone & Granite",
    typeBn: "শক্ত চুনাপাথর ও গ্রানাইট",
    commonUsesEn: "Construction stone supply, lime kilns, road embankment riprap.",
    commonUsesBn: "সীমান্তবর্তী এলসি পয়েন্ট দিয়ে আমদানিকৃত ভারী নির্মাণ পাথর ও ব্লক পিচিং।",
  },
  {
    id: "indian-armour-riprap",
    nameEn: "Indian Armour / Riprap Heavy Stone",
    nameBn: "ভারতীয় আর্মার / রিপ-র‍্যাপ পাথর",
    originCategory: "indian",
    originCountryEn: "India",
    originCountryBn: "ভারত",
    typeEn: "Heavy Basalt & Granite Boulders (100–500kg)",
    typeBn: "ভারী ব্যাসাল্ট ও গ্রানাইট বোল্ডার",
    commonUsesEn: "Deep river training, sea dyke storm barriers, dam protection.",
    commonUsesBn: "নদী ভাঙন ও সমুদ্র উপকূলীয় বাঁধ সুরক্ষায় ঢেউ প্রতিরোধক হিসেবে ব্যবহৃত।",
  },

  // DUBAI IMPORTED STONE
  {
    id: "dubai-gabbro-10-20",
    nameEn: "Dubai Gabbro Stone (10–20 mm)",
    nameBn: "দুবাই গ্যাব্রো স্টোন (১০–২০ মিমি)",
    originCategory: "dubai",
    originCountryEn: "United Arab Emirates (Fujairah / Ras Al Khaimah)",
    originCountryBn: "সংযুক্ত আরব আমিরাত (ফুজাইরা / রাস আল খাইমাহ)",
    typeEn: "Plutonic Gabbro Hard Rock",
    typeBn: "আগ্নেয় প্লুটোনিক গ্যাব্রো হার্ড রক",
    commonUsesEn: "High-performance concrete (C40–C60+), maritime deep-sea port terminals, airport runways.",
    commonUsesBn: "সমুদ্র বন্দর, আন্তর্জাতিক বিমানবন্দর রানওয়ে ও উচ্চ ক্ষমতার আরসিসি ঢালাইয়ে আন্তর্জাতিক মানসম্পন্ন পাথর।",
  },
  {
    id: "dubai-gabbro-20-40",
    nameEn: "Dubai Gabbro Stone (20–40 mm)",
    nameBn: "দুবাই গ্যাব্রো স্টোন (২০–৪০ মিমি)",
    originCategory: "dubai",
    originCountryEn: "United Arab Emirates",
    originCountryBn: "সংযুক্ত আরব আমিরাত",
    typeEn: "Heavy Gabbro Aggregate",
    typeBn: "ভারী গ্যাব্রো পাথর কুচি",
    commonUsesEn: "Heavy infrastructure foundations, railway track ballast, power plant turbine beds.",
    commonUsesBn: "বিদ্যুৎ কেন্দ্র টারবাইন বেসমেন্ট, রেলপথ ব্যালাস্ট ও ভারী কারখানা ফাউন্ডেশন।",
  },
  {
    id: "dubai-armour-rock",
    nameEn: "Dubai Armour Rock / Marine Boulders",
    nameBn: "দুবাই আর্মার রক / মেরিন বোল্ডার",
    originCategory: "dubai",
    originCountryEn: "United Arab Emirates",
    originCountryBn: "সংযুক্ত আরব আমিরাত",
    typeEn: "Heavy Marine Gabbro Boulders (1 to 5 Tonnes)",
    typeBn: "ভারী মেরিন গ্যাব্রো বোল্ডার (১ থেকে ৫ টন)",
    commonUsesEn: "Breakwaters, deep sea port protection, offshore navigation channel barriers.",
    commonUsesBn: "গভীর সমুদ্র বন্দর চ্যানেল ও ব্রেকওয়াটার বাঁধ সুরক্ষায় মাদার ভেসেলে আমদানিকৃত।",
  },

  // BHUTANESE IMPORTED STONE
  {
    id: "bhutanese-granite-red",
    nameEn: "Bhutanese Red Stone & Granite",
    nameBn: "ভুটানি রেড স্টোন ও গ্রানাইট",
    originCategory: "bhutan",
    originCountryEn: "Bhutan",
    originCountryBn: "ভুটান",
    typeEn: "Himalayan Crystalline Granite & Basalt",
    typeBn: "হিমালয়ান স্ফটিক গ্রানাইট ও লাল পাথর",
    commonUsesEn: "High compressive strength civil works, road wearing course, decorative infrastructure.",
    commonUsesBn: "হিমালয়ান শক্ত পাথর যা উত্তরবঙ্গ ও রাজধানী ঢাকার উন্নত নির্মাণ প্রকল্পে জনপ্রিয়।",
  },
  {
    id: "bhutanese-sebok",
    nameEn: "Bhutanese “Sebok” Stone",
    nameBn: "ভুটানি সেবক স্টোন",
    originCategory: "bhutan",
    originCountryEn: "Bhutan / Himalayan River Basin",
    originCountryBn: "ভুটান / হিমালয় নদী অববাহিকা",
    typeEn: "Himalayan River Boulder (Commercial designation)",
    typeBn: "হিমালয়ান নদী বোল্ডার (বাণিজ্যিক নাম)",
    commonUsesEn: "Structural aggregates, flood management revetment, railway ballast.",
    commonUsesBn: "কোম্পানি ব্রিফিংয়ে উল্লেখিত হিমালয়ান রিভার স্টোন, বন্যা নিয়ন্ত্রণ ও রেল ব্যালাস্টে কার্যকর।",
    specificationNoteEn: "Commercial term preserved from briefing pending quarry identification.",
    specificationNoteBn: "কোম্পানি ব্রিফিংয়ে উল্লেখিত বাণিজ্যিক টার্ম।",
  },

  // EUROPEAN & GLOBAL SOURCING
  {
    id: "italian-marble-granite",
    nameEn: "Italian Luxury Marble & Granite",
    nameBn: "ইতালিয়ান মার্বেল ও গ্রানাইট",
    originCategory: "global",
    originCountryEn: "Italy (Carrara & Verona Belts)",
    originCountryBn: "ইতালি",
    typeEn: "Premium Metamorphic Marble & Granites",
    typeBn: "প্রিমিয়াম মেটামরফিক মার্বেল ও গ্রানাইট",
    commonUsesEn: "Five-star hotel lobbies, luxury high-rise facades, executive corporate flooring.",
    commonUsesBn: "পাঁচ তারকা হোটেল লবি, আধুনিক বাণিজ্যিক টাওয়ার ও অভিজাত ভবনের মেঝে ও ফ্যাসাড।",
  },
  {
    id: "greek-spanish-marble",
    nameEn: "Greek & Spanish Marble / Slate",
    nameBn: "গ্রিক ও স্প্যানিশ মার্বেল ও স্লেট",
    originCategory: "global",
    originCountryEn: "Greece & Spain",
    originCountryBn: "গ্রিস ও স্পেন",
    typeEn: "White Thassos / Spanish Crema & Slate",
    typeBn: "সাদা থাসোস ও স্প্যানিশ স্লেট",
    commonUsesEn: "Architectural wall cladding, exterior rainscreens, moisture-resistant flooring.",
    commonUsesBn: "আর্কিটেকচারাল ওয়াল ক্ল্যাডিং, রেইনস্ক্রিন ফ্যাসাড ও ওয়াটারপ্রুফ মেঝে।",
  },
  {
    id: "portugal-limestone",
    nameEn: "Portuguese Limestone & Granite",
    nameBn: "পর্তুগিজ চুনাপাথর ও গ্রানাইট",
    originCategory: "global",
    originCountryEn: "Portugal",
    originCountryBn: "পর্তুগাল",
    typeEn: "Moleanos Limestone & Natural Granite",
    typeBn: "মোলিয়ানোস লাইমস্টোন ও গ্রানাইট",
    commonUsesEn: "Architectural acoustic masonry, luxury villas, restoration and contemporary facades.",
    commonUsesBn: "আধুনিক ভিলা ও বাণিজ্যিক ভবনের থার্মাল ও অ্যাকোস্টিক আর্কিটেকচারাল সলিউশন।",
  },
];

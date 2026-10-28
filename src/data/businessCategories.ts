/**
 * The 5 Core Trade-Licence Business Categories
 * Sourced directly from corporate briefing dated 28 October 2026.
 */

export interface BusinessCategoryItem {
  id: string;
  slug: string;
  number: string;
  titleEn: string;
  titleBn: string;
  route: string;
  summaryEn: string;
  summaryBn: string;
  keyServicesEn: string[];
  keyServicesBn: string[];
  targetSectorsEn: string[];
  targetSectorsBn: string[];
  image: string;
}

export const BUSINESS_CATEGORIES: BusinessCategoryItem[] = [
  {
    id: "constructor",
    slug: "construction",
    number: "01",
    titleEn: "First-Class Constructor",
    titleBn: "প্রথম শ্রেণির ঠিকাদার (First-Class Constructor)",
    route: "/services/construction",
    summaryEn: "Execution of government and commercial infrastructure tenders, multi-story buildings, river dredging, highways, and railway corridors.",
    summaryBn: "সরকারি ও বাণিজ্যিক মেগা টেন্ডার বাস্তবায়ন, বহুতল ভবন, নদী খনন, মহাসড়ক এবং জাতীয় রেলপথ করিডোর নির্মাণ কাজ।",
    keyServicesEn: [
      "Civil & Building Superstructures",
      "River Dredging & Hydraulic Embankments",
      "Roads & Highways Asphalt Paving",
      "Railway Track Sand Filling & Ballast",
      "Heavy Power Plant Civil Groundworks"
    ],
    keyServicesBn: [
      "সিভিল ও বহুতল ভবন সুপারস্ট্রাকচার",
      "নদী খনন ও হাইড্রোলিক বাঁধ নির্মাণ",
      "সড়ক ও মহাসড়ক অ্যাসফল্ট পেভিং",
      "রেলপথ বালু ভরাট ও ব্যালাস্ট হ্যান্ডলিং",
      "বিদ্যুৎ কেন্দ্র সিভিল গ্রাউন্ডওয়ার্ক"
    ],
    targetSectorsEn: ["Government Ministries", "PWD & RHD", "Railway Directorate", "Power Generation Companies", "Industrial Developers"],
    targetSectorsBn: ["সরকারি মন্ত্রণালয়", "গণপূর্ত ও সওজ অধিদপ্তর", "বাংলাদেশ রেলওয়ে", "বিদ্যুৎ উৎপাদন সংস্থা", "শিল্প উদ্যোক্তাগণ"],
    image: "/images/gallery/commercial_building_scaffolding_crane.jpg",
  },
  {
    id: "supplier",
    slug: "supply-import-export",
    number: "02",
    titleEn: "Supplier — Import & Export",
    titleBn: "সরবরাহকারী — আমদানি ও রপ্তানি (Supplier — Import & Export)",
    route: "/services/supply-import-export",
    summaryEn: "High-volume direct supply and international import of Dubai Gabbro, Indian Pakur, Bhutanese stone, Sylhet sand, and construction aggregates.",
    summaryBn: "দুবাই গ্যাব্রো, ভারতীয় পাকুড়, ভুটানি পাথর এবং সিলেট সিলেকশন বালুর মতো প্রিমিয়াম নির্মাণ সামগ্রী সরাসরি আমদানি ও পাইকারি সরবরাহ।",
    keyServicesEn: [
      "Dubai Black Gabbro Stone (10-20mm & 20-40mm)",
      "Indian Pakur Basalt High-Density Stone",
      "Bhutanese Granite, Red Stone & River Boulders",
      "Sylhet & Panchagarh Selection Sand (FM 2.5+)",
      "Vati Sand & Hydraulic Dredged Fill Sand"
    ],
    keyServicesBn: [
      "দুবাই ব্ল্যাক গ্যাব্রো স্টোন (১০-২০ মিমি ও ২০-৪০ মিমি)",
      "ভারতীয় পাকুড় ব্যাসাল্ট উচ্চ ঘনত্বের পাথর",
      "ভুটানি গ্রানাইট, রেড স্টোন ও নদী বোল্ডার",
      "সিলেট ও পঞ্চগড় সিলেকশন বালু (এফএম ২.৫+)",
      "ভাটি বালু ও ড্রেজিং ফিল বালু সরবরাহ"
    ],
    targetSectorsEn: ["Mega Infrastructure Contractors", "Ready-Mix Concrete Plants", "Highway Authorities", "Commercial Real Estate"],
    targetSectorsBn: ["মেগা অবকাঠামো ঠিকাদারগণ", "রেডি-মিক্স কনক্রিট প্ল্যান্ট", "সড়ক ও জনপথ অধিদপ্তর", "বাণিজ্যিক আবাসন খাত"],
    image: "/images/gallery/heavy_dump_truck_aggregate.jpg",
  },
  {
    id: "landlord",
    slug: "land-development",
    number: "03",
    titleEn: "Development & Landlord",
    titleBn: "উন্নয়ন ও ল্যান্ডলর্ড (Development & Landlord)",
    route: "/services/land-development",
    summaryEn: "Strategic land acquisition, boundary protection, hydraulic sand reclamation, zoning compliance, and commercial lease arrangements.",
    summaryBn: "কৌশলগত জমি ক্রয়-বিক্রয়, সীমানা সুরক্ষা, হাইড্রোলিক বালু ভরাট দ্বারা নিচু ভূমি উন্নয়ন এবং দীর্ঘমেয়াদী ইজারা ব্যবস্থাপনা।",
    keyServicesEn: [
      "Industrial Economic Zone Land Reclamation",
      "Commercial & Institutional Plot Development",
      "Long-term Industrial Leasing & Mortgages",
      "Site Grading & Boundary Dyke Formation",
      "Land Consultancy & Regulatory Clearance"
    ],
    keyServicesBn: [
      "শিল্প ও অর্থনৈতিক অঞ্চলের ভূমি উন্নয়ন",
      "বাণিজ্যিক ও প্রাতিষ্ঠানিক প্লট প্রস্তুতকরণ",
      "দীর্ঘমেয়াদী শিল্প ইজারা ও আইনি প্রক্রিয়া",
      "সাইট গ্রেডিং ও পেরিমিটার ডাইক নির্মাণ",
      "ভূমি পরামর্শ ও প্রাতিষ্ঠানিক অনুমোদন"
    ],
    targetSectorsEn: ["Industrialists", "Banking Sector", "Foreign Joint Ventures", "Commercial Developers"],
    targetSectorsBn: ["শিল্পপতি ও উদ্যোক্তা", "ব্যাংকিং সেক্টর", "বিদেশি যৌথ উদ্যোগ", "বাণিজ্যিক ডেভেলপারগণ"],
    image: "/images/gallery/loader_sand_filling_truck.jpg",
  },
  {
    id: "real-estate",
    slug: "real-estate-housing",
    number: "04",
    titleEn: "Real Estate, Housing & Green City",
    titleBn: "রিয়েল এস্টেট, আবাসন ও গ্রিন সিটি (Real Estate, Housing & Green City)",
    route: "/services/real-estate-housing",
    summaryEn: "Modern architectural apartment complexes, rehabilitation housing schemes, shopping malls, and sustainable urban developments.",
    summaryBn: "আধুনিক আবাসিক অ্যাপার্টমেন্ট, পুনর্বাসন আবাসন পল্লী, বাণিজ্যিক মেগা মল এবং পরিবেশবান্ধব পরিকল্পিত নগর উন্নয়ন।",
    keyServicesEn: [
      "Residential Apartments & Executive Housing",
      "Shopping Malls & Community Commercial Centers",
      "Rehabilitation Townships (e.g. Payra Housing)",
      "Sustainable Green City Architectural Planning",
      "Turnkey Interior Finishing & Woodwork"
    ],
    keyServicesBn: [
      "আবাসিক অ্যাপার্টমেন্ট ও এক্সিকিউটিভ হাউজিং",
      "শপিং মল ও কমিউনিটি বাণিজ্যিক কমপ্লেক্স",
      "পুনর্বাসন আবাসন টাউনশিপ (যেমনঃ পায়রা হাউজিং)",
      "পরিবেশবান্ধব গ্রিন সিটি স্থাপত্য পরিকল্পনা",
      "টার্নকি ইন্টেরিয়র ফিনিশিং ও উডওয়ার্ক"
    ],
    targetSectorsEn: ["Urban Homebuyers", "Commercial Retailers", "Government Rehabilitation Agencies", "Corporate Institutions"],
    targetSectorsBn: ["নাগরিক ক্রেতা সাধারণ", "বাণিজ্যিক রিটেইলারগণ", "সরকারি পুনর্বাসন প্রকল্প", "কর্পোরেট প্রতিষ্ঠানসমূহ"],
    image: "/images/gallery/highrise_residential_construction.jpg",
  },
  {
    id: "consultancy",
    slug: "consultancy",
    number: "05",
    titleEn: "Consultancy Services Across Sectors",
    titleBn: "সকল খাতের কনসালটেন্সি সেবা (Consultancy Services Across Sectors)",
    route: "/services/consultancy",
    summaryEn: "Cross-sector advisory covering civil engineering, hydraulic dredging surveys, material quality standards, and tender joint ventures.",
    summaryBn: "সিভিল ইঞ্জিনিয়ারিং, হাইড্রোলিক ড্রেজিং হাইড্রোগ্রাফিক সার্ভে, সামগ্রী কোয়ালিটি কন্ট্রোল এবং আন্তর্জাতিক টেন্ডার কনসোর্টিয়াম পরামর্শ।",
    keyServicesEn: [
      "Civil & Structural Engineering Supervision",
      "River Dredging & Hydraulic Channel Surveys",
      "Raw Materials Quality Grading & Testing",
      "Tender Consortium & JV Strategic Advisory",
      "Infrastructure Feasibility & Planning"
    ],
    keyServicesBn: [
      "সিভিল ও স্ট্রাকচারাল ইঞ্জিনিয়ারিং তদারকি",
      "নদী খনন ও হাইড্রোগ্রাফিক চ্যানেল সার্ভে",
      "নির্মাণ সামগ্রীর মান নিয়ন্ত্রণ ও গ্রেডিং টেস্ট",
      "টেন্ডার কনসোর্টিয়াম ও যৌথ উদ্যোগ পরামর্শ",
      "অবকাঠামো সম্ভাব্যতা যাচাই ও পরিকল্পনা"
    ],
    targetSectorsEn: ["Public Authorities", "Engineering Firms", "Private Developers", "International Bidders"],
    targetSectorsBn: ["সরকারি দপ্তরসমূহ", "ইঞ্জিনিয়ারিং পরামর্শক সংস্থা", "বেসরকারি উদ্যোক্তা", "আন্তর্জাতিক দরপত্রদাতা"],
    image: "/images/gallery/site_team_national_flag.jpg",
  },
];

export type Language = 'en' | 'bn';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    projectsDropdown: {
      all: string;
      completed: string;
      ongoing: string;
      upcoming: string;
    };
    equipment: string;
    leadership: string;
    gallery: string;
    contact: string;
    callNow: string;
    contactUs: string;
    switchLang: string;
  };
  breadcrumbs: {
    home: string;
    about: string;
    services: string;
    projects: string;
    completed: string;
    ongoing: string;
    upcoming: string;
    equipment: string;
    leadership: string;
    gallery: string;
    contact: string;
    backToProjects: string;
    backToCategory: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    exploreProjects: string;
    contactUs: string;
    viewEquipment: string;
    keyFacts: {
      foundingYear: string;
      foundingYearLabel: string;
      sectors: string;
      sectorsLabel: string;
      equipmentFleet: string;
      equipmentFleetLabel: string;
      verifiedStatus: string;
      verifiedStatusLabel: string;
    };
  };
  about: {
    sectionKicker: string;
    title: string;
    leadText: string;
    paragraph1: string;
    paragraph2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    governanceTitle: string;
    sisterConcernsTitle: string;
    sisterConcernsSubtitle: string;
    jointVenturesTitle: string;
    jointVenturesSubtitle: string;
    legalNoteTitle: string;
    legalNoteText: string;
    bankingTitle: string;
    bankingSubtitle: string;
  };
  services: {
    sectionKicker: string;
    title: string;
    subtitle: string;
    contactForTender: string;
    categories: {
      realEstate: { title: string; desc: string };
      buildingConstruction: { title: string; desc: string };
      interiorDesign: { title: string; desc: string };
      roadsHighways: { title: string; desc: string };
      railwayProjects: { title: string; desc: string };
      riverDredging: { title: string; desc: string };
      sandFilling: { title: string; desc: string };
      stoneSupply: { title: string; desc: string };
      infrastructure: { title: string; desc: string };
      powerPlantCivil: { title: string; desc: string };
    };
  };
  projects: {
    sectionKicker: string;
    title: string;
    subtitle: string;
    all: string;
    completed: string;
    ongoing: string;
    upcoming: string;
    statusNote: string;
    viewDetails: string;
    locationLabel: string;
    categoryLabel: string;
    statusLabel: string;
    closeModal: string;
    sourceNotice: string;
  };
  projectDetail: {
    backToPortfolio: string;
    backToCategory: string;
    overview: string;
    scope: string;
    location: string;
    status: string;
    category: string;
    sourceRecord: string;
    inquireWhatsApp: string;
    inquireEmail: string;
    relatedProjects: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  equipment: {
    sectionKicker: string;
    title: string;
    subtitle: string;
    tableHeaders: {
      item: string;
      quantity: string;
      manufacturer: string;
      category: string;
    };
    capacityNote: string;
  };
  leadership: {
    sectionKicker: string;
    title: string;
    subtitle: string;
    boardTitle: string;
    executiveTitle: string;
    advisorsTitle: string;
    profileNotice: string;
  };
  gallery: {
    sectionKicker: string;
    title: string;
    subtitle: string;
    all: string;
    marine: string;
    civil: string;
    highway: string;
    railway: string;
    clickToEnlarge: string;
    sourceCaption: string;
  };
  contact: {
    sectionKicker: string;
    title: string;
    subtitle: string;
    headOffice: string;
    corporateOffice: string;
    phones: string;
    emails: string;
    whatsappDirect: string;
    whatsappAction: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    phoneNumber: string;
    phonePlaceholder: string;
    inquiryType: string;
    inquiryOptions: {
      construction: string;
      dredging: string;
      materials: string;
      tender: string;
      general: string;
    };
    message: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    formNotice: string;
    formSuccess: string;
    formError: string;
    whatsappPrefill: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    coreSectors: string;
    contactHead: string;
    copyright: string;
    disclaimer: string;
    sourceDocNotice: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    desc: string;
    backHome: string;
    viewProjects: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      projectsDropdown: {
        all: "All Projects",
        completed: "Completed Projects",
        ongoing: "Ongoing Projects",
        upcoming: "Upcoming Projects",
      },
      equipment: "Equipment Fleet",
      leadership: "Leadership",
      gallery: "Project Gallery",
      contact: "Contact",
      callNow: "Direct Inquiry",
      contactUs: "Contact Us",
      switchLang: "বাংলা",
    },
    breadcrumbs: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      completed: "Completed Projects",
      ongoing: "Ongoing Projects",
      upcoming: "Upcoming Projects",
      equipment: "Equipment Fleet",
      leadership: "Leadership",
      gallery: "Photo Gallery",
      contact: "Contact",
      backToProjects: "Back to Projects",
      backToCategory: "Back to Category",
    },
    hero: {
      badge: "Established 2018 · Registered in Bangladesh",
      headline: "Engineering, Dredging & Infrastructure Development",
      subheadline:
        "J.H. Development Construction Ltd. delivers specialized heavy construction, river channel dredging, bulk earthworks, and multi-disciplinary infrastructure projects across Bangladesh.",
      exploreProjects: "Explore Projects",
      contactUs: "Contact Offices",
      viewEquipment: "Equipment Fleet",
      keyFacts: {
        foundingYear: "2018",
        foundingYearLabel: "Founding Year",
        sectors: "10+",
        sectorsLabel: "Civil & Marine Sectors",
        equipmentFleet: "50+ Sets",
        equipmentFleetLabel: "Documented Machinery",
        verifiedStatus: "1st Class",
        verifiedStatusLabel: "Contractor Status",
      },
    },
    about: {
      sectionKicker: "Company Profile",
      title: "Building Bangladesh's Civil and Marine Foundations",
      leadText:
        "J.H. Development Construction Ltd. (JHDCL) is a comprehensive construction, real estate development, and marine contracting firm established in 2018.",
      paragraph1:
        "The company operates across residential and commercial property development, major river dredging operations, sand filling and subgrade stabilization, railway corridor infrastructure, power plant earthworks, and specialized construction material supply.",
      paragraph2:
        "JHDCL works in close collaboration with public sector authorities, regional development agencies, and private industrial partners to execute complex infrastructure tenders with dedicated equipment fleets.",
      missionTitle: "Our Mission",
      missionText:
        "To develop and deliver value-added goods and services to our esteemed customers, consistently outperform industry benchmarks, build enduring relationships with our associates and stakeholders, and achieve sustainable growth with positive economic impact.",
      visionTitle: "Our Vision",
      visionText:
        "To contribute actively to the economic, social, and environmental progress of Bangladesh through optimum resource utilization and constant modernization of construction and dredging capabilities.",
      governanceTitle: "Corporate Structure & Governance",
      sisterConcernsTitle: "Documented Sister Concern Companies",
      sisterConcernsSubtitle: "Companies operating within the wider group ecosystem as documented in the corporate profile.",
      jointVenturesTitle: "Partnership & Joint Venture Companies",
      jointVenturesSubtitle: "Consortium and joint-venture partners engaged in high-volume tender participation.",
      legalNoteTitle: "Corporate Legal Identification",
      legalNoteText:
        "Incorporated under the Companies Act 1994 (Act XVIII of 1994), Registration No. C-176309/2021. The primary corporate brand is J.H. Development Construction Ltd. (registered in incorporation records as Jamat Hazera Development Construction Ltd.).",
      bankingTitle: "Banking & Financial Channels",
      bankingSubtitle: "Authorized schedule banking channels supporting bank guarantees, BTB L/Cs, and project financing.",
    },
    services: {
      sectionKicker: "Core Capabilities",
      title: "Specialized Engineering & Development Services",
      subtitle:
        "Documented capabilities spanning heavy civil construction, hydraulic marine engineering, and raw material logistics.",
      contactForTender: "Inquire for Tender Execution",
      categories: {
        realEstate: {
          title: "Real Estate & Housing Development",
          desc: "Development of residential apartments, housing schemes, commercial retail spaces, and urban rehabilitation centers.",
        },
        buildingConstruction: {
          title: "Building Construction & Superstructures",
          desc: "First-class general contractor for structural concrete, steel frame fabrication, multi-story buildings, and institutional facilities.",
        },
        interiorDesign: {
          title: "Architectural Interior Design",
          desc: "Interior planning, custom woodwork, space utilization, and turnkey finishes for executive residences and corporate spaces.",
        },
        roadsHighways: {
          title: "Roads & Highways Construction",
          desc: "Subgrade preparation, motor grading, asphalt compaction, and multi-lane arterial highway extensions.",
        },
        railwayProjects: {
          title: "Railway Earthworks & Ballast Filling",
          desc: "Track embankment sand filling, ballast handling, and structural earthworks along national railway corridors.",
        },
        riverDredging: {
          title: "River Dredging & Navigation Channels",
          desc: "Hydraulic desiltation, cutter suction dredging (CSD), river training, and riverbank revetment block installation.",
        },
        sandFilling: {
          title: "Sand Filling & Land Reclamation",
          desc: "Bulk sand filling for power plant sites, industrial economic zones, marine drive embankments, and commercial plots.",
        },
        stoneSupply: {
          title: "Stone, Sand & Raw Materials Supply",
          desc: "Direct supply and import of Dubai Black/White stone, Bhutanese stone, Indian-Pakur aggregates, and Sylhet/Vati sand.",
        },
        infrastructure: {
          title: "Aviation & Airport Civil Infrastructure",
          desc: "Runway terminal civil construction, apron extension works, and heavy airfield site civil engineering.",
        },
        powerPlantCivil: {
          title: "Power Plant & Energy Groundworks",
          desc: "Large-scale sand filling, perimeter dyke formation, and marine access dredging for major solar and power generation plants.",
        },
      },
    },
    projects: {
      sectionKicker: "Project Portfolio",
      title: "Documented Project Portfolio",
      subtitle:
        "Civil construction, river training, sand filling, and infrastructure engagements recorded in the corporate profile.",
      all: "All Projects",
      completed: "Completed Projects",
      ongoing: "Ongoing Projects",
      upcoming: "Upcoming Projects",
      statusNote:
        "Project categories and statuses are presented as documented in the company's verified corporate profile.",
      viewDetails: "View Project Profile",
      locationLabel: "Location",
      categoryLabel: "Category",
      statusLabel: "Status",
      closeModal: "Close Details",
      sourceNotice: "Documented in JHDCL Corporate Profile",
    },
    projectDetail: {
      backToPortfolio: "Back to All Projects",
      backToCategory: "Back to",
      overview: "Project Overview",
      scope: "Technical Scope & Execution",
      location: "Project Location",
      status: "Project Status",
      category: "Engineering Sector",
      sourceRecord: "Official Citation",
      inquireWhatsApp: "Inquire via WhatsApp",
      inquireEmail: "Send Email Inquiry",
      relatedProjects: "Other Projects in this Sector",
      notFoundTitle: "Project Not Found",
      notFoundDesc: "The project profile you are looking for is not listed in our verified corporate records.",
    },
    equipment: {
      sectionKicker: "Machinery & Equipment",
      title: "Heavy Equipment Fleet & Marine Assets",
      subtitle:
        "Dedicated fleet of cutter suction dredgers, bulkheads, CAT excavators, mobile cranes, and haulage dump trucks.",
      tableHeaders: {
        item: "Equipment Description",
        quantity: "Unit / Quantity",
        manufacturer: "Manufacturer / Origin",
        category: "Discipline",
      },
      capacityNote:
        "Equipment includes 14-inch & 12-inch CSD Dredgers, 14 bulk-head transport vessels (6,000–22,000 cft capacity), Caterpillar excavators, 50-ton Tadano cranes, and 17 dump trucks.",
    },
    leadership: {
      sectionKicker: "Corporate Governance",
      title: "Board of Directors & Executive Management",
      subtitle:
        "Leadership team guiding project execution, financial stewardship, and operational safety.",
      boardTitle: "Running Board of Directors",
      executiveTitle: "Head of Operations & Executive Team",
      advisorsTitle: "International Advisory Board",
      profileNotice:
        "All titles, leadership designations, and executive assignments are documented from the company's corporate governance filings.",
    },
    gallery: {
      sectionKicker: "Photographic Evidence",
      title: "Genuine Project & Field Operation Imagery",
      subtitle:
        "Authentic photographs extracted directly from company project sites, river dredging operations, and construction works.",
      all: "All Works",
      marine: "Marine & Dredging",
      civil: "Buildings & Civil",
      highway: "Roads & Highways",
      railway: "Railway & Earthworks",
      clickToEnlarge: "Click to inspect high-resolution photo",
      sourceCaption: "Site photo from official JHDCL project documentation",
    },
    contact: {
      sectionKicker: "Get In Touch",
      title: "Direct Corporate & Site Inquiries",
      subtitle:
        "Contact our Banani Head Office or Uttara Corporate Office for tenders, joint-venture partnerships, and raw material procurement.",
      headOffice: "Banani Head Office",
      corporateOffice: "Uttara Corporate Office",
      phones: "Telephone & Mobile",
      emails: "Official Email Correspondence",
      whatsappDirect: "Instant WhatsApp Inquiry",
      whatsappAction: "Chat on WhatsApp (+880 1754 158 358)",
      formTitle: "Submit a Corporate Inquiry",
      formSubtitle: "Please specify your project scope, location, and required services.",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Eng. Tariqul Islam",
      emailAddress: "Email Address",
      emailPlaceholder: "e.g. name@organization.com",
      phoneNumber: "Contact Phone / Mobile",
      phonePlaceholder: "e.g. +880 1711 000000",
      inquiryType: "Inquiry Category",
      inquiryOptions: {
        construction: "Building & Civil Construction",
        dredging: "River Dredging & Sand Filling",
        materials: "Stone, Aggregate & Sand Supply",
        tender: "Tender Joint Venture & Consortium",
        general: "General Corporate Inquiry",
      },
      message: "Project Description & Specifications",
      messagePlaceholder: "Please describe the project location, estimated quantity/volume, time schedule, and any technical tender requirements...",
      submitButton: "Send Inquiry",
      submitting: "Preparing dispatch...",
      formNotice:
        "Inquiries submitted via this portal are dispatched directly to the executive office. For immediate assistance, please use our verified WhatsApp line.",
      formSuccess: "Thank you. Your inquiry details have been formatted. Our corporate office will follow up shortly.",
      formError: "Please ensure all required fields are accurately filled.",
      whatsappPrefill: "Hello JHDCL team, I am inquiring regarding your construction, dredging, and infrastructure capabilities.",
    },
    footer: {
      tagline:
        "J.H. Development Construction Ltd. (JHDCL) — Leading infrastructure contractor, river dredging specialist, and real estate developer in Bangladesh.",
      quickLinks: "Corporate Links",
      coreSectors: "Operational Sectors",
      contactHead: "Banani Head Office",
      copyright: "J.H. Development Construction Ltd. All rights reserved.",
      disclaimer:
        "Information published on this website reflects verified corporate filings and profile records as of July 2026. For formal contractual documentation or tender consortium agreements, please contact the corporate secretariat directly.",
      sourceDocNotice:
        "Sourced from official JHDCL corporate profile documentation.",
    },
    notFound: {
      title: "Page Not Found",
      subtitle: "The requested page does not exist or has been moved.",
      desc: "Please verify the URL or return to our corporate homepage or project directory.",
      backHome: "Return to Homepage",
      viewProjects: "View Project Portfolio",
    },
  },
  bn: {
    nav: {
      home: "মূলপাতা",
      about: "পরিচিতি",
      services: "সেবাসমূহ",
      projects: "প্রকল্পসমূহ",
      projectsDropdown: {
        all: "সকল প্রকল্প",
        completed: "সম্পন্ন প্রকল্পসমূহ",
        ongoing: "চলমান প্রকল্পসমূহ",
        upcoming: "আসন্ন প্রকল্পসমূহ",
      },
      equipment: "যন্ত্রপাতি বহর",
      leadership: "পরিচালনা পর্ষদ",
      gallery: "চিত্রশালা",
      contact: "যোগাযোগ",
      callNow: "সরাসরি যোগাযোগ",
      contactUs: "যোগাযোগ করুন",
      switchLang: "English",
    },
    breadcrumbs: {
      home: "মূলপাতা",
      about: "পরিচিতি",
      services: "সেবাসমূহ",
      projects: "প্রকল্পসমূহ",
      completed: "সম্পন্ন প্রকল্পসমূহ",
      ongoing: "চলমান প্রকল্পসমূহ",
      upcoming: "আসন্ন প্রকল্পসমূহ",
      equipment: "যন্ত্রপাতি বহর",
      leadership: "পরিচালনা পর্ষদ",
      gallery: "চিত্রশালা",
      contact: "যোগাযোগ",
      backToProjects: "প্রকল্প তালিকায় ফিরে যান",
      backToCategory: "ক্যাটাগরিতে ফিরে যান",
    },
    hero: {
      badge: "২০১৮ সালে প্রতিষ্ঠিত · গণপ্রজাতন্ত্রী বাংলাদেশ",
      headline: "সিভিল ইঞ্জিনিয়ারিং, ড্রেজিং ও অবকাঠামো উন্নয়ন",
      subheadline:
        "জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ (JHDCL) সমগ্র বাংলাদেশে ভারী নির্মাণ, নদী ড্রেজিং, বালু ভরাট ও বহুমুখী অবকাঠামো প্রকল্পে বিশ্বস্ততার সাথে কাজ করে আসছে।",
      exploreProjects: "প্রকল্পসমূহ দেখুন",
      contactUs: "অফিসে যোগাযোগ",
      viewEquipment: "যন্ত্রপাতি বহর",
      keyFacts: {
        foundingYear: "২০১৮",
        foundingYearLabel: "প্রতিষ্ঠার বছর",
        sectors: "১০+",
        sectorsLabel: "সিভিল ও মেরিন খাত",
        equipmentFleet: "৫০+ সেট",
        equipmentFleetLabel: "ভারী যন্ত্রপাতি বহর",
        verifiedStatus: "১ম শ্রেণি",
        verifiedStatusLabel: "ঠিকাদার মর্যাদা",
      },
    },
    about: {
      sectionKicker: "কোম্পানি পরিচিতি",
      title: "বাংলাদেশের অবকাঠামো ও নদী শাসন উন্নয়নের অংশীদার",
      leadText:
        "জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ (JHDCL) ২০১৮ সালে প্রতিষ্ঠিত একটি শীর্ষস্থানীয় রিয়েল এস্টেট, নির্মাণ ও নদী ড্রেজিং প্রতিষ্ঠান।",
      paragraph1:
        "কোম্পানিটি আবাসিক ও বাণিজ্যিক ভবন নির্মাণ, নদী ড্রেজিং ও রিভার ট্রেইনিং, বালু ভরাট ও ভূমি উন্নয়ন, রেলপথ অবকাঠামো, বিদ্যুৎ কেন্দ্রের গ্রাউন্ডওয়ার্ক এবং নির্মাণ সামগ্রী (পাথর ও বালু) আমদানির কাজে নিয়োজিত।",
      paragraph2:
        "জেএইচডিসিএল সরকারি ও বেসরকারি খাতের মেগা প্রকল্পে দক্ষ ইঞ্জিনিয়ারিং টিম এবং নিজস্ব ভারী যন্ত্রপাতি বহরের মাধ্যমে গুণগত মান বজায় রেখে কাজ সম্পাদন করে।",
      missionTitle: "আমাদের লক্ষ্য (Mission)",
      missionText:
        "গ্রাহক ও অংশীদারদের সর্বোচ্চ মানের নির্মাণ ও উন্নয়ন সেবা প্রদান করা, মানদণ্ডে শ্রেষ্ঠত্ব বজায় রাখা এবং জাতীয় অর্থনীতি ও কর্মসংস্থানে ইতিবাচক ভূমিকা রাখা।",
      visionTitle: "আমাদের রূপকল্প (Vision)",
      visionText:
        "সম্পদের সর্বোচ্চ সদ্ব্যবহার ও আধুনিক প্রযুক্তির সমন্বয়ে বাংলাদেশের টেকসই অর্থনৈতিক ও সামাজিক অগ্রগতিতে কার্যকর অবদান রাখা।",
      governanceTitle: "সাংগঠনিক কাঠামো ও পরিচালনা",
      sisterConcernsTitle: "সিস্টার কনসার্ন প্রতিষ্ঠানসমূহ",
      sisterConcernsSubtitle: "কোম্পানি প্রোফাইলে উল্লেখিত সহযোগী ও অঙ্গপ্রতিষ্ঠানসমূহ।",
      jointVenturesTitle: "পার্টনারশিপ ও যৌথ উদ্যোগ (JV)",
      jointVenturesSubtitle: "বৃহৎ ভলিউম টেন্ডার ও কনসোর্টিয়াম কাজের জন্য অংশীদারী প্রতিষ্ঠানসমূহ।",
      legalNoteTitle: "আইনগত নিবন্ধন ও তথ্য",
      legalNoteText:
        "কোম্পানি আইন ১৯৯৪ (Act XVIII of 1994) এর অধীনে নিবন্ধিত, নিবন্ধন নং C-176309/2021। প্রাতিষ্ঠানিক নাম জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ (নিবন্ধন দলিলে জামাত হাজেরা ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ উল্লেখিত)।",
      bankingTitle: "ব্যাংকিং ও অর্থনৈতিক চ্যানেল",
      bankingSubtitle: "ব্যাংক গ্যারান্টি, ব্যাক-টু-ব্যাক এল/সি ও প্রকল্প লেনদেনে অনুমোদিত তফসিলি ব্যাংকসমূহ।",
    },
    services: {
      sectionKicker: "আমাদের সেবাসমূহ",
      title: "বিশেষায়িত ইঞ্জিনিয়ারিং ও উন্নয়ন সেবাসমূহ",
      subtitle:
        "ভারী সিভিল নির্মাণ, নদী খনন, ভূমি ভরাট এবং নির্মাণ সামগ্রী সরবরাহে আমাদের সমন্বিত সক্ষমতা।",
      contactForTender: "টেন্ডার ও কাজের জন্য যোগাযোগ",
      categories: {
        realEstate: {
          title: "রিয়েল এস্টেট ও আবাসন উন্নয়ন",
          desc: "নাগরিক জীবনমানের আধুনিকায়নে উন্নত আবাসিক অ্যাপার্টমেন্ট, পুনর্বাসন আবাসন এবং বাণিজ্যিক স্পেস নির্মাণ।",
        },
        buildingConstruction: {
          title: "ভবন নির্মাণ ও সুপারস্ট্রাকচার",
          desc: "প্রথম শ্রেণির ঠিকাদার হিসেবে আরসিসি ফ্রেম স্ট্রাকচার, স্টিল বিল্ডিং ও বহুতল প্রাতিষ্ঠানিক কমপ্লেক্স নির্মাণ।",
        },
        interiorDesign: {
          title: "আর্কিটেকচারাল ইন্টেরিয়র ডিজাইন",
          desc: "অভিজাত কাঠ ও আধুনিক উপাদানে কর্পোরেট অফিস ও আধুনিক বাসস্থানের মানসম্মত ইন্টেরিয়র সলিউশন।",
        },
        roadsHighways: {
          title: "সড়ক ও মহাসড়ক নির্মাণ",
          desc: "সাবগ্রেড প্রস্তুতকরণ, গ্রেডিং, বিটুমিনাস এসফাল্ট পেভিং এবং আধুনিক ফোর-লেন মহাসড়ক সম্প্রসারণ কাজ।",
        },
        railwayProjects: {
          title: "রেলওয়ে অবকাঠামো ও বালু ভরাট",
          desc: "জাতীয় রেলপথ করিডোরে এমব্যাঙ্কমেন্ট বালু ভরাট, ব্যালাস্ট হ্যান্ডলিং এবং সিভিল ট্র্যাক মেরামত।",
        },
        riverDredging: {
          title: "নদী খনন ও নাব্যতা রক্ষা (Dredging)",
          desc: "কাটার সাকশন ড্রেজার (CSD) দিয়ে নদী খনন, পলি অপসারণ, ডাইক বাঁধ নির্মাণ ও ব্লক বসানো রিভার প্রটেকশন।",
        },
        sandFilling: {
          title: "বালু ভরাট ও ভূমি উন্নয়ন",
          desc: "বিদ্যুৎ কেন্দ্র, শিল্প পার্ক, অর্থনৈতিক অঞ্চল ও মেরিন ড্রাইভের মতো মেগা প্রজেক্টে বালু সরবরাহ ও ভরাট।",
        },
        stoneSupply: {
          title: "পাথর ও বালু সরবরাহ ও আমদানি",
          desc: "দুবাই ব্ল্যাক/হোয়াইট স্টোন, ভুটানি পাথর, ভারতীয় পাকুড় স্টোন এবং সিলেট ও ভাটি বালু আমদানি ও সরবরাহ।",
        },
        infrastructure: {
          title: "বিমানবন্দর ও রানওয়ে অবকাঠামো",
          desc: "বিমানবন্দর টার্মিনাল সিভিল কাজ, রানওয়ে সম্প্রসারণ ও এপ্রন এরিয়া অবকাঠামো উন্নয়ন।",
        },
        powerPlantCivil: {
          title: "বিদ্যুৎ কেন্দ্রের সিভিল ও গ্রাউন্ডওয়ার্ক",
          desc: "১০০-২০০ মেগাওয়াট সোলার ও বিদ্যুৎ কেন্দ্র প্রকল্পে বিশাল পরিসরে বালু ভরাট ও হাইড্রোলিক ড্রেজিং কাজ।",
        },
      },
    },
    projects: {
      sectionKicker: "প্রকল্প পরিচিতি",
      title: "দালিলিক প্রকল্প পোর্টফোলিও",
      subtitle:
        "কোম্পানি প্রোফাইলে সুনির্দিষ্টভাবে উল্লেখিত সম্পন্ন, চলমান এবং ভবিষ্যৎ প্রকল্পসমূহ।",
      all: "সকল প্রকল্প",
      completed: "সম্পন্ন প্রকল্পসমূহ",
      ongoing: "চলমান প্রকল্পসমূহ",
      upcoming: "আসন্ন প্রকল্পসমূহ",
      statusNote:
        "প্রকল্পের ক্যাটাগরি ও অবস্থান কোম্পানি প্রোফাইল অনুসারে অবিকল উপস্থাপন করা হয়েছে।",
      viewDetails: "প্রকল্পের বিস্তারিত",
      locationLabel: "অবস্থান",
      categoryLabel: "ক্যাটাগরি",
      statusLabel: "অবস্থা",
      closeModal: "বন্ধ করুন",
      sourceNotice: "জেএইচডিসিএল অফিশিয়াল প্রোফাইল থেকে সংগৃহীত",
    },
    projectDetail: {
      backToPortfolio: "সকল প্রকল্পে ফিরে যান",
      backToCategory: "ফিরে যান",
      overview: "প্রকল্প সারসংক্ষেপ",
      scope: "কাজের পরিধি ও স্পেসিফিকেশন",
      location: "প্রকল্পের অবস্থান",
      status: "বর্তমান অবস্থা",
      category: "ইঞ্জিনিয়ারিং বিভাগ",
      sourceRecord: "দালিলিক প্রমাণ",
      inquireWhatsApp: "হোয়াটসঅ্যাপে অনুসন্ধান",
      inquireEmail: "ইমেইল অনুসন্ধান",
      relatedProjects: "একই খাতের অন্যান্য প্রকল্প",
      notFoundTitle: "প্রকল্প পাওয়া যায়নি",
      notFoundDesc: "আপনি যে প্রকল্পের তথ্য খুঁজছেন তা আমাদের দালিলিক রেকর্ডে তালিকাভুক্ত নেই।",
    },
    equipment: {
      sectionKicker: "যন্ত্রপাতি বহর",
      title: "নিজস্ব ড্রেজার, এক্সকাভেটর ও ভারী যন্ত্রপাতি",
      subtitle:
        "১৪ ইঞ্চি ও ১২ ইঞ্চি সিএসডি ড্রেজার, বাল্কহেড, ক্যাট ও ক্যাটারপিলার এক্সকাভেটর, তাদানো ক্রেন ও ডাম্প ট্রাক বহর।",
      tableHeaders: {
        item: "যন্ত্রপাতির বিবরণ",
        quantity: "পরিমাণ / সেট",
        manufacturer: "উৎস / প্রস্তুতকারক",
        category: "কাজের ধরন",
      },
      capacityNote:
        "বহরে রয়েছে ১৪'' ও ১২'' সিএসডি ড্রেজার, ১৪টি বাল্কহেড (৬০০০–২২০০০ সিএফটি ধারণক্ষমতা), ক্যাটারপিলার এক্সকাভেটর, ৫০ টন তাদানো ক্রেন এবং ১৭টি ডাম্প ট্রাক।",
    },
    leadership: {
      sectionKicker: "কর্পোরেট পরিচালনা",
      title: "পরিচালনা পর্ষদ ও নির্বাহী কর্মকর্তাবৃন্দ",
      subtitle:
        "দক্ষ ব্যবস্থাপনা ও ইঞ্জিনিয়ারিং নেতৃত্বের তত্ত্বাবধানে পরিচালিত প্রাতিষ্ঠানিক কার্যক্রম।",
      boardTitle: "রানিং বোর্ড অব ডিরেক্টরস",
      executiveTitle: "হেড অব অপারেশন ও এক্সিকিউটিভ টিম",
      advisorsTitle: "আন্তর্জাতিক উপদেষ্টা পর্ষদ",
      profileNotice:
        "সকল পদবি ও দায়িত্বশীল কর্মকর্তাদের তথ্য কোম্পানি দালিলিক নথি অনুসারে প্রদর্শিত।",
    },
    gallery: {
      sectionKicker: "চিত্রশালা",
      title: "প্রকল্পের মাঠপর্যায়ের আসল আলোকচিত্র",
      subtitle:
        "কোম্পানির প্রোফাইল ও চলমান কাজের সাইট থেকে সংগৃহীত প্রকৃত নির্মাণ, ড্রেজিং ও মহাসড়ক চিত্র।",
      all: "সকল ছবি",
      marine: "মেরিন ও ড্রেজিং",
      civil: "ভবন ও সিভিল",
      highway: "সড়ক ও মহাসড়ক",
      railway: "রেলওয়ে ও বালু ভরাট",
      clickToEnlarge: "বড় করে দেখতে ক্লিক করুন",
      sourceCaption: "জেএইচডিসিএল এর প্রকল্প সাইটের মূল আলোকচিত্র",
    },
    contact: {
      sectionKicker: "যোগাযোগ",
      title: "অফিস ও প্রকল্প অনুসন্ধান",
      subtitle:
        "টেন্ডার চুক্তি, যৌথ উদ্যোগ ও নির্মাণ সামগ্রী সংগ্রহের জন্য আমাদের বনানী অথবা উত্তরা কার্যালয়ে সরাসরি যোগাযোগ করুন।",
      headOffice: "প্রধান কার্যালয় (বনানী)",
      corporateOffice: "কর্পোরেট কার্যালয় (উত্তরা)",
      phones: "টেলিফোন ও সেল নম্বর",
      emails: "অফিশিয়াল ই-মেইল",
      whatsappDirect: "সরাসরি হোয়াটসঅ্যাপ ইনকোয়ারি",
      whatsappAction: "হোয়াটসঅ্যাপে চ্যাট করুন (+880 1754 158 358)",
      formTitle: "কর্পোরেট বার্তা পাঠান",
      formSubtitle: "আপনার প্রকল্পের ধরন, এলাকা ও প্রয়োজনীয় সেবা উল্লেখ করুন।",
      fullName: "আপনার পূর্ণ নাম",
      fullNamePlaceholder: "উদাঃ ইঞ্জিনিয়ার মোস্তাফিজুর রহমান",
      emailAddress: "ই-মেইল ঠিকানা",
      emailPlaceholder: "উদাঃ name@organization.com",
      phoneNumber: "ফোন / মোবাইল নম্বর",
      phonePlaceholder: "উদাঃ +880 1711 000000",
      inquiryType: "অনুসন্ধানের বিষয়",
      inquiryOptions: {
        construction: "ভবন ও সিভিল নির্মাণ কাজ",
        dredging: "নদী খনন ও বালু ভরাট কাজ",
        materials: "পাথর ও বালু সামগ্রী সরবরাহ",
        tender: "টেন্ডার জয়েন্ট ভেঞ্চার ও কনসোর্টিয়াম",
        general: "সাধারণ প্রাতিষ্ঠানিক তথ্য",
      },
      message: "প্রকল্পের বিবরণ ও বিস্তারিত চাহিদা",
      messagePlaceholder: "প্রকল্পের অবস্থান, পরিমাপ বা ভলিউম, সময়সীমা ও স্পেসিফিকেশন উল্লেখ করুন...",
      submitButton: "বার্তা প্রেরণ করুন",
      submitting: "প্রক্রিয়াকরণ হচ্ছে...",
      formNotice:
        "এই পোর্টালের মাধ্যমে পাঠানো অনুসন্ধান সরাসরি ব্যবস্থাপনা দফতরে নথিভুক্ত হয়। দ্রুত সাড়ার জন্য অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপ নম্বরে যোগাযোগ করুন।",
      formSuccess: "ধন্যবাদ। আপনার অনুসন্ধান সফলভাবে গ্রহণ করা হয়েছে। আমাদের কর্পোরেট অফিস শীঘ্রই যোগাযোগ করবে।",
      formError: "অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন।",
      whatsappPrefill: "আসসালামু আলাইকুম। জেএইচডিসিএল কোম্পানির নির্মাণ, ড্রেজিং বা মেটেরিয়ালস কাজের বিষয়ে জানতে আগ্রহী।",
    },
    footer: {
      tagline:
        "জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ — বাংলাদেশে প্রথম শ্রেণির ঠিকাদার, রিভার ড্রেজিং বিশেষজ্ঞ ও রিয়েল এস্টেট ডেভেলপার।",
      quickLinks: "প্রয়োজনীয় লিংক",
      coreSectors: "কার্যক্রমের খাতসমূহ",
      contactHead: "বনানী হেড অফিস",
      copyright: "জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ। সর্বস্বত্ব সংরক্ষিত।",
      disclaimer:
        "এই ওয়েবসাইটের সকল তথ্য কোম্পানি প্রোফাইল ও নথি (২০২৬) অনুসারে প্রস্তুতকৃত। বাণিজ্যিক চুক্তি বা কনসোর্টিয়াম কাজের জন্য সরাসরি অফিসে যোগাযোগের অনুরোধ করা হচ্ছে।",
      sourceDocNotice: "জেএইচডিসিএল কর্পোরেট প্রোফাইল অনুযায়ী প্রকাশিত।",
    },
    notFound: {
      title: "পৃষ্ঠাটি পাওয়া যায়নি",
      subtitle: "অনুরোধকৃত ওয়েব ঠিকানাটি বিদ্যমান নেই অথবা স্থানান্তর করা হয়েছে।",
      desc: "দয়া করে ইউআরএল যাচাই করুন অথবা মূলপাতা বা প্রকল্প তালিকায় ফিরে যান।",
      backHome: "মূলপাতায় ফিরে যান",
      viewProjects: "প্রকল্প পোর্টফোলিও দেখুন",
    },
  },
};

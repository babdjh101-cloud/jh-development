/**
 * Jamat Hazera Development Construction Ltd. (JHDCL)
 * Central Company Configuration & Contact Registry
 * 
 * Sourced from "JHDCL Short Profile 17-07-26.pdf" and the corporate briefing dated 28 October 2026.
 */

export interface OfficeLocation {
  id: string;
  nameEn: string;
  nameBn: string;
  addressEn: string;
  addressBn: string;
  phones: string[];
  emails: string[];
  isHeadOffice?: boolean;
}

export const COMPANY_CONFIG = {
  // Official primary display name (as specified in 28 Oct 2026 corporate briefing)
  nameEn: "Jamat Hazera Development Construction Ltd.",
  nameBn: "জামাত হাজেরা ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ",
  acronym: "JHDCL",
  
  // Secondary display / acronym brand name appearing in initial documents
  brandShortNameEn: "J.H. Development Construction Ltd.",
  brandShortNameBn: "জে.এইচ. ডেভেলপমেন্ট কনস্ট্রাকশন লিঃ",
  
  // Official Slogan
  sloganEn: "Committed to Quality, Driven by Integrity",
  sloganBn: "গুণমানে অঙ্গীকারবদ্ধ, সততায় পরিচালিত",
  
  // Established date (Briefing specifies 05 October 2019; PDF initial note states 2018 - preserved for confirmation)
  establishedDateEn: "05 October 2019",
  establishedDateBn: "০৫ অক্টোবর ২০১৯",
  foundingYear: 2019,
  initialFoundingYearClaim: 2018, // flagged for corporate confirmation
  
  // Official Welcome Message
  welcomeMessageEn: "JHDCL is currently successfully executing projects and providing services in the construction sector, both within the country and internationally.",
  welcomeMessageBn: "জেএইচডিসিএল বর্তমানে দেশের অভ্যন্তরে এবং আন্তর্জাতিক পরিমণ্ডলে নির্মাণ খাতে সফলতার সাথে প্রকল্প বাস্তবায়ন ও সেবা প্রদান করে আসছে।",

  // Corporate Marketing Claims (Subject to documentary verification)
  marketingClaimEn: "First-Class Constructor & Leading Infrastructure Specialist in Bangladesh",
  marketingClaimBn: "বাংলাদেশে প্রথম শ্রেণির ঠিকাদার ও শীর্ষস্থানীয় অবকাঠামো বিশেষজ্ঞ",
  leedClaimNote: "Top LEED Constructor claim recorded in briefing is subject to formal documentary certification.",

  // RJSC & Incorporation notes from official filing
  incorporationNo: "C-176309/2021",
  tinNumber: "529382119696",
  companyAct: "Companies Act (Act XVIII of 1994)",
  
  // Preferred verified WhatsApp contact
  whatsappNumber: "+8801754158358",
  whatsappDisplay: "+880 1754-158358",
  whatsappRaw: "8801754158358",
  whatsappFormatted: "+880 1754-158358",
  contactEmail: "jhdclsomrat@gmail.com",
  bankingChannels: [
    "City Bank PLC",
    "Bangladesh Commerce Bank",
    "Islami Bank Bangladesh",
    "Dutch Bangla Bank",
    "South Bangla Agriculture Bank"
  ],
  
  // Head Office (Banani)
  headOffice: {
    id: "head-office",
    nameEn: "Head Office",
    nameBn: "প্রধান কার্যালয়",
    addressEn: "House #45, Road #13, Block #D, Banani, Dhaka-1213, Bangladesh",
    addressBn: "বাড়ি #৪৫, রোড #১৩, ব্লক #ডি, বনানী, ঢাকা-১২১৩, বাংলাদেশ",
    phones: ["+880 1754-158 358", "+880 1927-794 745"],
    emails: ["jhdclsomrat@gmail.com", "motalebbogra2580@gmail.com"],
    isHeadOffice: true,
  },
  
  // Corporate Office (Uttara)
  corporateOffice: {
    id: "corporate-office",
    nameEn: "Corporate Office",
    nameBn: "কর্পোরেট কার্যালয়",
    addressEn: "House #38, Road #3/B, Block #F, Sector-15, Uttara, Dhaka-1230, Bangladesh",
    addressBn: "বাড়ি #৩৮, রোড #৩/বি, ব্লক #এফ, সেক্টর-১৫, উত্তরা, ঢাকা-১২৩০, বাংলাদেশ",
    phones: ["01863-127119", "01757-484404"],
    emails: ["jhdclsomrat@gmail.com", "motalebbogra2580@gmail.com"],
    isHeadOffice: false,
  },
  
  // Additional emails noted in document ending sections (flagged for confirmation)
  alternativeEmails: ["jhdcsomrat@gmail.com"],
  
  // Brand assets
  logoPath: "/images/brand/jhdcl_logo.png",
  logoTransparentPath: "/images/brand/jhdcl_logo_transparent.png",
  
  // Key leadership as per profile
  leadership: {
    mdAndCeo: "Md. Abdul Motaleb Somrat",
    chairman: "Mr. Enayet Khan Enam",
    srViceChairman: "Md. Rafique Islam (Raton)",
    financeDirector: "Md. Al-Amin Hawlader",
    headOfOperation: "Eng. Mr. Sheikh Salam Joy",
    headOfPublicRelation: "Md. Maksudul Alam Dipu",
    headOfMarketing: "Mr. Alamin Hossain"
  },
  
  // Banking Partners listed in source
  banks: [
    "City Bank PLC",
    "Bangladesh Commerce Bank",
    "Islami Bank Bangladesh",
    "Dutch Bangla Bank",
    "South Bangla Agriculture Bank"
  ],
  
  // Transaction systems listed in source
  transactionSystems: [
    "BTB Transfer",
    "BTB LC",
    "Cheque Payment",
    "T/T (Telegraphic Transfer)",
    "Bank Guarantee (BG / PG)",
    "BTB Mobilization"
  ]
};

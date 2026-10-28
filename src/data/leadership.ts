export interface LeaderMember {
  id: string;
  nameEn: string;
  nameBn: string;
  roleEn: string;
  roleBn: string;
  image?: string;
  departmentEn?: string;
  departmentBn?: string;
}

export interface AdvisorMember {
  id: string;
  name: string;
  origin: string;
  designationEn: string;
  designationBn: string;
}

export const BOARD_DIRECTORS: LeaderMember[] = [
  {
    id: "chairman",
    nameEn: "Mr. Enayet Khan Enam",
    nameBn: "জনাব এনায়েত খাঁন এনাম",
    roleEn: "Chairman",
    roleBn: "চেয়ারম্যান",
    image: "/images/leadership/chairman_enayet_khan.png",
    departmentEn: "Board of Directors",
    departmentBn: "পরিচালনা পর্ষদ",
  },
  {
    id: "sr-vice-chairman",
    nameEn: "Md. Rafique Islam (Raton)",
    nameBn: "মোঃ রফিক ইসলাম (রতন)",
    roleEn: "Senior Vice Chairman",
    roleBn: "সিনিয়র ভাইস চেয়ারম্যান",
    image: "/images/leadership/sr_vice_chairman_rafique_islam.png",
    departmentEn: "Board of Directors",
    departmentBn: "পরিচালনা পর্ষদ",
  },
  {
    id: "md-ceo",
    nameEn: "Md. Abdul Motaleb Somrat",
    nameBn: "মোঃ আব্দুল মোতালেব সম্রাট",
    roleEn: "Managing Director & CEO",
    roleBn: "ব্যবস্থাপনা পরিচালক ও প্রধান নির্বাহী",
    image: "/images/leadership/md_ceo_motaleb_somrat.png",
    departmentEn: "Executive Governance & Corporate Leadership",
    departmentBn: "নির্বাহী প্রশাসন ও প্রাতিষ্ঠানিক নেতৃত্ব",
  },
  {
    id: "finance-director",
    nameEn: "Md. Al-Amin Hawlader",
    nameBn: "মোঃ আল-আমিন হাওলাদার",
    roleEn: "Finance Director",
    roleBn: "অর্থ পরিচালক (Finance Director)",
    image: "/images/leadership/finance_director_alamin_hawlader.png",
    departmentEn: "Finance & Accounts",
    departmentBn: "অর্থ ও হিসাব বিভাগ",
  },
];

export const EXECUTIVE_TEAM: LeaderMember[] = [
  {
    id: "head-operation",
    nameEn: "Eng. Mr. Sheikh Salam Joy",
    nameBn: "ইঞ্জিঃ শেখ সালাম জয়",
    roleEn: "Head of Operation",
    roleBn: "হেড অব অপারেশন",
    image: "/images/leadership/head_operation_sheikh_joy.png",
    departmentEn: "Civil & Marine Project Operations",
    departmentBn: "সিভিল ও মেরিন প্রকল্প বাস্তবায়ন",
  },
  {
    id: "head-pr",
    nameEn: "Md. Maksudul Alam Dipu",
    nameBn: "মোঃ মাকসুদুল আলম দীপু",
    roleEn: "Head of Public Relations",
    roleBn: "হেড অব পাবলিক রিলেশন",
    departmentEn: "Corporate Affairs & Communications",
    departmentBn: "কর্পোরেট যোগাযোগ ও গণসংযোগ",
  },
  {
    id: "head-marketing",
    nameEn: "Mr. Alamin Hossain",
    nameBn: "জনাব আল-আমিন হোসেন",
    roleEn: "Head of Marketing",
    roleBn: "হেড অব মার্কেটিং",
    image: "/images/leadership/head_marketing_alamin_hossain.png",
    departmentEn: "Business Development & Tenders",
    departmentBn: "ব্যবসায় উন্নয়ন ও টেন্ডার সমন্বয়",
  },
];

export const ADVISORS: AdvisorMember[] = [
  {
    id: "adv-1",
    name: "Elizabeth Wagstaff",
    origin: "England, United Kingdom",
    designationEn: "International Corporate Advisor",
    designationBn: "আন্তর্জাতিক কর্পোরেট উপদেষ্টা",
  },
  {
    id: "adv-2",
    name: "David John Crawford",
    origin: "South Africa",
    designationEn: "Engineering & Technical Advisor",
    designationBn: "ইঞ্জিনিয়ারিং ও টেকনিক্যাল উপদেষ্টা",
  },
];

export const SISTER_CONCERNS = [
  { nameEn: "JH Real-Estate Ltd.", nameBn: "জেএইচ রিয়েল-এস্টেট লিঃ", focusEn: "Residential & Commercial Properties", focusBn: "আবাসিক ও বাণিজ্যিক আবাসন" },
  { nameEn: "M.E.S. Construction", nameBn: "এম.ই.এস. কনস্ট্রাকশন", focusEn: "Civil Contracting & Concrete Works", focusBn: "সিভিল ঠিকাদারি ও নির্মাণ" },
  { nameEn: "Desh Cottage Real-Estate Ltd.", nameBn: "দেশ কটেজ রিয়েল-এস্টেট লিঃ", focusEn: "Housing Development & Land Schemes", focusBn: "আবাসন ও প্লট প্রকল্প" },
  { nameEn: "Akij Dynamics", nameBn: "আকিজ ডায়নামিক্স", focusEn: "Industrial Supply & Heavy Projects", focusBn: "শিল্প সরবরাহ ও ভারী প্রকল্প" },
  { nameEn: "M/S Redinex Construction Ltd.", nameBn: "মেসার্স রেডিনেক্স কনস্ট্রাকশন লিঃ", focusEn: "Heavy Infrastructure Works", focusBn: "ভারী অবকাঠামো উন্নয়ন" },
  { nameEn: "Somrat Electrical & Electronics Ltd.", nameBn: "সম্রাট ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক্স লিঃ", focusEn: "Power Transmission & Electrical Sub-stations", focusBn: "বিদ্যুৎ সঞ্চালন ও সাবস্টেশন" },
  { nameEn: "Shashy Enterprise", nameBn: "শস্য এন্টারপ্রাইজ", focusEn: "Agro-commodities & Supply Chain", focusBn: "কৃষি পণ্য ও সাপ্লাই চেইন" },
  { nameEn: "JPN Enterprise", nameBn: "জেপিএন এন্টারপ্রাইজ", focusEn: "Material Procurement & Local Trade", focusBn: "নির্মাণ সামগ্রী ক্রয় ও বাণিজ্য" },
  { nameEn: "Apparel Park BD", nameBn: "অ্যাপারেল পার্ক বিডি", focusEn: "Industrial & Garment Sector Estates", focusBn: "শিল্প ও পোশাক খাত এস্টেট" },
  { nameEn: "Talukdar Enterprise", nameBn: "তালুকদার এন্টারপ্রাইজ", focusEn: "Dredging Consortium & Transport Barges", focusBn: "ড্রেজিং কনসোর্টিয়াম ও নৌযান" },
  { nameEn: "JH International Medical College & Hospital Ltd.", nameBn: "জেএইচ ইন্টারন্যাশনাল মেডিকেল কলেজ অ্যান্ড হসপিটাল লিঃ", focusEn: "Healthcare & Medical Facility Construction", focusBn: "স্বাস্থ্যসেবা ও মেডিকেল কলেজ" },
];

export const JOINT_VENTURE_PARTNERS = [
  { nameEn: "Akij Dynamic", nameBn: "আকিজ ডায়নামিক", fieldEn: "Joint Tender Consortium", fieldBn: "যৌথ টেন্ডার কনসোর্টিয়াম" },
  { nameEn: "Anisha Traders", nameBn: "আনিশা ট্রেডার্স", fieldEn: "Mother Vessels & Marine Transport (55-60k ton)", fieldBn: "মাদার ভেসেল ও সমুদ্র পরিবহন (৫৫-৬০ হাজার টন)" },
  { nameEn: "Rapid Source", nameBn: "র‍্যাপিড সোর্স", fieldEn: "Strategic Raw Materials Procurement", fieldBn: "কৌশলগত নির্মাণ সামগ্রী সরবরাহ" },
  { nameEn: "Saleha-Mobarak Trading", nameBn: "সালেহা-মোবারক ট্রেডিং", fieldEn: "Import & Commercial Distribution", fieldBn: "আমদানি ও বাণিজ্যিক ডিস্ট্রিবিউশন" },
  { nameEn: "MES Construction", nameBn: "এমইএস কনস্ট্রাকশন", fieldEn: "Civil Engineering & Site Execution", fieldBn: "সিভিল ইঞ্জিনিয়ারিং ও সাইট বাস্তবায়ন" },
  { nameEn: "MES Traders", nameBn: "এমইএস ট্রেডার্স", fieldEn: "Stone Aggregates & Sand Logistics", fieldBn: "পাথর ও বালু লজিস্টিকস" },
  { nameEn: "Kuhnil Togun Co. Ltd.", nameBn: "কুহনিল তোগুন কোং লিঃ", fieldEn: "International Heavy Engineering Joint Venture", fieldBn: "আন্তর্জাতিক যৌথ ইঞ্জিনিয়ারিং উদ্যোগ" },
];

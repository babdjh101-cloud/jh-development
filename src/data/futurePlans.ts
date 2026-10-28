/**
 * Proposed Future Ambitions & Strategic Concepts
 * Sourced directly from corporate briefing dated 28 October 2026.
 * 
 * IMPORTANT: These are company-proposed strategic planning concepts.
 * They are explicitly marked as "Proposed Future Plans — Subject to Feasibility,
 * Land Acquisition, Regulatory Approvals, Financing, and Final Corporate Confirmation".
 */

export interface FuturePlanConcept {
  id: string;
  titleEn: string;
  titleBn: string;
  scopeStatedEn: string;
  scopeStatedBn: string;
  statedVolume: string;
  categoryEn: string;
  categoryBn: string;
  planningDescriptionEn: string;
  planningDescriptionBn: string;
  disclaimerEn: string;
  disclaimerBn: string;
}

export const FUTURE_PLANS_DATA: FuturePlanConcept[] = [
  {
    id: "upazila-towers",
    titleEn: "Nationwide Upazila Commercial & Community Towers",
    titleBn: "সারাদেশের উপজেলা পর্যায়ে বাণিজ্যিক ও কমিউনিটি টাওয়ার",
    scopeStatedEn: "Proposed G+8 Tower Buildings (approx. 12,000 sq. ft. concept per tower)",
    scopeStatedBn: "প্রস্তাবিত জি+৮ তলা বিশিষ্ট টাওয়ার ভবন (প্রতি টাওয়ারে আনুমানিক ১২,০০০ বর্গফুট)",
    statedVolume: "503 Sets (Targeting All Upazilas)",
    categoryEn: "National Urban Decentralization",
    categoryBn: "উপজেলা অবকাঠামো উন্নয়ন",
    planningDescriptionEn: "A visionary decentralized property concept aimed at providing modern commercial, healthcare, and retail spaces across every upazila administrative town in Bangladesh.",
    planningDescriptionBn: "বাংলাদেশের প্রতিটি উপজেলা শহরে আধুনিক বাণিজ্যিক, স্বাস্থ্যসেবা ও আইটি স্পেস পৌঁছে দেওয়ার লক্ষ্যে পরিকল্পিত বিকেন্দ্রীকৃত আবাসন উদ্যোগ।",
    disclaimerEn: "Proposed planning concept. Stated dimensions and totals are strategic projections subject to local land acquisition, municipal approvals, and commercial viability.",
    disclaimerBn: "প্রস্তাবিত ভবিষ্যৎ পরিকল্পনা; জমি অধিগ্রহণ, পৌরসভা অনুমোদন ও অর্থায়ন সাপেক্ষে বাস্তবায়নযোগ্য।",
  },
  {
    id: "district-green-cities",
    titleEn: "District Green City Initiatives",
    titleBn: "৬৪ জেলা শহরে পরিকল্পিত গ্রিন সিটি উদ্যোগ",
    scopeStatedEn: "Sustainable Integrated Residential & Eco-Townships across 64 Districts",
    scopeStatedBn: "৬৪টি জেলায় পরিকল্পিত টেকসই পরিবেশবান্ধব আবাসিক উপশহর",
    statedVolume: "64 Districts of Bangladesh",
    categoryEn: "Sustainable Eco-City Planning",
    categoryBn: "পরিবেশবান্ধব নগর পরিকল্পনা",
    planningDescriptionEn: "Concept proposing planned suburban green communities in all 64 districts with modern drainage, solar integration, waste recycling, and open park spaces.",
    planningDescriptionBn: "পরিকল্পিত পয়ঃনিষ্কাশন, সৌর বিদ্যুৎ ও সবুজ বিনোদন পার্ক সম্বলিত আধুনিক আবাসিক উপশহর প্রতিষ্ঠার মহাপরিকল্পনা।",
    disclaimerEn: "Aspirational company planning concept. Individual district projects will be initiated upon government clearance and joint-venture consortium formation.",
    disclaimerBn: "প্রাতিষ্ঠানিক লক্ষ্যমাত্রা; সরকারি ছাড়পত্র ও কনসোর্টিয়াম চুক্তি সাপেক্ষে প্রতিটি প্রকল্পের সম্ভাব্যতা যাচাই করা হবে।",
  },
  {
    id: "divisional-green-cities",
    titleEn: "Divisional Mega Green City Complexes",
    titleBn: "৮টি বিভাগীয় শহরে মেগা গ্রিন সিটি কমপ্লেক্স",
    scopeStatedEn: "High-density sustainable urban centers in Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur & Mymensingh",
    scopeStatedBn: "ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, বরিশাল, সিলেট, রংপুর ও ময়মনসিংহ বিভাগে উচ্চমানের মেগা গ্রিন সিটি",
    statedVolume: "8 Divisional Metropolitan Centers",
    categoryEn: "Metropolitan Urban Development",
    categoryBn: "বিভাগীয় মহানগর উন্নয়ন",
    planningDescriptionEn: "High-standard urban residential and commercial clusters engineered to ease metropolitan pressure and promote sustainable green building methodologies.",
    planningDescriptionBn: "বিভাগীয় শহরে ট্রাফিক চাপ হ্রাস ও আধুনিক নাগরিক সুবিধা নিশ্চিত করতে সমন্বিত আবাসন ও বাণিজ্যিক কমপ্লেক্স।",
    disclaimerEn: "Subject to environmental clearance, master-plan zoning compliance, and structured project financing.",
    disclaimerBn: "পরিবেশগত ছাড়পত্র, মাস্টারপ্ল্যান জোনিং এবং প্রকল্প অর্থায়ন সাপেক্ষে প্রযোজ্য।",
  },
  {
    id: "international-green-cities",
    titleEn: "International Multi Mega-Green Cities (Global Ambition)",
    titleBn: "আন্তর্জাতিক মাল্টি মেগা-গ্রিন সিটি উদ্যোগ (বিশ্ব পরিমণ্ডল)",
    scopeStatedEn: "Proposed sustainable international real estate developments across Asia & European Union",
    scopeStatedBn: "এশিয়া ও ইউরোপীয় ইউনিয়নের পরিবেশবান্ধব দেশসমূহে আন্তর্জাতিক যৌথ উন্নয়ন পরিকল্পনা",
    statedVolume: "12 Targeted International Projects",
    categoryEn: "Global Real Estate Ambitions",
    categoryBn: "আন্তর্জাতিক আবাসন উদ্যোগ",
    planningDescriptionEn: "International partnership framework aimed at participating in sustainable real estate tenders and joint developments alongside accredited global partners.",
    planningDescriptionBn: "আন্তর্জাতিক যৌথ অংশীদারিত্বে পরিবেশবান্ধব আবাসন ও প্রযুক্তি সমন্বয় উদ্যোগ।",
    disclaimerEn: "Long-term international ambition. No active foreign land rights or certifications are claimed; partnerships require formal bilateral authorization.",
    disclaimerBn: "দীর্ঘমেয়াদী আন্তর্জাতিক আকাঙ্ক্ষা; সংশ্লিষ্ট দেশের আইনি প্রক্রিয়া ও দ্বিপাক্ষিক চুক্তি সাপেক্ষে প্রস্তাবিত।",
  },
  {
    id: "greater-dhaka-mega-green-city",
    titleEn: "Flagship Greater Dhaka Multi Mega-Green City",
    titleBn: "বৃহত্তর ঢাকা মাল্টি মেগা-গ্রিন সিটি (ফ্ল্যাগশিপ প্রকল্প)",
    scopeStatedEn: "Integrated master-planned sustainable township adjacent to Dhaka Metropolitan corridor",
    scopeStatedBn: "ঢাকা মহানগর সংলগ্ন আধুনিক মাস্টারপ্ল্যানড পরিবেশবান্ধব মেগা টাউনশিপ",
    statedVolume: "01 Flagship Mega Township",
    categoryEn: "Flagship Metropolitan Township",
    categoryBn: "ফ্ল্যাগশিপ নগর প্রকল্প",
    planningDescriptionEn: "Proposed model township combining residential, healthcare, commercial malls, educational institutions, and renewable energy infrastructure.",
    planningDescriptionBn: "আবাসিক ফ্ল্যাট, আধুনিক হাসপাতাল, শপিং মল ও শিক্ষা প্রতিষ্ঠান সম্বলিত স্বয়ংসম্পূর্ণ স্মার্ট উপশহর পরিকল্পনা।",
    disclaimerEn: "Pre-feasibility planning concept. Requires land parcel consolidation, RAJUK/government approvals, and investor consortium structure.",
    disclaimerBn: "প্রাথমিক সম্ভাব্যতা যাচাই পরিকল্পনা; রাজউক ও সংশ্লিষ্ট কর্তৃপক্ষের অনুমোদন সাপেক্ষে।",
  },
];

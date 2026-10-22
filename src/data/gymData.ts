export interface PricingTier {
  period: '1 Month' | '3 Months' | '6 Months' | '1 Year';
  price: string;
  popular?: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  category: 'Gym & Fitness' | 'Combat Sports' | 'Hybrid All-Access';
  description: string;
  features: string[];
  pricing: Record<string, string>; // '1m' | '3m' | '6m' | '1y'
  recommendedFor: string;
  badge?: string;
}

export const GYM_CONTACT = {
  name: "RFC BOXING ACADEMY",
  fullTitle: "RFC FITNESS MMA & BOXING ACADEMY",
  tagline: "Build Your Strength. Transform Your Life.",
  phone: "9746382006",
  phoneFormatted: "+91 97463 82006",
  whatsappNumber: "919746382006",
  email: "nisarthangalrfc@gmail.com",
  instagramUrl: "https://www.instagram.com/nisar_thangal_rfc?utm_source=qr&cplk=MXR6d3U5MGZweXV4Ng==",
  instagramHandle: "@nisar_thangal_rfc",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.3667015487113!2d76.085098!3d11.044196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64b5c7b0292af%3A0xced6718d49913f11!2sRFC%20FITNESS%20MMA%20BOXING%20ACADEMY!5e1!3m2!1sen!2sin!4v1792662179815!5m2!1sen!2sin",
  addressText: "RFC Fitness MMA Boxing Academy, Kerala, India",
};

export const GYM_SCHEDULE = [
  { day: "Monday", morning: "6:00 AM – 11:00 AM", evening: "5:00 PM – 9:00 PM", status: "open" },
  { day: "Tuesday", morning: "6:00 AM – 11:00 AM", evening: "5:00 PM – 9:00 PM", status: "open" },
  { day: "Wednesday", morning: "6:00 AM – 11:00 AM", evening: "5:00 PM – 9:00 PM", status: "open" },
  { day: "Thursday", morning: "6:00 AM – 11:00 AM", evening: "5:00 PM – 9:00 PM", status: "open" },
  { day: "Friday", morning: "6:00 AM – 11:00 AM", evening: "5:00 PM – 9:00 PM", status: "open" },
  { day: "Saturday", morning: "6:00 AM – 11:00 AM", evening: "5:00 PM – 9:00 PM", status: "open" },
  { day: "Sunday", morning: "Closed", evening: "Closed", status: "closed" },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "gym-general",
    name: "General Gym Fitness",
    category: "Gym & Fitness",
    description: "Full access to our state-of-the-art iron, cardio deck, free weights, and dedicated conditioning gear.",
    features: [
      "Full access to gym equipment & weights",
      "Cardiovascular training equipment",
      "Locker room & hydration facilities",
      "General fitness floor coach assistance",
      "Free initial body composition review"
    ],
    pricing: {
      "1m": "1,000",
      "3m": "2,500",
      "6m": "4,000",
      "1y": "7,000"
    },
    recommendedFor: "General weight training, fat loss & bodybuilding"
  },
  {
    id: "boxing",
    name: "Pure Boxing Academy",
    category: "Combat Sports",
    description: "Authentic boxing technique, footwork, speed bag, heavy bag drills, pad work, and defense fundamentals.",
    features: [
      "Stance, footwork & punch biomechanics",
      "Heavy bag and slip bag conditioning",
      "Focus mitts & coach pad sessions",
      "Controlled sparring for experienced trainees",
      "Access to boxing ring & speed gear"
    ],
    pricing: {
      "1m": "1,500",
      "3m": "3,500",
      "6m": "6,000",
      "1y": "10,000"
    },
    recommendedFor: "Boxing enthusiasts, speed, agility & self-defense"
  },
  {
    id: "mma",
    name: "Mixed Martial Arts (MMA)",
    category: "Combat Sports",
    description: "Comprehensive mixed martial arts coaching including wrestling, grappling, striking, and cage control.",
    features: [
      "Striking + Takedown transitions",
      "Ground and pound & grappling defense",
      "Cage work & combat mat agility drills",
      "Combat endurance & fight conditioning",
      "Safety gear protocols & certified sparring"
    ],
    pricing: {
      "1m": "2,000",
      "3m": "5,000",
      "6m": "8,000",
      "1y": "12,000"
    },
    recommendedFor: "Aspiring fighters & serious martial artists"
  },
  {
    id: "fitness-boxing",
    name: "Fitness / Boxing Combo",
    category: "Hybrid All-Access",
    description: "Dual powerhouse combining gym strength equipment with boxing technique and combat cardio.",
    features: [
      "Full Gym strength & cardio floor access",
      "Full Boxing training & heavy bag access",
      "Functional fight-conditioned fat burning",
      "Core, agility, and stamina circuits",
      "Dedicated trainer guidance"
    ],
    pricing: {
      "1m": "2,000",
      "3m": "4,800",
      "6m": "8,500",
      "1y": "15,000"
    },
    recommendedFor: "Total body transformation & boxing skills"
  },
  {
    id: "fitness-mma",
    name: "Ultimate Fitness & MMA",
    category: "Hybrid All-Access",
    badge: "Most Comprehensive",
    description: "Our complete championship program: complete gym access plus all MMA and combat arts sessions.",
    features: [
      "Unlimited Gym, Free Weights & Machines",
      "Complete MMA, Striking & Grappling coaching",
      "Boxing Ring & Cage Mat Area access",
      "Personalized athlete conditioning plans",
      "Priority trainer attention & sparring clinic"
    ],
    pricing: {
      "1m": "3,000",
      "3m": "8,000",
      "6m": "14,000",
      "1y": "20,000"
    },
    recommendedFor: "Peak physical fitness, self defense & warrior discipline"
  }
];

export const ACADEMY_HIGHLIGHTS = [
  {
    title: "Championship Equipment",
    description: "Full-scale boxing ring, competition-standard heavy bag line, and premium strength training machinery."
  },
  {
    title: "Expert Combat Mentorship",
    description: "Guided by certified fight trainers experienced in classical boxing, Muay Thai striking, and ground MMA."
  },
  {
    title: "Inclusive & Motivating Culture",
    description: "From complete beginners taking their first punch to seasoned athletes, every member trains with respect and mutual drive."
  },
  {
    title: "Flexible Dual Daily Shifts",
    description: "Train during morning shifts (6:00 AM – 11:00 AM) or evening shifts (5:00 PM – 9:00 PM) to match your work schedule."
  }
];

export interface PersonalTrainingPlan {
  id: string;
  name: string;
  discipline: 'Gym' | 'Boxing' | 'MMA';
  duration: string;
  price: string;
  priceNumeric: number;
  highlight: string;
  features: string[];
  recommendedFor: string;
}

export const PERSONAL_TRAINING_PLANS: PersonalTrainingPlan[] = [
  {
    id: "pt-gym-1m",
    name: "1-Month Gym Personal Training",
    discipline: "Gym",
    duration: "1 Month",
    price: "10,000",
    priceNumeric: 10000,
    highlight: "1-on-1 Body Transformation & Strength",
    features: [
      "Dedicated 1-on-1 certified trainer throughout sessions",
      "Personalized hypertrophy, strength & fat-loss protocol",
      "Strict form critique & injury prevention technique",
      "Custom nutritional guidance & weekly metrics review",
      "Full gym floor & strength machinery access included"
    ],
    recommendedFor: "Rapid body recomposition, muscle building & personalized accountability"
  },
  {
    id: "pt-boxing-1m",
    name: "1-Month Boxing Personal Training",
    discipline: "Boxing",
    duration: "1 Month",
    price: "20,000",
    priceNumeric: 20000,
    highlight: "1-on-1 Professional Boxing & Pad Work",
    features: [
      "Private 1-on-1 coach mitt & heavy pad sessions",
      "Professional boxer footwork, slipping & counter striking",
      "Fight stamina, core rotation & power punching conditioning",
      "Video technique breakdown & punch mechanics refinement",
      "Full boxing ring & speed gear access included"
    ],
    recommendedFor: "Serious boxing craft, sharp striking technique & intense combat conditioning"
  },
  {
    id: "pt-mma-1m",
    name: "1-Month MMA Personal Training",
    discipline: "MMA",
    duration: "1 Month",
    price: "25,000",
    priceNumeric: 25000,
    highlight: "1-on-1 Elite Mixed Martial Arts Coaching",
    features: [
      "Private cage & mat sessions with senior MMA coach",
      "Striking, wrestling takedowns & ground submissions",
      "Cage control, ground-and-pound defense & clinch tactics",
      "Custom fighter conditioning & mobility protocols",
      "VIP All-Access to Gym, Boxing Ring & MMA Cage Area"
    ],
    recommendedFor: "Aspiring fighters, combat athletes & total multi-discipline martial arts mastery"
  }
];


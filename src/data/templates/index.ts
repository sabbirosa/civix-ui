export interface Template {
  id: string;
  title: string;
  titlebn: string;
  description: string;
  descriptionbn: string;
  category: string;
  categorybn: string;
  image: string;
  features: string[];
  tags: string[];
  complexity: 'Low' | 'Medium' | 'High';
  estimatedTime: string;
  downloads: number;
  rating: number;
  lastUpdated: string;
  demoUrl?: string;
  sourceFiles: {
    html: string;
    css: string;
    js?: string;
    react?: string;
  };
  screenshots: string[];
  requirements: string[];
  installation: string[];
  ministry?: string;
  department?: string;
}

export const templates: Template[] = [
  {
    id: "gov-homepage",
    title: "Government Homepage",
    titlebn: "সরকারি হোমপেজ",
    description: "Complete government ministry or department homepage with hero section, services, news, and contact information.",
    descriptionbn: "হিরো সেকশন, সেবা, সংবাদ এবং যোগাযোগের তথ্য সহ সম্পূর্ণ সরকারি মন্ত্রণালয় বা বিভাগের হোমপেজ।",
    category: "Landing Pages",
    categorybn: "ল্যান্ডিং পেজ",
    image: "/api/placeholder/600/400",
    features: [
      "Responsive design for all devices",
      "Dual language support (EN/BN)",
      "Accessibility compliant (WCAG 2.1)",
      "SEO optimized with meta tags",
      "Government branding guidelines",
      "News & announcements section",
      "Service directory integration",
      "Contact information display",
      "Social media integration",
      "Print-friendly layouts"
    ],
    tags: ["Homepage", "Ministry", "Government", "Responsive", "Landing"],
    complexity: "Medium",
    estimatedTime: "4-6 hours",
    downloads: 2840,
    rating: 4.8,
    lastUpdated: "2024-01-15",
    demoUrl: "/templates/gov-homepage/demo",
    sourceFiles: {
      html: "/templates/gov-homepage/index.html",
      css: "/templates/gov-homepage/styles.css",
      js: "/templates/gov-homepage/script.js",
      react: "/templates/gov-homepage/Homepage.tsx"
    },
    screenshots: [
      "/templates/gov-homepage/screenshots/desktop.png",
      "/templates/gov-homepage/screenshots/mobile.png"
    ],
    requirements: ["HTML5", "CSS3", "JavaScript ES6+", "React 18+"],
    installation: [
      "Download the template files",
      "Replace placeholder content with your ministry information",
      "Update colors and branding in CSS variables",
      "Configure news feed API endpoint",
      "Test responsiveness across devices"
    ],
    ministry: "All Ministries",
    department: "Public Information"
  },
  {
    id: "citizen-registration",
    title: "Citizen Registration Form",
    titlebn: "নাগরিক নিবন্ধন ফর্ম",
    description: "Multi-step registration form for citizen services with validation, document upload, and confirmation.",
    descriptionbn: "ভ্যালিডেশন, ডকুমেন্ট আপলোড এবং কনফার্মেশন সহ নাগরিক সেবার জন্য মাল্টি-স্টেপ রেজিস্ট্রেশন ফর্ম।",
    category: "Forms",
    categorybn: "ফর্ম",
    image: "/api/placeholder/600/400",
    features: [
      "Multi-step form wizard with progress indicator",
      "File upload with preview and validation",
      "Real-time field validation",
      "Auto-save functionality",
      "Mobile optimized interface",
      "NID verification integration",
      "Digital signature support",
      "SMS OTP verification",
      "PDF generation for applications",
      "Accessibility compliant forms"
    ],
    tags: ["Form", "Registration", "Multi-step", "Validation", "Upload"],
    complexity: "High",
    estimatedTime: "8-12 hours",
    downloads: 1890,
    rating: 4.9,
    lastUpdated: "2024-01-20",
    sourceFiles: {
      html: "/templates/citizen-registration/index.html",
      css: "/templates/citizen-registration/styles.css",
      js: "/templates/citizen-registration/script.js",
      react: "/templates/citizen-registration/RegistrationForm.tsx"
    },
    screenshots: [
      "/templates/citizen-registration/screenshots/step1.png",
      "/templates/citizen-registration/screenshots/step2.png",
      "/templates/citizen-registration/screenshots/confirmation.png"
    ],
    requirements: ["HTML5", "CSS3", "JavaScript ES6+", "File API", "React 18+"],
    installation: [
      "Set up file upload backend service",
      "Configure validation rules",
      "Integrate with NID verification API",
      "Set up SMS gateway for OTP",
      "Configure PDF generation service"
    ],
    ministry: "Cabinet Division",
    department: "Access to Information"
  },
  {
    id: "service-application",
    title: "Service Application Portal",
    titlebn: "সেবা আবেদন পোর্টাল",
    description: "Complete portal for citizens to apply for government services, track applications, and receive updates.",
    descriptionbn: "নাগরিকদের সরকারি সেবার জন্য আবেদন, ট্র্যাক এবং আপডেট পাওয়ার জন্য সম্পূর্ণ পোর্টাল।",
    category: "Portals",
    categorybn: "পোর্টাল",
    image: "/api/placeholder/600/400",
    features: [
      "Comprehensive service catalog",
      "Real-time application tracking",
      "Document management system",
      "Payment gateway integration",
      "SMS/Email notification system",
      "User dashboard with analytics",
      "Multi-language support",
      "Admin panel for officers",
      "Reporting and analytics",
      "API integration capabilities"
    ],
    tags: ["Portal", "Services", "Dashboard", "Tracking", "Payment"],
    complexity: "High",
    estimatedTime: "12-16 hours",
    downloads: 1250,
    rating: 4.7,
    lastUpdated: "2024-01-18",
    sourceFiles: {
      html: "/templates/service-application/index.html",
      css: "/templates/service-application/styles.css",
      js: "/templates/service-application/script.js",
      react: "/templates/service-application/Portal.tsx"
    },
    screenshots: [
      "/templates/service-application/screenshots/dashboard.png",
      "/templates/service-application/screenshots/services.png",
      "/templates/service-application/screenshots/tracking.png"
    ],
    requirements: ["React 18+", "Node.js", "Database", "Payment Gateway API"],
    installation: [
      "Set up database schema",
      "Configure payment gateway",
      "Set up notification services",
      "Configure user authentication",
      "Deploy admin panel"
    ],
    ministry: "All Ministries",
    department: "Digital Services"
  },
  {
    id: "digital-bangladesh-portal",
    title: "Digital Bangladesh Portal",
    titlebn: "ডিজিটাল বাংলাদেশ পোর্টাল",
    description: "Main government portal showcasing Digital Bangladesh initiatives, e-services, and citizen engagement features.",
    descriptionbn: "ডিজিটাল বাংলাদেশ উদ্যোগ, ই-সেবা এবং নাগরিক সম্পৃক্ততার বৈশিষ্ট্য প্রদর্শনকারী প্রধান সরকারি পোর্টাল।",
    category: "Portals",
    categorybn: "পোর্টাল",
    image: "/api/placeholder/600/400",
    features: [
      "Interactive service map of Bangladesh",
      "Real-time government statistics",
      "Citizen feedback system",
      "Digital literacy resources",
      "E-governance success stories",
      "Mobile app download center",
      "Live chat support",
      "Multilingual content management",
      "Social media integration",
      "Accessibility features"
    ],
    tags: ["Portal", "Digital Bangladesh", "E-governance", "Statistics"],
    complexity: "High",
    estimatedTime: "16-20 hours",
    downloads: 980,
    rating: 4.9,
    lastUpdated: "2024-01-25",
    sourceFiles: {
      html: "/templates/digital-bangladesh-portal/index.html",
      css: "/templates/digital-bangladesh-portal/styles.css",
      js: "/templates/digital-bangladesh-portal/script.js",
      react: "/templates/digital-bangladesh-portal/Portal.tsx"
    },
    screenshots: [
      "/templates/digital-bangladesh-portal/screenshots/home.png",
      "/templates/digital-bangladesh-portal/screenshots/services.png",
      "/templates/digital-bangladesh-portal/screenshots/statistics.png"
    ],
    requirements: ["React 18+", "Chart.js", "Map API", "CMS Integration"],
    installation: [
      "Configure map API keys",
      "Set up statistics data sources",
      "Configure CMS for content management",
      "Set up feedback collection system",
      "Configure social media APIs"
    ],
    ministry: "ICT Division",
    department: "Digital Bangladesh"
  },
  {
    id: "tax-collection-system",
    title: "Tax Collection System",
    titlebn: "কর সংগ্রহ সিস্টেম",
    description: "Online tax filing and collection system with calculation tools, payment processing, and certificate generation.",
    descriptionbn: "গণনা সরঞ্জাম, পেমেন্ট প্রক্রিয়াকরণ এবং সার্টিফিকেট জেনারেশন সহ অনলাইন কর ফাইলিং এবং সংগ্রহ সিস্টেম।",
    category: "E-commerce",
    categorybn: "ই-কমার্স",
    image: "/api/placeholder/600/400",
    features: [
      "Automated tax calculation",
      "Multiple payment gateways",
      "Digital receipt generation",
      "Tax history and reports",
      "Refund management system",
      "Audit trail and compliance",
      "Mobile responsive design",
      "Real-time payment status",
      "Integration with banking systems",
      "Taxpayer registration portal"
    ],
    tags: ["Tax", "Payment", "E-commerce", "Finance", "Government"],
    complexity: "High",
    estimatedTime: "14-18 hours",
    downloads: 720,
    rating: 4.6,
    lastUpdated: "2024-01-12",
    sourceFiles: {
      html: "/templates/tax-collection-system/index.html",
      css: "/templates/tax-collection-system/styles.css",
      js: "/templates/tax-collection-system/script.js",
      react: "/templates/tax-collection-system/TaxSystem.tsx"
    },
    screenshots: [
      "/templates/tax-collection-system/screenshots/calculator.png",
      "/templates/tax-collection-system/screenshots/payment.png",
      "/templates/tax-collection-system/screenshots/receipt.png"
    ],
    requirements: ["React 18+", "Payment Gateway API", "Database", "PDF Generation"],
    installation: [
      "Configure payment gateway credentials",
      "Set up tax calculation rules",
      "Configure database schema",
      "Set up PDF generation service",
      "Configure banking API integration"
    ],
    ministry: "Ministry of Finance",
    department: "National Board of Revenue"
  },
  {
    id: "health-appointment-system",
    title: "Health Appointment System",
    titlebn: "স্বাস্থ্য অ্যাপয়েন্টমেন্ট সিস্টেম",
    description: "Online appointment booking for government hospitals and health centers with doctor schedules and patient management.",
    descriptionbn: "ডাক্তারের সময়সূচী এবং রোগী ব্যবস্থাপনা সহ সরকারি হাসপাতাল এবং স্বাস্থ্য কেন্দ্রের জন্য অনলাইন অ্যাপয়েন্টমেন্ট বুকিং।",
    category: "Scheduling",
    categorybn: "সময়সূচী",
    image: "/api/placeholder/600/400",
    features: [
      "Doctor availability calendar",
      "Patient registration system",
      "Appointment reminders via SMS",
      "Medical history integration",
      "Prescription management",
      "Queue management system",
      "Emergency slot booking",
      "Health card integration",
      "Telemedicine support",
      "Multi-hospital network"
    ],
    tags: ["Health", "Appointment", "Hospital", "Doctor", "Patient"],
    complexity: "High",
    estimatedTime: "10-14 hours",
    downloads: 1180,
    rating: 4.8,
    lastUpdated: "2024-01-22",
    sourceFiles: {
      html: "/templates/health-appointment-system/index.html",
      css: "/templates/health-appointment-system/styles.css",
      js: "/templates/health-appointment-system/script.js",
      react: "/templates/health-appointment-system/HealthSystem.tsx"
    },
    screenshots: [
      "/templates/health-appointment-system/screenshots/booking.png",
      "/templates/health-appointment-system/screenshots/calendar.png",
      "/templates/health-appointment-system/screenshots/patient-dashboard.png"
    ],
    requirements: ["React 18+", "Calendar API", "SMS Gateway", "Database"],
    installation: [
      "Configure hospital database",
      "Set up doctor schedule management",
      "Configure SMS notification service",
      "Set up patient registration API",
      "Configure health card integration"
    ],
    ministry: "Ministry of Health and Family Welfare",
    department: "Directorate General of Health Services"
  },
  {
    id: "education-management-portal",
    title: "Education Management Portal",
    titlebn: "শিক্ষা ব্যবস্থাপনা পোর্টাল",
    description: "Comprehensive education portal for student enrollment, academic records, and institutional management.",
    descriptionbn: "ছাত্র নিবন্ধন, একাডেমিক রেকর্ড এবং প্রাতিষ্ঠানিক ব্যবস্থাপনার জন্য ব্যাপক শিক্ষা পোর্টাল।",
    category: "Portals",
    categorybn: "পোর্টাল",
    image: "/api/placeholder/600/400",
    features: [
      "Student enrollment system",
      "Academic record management",
      "Teacher portal and dashboard",
      "Examination management",
      "Certificate generation",
      "Parent communication system",
      "Library management integration",
      "Fee payment gateway",
      "Scholarship application system",
      "Performance analytics"
    ],
    tags: ["Education", "Student", "School", "Management", "Portal"],
    complexity: "High",
    estimatedTime: "16-20 hours",
    downloads: 890,
    rating: 4.7,
    lastUpdated: "2024-01-20",
    sourceFiles: {
      html: "/templates/education-management-portal/index.html",
      css: "/templates/education-management-portal/styles.css",
      js: "/templates/education-management-portal/script.js",
      react: "/templates/education-management-portal/EducationPortal.tsx"
    },
    screenshots: [
      "/templates/education-management-portal/screenshots/dashboard.png",
      "/templates/education-management-portal/screenshots/enrollment.png",
      "/templates/education-management-portal/screenshots/records.png"
    ],
    requirements: ["React 18+", "Database", "PDF Generation", "Payment Gateway"],
    installation: [
      "Set up student database schema",
      "Configure academic year settings",
      "Set up payment gateway for fees",
      "Configure certificate templates",
      "Set up notification systems"
    ],
    ministry: "Ministry of Education",
    department: "Directorate of Primary Education"
  },
  {
    id: "land-registration-system",
    title: "Land Registration System",
    titlebn: "ভূমি নিবন্ধন সিস্টেম",
    description: "Digital land registration and record management system with mutation tracking and ownership verification.",
    descriptionbn: "মিউটেশন ট্র্যাকিং এবং মালিকানা যাচাইকরণ সহ ডিজিটাল ভূমি নিবন্ধন এবং রেকর্ড ব্যবস্থাপনা সিস্টেম।",
    category: "Government Services",
    categorybn: "সরকারি সেবা",
    image: "/api/placeholder/600/400",
    features: [
      "Digital land record management",
      "Mutation application processing",
      "Ownership verification system",
      "Survey map integration",
      "Fee calculation and payment",
      "Document upload and verification",
      "Legal compliance checking",
      "Court case integration",
      "Mobile-friendly interface",
      "Blockchain-based security"
    ],
    tags: ["Land", "Registration", "Property", "Government", "Blockchain"],
    complexity: "High",
    estimatedTime: "18-24 hours",
    downloads: 650,
    rating: 4.9,
    lastUpdated: "2024-01-28",
    sourceFiles: {
      html: "/templates/land-registration-system/index.html",
      css: "/templates/land-registration-system/styles.css",
      js: "/templates/land-registration-system/script.js",
      react: "/templates/land-registration-system/LandSystem.tsx"
    },
    screenshots: [
      "/templates/land-registration-system/screenshots/search.png",
      "/templates/land-registration-system/screenshots/records.png",
      "/templates/land-registration-system/screenshots/mutation.png"
    ],
    requirements: ["React 18+", "GIS Integration", "Blockchain", "Database"],
    installation: [
      "Set up GIS map integration",
      "Configure blockchain network",
      "Set up land record database",
      "Configure document verification system",
      "Set up payment processing"
    ],
    ministry: "Ministry of Land",
    department: "Department of Land Records and Surveys"
  },
  {
    id: "passport-application-portal",
    title: "Passport Application Portal",
    titlebn: "পাসপোর্ট আবেদন পোর্টাল",
    description: "Online passport application system with appointment booking, document verification, and status tracking.",
    descriptionbn: "অ্যাপয়েন্টমেন্ট বুকিং, ডকুমেন্ট যাচাইকরণ এবং স্ট্যাটাস ট্র্যাকিং সহ অনলাইন পাসপোর্ট আবেদন সিস্টেম।",
    category: "Government Services",
    categorybn: "সরকারি সেবা",
    image: "/api/placeholder/600/400",
    features: [
      "Online application form",
      "Document upload and verification",
      "Biometric appointment booking",
      "Fee payment integration",
      "Application status tracking",
      "SMS/Email notifications",
      "Passport delivery tracking",
      "Emergency passport service",
      "Renewal application system",
      "Mobile app integration"
    ],
    tags: ["Passport", "Immigration", "Application", "Tracking", "Government"],
    complexity: "High",
    estimatedTime: "12-16 hours",
    downloads: 1340,
    rating: 4.8,
    lastUpdated: "2024-01-26",
    sourceFiles: {
      html: "/templates/passport-application-portal/index.html",
      css: "/templates/passport-application-portal/styles.css",
      js: "/templates/passport-application-portal/script.js",
      react: "/templates/passport-application-portal/PassportPortal.tsx"
    },
    screenshots: [
      "/templates/passport-application-portal/screenshots/application.png",
      "/templates/passport-application-portal/screenshots/appointment.png",
      "/templates/passport-application-portal/screenshots/tracking.png"
    ],
    requirements: ["React 18+", "Payment Gateway", "SMS API", "Document Scanner"],
    installation: [
      "Configure payment gateway",
      "Set up document verification API",
      "Configure appointment booking system",
      "Set up SMS/Email services",
      "Configure biometric integration"
    ],
    ministry: "Ministry of Foreign Affairs",
    department: "Department of Immigration and Passports"
  }
];

export const categories = [
  { name: "All", namebn: "সব", count: templates.length },
  { name: "Landing Pages", namebn: "ল্যান্ডিং পেজ", count: templates.filter(t => t.category === "Landing Pages").length },
  { name: "Forms", namebn: "ফর্ম", count: templates.filter(t => t.category === "Forms").length },
  { name: "Portals", namebn: "পোর্টাল", count: templates.filter(t => t.category === "Portals").length },
  { name: "E-commerce", namebn: "ই-কমার্স", count: templates.filter(t => t.category === "E-commerce").length },
  { name: "Government Services", namebn: "সরকারি সেবা", count: templates.filter(t => t.category === "Government Services").length },
  { name: "Scheduling", namebn: "সময়সূচী", count: templates.filter(t => t.category === "Scheduling").length }
];

export const complexityColors = {
  "Low": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
  "Medium": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
  "High": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
} as const; 
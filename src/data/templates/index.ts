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
  complexity: "Low" | "Medium" | "High";
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
    id: "citizen-registration",
    title: "Citizen Registration Form",
    titlebn: "নাগরিক নিবন্ধন ফর্ম",
    description:
      "Multi-step registration form for citizen services with validation, document upload, and confirmation.",
    descriptionbn:
      "ভ্যালিডেশন, ডকুমেন্ট আপলোড এবং কনফার্মেশন সহ নাগরিক সেবার জন্য মাল্টি-স্টেপ রেজিস্ট্রেশন ফর্ম।",
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
      "Accessibility compliant forms",
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
      react: "/templates/citizen-registration/RegistrationForm.tsx",
    },
    screenshots: [
      "/templates/citizen-registration/screenshots/step1.png",
      "/templates/citizen-registration/screenshots/step2.png",
      "/templates/citizen-registration/screenshots/confirmation.png",
    ],
    requirements: ["HTML5", "CSS3", "JavaScript ES6+", "File API", "React 18+"],
    installation: [
      "Set up file upload backend service",
      "Configure validation rules",
      "Integrate with NID verification API",
      "Set up SMS gateway for OTP",
      "Configure PDF generation service",
    ],
    ministry: "Cabinet Division",
    department: "Access to Information",
  },
  {
    id: "privacy-policy-template",
    title: "Privacy Policy Page",
    titlebn: "গোপনীয়তা নীতি পৃষ্ঠা",
    description:
      "Comprehensive privacy policy template for government websites with data protection, user rights, and compliance sections.",
    descriptionbn:
      "ডেটা সুরক্ষা, ব্যবহারকারীর অধিকার এবং সম্মতি বিভাগ সহ সরকারি ওয়েবসাইটের জন্য ব্যাপক গোপনীয়তা নীতি টেমপ্লেট।",
    category: "Legal Pages",
    categorybn: "আইনি পৃষ্ঠা",
    image: "/api/placeholder/600/400",
    features: [
      "GDPR and local privacy law compliance",
      "Clear data collection explanation",
      "User rights and data portability",
      "Security measures transparency",
      "Contact information for privacy queries",
      "Regular update notifications",
      "Multilingual content support",
      "Easy-to-understand language",
      "Structured content sections",
      "Print-friendly format",
    ],
    tags: ["Privacy", "Legal", "GDPR", "Data Protection", "Government"],
    complexity: "Medium",
    estimatedTime: "3-4 hours",
    downloads: 2100,
    rating: 4.7,
    lastUpdated: "2024-01-30",
    sourceFiles: {
      html: "/templates/privacy-policy-template/index.html",
      css: "/templates/privacy-policy-template/styles.css",
      js: "/templates/privacy-policy-template/script.js",
      react: "/templates/privacy-policy-template/PrivacyPolicy.tsx",
    },
    screenshots: [
      "/templates/privacy-policy-template/screenshots/full-page.png",
      "/templates/privacy-policy-template/screenshots/mobile.png",
    ],
    requirements: ["HTML5", "CSS3", "Responsive Design"],
    installation: [
      "Customize data collection sections",
      "Update contact information",
      "Review legal compliance requirements",
      "Add ministry-specific policies",
      "Test accessibility features",
    ],
    ministry: "All Ministries",
    department: "Legal Affairs",
  },
  {
    id: "terms-of-service-template",
    title: "Terms of Service Page",
    titlebn: "সেবার শর্তাবলী পৃষ্ঠা",
    description:
      "Complete terms of service template with user responsibilities, service limitations, and government liability disclaimers.",
    descriptionbn:
      "ব্যবহারকারীর দায়িত্ব, সেবার সীমাবদ্ধতা এবং সরকারি দায়বদ্ধতা অস্বীকৃতি সহ সম্পূর্ণ সেবার শর্তাবলী টেমপ্লেট।",
    category: "Legal Pages",
    categorybn: "আইনি পৃষ্ঠা",
    image: "/api/placeholder/600/400",
    features: [
      "Comprehensive user agreement sections",
      "Service limitation and liability clauses",
      "Payment terms and refund policies",
      "Prohibited activities guidelines",
      "Termination and modification terms",
      "Dispute resolution procedures",
      "Government-specific legal language",
      "Easy navigation with sections",
      "Regular update mechanisms",
      "Legal compliance verification",
    ],
    tags: ["Terms", "Legal", "Agreement", "Service", "Government"],
    complexity: "Medium",
    estimatedTime: "4-5 hours",
    downloads: 1850,
    rating: 4.6,
    lastUpdated: "2024-01-29",
    sourceFiles: {
      html: "/templates/terms-of-service-template/index.html",
      css: "/templates/terms-of-service-template/styles.css",
      js: "/templates/terms-of-service-template/script.js",
      react: "/templates/terms-of-service-template/TermsOfService.tsx",
    },
    screenshots: [
      "/templates/terms-of-service-template/screenshots/full-page.png",
      "/templates/terms-of-service-template/screenshots/sections.png",
    ],
    requirements: ["HTML5", "CSS3", "Legal Review"],
    installation: [
      "Review with legal department",
      "Customize service-specific terms",
      "Update payment and refund policies",
      "Add ministry contact information",
      "Verify compliance requirements",
    ],
    ministry: "All Ministries",
    department: "Legal Affairs",
  },
  {
    id: "faq-page-template",
    title: "FAQ Page Template",
    titlebn: "সচরাচর জিজ্ঞাসা পৃষ্ঠা টেমপ্লেট",
    description:
      "Interactive FAQ page with search functionality, categorized questions, and expandable answers for government services.",
    descriptionbn:
      "সরকারি সেবার জন্য অনুসন্ধান কার্যকারিতা, শ্রেণীবদ্ধ প্রশ্ন এবং সম্প্রসারণযোগ্য উত্তর সহ ইন্টারঅ্যাক্টিভ FAQ পৃষ্ঠা।",
    category: "Information Pages",
    categorybn: "তথ্য পৃষ্ঠা",
    image: "/api/placeholder/600/400",
    features: [
      "Smart search with auto-suggestions",
      "Categorized question organization",
      "Expandable/collapsible answers",
      "Popular questions highlighting",
      "Contact support integration",
      "Feedback rating for answers",
      "Print-friendly format",
      "Mobile-optimized accordion",
      "Multi-language support",
      "Analytics tracking for popular queries",
    ],
    tags: ["FAQ", "Help", "Support", "Questions", "Information"],
    complexity: "Medium",
    estimatedTime: "5-6 hours",
    downloads: 1650,
    rating: 4.8,
    lastUpdated: "2024-01-28",
    sourceFiles: {
      html: "/templates/faq-page-template/index.html",
      css: "/templates/faq-page-template/styles.css",
      js: "/templates/faq-page-template/script.js",
      react: "/templates/faq-page-template/FAQPage.tsx",
    },
    screenshots: [
      "/templates/faq-page-template/screenshots/main-page.png",
      "/templates/faq-page-template/screenshots/search.png",
      "/templates/faq-page-template/screenshots/mobile.png",
    ],
    requirements: ["HTML5", "CSS3", "JavaScript", "Search API"],
    installation: [
      "Populate questions and answers database",
      "Configure search functionality",
      "Set up feedback collection system",
      "Customize categories for your service",
      "Test mobile responsiveness",
    ],
    ministry: "All Ministries",
    department: "Public Information",
  },
  {
    id: "documentation-requirements-template",
    title: "Documentation Requirements Page",
    titlebn: "ডকুমেন্টেশন প্রয়োজনীয়তা পৃষ্ঠা",
    description:
      "Comprehensive documentation requirements page with checklists, file specifications, and download forms for government services.",
    descriptionbn:
      "সরকারি সেবার জন্য চেকলিস্ট, ফাইল স্পেসিফিকেশন এবং ডাউনলোড ফর্ম সহ ব্যাপক ডকুমেন্টেশন প্রয়োজনীয়তা পৃষ্ঠা।",
    category: "Information Pages",
    categorybn: "তথ্য পৃষ্ঠা",
    image: "/api/placeholder/600/400",
    features: [
      "Service-specific document lists",
      "Interactive checklists with progress",
      "File format and size specifications",
      "Photo and document guidelines",
      "Downloadable forms and templates",
      "Document sample previews",
      "Translation requirements info",
      "Verification process explanation",
      "Common mistakes prevention tips",
      "Contact support for help",
    ],
    tags: ["Documentation", "Requirements", "Forms", "Checklist", "Guidelines"],
    complexity: "Low",
    estimatedTime: "3-4 hours",
    downloads: 1420,
    rating: 4.5,
    lastUpdated: "2024-01-27",
    sourceFiles: {
      html: "/templates/documentation-requirements-template/index.html",
      css: "/templates/documentation-requirements-template/styles.css",
      js: "/templates/documentation-requirements-template/script.js",
      react:
        "/templates/documentation-requirements-template/DocumentationPage.tsx",
    },
    screenshots: [
      "/templates/documentation-requirements-template/screenshots/main-page.png",
      "/templates/documentation-requirements-template/screenshots/checklist.png",
      "/templates/documentation-requirements-template/screenshots/downloads.png",
    ],
    requirements: ["HTML5", "CSS3", "File Download API"],
    installation: [
      "Update document requirements list",
      "Upload form templates and samples",
      "Configure file download links",
      "Customize service-specific guidelines",
      "Test download functionality",
    ],
    ministry: "All Ministries",
    department: "Documentation Services",
  },
  {
    id: "fees-payment-template",
    title: "Fees & Payment Information Page",
    titlebn: "ফি এবং পেমেন্ট তথ্য পৃষ্ঠা",
    description:
      "Complete fees and payment information page with fee calculator, payment methods, and receipt generation for government services.",
    descriptionbn:
      "সরকারি সেবার জন্য ফি ক্যালকুলেটর, পেমেন্ট পদ্ধতি এবং রসিদ তৈরি সহ সম্পূর্ণ ফি এবং পেমেন্ট তথ্য পৃষ্ঠা।",
    category: "Information Pages",
    categorybn: "তথ্য পৃষ্ঠা",
    image: "/api/placeholder/600/400",
    features: [
      "Dynamic fee calculation tool",
      "Multiple payment method display",
      "Service fee comparison table",
      "Processing time information",
      "Refund policy explanation",
      "Payment receipt generation",
      "Bank and mobile banking options",
      "Currency conversion support",
      "Fee exemption criteria",
      "Payment security information",
    ],
    tags: ["Fees", "Payment", "Calculator", "Banking", "Receipt"],
    complexity: "Medium",
    estimatedTime: "4-6 hours",
    downloads: 1280,
    rating: 4.7,
    lastUpdated: "2024-01-26",
    sourceFiles: {
      html: "/templates/fees-payment-template/index.html",
      css: "/templates/fees-payment-template/styles.css",
      js: "/templates/fees-payment-template/script.js",
      react: "/templates/fees-payment-template/FeesPage.tsx",
    },
    screenshots: [
      "/templates/fees-payment-template/screenshots/fee-table.png",
      "/templates/fees-payment-template/screenshots/calculator.png",
      "/templates/fees-payment-template/screenshots/payment-methods.png",
    ],
    requirements: ["HTML5", "CSS3", "JavaScript", "Payment Gateway API"],
    installation: [
      "Configure fee structure and rates",
      "Set up payment gateway integration",
      "Customize payment method options",
      "Configure receipt generation",
      "Test calculation accuracy",
    ],
    ministry: "All Ministries",
    department: "Treasury and Accounts",
  },
];

export const categories = [
  { name: "All", namebn: "সব", count: templates.length },
  {
    name: "Forms",
    namebn: "ফর্ম",
    count: templates.filter((t) => t.category === "Forms").length,
  },
  {
    name: "Legal Pages",
    namebn: "আইনি পৃষ্ঠা",
    count: templates.filter((t) => t.category === "Legal Pages").length,
  },
  {
    name: "Information Pages",
    namebn: "তথ্য পৃষ্ঠা",
    count: templates.filter((t) => t.category === "Information Pages").length,
  },
];

export const complexityColors = {
  Low: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
  Medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
  High: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
} as const;

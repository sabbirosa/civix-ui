import { Header } from "@/components/layout/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accessibility,
    Battery,
    CheckCircle,
    FileText,
    Globe,
    Heart,
    Layout,
    Monitor,
    Navigation,
    Palette,
    Shield,
    Smartphone,
    Target,
    Users,
    Wifi,
    XCircle,
    Zap,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";

const designPrinciples = [
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    title: "User-Centric Design",
    titlebn: "ব্যবহারকারী-কেন্দ্রিক ডিজাইন",
    description:
      "Design for elderly citizens, rural users, and those with low digital literacy",
    descriptionbn:
      "বয়স্ক নাগরিক, গ্রামীণ ব্যবহারকারী এবং কম ডিজিটাল সাক্ষরতা সম্পন্ন ব্যক্তিদের জন্য ডিজাইন",
    guidelines: [
      "Use simple, clear language in both Bangla and English",
      "Provide visual cues and examples for all form inputs",
      "Design for touch-first interaction with minimum 44px tap targets",
      "Include progress indicators for multi-step processes",
    ],
  },
  {
    icon: <Accessibility className="h-8 w-8 text-success-500" />,
    title: "Accessibility First",
    titlebn: "প্রবেশযোগ্যতা প্রথম",
    description: "WCAG 2.1 AA compliance for inclusive government services",
    descriptionbn: "অন্তর্ভুক্তিমূলক সরকারি সেবার জন্য WCAG ২.১ AA সম্মতি",
    guidelines: [
      "Maintain 4.5:1 color contrast ratio for normal text",
      "Provide alternative text for all images and icons",
      "Ensure full keyboard navigation support",
      "Use semantic HTML elements for screen readers",
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-warning-500" />,
    title: "Mobile-First Design",
    titlebn: "মোবাইল-প্রথম ডিজাইন",
    description: "Optimized for 2G/3G networks and low-end devices",
    descriptionbn: "২জি/৩জি নেটওয়ার্ক এবং কম-ক্ষমতার ডিভাইসের জন্য অপ্টিমাইজড",
    guidelines: [
      "Design for 320px minimum screen width",
      "Optimize images and assets for slow connections",
      "Implement progressive loading and offline capabilities",
      "Use system fonts to reduce loading time",
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    title: "Cultural Sensitivity",
    titlebn: "সাংস্কৃতিক সংবেদনশীলতা",
    description: "Respect Bangladeshi culture, traditions, and local context",
    descriptionbn:
      "বাংলাদেশী সংস্কৃতি, ঐতিহ্য এবং স্থানীয় প্রেক্ষাপটের প্রতি সম্মান",
    guidelines: [
      "Use Bengali calendar dates alongside Gregorian",
      "Include Islamic calendar for religious contexts",
      "Respect local naming conventions and address formats",
      "Use culturally appropriate imagery and colors",
    ],
  },
];

const designComparisons = [
  {
    category: "Form Design",
    categorybn: "ফর্ম ডিজাইন",
    icon: <FileText className="h-6 w-6" />,
    examples: [
      {
        title: "Input Field Labels",
        correct: {
          title: "✅ Clear Bilingual Labels with Examples",
          description: "Use both English and Bangla with helpful examples",
          component: (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Mobile Number / মোবাইল নম্বর
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                    (Example: 01712345678)
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  National ID / জাতীয় পরিচয়পত্র
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                    (Example: 1234567890123)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="13-digit National ID number"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                />
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ English Only Labels",
          description: "Missing translation and examples make it confusing",
          component: (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  NID
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
          ),
        },
      },
      {
        title: "Error Messages",
        correct: {
          title: "✅ Helpful Error Messages",
          description:
            "Clear explanation with specific guidance in both languages",
          component: (
            <div className="space-y-3">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <div className="flex">
                  <XCircle className="h-5 w-5 text-red-400 dark:text-red-500 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      Invalid mobile number
                    </h3>
                    <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                      <p>
                        Please enter a valid 11-digit mobile number starting
                        with 017, 018, or 019.
                      </p>
                      <p className="mt-1 font-bengali">
                        অনুগ্রহ করে ০১৭, ০১৮, বা ০১৯ দিয়ে শুরু হওয়া ১১ সংখ্যার
                        মোবাইল নম্বর দিন।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Generic Error Messages",
          description: "Vague and unhelpful error messages",
          component: (
            <div className="space-y-3">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <div className="flex">
                  <XCircle className="h-5 w-5 text-red-400 dark:text-red-500 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      Error
                    </h3>
                    <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                      <p>Invalid input</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      },
    ],
  },
  {
    category: "Color Contrast",
    categorybn: "রঙের বৈপরীত্য",
    icon: <Palette className="h-6 w-6" />,
    examples: [
      {
        title: "Text on Background Colors",
        correct: {
          title: "✅ Proper Contrast Ratios (4.5:1+)",
          description: "Text meets WCAG AA standards with sufficient contrast",
          component: (
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                <p className="text-slate-900 dark:text-slate-100 font-medium mb-2">
                  High Contrast Text (21:1)
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  This text has excellent readability on light background
                </p>
              </div>
              <div className="p-4 bg-blue-600 text-white rounded-lg">
                <p className="font-medium mb-2">White on Blue (4.56:1)</p>
                <p className="text-blue-100 text-sm">
                  This meets AA standards for normal text
                </p>
              </div>
              <div className="p-4 bg-green-700 text-white rounded-lg">
                <p className="font-medium mb-2">Status Success (7.2:1)</p>
                <p className="text-green-100 text-sm">
                  Excellent contrast for important messages
                </p>
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Poor Contrast Ratios (<4.5:1)",
          description: "Text fails accessibility standards and is hard to read",
          component: (
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-400 dark:text-gray-500 font-medium mb-2">
                  Low Contrast Text (2.3:1)
                </p>
                <p className="text-gray-400 dark:text-gray-600 text-sm">
                  This text is very hard to read
                </p>
              </div>
              <div className="p-4 bg-yellow-300 text-yellow-400 rounded-lg">
                <p className="font-medium mb-2">Yellow on Yellow (1.8:1)</p>
                <p className="text-yellow-500 text-sm">
                  Completely fails accessibility
                </p>
              </div>
              <div className="p-4 bg-red-400 text-red-300 rounded-lg">
                <p className="font-medium mb-2">Poor Error State (2.1:1)</p>
                <p className="text-red-200 text-sm">
                  Cannot read important messages
                </p>
              </div>
            </div>
          ),
        },
      },
      {
        title: "Link and Interactive Elements",
        correct: {
          title: "✅ Accessible Link Colors",
          description:
            "Links stand out clearly from body text with proper contrast",
          component: (
            <div className="space-y-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300">
                This is body text with a{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                >
                  properly contrasted link
                </a>{" "}
                that meets accessibility standards.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                এটি একটি{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-bengali"
                >
                  সঠিক বৈপরীত্যের লিঙ্ক
                </a>{" "}
                সহ বডি টেক্সট।
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                Submit Application
              </button>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Poor Link Visibility",
          description: "Links blend into text and fail contrast requirements",
          component: (
            <div className="space-y-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300">
                This is body text with a{" "}
                <span className="text-slate-500 dark:text-slate-500">
                  poorly contrasted link
                </span>{" "}
                that fails accessibility.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                এটি একটি{" "}
                <span className="text-slate-500 dark:text-slate-500 font-bengali">
                  খারাপ বৈপরীত্যের লিঙ্ক
                </span>{" "}
                সহ বডি টেক্সট।
              </p>
              <button className="px-4 py-2 bg-gray-300 text-gray-400 rounded-md">
                Submit Application
              </button>
            </div>
          ),
        },
      },
    ],
  },
  {
    category: "Button Design",
    categorybn: "বাটন ডিজাইন",
    icon: <Target className="h-6 w-6" />,
    examples: [
      {
        title: "Primary Action Buttons",
        correct: {
          title: "✅ Large, Clear Buttons with Icons",
          description:
            "Accessible touch targets with bilingual text and visual cues",
          component: (
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors min-h-[44px]">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Submit Application / আবেদন জমা দিন</span>
              </button>
              <button className="w-full flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 transition-colors min-h-[44px]">
                <FileText className="h-5 w-5 mr-2" />
                <span>Download Certificate / সার্টিফিকেট ডাউনলোড</span>
              </button>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Small, Text-Only Buttons",
          description: "Too small for touch and lacks visual context",
          component: (
            <div className="space-y-4">
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
                Submit
              </button>
              <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">
                Download
              </button>
            </div>
          ),
        },
      },
      {
        title: "Loading States",
        correct: {
          title: "✅ Clear Loading Indicators",
          description: "Visual feedback with progress indication",
          component: (
            <div className="space-y-4">
              <button
                className="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg min-h-[44px]"
                disabled
              >
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                <span>Processing Application / আবেদন প্রক্রিয়াকরণ...</span>
              </button>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                Step 3 of 4 - Uploading documents
              </p>
            </div>
          ),
        },
        incorrect: {
          title: "❌ No Loading Feedback",
          description: "Button appears broken with no indication",
          component: (
            <div className="space-y-4">
              <button
                className="w-full px-6 py-4 bg-slate-400 text-white rounded-lg min-h-[44px]"
                disabled
              >
                Submit Application
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-500 text-center">
                Please wait...
              </p>
            </div>
          ),
        },
      },
    ],
  },
  {
    category: "Navigation Design",
    categorybn: "নেভিগেশন ডিজাইন",
    icon: <Navigation className="h-6 w-6" />,
    examples: [
      {
        title: "Main Navigation",
        correct: {
          title: "✅ Simple & Clear Navigation",
          description: "Flat hierarchy with icons and bilingual labels",
          component: (
            <nav className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Services / সেবা</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Apply / আবেদন</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <Target className="h-4 w-4 mr-2" />
                  <span>Track / ট্র্যাক</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  <span>Help / সাহায্য</span>
                </a>
              </div>
            </nav>
          ),
        },
        incorrect: {
          title: "❌ Complex Nested Menus",
          description: "Too many levels confuse users",
          component: (
            <nav className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <div className="relative">
                <button className="flex items-center px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
                  <span>Government Services</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg">
                  <div className="relative">
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Administrative Services →
                    </button>
                    <div className="absolute left-full top-0 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        Certificate Services →
                      </a>
                      <div className="absolute left-full top-0 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          Birth Certificate
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          Death Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
      },
    ],
  },
  {
    category: "Status Indicators",
    categorybn: "স্ট্যাটাস নির্দেশক",
    icon: <Shield className="h-6 w-6" />,
    examples: [
      {
        title: "Application Status",
        correct: {
          title: "✅ Clear Status with Progress",
          description: "Visual progress with culturally appropriate colors",
          component: (
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <h3 className="text-green-800 dark:text-green-200 font-medium">
                      Application Approved
                    </h3>
                    <p className="text-green-700 dark:text-green-300 font-bengali">
                      আবেদন অনুমোদিত
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Your certificate will be ready in 2-3 business days
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600 dark:border-yellow-400 mr-3"></div>
                  <div>
                    <h3 className="text-yellow-800 dark:text-yellow-200 font-medium">
                      Under Review
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300 font-bengali">
                      পর্যালোচনাধীন
                    </p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                      Expected completion: 3-5 working days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Confusing Status Colors",
          description:
            "Poor color choices that may have political implications",
          component: (
            <div className="space-y-4">
              <div className="bg-red-500 text-orange-400 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  <div>
                    <h3 className="font-medium">Status Update</h3>
                    <p className="text-sm">Application processed</p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-500 text-red-400 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="h-6 w-6 bg-current rounded-full mr-3"></div>
                  <div>
                    <h3 className="font-medium">Processing</h3>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      },
    ],
  },
  {
    category: "Data Display",
    categorybn: "ডেটা প্রদর্শন",
    icon: <FileText className="h-6 w-6" />,
    examples: [
      {
        title: "Information Cards",
        correct: {
          title: "✅ Scannable Information Layout",
          description: "Well-organized with clear hierarchy and local formats",
          component: (
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                      Birth Certificate
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-bengali">
                      জন্ম নিবন্ধন সনদ
                    </p>
                  </div>
                  <Badge variant="default">Ready</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <label className="text-slate-500 dark:text-slate-400">
                      Application ID
                    </label>
                    <p className="font-mono text-slate-900 dark:text-slate-100">
                      BC-2024-001234
                    </p>
                  </div>
                  <div>
                    <label className="text-slate-500 dark:text-slate-400">
                      Applied Date
                    </label>
                    <p className="text-slate-900 dark:text-slate-100">
                      January 15, 2024 / ১৫ জানুয়ারি ২০২৪
                    </p>
                  </div>
                  <div>
                    <label className="text-slate-500 dark:text-slate-400">
                      Fee Paid
                    </label>
                    <p className="text-slate-900 dark:text-slate-100">৳50.00</p>
                  </div>
                  <div>
                    <label className="text-slate-500 dark:text-slate-400">
                      Collection Date
                    </label>
                    <p className="text-slate-900 dark:text-slate-100">
                      January 18, 2024 / ১৮ জানুয়ারি ২০২৪
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Dense Text Blocks",
          description: "Hard to scan and missing local context",
          component: (
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                <p className="text-sm text-slate-800 dark:text-slate-200">
                  Birth Certificate Application BC-2024-001234 submitted on
                  2024-01-15 with fee payment of 50.00 BDT completed
                  successfully and will be ready for collection on 2024-01-18
                  during office hours 9:00 AM to 5:00 PM except Friday and
                  government holidays please bring original NID and mobile
                  number for verification process.
                </p>
              </div>
            </div>
          ),
        },
      },
    ],
  },
  {
    category: "Search & Filters",
    categorybn: "অনুসন্ধান ও ফিল্টার",
    icon: <Target className="h-6 w-6" />,
    examples: [
      {
        title: "Service Search",
        correct: {
          title: "✅ Smart Search with Suggestions",
          description:
            "Autocomplete with bilingual support and recent searches",
          component: (
            <div className="space-y-4">
              <div className="relative">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search services... / সেবা খুঁজুন..."
                    className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                    Search
                  </button>
                </div>
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10">
                  <div className="p-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                      Popular Services
                    </div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded cursor-pointer">
                        <span className="text-slate-900 dark:text-slate-100">
                          Birth Certificate / জন্ম নিবন্ধন
                        </span>
                      </div>
                      <div className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded cursor-pointer">
                        <span className="text-slate-900 dark:text-slate-100">
                          Trade License / ব্যবসায়িক লাইসেন্স
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Recent: Birth Certificate</Badge>
                <Badge variant="outline">Recent: NID Services</Badge>
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Basic Search Only",
          description: "No help for users to find what they need",
          component: (
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-l-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg">
                  Go
                </button>
              </div>
            </div>
          ),
        },
      },
    ],
  },
  {
    category: "File Upload",
    categorybn: "ফাইল আপলোড",
    icon: <FileText className="h-6 w-6" />,
    examples: [
      {
        title: "Document Upload",
        correct: {
          title: "✅ Clear Upload Guidelines",
          description: "Specific requirements with visual feedback",
          component: (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <FileText className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Upload National ID Copy
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-bengali mb-2">
                  জাতীয় পরিচয়পত্রের কপি আপলোড করুন
                </p>
                <div className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                  <p>• Accepted formats: PDF, JPG, PNG</p>
                  <p>• Maximum size: 2MB</p>
                  <p>• Both sides required</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Choose File
                </button>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-sm text-green-800 dark:text-green-200">
                    nid_front.pdf (1.2MB) - Uploaded successfully
                  </span>
                </div>
              </div>
            </div>
          ),
        },
        incorrect: {
          title: "❌ Unclear Upload Requirements",
          description: "No guidance on what's expected",
          component: (
            <div className="space-y-4">
              <div className="border border-slate-300 dark:border-slate-600 rounded-lg p-4">
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Upload Document
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500 dark:text-slate-400
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-slate-50 file:text-slate-700
                  dark:file:bg-slate-700 dark:file:text-slate-300"
                />
              </div>
            </div>
          ),
        },
      },
    ],
  },
];

const performanceGuidelines = [
  {
    icon: <Wifi className="h-8 w-8 text-blue-500" />,
    title: "Network Optimization",
    titlebn: "নেটওয়ার্ক অপ্টিমাইজেশন",
    metrics: [
      {
        label: "First Contentful Paint",
        target: "< 2.5s",
        importance: "Critical",
      },
      { label: "Time to Interactive", target: "< 5s", importance: "High" },
      { label: "Total Bundle Size", target: "< 200KB", importance: "High" },
    ],
    guidelines: [
      "Optimize for 2G/3G networks",
      "Use WebP images with fallbacks",
      "Implement progressive loading",
      "Cache static assets aggressively",
    ],
  },
  {
    icon: <Battery className="h-8 w-8 text-green-500" />,
    title: "Device Optimization",
    titlebn: "ডিভাইস অপ্টিমাইজেশন",
    metrics: [
      { label: "Memory Usage", target: "< 100MB", importance: "Critical" },
      { label: "CPU Usage", target: "< 30%", importance: "High" },
      { label: "Battery Impact", target: "Minimal", importance: "Medium" },
    ],
    guidelines: [
      "Support Android 5.0+ devices",
      "Optimize for low-end hardware",
      "Minimize background processing",
      "Use efficient rendering techniques",
    ],
  },
];

const accessibilityChecklist = [
  {
    category: "Visual",
    items: [
      { text: "Color contrast ratio ≥ 4.5:1", priority: "High" },
      { text: "Text scalable up to 200%", priority: "High" },
      { text: "Focus indicators visible", priority: "High" },
      { text: "No flashing content", priority: "Critical" },
    ],
  },
  {
    category: "Motor",
    items: [
      { text: "Touch targets ≥ 44px", priority: "High" },
      { text: "Keyboard navigation support", priority: "Critical" },
      { text: "No time limits on forms", priority: "Medium" },
      { text: "Click/tap tolerance", priority: "Medium" },
    ],
  },
  {
    category: "Cognitive",
    items: [
      { text: "Simple, clear language", priority: "Critical" },
      { text: "Consistent navigation", priority: "High" },
      { text: "Error prevention & recovery", priority: "High" },
      { text: "Progress indicators", priority: "Medium" },
    ],
  },
];

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-600 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-3xl mb-8 shadow-lg">
              <Monitor className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
              Design Guidelines
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6 font-bengali">
              ডিজাইন নির্দেশিকা
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed">
              Comprehensive guidelines for building accessible, user-friendly
              e-government services that serve all citizens of Bangladesh
              effectively and inclusively.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-blue-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  WCAG 2.1 AA Compliant
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-green-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Mobile-First Design
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-purple-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Bilingual Support
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="principles" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600 rounded-2xl p-2 backdrop-blur-sm shadow-lg">
              <TabsTrigger
                value="principles"
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Principles</span>
              </TabsTrigger>
              <TabsTrigger
                value="comparisons"
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <Layout className="h-4 w-4" />
                <span className="hidden sm:inline">Do vs Don&apos;t</span>
              </TabsTrigger>
              <TabsTrigger
                value="accessibility"
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <Accessibility className="h-4 w-4" />
                <span className="hidden sm:inline">Accessibility</span>
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <Zap className="h-4 w-4" />
                <span className="hidden sm:inline">Performance</span>
              </TabsTrigger>
              <TabsTrigger
                value="checklist"
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200"
              >
                <CheckCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Checklist</span>
              </TabsTrigger>
            </TabsList>

            {/* Design Principles Tab */}
            <TabsContent value="principles" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {designPrinciples.map((principle, index) => (
                  <Card
                    key={index}
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm rounded-2xl overflow-hidden group"
                  >
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 border-b border-slate-200 dark:border-slate-600">
                      <div className="flex items-center space-x-4">
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {principle.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-slate-900 dark:text-slate-100 mb-2">
                            {principle.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600 dark:text-slate-400 font-bengali text-lg">
                            {principle.titlebn}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-lg">
                        {principle.description}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 font-bengali leading-relaxed">
                        {principle.descriptionbn}
                      </p>
                      <div className="space-y-3">
                        {principle.guidelines.map((guideline, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-slate-200 dark:border-slate-600"
                          >
                            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {guideline}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Design Comparisons Tab */}
            <TabsContent value="comparisons" className="space-y-12">
              <div className="text-center mb-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Design Do&apos;s and Don&apos;ts
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Side-by-side examples showing best practices vs common
                  mistakes
                </p>
              </div>

              {designComparisons.map((comparison, index) => (
                <Card
                  key={index}
                  className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-2xl text-slate-900 dark:text-slate-100">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
                        {comparison.icon}
                      </div>
                      <span>{comparison.category}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-bengali">
                        / {comparison.categorybn}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8 p-8">
                    {comparison.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="space-y-6">
                        <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 pb-2">
                          {example.title}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Correct Example */}
                          <div className="border-2 border-emerald-300 dark:border-emerald-600 rounded-2xl p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 shadow-lg">
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="p-2 bg-emerald-500 rounded-full">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <h5 className="font-semibold text-emerald-800 dark:text-emerald-200 text-lg">
                                {example.correct.title}
                              </h5>
                            </div>
                            <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6 bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                              {example.correct.description}
                            </p>
                            <div className="bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700 shadow-inner">
                              {example.correct.component}
                            </div>
                          </div>

                          {/* Incorrect Example */}
                          <div className="border-2 border-red-300 dark:border-red-600 rounded-2xl p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 shadow-lg">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="p-2 bg-red-500 rounded-full">
                                <XCircle className="h-4 w-4 text-white" />
                              </div>
                              <h5 className="font-semibold text-red-800 dark:text-red-200 text-lg">
                                {example.incorrect.title}
                              </h5>
                            </div>
                            <p className="text-sm text-red-700 dark:text-red-300 mb-6 bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                              {example.incorrect.description}
                            </p>
                            <div className="bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl border border-red-200 dark:border-red-700 shadow-inner">
                              {example.incorrect.component}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Accessibility Tab */}
            <TabsContent value="accessibility" className="space-y-8">
              <div className="text-center mb-12 p-8 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Accessibility Standards
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  WCAG 2.1 AA compliance checklist organized by disability type
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {accessibilityChecklist.map((category, index) => (
                  <Card
                    key={index}
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                  >
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 border-b border-slate-200 dark:border-slate-600">
                      <CardTitle className="flex items-center space-x-3 text-slate-900 dark:text-slate-100">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl text-white">
                          <Accessibility className="h-5 w-5" />
                        </div>
                        <span>{category.category} Accessibility</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-3 p-4 bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-700 dark:to-purple-900/30 rounded-xl border border-slate-200 dark:border-slate-600"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <span className="text-sm text-slate-700 dark:text-slate-300">
                                {item.text}
                              </span>
                              <Badge
                                variant={
                                  item.priority === "Critical"
                                    ? "destructive"
                                    : item.priority === "High"
                                      ? "default"
                                      : "secondary"
                                }
                                className="ml-2 text-xs shadow-sm"
                              >
                                {item.priority}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-8">
              <div className="text-center mb-12 p-8 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Performance Guidelines
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Optimize for Bangladesh&apos;s network conditions and device
                  constraints
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {performanceGuidelines.map((guideline, index) => (
                  <Card
                    key={index}
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                  >
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 border-b border-slate-200 dark:border-slate-600">
                      <CardTitle className="flex items-center space-x-4 text-slate-900 dark:text-slate-100">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl text-white">
                          {guideline.icon}
                        </div>
                        <div>
                          <div className="text-xl">{guideline.title}</div>
                          <div className="text-sm font-normal text-slate-500 dark:text-slate-400 font-bengali">
                            {guideline.titlebn}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 p-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                          Performance Metrics
                        </h4>
                        <div className="space-y-3">
                          {guideline.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-orange-50 dark:from-slate-700 dark:to-orange-900/30 rounded-xl border border-slate-200 dark:border-slate-600"
                            >
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                {metric.label}
                              </span>
                              <div className="flex items-center space-x-2">
                                <Badge
                                  variant="outline"
                                  className="bg-white dark:bg-slate-800 shadow-sm"
                                >
                                  {metric.target}
                                </Badge>
                                <Badge
                                  variant={
                                    metric.importance === "Critical"
                                      ? "destructive"
                                      : metric.importance === "High"
                                        ? "default"
                                        : "secondary"
                                  }
                                  className="text-xs shadow-sm"
                                >
                                  {metric.importance}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                          Implementation Guidelines
                        </h4>
                        <div className="space-y-3">
                          {guideline.guidelines.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start space-x-3 p-3 bg-gradient-to-r from-slate-50 to-orange-50 dark:from-slate-700 dark:to-orange-900/30 rounded-xl border border-slate-200 dark:border-slate-600"
                            >
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-300">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Implementation Checklist Tab */}
            <TabsContent value="checklist" className="space-y-8">
              <div className="text-center mb-12 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Implementation Checklist
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Essential items to verify before launching your government
                  service
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl text-white">
                        <Shield className="h-5 w-5" />
                      </div>
                      <span>Security & Privacy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        "HTTPS enabled with valid certificate",
                        "Input validation and sanitization",
                        "CSRF protection implemented",
                        "Secure authentication system",
                        "Data encryption at rest and transit",
                        "Privacy policy compliance",
                        "Regular security audits scheduled",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-blue-600 border-slate-300 dark:border-slate-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-green-600 dark:text-green-400">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                        <Accessibility className="h-5 w-5" />
                      </div>
                      <span>Accessibility</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        "WCAG 2.1 AA compliance verified",
                        "Screen reader compatibility tested",
                        "Keyboard navigation fully functional",
                        "Color contrast ratios meet standards",
                        "Alt text for all images provided",
                        "Focus indicators clearly visible",
                        "Form labels properly associated",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-green-600 border-slate-300 dark:border-slate-600 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-purple-600 dark:text-purple-400">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl text-white">
                        <Globe className="h-5 w-5" />
                      </div>
                      <span>Localization</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        "Complete Bengali translation provided",
                        "Bengali fonts load correctly",
                        "Cultural appropriateness reviewed",
                        "Local date/time formats used",
                        "Address formats match local standards",
                        "Currency and number formats correct",
                        "Religious calendar integration (if needed)",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-purple-600 border-slate-300 dark:border-slate-600 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-orange-600 dark:text-orange-400">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl text-white">
                        <Zap className="h-5 w-5" />
                      </div>
                      <span>Performance</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        "Page loads under 3 seconds on 3G",
                        "Images optimized and compressed",
                        "Critical CSS inlined",
                        "JavaScript bundles minimized",
                        "Caching strategy implemented",
                        "CDN configured for static assets",
                        "Offline functionality where applicable",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-orange-600 border-slate-300 dark:border-slate-600 rounded focus:ring-orange-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-rose-600 dark:text-rose-400">
                      <div className="p-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl text-white">
                        <Heart className="h-5 w-5" />
                      </div>
                      <span>User Experience</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        "Mobile responsive on all screen sizes",
                        "Touch targets minimum 44px",
                        "Error messages are helpful",
                        "Progress indicators for long processes",
                        "Confirmation dialogs for important actions",
                        "Search functionality works correctly",
                        "User testing completed successfully",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-rose-600 border-slate-300 dark:border-slate-600 rounded focus:ring-rose-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border-b border-slate-200 dark:border-slate-600">
                    <CardTitle className="flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
                      <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl text-white">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span>Content & Documentation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        "Help documentation in both languages",
                        "FAQ section covers common issues",
                        "Contact information clearly visible",
                        "Terms of service and privacy policy",
                        "Service hours and availability noted",
                        "Maintenance schedules communicated",
                        "Feedback mechanism available",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 text-indigo-600 border-slate-300 dark:border-slate-600 rounded focus:ring-indigo-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Reference Footer */}
          <Card className="mt-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 border-blue-200 dark:border-slate-600 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Quick Reference
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Key metrics to remember for government service design
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    4.5:1
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Min. Contrast Ratio
                  </div>
                </div>
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-green-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    44px
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Min. Touch Target
                  </div>
                </div>
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                    3s
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Max. Load Time
                  </div>
                </div>
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-purple-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    320px
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Min. Screen Width
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

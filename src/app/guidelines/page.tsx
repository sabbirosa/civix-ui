import { Header } from "@/components/layout/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accessibility,
    CheckCircle,
    Eye,
    Globe,
    Heart,
    Shield,
    Smartphone,
    Target,
    Users,
    XCircle,
    Zap
} from "lucide-react";

const designPrinciples = [
  {
    icon: <Users className="h-8 w-8 text-primary-500" />,
    title: "User-Centric Design",
    titlebn: "ব্যবহারকারী-কেন্দ্রিক ডিজাইন",
    description: "Design for elderly citizens, rural users, and those with low digital literacy",
    descriptionbn: "বয়স্ক নাগরিক, গ্রামীণ ব্যবহারকারী এবং কম ডিজিটাল সাক্ষরতা সম্পন্ন ব্যক্তিদের জন্য ডিজাইন",
    guidelines: [
      "Use simple, clear language in both Bangla and English",
      "Provide visual cues and examples for all form inputs",
      "Design for touch-first interaction with minimum 44px tap targets",
      "Include progress indicators for multi-step processes"
    ]
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
      "Use semantic HTML elements for screen readers"
    ]
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
      "Use system fonts to reduce loading time"
    ]
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    title: "Cultural Sensitivity",
    titlebn: "সাংস্কৃতিক সংবেদনশীলতা",
    description: "Respect Bangladeshi culture, traditions, and local context",
    descriptionbn: "বাংলাদেশী সংস্কৃতি, ঐতিহ্য এবং স্থানীয় প্রেক্ষাপটের প্রতি সম্মান",
    guidelines: [
      "Use Bengali calendar dates alongside Gregorian",
      "Include Islamic calendar for religious contexts",
      "Respect local naming conventions and address formats",
      "Use culturally appropriate imagery and colors"
    ]
  }
];

const accessibilityStandards = [
  {
    level: "Level A",
    color: "text-red-600 dark:text-red-400",
    items: [
      "Provide text alternatives for non-text content",
      "Ensure content can be presented without loss of meaning",
      "Make all functionality keyboard accessible",
      "Give users enough time to read content"
    ]
  },
  {
    level: "Level AA (Required)",
    color: "text-orange-600 dark:text-orange-400",
    items: [
      "Maintain 4.5:1 contrast ratio for normal text",
      "Maintain 3:1 contrast ratio for large text",
      "Ensure text can be resized up to 200% without assistive technology",
      "Use headings and labels to describe topic or purpose"
    ]
  },
  {
    level: "Level AAA (Recommended)",
    color: "text-green-600 dark:text-green-400",
    items: [
      "Maintain 7:1 contrast ratio for normal text",
      "No images of text except for logos",
      "Provide sign language interpretation for videos",
      "Use plain language and common words"
    ]
  }
];

const colorGuidelines = [
  {
    name: "Primary Blue",
    hex: "#0ea5e9",
    usage: "Government branding, primary actions, links",
    usagebn: "সরকারি ব্র্যান্ডিং, প্রাথমিক ক্রিয়া, লিঙ্ক",
    accessibility: "Meets AA contrast requirements on white background"
  },
  {
    name: "Bangladesh Green",
    hex: "#006a4e",
    usage: "Success states, completed actions, positive feedback",
    usagebn: "সফলতার অবস্থা, সম্পূর্ণ ক্রিয়া, ইতিবাচক প্রতিক্রিয়া",
    accessibility: "High contrast, suitable for important messages"
  },
  {
    name: "Warning Orange",
    hex: "#f59e0b",
    usage: "Caution messages, incomplete states, attention needed",
    usagebn: "সতর্কতা বার্তা, অসম্পূর্ণ অবস্থা, মনোযোগ প্রয়োজন",
    accessibility: "Use with dark text for optimal readability"
  },
  {
    name: "Error Red",
    hex: "#ef4444",
    usage: "Error states, failed actions, critical alerts",
    usagebn: "ত্রুটির অবস্থা, ব্যর্থ ক্রিয়া, গুরুত্বপূর্ণ সতর্কতা",
    accessibility: "High visibility for urgent notifications"
  }
];

const typographyGuidelines = [
  {
    element: "Headings",
    english: "Inter, Roboto, system-ui",
    bangla: "SolaimanLipi, Kalpurush, serif",
    sizes: "H1: 36px, H2: 30px, H3: 24px, H4: 20px",
    usage: "Clear hierarchy, sentence case preferred"
  },
  {
    element: "Body Text",
    english: "Inter, system-ui, sans-serif",
    bangla: "SolaimanLipi, Kalpurush, serif",
    sizes: "16px base, 18px for important content",
    usage: "Line height 1.5-1.6 for readability"
  },
  {
    element: "Form Labels",
    english: "Inter Medium, 14px",
    bangla: "SolaimanLipi Medium, 14px",
    sizes: "Medium weight, consistent spacing",
    usage: "Always include both languages"
  }
];

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Design Guidelines
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Comprehensive guidelines for building accessible, user-friendly e-government services 
              that serve all citizens of Bangladesh effectively.
            </p>
          </div>

          {/* Design Principles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Core Design Principles / মূল ডিজাইন নীতি
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {designPrinciples.map((principle, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        {principle.icon}
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 dark:text-gray-100">
                          {principle.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-400 font-bengali">
                          {principle.titlebn}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {principle.description}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-bengali text-sm">
                      {principle.descriptionbn}
                    </p>
                    <ul className="space-y-2">
                      {principle.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Accessibility Standards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Accessibility Standards / প্রবেশযোগ্যতার মান
            </h2>
            <div className="space-y-6">
              {accessibilityStandards.map((standard, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className={`${standard.color} flex items-center space-x-2`}>
                      <Target className="h-5 w-5" />
                      <span>{standard.level}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {standard.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Color Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Color Guidelines / রঙের নির্দেশিকা
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorGuidelines.map((color, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{color.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{color.hex}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{color.usage}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-bengali">{color.usagebn}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                        {color.accessibility}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Typography Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Typography Guidelines / টাইপোগ্রাফি নির্দেশিকা
            </h2>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 text-gray-900 dark:text-gray-100 font-semibold">Element</th>
                        <th className="text-left py-3 text-gray-900 dark:text-gray-100 font-semibold">English Font</th>
                        <th className="text-left py-3 text-gray-900 dark:text-gray-100 font-semibold">Bangla Font</th>
                        <th className="text-left py-3 text-gray-900 dark:text-gray-100 font-semibold">Sizes</th>
                        <th className="text-left py-3 text-gray-900 dark:text-gray-100 font-semibold">Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {typographyGuidelines.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 font-medium text-gray-900 dark:text-gray-100">{item.element}</td>
                          <td className="py-3 text-gray-600 dark:text-gray-300 font-mono text-xs">{item.english}</td>
                          <td className="py-3 text-gray-600 dark:text-gray-300 font-mono text-xs">{item.bangla}</td>
                          <td className="py-3 text-gray-600 dark:text-gray-300 text-xs">{item.sizes}</td>
                          <td className="py-3 text-gray-600 dark:text-gray-300 text-xs">{item.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Best Practices */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Best Practices / সর্বোত্তম অনুশীলন
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Do's */}
              <Card className="bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800">
                <CardHeader>
                  <CardTitle className="text-success-800 dark:text-success-200 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Do / করুন</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-success-800 dark:text-success-200">Use 12-hour time format (2:00 PM)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-success-800 dark:text-success-200">Provide examples for form inputs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-success-800 dark:text-success-200">Include both English and Bangla text</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-success-800 dark:text-success-200">Use clear, simple language</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-success-800 dark:text-success-200">Test with real users regularly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Don'ts */}
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200 flex items-center space-x-2">
                    <XCircle className="h-5 w-5" />
                    <span>Don&apos;t / করবেন না</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-800 dark:text-red-200">Use military time (14:00)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-800 dark:text-red-200">Use technical jargon without explanation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-800 dark:text-red-200">Create English-only interfaces</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-800 dark:text-red-200">Make clickable areas smaller than 44px</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-800 dark:text-red-200">Auto-play videos or sounds</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Performance Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Performance Guidelines / কর্মক্ষমতার নির্দেশিকা
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>Loading Speed</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• First Contentful Paint &lt; 2.5s</li>
                    <li>• Largest Contentful Paint &lt; 4s</li>
                    <li>• Time to Interactive &lt; 5s</li>
                    <li>• Optimize for 2G/3G networks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-blue-500" />
                    <span>Visual Stability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Cumulative Layout Shift &lt; 0.1</li>
                    <li>• Reserve space for images</li>
                    <li>• Avoid dynamic content insertion</li>
                    <li>• Progressive image loading</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>User Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• First Input Delay &lt; 100ms</li>
                    <li>• Smooth scrolling performance</li>
                    <li>• Responsive touch interactions</li>
                    <li>• Graceful offline handling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementation Checklist */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Quick Implementation Checklist / দ্রুত বাস্তবায়ন চেকলিস্ট
            </h2>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-blue-500" />
                      <span>Security</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>□ HTTPS enabled</li>
                      <li>□ Input validation</li>
                      <li>□ CSRF protection</li>
                      <li>□ Secure headers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                      <Accessibility className="h-4 w-4 text-green-500" />
                      <span>Accessibility</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>□ Alt text for images</li>
                      <li>□ Keyboard navigation</li>
                      <li>□ Screen reader support</li>
                      <li>□ Color contrast</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-purple-500" />
                      <span>Localization</span>
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>□ Dual language support</li>
                      <li>□ Bengali font loading</li>
                      <li>□ Cultural appropriateness</li>
                      <li>□ Local date formats</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
} 
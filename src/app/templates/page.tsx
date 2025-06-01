import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowRight,
    CheckCircle,
    Clock,
    Download,
    ExternalLink,
    Eye,
    FileText,
    Filter,
    Globe,
    Search,
    Star
} from "lucide-react";

const templates = [
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
      "Accessibility compliant",
      "SEO optimized",
      "Government branding",
      "News & announcements section"
    ],
    tags: ["Homepage", "Ministry", "Government", "Responsive"],
    complexity: "Medium",
    estimatedTime: "4-6 hours",
    downloads: 1420,
    rating: 4.8,
    lastUpdated: "2024-01-15"
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
      "Multi-step form wizard",
      "File upload with preview",
      "Real-time validation",
      "Progress indicators",
      "Auto-save functionality",
      "Mobile optimized"
    ],
    tags: ["Form", "Registration", "Multi-step", "Validation"],
    complexity: "High",
    estimatedTime: "8-12 hours",
    downloads: 890,
    rating: 4.9,
    lastUpdated: "2024-01-20"
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
      "Service catalog",
      "Application tracking",
      "Document management",
      "Payment integration",
      "Notification system",
      "User dashboard"
    ],
    tags: ["Portal", "Services", "Dashboard", "Tracking"],
    complexity: "High",
    estimatedTime: "12-16 hours",
    downloads: 650,
    rating: 4.7,
    lastUpdated: "2024-01-18"
  },
  {
    id: "payment-gateway",
    title: "Government Payment Gateway",
    titlebn: "সরকারি পেমেন্ট গেটওয়ে",
    description: "Secure payment interface for government services with multiple payment options and receipt generation.",
    descriptionbn: "একাধিক পেমেন্ট অপশন এবং রসিদ তৈরির সাথে সরকারি সেবার জন্য নিরাপদ পেমেন্ট ইন্টারফেস।",
    category: "E-commerce",
    categorybn: "ই-কমার্স",
    image: "/api/placeholder/600/400",
    features: [
      "Multiple payment methods",
      "Secure transactions",
      "Receipt generation",
      "Payment history",
      "Refund management",
      "Tax calculation"
    ],
    tags: ["Payment", "Security", "E-commerce", "Gateway"],
    complexity: "High",
    estimatedTime: "10-14 hours",
    downloads: 420,
    rating: 4.6,
    lastUpdated: "2024-01-12"
  },
  {
    id: "document-verification",
    title: "Document Verification System",
    titlebn: "ডকুমেন্ট যাচাইকরণ সিস্টেম",
    description: "System for citizens to verify government-issued documents with QR code scanning and authentication.",
    descriptionbn: "QR কোড স্ক্যানিং এবং প্রমাণীকরণ সহ সরকার-প্রদত্ত নথি যাচাই করার জন্য নাগরিকদের সিস্টেম।",
    category: "Verification",
    categorybn: "যাচাইকরণ",
    image: "/api/placeholder/600/400",
    features: [
      "QR code scanner",
      "Document authentication",
      "Blockchain verification",
      "Anti-fraud measures",
      "Mobile app integration",
      "Audit trail"
    ],
    tags: ["Verification", "Security", "QR Code", "Blockchain"],
    complexity: "High",
    estimatedTime: "14-18 hours",
    downloads: 320,
    rating: 4.8,
    lastUpdated: "2024-01-22"
  },
  {
    id: "appointment-booking",
    title: "Appointment Booking System",
    titlebn: "অ্যাপয়েন্টমেন্ট বুকিং সিস্টেম",
    description: "Online appointment booking for government offices with calendar integration and reminder notifications.",
    descriptionbn: "ক্যালেন্ডার ইন্টিগ্রেশন এবং রিমাইন্ডার নোটিফিকেশন সহ সরকারি অফিসের জন্য অনলাইন অ্যাপয়েন্টমেন্ট বুকিং।",
    category: "Scheduling",
    categorybn: "সময়সূচী",
    image: "/api/placeholder/600/400",
    features: [
      "Calendar integration",
      "Time slot management",
      "SMS/Email reminders",
      "Rescheduling options",
      "Waitlist management",
      "Officer availability"
    ],
    tags: ["Booking", "Calendar", "Notifications", "Scheduling"],
    complexity: "Medium",
    estimatedTime: "6-8 hours",
    downloads: 780,
    rating: 4.5,
    lastUpdated: "2024-01-16"
  }
];

const categories = [
  { name: "All", namebn: "সব", count: 6 },
  { name: "Landing Pages", namebn: "ল্যান্ডিং পেজ", count: 1 },
  { name: "Forms", namebn: "ফর্ম", count: 1 },
  { name: "Portals", namebn: "পোর্টাল", count: 1 },
  { name: "E-commerce", namebn: "ই-কমার্স", count: 1 },
  { name: "Verification", namebn: "যাচাইকরণ", count: 1 },
  { name: "Scheduling", namebn: "সময়সূচী", count: 1 }
];

const complexityColors = {
  "Low": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
  "Medium": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
  "High": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
} as const;

type ComplexityLevel = keyof typeof complexityColors;

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Page Templates / পেজ টেমপ্লেট
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Ready-to-use page templates and layouts designed specifically for Bangladesh e-government services. 
              Copy, customize, and deploy quickly.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-bengali">
              বাংলাদেশের ই-সরকার সেবার জন্য বিশেষভাবে ডিজাইন করা প্রস্তুত পেজ টেমপ্লেট এবং লেআউট।
            </p>
          </div>

          {/* Stats and Search */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>{templates.length} Templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>{templates.reduce((sum, t) => sum + t.downloads, 0).toLocaleString()} Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>4.7 Avg Rating</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <Button variant="outline" size="small">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-primary-500 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Template Preview */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-primary-500 dark:text-gray-400" />
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${complexityColors[template.complexity as ComplexityLevel]}`}>
                      {template.complexity}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Template Info */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {template.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-bengali">
                          {template.titlebn}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{template.rating}</span>
                      </div>
                    </div>
                    
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded mb-3">
                      {template.category}
                    </span>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {template.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bengali">
                      {template.descriptionbn}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {template.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-success-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {template.features.length > 4 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        +{template.features.length - 4} more features
                      </p>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{template.estimatedTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{template.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    <span>Updated {template.lastUpdated}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button variant="primary" size="small" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="small" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Template Usage Guide */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              How to Use Templates / টেমপ্লেট কিভাবে ব্যবহার করবেন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    1. Download
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Choose and download the template that best fits your needs. All templates include source files and documentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-success-100 dark:bg-success-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-success-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    2. Customize
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Modify colors, content, and branding to match your ministry or department. Follow the included guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-6 w-6 text-warning-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    3. Deploy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Launch your customized template. All templates are tested for accessibility and performance standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary-500 to-bangladesh-green text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Need a Custom Template?
                </h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  Can&apos;t find what you need? Our team can create custom templates specifically for your government department or ministry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="large">
                    Request Custom Template
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-500">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
} 
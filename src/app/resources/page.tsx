import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle,
  Code,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  HelpCircle,
  Mail,
  Package,
  Palette,
  PlayCircle,
  Shield,
  Star,
  Timer,
  Users,
  Wrench
} from "lucide-react";

const resourceCategories = [
  {
    title: "Development Tools",
    titlebn: "ডেভেলপমেন্ট টুলস",
    description: "Essential tools and libraries for Bangladesh e-government development",
    descriptionbn: "বাংলাদেশ ই-সরকার ডেভেলপমেন্টের জন্য প্রয়োজনীয় টুল এবং লাইব্রেরি",
    icon: <Wrench className="h-8 w-8 text-blue-500" />,
    resources: [
      {
        name: "Bangladesh UI Kit",
        namebn: "বাংলাদেশ UI কিট",
        description: "Complete component guideline library with Bangladesh government branding",
        type: "Guidelines",
        link: "#",
        downloads: "2.5K",
        rating: 4.9,
        tags: ["React", "Vue", "Angular"]
      },
      {
        name: "Bengali Font Bundle",
        namebn: "বাংলা ফন্ট বান্ডেল",
        description: "Web-optimized Bengali fonts for government websites",
        type: "Fonts",
        link: "#",
        downloads: "1.8K",
        rating: 4.8,
        tags: ["Typography", "Fonts", "Bengali"]
      },
      {
        name: "Accessibility Checker",
        namebn: "প্রবেশযোগ্যতা চেকার",
        description: "Automated tool to check WCAG 2.1 compliance",
        type: "Tool",
        link: "#",
        downloads: "980",
        rating: 4.7,
        tags: ["Accessibility", "Testing", "WCAG"]
      }
    ]
  },
  {
    title: "Documentation",
    titlebn: "ডকুমেন্টেশন",
    description: "Comprehensive guides and API documentation",
    descriptionbn: "বিস্তৃত গাইড এবং API ডকুমেন্টেশন",
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    resources: [
      {
        name: "Design System Guide",
        namebn: "ডিজাইন সিস্টেম গাইড",
        description: "Complete guide to implementing the Bangladesh design system",
        type: "Guide",
        link: "#",
        downloads: "3.2K",
        rating: 4.9,
        tags: ["Design", "Guidelines", "Implementation"]
      },
      {
        name: "API Documentation",
        namebn: "API ডকুমেন্টেশন",
        description: "Government services API documentation and examples",
        type: "API Docs",
        link: "#",
        downloads: "1.5K",
        rating: 4.6,
        tags: ["API", "Integration", "Examples"]
      },
      {
        name: "Accessibility Standards",
        namebn: "প্রবেশযোগ্যতার মান",
        description: "WCAG 2.1 AA implementation guide for Bangladesh",
        type: "Standards",
        link: "#",
        downloads: "890",
        rating: 4.8,
        tags: ["Accessibility", "WCAG", "Standards"]
      }
    ]
  },
  {
    title: "Learning Resources",
    titlebn: "শেখার রিসোর্স",
    description: "Tutorials, courses, and learning materials",
    descriptionbn: "টিউটোরিয়াল, কোর্স এবং শেখার উপকরণ",
    icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
    resources: [
      {
        name: "E-Government Development Course",
        namebn: "ই-সরকার ডেভেলপমেন্ট কোর্স",
        description: "Complete course on building government websites",
        type: "Course",
        link: "#",
        downloads: "1.2K",
        rating: 4.8,
        tags: ["Course", "Tutorial", "E-Government"]
      },
      {
        name: "Bangladesh UX Guidelines",
        namebn: "বাংলাদেশ UX নির্দেশিকা",
        description: "User experience best practices for Bengali users",
        type: "Guide",
        link: "#",
        downloads: "2.1K",
        rating: 4.7,
        tags: ["UX", "Guidelines", "Bengali"]
      },
      {
        name: "Video Tutorials",
        namebn: "ভিডিও টিউটোরিয়াল",
        description: "Step-by-step video guides in Bengali and English",
        type: "Videos",
        link: "#",
        downloads: "950",
        rating: 4.6,
        tags: ["Video", "Tutorial", "Bengali"]
      }
    ]
  }
];

const supportChannels = [
  {
    title: "Community Forum",
    titlebn: "কমিউনিটি ফোরাম",
    description: "Connect with other developers and get help",
    descriptionbn: "অন্যান্য ডেভেলপারদের সাথে যোগাযোগ করুন এবং সাহায্য নিন",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    link: "#",
    members: "2.5K",
    activity: "Very Active"
  },
  {
    title: "Technical Support",
    titlebn: "টেকনিক্যাল সাপোর্ট",
    description: "Get direct help from our technical team",
    descriptionbn: "আমাদের টেকনিক্যাল টিম থেকে সরাসরি সাহায্য নিন",
    icon: <HelpCircle className="h-6 w-6 text-green-500" />,
    link: "#",
    responseTime: "< 24 hours",
    availability: "Mon-Fri 9AM-6PM"
  },
  {
    title: "GitHub Repository",
    titlebn: "GitHub রিপোজিটরি",
    description: "Report issues and contribute to the project",
    descriptionbn: "সমস্যা রিপোর্ট করুন এবং প্রকল্পে অবদান রাখুন",
    icon: <Github className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    link: "#",
    stars: "1.2K",
    contributors: "45"
  },
  {
    title: "Official Training",
    titlebn: "অফিসিয়াল ট্রেনিং",
    description: "Government-certified training programs",
    descriptionbn: "সরকার-স্বীকৃত প্রশিক্ষণ প্রোগ্রাম",
    icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
    link: "#",
    programs: "5",
    certified: "500+ developers"
  }
];

const quickLinks = [
  { name: "Getting Started", namebn: "শুরু করা", icon: <PlayCircle className="h-4 w-4" />, link: "#" },
  { name: "Component Guidelines", namebn: "কম্পোনেন্ট নির্দেশিকা", icon: <Package className="h-4 w-4" />, link: "#" },
  { name: "Design Tokens", namebn: "ডিজাইন টোকেন", icon: <Palette className="h-4 w-4" />, link: "#" },
  { name: "Code Examples", namebn: "কোড উদাহরণ", icon: <Code className="h-4 w-4" />, link: "#" },
  { name: "Best Practices", namebn: "সর্বোত্তম অনুশীলন", icon: <CheckCircle className="h-4 w-4" />, link: "#" },
  { name: "Security Guidelines", namebn: "নিরাপত্তা নির্দেশিকা", icon: <Shield className="h-4 w-4" />, link: "#" }
];

const featuredUpdates = [
  {
    title: "New Mobile Components Released",
    titlebn: "নতুন মোবাইল কম্পোনেন্ট রিলিজ",
    date: "2024-01-22",
    type: "Component Update",
    description: "Touch-optimized components for better mobile experience"
  },
  {
    title: "Accessibility Audit Tool",
    titlebn: "প্রবেশযোগ্যতা অডিট টুল",
    date: "2024-01-20",
    type: "New Tool",
    description: "Automated accessibility checking for WCAG 2.1 compliance"
  },
  {
    title: "Bengali Typography Guide",
    titlebn: "বাংলা টাইপোগ্রাফি গাইড",
    date: "2024-01-18",
    type: "Documentation",
    description: "Complete guide for Bengali text rendering and typography"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-600 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 rounded-3xl mb-8 shadow-lg">
              <Wrench className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 leading-tight">
              Developer Resources
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6 font-bengali">
              ডেভেলপার রিসোর্স
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed">
              Everything you need to build accessible, user-friendly e-government services for Bangladesh. Tools, documentation, support, and learning resources.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mt-4 font-bengali max-w-4xl mx-auto leading-relaxed">
              বাংলাদেশের জন্য অ্যাক্সেসিবল, ব্যবহারকারী-বান্ধব ই-সরকার সেবা তৈরির জন্য আপনার প্রয়োজনীয় সবকিছু।
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-orange-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Comprehensive Tools
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-red-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  24/7 Support
                </span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-pink-100 dark:border-slate-600">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Learning Materials
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Quick Links / দ্রুত লিংক
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-200 cursor-pointer bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600"
                >
                  <CardContent className="p-4 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                        {link.icon}
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                      {link.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-bengali">
                      {link.namebn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Latest Updates / সর্বশেষ আপডেট
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredUpdates.map((update, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded">
                        {update.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {update.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {update.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bengali mb-2">
                      {update.titlebn}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {update.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Resource Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Resource Categories / রিসোর্স ক্যাটেগরি
            </h2>
            
            <div className="space-y-12">
              {resourceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {category.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-bengali text-sm">
                        {category.titlebn}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card key={resourceIndex} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                {resource.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400 font-bengali mb-2">
                                {resource.namebn}
                              </p>
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                {resource.type}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{resource.rating}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {resource.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {resource.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                              <Download className="h-4 w-4" />
                              <span>{resource.downloads}</span>
                            </div>
                            <Button variant="outline" size="small">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Channels */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Get Support / সাহায্য নিন
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        {channel.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-bengali mb-3">
                      {channel.titlebn}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {channel.description}
                    </p>
                    
                    <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                      {'members' in channel && (
                        <div className="flex items-center justify-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{channel.members} members</span>
                        </div>
                      )}
                      {'responseTime' in channel && (
                        <div className="flex items-center justify-center space-x-1">
                          <Timer className="h-3 w-3" />
                          <span>{channel.responseTime}</span>
                        </div>
                      )}
                      {'stars' in channel && (
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{channel.stars} stars</span>
                        </div>
                      )}
                      {'programs' in channel && (
                        <div className="flex items-center justify-center space-x-1">
                          <BookOpen className="h-3 w-3" />
                          <span>{channel.programs} programs</span>
                        </div>
                      )}
                    </div>

                    <Button variant="outline" size="small" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* API Status */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              System Status / সিস্টেম স্ট্যাটাস
            </h2>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">CDN Status</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">All systems operational</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">API Status</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Response time: 120ms</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Downloads</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Available worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary-500 to-bangladesh-green text-white border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Stay Updated / আপডেট থাকুন
                </h2>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  Get the latest updates on new components, tools, and resources delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <Button variant="secondary" size="large">
                    Subscribe
                    <Mail className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-primary-200 mt-4">
                  No spam, unsubscribe anytime / কোন স্প্যাম নেই, যেকোনো সময় আনসাবস্ক্রাইব করুন
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
} 
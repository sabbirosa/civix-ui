import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accessibility,
    BookOpen,
    CheckCircle,
    Code,
    Globe,
    Palette,
    Shield,
    Smartphone,
    Users,
    Zap
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "User-Centric Design",
    titlebn: "ব্যবহারকারী-কেন্দ্রিক ডিজাইন",
    description: "Designed for elderly, rural users, and those with low digital literacy",
    descriptionbn: "বয়স্ক, গ্রামীণ ব্যবহারকারী এবং কম ডিজিটাল সাক্ষরতা সম্পন্ন ব্যক্তিদের জন্য ডিজাইন করা"
  },
  {
    icon: <Accessibility className="h-6 w-6" />,
    title: "WCAG 2.1 AA Compliant",
    titlebn: "WCAG ২.১ AA সম্মত",
    description: "Meets international accessibility standards with screen reader support",
    descriptionbn: "স্ক্রিন রিডার সাপোর্ট সহ আন্তর্জাতিক অ্যাক্সেসিবিলিটি মান পূরণ করে"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile-First Responsive",
    titlebn: "মোবাইল-প্রথম রেসপন্সিভ",
    description: "Optimized for 2G/3G networks with offline capabilities",
    descriptionbn: "অফলাইন ক্ষমতা সহ ২জি/৩জি নেটওয়ার্কের জন্য অপ্টিমাইজড"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Trust",
    titlebn: "নিরাপত্তা এবং বিশ্বাস",
    description: "HTTPS enforcement with 2FA and secure transaction flows",
    descriptionbn: "২FA এবং নিরাপদ লেনদেন প্রবাহ সহ HTTPS প্রয়োগ"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Dual Language Support",
    titlebn: "দ্বি-ভাষিক সহায়তা",
    description: "Complete Bangla and English language support",
    descriptionbn: "সম্পূর্ণ বাংলা এবং ইংরেজি ভাষার সহায়তা"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "High Performance",
    titlebn: "উচ্চ কর্মক্ষমতা",
    description: "Optimized for fast loading times and smooth interactions",
    descriptionbn: "দ্রুত লোডিং সময় এবং মসৃণ ইন্টারঅ্যাকশনের জন্য অপ্টিমাইজড"
  }
];

const quickLinks = [
  {
    icon: <Code className="h-8 w-8 text-primary-500" />,
    title: "Components",
    titlebn: "কম্পোনেন্ট",
    description: "Reusable UI components with code examples",
    descriptionbn: "কোড উদাহরণ সহ পুনর্ব্যবহারযোগ্য UI কম্পোনেন্ট",
    href: "/components"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-success-500" />,
    title: "Guidelines",
    titlebn: "নির্দেশিকা",
    description: "Design principles and best practices",
    descriptionbn: "ডিজাইন নীতি এবং সর্বোত্তম অনুশীলন",
    href: "/guidelines"
  },
  {
    icon: <Palette className="h-8 w-8 text-warning-500" />,
    title: "Templates",
    titlebn: "টেমপ্লেট",
    description: "Ready-to-use page templates",
    descriptionbn: "ব্যবহারের জন্য প্রস্তুত পৃষ্ঠা টেমপ্লেট",
    href: "/templates"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-danger-500" />,
    title: "Checklist",
    titlebn: "চেকলিস্ট",
    description: "Implementation checklist for web teams",
    descriptionbn: "ওয়েব টিমের জন্য বাস্তবায়ন চেকলিস্ট",
    href: "/checklist"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-r from-bangladesh-green to-primary-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">CX</span>
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 dark:text-gray-100 mb-6">
            Civix UI
            <span className="block text-primary-500 dark:text-primary-400">E-Government Design System</span>
          </h1>
          <p className="text-xl text-secondary-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Modern UI components and design guidelines for building accessible, user-friendly 
            government digital services that serve all citizens effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/components">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/guidelines">
                View Guidelines
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Built for Modern Government
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
            Designed with accessibility, usability, and citizen-centric principles at its core
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-secondary-900 dark:text-gray-100">{feature.title}</h3>
                </div>
                <p className="text-secondary-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Explore the System
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300">
            Everything you need to build consistent, accessible e-government applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-4">
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">{link.title}</h3>
                  <p className="text-secondary-600 dark:text-gray-300 text-sm">{link.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 dark:bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Better Government Services?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start using our design system to create accessible, user-friendly e-government applications
            that serve all citizens effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/components">
                Browse Components
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-500" asChild>
              <Link href="/checklist">
                Implementation Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary-600 dark:text-gray-300">
            © 2024 Civix UI - Modern E-Government Design System. Building accessible digital services for all.
          </p>
        </div>
      </footer>
    </div>
  );
}

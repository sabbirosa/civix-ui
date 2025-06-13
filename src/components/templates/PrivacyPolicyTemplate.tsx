"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    AlertTriangle,
    Calendar,
    CheckCircle,
    Clock,
    Database,
    Eye,
    FileText,
    Globe,
    Mail,
    Phone,
    Shield,
    Users,
} from "lucide-react";
import { useState } from "react";

interface PrivacySection {
  id: string;
  title: string;
  titlebn: string;
  icon: React.ReactNode;
  content: {
    subtitle?: string;
    subtitlebn?: string;
    items: string[];
  }[];
}

const privacySections: PrivacySection[] = [
  {
    id: "information-collection",
    title: "Information We Collect",
    titlebn: "আমরা যে তথ্য সংগ্রহ করি",
    icon: <Database className="h-5 w-5" />,
    content: [
      {
        subtitle: "Personal Information:",
        subtitlebn: "ব্যক্তিগত তথ্য:",
        items: [
          "Full name, date of birth, and address",
          "National ID number and supporting documents", 
          "Contact information (phone, email)",
          "Biometric data (fingerprints, photograph)",
          "Payment information for processing fees"
        ]
      },
      {
        subtitle: "Technical Information:",
        subtitlebn: "প্রযুক্তিগত তথ্য:",
        items: [
          "IP address and browser information",
          "Login timestamps and session data",
          "Device information for security purposes"
        ]
      }
    ]
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    titlebn: "আমরা কীভাবে আপনার তথ্য ব্যবহার করি",
    icon: <Eye className="h-5 w-5" />,
    content: [
      {
        items: [
          "Processing your e-Passport application and verification",
          "Conducting background checks and security screening",
          "Communicating about application status and updates",
          "Maintaining system security and preventing fraud",
          "Complying with legal and regulatory requirements"
        ]
      }
    ]
  },
  {
    id: "data-protection",
    title: "Data Protection & Security",
    titlebn: "ডেটা সুরক্ষা এবং নিরাপত্তা",
    icon: <Shield className="h-5 w-5" />,
    content: [
      {
        subtitle: "Security Measures:",
        subtitlebn: "নিরাপত্তা ব্যবস্থা:",
        items: [
          "256-bit SSL encryption",
          "Multi-factor authentication",
          "Regular security audits",
          "Secure data centers",
          "Access control systems"
        ]
      }
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing", 
    titlebn: "তথ্য ভাগাভাগি",
    icon: <Users className="h-5 w-5" />,
    content: [
      {
        items: [
          "With government agencies for verification and security checks",
          "With authorized third-party service providers under strict contracts",
          "When required by law, court order, or legal process",
          "To protect national security or prevent fraud",
          "With your explicit consent for specific purposes"
        ]
      }
    ]
  },
  {
    id: "user-rights",
    title: "Your Rights",
    titlebn: "আপনার অধিকার",
    icon: <CheckCircle className="h-5 w-5" />,
    content: [
      {
        items: [
          "Request access to your personal data we hold",
          "Request correction of inaccurate personal data",
          "Request a copy of your data in a structured format",
          "File complaints about data handling with relevant authorities"
        ]
      }
    ]
  }
];

export default function PrivacyPolicyTemplate() {
  const [language, setLanguage] = useState<"en" | "bn">("en");

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Sample Government Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-bangladesh-green to-primary-700 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-secondary-900 dark:text-gray-100">
                  {language === "en" ? "e-Passport Bangladesh" : "ই-পাসপোর্ট বাংলাদেশ"}
                </h1>
                <p className="text-sm text-secondary-600 dark:text-gray-300">
                  {language === "en" ? "Government of Bangladesh" : "বাংলাদেশ সরকার"}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="small"
              onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "বাং" : "Eng"}</span>
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
              {language === "en" ? "Privacy Policy" : "গোপনীয়তা নীতি"}
            </h1>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "en" 
                ? "How we protect and handle your personal information"
                : "আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সুরক্ষা এবং পরিচালনা করি"
              }
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-secondary-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              {language === "en" ? "Last updated: June 13, 2025" : "সর্বশেষ আপডেট: ১ৃ জুন, ২০২৫"}
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-primary-500" />
                <span>
                  {language === "en" ? "Our Commitment to Privacy" : "গোপনীয়তার প্রতি আমাদের অঙ্গীকার"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
                {language === "en" 
                  ? "The Department of Immigration & Passports, Government of Bangladesh is committed to protecting your privacy. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use the Bangladesh e-Passport Application Portal."
                  : "বাংলাদেশ সরকারের অভিবাসন ও পাসপোর্ট বিভাগ আপনার গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আপনি বাংলাদেশ ই-পাসপোর্ট আবেদন পোর্টাল ব্যবহার করার সময় আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সুরক্ষা এবং ভাগাভাগি করি।"
                }
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-6 mb-12">
            {privacySections.map((section) => (
              <Card key={section.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      {section.icon}
                    </div>
                    <span>{language === "en" ? section.title : section.titlebn}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.content.map((contentBlock, contentIndex) => (
                      <div key={contentIndex}>
                        {contentBlock.subtitle && (
                          <h4 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                            {language === "en" ? contentBlock.subtitle : (contentBlock.subtitlebn || contentBlock.subtitle)}
                          </h4>
                        )}
                        <ul className="space-y-2">
                          {contentBlock.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary-700 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notes */}
          <Card className="mb-8 border-l-4 border-l-warning-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-warning-500" />
                <span>{language === "en" ? "Important Information" : "গুরুত্বপূর্ণ তথ্য"}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                    {language === "en" ? "Data Retention" : "ডেটা ধরে রাখা"}
                  </h4>
                  <p className="text-secondary-700 dark:text-gray-300">
                    {language === "en"
                      ? "Personal data is retained as per government regulations and legal requirements, typically for the validity period of your passport plus additional years for security purposes."
                      : "ব্যক্তিগত ডেটা সরকারি নিয়ম এবং আইনি প্রয়োজনীয়তা অনুযায়ী ধরে রাখা হয়, সাধারণত আপনার পাসপোর্টের বৈধতার সময়কাল এবং নিরাপত্তার জন্য অতিরিক্ত বছর।"
                    }
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                    {language === "en" ? "Policy Updates" : "নীতি আপডেট"}
                  </h4>
                  <p className="text-secondary-700 dark:text-gray-300">
                    {language === "en"
                      ? "This privacy policy may be updated periodically. Changes will be posted on this page with the effective date."
                      : "এই গোপনীয়তা নীতি পর্যায়ক্রমে আপডেট হতে পারে। কার্যকর তারিখ সহ এই পৃষ্ঠায় পরিবর্তনগুলি পোস্ট করা হবে।"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary-500" />
                <span>{language === "en" ? "Contact Information" : "যোগাযোগের তথ্য"}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-gray-100">
                      {language === "en" ? "Email" : "ইমেইল"}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-gray-300">privacy@epassport.gov.bd</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-gray-100">
                      {language === "en" ? "Phone" : "ফোন"}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-gray-300">16345 (9 AM - 5 PM)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-gray-100">
                      {language === "en" ? "Support Hours" : "সহায়তার সময়"}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-gray-300">
                      {language === "en" ? "Working Days Only" : "শুধুমাত্র কর্মদিবসে"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large">
                {language === "en" ? "Start Application" : "আবেদন শুরু করুন"}
              </Button>
              <Button variant="outline" size="large">
                {language === "en" ? "View Terms of Service" : "সেবার শর্তাবলী দেখুন"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
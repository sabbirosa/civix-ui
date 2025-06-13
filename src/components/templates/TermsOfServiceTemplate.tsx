"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  CreditCard,
  FileText,
  Globe,
  Mail,
  Phone,
  Scale,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";

interface TermsSection {
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

const termsSections: TermsSection[] = [
  {
    id: "service-agreement",
    title: "Service Agreement",
    titlebn: "সেবা চুক্তি",
    icon: <FileText className="h-5 w-5" />,
    content: [
      {
        items: [
          "By using the Bangladesh e-Passport Application Portal, you agree to comply with and be bound by these Terms of Service",
          "This agreement is between you and the Department of Immigration & Passports, Government of Bangladesh",
          "These terms govern your access to and use of our online passport application services",
          "All features, content, and functionality provided through our platform are subject to these terms"
        ]
      }
    ]
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    titlebn: "ব্যবহারকারীর দায়িত্ব",
    icon: <Users className="h-5 w-5" />,
    content: [
      {
        subtitle: "Accurate Information:",
        subtitlebn: "সঠিক তথ্য:",
        items: [
          "Provide truthful and accurate personal information",
          "Submit genuine and valid supporting documents",
          "Update information promptly if changes occur",
          "Verify all details before final submission"
        ]
      },
      {
        subtitle: "Account Security:",
        subtitlebn: "অ্যাকাউন্ট নিরাপত্তা:",
        items: [
          "Maintain confidentiality of login credentials",
          "Use strong passwords and enable two-factor authentication",
          "Report any unauthorized access immediately",
          "Log out from shared or public computers"
        ]
      },
      {
        subtitle: "Compliance:",
        subtitlebn: "সম্মতি:",
        items: [
          "Follow all application procedures and guidelines",
          "Attend scheduled appointments punctually",
          "Comply with all applicable laws and regulations",
          "Respect the rights of other users and staff"
        ]
      }
    ]
  },
  {
    id: "service-limitations",
    title: "Service Limitations",
    titlebn: "সেবার সীমাবদ্ধতা",
    icon: <AlertTriangle className="h-5 w-5" />,
    content: [
      {
        subtitle: "System Availability:",
        subtitlebn: "সিস্টেম উপলব্ধতা:",
        items: [
          "The system may be temporarily unavailable due to maintenance or technical issues",
          "We do not guarantee continuous service availability",
          "Scheduled maintenance will be announced in advance when possible"
        ]
      },
      {
        subtitle: "Processing Times:",
        subtitlebn: "প্রক্রিয়াকরণের সময়:",
        items: [
          "Processing times are estimates and may vary based on application volume",
          "We do not guarantee specific delivery dates",
          "Additional verification may extend processing time"
        ]
      },
      {
        subtitle: "Application Approval:",
        subtitlebn: "আবেদন অনুমোদন:",
        items: [
          "The government reserves the right to approve or reject any passport application",
          "Decisions are based on security, legal, and other valid grounds",
          "All applications are subject to verification and background checks"
        ]
      }
    ]
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    titlebn: "পেমেন্ট শর্তাবলী",
    icon: <CreditCard className="h-5 w-5" />,
    content: [
      {
        subtitle: "Fee Payment:",
        subtitlebn: "ফি পেমেন্ট:",
        items: [
          "All applicable fees must be paid in full before processing begins",
          "Fees are generally non-refundable once payment is processed",
          "Payment confirmation is required for application processing"
        ]
      },
      {
        subtitle: "Payment Methods:",
        subtitlebn: "পেমেন্ট পদ্ধতি:",
        items: [
          "Only government-approved payment methods are accepted",
          "Use of unauthorized payment channels may result in application rejection",
          "Payment receipts should be preserved for record-keeping"
        ]
      },
      {
        subtitle: "Refund Policy:",
        subtitlebn: "ফেরত নীতি:",
        items: [
          "Refunds are considered only in exceptional circumstances",
          "System errors or duplicate payments may qualify for refunds",
          "Refund requests must be submitted within specified timeframes"
        ]
      }
    ]
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    titlebn: "নিষিদ্ধ কার্যক্রম",
    icon: <XCircle className="h-5 w-5" />,
    content: [
      {
        items: [
          "Providing false or misleading information",
          "Using fake or forged documents",
          "Attempting to circumvent security measures",
          "Sharing login credentials with others",
          "Using automated systems or bots",
          "Interfering with system operations",
          "Violating any applicable laws or regulations",
          "Attempting to access unauthorized areas"
        ]
      }
    ]
  },
  {
    id: "liability-disclaimers",
    title: "Liability & Disclaimers",
    titlebn: "দায়বদ্ধতা এবং অস্বীকৃতি",
    icon: <Scale className="h-5 w-5" />,
    content: [
      {
        subtitle: "Service Disclaimer:",
        subtitlebn: "সেবা অস্বীকৃতি:",
        items: [
          "The service is provided 'as is' without warranties of any kind",
          "We do not guarantee uninterrupted or error-free service",
          "Users acknowledge the inherent risks of online services"
        ]
      },
      {
        subtitle: "Limitation of Liability:",
        subtitlebn: "দায়বদ্ধতার সীমাবদ্ধতা:",
        items: [
          "Our liability is limited to the fees paid for the service",
          "We are not liable for indirect, consequential, or incidental damages",
          "Users are responsible for maintaining backup copies of important documents"
        ]
      }
    ]
  }
];

export default function TermsOfServiceTemplate() {
  const [language, setLanguage] = useState<"en" | "bn">("en");

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Sample Government Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-bangladesh-green to-primary-700 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
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
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
              {language === "en" ? "Terms of Service" : "সেবার শর্তাবলী"}
            </h1>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "en" 
                ? "Terms and conditions for using the e-Passport application service"
                : "ই-পাসপোর্ট আবেদন সেবা ব্যবহারের শর্তাবলী"
              }
            </p>
            <div className="flex items-center justify-center mt-4 text-sm text-secondary-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              {language === "en" ? "Effective Date: June 13, 2025" : "কার্যকর তারিখ: ১৩ জুন, ২০২৫"}
            </div>
          </div>

          {/* Introduction */}
          <Card className="mb-8 border-l-4 border-l-primary-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-primary-500" />
                <span>
                  {language === "en" ? "Important Notice" : "গুরুত্বপূর্ণ নোটিশ"}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
                {language === "en" 
                  ? "Please read these Terms of Service carefully before using the Bangladesh e-Passport Application Portal. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by these terms."
                  : "বাংলাদেশ ই-পাসপোর্ট আবেদন পোর্টাল ব্যবহার করার আগে অনুগ্রহ করে এই সেবার শর্তাবলী সাবধানে পড়ুন। আমাদের সেবা অ্যাক্সেস বা ব্যবহার করে, আপনি স্বীকার করছেন যে আপনি এই শর্তাবলী পড়েছেন, বুঝেছেন এবং এতে আবদ্ধ থাকতে সম্মত।"
                }
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6 mb-12">
            {termsSections.map((section) => (
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

          {/* Termination and Modifications */}
          <Card className="mb-8 bg-gradient-to-r from-warning-50 to-danger-50 dark:from-warning-900/20 dark:to-danger-900/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-warning-500" />
                <span>{language === "en" ? "Termination & Modifications" : "সমাপ্তি এবং পরিবর্তন"}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                    {language === "en" ? "Account Termination" : "অ্যাকাউন্ট সমাপ্তি"}
                  </h4>
                  <p className="text-secondary-700 dark:text-gray-300">
                    {language === "en"
                      ? "We may suspend or terminate user accounts for violations of these terms or suspicious activities. Users will be notified of any account actions taken."
                      : "এই শর্তাবলী লঙ্ঘন বা সন্দেহজনক কার্যক্রমের জন্য আমরা ব্যবহারকারী অ্যাকাউন্ট স্থগিত বা বন্ধ করতে পারি।"
                    }
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                    {language === "en" ? "Service Changes" : "সেবা পরিবর্তন"}
                  </h4>
                  <p className="text-secondary-700 dark:text-gray-300">
                    {language === "en"
                      ? "We reserve the right to modify, suspend, or discontinue any part of the service with appropriate notice to users."
                      : "আমরা ব্যবহারকারীদের যথাযথ নোটিশ সহ সেবার যেকোনো অংশ পরিবর্তন, স্থগিত বা বন্ধ করার অধিকার সংরক্ষণ করি।"
                    }
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                    {language === "en" ? "Terms Updates" : "শর্তাবলী আপডেট"}
                  </h4>
                  <p className="text-secondary-700 dark:text-gray-300">
                    {language === "en"
                      ? "These terms may be updated periodically. Continued use of the service constitutes acceptance of modified terms."
                      : "এই শর্তাবলী পর্যায়ক্রমে আপডেট হতে পারে। সেবার অব্যাহত ব্যবহার পরিবর্তিত শর্তাবলী গ্রহণের সমতুল্য।"
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
                <span>{language === "en" ? "Legal Contact Information" : "আইনি যোগাযোগের তথ্য"}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-gray-100">
                      {language === "en" ? "Legal Email" : "আইনি ইমেইল"}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-gray-300">legal@epassport.gov.bd</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-secondary-900 dark:text-gray-100">
                      {language === "en" ? "Helpline" : "হেল্পলাইন"}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-gray-300">16345 (9 AM - 5 PM, Working Days)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-secondary-600 dark:text-gray-300">
                  {language === "en" 
                    ? "Department of Immigration & Passports, Government of the People's Republic of Bangladesh"
                    : "অভিবাসন ও পাসপোর্ট বিভাগ, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার"
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large">
                {language === "en" ? "I Accept and Start Application" : "আমি গ্রহণ করি এবং আবেদন শুরু করি"}
              </Button>
              <Button variant="outline" size="large">
                {language === "en" ? "View Privacy Policy" : "গোপনীয়তা নীতি দেখুন"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
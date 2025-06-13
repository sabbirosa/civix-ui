"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    ChevronDown,
    ChevronUp,
    Clock,
    HelpCircle,
    Mail,
    Phone,
    Search
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqCategories = [
  { id: "all", name: "All", namebn: "সব" },
  { id: "passport", name: "Passport Application", namebn: "পাসপোর্ট আবেদন" },
  { id: "documents", name: "Documents", namebn: "কাগজপত্র" },
  { id: "fees", name: "Fees & Payment", namebn: "ফি ও পেমেন্ট" },
  { id: "delivery", name: "Delivery", namebn: "সরবরাহ" },
  { id: "technical", name: "Technical Support", namebn: "কারিগরি সহায়তা" },
];

const faqData = [
  {
    id: 1,
    category: "passport",
    question: "How do I apply for a new passport?",
    questionbn: "নতুন পাসপোর্টের জন্য কিভাবে আবেদন করব?",
    answer: "To apply for a new passport, visit our online portal, fill out the application form, upload required documents, pay the fee, and schedule an appointment at your nearest passport office.",
    answerbn: "নতুন পাসপোর্টের জন্য আবেদন করতে আমাদের অনলাইন পোর্টালে যান, আবেদনপত্র পূরণ করুন, প্রয়োজনীয় কাগজপত্র আপলোড করুন, ফি প্রদান করুন এবং নিকটস্থ পাসপোর্ট অফিসে অ্যাপয়েন্টমেন্ট নির্ধারণ করুন।",
    popularity: 95,
  },
  {
    id: 2,
    category: "documents",
    question: "What documents are required for passport application?",
    questionbn: "পাসপোর্ট আবেদনের জন্য কি কি কাগজপত্র প্রয়োজন?",
    answer: "Required documents include: Birth certificate, National ID card, recent passport-sized photographs, proof of address, and educational certificates.",
    answerbn: "প্রয়োজনীয় কাগজপত্র: জন্ম নিবন্ধন সনদ, জাতীয় পরিচয়পত্র, সাম্প্রতিক পাসপোর্ট সাইজের ছবি, ঠিকানার প্রমাণ এবং শিক্ষাগত সনদপত্র।",
    popularity: 88,
  },
  {
    id: 3,
    category: "fees",
    question: "What are the passport fees?",
    questionbn: "পাসপোর্টের ফি কত?",
    answer: "Regular passport (48 pages): 3,000 BDT, Express service: 5,000 BDT, Super express: 7,500 BDT. Additional charges may apply for urgent delivery.",
    answerbn: "নিয়মিত পাসপোর্ট (৪৮ পৃষ্ঠা): ৩,০০০ টাকা, এক্সপ্রেস সেবা: ৫,০০০ টাকা, সুপার এক্সপ্রেস: ৭,৫০০ টাকা। জরুরি ডেলিভারির জন্য অতিরিক্ত চার্জ প্রযোজ্য।",
    popularity: 82,
  },
  {
    id: 4,
    category: "delivery",
    question: "How long does it take to get a passport?",
    questionbn: "পাসপোর্ট পেতে কত সময় লাগে?",
    answer: "Regular service: 21 working days, Express service: 7 working days, Super express: 3 working days from the date of application.",
    answerbn: "নিয়মিত সেবা: ২১ কার্যদিবস, এক্সপ্রেস সেবা: ৭ কার্যদিবস, সুপার এক্সপ্রেস: আবেদনের তারিখ থেকে ৩ কার্যদিবস।",
    popularity: 78,
  },
  {
    id: 5,
    category: "technical",
    question: "I'm having trouble with the online application. What should I do?",
    questionbn: "অনলাইন আবেদনে সমস্যা হচ্ছে। কি করব?",
    answer: "Clear your browser cache, try using a different browser, or contact our technical support team at support@passport.gov.bd or call 16263.",
    answerbn: "আপনার ব্রাউজার ক্যাশ পরিষ্কার করুন, ভিন্ন ব্রাউজার ব্যবহার করে দেখুন, অথবা আমাদের কারিগরি সহায়তা দলের সাথে support@passport.gov.bd এ যোগাযোগ করুন বা ১৬২৬৩ নম্বরে কল করুন।",
    popularity: 65,
  },
  {
    id: 6,
    category: "passport",
    question: "Can I renew my expired passport?",
    questionbn: "মেয়াদোত্তীর্ণ পাসপোর্ট নবায়ন করতে পারি?",
    answer: "Yes, you can renew your expired passport. The process is similar to new application but requires your old passport and may have different document requirements.",
    answerbn: "হ্যাঁ, আপনি মেয়াদোত্তীর্ণ পাসপোর্ট নবায়ন করতে পারেন। প্রক্রিয়াটি নতুন আবেদনের মতোই তবে পুরাতন পাসপোর্ট প্রয়োজন এবং ভিন্ন কাগজপত্রের প্রয়োজন হতে পারে।",
    popularity: 72,
  },
];

export default function FAQTemplate() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [language, setLanguage] = useState<"en" | "bn">("en");

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.questionbn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqData.sort((a, b) => b.popularity - a.popularity).slice(0, 5);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/templates">
                <Button variant="outline" size="small">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Templates
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-bangladesh-green rounded-lg flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-secondary-900 dark:text-gray-100">
                    {language === "en" ? "Frequently Asked Questions" : "প্রায়শই জিজ্ঞাসিত প্রশ্ন"}
                  </h1>
                  <p className="text-secondary-600 dark:text-gray-300 text-sm">
                    {language === "en" ? "Find answers to common questions about passport services" : "পাসপোর্ট সেবা সম্পর্কিত সাধারণ প্রশ্নের উত্তর খুঁজুন"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant={language === "en" ? "primary" : "outline"}
                size="small"
                onClick={() => setLanguage("en")}
              >
                English
              </Button>
              <Button
                variant={language === "bn" ? "primary" : "outline"}
                size="small"
                onClick={() => setLanguage("bn")}
              >
                বাংলা
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={language === "en" ? "Search FAQs..." : "FAQ খুঁজুন..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-gray-100 mb-4">
                  {language === "en" ? "Categories" : "বিভাগসমূহ"}
                </h3>
                <div className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? "bg-secondary-100 dark:bg-secondary-900/20 text-secondary-900 dark:text-secondary-300"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {language === "en" ? category.name : category.namebn}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Questions */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-gray-100 mb-4">
                  {language === "en" ? "Popular Questions" : "জনপ্রিয় প্রশ্ন"}
                </h3>
                <div className="space-y-3">
                  {popularFAQs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full text-left text-sm text-secondary-600 dark:text-gray-300 hover:text-secondary-900 dark:hover:text-gray-100 line-clamp-2"
                    >
                      {language === "en" ? faq.question : faq.questionbn}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* FAQ Results */}
            <div className="mb-6">
              <p className="text-secondary-600 dark:text-gray-300 mb-4">
                {language === "en" 
                  ? `Showing ${filteredFAQs.length} results`
                  : `${filteredFAQs.length}টি ফলাফল দেখানো হচ্ছে`
                }
              </p>

              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-secondary-900 dark:text-gray-100 mb-2">
                            {language === "en" ? faq.question : faq.questionbn}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 rounded">
                              {faqCategories.find(cat => cat.id === faq.category)?.[language === "en" ? "name" : "namebn"]}
                            </span>
                            <span>Popularity: {faq.popularity}%</span>
                          </div>
                        </div>
                        {expandedItems.includes(faq.id) ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedItems.includes(faq.id) && (
                        <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {language === "en" ? faq.answer : faq.answerbn}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <Card className="bg-gradient-to-r from-secondary-500 to-bangladesh-green text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === "en" ? "Still need help?" : "এখনও সাহায্য প্রয়োজন?"}
                </h3>
                <p className="text-secondary-100 mb-6">
                  {language === "en" 
                    ? "Can't find the answer you're looking for? Contact our support team for personalized assistance."
                    : "আপনার প্রয়োজনীয় উত্তর খুঁজে পাচ্ছেন না? ব্যক্তিগত সহায়তার জন্য আমাদের সাহায্য দলের সাথে যোগাযোগ করুন।"
                  }
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">16263</p>
                      <p className="text-sm text-secondary-100">
                        {language === "en" ? "Call Center" : "কল সেন্টার"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">support@passport.gov.bd</p>
                      <p className="text-sm text-secondary-100">
                        {language === "en" ? "Email Support" : "ইমেইল সাপোর্ট"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">
                        {language === "en" ? "9 AM - 5 PM" : "সকাল ৯টা - বিকাল ৫টা"}
                      </p>
                      <p className="text-sm text-secondary-100">
                        {language === "en" ? "Sunday - Thursday" : "রবিবার - বৃহস্পতিবার"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 
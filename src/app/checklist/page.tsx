"use client";

import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Check, Download, FileText, Globe, Heart, Layout, Printer, Shield, Zap } from "lucide-react";
import { useState } from "react";

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  description: string;
  priority: "high" | "medium" | "low";
}

const checklistItems: ChecklistItem[] = [
  // Security & Privacy
  {
    id: "secure-flows",
    category: "Security & Privacy",
    item: "Secure login and transaction flows implemented?",
    description: "Authentication and sensitive operations use secure protocols",
    priority: "high"
  },
  {
    id: "https-enabled",
    category: "Security & Privacy", 
    item: "HTTPS enabled with valid certificate?",
    description: "All communications are encrypted using SSL/TLS",
    priority: "high"
  },
  {
    id: "input-validation",
    category: "Security & Privacy",
    item: "Input validation and sanitization?",
    description: "All user inputs are properly validated and sanitized",
    priority: "high"
  },
  {
    id: "data-encryption",
    category: "Security & Privacy",
    item: "Data encryption at rest and transit?",
    description: "Sensitive data is encrypted when stored and transmitted",
    priority: "high"
  },
  
  // Accessibility
  {
    id: "screen-reader",
    category: "Accessibility",
    item: "All dynamic content accessible via screen reader?",
    description: "Screen readers can properly interpret and navigate all content",
    priority: "high"
  },
  {
    id: "wcag-compliance",
    category: "Accessibility",
    item: "WCAG 2.1 AA compliance verified?",
    description: "Website meets international accessibility standards",
    priority: "high"
  },
  {
    id: "keyboard-navigation",
    category: "Accessibility",
    item: "Full keyboard navigation support?",
    description: "All functionality is accessible using only a keyboard",
    priority: "high"
  },
  {
    id: "color-contrast",
    category: "Accessibility",
    item: "Color contrast ratios meet standards?",
    description: "Text has sufficient contrast for readability",
    priority: "high"
  },
  
  // Localization
  {
    id: "language-toggle",
    category: "Localization",
    item: "Bangla-English language toggle present?",
    description: "Users can switch between Bangla and English languages",
    priority: "high"
  },
  {
    id: "bengali-fonts",
    category: "Localization",
    item: "Bengali fonts load correctly?",
    description: "Bengali text displays properly across all devices",
    priority: "high"
  },
  {
    id: "cultural-appropriateness",
    category: "Localization",
    item: "Cultural appropriateness reviewed?",
    description: "Content respects local culture and traditions",
    priority: "medium"
  },
  {
    id: "local-formats",
    category: "Localization",
    item: "Local date/time formats used?",
    description: "Dates and times follow local conventions",
    priority: "medium"
  },
  
  // Performance
  {
    id: "performance-score",
    category: "Performance",
    item: "Performance score > 90 on Google Lighthouse?",
    description: "Website loads quickly and performs well according to web standards",
    priority: "high"
  },
  {
    id: "mobile-optimization",
    category: "Performance",
    item: "Optimized for 2G/3G networks?",
    description: "Site works well on slow mobile connections",
    priority: "high"
  },
  {
    id: "offline-access",
    category: "Performance",
    item: "Offline access for critical functions?",
    description: "Some functionality works even when internet connection is poor",
    priority: "medium"
  },
  {
    id: "image-optimization",
    category: "Performance",
    item: "Images optimized and compressed?",
    description: "All images are properly compressed for fast loading",
    priority: "medium"
  },
  
  // User Experience
  {
    id: "mobile-responsive",
    category: "User Experience",
    item: "Mobile-responsive design implemented?",
    description: "Website adapts to different screen sizes and works well on mobile devices",
    priority: "high"
  },
  {
    id: "navigation-consistent",
    category: "User Experience",
    item: "Navigation consistent across pages?",
    description: "Menu structure and navigation elements remain consistent throughout the site",
    priority: "high"
  },
  {
    id: "error-handling",
    category: "User Experience",
    item: "Clear error messages and recovery flows?",
    description: "Users receive helpful error messages and guidance on how to fix issues",
    priority: "medium"
  },
  {
    id: "touch-targets",
    category: "User Experience",
    item: "Touch targets minimum 44px?",
    description: "All interactive elements are large enough for touch interaction",
    priority: "high"
  },
  
  // Content & Documentation
  {
    id: "help-contact",
    category: "Content & Documentation",
    item: "Live chat/help contact available?",
    description: "Users have access to help and support during their journey",
    priority: "high"
  },
  {
    id: "tutorial-videos",
    category: "Content & Documentation",
    item: "Tutorial videos or step guides embedded?",
    description: "Users have access to instructional content to help them complete tasks",
    priority: "medium"
  },
  {
    id: "feedback-mechanism",
    category: "Content & Documentation",
    item: "User feedback mechanism implemented?",
    description: "Users can provide feedback about their experience",
    priority: "low"
  },
  {
    id: "help-documentation",
    category: "Content & Documentation",
    item: "Help documentation in both languages?",
    description: "Support materials available in English and Bengali",
    priority: "medium"
  }
];

const categoryConfig = {
  "Security & Privacy": {
    icon: Shield,
    color: "blue",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
    iconGradient: "from-blue-500 to-cyan-600",
    textColor: "text-blue-600 dark:text-blue-400",
    hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    checkboxColor: "text-blue-600"
  },
  "Accessibility": {
    icon: Accessibility,
    color: "green", 
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30",
    iconGradient: "from-green-500 to-emerald-600",
    textColor: "text-green-600 dark:text-green-400",
    hoverBg: "hover:bg-green-50 dark:hover:bg-green-900/20",
    checkboxColor: "text-green-600"
  },
  "Localization": {
    icon: Globe,
    color: "purple",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30", 
    iconGradient: "from-purple-500 to-violet-600",
    textColor: "text-purple-600 dark:text-purple-400",
    hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
    checkboxColor: "text-purple-600"
  },
  "Performance": {
    icon: Zap,
    color: "orange",
    bgGradient: "from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30",
    iconGradient: "from-orange-500 to-amber-600", 
    textColor: "text-orange-600 dark:text-orange-400",
    hoverBg: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
    checkboxColor: "text-orange-600"
  },
  "User Experience": {
    icon: Heart,
    color: "rose",
    bgGradient: "from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30",
    iconGradient: "from-rose-500 to-pink-600",
    textColor: "text-rose-600 dark:text-rose-400", 
    hoverBg: "hover:bg-rose-50 dark:hover:bg-rose-900/20",
    checkboxColor: "text-rose-600"
  },
  "Content & Documentation": {
    icon: FileText,
    color: "indigo",
    bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30",
    iconGradient: "from-indigo-500 to-blue-600",
    textColor: "text-indigo-600 dark:text-indigo-400",
    hoverBg: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20", 
    checkboxColor: "text-indigo-600"
  }
};

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleItemCheck = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const completionRate = Math.round((checkedItems.size / checklistItems.length) * 100);
  
  const highPriorityItems = checklistItems.filter(item => item.priority === "high");
  const highPriorityCompleted = highPriorityItems.filter(item => checkedItems.has(item.id)).length;

  const categorizedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-600 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-3xl mb-8 shadow-lg">
              <Layout className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
              Implementation Checklist
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6 font-bengali">
              বাস্তবায়ন চেকলিস্ট
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed">
              Essential items to verify before launching your government service. 
              Use this comprehensive checklist to ensure your e-government website follows the Civix UI
              design system standards and meets accessibility requirements.
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="mb-12 bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-2xl rounded-3xl backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-b border-slate-200 dark:border-slate-600 rounded-t-3xl">
              <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">Progress Overview</CardTitle>
              <CardDescription className="text-lg text-slate-600 dark:text-slate-400">Track your implementation progress</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">{completionRate}%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Overall Complete</div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mt-3">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${completionRate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl border border-red-200 dark:border-red-800">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    {highPriorityCompleted}/{highPriorityItems.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">High Priority Items</div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mt-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-rose-500 h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${(highPriorityCompleted / highPriorityItems.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {checkedItems.size}/{checklistItems.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Items Completed</div>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button variant="outline" size="small" className="shadow-sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="small" className="shadow-sm">
                      <Printer className="h-4 w-4 mr-2" />
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(categorizedItems).map(([category, items]) => {
              const config = categoryConfig[category as keyof typeof categoryConfig];
              const IconComponent = config.icon;
              const completedCount = items.filter(item => checkedItems.has(item.id)).length;
              
              return (
                <Card key={category} className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-600 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${config.bgGradient} border-b border-slate-200 dark:border-slate-600`}>
                    <CardTitle className={`flex items-center space-x-3 ${config.textColor}`}>
                      <div className={`p-2 bg-gradient-to-br ${config.iconGradient} rounded-xl text-white`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span>{category}</span>
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {completedCount} of {items.length} completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {items.map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-start space-x-3 cursor-pointer p-3 rounded-lg ${config.hoverBg} transition-colors`}
                        >
                          <input
                            type="checkbox"
                            checked={checkedItems.has(item.id)}
                            onChange={() => handleItemCheck(item.id)}
                            className={`mt-1 h-4 w-4 ${config.checkboxColor} border-slate-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-offset-2`}
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-1">
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed pr-2">
                                {item.item}
                              </span>
                              <Badge
                                variant={
                                  item.priority === "high"
                                    ? "destructive"
                                    : item.priority === "medium"
                                    ? "default"
                                    : "secondary"
                                }
                                className="text-xs shadow-sm flex-shrink-0"
                              >
                                {item.priority}
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="large" 
              disabled={completionRate !== 100}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-4 text-lg"
            >
              <Check className="h-5 w-5 mr-2" />
              Mark as Complete
            </Button>
            <Button 
              variant="outline" 
              size="large"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-lg px-8 py-4 text-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Report
            </Button>
          </div>

          {/* Quick Reference Footer */}
          <Card className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 border-blue-200 dark:border-slate-600 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Implementation Progress
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Key metrics for your checklist completion
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-emerald-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    {completionRate}%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Overall Complete
                  </div>
                </div>
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-red-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    {highPriorityItems.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    High Priority Items
                  </div>
                </div>
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {Object.keys(categorizedItems).length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Categories
                  </div>
                </div>
                <div className="text-center p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-purple-100 dark:border-slate-600">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    {checklistItems.length}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    Total Items
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
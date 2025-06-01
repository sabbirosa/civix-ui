"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download, Printer } from "lucide-react";
import { useState } from "react";

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  description: string;
  priority: "high" | "medium" | "low";
}

const checklistItems: ChecklistItem[] = [
  {
    id: "mobile-responsive",
    category: "Design & Layout",
    item: "Mobile-responsive design implemented?",
    description: "Website adapts to different screen sizes and works well on mobile devices",
    priority: "high"
  },
  {
    id: "language-toggle",
    category: "Localization",
    item: "Bangla-English language toggle present?",
    description: "Users can switch between Bangla and English languages",
    priority: "high"
  },
  {
    id: "navigation-consistent",
    category: "Navigation",
    item: "Navigation consistent across pages?",
    description: "Menu structure and navigation elements remain consistent throughout the site",
    priority: "high"
  },
  {
    id: "forms-autosave",
    category: "Forms",
    item: "All forms support auto-save and validation?",
    description: "Forms automatically save progress and provide real-time validation feedback",
    priority: "high"
  },
  {
    id: "help-contact",
    category: "Support",
    item: "Live chat/help contact available?",
    description: "Users have access to help and support during their journey",
    priority: "high"
  },
  {
    id: "secure-flows",
    category: "Security",
    item: "Secure login and transaction flows implemented?",
    description: "Authentication and sensitive operations use secure protocols",
    priority: "high"
  },
  {
    id: "screen-reader",
    category: "Accessibility",
    item: "All dynamic content accessible via screen reader?",
    description: "Screen readers can properly interpret and navigate all content",
    priority: "high"
  },
  {
    id: "tutorial-videos",
    category: "User Guidance",
    item: "Tutorial videos or step guides embedded?",
    description: "Users have access to instructional content to help them complete tasks",
    priority: "medium"
  },
  {
    id: "performance-score",
    category: "Performance",
    item: "Performance score > 90 on Google Lighthouse?",
    description: "Website loads quickly and performs well according to web standards",
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
    id: "error-handling",
    category: "User Experience",
    item: "Clear error messages and recovery flows?",
    description: "Users receive helpful error messages and guidance on how to fix issues",
    priority: "medium"
  },
  {
    id: "offline-access",
    category: "Performance",
    item: "Offline access for critical functions?",
    description: "Some functionality works even when internet connection is poor",
    priority: "medium"
  },
  {
    id: "feedback-mechanism",
    category: "User Experience",
    item: "User feedback mechanism implemented?",
    description: "Users can provide feedback about their experience",
    priority: "low"
  },
  {
    id: "analytics-tracking",
    category: "Analytics",
    item: "User analytics and tracking configured?",
    description: "System tracks user behavior for continuous improvement",
    priority: "medium"
  }
];

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-gray-100 mb-4">
              Implementation Checklist
            </h1>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
              Use this comprehensive checklist to ensure your e-government website follows the Civix UI
              design system standards and meets accessibility requirements.
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">Progress Overview</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">Track your implementation progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{completionRate}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Overall Complete</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${completionRate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-danger-600 dark:text-danger-400">
                    {highPriorityCompleted}/{highPriorityItems.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">High Priority Items</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="bg-danger-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(highPriorityCompleted / highPriorityItems.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-600 dark:text-success-400">
                    {checkedItems.size}/{checklistItems.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Items Completed</div>
                  <div className="flex justify-center space-x-2 mt-2">
                    <Button variant="outline" size="small">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                    <Button variant="outline" size="small">
                      <Printer className="h-4 w-4 mr-1" />
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist Categories */}
          <div className="space-y-6">
            {Object.entries(categorizedItems).map(([category, items]) => (
              <Card key={category} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100">{category}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {items.filter(item => checkedItems.has(item.id)).length} of {items.length} completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          checkedItems.has(item.id)
                            ? 'border-success-200 dark:border-success-800 bg-success-50 dark:bg-success-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => handleItemCheck(item.id)}
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            checkedItems.has(item.id)
                              ? 'border-success-500 bg-success-500'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {checkedItems.has(item.id) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className={`font-medium ${
                              checkedItems.has(item.id) 
                                ? 'text-success-800 dark:text-success-200' 
                                : 'text-gray-900 dark:text-gray-100'
                            }`}>
                              {item.item}
                            </h3>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                item.priority === 'high'
                                  ? 'bg-danger-100 dark:bg-danger-900/30 text-danger-800 dark:text-danger-200'
                                  : item.priority === 'medium'
                                  ? 'bg-warning-100 dark:bg-warning-900/30 text-warning-800 dark:text-warning-200'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                              }`}
                            >
                              {item.priority}
                            </span>
                          </div>
                          <p className={`text-sm ${
                            checkedItems.has(item.id)
                              ? 'text-success-700 dark:text-success-300'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" disabled={completionRate !== 100}>
              <Check className="h-4 w-4 mr-2" />
              Mark as Complete
            </Button>
            <Button variant="outline" size="large">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 
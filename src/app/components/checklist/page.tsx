"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  User,
  XCircle,
} from "lucide-react";
import { useState } from "react";

// Simple Badge component for demonstration
const Badge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary";
}) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
      variant === "default"
        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }`}
  >
    {children}
  </span>
);

// Checklist Component for demonstration
const Checklist = ({
  children,
  title,
  progress,
  showProgress = true,
}: {
  children: React.ReactNode;
  title: string;
  progress?: number;
  showProgress?: boolean;
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      {showProgress && progress !== undefined && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {Math.round(progress * 100)}%
        </span>
      )}
    </div>
    {showProgress && progress !== undefined && (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    )}
    <div className="space-y-2">{children}</div>
  </div>
);

const ChecklistItem = ({
  children,
  id,
  completed,
  current,
  disabled,
  required,
  onToggle,
}: {
  children: React.ReactNode;
  id: string;
  completed?: boolean;
  current?: boolean;
  disabled?: boolean;
  required?: boolean;
  onToggle: (id: string) => void;
}) => (
  <div
    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
      completed
        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
        : current
          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
          : disabled
            ? "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50"
            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
    }`}
  >
    <button
      onClick={() => !disabled && onToggle(id)}
      disabled={disabled}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
        completed
          ? "bg-green-500 border-green-500"
          : current
            ? "border-blue-500"
            : "border-gray-300 dark:border-gray-600"
      }`}
    >
      {completed && <Check className="h-3 w-3 text-white" />}
    </button>
    <div className="flex-1 text-gray-900 dark:text-gray-100">{children}</div>
    {required && <span className="text-xs text-red-500">Required</span>}
  </div>
);

export default function ChecklistPage() {
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [applicationCompleted, setApplicationCompleted] = useState<string[]>(
    []
  );
  // const [currentStep, setCurrentStep] = useState(2);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleApplicationItem = (id: string) => {
    setApplicationCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const applicationRequirements = [
    {
      id: "nid",
      title: "National ID Card / জাতীয় পরিচয়পত্র",
      description: "Upload clear copy of both sides",
      required: true,
    },
    {
      id: "birth",
      title: "Birth Certificate / জন্ম নিবন্ধন",
      description: "Certified copy from registrar office",
      required: true,
    },
    {
      id: "address",
      title: "Address Proof / ঠিকানার প্রমাণ",
      description: "Utility bill not older than 3 months",
      required: true,
    },
    {
      id: "photo",
      title: "Passport Size Photo / পাসপোর্ট সাইজ ছবি",
      description: "Recent photograph with white background",
      required: true,
    },
    {
      id: "income",
      title: "Income Certificate / আয়ের সনদ",
      description: "From competent authority (if applicable)",
      required: false,
    },
  ];

  const processingSteps = [
    {
      id: 1,
      title: "Application Received / আবেদন গৃহীত",
      description: "Your application has been submitted",
      completed: true,
    },
    {
      id: 2,
      title: "Document Verification / কাগজপত্র যাচাই",
      description: "Checking submitted documents",
      current: true,
    },
    {
      id: 3,
      title: "Background Check / পটভূমি যাচাই",
      description: "Verifying information",
    },
    {
      id: 4,
      title: "Approval Process / অনুমোদন প্রক্রিয়া",
      description: "Final review and approval",
    },
    {
      id: 5,
      title: "Certificate Ready / সনদ প্রস্তুত",
      description: "Ready for collection",
    },
  ];

  const requiredCount = applicationRequirements.filter(
    (req) => req.required
  ).length;
  const completedRequired = applicationCompleted.filter((id) =>
    applicationRequirements.find((req) => req.id === id && req.required)
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Checklist
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          An interactive checklist component for tracking completion of tasks
          and requirements in government applications, with progress indicators
          and bilingual support.
        </p>
      </div>

      {/* Basic Checklist */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Checklist
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Simple checklist with progress tracking for task completion.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="max-w-md">
            <Checklist title="Setup Tasks" progress={completedItems.length / 4}>
              <ChecklistItem
                id="install"
                completed={completedItems.includes("install")}
                onToggle={toggleItem}
              >
                Install dependencies
              </ChecklistItem>
              <ChecklistItem
                id="config"
                completed={completedItems.includes("config")}
                onToggle={toggleItem}
              >
                Configure environment
              </ChecklistItem>
              <ChecklistItem
                id="database"
                completed={completedItems.includes("database")}
                onToggle={toggleItem}
              >
                Setup database
              </ChecklistItem>
              <ChecklistItem
                id="deploy"
                completed={completedItems.includes("deploy")}
                onToggle={toggleItem}
              >
                Deploy application
              </ChecklistItem>
            </Checklist>
          </div>
        </div>
      </div>

      {/* Government Application Requirements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Application Requirements
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Document checklist for government service applications with bilingual
          labels and requirement indicators.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Trade License Application / ট্রেড লাইসেন্স আবেদন
              </CardTitle>
              <CardDescription>
                Complete all required documents / সকল আবশ্যক কাগজপত্র সংগ্রহ
                করুন
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Required documents completed: {completedRequired}/
                  {requiredCount}
                </span>
                <Badge
                  variant={
                    completedRequired === requiredCount
                      ? "default"
                      : "secondary"
                  }
                >
                  {completedRequired === requiredCount
                    ? "Complete"
                    : "In Progress"}
                </Badge>
              </div>

              <Checklist
                title="Required Documents"
                progress={
                  applicationCompleted.length / applicationRequirements.length
                }
              >
                {applicationRequirements.map((req) => (
                  <ChecklistItem
                    key={req.id}
                    id={req.id}
                    completed={applicationCompleted.includes(req.id)}
                    required={req.required}
                    onToggle={toggleApplicationItem}
                  >
                    <div>
                      <div className="font-medium">{req.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {req.description}
                      </div>
                    </div>
                  </ChecklistItem>
                ))}
              </Checklist>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Status Tracking */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Process Status Tracking
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Step-by-step process tracking for application status with visual
          progress indicators.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Application Processing Status / আবেদন প্রক্রিয়াকরণের অবস্থা
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {processingSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-start gap-4 p-4 rounded-lg border ${
                      step.completed
                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                        : step.current
                          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                          : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.completed
                          ? "bg-green-500 text-white"
                          : step.current
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {step.completed ? <Check className="h-4 w-4" /> : step.id}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                    {step.current && (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Document Collection
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              Track required documents for applications, ensure completeness
              before submission
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Process Tracking
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              Monitor application status, verification stages, approval
              processes
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <User className="h-5 w-5 mr-2" />
              User Onboarding
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Guide new users through setup steps, profile completion,
              verification tasks
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Compliance Audits
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              Ensure regulatory compliance, track mandatory requirements, audit
              trails
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Best Practices
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Organization & Structure
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Group related items logically and use clear section headers
              </li>
              <li>• Show progress indicators to motivate completion</li>
              <li>• Distinguish between required and optional items clearly</li>
              <li>• Provide estimated completion times for complex tasks</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Provide immediate visual feedback for completed items</li>
              <li>• Allow users to easily undo completed items if needed</li>
              <li>• Use descriptive labels and helpful context information</li>
              <li>• Support keyboard navigation and screen readers</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Government Standards
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Include bilingual labels for citizen accessibility</li>
              <li>• Maintain audit trails for compliance tracking</li>
              <li>• Provide clear status updates and next steps</li>
              <li>• Follow accessibility guidelines for inclusive design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Do
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use clear, action-oriented labels for each item
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Show progress indicators to motivate completion
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Distinguish between required and optional items
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide context and helpful descriptions
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Save progress automatically to prevent data loss
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use bilingual labels for government applications
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Don&apos;t
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make checklists too long without logical grouping
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use vague or ambiguous item descriptions
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Hide required items among optional ones
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Allow users to proceed without required items
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Forget to save user progress between sessions
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Overwhelm users with too many items at once
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          API Reference
        </h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Component
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Props
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Type
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  Checklist
                </td>
                <td className="p-4 font-mono text-sm text-gray-600 dark:text-gray-300">
                  title
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  The checklist title
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  Checklist
                </td>
                <td className="p-4 font-mono text-sm text-gray-600 dark:text-gray-300">
                  progress
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  number (0-1)
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Completion percentage
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  ChecklistItem
                </td>
                <td className="p-4 font-mono text-sm text-gray-600 dark:text-gray-300">
                  completed
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Whether item is completed
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  ChecklistItem
                </td>
                <td className="p-4 font-mono text-sm text-gray-600 dark:text-gray-300">
                  required
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Whether item is required
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  ChecklistItem
                </td>
                <td className="p-4 font-mono text-sm text-gray-600 dark:text-gray-300">
                  onToggle
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  (id: string) =&gt; void
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Callback when item is toggled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Accessibility
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• Full keyboard navigation support with Tab and Space keys</li>
            <li>• Screen reader announcements for completion status changes</li>
            <li>• ARIA labels and roles for proper component identification</li>
            <li>• High contrast mode support for all visual states</li>
            <li>• Clear focus indicators that meet WCAG standards</li>
            <li>• Progress updates announced to assistive technologies</li>
            <li>• Required field indicators accessible to screen readers</li>
            <li>• Logical tab order through checklist items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

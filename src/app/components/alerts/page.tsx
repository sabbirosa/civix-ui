"use client";

import { Button } from "@/components/ui/button";
import {
    AlertCircle,
    AlertTriangle,
    Check,
    CheckCircle,
    Info,
    MessageSquare,
    Shield,
    X,
    XCircle,
} from "lucide-react";
import { useState } from "react";

export default function AlertsPage() {
  const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([]);

  const dismissAlert = (id: number) => {
    setDismissedAlerts([...dismissedAlerts, id]);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Alerts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Contextual feedback messages for user actions with multiple variants
          and customizable content for government applications.
        </p>
      </div>

      {/* Basic Alerts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Alerts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Standard alert variants for different types of messages and user
          feedback.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div className="border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                    Information
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                    This is a general information message.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100">
                    Success
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                    Your action was completed successfully.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">
                    Warning
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm mt-1">
                    Please review the information before proceeding.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-start">
                <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-100">
                    Error
                  </h3>
                  <p className="text-red-800 dark:text-red-200 text-sm mt-1">
                    Something went wrong. Please try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Service Alerts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Service Alerts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-world examples of alerts used in government services with
          bilingual content.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            {/* Service Maintenance */}
            <div className="border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">
                    Service Maintenance
                  </h3>
                  <div className="text-yellow-800 dark:text-yellow-200 text-sm mt-1">
                    <p>
                      The passport application system will be under maintenance
                      on Sunday, 2:00 AM - 6:00 AM.
                    </p>
                    <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                      পাসপোর্ট আবেদন সিস্টেম রবিবার ভোর ২টা থেকে ৬টা পর্যন্ত
                      রক্ষণাবেক্ষণের কাজে বন্ধ থাকবে।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Approved */}
            <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100">
                    Application Approved
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                    Your birth certificate application (ID: BC-2024-001234) has
                    been approved. You can collect it from the registrar office
                    within 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Documents Required */}
            <div className="border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                    Additional Documents Required
                  </h3>
                  <div className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                    <p>
                      Please submit the following documents to complete your
                      application:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Updated utility bill (not older than 3 months)</li>
                      <li>• Passport size photograph</li>
                      <li>• Attested copy of National ID</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Failed */}
            <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-start">
                <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-100">
                    Payment Failed
                  </h3>
                  <p className="text-red-800 dark:text-red-200 text-sm mt-1">
                    Your payment could not be processed. Please check your
                    payment details and try again.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="small"
                      variant="outline"
                      className="text-red-700 border-red-300 hover:bg-red-100"
                    >
                      Retry Payment
                    </Button>
                    <Button
                      size="small"
                      variant="ghost"
                      className="text-red-700 hover:bg-red-100"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismissible Alerts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Dismissible Alerts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Alerts that can be dismissed by users, commonly used for notifications
          and temporary messages.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            {!dismissedAlerts.includes(1) && (
              <div className="border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                        New Policy Update
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                        Updated guidelines for passport applications are now
                        available.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => dismissAlert(1)}
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {!dismissedAlerts.includes(2) && (
              <div className="border border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-orange-900 dark:text-orange-100">
                        Session Expires Soon
                      </h3>
                      <p className="text-orange-800 dark:text-orange-200 text-sm mt-1">
                        Your session will expire in 5 minutes. Please save your
                        work.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => dismissAlert(2)}
                    className="text-orange-500 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 ml-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                System Notifications
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
                Service maintenance, policy updates, system announcements
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Success Feedback
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                Application submissions, payments processed, documents approved
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Warnings & Validation
              </h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
                Form errors, missing documents, deadline reminders
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Alerts
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
                Login attempts, password changes, account security notifications
              </p>
            </div>
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
              Content & Messaging
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Use clear, concise language that citizens can easily
                understand
              </li>
              <li>• Provide specific next steps or actions users can take</li>
              <li>• Include bilingual content for government services</li>
              <li>
                • Use appropriate severity levels for different message types
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              Visual Design
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Use consistent color coding across alert types</li>
              <li>• Include appropriate icons to reinforce message type</li>
              <li>• Maintain sufficient contrast ratios for accessibility</li>
              <li>• Position alerts prominently but not disruptively</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Allow users to dismiss non-critical alerts</li>
              <li>• Show alerts at the right time in user workflows</li>
              <li>• Provide persistent alerts for critical system messages</li>
              <li>• Include action buttons when users can resolve issues</li>
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
          <div className="space-y-4 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Do
            </h3>
            <ul className="space-y-3 text-green-700 dark:text-green-200">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use appropriate alert types for different message severities
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide clear, actionable messages and next steps
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include bilingual content for government services
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Make critical alerts persistent and non-dismissible
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use consistent styling and positioning
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include relevant icons to support understanding
              </li>
            </ul>
          </div>
          <div className="space-y-4 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Don&apos;t
            </h3>
            <ul className="space-y-3 text-red-700 dark:text-red-200">
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use error alerts for non-critical information
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Show multiple alerts of the same type simultaneously
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make all alerts dismissible without considering importance
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use vague or technical error messages
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Place alerts in locations where they might be missed
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Auto-dismiss critical security or error alerts
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Component Specifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed specifications and characteristics of the Alert component for implementation guidance.
        </p>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Specification
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                    Details
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                    Purpose & Usage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Component Type
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Notification Element
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Displays important messages, warnings, and status information to users
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Complexity Level
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Medium
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Moderate complexity with state management and dismissal functionality
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Alert Types
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Info, Success, Warning, Error, Announcement
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Different alert variants to communicate various message types and urgency levels
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Behavior Options
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Dismissible, Auto-dismiss, Persistent, Action buttons
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Flexible interaction patterns for different notification scenarios
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Visual Elements
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Icons, Color coding, Typography hierarchy, Action buttons
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Clear visual indicators to help users quickly understand message importance
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    ARIA roles, Screen reader announcements, Keyboard navigation, Focus management
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures important messages reach all citizens including those with disabilities
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Language Support
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    English, Bengali (বাংলা)
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Bilingual message content and action buttons for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Typography scale, Icon system, Animation timing
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government branding
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Positioning Options
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Inline, Toast notifications, Banner, Modal overlay
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Flexible positioning to suit different interface contexts and urgency
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Form validation, System notifications, Status updates, Emergency announcements
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Essential for communicating important information in government service applications
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Accessibility
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>
              • Alerts use appropriate ARIA roles and properties for screen
              readers
            </li>
            <li>
              • Color coding is supplemented with icons and text for color-blind
              users
            </li>
            <li>• High contrast ratios maintained for all alert variants</li>
            <li>
              • Dismiss buttons are keyboard accessible with proper focus
              indicators
            </li>
            <li>
              • Alert content is announced to screen readers when displayed
            </li>
            <li>
              • Critical alerts remain visible until explicitly acknowledged
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

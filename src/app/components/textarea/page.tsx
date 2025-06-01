"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  CheckCircle,
  Edit,
  FileCheck,
  FileText,
  Mail,
  MessageSquare,
  Star,
  User,
  XCircle,
} from "lucide-react";

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Textarea
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Multi-line text input component for collecting detailed information in
          government applications and forms with proper validation and
          accessibility.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Simple textarea with label for collecting multi-line text input.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-2 max-w-md">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description..." />
          </div>
        </div>
      </div>

      {/* Government Form Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Form Examples
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-world examples of textareas used in government applications with
          bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            {/* Business License Application */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Trade License Application / ট্রেড লাইসেন্স আবেদন
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label
                    htmlFor="business-purpose"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
                  >
                    Business Purpose / ব্যবসার উদ্দেশ্য
                    <Star className="h-3 w-3 text-red-500" />
                  </Label>
                  <Textarea
                    id="business-purpose"
                    required
                    placeholder="Describe the nature and purpose of your business / আপনার ব্যবসার প্রকৃতি ও উদ্দেশ্য বর্ণনা করুন"
                    rows={4}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Minimum 50 characters required / সর্বনিম্ন ৫০ অক্ষর প্রয়োজন
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Address Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  Address Information / ঠিকানার তথ্য
                </CardTitle>
                <CardDescription>
                  Please provide complete address details / সম্পূর্ণ ঠিকানার
                  বিবরণ দিন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="present-address"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
                    >
                      Present Address / বর্তমান ঠিকানা
                      <Star className="h-3 w-3 text-red-500" />
                    </Label>
                    <Textarea
                      id="present-address"
                      required
                      placeholder="House/Flat No, Road, Area, Thana, District / বাড়ি/ফ্ল্যাট নং, রোড, এলাকা, থানা, জেলা"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="permanent-address"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
                    >
                      Permanent Address / স্থায়ী ঠিকানা
                      <Star className="h-3 w-3 text-red-500" />
                    </Label>
                    <Textarea
                      id="permanent-address"
                      required
                      placeholder="Village/House, Post Office, Thana, District / গ্রাম/বাড়ি, ডাকঘর, থানা, জেলা"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  Service Feedback / সেবার মতামত
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label
                    htmlFor="feedback"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Your Feedback / আপনার মতামত
                  </Label>
                  <Textarea
                    id="feedback"
                    placeholder="Please share your experience with our service / আমাদের সেবা সম্পর্কে আপনার অভিজ্ঞতা শেয়ার করুন"
                    rows={5}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Your feedback helps us improve our services / আপনার মতামত
                    আমাদের সেবার মান উন্নত করতে সাহায্য করে
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Textarea Variants */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Textarea Variants
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Different states and configurations for various use cases.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-300">
                  Default Textarea
                </Label>
                <Textarea placeholder="Enter your text here..." />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-300">
                  Required Field
                </Label>
                <Textarea required placeholder="This field is required..." />
                <p className="text-xs text-red-500">* This field is required</p>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-300">
                  With Character Limit
                </Label>
                <Textarea
                  maxLength={200}
                  placeholder="Maximum 200 characters..."
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  0/200 characters
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-300">
                  Large Textarea
                </Label>
                <Textarea
                  rows={6}
                  placeholder="Large text area for detailed information..."
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-300">
                  Disabled Textarea
                </Label>
                <Textarea disabled placeholder="This textarea is disabled" />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-300">
                  Textarea with Error
                </Label>
                <Textarea
                  error="Please provide a valid description"
                  placeholder="Text with error..."
                />
              </div>
            </div>
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
                <Edit className="h-5 w-5 mr-2" />
                Application Forms
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
                Business descriptions, project details, purpose statements,
                reasons for application
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Communication
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                Messages to authorities, complaints, feedback, explanations,
                additional information
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
                Addresses, employment history, educational background, family
                information
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
                <FileCheck className="h-5 w-5 mr-2" />
                Documentation
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
                Document descriptions, supporting evidence, case details,
                procedural notes
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
              Content Guidelines
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>• Provide clear, helpful placeholder text with examples</li>
              <li>• Include character limits when content length matters</li>
              <li>
                • Use bilingual labels and placeholders for government forms
              </li>
              <li>
                • Specify minimum character requirements for detailed fields
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>
                • Set appropriate row heights based on expected content length
              </li>
              <li>• Allow textarea to resize for user convenience</li>
              <li>• Provide real-time character counting for limited fields</li>
              <li>
                • Use consistent spacing and alignment with other form elements
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Validation & Accessibility
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Implement proper error handling and validation messages</li>
              <li>• Support both English and Bengali text input methods</li>
              <li>• Ensure proper focus management and keyboard navigation</li>
              <li>
                • Associate labels correctly for screen reader compatibility
              </li>
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
                Provide clear, descriptive labels and helpful placeholder text
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Set appropriate row heights based on expected content length
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include character limits and counters when relevant
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Support bilingual input for government applications
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Implement proper validation with clear error messages
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Allow textarea resizing for better user control
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
                Use textareas for single-line inputs or short responses
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make textareas too small for expected content length
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Forget to indicate required fields clearly
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use vague placeholder text without examples
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Disable resize functionality unnecessarily
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Ignore mobile keyboard considerations and input methods
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
                  Prop
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Type
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Default
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 dark:text-gray-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  rows
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  number
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  3
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Number of visible text lines
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  placeholder
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  undefined
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Placeholder text shown when textarea is empty
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  maxLength
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  number
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  undefined
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Maximum number of characters allowed
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  required
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Marks the textarea as required for form validation
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  disabled
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Disables the textarea field
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  error
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  undefined
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Error message to display below the textarea
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
            <li>
              • All textareas support keyboard navigation and screen readers
            </li>
            <li>
              • Labels are properly associated with textarea fields using
              htmlFor/id
            </li>
            <li>• Error states are announced to assistive technologies</li>
            <li>
              • Focus indicators are clearly visible and meet WCAG standards
            </li>
            <li>
              • Character limits and counts are accessible to screen readers
            </li>
            <li>• Required fields are marked and announced appropriately</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

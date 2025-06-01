"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Check,
  CheckCircle,
  Lock,
  Mail,
  Search,
  User,
  XCircle,
} from "lucide-react";

export default function InputPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Input
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Text input component for collecting user data with validation support
          and multiple input types for government applications.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A simple text input field for basic data collection.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Input placeholder="Enter your name" type="text" />
        </div>
      </div>

      {/* With Label */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Label
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Input field with a descriptive label for better accessibility and user
          guidance.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </div>

      {/* Input States */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Input States
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Different states of the input component including default, error, and
          disabled states.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Default Input</Label>
              <Input placeholder="Default input" />
            </div>

            <div className="space-y-2">
              <Label>Input with Error</Label>
              <Input
                placeholder="Input with error"
                error="This field is required"
              />
            </div>

            <div className="space-y-2">
              <Label>Disabled Input</Label>
              <Input placeholder="Disabled input" disabled />
            </div>
          </div>
        </div>
      </div>

      {/* Input Types */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Input Types
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Different HTML input types for various data collection needs in
          government forms.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Text Input
              </Label>
              <Input type="text" placeholder="Enter text" />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email Input
              </Label>
              <Input type="email" placeholder="Enter email" />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                Password Input
              </Label>
              <Input type="password" placeholder="Enter password" />
            </div>

            <div className="space-y-2">
              <Label>Number Input</Label>
              <Input type="number" placeholder="Enter number" />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search Input
              </Label>
              <Input type="search" placeholder="Search..." />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Date Input
              </Label>
              <Input type="date" />
            </div>
          </div>
        </div>
      </div>

      {/* Government Form Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Form Example
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A practical example showing input fields in a citizen registration
          form with bilingual labels.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Citizen Registration Form / নাগরিক নিবন্ধন ফর্ম
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Full Name (English) / পূর্ণ নাম (ইংরেজি) *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="fullNameBn"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Full Name (বাংলা) / পূর্ণ নাম (বাংলা) *
                  </Label>
                  <Input
                    id="fullNameBn"
                    type="text"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="nid"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    National ID Number / জাতীয় পরিচয়পত্র নম্বর *
                  </Label>
                  <Input
                    id="nid"
                    type="text"
                    placeholder="1234567890123"
                    maxLength={17}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="mobile"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Mobile Number / মোবাইল নম্বর *
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="01700000000"
                    maxLength={11}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Email Address / ইমেইল ঠিকানা
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="dob"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Date of Birth / জন্ম তারিখ *
                  </Label>
                  <Input id="dob" type="date" />
                </div>
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
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
                Names, addresses, phone numbers, email addresses, personal
                details
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Authentication
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                Passwords, PINs, security questions, two-factor authentication
                codes
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search & Filter
              </h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
                Application search, document lookup, service finder, citizen
                records
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Data Entry
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
                Application forms, registration data, document details,
                financial information
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
              Form Design
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>• Group related fields together logically</li>
              <li>• Use appropriate input types for data validation</li>
              <li>• Provide clear, descriptive labels for all fields</li>
              <li>• Indicate required fields with asterisks (*)</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Provide helpful placeholder text as examples</li>
              <li>• Use real-time validation for immediate feedback</li>
              <li>• Support both keyboard and touch interactions</li>
              <li>• Implement proper focus management and tab order</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Accessibility & Localization
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Include bilingual labels and placeholders</li>
              <li>• Ensure proper contrast ratios for all states</li>
              <li>• Support screen readers with proper ARIA labels</li>
              <li>• Handle different input methods and languages</li>
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
                Use appropriate input types for data validation
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide clear labels and helpful placeholder text
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Show validation errors immediately and clearly
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Support both English and Bengali text input
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use consistent spacing and alignment
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Implement proper focus indicators
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
                Use generic &quot;text&quot; type for specialized data
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make error messages vague or unhelpful
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use placeholder text as the only label
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Disable inputs without clear explanation
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Ignore mobile keyboard considerations
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use auto-focus on inputs within modals
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
                  type
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  &quot;text&quot; | &quot;email&quot; | &quot;password&quot; |
                  &quot;number&quot; | &quot;search&quot; | &quot;date&quot; |
                  &quot;tel&quot;
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  &quot;text&quot;
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  The input type for validation and keyboard behavior
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
                  Placeholder text shown when input is empty
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
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
                  Error message to display below the input
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
                  Disables the input field
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
                  Marks the input as required for form validation
                </td>
              </tr>
              <tr>
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
            <li>• All inputs support keyboard navigation and screen readers</li>
            <li>
              • Labels are properly associated with input fields using
              htmlFor/id
            </li>
            <li>• Error states are announced to assistive technologies</li>
            <li>
              • Focus indicators are clearly visible and meet WCAG standards
            </li>
            <li>
              • Input types provide appropriate virtual keyboards on mobile
            </li>
            <li>
              • Required fields are marked and announced to screen readers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

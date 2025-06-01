"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  CheckCircle,
  FileText,
  HelpCircle,
  Info,
  Shield,
  Star,
  User,
  XCircle,
} from "lucide-react";

export default function LabelPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Label
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Essential component for form accessibility and usability in government
          applications, providing clear field identification, context, and
          bilingual support for citizen services.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Essential label-input pairing for form accessibility. Always use
          htmlFor attribute to connect label with input.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-2 max-w-md">
            <Label htmlFor="email" className="text-gray-900 dark:text-gray-100">
              Email Address
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
      </div>

      {/* Required Field Indication */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Required Field Indication
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Visual indicators for required fields using star icons, essential for
          government forms and user guidance.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label
                htmlFor="nid"
                className="flex items-center gap-1 text-gray-900 dark:text-gray-100"
              >
                National ID Number
                <Star className="h-3 w-3 text-red-500" />
              </Label>
              <Input id="nid" required placeholder="Enter your NID number" />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="passport"
                className="flex items-center gap-1 text-gray-900 dark:text-gray-100"
              >
                Passport Number
                <Star className="h-3 w-3 text-red-500" />
              </Label>
              <Input
                id="passport"
                required
                placeholder="Enter passport number"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bilingual Labels */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Bilingual Labels
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Support for both English and Bengali text, crucial for government
          services in Bangladesh and inclusive citizen access.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Full Name / পূর্ণ নাম
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name / আপনার পূর্ণ নাম লিখুন"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="address"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Address / ঠিকানা
              </Label>
              <Textarea
                id="address"
                placeholder="Enter your full address / আপনার সম্পূর্ণ ঠিকানা লিখুন"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Labels with Help Text */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Labels with Help Text
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Additional context and formatting instructions to guide users in
          government forms and complex data entry.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-gray-900 dark:text-gray-100"
              >
                Mobile Number
              </Label>
              <Input id="phone" type="tel" placeholder="01XXXXXXXXX" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Format: 11 digits starting with 01 (e.g., 01712345678)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tin" className="text-gray-900 dark:text-gray-100">
                TIN Number (Optional)
              </Label>
              <Input id="tin" placeholder="123456789012" />
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Info className="h-3 w-3" />
                12-digit Tax Identification Number issued by NBR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Government Form Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Form Layout
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete form section for birth certificate application showing proper
          label usage in government context.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card className="max-w-4xl">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Birth Certificate Application / জন্ম নিবন্ধন আবেদন
              </CardTitle>
              <CardDescription>
                Please fill out all required fields / সকল আবশ্যক ক্ষেত্র পূরণ
                করুন
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="father-name"
                    className="flex items-center gap-1 text-gray-900 dark:text-gray-100"
                  >
                    Father&apos;s Name / পিতার নাম
                    <Star className="h-3 w-3 text-red-500" />
                  </Label>
                  <Input id="father-name" required />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="mother-name"
                    className="flex items-center gap-1 text-gray-900 dark:text-gray-100"
                  >
                    Mother&apos;s Name / মাতার নাম
                    <Star className="h-3 w-3 text-red-500" />
                  </Label>
                  <Input id="mother-name" required />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="birth-date"
                    className="flex items-center gap-1 text-gray-900 dark:text-gray-100"
                  >
                    Date of Birth / জন্ম তারিখ
                    <Star className="h-3 w-3 text-red-500" />
                  </Label>
                  <Input id="birth-date" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="birth-place"
                    className="text-gray-900 dark:text-gray-100"
                  >
                    Place of Birth / জন্মস্থান
                  </Label>
                  <Input id="birth-place" placeholder="District, Bangladesh" />
                </div>
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
              <User className="h-5 w-5 mr-2" />
              Personal Information Forms
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              Identity fields, contact information, family details, educational
              background, employment data
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Application Forms
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              License applications, permit requests, service registrations,
              document submissions
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security & Verification
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Authentication fields, security questions, verification codes,
              password fields
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Support & Feedback
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              Help desk forms, complaint submissions, feedback collection, user
              surveys
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
              Accessibility & Association
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Always use htmlFor attribute to associate labels with form
                controls
              </li>
              <li>
                • Provide clear, descriptive text that explains the field
                purpose
              </li>
              <li>• Ensure sufficient color contrast for all text elements</li>
              <li>• Support screen reader navigation and announcements</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              Content & Clarity
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Use concise, action-oriented language in both languages</li>
              <li>• Indicate required fields clearly with visual markers</li>
              <li>• Provide contextual help text for complex fields</li>
              <li>• Maintain consistent labeling patterns across forms</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Government Standards
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>
                • Include bilingual text (English/Bengali) for citizen
                accessibility
              </li>
              <li>• Follow government terminology and naming conventions</li>
              <li>• Provide format examples for complex data types</li>
              <li>• Ensure compliance with digital governance standards</li>
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
                Always associate labels with form controls using htmlFor
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use clear, descriptive text that explains the field purpose
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Indicate required fields with visual markers (asterisk/star)
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide bilingual labels for government applications
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include helpful context and format examples
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Maintain consistent positioning and styling
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
                Use vague or ambiguous label text
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Forget to associate labels with their inputs
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Hide required field indicators from users
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use placeholder text as a replacement for labels
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make labels too long or verbose
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use inconsistent terminology across similar fields
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
          Detailed specifications and characteristics of the Label component for
          implementation guidance.
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
                    Form Label Element
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Provides clear identification and context for form inputs
                    and controls
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Complexity Level
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Low
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Simple implementation with focus on accessibility and
                    typography
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Label Types
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Required indicators, Optional labels, Descriptive text,
                    Contextual hints
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Different label variations to communicate field requirements
                    and context
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    State Management
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Default, Associated, Required, Disabled, Error
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Visual states that reflect the associated form
                    control&apos;s status
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Association Methods
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    htmlFor attribute, Nested controls, ARIA labelling,
                    Programmatic linking
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Proper accessibility linking between labels and form
                    controls
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Screen reader support, Click-to-focus, Keyboard navigation,
                    ARIA attributes
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures form accessibility for all citizens including those
                    with disabilities
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
                    Bilingual label text support for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Typography scale, Color tokens, Spacing units, Required
                    indicators
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government
                    branding
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Typography Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Font weights, Size variations, Color variations, Text
                    truncation
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Flexible typography options to establish proper visual
                    hierarchy
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Form fields, Checkboxes, Radio buttons, File uploads, Input
                    groups
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Essential for all form elements in government service
                    applications
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
            <li>• Proper label-control association using htmlFor attribute</li>
            <li>• Screen reader support with clear field identification</li>
            <li>• Focus management that includes label context</li>
            <li>• High contrast mode compatibility for all text</li>
            <li>
              • Required field indicators are announced to assistive technology
            </li>
            <li>
              • Bilingual content supports multiple language screen readers
            </li>
            <li>• Consistent reading order and navigation patterns</li>
            <li>• Color-blind friendly visual indicators and markers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

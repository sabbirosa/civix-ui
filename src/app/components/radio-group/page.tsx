"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Building,
    Check,
    CheckCircle,
    FileText,
    Shield,
    User,
    XCircle,
} from "lucide-react";
import { useState } from "react";

export default function RadioGroupPage() {
  const [birthPlace, setBirthPlace] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [servicePreference, setServicePreference] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Radio Group
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Radio button groups for single-choice selections with clear visual
          hierarchy, accessibility support, and bilingual labels for government
          applications.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A simple radio group with multiple options. Only one option can be
          selected at a time.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="max-w-md">
            <Label className="text-base font-semibold mb-3 block text-gray-900 dark:text-gray-100">
              Choose an option:
            </Label>
            <RadioGroup defaultValue="option1" className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label
                  htmlFor="option1"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label
                  htmlFor="option2"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Option 2
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="option3" />
                <Label
                  htmlFor="option3"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Option 3
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Orientation Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Layout Options
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Radio groups can be arranged horizontally or vertically depending on
          your layout needs.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                Horizontal Layout
              </Label>
              <RadioGroup
                defaultValue="horizontal1"
                className="flex flex-row space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="horizontal1" id="horizontal1" />
                  <Label
                    htmlFor="horizontal1"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="horizontal2" id="horizontal2" />
                  <Label
                    htmlFor="horizontal2"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-semibold mb-3 block text-gray-900 dark:text-gray-100">
                Vertical Layout
              </Label>
              <RadioGroup defaultValue="vertical1" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vertical1" id="vertical1" />
                  <Label
                    htmlFor="vertical1"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Option A
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vertical2" id="vertical2" />
                  <Label
                    htmlFor="vertical2"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Option B
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vertical3" id="vertical3" />
                  <Label
                    htmlFor="vertical3"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Option C
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* Government Form Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Form Examples
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-world examples showing radio groups in government forms with
          bilingual labels and proper accessibility.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-8 max-w-2xl">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Citizenship Application / নাগরিকত্বের আবেদন
              </h3>

              <div className="space-y-6">
                {/* Place of Birth */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Place of Birth / জন্মস্থান *
                  </Label>
                  <RadioGroup
                    value={birthPlace}
                    onValueChange={setBirthPlace}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bangladesh" id="bangladesh" />
                      <Label
                        htmlFor="bangladesh"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Bangladesh / বাংলাদেশ
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outside" id="outside" />
                      <Label
                        htmlFor="outside"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Outside Bangladesh / বাংলাদেশের বাইরে
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Education Level */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Education Level / শিক্ষাগত যোগ্যতা *
                  </Label>
                  <RadioGroup
                    value={educationLevel}
                    onValueChange={setEducationLevel}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="primary" id="primary" />
                      <Label
                        htmlFor="primary"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Primary / প্রাথমিক
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="secondary" id="secondary" />
                      <Label
                        htmlFor="secondary"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Secondary / মাধ্যমিক
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="higher_secondary"
                        id="higher_secondary"
                      />
                      <Label
                        htmlFor="higher_secondary"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Higher Secondary / উচ্চ মাধ্যমিক
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bachelor" id="bachelor" />
                      <Label
                        htmlFor="bachelor"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Bachelor&apos;s / স্নাতক
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="master" id="master" />
                      <Label
                        htmlFor="master"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Master&apos;s / স্নাতকোত্তর
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Service Preference */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    Preferred Service Type / পছন্দের সেবার ধরন
                  </Label>
                  <RadioGroup
                    value={servicePreference}
                    onValueChange={setServicePreference}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label
                        htmlFor="online"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Online Service / অনলাইন সেবা
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="office" id="office" />
                      <Label
                        htmlFor="office"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Office Visit / অফিস ভিজিট
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="home" id="home" />
                      <Label
                        htmlFor="home"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Home Service / বাড়িতে সেবা
                      </Label>
                    </div>
                  </RadioGroup>
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
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Personal Information
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              Gender selection, marital status, citizenship status, employment
              type, age groups
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Form Preferences
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              Language preferences, service types, communication methods,
              document formats
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Service Categories
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Department selection, service priorities, appointment types,
              application categories
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Verification & Security
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              Authentication methods, security questions, verification types,
              access levels
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
              Option Organization
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>• Limit radio groups to 2-7 options for optimal usability</li>
              <li>
                • Order options logically (alphabetical, frequency, or
                importance)
              </li>
              <li>• Use consistent spacing between radio buttons and labels</li>
              <li>
                • Group related options together with clear section headers
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Provide clear, descriptive labels for each option</li>
              <li>• Set appropriate default selections when applicable</li>
              <li>• Use horizontal layout for yes/no or few options</li>
              <li>• Ensure adequate clickable area for touch interfaces</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Accessibility & Internationalization
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>
                • Associate labels properly with radio buttons using htmlFor
              </li>
              <li>• Support keyboard navigation with arrow keys</li>
              <li>• Provide bilingual labels for government applications</li>
              <li>
                • Ensure high contrast between selected and unselected states
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
          <div className="space-y-4 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Do
            </h3>
            <ul className="space-y-3 text-green-700 dark:text-green-200">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use for mutually exclusive single selections
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide clear, descriptive labels for each option
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Group related options logically
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Set sensible default selections when appropriate
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use bilingual labels for government forms
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Ensure proper keyboard navigation support
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
                Use for multiple selections (use checkboxes instead)
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Include too many options (consider dropdown for 8+ items)
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use vague or ambiguous option labels
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Forget to provide a &quot;None&quot; or &quot;Other&quot; option
                when needed
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Mix radio buttons with other selection types in one group
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make radio buttons too small for easy selection
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
          Detailed specifications and characteristics of the Radio Group component for implementation guidance.
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
                    Single Selection Control
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Allows users to select one option from a mutually exclusive list
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
                    Simple to implement with basic state management requirements
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Selection Pattern
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Mutually exclusive, Single choice, Required validation
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures only one option can be selected at a time
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    State Management
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Selected, Unselected, Disabled, Error, Focus
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Clear visual feedback for selection states and user interactions
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Layout Options
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Vertical stack, Horizontal row, Compact grid, Card layout
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Flexible arrangements to suit different form contexts and space
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Keyboard navigation, Screen reader support, ARIA attributes, Focus management
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures usability for all citizens including those with disabilities
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
                    Bilingual option labels and descriptions for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Typography scale, Spacing units, Border styles
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government branding
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Validation Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Required selection, Custom validation rules, Error display
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures proper selection validation for government form requirements
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Single-choice forms, Preference selection, Options selection, Configuration
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Essential for single-choice selections in government service applications
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
            <li>• Full keyboard navigation with arrow keys, Tab, and Space</li>
            <li>
              • Screen reader support with proper role and state announcements
            </li>
            <li>
              • Labels are properly associated with radio buttons using htmlFor
            </li>
            <li>
              • Focus indicators are clearly visible and meet WCAG standards
            </li>
            <li>• Radio group has proper ARIA attributes for structure</li>
            <li>• Selected state is announced to assistive technologies</li>
            <li>• High contrast mode support for all visual states</li>
            <li>• Touch targets meet minimum size requirements (44px)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle,
  Download,
  Info,
  Plus,
  Trash2,
  XCircle,
} from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Button
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Interactive button component with multiple variants, sizes, and states
          for various user actions in government applications.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          The default button with primary variant and medium size for main
          actions.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Button variant="primary" size="medium">
            Primary Button
          </Button>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Variants
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Different button styles for various use cases. Use primary for main
          actions, secondary for less important actions, outline for subtle
          actions, ghost for minimal styling, danger for destructive actions,
          and link for text-based navigation.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Sizes
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Four different sizes to match your interface needs. Small for compact
          spaces, medium for general use, large for prominent actions, and extra
          large for hero sections.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          States
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Loading and disabled states provide feedback during async operations
          and prevent user interaction when necessary.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex flex-wrap gap-3">
            <Button loading>Loading...</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Icons
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Buttons can include icons to provide visual context. Icons can be
          positioned on the left or right side of the text.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex flex-wrap gap-3">
            <Button icon={<Download className="h-4 w-4" />} iconPosition="left">
              Download
            </Button>
            <Button
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
            >
              Continue
            </Button>
            <Button variant="outline" icon={<Plus className="h-4 w-4" />}>
              Add Item
            </Button>
            <Button variant="danger" icon={<Trash2 className="h-4 w-4" />}>
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Government Application Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Application Example
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A real-world example showing buttons in a government application
          context with bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Trade License Application / ট্রেড লাইসেন্স আবেদন
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="large"
                  icon={<Plus className="h-4 w-4" />}
                >
                  Create Application / আবেদন তৈরি করুন
                </Button>

                <Button
                  variant="outline"
                  size="large"
                  icon={<Download className="h-4 w-4" />}
                >
                  Download Form / ফর্ম ডাউনলোড করুন
                </Button>

                <Button
                  variant="danger"
                  size="large"
                  icon={<Trash2 className="h-4 w-4" />}
                >
                  Delete / মুছুন
                </Button>
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
                <Info className="h-5 w-5 mr-2" />
                Primary Actions
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
                Submit forms, create applications, confirm payments, save data
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Secondary Actions
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                Cancel operations, view details, print documents, reset forms
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Destructive Actions
              </h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
                Delete applications, cancel appointments, remove documents
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Navigation Actions
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
                Navigate between steps, go to external links, open modals
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
              Button Hierarchy
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>• Use only one primary button per page or section</li>
              <li>• Place primary button on the right for form actions</li>
              <li>• Use secondary buttons for alternative actions</li>
              <li>• Group related buttons together with consistent spacing</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              Accessibility & Internationalization
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>
                • Provide bilingual text (English/Bengali) for government
                services
              </li>
              <li>• Ensure sufficient color contrast for all variants</li>
              <li>• Include proper focus indicators for keyboard navigation</li>
              <li>
                • Use clear, action-oriented labels that describe the outcome
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>
                • Show loading states for operations taking more than 1 second
              </li>
              <li>• Provide immediate feedback after button clicks</li>
              <li>• Use icons consistently to reinforce button meaning</li>
              <li>• Implement proper error handling and retry mechanisms</li>
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
                Use primary buttons for the main action on a page
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide clear, action-oriented labels
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use loading states for async operations
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include icons when they add clarity
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use consistent button sizes within a group
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Support both Bengali and English text
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
                Use multiple primary buttons on the same page
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make button text too long or vague
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use disabled state without explanation
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Mix different button sizes randomly
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use danger variant for non-destructive actions
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Forget to handle loading and error states
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
                  variant
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  "primary" | "secondary" | "outline" | "ghost" | "danger" |
                  "link"
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  "primary"
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  The visual style of the button
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  size
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  "small" | "medium" | "large" | "xl"
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  "medium"
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  The size of the button
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  loading
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Shows loading spinner and disables the button
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  icon
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  ReactNode
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  undefined
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Icon to display in the button
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  iconPosition
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  "left" | "right"
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  "left"
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Position of the icon relative to text
                </td>
              </tr>
              <tr>
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
                  Disables the button
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
              • All buttons support keyboard navigation (Tab, Enter, Space)
            </li>
            <li>• Focus states are clearly visible with ring indicators</li>
            <li>• Loading states announce changes to screen readers</li>
            <li>
              • Disabled buttons are properly marked for assistive technology
            </li>
            <li>• Color contrast meets WCAG 2.1 AA standards</li>
            <li>• Icons include appropriate aria-labels when needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

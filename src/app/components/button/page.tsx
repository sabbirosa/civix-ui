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
          <div className="space-y-4 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              Do
            </h3>
            <ul className="space-y-3 text-green-700 dark:text-green-200">
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
          <div className="space-y-4 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center">
              <XCircle className="h-5 w-5 mr-2" />
              Don&apos;t
            </h3>
            <ul className="space-y-3 text-red-700 dark:text-red-200">
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
          Component Specifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed specifications and characteristics of the Button component
          for implementation guidance.
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
                    Interactive Element
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Triggers actions and navigates users through workflows
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
                    Simple to implement and customize, suitable for basic UI
                    needs
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Variant Options
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Primary, Secondary, Outline, Ghost, Danger, Link
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Multiple styles to establish visual hierarchy and context
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Size Options
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Small, Medium, Large, Extra Large
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Adapts to different interface contexts and importance levels
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    State Management
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Default, Hover, Focus, Loading, Disabled
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Provides clear feedback for user interactions and system
                    states
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Icon Support
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Left/Right positioning, Optional
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Enhances meaning and improves visual recognition
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Keyboard navigation, Focus indicators, Screen reader support
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures usability for all citizens including those with
                    disabilities
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
                    Bilingual text support for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Typography scale, Spacing units
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government
                    branding
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Form submission, Navigation, Actions, Downloads
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Primary interface element for user-initiated actions in
                    government services
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

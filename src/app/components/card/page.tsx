"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    AlertTriangle,
    Building,
    Check,
    CheckCircle,
    Clock,
    FileText,
    Info,
    Mail,
    MapPin,
    Phone,
    User,
    Users,
    XCircle,
} from "lucide-react";

export default function CardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Card
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Flexible container component for displaying related information in
          government services and applications with proper structure and
          hierarchy.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A simple card with header and content sections for organizing
          information.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Service Title</CardTitle>
              <CardDescription>
                Brief description of the service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Content goes here...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Government Service Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Service Cards
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Card designs for displaying government services with icons, bilingual
          content, and action buttons.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Trade License Application
                </CardTitle>
                <CardDescription>
                  Apply for trade license online / অনলাইনে ট্রেড লাইসেন্সের জন্য
                  আবেদন করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>Processing Time: 7-10 business days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <User className="h-4 w-4" />
                    <span>For: Business Owners</span>
                  </div>
                  <Button className="w-full mt-4">
                    Start Application / আবেদন শুরু করুন
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <FileText className="h-5 w-5 text-green-600" />
                  Birth Certificate
                </CardTitle>
                <CardDescription>
                  Apply for birth certificate / জন্ম নিবন্ধনের জন্য আবেদন করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>Processing Time: 3-5 business days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <User className="h-4 w-4" />
                    <span>For: Citizens</span>
                  </div>
                  <Button className="w-full mt-4">
                    Start Application / আবেদন শুরু করুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Contact Information Cards
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Structured display of contact information for government offices and
          departments.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  City Corporation Office
                </CardTitle>
                <CardDescription>Dhaka South City Corporation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Nagar Bhaban, Fulbaria, Dhaka-1000
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    +880-2-7391234
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    info@dscc.gov.bd
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  Registrar General Office
                </CardTitle>
                <CardDescription>Birth & Death Registration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Agargaon, Sher-e-Bangla Nagar, Dhaka-1207
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    +880-2-8181919
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    info@bdris.gov.bd
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Status Cards
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Cards with colored indicators for displaying application status and
          important notifications.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4">
            <Card className="border-l-4 border-l-green-500 bg-green-50 dark:bg-green-900/20">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-300">
                  Application Approved
                </CardTitle>
                <CardDescription className="text-green-600 dark:text-green-400">
                  Your birth certificate application has been approved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Application ID:</strong> BC-2024-001234
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Approved Date:</strong> March 15, 2024
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Collection:</strong> Available for pickup
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-900/20">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-300">
                  Under Review
                </CardTitle>
                <CardDescription className="text-orange-600 dark:text-orange-400">
                  Your passport application is currently being reviewed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <strong>Application ID:</strong> PP-2024-005678
                  </p>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <strong>Submitted:</strong> March 10, 2024
                  </p>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <strong>Expected:</strong> 2-3 weeks
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/20">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-300">
                  Documents Required
                </CardTitle>
                <CardDescription className="text-red-600 dark:text-red-400">
                  Additional documents needed to process your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Application ID:</strong> TL-2024-009012
                  </p>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Missing:</strong> Utility bill, business plan
                  </p>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Deadline:</strong> March 25, 2024
                  </p>
                </div>
              </CardContent>
            </Card>
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
                <Building className="h-5 w-5 mr-2" />
                Service Listings
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
                Display available government services, applications, and online
                procedures
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Information Display
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm mt-2">
                Contact details, office hours, department information, and
                announcements
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Status Updates
              </h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
                Application progress, approval status, document requirements,
                notifications
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                User Dashboards
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
                Personal information, application history, saved services,
                recent activities
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
              Content Organization
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Use clear, descriptive titles that explain the service or
                information
              </li>
              <li>
                • Organize related information logically within card sections
              </li>
              <li>• Include relevant icons to improve visual understanding</li>
              <li>• Provide bilingual content for government services</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              Visual Design
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>
                • Maintain consistent spacing and alignment across all cards
              </li>
              <li>• Use color coding for status indicators and categories</li>
              <li>• Include hover effects for interactive cards</li>
              <li>• Ensure proper contrast ratios for dark and light themes</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Make cards scannable with clear visual hierarchy</li>
              <li>• Include actionable elements like buttons for next steps</li>
              <li>• Group related cards together in logical sections</li>
              <li>• Provide loading states for dynamic card content</li>
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
                Use consistent card layouts across similar content
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include clear titles and descriptions
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use color coding for status and categories
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Group related information together
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Make interactive cards clearly actionable
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Support both light and dark themes
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
                Overcrowd cards with too much information
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use vague or unclear titles and descriptions
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Mix different card styles inconsistently
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make cards too wide or narrow for content
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use colors that don&apos;t convey meaning
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Ignore accessibility and keyboard navigation
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
          Detailed specifications and characteristics of the Card component for implementation guidance.
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
                    Container Element
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Groups related content into distinct, organized sections with visual boundaries
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
                    Simple layout component with minimal state and configuration options
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Layout Structure
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Header, Content, Footer sections, Flexible composition
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Structured content organization with optional header and footer areas
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Visual Variants
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Outlined, Filled, Elevated, Flat, Interactive
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Different visual styles to establish content hierarchy and interaction states
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Content Support
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Text, Images, Forms, Lists, Actions, Media content
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Versatile container supporting various content types and layouts
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Semantic structure, Keyboard navigation, Screen reader support, Focus management
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures content accessibility for all citizens including those with disabilities
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
                    Bilingual content support including RTL considerations for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Shadow system, Border radius, Spacing units
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government branding
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Responsive Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Flexible sizing, Grid layouts, Mobile adaptation, Content overflow handling
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Adapts to different screen sizes and content volumes efficiently
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Content sections, Form groups, Service listings, Dashboard widgets, Information panels
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Fundamental layout component for organizing content in government service applications
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
            <li>• Cards support keyboard navigation when interactive</li>
            <li>• Proper heading hierarchy with CardTitle components</li>
            <li>• Color indicators are supplemented with text descriptions</li>
            <li>
              • High contrast ratios maintained for all text and backgrounds
            </li>
            <li>
              • Focus indicators are clearly visible for interactive cards
            </li>
            <li>• Screen readers can navigate card structure logically</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

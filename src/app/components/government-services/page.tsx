"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    AlertCircle,
    Building,
    Check,
    CheckCircle,
    Clock,
    Download,
    Eye,
    FileText,
    Globe,
    Shield,
    Star,
    Upload,
    User,
    Users,
    XCircle,
} from "lucide-react";
import { useState } from "react";

// Badge component for status indicators
const Badge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "success" | "warning";
}) => {
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export default function GovernmentServicesPage() {
  const [currentTab, setCurrentTab] = useState("applications");
  // const [selectedService, setSelectedService] = useState("birth-certificate");

  const services = [
    {
      id: "birth-certificate",
      title: "Birth Certificate / জন্ম নিবন্ধন",
      category: "Civil Registration",
      processing_time: "7-10 days",
      fee: "৳50",
      status: "Available",
    },
    {
      id: "passport",
      title: "Passport Application / পাসপোর্ট আবেদন",
      category: "Immigration",
      processing_time: "21-30 days",
      fee: "৳3,000",
      status: "Available",
    },
    {
      id: "trade-license",
      title: "Trade License / ট্রেড লাইসেন্স",
      category: "Business",
      processing_time: "14-21 days",
      fee: "৳500",
      status: "Available",
    },
  ];

  const recentApplications = [
    {
      id: "BC-2024-001234",
      service: "Birth Certificate",
      status: "Processing",
      submitted: "2024-01-15",
      expected: "2024-01-25",
    },
    {
      id: "PP-2024-005678",
      service: "Passport Renewal",
      status: "Document Review",
      submitted: "2024-01-10",
      expected: "2024-02-10",
    },
    {
      id: "TL-2024-009876",
      service: "Trade License",
      status: "Approved",
      submitted: "2024-01-05",
      expected: "2024-01-20",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Government Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Comprehensive examples of government service applications using Civix
          UI components, demonstrating real-world workflows and user
          interactions.
        </p>
      </div>

      {/* Service Portal Demo */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Digital Service Portal
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A complete citizen service portal showcasing various government
          services with bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6">
            {/* Portal Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                  Bangladesh Digital Services Portal
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  বাংলাদেশ ডিজিটাল সেবা পোর্টাল
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3 md:mt-0">
                <Badge variant="success">
                  <Globe className="h-3 w-3 mr-1" />
                  Online
                </Badge>
                <Button variant="outline" size="small">
                  বাংলা
                </Button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { id: "applications", label: "My Applications / আমার আবেদন" },
                { id: "services", label: "Available Services / উপলব্ধ সেবা" },
                { id: "documents", label: "Documents / কাগজপত্র" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    currentTab === tab.id
                      ? "border-blue-500 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {currentTab === "applications" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Recent Applications
                  </h4>
                  <Button size="small">
                    <FileText className="h-4 w-4 mr-2" />
                    New Application
                  </Button>
                </div>
                <div className="space-y-3">
                  {recentApplications.map((app) => (
                    <div
                      key={app.id}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {app.service}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {app.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          Submitted: {app.submitted} • Expected: {app.expected}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            app.status === "Approved"
                              ? "success"
                              : app.status === "Processing"
                                ? "warning"
                                : "default"
                          }
                        >
                          {app.status}
                        </Badge>
                        <Button variant="ghost" size="small">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentTab === "services" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">
                          {service.title}
                        </CardTitle>
                        <CardDescription>{service.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Processing Time:
                          </span>
                          <span className="font-medium">
                            {service.processing_time}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Fee:
                          </span>
                          <span className="font-medium">{service.fee}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <Badge variant="success">{service.status}</Badge>
                          <Button size="small">Apply Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {currentTab === "documents" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium text-gray-900 dark:text-gray-100">
                        Uploaded Documents
                      </h5>
                      <Button variant="outline" size="small">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>National ID Card</span>
                        <Download className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span>Birth Certificate</span>
                        <Download className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                      Quick Actions
                    </h5>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="small"
                        className="w-full justify-start"
                      >
                        <Star className="h-4 w-4 mr-2" />
                        Favorite Services
                      </Button>
                      <Button
                        variant="outline"
                        size="small"
                        className="w-full justify-start"
                      >
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Help & Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Form Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Application Form Example
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A complete application form demonstrating form components, validation,
          and step-by-step workflow.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Birth Certificate Application / জন্ম নিবন্ধন আবেদন</span>
                <Badge variant="default">Step 1 of 3</Badge>
              </CardTitle>
              <CardDescription>
                Please provide accurate information as it appears on official
                documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Personal Info
                    </div>
                  </div>
                </div>
                <div className="flex-1 mx-4 h-1 bg-gray-300 dark:bg-gray-600 rounded">
                  <div
                    className="h-1 bg-blue-500 rounded"
                    style={{ width: "33%" }}
                  ></div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-500">Documents</div>
                  </div>
                </div>
                <div className="flex-1 mx-4 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-500">Review</div>
                  </div>
                </div>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="child-name">
                    Child&apos;s Full Name / শিশুর পূর্ণ নাম *
                  </Label>
                  <Input
                    id="child-name"
                    placeholder="Enter full name as per hospital records"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="child-name-bn">
                    Child&apos;s Name in Bengali / শিশুর নাম বাংলায় *
                  </Label>
                  <Input
                    id="child-name-bn"
                    placeholder="বাংলায় পূর্ণ নাম লিখুন"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="father-name">
                    Father&apos;s Full Name / পিতার পূর্ণ নাম *
                  </Label>
                  <Input
                    id="father-name"
                    placeholder="Enter father's full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mother-name">
                    Mother&apos;s Full Name / মাতার পূর্ণ নাম *
                  </Label>
                  <Input
                    id="mother-name"
                    placeholder="Enter mother's full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birth-date">
                    Date of Birth / জন্ম তারিখ *
                  </Label>
                  <Input id="birth-date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birth-place">
                    Place of Birth / জন্মস্থান *
                  </Label>
                  <Input
                    id="birth-place"
                    placeholder="Hospital/clinic name and address"
                    required
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between pt-6">
                <Button variant="outline">Save as Draft / খসড়া সংরক্ষণ</Button>
                <Button>
                  Continue / পরবর্তী
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Service Categories
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Common government service categories with component integration
          examples.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Civil Registration
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
              Birth certificates, death certificates, marriage registration
            </p>
            <div className="text-xs text-blue-700 dark:text-blue-300">
              15 active services
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <Building className="h-8 w-8 text-green-600 dark:text-green-400 mb-4" />
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
              Business Services
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mb-4">
              Trade licenses, business registration, tax certificates
            </p>
            <div className="text-xs text-green-700 dark:text-green-300">
              23 active services
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-4" />
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
              Security Services
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mb-4">
              Police clearance, security verification, background checks
            </p>
            <div className="text-xs text-orange-700 dark:text-orange-300">
              8 active services
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
              Citizen Services
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mb-4">
              Passport, visa, national ID, social benefits
            </p>
            <div className="text-xs text-purple-700 dark:text-purple-300">
              31 active services
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
              <FileText className="h-5 w-5 mr-2" />
              Digital Service Portals
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              Complete online platforms for citizens to access multiple
              government services
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Application Workflows
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              Step-by-step application processes with form validation and
              document upload
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Status Tracking Systems
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Real-time application tracking with progress indicators and
              notifications
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Document Management
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              Secure document upload, verification, and digital certificate
              issuance
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
              User Experience Design
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Design intuitive navigation with clear service categories
              </li>
              <li>• Provide progress indicators for multi-step applications</li>
              <li>
                • Use consistent terminology across all government services
              </li>
              <li>• Implement auto-save functionality to prevent data loss</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              Accessibility & Inclusivity
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Provide bilingual support (English and Bengali)</li>
              <li>• Ensure WCAG 2.1 AA compliance for all interfaces</li>
              <li>
                • Support multiple input methods and assistive technologies
              </li>
              <li>• Use simple language and avoid technical jargon</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Security & Compliance
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Implement secure document upload with file validation</li>
              <li>
                • Provide audit trails for all user actions and data changes
              </li>
              <li>• Use encryption for sensitive personal information</li>
              <li>
                • Follow government data protection and privacy guidelines
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
                Provide clear service descriptions and requirements upfront
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use step-by-step wizards for complex applications
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Show estimated processing times and fees clearly
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide real-time validation and helpful error messages
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include help text and example formats for complex fields
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Enable users to track application status in real-time
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
                Overwhelm users with too many services on one page
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Use government jargon without explanations
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Hide required documents until the end of the process
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Make users restart applications due to session timeouts
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide vague status updates like &quot;In Progress&quot;
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Ignore mobile users or provide poor mobile experience
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
          Detailed specifications and characteristics of the Government Services component for implementation guidance.
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
                    Service Directory Interface
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Displays and organizes available government services for citizen access
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Complexity Level
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      High
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Complex implementation with search, filtering, categorization, and integration features
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Service Categories
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Licenses, Permits, Certificates, Applications, Tax services, Benefits
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Organized categorization of government services for easy discovery and access
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Search & Filter
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Text search, Category filters, Status filters, Department filters, Priority sorting
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Advanced search capabilities to help citizens find relevant services quickly
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Service Information
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Requirements, Processing time, Fees, Documents needed, Contact details
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive service details to help citizens prepare and apply efficiently
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Integration Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Application links, Status tracking, Payment integration, Document upload
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Seamless integration with service application and processing systems
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Screen reader support, Keyboard navigation, Focus management, Alternative formats
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures service accessibility for all citizens including those with disabilities
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
                    Bilingual service descriptions and instructions for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Card layouts, Icon system, Color coding, Typography hierarchy
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government branding standards
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Service discovery, Application portals, Department directories, Citizen dashboards
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Central hub for citizens to discover and access all government services and applications
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
              • Full keyboard navigation support throughout service workflows
            </li>
            <li>
              • Screen reader compatibility with proper ARIA labels and
              descriptions
            </li>
            <li>• High contrast mode support for all interface elements</li>
            <li>• Bilingual content support with proper language attributes</li>
            <li>• Clear focus indicators and logical tab order</li>
            <li>• Alternative text for all images and visual elements</li>
            <li>• Error messages that are descriptive and actionable</li>
            <li>• Skip links for users to navigate directly to main content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

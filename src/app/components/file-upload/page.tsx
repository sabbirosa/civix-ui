"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Check,
    CheckCircle,
    Cloud,
    FileText,
    Image as ImageIcon,
    Shield,
    Upload,
    Users,
    XCircle,
} from "lucide-react";

export default function FileUploadPage() {
  // const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const sampleFiles = [
    { name: "national_id.pdf", size: "2.3 MB" },
    { name: "birth_certificate.jpg", size: "1.8 MB" },
    { name: "address_proof.pdf", size: "1.2 MB" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          File Upload
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A drag-and-drop file upload component with support for multiple files,
          validation, and progress tracking for government applications and
          document submission.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Simple file upload with file type and size restrictions.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="max-w-lg">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Upload Files
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Drag and drop files here or click to browse
              </p>
              <Button variant="outline">Choose Files</Button>
              <p className="text-xs text-gray-500 mt-2">
                PDF, DOC, DOCX up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Government Document Upload */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Document Upload
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Perfect for citizen services requiring document submission with clear
          requirements and bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6 max-w-2xl">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Required Documents / প্রয়োজনীয় কাগজপত্র
              </h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• National ID Card / জাতীয় পরিচয়পত্র</li>
                <li>• Birth Certificate / জন্ম নিবন্ধন</li>
                <li>• Address Proof / ঠিকানার প্রমাণ</li>
                <li>• Income Certificate / আয়ের সনদ</li>
              </ul>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-gray-100">
                  <FileText className="h-5 w-5 mr-2" />
                  Upload Required Documents / প্রয়োজনীয় কাগজপত্র আপলোড করুন
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Drag and drop your documents here
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    or click to browse / অথবা ব্রাউজ করতে ক্লিক করুন
                  </p>
                  <Button variant="outline">
                    Choose Files / ফাইল নির্বাচন করুন
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    PDF, JPG, PNG up to 5MB each / প্রতিটি ফাইল সর্বোচ্চ ৫
                    মেগাবাইট
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Multiple File Upload */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Multiple File Upload
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Upload multiple files with progress tracking and file management
          capabilities.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="max-w-lg space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-gray-100">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Multiple File Upload
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                  <Upload className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                  <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                    Upload Multiple Files
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Select up to 10 files
                  </p>
                  <Button variant="outline" size="small">
                    Browse Files
                  </Button>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    Sample Files:
                  </h4>
                  {sampleFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm"
                    >
                      <span className="text-gray-900 dark:text-gray-100">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-500">{file.size}</span>
                    </div>
                  ))}
                  <Button size="small" className="w-full">
                    Upload All Files
                  </Button>
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
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Document Submission
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              License applications, permits, certificates, legal documents,
              compliance reports
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Citizen Services
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              Welfare applications, public records, identity verification,
              service requests
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Evidence & Complaints
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Supporting evidence, complaint documentation, incident reports,
              investigative materials
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <Cloud className="h-5 w-5 mr-2" />
              Data Collection
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              Survey responses, research data, statistical reports, public
              feedback submissions
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
              File Validation & Security
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Implement both client-side and server-side file validation
              </li>
              <li>• Scan all uploaded files for viruses and malware</li>
              <li>
                • Encrypt sensitive documents during storage and transmission
              </li>
              <li>• Set appropriate file size and type restrictions</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Provide clear visual feedback during upload progress</li>
              <li>• Show file previews and thumbnails when possible</li>
              <li>• Allow users to remove files before final submission</li>
              <li>
                • Support both drag-and-drop and traditional file selection
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Government Standards
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Follow data retention and privacy regulations</li>
              <li>• Maintain audit trails for all file uploads</li>
              <li>• Provide bilingual error messages and instructions</li>
              <li>• Ensure compliance with accessibility standards</li>
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
                Clearly specify accepted file types and size limits
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide visual feedback during upload progress
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Show file previews and thumbnails when possible
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use bilingual labels and instructions
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Validate files on both client and server side
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Provide clear error messages for rejected files
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
                Accept files without proper validation and scanning
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Upload files automatically without user confirmation
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Hide upload progress or status from users
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Allow unlimited file sizes or numbers
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Store sensitive files without encryption
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Force users to upload files one by one when batch upload is
                needed
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
          Detailed specifications and characteristics of the File Upload component for implementation guidance.
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
                    File Input Interface
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Allows users to upload documents and files to government systems
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
                    Complex implementation with file validation, progress tracking, and security features
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Upload Methods
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Drag & drop, Click to browse, Multiple file selection, Batch upload
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Flexible upload options for different user preferences and capabilities
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    File Validation
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Type restrictions, Size limits, Security scanning, Format validation
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures uploaded files meet government security and format requirements
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Progress Tracking
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Upload progress bar, File status indicators, Queue management, Error handling
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Provides clear feedback on upload status and handles errors gracefully
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Accessibility Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Keyboard navigation, Screen reader support, Focus management, ARIA labels
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Ensures file upload accessibility for all citizens including those with disabilities
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
                    Bilingual interface and error messages for government applications
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Security Features
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Virus scanning, CSRF protection, Secure storage, File encryption
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive security measures for government document handling
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Design System
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Color tokens, Typography scale, Icon system, Progress indicators
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Consistent with CivixUI design principles and government branding
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                    Use Cases
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Document submission, Form attachments, ID verification, Certificate uploads
                  </td>
                  <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                    Essential for document-based government services and applications
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
            <li>• Full keyboard navigation support with focus management</li>
            <li>
              • Screen reader announcements for upload progress and errors
            </li>
            <li>
              • ARIA labels and descriptions for upload areas and controls
            </li>
            <li>• High contrast mode support for all visual elements</li>
            <li>
              • Alternative upload methods for users unable to drag and drop
            </li>
            <li>
              • Clear error messaging that doesn&apos;t rely solely on color
            </li>
            <li>• Progress updates announced to assistive technology</li>
            <li>• File list navigation support for screen readers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

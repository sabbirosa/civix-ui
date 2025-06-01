"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  AlertCircle,
  Archive,
  Building,
  Calendar,
  Check,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  MessageSquare,
  Truck,
  UserCheck,
  Users,
  X,
  XCircle
} from "lucide-react";

// Inline Timeline Components for demonstration
const Timeline = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const TimelineItem = ({ 
  title, 
  description, 
  timestamp, 
  status,
  icon: Icon,
  details,
  action
}: {
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'current' | 'pending' | 'error' | 'warning';
  icon?: React.ComponentType<{ className?: string }>;
  details?: string;
  action?: React.ReactNode;
}) => {
  const statusConfig = {
    completed: { color: 'bg-green-500', icon: Check, textColor: 'text-green-700 dark:text-green-300' },
    current: { color: 'bg-blue-500', icon: Clock, textColor: 'text-blue-700 dark:text-blue-300' },
    pending: { color: 'bg-gray-300', icon: Clock, textColor: 'text-gray-700 dark:text-gray-300' },
    error: { color: 'bg-red-500', icon: XCircle, textColor: 'text-red-700 dark:text-red-300' },
    warning: { color: 'bg-yellow-500', icon: AlertCircle, textColor: 'text-yellow-700 dark:text-yellow-300' }
  };

  const config = statusConfig[status];
  const StatusIcon = Icon || config.icon;

  return (
    <div className="relative flex items-start space-x-4">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full ${config.color} flex items-center justify-center z-10`}>
        <StatusIcon className="h-4 w-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</h3>
          <span className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</span>
        </div>
        <p className={`text-sm ${config.textColor} mt-1`}>{description}</p>
        {details && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{details}</p>
        )}
        {action && (
          <div className="mt-3">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Timeline
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A vertical timeline component for displaying chronological events, process steps, and application status with government-specific features and bilingual support.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Basic Usage</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Create chronological displays of events with status indicators and detailed information.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Project Timeline</h3>
          <Timeline>
            <TimelineItem
              title="Project Started"
              description="Initial planning and setup completed"
              timestamp="2024-01-15"
              status="completed"
            />
            <TimelineItem
              title="Development Phase"
              description="Building core features and functionality"
              timestamp="2024-02-01"
              status="completed"
            />
            <TimelineItem
              title="Testing Phase"
              description="Quality assurance and bug fixes in progress"
              timestamp="2024-03-01"
              status="current"
            />
            <TimelineItem
              title="Deployment"
              description="Production release scheduled"
              timestamp="2024-03-15"
              status="pending"
            />
          </Timeline>
        </div>
      </div>

      {/* Government Application Tracking */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Government Application Tracking</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Track the progress of government applications with detailed status updates and bilingual descriptions.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Birth Certificate Application / জন্ম নিবন্ধন আবেদন
              </CardTitle>
              <CardDescription>
                Application ID: BC-2024-001234 / আবেদন নম্বর: BC-2024-001234
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Timeline>
                <TimelineItem
                  title="Application Submitted / আবেদন জমা"
                  description="Birth certificate application received and validated / জন্ম নিবন্ধন আবেদন গৃহীত ও যাচাই"
                  timestamp="2024-03-01 10:30 AM"
                  status="completed"
                  icon={FileText}
                  details="All required documents submitted successfully"
                />
                <TimelineItem
                  title="Document Verification / কাগজপত্র যাচাই"
                  description="Verifying submitted documents and information / জমাকৃত কাগজপত্র ও তথ্য যাচাই"
                  timestamp="2024-03-02 02:15 PM"
                  status="completed"
                  icon={UserCheck}
                  details="Documents verified by registration officer"
                />
                <TimelineItem
                  title="Processing / প্রক্রিয়াকরণ"
                  description="Application is being processed by the registration office / নিবন্ধন অফিসে আবেদন প্রক্রিয়াকরণ"
                  timestamp="2024-03-03 11:00 AM"
                  status="current"
                  icon={Activity}
                  details="Expected completion in 2-3 business days"
                  action={
                    <Button variant="outline" size="small">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Officer / অফিসারের সাথে যোগাযোগ
                    </Button>
                  }
                />
                <TimelineItem
                  title="Certificate Ready / সার্টিফিকেট প্রস্তুত"
                  description="Birth certificate ready for collection / জন্ম সার্টিফিকেট সংগ্রহের জন্য প্রস্তুত"
                  timestamp="Expected: 2024-03-05"
                  status="pending"
                  icon={CheckCircle}
                />
              </Timeline>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service History Timeline */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Citizen Service History</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete history of all government services used by a citizen with detailed records.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Service History / সেবার ইতিহাস
              </CardTitle>
              <CardDescription>
                Complete record of government services / সরকারি সেবার সম্পূর্ণ রেকর্ড
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Timeline>
                <TimelineItem
                  title="Passport Application / পাসপোর্ট আবেদন"
                  description="10-year passport application completed successfully / ১০ বছরের পাসপোর্ট আবেদন সফলভাবে সম্পন্ন"
                  timestamp="2024-02-20"
                  status="completed"
                  icon={Archive}
                  details="Passport Number: BP0123456 | Fee: ৳3,000"
                  action={
                    <Button variant="outline" size="small">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details / বিস্তারিত দেখুন
                    </Button>
                  }
                />
                <TimelineItem
                  title="Trade License Renewal / ট্রেড লাইসেন্স নবায়ন"
                  description="Annual trade license renewal for retail business / খুচরা ব্যবসার বার্ষিক ট্রেড লাইসেন্স নবায়ন"
                  timestamp="2024-01-15"
                  status="completed"
                  icon={Building}
                  details="License ID: TL-2024-5678 | Fee: ৳2,500"
                />
                <TimelineItem
                  title="Vehicle Registration / যানবাহন নিবন্ধন"
                  description="New motorcycle registration and number plate issuance / নতুন মোটরসাইকেল নিবন্ধন ও নম্বর প্লেট প্রদান"
                  timestamp="2023-12-10"
                  status="completed"
                  icon={Truck}
                  details="Registration: DHK-METRO-GA-12-3456 | Fee: ৱ৫,০০০"
                />
                <TimelineItem
                  title="Birth Certificate / জন্ম নিবন্ধন"
                  description="Original birth certificate issuance / মূল জন্ম সার্টিফিকেট প্রদান"
                  timestamp="2023-08-22"
                  status="completed"
                  icon={FileText}
                  details="Certificate ID: BC-2023-7890 | Fee: ৱ৫০"
                />
              </Timeline>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Delivery Tracking Timeline */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Document Delivery Tracking</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Track the delivery status of official documents with real-time updates.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-100">
                Document Delivery / কাগজপত্র ডেলিভারি
              </CardTitle>
              <CardDescription>
                Tracking ID: DEL-2024-001122 / ট্র্যাকিং আইডি: DEL-2024-001122
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Timeline>
                <TimelineItem
                  title="Package Prepared / প্যাকেজ প্রস্তুত"
                  description="Official documents packaged for delivery / সরকারি কাগজপত্র ডেলিভারির জন্য প্যাকেজ"
                  timestamp="2024-03-04 09:00 AM"
                  status="completed"
                  icon={Archive}
                  details="Location: Central Registration Office, Dhaka"
                />
                <TimelineItem
                  title="Out for Delivery / ডেলিভারির জন্য প্রেরণ"
                  description="Package dispatched to delivery address / প্যাকেজ ডেলিভারি ঠিকানায় প্রেরণ"
                  timestamp="2024-03-04 02:30 PM"
                  status="current"
                  icon={Truck}
                  details="Courier: Bangladesh Post | Expected delivery: Today by 6 PM"
                  action={
                    <div className="space-x-2">
                      <Button variant="outline" size="small">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Courier / কুরিয়ারের সাথে যোগাযোগ
                      </Button>
                    </div>
                  }
                />
                <TimelineItem
                  title="Delivered / ডেলিভার"
                  description="Package successfully delivered to recipient / প্যাকেজ গ্রহীতার কাছে সফলভাবে পৌঁছেছে"
                  timestamp="Expected: Today 6:00 PM"
                  status="pending"
                  icon={CheckCircle}
                />
              </Timeline>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Timeline with Different States */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Timeline States</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Different status indicators for various timeline events and their visual representations.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Timeline>
            <TimelineItem
              title="Completed Event"
              description="This event has been successfully completed"
              timestamp="2024-03-01"
              status="completed"
              icon={CheckCircle}
            />
            <TimelineItem
              title="Current/Active Event"
              description="This event is currently in progress"
              timestamp="2024-03-04"
              status="current"
              icon={Activity}
            />
            <TimelineItem
              title="Pending Event"
              description="This event is scheduled for the future"
              timestamp="2024-03-10"
              status="pending"
              icon={Clock}
            />
            <TimelineItem
              title="Warning Event"
              description="This event requires attention or has issues"
              timestamp="2024-03-12"
              status="warning"
              icon={AlertCircle}
            />
            <TimelineItem
              title="Error Event"
              description="This event failed or encountered an error"
              timestamp="2024-03-15"
              status="error"
              icon={XCircle}
            />
          </Timeline>
        </div>
      </div>

      {/* Use Cases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Application Tracking</h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Track government applications from submission to completion with real-time status updates and bilingual notifications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Process Workflows</h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Display complex government processes and approval workflows with multiple stakeholders and decision points.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Activity Logs</h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm">
                    Create audit trails and activity logs for compliance, security monitoring, and administrative oversight.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Event Chronology</h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm">
                    Display chronological events, policy changes, and historical records with detailed context and documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Best Practices</h2>
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Information Hierarchy</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li>• Use clear, descriptive titles for each timeline event</li>
                <li>• Provide concise descriptions with essential information</li>
                <li>• Include relevant timestamps and duration estimates</li>
                <li>• Add contextual details and additional actions when needed</li>
                <li>• Use appropriate status indicators for different event types</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Visual Design</h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200">
                <li>• Use consistent color coding for different status types</li>
                <li>• Implement clear visual progression from past to future</li>
                <li>• Provide adequate spacing between timeline events</li>
                <li>• Use appropriate icons to enhance understanding</li>
                <li>• Ensure good contrast for accessibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Government Standards</h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• Provide bilingual support for all timeline content</li>
                <li>• Include official reference numbers and tracking IDs</li>
                <li>• Implement proper date and time formatting</li>
                <li>• Add contact information for relevant departments</li>
                <li>• Maintain audit trails for compliance requirements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-green-900 dark:text-green-100">Do</h3>
              </div>
              <ul className="space-y-3 text-green-800 dark:text-green-200">
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Use consistent chronological order from newest to oldest</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Provide clear status indicators with appropriate colors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Include actionable items for current events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Add bilingual descriptions for government services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-0.5 text-green-600" />
                  <span>Use meaningful icons that relate to the event type</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h3 className="font-semibold text-red-900 dark:text-red-100">Don&apos;t</h3>
              </div>
              <ul className="space-y-3 text-red-800 dark:text-red-200">
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Overcrowd timeline items with too much information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Use vague or unclear status descriptions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Mix different time formats within the same timeline</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Forget to update status when events change</span>
                </li>
                <li className="flex items-start space-x-2">
                  <X className="h-4 w-4 mt-0.5 text-red-600" />
                  <span>Use inconsistent spacing or visual hierarchy</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Component Reference */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Component Reference</h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Component</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Props</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Type</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">TimelineItem</td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">title</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Event title or headline</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">description</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Event description or details</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">timestamp</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Event date and time</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">status</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">&apos;completed&apos; | &apos;current&apos; | &apos;pending&apos; | &apos;error&apos; | &apos;warning&apos;</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Event status indicator</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">icon</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">React.Component</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Custom icon component (optional)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">details</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Additional event details (optional)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 font-mono text-gray-600 dark:text-gray-300">action</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">React.ReactNode</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">Action buttons or components (optional)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Accessibility</h2>
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="space-y-4 text-blue-800 dark:text-blue-200">
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Semantic Structure</h3>
                <p>Timeline events are structured with proper heading hierarchy and semantic HTML elements for screen readers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Visual Indicators</h3>
                <p>Status information is conveyed through both color and icon indicators to support users with color vision deficiencies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Interactive Elements</h3>
                <p>All interactive timeline elements are keyboard accessible with proper focus management and ARIA attributes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Language Support</h3>
                <p>Full bilingual support with proper language attributes and reading direction for English and Bengali content.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
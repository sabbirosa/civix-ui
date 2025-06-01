"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertTriangle,
  Check,
  CheckCircle,
  Eye,
  EyeOff,
  Lock,
  Shield,
  Star,
  User,
  X,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function PasswordFieldPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const requirements = [
    {
      text: "At least 8 characters / কমপক্ষে ৮টি অক্ষর",
      test: (p: string) => p.length >= 8,
    },
    {
      text: "One uppercase letter / একটি বড় হাতের অক্ষর",
      test: (p: string) => /[A-Z]/.test(p),
    },
    {
      text: "One lowercase letter / একটি ছোট হাতের অক্ষর",
      test: (p: string) => /[a-z]/.test(p),
    },
    { text: "One number / একটি সংখ্যা", test: (p: string) => /[0-9]/.test(p) },
    {
      text: "One special character / একটি বিশেষ চিহ্ন",
      test: (p: string) => /[^A-Za-z0-9]/.test(p),
    },
  ];

  const getStrength = (pass: string) => {
    let score = 0;
    requirements.forEach((req) => {
      if (req.test(pass)) score++;
    });
    return score;
  };

  const strength = getStrength(password);
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Password Field
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Secure password input component with visibility toggle, strength
          indicator, and validation features for government applications and
          sensitive data collection.
        </p>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Simple password input with show/hide toggle functionality.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-2 max-w-md">
            <Label htmlFor="demo-password">Password</Label>
            <div className="relative">
              <Input
                id="demo-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="small"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Strength Indicator */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Password Strength Indicator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Password field with real-time strength assessment and visual feedback.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="strength-password">Create Password</Label>
              <div className="relative">
                <Input
                  id="strength-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="pr-10"
                />
                <Button
                  variant="ghost"
                  size="small"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-2 flex-1 rounded ${
                      strength >= level
                        ? strengthColors[strength - 1]
                        : "bg-gray-200 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Strength: {strengthLabels[strength - 1] || "Too Short"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Government Password Requirements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Government Password Requirements
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Password field with security requirements for government systems and
          bilingual support.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="space-y-6 max-w-2xl">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Password Requirements / পাসওয়ার্ড প্রয়োজনীয়তা
              </h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center">
                    {req.test(password) ? (
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <X className="h-4 w-4 text-gray-400 mr-2" />
                    )}
                    {req.text}
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-gray-100">
                  <Lock className="h-5 w-5 mr-2" />
                  Set Your Password / আপনার পাসওয়ার্ড সেট করুন
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label
                    htmlFor="gov-password"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
                  >
                    New Password / নতুন পাসওয়ার্ড
                    <Star className="h-3 w-3 text-red-500" />
                  </Label>
                  <div className="relative">
                    <Input
                      id="gov-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter a strong password"
                      className="pr-10"
                      required
                    />
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="gov-confirm-password"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
                  >
                    Confirm Password / পাসওয়ার্ড নিশ্চিত করুন
                    <Star className="h-3 w-3 text-red-500" />
                  </Label>
                  <div className="relative">
                    <Input
                      id="gov-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="pr-10"
                      required
                    />
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  {confirmPassword && password !== confirmPassword && (
                    <p className="text-sm text-red-600 mt-1">
                      Passwords do not match / পাসওয়ার্ড মিলছে না
                    </p>
                  )}
                </div>

                <Button
                  className="w-full"
                  disabled={
                    !password || password !== confirmPassword || strength < 3
                  }
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Set Password / পাসওয়ার্ড সেট করুন
                </Button>
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
              <Lock className="h-5 w-5 mr-2" />
              Account Security
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-2">
              User registration, password changes, profile security settings,
              two-factor authentication setup
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Government Systems
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm mt-2">
              Employee portals, citizen services, digital identity verification,
              secure document access
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              High Security Applications
            </h3>
            <p className="text-orange-800 dark:text-orange-200 text-sm mt-2">
              Healthcare systems, financial platforms, legal document
              management, sensitive data access
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Administrative Access
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-2">
              System administration, database access, configuration management,
              audit trail systems
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
              Security Implementation
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li>
                • Always hash passwords using bcrypt or similar encryption
              </li>
              <li>• Implement proper session management and invalidation</li>
              <li>• Use HTTPS for all password transmissions and forms</li>
              <li>• Apply rate limiting to prevent brute force attacks</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              User Experience
            </h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Provide real-time validation and strength indicators</li>
              <li>• Support password visibility toggle for better usability</li>
              <li>• Use clear, bilingual error messages and requirements</li>
              <li>
                • Enable password managers and proper autocomplete attributes
              </li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Compliance & Standards
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Follow government security standards and regulations</li>
              <li>• Implement proper audit logging for password changes</li>
              <li>• Support accessibility standards for screen readers</li>
              <li>• Maintain password history to prevent reuse</li>
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
                Provide clear password requirements upfront
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Use real-time validation and strength feedback
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Include show/hide password functionality
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Support bilingual labels and error messages
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Implement proper autocomplete attributes
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Follow government security standards strictly
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
                Allow weak passwords in sensitive systems
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Hide requirements until after submission
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Store passwords in plain text format
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Disable password managers or autocomplete
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Skip confirmation for password changes
              </li>
              <li className="flex items-start">
                <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                Force overly frequent password changes
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
                  value
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  &quot;&quot;
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Current password value
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  onChange
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  (value: string) =&gt; void
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Password change handler
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  showStrengthIndicator
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Show password strength indicator
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  requirements
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  ValidationRule[]
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  []
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Password validation rules
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
                  -
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Input placeholder text
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
                  Disable the password input
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm text-gray-900 dark:text-gray-100">
                  autoComplete
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  &quot;new-password&quot;
                </td>
                <td className="p-4 text-sm text-gray-600 dark:text-gray-300">
                  Browser autocomplete behavior
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
            <li>• Keyboard navigation support for all interactive elements</li>
            <li>
              • Screen reader announcements for validation messages and strength
            </li>
            <li>• ARIA labels for password visibility toggle buttons</li>
            <li>• High contrast mode support for all visual indicators</li>
            <li>• Clear focus indicators that meet WCAG standards</li>
            <li>
              • Alternative descriptions for strength meters and validation
            </li>
            <li>• Proper labeling for password confirmation fields</li>
            <li>• Error state announcements for assistive technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

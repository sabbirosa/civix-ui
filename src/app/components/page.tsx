"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Globe, Moon, Package, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";
import Link from "next/link";

const componentCategories = [
  {
    title: "Basic Components",
    description: "Essential UI building blocks for your applications",
    icon: Package,
    components: [
      { name: "Button", href: "/components/button", description: "Interactive buttons with multiple variants" },
      { name: "Input", href: "/components/input", description: "Text input fields with validation support" },
      { name: "Textarea", href: "/components/textarea", description: "Multi-line text input areas" },
      { name: "Label", href: "/components/label", description: "Labels for form controls" },
      { name: "Card", href: "/components/card", description: "Flexible content containers" },
    ],
  },
  {
    title: "Complex Components",
    description: "Advanced components for specific use cases",
    icon: Zap,
    components: [
      { name: "File Upload", href: "/components/file-upload", description: "Drag & drop file upload interface" },
      { name: "Password Field", href: "/components/password-field", description: "Secure password input with strength indicator" },
      { name: "Form Registration", href: "/components/form-registration", description: "Complete citizen registration form" },
      { name: "Alerts", href: "/components/alerts", description: "Notification and alert system" },
      { name: "Payment", href: "/components/payment", description: "Payment processing interface" },
    ],
  },
  {
    title: "Interactive Components",
    description: "Components with complex interactions and state",
    icon: Palette,
    components: [
      { name: "Checklist", href: "/components/checklist", description: "Interactive task checklists" },
      { name: "Radio Group", href: "/components/radio-group", description: "Radio button groups with custom styling" },
      { name: "Step Form", href: "/components/step-form", description: "Multi-step form wizard" },
      { name: "Timeline", href: "/components/timeline", description: "Process timeline visualization" },
    ],
  },
];

const quickLinks = [
  { name: "Guidelines", href: "/guidelines", description: "Design principles and best practices" },
  { name: "Templates", href: "/templates", description: "Pre-built page templates" },
  { name: "Resources", href: "/resources", description: "Additional resources and documentation" },
];

const features = [
  {
    icon: Shield,
    title: "Accessibility First",
    description: "Built with WCAG 2.1 AA compliance in mind, ensuring all users can access your applications."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Native support for Bengali and English, with RTL layout capabilities."
  },
  {
    icon: Users,
    title: "Government Ready",
    description: "Designed specifically for government and civic applications with appropriate patterns."
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Full dark mode support for comfortable usage in any lighting condition."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all devices and screen sizes."
  },
  {
    icon: Code,
    title: "TypeScript",
    description: "Fully typed components with excellent IDE support and autocompletion."
  }
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Introduction to CivixUI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl">
            CivixUI is a comprehensive component guideline library specifically crafted for government and civic applications. 
            Built with accessibility, multilingual support, and user experience at its core, CivixUI helps you create digital services 
            that truly serve citizens.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-800">
          <CardContent className="pt-6">
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center">
              "Empowering governments to build digital services that are accessible, inclusive, and user-friendly for all citizens."
            </blockquote>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Get Started</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Explore the different aspects of CivixUI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors bg-gray-50 dark:bg-gray-700/50"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {link.description}
                </p>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 mt-2 transition-colors" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Why CivixUI?</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            What makes CivixUI perfect for government and civic applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Component Categories */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Component Overview</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our comprehensive collection of component guidelines organized by complexity and use case.
          </p>
        </div>
        
        <div className="space-y-6">
          {componentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-gray-100">{category.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.components.map((component) => (
                      <Link
                        key={component.href}
                        href={component.href}
                        className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-md"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {component.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {component.description}
                        </p>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 mt-2 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-green-900 dark:text-green-100">Ready to Get Started?</CardTitle>
          <CardDescription className="text-green-700 dark:text-green-300">
            Begin building accessible, government-ready applications with CivixUI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/guidelines"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View Guidelines
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 dark:border-primary-700 text-base font-medium rounded-md text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Explore Templates
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

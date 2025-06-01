"use client";

import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/components" },
    ]
  },
  {
    title: "Components", 
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Input", href: "/components/input" },
      { name: "Textarea", href: "/components/textarea" },
      { name: "Label", href: "/components/label" },
      { name: "Card", href: "/components/card" },
    ]
  },
  {
    title: "Complex Components",
    items: [
      { name: "File Upload", href: "/components/file-upload" },
      { name: "Password Field", href: "/components/password-field" },
      { name: "Form Registration", href: "/components/form-registration" },
      { name: "Alerts", href: "/components/alerts" },
      { name: "Payment", href: "/components/payment" },
      { name: "Checklist", href: "/components/checklist" },
      { name: "Radio Group", href: "/components/radio-group" },
      { name: "Step Form", href: "/components/step-form" },
      { name: "Timeline", href: "/components/timeline" },
    ]
  },
  {
    title: "Examples",
    items: [
      { name: "Government Services", href: "/components/government-services" },
      { name: "Statistics", href: "/components/statistics" },
    ]
  }
];

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16">
          <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Components
                </h2>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-8">
                {navigation.map((section) => (
                  <div key={section.title}>
                    <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {section.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                              isActive
                                ? "bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
                            )}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
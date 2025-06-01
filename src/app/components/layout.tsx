"use client";

import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

// Flatten all navigation items for easier navigation
const allNavItems = navigation.flatMap(section => section.items);

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Find current item and next/previous items
  const currentIndex = allNavItems.findIndex(item => item.href === pathname);
  const previousItem = currentIndex > 0 ? allNavItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allNavItems.length - 1 ? allNavItems[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Components
            </h2>
          </div>
          
          {/* Mobile Quick Navigation */}
          <div className="flex items-center space-x-2">
            {previousItem && (
              <Link
                href={previousItem.href}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                title={`Previous: ${previousItem.name}`}
              >
                <ChevronLeft className="h-5 w-5" />
              </Link>
            )}
            <Link
              href="/"
              className="px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              Main Site
            </Link>
            {nextItem && (
              <Link
                href={nextItem.href}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                title={`Next: ${nextItem.name}`}
              >
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Components
              </h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-2 py-4 space-y-8 overflow-y-auto">
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
                          onClick={() => setMobileMenuOpen(false)}
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
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
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
          
          {/* Mobile Bottom Navigation */}
          <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-3">
            <div className="flex items-center justify-between">
              {previousItem ? (
                <Link
                  href={previousItem.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>{previousItem.name}</span>
                </Link>
              ) : (
                <div></div>
              )}
              
              <Link
                href="/"
                className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
              >
                Main Site
              </Link>
              
              {nextItem ? (
                <Link
                  href={nextItem.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>{nextItem.name}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
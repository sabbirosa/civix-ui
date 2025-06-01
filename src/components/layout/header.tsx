"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Globe, Menu, Moon, Search, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

const navigationItems = [
  { name: "Components", href: "/components", namebn: "কম্পোনেন্ট" },
  { name: "Guidelines", href: "/guidelines", namebn: "নির্দেশিকা" },
  { name: "Templates", href: "/templates", namebn: "টেমপ্লেট" },
  { name: "Resources", href: "/resources", namebn: "রিসোর্স" },
  { name: "Checklist", href: "/checklist", namebn: "চেকলিস্ট" },
];

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-gray-200 dark:border-gray-700", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-bangladesh-green to-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CX</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-semibold text-secondary-900 dark:text-gray-100">
                  {language === "en" ? "Civix UI" : "সিভিক্স UI"}
                </div>
                <div className="text-xs text-secondary-600 dark:text-gray-300">
                  {language === "en" ? "Design System" : "ডিজাইন সিস্টেম"}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-secondary-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {language === "en" ? item.name : item.namebn}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <Button variant="ghost" size="small" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="small"
              onClick={toggleTheme}
              className="flex items-center space-x-1"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="small"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">
                {language === "en" ? "বাং" : "Eng"}
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="small"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 dark:bg-gray-900/95 backdrop-blur border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === "en" ? item.name : item.namebn}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="ghost" size="small" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  {language === "en" ? "Search" : "খুঁজুন"}
                </Button>
              </div>
              <div className="px-3 py-2">
                <Button 
                  variant="ghost" 
                  size="small" 
                  className="w-full justify-start"
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      {language === "en" ? "Dark Mode" : "ডার্ক মোড"}
                    </>
                  ) : (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      {language === "en" ? "Light Mode" : "লাইট মোড"}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
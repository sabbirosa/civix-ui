import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Civix UI - Government Component Guidelines",
  description:
    "Modern, accessible, and inclusive component guidelines and UI patterns for building government digital services.",
  keywords:
    "civix ui, government component guidelines, e-government, ui guidelines, accessibility, component patterns",
  authors: [{ name: "Civix UI Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Head content moved to _document.tsx for custom fonts */}
      <body
        className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

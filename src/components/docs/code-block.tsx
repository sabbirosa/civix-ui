"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative ${className}`}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-100 text-sm font-mono rounded-t-lg border-b border-gray-700">
          <span>{filename}</span>
          <Button
            variant="ghost"
            size="small"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0 text-gray-400 hover:text-gray-100"
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      )}
      <div className="relative">
        {!filename && (
          <Button
            variant="ghost"
            size="small"
            onClick={copyToClipboard}
            className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-400 hover:text-gray-100 z-10"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
        <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto ${filename ? 'rounded-b-lg' : 'rounded-lg'} text-sm`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
} 
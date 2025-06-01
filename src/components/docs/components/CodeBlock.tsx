import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  title?: string;
  language?: string;
}

export function CodeBlock({ children, title, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      {title && (
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {title}
        </div>
      )}
      <div className="relative bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors z-10"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <pre className="text-sm text-gray-100">
          <code className={`language-${language}`}>{children}</code>
        </pre>
      </div>
    </div>
  );
} 
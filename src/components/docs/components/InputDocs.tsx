import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Copy, Mail, Search, X } from 'lucide-react';
import { useState } from 'react';

const CodeBlock = ({ children, title }: { children: string; title?: string }) => {
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
          className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <pre className="text-sm text-gray-100">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export function InputDocs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Input</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A form control for collecting user text input with various types and states.
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          Atom
        </div>
      </div>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>Interactive examples of the Input component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Input */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Basic Input</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="basic">Basic Input</Label>
                <Input id="basic" placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="Cannot edit" disabled />
              </div>
            </div>
            <CodeBlock title="Usage">
{`<div className="space-y-2">
  <Label htmlFor="basic">Basic Input</Label>
  <Input id="basic" placeholder="Enter text..." />
</div>`}
            </CodeBlock>
          </div>

          {/* Input Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Input Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Number</Label>
                <Input id="number" type="number" placeholder="123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input 
                  id="search" 
                  type="search" 
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <CodeBlock title="Usage">
{`<Input type="email" placeholder="john@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="123" />
<Input type="search" placeholder="Search..." />`}
            </CodeBlock>
          </div>

          {/* Input with Icons (Custom Implementation) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Input with Icons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="search-icon">Search with Icon</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input id="search-icon" placeholder="Search..." className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-icon">Email with Icon</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input id="email-icon" type="email" placeholder="Enter email..." className="pl-10" />
                </div>
              </div>
            </div>
            <CodeBlock title="Usage">
{`<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
  <Input placeholder="Search..." className="pl-10" />
</div>`}
            </CodeBlock>
          </div>

          {/* Input States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Input States</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="default-state">Default</Label>
                <Input id="default-state" placeholder="Default state" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error-state" className="text-red-600">Error</Label>
                <Input 
                  id="error-state" 
                  placeholder="Invalid input" 
                  className="border-red-500 focus:ring-red-500" 
                />
                <p className="text-sm text-red-600">This field is required</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="success-state" className="text-green-600">Success</Label>
                <Input 
                  id="success-state" 
                  placeholder="Valid input" 
                  className="border-green-500 focus:ring-green-500" 
                  defaultValue="john@example.com"
                />
                <p className="text-sm text-green-600">Valid email address</p>
              </div>
            </div>
            <CodeBlock title="Usage">
{`{/* Error State */}
<Input className="border-red-500 focus:ring-red-500" />
<p className="text-sm text-red-600">This field is required</p>

{/* Success State */}
<Input className="border-green-500 focus:ring-green-500" />
<p className="text-sm text-green-600">Valid email address</p>`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>Props and configuration options for Input</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Prop</th>
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Default</th>
                  <th className="text-left p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-3 font-mono">type</td>
                  <td className="p-3">"text" | "email" | "password" | "number" | "search" | etc.</td>
                  <td className="p-3">"text"</td>
                  <td className="p-3">HTML input type attribute</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">placeholder</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Placeholder text shown when empty</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">value</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Controlled input value</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">defaultValue</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Default value for uncontrolled input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">disabled</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">false</td>
                  <td className="p-3">Disables the input</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">required</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">false</td>
                  <td className="p-3">Makes the input required for form validation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">className</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Additional CSS classes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">onChange</td>
                  <td className="p-3">(event) =&gt; void</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Callback fired when value changes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Do's */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Check size={20} />
              Do's
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Always pair with labels</p>
                <p className="text-sm text-gray-600">Use Label component for accessibility and better UX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Use appropriate input types</p>
                <p className="text-sm text-gray-600">Email, password, number types improve mobile keyboards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Provide helpful placeholders</p>
                <p className="text-sm text-gray-600">Show examples or format hints in placeholder text</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Show validation states</p>
                <p className="text-sm text-gray-600">Use color and text to indicate errors or success</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Don'ts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <X size={20} />
              Don'ts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use placeholders as labels</p>
                <p className="text-sm text-gray-600">Placeholders disappear when typing and hurt accessibility</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't make inputs too narrow</p>
                <p className="text-sm text-gray-600">Users should see most of their input while typing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use vague error messages</p>
                <p className="text-sm text-gray-600">Be specific about what's wrong and how to fix it</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't disable without explanation</p>
                <p className="text-sm text-gray-600">Always explain why an input is disabled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Design System Integration</CardTitle>
          <CardDescription>How Input fits into the atomic design system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Always associate with Label using htmlFor attribute</li>
              <li>• Supports keyboard navigation and focus management</li>
              <li>• Compatible with screen readers and assistive technology</li>
              <li>• Proper ARIA attributes for validation states</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Form Integration</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>React Hook Form:</strong> Works with form validation libraries</li>
              <li>• <strong>Zod:</strong> Compatible with schema validation</li>
              <li>• <strong>Native Forms:</strong> Supports HTML5 form validation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Related Components</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Label:</strong> Required for proper labeling</li>
              <li>• <strong>Button:</strong> Often paired in forms for submission</li>
              <li>• <strong>Card:</strong> Common container for form layouts</li>
              <li>• <strong>Textarea:</strong> Alternative for multi-line text input</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
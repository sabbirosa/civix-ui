import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Copy, Download, ExternalLink, Heart, Plus, X } from 'lucide-react';
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

export function ButtonDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Button</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A fundamental interactive element that triggers actions when clicked.
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          Atom
        </div>
      </div>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>Interactive examples of the Button component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <CodeBlock title="Usage">
{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            </CodeBlock>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
            <CodeBlock title="Usage">
{`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xl">Extra Large</Button>`}
            </CodeBlock>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button icon={<Plus size={16} />}>Add Item</Button>
              <Button icon={<Download size={16} />} iconPosition="left">Download</Button>
              <Button variant="outline" icon={<ExternalLink size={16} />} iconPosition="right">
                Open Link
              </Button>
              <Button variant="ghost" icon={<Heart size={16} />} />
            </div>
            <CodeBlock title="Usage">
{`<Button icon={<Plus size={16} />}>Add Item</Button>
<Button icon={<Download size={16} />} iconPosition="left">Download</Button>
<Button variant="outline" icon={<ExternalLink size={16} />} iconPosition="right">
  Open Link
</Button>
<Button variant="ghost" icon={<Heart size={16} />} />`}
            </CodeBlock>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">States</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button>Default</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
            <CodeBlock title="Usage">
{`<Button>Default</Button>
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>Complete props and configuration options</CardDescription>
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
                  <td className="p-3 font-mono">variant</td>
                  <td className="p-3">"primary" | "secondary" | "danger" | "outline" | "ghost" | "link"</td>
                  <td className="p-3">"primary"</td>
                  <td className="p-3">Visual style variant of the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">size</td>
                  <td className="p-3">"small" | "medium" | "large" | "xl"</td>
                  <td className="p-3">"medium"</td>
                  <td className="p-3">Size of the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">loading</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">false</td>
                  <td className="p-3">Shows loading spinner and disables interaction</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">icon</td>
                  <td className="p-3">React.ReactNode</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Icon to display in the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">iconPosition</td>
                  <td className="p-3">"left" | "right"</td>
                  <td className="p-3">"left"</td>
                  <td className="p-3">Position of the icon relative to text</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">disabled</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">false</td>
                  <td className="p-3">Disables the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">className</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Additional CSS classes</td>
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
                <p className="font-medium">Use descriptive labels</p>
                <p className="text-sm text-gray-600">Clear, action-oriented text like "Save Changes" or "Download Report"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Use primary for main actions</p>
                <p className="text-sm text-gray-600">Reserve primary buttons for the most important action on a page</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Use consistent sizing</p>
                <p className="text-sm text-gray-600">Maintain size hierarchy throughout your interface</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Show loading states</p>
                <p className="text-sm text-gray-600">Use the loading prop for async operations</p>
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
                <p className="font-medium">Don't use multiple primary buttons</p>
                <p className="text-sm text-gray-600">Avoid competing primary actions on the same page</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use vague labels</p>
                <p className="text-sm text-gray-600">Avoid generic text like "Click here" or "Submit"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't mix icon positions</p>
                <p className="text-sm text-gray-600">Keep icon placement consistent within a feature</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use danger carelessly</p>
                <p className="text-sm text-gray-600">Reserve danger variant only for destructive actions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Design System Integration</CardTitle>
          <CardDescription>How this component fits into the larger design system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Supports keyboard navigation with focus states</li>
              <li>• Uses semantic button element for screen readers</li>
              <li>• Includes proper focus-visible indicators</li>
              <li>• Loading state announces to assistive technology</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Related Components</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Input:</strong> Often paired in forms</li>
              <li>• <strong>Card:</strong> Common container for button groups</li>
              <li>• <strong>Tooltip:</strong> Can provide additional context</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Copy, X } from 'lucide-react';
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

export function LabelDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Label</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A semantic label element that provides accessible descriptions for form controls.
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          Atom
        </div>
      </div>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>Interactive examples of the Label component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Label */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Basic Label</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="email-basic">Email Address</Label>
                <Input id="email-basic" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-basic">Password</Label>
                <Input id="password-basic" type="password" placeholder="Enter your password" />
              </div>
            </div>
            <CodeBlock title="Usage">
{`<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`}
            </CodeBlock>
          </div>

          {/* Required Labels */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Required Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="name-required">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name-required" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-required" className="flex items-center gap-1">
                  Phone Number 
                  <span className="text-red-500" aria-label="required">*</span>
                </Label>
                <Input id="phone-required" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>
            </div>
            <CodeBlock title="Usage">
{`<Label htmlFor="name">
  Full Name <span className="text-red-500">*</span>
</Label>
<Input id="name" required />`}
            </CodeBlock>
          </div>

          {/* Label States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Label States</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="normal-state">Normal</Label>
                <Input id="normal-state" placeholder="Normal state" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error-state" className="text-red-600">
                  Error State
                </Label>
                <Input 
                  id="error-state" 
                  placeholder="Invalid input" 
                  className="border-red-500"
                />
                <p className="text-sm text-red-600">This field is required</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-state" className="text-gray-400">
                  Disabled
                </Label>
                <Input id="disabled-state" placeholder="Cannot edit" disabled />
              </div>
            </div>
            <CodeBlock title="Usage">
{`{/* Error State */}
<Label htmlFor="error" className="text-red-600">
  Error State
</Label>
<Input id="error" className="border-red-500" />

{/* Disabled State */}
<Label htmlFor="disabled" className="text-gray-400">
  Disabled
</Label>
<Input id="disabled" disabled />`}
            </CodeBlock>
          </div>

          {/* Label with Help Text */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Labels with Help Text</h3>
            <div className="space-y-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Choose a username" />
                <p className="text-sm text-gray-500">
                  Must be 3-20 characters long and contain only letters, numbers, and underscores.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="bio">Bio</Label>
                  <span className="text-sm text-gray-400">Optional</span>
                </div>
                <textarea 
                  id="bio"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about yourself..."
                />
                <p className="text-sm text-gray-500">
                  Brief description for your profile. Maximum 500 characters.
                </p>
              </div>
            </div>
            <CodeBlock title="Usage">
{`<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Choose a username" />
  <p className="text-sm text-gray-500">
    Must be 3-20 characters long and contain only letters, numbers, and underscores.
  </p>
</div>`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>Props and configuration options for Label</CardDescription>
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
                  <td className="p-3 font-mono">htmlFor</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">ID of the form control this label is associated with</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">className</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Additional CSS classes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">children</td>
                  <td className="p-3">React.ReactNode</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Content of the label</td>
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
                <p className="font-medium">Always use htmlFor attribute</p>
                <p className="text-sm text-gray-600">Links the label to its form control for accessibility</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Use clear, descriptive text</p>
                <p className="text-sm text-gray-600">Label should clearly identify what the input is for</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Indicate required fields</p>
                <p className="text-sm text-gray-600">Use asterisk (*) or text to mark required fields</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Keep labels visible</p>
                <p className="text-sm text-gray-600">Labels should remain visible when input has focus</p>
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
                <p className="text-sm text-gray-600">Placeholders disappear and create accessibility issues</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't make labels too long</p>
                <p className="text-sm text-gray-600">Keep labels concise while remaining descriptive</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use vague labels</p>
                <p className="text-sm text-gray-600">Avoid generic labels like "Field" or "Input"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't forget the htmlFor attribute</p>
                <p className="text-sm text-gray-600">Missing htmlFor breaks screen reader functionality</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Design System Integration</CardTitle>
          <CardDescription>How Label fits into the atomic design system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Essential for screen reader users and assistive technology</li>
              <li>• Creates programmatic association with form controls</li>
              <li>• Enables click-to-focus behavior for better usability</li>
              <li>• Required for WCAG compliance in forms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Typography</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Uses consistent font weight and size with design system</li>
              <li>• Maintains proper contrast ratios for readability</li>
              <li>• Scales appropriately across different screen sizes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Related Components</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Input:</strong> Primary use case for form labeling</li>
              <li>• <strong>Textarea:</strong> Also requires proper labeling</li>
              <li>• <strong>Select:</strong> Dropdown controls need labels too</li>
              <li>• <strong>Checkbox/Radio:</strong> Special labeling considerations</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
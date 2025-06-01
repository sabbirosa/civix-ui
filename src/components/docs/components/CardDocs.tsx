import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Copy, Settings, User, X } from 'lucide-react';
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

export function CardDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Card</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A flexible container component that groups related content and actions.
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
          Molecule
        </div>
      </div>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>Interactive examples of the Card component and its subcomponents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Card */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Basic Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>Basic card with header content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is a simple card with basic content.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <p>Content-only card without header or footer.</p>
                </CardContent>
              </Card>
            </div>
            <CodeBlock title="Usage">
{`<Card>
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
    <CardDescription>Basic card with header content</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is a simple card with basic content.</p>
  </CardContent>
</Card>`}
            </CodeBlock>
          </div>

          {/* Card with Footer */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Card with Footer</h3>
            <div className="max-w-md mb-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>Manage your account settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500">john@example.com</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between">
                  <Button variant="outline" size="small">Cancel</Button>
                  <Button size="small">Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
            <CodeBlock title="Usage">
{`<Card>
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
    <CardDescription>Manage your account settings</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <User size={24} />
      </div>
      <div>
        <p className="font-medium">John Doe</p>
        <p className="text-sm text-gray-500">john@example.com</p>
      </div>
    </div>
  </CardContent>
  <CardFooter className="justify-between">
    <Button variant="outline" size="small">Cancel</Button>
    <Button size="small">Save Changes</Button>
  </CardFooter>
</Card>`}
            </CodeBlock>
          </div>

          {/* Interactive Card */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Interactive Card</h3>
            <div className="max-w-sm mb-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Settings
                    <Settings size={20} />
                  </CardTitle>
                  <CardDescription>Configure your preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Click to access configuration options and customize your experience.</p>
                </CardContent>
              </Card>
            </div>
            <CodeBlock title="Usage">
{`<Card className="hover:shadow-lg transition-shadow cursor-pointer">
  <CardHeader>
    <CardTitle className="flex items-center justify-between">
      Settings
      <Settings size={20} />
    </CardTitle>
    <CardDescription>Configure your preferences</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Click to access configuration options...</p>
  </CardContent>
</Card>`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>Available components and their props</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Card Components</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Component</th>
                      <th className="text-left p-3 font-semibold">Purpose</th>
                      <th className="text-left p-3 font-semibold">Default Classes</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="p-3 font-mono">Card</td>
                      <td className="p-3">Root container component</td>
                      <td className="p-3">rounded-xl border bg-white shadow-sm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">CardHeader</td>
                      <td className="p-3">Header section with title and description</td>
                      <td className="p-3">flex flex-col space-y-1.5 p-6</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">CardTitle</td>
                      <td className="p-3">Main heading for the card</td>
                      <td className="p-3">font-semibold leading-none tracking-tight</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">CardDescription</td>
                      <td className="p-3">Subtitle or description text</td>
                      <td className="p-3">text-sm text-secondary-600</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">CardContent</td>
                      <td className="p-3">Main content area</td>
                      <td className="p-3">p-6 pt-0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">CardFooter</td>
                      <td className="p-3">Footer section for actions</td>
                      <td className="p-3">flex items-center p-6 pt-0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
                <p className="font-medium">Use for related content</p>
                <p className="text-sm text-gray-600">Group logically related information and actions together</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Include clear titles</p>
                <p className="text-sm text-gray-600">Use CardTitle to provide context and improve scanning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Use consistent spacing</p>
                <p className="text-sm text-gray-600">Rely on default padding for visual rhythm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Consider interactive states</p>
                <p className="text-sm text-gray-600">Add hover effects for clickable cards</p>
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
                <p className="font-medium">Don't overload with content</p>
                <p className="text-sm text-gray-600">Keep cards focused and avoid information overload</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't nest cards deeply</p>
                <p className="text-sm text-gray-600">Avoid complex nesting that confuses hierarchy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use for single elements</p>
                <p className="text-sm text-gray-600">Cards should contain multiple related pieces of information</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't ignore semantic structure</p>
                <p className="text-sm text-gray-600">Use components in logical order: Header → Content → Footer</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Design System Integration</CardTitle>
          <CardDescription>How Card fits into the atomic design system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Composition</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Built from atomic elements (divs, headings, paragraphs)</li>
              <li>• Can contain other atoms like Buttons and Inputs</li>
              <li>• Forms the foundation for more complex organisms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Layout Patterns</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Grid Layout:</strong> Use in responsive grids for dashboards</li>
              <li>• <strong>List Layout:</strong> Stack vertically for feeds or timelines</li>
              <li>• <strong>Feature Layout:</strong> Larger cards for highlighting content</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Uses semantic HTML structure</li>
              <li>• Proper heading hierarchy with CardTitle</li>
              <li>• Keyboard navigation support when interactive</li>
              <li>• Sufficient color contrast for text and borders</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
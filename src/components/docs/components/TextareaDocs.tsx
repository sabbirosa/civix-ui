import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

export function TextareaDocs() {
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Textarea</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A multi-line text input component for collecting longer text content from users.
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          Atom
        </div>
      </div>

      {/* Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>Interactive examples of the Textarea component</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Textarea */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Basic Textarea</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Textarea</Label>
                <Textarea 
                  id="disabled" 
                  placeholder="Cannot edit this text" 
                  disabled 
                />
              </div>
            </div>
            <CodeBlock title="Usage">
{`<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea 
    id="message" 
    placeholder="Type your message here..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
</div>`}
            </CodeBlock>
          </div>

          {/* Different Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Different Heights</h3>
            <div className="space-y-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="small">Small (3 rows)</Label>
                <Textarea 
                  id="small"
                  placeholder="Small textarea for brief comments..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medium">Medium (5 rows)</Label>
                <Textarea 
                  id="medium"
                  placeholder="Medium textarea for moderate content..."
                  rows={5}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="large">Large (8 rows)</Label>
                <Textarea 
                  id="large"
                  placeholder="Large textarea for longer content like articles or detailed feedback..."
                  rows={8}
                />
              </div>
            </div>
            <CodeBlock title="Usage">
{`<Textarea rows={3} placeholder="Small textarea..." />
<Textarea rows={5} placeholder="Medium textarea..." />
<Textarea rows={8} placeholder="Large textarea..." />`}
            </CodeBlock>
          </div>

          {/* Textarea States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Textarea States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="normal-textarea">Normal</Label>
                <Textarea 
                  id="normal-textarea"
                  placeholder="Normal state textarea"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error-textarea" className="text-red-600">
                  Error State
                </Label>
                <Textarea 
                  id="error-textarea"
                  placeholder="Invalid content"
                  className="border-red-500 focus:ring-red-500"
                />
                <p className="text-sm text-red-600">Message must be at least 10 characters</p>
              </div>
            </div>
            <CodeBlock title="Usage">
{`{/* Error State */}
<Label htmlFor="error" className="text-red-600">Error State</Label>
<Textarea 
  id="error"
  className="border-red-500 focus:ring-red-500"
  placeholder="Invalid content"
/>
<p className="text-sm text-red-600">Message must be at least 10 characters</p>`}
            </CodeBlock>
          </div>

          {/* Character Count */}
          <div>
            <h3 className="text-lg font-semibold mb-4">With Character Count</h3>
            <div className="space-y-6 mb-4">
              <div className="space-y-2">
                <Label htmlFor="comment">Comment</Label>
                <Textarea 
                  id="comment"
                  placeholder="Share your thoughts..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={500}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Maximum 500 characters</span>
                  <span>{comment.length}/500</span>
                </div>
              </div>
            </div>
            <CodeBlock title="Usage">
{`const [comment, setComment] = useState('');

<div className="space-y-2">
  <Label htmlFor="comment">Comment</Label>
  <Textarea 
    id="comment"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    maxLength={500}
  />
  <div className="flex justify-between text-sm text-gray-500">
    <span>Maximum 500 characters</span>
    <span>{comment.length}/500</span>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Auto-resize */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Auto-resizing</h3>
            <div className="space-y-2 mb-4">
              <Label htmlFor="auto-resize">Auto-resize Textarea</Label>
              <Textarea 
                id="auto-resize"
                placeholder="This textarea will grow as you type more content. Try typing multiple lines..."
                className="resize-none min-h-[80px] max-h-[200px]"
                style={{ height: 'auto' }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
                }}
              />
            </div>
            <CodeBlock title="Usage">
{`<Textarea 
  className="resize-none min-h-[80px] max-h-[200px]"
  onInput={(e) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = \`\${Math.min(target.scrollHeight, 200)}px\`;
  }}
/>`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>Props and configuration options for Textarea</CardDescription>
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
                  <td className="p-3 font-mono">placeholder</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Placeholder text shown when empty</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">value</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Controlled textarea value</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">defaultValue</td>
                  <td className="p-3">string</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Default value for uncontrolled textarea</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">rows</td>
                  <td className="p-3">number</td>
                  <td className="p-3">4</td>
                  <td className="p-3">Number of visible text lines</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">cols</td>
                  <td className="p-3">number</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Number of visible character widths</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">disabled</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">false</td>
                  <td className="p-3">Disables the textarea</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">required</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">false</td>
                  <td className="p-3">Makes the textarea required for form validation</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono">maxLength</td>
                  <td className="p-3">number</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Maximum number of characters allowed</td>
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
                <p className="font-medium">Size appropriately</p>
                <p className="text-sm text-gray-600">Make the textarea large enough for expected content length</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Provide character limits</p>
                <p className="text-sm text-gray-600">Show character count when there are length restrictions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Use helpful placeholders</p>
                <p className="text-sm text-gray-600">Guide users with examples of expected content</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Allow resizing when appropriate</p>
                <p className="text-sm text-gray-600">Let users adjust size unless there's a specific reason not to</p>
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
                <p className="font-medium">Don't make it too small</p>
                <p className="text-sm text-gray-600">Tiny textareas are frustrating and hard to use effectively</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't use for short text</p>
                <p className="text-sm text-gray-600">Use Input component for single-line text like names or emails</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't forget labels</p>
                <p className="text-sm text-gray-600">Always pair with Label component for accessibility</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X size={16} className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Don't disable resize unnecessarily</p>
                <p className="text-sm text-gray-600">Users should be able to resize unless there's a design constraint</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design System Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Design System Integration</CardTitle>
          <CardDescription>How Textarea fits into the atomic design system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Use Cases</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Comments:</strong> User feedback and discussion threads</li>
              <li>• <strong>Messages:</strong> Contact forms and communication</li>
              <li>• <strong>Descriptions:</strong> Product descriptions and detailed content</li>
              <li>• <strong>Notes:</strong> User notes and long-form text entry</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Must be associated with Label using htmlFor attribute</li>
              <li>• Supports keyboard navigation and text selection</li>
              <li>• Screen reader compatible with proper labeling</li>
              <li>• Respects user's font size and system preferences</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Related Components</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <strong>Input:</strong> Alternative for single-line text</li>
              <li>• <strong>Label:</strong> Required for proper labeling</li>
              <li>• <strong>Button:</strong> Often paired for form submission</li>
              <li>• <strong>Card:</strong> Common container for textarea forms</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
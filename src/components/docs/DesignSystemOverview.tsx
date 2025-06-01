import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Atom, Layers, Package, Palette, Target } from 'lucide-react';
import Link from 'next/link';
import { CodeBlock } from './components/CodeBlock';

export function DesignSystemOverview() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Civix UI Design System
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive atomic design system built for modern web applications. 
          Create consistent, accessible, and beautiful user interfaces with our 
          thoughtfully crafted components.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button size="large">
            Get Started
          </Button>
          <Button variant="outline" size="large">
            View Components
          </Button>
        </div>
      </div>

      {/* Atomic Design Principles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Atom className="text-primary-500" size={24} />
            Atomic Design Methodology
          </CardTitle>
          <CardDescription>
            Our design system follows atomic design principles to create a scalable and maintainable component hierarchy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Atoms */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Atoms</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Basic building blocks that cannot be broken down further. These are the foundational elements of your interface.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Button</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Input</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Label</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Textarea</div>
              </div>
            </div>

            {/* Molecules */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Molecules</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Simple combinations of atoms that work together to form functional units.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Card</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Form Field</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Search Box</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Navigation Item</div>
              </div>
            </div>

            {/* Organisms */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="text-green-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Organisms</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Complex components made up of groups of molecules and atoms.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Header</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Footer</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Product Grid</div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded px-3 py-1">Contact Form</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="text-primary-500" size={24} />
            Quick Start
          </CardTitle>
          <CardDescription>
            Get up and running with Civix UI in your project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Installation</h3>
            <CodeBlock language="bash" title="Install via npm">
{`npm install @civix-ui/components
# or
yarn add @civix-ui/components
# or
pnpm add @civix-ui/components`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Basic Usage</h3>
            <CodeBlock title="Import and use components">
{`import { Button, Card, Input } from '@civix-ui/components';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}`}
            </CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Design Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="text-primary-500" size={20} />
              Design Principles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Consistency</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Maintain visual and functional consistency across all components and interactions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Accessibility</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Built with accessibility in mind, supporting screen readers and keyboard navigation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Modularity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Components are designed to be composable and reusable across different contexts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Optimized for performance with minimal bundle size and efficient rendering.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="text-primary-500" size={20} />
              Customization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Theming</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive theming system with dark mode support and custom color schemes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">CSS Variables</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Easy customization through CSS custom properties and Tailwind configuration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Variants</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Multiple variants for each component to fit different use cases and contexts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Extensibility</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Components accept custom props and className overrides for maximum flexibility.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Component Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Component Categories</CardTitle>
          <CardDescription>
            Explore our comprehensive collection of components organized by their atomic design level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/design-system" className="group">
              <div className="border rounded-lg p-6 hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                <div className="text-blue-500 mb-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary-600">Atoms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Basic UI elements like buttons, inputs, and labels
                </p>
                <div className="text-sm text-primary-500 mt-2">4 components →</div>
              </div>
            </Link>

            <Link href="/design-system" className="group">
              <div className="border rounded-lg p-6 hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                <div className="text-purple-500 mb-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary-600">Molecules</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Functional units combining atoms, like cards and form fields
                </p>
                <div className="text-sm text-primary-500 mt-2">1 component →</div>
              </div>
            </Link>

            <Link href="/design-system" className="group">
              <div className="border rounded-lg p-6 hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                <div className="text-green-500 mb-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Layers size={16} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary-600">Organisms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Complex components like headers, forms, and content sections
                </p>
                <div className="text-sm text-primary-500 mt-2">Coming soon →</div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
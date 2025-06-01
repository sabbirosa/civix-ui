import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { DesignSystemOverview } from './DesignSystemOverview';
import { ButtonDocs } from './components/ButtonDocs';
import { CardDocs } from './components/CardDocs';
import { InputDocs } from './components/InputDocs';
import { LabelDocs } from './components/LabelDocs';
import { TextareaDocs } from './components/TextareaDocs';

const COMPONENT_CATEGORIES = {
  overview: {
    title: 'Overview',
    description: 'Introduction to the design system',
    components: [
      { name: 'Getting Started', id: 'overview', component: DesignSystemOverview },
    ]
  },
  atoms: {
    title: 'Atoms',
    description: 'Basic building blocks that cannot be broken down further',
    components: [
      { name: 'Button', id: 'button', component: ButtonDocs },
      { name: 'Input', id: 'input', component: InputDocs },
      { name: 'Label', id: 'label', component: LabelDocs },
      { name: 'Textarea', id: 'textarea', component: TextareaDocs },
    ]
  },
  molecules: {
    title: 'Molecules',
    description: 'Simple combinations of atoms that work together',
    components: [
      { name: 'Card', id: 'card', component: CardDocs },
    ]
  },
  organisms: {
    title: 'Organisms',
    description: 'Complex components made up of atoms and molecules',
    components: []
  }
};

export function ComponentDocs() {
  const [selectedComponent, setSelectedComponent] = useState<string>('overview');
  
  const getSelectedComponentDoc = () => {
    for (const category of Object.values(COMPONENT_CATEGORIES)) {
      const component = category.components.find(c => c.id === selectedComponent);
      if (component) {
        return component.component;
      }
    }
    return DesignSystemOverview;
  };

  const SelectedComponentDoc = getSelectedComponentDoc();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Civix UI Component Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Atomic design system with comprehensive documentation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Browse by atomic design hierarchy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(COMPONENT_CATEGORIES).map(([key, category]) => (
                  <div key={key}>
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {category.description}
                    </p>
                    <div className="space-y-1">
                      {category.components.map((component) => (
                        <Button
                          key={component.id}
                          variant={selectedComponent === component.id ? 'primary' : 'ghost'}
                          size="small"
                          className="w-full justify-start"
                          onClick={() => setSelectedComponent(component.id)}
                        >
                          {component.name}
                        </Button>
                      ))}
                      {category.components.length === 0 && (
                        <div className="text-xs text-gray-400 italic px-3 py-2">
                          Coming soon...
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <SelectedComponentDoc />
          </div>
        </div>
      </div>
    </div>
  );
} 
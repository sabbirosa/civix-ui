"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";

interface ComponentDemoProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  filename?: string;
  className?: string;
}

export function ComponentDemo({ 
  title, 
  description, 
  children, 
  code, 
  filename,
  className 
}: ComponentDemoProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
        )}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              {children}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="code" className="space-y-4">
          <CodeBlock code={code} filename={filename} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 
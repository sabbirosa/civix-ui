import { cn } from '@/lib/utils';
import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  required?: boolean;
}

interface StepFormProps {
  currentStep: number;
  steps: Step[];
  onStepChange?: (step: number) => void;
  validateStep?: (stepId: number) => boolean;
  showProgress?: boolean;
  children: React.ReactNode;
}

interface StepFormStepProps {
  step: number;
  children: React.ReactNode;
}

export function StepForm({ 
  currentStep, 
  steps, 
  onStepChange, 
  validateStep,
  showProgress = false,
  children 
}: StepFormProps) {
  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div 
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
                currentStep >= step.id 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-300 text-gray-600",
                onStepChange && currentStep > step.id && "cursor-pointer hover:bg-blue-700"
              )}
              onClick={() => onStepChange && currentStep > step.id && onStepChange(step.id)}
            >
              {step.id}
            </div>
            <div className="ml-2 hidden sm:block">
              <div className={cn(
                "text-sm font-medium",
                currentStep >= step.id ? "text-blue-600" : "text-gray-500"
              )}>
                {step.title}
              </div>
              <div className="text-xs text-gray-500">{step.description}</div>
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "w-16 h-1 mx-4 transition-colors",
                currentStep > step.id ? "bg-blue-600" : "bg-gray-300"
              )} />
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      )}

      {/* Step Content */}
      <div>
        {children}
      </div>
    </div>
  );
}

export function StepFormStep({ step, children }: StepFormStepProps) {
  return <div data-step={step}>{children}</div>;
} 
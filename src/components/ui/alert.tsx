import { cn } from '@/lib/utils';
import React from 'react';

interface AlertProps {
  variant?: 'default' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Alert({ variant = 'default', children, className }: AlertProps) {
  const variants = {
    default: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  return (
    <div className={cn(
      'border rounded-lg p-4',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
}

export function AlertDescription({ children, className }: AlertDescriptionProps) {
  return (
    <div className={cn('text-sm', className)}>
      {children}
    </div>
  );
} 
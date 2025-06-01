import { cn } from '@/lib/utils';
import { AlertTriangle, Check, Circle, Clock, X } from 'lucide-react';
import React from 'react';

interface TimelineProps {
  variant?: 'default' | 'history';
  children: React.ReactNode;
}

interface TimelineItemProps {
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'current' | 'pending' | 'error' | 'warning';
  details?: string;
  metadata?: Record<string, string>;
}

const statusConfig = {
  completed: {
    icon: Check,
    color: 'text-green-600 bg-green-100',
    lineColor: 'bg-green-500'
  },
  current: {
    icon: Clock,
    color: 'text-blue-600 bg-blue-100',
    lineColor: 'bg-blue-500'
  },
  pending: {
    icon: Circle,
    color: 'text-gray-600 bg-gray-100',
    lineColor: 'bg-gray-300'
  },
  error: {
    icon: X,
    color: 'text-red-600 bg-red-100',
    lineColor: 'bg-red-500'
  },
  warning: {
    icon: AlertTriangle,
    color: 'text-yellow-600 bg-yellow-100',
    lineColor: 'bg-yellow-500'
  }
};

export function Timeline({ variant = 'default', children }: TimelineProps) {
  return (
    <div className={cn(
      "relative",
      variant === 'history' && "space-y-4"
    )}>
      {children}
    </div>
  );
}

export function TimelineItem({ 
  title, 
  description, 
  timestamp, 
  status, 
  details,
  metadata 
}: TimelineItemProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="relative flex items-start space-x-4 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200"></div>
      
      {/* Status icon */}
      <div className={cn(
        "relative z-10 flex items-center justify-center w-8 h-8 rounded-full",
        config.color
      )}>
        <Icon className="w-4 h-4" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <time className="text-xs text-gray-500">{timestamp}</time>
        </div>
        
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        
        {details && (
          <p className="mt-2 text-xs text-gray-500">{details}</p>
        )}
        
        {metadata && (
          <div className="mt-2 text-xs text-gray-500 space-y-1">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key}>
                <span className="font-medium">{key}:</span> {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
    };

    return (
      <span 
        ref={ref}
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
        {...props} 
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
export default Badge;

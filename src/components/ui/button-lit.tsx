'use client';

import { cn } from "../../utils/cn";
import React from "react";

interface ButtonLitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const ButtonLit = React.forwardRef<HTMLButtonElement, ButtonLitProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "group relative rounded-lg text-white transition-all duration-200",
          "px-3 py-1.5 sm:px-4 sm:py-2",
          "text-sm sm:text-base",
          "bg-neutral-900 hover:bg-neutral-800",
          "dark:bg-[#030712] dark:hover:bg-purple-500/[0.15]",
          "border border-transparent",
          "dark:border-purple-500/20 dark:hover:border-purple-500/50",
          "overflow-hidden",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        {/* Dark mode effects only */}
        <div className="dark:block hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent 
            opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 
            animate-gradient-x" />
          {/* Bright glow effect */}
          <div className="absolute inset-0 z-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 
            blur-2xl transition-all duration-500" />
          {/* Border glow */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 
            opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
        </div>
      </button>
    );
  }
);

ButtonLit.displayName = "ButtonLit";

export const ButtonLitLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          "group relative inline-flex items-center justify-center rounded-lg text-white transition-all duration-200",
          "px-3 py-1.5 sm:px-4 sm:py-2",
          "text-sm sm:text-base",
          "bg-neutral-900 hover:bg-neutral-800",
          "dark:bg-[#030712] dark:hover:bg-purple-500/[0.15]",
          "border border-transparent",
          "dark:border-purple-500/20 dark:hover:border-purple-500/50",
          "overflow-hidden",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        {/* Dark mode effects only */}
        <div className="dark:block hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent 
            opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 
            animate-gradient-x" />
          {/* Bright glow effect */}
          <div className="absolute inset-0 z-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 
            blur-2xl transition-all duration-500" />
          {/* Border glow */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 
            opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
        </div>
      </a>
    );
  }
);

ButtonLitLink.displayName = "ButtonLitLink";

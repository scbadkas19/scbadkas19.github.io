'use client';

import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { IconType } from 'react-icons';

interface FloatingSkillProps {
  icon: IconType;
  name: string;
  color: string;
  className?: string;
}

export const FloatingSkill = ({ icon: Icon, name, color, className }: FloatingSkillProps) => {
  return (
    <div className={cn(
      "relative group",
      className
    )}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={cn(
          "skill-card w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16",
          "flex items-center justify-center",
          "rounded-xl",
          "bg-white dark:bg-[#030712]",
          "border border-neutral-200 dark:border-neutral-800",
          "shadow-sm hover:shadow-md",
          "transition-all duration-200",
          "cursor-pointer",
          "relative isolation-auto"
        )}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        <Icon 
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-200" 
          style={{ color }}
        />
      </motion.div>

      {/* Tooltip */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2",
        "bottom-0 translate-y-full pb-1 sm:pb-2",
        "bg-neutral-900 dark:bg-white",
        "text-white dark:text-black",
        "px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg",
        "text-xs sm:text-sm font-medium",
        "whitespace-nowrap",
        "opacity-0 group-hover:opacity-100",
        "pointer-events-none",
        "shadow-xl",
        "transition-all duration-200",
        "z-[60]"
      )}>
        {name}
      </div>
    </div>
  );
};

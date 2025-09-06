'use client';

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";

interface ToggleSwitchProps {
  selected: string;
  setSelected: (value: string) => void;
  options: [string, string];
  className?: string;
}

export const ToggleSwitch = ({
  selected,
  setSelected,
  options,
  className,
}: ToggleSwitchProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center p-1 rounded-full bg-neutral-100 dark:bg-[#0A0F1A] border border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={cn(
            "relative px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200",
            "hover:text-neutral-900 dark:hover:text-white",
            selected === option
              ? "text-neutral-900 dark:text-white"
              : "text-neutral-600 dark:text-white/60"
          )}
        >
          {selected === option && (
            <motion.div
              layoutId="pill"
              className="absolute inset-0 bg-white dark:bg-[#030712] rounded-full border border-neutral-200 dark:border-neutral-800"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{option}</span>
        </button>
      ))}
    </div>
  );
};

'use client';

import { cn } from "@/utils/cn";
import { useState } from "react";

interface SimpleTabSwitchProps {
  defaultTab: string;
  onTabChange: (tab: string) => void;
  tabs: [string, string];
  className?: string;
}

export const SimpleTabSwitch = ({
  defaultTab,
  onTabChange,
  tabs,
  className,
}: SimpleTabSwitchProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className={cn(
      "inline-flex gap-2",
      className
    )}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={cn(
            "px-6 py-2 text-sm font-medium rounded-full transition-all duration-200",
            activeTab === tab
              ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white/60 dark:hover:bg-neutral-700"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

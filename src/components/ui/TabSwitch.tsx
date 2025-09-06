'use client';

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

interface TabSwitchProps {
  defaultTab: string;
  onTabChange: (tab: string) => void;
  tabs: [string, string];
  className?: string;
}

export const TabSwitch = ({
  defaultTab,
  onTabChange,
  tabs,
  className,
}: TabSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn(
        "inline-flex rounded-full bg-neutral-100 dark:bg-[#0A0F1A] border border-neutral-200 dark:border-neutral-800 p-1",
        className
      )}>
        <div className="px-4 py-1 text-sm font-medium text-neutral-900 dark:text-white">
          {defaultTab}
        </div>
      </div>
    );
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className={cn(
      "inline-flex rounded-full bg-neutral-100 dark:bg-[#0A0F1A] border border-neutral-200 dark:border-neutral-800 p-1",
      className
    )}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabChange(tab)}
          className={cn(
            "px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200",
            activeTab === tab
              ? "bg-white dark:bg-[#030712] text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800"
              : "text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

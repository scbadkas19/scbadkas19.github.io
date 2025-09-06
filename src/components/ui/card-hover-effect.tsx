"use client";

import { cn } from "../../utils/cn";
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export const CardHoverEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "w-full rounded-xl",
        "bg-white dark:bg-[#030712]",
        "border border-neutral-200 dark:border-neutral-800",
        "overflow-hidden",
        "group relative",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-xl hover:shadow-neutral-100/30 dark:hover:shadow-neutral-900/30",
        "hover:border-neutral-300 dark:hover:border-neutral-700",
        "p-4 sm:p-6 md:p-8",
        "space-y-3 sm:space-y-4",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 0, 0, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

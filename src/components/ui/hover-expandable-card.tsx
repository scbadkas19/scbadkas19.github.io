'use client';

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "../../utils/cn";
import { ButtonLitLink } from "./button-lit";

interface ExpandableCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  issuer: string | string[];
  link: string;
}

export const HoverExpandableCard = ({
  title,
  subtitle,
  description,
  date,
  issuer,
  link,
}: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.button
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseMove={handleMouseMove}
      className={cn(
        "w-full text-left",
        "rounded-xl overflow-hidden",
        "bg-white dark:bg-[#030712]",
        "border border-neutral-200 dark:border-neutral-800",
        "hover:border-neutral-300 dark:hover:border-purple-500/50",
        "transition-all duration-300",
        "group relative"
      )}
      whileHover={{ scale: 0.995 }}
      transition={{ duration: 0.2 }}
    >
      {/* Spotlight Effect - Light Mode */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 dark:hidden"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 120, 120, 0.1) 0%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Spotlight Effect - Dark Mode */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15) 0%,
              rgba(139, 92, 246, 0.1) 50%,
              transparent 80%
            )
          `,
        }}
      />

      <div className={cn(
        "p-5 relative z-10",
        isExpanded ? "pb-5" : "pb-4"
      )}>
        {/* Header - Always Visible */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-white/60 mt-0.5">
              {subtitle}
            </p>
          </div>
          <span className="text-sm text-neutral-500 dark:text-white/40 whitespace-nowrap ml-4">
            {date}
          </span>
        </div>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-neutral-600 dark:text-white/80 text-sm mb-4">
                  {description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500 dark:text-white/60">
                    {Array.isArray(issuer) ? issuer.join(', ') : issuer}
                  </span>
                  <ButtonLitLink
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Credentials
                  </ButtonLitLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

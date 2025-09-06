import type { FC, MouseEvent, ReactNode } from 'react';
import { useState } from 'react';
import { cn } from "@/utils/cn";
import { BsGithub } from "react-icons/bs";
import { Card3D } from "./card-3d";
import { ButtonLitLink } from "./button-lit";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  skills?: string[];
  githubLink?: string;
}

type MotionDivProps = HTMLMotionProps<"div">;

export const BentoGrid: FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto auto-rows-[auto] px-2 sm:px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem: FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  skills,
  githubLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const motionProps: MotionDivProps = {
    layout: true,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      {...motionProps}
      className={cn(
        "row-span-1 w-full",
        className
      )}
    >
      <Card3D className="h-full overflow-hidden">
        <motion.div
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "project-card h-full rounded-xl group/bento cursor-pointer overflow-hidden",
            "bg-white dark:bg-[#030712]",
            "border border-neutral-200 dark:border-neutral-800",
            "relative transform-3d backface-hidden",
            "transition-[background,border,shadow] duration-300 ease-in-out",
            "flex flex-col",
            "dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]",
            "dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
            isExpanded ? "min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem]" : "h-[16rem] sm:h-[20rem] md:h-[24rem]"
          )}
          onMouseMove={(e: MouseEvent<HTMLDivElement>) => {
            if (window.innerWidth > 640) { // Only apply mouse effect on larger screens
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }
          }}
        >
          {/* Image Container */}
          <motion.div layout className="relative w-full h-28 sm:h-36 md:h-48 overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 z-10">
              {header}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 group-hover/bento:via-black/30 group-hover/bento:to-black/80 transition-colors duration-500" />
          </motion.div>

          {/* Content Container */}
          <motion.div layout className="flex flex-col flex-grow p-2 sm:p-3 md:p-4">
            {/* Title */}
            <motion.h3 layout className="font-bold text-base sm:text-lg md:text-xl text-neutral-900 dark:text-white mb-1 sm:mb-2 line-clamp-1">
              {title}
            </motion.h3>

            {/* Description */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-neutral-600 dark:text-white/80 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 line-clamp-3 sm:line-clamp-none">
                    {description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Skills */}
            {skills && skills.length > 0 && (
              <motion.div layout className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4">
                {skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-medium rounded-full 
                      bg-neutral-100 dark:bg-[#0A0F1A]
                      text-neutral-600 dark:text-white/90
                      border border-neutral-200 dark:border-neutral-800
                      transition-colors duration-200
                      whitespace-nowrap
                      max-w-[120px] truncate"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Spacer to push GitHub button to bottom */}
            <motion.div layout className="flex-grow min-h-[4px]" />

            {/* GitHub Button */}
            {githubLink && (
              <motion.div layout onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <ButtonLitLink
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/github py-1 sm:py-1.5"
                >
                  <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
                    <span className="group-hover/github:rotate-[360deg] transition-transform duration-500">
                      <BsGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium group-hover/github:translate-x-1 transition-transform duration-200">
                      View on GitHub
                    </span>
                  </div>
                </ButtonLitLink>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Card3D>
    </motion.div>
  );
};

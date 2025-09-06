'use client';

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue
} from "framer-motion";
import { cn } from "../../utils/cn";

interface CategoryParallaxProps {
  children: React.ReactNode;
  title: string;
  translate: MotionValue<number>;
}

export const CategoryParallax = ({ children, title, translate }: CategoryParallaxProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{ y: -20 }}
      className="group/category relative h-full w-[35rem] flex-shrink-0"
    >
      <div
        className={cn(
          "flex flex-col h-full w-full p-6",
          "rounded-xl",
          "bg-white dark:bg-[#030712]",
          "border border-transparent",
          "dark:border-neutral-800 dark:hover:border-purple-500/50",
          "overflow-hidden transition-all duration-200"
        )}
      >
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-6">
          {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
};

export const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
          Skills & Technologies
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          A comprehensive overview of my technical expertise across various domains
        </p>
      </div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

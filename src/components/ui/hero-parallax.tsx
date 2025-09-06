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
import { IconType } from "react-icons";

export const HeroParallax = ({
  categories,
}: {
  categories: {
    title: string;
    skills: {
      name: string;
      icon: IconType;
      color: string;
    }[];
  }[];
}) => {
  const firstRow = categories.slice(0, 2);
  const secondRow = categories.slice(2, 4);
  const thirdRow = categories.slice(4, 6);
  const fourthRow = categories.slice(6);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
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
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((category) => (
            <CategoryCard
              category={category}
              translate={translateX}
              key={category.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((category) => (
            <CategoryCard
              category={category}
              translate={translateXReverse}
              key={category.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {thirdRow.map((category) => (
            <CategoryCard
              category={category}
              translate={translateX}
              key={category.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {fourthRow.map((category) => (
            <CategoryCard
              category={category}
              translate={translateXReverse}
              key={category.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        Skills & Technologies
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        A comprehensive overview of my technical expertise across various domains
      </p>
    </div>
  );
};

export const CategoryCard = ({
  category,
  translate,
}: {
  category: {
    title: string;
    skills: {
      name: string;
      icon: IconType;
      color: string;
    }[];
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{ y: -20 }}
      key={category.title}
      className="group/category relative h-[40rem] w-[35rem] flex-shrink-0"
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
          {category.title}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {category.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={cn(
                  "p-3 rounded-lg",
                  "bg-neutral-900 hover:bg-neutral-800",
                  "dark:bg-[#030712] dark:hover:bg-[#111827]",
                  "border border-transparent",
                  "hover:border-neutral-600/50",
                  "dark:border-neutral-800/50 dark:hover:border-purple-500/50",
                  "overflow-hidden transition-all duration-200",
                  "flex flex-col items-center justify-center gap-2"
                )}
              >
                <Icon 
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <span className="text-sm text-white dark:text-white/80">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

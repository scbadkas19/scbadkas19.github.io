'use client';

import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span key={`word-${idx}`} className="inline-block">
        {word.text.split("").map((char, index) => (
          <motion.span
            initial={{
              opacity: 0,
            }}
            key={`char-${index}`}
            className={cn(
              `text-black dark:text-white opacity-0 hidden md:inline-block`,
              word.className
            )}
          >
            {char}
          </motion.span>
        ))}
        &nbsp;
      </motion.span>
    );
  });

  return (
    <motion.div ref={scope} className={cn("", className)}>
      {renderWords}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10",
          "bg-black dark:bg-white",
          cursorClassName
        )}
      />
    </motion.div>
  );
};

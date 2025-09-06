"use client";

import { cn } from "../../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    let isMounted = true;
    let animationFrame: number;

    const animateText = async () => {
      if (!isMounted) return;

      // Reset all characters to invisible
      await animate(
        "span",
        {
          opacity: 0,
        },
        {
          duration: 0.01,
        }
      );

      if (!isMounted) return;

      // Type in animation
      await animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.05,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );

      if (!isMounted) return;

      // Hold the text for 5 seconds
      await new Promise(resolve => setTimeout(resolve, 10000));

      if (!isMounted) return;

      // Schedule next animation
      animationFrame = requestAnimationFrame(animateText);
    };

    if (isInView) {
      animateText();
    }

    return () => {
      isMounted = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, animate]);
  
  return (
    <div ref={scope} className={cn("font-bold inline-block", className)}>
      {words.map((word, idx) => {
        return (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.split("").map((char, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                key={char + index}
                className={cn(`opacity-0 inline-block`, word.className)}
              >
                {char}
              </motion.span>
            ))}
            {idx < words.length - 1 && <span>&nbsp;</span>}
          </div>
        );
      })}
    </div>
  );
};

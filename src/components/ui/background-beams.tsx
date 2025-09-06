'use client';

import { cn } from "../../utils/cn";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const updateMousePosition = (ev: MouseEvent) => {
      if (!beamsRef.current) return;
      const { clientX, clientY } = ev;
      beamsRef.current.style.setProperty("--x", `${clientX}px`);
      beamsRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "hidden dark:block opacity-30 pointer-events-none fixed inset-0 -z-50 transition duration-300",
        "bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(139,92,246,0.25)_0%,rgba(139,92,246,0.1)_25%,transparent_50%)]",
        className
      )}
    />
  );
};

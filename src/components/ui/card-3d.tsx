'use client';

import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";

interface Card3DProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className,
  containerClassName,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rotateXUncapped = ((mouseY - centerY) / (rect.height / 2)) * -5;
      const rotateYUncapped = ((mouseX - centerX) / (rect.width / 2)) * 5;

      // Cap rotation values
      const rotateX = Math.min(Math.max(rotateXUncapped, -5), 5);
      const rotateY = Math.min(Math.max(rotateYUncapped, -5), 5);

      setRotateX(rotateX);
      setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "w-full h-full perspective-1000",
        containerClassName
      )}
    >
      <div
        className={cn(
          "w-full h-full transition-transform duration-200 ease-out preserve-3d",
          className
        )}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

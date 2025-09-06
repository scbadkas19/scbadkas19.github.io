"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Circle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ParticlesProps {
  className?: string;
  quantity?: number;
  ease?: number;
  refresh?: boolean;
}

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 50,
  ease = 50,
  refresh = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0, radius: 100 });
  const animationFrame = useRef<number>();
  const dpr = useRef(1);

  useEffect(() => {
    setMounted(true);
    dpr.current = window.devicePixelRatio;
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
      }
    };

    const initCanvas = () => {
      if (!canvasContainerRef.current || !canvasRef.current) return;
      
      const canvas = canvasRef.current;
      context.current = canvas.getContext('2d');
      if (!context.current) return;

      const container = canvasContainerRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      canvas.width = width * dpr.current;
      canvas.height = height * dpr.current;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.current.scale(dpr.current, dpr.current);

      // Initialize particles with higher velocities
      circles.current = Array.from({ length: quantity }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 3, // Increased velocity
        vy: (Math.random() - 0.5) * 3, // Increased velocity
      }));
    };

    const animate = () => {
      if (!context.current || !canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const width = canvas.width / dpr.current;
      const height = canvas.height / dpr.current;

      context.current.clearRect(0, 0, width, height);
      
      circles.current.forEach((circle, i) => {
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;

        // Add small random movement
        circle.vx += (Math.random() - 0.5) * 0.2;
        circle.vy += (Math.random() - 0.5) * 0.2;

        // Bounce off walls
        if (circle.x <= 0 || circle.x >= width) {
          circle.vx *= -1;
          circle.x = circle.x <= 0 ? 0 : width;
        }
        if (circle.y <= 0 || circle.y >= height) {
          circle.vy *= -1;
          circle.y = circle.y <= 0 ? 0 : height;
        }

        // Mouse interaction
        const dx = mouse.current.x - circle.x;
        const dy = mouse.current.y - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.current.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.current.radius - distance) / mouse.current.radius;
          
          // Push particles away from mouse
          circle.vx -= Math.cos(angle) * force * 0.5;
          circle.vy -= Math.sin(angle) * force * 0.5;
        }

        // Apply minimal friction
        circle.vx *= 0.995;
        circle.vy *= 0.995;

        // Maintain minimum speed
        const minSpeed = 0.5;
        const speed = Math.sqrt(circle.vx * circle.vx + circle.vy * circle.vy);
        if (speed < minSpeed) {
          circle.vx *= minSpeed / speed;
          circle.vy *= minSpeed / speed;
        }

        // Speed limit
        const maxSpeed = 4;
        if (speed > maxSpeed) {
          circle.vx = (circle.vx / speed) * maxSpeed;
          circle.vy = (circle.vy / speed) * maxSpeed;
        }

        // Draw particle
        context.current!.beginPath();
        context.current!.arc(circle.x, circle.y, 1.5, 0, Math.PI * 2);
        context.current!.fillStyle = resolvedTheme === 'dark' 
          ? 'rgba(255, 255, 255, 0.5)' 
          : 'rgba(0, 0, 0, 0.5)';
        context.current!.fill();

        // Draw connections
        circles.current.forEach((circle2, j) => {
          if (i === j) return;
          const dx = circle.x - circle2.x;
          const dy = circle.y - circle2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            context.current!.beginPath();
            context.current!.moveTo(circle.x, circle.y);
            context.current!.lineTo(circle2.x, circle2.y);
            const alpha = 1 - dist / 80;
            context.current!.strokeStyle = resolvedTheme === 'dark' 
              ? `rgba(255, 255, 255, ${alpha * 0.2})`
              : `rgba(0, 0, 0, ${alpha * 0.2})`;
            context.current!.stroke();
          }
        });
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    const canvas = canvasRef.current;
    canvas?.addEventListener('mousemove', handleMouseMove);

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas?.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [mounted, quantity, ease, resolvedTheme, refresh]);

  if (!mounted) return null;

  return (
    <div
      ref={canvasContainerRef}
      className={`absolute inset-0 ${className}`}
    >
      <canvas 
        ref={canvasRef}
        className="cursor-none"
      />
    </div>
  );
};

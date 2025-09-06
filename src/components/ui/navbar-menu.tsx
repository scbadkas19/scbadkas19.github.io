"use client";

import type { FC } from 'react';
import { useState, useEffect } from "react";
import type { Variants } from 'framer-motion';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "../../utils/cn";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

interface MenuItem {
  name: string;
  link: string;
}

interface ThemeToggleButtonProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const NavbarMenu: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems: MenuItem[] = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    // { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" }
  ];

  const handleMenuClick = (): void => {
    setIsOpen(false);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-5 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-2xl font-signature",
              "text-neutral-900 dark:text-white",
              "hover:text-neutral-600 dark:hover:text-purple-400",
              "transition-colors duration-300",
              "z-50"
            )}
          >
            AJ
          </Link>

          {/* Desktop Menu Items and Theme Toggle */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            <div className="flex flex-row items-center justify-center space-x-2 
              bg-white/50 dark:bg-[#030712]/50 
              border border-neutral-200 dark:border-neutral-800
              rounded-full p-2 px-4 backdrop-blur-md">
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={cn(
                    "relative flex items-center",
                    "text-neutral-600 dark:text-white/90",
                    "hover:text-neutral-900 dark:hover:text-purple-400",
                    "px-3 py-2 rounded-full",
                    "hover:bg-neutral-100/50 dark:hover:bg-purple-500/[0.08]",
                    "text-sm font-medium",
                    "transition-colors duration-200"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <ThemeToggleButton theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggleButton theme={theme} setTheme={setTheme} />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full",
                "bg-white/50 dark:bg-[#030712]",
                "border border-neutral-200 dark:border-neutral-800",
                "text-neutral-600 dark:text-white",
                "hover:bg-neutral-100/80 dark:hover:bg-purple-500/[0.08]",
                "dark:hover:border-purple-500/50",
                "transition-all duration-200",
                "backdrop-blur-md"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-20 left-4 right-4 md:hidden"
            >
              <div className="bg-white/90 dark:bg-[#030712]/90 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 backdrop-blur-lg">
                <div className="flex flex-col py-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      onClick={handleMenuClick}
                      className={cn(
                        "px-6 py-3",
                        "text-neutral-600 dark:text-white/90",
                        "hover:text-neutral-900 dark:hover:text-purple-400",
                        "hover:bg-neutral-100/50 dark:hover:bg-purple-500/[0.08]",
                        "text-sm font-medium",
                        "transition-colors duration-200"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const ThemeToggleButton: FC<ThemeToggleButtonProps> = ({ theme, setTheme }) => (
  <motion.button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className={cn(
      "w-10 h-10 flex items-center justify-center rounded-full",
      "bg-white/50 dark:bg-[#030712]",
      "border border-neutral-200 dark:border-neutral-800",
      "text-neutral-600 dark:text-white",
      "hover:bg-neutral-100/80 dark:hover:bg-purple-500/[0.08]",
      "dark:hover:border-purple-500/50",
      "transition-all duration-200",
      "backdrop-blur-md"
    )}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
  </motion.button>
);

export default NavbarMenu;

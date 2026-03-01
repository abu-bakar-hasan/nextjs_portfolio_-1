'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when full screen menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About Me', href: '/about' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <header className="relative z-50 w-full bg-transparent">
        <div className="py-4 sm:py-6 px-6 sm:px-8 flex items-center justify-between mx-auto max-w-[1600px] w-full">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-8 lg:gap-20">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center transition-opacity group hover:opacity-80 relative z-50">
              <img 
                src="https://ik.imagekit.io/abubakarhasan/abhlogo.svg" 
                alt="Abu Bakar Hasan Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover invert-0 dark:invert transition-all" 
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Right Side: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6 relative z-50">
            <ThemeToggle />
            <Link 
              href="/contact" 
              className="group hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium border-b border-foreground/30 hover:border-foreground pb-0.5 transition-all"
            >
              Book A Call <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 transition-all" />
            </Link>
            <button 
              className="lg:hidden p-2 -mr-2 text-foreground hover:text-foreground/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation (Full Screen) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6 sm:px-8 pb-8 lg:hidden h-[100dvh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-8 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: 'easeOut' }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-4xl font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity block border-b border-foreground/10 pb-4"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="mt-6"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="sm:hidden inline-flex items-center justify-between w-full text-2xl font-medium text-foreground py-4 group"
                >
                  Book A Call <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-auto pt-8 text-sm text-foreground/50 lowercase"
            >
              <a href="mailto:abubakarhasan2505@gmail.com" className="hover:text-foreground transition-colors">
                abubakarhasan2505@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

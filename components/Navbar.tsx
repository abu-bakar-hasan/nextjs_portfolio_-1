'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="py-4 sm:py-6 px-6 sm:px-8 flex items-center justify-between mx-auto max-w-[1600px] w-full">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-8 lg:gap-20">
          <Link href="/" className="flex items-center justify-center transition-opacity group hover:opacity-80">
            <img 
              src="https://ik.imagekit.io/abubakarhasan/abhlogo.svg" 
              alt="Abu Bakar Hasan Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover invert-0 dark:invert" 
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <Link href="/about" className="hover:text-foreground transition-colors">About Me</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </nav>
        </div>
        
        {/* Right Side: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          <ThemeToggle />
          <Link 
            href="/contact" 
            className="group hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium border-b border-foreground/30 hover:border-foreground pb-0.5 transition-all"
          >
            Book A Call <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 transition-all" />
          </Link>
          <button 
            className="lg:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 shadow-lg z-50">
          <nav className="flex flex-col py-6 px-6 sm:px-8 gap-6 text-base font-medium text-foreground/80">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-foreground transition-colors">About Me</Link>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-foreground transition-colors">Blog</Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="sm:hidden inline-flex items-center justify-between w-full pt-4 border-t border-foreground/10 mt-2 text-foreground"
            >
              Book A Call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

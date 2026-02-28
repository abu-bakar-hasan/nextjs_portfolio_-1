import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navbar() {
  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="py-6 px-8 flex items-center justify-between mx-auto max-w-[1600px] w-full">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-12 sm:gap-20">
          <Link href="/" className="flex items-center justify-center transition-opacity group hover:opacity-80">
            <img 
              src="https://ik.imagekit.io/abubakarhasan/abhlogo.svg" 
              alt="Abu Bakar Hasan Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover invert-0 dark:invert" 
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <Link href="/about" className="hover:text-foreground transition-colors">About Me</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </nav>
        </div>
        
        {/* Right Side: CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <ThemeToggle />
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium border-b border-foreground/30 hover:border-foreground pb-0.5 transition-all"
          >
            Book A Call <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 transition-all" />
          </Link>
        </div>
      </div>
    </header>
  );
}

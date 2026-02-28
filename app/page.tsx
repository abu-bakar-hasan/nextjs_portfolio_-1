import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex-1 w-full max-w-[1600px] mx-auto px-8 flex flex-col justify-center min-h-[calc(100vh-8rem)]">
      
      {/* Sidebar Label (Left Edge) */}
      <div className="absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[11px] xl:text-xs uppercase tracking-[0.2em] text-foreground/40 font-medium whitespace-nowrap hidden lg:flex items-center gap-8 z-20">
        <span>System Designer</span>
        <span className="w-12 h-px bg-foreground/20"></span>
        <span>2026</span>
      </div>

      <div className="relative z-10 lg:pl-24 flex flex-col lg:pt-0 max-w-2xl xl:max-w-4xl h-full justify-center">
        
        {/* Stats Section */}
        <div className="flex flex-wrap gap-10 sm:gap-16 xl:gap-24 mb-16 sm:mb-24">
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground/90">+200</h3>
            <p className="text-sm xl:text-base text-foreground/50 font-medium whitespace-nowrap">Project completed</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground/90">+50</h3>
            <p className="text-sm xl:text-base text-foreground/50 font-medium whitespace-nowrap">Startup raised</p>
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-4 mb-16 sm:mb-32 relative z-20">
          <h1 className="text-[25vw] sm:text-[130px] xl:text-[170px] leading-[0.8] font-normal tracking-tight text-foreground -ml-1 sm:-ml-2 text-balance">
            Abu
          </h1>
          <p className="text-base sm:text-lg xl:text-xl text-foreground flex items-center gap-3 sm:gap-4">
            <span className="w-6 sm:w-8 h-[1px] bg-foreground"></span>
            — It's ABU a design wizerd
          </p>
        </div>

        {/* Scroll action */}
        <div className="mt-8 pb-12 sm:pb-16">
          <Link href="#next" className="inline-flex items-center gap-3 text-sm xl:text-base font-medium text-foreground/50 hover:text-foreground transition-colors group">
            Scroll down <ArrowDown className="w-4 h-4 group-hover:translate-y-1.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Hero Image (Right Side Overlay) */}
      <div className="absolute bottom-0 right-0 w-full md:w-[65%] lg:w-[55%] h-[75vh] md:h-[95vh] z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://ik.imagekit.io/abubakarhasan/dummy2.webp" 
          alt="Abu Bakar Hasan Portrait" 
          className="w-full h-full object-cover object-top transform scale-[1.05] md:scale-[1.05] translate-y-4 md:translate-y-12 grayscale contrast-[1.15] brightness-105 opacity-95 sepia-[0.05] pointer-events-none" 
        />
      </div>

    </div>
  );
}

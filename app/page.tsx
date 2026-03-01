import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex-1 w-full max-w-[1600px] mx-auto px-6 sm:px-8 flex flex-col justify-center min-h-[100dvh] pb-24 sm:pb-0 overflow-hidden">
      
      {/* Sidebar Label (Left Edge) */}
      <div className="absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[11px] xl:text-xs uppercase tracking-[0.2em] text-foreground/40 font-medium whitespace-nowrap hidden lg:flex items-center gap-8 z-20">
        <span>System Designer</span>
        <span className="w-12 h-px bg-foreground/20"></span>
        <span>2026</span>
      </div>

      <div className="relative z-20 pt-32 sm:pt-0 lg:pl-24 flex flex-col max-w-2xl xl:max-w-4xl h-full justify-center">
        
        {/* Stats Section */}
        <div className="flex flex-wrap gap-8 sm:gap-16 xl:gap-24 mb-12 sm:mb-24">
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground/90 drop-shadow-md sm:drop-shadow-none">+200</h3>
            <p className="text-sm xl:text-base text-foreground/80 sm:text-foreground/50 font-medium whitespace-nowrap drop-shadow-md sm:drop-shadow-none">Project completed</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground/90 drop-shadow-md sm:drop-shadow-none">+50</h3>
            <p className="text-sm xl:text-base text-foreground/80 sm:text-foreground/50 font-medium whitespace-nowrap drop-shadow-md sm:drop-shadow-none">Startup raised</p>
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-4 mb-12 sm:mb-32">
          <h1 className="text-[32vw] md:text-[130px] xl:text-[170px] leading-[0.8] font-normal tracking-tight text-foreground -ml-1 sm:-ml-2 text-balance drop-shadow-xl sm:drop-shadow-none relative z-20">
            Abu
          </h1>
          <p className="text-sm sm:text-lg xl:text-xl text-foreground/90 sm:text-foreground flex items-center gap-3 sm:gap-4 drop-shadow-md sm:drop-shadow-none relative z-20">
            <span className="w-6 sm:w-8 h-[1px] bg-foreground/80 sm:bg-foreground"></span>
            — It's ABU a design wizard
          </p>
        </div>

        {/* Scroll action */}
        <div className="mt-8 pb-12 sm:pb-16 hidden sm:block relative z-20">
          <Link href="#next" className="inline-flex items-center gap-3 text-sm xl:text-base font-medium text-foreground/50 hover:text-foreground transition-colors group">
            Scroll down <ArrowDown className="w-4 h-4 group-hover:translate-y-1.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute bottom-0 right-0 w-full sm:w-[85%] md:w-[65%] lg:w-[55%] h-[85dvh] md:h-[95vh] z-10 sm:z-0 pointer-events-none overflow-hidden origin-bottom">
        <img 
          src="https://ik.imagekit.io/abubakarhasan/dummy2.webp" 
          alt="Abu Bakar Hasan Portrait" 
          className="w-full h-full object-cover object-top transform scale-[1.0] sm:scale-[1.05] md:scale-[1.05] translate-y-0 md:translate-y-12 grayscale contrast-[1.10] brightness-100 opacity-[0.85] sm:opacity-95 sepia-[0.05] pointer-events-none mask-image-gradient" 
          style={{ WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)", maskImage: "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)" }}
        />
      </div>

    </div>
  );
}

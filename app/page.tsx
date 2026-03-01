import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1 w-full max-w-[1600px] mx-auto flex flex-col justify-center min-h-[calc(100dvh-5rem)] lg:min-h-[100dvh] overflow-hidden">
      
      {/* ------------------ MOBILE & TABLET VIEW ------------------ */}
      <div className="lg:hidden flex flex-col items-center pt-8 sm:pt-12 w-full h-full relative z-20 px-6 sm:px-12 pb-24">
         {/* System Designer line */}
         <div className="flex items-center gap-4 w-full mb-8 text-[11px] sm:text-xs text-foreground/60 uppercase tracking-widest font-medium">
            <div className="h-[1px] bg-foreground/10 flex-1"></div>
            <span>System Designer</span>
            <div className="h-[1px] bg-foreground/10 flex-1"></div>
         </div>

         {/* Portrait Image Block */}
         <div className="w-full max-w-[450px] aspect-square bg-[#ececec] dark:bg-foreground/5 mb-10 flex items-end justify-center rounded-sm overflow-hidden">
            <img 
               src="https://ik.imagekit.io/abubakarhasan/dummy2.webp" 
               className="w-[90%] h-[95%] object-cover object-top grayscale contrast-[1.15] brightness-105" 
               alt="Abu Bakar Hasan Portrait" 
            />
         </div>

         {/* Text Section */}
         <div className="flex flex-col items-center text-center w-full">
            <h1 className="text-[80px] sm:text-[110px] font-normal tracking-tight text-foreground leading-[0.85] mb-4">
               Abu
            </h1>
            <p className="text-sm sm:text-base text-foreground/80 flex items-center justify-center gap-2 mb-12">
               <span className="w-4 h-[1px] bg-foreground/80"></span>
               — It's ABU a design wizard
            </p>

            {/* Stats vertical */}
            <div className="flex flex-col gap-8 w-full">
               <div className="flex flex-col items-center gap-1">
                  <h3 className="text-[40px] sm:text-5xl font-light text-foreground leading-none">+200</h3>
                  <p className="text-xs sm:text-sm font-medium text-foreground/60">Website Launched</p>
               </div>
               <div className="flex flex-col items-center gap-1">
                  <h3 className="text-[40px] sm:text-5xl font-light text-foreground leading-none">99.9%</h3>
                  <p className="text-xs sm:text-sm font-medium text-foreground/60">Client Satisfaction</p>
               </div>
            </div>
         </div>

         {/* Bottom corners overlay */}
         <div className="absolute bottom-6 left-6 sm:left-12 -rotate-90 origin-bottom-left text-[11px] text-foreground/40 uppercase tracking-[0.2em] font-medium">
            2026
         </div>
         <div className="absolute bottom-6 right-6 sm:right-12 text-foreground/40 hover:text-foreground transition-colors">
            <Link href="#next"><ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" /></Link>
         </div>
      </div>

      {/* ------------------ DESKTOP VIEW ------------------ */}
      <div className="hidden lg:flex w-full h-full relative flex-col justify-center px-8 lg:px-12 pt-0 pb-0 min-h-[100dvh]">
        
        {/* Sidebar Label (Left Edge) */}
        <div className="absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[11px] xl:text-xs uppercase tracking-[0.2em] text-foreground/40 font-medium whitespace-nowrap flex items-center gap-8 z-20">
          <span>System Designer</span>
          <span className="w-12 h-px bg-foreground/20"></span>
          <span>2026</span>
        </div>

        <div className="relative z-20 lg:pl-24 flex flex-col max-w-2xl xl:max-w-4xl h-full justify-center">
          
          {/* Stats Section */}
          <div className="flex gap-16 xl:gap-24 mb-24">
            <div className="flex flex-col gap-1">
              <h3 className="text-5xl font-light tracking-tight text-foreground/90">+200</h3>
              <p className="text-sm xl:text-base text-foreground/50 font-medium whitespace-nowrap">Website Launched</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-5xl font-light tracking-tight text-foreground/90">99.9%</h3>
              <p className="text-sm xl:text-base text-foreground/50 font-medium whitespace-nowrap">Client Satisfaction</p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-4 mb-32">
            <h1 className="text-[130px] xl:text-[170px] leading-[0.8] font-normal tracking-tight text-foreground -ml-2 text-balance relative z-20">
              Abu
            </h1>
            <p className="text-lg xl:text-xl text-foreground flex items-center gap-4 relative z-20">
              <span className="w-8 h-[1px] bg-foreground"></span>
              — It's ABU a design wizard
            </p>
          </div>

          {/* Scroll action */}
          <div className="mt-8 pb-16 relative z-20">
            <Link href="#next" className="inline-flex items-center gap-3 text-sm xl:text-base font-medium text-foreground/50 hover:text-foreground transition-colors group">
              Scroll down <ArrowDown className="w-4 h-4 group-hover:translate-y-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute bottom-0 right-0 w-[55%] h-[95vh] z-0 pointer-events-none overflow-hidden origin-bottom">
          <img 
            src="https://ik.imagekit.io/abubakarhasan/dummy2.webp" 
            alt="Abu Bakar Hasan Portrait" 
            className="w-full h-full object-cover object-top transform scale-[1.05] translate-y-12 grayscale contrast-[1.10] brightness-100 opacity-95 sepia-[0.05] pointer-events-none" 
          />
        </div>
      </div>

    </div>
  );
}

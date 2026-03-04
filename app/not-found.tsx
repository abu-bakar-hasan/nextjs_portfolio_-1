import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost?"
};

export default function NotFound() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center w-full min-h-[80vh] overflow-hidden bg-background py-20 transition-colors duration-300">
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto">
        
        {/* Digits Container */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 mb-10 mt-4 sm:mt-10 perspective-1000">
          {[4, 0, 4].map((digit, index) => (
            <div 
              key={index} 
              className="w-[84px] h-[96px] sm:w-[130px] sm:h-[148px] md:w-[150px] md:h-[170px] bg-foreground text-background shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] rounded-[24px] sm:rounded-[36px] flex items-center justify-center text-[64px] sm:text-[96px] md:text-[112px] font-black transform transition-all hover:-translate-y-2 hover:scale-105 duration-300 selection:bg-transparent"
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4 sm:mb-5 text-center transition-colors duration-300">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-foreground/70 text-sm sm:text-base md:text-lg mb-12 max-w-[280px] sm:max-w-md md:max-w-lg text-center leading-relaxed transition-colors duration-300">
          The page you are looking for was removed, moved, renamed,
          <br className="hidden sm:inline" /> or might never existed.
        </p>

        {/* Action Button */}
        <Link 
          href="/" 
          className="bg-foreground text-background hover:opacity-80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all duration-300 font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl text-sm sm:text-base tracking-wide hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

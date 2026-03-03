import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center w-full min-h-[80vh] overflow-hidden bg-gray-50 dark:bg-[#050505] py-20 transition-colors duration-300">
      
      {/* Dynamic Background Pattern - LIGHT MODE */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none dark:hidden"
        style={{
          background: `
            repeating-linear-gradient(
              110deg,
              rgba(0, 0, 0, 0.03) 0%,
              rgba(0, 0, 0, 0.03) 2%,
              transparent 2%,
              transparent 12%,
              rgba(0, 0, 0, 0.015) 12%,
              rgba(0, 0, 0, 0.015) 17%,
              transparent 17%,
              transparent 35%
            ),
            repeating-linear-gradient(
              110deg,
              rgba(0, 0, 0, 0.015) 0%,
              rgba(0, 0, 0, 0.015) 7%,
              transparent 7%,
              transparent 25%,
              rgba(0, 0, 0, 0.04) 25%,
              rgba(0, 0, 0, 0.04) 30%,
              transparent 30%,
              transparent 50%
            )
          `,
          backgroundSize: '150% 150%',
          backgroundPosition: 'center'
        }}
      />

      {/* Dynamic Background Pattern - DARK MODE */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none hidden dark:block"
        style={{
          background: `
            repeating-linear-gradient(
              110deg,
              rgba(255, 255, 255, 0.04) 0%,
              rgba(255, 255, 255, 0.04) 2%,
              transparent 2%,
              transparent 12%,
              rgba(255, 255, 255, 0.02) 12%,
              rgba(255, 255, 255, 0.02) 17%,
              transparent 17%,
              transparent 35%
            ),
            repeating-linear-gradient(
              110deg,
              rgba(255, 255, 255, 0.02) 0%,
              rgba(255, 255, 255, 0.02) 7%,
              transparent 7%,
              transparent 25%,
              rgba(255, 255, 255, 0.05) 25%,
              rgba(255, 255, 255, 0.05) 30%,
              transparent 30%,
              transparent 50%
            )
          `,
          backgroundSize: '150% 150%',
          backgroundPosition: 'center'
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-[#050505] dark:via-transparent dark:to-[#050505] opacity-90 transition-colors duration-300" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-[#050505] dark:via-transparent dark:to-[#050505] opacity-90 transition-colors duration-300" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto">
        
        {/* Digits Container */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 mb-10 mt-4 sm:mt-10 perspective-1000">
          {[4, 0, 4].map((digit, index) => (
            <div 
              key={index} 
              className="w-[84px] h-[96px] sm:w-[130px] sm:h-[148px] md:w-[150px] md:h-[170px] bg-[#050505] text-white shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:bg-white dark:text-[#050505] dark:shadow-[0_0_50px_rgba(255,255,255,0.15)] rounded-[24px] sm:rounded-[36px] flex items-center justify-center text-[64px] sm:text-[96px] md:text-[112px] font-black transform transition-all hover:-translate-y-2 hover:scale-105 duration-300 selection:bg-transparent"
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#050505] dark:text-white tracking-tight mb-4 sm:mb-5 text-center transition-colors duration-300">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-12 max-w-[280px] sm:max-w-md md:max-w-lg text-center leading-relaxed transition-colors duration-300">
          The page you are looking for was removed, moved, renamed,
          <br className="hidden sm:inline" /> or might never existed.
        </p>

        {/* Action Button */}
        <Link 
          href="/" 
          className="bg-[#050505] text-white hover:bg-black shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl text-sm sm:text-base tracking-wide hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

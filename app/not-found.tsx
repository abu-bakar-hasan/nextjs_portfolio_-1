import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center w-full min-h-[80vh] overflow-hidden bg-[#050505] py-20">
      {/* Dynamic Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none"
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
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-90" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto">
        
        {/* Digits Container */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 mb-10 mt-4 sm:mt-10 perspective-1000">
          {[4, 0, 4].map((digit, index) => (
            <div 
              key={index} 
              className="w-[84px] h-[96px] sm:w-[130px] sm:h-[148px] md:w-[150px] md:h-[170px] bg-white rounded-[24px] sm:rounded-[36px] flex items-center justify-center text-[64px] sm:text-[96px] md:text-[112px] font-black text-[#050505] shadow-[0_0_50px_rgba(255,255,255,0.15)] transform transition-transform hover:-translate-y-2 hover:scale-105 duration-300 selection:bg-transparent"
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-5 text-center">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-12 max-w-[280px] sm:max-w-md md:max-w-lg text-center leading-relaxed">
          The page you are looking for was removed, moved, renamed,
          <br className="hidden sm:inline" /> or might never existed.
        </p>

        {/* Action Button */}
        <Link 
          href="/" 
          className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl text-sm sm:text-base tracking-wide hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.1)] flex items-center gap-2"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

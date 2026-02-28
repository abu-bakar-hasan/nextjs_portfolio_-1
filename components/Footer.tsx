import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-24 px-8 mt-24">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-16">
        
        {/* Left Side */}
        <div className="flex flex-col">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Abu Bakar Hasan
          </h2>
          <p className="mt-4 text-sm text-white/40 uppercase tracking-widest">
            System Designer &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto overflow-hidden">
          <a 
            href="mailto:abubakarhasan2505@gmail.com" 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/90 hover:text-white transition-colors tracking-tight underline-offset-[12px] hover:underline break-all sm:break-normal"
          >
            abubakarhasan2505@gmail.com
          </a>
          
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm text-white/60 lowercase">
            <Link href="/" className="hover:text-white transition-colors">home</Link>
            <Link href="#projects" className="hover:text-white transition-colors">projects</Link>
            <Link href="#about" className="hover:text-white transition-colors">about</Link>
            <a href="https://x.com/abu_bakar_hasan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">tw</a>
            <a href="https://www.instagram.com/abu_bakar_hasan?igsh=eTZrZ2VkbG83ajlx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ig</a>
          </nav>
        </div>
        
      </div>
    </footer>
  );
}

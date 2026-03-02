import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 pb-4 sm:pb-8 pt-16 mt-auto">
      <div className="max-w-[1600px] mx-auto bg-foreground/[0.03] dark:bg-foreground/[0.02] border border-border/40 rounded-[32px] p-8 sm:p-12 md:p-16 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8">
          
          {/* Left Side (Col span 2 on md, 3 on lg) */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-4 sm:mb-6">
              Thanks for Visiting
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-8 font-medium">Got an idea?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium transition-all bg-foreground text-background rounded-full hover:scale-[1.02] active:scale-[0.98]"
            >
              Let's Connect
            </Link>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col gap-5 sm:gap-6 mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-foreground tracking-tight mb-1 sm:mb-2">Socials</h3>
            <div className="flex flex-col gap-3 sm:gap-4 text-foreground/70 text-sm sm:text-base font-medium">
              <Link href="#" className="hover:text-foreground transition-colors w-fit">Resume</Link>
              <Link href="#" className="hover:text-foreground transition-colors w-fit">LinkedIn</Link>
              <a href="https://x.com/abu_bakar_hasan" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors w-fit">Twitter</a>
              <a href="https://www.instagram.com/abu_bakar_hasan?igsh=eTZrZ2VkbG83ajlx" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors w-fit">Instagram</a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-5 sm:gap-6 mt-4 md:mt-0 lg:ml-[-2rem]">
            <h3 className="text-lg font-semibold text-foreground tracking-tight mb-1 sm:mb-2">Contact</h3>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm sm:text-base font-medium text-foreground/70">
              <a 
                href="mailto:abubakarhasan2505@gmail.com"
                className="hover:text-foreground transition-colors break-all"
              >
                abubakarhasan2505@gmail.com
              </a>
              
              <a 
                href="tel:+910000000000"
                className="hover:text-foreground transition-colors"
              >
                +91 000 0000000
              </a>

              <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-foreground/60 max-w-[250px]">
                Based in Pakur, Jharkhand, working remotely worldwide.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-border/50 flex items-center justify-center">
          <p className="text-xs sm:text-sm font-medium text-foreground/50 text-center max-w-sm">
            © {new Date().getFullYear()} Abu Bakar Hasan. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}

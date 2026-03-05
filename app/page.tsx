import type { Metadata } from "next";
import { ArrowDown01Icon as ArrowDown, ArrowUpRight01Icon as ArrowUpRight } from "hugeicons-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abu Bakar Hasan — Web Developer & System Designer"
};

export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A highly modular e-commerce platform built for scale.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "/projects"
    },
    {
      title: "Project Beta",
      description: "A high-performance analytics dashboard processing live data.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "/projects"
    }
  ];

  const services = [
    {
      id: "01",
      title: "Custom Web Development",
      description: "Full-stack web apps built with Next.js and modern tooling",
      tags: ["Next.js", "React", "Node.js"],
      link: "/contact?from=services&interest=web-development"
    },
    {
      id: "02",
      title: "System Design Consultation",
      description: "Architecture planning for startups that need to scale",
      tags: ["System Design", "Database"],
      link: "/contact?from=services&interest=system-design"
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative w-full max-w-[1600px] mx-auto flex flex-col justify-center min-h-[calc(100dvh-5rem)] lg:min-h-[100dvh] overflow-hidden">

        {/* MOBILE & TABLET VIEW */}
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
              className="w-full h-[95%] object-cover object-top grayscale contrast-[1.15] brightness-105"
              alt="Abu Bakar Hasan Portrait"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center text-center w-full">
            <h1 className="text-[80px] sm:text-[110px] font-normal tracking-tight text-foreground leading-[0.85] mb-4">
              Abu
            </h1>
            <div className="flex flex-col items-center gap-1.5 mb-12">
              <h2 className="text-xl sm:text-2xl font-medium tracking-wide text-foreground">Abu Bakar Hasan</h2>
              <p className="text-sm sm:text-base text-foreground/80 flex items-center justify-center gap-2">
                <span className="w-4 h-[1px] bg-foreground/80"></span>
                Web Developer & System Designer
                <span className="w-4 h-[1px] bg-foreground/80"></span>
              </p>
            </div>

            {/* Stats vertical */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-[32px] sm:text-[40px] font-light text-foreground leading-none">Mar 2026</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/60 uppercase tracking-wider">1st Major Launch</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-[32px] sm:text-[40px] font-light text-foreground leading-none">99.9%</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/60 uppercase tracking-wider">Client Satisfaction</p>
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

        {/* DESKTOP VIEW */}
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
                <h3 className="text-4xl xl:text-5xl font-light tracking-tight text-foreground/90">Mar 2026</h3>
                <p className="text-sm xl:text-base text-foreground/50 font-medium whitespace-nowrap uppercase tracking-wider">1st Major Launch</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-4xl xl:text-5xl font-light tracking-tight text-foreground/90">99.9%</h3>
                <p className="text-sm xl:text-base text-foreground/50 font-medium whitespace-nowrap uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>

            {/* Hero Text */}
            <div className="space-y-4 mb-32 relative z-20">
              <h1 className="text-[130px] xl:text-[170px] leading-[0.8] font-normal tracking-tight text-foreground -ml-2 text-balance">
                Abu
              </h1>
              <div className="flex flex-col gap-2 pl-2">
                <h2 className="text-3xl xl:text-4xl font-medium tracking-wide text-foreground">Abu Bakar Hasan</h2>
                <p className="text-lg xl:text-xl text-foreground/80 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-foreground"></span>
                  Web Developer & System Designer
                </p>
              </div>
            </div>

            {/* Scroll action */}
            <div className="mt-8 pb-16 relative z-20">
              <Link href="#next" className="inline-flex items-center gap-3 text-sm xl:text-base font-medium text-foreground/50 hover:text-foreground transition-colors group">
                Scroll down <ArrowDown className="w-4 h-4 group-hover:translate-y-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute bottom-0 right-8 w-[55%] h-[100dvh] z-0 pointer-events-none overflow-hidden origin-bottom">
            <img
              src="https://ik.imagekit.io/abubakarhasan/dummy2.webp"
              alt="Abu Bakar Hasan Portrait"
              className="w-full h-full object-cover object-top grayscale contrast-[1.10] brightness-100 opacity-95 sepia-[0.05] pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* ------------------ SELECTED WORK SECTION ------------------ */}
      <section id="next" className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24 py-24 sm:py-32 border-t border-border/10">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Selected Work</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl">
            A glimpse into projects focused on structure, performance, and minimal design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, idx) => (
            <Link key={idx} href={project.link} className="group block p-8 lg:p-10 border border-foreground/10 hover:border-accent/30 transition-colors bg-white/5 relative">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight group-hover:opacity-80 transition-opacity">{project.title}</h3>
                <ArrowUpRight className="w-6 h-6 text-foreground/30 group-hover:text-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-foreground/70 text-base mb-8 leading-relaxed max-w-sm pt-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-12 pb-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 bg-background border border-border text-foreground/80 tracking-wide rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center sm:justify-start">
          <Link href="/projects" className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium transition-all bg-foreground text-background rounded-full hover:scale-[1.02] active:scale-[0.98]">
            View All Projects
          </Link>
        </div>
      </section>

      {/* ------------------ SERVICES SECTION ------------------ */}
      <section className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24 py-24 sm:py-32 border-t border-border/10">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Services</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl">
            Specialized services designed to scale and perform.
          </p>
        </div>

        <div className="flex flex-col border-t border-border/30 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col lg:flex-row lg:items-center py-8 lg:py-12 border-b border-border/30 hover:bg-foreground/[0.015] transition-colors relative"
            >
              <div className="text-3xl lg:text-4xl font-light text-foreground/30 lg:w-32 shrink-0 mb-4 lg:mb-0 transition-colors group-hover:text-foreground/50">
                {service.id}
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1 gap-6 lg:gap-12 pl-0 lg:pl-4">
                <div className="flex flex-col gap-2 lg:gap-3 flex-1">
                  <h3 className="text-xl lg:text-3xl font-semibold text-foreground tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg text-foreground/60 max-w-xl">
                    {service.description}
                  </p>
                </div>

                <div className="mt-2 lg:mt-0 flex flex-wrap gap-2 shrink-0 lg:max-w-[200px] xl:max-w-xs justify-start lg:justify-end">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2.5 py-1 text-[11px] lg:text-xs font-semibold text-foreground/60 border border-border/80 rounded-full bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center sm:justify-start">
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium transition-all bg-foreground text-background rounded-full hover:scale-[1.02] active:scale-[0.98]">
            Explore All Services
          </Link>
        </div>
      </section>

    </div>
  );
}

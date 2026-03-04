import Link from "next/link";
import { ArrowRight01Icon as ArrowRight } from "hugeicons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Custom Web Development",
      description: "Full-stack web apps built with Next.js and modern tooling",
      tags: ["Next.js", "React", "Node.js", "MongoDB"],
      link: "/contact"
    },
    {
      id: "02",
      title: "System Design Consultation",
      description: "Architecture planning for startups that need to scale",
      tags: ["System Design", "API Design", "Database"],
      link: "/contact"
    },
    {
      id: "03",
      title: "UI to Code",
      description: "Pixel-perfect Figma to production conversion",
      tags: ["Figma", "Tailwind CSS", "Responsive Design"],
      link: "/contact"
    },
    {
      id: "04",
      title: "Performance Audit",
      description: "Speed, SEO, and accessibility improvements for existing sites",
      tags: ["Lighthouse", "Core Web Vitals", "SEO"],
      link: "/contact"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12">
      {/* Header Section */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Services</h1>
        <p className="text-foreground/70">
          Services designed to scale and perform.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col border-t border-border/50">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group flex flex-col lg:flex-row lg:items-center py-8 sm:py-12 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors relative"
          >
            {/* Number */}
            <div className="text-3xl sm:text-4xl font-light text-foreground/30 lg:w-32 shrink-0 mb-4 lg:mb-0 transition-colors group-hover:text-foreground/50">
              {service.id}
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1 gap-6 lg:gap-12">
              
              {/* Title, Description & Tags */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-1">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-2xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-foreground/60 border border-border/60 rounded-full bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4 lg:mt-0 flex shrink-0">
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-foreground hover:text-foreground/80 transition-colors group/cta"
                >
                  Let's talk <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

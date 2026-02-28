import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  { 
    title: "Project Alpha", 
    description: "A highly modular e-commerce platform built for scale.", 
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#" 
  },
  { 
    title: "Project Beta", 
    description: "A high-performance analytics dashboard processing live data.", 
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#" 
  },
  { 
    title: "Project Gamma", 
    description: "An elegant, structurally focused CMS for content creators.", 
    tags: ["GraphQL", "Next.js", "MongoDB"],
    link: "#" 
  },
  { 
    title: "Project Delta", 
    description: "Minimalist mobile application for seamless interactions.", 
    tags: ["React Native", "Expo", "Zustand"],
    link: "#" 
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Selected Work</h1>
        <p className="text-foreground/70">A collection of projects showcasing a focus on structure, performance, and minimal design.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Link key={idx} href={project.link} className="group block p-6 border border-foreground/10 hover:border-accent/30 transition-colors bg-white/5">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-medium tracking-tight group-hover:text-accent transition-colors">{project.title}</h2>
              <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-foreground/5 text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

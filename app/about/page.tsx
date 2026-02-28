import { Code2, Database, Layout, Server } from "lucide-react";

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">About Me</h1>
      
      <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
        {/* Background Section */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-4">Background</h2>
        </section>
        <section className="text-foreground/80 leading-relaxed space-y-4">
          <p>
            I am a software engineer focused on building high-performance, structurally sound, and accessible digital experiences. 
            Throughout my career, I've prioritized clean architecture and maintainable codebases over short-lived trends.
          </p>
          <p>
            My approach is rooted in simplicity and intention. Every line of code should serve a purpose, and every interface 
            should intuitively guide the user without unnecessary distractions.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-4">Technical Skills</h2>
        </section>
        
        <section className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Layout className="w-4 h-4 text-accent" />
              <span>Frontend Development</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              React, Next.js, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3, Accessibility (A11y).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Server className="w-4 h-4 text-accent" />
              <span>Backend & APIs</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Node.js, Express, RESTful APIs, GraphQL, Serverless Functions.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Database className="w-4 h-4 text-accent" />
              <span>Database & Cloud</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              PostgreSQL, MongoDB, Redis, AWS, Vercel, Docker.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Code2 className="w-4 h-4 text-accent" />
              <span>Architecture & Tools</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              System Design, Git, CI/CD, Jest, Cypress, Webpack, Vite.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

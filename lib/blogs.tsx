import React from "react";

export function PullQuote({ text }: { text: string }) {
  return (
    <div className="my-16 sm:my-20 text-center px-4 sm:px-8">
      <span className="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
      <p className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
        {text}
      </p>
    </div>
  );
}

export function Callout({ type, children }: { type: "tip" | "warning" | "note"; children: React.ReactNode }) {
  const styles = {
    tip: "bg-green-950/20 border-green-500",
    warning: "bg-amber-950/20 border-amber-500",
    note: "bg-sky-950/20 border-sky-500"
  };
  
  const textStyles = {
    tip: "text-green-500",
    warning: "text-amber-500",
    note: "text-sky-500"
  };

  const icons = {
    tip: "💡 Tip",
    warning: "⚠️ Warning",
    note: "📝 Note"
  };

  return (
    <div className={`my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 ${styles[type]} flex flex-col gap-2`}>
      <span className={`font-semibold tracking-wide text-sm uppercase ${textStyles[type]}`}>{icons[type]}</span>
      <span className="text-foreground/80 leading-relaxed text-base">{children}</span>
    </div>
  );
}

export const blogs = [
  {
    slug: "hello-world",
    title: "Hello, World.",
    category: "Personal",
    tags: ["Personal"],
    publishedAt: "Dec 2025",
    readTime: "3 min read",
    featured: true,
    excerpt: "Every developer's first line of code. This is mine — just a little late.",
    content: function Content() {
      return (
        <>
          <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
            Writing the first post is the hardest part of building a blog. So let's skip the clichés and just get to it.
          </p>
          <p>
            I am Abu Bakar—a web developer and system designer based in Jharkhand, working remotely with clients worldwide. I built this portfolio not just to show final products, but to document the messy, honest journey of building them.
          </p>
          <p>
            Here you'll find structured insights into system architecture, unapologetic deep-dives into frontend code, and transparent reflections on my services. There is a real human on the other side of this screen.
          </p>
          
          <hr className="w-full border-border/40 my-16 sm:my-20" />
          
          <h2>The Architecture of First Impressions</h2>
          
          <p>
            When I started coding this site, I went through dozens of heavy UI components and fancy structural layout models. But then I stopped myself.
          </p>
          
          <PullQuote text="You never get a second chance to make a first impression." />
          
          <p>
            That single line dictated every decision moving forward. A dark minimal aesthetic doesn't hide poor structure; it exposes it. Without flashy images or complex animations, typography becomes your only tool. If the margins are off by 4 pixels, you feel it. If the line-height is cramped, the reader leaves.
          </p>
          
          <p>
            I stripped everything down to its bare essence: pure Tailwind utilities, semantic markup, and a focus on absolute structural integrity. The services section, the blog engine, the transitions—everything serves the raw reading experience, not my ego.
          </p>
          
          <Callout type="note">
            Fun fact: I probably spent more time tweaking the exact line-height rhythm on these paragraphs than I did building the entire routing system. Priorities, right?
          </Callout>
          
          <hr className="w-full border-border/40 my-16 sm:my-20" />
          
          <h2>Moving Forward</h2>
          
          <p>
            If you're reading this, thank you for stopping by my little corner of the internet. Whether you're a founder looking to scale a new ecosystem, or a fellow developer hunting for clean Next.js patterns—make yourself at home. Let's build something honest.
          </p>
          <p className="mt-8 text-foreground/80 italic font-medium">
            — Abu Bakar
          </p>
        </>
      );
    }
  },
  {
    slug: "how-i-structure-large-nextjs-projects",
    title: "How I Structure Large Next.js Projects",
    excerpt: "A practical folder structure I use on every client project.",
    category: "Web Development",
    tags: ["Next.js", "React"],
    publishedAt: "Mar 2026",
    readTime: "5 min read",
    featured: false,
    content: function Content() {
      return (
        <>
          <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
            When you start building a Next.js application, the official documentation provides a great starting point. However, as your application grows, dumping everything into the app globally is a recipe for disaster.
          </p>

          <p>
            Over the past few years, I've built dozens of high-traffic Next.js applications for clients ranging from startups to enterprise companies. Through trial and error, I've refined a folder structure that scales seamlessly, promotes separation of concerns, and makes onboarding new developers incredibly frictionless. Let's break it down.
          </p>

          <hr className="w-full border-border/40 my-16 sm:my-20" />

          <h2>The Core Philosophy</h2>

          <p>
            The main goal of this architecture is to decouple business logic from the UI framework. We want our components to be <em>dumb</em> and our hooks/services to be <em>smart</em>.
          </p>

          <PullQuote text="The folder structure you choose on day one haunts you forever." />

          <p>
            Before we look at the exact folder layout, here are the three golden rules I strictly adhere to on every project:
          </p>

          <ul>
            <li><strong>Domain-Driven Organization</strong>: Group files by feature (e.g., <code>auth</code>, <code>billing</code>) rather than type.</li>
            <li><strong>Colocation</strong>: Keep tests, styles, and types right next to the component they belong to.</li>
            <li><strong>Strict Dependency Rules</strong>: UI components can import services, but services should never import UI components.</li>
          </ul>

          <Callout type="tip">
            Use dynamic imports for heavy components mapped within these features to aggressively optimize your chunk sizes!
          </Callout>

          <hr className="w-full border-border/40 my-16 sm:my-20" />

          <h2>The Folder Breakdown</h2>

          <p>
            Here's the minimal skeleton I use to kick off any serious Next.js project using the App Router:
          </p>

          <div className="relative my-10 group">
            <div className="absolute top-0 right-0 px-3 py-1.5 text-xs font-mono font-medium text-foreground/40 bg-foreground/[0.03] rounded-bl-lg rounded-tr-xl border-b border-l border-border/20">
              tsx
            </div>
            <pre className="bg-[#101010] dark:bg-[#161616] border border-border/20 border-l-2 border-l-sky-500 rounded-xl p-6 pt-10 overflow-x-auto shadow-sm">
              <code className="text-sm text-foreground/80 font-mono whitespace-pre font-light">
{`src/
  app/              # Next.js App Router (Routing only)
  components/       # Global, reusable UI components
  features/         # Domain-specific modules (The core magic)
  lib/              # Third-party wrappers (Axios, Prisma)
  types/            # Global TypeScript definitions
  utils/            # Pure helper functions
`}
              </code>
            </pre>
          </div>

          <Callout type="warning">
            Never commit your <code>.env</code> file directly into these directories. Keep environments completely detached from structural trees!
          </Callout>

          <h3>The Features Directory (The Secret Sauce)</h3>

          <p>
            The <code>features</code> directory is where the real architecture happens. Instead of flat lists of components and hooks, we group them by domain feature. Notice how everything naturally wraps inwards.
          </p>

          <Callout type="note">
            This explicit feature structure predominantly applies to applications using routing mechanisms like Next.js App Router where logic segregation heavily favors the developer.
          </Callout>

          <hr className="w-full border-border/40 my-16 sm:my-20" />

          <h2>Conclusion</h2>

          <p>
            This structure has saved me hundreds of hours of refactoring. It enforces discipline, makes the codebase instantly navigable for newcomers, and directly addresses the chaos that usually ensues when a Next.js side-project scales into a production enterprise application.
          </p>
        </>
      );
    }
  },
  {
    slug: "what-is-system-design-and-why-should-you-care",
    title: "What Is System Design and Why Should You Care",
    excerpt: "A beginner-friendly breakdown of system design for web developers.",
    category: "System Design",
    tags: ["System Design", "Architecture"],
    publishedAt: "Feb 2026",
    readTime: "7 min read",
    featured: false,
    content: function Content() {
      return (
        <>
          <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">Coming soon.</p>
        </>
      );
    }
  },
  {
    slug: "figma-to-code-without-losing-your-mind",
    title: "Figma to Code Without Losing Your Mind",
    excerpt: "My workflow for turning designs into pixel-perfect production code.",
    category: "Web Development",
    tags: ["Figma", "Tailwind CSS"],
    publishedAt: "Feb 2026",
    readTime: "4 min read",
    featured: false,
    content: function Content() {
      return (
        <>
          <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">Coming soon.</p>
        </>
      );
    }
  },
  {
    slug: "performance-audit-how-i-cut-load-time-by-60-percent",
    title: "Performance Audit: How I Cut Load Time by 60%",
    excerpt: "A real breakdown of the tools and fixes I used on a client site.",
    category: "Performance",
    tags: ["Performance", "SEO"],
    publishedAt: "Jan 2026",
    readTime: "6 min read",
    featured: false,
    content: function Content() {
      return (
        <>
          <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">Coming soon.</p>
        </>
      );
    }
  }
];

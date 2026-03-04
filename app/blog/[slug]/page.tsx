"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft02Icon as ArrowLeft, ArrowRight01Icon as ArrowRight } from "hugeicons-react";

// Hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return progress;
}

// Subcomponents
function PullQuote({ text }: { text: string }) {
  return (
    <div className="my-16 sm:my-20 text-center px-4 sm:px-8">
      <span className="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
      <p className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
        {text}
      </p>
    </div>
  );
}

function Callout({ type, children }: { type: "tip" | "warning" | "note"; children: React.ReactNode }) {
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

export default function BlogPost() {
  const progress = useScrollProgress();

  const post = {
    title: "How I Structure Large Next.js Projects",
    excerpt: "A practical folder structure I use on every client project.",
    category: "Web Development",
    tags: ["Next.js", "React"],
    date: "Mar 2026",
    readTime: "5 min read",
  };

  return (
    <>
      {/* Reading Progress Bar */}
      {progress > 0 && progress < 100 && (
        <div 
          className="fixed top-0 left-0 h-[2px] bg-sky-500 z-50 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      )}

      <div className="w-full max-w-5xl mx-auto px-8 py-12">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-foreground/70 border border-border/80 rounded-full bg-transparent tracking-wide">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 max-w-[65ch]">
            {post.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground/60 font-medium leading-relaxed max-w-3xl mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-foreground/50">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20 hidden sm:block"></span>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto mt-2 sm:mt-0">
              {post.tags.map(tag => (
                <span key={tag} className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-foreground/60 border border-border/60 rounded-full bg-transparent truncate">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Divider */}
        <hr className="w-full border-border/40 mb-12 sm:mb-16" />

        {/* Post Body */}
        <article className="prose prose-invert prose-lg max-w-[720px] mx-auto 
          [&>p:first-of-type]:text-xl sm:[&>p:first-of-type]:text-2xl [&>p:first-of-type]:text-foreground [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:mb-10 [&>p:first-of-type]:font-medium
          prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
          prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground/90
          prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-foreground/70 prose-a:transition-colors
          prose-ul:text-foreground/80 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
          prose-ol:text-foreground/80 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
          prose-li:mb-2 prose-li:pl-1
          prose-strong:text-foreground prose-strong:font-semibold
          prose-blockquote:border-l-2 prose-blockquote:border-foreground/30 prose-blockquote:bg-foreground/[0.02] prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground/70 prose-blockquote:italic prose-blockquote:my-8
          [&_:not(pre)>code]:text-sky-400 [&_:not(pre)>code]:bg-sky-500/10 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded-full [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-sm [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none"
        >
          <p>
            When you start building a Next.js application, the official documentation provides a great starting point. However, as your application grows, you quickly realize that dumping everything into the <code>app</code> or <code>components</code> directory is a recipe for disaster.
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

        </article>

        {/* Footer Section */}
        <div className="max-w-[720px] mx-auto mt-16 sm:mt-24">
          <hr className="w-full border-border/40 mb-10" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-foreground tracking-tight">Have a project in mind?</h3>
              <p className="text-foreground/70 font-medium">Let's build something scalable together.</p>
            </div>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap group/contact"
            >
              Book a Call <ArrowRight className="w-4 h-4 group-hover/contact:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex gap-2 mt-12 pb-4">
            {post.tags.map(tag => (
              <span key={tag} className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-foreground/60 border border-border/60 rounded-full bg-transparent">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

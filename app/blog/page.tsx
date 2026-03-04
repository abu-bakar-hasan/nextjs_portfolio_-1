"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight01Icon as ArrowRight } from "hugeicons-react";

const posts = [
  {
    id: "01",
    slug: "how-i-structure-large-nextjs-projects",
    title: "How I Structure Large Next.js Projects",
    excerpt: "A practical folder structure I use on every client project.",
    tags: ["Next.js", "React"],
    date: "Mar 2026",
    readTime: "5 min read",
  },
  {
    id: "02",
    slug: "what-is-system-design-and-why-should-you-care",
    title: "What Is System Design and Why Should You Care",
    excerpt: "A beginner-friendly breakdown of system design for web developers.",
    tags: ["System Design", "Architecture"],
    date: "Feb 2026",
    readTime: "7 min read",
  },
  {
    id: "03",
    slug: "figma-to-code-without-losing-your-mind",
    title: "Figma to Code Without Losing Your Mind",
    excerpt: "My workflow for turning designs into pixel-perfect production code.",
    tags: ["Figma", "Tailwind CSS"],
    date: "Feb 2026",
    readTime: "4 min read",
  },
  {
    id: "04",
    slug: "performance-audit-how-i-cut-load-time-by-60-percent",
    title: "Performance Audit: How I Cut Load Time by 60%",
    excerpt: "A real breakdown of the tools and fixes I used on a client site.",
    tags: ["Performance", "SEO"],
    date: "Jan 2026",
    readTime: "6 min read",
  }
];

// Extract unique tags and add 'All'
const allTags = ["All", ...Array.from(new Set(posts.flatMap(post => post.tags)))];

export default function BlogList() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = activeTag === "All" 
    ? posts 
    : posts.filter(post => post.tags.includes(activeTag));

  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12">
      {/* Header Section */}
      <div className="max-w-2xl mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">Blog</h1>
        <p className="text-foreground/70 mb-8">
          Thoughts on web development, system design, and building things.
        </p>
      </div>

      {/* Tag Filters */}
      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide mb-2 border-b border-border/20">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`whitespace-nowrap text-sm font-medium transition-colors pb-2 ${
              activeTag === tag
                ? "text-foreground border-b-2 border-foreground"
                : "text-foreground/50 hover:text-foreground/80 border-b-2 border-transparent"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="flex flex-col border-t border-border/50">
        {filteredPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col lg:flex-row py-8 sm:py-12 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors relative"
          >
            {/* Number */}
            <div className="text-3xl sm:text-4xl font-light text-foreground/30 lg:w-32 shrink-0 mb-4 lg:mb-0 transition-colors group-hover:text-foreground/50 pt-1">
              {post.id}
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between flex-1 gap-6 lg:gap-12 w-full">
              
              {/* Title, Excerpt & Tags */}
              <div className="flex flex-col gap-3 lg:gap-4 flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight transition-colors">
                  {post.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground/60 font-medium max-w-2xl leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-foreground/60 border border-border/60 rounded-full bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Data & CTA (Date, Read Time, Read Link) */}
              <div className="mt-4 lg:mt-0 flex flex-col lg:items-end gap-3 shrink-0 lg:w-48 text-left lg:text-right">
                <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-1 text-sm font-medium text-foreground/50">
                  <span>{post.date}</span>
                  <span className="lg:hidden w-1 h-1 rounded-full bg-foreground/20"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-foreground hover:text-foreground/80 transition-colors mt-auto pt-2 lg:pt-6 group/cta">
                  Read <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/cta:translate-x-1" />
                </div>
              </div>

            </div>
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <div className="py-12 text-center text-foreground/50">
            No posts found for this tag.
          </div>
        )}
      </div>
    </div>
  );
}

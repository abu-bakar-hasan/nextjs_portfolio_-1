"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft02Icon as ArrowLeft, ArrowRight01Icon as ArrowRight } from "hugeicons-react";
import { blogs } from "@/lib/blogs";

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

export default function BlogPost() {
  const progress = useScrollProgress();
  const { slug } = useParams();

  const post = blogs.find(b => b.slug === slug);

  if (!post) {
    return (
      <div className="w-full max-w-5xl mx-auto px-8 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Post not found</h1>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>
      </div>
    );
  }

  const Content = post.content;

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
            <span>{post.publishedAt}</span>
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
          <Content />
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

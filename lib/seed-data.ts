import { Blog, Project } from "./types";

export const blogs: Blog[] = [
  {
    slug: "hello-world",
    title: "Hello, World.",
    category: "Personal",
    tags: ["Personal"],
    publishedAt: "Dec 2025",
    readTime: "3 min read",
    featured: true,
    excerpt: "Every developer's first line of code. This is mine — just a little late.",
    content: `
      <p class="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
        Writing the first post is the hardest part of building a blog. So let's skip the clichés and just get to it.
      </p>
      <p>
        I am Abu Bakar—a web developer and system designer based in Jharkhand, working remotely with clients worldwide. I built this portfolio not just to show final products, but to document the messy, honest journey of building them.
      </p>
      <p>
        Here you'll find structured insights into system architecture, unapologetic deep-dives into frontend code, and transparent reflections on my services. There is a real human on the other side of this screen.
      </p>
      
      <hr class="w-full border-border/40 my-16 sm:my-20" />
      
      <h2>The Architecture of First Impressions</h2>
      
      <p>
        When I started coding this site, I went through dozens of heavy UI components and fancy structural layout models. But then I stopped myself.
      </p>
      
      <div class="my-16 sm:my-20 text-center px-4 sm:px-8">
        <span class="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
        <p class="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
          You never get a second chance to make a first impression.
        </p>
      </div>
      
      <p>
        That single line dictated every decision moving forward. A dark minimal aesthetic doesn't hide poor structure; it exposes it. Without flashy images or complex animations, typography becomes your only tool. If the margins are off by 4 pixels, you feel it. If the line-height is cramped, the reader leaves.
      </p>
      
      <p>
        I stripped everything down to its bare essence: pure Tailwind utilities, semantic markup, and a focus on absolute structural integrity. The services section, the blog engine, the transitions—everything serves the raw reading experience, not my ego.
      </p>
      
      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-sky-500/10 border-sky-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-sky-500">📝 Note</span>
        <span class="text-foreground/80 leading-relaxed text-base">Fun fact: I probably spent more time tweaking the exact line-height rhythm on these paragraphs than I did building the entire routing system. Priorities, right?</span>
      </div>
      
      <hr class="w-full border-border/40 my-16 sm:my-20" />
      
      <h2>Moving Forward</h2>
      
      <p>
        If you're reading this, thank you for stopping by my little corner of the internet. Whether you're a founder looking to scale a new ecosystem, or a fellow developer hunting for clean Next.js patterns—make yourself at home. Let's build something honest.
      </p>
      <p class="mt-8 text-foreground/80 italic font-medium">
        — Abu Bakar
      </p>
    `
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
    content: `
      <p class="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
        When you start building a Next.js application, the official documentation provides a great starting point. However, as your application grows, dumping everything into the app globally is a recipe for disaster.
      </p>

      <p>
        Over the past few years, I've built dozens of high-traffic Next.js applications for clients ranging from startups to enterprise companies. Through trial and error, I've refined a folder structure that scales seamlessly, promotes separation of concerns, and makes onboarding new developers incredibly frictionless. Let's break it down.
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>The Core Philosophy</h2>

      <p>
        The main goal of this architecture is to decouple business logic from the UI framework. We want our components to be <em>dumb</em> and our hooks/services to be <em>smart</em>.
      </p>

      <div class="my-16 sm:my-20 text-center px-4 sm:px-8">
        <span class="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
        <p class="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
          The folder structure you choose on day one haunts you forever.
        </p>
      </div>

      <p>
        Before we look at the exact folder layout, here are the three golden rules I strictly adhere to on every project:
      </p>

      <ul>
        <li><strong>Domain-Driven Organization</strong>: Group files by feature (e.g., <code>auth</code>, <code>billing</code>) rather than type.</li>
        <li><strong>Colocation</strong>: Keep tests, styles, and types right next to the component they belong to.</li>
        <li><strong>Strict Dependency Rules</strong>: UI components can import services, but services should never import UI components.</li>
      </ul>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-green-500/10 border-green-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-green-500">💡 Tip</span>
        <span class="text-foreground/80 leading-relaxed text-base">Use dynamic imports for heavy components mapped within these features to aggressively optimize your chunk sizes!</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>The Folder Breakdown</h2>

      <p>
        Here's the minimal skeleton I use to kick off any serious Next.js project using the App Router:
      </p>

      <div class="relative my-10 group">
        <div class="absolute top-0 right-0 px-3 py-1.5 text-xs font-mono font-medium text-gray-400 bg-white/10 dark:text-foreground/40 dark:bg-foreground/[0.03] rounded-bl-lg rounded-tr-xl border-b border-l border-border/20">
          tsx
        </div>
        <pre class="bg-[#101010] dark:bg-[#161616] border border-border/20 border-l-2 border-l-sky-500 rounded-xl p-6 pt-10 overflow-x-auto shadow-sm">
          <code class="text-sm text-gray-300 dark:text-foreground/80 font-mono whitespace-pre font-light">src/
  app/              # Next.js App Router (Routing only)
  components/       # Global, reusable UI components
  features/         # Domain-specific modules (The core magic)
  lib/              # Third-party wrappers (Axios, Prisma)
  types/            # Global TypeScript definitions
  utils/            # Pure helper functions
</code>
        </pre>
      </div>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-amber-500/10 border-amber-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-amber-500">⚠️ Warning</span>
        <span class="text-foreground/80 leading-relaxed text-base">Never commit your <code>.env</code> file directly into these directories. Keep environments completely detached from structural trees!</span>
      </div>

      <h3>The Features Directory (The Secret Sauce)</h3>

      <p>
        The <code>features</code> directory is where the real architecture happens. Instead of flat lists of components and hooks, we group them by domain feature. Notice how everything naturally wraps inwards.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-sky-500/10 border-sky-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-sky-500">📝 Note</span>
        <span class="text-foreground/80 leading-relaxed text-base">This explicit feature structure predominantly applies to applications using routing mechanisms like Next.js App Router where logic segregation heavily favors the developer.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Conclusion</h2>

      <p>
        This structure has saved me hundreds of hours of refactoring. It enforces discipline, makes the codebase instantly navigable for newcomers, and directly addresses the chaos that usually ensues when a Next.js side-project scales into a production enterprise application.
      </p>
    `
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
    content: `
      <p class="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
        System design sounds like something only senior engineers at Google worry about. It's not. If you've ever built something that broke under real users, you've already felt the consequences of ignoring it.
      </p>

      <p>
        I want to be honest with you — I didn't care about system design when I started coding. I just wanted things to work. Ship fast, fix later. That mindset is fine until it isn't, and it usually stops being fine right when it matters most: when a real client is watching their product fall apart.
      </p>

      <p>
        This post is for developers who are past "hello world" but haven't yet thought seriously about how their systems hold together under pressure. It's also for founders and clients who want to understand why good architecture costs more upfront — and saves a fortune later.
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>So What Actually Is System Design?</h2>

      <p>
        At its core, system design is the process of defining how the different pieces of your application talk to each other, handle load, recover from failure, and scale over time. It's not about a specific language or framework — it's about decisions.
      </p>

      <div class="my-16 sm:my-20 text-center px-4 sm:px-8">
        <span class="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
        <p class="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
          Every architectural decision is a bet. The goal is to make informed ones.
        </p>
      </div>

      <p>
        Think of it like building a house. You can slap walls together quickly, or you can spend a day planning where the load-bearing walls go. Both look the same on day one. At month six, one of them is still standing.
      </p>

      <p>
        The decisions system design covers include things like: where does your data live, how do different services communicate, what happens when one part crashes, and how do you handle ten users versus ten thousand?
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>The Three Things That Actually Break Systems</h2>

      <p>
        In my experience working on client projects, systems don't break because of bad code. They break because of bad decisions made before a single line was written. Here's what I keep seeing:
      </p>

      <ul>
        <li><strong>No separation of concerns.</strong> When your database logic, business logic, and UI logic are all tangled together, changing one thing breaks three others. I've inherited codebases where a single file was doing routing, data fetching, and rendering. That's not a codebase — that's a trap.</li>
        <li><strong>No thought given to failure.</strong> What happens when your API is down? What happens when the database query times out? Most early-stage apps just crash. A designed system degrades gracefully — it shows a cached version, queues the request, or at least gives the user a useful message.</li>
        <li><strong>Scaling was never considered.</strong> This is the classic one. Works perfectly with 10 users. Explodes at 500. Usually because every request is hitting the database directly with no caching, no connection pooling, no nothing.</li>
      </ul>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-amber-500/10 border-amber-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-amber-500">⚠️ Real talk</span>
        <span class="text-foreground/80 leading-relaxed text-base">I've seen a client lose a product launch because their server couldn't handle the traffic spike from a single newsletter email. The fix took two hours. The cost — in reputation and revenue — was far higher.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>You Don't Need to Be a Senior Engineer</h2>

      <p>
        Here's the part nobody tells junior developers: you don't need to design distributed systems at Netflix scale to benefit from thinking architecturally. Even small projects get cleaner, faster, and easier to maintain when you ask a few basic questions before you start building.
      </p>

      <p>
        Questions like: Where will this data live and who owns it? What are the boundaries between different parts of this app? What's the worst thing that could go wrong, and what happens when it does?
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-sky-500/10 border-sky-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-sky-500">📝 Note</span>
        <span class="text-foreground/80 leading-relaxed text-base">For clients reading this: when a developer asks you about expected traffic, data sensitivity, or future features before writing code — that's a good sign. They're designing, not just coding.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Where to Go From Here</h2>

      <p>
        If you're a developer, start small. Pick one project and draw out how the data flows through it — even on paper. Identify the parts that would break first under load. That mental habit is the foundation of everything else.
      </p>

      <p>
        If you're a founder or client, the takeaway is simpler: invest in architecture conversations early. A few extra hours of planning at the start of a project is worth weeks of firefighting later.
      </p>

      <p>
        I'll be writing more specifically about the patterns I use in client projects — API design, caching strategies, database structuring — in future posts. This is just the foundation.
      </p>

      <p class="mt-8 text-foreground/80 italic font-medium">
        — Abu Bakar
      </p>
    `
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
    content: `
      <p class="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
        There's a specific kind of frustration that only happens when you're staring at a Figma file trying to turn it into real code. The design looks clean. Your implementation looks almost right but not quite. And you can't figure out why.
      </p>

      <p>
        I've been there more times than I'd like to admit. Over time I've developed a workflow that makes the translation from design to production code feel less like guesswork and more like a process. That's what this post is about.
      </p>

      <p>
        Fair warning: this isn't a tutorial on Figma features. This is the opinionated workflow I actually use on client projects, explained honestly — including the parts where I've gotten it wrong.
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Step One: Read the Design Before You Touch the Code</h2>

      <p>
        This sounds obvious. It isn't. Most developers (myself included, early on) open a Figma file and immediately start coding the first component they see. That's a mistake.
      </p>

      <p>
        Spend the first 15 minutes just reading. Look at every screen. Understand the full scope. Ask yourself: what are the repeating patterns here? What components appear more than once? Where does the spacing feel consistent and where does it vary?
      </p>

      <div class="my-16 sm:my-20 text-center px-4 sm:px-8">
        <span class="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
        <p class="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
          The component you build first sets the standard for every component after it.
        </p>
      </div>

      <p>
        When I take this time upfront, I always catch things I would have built wrong. A button that appears on 12 screens but has three slightly different variants. A card component where the padding changes on mobile but nobody mentioned it. Better to find these in Figma than in a PR review.
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Step Two: Extract the Design Tokens First</h2>

      <p>
        Before a single component, I pull out the design tokens — colors, typography scale, spacing rhythm, border radii. In Tailwind projects, these go into the config or CSS variables. In any project, they become the foundation everything else is built on.
      </p>

      <ul>
        <li><strong>Colors:</strong> Primary, secondary, surface, border, and text variants. If the designer used consistent values, you'll see patterns. If they didn't, now's the time to normalize them — with the designer's input, not without it.</li>
        <li><strong>Typography:</strong> What font sizes are actually used? What line heights? I've seen Figma files with 14 different font sizes that could be reduced to 5. Clean that up before coding it.</li>
        <li><strong>Spacing:</strong> Does the design use a consistent spacing scale (4px, 8px, 16px, 24px, 32px)? If yes, great — map it to Tailwind's defaults. If not, ask why.</li>
      </ul>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-green-500/10 border-green-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-green-500">💡 Tip</span>
        <span class="text-foreground/80 leading-relaxed text-base">Use Figma's "Inspect" panel and the Variables panel to check if the designer already defined tokens. Good designers will have. If they haven't, you're doing their job for them — charge accordingly.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Step Three: Build Components in Isolation</h2>

      <p>
        I build every component completely in isolation before assembling pages. This means no layout context, no parent components, just the component and its own internal logic. If it looks right in isolation, it'll behave predictably when composed.
      </p>

      <p>
        The order I follow: atoms first (buttons, inputs, badges), then molecules (cards, form groups), then organisms (navbars, hero sections), then pages. This is just atomic design in practice, and it works.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-sky-500/10 border-sky-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-sky-500">📝 Note</span>
        <span class="text-foreground/80 leading-relaxed text-base">I don't use Storybook on every project — it's overkill for smaller builds. But for client projects with 20+ components, the isolation discipline it enforces is genuinely valuable.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Step Four: The Pixel-Perfect Myth</h2>

      <p>
        Here's something I had to learn the hard way: pixel-perfect implementation is not the goal. Faithful implementation is.
      </p>

      <p>
        Figma designs are static. Your code is dynamic. Text overflows. Images load late. Screens are wider or narrower than the designer expected. Obsessing over matching a static frame exactly will drive you insane and produce brittle code.
      </p>

      <p>
        Instead, focus on matching the intent: the visual weight, the hierarchy, the spacing rhythm, the feel. If a heading is meant to feel dominant, make it dominant. If a section is meant to breathe, give it space. The specific pixel values are a guide, not a contract.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-amber-500/10 border-amber-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-amber-500">⚠️ Warning</span>
        <span class="text-foreground/80 leading-relaxed text-base">If a client or designer insists on pixel-perfect matching across every browser and screen size, have an honest conversation about what's technically feasible. Set expectations early or you'll be chasing ghosts forever.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>The Mindset Shift That Changed Everything</h2>

      <p>
        The biggest shift in my Figma-to-code workflow wasn't a tool or a technique. It was accepting that I'm not a copy machine. My job isn't to reproduce the design — it's to interpret it for the medium it actually lives in: a browser, with real constraints, real users, and real conditions the design file never had to account for.
      </p>

      <p>
        When I stopped trying to copy and started trying to understand, my implementations got better and faster at the same time.
      </p>

      <p class="mt-8 text-foreground/80 italic font-medium">
        — Abu Bakar
      </p>
    `
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
    content: `
      <p class="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 font-medium">
        A client came to me with a Next.js site that was scoring 34 on Google PageSpeed. Their bounce rate was climbing, their SEO rankings were slipping, and they couldn't figure out why. Six hours later, the score was 91. Here's exactly what I did.
      </p>

      <p>
        I'm writing this as a practical walkthrough, not a theory post. Every fix mentioned here is something I actually implemented on a real project. The numbers are real. The order matters — I'll explain why as we go.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-sky-500/10 border-sky-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-sky-500">📝 Context</span>
        <span class="text-foreground/80 leading-relaxed text-base">The site was a Next.js 14 marketing site with a blog, several image-heavy landing pages, and a contact form. No e-commerce, no real-time features. Starting PageSpeed score: 34 mobile, 61 desktop.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Step One: Audit Before You Touch Anything</h2>

      <p>
        The temptation when a site is slow is to immediately start making changes. Resist it. Spend the first hour just understanding what's actually slow and why.
      </p>

      <p>
        I run three tools before touching any code: Google PageSpeed Insights (for the Core Web Vitals breakdown), Chrome DevTools Network tab (for waterfall analysis), and <code>next build</code> output (for bundle size). Together, these tell you where the real problems are — which is almost never where you assume.
      </p>

      <div class="my-16 sm:my-20 text-center px-4 sm:px-8">
        <span class="block text-5xl sm:text-6xl text-sky-500/40 mb-4 sm:mb-6 tracking-tighter">❝</span>
        <p class="text-2xl sm:text-3xl font-medium tracking-tight text-foreground/90 leading-snug">
          Optimizing without measuring first is just guessing with extra steps.
        </p>
      </div>

      <p>
        In this case, the audit revealed three main culprits: unoptimized images (massive LCP impact), a third-party script loaded synchronously in the head, and a client component that was pulling in an enormous library for a feature used on exactly one page.
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Fix One: Images (Biggest Single Win)</h2>

      <p>
        The site had hero images uploaded as raw PNGs — some over 4MB. They were being served directly with no optimization. This alone was destroying the LCP (Largest Contentful Paint) score.
      </p>

      <ul>
        <li><strong>Switched to Next.js <code>Image</code> component</strong> across all pages. This gets you automatic WebP conversion, lazy loading by default, and proper sizing attributes.</li>
        <li><strong>Added explicit <code>width</code> and <code>height</code></strong> to every image to eliminate layout shift (CLS).</li>
        <li><strong>Used <code>priority</code> prop</strong> on above-the-fold hero images so they preload instead of lazy loading.</li>
        <li><strong>Compressed existing assets</strong> using Squoosh before re-uploading. The 4MB PNG became a 180KB WebP. Same visual quality.</li>
      </ul>

      <p>
        This single fix moved the PageSpeed score from 34 to 58. Images are almost always the biggest win on marketing sites.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-green-500/10 border-green-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-green-500">💡 Tip</span>
        <span class="text-foreground/80 leading-relaxed text-base">If you're on Vercel, Next.js Image optimization is free and handled automatically. If you're self-hosting, make sure you have a proper image optimization pipeline configured or the component won't do much.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Fix Two: The Third-Party Script</h2>

      <p>
        There was a live chat widget script being loaded in <code>_document.tsx</code> synchronously — meaning the entire page waited for it before rendering. The chat widget was used by maybe 5% of visitors.
      </p>

      <p>
        The fix: move it to Next.js <code>Script</code> component with <code>strategy="lazyOnload"</code>. This defers it until after the page is fully interactive. The chat widget still loads — just after the user can already see and use the page.
      </p>

      <p>
        Score moved from 58 to 74. One line change.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-amber-500/10 border-amber-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-amber-500">⚠️ Warning</span>
        <span class="text-foreground/80 leading-relaxed text-base">Always check with your client before changing how third-party scripts load. Analytics scripts especially can have data implications if deferred incorrectly.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>Fix Three: Bundle Splitting</h2>

      <p>
        The <code>next build</code> output showed one page with a 340KB JavaScript bundle. That's enormous for a marketing page. The culprit was a rich text editor library imported into a component that rendered a single editable field on the contact page.
      </p>

      <ul>
        <li><strong>Dynamic imported the component</strong> using <code>next/dynamic</code> with <code>ssr: false</code> so it only loads when that page is actually visited.</li>
        <li><strong>Replaced the library entirely</strong> with a native <code>textarea</code> — the "rich text" feature wasn't actually being used by anyone.</li>
      </ul>

      <p>
        Bundle dropped from 340KB to 67KB on that page. Score moved from 74 to 89.
      </p>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>The Last Few Points: Font and Metadata</h2>

      <p>
        The final push from 89 to 91 came from two small things. First, the site was loading Google Fonts via a standard <code>link</code> tag. Switching to <code>next/font</code> eliminated the external network request and removed font-related layout shift entirely.
      </p>

      <p>
        Second, several pages were missing <code>meta description</code> tags and had duplicate title tags. These don't affect PageSpeed score directly, but they were flagged in the SEO audit section — and they matter for the organic traffic the client actually cared about.
      </p>

      <div class="my-8 px-5 sm:px-6 py-5 rounded-r-xl border-l-2 bg-sky-500/10 border-sky-500 flex flex-col gap-2">
        <span class="font-semibold tracking-wide text-sm uppercase text-sky-500">📝 Final Score</span>
        <span class="text-foreground/80 leading-relaxed text-base">Mobile: 34 → 91. Desktop: 61 → 97. Total time: ~6 hours including audit. No framework changes, no rewrites, no new infrastructure. Just focused, methodical fixes in the right order.</span>
      </div>

      <hr class="w-full border-border/40 my-16 sm:my-20" />

      <h2>The Pattern Behind All of It</h2>

      <p>
        Looking back at all three fixes, they follow the same pattern: measure first, fix the biggest impact item first, don't over-engineer. The temptation on performance work is to reach for complex solutions — CDNs, edge functions, caching layers. Those things matter at scale. At the stage most client projects are at, the wins are almost always in the basics.
      </p>

      <p>
        Unoptimized images. Blocking scripts. Unnecessary JavaScript. Fix those three things on any marketing site and you'll get 80% of the gains you're looking for.
      </p>

      <p class="mt-8 text-foreground/80 italic font-medium">
        — Abu Bakar
      </p>
    `
  }
];

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A highly modular e-commerce platform built for scale.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    featured: true
  },
  {
    title: "Project Beta",
    description: "A high-performance analytics dashboard processing live data.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    featured: true
  },
  {
    title: "Project Gamma",
    description: "An elegant, structurally focused CMS for content creators.",
    tags: ["GraphQL", "Next.js", "MongoDB"],
    link: "#",
    featured: true
  },
  {
    title: "Project Delta",
    description: "Minimalist mobile application for seamless interactions.",
    tags: ["React Native", "Expo", "Zustand"],
    link: "#",
    featured: true
  }
];
"use client";

export default function Resume() {
  return (
    <>      {/* ── SCREEN VERSION ───────────────────────────── */}
      <div id="screen-resume" className="w-full max-w-5xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
          <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-2 px-4 py-2 rounded-md border border-foreground/20 text-sm font-medium hover:bg-foreground/5 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print
          </button>
        </div>

        <div className="space-y-12 max-w-3xl">

          {/* Identity */}
          <section className="flex items-center gap-5">
            <img
              src="https://ik.imagekit.io/abubakarhasan/dummy2.webp?updatedAt=1772271376382"
              alt="Abu Bakar Hasan"
              className="w-16 h-16 rounded-full object-cover border border-foreground/10"
            />
            <div>
              <h2 className="text-xl font-semibold">Abu Bakar Hasan</h2>
              <p className="text-foreground/60 text-sm">Freelance Frontend Developer</p>
              <p className="text-foreground/40 text-xs mt-0.5">abubakarhasan2505@gmail.com · Pakur, Jharkhand</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-medium mb-4 pb-2 border-b border-foreground/10">Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-0">
                  <h3 className="font-medium text-lg text-foreground">Freelance Frontend Developer</h3>
                  <span className="text-sm text-foreground/60">2023 — Present</span>
                </div>
                <p className="text-foreground/70">
                  Building and shipping real-world web projects independently. Focused on React, Next.js,
                  and Tailwind CSS with a growing foundation in backend development — APIs, databases, and server-side logic.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-medium mb-4 pb-2 border-b border-foreground/10">Education</h2>
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-0">
                <h3 className="font-medium text-lg text-foreground">Bachelor of Commerce (B.Com)</h3>
                <span className="text-sm text-foreground/60">2023 — Ongoing</span>
              </div>
              <p className="text-foreground/70">
                Currently in Semester III. Pursuing web development in parallel,
                self-taught through hands-on projects and continuous learning.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-medium mb-4 pb-2 border-b border-foreground/10">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-base text-foreground mb-1">Frontend</h3>
                <p className="text-foreground/70">React, Next.js, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3, Accessibility (A11y)</p>
              </div>
              <div>
                <h3 className="font-medium text-base text-foreground mb-1">
                  Backend & APIs <span className="text-sm font-normal text-foreground/50">(Learning)</span>
                </h3>
                <p className="text-foreground/70">Node.js, Express, RESTful APIs, GraphQL, Serverless Functions</p>
              </div>
              <div>
                <h3 className="font-medium text-base text-foreground mb-1">
                  Database & Cloud <span className="text-sm font-normal text-foreground/50">(Exploring)</span>
                </h3>
                <p className="text-foreground/70">PostgreSQL, MongoDB, Redis, AWS, Vercel, Docker</p>
              </div>
              <div>
                <h3 className="font-medium text-base text-foreground mb-1">Tools & Workflow</h3>
                <p className="text-foreground/70">Git, CI/CD, Jest, Cypress, Webpack, Vite</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ── PRINT VERSION ─────────────────────────────── */}
      <div id="print-resume">
        <div className="print-header">
          <img
            src="https://ik.imagekit.io/abubakarhasan/dummy2.webp?updatedAt=1772271376382"
            alt="Abu Bakar Hasan"
            className="print-avatar"
          />
          <div>
            <p className="print-name">Abu Bakar Hasan</p>
            <p className="print-title">Freelance Frontend Developer</p>
            <div className="print-contact">
              <span>abubakarhasan2505@gmail.com</span>
              <span>Pakur, Jharkhand, India</span>
              <span>abh-portfolio1.vercel.app</span>
              <span>x.com/abu_bakar_hasan</span>
            </div>
          </div>
        </div>

        <div className="print-section">
          <p className="print-section-title">Experience</p>
          <div className="print-entry">
            <div className="print-entry-left">
              <p className="print-entry-role">Freelance Frontend Developer</p>
              <p className="print-entry-desc">
                Building and shipping real-world web projects independently. Focused on React, Next.js,
                and Tailwind CSS with a growing foundation in backend development — APIs, databases, and server-side logic.
              </p>
            </div>
            <span className="print-date">2023 — Present</span>
          </div>
        </div>

        <div className="print-section">
          <p className="print-section-title">Education</p>
          <div className="print-entry">
            <div className="print-entry-left">
              <p className="print-entry-role">Bachelor of Commerce (B.Com)</p>
              <p className="print-entry-sub">Self-studying web development in parallel through hands-on projects.</p>
            </div>
            <span className="print-date">2023 — Ongoing</span>
          </div>
        </div>

        <div className="print-section">
          <p className="print-section-title">Skills</p>
          <div className="print-skills-grid">
            <div>
              <p className="print-skill-label">Frontend</p>
              <p className="print-skill-value">React, Next.js, TypeScript, Tailwind CSS, Framer Motion, HTML5, CSS3, A11y</p>
            </div>
            <div>
              <p className="print-skill-label">Backend & APIs <span className="print-skill-tag">(Learning)</span></p>
              <p className="print-skill-value">Node.js, Express, RESTful APIs, GraphQL, Serverless Functions</p>
            </div>
            <div>
              <p className="print-skill-label">Database & Cloud <span className="print-skill-tag">(Exploring)</span></p>
              <p className="print-skill-value">PostgreSQL, MongoDB, Redis, AWS, Vercel, Docker</p>
            </div>
            <div>
              <p className="print-skill-label">Tools & Workflow</p>
              <p className="print-skill-value">Git, CI/CD, Jest, Cypress, Webpack, Vite</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
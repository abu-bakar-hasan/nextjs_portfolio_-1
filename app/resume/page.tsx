export default function Resume() {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-8">Resume</h1>
      <div className="space-y-12 max-w-3xl">
        <section>
          <h2 className="text-xl font-medium mb-4 pb-2 border-b border-foreground/10">Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-0">
                <h3 className="font-medium text-lg text-foreground">Senior Engineer</h3>
                <span className="text-sm text-foreground/60">2021 - Present</span>
              </div>
              <p className="text-foreground/70">Leading frontend architecture and focusing on performance optimizations.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-0">
                <h3 className="font-medium text-lg text-foreground">Software Developer</h3>
                <span className="text-sm text-foreground/60">2018 - 2021</span>
              </div>
              <p className="text-foreground/70">Built accessible interfaces and developed clean scalable structural foundations.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-medium mb-4 pb-2 border-b border-foreground/10">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2 gap-1 sm:gap-0">
                <h3 className="font-medium text-lg text-foreground">Bachelor of Computer Science</h3>
                <span className="text-sm text-foreground/60">2014 - 2018</span>
              </div>
              <p className="text-foreground/70">University of Technology</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

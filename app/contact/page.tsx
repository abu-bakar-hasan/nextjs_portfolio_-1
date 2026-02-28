import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12 flex flex-col items-start min-h-[70vh] justify-center">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Let's Connect</h1>
        <p className="text-foreground/80 mb-10 leading-relaxed text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <a 
          href="mailto:abubakarhasan2505@gmail.com" 
          className="group inline-flex items-center gap-3 text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 group-hover:opacity-100 flex-shrink-0" />
          <span className="break-all">abubakarhasan2505@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

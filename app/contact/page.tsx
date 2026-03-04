"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");
    
    // Store reference to form before async operations since event.currentTarget becomes null
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "4b0ceb2e-5449-4b8f-b71a-45255fd93fbd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!", {
          id: toastId,
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        console.log("Error", data);
        toast.error("Failed to send message", {
          id: toastId,
          description: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An error occurred", {
        id: toastId,
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-12 sm:py-20 flex flex-col md:flex-row gap-12 sm:gap-16 min-h-[70vh] justify-between">
      {/* Left Area: Text & Email */}
      <div className="max-w-xl w-full md:w-[45%] flex flex-col pt-4 sm:pt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Let's Connect</h1>
        <p className="text-foreground/80 mb-10 leading-relaxed text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <a
          href="mailto:abubakarhasan2505@gmail.com"
          className="group inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          <Mail className="w-6 h-6 sm:w-7 sm:h-7 opacity-70 group-hover:opacity-100 shrink-0" />
          <span>abubakarhasan2505@gmail.com</span>
        </a>
      </div>

      {/* Right Area: Form */}
      <div className="w-full md:w-[55%] border border-border/60 rounded-2xl p-6 sm:p-8 bg-card/30 backdrop-blur-sm shadow-sm">
        <h2 className="text-xl font-medium mb-6">Send Me a Message</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
           <div className="flex flex-col gap-1.5 flex-1">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required 
                className="w-full px-4 py-2.5 rounded-lg border border-border/80 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Contact Number (optional)</label>
              <input
                type="tel" 
                name="phone" 
                id="phone"
                className="w-full px-4 py-2.5 rounded-lg border border-border/80 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                placeholder="+91 999 888 1122"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
            <input
              type="email"
              name="email" 
              id="email"
              required 
              className="w-full px-4 py-2.5 rounded-lg border border-border/80 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
            <input
              type="text"
              name="subject" 
              id="subject"
              required 
              className="w-full px-4 py-2.5 rounded-lg border border-border/80 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              placeholder="How can I help you?"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground/80">
              Message
            </label>
            <textarea name="message"
              id="message"
              rows={4}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-border/80 bg-background/50 focus:bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full px-4 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center h-13"
          >
          {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></span>
            ) : "Submit Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

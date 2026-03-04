"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail01Icon as Mail, InstagramIcon as Instagram, Cancel01Icon as X } from "hugeicons-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ContactForm() {
  const searchParams = useSearchParams();
  const fromParam = searchParams.get("from");
  const interestParam = searchParams.get("interest");
  const postParam = searchParams.get("post");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  
  const [serviceValue, setServiceValue] = useState<string>("");
  const [subjectValue, setSubjectValue] = useState("");

  useEffect(() => {
    if (fromParam || interestParam) {
      setShowBanner(true);
    }

    if (interestParam || fromParam === "blog") {
      if (interestParam === "web-development") {
        setServiceValue("Custom Web Development");
        setSubjectValue("Inquiry about Custom Web Development");
      } else if (interestParam === "system-design") {
        setServiceValue("System Design Consultation");
        setSubjectValue("Inquiry about System Design Consultation");
      } else if (interestParam === "ui-to-code") {
        setServiceValue("UI to Code");
        setSubjectValue("Inquiry about UI to Code");
      } else if (interestParam === "performance-audit") {
        setServiceValue("Performance Audit");
        setSubjectValue("Inquiry about Performance Audit");
      } else if (fromParam === "blog") {
        setServiceValue("Read a blog post, have a question");
        setSubjectValue(postParam ? `Question about: ${postParam}` : "Question about a blog post");
      }
    }
  }, [fromParam, interestParam, postParam]);

  const getBannerText = () => {
    if (fromParam === "blog" && postParam) return `You're reaching out after reading: ${postParam}`;
    if (interestParam === "web-development") return "You're reaching out about Custom Web Development";
    if (interestParam === "system-design") return "You're reaching out about System Design Consultation";
    if (interestParam === "ui-to-code") return "You're reaching out about UI to Code";
    if (interestParam === "performance-audit") return "You're reaching out about Performance Audit";
    return "";
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");
    
    // Store reference to form before async operations since event.currentTarget becomes null
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "4b0ceb2e-5449-4b8f-b71a-45255fd93fbd");
    
    // Add custom selection fields that track attribution directly back to forms organically.
    if (fromParam) formData.append("From Page", fromParam);
    if (interestParam) formData.append("Interest", interestParam);
    if (serviceValue) formData.append("Service Needed", serviceValue);

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
        setSubjectValue("");
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
    <>
      {showBanner && getBannerText() && (
        <div className="flex items-center justify-between gap-4 px-4 py-3 mb-6 bg-foreground/[0.03] border border-border/50 text-foreground/80 text-sm font-medium rounded-lg">
          <span>{getBannerText()}</span>
          <button type="button" onClick={() => setShowBanner(false)} className="opacity-50 hover:opacity-100 transition-opacity">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      
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

        {/* Dropdown for Context Interest */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground/80">How can I help you?</label>
          <Select 
            value={serviceValue} 
            onValueChange={setServiceValue} 
            required
          >
            <SelectTrigger className="w-full px-4 py-3.5 sm:py-2.5 rounded-lg border border-border/80 bg-background/50 hover:bg-background/80 focus:bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all h-auto text-base sm:text-sm">
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent className="bg-background border-border/80 text-foreground">
              <SelectItem value="Custom Web Development" className="cursor-pointer hover:bg-foreground/[0.03]">Custom Web Development</SelectItem>
              <SelectItem value="System Design Consultation" className="cursor-pointer hover:bg-foreground/[0.03]">System Design Consultation</SelectItem>
              <SelectItem value="UI to Code" className="cursor-pointer hover:bg-foreground/[0.03]">UI to Code</SelectItem>
              <SelectItem value="Performance Audit" className="cursor-pointer hover:bg-foreground/[0.03]">Performance Audit</SelectItem>
              <SelectItem value="Read a blog post, have a question" className="cursor-pointer hover:bg-foreground/[0.03]">Read a blog post, have a question</SelectItem>
              <SelectItem value="Something else" className="cursor-pointer hover:bg-foreground/[0.03]">Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
          <input
            type="text"
            name="subject" 
            id="subject"
            value={subjectValue}
            onChange={(e) => setSubjectValue(e.target.value)}
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
    </>
  );
}

export default function Contact() {
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
        <a href="https://www.instagram.com/abu_bakar_hasan" className="group inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity mt-4 lg:mt-6">
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7 opacity-70 group-hover:opacity-100 shrink-0" />
          <span>abu_bakar_hasan</span>
        </a>
      </div>

      {/* Right Area: Form */}
      <div className="w-full md:w-[55%] border border-border/60 rounded-2xl p-6 sm:p-8 bg-card/30 backdrop-blur-sm shadow-sm">
        <h2 className="text-xl font-medium mb-6">Get in touch</h2>
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-foreground/50 text-sm font-medium animate-pulse">Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { Loader } from "./ui/Loader";

export function RouteLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    // Intercept clicks on links to show custom loading state
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (!target.href) return;
      
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(target.href);
      
      // Don't trigger for same page hash links or external links
      if (
        targetUrl.hostname !== currentUrl.hostname ||
        (targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search) ||
        target.target === "_blank"
      ) {
        return;
      }

      setIsNavigating(true);
      NProgress.start();
      
      // Determine destination name
      let routeName = "Page";
      if (targetUrl.pathname === "/") {
        routeName = "Home";
      } else {
        const pathParts = targetUrl.pathname.split("/").filter(Boolean);
        if (pathParts.length > 0) {
          routeName = pathParts[pathParts.length - 1];
          routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1).replace(/-/g, ' ');
        }
      }
      setDestination(routeName);
    };

    const attachListeners = () => {
      const links = document.querySelectorAll("a[href]");
      links.forEach((link) => {
        link.addEventListener("click", handleAnchorClick as EventListener);
      });
    };

    attachListeners();

    // Create a mutation observer to attach listeners to newly rendered links
    const observer = new MutationObserver((mutations) => {
      let shouldReattach = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldReattach = true;
          break;
        }
      }
      if (shouldReattach) attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      const links = document.querySelectorAll("a[href]");
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick as EventListener);
      });
      observer.disconnect();
    };
  }, []);

  // When pathname or searchParams change, navigation is complete
  useEffect(() => {
    setIsNavigating(false);
    NProgress.done();
  }, [pathname, searchParams]);

  if (!isNavigating) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-4 px-6 py-3 bg-[#F9F8F6] dark:bg-[#111111] border border-[#1C1C1C]/10 dark:border-[#EFEFEF]/10 rounded-full shadow-lg shadow-black/5 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="scale-50 -my-8 -ml-8">
         <Loader />
      </div>
      <span className="text-[#1C1C1C] dark:text-[#EFEFEF] font-medium font-sans text-sm tracking-wide mr-2">
        Loading {destination}...
      </span>
    </div>
  );
}

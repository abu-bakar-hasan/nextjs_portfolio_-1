"use client";

import * as React from "react";
import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full flex items-center justify-center p-2" />
    );
  }

  return (
    <div className="flex items-center justify-center relative z-50">
      <ThemeToggleButton variant="circle" start="top-right" />
    </div>
  );
}

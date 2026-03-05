"use client";
import { Download01Icon as Download } from "hugeicons-react";

export function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 text-sm font-medium px-4 py-2 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
    >
      <Download className="w-4 h-4" /> Download PDF
    </button>
  );
}

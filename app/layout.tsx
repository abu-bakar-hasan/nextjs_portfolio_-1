import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { RouteLoader } from "@/components/route-loader";

export const metadata: Metadata = {
  title: "Premium Minimal Portfolio",
  description: "A professional portfolio built with a structure-first philosophy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white font-sans font-normal overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RouteLoader />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

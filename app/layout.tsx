import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { RouteLoader } from "@/components/route-loader";
import { InitialLoader } from "@/components/initial-loader";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Abu Bakar Hasan — Web Developer & System Designer",
    template: "%s — Abu Bakar Hasan"
  },
  description: "A professional portfolio built with a structure-first philosophy.",
  icons: {
    icon: "https://ik.imagekit.io/abubakarhasan/abh(white).svg"
  }
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
          <InitialLoader />
          <RouteLoader />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

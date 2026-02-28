import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl mx-auto px-8 text-center min-h-[60vh]">
      <h2 className="text-3xl font-semibold tracking-tight mb-4">404 - Page Not Found</h2>
      <p className="text-foreground/70 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="inline-flex items-center justify-center h-10 px-6 font-medium text-accent bg-transparent border border-accent/20 transition-colors hover:bg-accent/5">
        <ArrowLeft className="mr-2 w-4 h-4" /> Return Home
      </Link>
    </div>
  );
}

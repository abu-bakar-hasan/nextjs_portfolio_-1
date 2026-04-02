import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const metadata = {
  title: 'Notes',
  description: 'Things I wrote down so I don\'t forget.',
};

export default function NotesPage() {
  const notesDir = path.join(process.cwd(), 'content/notes');
  let notes: { slug: string; title: string; category: string }[] = [];

  if (fs.existsSync(notesDir)) {
    const files = fs.readdirSync(notesDir).filter((file) => file.endsWith('.md'));

    notes = files.map((file) => {
      const slug = file.replace(/\.md$/, '');
      const content = fs.readFileSync(path.join(notesDir, file), 'utf8');
      
      const match = content.match(/^#\s+(.+)$/m);
      const title = match ? match[1] : slug;
      
      const categoryRaw = slug.split('-')[0];
      const category = categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1);

      return {
        slug,
        title,
        category,
      };
    });
  }

  return (
    <div className="w-full mx-auto max-w-[1600px] px-6 sm:px-8 py-12 sm:py-20 lg:py-24 flex flex-col gap-12 font-sans">
      <div className="flex flex-col gap-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
          Notes
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
          Things I wrote down so I don't forget.
        </p>
      </div>

      {notes.length === 0 ? (
        <p className="text-foreground/60 text-lg">Nothing here yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Link 
              key={note.slug} 
              href={`/notes/${note.slug}`}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-foreground/20 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-foreground border border-accent/20">
                  {note.category}
                </span>
              </div>
              <h2 className="text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                {note.title}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

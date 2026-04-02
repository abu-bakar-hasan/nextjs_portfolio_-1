import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}


export default async function NotePage(props: Props) {
  const { slug } = await props.params;
  const filePath = path.join(process.cwd(), 'content/notes', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract h1 for the page title and remove it from the content
  const match = content.match(/^#\s+(.+)$/m);
  const title = match ? match[1] : slug;
  
  const contentWithoutH1 = content.replace(/^#\s+(.+)$/m, '').trim();

  return (
    <article className="w-full mx-auto max-w-[1000px] px-6 sm:px-8 py-12 sm:py-20 flex flex-col gap-10 font-sans">
      <Link 
        href="/notes" 
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors w-fit"
      >
        ← Notes
      </Link>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-tight">
        {title}
      </h1>

      <div className="note-body">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const {children, className, node, ref, ...rest} = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={atomDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            }
          }}
        >
          {contentWithoutH1}
        </ReactMarkdown>
      </div>
    </article>
  );
}

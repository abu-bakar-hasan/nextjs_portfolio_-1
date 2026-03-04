import { blogs } from "@/lib/blogs";
import type { Metadata } from "next";
import ClientBlogPost from "./ClientBlogPost";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find(b => b.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found — Abu Bakar Hasan"
    }
  }

  return {
    title: `${post.title} — Abu Bakar Hasan`
  }
}

export default function BlogPost() {
  return <ClientBlogPost />;
}

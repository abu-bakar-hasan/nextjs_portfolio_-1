import { blogs } from "@/lib/blogs";
import type { Metadata } from "next";
import ClientBlogPost from "./ClientBlogPost";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = blogs.find(b => b.slug === params.slug)

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

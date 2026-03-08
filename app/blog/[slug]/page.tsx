import type { Metadata } from "next";
import ClientBlogPost from "./ClientBlogPost";
import { headers } from "next/headers";
import { Blog } from "@/lib/types";

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || 'localhost:3000';
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/blogs/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return {
      title: "Post Not Found — Abu Bakar Hasan"
    }
  }

  return {
    title: `${post.title} — Abu Bakar Hasan`
  }
}

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getBlog(slug);

  return <ClientBlogPost initialPost={post} />;
}

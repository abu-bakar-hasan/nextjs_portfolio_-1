import type { Metadata } from "next";
import ClientBlogList from "./ClientBlogList";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Blog"
};

async function getBlogs() {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || 'localhost:3000';
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/blogs`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function BlogList() {
  const blogs = await getBlogs();

  return <ClientBlogList initialBlogs={blogs} />;
}

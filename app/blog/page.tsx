import type { Metadata } from "next";
import ClientBlogList from "./ClientBlogList";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogList() {
  return <ClientBlogList />;
}

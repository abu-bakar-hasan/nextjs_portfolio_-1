import { ObjectId } from "mongodb";

export interface Blog {
  _id?: ObjectId;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  featured: boolean;
  excerpt: string;
  content: string;
}

export interface Project {
  _id?: ObjectId;
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Blog } from '@/lib/types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const category = searchParams.get('category');

    const client = await clientPromise;
    const db = client.db();

    const query: any = {};
    if (tag) {
      query.tags = tag;
    }
    if (category) {
      query.category = category;
    }

    const blogs = await db.collection<Blog>("blogs").find(query).toArray();

    // Sort by date descending (parsing "MMM YYYY")
    blogs.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    });

    return NextResponse.json(blogs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

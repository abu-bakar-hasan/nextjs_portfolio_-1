import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Blog } from '@/lib/types';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const client = await clientPromise;
    const db = client.db();

    const post = await db.collection<Blog>("blogs").findOne({ slug });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

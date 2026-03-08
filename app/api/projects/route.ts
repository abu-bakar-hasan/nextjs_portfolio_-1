import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Project } from '@/lib/types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');

    const client = await clientPromise;
    const db = client.db();

    const query: any = {};
    if (featured === 'true') {
      query.featured = true;
    }

    const projects = await db.collection<Project>("projects").find(query).toArray();

    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

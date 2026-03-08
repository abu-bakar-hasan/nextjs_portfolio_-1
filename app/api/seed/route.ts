import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { blogs, projects } from '@/lib/seed-data';

export async function GET() {
  // Should only work in development
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    // Drop collections if they exist
    try {
      await db.collection("blogs").drop();
    } catch (e) {
      // Ignore if collection doesn't exist
    }

    try {
      await db.collection("projects").drop();
    } catch (e) {
      // Ignore if collection doesn't exist
    }

    let insertedBlogs = 0;
    let insertedProjects = 0;

    if (blogs && blogs.length > 0) {
      const blogsResult = await db.collection("blogs").insertMany(blogs);
      insertedBlogs = blogsResult.insertedCount;
    }

    if (projects && projects.length > 0) {
      const projectsResult = await db.collection("projects").insertMany(projects);
      insertedProjects = projectsResult.insertedCount;
    }

    return NextResponse.json({
      success: true,
      inserted: { blogs: insertedBlogs, projects: insertedProjects }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

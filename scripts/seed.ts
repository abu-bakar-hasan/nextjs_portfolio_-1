import { MongoClient } from 'mongodb';
import { blogs, projects } from '../lib/seed-data';
import * as dotenv from 'dotenv';

// Load .env.local variables
dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function run() {
  const client = new MongoClient(uri as string);
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db();

    // Drop collections if they exist (ignore errors if they don't)
    try {
      await db.collection("blogs").drop();
      console.log("Dropped collection: blogs");
    } catch (e) {
      console.log("Collection blogs does not exist or could not be dropped.");
    }

    try {
      await db.collection("projects").drop();
      console.log("Dropped collection: projects");
    } catch (e) {
      console.log("Collection projects does not exist or could not be dropped.");
    }

    // Insert blogs
    if (blogs && blogs.length > 0) {
      const blogsResult = await db.collection("blogs").insertMany(blogs);
      console.log(`Inserted ${blogsResult.insertedCount} blogs.`);
    }

    // Insert projects
    if (projects && projects.length > 0) {
      const projectsResult = await db.collection("projects").insertMany(projects);
      console.log(`Inserted ${projectsResult.insertedCount} projects.`);
    }

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

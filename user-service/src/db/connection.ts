import mongoose from "mongoose";

export async function connectDB(uri?: string): Promise<typeof mongoose> {
  const mongoUri = uri || process.env.MONGO_URI || "mongodb://localhost:27017/myapp";

  // Use recommended options (mongoose 6+ uses sensible defaults)
  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB at ${mongoUri}`);
    return conn;
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    throw err;
  }
}

export { mongoose };


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Force close any existing connections
    await mongoose.disconnect();

    // Clear Mongoose's internal cache
    mongoose.models = {};
    mongoose.modelSchemas = {};

    console.log("Attempting to connect to:", process.env.MONGODB_URI);

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected to database: ${conn.connection.name}`);
    console.log(`Host: ${conn.connection.host}`);

    // List all collections
    const collections = await conn.connection.db.listCollections().toArray();
    console.log(
      "Available collections:",
      collections.map((c) => c.name)
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

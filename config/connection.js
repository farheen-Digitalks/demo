import mongoose from 'mongoose';

export const connectDb = async () => {
    const MONGO_URI = process.env.MONGO_URI;

    if(!MONGO_URI) {
        console.log("Database could not connect");
    }

    try{
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Successfully connected to MongoDB");
    }catch(error){
        console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
    }

    mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected.");
  });

  mongoose.connection.on("error", (error) => {
    console.error("❌ MongoDB connection error:", error);
  });
}
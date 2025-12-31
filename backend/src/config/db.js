const mongoose = require("mongoose");

module.exports = function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/paraflow";
  return mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      // In development we don't want the entire app to crash if MongoDB isn't available.
      // Log a clear warning and continue; callers should handle missing DB gracefully.
      console.warn("MongoDB connection warning:", err.message);
      console.warn(
        "Continuing without database. Set MONGO_URI or start a local MongoDB for full functionality."
      );
    });
};

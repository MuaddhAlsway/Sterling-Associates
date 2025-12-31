const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

// Initialize DB connection only if MONGO_URI is provided. This makes local dev easier
// when MongoDB isn't running (you can set MONGO_URI to enable DB features).
if (process.env.MONGO_URI) {
  connectDB().catch((err) => {
    console.warn("connectDB failed:", err && err.message ? err.message : err);
  });
} else {
  console.warn(
    "MONGO_URI not set — skipping DB connection for local development"
  );
}

// Global handler to surface unhandled promise rejections during development.
process.on("unhandledRejection", (reason) => {
  console.warn("Unhandled Rejection:", reason);
});

const authRoutes = require("./routes/auth");
const teamRoutes = require("./routes/team");
const contentRoutes = require("./routes/content");
const uploadRoutes = require("./routes/uploads");
const blogRoutes = require("./routes/blogs");
const contactRoutes = require("./routes/contacts");
const consultationRoutes = require("./routes/consultations");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors());
app.use(express.json({ limit: "8mb" }));

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/consultations", consultationRoutes);

app.get("/", (req, res) => res.json({ ok: true, message: "Paraflow backend" }));

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

// More robust startup logging and error handling to aid diagnostics
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err && err.stack ? err.stack : err);
});

console.log("Node version:", process.version, "CWD:", process.cwd());

const server = app.listen(PORT, HOST, () => {
  const addr = server.address();
  console.log(`Server started on port ${PORT}`);
  console.log("Server address:", addr, "pid:", process.pid);
});

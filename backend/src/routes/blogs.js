const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// List all blogs (sorted by date desc then createdAt desc)
router.get("/", async (req, res) => {
  try {
    const list = await Blog.find().sort({ date: -1, createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// Get single blog
router.get("/:id", async (req, res) => {
  try {
    const doc = await Blog.findById(req.params.id);
    if (!doc) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const b = new Blog(req.body);
    await b.save();
    res.json({ ok: true, data: b });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, data: updated });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;

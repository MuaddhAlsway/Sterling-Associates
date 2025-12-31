const express = require("express");
const router = express.Router();
const SiteContent = require("../models/SiteContent");

// Get content by language (query ?lang=en)
router.get("/", async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const doc = await SiteContent.findOne({ language: lang });
    res.json({ ok: true, data: doc });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// Upsert content
router.post("/", async (req, res) => {
  try {
    const { language, content, useStatic } = req.body;
    if (!language)
      return res.status(400).json({ ok: false, message: "language required" });

    const updated = await SiteContent.findOneAndUpdate(
      { language },
      { content, useStatic },
      { upsert: true, new: true }
    );
    res.json({ ok: true, data: updated });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

module.exports = router;

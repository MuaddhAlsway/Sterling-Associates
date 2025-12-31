const express = require("express");
const router = express.Router();
const TeamMember = require("../models/TeamMember");

// List team members
router.get("/", async (req, res) => {
  try {
    const list = await TeamMember.find().sort({ order: 1, createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const t = new TeamMember(req.body);
    await t.save();
    res.json({ ok: true, data: t });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ ok: true, data: updated });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;

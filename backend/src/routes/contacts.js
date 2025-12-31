const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// List all contacts
router.get("/", async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// Get single contact
router.get("/:id", async (req, res) => {
  try {
    const doc = await Contact.findById(req.params.id);
    if (!doc) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Create contact submission
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message, agree } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        ok: false, 
        message: "Name, email, and message are required" 
      });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      service,
      message,
      agree,
    });
    
    await contact.save();
    res.status(201).json({ ok: true, data: contact });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Update contact (mark as read, add response, etc.)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, data: updated });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Delete contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;

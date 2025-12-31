const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

// List all consultations
router.get("/", async (req, res) => {
  try {
    const list = await Consultation.find().sort({ preferredDate: 1, createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// Get single consultation
router.get("/:id", async (req, res) => {
  try {
    const doc = await Consultation.findById(req.params.id);
    if (!doc) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, data: doc });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Create consultation booking
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, practiceArea, preferredDate, preferredTime, message, consent } = req.body;
    
    if (!firstName || !lastName || !email || !phone || !practiceArea || !preferredDate || !preferredTime || !message) {
      return res.status(400).json({ 
        ok: false, 
        message: "All fields are required" 
      });
    }

    const consultation = new Consultation({
      firstName,
      lastName,
      email,
      phone,
      practiceArea,
      preferredDate,
      preferredTime,
      message,
      consent,
    });
    
    await consultation.save();
    res.status(201).json({ ok: true, data: consultation });
  } catch (err) {
    res.status(400).json({ ok: false, message: err.message });
  }
});

// Update consultation (confirm, complete, cancel, add notes)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Consultation.findByIdAndUpdate(
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

// Delete consultation
router.delete("/:id", async (req, res) => {
  try {
    await Consultation.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;

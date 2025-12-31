const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const uploadDir = path.join(__dirname, "..", "..", "uploads");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file)
    return res.status(400).json({ ok: false, message: "No file uploaded" });
  const urlPath = `/uploads/${req.file.filename}`;
  res.json({ ok: true, data: { path: urlPath, filename: req.file.filename } });
});

module.exports = router;

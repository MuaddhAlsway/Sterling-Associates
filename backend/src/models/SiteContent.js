const mongoose = require("mongoose");

const SiteContentSchema = new mongoose.Schema(
  {
    language: { type: String, required: true, enum: ["en", "ar"] },
    content: { type: mongoose.Schema.Types.Mixed, default: {} },
    useStatic: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SiteContent", SiteContentSchema);

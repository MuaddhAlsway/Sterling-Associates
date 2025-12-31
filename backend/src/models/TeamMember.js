const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, default: "" },
    specialty: { type: String, default: "" },
    career: { type: String, default: "" },
    bio: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TeamMember", TeamMemberSchema);

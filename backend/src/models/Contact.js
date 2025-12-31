const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    service: { type: String, default: "" },
    message: { type: String, required: true },
    agree: { type: Boolean, default: false },
    status: { type: String, enum: ["new", "read", "responded"], default: "new" },
    response: { type: String, default: "" },
  },
  { timestamps: true }
);

ContactSchema.virtual("id").get(function () {
  return this._id && this._id.toString();
});

ContactSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Contact", ContactSchema);

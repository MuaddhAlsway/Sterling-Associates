const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    practiceArea: { type: String, required: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    message: { type: String, required: true },
    consent: { type: Boolean, default: false },
    status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

ConsultationSchema.virtual("id").get(function () {
  return this._id && this._id.toString();
});

ConsultationSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Consultation", ConsultationSchema);

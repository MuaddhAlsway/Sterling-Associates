const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, default: "" },
    content: { type: String, default: "" },
    date: {
      type: String,
      default: () => new Date().toISOString().split("T")[0],
    },
    category: { type: String, default: "" },
    author: { type: String, default: "" },
    authorTitle: { type: String, default: "" },
    readingTime: { type: Number, default: 5 },
    image: { type: String, default: "" },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// expose `id` virtual for convenience
BlogSchema.virtual("id").get(function () {
  return this._id && this._id.toString();
});

// strip __v when converting to JSON
BlogSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Blog", BlogSchema);

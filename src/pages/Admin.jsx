import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useToast } from "../context/ToastContext";

export default function Admin() {
  const navigate = useNavigate();
  const { addBlog } = useBlogs();
  const { addToast } = useToast();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    readingTime: "",
    author: "",
    authorTitle: "",
    image: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content)
      return addToast("Title and content required", { type: "error" });
    addBlog({
      ...form,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readingTime: form.readingTime || 5,
    });
    addToast("Article published successfully", { type: "success" });
    navigate("/admin/blogs");
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold mb-6">Admin - Add Blog Article</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Title"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="excerpt"
          value={form.excerpt}
          onChange={onChange}
          placeholder="Short excerpt"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="category"
          value={form.category}
          onChange={onChange}
          placeholder="Category"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="readingTime"
          value={form.readingTime}
          onChange={onChange}
          placeholder="Reading time (mins)"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="author"
          value={form.author}
          onChange={onChange}
          placeholder="Author"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="authorTitle"
          value={form.authorTitle}
          onChange={onChange}
          placeholder="Author title"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="image"
          value={form.image}
          onChange={onChange}
          placeholder="Image URL"
          className="border px-4 py-3 rounded-lg"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={onChange}
          placeholder="Full content"
          rows={10}
          className="border px-4 py-3 rounded-lg"
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#1B3A5F] text-white px-6 py-3 rounded-lg"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="px-6 py-3 rounded-lg border"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

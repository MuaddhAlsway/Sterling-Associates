import { Link, useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useState } from "react";
import { useToast } from "../context/ToastContext";

export default function AdminBlogs() {
  const { blogs, deleteBlog, addBlog } = useBlogs();
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
  const [confirmDelete, setConfirmDelete] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onAdd = (e) => {
    e.preventDefault();
    if (!form.title || !form.content)
      return addToast("Title and content are required", { type: "error" });
    addBlog({
      ...form,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readingTime: form.readingTime || 5,
    });
    setForm({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      readingTime: "",
      author: "",
      authorTitle: "",
      image: "",
    });
    addToast("Article published successfully", { type: "success" });
    navigate("/admin/blogs");
  };

  const onDelete = (id) => {
    deleteBlog(id);
    setConfirmDelete(null);
    addToast("Article deleted", { type: "success" });
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Manage Blogs</h2>
      </div>

      {/* Add form inline */}
      <form
        onSubmit={onAdd}
        className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-white border rounded"
      >
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Title"
          className="border px-3 py-2 rounded"
        />
        <input
          name="excerpt"
          value={form.excerpt}
          onChange={onChange}
          placeholder="Short excerpt"
          className="border px-3 py-2 rounded"
        />
        <input
          name="category"
          value={form.category}
          onChange={onChange}
          placeholder="Category"
          className="border px-3 py-2 rounded"
        />
        <input
          name="readingTime"
          value={form.readingTime}
          onChange={onChange}
          placeholder="Reading time (mins)"
          className="border px-3 py-2 rounded"
        />
        <input
          name="author"
          value={form.author}
          onChange={onChange}
          placeholder="Author"
          className="border px-3 py-2 rounded"
        />
        <input
          name="authorTitle"
          value={form.authorTitle}
          onChange={onChange}
          placeholder="Author title"
          className="border px-3 py-2 rounded"
        />
        <input
          name="image"
          value={form.image}
          onChange={onChange}
          placeholder="Image URL"
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={onChange}
          rows={6}
          placeholder="Full content (HTML allowed)"
          className="border px-3 py-2 rounded md:col-span-2"
        />
        <div className="md:col-span-2 flex gap-3">
          <button className="bg-[#1B3A5F] text-white px-4 py-2 rounded">
            Publish
          </button>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="grid gap-4">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="p-4 bg-white rounded border flex items-center justify-between"
          >
            <div>
              <div className="font-semibold">{b.title}</div>
              <div className="text-sm text-[#6B7280]">{b.excerpt}</div>
            </div>
            <div className="flex items-center gap-3">
              <Link to={`/blog/${b.id}`} className="text-[#1B3A5F]">
                View
              </Link>
              <Link to={`/admin/blogs/${b.id}/edit`} className="text-[#1B3A5F]">
                Edit
              </Link>
              {confirmDelete === b.id ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDelete(b.id)}
                    className="px-3 py-2 rounded bg-red-600 text-white"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    className="px-3 py-2 rounded border"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmDelete(b.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

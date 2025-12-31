import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useToast } from "../context/ToastContext";

export default function AdminEditBlog() {
  const { id } = useParams();
  const { getBlogById, updateBlog } = useBlogs();
  const navigate = useNavigate();
  const article = getBlogById(id);
  const [form, setForm] = useState(article || {});
  const { addToast } = useToast();

  useEffect(() => {
    if (article) setForm(article);
  }, [article]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateBlog(id, form);
    addToast("Saved", { type: "success" });
    navigate("/admin/blogs");
  };

  if (!article)
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">Article not found</div>
    );

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h2 className="text-xl font-semibold mb-4">Edit Article</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          value={form.title || ""}
          onChange={onChange}
          className="border px-4 py-3 rounded"
        />
        <input
          name="excerpt"
          value={form.excerpt || ""}
          onChange={onChange}
          className="border px-4 py-3 rounded"
        />
        <input
          name="image"
          value={form.image || ""}
          onChange={onChange}
          className="border px-4 py-3 rounded"
          placeholder="Image URL"
        />
        <textarea
          name="content"
          value={form.content || ""}
          onChange={onChange}
          rows={8}
          className="border px-4 py-3 rounded"
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#1B3A5F] text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/blogs")}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

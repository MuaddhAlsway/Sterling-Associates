import { Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useTeam } from "../context/TeamContext";
import { useContacts } from "../context/ContactContext";
import { useState } from "react";
import { useToast } from "../context/ToastContext";

export default function AdminDashboard() {
  const { blogs, deleteBlog } = useBlogs();
  const { members } = useTeam();
  const { contacts } = useContacts();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const { addToast } = useToast();

  const onDelete = (id) => {
    deleteBlog(id);
    setConfirmDelete(null);
    addToast("Article deleted", { type: "success" });
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <Link
          to="/admin/new"
          className="bg-[#1B3A5F] text-white px-4 py-2 rounded-lg hover:bg-[#2D5280]"
        >
          + Add New Article
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white border rounded-lg">
          <div className="text-sm text-[#6B7280]">Articles</div>
          <div className="text-2xl font-semibold">{blogs.length}</div>
        </div>
        <div className="p-4 bg-white border rounded-lg">
          <div className="text-sm text-[#6B7280]">Team Members</div>
          <div className="text-2xl font-semibold">{members.length}</div>
        </div>
        <div className="p-4 bg-white border rounded-lg">
          <div className="text-sm text-[#6B7280]">Contact Submissions</div>
          <div className="text-2xl font-semibold">{contacts.length}</div>
        </div>
      </div>

      {blogs.length === 0 && (
        <div className="p-6 border rounded-lg bg-white">No articles yet.</div>
      )}

      <div className="grid gap-4">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="flex items-center justify-between p-4 border rounded-lg bg-white"
          >
            <div>
              <div className="text-lg font-semibold">{b.title}</div>
              <div className="text-sm text-[#6B7280]">
                {b.date} • {b.readingTime || 5} min
              </div>
              <div className="text-sm text-[#4A5568] mt-2">{b.excerpt}</div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to={`/blog/${b.id}`}
                className="text-[#1B3A5F] hover:text-[#2D5280] font-semibold"
              >
                View
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
                  className="px-4 py-2 border rounded-lg text-[#9B1B2B] hover:bg-[#FFF0F0]"
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

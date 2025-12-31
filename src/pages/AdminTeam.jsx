import { useState } from "react";
import { useTeam } from "../context/TeamContext";
import { useToast } from "../context/ToastContext";
import { useTranslation } from "../hooks/useTranslation";

export default function AdminTeam() {
  const { members, addMember, updateMember, deleteMember } = useTeam();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    title: "",
    specialty: "",
    bio: "",
    image: "",
    career: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({});
  const { addToast } = useToast();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.title)
      return addToast(t?.admin?.nameRequired || "Name and title are required", {
        type: "error",
      });
    addMember(form);
    setForm({
      name: "",
      title: "",
      specialty: "",
      bio: "",
      image: "",
      career: "",
    });
    addToast(t?.admin?.memberAdded || "Team member added", {
      type: "success",
    });
  };

  const startEdit = (idx) => {
    setEditingIndex(idx);
    setEditForm(members[idx]);
  };
  const onEditChange = (e) =>
    setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const handleEditFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setEditForm((f) => ({ ...f, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const saveEdit = (idx) => {
    updateMember(idx, editForm);
    setEditingIndex(null);
    addToast(t?.admin?.memberUpdated || "Member updated", {
      type: "success",
    });
  };
  const onDelete = (idx) => {
    deleteMember(idx);
    addToast(t?.admin?.memberDeleted || "Member deleted", {
      type: "success",
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {t?.admin?.manageTeam || "Manage Team"}
        </h2>
      </div>

      <form
        onSubmit={onAdd}
        className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-2"
      >
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={t?.admin?.fields?.name || "Name"}
          className="border px-3 py-2 rounded"
        />
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder={t?.admin?.fields?.title || "Title"}
          className="border px-3 py-2 rounded"
        />
        <input
          name="career"
          value={form.career}
          onChange={onChange}
          placeholder={t?.admin?.fields?.career || "Career"}
          className="border px-3 py-2 rounded"
        />
        <input
          name="specialty"
          value={form.specialty}
          onChange={onChange}
          placeholder={t?.admin?.fields?.specialty || "Specialty"}
          className="border px-3 py-2 rounded"
        />

        <div className="flex items-center gap-2">
          <input
            name="image"
            value={form.image}
            onChange={onChange}
            placeholder={t?.admin?.fields?.image || "Image URL"}
            className="border px-3 py-2 rounded flex-1"
          />
          <input type="file" accept="image/*" onChange={handleFile} />
        </div>

        <input
          name="bio"
          value={form.bio}
          onChange={onChange}
          placeholder={t?.admin?.fields?.bio || "Short bio"}
          className="border px-3 py-2 rounded"
        />
        <div className="md:col-span-3">
          <button className="bg-[#1B3A5F] text-white px-4 py-2 rounded">
            {t?.admin?.buttons?.add || "Add"}
          </button>
        </div>
      </form>

      <div className="grid gap-3">
        {members.map((m, idx) => (
          <div key={idx} className="p-3 bg-white border rounded">
            {editingIndex === idx ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  name="name"
                  value={editForm.name || ""}
                  onChange={onEditChange}
                  placeholder={t?.admin?.fields?.name || "Name"}
                  className="border px-3 py-2 rounded"
                />
                <input
                  name="title"
                  value={editForm.title || ""}
                  onChange={onEditChange}
                  placeholder={t?.admin?.fields?.title || "Title"}
                  className="border px-3 py-2 rounded"
                />
                <input
                  name="career"
                  value={editForm.career || ""}
                  onChange={onEditChange}
                  placeholder={t?.admin?.fields?.career || "Career"}
                  className="border px-3 py-2 rounded"
                />
                <input
                  name="specialty"
                  value={editForm.specialty || ""}
                  onChange={onEditChange}
                  placeholder={t?.admin?.fields?.specialty || "Specialty"}
                  className="border px-3 py-2 rounded"
                />
                <div className="flex items-center gap-2">
                  <input
                    name="image"
                    value={editForm.image || ""}
                    onChange={onEditChange}
                    placeholder={t?.admin?.fields?.image || "Image URL"}
                    className="border px-3 py-2 rounded flex-1"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditFile}
                  />
                </div>
                <input
                  name="bio"
                  value={editForm.bio || ""}
                  onChange={onEditChange}
                  placeholder={t?.admin?.fields?.bio || "Short bio"}
                  className="border px-3 py-2 rounded"
                />
                <div className="md:col-span-3 flex gap-2 mt-2">
                  <button
                    onClick={() => saveEdit(idx)}
                    className="bg-[#1B3A5F] text-white px-3 py-2 rounded"
                  >
                    {t?.admin?.buttons?.save || "Save"}
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="px-3 py-2 border rounded"
                  >
                    {t?.admin?.buttons?.cancel || "Cancel"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded overflow-hidden bg-[#F8F9FB] flex-shrink-0">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-sm text-[#6B7280]">{m.title}</div>
                    <div className="text-sm text-[#4A5568]">{m.bio}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(idx)}
                    className="px-3 py-2 border rounded"
                  >
                    {t?.admin?.buttons?.edit || "Edit"}
                  </button>
                  <button
                    onClick={() => onDelete(idx)}
                    className="px-3 py-2 border rounded text-red-600"
                  >
                    {t?.admin?.buttons?.delete || "Delete"}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

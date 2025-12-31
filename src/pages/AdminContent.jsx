import { useState, useEffect } from "react";
import { useSiteContent } from "../context/SiteContentContext";
import { useToast } from "../context/ToastContext";

export default function AdminContent() {
  const {
    content,
    updateContent,
    useStatic,
    setUseStatic,
    resetSection,
    resetAll,
  } = useSiteContent();
  const { addToast } = useToast();

  // local editable copies per section
  const [editing, setEditing] = useState({
    nav: false,
    header: false,
    hero: false,
    footer: false,
    contact: false,
  });
  const [local, setLocal] = useState({
    nav: {},
    header: {},
    hero: {},
    footer: {},
    contact: {},
  });

  useEffect(() => {
    setLocal({
      nav: { ...content.nav },
      header: { ...content.header },
      hero: { ...content.hero },
      footer: { ...content.footer },
      contact: { ...(content.contact || {}) },
    });
  }, [content]);

  const startEdit = (section) => setEditing((s) => ({ ...s, [section]: true }));
  const cancelEdit = (section) => {
    if (section === "nav") {
      setLocal((l) => ({
        ...l,
        nav: { ...content.nav },
        header: { ...content.header },
      }));
    } else if (section === "contact") {
      setLocal((l) => ({ ...l, contact: { ...(content.contact || {}) } }));
    } else {
      setLocal((l) => ({ ...l, [section]: { ...content[section] } }));
    }
    setEditing((s) => ({ ...s, [section]: false }));
  };

  const saveSection = (section) => {
    const payload = local[section];
    if (section === "nav") {
      Object.keys(payload).forEach((k) =>
        updateContent(`nav.${k}`, payload[k])
      );
      if (local.header && local.header.title !== undefined) {
        updateContent("header.title", local.header.title);
      }
    } else if (section === "hero") {
      updateContent("hero.title", payload.title);
      updateContent("hero.subtitle", payload.subtitle);
    } else if (section === "footer") {
      updateContent("footer.tagline", payload.tagline);
    } else if (section === "contact") {
      if (payload.visitTitle !== undefined)
        updateContent("contact.visitTitle", payload.visitTitle);
      if (payload.visitDesc !== undefined)
        updateContent("contact.visitDesc", payload.visitDesc);
      if (payload.address !== undefined)
        updateContent("contact.address", payload.address);
      if (payload.city !== undefined)
        updateContent("contact.city", payload.city);
      if (payload.title !== undefined)
        updateContent("contact.title", payload.title);
      if (payload.description !== undefined)
        updateContent("contact.description", payload.description);
    }
    setEditing((s) => ({ ...s, [section]: false }));
    addToast("Content saved", { type: "success" });
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Site Content</h2>
        <div className="flex items-center gap-3">
          <label className="text-sm text-[#6B7280]">Use static content</label>
          <input
            type="checkbox"
            checked={!!useStatic}
            onChange={(e) => {
              setUseStatic(e.target.checked);
              addToast(
                e.target.checked
                  ? "Using static content"
                  : "Using edited content",
                { type: "info" }
              );
            }}
          />
          <button
            className="px-3 py-1 border rounded"
            onClick={() => {
              resetAll();
              addToast("Content reset to original", { type: "success" });
            }}
          >
            Reset all
          </button>
        </div>
      </div>

      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Header / Navigation</h3>
          {editing.nav ? (
            <div className="flex gap-2">
              <button
                onClick={() => saveSection("nav")}
                className="bg-[#1B3A5F] text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => cancelEdit("nav")}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetSection("nav");
                  resetSection("header");
                  addToast("Header reset to original", { type: "success" });
                }}
                className="px-3 py-1 border rounded"
              >
                Reset
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => startEdit("nav")}
                className="px-3 py-1 border rounded"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setUseStatic(!useStatic);
                  addToast(
                    !useStatic
                      ? "Using static content"
                      : "Using edited content",
                    { type: "info" }
                  );
                }}
                className="px-3 py-1 border rounded"
              >
                {useStatic ? "Using static" : "Use static"}
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-2 items-center mb-2">
          <div className="w-28 text-sm text-[#6B7280]">brand</div>
          {editing.nav ? (
            <input
              value={local.header?.title || ""}
              onChange={(e) =>
                setLocal((l) => ({
                  ...l,
                  header: { ...l.header, title: e.target.value },
                }))
              }
              className="border px-3 py-2 rounded w-full"
            />
          ) : (
            <div className="text-sm text-[#1A1D23]">{local.header?.title}</div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {Object.keys(local.nav).map((k) => (
            <div key={k} className="flex gap-2 items-center">
              <div className="w-28 text-sm text-[#6B7280]">{k}</div>
              {editing.nav ? (
                <input
                  value={local.nav[k]}
                  onChange={(e) =>
                    setLocal((l) => ({
                      ...l,
                      nav: { ...l.nav, [k]: e.target.value },
                    }))
                  }
                  className="border px-3 py-2 rounded w-full"
                />
              ) : (
                <div className="text-sm text-[#1A1D23]">{local.nav[k]}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Hero</h3>
          {editing.hero ? (
            <div className="flex gap-2">
              <button
                onClick={() => saveSection("hero")}
                className="bg-[#1B3A5F] text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => cancelEdit("hero")}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetSection("hero");
                  addToast("Hero reset to original", { type: "success" });
                }}
                className="px-3 py-1 border rounded"
              >
                Reset
              </button>
            </div>
          ) : (
            <button
              onClick={() => startEdit("hero")}
              className="px-3 py-1 border rounded"
            >
              Edit
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {editing.hero ? (
            <>
              <input
                value={local.hero.title}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    hero: { ...l.hero, title: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
              />
              <textarea
                value={local.hero.subtitle}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    hero: { ...l.hero, subtitle: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
              />
            </>
          ) : (
            <>
              <div className="text-lg font-semibold">{local.hero.title}</div>
              <div className="text-sm text-[#4A5568]">
                {local.hero.subtitle}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Footer</h3>
          {editing.footer ? (
            <div className="flex gap-2">
              <button
                onClick={() => saveSection("footer")}
                className="bg-[#1B3A5F] text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => cancelEdit("footer")}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetSection("footer");
                  addToast("Footer reset to original", { type: "success" });
                }}
                className="px-3 py-1 border rounded"
              >
                Reset
              </button>
            </div>
          ) : (
            <button
              onClick={() => startEdit("footer")}
              className="px-3 py-1 border rounded"
            >
              Edit
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {editing.footer ? (
            <input
              value={local.footer.tagline}
              onChange={(e) =>
                setLocal((l) => ({
                  ...l,
                  footer: { ...l.footer, tagline: e.target.value },
                }))
              }
              className="border px-3 py-2 rounded"
            />
          ) : (
            <div className="text-sm text-[#1A1D23]">{local.footer.tagline}</div>
          )}
        </div>
      </section>

      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Contact / Visit</h3>
          {editing.contact ? (
            <div className="flex gap-2">
              <button
                onClick={() => saveSection("contact")}
                className="bg-[#1B3A5F] text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => cancelEdit("contact")}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetSection("contact");
                  addToast("Contact reset to original", { type: "success" });
                }}
                className="px-3 py-1 border rounded"
              >
                Reset
              </button>
            </div>
          ) : (
            <button
              onClick={() => startEdit("contact")}
              className="px-3 py-1 border rounded"
            >
              Edit
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {editing.contact ? (
            <>
              <input
                value={local.contact.title || ""}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    contact: { ...l.contact, title: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
                placeholder="Section title"
              />
              <input
                value={local.contact.visitTitle || ""}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    contact: { ...l.contact, visitTitle: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
                placeholder="Visit title"
              />
              <textarea
                value={local.contact.visitDesc || ""}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    contact: { ...l.contact, visitDesc: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
                placeholder="Visit description"
              />
              <input
                value={local.contact.address || ""}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    contact: { ...l.contact, address: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
                placeholder="Address"
              />
              <input
                value={local.contact.city || ""}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    contact: { ...l.contact, city: e.target.value },
                  }))
                }
                className="border px-3 py-2 rounded"
                placeholder="City"
              />
            </>
          ) : (
            <>
              <div className="text-lg font-semibold">
                {local.contact.visitTitle}
              </div>
              <div className="text-sm text-[#4A5568]">
                {local.contact.visitDesc}
              </div>
              <div className="text-sm text-[#4A5568] mt-2">
                {local.contact.address}
              </div>
              <div className="text-sm text-[#4A5568]">{local.contact.city}</div>
            </>
          )}
        </div>
      </section>

      <div className="text-sm text-[#6B7280]">
        Use the Edit buttons to make changes, then Save.
      </div>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminSidebar() {
  const { logout } = useAuth();
  const loc = useLocation();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "lucide:layout-dashboard",
      to: "/admin",
    },
    {
      id: "new",
      label: "Add Blog",
      icon: "lucide:file-plus",
      to: "/admin/new",
    },
    {
      id: "blogs",
      label: "Manage Blogs",
      icon: "lucide:book-open",
      to: "/admin/blogs",
    },
    {
      id: "team",
      label: "Manage Team",
      icon: "lucide:users",
      to: "/admin/team",
    },
    {
      id: "content",
      label: "Site Content",
      icon: "lucide:file-text",
      to: "/admin/content",
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#E8ECF0] flex flex-col rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-[#E8ECF0]">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-[#1B3A5F]">
            <iconify-icon
              icon="lucide:scale"
              className="text-xl text-white"
            ></iconify-icon>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1A1D23]">Sterling</p>
            <p className="text-xs text-[#4A5568]">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const active =
              loc.pathname === item.to ||
              loc.pathname.startsWith(item.to + "/");
            return (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition ${
                  active
                    ? "bg-[#1B3A5F] text-white/95"
                    : "text-[#4A5568] hover:bg-[#F8F9FB]"
                }`}
              >
                <iconify-icon
                  icon={item.icon}
                  className="text-lg"
                ></iconify-icon>
                <span className="font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-[#E8ECF0]">
        <button
          onClick={logout}
          className="w-full text-left px-3 py-2 rounded bg-[#FEE2E2] text-[#9B1B2B]"
        >
          Logout
        </button>
        <p className="text-xs text-[#6B7280] text-center mt-3">
          Sterling & Associates © 2025
        </p>
      </div>
    </aside>
  );
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminSidebar() {
  const { logout } = useAuth();
  const loc = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "lucide:layout-dashboard",
      to: "/admin",
    },
    {
      id: "blog",
      label: "Blog",
      icon: "lucide:book-open",
      submenu: [
        {
          id: "new-blog",
          label: "Add Blog",
          icon: "lucide:file-plus",
          to: "/admin/blogs/new",
        },
        {
          id: "manage-blogs",
          label: "Manage Blogs",
          icon: "lucide:list",
          to: "/admin/blogs",
        },
      ],
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
              (item.to && loc.pathname.startsWith(item.to + "/"));
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isExpanded = expandedMenu === item.id;
            const submenuActive = item.submenu?.some(
              (sub) =>
                loc.pathname === sub.to || loc.pathname.startsWith(sub.to + "/")
            );

            return (
              <div key={item.id}>
                {hasSubmenu ? (
                  <button
                    onClick={() =>
                      setExpandedMenu(isExpanded ? null : item.id)
                    }
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition ${
                      submenuActive || isExpanded
                        ? "bg-[#1B3A5F] text-white/95"
                        : "text-[#4A5568] hover:bg-[#F8F9FB]"
                    }`}
                  >
                    <iconify-icon
                      icon={item.icon}
                      className="text-lg"
                    ></iconify-icon>
                    <span className="font-semibold flex-1 text-left">
                      {item.label}
                    </span>
                    <iconify-icon
                      icon={
                        isExpanded
                          ? "lucide:chevron-down"
                          : "lucide:chevron-right"
                      }
                      className="text-lg"
                    ></iconify-icon>
                  </button>
                ) : (
                  <Link
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
                )}

                {hasSubmenu && isExpanded && (
                  <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-[#E8ECF0] pl-2">
                    {item.submenu.map((subitem) => {
                      const subActive =
                        loc.pathname === subitem.to ||
                        loc.pathname.startsWith(subitem.to + "/");
                      return (
                        <Link
                          key={subitem.id}
                          to={subitem.to}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition text-sm ${
                            subActive
                              ? "bg-[#1B3A5F]/10 text-[#1B3A5F] font-semibold"
                              : "text-[#4A5568] hover:bg-[#F8F9FB]"
                          }`}
                        >
                          <iconify-icon
                            icon={subitem.icon}
                            className="text-base"
                          ></iconify-icon>
                          <span>{subitem.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
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

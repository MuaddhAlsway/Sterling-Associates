import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AdminSidebar from "./AdminSidebar";
export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#F3F6F9]">
      <div className="max-w-7xl mx-auto flex gap-6 py-8 px-4">
        <aside className="hidden md:block">
          <AdminSidebar />
        </aside>

        <main className="grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

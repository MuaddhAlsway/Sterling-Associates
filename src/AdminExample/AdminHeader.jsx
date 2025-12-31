export default function AdminHeader({ onLogout }) {
  return (
    <header className="w-full bg-white border-b border-[#E8ECF0] px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-[#1A1D23]">Admin Panel</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#1B3A5F]">
            <iconify-icon icon="lucide:user" className="text-lg text-white"></iconify-icon>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A1D23]">Admin</p>
            <p className="text-xs text-[#4A5568]">Administrator</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-[#1B3A5F] hover:text-[#2D5280] transition font-semibold"
        >
          <iconify-icon icon="lucide:log-out" className="text-lg"></iconify-icon>
          <span>Logout</span>
        </button>
      </div>
    </header>
  )
}

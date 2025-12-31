export default function AdminSidebar({ currentSection, setCurrentSection }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
    { id: 'pages', label: 'Page Content', icon: 'lucide:file-text' },
    { id: 'blog', label: 'Blog Posts', icon: 'lucide:book-open' },
    { id: 'team', label: 'Team Members', icon: 'lucide:users' },
    { id: 'services', label: 'Services', icon: 'lucide:briefcase' },
    { id: 'consultations', label: 'Consultations', icon: 'lucide:calendar' },
    { id: 'chat', label: 'Live Chat', icon: 'lucide:message-circle' },
  ]

  return (
    <aside className="w-64 bg-white border-r border-[#E8ECF0] flex flex-col">
      <div className="p-6 border-b border-[#E8ECF0]">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-[#1B3A5F]">
            <iconify-icon icon="lucide:scale" className="text-xl text-white"></iconify-icon>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1A1D23]">Sterling</p>
            <p className="text-xs text-[#4A5568]">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition ${
                currentSection === item.id
                  ? 'bg-[#1B3A5F] text-white/95'
                  : 'text-[#4A5568] hover:bg-[#F8F9FB]'
              }`}
            >
              <iconify-icon icon={item.icon} className="text-lg"></iconify-icon>
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-[#E8ECF0]">
        <p className="text-xs text-[#6B7280] text-center">Sterling & Associates © 2024</p>
      </div>
    </aside>
  )
}

import { useState } from 'react'
import { pageAPI } from '../../services/api'

export default function PageContentManager() {
  const [selectedPage, setSelectedPage] = useState('header')
  const [content, setContent] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  const pages = [
    { id: 'header', label: 'Header' },
    { id: 'hero', label: 'Hero Section' },
    { id: 'services', label: 'Services Section' },
    { id: 'about', label: 'About Section' },
    { id: 'blog', label: 'Blog Section' },
    { id: 'cta', label: 'CTA Section' },
    { id: 'footer', label: 'Footer' },
  ]

  const handleLoadPage = async (pageName) => {
    try {
      const response = await pageAPI.getPage(pageName)
      setContent(response.data.content || {})
      setSelectedPage(pageName)
    } catch (err) {
      console.error('Error loading page:', err)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await pageAPI.updatePage(selectedPage, content)
      alert('Page content updated successfully!')
    } catch (err) {
      console.error('Error saving page:', err)
      alert('Error saving page content')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-semibold text-[#1A1D23]">Page Content</h1>
        <p className="text-[#4A5568]">Edit page content dynamically</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => handleLoadPage(page.id)}
            className={`px-4 py-3 rounded-lg transition font-semibold ${
              selectedPage === page.id
                ? 'bg-[#1B3A5F] text-white/95'
                : 'bg-[#F8F9FB] text-[#4A5568] hover:bg-[#E8ECF0]'
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>

      <div className="bg-[#F8F9FB] border border-[#E8ECF0] rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-[#1A1D23] mb-6">Edit {pages.find(p => p.id === selectedPage)?.label}</h2>
        
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <label className="block text-[#1A1D23] font-semibold mb-2">Content (JSON)</label>
            <textarea
              value={JSON.stringify(content, null, 2)}
              onChange={(e) => {
                try {
                  setContent(JSON.parse(e.target.value))
                } catch (err) {
                  // Invalid JSON, just update the text
                }
              }}
              className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F] font-mono text-sm"
              rows="12"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold disabled:opacity-50"
        >
          <iconify-icon icon="lucide:save" className="text-lg"></iconify-icon>
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>
    </div>
  )
}

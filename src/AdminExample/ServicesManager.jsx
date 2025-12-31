import { useState, useEffect } from 'react'
import { servicesAPI } from '../../services/api'

export default function ServicesManager() {
  const [services, setServices] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'lucide:briefcase'
  })

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      const response = await servicesAPI.getAll()
      setServices(response.data)
    } catch (err) {
      console.error('Error loading services:', err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await servicesAPI.update(editingId, formData)
      } else {
        await servicesAPI.create(formData)
      }
      setFormData({ title: '', description: '', icon: 'lucide:briefcase' })
      setShowForm(false)
      setEditingId(null)
      loadServices()
    } catch (err) {
      console.error('Error saving service:', err)
    }
  }

  const handleEdit = (service) => {
    setFormData(service)
    setEditingId(service.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await servicesAPI.delete(id)
        loadServices()
      } catch (err) {
        console.error('Error deleting service:', err)
      }
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-[#1A1D23]">Services</h1>
          <p className="text-[#4A5568]">Manage your practice areas</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ title: '', description: '', icon: 'lucide:briefcase' })
          }}
          className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold"
        >
          <iconify-icon icon="lucide:plus" className="text-lg"></iconify-icon>
          <span>Add Service</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-[#F8F9FB] border border-[#E8ECF0] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#1A1D23] mb-6">{editingId ? 'Edit Service' : 'Add Service'}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                required
              />
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Icon (Lucide Icon Name)</label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                placeholder="e.g., lucide:briefcase"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold"
              >
                <span>{editingId ? 'Update' : 'Add'}</span>
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex items-center gap-2 border-2 border-[#1B3A5F] text-[#1B3A5F] px-6 py-3 rounded-lg hover:bg-[#1B3A5F]/5 transition font-semibold"
              >
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-[#F8F9FB] border-l-4 border-[#D4A745] rounded-lg p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1A1D23] mb-2">{service.title}</h3>
                <p className="text-[#4A5568] mb-4">{service.description}</p>
                <p className="text-sm text-[#6B7280]">Icon: {service.icon}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="flex items-center gap-2 text-[#1B3A5F] hover:text-[#2D5280] transition font-semibold"
                >
                  <iconify-icon icon="lucide:edit" className="text-lg"></iconify-icon>
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition font-semibold"
                >
                  <iconify-icon icon="lucide:trash" className="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

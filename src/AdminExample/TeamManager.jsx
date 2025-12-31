import { useState, useEffect } from 'react'
import { teamAPI } from '../../services/api'

export default function TeamManager() {
  const [members, setMembers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    specialty: '',
    bio: '',
    gender: 'male',
    image_data: ''
  })

  useEffect(() => {
    loadMembers()
  }, [])

  const loadMembers = async () => {
    try {
      const response = await teamAPI.getAll()
      setMembers(response.data)
    } catch (err) {
      console.error('Error loading team members:', err)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image_data: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await teamAPI.update(editingId, formData)
      } else {
        await teamAPI.create(formData)
      }
      setFormData({ name: '', title: '', specialty: '', bio: '', gender: 'male', image_data: '' })
      setShowForm(false)
      setEditingId(null)
      loadMembers()
    } catch (err) {
      console.error('Error saving member:', err)
    }
  }

  const handleEdit = (member) => {
    setFormData(member)
    setEditingId(member.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await teamAPI.delete(id)
        loadMembers()
      } catch (err) {
        console.error('Error deleting member:', err)
      }
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-[#1A1D23]">Team Members</h1>
          <p className="text-[#4A5568]">Manage your team</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ name: '', title: '', specialty: '', bio: '', gender: 'male', image_data: '' })
          }}
          className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold"
        >
          <iconify-icon icon="lucide:plus" className="text-lg"></iconify-icon>
          <span>Add Member</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-[#F8F9FB] border border-[#E8ECF0] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#1A1D23] mb-6">{editingId ? 'Edit Member' : 'Add Team Member'}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                  required
                />
              </div>
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
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Specialty</label>
                <input
                  type="text"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
              />
              {formData.image_data && (
                <img src={formData.image_data} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />
              )}
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
        {members.map((member) => (
          <div key={member.id} className="bg-white border border-[#E8ECF0] rounded-2xl overflow-hidden hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] transition">
            {member.image_data && (
              <img src={member.image_data} alt={member.name} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1A1D23] mb-1">{member.name}</h3>
              <p className="text-sm text-[#D4A745] font-semibold mb-3">{member.title}</p>
              <p className="text-sm text-[#4A5568] mb-4">{member.bio}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="flex items-center gap-2 text-[#1B3A5F] hover:text-[#2D5280] transition font-semibold"
                >
                  <iconify-icon icon="lucide:edit" className="text-lg"></iconify-icon>
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
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

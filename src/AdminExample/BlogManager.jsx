import { useState, useEffect } from 'react'
import { blogAPI } from '../../services/api'

export default function BlogManager() {
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Corporate Law',
    author: '',
    authorTitle: '',
    readingTime: 5,
    image: ''
  })
  const [imagePreview, setImagePreview] = useState('')

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const response = await blogAPI.getAll()
      setPosts(response.data)
    } catch (err) {
      console.error('Error loading posts:', err)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result })
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await blogAPI.update(editingId, formData)
      } else {
        await blogAPI.create(formData)
      }
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        category: 'Corporate Law',
        author: '',
        authorTitle: '',
        readingTime: 5,
        image: ''
      })
      setImagePreview('')
      setShowForm(false)
      setEditingId(null)
      loadPosts()
    } catch (err) {
      console.error('Error saving post:', err)
    }
  }

  const handleEdit = (post) => {
    setFormData(post)
    setImagePreview(post.image || '')
    setEditingId(post.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await blogAPI.delete(id)
        loadPosts()
      } catch (err) {
        console.error('Error deleting post:', err)
      }
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-[#1A1D23]">Blog Posts</h1>
          <p className="text-[#4A5568]">Manage your blog content</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({
              title: '',
              excerpt: '',
              content: '',
              date: new Date().toISOString().split('T')[0],
              category: 'Corporate Law',
              author: '',
              authorTitle: '',
              readingTime: 5,
              image: ''
            })
            setImagePreview('')
          }}
          className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold"
        >
          <iconify-icon icon="lucide:plus" className="text-lg"></iconify-icon>
          <span>New Post</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-[#F8F9FB] border border-[#E8ECF0] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#1A1D23] mb-6">{editingId ? 'Edit Post' : 'Create New Post'}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
              />
              {imagePreview && (
                <div className="mt-4">
                  <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
              )}
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                >
                  <option>Corporate Law</option>
                  <option>Family Law</option>
                  <option>Real Estate Law</option>
                  <option>Intellectual Property</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#1A1D23] font-semibold mb-2">Author Title</label>
                <input
                  type="text"
                  value={formData.authorTitle}
                  onChange={(e) => setFormData({ ...formData, authorTitle: e.target.value })}
                  className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Reading Time (minutes)</label>
              <input
                type="number"
                value={formData.readingTime}
                onChange={(e) => setFormData({ ...formData, readingTime: parseInt(e.target.value) })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                rows="3"
                required
              />
            </div>
            <div>
              <label className="block text-[#1A1D23] font-semibold mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                rows="8"
                required
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold"
              >
                <span>{editingId ? 'Update' : 'Create'}</span>
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

      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-[#E8ECF0] rounded-2xl p-6 hover:border-[#C5CDD8] transition">
            <div className="flex gap-4">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#1A1D23] mb-2">{post.title}</h3>
                    <p className="text-sm text-[#6B7280] mb-2">
                      <span className="font-semibold">{post.author}</span> • {post.authorTitle}
                    </p>
                    <p className="text-[#4A5568] mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex gap-4 text-sm text-[#6B7280]">
                      <span>{post.date}</span>
                      <span>{post.readingTime} min read</span>
                      <span className="px-2 py-1 bg-[#D4A745]/20 text-[#D4A745] rounded">{post.category}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="flex items-center gap-2 text-[#1B3A5F] hover:text-[#2D5280] transition font-semibold"
                    >
                      <iconify-icon icon="lucide:edit" className="text-lg"></iconify-icon>
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 transition font-semibold"
                    >
                      <iconify-icon icon="lucide:trash" className="text-lg"></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

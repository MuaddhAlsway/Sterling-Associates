import { useState, useEffect } from 'react'
import { messagesAPI, teamAPI } from '../../services/api'

export default function ChatManager() {
  const [teamMembers, setTeamMembers] = useState([])
  const [selectedMemberId, setSelectedMemberId] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadTeamMembers()
  }, [])

  useEffect(() => {
    if (selectedMemberId) {
      loadMessages(selectedMemberId)
      const interval = setInterval(() => loadMessages(selectedMemberId), 3000)
      return () => clearInterval(interval)
    }
  }, [selectedMemberId])

  const loadTeamMembers = async () => {
    try {
      const response = await teamAPI.getAll()
      setTeamMembers(response.data)
      if (response.data.length > 0) {
        setSelectedMemberId(response.data[0].id)
      }
    } catch (err) {
      console.error('Error loading team members:', err)
    }
  }

  const loadMessages = async (memberId) => {
    try {
      const response = await messagesAPI.getMessages(memberId)
      setMessages(response.data)
    } catch (err) {
      console.error('Error loading messages:', err)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedMemberId) return

    setIsLoading(true)
    try {
      await messagesAPI.sendAdminMessage(selectedMemberId, newMessage)
      setNewMessage('')
      loadMessages(selectedMemberId)
    } catch (err) {
      console.error('Error sending message:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-8 h-[calc(100vh-200px)]">
      <div>
        <h1 className="text-4xl font-semibold text-[#1A1D23]">Live Chat</h1>
        <p className="text-[#4A5568]">Communicate with visitors</p>
      </div>

      <div className="flex gap-6 flex-1 overflow-hidden">
        {/* Team Members List */}
        <div className="w-64 bg-white border border-[#E8ECF0] rounded-2xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#E8ECF0]">
            <h2 className="text-lg font-semibold text-[#1A1D23]">Team Members</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMemberId(member.id)}
                className={`w-full px-4 py-3 text-left border-b border-[#E8ECF0] transition ${
                  selectedMemberId === member.id
                    ? 'bg-[#1B3A5F] text-white/95'
                    : 'text-[#1A1D23] hover:bg-[#F8F9FB]'
                }`}
              >
                <p className="font-semibold">{member.name}</p>
                <p className="text-xs opacity-75">{member.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white border border-[#E8ECF0] rounded-2xl overflow-hidden flex flex-col">
          {selectedMemberId ? (
            <>
              <div className="p-4 border-b border-[#E8ECF0]">
                <h2 className="text-lg font-semibold text-[#1A1D23]">
                  {teamMembers.find(m => m.id === selectedMemberId)?.name}
                </h2>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <p className="text-center text-[#6B7280] py-8">No messages yet</p>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.is_admin ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.is_admin
                            ? 'bg-[#1B3A5F] text-white/95'
                            : 'bg-[#F8F9FB] text-[#1A1D23] border border-[#E8ECF0]'
                        }`}
                      >
                        <p className="text-sm font-semibold mb-1">
                          {msg.is_admin ? 'You' : msg.visitor_name}
                        </p>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-75 mt-1">
                          {new Date(msg.created_at).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-[#E8ECF0] flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-[#E8ECF0] rounded-lg px-4 py-3 text-[#1A1D23] focus:outline-none focus:border-[#1B3A5F]"
                />
                <button
                  type="submit"
                  disabled={isLoading || !newMessage.trim()}
                  className="flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition font-semibold disabled:opacity-50"
                >
                  <iconify-icon icon="lucide:send" className="text-lg"></iconify-icon>
                </button>
              </form>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-[#6B7280]">
              <p>Select a team member to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

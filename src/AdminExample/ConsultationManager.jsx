import { useState, useEffect } from 'react'
import { consultationAPI } from '../../services/api'

export default function ConsultationManager() {
  const [consultations, setConsultations] = useState([])

  useEffect(() => {
    loadConsultations()
  }, [])

  const loadConsultations = async () => {
    try {
      const response = await consultationAPI.getAll()
      setConsultations(response.data)
    } catch (err) {
      console.error('Error loading consultations:', err)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await consultationAPI.updateStatus(id, status)
      loadConsultations()
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-semibold text-[#1A1D23]">Consultation Requests</h1>
        <p className="text-[#4A5568]">Manage booking requests</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {consultations.map((consultation) => (
          <div key={consultation.id} className="bg-white border border-[#E8ECF0] rounded-2xl p-6 hover:border-[#C5CDD8] transition">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">{consultation.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    consultation.status === 'pending' ? 'bg-[#FFF3CD] text-[#856404]' :
                    consultation.status === 'confirmed' ? 'bg-[#D4EDDA] text-[#155724]' :
                    'bg-[#F8D7DA] text-[#721C24]'
                  }`}>
                    {consultation.status}
                  </span>
                </div>
                <p className="text-[#4A5568] mb-2">{consultation.email}</p>
                <p className="text-[#4A5568] mb-2">{consultation.phone}</p>
                <p className="text-[#4A5568]">{consultation.message}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateStatus(consultation.id, 'confirmed')}
                  className="flex items-center gap-2 bg-[#D4EDDA] text-[#155724] px-4 py-2 rounded-lg hover:bg-[#C3E6CB] transition font-semibold text-sm"
                >
                  <iconify-icon icon="lucide:check" className="text-lg"></iconify-icon>
                  <span>Confirm</span>
                </button>
                <button
                  onClick={() => updateStatus(consultation.id, 'rejected')}
                  className="flex items-center gap-2 bg-[#F8D7DA] text-[#721C24] px-4 py-2 rounded-lg hover:bg-[#F5C6CB] transition font-semibold text-sm"
                >
                  <iconify-icon icon="lucide:x" className="text-lg"></iconify-icon>
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import React, { useState } from 'react';
import { Scale, ChevronRight, Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function BookConsultation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.practiceArea || !formData.preferredDate || !formData.preferredTime || 
        !formData.message || !formData.consent) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request. We will contact you within 24 hours.');
  };

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", lineHeight: '1.6' }}>
      {/* Header */}
    

      {/* Main Content */}
      <main className="w-full">
        {/* Page Header */}
        <section className="w-full bg-white pt-16 pb-16">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex items-center gap-2 mb-8 text-base">
              <span className="text-[#1B3A5F] hover:text-[#2D5280] cursor-pointer">Home</span>
              <ChevronRight size={16} className="text-[#6B7280]" />
              <span className="text-[#4A5568]">Book Consultation</span>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-semibold text-[#1A1D23] mb-6">
                Schedule Your Free Consultation
              </h1>
              <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
                Take the first step toward resolving your legal matter. Our experienced attorneys are ready to discuss your case and explore the best path forward during a complimentary 30-minute consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="w-full bg-[#F8F9FB] pt-24 pb-24">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-2 gap-16">
              {/* Consultation Form */}
              <div className="bg-white border border-[#E8ECF0] rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-[#1A1D23] mb-8">
                  Consultation Request Form
                </h2>
                <div className="flex flex-col gap-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-[#1A1D23]">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-[#1A1D23]">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#1A1D23]">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#1A1D23]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition"
                    />
                  </div>

                  {/* Practice Area */}
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#1A1D23]">Legal Service Needed</label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition text-[#1A1D23]"
                    >
                      <option value="">Select a service</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="family">Family Law</option>
                      <option value="real-estate">Real Estate Law</option>
                      <option value="ip">Intellectual Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-[#1A1D23]">Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-[#1A1D23]">Preferred Time</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition text-[#1A1D23]"
                      >
                        <option value="">Select time</option>
                        <option value="9am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="1pm">1:00 PM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                        <option value="4pm">4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-[#1A1D23]">Brief Description of Your Legal Matter</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide a brief overview of your legal issue..."
                      rows="4"
                      className="bg-white border border-[#E8ECF0] px-4 py-3 rounded-lg hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none transition resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 cursor-pointer" onClick={() => setFormData(prev => ({...prev, consent: !prev.consent}))}>
                    <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition mt-0.5 shrink-0 ${formData.consent ? 'bg-[#1B3A5F] border-[#1B3A5F]' : 'bg-white border-[#C5CDD8]'}`}>
                      {formData.consent && (
                        <svg stroke="currentColor" strokeWidth="3" fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-[#1A1D23]">
                      I agree to the privacy policy and consent to having my information collected and used to respond to my consultation request.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    style={{ backgroundColor: '#1B3A5F', color: '#FFFFFF' }}
                    className="w-full flex justify-center items-center gap-3 px-6 py-4 rounded-lg hover:bg-[#2D5280] transition font-semibold text-lg mt-6 shadow-md"
                  >
                    <Calendar size={20} color="#FFFFFF" />
                    <span style={{ color: '#FFFFFF' }}>Schedule Your Free Consultation</span>
                  </button>
                </div>
              </div>

              {/* Sidebar Information */}
              <div className="flex flex-col gap-8">
                {/* What to Expect */}
                <div className="bg-white border border-[#E8ECF0] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-[#1A1D23] mb-6">
                    What to Expect
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1B3A5F]/10 rounded-lg shrink-0">
                        <User size={20} className="text-[#1B3A5F]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#1A1D23] mb-2">
                          Initial Assessment
                        </h4>
                        <p className="text-base text-[#4A5568]">
                          We'll discuss your legal situation and determine how we can best assist you.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1B3A5F]/10 rounded-lg shrink-0">
                        <MessageSquare size={20} className="text-[#1B3A5F]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#1A1D23] mb-2">
                          Legal Strategy
                        </h4>
                        <p className="text-base text-[#4A5568]">
                          Our attorneys will outline potential approaches and recommended next steps.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#1B3A5F]/10 rounded-lg shrink-0">
                        <Calendar size={20} className="text-[#1B3A5F]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#1A1D23] mb-2">
                          Transparent Pricing
                        </h4>
                        <p className="text-base text-[#4A5568]">
                          We'll provide clear information about our fees and payment options.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white border border-[#E8ECF0] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-[#1A1D23] mb-6">
                    Need Immediate Assistance?
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-[#4A5568]">
                      <Phone size={20} className="text-[#1B3A5F]" />
                      <span className="text-base">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#4A5568]">
                      <Mail size={20} className="text-[#1B3A5F]" />
                      <span className="text-base">contact@sterling-law.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#4A5568]">
                      <Clock size={20} className="text-[#1B3A5F]" />
                      <span className="text-base">Mon-Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7280] mt-6">
                    Our team typically responds to consultation requests within 24 hours during business days.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="bg-[#1B3A5F] rounded-2xl p-8 text-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-[#D4A745] rounded-full mx-auto mb-6">
                    <CheckCircle size={28} className="text-[#1A1D23]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white/95 mb-4">
                    Confidential Consultation
                  </h3>
                  <p className="text-lg text-white/85">
                    All information shared during your consultation is completely confidential and protected by attorney-client privilege.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
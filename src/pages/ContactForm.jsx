import React, { useState } from "react";
import { useContacts } from "../context/ContactContext";
import { useToast } from "../context/ToastContext";
import { useTranslation } from "../hooks/useTranslation";

export default function ContactForm() {
  const { t } = useTranslation();
  const { addContact } = useContacts();
  const { addToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agree: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return addToast("Name, email and message are required", {
        type: "error",
      });
    
    try {
      await addContact(form);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        agree: false,
      });
      addToast("Message sent — we'll be in touch", { type: "success" });
    } catch (err) {
      addToast("Failed to send message: " + err.message, { type: "error" });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-[#1A1D23]">
          {t.contact.form.name}
        </label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          type="text"
          placeholder={t.contact.form.name}
          className="hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-[#1A1D23]">
          {t.contact.form.email}
        </label>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder={t.contact.form.email}
          className="hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-[#1A1D23]">Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          type="tel"
          placeholder={t.cta.phone}
          className="hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-[#1A1D23]">
          Legal Service Needed
        </label>
        <select
          name="service"
          value={form.service}
          onChange={onChange}
          className="hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition"
        >
          <option value="">Select a service</option>
          <option>Corporate Law</option>
          <option>Family Law</option>
          <option>Real Estate Law</option>
          <option>Intellectual Property</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-[#1A1D23]">
          {t.contact.form.message}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder={t.contact.form.message}
          rows="4"
          className="hover:border-[#C5CDD8] focus:border-[#1B3A5F] focus:outline-none border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition"
        ></textarea>
      </div>
      <label className="flex items-start gap-3">
        <input
          name="agree"
          checked={form.agree}
          onChange={onChange}
          type="checkbox"
          className="sr-only peer"
        />
        <div className="w-5 h-5 bg-white border-2 border-[#C5CDD8] rounded-md flex items-center justify-center peer-checked:bg-[#1B3A5F] peer-checked:border-[#1B3A5F] text-transparent peer-checked:text-white/95 transition mt-0.5">
          <svg
            className="w-4 h-4"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-sm text-[#1A1D23]">
          I agree to the privacy policy and consent to having my information
          collected and used to respond to my inquiry.
        </span>
      </label>
      <button
        type="submit"
        className="hover:bg-[#2D5280] flex justify-center items-center gap-2 rounded-lg bg-[#1B3A5F] text-white/95 px-6 py-3 transition"
      >
        <span className="whitespace-nowrap font-semibold">
          {t.contact.form.send}
        </span>
      </button>
    </form>
  );
}

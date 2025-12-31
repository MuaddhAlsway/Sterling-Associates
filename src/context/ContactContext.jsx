import React, { createContext, useContext, useEffect, useState } from "react";
import { contactAPI } from "../services/api";

const ContactContext = createContext();
export const useContacts = () => useContext(ContactContext);

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await contactAPI.getAll();
        const data = response.data || [];
        setContacts(data);
        setError(null);
      } catch (err) {
        console.warn("Failed to fetch contacts from backend, using fallback:", err);
        // Fallback to localStorage if backend fails
        try {
          const raw = localStorage.getItem("contacts");
          if (raw) setContacts(JSON.parse(raw));
        } catch (e) {}
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Save to localStorage as backup
  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (e) {}
  }, [contacts]);

  const addContact = async (payload) => {
    try {
      const response = await contactAPI.create(payload);
      const newContact = response.data;
      setContacts((s) => [newContact, ...s]);
      return newContact;
    } catch (err) {
      console.error("Failed to add contact:", err);
      throw err;
    }
  };

  const deleteContact = async (id) => {
    try {
      await contactAPI.delete(id);
      setContacts((s) => s.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Failed to delete contact:", err);
      throw err;
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, loading, error }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;

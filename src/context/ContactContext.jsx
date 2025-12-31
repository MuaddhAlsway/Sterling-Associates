import React, { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();
export const useContacts = () => useContext(ContactContext);

export function ContactProvider({ children }) {
  const initial = () => {
    try {
      const raw = localStorage.getItem("contacts");
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return [];
  };

  const [contacts, setContacts] = useState(initial);

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (e) {
      // ignore
    }
  }, [contacts]);

  const addContact = (payload) => {
    const id = Date.now();
    const newC = { id, createdAt: new Date().toISOString(), ...payload };
    setContacts((s) => [newC, ...s]);
    return newC;
  };

  const deleteContact = (id) =>
    setContacts((s) => s.filter((c) => c.id !== id));

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;

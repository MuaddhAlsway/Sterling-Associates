import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en.json";
import asianWomen from "../assests/asianwomen.avif";
import men1 from "../assests/men1.avif";
import women2 from "../assests/women2.avif";
import men2 from "../assests/men2.avif";
import women3 from "../assests/Women3.avif";
import men3 from "../assests/men3.avif";

const TeamContext = createContext();
export const useTeam = () => useContext(TeamContext);

export function TeamProvider({ children }) {
  const initial = () => {
    try {
      const raw = localStorage.getItem("team");
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return en.team.members || [];
  };

  const [members, setMembers] = useState(initial);
  // Normalize members to include image and career fields
  useEffect(() => {
    const defaultImages = [asianWomen, men1, women2, men2, women3, men3];
    setMembers((prev) =>
      prev.map((m, i) => ({
        image: m.image || defaultImages[i % defaultImages.length] || "",
        career: m.career || "",
        name: m.name,
        title: m.title,
        specialty: m.specialty,
        bio: m.bio,
      }))
    );
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("team", JSON.stringify(members));
    } catch (e) {}
  }, [members]);

  const addMember = (m) => {
    setMembers((s) => [...s, m]);
  };

  const updateMember = (idx, payload) => {
    setMembers((s) =>
      s.map((m, i) => (i === Number(idx) ? { ...m, ...payload } : m))
    );
  };

  const deleteMember = (idx) => {
    setMembers((s) => s.filter((_, i) => i !== Number(idx)));
  };

  return (
    <TeamContext.Provider
      value={{ members, addMember, updateMember, deleteMember }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export default TeamContext;

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en.json";
import asianWomen from "../assests/asianwomen.avif";
import men1 from "../assests/men1.avif";
import women2 from "../assests/women2.avif";
import men2 from "../assests/men2.avif";
import women3 from "../assests/Women3.avif";
import men3 from "../assests/men3.avif";
import { teamAPI } from "../services/api";

const TeamContext = createContext();
export const useTeam = () => useContext(TeamContext);

export function TeamProvider({ children }) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch team members from backend
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await teamAPI.getAll();
        const data = response.data || [];
        
        // Normalize members to include image and career fields
        const defaultImages = [asianWomen, men1, women2, men2, women3, men3];
        const normalized = data.map((m, i) => ({
          id: m.id || m._id,
          image: m.image || m.imageUrl || defaultImages[i % defaultImages.length] || "",
          career: m.career || "",
          name: m.name,
          title: m.title,
          specialty: m.specialty,
          bio: m.bio,
        }));
        
        setMembers(normalized);
        setError(null);
      } catch (err) {
        console.warn("Failed to fetch team from backend, using fallback:", err);
        // Fallback to translation data if backend fails
        const fallbackMembers = (en.team?.members || []).map((m, i) => {
          const defaultImages = [asianWomen, men1, women2, men2, women3, men3];
          return {
            image: m.image || defaultImages[i % defaultImages.length] || "",
            career: m.career || "",
            name: m.name,
            title: m.title,
            specialty: m.specialty,
            bio: m.bio,
          };
        });
        setMembers(fallbackMembers);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Save to localStorage as backup
  useEffect(() => {
    try {
      localStorage.setItem("team", JSON.stringify(members));
    } catch (e) {}
  }, [members]);

  const addMember = async (m) => {
    try {
      const response = await teamAPI.create(m);
      const newMember = response.data;
      setMembers((s) => [...s, newMember]);
      return newMember;
    } catch (err) {
      console.error("Failed to add member:", err);
      throw err;
    }
  };

  const updateMember = async (idx, payload) => {
    try {
      const member = members[idx];
      const response = await teamAPI.update(member.id, payload);
      const updated = response.data;
      setMembers((s) =>
        s.map((m, i) => (i === Number(idx) ? updated : m))
      );
      return updated;
    } catch (err) {
      console.error("Failed to update member:", err);
      throw err;
    }
  };

  const deleteMember = async (idx) => {
    try {
      const member = members[idx];
      await teamAPI.delete(member.id);
      setMembers((s) => s.filter((_, i) => i !== Number(idx)));
    } catch (err) {
      console.error("Failed to delete member:", err);
      throw err;
    }
  };

  return (
    <TeamContext.Provider
      value={{ members, addMember, updateMember, deleteMember, loading, error }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export default TeamContext;

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminEmail = import.meta.env.VITE_ADMIN_EMAIL || "admin@example.com";
const AdminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "password123";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Basic JWT-like generator (client-only). Not for production use without server verification.
const makeToken = (email) => {
  const payload = { email, iat: Date.now() };
  return btoa(JSON.stringify(payload));
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("admin_token"));
  const [user, setUser] = useState(() => {
    try {
      const t = localStorage.getItem("admin_token");
      if (!t) return null;
      return JSON.parse(atob(t));
    } catch (e) {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (token) localStorage.setItem("admin_token", token);
    else localStorage.removeItem("admin_token");
  }, [token]);

  const login = ({ email, password }) => {
    if (email === AdminEmail && password === AdminPassword) {
      const t = makeToken(email);
      setToken(t);
      setUser(JSON.parse(atob(t)));
      return { ok: true };
    }
    return { ok: false, message: "Invalid credentials" };
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate("/");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

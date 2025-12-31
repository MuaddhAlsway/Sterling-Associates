import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (!res.ok) {
      setError(res.message || "Login failed");
      return;
    }
    // redirect handled by AuthProvider through state; navigate in login if you prefer
    window.location.href = "/admin";
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold mb-6">Admin Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {error && <div className="text-red-600">{error}</div>}
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="Email"
          className="border px-4 py-3 rounded-lg"
        />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          placeholder="Password"
          className="border px-4 py-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-[#1B3A5F] text-white px-4 py-3 rounded-lg"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

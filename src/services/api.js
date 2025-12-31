// API Service - Centralized API calls to backend
const API_BASE_URL = "http://localhost:4000/api";

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "API Error");
  }

  return response.json();
};

// Authentication API
export const authAPI = {
  login: (email, password) =>
    apiCall("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
};

// Team API
export const teamAPI = {
  getAll: () => apiCall("/team"),
  getById: (id) => apiCall(`/team/${id}`),
  create: (data) =>
    apiCall("/team", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    apiCall(`/team/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiCall(`/team/${id}`, {
      method: "DELETE",
    }),
};

// Blog API
export const blogAPI = {
  getAll: () => apiCall("/blogs"),
  getById: (id) => apiCall(`/blogs/${id}`),
  create: (data) =>
    apiCall("/blogs", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    apiCall(`/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiCall(`/blogs/${id}`, {
      method: "DELETE",
    }),
};

// Contact API
export const contactAPI = {
  getAll: () => apiCall("/contacts"),
  getById: (id) => apiCall(`/contacts/${id}`),
  create: (data) =>
    apiCall("/contacts", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    apiCall(`/contacts/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiCall(`/contacts/${id}`, {
      method: "DELETE",
    }),
};

// Consultation API
export const consultationAPI = {
  getAll: () => apiCall("/consultations"),
  getById: (id) => apiCall(`/consultations/${id}`),
  create: (data) =>
    apiCall("/consultations", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    apiCall(`/consultations/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    apiCall(`/consultations/${id}`, {
      method: "DELETE",
    }),
};

// Site Content API
export const contentAPI = {
  getByLanguage: (lang = "en") => apiCall(`/content?lang=${lang}`),
  update: (data) =>
    apiCall("/content", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

// Upload API
export const uploadAPI = {
  uploadFile: (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return fetch(`${API_BASE_URL}/uploads`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (!res.ok) throw new Error("Upload failed");
      return res.json();
    });
  },
};

export default {
  authAPI,
  teamAPI,
  blogAPI,
  contactAPI,
  consultationAPI,
  contentAPI,
  uploadAPI,
};

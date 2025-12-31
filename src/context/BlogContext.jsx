import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en.json";
import { blogAPI } from "../services/api";

const BlogContext = createContext();

export const useBlogs = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogAPI.getAll();
        const data = response.data || [];
        setBlogs(data);
        setError(null);
      } catch (err) {
        console.warn("Failed to fetch blogs from backend, using fallback:", err);
        // Fallback to translation data if backend fails
        setBlogs(en.blog?.articles || []);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Save to localStorage as backup
  useEffect(() => {
    try {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    } catch (e) {}
  }, [blogs]);

  const addBlog = async (payload) => {
    try {
      const response = await blogAPI.create(payload);
      const newBlog = response.data;
      setBlogs((s) => [newBlog, ...s]);
      return newBlog;
    } catch (err) {
      console.error("Failed to add blog:", err);
      throw err;
    }
  };

  const getBlogById = (id) => blogs.find((b) => String(b.id) === String(id));

  const deleteBlog = async (id) => {
    try {
      await blogAPI.delete(id);
      setBlogs((s) => s.filter((b) => String(b.id) !== String(id)));
    } catch (err) {
      console.error("Failed to delete blog:", err);
      throw err;
    }
  };

  const updateBlog = async (id, payload) => {
    try {
      const response = await blogAPI.update(id, payload);
      const updated = response.data;
      setBlogs((s) =>
        s.map((b) => (String(b.id) === String(id) ? updated : b))
      );
      return updated;
    } catch (err) {
      console.error("Failed to update blog:", err);
      throw err;
    }
  };

  return (
    <BlogContext.Provider
      value={{ blogs, addBlog, getBlogById, deleteBlog, updateBlog, loading, error }}
    >
      {children}
    </BlogContext.Provider>
  );
};

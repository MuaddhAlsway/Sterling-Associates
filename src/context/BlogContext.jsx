import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en.json";

const BlogContext = createContext();

export const useBlogs = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const initial = () => {
    try {
      const raw = localStorage.getItem("blogs");
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return en.blog.articles || [];
  };

  const [blogs, setBlogs] = useState(initial);

  useEffect(() => {
    try {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    } catch (e) {
      // ignore
    }
  }, [blogs]);

  const addBlog = (payload) => {
    const maxId = blogs.reduce((m, b) => Math.max(m, Number(b.id || 0)), 0);
    const id = maxId + 1;
    const newBlog = { id, ...payload };
    setBlogs((s) => [newBlog, ...s]);
    return newBlog;
  };

  const getBlogById = (id) => blogs.find((b) => String(b.id) === String(id));

  const deleteBlog = (id) => {
    setBlogs((s) => s.filter((b) => String(b.id) !== String(id)));
  };

  const updateBlog = (id, payload) => {
    setBlogs((s) =>
      s.map((b) => (String(b.id) === String(id) ? { ...b, ...payload } : b))
    );
  };

  return (
    <BlogContext.Provider
      value={{ blogs, addBlog, getBlogById, deleteBlog, updateBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

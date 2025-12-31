import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlogs from "./pages/AdminBlogs";
import AdminEditBlog from "./pages/AdminEditBlog";
import AdminTeam from "./pages/AdminTeam";
import AdminContent from "./pages/AdminContent";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";

import { ToastProvider } from "./context/ToastContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { TeamProvider } from "./context/TeamContext";
import { SiteContentProvider } from "./context/SiteContentContext";
import { BlogProvider } from "./context/BlogContext";
import { ContactProvider } from "./context/ContactContext";
import Toasts from "./components/Toasts";

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return children;
}

function App() {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <TeamProvider>
            <SiteContentProvider>
              <ContactProvider>
                <div className="w-full min-h-screen font-[-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial,sans-serif] leading-[1.6]">
                  {/* SINGLE Header instance */}
                  <Header />

                  <BlogProvider>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about-us" element={<AboutUs />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogDetail />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/book-consultation" element={<BookConsultation />} />

                      {/* Admin routes */}
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route
                        path="/admin/*"
                        element={
                          <RequireAuth>
                            <AdminLayout />
                          </RequireAuth>
                        }
                      >
                        <Route index element={<AdminDashboard />} />
                        <Route path="blogs" element={<AdminBlogs />} />
                        <Route path="blogs/:id/edit" element={<AdminEditBlog />} />
                        <Route path="team" element={<AdminTeam />} />
                        <Route path="content" element={<AdminContent />} />
                      </Route>
                    </Routes>
                  </BlogProvider>

                  <Footer />
                  <Toasts />
                </div>
              </ContactProvider>
            </SiteContentProvider>
          </TeamProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;

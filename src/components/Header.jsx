import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useSiteContent } from "../context/SiteContentContext";

const Header = () => {
  const location = useLocation();
  const { t, language, setLanguage } = useTranslation();
  const { content } = useSiteContent();
  const nav = content?.nav || t.nav;

  const isActive = (path) => location.pathname === path;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-[#E8ECF0]">
      <nav className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 py-4">
        <div className="flex items-center gap-4 md:gap-12">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1B3A5F]">
              <iconify-icon
                icon="lucide:scale"
                className="text-base md:text-xl text-white"
              ></iconify-icon>
            </div>
            <span className="text-base md:text-xl font-semibold text-[#1A1D23]">
              {content?.header?.title || "Sterling & Associates"}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 transition ${
                isActive("/") ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
              }`}
            >
              <span className="text-lg">{nav.home}</span>
            </Link>
            <Link
              to="/about-us"
              className={`flex items-center gap-2 transition ${
                isActive("/about-us") ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
              }`}
            >
              <span className="text-lg">{nav.about}</span>
            </Link>
            <Link
              to="/services"
              className={`flex items-center gap-2 transition ${
                isActive("/services") ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
              }`}
            >
              <span className="text-lg">{nav.services}</span>
            </Link>
            <Link
              to="/blog"
              className={`flex items-center gap-2 transition ${
                isActive("/blog") ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
              }`}
            >
              <span className="text-lg">{nav.blog}</span>
            </Link>
            <Link
              to="/admin"
              className={`flex items-center gap-2 transition ${
                isActive("/admin") ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
              }`}
            >
              <span className="text-lg">{nav.admin}</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center gap-2 transition ${
                isActive("/contact") ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
              }`}
            >
              <span className="text-lg">{nav.contact}</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Language selector */}
          <div className="flex items-center gap-2">
            <button
              aria-label="English"
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded text-sm ${
                language === "en" ? "bg-[#1B3A5F] text-white" : "text-[#1A1D23] hover:bg-gray-100"
              }`}
            >
              EN
            </button>
            <button
              aria-label="Arabic"
              onClick={() => setLanguage("ar")}
              className={`px-2 py-1 rounded text-sm ${
                language === "ar" ? "bg-[#1B3A5F] text-white" : "text-[#1A1D23] hover:bg-gray-100"
              }`}
            >
              ع
            </button>
          </div>

          <button className="hidden sm:flex items-center gap-2 bg-[#1B3A5F] text-white/95 px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#2D5280] transition">
            <span className="whitespace-nowrap text-sm md:text-base font-semibold">{t.hero.cta1}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#1A1D23]"
          >
            <iconify-icon
              icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"}
              className="text-xl"
            ></iconify-icon>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8ECF0] bg-white">
          <div className="flex flex-col px-4 py-4 gap-4">
            {["/", "/about-us", "/services", "/blog", "/admin", "/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition ${
                  isActive(path) ? "text-[#1B3A5F] font-semibold" : "text-[#1A1D23] hover:text-[#1B3A5F]"
                }`}
              >
                {nav[Object.keys(nav)[idx]]}
              </Link>
            ))}

            <button className="flex items-center justify-center gap-2 bg-[#1B3A5F] text-white/95 px-6 py-3 rounded-lg hover:bg-[#2D5280] transition mt-2">
              <span className="whitespace-nowrap font-semibold">{t.hero.cta1}</span>
            </button>

            {/* Mobile language selector */}
            <div className="flex items-center gap-2 mt-3">
              <button
                aria-label="English"
                onClick={() => {
                  setLanguage("en");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded text-sm ${language === "en" ? "bg-[#1B3A5F] text-white" : "text-[#1A1D23] hover:bg-gray-100"}`}
              >
                EN
              </button>
              <button
                aria-label="Arabic"
                onClick={() => {
                  setLanguage("ar");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded text-sm ${language === "ar" ? "bg-[#1B3A5F] text-white" : "text-[#1A1D23] hover:bg-gray-100"}`}
              >
                ع
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

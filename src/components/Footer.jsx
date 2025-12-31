import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useSiteContent } from "../context/SiteContentContext";

const Footer = () => {
  const { t } = useTranslation();
  const { content } = useSiteContent();
  const nav = content?.nav || t.nav;
  const header = content?.header || { title: "Sterling & Associates" };
  return (
    <footer className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-[#F8F9FB] border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8 rounded-lg bg-[#1B3A5F]">
                <iconify-icon
                  icon="lucide:scale"
                  className="text-base text-white"
                ></iconify-icon>
              </div>
              <span className="text-lg font-semibold text-[#1A1D23]">
                {header.title}
              </span>
            </div>
            <p className="text-base text-[#4A5568]">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-[#1A1D23]">
              {t.footer.quicklinks}
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="whitespace-nowrap">{nav.home}</span>
              </Link>
              <Link
                to="/about-us"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="whitespace-nowrap">{nav.about}</span>
              </Link>
              <Link
                to="/services"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="whitespace-nowrap">{nav.services}</span>
              </Link>
              <Link
                to="/blog"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="whitespace-nowrap">{nav.blog}</span>
              </Link>
              <Link
                to="/contact"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="whitespace-nowrap">{nav.contact}</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-[#1A1D23]">
              {t.footer.contactinfo}
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#4A5568]">
                <div className="bg-transparent flex justify-center items-center w-4 h-4">
                  <iconify-icon
                    icon="lucide:phone"
                    className="text-sm"
                  ></iconify-icon>
                </div>
                <span className="text-base">{t.cta.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-[#4A5568]">
                <div className="bg-transparent flex justify-center items-center w-4 h-4">
                  <iconify-icon
                    icon="lucide:mail"
                    className="text-sm"
                  ></iconify-icon>
                </div>
                <span className="text-base">{t.cta.email}</span>
              </div>
              <div className="flex items-start gap-3 text-[#4A5568]">
                <div className="bg-transparent flex justify-center items-center w-4 h-4 mt-0.5">
                  <iconify-icon
                    icon="lucide:map-pin"
                    className="text-sm"
                  ></iconify-icon>
                </div>
                <div className="text-base">
                  <div>{t.contact.address}</div>
                  <div>{t.contact.suite}</div>
                  <div>{t.contact.city}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-[#1A1D23]">
                {t.footer.followus}
              </h4>
              <div className="flex items-center gap-4">
                <button className="hover:text-[#1B3A5F] bg-transparent flex justify-center items-center w-8 h-8 text-[#4A5568] transition">
                  <iconify-icon
                    icon="simple-icons:linkedin"
                    className="text-lg"
                  ></iconify-icon>
                </button>
                <button className="hover:text-[#1B3A5F] bg-transparent flex justify-center items-center w-8 h-8 text-[#4A5568] transition">
                  <iconify-icon
                    icon="simple-icons:x"
                    className="text-lg"
                  ></iconify-icon>
                </button>
                <button className="hover:text-[#1B3A5F] bg-transparent flex justify-center items-center w-8 h-8 text-[#4A5568] transition">
                  <iconify-icon
                    icon="simple-icons:facebook"
                    className="text-lg"
                  ></iconify-icon>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/privacy"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="text-sm whitespace-nowrap">
                  {t.footer.privacy}
                </span>
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#4A5568] transition"
              >
                <span className="text-sm whitespace-nowrap">
                  {t.footer.terms}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8ECF0]">
          <div className="text-sm text-center text-[#6B7280]">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useTranslation } from "../hooks/useTranslation";
import { useSiteContent } from "../context/SiteContentContext";

const Contact = () => {
  const { t } = useTranslation();
  const { content } = useSiteContent();
  const nav = content?.nav || t.nav;
  const contact = content?.contact || t.contact;

  return (
    <div className="flex w-full min-h-[800px]">
      <main className="overflow-x-hidden flex flex-col grow shrink">
        {/* Breadcrumb and Header */}
        <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex items-center gap-2 mb-6 md:mb-8 text-sm md:text-base">
              <Link
                to="/"
                className="hover:text-[#2D5280] text-[#1B3A5F] transition"
              >
                {nav.home}
              </Link>
              <div className="bg-transparent flex justify-center items-center w-4 h-4">
                <iconify-icon
                  icon="lucide:chevron-right"
                  className="text-sm text-[#6B7280]"
                ></iconify-icon>
              </div>
              <span className="text-[#4A5568]">{nav.contact}</span>
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
                {contact.title || t.contact.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#4A5568]">
                {contact.description || t.contact.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
              {/* Contact Form */}
              <div className="p-8 border border-[#E8ECF0] rounded-2xl bg-white">
                <h2 className="text-2xl mb-8 font-semibold text-[#1A1D23]">
                  {t.contact.title}
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-8">
                <div className="p-8 border border-[#E8ECF0] rounded-2xl bg-white">
                  <h2 className="text-2xl mb-8 font-semibold text-[#1A1D23]">
                    {contact.title || t.contact.title}
                  </h2>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:phone"
                          className="text-xl text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-[#1A1D23]">
                          Phone
                        </h3>
                        <a
                          href={`tel:${t.cta.phone}`}
                          className="hover:text-[#2D5280] text-[#1B3A5F] transition"
                        >
                          {t.cta.phone}
                        </a>
                        <button className="hover:bg-[#2D5280] text-sm font-semibold rounded-lg bg-[#1B3A5F] text-white/95 px-4 py-2 self-start transition">
                          Call Now
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:mail"
                          className="text-xl text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-[#1A1D23]">
                          Email
                        </h3>
                        <a
                          href={`mailto:${t.cta.email}`}
                          className="hover:text-[#2D5280] text-[#1B3A5F] transition"
                        >
                          {t.cta.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:map-pin"
                          className="text-xl text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-[#1A1D23]">
                          Office Address
                        </h3>
                        <div className="text-[#4A5568]">
                          <div>{t.contact.address}</div>
                          <div>{t.contact.suite}</div>
                          <div>{t.contact.city}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:clock"
                          className="text-xl text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold text-[#1A1D23]">
                          Business Hours
                        </h3>
                        <div className="text-[#4A5568]">
                          <div className="mb-1">
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </div>
                          <div className="mb-1">
                            Saturday: 10:00 AM - 2:00 PM
                          </div>
                          <div>Sunday: Closed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[#E8ECF0]">
                    <h3 className="text-lg mb-4 font-semibold text-[#1A1D23]">
                      {t.footer.followus}
                    </h3>
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
                </div>

                {/* Free Consultation CTA */}
                <div className="p-8 rounded-2xl bg-[#1B3A5F]">
                  <div className="text-center">
                    <div className="flex justify-center items-center w-16 h-16 mb-6 mx-auto rounded-full bg-[#D4A745]">
                      <iconify-icon
                        icon="lucide:calendar-check"
                        className="text-2xl text-[#1A1D23]"
                      ></iconify-icon>
                    </div>
                    <h3 className="text-2xl mb-4 font-semibold text-white/95">
                      {t.cta.title}
                    </h3>
                    <p className="text-lg mb-6 text-white/85">
                      {t.cta.description}
                    </p>
                    <button className="hover:bg-[#E8C976] flex items-center gap-2 font-semibold rounded-lg bg-[#D4A745] text-[#1A1D23] px-6 py-3 mx-auto transition">
                      <span className="whitespace-nowrap">{t.cta.button}</span>
                    </button>
                    <p className="text-sm mt-4 text-white/75">
                      What to expect: Case assessment, legal options, and
                      transparent fee discussion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Our Office Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
                {t.contact.visitTitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#4A5568]">
                {t.contact.visitDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
              <div className="lg:col-span-2">
                <div className="overflow-hidden h-96 border border-[#E8ECF0] rounded-2xl bg-[#F8F9FB]">
                  <iframe
                    title={t.contact.visitTitle}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${t.contact.address} ${t.contact.city}`
                    )}&z=15&output=embed`}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="p-6 border border-[#E8ECF0] rounded-2xl bg-[#F8F9FB]">
                  <h3 className="text-xl mb-4 font-semibold text-[#1A1D23]">
                    Directions & Landmarks
                  </h3>
                  <div className="text-[#4A5568]">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#1B3A5F]"></div>
                      <span>Located next to Central Bank building</span>
                    </div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#1B3A5F]"></div>
                      <span>Two blocks from Metro Station</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#1B3A5F]"></div>
                      <span>Accessible entrance on Legal Street</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border border-[#E8ECF0] rounded-2xl bg-[#F8F9FB]">
                  <h3 className="text-xl mb-4 font-semibold text-[#1A1D23]">
                    Parking Information
                  </h3>
                  <div className="text-[#4A5568]">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-transparent flex justify-center items-center w-4 h-4">
                        <iconify-icon
                          icon="lucide:car"
                          className="text-sm text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span>Free client parking available</span>
                    </div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-transparent flex justify-center items-center w-4 h-4">
                        <iconify-icon
                          icon="lucide:clock"
                          className="text-sm text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span>Validated parking for 2 hours</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-transparent flex justify-center items-center w-4 h-4">
                        <iconify-icon
                          icon="lucide:accessibility"
                          className="text-sm text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span>ADA accessible spaces available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;

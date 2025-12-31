import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useSiteContent } from "../context/SiteContentContext";
import ConsultationCTA from "../components/ConsultationCTA";

const AboutUs = () => {
  const { t } = useTranslation();
  const { content } = useSiteContent();
  const nav = content?.nav || t.nav;
  return (
    <div className="flex flex-col w-full min-h-[800px]">
      <main className="overflow-x-hidden flex flex-col grow shrink">
        {/* Breadcrumb and Header */}
        <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-[#6B7280] text-sm md:text-base">
              <Link to="/" className="hover:text-[#2D5280] transition">
                {nav.home}
              </Link>
              <div className="bg-transparent flex justify-center items-center w-4 h-4">
                <iconify-icon
                  icon="lucide:chevron-right"
                  className="text-sm"
                ></iconify-icon>
              </div>
              <span className="text-[#1B3A5F]">{nav.about}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
              {t.about.pageTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-4xl text-[#4A5568]">
              Sterling & Associates has been providing trusted legal excellence
              for over 25 years. We combine deep expertise with personalized
              service to deliver exceptional results for our clients across
              corporate law, family matters, real estate, and intellectual
              property.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-4xl mb-6 font-semibold text-[#1A1D23]">
                    Our Story
                  </h2>
                  <p className="text-lg mb-6 text-[#4A5568]">
                    Founded in 1998 by partners Jennifer Sterling and Michael
                    Associates, our firm began with a simple mission: to provide
                    exceptional legal services with unwavering integrity and
                    personal attention. What started as a small practice focused
                    on corporate law has grown into a comprehensive legal firm
                    serving clients nationwide.
                  </p>
                  <p className="text-lg mb-6 text-[#4A5568]">
                    Our commitment to excellence has remained constant
                    throughout our growth. We believe that every client deserves
                    dedicated representation, clear communication, and strategic
                    legal solutions tailored to their unique circumstances.
                  </p>
                  <p className="text-lg text-[#4A5568]">
                    Today, we continue to uphold the values that founded our
                    firm: integrity, excellence, and an unwavering dedication to
                    achieving the best possible outcomes for those we serve.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-8 h-8 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:shield-check"
                          className="text-base text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span className="text-lg font-semibold text-[#1A1D23]">
                        Integrity
                      </span>
                    </div>
                    <p className="text-base text-[#4A5568]">
                      Honest, transparent legal counsel you can trust
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-8 h-8 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:target"
                          className="text-base text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span className="text-lg font-semibold text-[#1A1D23]">
                        Excellence
                      </span>
                    </div>
                    <p className="text-base text-[#4A5568]">
                      Exceptional legal expertise and attention to detail
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-8 h-8 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:users"
                          className="text-base text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span className="text-lg font-semibold text-[#1A1D23]">
                        Client-First
                      </span>
                    </div>
                    <p className="text-base text-[#4A5568]">
                      Your needs and goals drive every decision we make
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center w-8 h-8 rounded-lg bg-[#1B3A5F]/10">
                        <iconify-icon
                          icon="lucide:handshake"
                          className="text-base text-[#1B3A5F]"
                        ></iconify-icon>
                      </div>
                      <span className="text-lg font-semibold text-[#1A1D23]">
                        Partnership
                      </span>
                    </div>
                    <p className="text-base text-[#4A5568]">
                      Building lasting relationships through collaboration
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Professional law firm office interior with modern furniture and legal books"
                  src="https://static.paraflowcontent.com/public/resource/image/3f1a47a7-9a77-4ff0-9d0d-b338c3eb9e7e.jpeg"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Attorneys Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
                Meet Our Attorneys
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto text-[#4A5568]">
                Our experienced legal team combines decades of expertise with a
                deep commitment to client service. Each attorney brings unique
                strengths and specialized knowledge to serve your legal needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Attorney cards - showing first two as example */}
              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-[#E8ECF0] rounded-2xl bg-white transition">
                <img
                  alt="Professional headshot of Jennifer Sterling, senior partner with confident smile"
                  src="https://static.paraflowcontent.com/public/resource/image/cb8d087b-ef06-40c5-8e02-27ce04652db1.jpeg"
                  className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col grow shrink gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1D23]">
                      Jennifer Sterling, Esq.
                    </h3>
                    <p className="text-base font-semibold text-[#1B3A5F]">
                      Senior Partner & Managing Attorney
                    </p>
                    <p className="text-sm mt-1 text-[#6B7280]">
                      Corporate Law, Business Transactions
                    </p>
                  </div>
                  <p className="text-base text-[#4A5568]">
                    With over 15 years of experience in corporate law, Jennifer
                    specializes in business formation, mergers & acquisitions,
                    and corporate governance. She graduated summa cum laude from
                    Harvard Law School.
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#6B7280]">
                      <span>Education:</span>{" "}
                      <span>
                        Harvard Law School (J.D.), Yale University (B.A.)
                      </span>
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      <span>Bar Admissions:</span>{" "}
                      <span>New York, California, Connecticut</span>
                    </p>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      View Full Profile
                    </span>
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon
                        icon="lucide:arrow-right"
                        className="text-sm"
                      ></iconify-icon>
                    </div>
                  </button>
                </div>
              </div>

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 border border-[#E8ECF0] rounded-2xl bg-white transition">
                <img
                  alt="Professional headshot of Michael Associates, experienced attorney with warm expression"
                  src="https://static.paraflowcontent.com/public/resource/image/ef523f8e-38bb-40fc-9e8e-678172b60695.jpeg"
                  className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-lg"
                />
                <div className="flex flex-col grow shrink gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1D23]">
                      Michael Associates, Esq.
                    </h3>
                    <p className="text-base font-semibold text-[#1B3A5F]">
                      Senior Partner
                    </p>
                    <p className="text-sm mt-1 text-[#6B7280]">
                      Family Law, Domestic Relations
                    </p>
                  </div>
                  <p className="text-base text-[#4A5568]">
                    Michael brings compassionate expertise to family law
                    matters, handling complex divorce proceedings, child custody
                    cases, and adoption services. He is known for his empathetic
                    approach and strategic negotiation skills.
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-[#6B7280]">
                      <span>Education:</span>{" "}
                      <span>
                        Stanford Law School (J.D.), UC Berkeley (B.A.)
                      </span>
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      <span>Bar Admissions:</span>{" "}
                      <span>California, Nevada, Arizona</span>
                    </p>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      View Full Profile
                    </span>
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon
                        icon="lucide:arrow-right"
                        className="text-sm"
                      ></iconify-icon>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#1B3A5F]">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-white/95">
              {t.about.ctaTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-white/85">
              {t.about.ctaDescription}
            </p>
            <div className="flex flex-col items-center gap-8">
              <ConsultationCTA />
              <div className="flex items-center gap-8 text-white/85">
                <div className="flex items-center gap-3">
                  <div className="bg-transparent flex justify-center items-center w-5 h-5">
                    <iconify-icon
                      icon="lucide:phone"
                      className="text-lg"
                    ></iconify-icon>
                  </div>
                  <span className="text-lg">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-transparent flex justify-center items-center w-5 h-5">
                    <iconify-icon
                      icon="lucide:mail"
                      className="text-lg"
                    ></iconify-icon>
                  </div>
                  <span className="text-lg">contact@sterling-law.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;

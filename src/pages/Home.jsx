import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full min-h-[800px]">
      <main className="overflow-x-hidden flex flex-col grow shrink">
        {/* Hero Section */}
        <section
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://static.paraflowcontent.com/public/resource/image/8e1bbbcf-267a-4f8a-b113-e7aca0859ba8.jpeg)",
          }}
        >
          <div
            className="w-full pt-16 pb-16 md:pt-32 md:pb-32"
            style={{ backgroundColor: "rgba(27, 58, 95, 0.8)" }}
          >
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 font-semibold text-white/95">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 text-white/85">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                <button className="hover:bg-[#E8C976] flex items-center justify-center gap-2 rounded-lg bg-[#D4A745] text-[#1A1D23] px-6 md:px-8 py-3 md:py-4 transition w-full sm:w-auto">
                  <span className="text-base md:text-lg whitespace-nowrap font-semibold">
                    {t.hero.cta1}
                  </span>
                </button>
                <button className="hover:bg-white/10 flex items-center justify-center gap-2 border-2 border-white/80 rounded-lg text-white/95 px-6 md:px-8 py-3 md:py-4 transition w-full sm:w-auto">
                  <span className="text-base md:text-lg whitespace-nowrap font-semibold">
                    {t.hero.cta2}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
                {t.services.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#4A5568]">
                {t.services.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon
                    icon="lucide:briefcase"
                    className="text-xl text-[#1B3A5F]"
                  ></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">
                    {t.services.corporate.title}
                  </h3>
                  <p className="text-base font-normal text-[#4A5568]">
                    {t.services.corporate.description}
                  </p>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.services.corporate.link}
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

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon
                    icon="lucide:heart"
                    className="text-xl text-[#1B3A5F]"
                  ></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">
                    {t.services.family.title}
                  </h3>
                  <p className="text-base font-normal text-[#4A5568]">
                    {t.services.family.description}
                  </p>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.services.family.link}
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

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon
                    icon="lucide:home"
                    className="text-xl text-[#1B3A5F]"
                  ></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">
                    {t.services.realestate.title}
                  </h3>
                  <p className="text-base font-normal text-[#4A5568]">
                    {t.services.realestate.description}
                  </p>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.services.realestate.link}
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

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon
                    icon="lucide:lightbulb"
                    className="text-xl text-[#1B3A5F]"
                  ></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">
                    {t.services.ip.title}
                  </h3>
                  <p className="text-base font-normal text-[#4A5568]">
                    {t.services.ip.description}
                  </p>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.services.ip.link}
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

        {/* Why Choose Us Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-4xl mb-6 font-semibold text-[#1A1D23]">
                    {t.about.title}
                  </h2>
                  <p className="text-lg mb-8 text-[#4A5568]">
                    {t.about.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl mb-2 font-semibold text-[#1B3A5F]">
                      25+
                    </div>
                    <div className="text-xs md:text-sm text-[#4A5568]">
                      {t.about.stats.experience}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl mb-2 font-semibold text-[#1B3A5F]">
                      500+
                    </div>
                    <div className="text-xs md:text-sm text-[#4A5568]">
                      {t.about.stats.cases}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl mb-2 font-semibold text-[#1B3A5F]">
                      98%
                    </div>
                    <div className="text-xs md:text-sm text-[#4A5568]">
                      {t.about.stats.satisfaction}
                    </div>
                  </div>
                </div>

                <Link to="/team">
                  <button className="hover:bg-[#2D5280] flex items-center gap-2 rounded-lg bg-[#1B3A5F] text-white/95 px-6 py-3 transition">
                    <span className="font-semibold">{t.about.button}</span>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Professional team of attorneys in modern law office, diverse group of lawyers in business attire"
                  src="https://static.paraflowcontent.com/public/resource/image/718d0a63-da93-4554-9171-7b37e7fb50c0.jpeg"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Legal Insights Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
                {t.blog.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#4A5568]">
                {t.blog.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="hover:border-[#C5CDD8] overflow-hidden flex flex-col gap-4 border border-[#E8ECF0] rounded-2xl bg-white transition">
                <img
                  alt="Modern corporate boardroom with legal documents and business meeting setup"
                  src="https://static.paraflowcontent.com/public/resource/image/e1c39f89-3b84-4b7a-815a-e194e0dd5309.jpeg"
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col gap-4 p-6">
                  <div className="text-sm flex items-center gap-2 text-[#6B7280]">
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon
                        icon="lucide:calendar"
                        className="text-sm"
                      ></iconify-icon>
                    </div>
                    <span>December 15, 2025</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#1A1D23]">
                      New Corporate Governance Regulations: What Your Business
                      Needs to Know
                    </h3>
                    <p className="text-base font-normal text-[#4A5568]">
                      The latest updates to corporate governance requirements
                      could significantly impact your business operations. Learn
                      about compliance strategies and implementation timelines.
                    </p>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.blog.readmore}
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

              <div className="hover:border-[#C5CDD8] overflow-hidden flex flex-col gap-4 border border-[#E8ECF0] rounded-2xl bg-white transition">
                <img
                  alt="Family consultation meeting with legal documents and warm office environment"
                  src="https://static.paraflowcontent.com/public/resource/image/70699f6c-c84d-46a8-b662-f8aec0057418.jpeg"
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col gap-4 p-6">
                  <div className="text-sm flex items-center gap-2 text-[#6B7280]">
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon
                        icon="lucide:calendar"
                        className="text-sm"
                      ></iconify-icon>
                    </div>
                    <span>December 10, 2025</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#1A1D23]">
                      Navigating Child Custody Arrangements: A Comprehensive
                      Guide for Parents
                    </h3>
                    <p className="text-base font-normal text-[#4A5568]">
                      Understanding your rights and responsibilities in child
                      custody matters is crucial. This guide covers everything
                      from initial filing to court proceedings.
                    </p>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.blog.readmore}
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

              <div className="hover:border-[#C5CDD8] overflow-hidden flex flex-col gap-4 border border-[#E8ECF0] rounded-2xl bg-white transition">
                <img
                  alt="Real estate contract signing with house keys and legal documents on table"
                  src="https://static.paraflowcontent.com/public/resource/image/a62c59e2-b8d4-45e3-bd36-1a5a8289b071.jpeg"
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col gap-4 p-6">
                  <div className="text-sm flex items-center gap-2 text-[#6B7280]">
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon
                        icon="lucide:calendar"
                        className="text-sm"
                      ></iconify-icon>
                    </div>
                    <span>{t.blog.articles[2].date}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#1A1D23]">
                      {t.blog.articles[2].title}
                    </h3>
                    <p className="text-base font-normal text-[#4A5568]">
                      {t.blog.articles[2].excerpt}
                    </p>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">
                      {t.blog.readmore}
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
            <div className="text-center mt-12">
              <Link to="/blog">
                <button className="hover:bg-[#1B3A5F]/5 flex items-center gap-2 border-2 border-[#1B3A5F] rounded-lg text-[#1B3A5F] px-6 py-3 mx-auto transition">
                  <span className="whitespace-nowrap font-semibold">
                    {t.blog.viewall}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#1B3A5F]">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-white/95">
              {t.cta.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 text-white/85">
              {t.cta.description}
            </p>
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <button className="hover:bg-[#E8C976] flex items-center justify-center gap-2 rounded-lg bg-[#D4A745] text-[#1A1D23] px-6 md:px-8 py-3 md:py-4 transition w-full sm:w-auto">
                  <span className="text-base md:text-lg whitespace-nowrap font-semibold">
                    {t.cta.button}
                  </span>
                </button>
              </Link>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-white/85">
                <div className="flex items-center gap-3">
                  <div className="bg-transparent flex justify-center items-center w-5 h-5">
                    <iconify-icon
                      icon="lucide:phone"
                      className="text-base md:text-lg"
                    ></iconify-icon>
                  </div>
                  <span className="text-base md:text-lg">{t.cta.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-transparent flex justify-center items-center w-5 h-5">
                    <iconify-icon
                      icon="lucide:mail"
                      className="text-base md:text-lg"
                    ></iconify-icon>
                  </div>
                  <span className="text-base md:text-lg">
                    {t.cta.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

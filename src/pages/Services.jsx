import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="flex flex-col w-full min-h-[800px]">
      <main className="overflow-x-hidden flex flex-col grow shrink">
        {/* Breadcrumb and Header */}
        <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex items-center gap-2 mb-6 md:mb-8 text-[#6B7280] text-sm md:text-base">
              <span>Home</span>
              <iconify-icon icon="lucide:chevron-right" className="text-sm"></iconify-icon>
              <span className="text-[#1B3A5F]">Services</span>
            </div>
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">Legal Services</h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl text-[#4A5568]">
                Sterling & Associates offers comprehensive legal services across multiple practice areas. Our experienced team provides expert guidance and representation, ensuring personalized solutions tailored to your unique legal needs with transparent communication and competitive pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">Our Practice Areas</h2>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#4A5568]">
                We provide specialized legal expertise across key practice areas, delivering strategic solutions and dedicated representation for individuals and businesses alike.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon icon="lucide:briefcase" className="text-xl text-[#1B3A5F]"></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">Corporate Law</h3>
                  <p className="text-base text-[#4A5568]">
                    Comprehensive business legal services including entity formation, contract negotiation, mergers and acquisitions, regulatory compliance, and strategic corporate planning for startups through established enterprises.
                  </p>
                  <div className="mt-3 mb-4">
                    <h4 className="text-base mb-2 font-semibold text-[#1A1D23]">Key Services:</h4>
                    <ul className="text-sm text-[#4A5568]">
                      <li className="mb-1">• Business Formation & Structure</li>
                      <li className="mb-1">• Contract Drafting & Review</li>
                      <li className="mb-1">• Mergers & Acquisitions</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">Learn More</span>
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon icon="lucide:arrow-right" className="text-sm"></iconify-icon>
                    </div>
                  </button>
                </div>
              </div>

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon icon="lucide:heart" className="text-xl text-[#1B3A5F]"></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">Family Law</h3>
                  <p className="text-base text-[#4A5568]">
                    Compassionate legal support for all family matters including divorce proceedings, child custody arrangements, adoption services, and prenuptial agreements with sensitivity to your family's unique circumstances.
                  </p>
                  <div className="mt-3 mb-4">
                    <h4 className="text-base mb-2 font-semibold text-[#1A1D23]">Key Services:</h4>
                    <ul className="text-sm text-[#4A5568]">
                      <li className="mb-1">• Divorce & Legal Separation</li>
                      <li className="mb-1">• Child Custody & Support</li>
                      <li className="mb-1">• Adoption Services</li>
                      <li>• Prenuptial Agreements</li>
                    </ul>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">Learn More</span>
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon icon="lucide:arrow-right" className="text-sm"></iconify-icon>
                    </div>
                  </button>
                </div>
              </div>

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon icon="lucide:home" className="text-xl text-[#1B3A5F]"></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">Real Estate Law</h3>
                  <p className="text-base text-[#4A5568]">
                    Complete real estate legal services covering residential and commercial property transactions, landlord-tenant disputes, title issues, and zoning matters for buyers, sellers, and property investors.
                  </p>
                  <div className="mt-3 mb-4">
                    <h4 className="text-base mb-2 font-semibold text-[#1A1D23]">Key Services:</h4>
                    <ul className="text-sm text-[#4A5568]">
                      <li className="mb-1">• Property Transactions</li>
                      <li className="mb-1">• Landlord-Tenant Law</li>
                      <li className="mb-1">• Title Disputes & Resolution</li>
                      <li>• Zoning & Land Use</li>
                    </ul>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">Get Started</span>
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon icon="lucide:arrow-right" className="text-sm"></iconify-icon>
                    </div>
                  </button>
                </div>
              </div>

              <div className="hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] flex flex-col gap-4 border-l-4 p-6 rounded-lg bg-[#F8F9FB] border-[#D4A745] transition">
                <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                  <iconify-icon icon="lucide:lightbulb" className="text-xl text-[#1B3A5F]"></iconify-icon>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#1A1D23]">Intellectual Property</h3>
                  <p className="text-base text-[#4A5568]">
                    Protect and monetize your innovations and creative works through comprehensive IP services including patent applications, trademark registration, copyright protection, and IP litigation support.
                  </p>
                  <div className="mt-3 mb-4">
                    <h4 className="text-base mb-2 font-semibold text-[#1A1D23]">Key Services:</h4>
                    <ul className="text-sm text-[#4A5568]">
                      <li className="mb-1">• Patent Applications & Prosecution</li>
                      <li className="mb-1">• Trademark Registration</li>
                      <li className="mb-1">• Copyright Protection</li>
                      <li>• IP Litigation & Enforcement</li>
                    </ul>
                  </div>
                  <button className="hover:text-[#2D5280] flex items-center gap-2 mt-2 self-start text-[#1B3A5F] transition">
                    <span className="whitespace-nowrap font-semibold">Get Started</span>
                    <div className="bg-transparent flex justify-center items-center w-4 h-4">
                      <iconify-icon icon="lucide:arrow-right" className="text-sm"></iconify-icon>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Legal Services Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">Why Choose Our Legal Services</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16">
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 mb-6">
                  <div className="flex shrink-0 justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                    <iconify-icon icon="lucide:award" className="text-xl text-[#1B3A5F]"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold text-[#1A1D23]">Experienced Attorneys</h3>
                    <p className="text-base text-[#4A5568]">Our team brings over 25 years of combined legal expertise with a proven track record of successful outcomes across all practice areas.</p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex shrink-0 justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                    <iconify-icon icon="lucide:users" className="text-xl text-[#1B3A5F]"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold text-[#1A1D23]">Personalized Approach</h3>
                    <p className="text-base text-[#4A5568]">Every client receives individualized attention and customized legal strategies tailored to their specific circumstances and goals.</p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex shrink-0 justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                    <iconify-icon icon="lucide:message-circle" className="text-xl text-[#1B3A5F]"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold text-[#1A1D23]">Transparent Communication</h3>
                    <p className="text-base text-[#4A5568]">We maintain open, clear communication throughout the legal process, keeping you informed at every step with regular updates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex shrink-0 justify-center items-center w-12 h-12 rounded-lg bg-[#1B3A5F]/10">
                    <iconify-icon icon="lucide:dollar-sign" className="text-xl text-[#1B3A5F]"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold text-[#1A1D23]">Competitive Pricing</h3>
                    <p className="text-base text-[#4A5568]">Fair, transparent pricing with flexible payment options designed to make quality legal representation accessible to all clients.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  alt="Professional legal consultation in modern law office with attorney and clients reviewing documents" 
                  src="https://static.paraflowcontent.com/public/resource/image/312290b4-ad34-42a8-8927-70f58e1cda73.jpeg" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 bg-[#1B3A5F]">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-white/95">Need Legal Assistance?</h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-white/85">
              Don't navigate legal challenges alone. Schedule your complimentary consultation today and discover how our experienced legal team can help protect your interests and achieve your objectives.
            </p>
            <div className="flex flex-col items-center gap-8">
                <Link to="/book-consultation" className="w-full sm:w-auto">
                <button className="hover:bg-[#E8C976] flex items-center justify-center gap-2 rounded-lg bg-[#D4A745] text-[#1A1D23] px-6 md:px-8 py-3 md:py-4 transition w-full sm:w-auto">
                  <span className="text-base md:text-lg whitespace-nowrap font-semibold">
                    Schedule Your Consultation
                  </span>
                </button>
              </Link>
              <div className="flex items-center gap-8 text-white/85">
                <div className="flex items-center gap-3">
                  <div className="bg-transparent flex justify-center items-center w-5 h-5">
                    <iconify-icon icon="lucide:phone" className="text-lg"></iconify-icon>
                  </div>
                  <span className="text-lg">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-transparent flex justify-center items-center w-5 h-5">
                    <iconify-icon icon="lucide:mail" className="text-lg"></iconify-icon>
                  </div>
                  <span className="text-lg">contact@sterling-law.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services


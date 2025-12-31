import { Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useTranslation } from "../hooks/useTranslation";

const Blog = () => {
  const { blogs } = useBlogs();
  const { t } = useTranslation();

  return (
    <div className="flex w-full min-h-[800px]">
      <main className="overflow-x-hidden flex flex-col grow shrink px-4 sm:px-6 md:px-12">
        {/* Breadcrumb and Header */}
        <section className="w-full pt-8 md:pt-12 pb-6 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-sm md:text-base flex items-center gap-2 mb-4 md:mb-6 text-[#6B7280]">
              <Link
                to="/"
                className="hover:text-[#2D5280] text-[#1B3A5F] transition"
              >
                Home
              </Link>
              <div className="flex justify-center items-center w-4 h-4">
                <iconify-icon
                  icon="lucide:chevron-right"
                  className="text-sm"
                ></iconify-icon>
              </div>
              <span>Blog</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-semibold text-[#1A1D23]">
              {t?.blog?.title || "Legal Insights & Updates"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-4xl text-[#4A5568]">
              {t?.blog?.description ||
                "Stay informed with our expert analysis and insights on current legal developments."}
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="w-full pb-6 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 md:gap-6">
              <div className="hover:border-[#C5CDD8] flex items-center w-full sm:w-96 border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition">
                <div className="flex justify-center items-center w-5 h-5 mr-3">
                  <iconify-icon
                    icon="lucide:search"
                    className="text-base text-[#6B7280]"
                  ></iconify-icon>
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="grow shrink outline-none text-[#1A1D23]"
                />
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="hover:border-[#C5CDD8] flex justify-between items-center w-full sm:min-w-[200px] border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition">
                  <span className="text-sm md:text-base text-[#1A1D23]">
                    All Categories
                  </span>
                  <div className="flex justify-center items-center w-5 h-5">
                    <iconify-icon
                      icon="lucide:chevron-down"
                      className="text-base text-[#6B7280]"
                    ></iconify-icon>
                  </div>
                </div>
                <div className="hover:border-[#C5CDD8] flex justify-between items-center w-full sm:min-w-[160px] border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition">
                  <span className="text-sm md:text-base text-[#1A1D23]">
                    Most Recent
                  </span>
                  <div className="flex justify-center items-center w-5 h-5">
                    <iconify-icon
                      icon="lucide:chevron-down"
                      className="text-base text-[#6B7280]"
                    ></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="grow shrink w-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="grow shrink">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                {/* Blog Post Cards */}
                {blogs.map((article) => (
                  <div
                    key={article.id}
                    className="hover:border-[#C5CDD8] overflow-hidden border border-[#E8ECF0] rounded-2xl bg-white transition"
                  >
                    {article.image && (
                      <img
                        alt={article.title}
                        src={article.image}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="flex flex-col gap-4 p-6">
                      <div className="bg-[#D6E4F0] self-start text-[#1B3A5F] px-3 py-1 text-sm font-semibold rounded-full">
                        {article.category || "General"}
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-[#1A1D23]">
                          {article.title}
                        </h3>
                        <p className="text-base text-[#4A5568]">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="text-sm flex items-center gap-4 text-[#6B7280]">
                        <div className="flex items-center gap-2">
                          <img
                            alt={article.author}
                            src={
                              article.authorImage ||
                              "https://static.paraflowcontent.com/public/resource/image/f3eb337a-3ac6-47a1-952d-5ab72fbc0bd3.jpeg"
                            }
                            className="w-8 h-8 rounded-full"
                          />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex justify-center items-center w-4 h-4">
                            <iconify-icon
                              icon="lucide:calendar"
                              className="text-sm"
                            ></iconify-icon>
                          </div>
                          <span>{article.date}</span>
                        </div>
                        <span>{article.readingTime || 5} min read</span>
                      </div>
                      <Link
                        to={`/blog/${article.id}`}
                        className="hover:text-[#2D5280] flex items-center gap-2 self-start text-[#1B3A5F] transition"
                      >
                        <span className="font-semibold">
                          {t?.blog?.readmore || "Read More"}
                        </span>
                        <div className="flex justify-center items-center w-4 h-4">
                          <iconify-icon
                            icon="lucide:arrow-right"
                            className="text-sm"
                          ></iconify-icon>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}

                {/* Additional blog posts would follow similar pattern */}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 pb-12">
                <button
                  className="hover:text-[#1B3A5F] flex items-center gap-2 text-[#6B7280] px-4 py-2 transition"
                  disabled
                >
                  <div className="flex justify-center items-center w-4 h-4">
                    <iconify-icon
                      icon="lucide:chevron-left"
                      className="text-sm"
                    ></iconify-icon>
                  </div>
                  <span>Previous</span>
                </button>
                <div className="flex items-center gap-1">
                  <button className="w-10 h-10 font-semibold rounded-lg bg-[#1B3A5F] text-white/95">
                    1
                  </button>
                  <button className="hover:bg-[#F8F9FB] w-10 h-10 rounded-lg text-[#4A5568] transition">
                    2
                  </button>
                  <button className="hover:bg-[#F8F9FB] w-10 h-10 rounded-lg text-[#4A5568] transition">
                    3
                  </button>
                  <span className="px-2 text-[#6B7280]">...</span>
                  <button className="hover:bg-[#F8F9FB] w-10 h-10 rounded-lg text-[#4A5568] transition">
                    8
                  </button>
                </div>
                <button className="hover:text-[#2D5280] flex items-center gap-2 text-[#1B3A5F] px-4 py-2 transition">
                  <span>Next</span>
                  <div className="flex justify-center items-center w-4 h-4">
                    <iconify-icon
                      icon="lucide:chevron-right"
                      className="text-sm"
                    ></iconify-icon>
                  </div>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="shrink-0 w-full lg:w-80">
              <div className="flex flex-col gap-8">
                {/* Newsletter Subscription */}
                <div className="p-6 border border-[#E8ECF0] rounded-2xl bg-[#F8F9FB]">
                  <h4 className="text-xl mb-4 font-semibold text-[#1A1D23]">
                    Stay Informed
                  </h4>
                  <p className="text-base mb-6 text-[#4A5568]">
                    Subscribe to our newsletter for the latest legal insights
                    and updates delivered directly to your inbox.
                  </p>
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="focus:border-[#1B3A5F] w-full outline-none border border-[#E8ECF0] rounded-lg bg-white px-4 py-3 transition"
                    />
                    <button className="hover:bg-[#2D5280] flex justify-center items-center gap-2 w-full rounded-lg bg-[#1B3A5F] text-white/95 px-6 py-3 transition">
                      <span className="font-semibold">Subscribe</span>
                    </button>
                  </div>
                </div>

                {/* Most Read Articles */}
                <div className="p-6 border border-[#E8ECF0] rounded-2xl bg-white">
                  <h4 className="text-xl mb-6 font-semibold text-[#1A1D23]">
                    Most Read Articles
                  </h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3 pb-4 border-b border-[#E8ECF0]">
                      <span className="text-lg font-semibold text-[#D4A745]">
                        1
                      </span>
                      <div className="grow shrink">
                        <h5 className="hover:text-[#1B3A5F] text-base mb-1 font-semibold text-[#1A1D23] transition">
                          Corporate Governance Regulations
                        </h5>
                        <span className="text-sm text-[#6B7280]">
                          1,245 reads
                        </span>
                      </div>
                    </div>
                    {/* Additional items would follow */}
                  </div>
                </div>

                {/* Browse by Category */}
                <div className="p-6 border border-[#E8ECF0] rounded-2xl bg-white">
                  <h4 className="text-xl mb-6 font-semibold text-[#1A1D23]">
                    Browse by Category
                  </h4>
                  <div className="flex flex-col gap-3">
                    <div className="hover:text-[#1B3A5F] flex justify-between items-center transition">
                      <span className="text-base text-[#4A5568]">
                        Corporate Law
                      </span>
                      <span className="bg-[#F8F9FB] text-[#6B7280] px-2 py-1 text-sm rounded-full">
                        12
                      </span>
                    </div>
                    {/* Additional categories would follow */}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="text-center p-6 rounded-2xl bg-[#1B3A5F]">
                  <h4 className="text-xl mb-4 font-semibold text-white/95">
                    Need Legal Advice?
                  </h4>
                  <p className="text-base mb-6 text-white/85">
                    Get expert legal guidance tailored to your specific
                    situation. Schedule your complimentary consultation today.
                  </p>
                  <button className="hover:bg-[#E8C976] flex justify-center items-center gap-2 w-full rounded-lg bg-[#D4A745] text-[#1A1D23] px-6 py-3 transition">
                    <span className="font-semibold">Book Consultation</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;

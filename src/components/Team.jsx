import React, { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-router-dom";
import { useTeam } from "../context/TeamContext";
import asianWomen from "../assests/asianwomen.avif";
import men1 from "../assests/men1.avif";
import women2 from "../assests/women2.avif";
import men2 from "../assests/men2.avif";
import women3 from "../assests/Women3.avif";
import men3 from "../assests/men3.avif";

const slugify = (s) =>
  s
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    ?.replace(/(^-|-$)+/g, "");

export default function Team() {
  const { t } = useTranslation();

  // Prevent blank screen if translations are missing
  if (!t?.team) return null;

  // Scroll to top when opening team page so 'Meet Our Team' navigations land at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const teamImages = [asianWomen, men1, women2, men2, women3, men3];
  const teamContext = useTeam();
  const members =
    teamContext && teamContext.members && teamContext.members.length
      ? teamContext.members
      : t.team?.members || [];

  return (
    <section className="w-full pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-6 font-semibold text-[#1A1D23]">
            {t.team.title}
          </h1>
          <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
            {t.team.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 border border-[#E8ECF0] rounded-2xl bg-white hover:shadow-[0_2px_8px_rgba(27,58,95,0.08)] transition overflow-hidden"
            >
              <img
                src={member.image || teamImages[idx]}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-[#1A1D23]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#D4A745] font-semibold">
                  {member.title}
                </p>

                <div className="flex items-center gap-2 text-sm text-[#1B3A5F] bg-[#F8F9FB] px-3 py-1 rounded-full w-fit">
                  <iconify-icon icon="lucide:briefcase"></iconify-icon>
                  <span>{member.specialty}</span>
                </div>

                <p className="text-base text-[#4A5568]">{member.bio}</p>

                <Link
                  to={`/team/member/${slugify(member.name)}`}
                  className="flex items-center gap-2 text-[#1B3A5F] hover:text-[#2D5280] font-semibold mt-2 w-fit"
                >
                  {t.team.contact}
                  <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#F8F9FB] rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-semibold text-[#1A1D23] mb-4">
            {t.team.cta_title}
          </h2>
          <p className="text-lg text-[#4A5568] mb-8 max-w-2xl mx-auto">
            {t.team.cta_description}
          </p>
          <button className="bg-[#1B3A5F] text-white px-8 py-4 rounded-lg hover:bg-[#2D5280] font-semibold text-lg">
            {t.team.cta_button}
          </button>
        </div>
      </div>
    </section>
  );
}

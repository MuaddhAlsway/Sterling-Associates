import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useTeam } from "../context/TeamContext";
import asianWomen from "../assests/asianwomen.avif";

const slugify = (s) =>
  s
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function MemberDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  // Prefer persisted team members from context
  const teamCtx = useTeam();
  const members =
    teamCtx && teamCtx.members && teamCtx.members.length
      ? teamCtx.members
      : t.team?.members || [];
  const member = members.find((m) => slugify(m.name) === slug);

  if (!member) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-semibold mb-4">
          {t.member?.notFound || "Member not found"}
        </h1>
        <Link to="/team" className="text-[#1B3A5F]">
          {t.member?.backToTeam || "Back to Team"}
        </Link>
      </div>
    );
  }

  // Ensure we are at the top when viewing a member detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [member]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex gap-8 items-start">
        <div className="w-48 h-48 bg-[#F8F9FB] rounded-lg flex-shrink-0 overflow-hidden">
          <img
            src={member.image || asianWomen}
            className="w-full h-full object-cover"
            alt={member.name}
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#1A1D23] mb-2">
            {member.name}
          </h1>
          <div className="text-sm text-[#D4A745] font-semibold mb-1">
            {member.title}
          </div>
          {member.career && (
            <div className="text-sm text-[#6B7280] mb-4">{member.career}</div>
          )}
          <div className="text-base text-[#4A5568] mb-6">{member.bio}</div>
          <Link to="/team" className="text-[#1B3A5F]">
            {t.member?.backToTeam || "Back to Team"}
          </Link>
        </div>
      </div>
    </div>
  );
}

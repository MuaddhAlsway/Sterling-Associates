import { Link } from "react-router-dom";

export default function ConsultationCTA() {
  return (
    <Link to="/book-consultation" className="w-full sm:w-auto">
      <button className="hover:bg-[#E8C976] flex items-center justify-center gap-2 rounded-lg bg-[#D4A745] text-[#1A1D23] px-6 md:px-8 py-3 md:py-4 transition w-full sm:w-auto">
        <span className="text-base md:text-lg whitespace-nowrap font-semibold">
          Schedule Your Consultation
        </span>
      </button>
    </Link>
  );
}

import { Home } from "lucide-react";

export function HostelHubLogo({ size = 28, tone = "default" }: { size?: number; tone?: "default" | "light" }) {
  const isLight = tone === "light";
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center text-white"
        style={{
          width: size,
          height: size,
          borderRadius: 8,
          background: "linear-gradient(135deg, #3b63f0 0%, #1f37ab 100%)",
          boxShadow: "inset 0 -6px 12px rgba(0,0,0,0.18), 0 6px 14px -6px rgba(31,55,171,0.6)",
        }}
      >
        <Home size={size * 0.55} strokeWidth={2.5} />
      </div>
      <div className="flex items-baseline gap-0.5">
        <span
          className="hh-display font-extrabold tracking-tight"
          style={{ fontSize: size * 0.72, color: isLight ? "#fff" : "#0b1220" }}
        >
          Hostel
        </span>
        <span
          className="hh-display font-extrabold tracking-tight"
          style={{ fontSize: size * 0.72, color: "#3b63f0" }}
        >
          Hub
        </span>
      </div>
    </div>
  );
}

export const SCHOOLS = [
  "University of Lagos",
  "University of Ibadan",
  "Obafemi Awolowo University",
  "Covenant University",
  "Ahmadu Bello University",
  "University of Nigeria, Nsukka",
  "University of Benin",
  "Federal University of Technology, Akure",
  "University of Ghana, Legon",
  "University of Cape Town",
];

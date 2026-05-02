import "./_group.css";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HostelHubLogo } from "./_shared/Brand";

const PAGES = [
  {
    name: "Landing",
    to: "/landing",
    tagline: "Public marketing site",
    desc: "Hero search, trust strip, how it works, featured hostels, FAQ, footer.",
    accent: "linear-gradient(135deg,#3b63f0,#1f37ab)",
  },
  {
    name: "Student Dashboard",
    to: "/student-dashboard",
    tagline: "Signed-in student home",
    desc: "Resumption countdown, recommendations, booking timeline, wallet, messages.",
    accent: "linear-gradient(135deg,#5d85fb,#2647d4)",
  },
  {
    name: "Listings",
    to: "/listings",
    tagline: "Browse & filter hostels",
    desc: "Sticky filter bar, verified property cards, availability pills, map sidebar.",
    accent: "linear-gradient(135deg,#12b76a,#027a48)",
  },
  {
    name: "Property Details",
    to: "/property-details",
    tagline: "Single hostel page",
    desc: "Photo gallery, amenities, reviews, sticky escrow booking card with agent profile.",
    accent: "linear-gradient(135deg,#1f37ab,#0c1640)",
  },
  {
    name: "Agent Dashboard",
    to: "/agent-dashboard",
    tagline: "Verified agent ops",
    desc: "Verification tier, earnings, booking requests, listings table, analytics.",
    accent: "linear-gradient(135deg,#3b63f0,#12b76a)",
  },
  {
    name: "Admin Dashboard",
    to: "/admin-dashboard",
    tagline: "HostelHub internal cockpit",
    desc: "KPIs, agent verification queue, dispute resolution, escrow at-a-glance.",
    accent: "linear-gradient(135deg,#0b1220,#1f37ab)",
  },
  {
    name: "Payment Flow",
    to: "/payment",
    tagline: "Escrow checkout",
    desc: "4-step protection stepper, payment card, breakdown, secure CTA.",
    accent: "linear-gradient(135deg,#039855,#0c1640)",
  },
];

export function Index() {
  return (
    <div className="hh-root min-h-screen">
      <header
        className="border-b sticky top-0 z-20 backdrop-blur"
        style={{ background: "rgba(255,255,255,0.85)", borderColor: "var(--hh-border)" }}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center">
          <HostelHubLogo size={28} />
          <div
            className="ml-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ background: "var(--hh-blue-50)", color: "var(--hh-blue-700)" }}
          >
            Design system · v0.1
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm" style={{ color: "var(--hh-ink-600)" }}>
            <a href="#screens" className="hover:text-[var(--hh-ink-900)]">Screens</a>
            <a href="#system" className="hover:text-[var(--hh-ink-900)]">System</a>
          </nav>
          <Link
            to="/landing"
            className="ml-6 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl text-white"
            style={{
              background: "linear-gradient(135deg,#3b63f0,#1f37ab)",
              boxShadow: "0 8px 18px -10px rgba(31,55,171,0.6)",
            }}
          >
            Open landing page
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </header>

      <section className="hh-mesh">
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: "#fff", color: "var(--hh-blue-700)", border: "1px solid var(--hh-border)" }}
          >
            <Sparkles size={13} />
            HostelHub product showcase
          </div>
          <h1 className="hh-display text-5xl md:text-6xl font-extrabold tracking-tight mt-5 leading-[1.05] max-w-3xl">
            All HostelHub designs,
            <br />
            <span style={{ color: "var(--hh-blue-600)" }}>in one place.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg" style={{ color: "var(--hh-ink-500)" }}>
            Seven full screens that tell the HostelHub story end-to-end — from a student
            discovering their first verified hostel to escrow releasing the agent's payout.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm" style={{ color: "var(--hh-ink-600)" }}>
            <div className="inline-flex items-center gap-2">
              <Layers size={16} style={{ color: "var(--hh-blue-600)" }} />
              <span><b style={{ color: "var(--hh-ink-900)" }}>7 screens</b> · student, agent, admin & checkout</span>
            </div>
            <div className="hidden md:block w-px h-4" style={{ background: "var(--hh-ink-200)" }} />
            <div>Tokens: blue · green · ink · 14–22px radius · soft shadows</div>
            <div className="hidden md:block w-px h-4" style={{ background: "var(--hh-ink-200)" }} />
            <div>Type: Plus Jakarta Sans · Inter</div>
          </div>
        </div>
      </section>

      <section id="screens" className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--hh-blue-600)" }}
            >
              The screens
            </div>
            <h2 className="hh-display text-3xl font-bold tracking-tight">Click any tile to open</h2>
          </div>
          <div className="text-sm" style={{ color: "var(--hh-ink-500)" }}>
            {PAGES.length} designs
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAGES.map((p, i) => (
            <Link
              key={p.to}
              to={p.to}
              className="hh-card group overflow-hidden flex flex-col transition"
              style={{ borderRadius: "var(--hh-radius-lg)" }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  height: 220,
                  background: p.accent,
                  borderBottom: "1px solid var(--hh-border)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <div className="text-[11px] font-bold tracking-wider opacity-80">
                      {String(i + 1).padStart(2, "0")} / {String(PAGES.length).padStart(2, "0")}
                    </div>
                    <div className="hh-display text-2xl font-extrabold leading-tight mt-1">
                      {p.name}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center transition group-hover:scale-110"
                  style={{ boxShadow: "var(--hh-shadow)" }}
                >
                  <ArrowUpRight size={15} style={{ color: "var(--hh-ink-700)" }} />
                </div>
              </div>

              <div className="p-5">
                <div
                  className="text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--hh-blue-600)" }}
                >
                  {p.tagline}
                </div>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--hh-ink-500)" }}>
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="system"
        className="border-t"
        style={{ borderColor: "var(--hh-border)", background: "#fff" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--hh-blue-600)" }}
            >
              Color
            </div>
            <div className="mt-3 flex gap-2">
              {[
                ["#3b63f0", "Primary"],
                ["#1f37ab", "Deep"],
                ["#12b76a", "Escrow"],
                ["#0b1220", "Ink"],
                ["#f6f8fc", "Surface"],
              ].map(([hex, label]) => (
                <div key={hex} className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl"
                    style={{ background: hex, border: "1px solid var(--hh-border)" }}
                  />
                  <div className="text-[10px] mt-1.5 font-medium" style={{ color: "var(--hh-ink-600)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--hh-blue-600)" }}
            >
              Typography
            </div>
            <div className="hh-display text-2xl font-extrabold mt-3 tracking-tight">
              Plus Jakarta Sans
            </div>
            <div className="text-sm mt-1" style={{ color: "var(--hh-ink-500)" }}>
              Display headlines · 600–800 weight
            </div>
            <div className="text-base mt-3 font-medium">Inter — body & UI text</div>
            <div className="text-sm mt-0.5" style={{ color: "var(--hh-ink-500)" }}>
              400–600 weight · feature settings on
            </div>
          </div>

          <div>
            <div
              className="text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--hh-blue-600)" }}
            >
              Principles
            </div>
            <ul className="mt-3 text-sm space-y-1.5" style={{ color: "var(--hh-ink-700)" }}>
              <li>· Trust signals on every surface</li>
              <li>· Generous whitespace, soft shadows</li>
              <li>· Naira-first, Nigerian context</li>
              <li>· No emojis — verified badges instead</li>
            </ul>
          </div>
        </div>
      </section>

      <footer
        className="text-white"
        style={{ background: "var(--hh-blue-950)" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap items-center gap-4">
          <HostelHubLogo size={24} tone="light" />
          <span className="text-sm opacity-70">
            Mockup gallery
          </span>
          <span className="ml-auto text-xs opacity-60">© 2026 HostelHub</span>
        </div>
      </footer>
    </div>
  );
}

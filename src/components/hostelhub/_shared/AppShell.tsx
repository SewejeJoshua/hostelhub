import { ReactNode } from "react";
import {
  LayoutDashboard,
  Search,
  Heart,
  MessageSquare,
  Wallet,
  Calendar,
  Settings,
  Bell,
  ChevronDown,
  LucideIcon,
  HelpCircle,
} from "lucide-react";
import { HostelHubLogo } from "./Brand";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  badge?: string | number;
};

export const STUDENT_NAV: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Search hostels", icon: Search },
  { label: "Saved", icon: Heart, badge: 8 },
  { label: "Bookings", icon: Calendar },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Wallet", icon: Wallet },
  { label: "Settings", icon: Settings },
];

export function AppShell({
  nav,
  user,
  role,
  pageTitle,
  pageSubtitle,
  rightSlot,
  children,
}: {
  nav: NavItem[];
  user: { name: string; sub: string; avatar?: string };
  role: "Student" | "Agent" | "Admin";
  pageTitle: string;
  pageSubtitle?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="hh-root min-h-screen flex" style={{ background: "var(--hh-bg)" }}>
      {/* Sidebar */}
      <aside
        className="w-64 shrink-0 border-r flex flex-col"
        style={{ background: "#fff", borderColor: "var(--hh-border)" }}
      >
        <div className="px-5 pt-5 pb-3">
          <HostelHubLogo size={28} />
        </div>

        <div className="px-3 mt-2">
          <div
            className="rounded-2xl p-3 flex items-center gap-2"
            style={{ background: "var(--hh-ink-50)" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg,#3b63f0,#1f37ab)" }}
            >
              {user.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{user.name}</div>
              <div className="text-[11px] truncate" style={{ color: "var(--hh-ink-500)" }}>
                {user.sub}
              </div>
            </div>
            <ChevronDown size={16} className="ml-auto" style={{ color: "var(--hh-ink-400)" }} />
          </div>
        </div>

        <nav className="px-3 mt-5 space-y-1 flex-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  item.active
                    ? "text-white"
                    : "hover:bg-[var(--hh-ink-50)]"
                }`}
                style={
                  item.active
                    ? {
                        background: "linear-gradient(135deg,#3b63f0,#2647d4)",
                        boxShadow: "0 8px 18px -10px rgba(31,55,171,0.55)",
                      }
                    : { color: "var(--hh-ink-700)" }
                }
              >
                <Icon size={18} strokeWidth={2.2} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={
                      item.active
                        ? { background: "rgba(255,255,255,0.22)", color: "#fff" }
                        : { background: "var(--hh-green-100)", color: "var(--hh-green-700)" }
                    }
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-3">
          <div
            className="rounded-2xl p-4 text-white relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #122158 0%, #1f37ab 60%, #2647d4 100%)",
            }}
          >
            <div
              className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, #6ce9a6, transparent 70%)" }}
            />
            <HelpCircle size={18} />
            <div className="hh-display text-sm font-bold mt-2 leading-tight">
              Need help finding a hostel?
            </div>
            <div className="text-[11px] opacity-80 mt-1">
              Chat with a verified student support agent.
            </div>
            <button
              className="mt-3 w-full text-[12px] font-semibold py-2 rounded-xl"
              style={{ background: "#6ce9a6", color: "#0b1220" }}
            >
              Open chat
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header
          className="h-16 px-8 border-b flex items-center gap-4"
          style={{ background: "#fff", borderColor: "var(--hh-border)" }}
        >
          <div
            className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
            style={{ background: "var(--hh-blue-50)", color: "var(--hh-blue-700)" }}
          >
            {role}
          </div>
          <div className="text-sm" style={{ color: "var(--hh-ink-500)" }}>
            <span style={{ color: "var(--hh-ink-400)" }}>HostelHub</span>
            <span className="mx-2" style={{ color: "var(--hh-ink-300)" }}>/</span>
            <span className="font-medium" style={{ color: "var(--hh-ink-700)" }}>
              {pageTitle}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div
              className="hidden md:flex items-center gap-2 h-10 px-3 rounded-xl text-sm w-72"
              style={{ background: "var(--hh-ink-50)" }}
            >
              <Search size={16} style={{ color: "var(--hh-ink-400)" }} />
              <input
                placeholder="Search hostels, agents, bookings…"
                className="bg-transparent outline-none flex-1 placeholder:text-[var(--hh-ink-400)]"
                readOnly
              />
              <kbd
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                style={{ background: "#fff", color: "var(--hh-ink-500)", border: "1px solid var(--hh-border)" }}
              >
                ⌘K
              </kbd>
            </div>
            <button
              className="relative w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--hh-ink-50)" }}
            >
              <Bell size={18} style={{ color: "var(--hh-ink-700)" }} />
              <span
                className="absolute top-2 right-2.5 w-2 h-2 rounded-full"
                style={{ background: "var(--hh-rose-500)" }}
              />
            </button>
          </div>
        </header>

        <div className="px-8 pt-7 pb-3 flex items-end gap-6 flex-wrap">
          <div className="flex-1 min-w-0">
            <h1 className="hh-display text-3xl font-bold tracking-tight">{pageTitle}</h1>
            {pageSubtitle && (
              <p className="text-sm mt-1.5" style={{ color: "var(--hh-ink-500)" }}>
                {pageSubtitle}
              </p>
            )}
          </div>
          {rightSlot}
        </div>

        <main className="px-8 pb-10 pt-4 flex-1">{children}</main>
      </div>
    </div>
  );
}

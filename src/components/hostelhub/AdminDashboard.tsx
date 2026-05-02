import "./_group.css";
import React from "react";
import {
  LayoutDashboard,
  Users,
  BadgeCheck,
  Building2,
  AlertTriangle,
  Wallet,
  Flag,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  ShieldAlert,
  ChevronRight,
  TrendingUp,
  Download,
  Play
} from "lucide-react";
import { AppShell } from "./_shared/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ADMIN_NAV = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Users", icon: Users },
  { label: "Verify agents", icon: BadgeCheck, badge: 23 },
  { label: "Approve listings", icon: Building2, badge: 14 },
  { label: "Disputes", icon: AlertTriangle, badge: 18 },
  { label: "Payments", icon: Wallet },
  { label: "Reports", icon: Flag },
  { label: "Settings", icon: Settings },
];

const ADMIN_USER = {
  name: "System Admin",
  sub: "super_admin@hostelhub.com",
};

export function AdminDashboard() {
  return (
    <AppShell
      nav={ADMIN_NAV}
      user={ADMIN_USER}
      role="Admin"
      pageTitle="Operations overview"
      pageSubtitle="Monitoring 18 active disputes · 23 agents pending verification"
      rightSlot={
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 rounded-xl font-semibold border-[var(--hh-border)] text-[var(--hh-ink-700)]">
            <Download size={16} className="mr-2" /> Export report
          </Button>
          <Button className="h-10 rounded-xl font-semibold text-white border-0 shadow-[var(--hh-shadow-sm)]" style={{ background: "linear-gradient(135deg,#3b63f0,#1f37ab)" }}>
            <Play size={16} className="mr-2" /> Run weekly review
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <KpiCard title="Total users" value="48,213" change="+12.5%" isPositive={true} />
          <KpiCard title="Active agents" value="1,284" change="+4.1%" isPositive={true} />
          <KpiCard title="Listings live" value="5,602" change="+8.2%" isPositive={true} />
          <KpiCard title="GMV this month" value="₦184M" change="+15.3%" isPositive={true} />
          <KpiCard title="Escrow held" value="₦42.5M" change="-2.1%" isPositive={false} />
        </div>

        {/* Main Content Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT (Wide) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Pending agent verification queue */}
            <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] overflow-hidden">
              <div className="px-5 py-4 border-b border-[var(--hh-border)] flex items-center justify-between bg-white">
                <div>
                  <h3 className="font-semibold text-[var(--hh-ink-900)]">Pending agent verification</h3>
                  <p className="text-xs text-[var(--hh-ink-500)] mt-0.5">23 agents waiting for review</p>
                </div>
                <Button variant="ghost" size="sm" className="text-[var(--hh-blue-600)] font-medium h-8 text-xs">
                  View all <ChevronRight size={14} className="ml-1" />
                </Button>
              </div>
              <div className="bg-white">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-[var(--hh-border)] text-[var(--hh-ink-500)] bg-[var(--hh-ink-50)]">
                      <th className="px-5 py-3 font-medium">Agent</th>
                      <th className="px-5 py-3 font-medium">Documents</th>
                      <th className="px-5 py-3 font-medium">Submitted</th>
                      <th className="px-5 py-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--hh-border)]">
                    {[
                      { name: "Tunde Bakare", loc: "Yaba, Lagos", docs: ["NIN", "Utility"], date: "2h ago" },
                      { name: "Ngozi Okafor", loc: "Nsukka, Enugu", docs: ["NIN", "CAC", "Bank"], date: "5h ago" },
                      { name: "Emeka Chidi", loc: "Akoka, Lagos", docs: ["NIN", "Bank"], date: "1d ago" },
                      { name: "Aisha Mohammed", loc: "Samaru, Zaria", docs: ["NIN", "CAC", "Utility", "Bank"], date: "1d ago" },
                      { name: "Femi Adebayo", loc: "Ife, Osun", docs: ["CAC", "Utility"], date: "2d ago" },
                    ].map((agent, i) => (
                      <tr key={i} className="hover:bg-[var(--hh-ink-50)] transition-colors">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[var(--hh-blue-100)] text-[var(--hh-blue-700)] flex items-center justify-center font-bold text-xs">
                              {agent.name.split(' ').map(n=>n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-medium text-[var(--hh-ink-900)]">{agent.name}</div>
                              <div className="text-[11px] text-[var(--hh-ink-500)]">{agent.loc}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {agent.docs.map(d => (
                              <span key={d} className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-sm ${
                                d === 'NIN' ? 'bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)]' : 
                                d === 'CAC' ? 'bg-[var(--hh-green-50)] text-[var(--hh-green-700)]' : 
                                d === 'Bank' ? 'bg-[#fef3c7] text-[#b45309]' : 
                                'bg-[var(--hh-ink-100)] text-[var(--hh-ink-700)]'
                              }`}>
                                {d}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-5 py-3 text-[var(--hh-ink-600)] text-xs">{agent.date}</td>
                        <td className="px-5 py-3 text-right">
                          <Button size="sm" variant="outline" className="h-7 text-xs rounded-lg border-[var(--hh-border)]">
                            Review
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Listings awaiting approval */}
            <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] overflow-hidden bg-white">
               <div className="px-5 py-4 border-b border-[var(--hh-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[var(--hh-ink-900)]">Listings awaiting approval</h3>
                  <p className="text-xs text-[var(--hh-ink-500)] mt-0.5">14 properties need visual inspection review</p>
                </div>
              </div>
              <div className="p-2 space-y-2">
                {[
                  { name: "Emerald Hostels", agent: "Tunde Bakare", loc: "Akoka", price: "₦450,000/yr", color: "from-blue-400 to-blue-600" },
                  { name: "Sunshine Lodge", agent: "Ngozi Okafor", loc: "Nsukka", price: "₦180,000/yr", color: "from-green-400 to-green-600" },
                  { name: "Heritage Apartments", agent: "Femi Adebayo", loc: "Ife", price: "₦220,000/yr", color: "from-amber-400 to-orange-500" },
                  { name: "Kings Court", agent: "Aisha Mohammed", loc: "Samaru", price: "₦150,000/yr", color: "from-rose-400 to-rose-600" },
                ].map((listing, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[var(--hh-ink-50)] transition-colors border border-transparent hover:border-[var(--hh-border)]">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${listing.color} flex-shrink-0 shadow-inner`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-[var(--hh-ink-900)] truncate">{listing.name}</div>
                      <div className="text-xs text-[var(--hh-ink-500)] flex items-center gap-1.5 mt-0.5">
                        <span className="truncate">{listing.agent}</span>
                        <span>·</span>
                        <span className="truncate">{listing.loc}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-semibold text-sm text-[var(--hh-ink-900)]">{listing.price}</div>
                      <div className="flex items-center gap-2 mt-1.5 justify-end">
                        <button className="text-[var(--hh-rose-500)] hover:text-red-700 transition"><XCircle size={16} /></button>
                        <button className="text-[var(--hh-green-600)] hover:text-green-700 transition"><CheckCircle2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Active disputes */}
            <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] overflow-hidden bg-white">
              <div className="px-5 py-4 border-b border-[var(--hh-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[var(--hh-ink-900)] flex items-center gap-2">
                    Active disputes <Badge variant="destructive" className="bg-[var(--hh-rose-500)] hover:bg-rose-600 text-[10px] px-1.5 py-0 h-5">18</Badge>
                  </h3>
                </div>
              </div>
              <div className="divide-y divide-[var(--hh-border)]">
                {[
                  { title: "Student vs Agent", hostel: "Emerald Hostels", amount: "₦450,000", age: "5h", severity: "High" },
                  { title: "Fake amenities claim", hostel: "Sunshine Lodge", amount: "₦180,000", age: "1d", severity: "Medium" },
                  { title: "Agent unreachable", hostel: "Heritage Apartments", amount: "₦220,000", age: "2d", severity: "High" },
                  { title: "Refund request", hostel: "Kings Court", amount: "₦150,000", age: "3d", severity: "Low" },
                ].map((dispute, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-[var(--hh-ink-50)] transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-[var(--hh-rose-500)]">
                        <ShieldAlert size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-[var(--hh-ink-900)]">{dispute.title}</div>
                        <div className="text-xs text-[var(--hh-ink-500)] mt-0.5 flex items-center gap-1.5">
                          <span>{dispute.hostel}</span>
                          <span>·</span>
                          <span className="font-medium text-[var(--hh-ink-700)]">{dispute.amount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          dispute.severity === 'High' ? 'bg-[#ffe4e6] text-[#e11d48]' :
                          dispute.severity === 'Medium' ? 'bg-[#fef3c7] text-[#b45309]' :
                          'bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)]'
                        }`}>
                          {dispute.severity}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-[var(--hh-ink-400)] flex items-center gap-1"><Clock size={12}/> {dispute.age}</span>
                          <Button size="sm" variant="ghost" className="h-6 px-2 text-[11px] text-[var(--hh-blue-600)] hover:text-[var(--hh-blue-700)] hover:bg-[var(--hh-blue-50)]">
                            Open case
                          </Button>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>

          {/* RIGHT (Sidebar) */}
          <div className="space-y-6">
            
            {/* Escrow at-a-glance card */}
            <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] p-5 bg-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 text-[var(--hh-green-500)] pointer-events-none">
                 <Wallet size={64} />
               </div>
               <h3 className="font-semibold text-[var(--hh-ink-900)] text-sm mb-1 relative z-10">Escrow holding</h3>
               <div className="hh-display text-3xl font-bold text-[var(--hh-ink-900)] relative z-10">₦42.5M</div>
               <p className="text-xs text-[var(--hh-ink-500)] mt-1 relative z-10 flex items-center gap-1">
                 Average hold time: <span className="font-semibold text-[var(--hh-ink-700)]">4.2 days</span>
               </p>

               <div className="mt-6 space-y-2">
                 <div className="flex h-2.5 rounded-full overflow-hidden bg-[var(--hh-ink-100)]">
                   <div className="bg-[var(--hh-blue-500)]" style={{ width: '60%' }} title="Awaiting inspection" />
                   <div className="bg-[var(--hh-green-500)]" style={{ width: '25%' }} title="Pending release" />
                   <div className="bg-[var(--hh-rose-500)]" style={{ width: '15%' }} title="In dispute" />
                 </div>
                 <div className="flex justify-between text-[11px] text-[var(--hh-ink-500)]">
                   <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-[var(--hh-blue-500)]"/> Awaiting insp.</div>
                   <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-[var(--hh-green-500)]"/> Pending rel.</div>
                   <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-[var(--hh-rose-500)]"/> In dispute</div>
                 </div>
               </div>
            </Card>

            {/* Recent activity feed */}
            <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] bg-white overflow-hidden">
               <div className="px-5 py-4 border-b border-[var(--hh-border)]">
                 <h3 className="font-semibold text-[var(--hh-ink-900)]">Recent activity</h3>
               </div>
               <div className="p-5 space-y-4">
                 {[
                   { type: 'verify', text: 'Agent Tunde Bakare verified', time: '2m ago', icon: BadgeCheck, color: 'text-blue-500 bg-blue-50' },
                   { type: 'approve', text: 'Listing Emerald Hostels approved', time: '15m ago', icon: Building2, color: 'text-green-500 bg-green-50' },
                   { type: 'release', text: 'Escrow ₦150k released to Aisha M.', time: '1h ago', icon: Wallet, color: 'text-green-600 bg-green-100' },
                   { type: 'dispute', text: 'Dispute opened for Kings Court', time: '2h ago', icon: AlertTriangle, color: 'text-rose-500 bg-rose-50' },
                   { type: 'verify', text: 'Agent Ngozi Okafor verified', time: '3h ago', icon: BadgeCheck, color: 'text-blue-500 bg-blue-50' },
                   { type: 'user', text: '50 new students onboarded today', time: '4h ago', icon: Users, color: 'text-purple-500 bg-purple-50' },
                 ].map((event, i) => {
                   const Icon = event.icon;
                   return (
                     <div key={i} className="flex gap-3 relative">
                       {i !== 5 && <div className="absolute left-[11px] top-6 bottom-[-16px] w-[2px] bg-[var(--hh-ink-100)]" />}
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${event.color}`}>
                         <Icon size={12} />
                       </div>
                       <div className="flex-1 min-w-0 pt-0.5">
                         <p className="text-[13px] text-[var(--hh-ink-800)] font-medium truncate">{event.text}</p>
                         <p className="text-[11px] text-[var(--hh-ink-400)] mt-0.5">{event.time}</p>
                       </div>
                     </div>
                   );
                 })}
               </div>
            </Card>

            {/* Top universities */}
            <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] bg-white overflow-hidden">
               <div className="px-5 py-4 border-b border-[var(--hh-border)]">
                 <h3 className="font-semibold text-[var(--hh-ink-900)]">Top universities</h3>
               </div>
               <div className="p-2 space-y-1">
                 {[
                   { name: "UNILAG", count: 1240, pct: 85 },
                   { name: "OAU", count: 980, pct: 65 },
                   { name: "UI", count: 850, pct: 55 },
                   { name: "Covenant", count: 620, pct: 40 },
                   { name: "ABU", count: 410, pct: 25 },
                 ].map((uni, i) => (
                   <div key={i} className="px-3 py-2 rounded-lg hover:bg-[var(--hh-ink-50)] flex flex-col gap-1.5">
                     <div className="flex items-center justify-between text-sm">
                       <span className="font-medium text-[var(--hh-ink-800)]">{uni.name}</span>
                       <span className="font-semibold text-[var(--hh-ink-900)] text-xs">{uni.count} listings</span>
                     </div>
                     <div className="h-1.5 w-full bg-[var(--hh-ink-100)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--hh-blue-400)] rounded-full" style={{ width: `${uni.pct}%` }} />
                     </div>
                   </div>
                 ))}
               </div>
            </Card>

          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
          <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] bg-white p-5">
            <h3 className="font-semibold text-[var(--hh-ink-900)] mb-6">Bookings vs Inspections (30d)</h3>
            <div className="h-48 w-full relative">
               {/* Custom SVG Line Chart */}
               <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d overflow-visible">
                 <defs>
                   <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="var(--hh-blue-500)" stopOpacity="0.2"/>
                     <stop offset="100%" stopColor="var(--hh-blue-500)" stopOpacity="0"/>
                   </linearGradient>
                 </defs>
                 
                 {/* Grid lines */}
                 <line x1="0" y1="0" x2="400" y2="0" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 <line x1="0" y1="50" x2="400" y2="50" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 <line x1="0" y1="100" x2="400" y2="100" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 <line x1="0" y1="150" x2="400" y2="150" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 
                 {/* Data Path 1: Inspections (blue) */}
                 <path d="M0,120 L40,110 L80,130 L120,90 L160,100 L200,60 L240,80 L280,40 L320,50 L360,20 L400,30" 
                       fill="none" stroke="var(--hh-blue-300)" strokeWidth="2" strokeDasharray="4,4" />
                       
                 {/* Data Path 2: Bookings (green) */}
                 <path d="M0,140 L40,135 L80,145 L120,110 L160,120 L200,80 L240,90 L280,60 L320,70 L360,30 L400,40" 
                       fill="none" stroke="var(--hh-green-500)" strokeWidth="3" />
                 
                 {/* Area under bookings */}
                 <path d="M0,140 L40,135 L80,145 L120,110 L160,120 L200,80 L240,90 L280,60 L320,70 L360,30 L400,40 L400,150 L0,150 Z" 
                       fill="url(#lineGrad)" />
               </svg>
               <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between text-[10px] text-[var(--hh-ink-400)]">
                 <span>Mar 1</span>
                 <span>Mar 8</span>
                 <span>Mar 15</span>
                 <span>Mar 22</span>
                 <span>Mar 29</span>
               </div>
            </div>
            <div className="flex items-center gap-4 mt-8 text-xs font-medium text-[var(--hh-ink-700)]">
              <div className="flex items-center gap-1.5"><div className="w-3 h-1 rounded-full bg-[var(--hh-blue-300)]" /> Inspections requested</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-1 rounded-full bg-[var(--hh-green-500)]" /> Successful Bookings</div>
            </div>
          </Card>

          <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] bg-white p-5">
            <h3 className="font-semibold text-[var(--hh-ink-900)] mb-6">GMV by university (top 6)</h3>
            <div className="h-48 w-full relative">
               {/* Custom SVG Bar Chart */}
               <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d overflow-visible">
                 {/* Grid lines */}
                 <line x1="0" y1="0" x2="400" y2="0" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 <line x1="0" y1="50" x2="400" y2="50" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 <line x1="0" y1="100" x2="400" y2="100" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 <line x1="0" y1="150" x2="400" y2="150" stroke="var(--hh-ink-100)" strokeWidth="1" />
                 
                 {/* Bars */}
                 <rect x="25" y="30" width="30" height="120" rx="4" fill="var(--hh-blue-500)" />
                 <rect x="85" y="50" width="30" height="100" rx="4" fill="var(--hh-blue-400)" />
                 <rect x="145" y="70" width="30" height="80" rx="4" fill="var(--hh-blue-300)" />
                 <rect x="205" y="90" width="30" height="60" rx="4" fill="var(--hh-blue-200)" />
                 <rect x="265" y="110" width="30" height="40" rx="4" fill="var(--hh-ink-300)" />
                 <rect x="325" y="125" width="30" height="25" rx="4" fill="var(--hh-ink-200)" />
               </svg>
               <div className="absolute bottom-[-24px] left-[25px] right-[45px] flex justify-between text-[10px] text-[var(--hh-ink-500)] font-medium">
                 <span className="w-[30px] text-center">UNILAG</span>
                 <span className="w-[30px] text-center">OAU</span>
                 <span className="w-[30px] text-center">UI</span>
                 <span className="w-[30px] text-center">COV</span>
                 <span className="w-[30px] text-center">ABU</span>
                 <span className="w-[30px] text-center">UNN</span>
               </div>
            </div>
          </Card>
        </div>

      </div>
    </AppShell>
  );
}

function KpiCard({ title, value, change, isPositive }: { title: string, value: string, change: string, isPositive: boolean }) {
  return (
    <Card className="hh-card border-none shadow-[var(--hh-shadow-sm)] p-4 bg-white flex flex-col justify-between h-28">
      <div className="text-[13px] font-medium text-[var(--hh-ink-600)]">{title}</div>
      <div>
        <div className="hh-display text-2xl font-bold text-[var(--hh-ink-900)]">{value}</div>
        <div className={`text-[11px] font-semibold mt-1 flex items-center gap-1 ${isPositive ? 'text-[var(--hh-green-600)]' : 'text-[var(--hh-rose-500)]'}`}>
          {isPositive ? <TrendingUp size={12} /> : <ArrowDownRight size={12} />}
          {change} vs last week
        </div>
      </div>
    </Card>
  )
}

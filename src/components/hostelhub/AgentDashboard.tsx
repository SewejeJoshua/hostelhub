import "./_group.css";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Inbox,
  MessageSquare,
  Wallet,
  BadgeCheck,
  BarChart3,
  Settings,
  Plus,
  Zap,
  ShieldCheck,
  TrendingUp,
  Star,
  MoreVertical,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  ArrowRight,
  Reply,
  Banknote
} from "lucide-react";
import { AppShell, NavItem } from "./_shared/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AGENT_NAV: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "My listings", icon: Building2, badge: 12 },
  { label: "Booking requests", icon: Inbox, badge: 4 },
  { label: "Messages", icon: MessageSquare, badge: 7 },
  { label: "Earnings", icon: Wallet },
  { label: "Verification", icon: BadgeCheck },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

export function AgentDashboard() {
  const user = { name: "Emeka Okafor", sub: "Agent • Tier 2" };

  const rightSlot = (
    <div className="flex items-center gap-3">
      <Button variant="outline" className="gap-2 bg-white h-10 px-4 rounded-xl border-[var(--hh-border)] text-[var(--hh-ink-700)] shadow-sm font-semibold">
        <Zap size={16} className="text-[var(--hh-amber-500)]" fill="currentColor" />
        Boost listing
      </Button>
      <Button className="gap-2 h-10 px-5 rounded-xl font-semibold shadow-md border-0 text-white" style={{ background: "linear-gradient(135deg,#3b63f0,#1f37ab)" }}>
        <Plus size={18} />
        Add new property
      </Button>
    </div>
  );

  return (
    <AppShell
      nav={AGENT_NAV}
      user={user}
      role="Agent"
      pageTitle="Hello, Mr. Okafor"
      pageSubtitle="You have 4 new booking requests and 1 pending payout"
      rightSlot={rightSlot}
    >
      <div className="flex flex-col gap-6">
        {/* Verification Alert */}
        <div className="hh-card p-5 border-[var(--hh-border)] flex flex-col md:flex-row items-center gap-5 bg-gradient-to-r from-[var(--hh-green-50)] to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--hh-green-100)] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="w-12 h-12 rounded-full bg-[var(--hh-green-100)] flex items-center justify-center shrink-0">
            <ShieldCheck size={24} className="text-[var(--hh-green-600)]" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="hh-display font-bold text-[var(--hh-ink-900)] text-lg">Verified Agent · Tier 2</h3>
              <Badge variant="secondary" className="bg-[var(--hh-green-100)] text-[var(--hh-green-700)] hover:bg-[var(--hh-green-100)] text-[10px] uppercase font-bold tracking-wider">75% Complete</Badge>
            </div>
            <p className="text-sm text-[var(--hh-ink-600)] mt-1">
              3/4 documents approved (NIN, CAC, Utility bill done). Bank verification pending.
            </p>
          </div>

          <div className="w-full md:w-64 flex flex-col gap-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[var(--hh-ink-500)]">Progress</span>
              <span className="text-[var(--hh-green-600)]">3/4 Docs</span>
            </div>
            <Progress value={75} className="h-2 bg-[var(--hh-ink-100)] [&>div]:bg-[var(--hh-green-500)]" />
            <p className="text-[11px] text-[var(--hh-ink-500)] mt-0.5">
              Complete to earn 1.5% lower fees
            </p>
          </div>
          
          <Button variant="outline" className="shrink-0 h-9 bg-white border-[var(--hh-border)] shadow-sm text-sm font-semibold rounded-lg">
            Complete Profile
          </Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Active Listings" value="12" icon={Building2} trend="+2 this month" trendUp />
          <StatCard title="Booking Requests" value="4" subtitle="New" icon={Inbox} notification />
          <StatCard title="Earnings (This Month)" value="₦2,840,000" icon={Wallet} trend="+15.2% vs last" trendUp />
          <StatCard title="Average Rating" value="4.8" subtitle="★ 122 reviews" icon={Star} trend="Top 5% agent" trendUp color="amber" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Analytics Chart */}
            <Card className="hh-card border-none p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="hh-display font-bold text-lg text-[var(--hh-ink-900)]">Bookings & Inquiries</h3>
                  <p className="text-sm text-[var(--hh-ink-500)] mt-0.5">Last 30 days performance</p>
                </div>
                <Tabs defaultValue="month" className="w-[120px]">
                  <TabsList className="grid w-full grid-cols-2 bg-[var(--hh-ink-50)] p-1 rounded-lg">
                    <TabsTrigger value="week" className="rounded-md text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm">Week</TabsTrigger>
                    <TabsTrigger value="month" className="rounded-md text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm">Month</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="h-64 w-full flex items-end gap-2 mt-4 pb-4 border-b border-[var(--hh-ink-100)] relative">
                {/* Y Axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] font-medium text-[var(--hh-ink-400)] py-4 -ml-2 w-6 text-right">
                  <span>30</span>
                  <span>20</span>
                  <span>10</span>
                  <span>0</span>
                </div>
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none ml-6">
                  <div className="border-t border-dashed border-[var(--hh-ink-200)] w-full"></div>
                  <div className="border-t border-dashed border-[var(--hh-ink-200)] w-full"></div>
                  <div className="border-t border-dashed border-[var(--hh-ink-200)] w-full"></div>
                  <div className="border-t border-dashed border-[var(--hh-ink-200)] w-full"></div>
                </div>
                {/* Bars */}
                <div className="flex-1 flex items-end justify-around pl-8 z-10 h-full py-4 pt-8">
                  {[40, 60, 35, 80, 50, 90, 70, 100, 65, 45, 75, 85].map((val, i) => (
                    <div key={i} className="w-full max-w-[24px] flex flex-col justify-end items-center gap-1 group h-full">
                      <div 
                        className="w-full rounded-t-sm transition-all duration-300 group-hover:bg-[var(--hh-blue-600)]" 
                        style={{ 
                          height: `${val}%`, 
                          background: i % 3 === 0 ? 'var(--hh-blue-500)' : 'var(--hh-blue-200)'
                        }}
                      ></div>
                      <div className="text-[9px] font-medium text-[var(--hh-ink-400)] opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-around pl-8 mt-2 text-[10px] font-semibold text-[var(--hh-ink-500)]">
                <span>Jan 1</span>
                <span>Jan 8</span>
                <span>Jan 15</span>
                <span>Jan 22</span>
                <span>Jan 29</span>
              </div>
            </Card>

            {/* Booking Requests */}
            <Card className="hh-card border-none shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-[var(--hh-border)] flex items-center justify-between bg-white">
                <h3 className="hh-display font-bold text-lg text-[var(--hh-ink-900)]">Booking Requests</h3>
                <Button variant="ghost" className="text-[var(--hh-blue-600)] text-sm font-semibold h-8 px-3 hover:bg-[var(--hh-blue-50)]">View all</Button>
              </div>
              <div className="divide-y divide-[var(--hh-border)] bg-white">
                {[
                  { name: "Adaeze Nwosu", hostel: "Sunshine Hostels, Yaba", date: "Oct 12", status: "Pending", action: "Review" },
                  { name: "Tunde Bakare", hostel: "Oasis Student Lodge, Akoka", date: "Oct 15", status: "Inspection", action: "Update" },
                  { name: "Aisha Mohammed", hostel: "Sunshine Hostels, Yaba", date: "Oct 16", status: "Awaiting Payment", action: "Remind" },
                  { name: "Chinonso Eze", hostel: "Greenwood Annex, Samaru", date: "Oct 20", status: "Pending", action: "Review" },
                ].map((req, i) => (
                  <div key={i} className="p-4 px-6 flex items-center gap-4 hover:bg-[var(--hh-ink-50)] transition-colors">
                    <Avatar className="h-10 w-10 border border-[var(--hh-border)]">
                      <AvatarFallback className="bg-[var(--hh-blue-100)] text-[var(--hh-blue-700)] font-bold text-sm">
                        {req.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-[var(--hh-ink-900)] truncate">{req.name}</div>
                      <div className="text-xs text-[var(--hh-ink-500)] truncate mt-0.5">{req.hostel}</div>
                    </div>
                    <div className="hidden sm:flex flex-col items-end gap-1">
                      <div className="text-xs font-semibold text-[var(--hh-ink-700)]">Move-in: {req.date}</div>
                      <Badge 
                        variant="secondary" 
                        className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full ${
                          req.status === 'Pending' ? 'bg-[var(--hh-amber-50)] text-[var(--hh-amber-500)]' : 
                          req.status === 'Inspection' ? 'bg-[var(--hh-blue-50)] text-[var(--hh-blue-600)]' :
                          'bg-[var(--hh-green-50)] text-[var(--hh-green-600)]'
                        }`}
                      >
                        {req.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {req.status === 'Pending' ? (
                        <>
                          <Button size="icon" variant="outline" className="h-8 w-8 rounded-lg border-[var(--hh-border)] text-[var(--hh-green-600)] hover:bg-[var(--hh-green-50)] hover:text-[var(--hh-green-700)] hover:border-[var(--hh-green-200)] transition-colors">
                            <CheckCircle2 size={16} />
                          </Button>
                          <Button size="icon" variant="outline" className="h-8 w-8 rounded-lg border-[var(--hh-border)] text-[var(--hh-rose-500)] hover:bg-[var(--hh-rose-50)] hover:text-[var(--hh-rose-600)] hover:border-[var(--hh-rose-200)] transition-colors">
                            <XCircle size={16} />
                          </Button>
                        </>
                      ) : (
                        <Button variant="outline" className="h-8 px-3 text-xs font-semibold rounded-lg border-[var(--hh-border)] shadow-sm">
                          {req.action}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* My Listings */}
            <Card className="hh-card border-none shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-[var(--hh-border)] flex items-center justify-between bg-white">
                <h3 className="hh-display font-bold text-lg text-[var(--hh-ink-900)]">My Listings</h3>
                <Button variant="ghost" className="text-[var(--hh-blue-600)] text-sm font-semibold h-8 px-3 hover:bg-[var(--hh-blue-50)]">Manage all (12)</Button>
              </div>
              <div className="bg-white">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-[var(--hh-border)] text-xs font-semibold text-[var(--hh-ink-500)] uppercase tracking-wider bg-[var(--hh-ink-50)]">
                  <div className="col-span-5">Property</div>
                  <div className="col-span-2 text-center">Status</div>
                  <div className="col-span-2 text-center">Views</div>
                  <div className="col-span-2 text-center">Inquiries</div>
                  <div className="col-span-1"></div>
                </div>
                <div className="divide-y divide-[var(--hh-border)]">
                  {[
                    { name: "Sunshine Hostels", loc: "Yaba, Lagos", status: "Live", views: 1240, inq: 28, color: "from-blue-400 to-indigo-600" },
                    { name: "Oasis Student Lodge", loc: "Akoka, Lagos", status: "Live", views: 856, inq: 15, color: "from-emerald-400 to-teal-600" },
                    { name: "Greenwood Annex", loc: "Samaru, Zaria", status: "Paused", views: 420, inq: 3, color: "from-slate-300 to-slate-500" },
                    { name: "Prestige Apartments", loc: "Bodija, Ibadan", status: "Draft", views: 0, inq: 0, color: "from-amber-300 to-orange-500" },
                  ].map((prop, i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-[var(--hh-ink-50)] transition-colors group">
                      <div className="col-span-5 flex items-center gap-3 min-w-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.color} shrink-0 flex items-center justify-center text-white shadow-inner`}>
                          <Building2 size={20} strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-sm text-[var(--hh-ink-900)] truncate group-hover:text-[var(--hh-blue-600)] transition-colors">{prop.name}</div>
                          <div className="text-[11px] text-[var(--hh-ink-500)] flex items-center gap-1 mt-0.5 truncate">
                            <MapPin size={10} /> {prop.loc}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <Badge 
                          variant="outline" 
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            prop.status === 'Live' ? 'bg-[var(--hh-green-50)] text-[var(--hh-green-700)] border-[var(--hh-green-200)]' : 
                            prop.status === 'Draft' ? 'bg-[var(--hh-amber-50)] text-[var(--hh-amber-600)] border-[var(--hh-amber-200)]' :
                            'bg-[var(--hh-ink-100)] text-[var(--hh-ink-600)] border-[var(--hh-ink-200)]'
                          }`}
                        >
                          {prop.status}
                        </Badge>
                      </div>
                      <div className="col-span-2 text-center text-sm font-semibold text-[var(--hh-ink-700)]">{prop.views.toLocaleString()}</div>
                      <div className="col-span-2 text-center text-sm font-semibold text-[var(--hh-ink-700)]">{prop.inq}</div>
                      <div className="col-span-1 flex justify-end">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--hh-ink-400)] hover:text-[var(--hh-ink-900)]">
                          <MoreVertical size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Earnings Card */}
            <Card className="hh-card border-none shadow-sm overflow-hidden bg-gradient-to-br from-[#122158] to-[#1f37ab] text-white relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white opacity-5 blur-2xl"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between opacity-80">
                  <span className="text-sm font-medium">Available Balance</span>
                  <Banknote size={18} />
                </div>
                <div className="mt-2">
                  <span className="text-4xl hh-display font-black tracking-tight">₦620,000</span>
                </div>
                
                <div className="flex flex-col gap-3 mt-6">
                  <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-xs font-medium opacity-90">In Escrow (Pending)</span>
                    <span className="text-sm font-bold">₦480,000</span>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xs font-medium opacity-70">Total this month</span>
                    <span className="text-xs font-bold opacity-90">₦2,840,000</span>
                  </div>
                </div>

                <div className="h-12 w-full mt-4 flex items-end gap-1 opacity-60">
                  {[2, 3, 5, 4, 7, 5, 8, 6, 9, 10, 8, 12].map((v, i) => (
                    <div key={i} className="flex-1 bg-white rounded-t-sm" style={{ height: `${v * 8}%` }}></div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-[#12b76a] hover:bg-[#039855] text-[#0b1220] font-bold h-11 rounded-xl shadow-[0_4px_14px_rgba(18,183,106,0.4)]">
                  Withdraw to Bank
                </Button>
              </div>
            </Card>

            {/* Recent Reviews */}
            <Card className="hh-card border-none shadow-sm overflow-hidden flex flex-col flex-1">
              <div className="px-6 py-5 border-b border-[var(--hh-border)] flex items-center justify-between bg-white">
                <h3 className="hh-display font-bold text-lg text-[var(--hh-ink-900)]">Recent Reviews</h3>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col gap-5">
                {[
                  { name: "Femi O.", rating: 5, time: "2 days ago", text: "The room was exactly as pictured. Mr. Okafor was very helpful during the inspection." },
                  { name: "Ngozi A.", rating: 4, time: "1 week ago", text: "Nice hostel, close to UNILAG gate. Water runs well but light can be sketchy sometimes." },
                ].map((rev, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                          <AvatarFallback className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] text-xs font-bold">
                            {rev.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-bold text-[var(--hh-ink-900)]">{rev.name}</div>
                          <div className="flex text-[var(--hh-amber-500)]">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={10} fill={j < rev.rating ? "currentColor" : "none"} className={j < rev.rating ? "" : "text-[var(--hh-ink-200)]"} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-[var(--hh-ink-400)] font-medium">{rev.time}</span>
                    </div>
                    <p className="text-xs text-[var(--hh-ink-600)] leading-relaxed">"{rev.text}"</p>
                    <button className="text-[11px] font-semibold text-[var(--hh-blue-600)] flex items-center gap-1 mt-1 hover:text-[var(--hh-blue-700)] w-max">
                      <Reply size={12} /> Reply
                    </button>
                    {i === 0 && <div className="h-px bg-[var(--hh-border)] mt-2"></div>}
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-auto h-10 border-[var(--hh-border)] text-sm font-semibold rounded-xl text-[var(--hh-ink-700)] shadow-sm">
                  View all 122 reviews
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  trendUp, 
  notification,
  color = "blue"
}: { 
  title: string; 
  value: string | number; 
  subtitle?: string; 
  icon: any; 
  trend?: string; 
  trendUp?: boolean;
  notification?: boolean;
  color?: "blue" | "green" | "amber";
}) {
  const isBlue = color === "blue";
  const isAmber = color === "amber";

  return (
    <Card className="hh-card border-none p-5 shadow-sm bg-white relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
          isBlue ? "bg-[var(--hh-blue-50)] text-[var(--hh-blue-600)]" : 
          isAmber ? "bg-[var(--hh-amber-50)] text-[var(--hh-amber-500)]" :
          "bg-[var(--hh-green-50)] text-[var(--hh-green-600)]"
        }`}>
          <Icon size={20} strokeWidth={2.5} />
          {notification && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--hh-rose-500)] border-2 border-white rounded-full"></span>
          )}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-md ${
            trendUp ? "bg-[var(--hh-green-50)] text-[var(--hh-green-700)]" : "bg-[var(--hh-ink-50)] text-[var(--hh-ink-600)]"
          }`}>
            {trendUp ? <TrendingUp size={12} /> : null}
            {trend}
          </div>
        )}
      </div>
      <div>
        <h4 className="text-[13px] font-semibold text-[var(--hh-ink-500)]">{title}</h4>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="hh-display text-2xl font-black text-[var(--hh-ink-900)] tracking-tight">{value}</span>
          {subtitle && <span className="text-xs font-semibold text-[var(--hh-ink-400)]">{subtitle}</span>}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 blur-xl ${
        isBlue ? "bg-[var(--hh-blue-600)]" : isAmber ? "bg-[var(--hh-amber-500)]" : "bg-[var(--hh-green-600)]"
      }`}></div>
    </Card>
  );
}

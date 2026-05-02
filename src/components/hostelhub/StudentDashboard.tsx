import "./_group.css";
import { AppShell, STUDENT_NAV } from "./_shared/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Eye,
  CalendarCheck,
  Wallet,
  MapPin,
  Star,
  ShieldCheck,
  ArrowRight,
  Clock,
  MessageSquare,
  CheckCircle2,
  TrendingUp,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Plus,
  ArrowDownToLine
} from "lucide-react";

export function StudentDashboard() {
  const rightSlot = (
    <div className="flex items-center gap-3">
      <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--hh-border)] bg-white text-sm font-medium">
        <Clock size={16} className="text-[var(--hh-ink-400)]" />
        <span><strong className="text-[var(--hh-blue-600)]">24 days</strong> to UNILAG resumption</span>
      </div>
      <Button 
        className="rounded-xl h-10 px-5 text-white font-semibold shadow-[0_4px_14px_-4px_rgba(59,99,240,0.4)]"
        style={{ background: "linear-gradient(135deg, var(--hh-blue-500), var(--hh-blue-700))" }}
      >
        <Search size={16} className="mr-2" />
        Find new hostels
      </Button>
    </div>
  );

  return (
    <AppShell
      nav={STUDENT_NAV}
      user={{ name: "Adaeze Okafor", sub: "UNILAG • 300L" }}
      role="Student"
      pageTitle="Welcome back, Adaeze"
      pageSubtitle="3 saved hostels match your filters · Resumption in 24 days"
      rightSlot={rightSlot}
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="xl:col-span-2 space-y-6 flex flex-col">
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard 
              icon={<Heart size={20} className="text-rose-500" />} 
              label="Saved hostels" 
              value="8" 
              trend="+2 this week" 
              trendColor="text-emerald-600"
            />
            <StatCard 
              icon={<Eye size={20} className="text-[var(--hh-blue-500)]" />} 
              label="Recently viewed" 
              value="14" 
              trend="Last 7 days"
              trendColor="text-[var(--hh-ink-500)]"
            />
            <StatCard 
              icon={<CalendarCheck size={20} className="text-amber-500" />} 
              label="Active inspections" 
              value="1" 
              trend="Scheduled today"
              trendColor="text-amber-600"
            />
            <StatCard 
              icon={<Wallet size={20} className="text-[var(--hh-green-600)]" />} 
              label="Wallet balance" 
              value="₦125,000" 
              trend="₦450k in escrow"
              trendColor="text-[var(--hh-ink-500)]"
            />
          </div>

          {/* Booking Status */}
          <Card className="hh-card border-none shadow-[var(--hh-shadow)] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 font-semibold rounded-md">Action Required</Badge>
                    <span className="text-xs font-medium text-[var(--hh-ink-500)] flex items-center gap-1">
                      <Clock size={12} /> Today at 2:00 PM
                    </span>
                  </div>
                  <h2 className="hh-display text-xl font-bold text-[var(--hh-ink-900)]">Crystal Lodge, UNILAG</h2>
                  <p className="text-sm text-[var(--hh-ink-500)] flex items-center gap-1 mt-1">
                    <MapPin size={14} /> 12 University Road, Akoka
                  </p>
                </div>
                <Button variant="outline" className="rounded-xl font-semibold border-[var(--hh-border)] text-[var(--hh-ink-700)]">
                  View Details
                </Button>
              </div>

              <div className="relative pt-2 pb-4">
                <div className="absolute top-5 left-4 right-4 h-0.5 bg-[var(--hh-ink-100)] -z-10"></div>
                <div className="absolute top-5 left-4 w-1/3 h-0.5 bg-[var(--hh-blue-500)] -z-10"></div>
                
                <div className="flex justify-between relative">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--hh-blue-500)] text-white flex items-center justify-center ring-4 ring-white">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--hh-ink-900)]">Reserved</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center ring-4 ring-white shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-[11px] font-bold text-amber-600">Inspect Today</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--hh-ink-100)] border-2 border-[var(--hh-ink-200)] flex items-center justify-center ring-4 ring-white">
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--hh-ink-400)]">Approve</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--hh-ink-100)] border-2 border-[var(--hh-ink-200)] flex items-center justify-center ring-4 ring-white">
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--hh-ink-400)]">Move in</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-[var(--hh-ink-50)] rounded-xl p-4 flex items-center justify-between border border-[var(--hh-border)]">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border border-[var(--hh-border)]">
                    <AvatarFallback className="bg-[var(--hh-blue-100)] text-[var(--hh-blue-700)] font-bold">TA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-[var(--hh-ink-900)]">Tunde Agent</p>
                    <p className="text-xs text-[var(--hh-ink-500)]">Will meet you at the gate</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-xl h-9 w-9 border-[var(--hh-border)]">
                    <MessageSquare size={16} className="text-[var(--hh-ink-600)]" />
                  </Button>
                  <Button className="rounded-xl h-9 bg-amber-500 hover:bg-amber-600 text-white font-semibold">
                    Confirm arrival
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Recommended Hostels */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="hh-display text-lg font-bold text-[var(--hh-ink-900)]">Recommended for you</h3>
              <Button variant="ghost" className="text-[var(--hh-blue-600)] hover:text-[var(--hh-blue-700)] hover:bg-[var(--hh-blue-50)] font-semibold text-sm">
                View all <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <RecommendedCard 
                image="/images/student-thumb-1.jpg"
                name="Sunshine Apartments"
                location="Akoka, 5 mins from UNILAG gate"
                price="₦350,000"
                rating="4.8"
                verified
              />
              <RecommendedCard 
                image="/images/student-thumb-2.jpg"
                name="Greenwood Heights"
                location="Yaba, 15 mins from UNILAG gate"
                price="₦450,000"
                rating="4.9"
                verified
              />
              <RecommendedCard 
                image="/images/student-thumb-3.jpg"
                name="The Hive"
                location="Onike, 10 mins from UNILAG gate"
                price="₦300,000"
                rating="4.6"
              />
            </div>
          </div>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          
          {/* Continue Search */}
          <Card className="hh-card border-[var(--hh-blue-200)] shadow-sm bg-gradient-to-b from-[var(--hh-blue-50)] to-white p-5 rounded-[22px]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-[var(--hh-ink-900)] text-sm">Continue search</h3>
              <button className="text-[var(--hh-blue-600)] hover:bg-[var(--hh-blue-100)] p-1.5 rounded-lg transition-colors">
                <SlidersHorizontal size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-white border border-[var(--hh-border)] text-[var(--hh-ink-700)]">UNILAG</Badge>
              <Badge variant="secondary" className="bg-white border border-[var(--hh-border)] text-[var(--hh-ink-700)]">Akoka/Yaba</Badge>
              <Badge variant="secondary" className="bg-white border border-[var(--hh-border)] text-[var(--hh-ink-700)]">₦300k - ₦500k</Badge>
              <Badge variant="secondary" className="bg-white border border-[var(--hh-border)] text-[var(--hh-ink-700)]">Single Room</Badge>
            </div>
            <Button className="w-full rounded-xl h-10 font-semibold bg-[var(--hh-ink-900)] text-white hover:bg-[var(--hh-ink-800)]">
              View 24 matches
            </Button>
          </Card>

          {/* Wallet Card */}
          <Card className="hh-card p-5 rounded-[22px] border-none text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--hh-ink-900), #1f2a44)" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <div className="flex items-center justify-between mb-6 relative">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Wallet size={16} className="text-[var(--hh-green-300)]" />
                </div>
                <span className="font-semibold text-sm text-white/90">Wallet</span>
              </div>
              <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm">
                Active
              </span>
            </div>
            <div className="mb-6 relative">
              <p className="text-xs text-white/70 mb-1">Available Balance</p>
              <h3 className="hh-display text-3xl font-bold tracking-tight">₦125,000</h3>
              <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[var(--hh-green-300)] bg-[var(--hh-green-500)]/10 inline-flex px-2 py-0.5 rounded-full border border-[var(--hh-green-500)]/20">
                <ShieldCheck size={12} />
                <span>₦450,000 securely locked in escrow</span>
              </div>
            </div>
            <div className="flex gap-3 relative">
              <Button className="flex-1 rounded-xl bg-white text-[var(--hh-ink-900)] hover:bg-[var(--hh-ink-50)] font-semibold h-9">
                <Plus size={16} className="mr-1.5" /> Top up
              </Button>
              <Button variant="outline" className="flex-1 rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold h-9">
                <ArrowDownToLine size={16} className="mr-1.5" /> Withdraw
              </Button>
            </div>
          </Card>

          {/* Messages Preview */}
          <Card className="hh-card p-0 rounded-[22px] overflow-hidden border-[var(--hh-border)]">
            <div className="p-5 border-b border-[var(--hh-border)] flex items-center justify-between">
              <h3 className="font-bold text-[var(--hh-ink-900)] text-sm flex items-center gap-2">
                Messages
                <Badge className="bg-[var(--hh-blue-500)] hover:bg-[var(--hh-blue-600)] text-white px-1.5 py-0 min-w-5 h-5 flex items-center justify-center rounded-full text-[10px]">3</Badge>
              </h3>
              <button className="text-[12px] font-semibold text-[var(--hh-blue-600)]">View all</button>
            </div>
            <div className="divide-y divide-[var(--hh-border)]">
              <MessageItem 
                name="Agent Femi" 
                avatar="FA" 
                message="Yes, the generator works from 7pm to 7am daily." 
                time="10:42 AM" 
                unread 
              />
              <MessageItem 
                name="Ngozi Properties" 
                avatar="NP" 
                message="Are you still coming for the inspection today?" 
                time="Yesterday" 
                unread 
              />
              <MessageItem 
                name="HostelHub Support" 
                avatar="HS" 
                message="Your escrow payment for Crystal Lodge is confirmed." 
                time="Tue" 
              />
            </div>
          </Card>

          {/* Saved Listings Compact */}
          <Card className="hh-card p-5 rounded-[22px] border-[var(--hh-border)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[var(--hh-ink-900)] text-sm flex items-center gap-2">
                <Heart size={16} className="text-[var(--hh-ink-400)]" /> Saved
              </h3>
              <button className="text-[12px] font-semibold text-[var(--hh-blue-600)]">See all 8</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <SavedMiniCard image="/images/student-thumb-4.jpg" price="₦350k" />
              <SavedMiniCard image="/images/student-thumb-5.jpg" price="₦450k" />
              <SavedMiniCard image="/images/student-thumb-2.jpg" price="₦280k" />
              <SavedMiniCard image="/images/student-thumb-3.jpg" price="₦500k" />
            </div>
          </Card>

        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ icon, label, value, trend, trendColor }: { icon: React.ReactNode, label: string, value: string, trend: string, trendColor: string }) {
  return (
    <Card className="hh-card p-4 rounded-[18px] border-[var(--hh-border)] flex flex-col justify-between h-[110px]">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 rounded-full bg-[var(--hh-ink-50)] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-medium text-[var(--hh-ink-500)] mb-0.5">{label}</p>
        <div className="flex items-end justify-between">
          <h4 className="hh-display text-xl font-bold text-[var(--hh-ink-900)] leading-none">{value}</h4>
          <span className={`text-[10px] font-semibold ${trendColor}`}>{trend}</span>
        </div>
      </div>
    </Card>
  );
}

function RecommendedCard({ image, name, location, price, rating, verified }: any) {
  return (
    <div className="group flex flex-col sm:flex-row gap-4 p-3 rounded-[20px] bg-white border border-[var(--hh-border)] hover:border-[var(--hh-blue-200)] hover:shadow-[var(--hh-shadow-sm)] transition-all cursor-pointer">
      <div className="w-full sm:w-[180px] h-[120px] rounded-[14px] overflow-hidden relative shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--hh-ink-400)] hover:text-rose-500 transition-colors shadow-sm">
          <Heart size={16} />
        </button>
      </div>
      <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-bold text-[var(--hh-ink-900)] text-base truncate">{name}</h4>
            <div className="flex items-center gap-1 bg-[var(--hh-ink-50)] px-1.5 py-0.5 rounded-md shrink-0">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span className="text-[11px] font-bold text-[var(--hh-ink-700)]">{rating}</span>
            </div>
          </div>
          <p className="text-[12px] text-[var(--hh-ink-500)] flex items-center gap-1 mt-1 truncate">
            <MapPin size={12} className="shrink-0" /> {location}
          </p>
          {verified && (
            <div className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-[var(--hh-blue-700)] bg-[var(--hh-blue-50)] px-2 py-0.5 rounded-full">
              <ShieldCheck size={12} /> Verified by HostelHub
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-3 sm:mt-0 pt-2 border-t border-[var(--hh-border)] sm:border-none sm:pt-0">
          <div className="font-bold text-[var(--hh-ink-900)]">
            {price} <span className="text-[11px] font-medium text-[var(--hh-ink-500)]">/ year</span>
          </div>
          <Button variant="ghost" className="h-8 rounded-lg px-3 text-[12px] font-semibold text-[var(--hh-blue-600)] hover:bg-[var(--hh-blue-50)]">
            View details
          </Button>
        </div>
      </div>
    </div>
  );
}

function MessageItem({ name, avatar, message, time, unread }: any) {
  return (
    <div className="p-4 flex gap-3 hover:bg-[var(--hh-ink-50)] transition-colors cursor-pointer group">
      <div className="relative">
        <Avatar className="w-10 h-10 border border-[var(--hh-border)]">
          <AvatarFallback className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] font-semibold text-xs">{avatar}</AvatarFallback>
        </Avatar>
        {unread && <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[var(--hh-blue-500)] ring-2 ring-white"></div>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h4 className={`text-sm truncate ${unread ? 'font-bold text-[var(--hh-ink-900)]' : 'font-medium text-[var(--hh-ink-700)]'}`}>{name}</h4>
          <span className={`text-[10px] shrink-0 ml-2 ${unread ? 'font-semibold text-[var(--hh-blue-600)]' : 'text-[var(--hh-ink-400)]'}`}>{time}</span>
        </div>
        <p className={`text-xs truncate ${unread ? 'font-medium text-[var(--hh-ink-700)]' : 'text-[var(--hh-ink-500)]'}`}>{message}</p>
      </div>
    </div>
  );
}

function SavedMiniCard({ image, price }: { image: string, price: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden h-[90px] group cursor-pointer border border-[var(--hh-border)]">
      <img src={image} alt="Saved hostel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-2 left-2 text-white font-bold text-xs">
        {price}
      </div>
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
        <Heart size={12} className="fill-white" />
      </div>
    </div>
  );
}

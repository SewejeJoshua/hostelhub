import "./_group.css";
import React, { useState } from "react";
import {
  Home,
  Search,
  Heart,
  Share,
  MapPin,
  Star,
  ShieldCheck,
  BadgeCheck,
  Wifi,
  Zap,
  Droplet,
  Video,
  DoorClosed,
  Shirt,
  BookOpen,
  Bath,
  Utensils,
  WashingMachine,
  Users,
  Bike,
  ChevronRight,
  Shield,
  Lock,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import { HostelHubLogo } from "./_shared/Brand";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (React.isValidElement(children) && children.type === "a") {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      ...(child.props as Record<string, unknown>),
      href,
      className: [className, child.props.className].filter(Boolean).join(" "),
    } as Record<string, unknown>);
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function PropertyDetails() {
  const [pricingMode, setPricingMode] = useState<"year" | "semester">("year");
  const [isSaved, setIsSaved] = useState(false);

  const price = pricingMode === "year" ? 480000 : 240000;
  
  return (
    <div className="hh-root min-h-screen pb-20">
      {/* Top Nav */}
      <header className="h-16 px-4 md:px-8 border-b bg-white flex items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/hostelhub">
            <a className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--hh-ink-50)] hover:bg-[var(--hh-ink-100)] transition text-[var(--hh-ink-600)] md:hidden">
              <ArrowLeft size={18} />
            </a>
          </Link>
          <div className="hidden md:block">
            <HostelHubLogo size={24} />
          </div>
        </div>

        <div className="hidden md:flex ml-8 items-center text-sm font-medium text-[var(--hh-ink-500)] gap-2">
          <Link href="/hostelhub" className="hover:text-[var(--hh-blue-500)] transition">Hostels</Link>
          <ChevronRight size={14} className="text-[var(--hh-ink-300)]" />
          <span>UNILAG</span>
          <ChevronRight size={14} className="text-[var(--hh-ink-300)]" />
          <span>Akoka</span>
          <ChevronRight size={14} className="text-[var(--hh-ink-300)]" />
          <span className="text-[var(--hh-ink-900)]">Crystal Lodge</span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition hover:bg-[var(--hh-ink-50)]"
          >
            <Heart size={18} className={isSaved ? "fill-[var(--hh-rose-500)] text-[var(--hh-rose-500)]" : "text-[var(--hh-ink-600)]"} />
            <span className="hidden sm:inline text-[var(--hh-ink-700)]">Save</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition hover:bg-[var(--hh-ink-50)]">
            <Share size={18} className="text-[var(--hh-ink-600)]" />
            <span className="hidden sm:inline text-[var(--hh-ink-700)]">Share</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 md:pt-8">
        
        {/* Title Block */}
        <div className="mb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="hh-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--hh-ink-900)]">Crystal Lodge</h1>
                <Badge variant="secondary" className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] hover:bg-[var(--hh-blue-100)] flex items-center gap-1 py-1 px-2.5">
                  <ShieldCheck size={14} />
                  Verified by HostelHub
                </Badge>
              </div>
              <div className="flex flex-wrap items-center text-sm gap-2 md:gap-4 text-[var(--hh-ink-600)]">
                <div className="flex items-center gap-1 font-medium text-[var(--hh-ink-900)]">
                  <Star size={16} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                  4.8 <span className="text-[var(--hh-ink-500)] font-normal underline decoration-dashed underline-offset-4 cursor-pointer hover:text-[var(--hh-ink-900)]">(122 reviews)</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-[var(--hh-ink-300)] hidden sm:block"></div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-[var(--hh-ink-400)]" />
                  Akoka, Lagos
                </div>
                <div className="w-1 h-1 rounded-full bg-[var(--hh-ink-300)] hidden sm:block"></div>
                <div className="bg-[var(--hh-green-50)] text-[var(--hh-green-700)] px-2 py-0.5 rounded-md font-medium text-xs">
                  4 min to UNILAG main gate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 h-[300px] md:h-[460px] mb-10 rounded-2xl md:rounded-[28px] overflow-hidden">
          <div className="col-span-1 md:col-span-2 relative group cursor-pointer h-full">
            <img src="/images/details-room.jpg" alt="Room interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:grid col-span-2 grid-cols-2 gap-3 h-full">
            <div className="relative group cursor-pointer h-full overflow-hidden">
              <img src="/images/details-common.jpg" alt="Common area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative group cursor-pointer h-full overflow-hidden">
              <img src="/images/details-exterior.jpg" alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative group cursor-pointer h-full overflow-hidden">
              <img src="/images/details-kitchen.jpg" alt="Kitchen/Bath" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="relative group cursor-pointer h-full overflow-hidden">
              <img src="/images/details-desk.jpg" alt="Study desk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur border border-white/20 text-[var(--hh-ink-900)] text-sm font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-white transition flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                View all 24 photos
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Main */}
          <div className="flex-1 min-w-0">
            
            {/* Quick Facts */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-[var(--hh-ink-50)] border border-[var(--hh-border)] rounded-xl px-4 py-3">
                <DoorClosed className="text-[var(--hh-blue-500)]" size={20} />
                <span className="font-semibold text-sm">Single room</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--hh-ink-50)] border border-[var(--hh-border)] rounded-xl px-4 py-3">
                <Shirt className="text-[var(--hh-blue-500)]" size={20} />
                <span className="font-semibold text-sm">Furnished</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--hh-ink-50)] border border-[var(--hh-border)] rounded-xl px-4 py-3">
                <Bath className="text-[var(--hh-blue-500)]" size={20} />
                <span className="font-semibold text-sm">En-suite bath</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--hh-ink-50)] border border-[var(--hh-border)] rounded-xl px-4 py-3">
                <ShieldCheck className="text-[var(--hh-green-500)]" size={20} />
                <span className="font-semibold text-sm">24/7 security</span>
              </div>
            </div>

            <Separator className="bg-[var(--hh-border)] mb-10" />

            {/* About */}
            <div className="mb-10">
              <h2 className="hh-display text-2xl font-bold mb-4">About this hostel</h2>
              <div className="text-[var(--hh-ink-600)] space-y-4 leading-relaxed">
                <p>
                  Welcome to Crystal Lodge, one of the most sought-after student accommodations in the Akoka area. Designed specifically with the modern Nigerian student in mind, this premium property offers a perfect blend of comfort, security, and academic focus. Located just a short 4-minute walk to the UNILAG main gate and easily accessible to the Faculty of Arts, you'll never have to worry about long commutes or missing early morning lectures.
                </p>
                <p>
                  The lodge features dedicated 24/7 power supply backed up by heavy-duty generators, a constant borehole water system, and high-speed Wi-Fi to keep your studies and entertainment uninterrupted. The environment is serene and studious, managed by responsive caretakers who prioritize your wellbeing. Whether you're unwinding in the common lounge or focusing at your private study desk, Crystal Lodge feels like a true home away from home.
                </p>
              </div>
              <button className="text-[var(--hh-blue-600)] font-semibold mt-4 flex items-center gap-1 hover:text-[var(--hh-blue-800)] transition">
                Read more <ChevronRight size={16} />
              </button>
            </div>

            <Separator className="bg-[var(--hh-border)] mb-10" />

            {/* Amenities */}
            <div className="mb-10">
              <h2 className="hh-display text-2xl font-bold mb-6">What this place offers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                {[
                  { icon: Wifi, label: "Fast Wi-Fi" },
                  { icon: Zap, label: "24/7 Generator" },
                  { icon: Droplet, label: "Borehole water" },
                  { icon: Video, label: "CCTV Cameras" },
                  { icon: Shield, label: "Gated compound" },
                  { icon: DoorClosed, label: "Wardrobe" },
                  { icon: BookOpen, label: "Reading desk" },
                  { icon: Bath, label: "En-suite bathroom" },
                  { icon: Utensils, label: "Shared Kitchen" },
                  { icon: WashingMachine, label: "Laundry area" },
                  { icon: Users, label: "Common room" },
                  { icon: Bike, label: "Bike rack" },
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 text-[var(--hh-ink-700)]">
                    <amenity.icon size={22} strokeWidth={1.5} className="text-[var(--hh-ink-400)]" />
                    <span className="font-medium text-sm">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-[var(--hh-border)] mb-10" />

            {/* Location */}
            <div className="mb-10">
              <h2 className="hh-display text-2xl font-bold mb-6">Where you'll be</h2>
              <div className="hh-card overflow-hidden bg-[var(--hh-ink-50)] p-2">
                <div className="relative w-full h-[240px] bg-[var(--hh-ink-100)] rounded-xl overflow-hidden border border-[var(--hh-border)]">
                  {/* Stylized map background */}
                  <div className="absolute inset-0 hh-grid-bg opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[var(--hh-blue-500)] rounded-full animate-ping opacity-20 scale-150"></div>
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border border-[var(--hh-blue-100)] text-[var(--hh-blue-500)]">
                        <Home size={20} className="fill-[var(--hh-blue-50)]" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 pt-5">
                  <div className="font-semibold text-lg mb-4">Akoka, Lagos, Nigeria</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--hh-ink-600)]">UNILAG Main Gate</span>
                      <span className="font-medium bg-white px-2 py-1 rounded-md border shadow-sm">4 min walk</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--hh-ink-600)]">ShopRite Mall</span>
                      <span className="font-medium bg-white px-2 py-1 rounded-md border shadow-sm">12 min drive</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--hh-ink-600)]">Yaba Tech</span>
                      <span className="font-medium bg-white px-2 py-1 rounded-md border shadow-sm">18 min drive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-[var(--hh-border)] mb-10" />

            {/* Reviews */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-8">
                <Star size={24} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                <h2 className="hh-display text-2xl font-bold">4.8 • 122 reviews</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                {[
                  { name: "Cleanliness", score: 4.9, percent: 98 },
                  { name: "Location", score: 5.0, percent: 100 },
                  { name: "Value", score: 4.6, percent: 92 },
                  { name: "Security", score: 4.9, percent: 98 },
                  { name: "Agent communication", score: 4.7, percent: 94 },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-sm text-[var(--hh-ink-600)] w-36">{stat.name}</span>
                    <div className="flex-1 h-1.5 bg-[var(--hh-ink-100)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--hh-ink-900)] rounded-full" style={{ width: `${stat.percent}%` }}></div>
                    </div>
                    <span className="text-sm font-semibold w-6 text-right">{stat.score}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Adaeze K.",
                    date: "October 2023",
                    text: "Honestly the best hostel I've stayed in around Akoka. The generator actually works 24/7 just like they promised, and the security men are very strict but polite. Highly recommended if you want peace of mind.",
                    avatar: "AK"
                  },
                  {
                    name: "Tunde O.",
                    date: "September 2023",
                    text: "Very close to campus! I can literally wake up 20 mins to my 8am class and still make it. The room was clean when I moved in. Only issue is the Wi-Fi gets a bit slow at night when everyone is on it.",
                    avatar: "TO"
                  },
                  {
                    name: "Funmi A.",
                    date: "July 2023",
                    text: "Mr. Tunde (the agent) was super helpful. The escrow system on HostelHub gave my parents peace of mind to pay. Property exactly as pictured.",
                    avatar: "FA"
                  }
                ].map((review, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border border-[var(--hh-border)]">
                        <AvatarFallback className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] font-bold text-sm">{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{review.name}</div>
                        <div className="text-xs text-[var(--hh-ink-400)]">{review.date}</div>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--hh-ink-700)] leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-8 rounded-xl font-semibold">Show all 122 reviews</Button>
            </div>

          </div>

          {/* Right Sticky Card */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="sticky top-24">
              <Card className="hh-card border-none shadow-xl overflow-hidden rounded-[24px]">
                <CardContent className="p-0">
                  <div className="p-6 pb-5">
                    <div className="flex items-end gap-1 mb-4">
                      <span className="hh-display text-2xl font-bold tracking-tight">₦{price.toLocaleString()}</span>
                      <span className="text-[var(--hh-ink-500)] mb-1 font-medium">/ {pricingMode}</span>
                    </div>

                    <div className="bg-[var(--hh-ink-50)] p-1 rounded-xl flex mb-6 border border-[var(--hh-border)]">
                      <button 
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${pricingMode === "year" ? "bg-white shadow-sm text-[var(--hh-ink-900)] border border-[var(--hh-border)]" : "text-[var(--hh-ink-500)] hover:text-[var(--hh-ink-700)]"}`}
                        onClick={() => setPricingMode("year")}
                      >
                        Annually
                      </button>
                      <button 
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${pricingMode === "semester" ? "bg-white shadow-sm text-[var(--hh-ink-900)] border border-[var(--hh-border)]" : "text-[var(--hh-ink-500)] hover:text-[var(--hh-ink-700)]"}`}
                        onClick={() => setPricingMode("semester")}
                      >
                        Per Semester
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="border border-[var(--hh-border)] rounded-xl overflow-hidden divide-y divide-[var(--hh-border)]">
                        <div className="p-3">
                          <label className="text-[10px] uppercase font-bold text-[var(--hh-ink-500)] mb-1 block tracking-wider">Move-in Date</label>
                          <div className="font-semibold text-sm">Select date</div>
                        </div>
                        <div className="p-3">
                          <label className="text-[10px] uppercase font-bold text-[var(--hh-ink-500)] mb-1 block tracking-wider">Duration</label>
                          <div className="font-semibold text-sm">1 {pricingMode}</div>
                        </div>
                      </div>

                      <div className="space-y-2.5 pt-2">
                        <Button variant="outline" className="w-full h-12 rounded-xl font-bold text-[var(--hh-ink-800)] border-[var(--hh-border)] bg-white hover:bg-[var(--hh-ink-50)]">
                          Book an inspection
                        </Button>
                        <Button className="w-full h-12 rounded-xl font-bold text-white shadow-lg shadow-[var(--hh-green-500)]/20 hover:shadow-[var(--hh-green-500)]/30 border-0" style={{ background: "linear-gradient(135deg, #12b76a, #039855)" }}>
                          <ShieldCheck className="mr-2" size={18} />
                          Reserve with Escrow
                        </Button>
                      </div>

                      <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-[var(--hh-ink-500)] font-medium bg-[var(--hh-green-50)] p-2.5 rounded-lg border border-[var(--hh-green-100)]">
                        <Lock size={12} className="text-[var(--hh-green-600)]" />
                        <span>Money held safely. Released after you inspect & approve.</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-[var(--hh-border)]" />

                  <div className="p-6 bg-[var(--hh-ink-50)]">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                        <AvatarImage src="https://i.pravatar.cc/150?u=tunde" />
                        <AvatarFallback className="bg-[var(--hh-blue-100)] text-[var(--hh-blue-700)] font-bold">TO</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-bold text-[var(--hh-ink-900)] flex items-center gap-1">
                          Mr. Tunde Okafor
                          <BadgeCheck size={14} className="text-[var(--hh-blue-500)] fill-[var(--hh-blue-50)]" />
                        </div>
                        <div className="text-xs text-[var(--hh-ink-500)] font-medium mt-0.5">Verified Agent • 47 listings</div>
                        <div className="flex items-center gap-1 text-xs mt-1 font-medium">
                          <Star size={12} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                          4.9 rating
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-xl h-10 text-[var(--hh-ink-700)] font-semibold bg-white">
                      <MessageSquare size={16} className="mr-2" />
                      Message agent
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-[var(--hh-border)] bg-white shadow-sm">
                <div className="bg-[var(--hh-blue-50)] p-2 rounded-lg text-[var(--hh-blue-600)] shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1 text-[var(--hh-ink-900)]">Inspection Guarantee</div>
                  <div className="text-xs text-[var(--hh-ink-500)] leading-relaxed">
                    If the property doesn't match the photos when you visit, your deposit is fully refunded. No questions asked.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-[var(--hh-border)] my-12" />

        {/* Similar Hostels */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="hh-display text-2xl font-bold">Similar hostels nearby</h2>
            <Link href="/hostelhub"><a className="text-sm font-semibold text-[var(--hh-blue-600)] hover:text-[var(--hh-blue-800)] flex items-center gap-1 transition">See all <ChevronRight size={16}/></a></Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Emerald Heights", price: 450000, rating: 4.6, image: "details-similar_1.jpg", distance: "6 min" },
              { name: "The Haven Lodge", price: 500000, rating: 4.9, image: "details-similar_2.jpg", distance: "3 min" },
              { name: "Sunshine Court", price: 420000, rating: 4.4, image: "details-similar_3.jpg", distance: "8 min" },
            ].map((hostel, i) => (
              <Link href={`/hostelhub/property/${i}`} key={i}>
                <a className="group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-[var(--hh-border)]">
                    <img src={`/images/${hostel.image}`} alt={hostel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[var(--hh-ink-600)] hover:text-[var(--hh-rose-500)] hover:bg-white transition shadow-sm">
                      <Heart size={16} />
                    </button>
                  </div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[var(--hh-ink-900)] text-lg truncate">{hostel.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Star size={14} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                      {hostel.rating}
                    </div>
                  </div>
                  <div className="text-sm text-[var(--hh-ink-500)] mb-2 flex items-center gap-1">
                    <MapPin size={12} /> Akoka • {hostel.distance} walk
                  </div>
                  <div className="font-bold text-[var(--hh-ink-900)]">
                    ₦{hostel.price.toLocaleString()} <span className="font-normal text-[var(--hh-ink-500)] text-sm">/ year</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

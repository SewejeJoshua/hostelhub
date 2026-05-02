import "./_group.css";
import React from "react";
import { 
  Search, MapPin, ShieldCheck, Lock, BadgeCheck, 
  Star, Heart, ChevronDown, CheckCircle2, ChevronRight, 
  ArrowRight, Home, Users, Building, Shield, LifeBuoy,
  MessageCircle, Mail
} from "lucide-react";
import { HostelHubLogo, SCHOOLS } from "./_shared/Brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Landing() {
  return (
    <div className="hh-root min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--hh-border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <HostelHubLogo size={24} />
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[var(--hh-ink-600)]">
            <a href="#find" className="hover:text-[var(--hh-blue-600)] transition-colors">Find Hostel</a>
            <a href="#list" className="hover:text-[var(--hh-blue-600)] transition-colors">List Property</a>
            <a href="#how" className="hover:text-[var(--hh-blue-600)] transition-colors">How it works</a>
            <a href="#about" className="hover:text-[var(--hh-blue-600)] transition-colors">About</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-semibold text-[var(--hh-ink-700)] hover:text-[var(--hh-blue-600)] transition-colors">
              Sign in
            </button>
            <Button 
              className="rounded-full px-6 font-semibold bg-[var(--hh-blue-600)] hover:bg-[var(--hh-blue-700)] text-white shadow-[var(--hh-shadow-sm)]"
              style={{ background: "linear-gradient(135deg, var(--hh-blue-500), var(--hh-blue-700))" }}
            >
              Get started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-28 hh-mesh overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] text-xs font-bold mb-6 border border-[var(--hh-blue-100)]">
                <Shield size={14} className="text-[var(--hh-blue-500)]" />
                <span>100% Scam-Free Booking</span>
              </div>
              
              <h1 className="hh-display text-5xl lg:text-6xl font-extrabold text-[var(--hh-ink-900)] leading-[1.1] mb-6">
                Find Trusted <span className="text-[var(--hh-blue-600)]">Student Housing</span> Before Resumption
              </h1>
              
              <p className="text-lg lg:text-xl text-[var(--hh-ink-600)] mb-10 max-w-2xl mx-auto lg:mx-0">
                Secure your perfect room at verified hostels around campus. Your payment is held safely in escrow until you inspect and approve.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white p-2 rounded-2xl shadow-[var(--hh-shadow-lg)] border border-[var(--hh-border)] flex flex-col md:flex-row gap-2 max-w-3xl mx-auto lg:mx-0">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[var(--hh-ink-50)] rounded-xl">
                  <MapPin size={20} className="text-[var(--hh-ink-400)]" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[var(--hh-ink-500)] uppercase tracking-wider mb-0.5">School / Campus</div>
                    <select className="w-full bg-transparent text-sm font-medium text-[var(--hh-ink-900)] outline-none appearance-none cursor-pointer">
                      <option value="">Select University...</option>
                      {SCHOOLS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="w-px bg-[var(--hh-border)] hidden md:block my-2"></div>
                
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[var(--hh-ink-50)] rounded-xl">
                  <BadgeCheck size={20} className="text-[var(--hh-ink-400)]" />
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[var(--hh-ink-500)] uppercase tracking-wider mb-0.5">Room Type</div>
                    <select className="w-full bg-transparent text-sm font-medium text-[var(--hh-ink-900)] outline-none appearance-none cursor-pointer">
                      <option value="">Any type</option>
                      <option value="1">Single Room</option>
                      <option value="2">2 in a Room</option>
                      <option value="3">3+ in a Room</option>
                    </select>
                  </div>
                </div>
                
                <Button 
                  className="h-auto py-4 px-8 rounded-xl font-bold text-base shadow-[var(--hh-shadow)] w-full md:w-auto"
                  style={{ background: "linear-gradient(135deg, var(--hh-blue-500), var(--hh-blue-700))" }}
                >
                  <Search size={18} className="mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-[var(--hh-ink-500)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--hh-green-500)]" />
                  <span>12,000+ verified rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--hh-green-500)]" />
                  <span>Used by students at 80+ campuses</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--hh-shadow-lg)] border-[8px] border-white z-10 aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full">
                <img 
                  src="/images/landing-hero.jpg" 
                  alt="Modern student room" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Badges */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--hh-green-100)] flex items-center justify-center text-[var(--hh-green-600)]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--hh-ink-900)]">Verified Agent</div>
                    <div className="text-[10px] font-medium text-[var(--hh-ink-500)]">Identity Checked</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--hh-blue-100)] flex items-center justify-center text-[var(--hh-blue-600)]">
                    <Lock size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--hh-ink-900)]">Escrow Protected</div>
                    <div className="text-[10px] font-medium text-[var(--hh-ink-500)]">Funds Secured</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--hh-blue-400)] opacity-20 blur-[80px] rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--hh-green-400)] opacity-20 blur-[80px] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-y border-[var(--hh-border)] bg-white py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--hh-border)]">
            <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0 first:pt-0">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--hh-blue-50)] flex items-center justify-center text-[var(--hh-blue-600)]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--hh-ink-900)] text-lg">Verified Listings</h3>
                <p className="text-sm text-[var(--hh-ink-500)] mt-0.5">Every hostel is physically inspected</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--hh-green-50)] flex items-center justify-center text-[var(--hh-green-600)]">
                <Lock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--hh-ink-900)] text-lg">Escrow-Secured</h3>
                <p className="text-sm text-[var(--hh-ink-500)] mt-0.5">Money is held until you approve</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--hh-blue-50)] flex items-center justify-center text-[var(--hh-blue-600)]">
                <BadgeCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--hh-ink-900)] text-lg">Approved Agents</h3>
                <p className="text-sm text-[var(--hh-ink-500)] mt-0.5">Only trusted agents allowed</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-24 bg-[var(--hh-ink-50)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="hh-display text-3xl md:text-4xl font-bold text-[var(--hh-ink-900)] mb-4">
                How HostelHub Works
              </h2>
              <p className="text-lg text-[var(--hh-ink-600)]">
                We've redesigned the hostel hunting experience to be safe, fast, and completely transparent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[var(--hh-blue-200)] via-[var(--hh-green-300)] to-[var(--hh-blue-200)] z-0 border-dashed border-t-2 border-[var(--hh-blue-300)] opacity-50"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 hh-card p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-xl font-black text-[var(--hh-blue-600)] border-2 border-[var(--hh-blue-100)] mb-6">
                  1
                </div>
                <div className="w-16 h-16 rounded-full bg-[var(--hh-blue-50)] text-[var(--hh-blue-600)] flex items-center justify-center mb-6">
                  <Search size={32} />
                </div>
                <h3 className="font-bold text-xl text-[var(--hh-ink-900)] mb-3">Search & Shortlist</h3>
                <p className="text-[var(--hh-ink-600)] text-sm">
                  Browse thousands of verified hostels around your campus. Filter by price, amenities, and room type.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 hh-card p-8 text-center flex flex-col items-center border-[var(--hh-green-200)] shadow-md">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--hh-green-50)] to-transparent opacity-50 rounded-[var(--hh-radius)] pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--hh-green-500)] text-white shadow-[var(--hh-shadow)] flex items-center justify-center text-xl font-black mb-6">
                  2
                </div>
                <div className="w-16 h-16 rounded-full bg-[var(--hh-green-100)] text-[var(--hh-green-600)] flex items-center justify-center mb-6 relative z-10">
                  <Lock size={32} />
                </div>
                <h3 className="font-bold text-xl text-[var(--hh-ink-900)] mb-3 relative z-10">Pay into Escrow</h3>
                <p className="text-[var(--hh-ink-600)] text-sm relative z-10">
                  Make payment securely through HostelHub. Your money is held in our secure escrow account. The agent isn't paid yet.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 hh-card p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-xl font-black text-[var(--hh-blue-600)] border-2 border-[var(--hh-blue-100)] mb-6">
                  3
                </div>
                <div className="w-16 h-16 rounded-full bg-[var(--hh-blue-50)] text-[var(--hh-blue-600)] flex items-center justify-center mb-6">
                  <Home size={32} />
                </div>
                <h3 className="font-bold text-xl text-[var(--hh-ink-900)] mb-3">Inspect & Move In</h3>
                <p className="text-[var(--hh-ink-600)] text-sm">
                  Visit the property. If it matches the pictures and you're happy, approve the transaction. If not, get a refund.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Hostels */}
        <section id="find" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="hh-display text-3xl md:text-4xl font-bold text-[var(--hh-ink-900)] mb-4">
                  Top Rated Hostels
                </h2>
                <p className="text-lg text-[var(--hh-ink-600)]">
                  Explore our most popular and highly-rated accommodations near major campuses.
                </p>
              </div>
              <Button variant="outline" className="font-semibold text-[var(--hh-blue-600)] border-[var(--hh-blue-200)] hover:bg-[var(--hh-blue-50)]">
                View all listings
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="hh-card overflow-hidden group hover:shadow-[var(--hh-shadow)] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/images/landing-thumb-1.jpg" alt="Hostel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 text-[var(--hh-ink-400)] hover:text-[var(--hh-rose-500)] cursor-pointer transition-colors">
                    <Heart size={18} />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    <Star size={12} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                    4.8
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Badge variant="outline" className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] border-[var(--hh-blue-200)] text-[10px]">Premium</Badge>
                    <Badge variant="outline" className="bg-[var(--hh-green-50)] text-[var(--hh-green-700)] border-[var(--hh-green-200)] text-[10px] flex items-center gap-1">
                      <ShieldCheck size={10} /> Verified
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[var(--hh-ink-900)] text-lg mb-1 truncate">Sunshine View Lodge</h3>
                  <div className="flex items-center gap-1.5 text-sm text-[var(--hh-ink-500)] mb-4">
                    <MapPin size={14} />
                    <span className="truncate">Akoka, UNILAG</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-sm font-semibold text-[var(--hh-ink-900)]">₦350,000</div>
                      <div className="text-[10px] text-[var(--hh-ink-500)] uppercase font-semibold">Per year</div>
                    </div>
                    <Button size="sm" className="bg-[var(--hh-ink-50)] text-[var(--hh-ink-900)] hover:bg-[var(--hh-blue-50)] hover:text-[var(--hh-blue-700)]">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="hh-card overflow-hidden group hover:shadow-[var(--hh-shadow)] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/images/landing-thumb-2.jpg" alt="Hostel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 text-[var(--hh-ink-400)] hover:text-[var(--hh-rose-500)] cursor-pointer transition-colors">
                    <Heart size={18} />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    <Star size={12} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                    4.5
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Badge variant="outline" className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] border-[var(--hh-blue-200)] text-[10px]">Standard</Badge>
                    <Badge variant="outline" className="bg-[var(--hh-green-50)] text-[var(--hh-green-700)] border-[var(--hh-green-200)] text-[10px] flex items-center gap-1">
                      <ShieldCheck size={10} /> Verified
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[var(--hh-ink-900)] text-lg mb-1 truncate">Harmony Heights</h3>
                  <div className="flex items-center gap-1.5 text-sm text-[var(--hh-ink-500)] mb-4">
                    <MapPin size={14} />
                    <span className="truncate">Bodija, UI</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-sm font-semibold text-[var(--hh-ink-900)]">₦220,000</div>
                      <div className="text-[10px] text-[var(--hh-ink-500)] uppercase font-semibold">Per year</div>
                    </div>
                    <Button size="sm" className="bg-[var(--hh-ink-50)] text-[var(--hh-ink-900)] hover:bg-[var(--hh-blue-50)] hover:text-[var(--hh-blue-700)]">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="hh-card overflow-hidden group hover:shadow-[var(--hh-shadow)] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/images/landing-thumb-3.jpg" alt="Hostel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 text-[var(--hh-ink-400)] hover:text-[var(--hh-rose-500)] cursor-pointer transition-colors">
                    <Heart size={18} />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    <Star size={12} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                    4.9
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Badge variant="outline" className="bg-[var(--hh-amber-50)] text-[var(--hh-amber-700)] border-[var(--hh-amber-200)] text-[10px]">Popular</Badge>
                    <Badge variant="outline" className="bg-[var(--hh-green-50)] text-[var(--hh-green-700)] border-[var(--hh-green-200)] text-[10px] flex items-center gap-1">
                      <ShieldCheck size={10} /> Verified
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[var(--hh-ink-900)] text-lg mb-1 truncate">Elite Student Villa</h3>
                  <div className="flex items-center gap-1.5 text-sm text-[var(--hh-ink-500)] mb-4">
                    <MapPin size={14} />
                    <span className="truncate">Samaru, ABU</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-sm font-semibold text-[var(--hh-ink-900)]">₦180,000</div>
                      <div className="text-[10px] text-[var(--hh-ink-500)] uppercase font-semibold">Per year</div>
                    </div>
                    <Button size="sm" className="bg-[var(--hh-ink-50)] text-[var(--hh-ink-900)] hover:bg-[var(--hh-blue-50)] hover:text-[var(--hh-blue-700)]">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="hh-card overflow-hidden group hover:shadow-[var(--hh-shadow)] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="/images/landing-thumb-4.jpg" alt="Hostel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 text-[var(--hh-ink-400)] hover:text-[var(--hh-rose-500)] cursor-pointer transition-colors">
                    <Heart size={18} />
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                    <Star size={12} className="fill-[var(--hh-amber-500)] text-[var(--hh-amber-500)]" />
                    4.7
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Badge variant="outline" className="bg-[var(--hh-blue-50)] text-[var(--hh-blue-700)] border-[var(--hh-blue-200)] text-[10px]">Standard</Badge>
                    <Badge variant="outline" className="bg-[var(--hh-green-50)] text-[var(--hh-green-700)] border-[var(--hh-green-200)] text-[10px] flex items-center gap-1">
                      <ShieldCheck size={10} /> Verified
                    </Badge>
                  </div>
                  <h3 className="font-bold text-[var(--hh-ink-900)] text-lg mb-1 truncate">Oasis Residence</h3>
                  <div className="flex items-center gap-1.5 text-sm text-[var(--hh-ink-500)] mb-4">
                    <MapPin size={14} />
                    <span className="truncate">Ife, OAU</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-sm font-semibold text-[var(--hh-ink-900)]">₦150,000</div>
                      <div className="text-[10px] text-[var(--hh-ink-500)] uppercase font-semibold">Per year</div>
                    </div>
                    <Button size="sm" className="bg-[var(--hh-ink-50)] text-[var(--hh-ink-900)] hover:bg-[var(--hh-blue-50)] hover:text-[var(--hh-blue-700)]">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Campuses */}
        <section className="py-16 bg-[var(--hh-ink-50)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="hh-display text-2xl font-bold text-[var(--hh-ink-900)] mb-8">Popular Campuses</h2>
            <div className="flex flex-wrap gap-4">
              {SCHOOLS.slice(0, 8).map((school, i) => (
                <div key={school} className="bg-white rounded-xl py-3 px-5 border border-[var(--hh-border)] shadow-sm hover:border-[var(--hh-blue-300)] hover:shadow-md transition-all cursor-pointer flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--hh-blue-50)] text-[var(--hh-blue-600)] flex items-center justify-center">
                    <Building size={14} />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--hh-ink-900)] text-sm">{school}</div>
                    <div className="text-xs text-[var(--hh-ink-500)]">{Math.floor(Math.random() * 300 + 100)} listings</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="hh-display text-3xl md:text-4xl font-bold text-[var(--hh-ink-900)] mb-4">
                Trusted by 50,000+ Students
              </h2>
              <p className="text-lg text-[var(--hh-ink-600)]">
                Don't just take our word for it. Hear from students who found their perfect room safely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hh-card p-8 bg-[var(--hh-bg)]">
                <div className="flex gap-1 mb-6 text-[var(--hh-amber-500)]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-[var(--hh-ink-700)] italic mb-8 relative leading-relaxed">
                  <span className="text-4xl text-[var(--hh-blue-200)] absolute -top-4 -left-2">"</span>
                  I almost got scammed in my first year using Twitter agents. HostelHub's escrow system gave me total peace of mind. The room looked exactly like the pictures too.
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-[var(--hh-blue-100)] text-[var(--hh-blue-700)] font-bold">AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-[var(--hh-ink-900)] text-sm">Adaeze D.</div>
                    <div className="text-xs text-[var(--hh-ink-500)]">University of Lagos</div>
                  </div>
                </div>
              </div>
              
              <div className="hh-card p-8 bg-[var(--hh-bg)]">
                <div className="flex gap-1 mb-6 text-[var(--hh-amber-500)]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-[var(--hh-ink-700)] italic mb-8 relative leading-relaxed">
                  <span className="text-4xl text-[var(--hh-blue-200)] absolute -top-4 -left-2">"</span>
                  The search filters are amazing. I needed a single room with a personal bathroom near the engineering faculty, found it in 10 minutes and paid securely.
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-[var(--hh-green-100)] text-[var(--hh-green-700)] font-bold">TF</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-[var(--hh-ink-900)] text-sm">Tunde F.</div>
                    <div className="text-xs text-[var(--hh-ink-500)]">Obafemi Awolowo University</div>
                  </div>
                </div>
              </div>
              
              <div className="hh-card p-8 bg-[var(--hh-bg)]">
                <div className="flex gap-1 mb-6 text-[var(--hh-amber-500)]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-[var(--hh-ink-700)] italic mb-8 relative leading-relaxed">
                  <span className="text-4xl text-[var(--hh-blue-200)] absolute -top-4 -left-2">"</span>
                  When I arrived, the agent tried to change the agreed terms. I rejected it on the app and got my refund instantly. HostelHub actually protects students.
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-[var(--hh-amber-100)] text-[var(--hh-amber-700)] font-bold">CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-[var(--hh-ink-900)] text-sm">Chinonso N.</div>
                    <div className="text-xs text-[var(--hh-ink-500)]">University of Nigeria, Nsukka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent CTA */}
        <section id="list" className="py-16 px-6">
          <div className="max-w-7xl mx-auto hh-card overflow-hidden bg-[var(--hh-blue-900)] border-none text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--hh-blue-600)] opacity-50 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 px-8 py-16 md:py-20 md:px-16 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="hh-display text-3xl md:text-5xl font-bold mb-4">Are you a Property Agent?</h2>
                <p className="text-[var(--hh-blue-100)] text-lg mb-8 max-w-xl">
                  Join our network of verified agents. Get access to thousands of ready-to-pay students, manage your listings easily, and build trust with our verified badge.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-white text-[var(--hh-blue-900)] hover:bg-[var(--hh-blue-50)] h-12 px-8 text-base font-bold rounded-xl">
                    Become a Verified Agent
                  </Button>
                  <Button variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 h-12 px-8 text-base rounded-xl">
                    Learn more
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 max-w-sm">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--hh-green-500)]/20 text-[var(--hh-green-300)] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="text-sm font-medium">Access to 50,000+ students</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--hh-green-500)]/20 text-[var(--hh-green-300)] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="text-sm font-medium">Guaranteed secure payments</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--hh-green-500)]/20 text-[var(--hh-green-300)] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="text-sm font-medium">Professional dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="hh-display text-3xl font-bold text-[var(--hh-ink-900)] mb-4">Frequently Asked Questions</h2>
              <p className="text-[var(--hh-ink-600)]">Everything you need to know about booking with HostelHub.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-[var(--hh-border)]">
                <AccordionTrigger className="text-left font-bold text-[var(--hh-ink-900)] text-lg py-5 hover:text-[var(--hh-blue-600)]">
                  How does the escrow payment work?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--hh-ink-600)] text-base leading-relaxed pb-6">
                  When you pay for a hostel, your money doesn't go directly to the agent. HostelHub holds it in a secure escrow account. The agent only receives the money after you physically inspect the room and tap "Approve" on your dashboard.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b-[var(--hh-border)]">
                <AccordionTrigger className="text-left font-bold text-[var(--hh-ink-900)] text-lg py-5 hover:text-[var(--hh-blue-600)]">
                  What if the room is different from the pictures?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--hh-ink-600)] text-base leading-relaxed pb-6">
                  If you arrive and the room doesn't match the listing or the agreed terms change, you can reject the property on your app. We will investigate immediately and process a full refund to your wallet or bank account within 24 hours.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b-[var(--hh-border)]">
                <AccordionTrigger className="text-left font-bold text-[var(--hh-ink-900)] text-lg py-5 hover:text-[var(--hh-blue-600)]">
                  Are the agents really verified?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--hh-ink-600)] text-base leading-relaxed pb-6">
                  Yes. Every agent on our platform goes through a strict KYC process. We verify their government ID, physical office address, and track record. Agents caught trying to defraud students are permanently banned and reported to authorities.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b-[var(--hh-border)]">
                <AccordionTrigger className="text-left font-bold text-[var(--hh-ink-900)] text-lg py-5 hover:text-[var(--hh-blue-600)]">
                  Does HostelHub charge extra fees?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--hh-ink-600)] text-base leading-relaxed pb-6">
                  We charge a small service fee (usually 3-5%) on successful bookings to cover payment processing, escrow management, and agent verification. This is clearly shown before you pay. There are no hidden charges.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-b-[var(--hh-border)]">
                <AccordionTrigger className="text-left font-bold text-[var(--hh-ink-900)] text-lg py-5 hover:text-[var(--hh-blue-600)]">
                  How soon can I move in after payment?
                </AccordionTrigger>
                <AccordionContent className="text-[var(--hh-ink-600)] text-base leading-relaxed pb-6">
                  You can move in immediately after you've inspected the property and approved the transaction. We recommend contacting the agent through the app as soon as your payment is secured to arrange the inspection time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--hh-blue-950)] pt-20 pb-10 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-2">
              <HostelHubLogo size={28} tone="light" />
              <p className="mt-6 text-[var(--hh-blue-200)] text-sm max-w-sm leading-relaxed">
                The safest way for university students in Africa to find, verify, and pay for off-campus accommodation. Scam-free, hassle-free.
              </p>
              <div className="mt-8 flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--hh-blue-600)] cursor-pointer transition-colors">
                  <MessageCircle size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--hh-blue-600)] cursor-pointer transition-colors">
                  <Mail size={18} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-5">Students</h4>
              <ul className="space-y-3 text-sm text-[var(--hh-blue-200)]">
                <li><a href="#" className="hover:text-white transition-colors">Find a Hostel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How Escrow Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Safety Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Ambassadors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-5">Agents</h4>
              <ul className="space-y-3 text-sm text-[var(--hh-blue-200)]">
                <li><a href="#" className="hover:text-white transition-colors">List your Property</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agent Verification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agent Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-5">Company</h4>
              <ul className="space-y-3 text-sm text-[var(--hh-blue-200)]">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[var(--hh-blue-300)] text-sm">
              &copy; {new Date().getFullYear()} HostelHub Technologies. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-1.5 outline-none">
                <option value="ng">🇳🇬 Nigeria (NGN)</option>
                <option value="gh">🇬🇭 Ghana (GHS)</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

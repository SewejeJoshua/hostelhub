import "./_group.css";
import { ReactNode, useState } from "react";
import { AppShell, STUDENT_NAV } from "./_shared/AppShell";
import { 
  MapPin, 
  Star, 
  Heart, 
  Search, 
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  Map,
  ShieldCheck,
  Wifi,
  Zap,
  Droplets,
  Shield,
  Sofa,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";

// Mock data
const NEIGHBORHOODS = ["All Areas", "Akoka", "Yaba", "Bariga", "Abule Oja", "Onike"];
const ROOM_TYPES = ["Any", "Single", "Shared", "Self-contain", "Apartment"];
const AMENITIES = [
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "gen", label: "Generator", icon: Zap },
  { id: "water", label: "Water", icon: Droplets },
  { id: "security", label: "Security", icon: Shield },
  { id: "furnished", label: "Furnished", icon: Sofa },
];

const LISTINGS = [
  {
    id: 1,
    name: "Crystal Lodge",
    image: "/images/listings-thumb-1.jpg",
    distance: "4 min walk to UNILAG main gate",
    type: "Self-contain",
    beds: "1 Bed",
    priceYear: "₦650,000",
    priceSem: "₦350,000",
    rating: 4.8,
    reviews: 124,
    status: "Available",
    statusColor: "green",
    topRated: true,
  },
  {
    id: 2,
    name: "Eden Heights",
    image: "/images/listings-thumb-2.jpg",
    distance: "10 min walk to Campus",
    type: "Shared",
    beds: "2 Beds",
    priceYear: "₦400,000",
    priceSem: "₦220,000",
    rating: 4.5,
    reviews: 89,
    status: "3 rooms left",
    statusColor: "amber",
    topRated: false,
  },
  {
    id: 3,
    name: "Sunrise Suites",
    image: "/images/listings-thumb-3.jpg",
    distance: "15 min bus to UNILAG",
    type: "Apartment",
    beds: "3 Beds",
    priceYear: "₦1,200,000",
    priceSem: "₦650,000",
    rating: 4.9,
    reviews: 210,
    status: "Available",
    statusColor: "green",
    topRated: true,
  },
  {
    id: 4,
    name: "The Haven",
    image: "/images/listings-thumb-4.jpg",
    distance: "8 min walk to Campus",
    type: "Single",
    beds: "1 Bed",
    priceYear: "₦800,000",
    priceSem: "₦420,000",
    rating: 4.6,
    reviews: 56,
    status: "1 room left",
    statusColor: "rose",
    topRated: false,
  },
  {
    id: 5,
    name: "Oasis Hostels",
    image: "/images/listings-thumb-5.jpg",
    distance: "5 min walk to UNILAG main gate",
    type: "Shared",
    beds: "4 Beds",
    priceYear: "₦300,000",
    priceSem: "₦160,000",
    rating: 4.2,
    reviews: 45,
    status: "Available",
    statusColor: "green",
    topRated: false,
  },
  {
    id: 6,
    name: "Bluebird Apartments",
    image: "/images/listings-thumb-6.jpg",
    distance: "12 min bus to UNILAG",
    type: "Self-contain",
    beds: "1 Bed",
    priceYear: "₦550,000",
    priceSem: "₦300,000",
    rating: 4.7,
    reviews: 178,
    status: "2 rooms left",
    statusColor: "amber",
    topRated: false,
  },
  {
    id: 7,
    name: "Palmview Lodge",
    image: "/images/listings-thumb-1.jpg",
    distance: "3 min walk to UNILAG main gate",
    type: "Single",
    beds: "1 Bed",
    priceYear: "₦900,000",
    priceSem: "₦480,000",
    rating: 4.9,
    reviews: 312,
    status: "Available",
    statusColor: "green",
    topRated: true,
  },
  {
    id: 8,
    name: "Campus Villa",
    image: "/images/listings-thumb-2.jpg",
    distance: "20 min bus to UNILAG",
    type: "Shared",
    beds: "2 Beds",
    priceYear: "₦350,000",
    priceSem: "₦180,000",
    rating: 4.1,
    reviews: 34,
    status: "Available",
    statusColor: "green",
    topRated: false,
  },
  {
    id: 9,
    name: "Elite Quarters",
    image: "/images/listings-thumb-4.jpg",
    distance: "7 min walk to Campus",
    type: "Apartment",
    beds: "2 Beds",
    priceYear: "₦1,000,000",
    priceSem: "₦550,000",
    rating: 4.8,
    reviews: 92,
    status: "4 rooms left",
    statusColor: "amber",
    topRated: false,
  }
];

export function Listings() {
  const [activeNav, setActiveNav] = useState("Search hostels");
  const [activeArea, setActiveArea] = useState("All Areas");
  const [activeRoom, setActiveRoom] = useState("Any");
  const [activeAmenities, setActiveAmenities] = useState<string[]>(["wifi", "security"]);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const toggleAmenity = (id: string) => {
    setActiveAmenities(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const nav = STUDENT_NAV.map(item => ({
    ...item,
    active: item.label === activeNav
  }));

  return (
    <AppShell
      nav={nav}
      user={{ name: "Adaeze Okafor", sub: "University of Lagos" }}
      role="Student"
      pageTitle="Hostels near University of Lagos"
      pageSubtitle="284 verified listings · Akoka, Yaba, Bariga"
    >
      <div className="flex flex-col gap-6 -mt-2">
        {/* Filter Bar */}
        <div className="hh-card p-4 rounded-2xl flex flex-col gap-4 sticky top-4 z-10">
          <div className="flex items-center gap-4 overflow-x-auto hh-no-scrollbar pb-1">
            <div className="flex items-center gap-2 pr-4 border-r border-[var(--hh-border)] shrink-0">
              <div className="h-9 px-3 rounded-lg flex items-center gap-2 bg-[var(--hh-ink-50)] border border-[var(--hh-border)] cursor-pointer hover:bg-[var(--hh-ink-100)] transition">
                <span className="text-sm font-medium text-[var(--hh-ink-700)]">University of Lagos</span>
                <ChevronDown size={14} className="text-[var(--hh-ink-400)]" />
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {NEIGHBORHOODS.map(area => (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={`h-9 px-4 rounded-full text-sm font-medium transition ${
                    activeArea === area 
                      ? "bg-[var(--hh-blue-500)] text-white shadow-sm" 
                      : "bg-[var(--hh-ink-50)] text-[var(--hh-ink-700)] hover:bg-[var(--hh-ink-100)]"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
            
            <div className="w-px h-6 bg-[var(--hh-border)] mx-2 shrink-0" />
            
            <button className="h-9 px-3 rounded-lg flex items-center gap-2 bg-white border border-[var(--hh-border)] text-sm font-medium text-[var(--hh-ink-700)] hover:bg-[var(--hh-ink-50)] transition shrink-0 shadow-sm">
              <SlidersHorizontal size={14} />
              More Filters
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--hh-border)]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-[var(--hh-ink-400)] uppercase tracking-wider mr-2">Room Type</span>
              {ROOM_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveRoom(type)}
                  className={`h-8 px-3 rounded-lg text-sm font-medium transition border ${
                    activeRoom === type 
                      ? "bg-[var(--hh-blue-50)] border-[var(--hh-blue-200)] text-[var(--hh-blue-700)]" 
                      : "bg-white border-[var(--hh-border)] text-[var(--hh-ink-600)] hover:bg-[var(--hh-ink-50)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-[var(--hh-ink-400)] uppercase tracking-wider mr-2">Amenities</span>
              {AMENITIES.map(amenity => {
                const isActive = activeAmenities.includes(amenity.id);
                const Icon = amenity.icon;
                return (
                  <button
                    key={amenity.id}
                    onClick={() => toggleAmenity(amenity.id)}
                    className={`h-8 px-3 rounded-lg text-sm font-medium transition flex items-center gap-1.5 border ${
                      isActive 
                        ? "bg-[var(--hh-green-50)] border-[var(--hh-green-300)] text-[var(--hh-green-700)]" 
                        : "bg-white border-[var(--hh-border)] text-[var(--hh-ink-600)] hover:bg-[var(--hh-ink-50)]"
                    }`}
                  >
                    <Icon size={12} className={isActive ? "text-[var(--hh-green-500)]" : "text-[var(--hh-ink-400)]"} />
                    {amenity.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3">
            <h2 className="hh-display text-xl font-bold">284 hostels found</h2>
            <div className="h-6 w-px bg-[var(--hh-border)]" />
            <div className="flex items-center bg-[var(--hh-ink-50)] p-1 rounded-xl border border-[var(--hh-border)]">
              <button 
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  viewMode === "grid" ? "bg-white text-[var(--hh-ink-900)] shadow-sm" : "text-[var(--hh-ink-500)] hover:text-[var(--hh-ink-700)]"
                }`}
              >
                <LayoutGrid size={14} /> Grid
              </button>
              <button 
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  viewMode === "map" ? "bg-white text-[var(--hh-ink-900)] shadow-sm" : "text-[var(--hh-ink-500)] hover:text-[var(--hh-ink-700)]"
                }`}
              >
                <Map size={14} /> Map
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--hh-ink-500)]">Sort by:</span>
            <div className="h-9 px-3 rounded-lg flex items-center gap-2 bg-white border border-[var(--hh-border)] cursor-pointer hover:bg-[var(--hh-ink-50)] transition shadow-sm">
              <span className="text-sm font-medium text-[var(--hh-ink-900)]">Recommended</span>
              <ChevronDown size={14} className="text-[var(--hh-ink-400)]" />
            </div>
          </div>
        </div>

        {/* Layout Container */}
        <div className="flex items-start gap-6">
          {/* Main Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LISTINGS.map(listing => (
              <div key={listing.id} className="hh-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--hh-ink-100)]">
                  <img 
                    src={listing.image} 
                    alt={listing.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-[var(--hh-green-700)] shadow-sm border border-white/50">
                    <ShieldCheck size={12} className="text-[var(--hh-green-500)]" />
                    Verified
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--hh-ink-400)] hover:text-rose-500 hover:bg-white transition shadow-sm border border-white/50">
                    <Heart size={16} />
                  </button>
                  {listing.topRated && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-[var(--hh-blue-500)] text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                      <Sparkles size={12} />
                      Top Rated
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="hh-display text-lg font-bold text-[var(--hh-ink-900)] line-clamp-1">{listing.name}</h3>
                    <div className="flex items-center gap-1 bg-[var(--hh-ink-50)] px-1.5 py-0.5 rounded text-xs font-bold">
                      <Star size={12} className="text-[var(--hh-amber-500)] fill-[var(--hh-amber-500)]" />
                      {listing.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-sm text-[var(--hh-ink-500)] mb-3">
                    <MapPin size={14} className="text-[var(--hh-ink-400)] shrink-0" />
                    <span className="truncate">{listing.distance}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--hh-ink-50)] text-[var(--hh-ink-600)] border border-[var(--hh-border)]">
                      {listing.type}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--hh-ink-50)] text-[var(--hh-ink-600)] border border-[var(--hh-border)] flex items-center gap-1">
                      <BedDouble size={12} className="text-[var(--hh-ink-400)]" />
                      {listing.beds}
                    </span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-[var(--hh-border)] flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-[var(--hh-ink-900)]">{listing.priceYear} <span className="text-xs font-normal text-[var(--hh-ink-500)]">/yr</span></div>
                      <div className="text-xs text-[var(--hh-ink-400)] font-medium">{listing.priceSem} /sem</div>
                    </div>
                    <button className="h-9 px-4 rounded-xl text-sm font-semibold bg-white border border-[var(--hh-border)] text-[var(--hh-ink-900)] group-hover:bg-[var(--hh-blue-50)] group-hover:text-[var(--hh-blue-700)] group-hover:border-[var(--hh-blue-200)] transition shadow-sm">
                      View details
                    </button>
                  </div>
                </div>
                
                {/* Status Pill Indicator */}
                <div className={`h-1 w-full ${
                  listing.statusColor === 'green' ? 'bg-[var(--hh-green-500)]' : 
                  listing.statusColor === 'amber' ? 'bg-[var(--hh-amber-500)]' : 'bg-rose-500'
                }`} />
              </div>
            ))}
          </div>
          
          {/* Map Preview Sidebar */}
          <div className="hidden xl:block w-80 shrink-0 sticky top-[200px]">
            <div className="hh-card rounded-2xl overflow-hidden shadow-sm flex flex-col h-[400px]">
              <div className="relative flex-1 bg-[var(--hh-ink-50)] flex items-center justify-center overflow-hidden">
                {/* Stylized CSS Map Background */}
                <div className="absolute inset-0 hh-grid-bg opacity-50" />
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(59,99,240,0.05) 0%, transparent 70%)'
                }} />
                
                {/* Map Pins */}
                <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0ms' }}>
                  <div className="w-4 h-4 rounded-full bg-[var(--hh-blue-500)] shadow-[0_0_0_4px_rgba(59,99,240,0.2)] border-2 border-white" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[var(--hh-ink-900)] text-white px-3 py-1.5 rounded-lg shadow-lg font-bold text-sm relative">
                    ₦650k
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[var(--hh-ink-900)]" />
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                  <div className="w-3 h-3 rounded-full bg-[var(--hh-blue-400)] shadow-[0_0_0_4px_rgba(59,99,240,0.2)] border-2 border-white" />
                </div>
                <div className="absolute top-1/3 right-1/3">
                  <div className="w-3 h-3 rounded-full bg-[var(--hh-blue-400)] shadow-[0_0_0_4px_rgba(59,99,240,0.2)] border-2 border-white" />
                </div>
                
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 h-10 px-4 rounded-xl bg-white/90 backdrop-blur-md border border-[var(--hh-border)] text-sm font-bold shadow-md flex items-center gap-2 text-[var(--hh-ink-900)] hover:bg-white transition whitespace-nowrap">
                  <Map size={16} className="text-[var(--hh-blue-500)]" />
                  Explore on Map
                </button>
              </div>
              <div className="p-4 bg-white border-t border-[var(--hh-border)]">
                <h4 className="font-bold text-[var(--hh-ink-900)] mb-1">University of Lagos Area</h4>
                <p className="text-xs text-[var(--hh-ink-500)]">Showing 284 hostels in Akoka, Yaba, and surroundings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between py-8 mt-4 border-t border-[var(--hh-border)]">
          <p className="text-sm text-[var(--hh-ink-500)]">Showing <span className="font-bold text-[var(--hh-ink-900)]">1-9</span> of 284 listings</p>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--hh-border)] text-[var(--hh-ink-400)] hover:text-[var(--hh-ink-900)] hover:bg-[var(--hh-ink-50)] transition disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold bg-[var(--hh-blue-500)] text-white shadow-sm">1</button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium hover:bg-[var(--hh-ink-50)] transition">2</button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium hover:bg-[var(--hh-ink-50)] transition">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-[var(--hh-ink-400)]">...</span>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium hover:bg-[var(--hh-ink-50)] transition">32</button>
            </div>
            <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--hh-border)] text-[var(--hh-ink-700)] hover:bg-[var(--hh-ink-50)] transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </AppShell>
  );
}

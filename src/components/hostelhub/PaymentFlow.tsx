import "./_group.css";
import React, { useState } from "react";
import {
  Lock,
  ShieldCheck,
  Building2,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  Building,
  Smartphone,
  Info,
  ChevronDown,
  ArrowLeft,
  Calendar,
  MapPin
} from "lucide-react";
import { HostelHubLogo } from "./_shared/Brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export function PaymentFlow() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="hh-root min-h-screen bg-[var(--hh-bg)] flex flex-col">
      {/* Header */}
      <header className="h-20 px-6 md:px-10 flex items-center justify-between bg-white border-b border-[var(--hh-border)] sticky top-0 z-10">
        <HostelHubLogo size={28} />
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--hh-green-50)] text-[var(--hh-green-700)] border border-[var(--hh-green-100)] text-xs font-semibold">
          <Lock size={14} className="text-[var(--hh-green-600)]" />
          <span>Secure escrow checkout · 256-bit encrypted</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: How Escrow Protects You */}
        <div className="flex-1 lg:w-[55%]">
          <h1 className="hh-display text-4xl font-extrabold tracking-tight text-[var(--hh-ink-900)] mb-3">
            You're paying through<br />HostelHub Escrow
          </h1>
          <p className="text-[var(--hh-ink-600)] text-lg mb-10 leading-relaxed max-w-lg">
            Your money stays with us until you move in. The agent doesn't get paid until you confirm everything is exactly as promised.
          </p>

          {/* Stepper */}
          <div className="relative mb-12">
            <div className="absolute left-6 top-6 bottom-8 w-0.5 bg-[var(--hh-ink-100)]" />
            
            <div className="space-y-8 relative z-10">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--hh-blue-500)] text-white flex items-center justify-center shadow-lg shadow-[var(--hh-blue-500)]/30 shrink-0">
                  <CreditCard size={20} />
                </div>
                <div className="pt-1.5">
                  <h3 className="font-bold text-lg text-[var(--hh-ink-900)]">You pay HostelHub</h3>
                  <p className="text-[var(--hh-ink-500)] mt-1">Make a secure payment via card or bank transfer.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[var(--hh-border)] text-[var(--hh-ink-300)] flex items-center justify-center shrink-0">
                  <Lock size={20} />
                </div>
                <div className="pt-1.5">
                  <h3 className="font-bold text-lg text-[var(--hh-ink-400)]">We hold your money safely</h3>
                  <p className="text-[var(--hh-ink-400)] mt-1 text-sm">Your funds are locked in a regulated escrow account.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[var(--hh-border)] text-[var(--hh-ink-300)] flex items-center justify-center shrink-0">
                  <Building size={20} />
                </div>
                <div className="pt-1.5">
                  <h3 className="font-bold text-lg text-[var(--hh-ink-400)]">You inspect & approve</h3>
                  <p className="text-[var(--hh-ink-400)] mt-1 text-sm">Visit the property on your scheduled date.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[var(--hh-border)] text-[var(--hh-ink-300)] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div className="pt-1.5">
                  <h3 className="font-bold text-lg text-[var(--hh-ink-400)]">We release the payment</h3>
                  <p className="text-[var(--hh-ink-400)] mt-1 text-sm">Or give you a 100% refund if it doesn't match.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reassurance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="hh-card p-4 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--hh-green-50)] text-[var(--hh-green-600)] flex items-center justify-center">
                <ShieldCheck size={16} />
              </div>
              <h4 className="font-semibold text-[var(--hh-ink-900)] text-sm">100% Refund</h4>
              <p className="text-xs text-[var(--hh-ink-500)] leading-snug">If rejected during inspection</p>
            </div>
            <div className="hh-card p-4 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--hh-blue-50)] text-[var(--hh-blue-600)] flex items-center justify-center">
                <CheckCircle2 size={16} />
              </div>
              <h4 className="font-semibold text-[var(--hh-ink-900)] text-sm">Verified Agent</h4>
              <p className="text-xs text-[var(--hh-ink-500)] leading-snug">Identity and history checked</p>
            </div>
            <div className="hh-card p-4 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--hh-amber-500)]/10 text-[var(--hh-amber-500)] flex items-center justify-center">
                <AlertCircle size={16} />
              </div>
              <h4 className="font-semibold text-[var(--hh-ink-900)] text-sm">24/7 Support</h4>
              <p className="text-xs text-[var(--hh-ink-500)] leading-snug">Dedicated dispute resolution</p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--hh-ink-900)] mb-4">Common questions</h3>
            <div className="space-y-3">
              {[
                {
                  q: "What if the hostel doesn't match the photos?",
                  a: "You simply reject it on the app during your inspection window. Your payment is immediately queued for a 100% refund—no arguments with the agent needed."
                },
                {
                  q: "When is the agent paid?",
                  a: "The agent only receives the funds 24 hours after you tap 'Approve' in your HostelHub app."
                },
                {
                  q: "How long is the inspection window?",
                  a: "You have 48 hours after your scheduled move-in date to inspect the property and approve or reject it."
                }
              ].map((faq, i) => (
                <div key={i} className="hh-card overflow-hidden">
                  <button
                    className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-[var(--hh-ink-900)] text-sm">{faq.q}</span>
                    <ChevronDown size={18} className={`text-[var(--hh-ink-400)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-[var(--hh-ink-600)] text-sm leading-relaxed border-t border-[var(--hh-border)] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Payment Card */}
        <div className="lg:w-[45%]">
          <div className="sticky top-28">
            <div className="hh-card shadow-[var(--hh-shadow-lg)] border-[var(--hh-border)] overflow-hidden">
              
              {/* Property Summary */}
              <div className="p-6 bg-[var(--hh-ink-50)] border-b border-[var(--hh-border)]">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--hh-blue-100)] to-[var(--hh-blue-200)] flex items-center justify-center shrink-0 border border-[var(--hh-blue-300)]/30">
                    <Building2 size={28} className="text-[var(--hh-blue-600)]" />
                  </div>
                  <div>
                    <h2 className="hh-display font-bold text-xl text-[var(--hh-ink-900)]">Crystal Lodge</h2>
                    <div className="flex items-center gap-1.5 text-[var(--hh-ink-500)] text-sm mt-0.5">
                      <MapPin size={14} />
                      <span>UNILAG · Akoka</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs font-medium text-[var(--hh-ink-600)]">
                      <span className="bg-white px-2 py-1 rounded-md border border-[var(--hh-border)]">Single room</span>
                      <span className="bg-white px-2 py-1 rounded-md border border-[var(--hh-border)]">12-month lease</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 flex items-center justify-between p-3 bg-white rounded-lg border border-[var(--hh-border)] text-sm">
                  <div className="flex items-center gap-2 text-[var(--hh-ink-600)]">
                    <Calendar size={16} className="text-[var(--hh-blue-500)]" />
                    <span>Inspection date</span>
                  </div>
                  <span className="font-semibold text-[var(--hh-ink-900)]">Sat 15 May</span>
                </div>
              </div>

              <div className="p-6">
                {/* Pricing Breakdown */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-[var(--hh-ink-600)]">
                    <span>Annual rent</span>
                    <span className="font-semibold text-[var(--hh-ink-900)]">₦480,000</span>
                  </div>
                  <div className="flex justify-between text-[var(--hh-ink-600)]">
                    <span>HostelHub service fee (1.5%)</span>
                    <span className="font-semibold text-[var(--hh-ink-900)]">₦7,200</span>
                  </div>
                  <div className="flex justify-between text-[var(--hh-green-600)] font-medium">
                    <span>Inspection guarantee</span>
                    <span>₦0 (Free)</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--hh-ink-900)] font-bold">Total in escrow</span>
                    <span className="text-3xl font-extrabold text-[var(--hh-ink-900)] tracking-tight">₦487,200</span>
                  </div>
                </div>

                {/* Reassurance Box */}
                <div className="bg-[var(--hh-green-50)] border border-[var(--hh-green-100)] rounded-xl p-4 mb-8 flex gap-3">
                  <ShieldCheck size={20} className="text-[var(--hh-green-600)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--hh-green-700)] leading-relaxed">
                    Your <strong>₦487,200</strong> will be held safely. The agent will only be paid after you confirm you've inspected and approved Crystal Lodge.
                  </p>
                </div>

                {/* Payment Tabs */}
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="w-full grid grid-cols-4 mb-6 bg-[var(--hh-ink-50)] p-1 rounded-xl h-auto">
                    <TabsTrigger value="card" className="py-2.5 text-xs font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Card</TabsTrigger>
                    <TabsTrigger value="bank" className="py-2.5 text-xs font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Transfer</TabsTrigger>
                    <TabsTrigger value="ussd" className="py-2.5 text-xs font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">USSD</TabsTrigger>
                    <TabsTrigger value="paystack" className="py-2.5 text-xs font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Paystack</TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-4 mt-0 outline-none">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-sm font-semibold text-[var(--hh-ink-700)]">Card number</Label>
                      <div className="relative">
                        <Input 
                          id="cardNumber" 
                          placeholder="0000 0000 0000 0000" 
                          className="pl-10 h-12 text-lg font-medium border-[var(--hh-ink-200)] focus-visible:ring-[var(--hh-blue-500)] rounded-xl shadow-sm"
                        />
                        <CreditCard className="absolute left-3.5 top-3.5 text-[var(--hh-ink-400)]" size={20} />
                        <div className="absolute right-3.5 top-3.5 flex gap-1">
                          <div className="w-8 h-5 bg-[var(--hh-ink-100)] rounded flex items-center justify-center text-[8px] font-bold text-[var(--hh-ink-500)]">VISA</div>
                          <div className="w-8 h-5 bg-[var(--hh-ink-100)] rounded flex items-center justify-center text-[8px] font-bold text-[var(--hh-ink-500)]">MC</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-sm font-semibold text-[var(--hh-ink-700)]">Expiry date</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY" 
                          className="h-12 text-lg font-medium border-[var(--hh-ink-200)] focus-visible:ring-[var(--hh-blue-500)] rounded-xl shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-sm font-semibold text-[var(--hh-ink-700)]">CVV</Label>
                        <div className="relative">
                          <Input 
                            id="cvv" 
                            placeholder="123" 
                            className="h-12 text-lg font-medium border-[var(--hh-ink-200)] focus-visible:ring-[var(--hh-blue-500)] rounded-xl shadow-sm"
                          />
                          <Info className="absolute right-3.5 top-3.5 text-[var(--hh-ink-300)]" size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName" className="text-sm font-semibold text-[var(--hh-ink-700)]">Cardholder name</Label>
                      <Input 
                        id="cardName" 
                        placeholder="John Doe" 
                        className="h-12 text-base font-medium border-[var(--hh-ink-200)] focus-visible:ring-[var(--hh-blue-500)] rounded-xl shadow-sm"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Label htmlFor="saveCard" className="text-sm font-medium text-[var(--hh-ink-700)] cursor-pointer">
                        Save card for future bookings
                      </Label>
                      <Switch id="saveCard" />
                    </div>
                  </TabsContent>
                  
                  {/* Other tabs empty placeholders for mockup */}
                  <TabsContent value="bank" className="p-8 text-center border-2 border-dashed border-[var(--hh-border)] rounded-xl mt-0 outline-none">
                    <p className="text-[var(--hh-ink-500)] text-sm">Bank transfer details will appear here.</p>
                  </TabsContent>
                  <TabsContent value="ussd" className="p-8 text-center border-2 border-dashed border-[var(--hh-border)] rounded-xl mt-0 outline-none">
                    <p className="text-[var(--hh-ink-500)] text-sm">USSD codes will appear here.</p>
                  </TabsContent>
                  <TabsContent value="paystack" className="p-8 text-center border-2 border-dashed border-[var(--hh-border)] rounded-xl mt-0 outline-none">
                    <p className="text-[var(--hh-ink-500)] text-sm">Paystack checkout will open.</p>
                  </TabsContent>
                </Tabs>

                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="w-full h-14 rounded-xl text-lg font-bold shadow-[0_8px_18px_-10px_rgba(31,55,171,0.55)] transition-all hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #3b63f0, #1f37ab)", color: "white" }}
                  >
                    <ShieldCheck size={22} className="mr-2" />
                    Pay ₦487,200 into escrow
                  </Button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-1.5 text-xs font-medium text-[var(--hh-ink-400)]">
                  <Lock size={12} />
                  <span>Powered by Paystack · PCI-DSS compliant</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--hh-ink-500)] hover:text-[var(--hh-ink-900)] transition-colors">
                <ArrowLeft size={16} />
                Cancel & go back
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  Palette,
  KeyRound,
  CheckCircle,
  Home,
  User,
  Briefcase,
  ShoppingBag,
  Scissors,
  UtensilsCrossed,
  Wrench,
  Dumbbell,
  Phone,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function NeluweHome() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const slotsLeft = 27;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    alert(
      "✅ Thank you! Your Free Homepage Mockup request has been received.\n\nWe'll deliver it within 48 hours.",
    );
    setIsSubmitting(false);
    e.target.reset();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Scarcity Bar */}
      <div className="bg-yellow-400 text-zinc-950 py-3 text-center font-bold text-sm tracking-widest relative overflow-hidden">
        <div className="absolute inset-0 from-transparent via-white/30 to-transparent animate-shimmer" />
        🔥 ONLY {slotsLeft} FOUNDER SLOTS REMAINING AT €599 — 25% OFF
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-3">
            {/* <div className="w-10 h-10 md:w-11 md:h-11 bg-yellow-400 rounded-full flex items-center justify-center text-3xl font-black text-zinc-950">
              Y
            </div> */}
            <span className="text-3xl font-bold tracking-tighter">
              Yuro<span className="text-yellow-400">Design</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-10 text-sm font-medium">
            <Link
              href="#how"
              className="hover:text-yellow-400 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#services"
              className="hover:text-yellow-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="hover:text-yellow-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="hidden md:block px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-semibold rounded-full transition-all"
          >
            Claim Free Mockup
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-yellow-400"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-zinc-800 py-6 px-5 space-y-6">
            <Link
              href="#how"
              className="block text-lg py-2 hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="#services"
              className="block text-lg py-2 hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="block text-lg py-2 hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="block text-lg py-2 hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="#contact"
              className="block w-full text-center py-4 bg-yellow-400 text-zinc-950 font-semibold rounded-2xl mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claim Free Mockup
            </Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-yellow-400/30 text-yellow-400 px-5 py-2.5 rounded-3xl mb-8 text-sm">
            EUROPE &amp; USA • 2026 LAUNCH
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6">
            Your Premium Website.
            <br />
            <span className="text-yellow-400">No Upfront Cost.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We build high-performance websites for SMBs. We design your custom
            homepage <span className="text-white">for FREE</span>. Love it? Pay
            only €599 after the full site is live.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="#contact"
              className="px-10 py-6 md:py-7 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-semibold text-xl md:text-2xl rounded-3xl transition-all hover:scale-105 w-full md:w-auto"
            >
              Claim My Free Homepage Mockup →
            </Link>

            <div className="text-left mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle size={20} /> Zero Risk. Zero Obligations.
              </div>
              <p className="text-zinc-500 text-xs mt-1">
                Takes only few seconds to apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section id="services" className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Who We Help
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">
            Tailored websites for ambitious small businesses and self-employed
            professionals
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
            {[
              { title: "Restaurants & Cafés", icon: UtensilsCrossed },
              { title: "Barbers & Salons", icon: Scissors },
              { title: "Local Shops & Boutiques", icon: ShoppingBag },
              { title: "Tradies & Service Pros", icon: Wrench },
              { title: "Fitness & Wellness", icon: Dumbbell },
              { title: "Consultants & Coaches", icon: Briefcase },
              { title: "Real Estate Agents", icon: Home },
              { title: "Self-Employed Professionals", icon: User },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 hover:border-yellow-400 p-6 md:p-8 rounded-3xl text-center transition-all hover:scale-105 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 md:w-9 md:h-9 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-lg md:text-xl">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="how" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The "Zero-Risk" Roadmap
          </h2>
          <p className="text-center text-zinc-400 mb-16">
            We prove our value before you sign anything.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Brief",
                desc: "Tell us about your business",
              },
              {
                step: "02",
                title: "Free Mockup",
                desc: "Your homepage design in 48 hours",
              },
              {
                step: "03",
                title: "Review",
                desc: "If you love it, we build the rest",
              },
              {
                step: "04",
                title: "Build & Launch",
                desc: "Full site live in 7 days",
              },
              { step: "05", title: "Pay €599", desc: "Only after you love it" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400 p-8 rounded-3xl text-center transition-all"
              >
                <div className="text-yellow-400 text-4xl font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY BAR */}
      <div className="bg-yellow-400 text-zinc-950 py-10 relative overflow-hidden border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            {/* Left: Slots Remaining */}
            <div className="flex items-center gap-5">
              <div className="text-5xl animate-bounce">🔥</div>
              <div>
                <span className="text-xl md:text-2xl font-bold">Only</span>
                <span className="text-4xl md:text-5xl font-black tabular-nums mx-3">
                  {slotsLeft}
                </span>
                <span className="text-xl md:text-2xl font-bold">
                  slots left
                </span>
              </div>
            </div>

            {/* Center: Price + Percentage */}
            <div className="bg-zinc-950 text-white px-8 py-5 rounded-3xl flex items-center gap-5 shadow-lg">
              <div>
                <div className="text-5xl font-black">€599</div>
                <div className="text-xl line-through opacity-50 text-right">
                  €799
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full -rotate-6">
                  25% OFF
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest mt-1 text-yellow-400">
                  ONE-TIME
                </div>
              </div>
            </div>

            {/* Right: Progress Bar */}
            <div className="hidden md:flex items-center gap-4 w-full max-w-md">
              <div className="flex-1 h-3 bg-zinc-950/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-950 transition-all duration-1000 rounded-full"
                  style={{ width: `${((50 - slotsLeft) / 50) * 100}%` }}
                />
              </div>
              <div className="text-xs font-bold whitespace-nowrap">
                {50 - slotsLeft} CLAIMED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VALUE PROPS */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What We Offer?
          </h2>
          <p className="text-center text-zinc-400 mb-16">
            We deliver results before we send an invoice.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                icon: Zap,
                title: "Blazing Fast",
                desc: "High performance architecture",
              },
              {
                icon: Palette,
                title: "Custom Design",
                desc: "Unique & elegant for your brand",
              },
              {
                icon: KeyRound,
                title: "You Own Everything",
                desc: "Full source code + no subscriptions",
              },
              {
                icon: CheckCircle,
                title: "Perfect SEO",
                desc: "Lighthouse HIGH scores",
              },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-zinc-800 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-9 h-9 md:w-10 md:h-10 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-xl md:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Founder’s Special Launch Offer
          </h2>
          <p className="text-yellow-400 text-xl md:text-2xl mb-12">
            First 50 clients only • Regular price €799
          </p>

          <div className="relative max-w-lg mx-auto bg-zinc-900 border-2 border-yellow-400 rounded-3xl p-8 md:p-12">
            {/* Percentage Badge */}
            <div className="absolute -top-1.5 -right-6 bg-red-500 text-white text-sm font-bold px-6 py-1.5 rounded-full rotate-20 shadow-lg">
              25% OFF
            </div>
            <div className="text-6xl md:text-7xl font-bold text-white">
              €599{" "}
              <span className="text-2xl text-zinc-600 line-through font-medium">
                €799
              </span>
            </div>
            <p className="text-zinc-400">
              one-time payment • Full 5-page website
            </p>

            <ul className="mt-10 md:mt-12 space-y-4 text-left text-zinc-300 text-sm md:text-base">
              {[
                "Free homepage mockup",
                "Complete 5-page site",
                "1 year free domain ",
                "Free hosting",
                "Mobile responsive design",
                "Contact form",
                "SEO",
                "No monthly maintenance fee",
                "Full code ownership",
                "Pay only after launch",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-yellow-400" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-500 text-left">
              <strong>Maintenance:</strong> No monthly fees. Need an update, new
              page, or changes? We’ll do it on a simple pay-as-you-go basis.
            </p>

            <Link
              href="#contact"
              className="mt-12 md:mt-14 block w-full py-6 bg-yellow-400 text-zinc-950 font-semibold text-xl md:text-2xl rounded-3xl hover:bg-yellow-300 transition-all"
            >
              Secure My Slot
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
              Ready to <br /> launch?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12">
              Get your free custom homepage mockup in 48 hours. No payment, no
              obligation.
            </p>

            <div className="flex items-center gap-4 text-white font-bold">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-yellow-400">
                <Phone />
              </div>
              +353 87 274 1779
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-2 sm:p-4 lg:p-10 rounded-3xl border border-zinc-800 space-y-6"
          >
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all"
            />
            <input
              required
              type="email"
              placeholder="Business email"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all"
            />
            <input
              required
              type="tel"
              placeholder="Contact number"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all"
            />
            <textarea
              required
              rows={5}
              placeholder="Describe your business..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all resize-none"
            />
            <button
              disabled={isSubmitting}
              className="w-full py-6 bg-yellow-400 text-zinc-950 font-black text-xl rounded-2xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Claim My Free Mockup"}
              {!isSubmitting && <ChevronRight size={22} />}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 py-16 px-5 text-center border-t border-zinc-800">
        <div className="flex justify-center items-center gap-3 mb-8">
          {/* <div className="w-12 h-12 bg-yellow-400 rounded-3xl flex items-center justify-center text-4xl font-black text-black">
            N
          </div> */}
          <span className="text-4xl font-bold">
            Yuro<span className="text-yellow-400">Design</span>
          </span>
        </div>
        <p className="text-zinc-500">
          © 2026 Neluwe • Professional Websites for Europe &amp; USA
        </p>
        <p className="text-xs text-zinc-600 mt-3">
          One-time payment • Full ownership • No monthly fees
        </p>
      </footer>
    </div>
  );
}

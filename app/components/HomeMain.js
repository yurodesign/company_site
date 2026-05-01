"use client";

import React, { useCallback, useEffect, useState } from "react";
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
  Menu,
  X,
  Mail,
} from "lucide-react";
import { sendEmail } from "@/lib/resend";

const technologies = [
  "React",
  "Next.js",
  "TailwindCSS",
  "Netlify",
  "Vercel",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "Cloudflare",
  "React",
  "Next.js",
  "TailwindCSS",
  "Netlify",
  "Vercel",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "Cloudflare",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function HomeMain({ countryCode }) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [price, setPrice] = useState({});
  const slotsLeft = 27;

  useEffect(() => {
    if (countryCode === "US") {
      setPrice({ price: 949, disCountedPrice: 749, currency: "$" });
    } else {
      setPrice({ price: 799, disCountedPrice: 599, currency: "€" });
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((p) => ({
      ...p,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmail({...form, countryCode, price: price?.disCountedPrice });
      setForm(initialForm);
      setIsSuccess(true);
    } catch (err) {
      console.log({ err });
    } finally {
      setIsSubmitting(false);
    }
    e.target.reset();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Scarcity Bar */}
      <div className="bg-yellow-400 text-zinc-950 py-3 text-center font-bold text-sm tracking-widest relative overflow-hidden">
        <div className="absolute inset-0 from-transparent via-white/30 to-transparent animate-shimmer" />
        🔥 ONLY {slotsLeft} FOUNDER SLOTS REMAINING AT {price?.currency}
        {price?.disCountedPrice} — 25% OFF
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-3">
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
            Claim Free Design
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
            We build websites for SMBs and self-employed professionals. We
            design your homepage for
            <span className="text-white font-semibold"> FREE</span>. Love it?
            We’ll build the rest for {price?.currency}
            {price?.disCountedPrice}.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="#contact"
              className="px-10 py-6 md:py-7 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-semibold text-xl md:text-2xl rounded-3xl transition-all hover:scale-105 w-full md:w-auto"
            >
              Claim Your Free Homepage Design →
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
      <section className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Who We Help
          </h2>
          <p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">
            Custom websites for small and medium-sized businesses and
            self-employed professionals
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Restaurants & Cafés",
                icon: UtensilsCrossed,
                desc: "Menus, bookings & delivery",
              },
              {
                title: "Barbers & Salons",
                icon: Scissors,
                desc: "Online booking & portfolios",
              },
              {
                title: "Local Shops & Boutiques",
                icon: ShoppingBag,
                desc: "Showcase products & sell online",
              },
              {
                title: "Tradies & Service Pros",
                icon: Wrench,
                desc: "Get more local leads",
              },
              {
                title: "Fitness & Wellness",
                icon: Dumbbell,
                desc: "Class schedules & memberships",
              },
              {
                title: "Consultants & Coaches",
                icon: Briefcase,
                desc: "Build credibility & book clients",
              },
              {
                title: "Real Estate Agents",
                icon: Home,
                desc: "Property listings & contact forms",
              },
              {
                title: "Self-Employed Professionals",
                icon: User,
                desc: "Professional portfolio sites",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 hover:border-yellow-400 p-8 rounded-3xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <item.icon className="w-9 h-9 text-yellow-400 group-hover:text-zinc-950 transition-colors" />
                </div>
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                {/* <p className="text-zinc-500 text-sm">{item.desc}</p> */}
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
            See your website before spending a cent.
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
              {
                step: "05",
                title: `Pay ${price?.currency}${price?.disCountedPrice}`,
                desc: "After you approve everything",
              },
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
                <div className="text-5xl font-black">
                  {price?.currency}
                  {price?.disCountedPrice}
                </div>
                <div className="text-xl line-through opacity-50 text-right">
                  {price?.currency}
                  {price?.price}
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
      <section id="services" className="py-32 bg-zinc-950">
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
                desc: "Optimized for speed and performance",
              },
              {
                icon: Palette,
                title: "Custom Design",
                desc: "Unique to your brand. Zero templates",
              },
              {
                icon: KeyRound,
                title: "You Own Everything",
                desc: "Full source code. No recurring fees",
              },
              {
                icon: CheckCircle,
                title: "SEO Optimized",
                desc: "Built for top search rankings",
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
      <section id="pricing" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Founder’s Special Launch Offer
          </h2>
          <p className="text-yellow-400 text-xl md:text-2xl font-medium mb-12">
            Limited to the first 50 clients • Save {price?.currency}200 Today
          </p>

          <div className="relative max-w-lg mx-auto bg-zinc-900 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white text-sm font-bold px-6 py-2 rounded-full rotate-12 shadow-xl border-2 border-zinc-900">
              25% OFF
            </div>

            <div className="flex items-baseline justify-center gap-3">
              <span className="text-6xl md:text-7xl font-bold text-white">
                {price?.currency}
                {price?.disCountedPrice}
              </span>
              <span className="text-2xl text-zinc-500 line-through">
                {price?.currency}
                {price?.price}
              </span>
            </div>

            <p className="text-zinc-400 mt-2">
              One-time payment • Full 4-page website
            </p>

            <ul className="mt-10 space-y-4 text-left text-zinc-300">
              {[
                "Free homepage design (Pay only if you love it)",
                "Up to 4 pages (Eg. Home, About, Services, Contact)",
                "1 year free domain",
                "Free website hosting",
                "Fully Mobile-Responsive Design",
                "Integrated Contact Forms",
                "On-Page SEO Optimization",
                "No monthly fees or hidden costs",
                "You own 100% of the website code",
                "Pay nothing until the site is ready",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-yellow-400 shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 bg-zinc-800/40 rounded-2xl border border-zinc-800">
              <p className="text-xs text-zinc-400 text-left leading-relaxed">
                <strong className="text-zinc-200 text-sm block mb-1">
                  No Subscriptions
                </strong>
                We don’t charge monthly fees. If you need changes later, just
                pay for what you need. Simple.
              </p>
            </div>

            <Link
              href="#contact"
              className="mt-10 block w-full py-5 bg-yellow-400 text-zinc-950 font-bold text-xl rounded-2xl hover:bg-yellow-300 transition-all"
            >
              Secure My Slot
            </Link>

            <p className="mt-4 text-zinc-500 text-sm">
              No upfront payment needed
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-12 md:py-20 border-b border-gray-800">
        <div>
          <div className="max-w-7xl mx-auto px-5 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Technologies
            </h2>
            <p className="text-center text-zinc-400 mb-16">
              Built with the best modern tools for speed, beauty &amp;
              performance
            </p>
          </div>

          {/* Marquee */}
          <div className="bg-zinc-900 border border-zinc-800 py-8 md:py-10 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

            {/* Marquee Content */}
            <div className="flex whitespace-nowrap animate-marquee hover:animation-pause">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center px-8 md:px-14">
                  <span className="text-xl md:text-2xl font-semibold text-zinc-300 hover:text-yellow-400 transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
              Ready to <br /> See Your Website?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12">
              Get your free homepage design in 48 hours. No payment. No
              obligation.
            </p>
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="tel:+353872741779"
                className="flex items-center gap-4 text-white font-medium hover:text-yellow-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Whatsapp / Call us</p>
                  <p>+353 87 274 1779</p>
                </div>
              </a>

              <a
                href="mailto:hello@yurodesign.com"
                className="flex items-center gap-4 text-white font-medium hover:text-yellow-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email us</p>
                  <p>hello@yurodesign.com</p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-2 sm:p-4 lg:p-10 rounded-3xl border border-zinc-800 space-y-6"
          >
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all"
            />
            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Contact number (Eg. +353872741779)"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all"
            />
            <textarea
              required
              rows={5}
              placeholder="Describe your business..."
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 focus:border-yellow-400 outline-none transition-all resize-none"
            />
              {isSuccess &&<p className="text-center text-green-600">Your request has been sent successfully!</p>}
            <button
              disabled={isSubmitting}
              className="w-full cursor-pointer py-6 bg-yellow-400 text-zinc-950 font-black text-xl rounded-2xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Claim Your Free Design →"}
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
          © 2026 YuroDesign • Professional Websites for Europe &amp; USA
        </p>
        <p className="text-xs text-zinc-600 mt-3">
          One-time payment • Full ownership • No monthly fees
        </p>
      </footer>
    </div>
  );
}

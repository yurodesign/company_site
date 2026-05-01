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
  const [slotsLeft, setSlotsLeft] = useState(27);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 6 ? prev - 1 : prev));
    }, 11000);
    return () => clearInterval(interval);
  }, []);

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
        {/* ... (Navbar remains the same) ... */}
      </nav>

      {/* HERO - unchanged */}

      {/* PRICING SECTION - UPDATED */}
      <section id="pricing" className="py-20 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Founder’s Special Launch Offer
          </h2>
          <p className="text-yellow-400 text-xl md:text-2xl mb-12">
            First 50 clients only • <span className="line-through opacity-70">€799</span>
          </p>

          <div className="max-w-lg mx-auto bg-zinc-900 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Percentage Badge */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm font-bold px-6 py-1.5 rounded-full rotate-12 shadow-lg">
              25% OFF
            </div>

            <div className="text-6xl md:text-7xl font-bold text-white">
              €599 <span className="text-2xl text-zinc-600 line-through font-medium">€799</span>
            </div>
            <p className="text-zinc-400 mt-1">one-time payment • Full 5-page website</p>

            <ul className="mt-10 md:mt-12 space-y-4 text-left text-zinc-300 text-sm md:text-base">
              {[
                "Free homepage mockup",
                "Complete 5-page site",
                "1 year free domain",
                "Free hosting",
                "Mobile responsive design",
                "Contact form",
                "SEO optimized",
                "No monthly maintenance fee",
                "Full code ownership",
                "Pay only after launch",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-yellow-400 flex-shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xs text-zinc-500 text-left">
              <strong>Maintenance:</strong> No monthly fees. Need an update, new page, or changes? 
              We’ll do it on a simple pay-as-you-go basis.
            </div>

            <Link
              href="#contact"
              className="mt-12 md:mt-14 block w-full py-6 bg-yellow-400 text-zinc-950 font-semibold text-xl md:text-2xl rounded-3xl hover:bg-yellow-300 transition-all"
            >
              Secure My €599 Slot
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER - Updated */}
      <footer className="bg-zinc-900 py-16 px-5 text-center border-t border-zinc-800">
        <div className="flex justify-center items-center gap-3 mb-8">
          <span className="text-4xl font-bold">Yuro<span className="text-yellow-400">Design</span></span>
        </div>
        <p className="text-zinc-500">
          © 2026 YuroDesign • Professional Websites for Europe &amp; USA
        </p>
        <p className="text-xs text-zinc-600 mt-3">
          One-time payment • Full ownership • No monthly fees • Pay-as-you-go maintenance
        </p>
      </footer>
    </div>
  );
}
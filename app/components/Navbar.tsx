"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Impact", href: "#impact" },
    { label: "For Who", href: "#who" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F2554]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Averra AI"
              width={40}
              height={40}
              className="w-9 h-9 lg:w-10 lg:h-10 object-contain"
            />
            <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">
              Averra{" "}
              <span className="text-amber-400">AI</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105 shadow-md shadow-amber-400/20"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0F2554]/98 backdrop-blur-md border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-blue-100 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3 pb-1">
              <a
                href="#waitlist"
                className="block text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

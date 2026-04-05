"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CredibilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-slate-200 border border-slate-300 text-slate-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            The Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Built by People Who{" "}
            <span className="bg-gradient-to-r from-[#1A3A7C] to-[#2563EB] bg-clip-text text-transparent">
              Lived the Problem
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Domain-led insight from inside a Tier 1 bank, combined with
            world-class academic and strategic backing.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Karthik Rao */}
          <div
            className={`rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="bg-gradient-to-br from-[#0F2554] to-[#1A3A7C] p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-white/20">
                  <Image
                    src="/karthik.png"
                    alt="Karthik Rao"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                    Founder & CEO
                  </div>
                  <div className="text-white font-bold text-lg leading-tight mt-0.5">
                    Karthik Rao
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                20+ years in cloud & infrastructure engineering. Drove technology strategy at a Tier 1 financial institution. Built Averra from firsthand experience solving firewall policy complexity at scale.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Enterprise Technology Strategy", "Wharton MBA — AI & Finance"].map((badge) => (
                  <span key={badge} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Prof. Serguei Netessine */}
          <div
            className={`rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-gradient-to-br from-indigo-700 to-violet-700 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-white/20">
                  <Image
                    src="/serguei.png"
                    alt="Prof. Serguei Netessine"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                    Academic Advisor
                  </div>
                  <div className="text-white font-bold text-lg leading-tight mt-0.5">
                    Prof. Serguei Netessine
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Senior Vice Dean for Innovation at Wharton. Amazon Scholar and global AI & enterprise expert. Advising Averra on AI strategy, business model design, and go-to-market.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Senior Vice Dean, Wharton", "Amazon Scholar"].map((badge) => (
                  <span key={badge} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pronto Software Solutions */}
          <div
            className={`rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 bg-white flex items-center justify-center p-1.5">
                  <Image
                    src="/pronto-logo.png"
                    alt="Pronto Software Solutions"
                    width={52}
                    height={52}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                    Engineering Partner
                  </div>
                  <div className="text-white font-bold text-lg leading-tight mt-0.5">
                    Pronto Software Solutions
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                15+ years delivering enterprise-grade software for large organisations. A dedicated Pronto team is actively building the Averra MVP — bringing deep technical execution to the product.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Enterprise Software", "MVP in Development"].map((badge) => (
                  <span key={badge} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
              <a
                href="http://www.pronto-ss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                pronto-ss.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

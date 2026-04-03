"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const inputs = [
  {
    label: "Fragmented Firewall Policies",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    label: "Network Logs & Traffic Data",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Business Intent in Plain English",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    label: "Cloud Security Groups",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const outputs = [
  {
    label: "Optimised Policies",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Granular Access Controls",
    color: "text-blue-700 bg-blue-50 border-blue-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    label: "Continuous Compliance",
    color: "text-purple-700 bg-purple-50 border-purple-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Blast Radius Visibility",
    color: "text-amber-700 bg-amber-50 border-amber-200",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const Arrow = () => (
  <svg className="w-7 h-3 text-amber-400 flex-shrink-0" viewBox="0 0 28 12" fill="none">
    <path d="M0 6H24M18 1L26 6L18 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SolutionSection() {
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
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            The Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Averra AI:{" "}
            <span className="bg-gradient-to-r from-[#1A3A7C] to-[#2563EB] bg-clip-text text-transparent">
              The Policy Intelligence Layer
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            From manual, reactive firewall management to AI-driven, proactive
            policy intelligence and control.
          </p>
        </div>

        {/* Transformation diagram */}
        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Desktop layout */}
          <div className="hidden lg:flex items-stretch gap-0">
            {/* Inputs column */}
            <div className="flex flex-col justify-center gap-3 w-56 flex-shrink-0">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 text-right mb-2">
                Your Data Sources
              </div>
              {inputs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-slate-500 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-700 leading-snug">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Arrow column left */}
            <div className="flex flex-col justify-center gap-3 px-4 flex-shrink-0">
              {inputs.map((_, i) => <Arrow key={i} />)}
            </div>

            {/* AI Engine center */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-2">
              <div className="w-full max-w-[220px]">
                <div className="bg-gradient-to-br from-[#0F2554] to-[#2563EB] rounded-3xl p-6 shadow-2xl shadow-blue-900/30 text-center">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/logo.png"
                      alt="Averra AI Engine"
                      width={52}
                      height={52}
                      className="w-13 h-13 object-contain"
                    />
                  </div>
                  <div className="text-white font-bold text-base">Averra AI Engine</div>
                  <div className="text-blue-200/60 text-xs mt-0.5 mb-4">Policy Intelligence Layer</div>

                  <div className="space-y-1.5">
                    {["Traffic Analysis", "Behaviour Mapping", "Policy Generation", "Risk Simulation"].map((feat) => (
                      <div key={feat} className="flex items-center gap-2 bg-white/10 rounded-lg px-2.5 py-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="text-white/80 text-xs font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-blue-200/40 text-[10px] leading-snug">
                    Works with all major firewall vendors
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full text-center leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                Others show what happened. Averra defines what policy should be.
              </div>
            </div>

            {/* Arrow column right */}
            <div className="flex flex-col justify-center gap-3 px-4 flex-shrink-0">
              {outputs.map((_, i) => <Arrow key={i} />)}
            </div>

            {/* Outputs column */}
            <div className="flex flex-col justify-center gap-3 w-56 flex-shrink-0">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 text-left mb-2">
                Outcomes
              </div>
              {outputs.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 border rounded-xl px-4 py-3 shadow-sm ${item.color}`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout — vertical stack */}
          <div className="lg:hidden space-y-6">
            {/* Input pills */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-3">
                Your Data Sources
              </div>
              <div className="grid grid-cols-2 gap-2">
                {inputs.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2.5 shadow-sm">
                    <span className="text-slate-500 flex-shrink-0">{item.icon}</span>
                    <span className="text-xs font-medium text-slate-700 leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center text-slate-300 text-xl">↓</div>

            {/* Center card */}
            <div className="max-w-xs mx-auto">
              <div className="bg-gradient-to-br from-[#0F2554] to-[#2563EB] rounded-3xl p-6 shadow-2xl text-center">
                <div className="flex justify-center mb-3">
                  <Image src="/logo.png" alt="Averra AI Engine" width={48} height={48} className="object-contain" />
                </div>
                <div className="text-white font-bold text-base">Averra AI Engine</div>
                <div className="text-blue-200/60 text-xs mt-0.5 mb-4">Policy Intelligence Layer</div>
                <div className="space-y-1.5">
                  {["Traffic Analysis", "Behaviour Mapping", "Policy Generation", "Risk Simulation"].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 bg-white/10 rounded-lg px-2.5 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      <span className="text-white/80 text-xs font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center text-slate-300 text-xl">↓</div>

            {/* Outputs */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-3">
                Outcomes
              </div>
              <div className="grid grid-cols-2 gap-2">
                {outputs.map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 border rounded-xl px-3 py-2.5 ${item.color}`}>
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                Others show what happened. Averra defines what policy should be.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

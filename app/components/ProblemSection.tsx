"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Fragmented Policy Sprawl",
    description: "Multi-vendor firewalls with thousands of rules accumulated over years — no single source of truth.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "45-Day Change Cycles",
    description: "Translating business intent into firewall rules is slow, manual, and error-prone — crippling agility.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Shadow Access Risk",
    description: "Over-permissive rules accumulate silently. You don't know what traffic is allowed until it's too late.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Compliance Failures",
    description: "Global regulations (APRA, PCI-DSS, HIPAA) demand enforceable controls. Manual processes can't keep up.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "No Blast-Radius Visibility",
    description: "Before making a change, teams have no way to simulate the downstream impact. Every change is a risk.",
  },
];

export default function ProblemSection() {
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
    <section id="problem" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            The Problem
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Firewall Management Is{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Broken
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Policy complexity creates invisible risk and operational drag — and
            existing tools only show you what already happened.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem list */}
          <div className="space-y-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className={`flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-300 group ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-[#1A3A7C] transition-colors">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats panel */}
          <div
            className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-gradient-to-br from-[#0F2554] to-[#1A3A7C] rounded-3xl p-8 text-white space-y-8">
              <div>
                <div className="text-7xl font-black text-white leading-none mb-2">60%</div>
                <div className="text-amber-400 font-semibold text-lg mb-1">
                  Fail Compliance Checks
                </div>
                <div className="text-blue-200/70 text-sm">
                  Enterprise firewalls fail regular compliance audits
                </div>
                <div className="mt-2 text-xs text-blue-300/40 uppercase tracking-wider">
                  Source: Firemon State of the Firewall
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="text-7xl font-black text-white leading-none mb-2">34%</div>
                <div className="text-amber-400 font-semibold text-lg mb-1">
                  Fail at Critical Severity
                </div>
                <div className="text-blue-200/70 text-sm">
                  Firewall failures attributed directly to rule complexity
                </div>
                <div className="mt-2 text-xs text-blue-300/40 uppercase tracking-wider">
                  Source: AlgoSec State of Automation
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="bg-white/8 rounded-2xl p-4 border border-white/10">
                <p className="text-blue-100/80 text-sm italic leading-relaxed">
                  &ldquo;Policy complexity creates invisible risk and operational
                  drag — and the tools that exist today only tell you what
                  already happened.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "INGEST",
    title: "Ingest Live Network Data",
    description:
      "Averra connects to your firewalls, cloud security groups, and network logs — ingesting live traffic data without touching your infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "from-blue-600 to-blue-500",
  },
  {
    number: "02",
    label: "MAP",
    title: "Map Application Communication",
    description:
      "The AI engine builds a real-time map of how your applications actually communicate — surfacing undocumented and over-permissive paths.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 10m0 7V10" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "03",
    label: "RECOMMEND",
    title: "Recommend Right-Privilege Policies",
    description:
      "Averra generates precise, least-privilege policy recommendations in plain English — no CLI, no rule syntax, just clear business-aligned decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "from-indigo-500 to-violet-500",
  },
  {
    number: "04",
    label: "SIMULATE",
    title: "Simulate Blast Radius",
    description:
      "Before any change is made, Averra simulates the full downstream impact — showing exactly what traffic will be affected and what risk is introduced or removed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "05",
    label: "APPROVE",
    title: "Human in the Loop",
    description:
      "No policy changes without your approval. Security engineers review and authorise every recommendation — Averra enforces the human-approval gate.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "06",
    label: "DEPLOY",
    title: "Controlled Enforcement",
    description:
      "Approved changes are pushed via your existing tools — no rip-and-replace. Averra works with Palo Alto, Cisco, Fortinet, Check Point, and cloud providers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Decision Intelligence to{" "}
            <span className="bg-gradient-to-r from-[#1A3A7C] to-[#2563EB] bg-clip-text text-transparent">
              Controlled Automation
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Start with read-only recommendations. Expand into full policy lifecycle automation — at your pace.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line (desktop only, skip last in each row) */}
              {i % 3 !== 2 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 z-0 pointer-events-none">
                  <svg className="w-6 h-4 text-slate-200" viewBox="0 0 24 16" fill="none">
                    <path d="M0 8H20M14 2L22 8L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              <div className="h-full bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 group-hover:-translate-y-1">
                {/* Step number + icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md`}>
                    {step.icon}
                  </div>
                  <div className="text-5xl font-black text-slate-100 leading-none select-none">
                    {step.number}
                  </div>
                </div>

                {/* Label pill */}
                <div className="inline-block bg-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2">
                  {step.label}
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0F2554] to-[#1A3A7C] text-white px-6 py-3 rounded-xl">
            <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="font-semibold text-sm">
              Zero disruption — read-only to start, no policy changes without human approval
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

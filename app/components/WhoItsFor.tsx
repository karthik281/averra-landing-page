"use client";

import { useEffect, useRef, useState } from "react";

const segments = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Banks & Financial Institutions",
    description:
      "Regional banks, credit unions, and insurers operating under APRA, PCI-DSS, or similar mandates. High audit pressure with limited security operations staff.",
    tags: ["APRA CPS 234", "PCI-DSS", "SOX"],
    gradient: "from-blue-600 to-blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Healthcare Organisations",
    description:
      "Hospitals, health networks, and healthtech companies with strict data protection requirements and complex hybrid cloud/on-prem environments.",
    tags: ["HIPAA", "HL7", "ISO 27001"],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Enterprise & Fintech",
    description:
      "Any enterprise with multi-vendor firewall estates, rapid policy growth, and a compliance-first mandate. Especially those mid-migration to Zero Trust.",
    tags: ["Zero Trust", "Multi-vendor", "Policy Sprawl"],
    gradient: "from-violet-600 to-purple-500",
  },
];

const personas = [
  { role: "CISO", description: "Needs board-level visibility into policy risk and compliance posture" },
  { role: "Head of Infrastructure", description: "Wants to eliminate manual change bottlenecks and reduce ops toil" },
  { role: "Security Engineer", description: "Needs clear, AI-generated recommendations without parsing thousands of rules" },
  { role: "Compliance Officer", description: "Requires audit-ready policy documentation and continuous compliance monitoring" },
];

export default function WhoItsFor() {
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
    <section id="who" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Built For
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Purpose-Built for{" "}
            <span className="bg-gradient-to-r from-[#1A3A7C] to-[#2563EB] bg-clip-text text-transparent">
              Regulated Enterprises
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Averra targets organisations where policy complexity and compliance obligations are highest.
          </p>
        </div>

        {/* Segments */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={`group rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${seg.gradient} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  {seg.icon}
                </div>
                <h3 className="font-bold text-xl mb-1">{seg.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{seg.description}</p>
                <div className="flex flex-wrap gap-2">
                  {seg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Who uses it */}
        <div
          className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Who Uses Averra</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personas.map((persona, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#1A3A7C] to-[#2563EB] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">{persona.role}</div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-snug">{persona.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

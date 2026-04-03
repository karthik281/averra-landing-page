"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  {
    role: "Founder & CEO",
    name: "Karthik Rao",
    bio: "20+ years in cloud & infrastructure engineering. Drove technology strategy at a Tier 1 financial institution. Built Averra from firsthand experience solving firewall policy complexity at scale.",
    badges: ["Enterprise Technology Strategy", "Wharton MBA — AI & Finance"],
    gradient: "from-[#0F2554] to-[#1A3A7C]",
    initials: "KR",
  },
  {
    role: "Academic Advisor",
    name: "Prof. Serguei Netessine",
    bio: "Senior Vice Dean for Innovation at Wharton. Amazon Scholar and global AI & enterprise expert. Advising Averra on AI strategy, business model design, and go-to-market.",
    badges: ["Senior Vice Dean, Wharton", "Amazon Scholar"],
    gradient: "from-indigo-700 to-violet-700",
    initials: "SN",
  },
  {
    role: "Engineering Partner",
    name: "Pronto Software Solutions",
    bio: "15+ years delivering enterprise-grade software for large organisations. A dedicated Pronto team is actively building the Averra MVP — bringing deep technical execution to the product.",
    badges: ["Enterprise Software", "MVP in Development"],
    gradient: "from-blue-600 to-cyan-600",
    initials: "PS",
  },
];

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
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {team.map((member, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${member.gradient} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                      {member.role}
                    </div>
                    <div className="text-white font-bold text-lg leading-tight mt-0.5">
                      {member.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

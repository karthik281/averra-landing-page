"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    before: "45 Days",
    after: "Minutes",
    label: "Policy Change Cycle",
    description: "From request to implementation — what took weeks now takes minutes with AI-driven automation.",
    color: "border-blue-200 bg-blue-50",
    accentColor: "text-[#1A3A7C]",
  },
  {
    before: "$15K",
    after: "~$0",
    label: "Ops Cost Per Change",
    description: "Eliminate the engineering hours, ticket queues, and review cycles that inflate every firewall change.",
    color: "border-amber-200 bg-amber-50",
    accentColor: "text-amber-600",
  },
  {
    before: null,
    after: "~98%",
    label: "Reduction in Shadow Access Risk",
    description: "Averra identifies and eliminates over-permissive rules that accumulate silently across your estate.",
    color: "border-emerald-200 bg-emerald-50",
    accentColor: "text-emerald-700",
  },
  {
    before: null,
    after: "70%+",
    label: "Operations Efficiency Gain",
    description: "Security operations teams reclaim time spent on manual policy tasks and compliance preparation.",
    color: "border-purple-200 bg-purple-50",
    accentColor: "text-purple-700",
  },
];

export default function ImpactSection() {
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
    <section id="impact" className="py-24 lg:py-32 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Proven Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Lower Cost.{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Reduced Risk.
            </span>{" "}
            Faster Operations.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Observed in internal deployments at Tier 1 banking environments.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${metric.color} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Value */}
              <div className="mb-4">
                {metric.before ? (
                  <div>
                    <div className="text-3xl font-black text-slate-400 line-through decoration-2">
                      {metric.before}
                    </div>
                    <div className={`text-4xl font-black ${metric.accentColor} leading-tight`}>
                      {metric.after}
                    </div>
                  </div>
                ) : (
                  <div className={`text-5xl font-black ${metric.accentColor} leading-tight`}>
                    {metric.after}
                  </div>
                )}
              </div>

              {/* Label */}
              <div className="font-bold text-slate-800 mb-2 leading-snug">{metric.label}</div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Attribution banner */}
        <div
          className={`mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">
                Observed in internal deployments at Tier 1 banking environments.
              </span>{" "}
              Results may vary based on environment complexity and deployment scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

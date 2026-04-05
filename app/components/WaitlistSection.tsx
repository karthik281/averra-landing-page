"use client";

import { useRef, useState, useTransition } from "react";
import { joinWaitlist } from "../actions";

export default function WaitlistSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<{ success?: boolean; error?: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await joinWaitlist(formData);
      setState(result);
      if (result.success) formRef.current?.reset();
    });
  };

  return (
    <section
      id="waitlist"
      className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#0F2554] via-[#1A3A7C] to-[#0F2554]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.25)_0%,_transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-400 rounded-2xl mb-6 shadow-xl shadow-amber-500/30">
          <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          MVP in Development · Early Access Available
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
          Be First to Transform
          <br />
          <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
            Your Network Security
          </span>
        </h2>

        <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
          Join our early access waitlist. Design partners get hands-on access to
          the MVP and a direct line to shape the product.
        </p>

        {/* Form */}
        {state?.success ? (
          <div className="max-w-md mx-auto bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8">
            <div className="w-14 h-14 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
            <p className="text-blue-100/70">
              We&apos;ll be in touch soon. In the meantime, feel free to reach out
              directly at{" "}
              <a href="mailto:karthik@averra-ai.com.au" className="text-amber-300 underline underline-offset-2">
                karthik@averra-ai.com.au
              </a>
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200/50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 backdrop-blur-sm transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Company name"
                required
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200/50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 backdrop-blur-sm transition-all"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Work email"
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200/50 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 backdrop-blur-sm transition-all"
              />
            </div>

            {state?.error && (
              <p className="text-red-300 text-sm mb-3">{state.error}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 text-slate-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-amber-500/25 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </span>
              ) : (
                "Join the Waitlist →"
              )}
            </button>

            <p className="mt-4 text-blue-200/40 text-xs">
              No spam. No commitment. Early access for design partners.
            </p>
          </form>
        )}

        {/* Contact alternatives */}
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a
            href="mailto:karthik@averra-ai.com.au"
            className="flex items-center gap-2 text-blue-200/70 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            karthik@averra-ai.com.au
          </a>
          <a
            href="https://linkedin.com/in/karthik-a-rao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-200/70 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            linkedin.com/in/karthik-a-rao
          </a>
        </div>
      </div>
    </section>
  );
}

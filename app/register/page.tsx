"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const DEMO_URL = "https://app.averra-ai.com.au";
const CALLBACK = `${DEMO_URL}/auth/callback`;

const FEATURES = [
  { label: "Policy change cycle", before: "45 days", after: "Minutes" },
  { label: "Ops cost per change",  before: "$15K",    after: "~$0" },
  { label: "Shadow access risk",   before: "High",    after: "~98% reduced" },
];

export default function RegisterPage() {
  const [email,   setEmail]   = useState("");
  const [name,    setName]    = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) { setError("Please enter a valid email."); return; }
    setLoading(true);
    setError(null);

    const { error: sbError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: CALLBACK, data: { name, company } },
    });

    setLoading(false);
    if (sbError) { setError(sbError.message); return; }
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#0A1929] flex flex-col overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2554] via-[#0A1929] to-[#0A1929]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.2)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.06)_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <a href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Averra AI" width={32} height={32} className="w-8 h-8 object-contain" />
          <span className="text-white font-extrabold text-base tracking-tight">
            AVERRA <span className="text-amber-400">AI</span>
          </span>
        </a>
        <a href="/" className="text-blue-200/50 hover:text-white text-xs transition-colors">
          ← Back to site
        </a>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — value prop */}
          <div className="hidden lg:block">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-xs font-medium tracking-wide uppercase">Live Demo Access</span>
            </div>

            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              AI-driven firewall policy
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">
                built for regulated enterprises
              </span>
            </h1>

            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 max-w-sm">
              See how Averra AI analyses your firewall rules, detects policy risk, and generates compliance-ready recommendations — in minutes, not months.
            </p>

            {/* Metrics */}
            <div className="space-y-3 mb-8">
              {FEATURES.map(f => (
                <div key={f.label} className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-blue-200/50 mb-1">{f.label}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/40 line-through">{f.before}</span>
                      <svg className="w-3 h-3 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="text-sm font-semibold text-amber-300">{f.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signal */}
            <div className="flex items-center gap-2 text-xs text-blue-200/40">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Read-only · No changes made to any firewall · Observed at Tier 1 banks
            </div>
          </div>

          {/* Right — form card */}
          <div>
            <div className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-black/40">
              {sent ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Check your inbox</h2>
                  <p className="text-blue-200/60 text-sm leading-relaxed mb-1">
                    Magic link sent to
                  </p>
                  <p className="text-white font-medium text-sm mb-5">{email}</p>
                  <p className="text-blue-200/40 text-xs">
                    Click the link to access the demo instantly — no password needed.
                    <br />Can&apos;t find it? Check your spam folder.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-white mb-1">Access the live demo</h2>
                    <p className="text-blue-200/50 text-sm">
                      Free account · No credit card · One click to get in
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-blue-200/60 mb-1.5">Full name</label>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="w-full bg-white/[0.06] border border-white/[0.1] hover:border-white/20 focus:border-blue-400/50 text-white placeholder-white/20 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-blue-200/60 mb-1.5">Company</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        required
                        className="w-full bg-white/[0.06] border border-white/[0.1] hover:border-white/20 focus:border-blue-400/50 text-white placeholder-white/20 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-blue-200/60 mb-1.5">Work email</label>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full bg-white/[0.06] border border-white/[0.1] hover:border-white/20 focus:border-blue-400/50 text-white placeholder-white/20 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-colors"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                        <svg className="w-3.5 h-3.5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-red-300 text-xs">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-150 flex items-center justify-center gap-2 mt-1"
                    >
                      {loading ? (
                        <>
                          <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send magic link
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-5 pt-5 border-t border-white/[0.07] flex items-center justify-between">
                    <p className="text-white/25 text-xs">No password · No spam</p>
                    <a
                      href={DEMO_URL}
                      className="text-white/25 hover:text-white/50 text-xs transition-colors"
                    >
                      Skip registration →
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

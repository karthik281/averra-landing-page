"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const DEMO_URL = "https://app.averra-ai.com.au";
const CALLBACK = `${DEMO_URL}/auth/callback`;

export default function RegisterPage() {
  const [email, setEmail]   = useState("");
  const [name, setName]     = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent]     = useState(false);
  const [error, setError]   = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) { setError("Please enter a valid email."); return; }
    setLoading(true);
    setError(null);

    const { error: sbError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: CALLBACK,
        data: { name, company },
      },
    });

    setLoading(false);
    if (sbError) { setError(sbError.message); return; }
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#0F2554] flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3 mb-10">
        <Image src="/logo.png" alt="Averra AI" width={40} height={40} className="w-9 h-9 object-contain" />
        <span className="text-white font-extrabold text-xl tracking-tight">
          AVERRA <span className="text-amber-400">AI</span>
        </span>
      </a>

      <div className="w-full max-w-md bg-white/[0.07] border border-white/[0.12] rounded-2xl p-8 backdrop-blur-sm">
        {sent ? (
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Check your email</h2>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              We sent a magic link to <span className="text-white font-medium">{email}</span>.
              Click it to access the live demo — no password needed.
            </p>
            <p className="text-blue-200/40 text-xs">Can&apos;t find it? Check your spam folder.</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-extrabold text-white mb-1">Access the live demo</h1>
            <p className="text-blue-200/60 text-sm mb-7">
              Create your free account to explore Averra AI&apos;s policy intelligence platform.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />

              {error && <p className="text-red-300 text-xs">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-slate-900 font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
              >
                {loading ? "Sending…" : "Send magic link →"}
              </button>
            </form>

            <p className="mt-3 text-blue-200/40 text-xs text-center">
              No password. No spam. One click and you&apos;re in.
            </p>
          </>
        )}
      </div>

      {/* Soft gate escape hatch */}
      <a
        href={DEMO_URL}
        className="mt-6 text-blue-200/35 hover:text-blue-200/60 text-xs transition-colors underline underline-offset-2"
      >
        Continue without registering
      </a>
    </main>
  );
}

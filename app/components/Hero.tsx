"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.a})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F2554]">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2554] via-[#1A3A7C] to-[#0F2554]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.3)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.08)_0%,_transparent_50%)]" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-blue-100 text-sm font-medium">
                Early Access — Join the Waitlist
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Stop Managing
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-sky-200 bg-clip-text text-transparent">
                Firewalls.
              </span>
              <br />
              Start Controlling
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                Policy.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Averra AI replaces fragmented, manual firewall management with
              intelligent, AI-driven policy control — purpose-built for
              regulated enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 shadow-xl shadow-amber-500/25"
              >
                Join the Waitlist
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm"
              >
                See How It Works
              </a>
            </div>

            {/* Trust signals */}
            <p className="mt-6 text-sm text-blue-200/50">
              Observed in Tier 1 banking environments · MVP in development
            </p>
          </div>

          {/* Right: Stat cards */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "45 Days",
                  arrow: "→ Minutes",
                  label: "Policy change cycle",
                  color: "blue",
                },
                {
                  value: "$15K",
                  arrow: "→ ~$0",
                  label: "Ops cost per change",
                  color: "orange",
                },
                {
                  value: "~98%",
                  arrow: null,
                  label: "Reduction in shadow access risk",
                  color: "blue",
                },
                {
                  value: "70%+",
                  arrow: null,
                  label: "Operations efficiency gain",
                  color: "orange",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-2xl p-4 hover:bg-white/[0.12] transition-colors"
                >
                  <div
                    className={`text-2xl font-extrabold leading-tight ${stat.color === "orange" ? "text-amber-400" : "text-blue-300"}`}
                  >
                    {stat.value}
                  </div>
                  {stat.arrow && (
                    <div className="text-sm font-semibold text-white/60 mt-0.5">
                      {stat.arrow}
                    </div>
                  )}
                  <div className="text-xs text-blue-100/60 mt-2 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Logo mark */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
              <Image
                src="/logo.png"
                alt="Averra AI"
                width={48}
                height={48}
                className="w-10 h-10 object-contain opacity-80"
              />
              <div className="text-white/40 text-xs leading-snug">
                Built on real-world
                <br />
                firewall complexity at
                <br />
                <span className="text-white/60 font-medium">
                  Tier 1 banks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

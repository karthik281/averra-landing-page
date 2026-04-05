import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Averra AI"
              width={36}
              height={36}
              className="w-8 h-8 object-contain opacity-80"
            />
            <div>
              <div className="text-white font-bold text-lg leading-tight">
                Averra <span className="text-amber-400">AI</span>
              </div>
              <div className="text-xs text-slate-500">
                AI-powered policy intelligence for Enterprise Networks
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { label: "Problem", href: "#problem" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Impact", href: "#impact" },
              { label: "For Who", href: "#who" },
              { label: "Join Waitlist", href: "#waitlist" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="mailto:karthik@averra-ai.com.au"
              className="hover:text-white transition-colors"
            >
              karthik@averra-ai.com.au
            </a>
            <a
              href="https://linkedin.com/in/karthik-a-rao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            © {new Date().getFullYear()} Averra AI. All rights reserved.
          </div>
          <div>
            Built by Karthik Rao · Enterprise Technology Strategy · Wharton MBA
          </div>
        </div>
      </div>
    </footer>
  );
}

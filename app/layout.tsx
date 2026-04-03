import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.averra-ai.com.au"),
  title: "Averra AI — AI-Powered Firewall Policy Intelligence",
  description:
    "Averra AI gives enterprise security teams AI-driven clarity and control over firewall policies. Cut change cycles from 45 days to minutes. Built for regulated industries.",
  keywords: [
    "firewall policy management",
    "AI network security",
    "enterprise firewall automation",
    "policy intelligence",
    "zero trust",
    "network compliance",
  ],
  openGraph: {
    title: "Averra AI — AI-Powered Firewall Policy Intelligence",
    description:
      "From manual, fragmented firewall management to AI-driven policy control. Built for regulated enterprises.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Averra AI",
    description: "AI-powered policy intelligence for enterprise networks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

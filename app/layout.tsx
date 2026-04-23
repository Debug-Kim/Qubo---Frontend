import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NeuralBackground from "@/components/backgrounds/NeuralBackground";
import PageTransition from "@/components/layout/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUBO LLC — Institutional Quantitative Infrastructure",
  description:
    "Institutional-grade quantitative trading infrastructure powered by QUBEX — the deterministic execution engine built for precision at scale.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#040d1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">

        {/* ─── GLOBAL BACKGROUND LAYERS ───────────────────────── */}

        {/* Neural background (base layer) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <NeuralBackground />
        </div>

        {/* Ambient radial lighting */}
        <div
          className="fixed inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,229,255,0.045), transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* ─── NAVBAR ─────────────────────────────────────────── */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* ─── PAGE CONTENT ───────────────────────────────────── */}
        <PageTransition>
          <main className="relative z-10 flex-1 overflow-x-hidden">
            {children}
          </main>
        </PageTransition>

        {/* ─── FOOTER ─────────────────────────────────────────── */}
        <div className="relative z-10">
          <Footer />
        </div>

      </body>
    </html>
  );
}
"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import MiniChart from "@/components/ui/MiniChart";
import WaveBackground from "@/components/backgrounds/WaveBackground";
import CursorGlow from "@/components/ui/CursorGlow";

function PrimaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
  const el = (
    <motion.span
      whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,229,255,0.38)" }}
      whileTap={{ scale: 0.97 }}
      className="group relative px-8 py-3.5 text-sm font-semibold uppercase tracking-widest rounded-md overflow-hidden inline-flex cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 100%)",
        color: "#040d1a",
      }}
    >
      <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );
  return href ? <Link href={href}>{el}</Link> : <button>{el}</button>;
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
  const el = (
    <motion.span
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 0 1px rgba(0,229,255,0.35)",
      }}
      whileTap={{ scale: 0.97 }}
      className="px-8 py-3.5 text-sm font-medium tracking-widest uppercase rounded-md border border-white/10 text-[var(--text-secondary)] transition-all duration-300 inline-flex cursor-pointer"
    >
      {children}
    </motion.span>
  );
  return href ? <Link href={href}>{el}</Link> : <button>{el}</button>;
}

export default function Hero() {
  const { scrollY } = useScroll();

  const waveY       = useTransform(scrollY, [0, 600], [0, 80]);
  const waveOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY    = useTransform(scrollY, [0, 400], [0, -40]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(springY, [-1, 1], [3, -3]);
  const rotateY = useTransform(springX, [-1, 1], [-3, 3]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* ── WAVE BACKGROUND ── */}
      <motion.div
        style={{ y: waveY, opacity: waveOpacity }}
        className="absolute inset-0 -z-10"
      >
        <WaveBackground />
      </motion.div>

      {/* ── GRADIENT VEIL ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,13,26,0.85) 0%, rgba(4,13,26,0.55) 35%, rgba(4,13,26,0.35) 55%, rgba(4,13,26,0.65) 75%, rgba(4,13,26,0.9) 100%)",
        }}
      />

      {/* ── AMBIENT CORE GLOW ── */}
      <motion.div
        animate={{ opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none z-20"
        style={{
          top: "28%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 380,
          background: "radial-gradient(ellipse, rgba(0,229,255,0.14) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── CURSOR GLOW ── */}
      <CursorGlow />

      {/* ── MINI CHART ── */}
      <MiniChart />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: contentY, rotateX, rotateY, transformPerspective: 1200 }}
        className="relative z-30 flex flex-col items-center"
      >
        {/* STATUS BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase font-medium bg-[rgba(0,229,255,0.07)] border border-[rgba(0,229,255,0.18)] text-[var(--cyan)]">
            <span className="w-1.5 h-1.5 rounded-full animate-data-blink bg-[var(--cyan)]" />
            QUBEX Engine · Active
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gradient-white font-bold tracking-[-0.02em] leading-none"
          style={{ fontSize: "clamp(3.2rem,9.5vw,7rem)" }}
        >
          QUBO LLC
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-xl md:text-2xl mt-5 font-light text-[var(--text-secondary)]"
        >
          <span className="text-[var(--cyan-dim)]">Quantitative precision</span> at institutional scale
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-[var(--text-muted)]"
        >
          QUBEX is a deterministic trading engine built for institutional deployment —
          fusing probabilistic signal intelligence with microsecond-resolution execution
          and embedded risk infrastructure.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex gap-4 flex-col sm:flex-row items-center"
        >
          <PrimaryButton href="/features">
            Explore QUBEX <ArrowRight size={14} />
          </PrimaryButton>
          <SecondaryButton href="/contact">Request Access</SecondaryButton>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--text-muted)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[rgba(0,229,255,0.5)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

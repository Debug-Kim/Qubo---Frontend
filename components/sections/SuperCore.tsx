"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";

const METRICS = [
  { value: "< 2ms",  label: "Median execution latency" },
  { value: "99.97%", label: "System availability SLA"  },
  { value: "180+",   label: "Active alpha factors"      },
];

const CAPABILITIES = [
  "Deterministic OMS with microsecond audit trail",
  "Real-time VaR with automated breach response",
  "Cross-asset signal fusion across 180+ factors",
  "Co-location ready with redundant connectivity",
];

export default function SuperCore() {
  return (
    <section className="relative py-32 overflow-hidden scroll-mt-24" style={{ background: "var(--bg-base)" }}>

      {/* ── FULL BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/core - new.jpg"
          alt=""
          fill
          quality={90}
          priority
          className="object-cover object-[75%_center]"
          style={{ opacity: 0.5 }}
        />
      </div>

      {/* ── LEFT CONTENT FADE ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to right,
              #040d1a 0%,
              #040d1a 28%,
              rgba(4,13,26,0.88) 52%,
              rgba(4,13,26,0.28) 78%,
              transparent 100%
            )
          `,
        }}
      />

      {/* ── VERTICAL FADE top & bottom ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom,
              #040d1a 0%,
              transparent 14%,
              transparent 86%,
              #040d1a 100%
            )
          `,
        }}
      />

      {/* ── CYAN GLOW BEHIND IMAGE ── */}
      <motion.div
        animate={{ opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 z-[1] pointer-events-none"
        style={{
          width: 650,
          height: 480,
          background: "radial-gradient(ellipse, rgba(0,229,255,0.18) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <Reveal>
            {/* Label */}
            <p className="label-tag mb-5">[ QUBEX CORE ]</p>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              <span className="text-gradient-white">The Engine at the</span>{" "}
              <span className="text-gradient-cyan">Centre of It All</span>
            </h2>

            {/* Description */}
            <p
              className="mb-10 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              QUBEX is not a wrapper around existing infrastructure. It is a ground-up
              implementation of a deterministic execution engine — designed to enforce
              correctness at every layer, from signal computation to order settlement.
              Every component is independently testable and independently monitorable.
            </p>

            {/* CAPABILITIES LIST */}
            <ul className="mb-10 space-y-2.5">
              {CAPABILITIES.map((cap, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{
                      background: "var(--cyan)",
                      boxShadow: "0 0 6px rgba(0,229,255,0.7)",
                    }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {cap}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* METRICS ROW */}
            <div
              className="flex gap-10 mb-10 pb-10"
              style={{ borderBottom: "1px solid rgba(0,229,255,0.08)" }}
            >
              {METRICS.map((m, i) => (
                <div key={i}>
                  <p
                    className="text-2xl font-bold tracking-tight text-gradient-cyan mb-1"
                  >
                    {m.value}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <Link href="/features">
                <motion.span
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 32px rgba(0,229,255,0.28)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-[0.2em] uppercase rounded cursor-pointer transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 100%)",
                    color: "#040d1a",
                  }}
                >
                  View Full Architecture
                </motion.span>
              </Link>

              <Link href="/contact">
                <motion.span
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(0,229,255,0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-[0.2em] uppercase rounded cursor-pointer transition-all duration-300"
                  style={{
                    border: "1px solid rgba(0,229,255,0.2)",
                    color: "var(--text-secondary)",
                    background: "rgba(0,229,255,0.04)",
                  }}
                >
                  Request Access
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

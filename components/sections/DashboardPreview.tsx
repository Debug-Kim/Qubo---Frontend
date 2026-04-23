"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import DashboardSignals from "@/components/sections/DashboardSignals";

const STATS = [
  { label: "Latency",     value: "1.84ms" },
  { label: "Signals/s",  value: "4,200"  },
  { label: "Fill Rate",  value: "99.3%"  },
];

export default function DashboardPreview() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32">

      {/* HEADER */}
      <Reveal>
        <div className="mb-16 relative z-10">
          <p className="label-tag mb-4">[ LIVE INTERFACE ]</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-gradient-white">
            Operational Intelligence.<br />
            In Real Time.
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            The QUBEX operator interface surfaces signal states, position exposure,
            execution quality metrics, and risk utilisation in a single consolidated view —
            updated continuously with no polling delay.
          </p>
        </div>
      </Reveal>

      {/* DASHBOARD IMAGE WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative group"
      >

        {/* OUTER GLOW */}
        <motion.div
          className="absolute -inset-1 rounded-2xl pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(0,229,255,0.15) 0%, transparent 65%)",
            filter: "blur(30px)",
          }}
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.008, transition: { duration: 0.4, ease: "easeOut" } }}
          className="relative z-10 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(0,229,255,0.12)",
            boxShadow: "0 30px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.05)",
          }}
        >
          <img
            src="/dashboard.jpg"
            alt="QUBEX Dashboard Interface"
            className="w-full block"
          />

          {/* SCAN LINE EFFECT */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,229,255,0.04) 50%, transparent 100%)",
            }}
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          />

          {/* VIGNETTE */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `
                radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(4,13,26,0.6) 100%),
                linear-gradient(to top, rgba(4,13,26,0.45) 0%, transparent 28%)
              `,
            }}
          />

          {/* HOVER GLOW OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.07) 0%, transparent 60%)",
            }}
          />
        </motion.div>

        {/* FLOATING STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-5 left-5 flex gap-3 z-20"
        >
          {STATS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-3 rounded-lg transition-all duration-300"
              style={{
                background: "rgba(4,13,26,0.88)",
                border: "1px solid rgba(0,229,255,0.12)",
                backdropFilter: "blur(16px)",
                minWidth: "88px",
              }}
            >
              <p
                className="text-[9px] tracking-widest uppercase mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </p>
              <p className="text-sm font-semibold font-mono" style={{ color: "var(--cyan-dim)" }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* TOP-RIGHT SYSTEM STATUS */}
        <div
          className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(4,13,26,0.88)",
            border: "1px solid rgba(0,229,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-data-blink"
            style={{ background: "var(--cyan)" }}
          />
          <span
            className="text-[9px] tracking-[0.2em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Live
          </span>
        </div>

      </motion.div>

      {/* SIGNAL PANEL below image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <DashboardSignals />
      </motion.div>

    </section>
  );
}

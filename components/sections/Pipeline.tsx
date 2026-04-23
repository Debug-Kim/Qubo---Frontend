"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const STAGES = [
  {
    number: "01",
    title: "Signal Ingestion",
    tag: "DATA LAYER",
    desc: "QUBEX ingests L2/L3 order book data, tick feeds, cross-asset correlations, and alternative data streams at sub-100ms resolution. All inputs are normalised, timestamped, and validated before reaching the alpha engine — no raw signal enters without a quality gate.",
    metrics: [
      { label: "Feeds", value: "180+ sources" },
      { label: "Refresh", value: "< 100ms" },
      { label: "Validation", value: "Real-time" },
    ],
  },
  {
    number: "02",
    title: "Signal Processing",
    tag: "ALPHA ENGINE",
    desc: "The alpha engine applies a Bayesian ensemble of 180+ factors across price microstructure, order flow imbalance, and macro regime state. Output is a probabilistic position vector — not a binary trade signal — continuously updated as market conditions evolve.",
    metrics: [
      { label: "Factors", value: "180+" },
      { label: "Model", value: "Bayesian ensemble" },
      { label: "Output", value: "Prob. vector" },
    ],
  },
  {
    number: "03",
    title: "Deterministic Execution",
    tag: "EXECUTION LAYER",
    desc: "Orders are routed through a deterministic OMS with guaranteed behaviour under defined conditions. Pre-trade risk checks, venue selection, and fill attribution are resolved at microsecond granularity. Every order cycle produces a full audit trail with zero ambiguity.",
    metrics: [
      { label: "Latency (P50)", value: "< 2ms" },
      { label: "Audit", value: "Microsecond" },
      { label: "Behaviour", value: "Deterministic" },
    ],
  },
];

export default function Pipeline() {
  return (
    <section id="engine" className="relative py-32 scroll-mt-24 overflow-hidden">

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,229,255,0.15), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── HEADER ── */}
        <Reveal>
          <div className="mb-20">
            <p className="label-tag mb-4">[ EXECUTION PIPELINE ]</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-gradient-white">
              From Signal to Fill.<br />
              Every Step Engineered.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The QUBEX execution pipeline spans three discrete layers — each independently
              verifiable, independently monitored, and designed to fail safely without
              propagating errors downstream.
            </p>
          </div>
        </Reveal>

        {/* ── STAGES ── */}
        <div className="grid md:grid-cols-3 gap-0">
          {STAGES.map((stage, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="relative group h-full">

                {/* Connector line between cards */}
                {i < STAGES.length - 1 && (
                  <div
                    className="hidden md:block absolute top-[2.6rem] left-[calc(100%-1px)] w-full h-px z-10"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0,229,255,0.35), rgba(0,229,255,0.06))",
                    }}
                  />
                )}

                {/* Connector dot */}
                {i < STAGES.length - 1 && (
                  <div
                    className="hidden md:block absolute top-[2.45rem] right-0 w-2 h-2 rounded-full z-20 -translate-y-[1px]"
                    style={{
                      background: "rgba(0,229,255,0.5)",
                      boxShadow: "0 0 8px rgba(0,229,255,0.5)",
                    }}
                  />
                )}

                {/* Card */}
                <div
                  className="mx-2 p-8 rounded-xl h-full flex flex-col transition-all duration-300"
                  style={{
                    background: "rgba(7,20,38,0.5)",
                    border: "1px solid rgba(0,229,255,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.border = "1px solid rgba(0,229,255,0.28)";
                    el.style.background = "rgba(7,20,38,0.82)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.border = "1px solid rgba(0,229,255,0.1)";
                    el.style.background = "rgba(7,20,38,0.5)";
                  }}
                >
                  {/* Stage number */}
                  <span
                    className="text-xs font-mono tracking-[0.22em] mb-1 block"
                    style={{ color: "rgba(0,229,255,0.35)" }}
                  >
                    {stage.number}
                  </span>

                  {/* Tag */}
                  <span className="label-tag mb-4 block">{stage.tag}</span>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-4 tracking-wide"
                    style={{ color: "var(--cyan-dim)" }}
                  >
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stage.desc}
                  </p>

                  {/* Metrics */}
                  <div
                    className="mt-6 pt-5 grid grid-cols-3 gap-3"
                    style={{ borderTop: "1px solid rgba(0,229,255,0.07)" }}
                  >
                    {stage.metrics.map((m, j) => (
                      <div key={j}>
                        <p
                          className="text-[9px] tracking-[0.15em] uppercase mb-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {m.label}
                        </p>
                        <p
                          className="text-[11px] font-semibold font-mono"
                          style={{ color: "var(--cyan-dim)" }}
                        >
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── LIVE STATUS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-between px-6 py-4 rounded-xl"
          style={{
            background: "rgba(7,20,38,0.5)",
            border: "1px solid rgba(0,229,255,0.08)",
          }}
        >
          <div className="flex items-center gap-6">
            {[
              { label: "Pipeline", value: "ACTIVE" },
              { label: "Latency (P50)", value: "1.84ms" },
              { label: "Signals/sec", value: "4,200" },
              { label: "Fill Rate", value: "99.3%" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="text-[9px] tracking-[0.15em] uppercase hidden sm:block"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.label}:
                </span>
                <span
                  className="text-xs font-semibold font-mono"
                  style={{ color: "var(--cyan-dim)" }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-data-blink"
              style={{ background: "#00e5a0" }}
            />
            <span
              className="text-[9px] tracking-[0.2em] uppercase hidden sm:block"
              style={{ color: "#00e5a0" }}
            >
              Live
            </span>
          </div>
        </motion.div>

      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,229,255,0.08), transparent)",
        }}
      />
    </section>
  );
}

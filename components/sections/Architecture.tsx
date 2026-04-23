"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/Glowcard";

const FEATURES = [
  {
    icon: "◈",
    tag: "SIGNAL",
    title: "Probabilistic Market Intelligence",
    desc: "A Bayesian ensemble of 180+ alpha factors continuously evaluates price microstructure, order flow imbalance, cross-asset regime state, and alternative data streams. Output is a probability-weighted position vector — updated at sub-100ms resolution.",
    accent: "rgba(0,229,255,0.55)",
  },
  {
    icon: "◇",
    tag: "STRATEGY",
    title: "Multi-Asset Quant Strategies",
    desc: "Portfolio construction spans equities, listed futures, and FX with real-time risk budgeting. Factor neutrality, drawdown limits, and concentration bounds are enforced within the construction loop — not as a post-process — eliminating the lag inherent in traditional risk overlays.",
    accent: "rgba(0,200,255,0.5)",
  },
  {
    icon: "◉",
    tag: "EXECUTION",
    title: "Deterministic Order Routing",
    desc: "QUBEX produces identical outputs under identical conditions, every time. The OMS resolves venue selection, pre-trade gating, and fill attribution at microsecond granularity with a full, immutable audit trail on every order cycle. Non-determinism is not tolerated.",
    accent: "rgba(0,180,240,0.5)",
  },
  {
    icon: "◎",
    tag: "RISK",
    title: "Embedded Risk & Compliance",
    desc: "Risk management is an architectural concern, not an afterthought. VaR budgets, sector exposure limits, and drawdown kill-switches are evaluated on every order cycle. Compliance rules are version-controlled, independently testable, and produce full regulatory audit output.",
    accent: "rgba(0,160,220,0.45)",
  },
];

export default function Architecture() {
  return (
    <section id="technology" className="py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── HEADER ── */}
        <Reveal>
          <div className="mb-20">
            <p className="label-tag mb-4">[ SYSTEM ARCHITECTURE ]</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-gradient-white">
              Four Layers. Zero Ambiguity.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Every component of QUBEX is purpose-designed for a specific function,
              independently verifiable, and operates within formally specified behaviour
              boundaries. Complexity is contained — not distributed.
            </p>
          </div>
        </Reveal>

        {/* ── CARDS ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlowCard>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="card-base p-7 h-full flex flex-col"
                >
                  {/* Icon + Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl" style={{ color: item.accent }}>
                      {item.icon}
                    </span>
                    <span className="label-tag">{item.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold mb-3 tracking-wide leading-snug" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed flex-grow" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="mt-6 h-px w-8 transition-all duration-300 group-hover:w-16"
                    style={{ background: item.accent }}
                  />
                </motion.div>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        {/* ── BOTTOM CONNECTOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-4 gap-5"
        >
          {FEATURES.map((_, i) => (
            <div
              key={i}
              className="h-px"
              style={{
                background: `linear-gradient(to right, rgba(0,229,255,${0.06 + i * 0.04}), rgba(0,229,255,${0.02 + i * 0.02}))`,
              }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

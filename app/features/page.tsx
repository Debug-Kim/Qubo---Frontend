import type { Metadata } from "next";
import CTABridge from "@/components/sections/CTABridge";

export const metadata: Metadata = {
  title: "Features — QUBEX Engine | QUBO LLC",
  description:
    "Deep breakdown of QUBEX capabilities: probabilistic signal intelligence, multi-asset quant strategies, deterministic execution, and institutional-grade infrastructure.",
};

const FEATURES = [
  {
    title: "Probabilistic Market Intelligence",
    desc: "QUBEX operates a multi-layer signal architecture combining price microstructure, order flow imbalance, and cross-asset correlations.",
    specs: [
      "180+ alpha factors",
      "Sub-100ms signal refresh",
      "Cross-asset regime detection",
      "Bayesian ensemble weighting",
    ],
  },
  {
    title: "Multi-Asset Quant Strategies",
    desc: "Deploy strategies across equities, crypto, and derivatives with unified execution logic.",
    specs: [
      "Pairs trading models",
      "Mean reversion engines",
      "Momentum clusters",
      "Volatility arbitrage",
    ],
  },
  {
    title: "Deterministic Execution Engine",
    desc: "Engineered for precision—every microsecond is accounted for in trade execution.",
    specs: [
      "Low-latency routing",
      "Slippage minimization",
      "Execution scheduling",
      "Risk-aware order flow",
    ],
  },
  {
    title: "Risk & Compliance Layer",
    desc: "Built-in safeguards ensure institutional-grade risk management.",
    specs: [
      "Real-time exposure tracking",
      "Automated stop systems",
      "Position sizing controls",
      "Compliance audit logs",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative z-10 px-6 md:px-12 lg:px-24 py-20 space-y-24">

      {/* ─── HEADER ───────────────────────────── */}
      <section className="max-w-4xl">
        <p className="text-cyan-400 text-sm tracking-widest uppercase mb-3">
          QUBEX Capabilities
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Engineered for
          <span className="text-cyan-400"> Deterministic Execution</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          QUBEX is designed to operate at institutional scale, combining
          probabilistic intelligence with deterministic execution to deliver
          consistent performance across multiple asset classes.
        </p>
      </section>

      {/* ─── FEATURES GRID ───────────────────── */}
      <section className="grid md:grid-cols-2 gap-8">

        {FEATURES.map((feature, i) => (
          <div
            key={i}
            className="
              p-8 rounded-xl transition-all duration-300
              hover:bg-[rgba(7,20,38,0.75)]
              hover:border-[rgba(0,229,255,0.25)]
              hover:scale-[1.02]
            "
            style={{
              background: "rgba(7,20,38,0.5)",
              border: "1px solid rgba(0,229,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {feature.desc}
            </p>

            {/* Specs */}
            <ul className="space-y-2">
              {feature.specs.map((spec, idx) => (
                <li
                  key={idx}
                  className="text-sm text-cyan-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </section>

      {/* ─── CTA SECTION ───────────────────── */}
      <CTABridge
        label="QUBEX ENGINE"
        heading="Explore the Full Architecture"
        body="Dive deeper into how QUBEX processes signals, manages risk, and executes strategies with precision."
        cta="View Architecture"
        href="/features"
      />

    </main>
  );
}
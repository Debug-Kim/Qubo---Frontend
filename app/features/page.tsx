import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/ui/Reveal";
import CTABridge from "@/components/sections/CTABridge";

export const metadata: Metadata = {
  title: "Features — QUBEX Engine | QUBO LLC",
  description:
    "Deep breakdown of QUBEX capabilities: probabilistic signal intelligence, multi-asset quant strategies, deterministic execution, and institutional risk systems.",
};

const CORE_CAPABILITIES = [
  {
    icon: "◈",
    tag: "SIGNAL LAYER",
    title: "Probabilistic Market Intelligence",
    desc: "QUBEX operates a multi-layer signal architecture that fuses price microstructure, order flow imbalance, cross-asset correlations, and macro regime indicators into a unified probabilistic state vector. Signals are updated at sub-100ms resolution across the full opportunity universe.",
    specs: ["180+ alpha factors", "Sub-100ms signal refresh", "Cross-asset regime detection", "Bayesian ensemble weighting"],
  },
  {
    icon: "◈",
    tag: "STRATEGY LAYER",
    title: "Multi-Asset Quantitative Strategies",
    desc: "The strategy layer translates signal states into position targets across equities, listed futures, and FX. Portfolio construction is constrained by a risk model that enforces factor neutrality, drawdown limits, and concentration bounds in real time — not as a post-process.",
    specs: ["Equities · Futures · FX", "Real-time risk budgeting", "Factor-neutral construction", "Dynamic rebalancing thresholds"],
  },
  {
    icon: "◈",
    tag: "EXECUTION LAYER",
    title: "Deterministic Execution Infrastructure",
    desc: "QUBEX routes orders through a deterministic execution engine with guaranteed behavior under defined conditions. The order management system enforces pre-trade risk checks, venue selection logic, and fill attribution at microsecond granularity — with full audit trail.",
    specs: ["< 2ms median latency (P50)", "Pre-trade risk gating", "Smart order routing", "Microsecond-resolution audit log"],
  },
  {
    icon: "◈",
    tag: "RISK LAYER",
    title: "Real-Time Risk & Compliance",
    desc: "Risk management is embedded at every layer of the stack — not bolted on. Position limits, VaR budgets, sector exposures, and drawdown triggers are evaluated on each order cycle. Compliance rules are version-controlled and independently auditable.",
    specs: ["Order-level risk evaluation", "Live VaR monitoring", "Automated breach response", "Version-controlled rule sets"],
  },
];

const TECH_SPECS = [
  { category: "Execution", items: ["Deterministic OMS", "Smart Order Router", "FIX/ITCH adapters", "Pre-trade risk engine"] },
  { category: "Data", items: ["L2/L3 order book", "Cross-asset tick feeds", "Alternative data integration", "Sub-100ms normalization"] },
  { category: "Risk", items: ["Real-time VaR", "Factor exposure limits", "Drawdown kill switch", "Regulatory reporting"] },
  { category: "Infrastructure", items: ["Co-location ready", "Redundant connectivity", "99.97% uptime SLA", "Full disaster recovery"] },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative z-10 min-h-[55vh] flex flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="label-tag mb-6">[ QUBEX ENGINE ]</p>
            <h1
              className="font-bold tracking-[-0.02em] leading-none text-gradient-white mb-8"
              style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
            >
              The Architecture<br />
              <span className="text-gradient-cyan">Behind the Edge</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              QUBEX is not a trading system. It is a deterministic execution infrastructure —
              purpose-engineered to translate quantitative insight into verified, reproducible
              market action at institutional latency and scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <SectionWrapper delay={0.05}>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="label-tag mb-4">[ SYSTEM ARCHITECTURE ]</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-gradient-white">
                Four Layers. One Engine.
              </h2>
            </Reveal>

            <div className="space-y-6">
              {CORE_CAPABILITIES.map((cap, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div
                    className="p-8 rounded-xl group transition-all duration-300"
                    style={{
                      background: "rgba(7,20,38,0.5)",
                      border: "1px solid rgba(0,229,255,0.1)",
                      backdropFilter: "blur(12px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,229,255,0.22)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(7,20,38,0.75)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,229,255,0.1)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(7,20,38,0.5)";
                    }}
                  >
                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-lg text-[rgba(0,229,255,0.5)]">{cap.icon}</span>
                          <span className="label-tag">{cap.tag}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">{cap.title}</h3>
                        <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-2xl">{cap.desc}</p>
                      </div>

                      <div className="shrink-0 md:text-right">
                        <ul className="space-y-2">
                          {cap.specs.map((s, j) => (
                            <li key={j} className="flex items-center gap-2 md:justify-end">
                              <span
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{ background: "rgba(0,229,255,0.5)" }}
                              />
                              <span className="text-xs font-mono text-[var(--text-muted)]">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── TECH SPECS ── */}
      <SectionWrapper delay={0.05}>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="label-tag mb-4">[ TECHNICAL SPECIFICATIONS ]</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-gradient-white">
                Built to Spec
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TECH_SPECS.map((group, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    className="p-6 rounded-xl h-full"
                    style={{
                      background: "rgba(7,20,38,0.5)",
                      border: "1px solid rgba(0,229,255,0.1)",
                    }}
                  >
                    <p className="label-tag mb-5">{group.category}</p>
                    <ul className="space-y-3">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <div
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "rgba(0,229,255,0.45)" }}
                          />
                          <span className="text-xs text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── PERFORMANCE CALLOUT ── */}
      <SectionWrapper delay={0.05}>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div
                className="p-12 rounded-2xl text-center"
                style={{
                  background: "rgba(7,20,38,0.6)",
                  border: "1px solid rgba(0,229,255,0.12)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 0 80px rgba(0,229,255,0.05), inset 0 1px 0 rgba(0,229,255,0.06)",
                }}
              >
                <p className="label-tag mb-6 text-center">[ PERFORMANCE ENVELOPE ]</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                  {[
                    { value: "< 2ms", label: "Median Execution Latency" },
                    { value: "99.97%", label: "System Availability" },
                    { value: "180+", label: "Active Alpha Factors" },
                    { value: "3", label: "Asset Classes Live" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-2">{stat.value}</p>
                      <p className="text-xs text-[var(--text-muted)] leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto">
                  All performance metrics are measured in live production environments.
                  Historical results are independently verifiable on request.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionWrapper>

      {/* ── CTA ── */}
      <CTABridge
        label="NEXT STEP"
        heading="Ready to Engage?"
        body="We work with a limited number of institutional partners. If QUBEX aligns with your operational requirements, we'd like to hear from you."
        cta="Contact QUBO"
        href="/contact"
      />
    </>
  );
}

import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/ui/Reveal";
import CTABridge from "@/components/sections/CTABridge";

export const metadata: Metadata = {
  title: "About — QUBO LLC",
  description:
    "QUBO LLC is an institutional quantitative trading firm engineering deterministic financial systems at the frontier of market structure.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Precision Over Speed",
    desc: "We believe accuracy of signal is the ultimate edge. Every model, filter, and execution path is designed to eliminate ambiguity before it reaches the market.",
  },
  {
    number: "02",
    title: "Deterministic Infrastructure",
    desc: "Non-determinism is not acceptable in critical systems. QUBEX is engineered to produce identical outputs under identical conditions — every time.",
  },
  {
    number: "03",
    title: "Risk-First Design",
    desc: "Capital preservation is not a constraint on alpha generation — it is the foundation of sustainable performance. Our systems encode risk limits at the architecture level.",
  },
  {
    number: "04",
    title: "Institutional Accountability",
    desc: "We operate to the same standards as Tier 1 counterparties: full audit trails, documented model governance, and transparent reporting at every layer.",
  },
];

const TIMELINE = [
  { year: "2021", event: "QUBO LLC incorporated. Core research team assembled." },
  { year: "2022", event: "Proprietary signal framework and backtesting infrastructure completed." },
  { year: "2023", event: "QUBEX alpha engine enters live simulation across multi-asset universe." },
  { year: "2024", event: "Deterministic execution layer deployed. Sub-2ms median latency achieved." },
  { year: "2025", event: "Risk & compliance framework certified. Institutional partnership program launched." },
  { year: "2026", event: "QUBEX enters expanded deployment across equities, futures, and FX." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative z-10 min-h-[55vh] flex flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="label-tag mb-6">[ THE FIRM ]</p>
            <h1
              className="font-bold tracking-[-0.02em] leading-none text-gradient-white mb-8"
              style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
            >
              Built for Institutional<br />
              <span className="text-gradient-cyan">Precision</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              QUBO LLC is a quantitative trading firm engineering the systems that institutional
              markets require — deterministic, auditable, and built to perform under every
              market condition. We do not build demos. We build infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ── */}
      <SectionWrapper delay={0.05}>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="label-tag mb-4">[ MISSION ]</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-gradient-white">
                Quantitative Systems.<br />Institutional Standards.
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-4">
                QUBO LLC exists to close the gap between quantitative research and production-grade
                execution. Our singular focus is QUBEX — a trading engine designed from first
                principles to meet the reliability, latency, and compliance requirements that
                institutional deployment demands.
              </p>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                We do not offer retail tools or consumer-grade analytics. Every component of
                our stack is engineered for counterparties who operate at scale and require
                verifiable, auditable performance.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div
                className="p-8 rounded-xl"
                style={{
                  background: "rgba(7,20,38,0.6)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <p className="label-tag mb-6">[ SYSTEM STATUS ]</p>
                {[
                  { label: "Engine Version", value: "QUBEX v2.4" },
                  { label: "Asset Classes", value: "Equities · Futures · FX" },
                  { label: "Execution Mode", value: "Deterministic" },
                  { label: "Risk Framework", value: "Certified" },
                  { label: "Latency (P50)", value: "< 2ms" },
                  { label: "Availability", value: "99.97%" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: i < 5 ? "1px solid rgba(0,229,255,0.07)" : "none" }}
                  >
                    <span className="text-xs tracking-wide text-[var(--text-muted)]">{item.label}</span>
                    <span className="text-xs font-semibold font-mono text-[var(--cyan-dim)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </SectionWrapper>

      {/* ── PRINCIPLES ── */}
      <SectionWrapper delay={0.05}>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="label-tag mb-4">[ PRINCIPLES ]</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-gradient-white">
                How We Think About Systems
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {PRINCIPLES.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div
                    className="p-8 rounded-xl transition-all duration-300 card-base h-full"
                  >
                    <span className="text-xs font-mono tracking-[0.2em] mb-4 block" style={{ color: "rgba(0,229,255,0.4)" }}>
                      {item.number}
                    </span>
                    <h3 className="text-base font-semibold mb-3 text-[var(--cyan-dim)]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── TIMELINE ── */}
      <SectionWrapper delay={0.05}>
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="label-tag mb-4">[ HISTORY ]</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-gradient-white">
                Development Timeline
              </h2>
            </Reveal>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[3.5rem] top-0 bottom-0 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(0,229,255,0.2), transparent)" }}
              />

              <div className="space-y-10">
                {TIMELINE.map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex gap-8 items-start">
                      <div
                        className="min-w-[5rem] text-right font-mono text-sm font-semibold shrink-0"
                        style={{ color: "var(--cyan-dim)" }}
                      >
                        {item.year}
                      </div>
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0 hidden md:block"
                        style={{ background: "rgba(0,229,255,0.5)", boxShadow: "0 0 8px rgba(0,229,255,0.4)" }}
                      />
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)] pt-0.5">
                        {item.event}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ── CTA ── */}
      <CTABridge
        label="NEXT STEP"
        heading="See the Engine in Detail"
        body="From probabilistic signal layers to deterministic order routing — explore every system QUBEX is built on."
        cta="Explore Features"
        href="/features"
      />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import Pipeline from "@/components/sections/Pipeline";
import Architecture from "@/components/sections/Architecture";
import SuperCore from "@/components/sections/SuperCore";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Insights from "@/components/sections/Insights";
import CTABridge from "@/components/sections/CTABridge";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Home() {
  return (
    <>
      {/* ── HERO (z-10) ── */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* ── PIPELINE ── */}
      <SectionWrapper delay={0.05}>
        <Pipeline />
      </SectionWrapper>

      {/* ── CTA BRIDGE → /features ── */}
      <CTABridge
        label="QUBEX ENGINE"
        heading="Engineered for Deterministic Execution"
        body="Every microsecond is accounted for. Explore the full architecture behind QUBEX — from signal ingestion to order routing."
        cta="Explore the Architecture"
        href="/features"
      />

      {/* ── ARCHITECTURE ── */}
      <SectionWrapper delay={0.1}>
        <Architecture />
      </SectionWrapper>

      {/* ── SUPER CORE ── */}
      <SectionWrapper delay={0.1}>
        <SuperCore />
      </SectionWrapper>

      {/* ── DASHBOARD PREVIEW ── */}
      <SectionWrapper delay={0.1}>
        <DashboardPreview />
      </SectionWrapper>

      {/* ── CTA BRIDGE → /about ── */}
      <CTABridge
        label="THE FIRM"
        heading="Precision at Institutional Scale"
        body="QUBO LLC is purpose-built for quantitative excellence. Learn about our mission, methodology, and the principles that drive every system we build."
        cta="About QUBO"
        href="/about"
        align="right"
      />

      {/* ── INSIGHTS ── */}
      <section className="relative z-10">
        <Insights />
      </section>

      {/* ── FINAL CTA → /contact ── */}
      <CTABridge
        label="GET IN TOUCH"
        heading="Ready to Discuss a Partnership?"
        body="We work selectively with institutional counterparties, allocators, and strategic partners. Reach out to begin the conversation."
        cta="Contact QUBO"
        href="/contact"
      />
    </>
  );
}

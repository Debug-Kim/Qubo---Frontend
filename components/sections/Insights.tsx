"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const INSIGHTS = [
  {
    img: "/Insights/1 - new.jpg",
    tag: "Market Microstructure",
    title: "Order Flow Imbalance as a Short-Horizon Predictor",
    excerpt: "How real-time OFI signals translate into statistically significant short-horizon alpha across liquid futures markets.",
  },
  {
    img: "/Insights/2 - new.jpg",
    tag: "Execution Research",
    title: "Determinism in High-Frequency OMS Design",
    excerpt: "The engineering constraints and design trade-offs required to guarantee reproducible execution outcomes at microsecond resolution.",
  },
  {
    img: "/Insights/3 - new.jpg",
    tag: "Risk Architecture",
    title: "Embedding Risk at the Kernel Level",
    excerpt: "Why post-trade risk overlays fail under stress — and how architecture-level constraints enforce limits that survive market dislocations.",
  },
  {
    img: "/Insights/4 - new.jpg",
    tag: "Quantitative Methods",
    title: "Bayesian Ensembles for Multi-Factor Alpha",
    excerpt: "A practical framework for combining heterogeneous alpha signals with uncertainty-aware weighting that avoids overfitting to historical regimes.",
  },
];

export default function Insights() {
  return (
    <section id="research" className="py-32 scroll-mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* DIVIDER */}
        <div
          className="mb-16 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(0,229,255,0.15), transparent)",
          }}
        />

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="label-tag mb-4">[ RESEARCH & INSIGHTS ]</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-white">
              The Thinking Behind<br />the Systems
            </h2>
          </div>

          <Link href="/contact">
            <span
              className="hidden md:block text-xs tracking-widest uppercase transition-colors duration-200 pb-px cursor-pointer"
              style={{
                color: "var(--text-muted)",
                borderBottom: "1px solid rgba(0,229,255,0.2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Request full library →
            </span>
          </Link>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden rounded-xl mb-5"
                style={{
                  height: 190,
                  border: "1px solid rgba(0,229,255,0.08)",
                }}
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: "rgba(4,13,26,0.28)" }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,229,255,0.1) 0%, transparent 60%)",
                  }}
                />

                {/* Tag pill */}
                <div
                  className="absolute top-3 left-3 px-2 py-1 rounded text-[9px] tracking-[0.2em] uppercase font-medium"
                  style={{
                    background: "rgba(4,13,26,0.82)",
                    border: "1px solid rgba(0,229,255,0.15)",
                    color: "var(--cyan-dim)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.tag}
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="text-sm font-semibold leading-snug tracking-wide mb-2 transition-colors duration-200 group-hover:text-[var(--cyan-dim)]"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>

              {/* EXCERPT */}
              <p
                className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "var(--text-muted)" }}
              >
                {item.excerpt}
              </p>

              {/* READ MORE */}
              <p
                className="mt-2 text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                style={{ color: "rgba(0,229,255,0.5)" }}
              >
                Read paper →
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

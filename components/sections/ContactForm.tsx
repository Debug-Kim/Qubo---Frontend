"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const INQUIRY_TYPES = [
  "Institutional Partnership",
  "Capital Allocation",
  "Technology Licensing",
  "Strategic Advisory",
  "Press & Media",
  "Other",
];

export default function ContactForm() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative z-10 min-h-[40vh] flex flex-col justify-center px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="label-tag mb-6">[ CONTACT ]</p>
            <h1
              className="font-bold tracking-[-0.02em] leading-none text-gradient-white mb-8"
              style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
            >
              Begin the<br />
              <span className="text-gradient-cyan">Conversation</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              QUBO LLC engages selectively with institutional counterparties, capital
              allocators, and strategic partners. Complete the form below and our team
              will respond within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="relative z-10 py-16 px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16">

          {/* LEFT — INFO */}
          <Reveal>
            <div>
              <p className="label-tag mb-8">[ ENGAGEMENT CRITERIA ]</p>

              <div className="space-y-8">
                {[
                  {
                    title: "Institutional Partners",
                    desc: "Family offices, hedge funds, proprietary trading firms, and asset managers seeking quantitative infrastructure or co-investment structures.",
                  },
                  {
                    title: "Capital Allocators",
                    desc: "Allocators exploring quantitative strategies with verifiable, model-governed performance attribution and institutional-grade reporting.",
                  },
                  {
                    title: "Technology Partners",
                    desc: "Exchanges, prime brokers, data vendors, and infrastructure providers seeking integration with QUBEX execution systems.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
                    <div
                      className="mt-4 h-px w-full"
                      style={{ background: "rgba(0,229,255,0.07)" }}
                    />
                  </div>
                ))}
              </div>

              {/* CONTACT DETAILS */}
              <div className="mt-12 space-y-3">
                <p className="label-tag mb-4">[ DIRECT CONTACT ]</p>
                {[
                  { label: "General",            value: "contact@qubo.llc" },
                  { label: "Investor Relations", value: "ir@qubo.llc"      },
                  { label: "Response Time",      value: "≤ 2 business days" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-[var(--text-muted)] w-32 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-[var(--cyan-dim)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT — FORM */}
          <Reveal delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(0,229,255,0.1)",
                    border: "1px solid rgba(0,229,255,0.3)",
                  }}
                >
                  <span className="text-2xl text-[var(--cyan)]">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[var(--text-muted)] max-w-sm">
                  Thank you for reaching out. A member of the QUBO team will contact
                  you within two business days.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-10 rounded-xl"
                style={{
                  background: "rgba(7,20,38,0.5)",
                  border: "1px solid rgba(0,229,255,0.1)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* INQUIRY TYPE */}
                <div>
                  <label className="label-tag block mb-3">Inquiry Type</label>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelected(type)}
                        className="px-3 py-1.5 rounded text-xs tracking-wide transition-all duration-200"
                        style={{
                          background:
                            selected === type
                              ? "rgba(0,229,255,0.12)"
                              : "rgba(7,20,38,0.8)",
                          border:
                            selected === type
                              ? "1px solid rgba(0,229,255,0.4)"
                              : "1px solid rgba(0,229,255,0.1)",
                          color:
                            selected === type
                              ? "var(--cyan-dim)"
                              : "var(--text-muted)",
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* NAME + ORG */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Full Name",     placeholder: "Jane Smith",        name: "name" },
                    { label: "Organization",  placeholder: "Acme Capital LP",   name: "org"  },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="label-tag block mb-2">{field.label}</label>
                      <input
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(4,13,26,0.8)",
                          border: "1px solid rgba(0,229,255,0.1)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.border =
                            "1px solid rgba(0,229,255,0.35)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.border =
                            "1px solid rgba(0,229,255,0.1)")
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="label-tag block mb-2">Institutional Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="j.smith@acmecapital.com"
                    required
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(4,13,26,0.8)",
                      border: "1px solid rgba(0,229,255,0.1)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border =
                        "1px solid rgba(0,229,255,0.35)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border =
                        "1px solid rgba(0,229,255,0.1)")
                    }
                  />
                </div>

                {/* AUM */}
                <div>
                  <label className="label-tag block mb-2">AUM / Scale (optional)</label>
                  <input
                    type="text"
                    name="aum"
                    placeholder="e.g. $500M – $2B"
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(4,13,26,0.8)",
                      border: "1px solid rgba(0,229,255,0.1)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border =
                        "1px solid rgba(0,229,255,0.35)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border =
                        "1px solid rgba(0,229,255,0.1)")
                    }
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="label-tag block mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Briefly describe your interest and how you believe QUBO can be of value."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(4,13,26,0.8)",
                      border: "1px solid rgba(0,229,255,0.1)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border =
                        "1px solid rgba(0,229,255,0.35)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border =
                        "1px solid rgba(0,229,255,0.1)")
                    }
                  />
                </div>

                {/* SUBMIT */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 32px rgba(0,229,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded text-sm font-semibold tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 100%)",
                    color: "#040d1a",
                  }}
                >
                  Submit Inquiry
                </motion.button>

                <p className="text-[10px] text-center text-[var(--text-muted)] leading-relaxed">
                  By submitting, you confirm this is a professional or institutional
                  inquiry. QUBO LLC does not engage with retail inquiries.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

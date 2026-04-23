"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABridgeProps {
  label: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
  align?: "left" | "right" | "center";
}

export default function CTABridge({
  label,
  heading,
  body,
  cta,
  href,
  align = "left",
}: CTABridgeProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative z-10 py-20 px-6"
    >
      {/* Divider lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,229,255,0.12), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,229,255,0.08), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            align === "right"
              ? "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,229,255,0.03), transparent 70%)"
              : "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(0,229,255,0.03), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${alignClass} max-w-2xl ${align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : ""}`}>
          <p className="label-tag mb-4">{`[ ${label} ]`}</p>

          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-gradient-white"
            style={{ lineHeight: 1.2 }}
          >
            {heading}
          </h2>

          <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "var(--text-secondary)" }}>
            {body}
          </p>

          <Link href={href}>
            <motion.span
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 32px rgba(0,229,255,0.28)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-md text-xs font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 100%)",
                color: "#040d1a",
              }}
            >
              {cta}
              <ArrowRight size={13} />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

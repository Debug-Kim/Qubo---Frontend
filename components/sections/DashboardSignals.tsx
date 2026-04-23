"use client";

import { motion } from "framer-motion";
import TradeSignals from "@/components/ui/TradeSignals";

const STREAM_METRICS = [
  { label: "Latency",     value: "1.84", unit: "ms" },
  { label: "Signals/sec", value: "4,200", unit: ""   },
  { label: "Hit Rate",    value: "73.2",  unit: "%"  },
];

export default function DashboardSignals() {
  return (
    <div className="relative rounded-xl overflow-hidden"
      style={{
        border: "1px solid rgba(0,229,255,0.12)",
        background: "rgba(7,20,38,0.6)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,229,255,0.06)",
      }}
    >
      {/* Panel header bar */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid rgba(0,229,255,0.08)" }}
      >
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            {["rgba(255,80,100,0.5)", "rgba(255,180,0,0.5)", "rgba(0,229,170,0.5)"].map(
              (c, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              )
            )}
          </div>
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            QUBEX / SIGNAL-STREAM
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-data-blink"
            style={{ background: "#00e5a0" }}
          />
          <span
            className="text-[9px] tracking-[0.2em] uppercase"
            style={{ color: "#00e5a0" }}
          >
            Live
          </span>
        </div>
      </div>

      {/* Chart area */}
      <div className="relative" style={{ height: 200 }}>
        <TradeSignals />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "60px 40px",
          }}
        />
      </div>

      {/* Footer metrics bar */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderTop: "1px solid rgba(0,229,255,0.08)" }}
      >
        <div className="flex gap-8 flex-wrap">
          {STREAM_METRICS.map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="text-[10px] tracking-[0.15em] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                {m.label}:
              </span>
              <span
                className="text-xs font-semibold font-mono"
                style={{ color: "var(--cyan-dim)" }}
              >
                {m.value}{m.unit}
              </span>
            </div>
          ))}
        </div>
        <span
          className="text-[9px] font-mono tracking-widest hidden md:block"
          style={{ color: "rgba(0,229,255,0.2)" }}
        >
          ENGINE::ACTIVE
        </span>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

const PLATFORM_LINKS = [
  { name: "Engine", href: "/#engine" },
  { name: "Features", href: "/features" },
  { name: "Research", href: "/#research" },
  { name: "Documentation", href: "/contact" },
];

const COMPANY_LINKS = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/contact" },
  { name: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/contact" },
  { name: "Terms of Service", href: "/contact" },
  { name: "Cookie Policy", href: "/contact" },
];

function FooterColumn({ heading, links }: { heading: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <p
        className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
        style={{ color: "var(--text-primary)" }}
      >
        {heading}
      </p>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden z-10"
      style={{ borderTop: "1px solid rgba(0,229,255,0.08)" }}
    >
      {/* TOP GLOW */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden
        style={{
          width: 800,
          height: 200,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-16">

          {/* BRAND */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[0.1em] mb-4 inline-block transition-colors duration-200"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            >
              QUBO
            </Link>
            <p className="text-sm leading-relaxed mb-6 mt-1" style={{ color: "var(--text-muted)" }}>
              Institutional quantitative infrastructure. Engineered for precision at scale.
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] tracking-[0.2em] uppercase"
              style={{
                background: "rgba(0,229,255,0.05)",
                border: "1px solid rgba(0,229,255,0.1)",
                color: "var(--text-muted)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
              />
              Systems Operational
            </div>
          </div>

          <FooterColumn heading="Platform" links={PLATFORM_LINKS} />
          <FooterColumn heading="Company"  links={COMPANY_LINKS}  />
          <FooterColumn heading="Legal"    links={LEGAL_LINKS}    />
        </div>

        {/* BOTTOM BAR */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,229,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 QUBO LLC. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: "rgba(0,229,255,0.2)" }}>
            QUBEX ENGINE :: ACTIVE
          </p>
        </div>
      </div>
    </footer>
  );
}

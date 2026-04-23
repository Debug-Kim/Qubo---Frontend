"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Engine",    href: "/#engine"     },
  { name: "Features",  href: "/features"    },
  { name: "About",     href: "/about"       },
  { name: "Research",  href: "/#research"   },
];

function NavLink({ name, href, active }: { name: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="relative group text-sm tracking-wide transition-colors duration-200 hover:text-white"
      style={{ color: active ? "var(--cyan-dim)" : "var(--text-secondary)" }}
    >
      {name}
      <span
        className="absolute left-0 -bottom-px h-px transition-all duration-300"
        style={{
          background: "var(--cyan)",
          width: active ? "100%" : "0%",
        }}
      />
      {!active && (
        <span
          className="absolute left-0 -bottom-px h-px w-0 group-hover:w-full transition-all duration-300"
          style={{ background: "rgba(0,229,255,0.5)" }}
        />
      )}
    </Link>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const bgOpacity   = useTransform(scrollY, [0, 120], [0, 0.92]);
  const borderAlpha = useTransform(scrollY, [0, 120], [0.06, 0.18]);
  const blur        = useTransform(scrollY, [0, 120], [0, 20]);

  const backgroundColor = useMotionTemplate`rgba(4,13,26,${bgOpacity})`;
  const backdropFilter  = useMotionTemplate`blur(${blur}px)`;
  const borderBottom    = useMotionTemplate`1px solid rgba(0,229,255,${borderAlpha})`;

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter, borderBottom }}
        className="fixed top-0 left-0 w-full z-50 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-base font-semibold tracking-[0.12em] transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          >
            QUBO
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.href}
                name={item.name}
                href={item.href}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          {/* RIGHT CTA */}
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(0,229,255,0.35)" }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:inline-block relative px-5 py-2 rounded text-xs font-semibold tracking-widest uppercase overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 100%)",
                  color: "#040d1a",
                }}
              >
                Request Access
              </motion.span>
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              className="md:hidden p-1 transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="fixed top-16 left-0 w-full z-40 overflow-hidden md:hidden"
        style={{
          background: "rgba(4,13,26,0.97)",
          borderBottom: "1px solid rgba(0,229,255,0.12)",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-left text-sm tracking-wide py-3 transition-colors duration-200 hover:text-white"
              style={{
                color: isActive(item.href) ? "var(--cyan-dim)" : "var(--text-secondary)",
                borderBottom: "1px solid rgba(0,229,255,0.06)",
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            <span
              className="block mt-3 py-3 rounded text-xs font-semibold tracking-widest uppercase text-center cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 100%)",
                color: "#040d1a",
              }}
            >
              Request Access
            </span>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

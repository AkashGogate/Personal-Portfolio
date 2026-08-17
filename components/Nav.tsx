"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { scrollToSection } from "@/lib/scrollToSection";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

const links = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Featured Project", href: "featured-project" },
  { label: "Experience", href: "experience" },
  { label: "Accomplishments", href: "accomplishments" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  return theme === "dark" ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [showFab, setShowFab] = useState(false);
  const { theme, toggle } = useTheme();
  const progressRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pastRef = useRef(false);
  const navigatingRef = useRef(false);
  const navTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowFab(window.scrollY > window.innerHeight * 0.6);

      const past = window.scrollY > 50;
      if (past !== pastRef.current) {
        pastRef.current = past;
        if (borderRef.current) borderRef.current.style.opacity = past ? "1" : "0";
        if (headerRef.current) {
          const dark = document.documentElement.classList.contains("dark");
          headerRef.current.style.background = past
            ? dark ? "rgba(14,14,14,0.88)" : "rgba(232,231,229,0.88)"
            : "var(--bg)";
          headerRef.current.style.backdropFilter = past ? "blur(12px)" : "none";
          (headerRef.current.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = past ? "blur(12px)" : "none";
        }
      }

      if (progressRef.current) {
        const total = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        progressRef.current.style.width = `${(window.scrollY / total) * 100}%`;
      }

      if (navigatingRef.current) return;

      let current = links[0].href;
      let bestTop = -Infinity;
      for (const l of links) {
        const el = document.getElementById(l.href);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120 && top > bestTop) {
          bestTop = top;
          current = l.href;
        }
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    const onScrollEnd = () => {
      navigatingRef.current = false;
      if (navTimeoutRef.current) {
        window.clearTimeout(navTimeoutRef.current);
        navTimeoutRef.current = null;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  useEffect(() => {
    if (!headerRef.current || window.scrollY <= 50) return;
    const dark = document.documentElement.classList.contains("dark");
    headerRef.current.style.background = dark ? "rgba(14,14,14,0.88)" : "rgba(232,231,229,0.88)";
  }, [theme]);

  const navigateTo = (id: string) => {
    navigatingRef.current = true;
    setActive(id);
    if (navTimeoutRef.current) window.clearTimeout(navTimeoutRef.current);
    navTimeoutRef.current = window.setTimeout(() => {
      navigatingRef.current = false;
    }, 1000);
    scrollToSection(id);
  };

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(id);
    setOpen(false);
  };

  return (
    <>
    <header
      ref={headerRef}
      className="nav-header fixed top-0 left-0 right-0 z-50"
      style={{ background: "var(--bg)" }}
    >
      <div ref={progressRef} style={{ position: "absolute", top: 0, left: 0, height: "1px", background: "var(--mint)", width: "0%", zIndex: 10 }} />
      <div ref={borderRef} className="nav-border" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "var(--border)", opacity: 0 }} />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" onClick={go("hero")} className="font-display hover-mint" style={{ color: "var(--primary)", fontWeight: 600, fontSize: "1.25rem" }}>
          Akash Gogate
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={`#${l.href}`}
              onClick={go(l.href)}
              aria-current={active === l.href ? "page" : undefined}
              className="font-body nav-link relative group"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                paddingBottom: "2px",
              }}
            >
              {l.label}
              <span
                className="nav-underline absolute -bottom-0.5 left-0 h-px"
                style={{ background: "var(--mint)" }}
              />
            </a>
          ))}
          <a
            href={`${BASE}/resume`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body hover-mint"
            style={{ fontSize: "0.72rem", letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--primary)" }}
          >
            Resume
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="hover-mint"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--secondary)", display: "flex", alignItems: "center", padding: "4px" }}
          >
            <ThemeIcon theme={theme} />
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="hover-mint"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--secondary)", display: "flex", alignItems: "center", padding: "4px" }}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="font-body hover-mint"
            style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--secondary)", background: "none", border: "none", cursor: "pointer" }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={`#${l.href}`}
                onClick={go(l.href)}
                aria-current={active === l.href ? "page" : undefined}
                className="font-body hover-mint"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: active === l.href ? "var(--mint)" : "var(--secondary)",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`${BASE}/resume`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body hover-mint"
              style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)" }}
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>

    <button
      type="button"
      onClick={() => navigateTo("hero")}
      aria-label="Back to top"
      className={`back-to-top font-body hidden md:flex ${showFab ? "visible" : ""}`}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 60,
        background: "var(--elevated)",
        border: "1px solid var(--border)",
        color: "var(--secondary)",
        cursor: "pointer",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.55rem 1rem",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 8V2M2 5l3-3 3 3" />
      </svg>
      Top
    </button>
    </>
  );
}

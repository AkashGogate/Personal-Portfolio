"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { scrollToSection } from "@/lib/scrollToSection";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

const links = [
  { label: "Home", href: "hero" },
  { label: "Featured Project", href: "featured-project" },
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
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
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      let current = links[0].href;
      for (const l of links) {
        const el = document.getElementById(l.href);
        if (el && el.getBoundingClientRect().top <= 120) current = l.href;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
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
              className="font-body hover-mint"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: active === l.href ? "var(--mint)" : "var(--secondary)",
                borderBottom: active === l.href ? "1px solid var(--mint)" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${BASE}/resumes/resume.pdf`}
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
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--secondary)", display: "flex", alignItems: "center", padding: "4px" }}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="font-body"
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
              href={`${BASE}/resumes/resume.pdf`}
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
  );
}

"use client";

import HeroCanvas from "./HeroCanvas";
import { scrollToSection } from "@/lib/scrollToSection";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";
const LABEL = "Software Engineer · Researcher · AI / ML · Data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--surface)", paddingTop: "3.5rem" }}
    >
      <HeroCanvas />
      <div className="max-w-7xl mx-auto px-6 w-full relative" style={{ paddingTop: "clamp(1.5rem, 4vh, 5rem)", paddingBottom: "clamp(1.5rem, 4vh, 5rem)" }}>
        <p className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, color: "var(--primary)", marginBottom: "0.75rem" }}>
          Akash Gogate
        </p>

        <div className="section-label mb-8" style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.9rem)", letterSpacing: "0.08em" }}>
          {LABEL}
        </div>

        <h1
          className="font-display"
          style={{ fontSize: "clamp(2rem, 8vw, 5rem)", fontWeight: 400, color: "var(--primary)", lineHeight: 1.15, maxWidth: "18ch" }}
        >
          Exploring the space where systems think and biology inspires.
        </h1>

        <div style={{ borderTop: "1px solid var(--border)", width: "6rem", margin: "2rem 0" }} />

        <p className="font-body" style={{ fontSize: "1rem", color: "var(--secondary)", lineHeight: 1.75, maxWidth: "36rem", marginBottom: "1rem" }}>
          From satellite observation scheduling at Leidos to LLM pipelines for cancer biology.
        </p>

        <p className="font-body" style={{ fontSize: "0.97rem", color: "var(--secondary)", lineHeight: 1.75, maxWidth: "36rem", marginBottom: "1.5rem" }}>
          CS + Biology at UW-Madison | Computing for biology&apos;s next frontier.
        </p>

        <div style={{ marginBottom: "1.75rem" }}>
          <div className="section-label mb-1">GitHub</div>
          <a
            href="https://github.com/AkashGogate"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body hover-mint"
            style={{ fontSize: "0.9rem", color: "var(--primary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}
          >
            github.com/AkashGogate ↗
          </a>
        </div>

        <div className="flex flex-wrap gap-4 items-start">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
            className="font-body text-sm px-5 py-2.5 btn-outline-primary"
          >
            View Projects
          </a>
          <a href={`${BASE}/resumes/resume.pdf`} download="Gogate Akash Resume.pdf" className="font-body text-sm px-5 py-2.5 btn-outline-secondary">
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className="font-body text-sm px-5 py-2.5 btn-outline-secondary"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

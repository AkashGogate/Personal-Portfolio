"use client";

import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { projects } from "@/data/resume";
import { isKnownSkill, skillSlug } from "@/lib/skills";
import { useScrollFade } from "@/lib/useScrollFade";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

const featured = (() => {
  const p = projects.find((p) => p.id === "self-improving-agent");
  if (!p) throw new Error("Featured project 'self-improving-agent' not found in resume.ts");
  return p;
})();

export default function FeaturedProject() {
  const [fadeRef, isVisible] = useScrollFade<HTMLDivElement>();

  return (
    <section id="featured-project" style={{ background: "var(--bg)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number="02" label="Featured" className="mb-6" />
        <div
          className="hover-card flex flex-col md:flex-row gap-10 items-center"
          style={{ borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "2rem" }}
        >
          <div className="flex-1" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
            <Image src={`${BASE}${featured.imageSrc}`} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div ref={fadeRef} className={`scroll-fade ${isVisible ? "visible" : ""} flex-1`}>
            <h2 className="font-display card-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 400, color: "var(--primary)", marginBottom: "1rem" }}>
              {featured.title}
            </h2>
            <p className="font-body" style={{ fontSize: "1.15rem", color: "var(--secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              {featured.detail}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tags.map((tag) => {
                const badgeStyle = {
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  padding: "4px 10px",
                  border: "1px solid var(--border)",
                  color: "var(--secondary)",
                };
                return isKnownSkill(tag) ? (
                  <a key={tag} href={`#${skillSlug(tag)}`} className="font-body hover-mint" style={badgeStyle}>
                    {tag}
                  </a>
                ) : (
                  <span key={tag} className="font-body" style={badgeStyle}>
                    {tag}
                  </span>
                );
              })}
            </div>
            {featured.github && (
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-block hover-mint"
                style={{ fontSize: "0.85rem", color: "var(--primary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { accomplishments, type Accomplishment } from "@/data/resume";
import { skillHref } from "@/lib/skills";
import { useScrollFade } from "@/lib/useScrollFade";
import { scrollToSection } from "@/lib/scrollToSection";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

function AccomplishmentCard({ item }: { item: Accomplishment }) {
  const [fadeRef, isVisible] = useScrollFade<HTMLDivElement>();

  return (
    <div
      className="hover-card"
      style={{ borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="flex flex-wrap gap-8" style={{ padding: "2rem" }}>
        {item.imageSrc && (
          <div
            style={{
              position: "relative",
              width: "clamp(220px, 40%, 380px)",
              flex: "0 0 auto",
              aspectRatio: "4 / 3",
              alignSelf: "flex-start",
            }}
          >
            <Image src={`${BASE}${item.imageSrc}`} alt={item.title} fill sizes="(max-width: 640px) 220px, 380px" style={{ objectFit: "cover" }} />
          </div>
        )}
        <div ref={fadeRef} className={`scroll-fade ${isVisible ? "visible" : ""} flex-1`} style={{ minWidth: "260px" }}>
          <div className="flex items-center justify-between gap-4 mb-4">
            <span
              className="font-body"
              style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0f0f0f", background: "var(--mint)", padding: "4px 10px" }}
            >
              {item.result}
            </span>
            <span className="font-body" style={{ fontSize: "0.8rem", color: "var(--secondary)" }}>{item.period}</span>
          </div>
          <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--primary)" }}>{item.title}</h3>
          <p className="font-body" style={{ fontSize: "0.85rem", color: "var(--secondary)", marginBottom: "1rem" }}>{item.organization}</p>
          <div className="flex flex-col gap-2 mb-4">
            {item.bullets.map((b) => (
              <p key={b} className="font-body" style={{ fontSize: "1.05rem", color: "var(--secondary)", lineHeight: 1.7 }}>{b}</p>
            ))}
          </div>
          {item.tags && item.tags.length > 0 && (
            <>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag) => (
                  <a
                    key={tag}
                    href={skillHref(tag)}
                    className="font-body hover-mint"
                    style={{ fontSize: "0.72rem", color: "var(--secondary)", border: "1px solid var(--border)", padding: "2px 9px" }}
                    onClick={(e) => { e.preventDefault(); scrollToSection(skillHref(tag).slice(1)); }}
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <p className="font-body" style={{ fontSize: "0.8rem", color: "var(--secondary)" }}>
                Want to know more about these? See the{" "}
                <a
                  href="#skills"
                  className="hover-mint"
                  style={{ color: "var(--secondary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}
                  onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}
                >
                  Skills
                </a>{" "}
                section ↗
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Accomplishments() {
  const [headerRef, headerVisible] = useScrollFade<HTMLDivElement>();

  return (
    <section id="accomplishments" style={{ background: "var(--surface)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-fade ${headerVisible ? "visible" : ""} mb-8`}>
          <SectionLabel number="04" label="Accomplishments" className="mb-4" />
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--primary)" }}>
            Recognition along the way.
          </h2>
        </div>

        {accomplishments.map((item) => (
          <AccomplishmentCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

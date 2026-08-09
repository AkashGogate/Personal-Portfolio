import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { experienceSections } from "@/data/resume";
import { isKnownSkill, skillSlug } from "@/lib/skills";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--surface)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel number="03" label="Experience" className="mb-4" />
          <h2 className="font-display" style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--primary)" }}>
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {experienceSections.map((section) =>
            section.items.map((item) => (
              <div key={`${section.key}-${item.company}`} className="hover-card" style={{ borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
                {item.imageSrc && (
                  <div style={{ position: "relative", width: "100%", height: "260px" }}>
                    <Image src={`${BASE}${item.imageSrc}`} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
                  </div>
                )}
                <div style={{ padding: "2rem" }}>
                  <div className="section-label mb-2" style={{ color: "var(--mint)" }}>{section.label}</div>
                  <h3 className="font-display" style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)", fontWeight: 400, color: "var(--primary)", marginBottom: "0.3rem" }}>
                    {item.company}
                  </h3>
                  <p className="font-body" style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "0.1rem" }}>{item.role}</p>
                  <p className="font-body" style={{ fontSize: "0.9rem", color: "var(--secondary)", marginBottom: "1.1rem" }}>{item.period}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    {item.bullets.map((b, bi) => (
                      <p key={bi} className="font-body" style={{ fontSize: "1.1rem", color: "var(--secondary)", lineHeight: 1.75 }}>{b}</p>
                    ))}
                  </div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => {
                        const badgeStyle = {
                          fontSize: "0.72rem",
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
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

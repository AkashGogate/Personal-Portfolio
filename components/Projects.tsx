import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { projects } from "@/data/resume";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";
const rest = projects.filter((p) => p.id !== "self-improving-agent");

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--surface)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel number="05" label="Projects" className="mb-10" />
        <h2 className="font-display mb-10" style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--primary)" }}>
          Things I&apos;ve built
        </h2>

        {rest.map((p, i) => (
          <div key={p.id}>
            <div className="project-row flex gap-6 items-start py-8" style={{ paddingLeft: "1.25rem" }}>
              {p.imageSrc && (
                <div style={{ width: 56, height: 56, flexShrink: 0, position: "relative", border: "1px solid var(--border)" }}>
                  <Image src={`${BASE}${p.imageSrc}`} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="project-title font-display mb-2" style={{ fontSize: "clamp(1.15rem, 5vw, 1.4rem)", fontWeight: 400, color: "var(--primary)" }}>
                  {p.title}
                </h3>
                <p className="font-body mb-3" style={{ fontSize: "1.02rem", color: "var(--secondary)", lineHeight: 1.7 }}>
                  {p.description}
                </p>
                <div className="flex items-center gap-5 flex-wrap">
                  <span className="font-body" style={{ fontSize: "0.85rem", color: "var(--secondary)" }}>
                    {p.tags.slice(0, 4).join(" / ")}
                  </span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs hover-mint"
                      style={{ color: "var(--secondary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.note && !p.github && (
                    <span className="font-body text-xs italic" style={{ color: "var(--secondary)" }}>{p.note}</span>
                  )}
                </div>
              </div>
            </div>
            {i < rest.length - 1 && <div style={{ borderTop: "1px solid var(--border)" }} />}
          </div>
        ))}
      </div>
    </section>
  );
}

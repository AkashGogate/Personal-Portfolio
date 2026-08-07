import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { projects } from "@/data/resume";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

const featured = (() => {
  const p = projects.find((p) => p.id === "self-improving-agent");
  if (!p) throw new Error("Featured project 'self-improving-agent' not found in resume.ts");
  return p;
})();

export default function FeaturedProject() {
  return (
    <section id="featured-project" style={{ background: "var(--bg)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number="04" label="Featured Project" className="mb-6" />
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1" style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
            <Image src={`${BASE}${featured.imageSrc}`} alt={featured.title} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="flex-1">
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 400, color: "var(--primary)", marginBottom: "1rem" }}>
              {featured.title}
            </h2>
            <p className="font-body" style={{ fontSize: "1.05rem", color: "var(--secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              {featured.detail}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", border: "1px solid var(--border)", color: "var(--secondary)" }}
                >
                  {tag}
                </span>
              ))}
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

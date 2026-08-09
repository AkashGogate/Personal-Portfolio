import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { accomplishments } from "@/data/resume";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";

export default function Accomplishments() {
  return (
    <section id="accomplishments" style={{ background: "var(--surface)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <SectionLabel number="04" label="Accomplishments" className="mb-4" />
          <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "var(--primary)" }}>
            Recognition along the way.
          </h2>
        </div>

        {accomplishments.map((item) => (
          <div key={item.title} className="hover-card" style={{ borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
            {item.imageSrc && (
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <Image src={`${BASE}${item.imageSrc}`} alt={item.title} fill style={{ objectFit: "cover" }} />
              </div>
            )}
            <div style={{ padding: "2rem" }}>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span
                  className="font-body"
                  style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", background: "var(--mint)", padding: "4px 10px" }}
                >
                  {item.result}
                </span>
                <span className="font-body" style={{ fontSize: "0.8rem", color: "var(--secondary)" }}>{item.period}</span>
              </div>
              <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--primary)" }}>{item.title}</h3>
              <p className="font-body" style={{ fontSize: "0.85rem", color: "var(--secondary)", marginBottom: "1rem" }}>{item.organization}</p>
              <div className="flex flex-col gap-2 mb-4">
                {item.bullets.map((b, i) => (
                  <p key={i} className="font-body" style={{ fontSize: "1.05rem", color: "var(--secondary)", lineHeight: 1.7 }}>{b}</p>
                ))}
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-body" style={{ fontSize: "0.72rem", color: "var(--secondary)", border: "1px solid var(--border)", padding: "2px 9px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

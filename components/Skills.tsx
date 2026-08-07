import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg)", paddingTop: "clamp(3rem, 6vh, 7rem)", paddingBottom: "clamp(3rem, 6vh, 7rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number="06" label="Skills" className="mb-6" />
        <p className="font-body mb-10" style={{ fontSize: "1.1rem", color: "var(--secondary)", lineHeight: 1.75, maxWidth: "44ch" }}>
          Here&apos;s where I am right now. Most of it I picked up quickly on real projects, and the list keeps growing.
        </p>

        <div style={{ border: "1px solid var(--border)" }}>
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              style={{ padding: "1.5rem 1.75rem", borderBottom: gi < skillGroups.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <p className="section-label mb-4" style={{ borderLeft: "2px solid var(--mint)", paddingLeft: "10px" }}>
                {group.category}
              </p>
              <div className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <span className="font-body" style={{ fontSize: "1.02rem", color: "var(--primary)", fontWeight: 500 }}>
                      {skill.name}
                    </span>
                    <span className="font-body" style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>
                      {" — "}{skill.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

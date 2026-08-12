"use client";

import SectionLabel from "./SectionLabel";
import { education } from "@/data/resume";
import { useScrollFade } from "@/lib/useScrollFade";

export default function Education() {
  const [headerRef, headerVisible] = useScrollFade<HTMLDivElement>();
  const [courseworkRef, courseworkVisible] = useScrollFade<HTMLDivElement>();

  return (
    <section id="education" style={{ background: "var(--surface)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-fade ${headerVisible ? "visible" : ""} mb-10`}>
          <SectionLabel number="07" label="Education" className="mb-6" />
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.7rem, 6vw, 3.2rem)", fontWeight: 400, color: "var(--primary)", marginBottom: "0.55rem" }}
          >
            {education.school}
          </h2>
          <p className="font-body" style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "0.9rem" }}>
            {education.degree} · {education.period}
          </p>
          <div className="flex gap-5 flex-wrap">
            <span className="section-label" style={{ color: "var(--mint)" }}>{education.gpa} GPA</span>
            {education.honors.map((h) => (
              <span key={h} className="section-label">{h}</span>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2.5rem" }} />

        <div ref={courseworkRef} className={`scroll-fade ${courseworkVisible ? "visible" : ""} grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:[grid-template-rows:repeat(2,auto)] gap-x-8 gap-y-8`}>
          {education.coursework.map((group) => (
            <div key={group.area}>
              <p className="section-label mb-5" style={{ borderLeft: "2px solid var(--mint)", paddingLeft: "10px" }}>
                {group.area}
              </p>
              <div className="flex flex-col gap-3">
                {group.courses.map((course) => (
                  <div key={course.name}>
                    <p className="font-body" style={{ fontSize: "1.12rem", color: "var(--primary)", fontWeight: 500 }}>
                      {course.name}
                    </p>
                    <p className="font-body" style={{ fontSize: "1rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                      {course.description}
                    </p>
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

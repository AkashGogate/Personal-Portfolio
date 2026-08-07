import SectionLabel from "./SectionLabel";
import { education, highSchool } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--surface)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {education.coursework.map((group) => (
            <div key={group.area}>
              <p className="section-label mb-5" style={{ borderLeft: "2px solid var(--mint)", paddingLeft: "10px" }}>
                {group.area}
              </p>
              <div className="flex flex-col gap-3">
                {group.courses.map((course) => (
                  <div key={course.name}>
                    <p className="font-body" style={{ fontSize: "0.95rem", color: "var(--primary)", fontWeight: 500 }}>
                      {course.name}
                    </p>
                    <p className="font-body" style={{ fontSize: "0.88rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />
          <div className="mb-6">
            <h3 className="font-display" style={{ fontSize: "clamp(1.2rem, 5vw, 1.6rem)", fontWeight: 400, color: "var(--primary)", marginBottom: "0.35rem" }}>
              {highSchool.school}
            </h3>
            <p className="font-body" style={{ fontSize: "1.02rem", color: "var(--secondary)" }}>{highSchool.period}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            {highSchool.coursework.map((group) => (
              <div key={group.area}>
                <p className="section-label mb-4" style={{ borderLeft: "2px solid var(--mint)", paddingLeft: "10px" }}>
                  {group.area}
                </p>
                <div className="flex flex-col gap-3">
                  {group.courses.map((course) => (
                    <div key={course.name}>
                      <p className="font-body" style={{ fontSize: "0.95rem", color: "var(--primary)", fontWeight: 500 }}>
                        {course.name}
                      </p>
                      <p className="font-body" style={{ fontSize: "0.88rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

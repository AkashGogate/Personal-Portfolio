"use client";

import SectionLabel from "./SectionLabel";
import { useScrollFade } from "@/lib/useScrollFade";

const bio = [
  "I'm a CS + Biology student at UW-Madison, graduating in May 2028. Right now I'm building LLM agent pipelines for spatial transcriptomics research at the Kendziorski Lab, and my industry experience has been in backend infrastructure and distributed systems at Leidos.",
  "I grew up in Princeton, NJ, where I spent a lot of time on tennis courts (still do). I've coached players and run tournaments. The stringing business came out of that too. That's where I learned that most interesting problems look messier up close than from a distance, and that knowing the fundamentals is what lets you improvise when things go sideways.",
  "I like getting into the technical details when they actually matter, not just to look impressive. Some problems don't have a shortcut. You actually have to understand what's going on to solve them.",
  "The goal is to build things that need both solid engineering and good design to work, not just one or the other. That's where the most interesting problems are, and where I want to spend my career.",
];

export default function About() {
  const [headerRef, headerVisible] = useScrollFade<HTMLDivElement>();
  const [bioRef, bioVisible] = useScrollFade<HTMLDivElement>();

  return (
    <section id="about" style={{ background: "var(--bg)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className={`scroll-fade ${headerVisible ? "visible" : ""} mb-12`}>
          <SectionLabel number="01" label="About" className="mb-4" />
          <h2 className="font-display" style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--primary)" }}>
            Hi, I&apos;m Akash.
          </h2>
        </div>

        <div className="flex gap-8" style={{ maxWidth: "52rem" }}>
          <div className="hidden md:block flex-shrink-0 w-px self-stretch" style={{ background: "var(--border)" }} />
          <div ref={bioRef} className={`scroll-fade ${bioVisible ? "visible" : ""} flex-1 space-y-8`}>
            {bio.map((text) => (
              <p key={text} className="font-body" style={{ fontSize: "1.3rem", color: "var(--secondary)", lineHeight: 1.8 }}>
                {text}
              </p>
            ))}
            <p className="font-body" style={{ fontSize: "1.3rem", color: "var(--secondary)", letterSpacing: "0.02em" }}>
              3.8 GPA · Dean&apos;s List · CS + Biology, UW-Madison · Graduating May 2028 ·{" "}
              <span style={{ color: "var(--primary)", fontWeight: 500 }}>Open to Summer 2027 internships & co-ops</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

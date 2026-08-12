"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { projects, type Project } from "@/data/resume";
import { isKnownSkill, skillHref } from "@/lib/skills";
import { useScrollFade } from "@/lib/useScrollFade";
import { scrollToSection } from "@/lib/scrollToSection";

const BASE = process.env.NEXT_PUBLIC_BASEPATH ?? "";
const rest = projects.filter((p) => p.id !== "self-improving-agent");

function TagList({ tags, onBeforeNavigate }: { tags: string[]; onBeforeNavigate?: () => void }) {
  return (
    <>
      {tags.map((tag, i) => {
        const clickable = isKnownSkill(tag);
        return (
          <span key={tag}>
            {i > 0 && " / "}
            {clickable ? (
              <a
                href={skillHref(tag)}
                className="hover-mint"
                style={{ color: "inherit", position: "relative", zIndex: 2 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const dest = skillHref(tag).slice(1);
                  if (onBeforeNavigate) {
                    onBeforeNavigate();
                    setTimeout(() => scrollToSection(dest), 360);
                  } else {
                    scrollToSection(dest);
                  }
                }}
              >
                {tag}
              </a>
            ) : (
              <span style={{ color: "inherit" }}>{tag}</span>
            )}
          </span>
        );
      })}
    </>
  );
}

function ProjectDrawer({ project, onClose }: { project: Project; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClose() {
    setVisible(false);
    setTimeout(() => dialogRef.current?.close(), 350);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    const raf = requestAnimationFrame(() => setVisible(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onCancel = (e: Event) => {
      e.preventDefault();
      handleClose();
    };
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("close", onClose);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("close", onClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-drawer-title"
      className="project-drawer-dialog"
      onClick={(e) => { if (e.target === dialogRef.current) handleClose(); }}
    >
      <div
        className="project-drawer w-full max-h-[80vh] overflow-y-auto"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          transform: visible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-8 py-12">
          {project.imageSrc && (
            <div style={{ width: "100%", marginBottom: "2rem", position: "relative", aspectRatio: "16 / 9" }}>
              <Image src={`${BASE}${project.imageSrc}`} alt={project.title} fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="flex items-start justify-between gap-8 mb-6">
            <h3
              id="project-drawer-title"
              className="font-display"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: "var(--primary)", lineHeight: 1.2 }}
            >
              {project.title}
            </h3>
            <button
              type="button"
              onClick={handleClose}
              className="font-body hover-mint flex-shrink-0"
              style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--secondary)", background: "none", border: "none", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
          <p className="font-body mb-6" style={{ fontSize: "1.15rem", color: "var(--secondary)", lineHeight: 1.8 }}>
            {project.detail}
          </p>
          <p className="font-body mb-2" style={{ fontSize: "0.88rem", color: "var(--secondary)", letterSpacing: "0.04em" }}>
            <TagList tags={project.tags} onBeforeNavigate={handleClose} />
          </p>
          <p className="font-body mb-8" style={{ fontSize: "0.8rem", color: "var(--secondary)" }}>
            See more in the{" "}
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
          <div className="flex gap-6 items-center">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm hover-mint"
                style={{ color: "var(--primary)", textDecoration: "underline", textDecorationColor: "var(--border)" }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub ↗
              </a>
            )}
            {project.note && (
              <span className="font-body text-sm italic" style={{ color: "var(--secondary)" }}>
                {project.note}
              </span>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}

function ProjectRow({ p, onSelect }: { p: Project; onSelect: (p: Project) => void }) {
  const [fadeRef, isVisible] = useScrollFade<HTMLDivElement>();

  return (
    <div className="project-row flex gap-6 items-start py-8" style={{ paddingLeft: "1.25rem", position: "relative" }}>
      <button
        type="button"
        onClick={() => onSelect(p)}
        aria-label={`View details: ${p.title}`}
        style={{ position: "absolute", inset: 0, zIndex: 1, background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
      />
      {p.imageSrc && (
        <div style={{ width: 56, height: 56, flexShrink: 0, position: "relative", border: "1px solid var(--border)" }}>
          <Image src={`${BASE}${p.imageSrc}`} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
        </div>
      )}
      <div ref={fadeRef} className={`scroll-fade ${isVisible ? "visible" : ""} flex-1 min-w-0`}>
        <h3 className="project-title font-display mb-2" style={{ fontSize: "clamp(1.15rem, 5vw, 1.4rem)", fontWeight: 400, color: "var(--primary)" }}>
          {p.title}
        </h3>
        <p className="font-body mb-3" style={{ fontSize: "1.12rem", color: "var(--secondary)", lineHeight: 1.7 }}>
          {p.description}
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          <span className="font-body" style={{ fontSize: "0.85rem", color: "var(--secondary)" }}>
            <TagList tags={p.tags.slice(0, 4)} />
          </span>
          <span className="font-body explore-cta" style={{ fontSize: "0.7rem", color: "var(--secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Click to explore ↗
          </span>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs hover-mint row-github-link"
              style={{ color: "var(--secondary)", textDecoration: "underline", textDecorationColor: "var(--border)", position: "relative", zIndex: 2 }}
              onClick={(e) => e.stopPropagation()}
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
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [headerRef, headerVisible] = useScrollFade<HTMLDivElement>();

  return (
    <>
      <section id="projects" style={{ background: "var(--surface)", paddingTop: "clamp(3rem, 6vh, 6rem)", paddingBottom: "clamp(3rem, 6vh, 6rem)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={headerRef} className={`scroll-fade ${headerVisible ? "visible" : ""}`}>
            <SectionLabel number="05" label="Projects" className="mb-10" />
            <h2 className="font-display mb-10" style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "var(--primary)" }}>
              Things I&apos;ve built
            </h2>
          </div>

          {rest.map((p, i) => (
            <div key={p.id}>
              <ProjectRow p={p} onSelect={setSelected} />
              {i < rest.length - 1 && <div style={{ borderTop: "1px solid var(--border)" }} />}
            </div>
          ))}
        </div>
      </section>

      {selected && <ProjectDrawer project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

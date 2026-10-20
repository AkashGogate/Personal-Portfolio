export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Deep-links a skill tag click to its entry, centered vertically rather than
// pinned to the top (unlike scrollToSection, used for section-level nav).
export function scrollToSkillCentered(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

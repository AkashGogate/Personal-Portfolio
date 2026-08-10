import { skillGroups } from "@/data/resume";

const skillNames = new Set(skillGroups.flatMap((g) => g.skills.map((s) => s.name.toLowerCase())));

export function skillSlug(name: string) {
  return `skill-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
}

export function isKnownSkill(name: string) {
  return skillNames.has(name.toLowerCase());
}

/** Anchor href for a tag: deep-links to the specific skill entry when known, otherwise falls back to the Skills section. */
export function skillHref(name: string) {
  return isKnownSkill(name) ? `#${skillSlug(name)}` : "#skills";
}

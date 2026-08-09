import { skillGroups } from "@/data/resume";

const skillNames = new Set(skillGroups.flatMap((g) => g.skills.map((s) => s.name.toLowerCase())));

export function skillSlug(name: string) {
  return `skill-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
}

export function isKnownSkill(name: string) {
  return skillNames.has(name.toLowerCase());
}

const CATEGORY_COLORS: Record<string, string> = {
  Languages:
    "border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
  "Libraries & Frameworks":
    "border-violet-500/30 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20",
  "AI & Agents":
    "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20",
  "Platforms & Tooling":
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20",
};

const DEFAULT_COLOR =
  "border-zinc-500/30 bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/20";

const SKILL_CATEGORY_BY_NAME: Record<string, keyof typeof CATEGORY_COLORS> = {
  JavaScript: "Languages",
  TypeScript: "Languages",
  Dart: "Languages",
  Python: "Languages",
  GraphQL: "Languages",
  Swift: "Languages",
  Bun: "Languages",

  React: "Libraries & Frameworks",
  "Next.js": "Libraries & Frameworks",
  "Tailwind CSS": "Libraries & Frameworks",
  Flutter: "Libraries & Frameworks",
  "AI SDK": "Libraries & Frameworks",
  "Safari Extensions": "Libraries & Frameworks",

  OpenAI: "AI & Agents",
  OpenRouter: "AI & Agents",
  MCP: "AI & Agents",
  RAG: "AI & Agents",
  Agents: "AI & Agents",

  GCP: "Platforms & Tooling",
  Vercel: "Platforms & Tooling",
  Convex: "Platforms & Tooling",
  Postgres: "Platforms & Tooling",
  Docker: "Platforms & Tooling",
  PostHog: "Platforms & Tooling",
  Firebase: "Platforms & Tooling",
  ffmpeg: "Platforms & Tooling",
};

export function getCategoryColor(category: string) {
  return CATEGORY_COLORS[category] ?? DEFAULT_COLOR;
}

export function getSkillColor(skill: string) {
  const category = SKILL_CATEGORY_BY_NAME[skill];
  return category ? CATEGORY_COLORS[category] : DEFAULT_COLOR;
}

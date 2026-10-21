import type { Metadata } from "next";
import Link from "next/link";
import catalog from "../../../../../data/bstack-catalog.json";
import { SkillCatalog } from "./skill-catalog";

export const metadata: Metadata = {
  title: "BStack Guide",
  description: "A practical guide to BStack's planning, engineering, PR, and local workspace tools.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "routes", title: "Common routes" },
  { id: "routing", title: "What runs when" },
  { id: "catalog", title: "Skill catalog" },
  { id: "continuity", title: "Context and memory" },
  { id: "workspace", title: "Local workspace" },
  { id: "install", title: "Install and update" },
];

const journeys = [
  {
    title: "Fix a bug",
    start: "poteto-mode or an ordinary prompt with auto mode on",
    steps: ["Understand the behavior", "Find the root cause", "Fix and verify", "to-pr if needed"],
    note: "Use how or why first if the existing code is unclear. A clear bug needs no map, spec, or ticket.",
  },
  {
    title: "Shape a feature",
    start: "grill-me, wayfinder, or prototype",
    steps: ["Settle decisions", "Try variants if useful", "Spec or tickets if useful", "Handoff", "Implement"],
    note: "Each phase stands on its own. A handoff can move accepted scope to a fresh context and another model.",
  },
  {
    title: "Work on a PR",
    start: "to-pr, review-pr, or resolve-pr",
    steps: ["Explain the change", "Challenge the review", "Resolve useful feedback"],
    note: "Start at review for an existing PR. Use configure-pr to create a bstack-pr-policy.md with review priorities and paths requiring human review. A sound reply can resolve feedback without code.",
  },
  {
    title: "Understand code",
    start: "how, why, or teach",
    steps: ["Trace behavior", "Check rationale and ADRs", "Explain what is known"],
    note: "A read-only answer is a complete outcome. Nothing needs to be implemented.",
  },
];

const modes = [
  { name: "Direct skill", action: "Invoke exactly what you need", detail: "Call a named skill such as grill-me, prototype, how, or to-pr. It loads only its relevant method and dependencies." },
  { name: "Poteto Mode", action: "Choose an engineering workflow", detail: "Invoke poteto-mode to select a matching PStack playbook and its needed principles and skills." },
  { name: "Auto mode", action: "Prompt normally", detail: "Opt in with bstack-auto on. Ordinary engineering prompts can enter the same router. It does not silently publish work or make product decisions." },
];

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="mb-7">
      <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 id={`${id}-title`} className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

export default function BStackPage() {
  return (
    <div className="text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1480px] items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex items-center gap-3 text-sm">
            <Link href="/home" className="font-mono font-semibold hover:text-primary">bbish.dev</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-mono font-semibold">bstack</span>
            <span className="hidden text-muted-foreground sm:inline">/ guide</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#catalog" className="hover:text-foreground">Browse skills</a>
            <a href="https://github.com/bbishdotdev/ai-tools/tree/main/bstack" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Source ↗</a>
          </div>
        </div>
        <nav aria-label="BStack guide sections" className="flex gap-4 overflow-x-auto border-t border-border px-5 py-2 text-xs text-muted-foreground sm:px-8 lg:hidden">
          {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="shrink-0 hover:text-foreground">{section.title}</a>)}
        </nav>
      </header>
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[220px_minmax(0,1fr)_160px] xl:gap-14">
        <nav aria-label="BStack guide" className="hidden self-start py-9 lg:sticky lg:top-14 lg:block lg:max-h-[calc(100vh-56px)] lg:overflow-y-auto">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Guide</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{section.title}</a>
          ))}
          <div className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">Start wherever your task starts. This is a reference, not a required pipeline.</div>
        </nav>
        <main className="min-w-0 max-w-[850px] pb-24 pt-10 text-[15px] leading-7 sm:pt-14">
          <section id="overview" aria-labelledby="overview-title" className="scroll-mt-28 pb-14">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">Guide / overview</p>
            <h1 id="overview-title" className="mb-5 font-mono text-5xl font-semibold tracking-tight sm:text-6xl">bstack</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Skills and local tools for planning, building, and reviewing software with agents. Start with the work you have. There&apos;s no required pipeline.</p>
            <p className="mt-5 max-w-2xl text-muted-foreground">BStack connects <a className="text-foreground underline decoration-border underline-offset-4 hover:text-primary" href="https://github.com/cursor/plugins/tree/main/pstack">Lauren Tan&apos;s PStack</a>, <a className="text-foreground underline decoration-border underline-offset-4 hover:text-primary" href="https://github.com/mattpocock/skills">Matt Pocock&apos;s skills</a>, and my own workflows in one project-local package.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href="#routes" className="rounded-lg border border-border p-4 hover:border-primary"><span className="font-mono text-sm font-semibold">Find your starting point →</span><span className="mt-1 block text-sm text-muted-foreground">A few common ways in.</span></a>
              <a href="#catalog" className="rounded-lg border border-border p-4 hover:border-primary"><span className="font-mono text-sm font-semibold">Browse the whole catalog →</span><span className="mt-1 block text-sm text-muted-foreground">What each skill does and when it loads.</span></a>
            </div>
            <div className="mt-9 overflow-hidden rounded-lg border border-border">
              <div className="flex items-center justify-between border-b border-border px-4 py-2 font-mono text-xs"><span>Quick start</span><span className="text-muted-foreground">terminal</span></div>
              <pre className="overflow-x-auto bg-muted/40 px-4 py-4 font-mono text-xs leading-6"><code>npx skills add bbishdotdev/ai-tools --skill install-bstack</code></pre>
              <p className="border-t border-border px-4 py-3 text-sm text-muted-foreground">Then ask your agent to install BStack in the current project. <a href="#install" className="text-foreground underline underline-offset-4">Other options →</a></p>
            </div>
          </section>
          <section id="routes" aria-labelledby="routes-title" className="scroll-mt-28 border-t border-border py-14">
            <SectionHeading eyebrow="Workflows" title="Common routes" id="routes" />
            <p className="mb-7 text-muted-foreground">These are examples, not mandatory sequences. Pick the part that helps with your current task.</p>
            <div className="divide-y divide-border border-y border-border">
              {journeys.map((journey) => (
                <div key={journey.title} className="py-6">
                  <h3 className="mb-1 font-mono text-base font-semibold">{journey.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">Start with <span className="text-foreground">{journey.start}</span>.</p>
                  <div className="flex flex-wrap items-center gap-2" aria-label={`${journey.title} example path`}>
                    {journey.steps.map((step, index) => <span key={step} className="flex items-center gap-2"><span className="rounded border border-border px-2 py-1 font-mono text-xs">{step}</span>{index < journey.steps.length - 1 && <span className="text-muted-foreground">→</span>}</span>)}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{journey.note}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="routing" aria-labelledby="routing-title" className="scroll-mt-28 border-t border-border py-14">
            <SectionHeading eyebrow="Behavior" title="What runs when" id="routing" />
            <p className="mb-6 text-muted-foreground">Manual invocation is the default. Auto mode changes how an engineering request enters the router; it does not run every phase.</p>
            <div className="divide-y divide-border border-y border-border">
              {modes.map((mode) => <div key={mode.name} className="grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:gap-5"><span className="font-mono text-xs font-semibold text-primary">{mode.name}</span><div><h3 className="font-mono text-sm font-semibold">{mode.action}</h3><p className="mt-1 text-sm text-muted-foreground">{mode.detail}</p></div></div>)}
            </div>
            <h3 className="mb-3 mt-9 font-mono text-base font-semibold">The connections</h3>
            <p className="text-sm text-muted-foreground"><code>grill-me</code> loads the grilling method. <code>wayfinder</code> chooses grilling, research, or prototype for each question. <code>implement</code> and <code>poteto-mode</code> enter BStack&apos;s engineering router, which picks the relevant PStack playbook and principles. <code>to-spec</code>, <code>to-tickets</code>, implementation, and PR work remain separate jobs unless you ask for them.</p>
          </section>
          <section id="catalog" aria-labelledby="catalog-title" className="scroll-mt-28 border-t border-border py-14">
            <SectionHeading eyebrow="Reference" title="Skill catalog" id="catalog" />
            <p className="mb-5 text-muted-foreground">Search direct skills, routed principles, playbooks, and internal aliases. Open an entry for its purpose and loading behavior.</p>
            <SkillCatalog />
          </section>
          <section id="continuity" aria-labelledby="continuity-title" className="scroll-mt-28 border-t border-border py-14">
            <SectionHeading eyebrow="Context" title="What survives a chat" id="continuity" />
            <div className="divide-y divide-border border-y border-border">
              {[
                ["Project baseline", "Seven engineering rules live in project instructions, even with auto routing off."],
                ["ADRs", "Short repository records preserve consequential architecture choices. Routine feature decisions stay out."],
                ["Local work and handoffs", "Wayfinder maps, specs, and tickets persist in a private SQLite workspace. A handoff carries accepted scope to a fresh context."],
                ["Optional personal memory", "Approved preferences can travel across Codex, Claude Code, and Cursor. Project facts stay in the project."],
              ].map(([title, detail]) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[170px_1fr] sm:gap-5"><h3 className="font-mono text-sm font-semibold">{title}</h3><p className="text-sm text-muted-foreground">{detail}</p></div>)}
            </div>
          </section>
          <section id="workspace" aria-labelledby="workspace-title" className="scroll-mt-28 border-t border-border py-14">
            <SectionHeading eyebrow="Local data" title="Workspace and operations" id="workspace" />
            <p className="mb-5 text-muted-foreground">The browser app and agent CLI use the same local records. Plan in Focus or Atlas, then manage implementation tickets on the Kanban board. No external tracker is needed.</p>
            <h3 className="mb-2 font-mono text-sm font-semibold">Start the local app</h3>
            <pre className="mb-6 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs leading-6"><code>{`python3 .bstack/package/workspace/cli.py --project . init\npython3 .bstack/package/workspace/cli.py --project . serve --port 4174`}</code></pre>
            <h3 className="mb-2 font-mono text-sm font-semibold">Read it from an agent</h3>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs leading-6"><code>{`python3 .bstack/package/workspace/cli.py --project . request workspace.read\npython3 .bstack/package/workspace/cli.py request --help`}</code></pre>
            <p className="mt-4 text-sm text-muted-foreground">Use the CLI&apos;s operations rather than having an agent rewrite database logic. Maps and tickets have independent adapter settings; this release implements local operations only.</p>
          </section>
          <section id="install" aria-labelledby="install-title" className="scroll-mt-28 border-t border-border py-14">
            <SectionHeading eyebrow="Setup" title="Install and update" id="install" />
            <p className="mb-4 text-muted-foreground">Install the entry skill through skills.sh, then ask your agent to install its bundled package into the current project.</p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs"><code>npx skills add bbishdotdev/ai-tools --skill install-bstack</code></pre>
            <p className="mt-5 text-muted-foreground">You can also download the <a href={`https://github.com/bbishdotdev/ai-tools/releases/tag/v${catalog.version}`} className="text-foreground underline underline-offset-4">v{catalog.version} release ZIP and notes</a> or clone the repo and run the bundled <code>install.py</code>. Setup uses pinned copies of upstream skills; it does not fetch their latest versions.</p>
            <p className="mt-4 text-muted-foreground">Install in each Git repository where you want skills or auto routing, even if the installer is available globally or in a parent folder. After install or upgrade, start a new agent session so its skill list refreshes. In Claude Code desktop, start a new Code chat rooted in that repository. An upgrade keeps your selected hosts and auto-mode preference.</p>
            <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs leading-6"><code>{`python3 .bstack/package/scripts/bstack.py doctor --project "$PWD"\npython3 .bstack/package/scripts/bstack.py auto status --project "$PWD"\npython3 .bstack/package/scripts/bstack.py auto on --project "$PWD"`}</code></pre>
          </section>
          <footer className="border-t border-border py-7 text-sm text-muted-foreground">Built by <Link href="/home" className="text-foreground underline underline-offset-4">Brenden Bishop</Link>, on work by <a href="https://github.com/cursor/plugins/tree/main/pstack" className="text-foreground underline underline-offset-4">Lauren “poteto” Tan</a> and <a href="https://github.com/mattpocock/skills" className="text-foreground underline underline-offset-4">Matt Pocock</a>.</footer>
        </main>
        <nav aria-label="On this page" className="hidden self-start py-9 xl:sticky xl:top-14 xl:block xl:max-h-[calc(100vh-56px)] xl:overflow-y-auto">
          <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">On this page</p>
          {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block py-1 text-xs leading-5 text-muted-foreground hover:text-foreground">{section.title}</a>)}
        </nav>
      </div>
    </div>
  );
}

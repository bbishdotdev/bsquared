"use client";

import { useEffect, useRef, useState } from "react";
import catalog from "../../../../../data/bstack-catalog.json";

type Kind = "all" | "skill" | "principle" | "playbook" | "internal";
type Entry = (typeof catalog.items)[number];

const kinds: { id: Kind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "skill", label: "Direct skills" },
  { id: "principle", label: "Principles" },
  { id: "playbook", label: "Playbooks" },
  { id: "internal", label: "Internal" },
];

export function SkillCatalog() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<Kind>("all");
  const [expanded, setExpanded] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const needle = query.trim().toLowerCase();
  const results = (catalog.items as Entry[]).filter((entry) => {
    if (kind !== "all" && entry.kind !== kind) return false;
    return !needle || [entry.name, entry.area, entry.what, entry.why, entry.loading, ...entry.related].join(" ").toLowerCase().includes(needle);
  });
  const visible = needle || expanded ? results : results.slice(0, 12);

  return (
    <div>
      <div className="flex items-center gap-2">
        <input ref={input} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by task, skill, or topic…" aria-label="Search BStack skills" className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
        <kbd className="hidden rounded border border-border px-2 py-2 font-mono text-[11px] text-muted-foreground sm:inline">⌘/Ctrl K</kbd>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Catalog type">
        {kinds.map((option) => <button key={option.id} type="button" onClick={() => { setKind(option.id); setExpanded(false); }} aria-pressed={kind === option.id} className={`rounded-md border px-2.5 py-1 text-xs ${kind === option.id ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`}>{option.label}</button>)}
      </div>
      <p className="my-4 text-xs text-muted-foreground" role="status" aria-live="polite">{results.length} {results.length === 1 ? "entry" : "entries"} · BStack {catalog.version}</p>
      <div className="divide-y divide-border border-y border-border">
        {visible.map((entry) => <details key={`${entry.kind}-${entry.name}`} className="group py-4"><summary className="cursor-pointer list-none"><span className="flex flex-wrap items-center gap-x-3 gap-y-1"><strong className="font-mono text-sm">{entry.name}</strong><span className="text-xs text-primary">{entry.kind}</span><span className="ml-auto text-xs text-muted-foreground">{entry.area}</span></span><span className="mt-1 block text-sm text-muted-foreground">{entry.why}</span></summary><div className="mt-4 space-y-3 rounded-md border border-border bg-muted/30 p-4 text-sm"><p><strong className="font-mono text-xs">What it does</strong><br /><span className="text-muted-foreground">{entry.what}</span></p><p><strong className="font-mono text-xs">How it loads</strong><br /><span className="text-muted-foreground">{entry.loading}</span></p>{entry.related.length > 0 && <p><strong className="font-mono text-xs">Related</strong><br /><span className="text-muted-foreground">{entry.related.join(", ")}</span></p>}</div></details>)}
        {results.length === 0 && <p className="py-6 text-sm text-muted-foreground">No matching skills. Try a different word or type.</p>}
      </div>
      {!needle && results.length > 12 && <button type="button" onClick={() => setExpanded(!expanded)} className="mt-4 rounded-md border border-border px-3 py-2 text-sm hover:border-primary">{expanded ? "Show fewer" : `Show all ${results.length} entries`}</button>}
    </div>
  );
}

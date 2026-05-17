import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Emma Kim" },
      { name: "description", content: "Selected computer science projects: web apps, tools, and systems work." },
      { property: "og:title", content: "Projects — Emma Kim" },
      { property: "og:description", content: "Selected computer science projects: web apps, tools, and systems work." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Lumen",
    tag: "Web App — TypeScript, Next.js",
    desc: "A collaborative note-taking tool with end-to-end encryption and real-time sync across devices.",
    year: "2026",
  },
  {
    title: "Driftc",
    tag: "Compiler — Rust, LLVM",
    desc: "A toy systems language with a borrow-checked memory model. Built to learn compiler internals from scratch.",
    year: "2025",
  },
  {
    title: "Tide",
    tag: "Open Source — Go",
    desc: "A tiny CLI for visualizing git branch history. ~600 stars on GitHub. Cross-platform terminal UI.",
    year: "2025",
  },
  {
    title: "Forager",
    tag: "Research — Python, PyTorch",
    desc: "An ML pipeline classifying edible plants from phone photos. Built during my undergraduate research assistantship.",
    year: "2024",
  },
];

function Projects() {
  return (
    <SiteLayout>
      <section className="py-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          02 — Selected work
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-balance max-w-3xl">
          Things I've <span className="text-primary italic">built</span> and
          learned from.
        </h1>
      </section>

      <section className="py-8 divide-y divide-border border-y border-border">
        {projects.map((p) => (
          <article
            key={p.title}
            className="grid md:grid-cols-12 gap-6 py-10 group cursor-pointer"
          >
            <div className="md:col-span-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground pt-2">
              {p.year}
            </div>
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl md:text-4xl text-primary group-hover:italic transition-all">
                {p.title}
              </h2>
              <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                {p.tag}
              </p>
            </div>
            <p className="md:col-span-6 md:col-start-7 text-base text-foreground/80 leading-relaxed self-center">
              {p.desc}
            </p>
            <div className="md:col-span-1 self-center text-right text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

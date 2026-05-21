import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Grace Matsuoka" },
      { name: "description", content: "Internships, research, and roles in software engineering and computer science." },
      { property: "og:title", content: "Experience — Grace Matsuoka" },
      { property: "og:description", content: "Internships, research, and roles in software engineering and computer science." },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    company: "HENNGE",
    role: "SWE Intern",
    period: "Summer 2026",
    desc: "Worked on the multiplayer infrastructure team. Shipped a presence-system rewrite that cut idle bandwidth by 40%.",
  },
  {
    company: "Cornell Apparel Design Lab",
    role: "Research Assistant",
    period: "Spring 2026 — Present",
    desc: "Co-authoring a paper on adaptive interfaces for assistive technology. Built study tooling in React Native.",
  },
  {
    company: "Widget Factory",
    role: "Problem Design Engineer",
    period: "Spring 2026 — Present",
    desc: "Co-authoring a paper on adaptive interfaces for assistive technology. Built study tooling in React Native.",
  },
  {
    company: "Hack4Impact",
    role: "Technical Lead",
    period: "Spring 2025 — Present",
    desc: "Co-authoring a paper on adaptive interfaces for assistive technology. Built study tooling in React Native.",
  },
  {
    company: "CampusCares",
    role: "Chief of Technical Operations",
    period: "2025 — 2026",
    desc: "Backend work on the payments reliability team. Wrote idempotency tests and migrated a legacy job runner.",
  },
  {
    company: "Left Field",
    role: "SWE Intern",
    period: "Fall 2025",
    desc: "Led weekly sections of 30 students, held office hours, and rewrote three programming assignments.",
  },
  {
    company: "Jane Street",
    role: "AMP Scholar",
    period: "Summer 2024",
    desc: "Led weekly sections of 30 students, held office hours, and rewrote three programming assignments.",
  },
];

function Experience() {
  return (
    <SiteLayout>
      <section className="pt-16 pb-10 max-w-2xl">
        <h1 className="font-serif text-3xl md:text-4xl text-balance">
          Where I've <span className="text-primary italic">worked.</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-md">
          Internships, research, and project teams that shaped how I build
          software and work with people.
        </p>
      </section>

      <section className="py-8 max-w-4xl">
        <ol className="relative border-l border-border ml-2">
          {roles.map((r) => (
            <li key={r.company} className="pl-8 pb-14 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                {r.period}
              </p>
              <h2 className="mt-2 font-serif text-2xl">
                <span className="text-primary">{r.role}</span>{" "}
                <span className="text-foreground/60 italic">@ {r.company}</span>
              </h2>
              <p className="mt-3 text-base text-[14px] text-foreground/80 leading-relaxed max-w-2xl">
                {r.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}

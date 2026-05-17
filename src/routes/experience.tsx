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
    company: "Figma",
    role: "Software Engineering Intern",
    period: "Summer 2025",
    desc: "Worked on the multiplayer infrastructure team. Shipped a presence-system rewrite that cut idle bandwidth by 40%.",
  },
  {
    company: "University HCI Lab",
    role: "Undergraduate Researcher",
    period: "2024 — Present",
    desc: "Co-authoring a paper on adaptive interfaces for assistive technology. Built study tooling in React Native.",
  },
  {
    company: "Stripe",
    role: "SWE Intern",
    period: "Summer 2024",
    desc: "Backend work on the payments reliability team. Wrote idempotency tests and migrated a legacy job runner.",
  },
  {
    company: "CS 161 — Operating Systems",
    role: "Teaching Assistant",
    period: "2024",
    desc: "Led weekly sections of 30 students, held office hours, and rewrote three programming assignments.",
  },
];

function Experience() {
  return (
    <SiteLayout>
      <section className="py-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          03 — Experience
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-balance max-w-3xl">
          Where I've <span className="text-primary italic">worked</span> and
          what I learned there.
        </h1>
      </section>

      <section className="py-8 max-w-4xl">
        <ol className="relative border-l border-border ml-2">
          {roles.map((r) => (
            <li key={r.company} className="pl-8 pb-14 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                {r.period}
              </p>
              <h2 className="mt-2 font-serif text-3xl">
                <span className="text-primary">{r.role}</span>{" "}
                <span className="text-foreground/60 italic">@ {r.company}</span>
              </h2>
              <p className="mt-3 text-base text-foreground/80 leading-relaxed max-w-2xl">
                {r.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}

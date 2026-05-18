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
      <section className="pt-16 pb-8 max-w-2xl">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
          Experience
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-balance">
          Where I've worked and what I learned there.
        </h1>
      </section>

      <section className="pb-16 max-w-3xl">
        <ol className="divide-y divide-border">
          {roles.map((r) => (
            <li key={r.company} className="py-6 grid sm:grid-cols-12 gap-3">
              <p className="sm:col-span-3 text-xs text-muted-foreground pt-1">
                {r.period}
              </p>
              <div className="sm:col-span-9">
                <h2 className="text-base font-medium">
                  <span className="text-foreground">{r.role}</span>
                  <span className="text-muted-foreground"> · {r.company}</span>
                </h2>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}

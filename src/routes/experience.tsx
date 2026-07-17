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
    location: "Tokyo, Japan",
    desc: "Designed an automated recruitment pipeline with Brevo that cut a 3-4 hour manual task to one click and boosted submission rates by 5%; built an end-to-end CI/CD pipeline (Docker, Terraform, GitHub Actions) to containerize and deploy a FastAPI app to AWS.",
  },
  {
    company: "Cornell Apparel Design Lab",
    role: "Research Assistant",
    period: "Spring 2026 — Present",
    location: "Ithaca, NY",
    desc: "Helping process data for performance enhansive shoe insole research under Professor Heeju Park.",
  },
  {
    company: "Widget Factory",
    role: "Problem Design Engineer",
    period: "Spring 2026",
    location: "Remote",
    desc: "Evaluated AI-generated code and failure cases for RL training pipelines, identifying ambiguity and inconsistencies, and providing technical justification to improve dataset quality.",
  },
  {
    company: "Hack4Impact",
    role: "Technical Lead",
    period: "Spring 2025 — Present",
    location: "Ithaca, NY",
    desc: "Led a 13-person cross-functional team building a health resource platform, and built calendar and Microsoft Graph API integrations for hybrid scheduling used by 30k+ patients and staff at Ithaca Recovery.",
  },
  {
    company: "CampusCares",
    role: "Chief of Technical Operations",
    period: "2025 — 2026",
    location: "Ithaca, NY",
    desc: "Co-developed a volunteering discovery platform used by 400+ Cornell students and 30+ campus groups, including a Cloudflare Workers-based carpool system that automated event coordination and reminders.",
  },
  {
    company: "Left Field",
    role: "SWE Intern",
    period: "Fall 2025",
    location: "Remote",
    desc: "Rebuilt the app's UI in React Native from Figma designs alongside the CTO, and built backend routes for user profiles/activities while fixing a critical auth middleware gap.",
  },
  {
    company: "Jane Street",
    role: "AMP Scholar",
    period: "Summer 2024",
    location: "NYC, NY",
    desc: "Accelerated knowledge in combinatorics, number theory, and advanced CS, and devised a trading algorithm that generated thousands in profit in a simulated market competition.",
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
                {r.period} &middot; {r.location}
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

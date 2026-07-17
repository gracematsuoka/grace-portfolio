import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Grace Matsuoka" },
      { name: "description", content: "Selected computer science projects by Grace Matsuoka." },
      { property: "og:title", content: "Projects — Grace Matsuoka" },
      { property: "og:description", content: "Selected computer science projects by Grace Matsuoka." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <section className="pt-16 pb-10 max-w-2xl text-center mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl text-balance">
          Things I've <span className="text-primary italic">built.</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
          A selection of projects across mobile apps, websites and ...
        </p>
      </section>

      <section className="pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Link
            key={p.id}
            to="/projects/$projectId"
            params={{ projectId: p.id }}
            className="group rounded-3xl bg-card border border-border/80 overflow-hidden flex flex-col hover:shadow-[0_12px_40px_-18px_rgba(222,101,54,0.28)] hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-4">
              <div className="min-w-0">
                <h2 className="font-serif text-xl truncate">{p.title}</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                  {p.tag} · {p.year}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-background border border-border px-3 py-1 text-xs text-foreground/80 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                View
              </span>
            </div>
            <div className="mx-3 mb-3 aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.] transition-transform duration-500"
              />
            </div>
            <p className="px-5 pb-5 text-sm text-foreground/75 leading-relaxed">
              {p.blurb}
            </p>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}

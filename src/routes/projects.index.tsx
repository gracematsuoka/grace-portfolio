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
      <section className="pt-16 pb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Projects
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-balance">
          Things I've built and learned from.
        </h1>
      </section>

      <section className="pb-16 grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Link
            key={p.id}
            to="/projects/$projectId"
            params={{ projectId: p.id }}
            className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(48,96,176,0.18)] transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-serif text-2xl">{p.title}</h2>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary">
                {p.tag}
              </p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {p.blurb}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}

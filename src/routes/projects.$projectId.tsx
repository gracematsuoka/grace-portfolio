import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Grace Matsuoka` },
          { name: "description", content: loaderData.project.blurb },
          { property: "og:title", content: `${loaderData.project.title} — Grace Matsuoka` },
          { property: "og:description", content: loaderData.project.blurb },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="py-24 text-center">
        <h1 className="font-serif text-3xl">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block text-primary hover:underline">
          ← Back to projects
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="py-24 text-center">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Link to="/projects" className="mt-6 inline-block text-primary hover:underline">
          ← Back to projects
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <SiteLayout>
      <article className="pt-12 pb-16">
        <Link
          to="/projects"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary">
            {project.tag} · {project.year}
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {project.blurb}
          </p>
        </header>

        <div className="mt-10 rounded-2xl overflow-hidden border border-border bg-muted aspect-[16/9]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-4xl">
          <div className="md:col-span-2 space-y-5 text-base leading-relaxed text-foreground/85">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside className="space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Stack
              </p>
              <ul className="space-y-1">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            {project.link && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Link
                </p>
                <a
                  href={project.link}
                  className="text-primary hover:underline break-all"
                >
                  {project.link}
                </a>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
            ← All projects
          </Link>
          <Link
            to="/projects/$projectId"
            params={{ projectId: next.id }}
            className="text-sm text-primary hover:underline"
          >
            Next: {next.title} →
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}

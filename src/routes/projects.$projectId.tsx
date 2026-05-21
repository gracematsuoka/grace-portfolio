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
  const { project } = Route.useLoaderData() as { project: import("@/lib/projects").Project };
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

        <header className="mt-8 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {project.tag} · {project.year}
          </p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-balance">
            {project.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {project.blurb}
          </p>
        </header>

        <div className="mt-10 max-w-4xl rounded-2xl overflow-hidden border border-border bg-muted aspect-[16/4] md:aspect-[16/5]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-4xl">
          <div className="md:col-span-2 space-y-5 text-sm md:text-base leading-relaxed text-foreground/85">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside className="space-y-6 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Stack
              </p>
              <ul className="space-y-1 text-foreground/80">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            {project.link && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
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
            {project.githubRepo && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  GitHub
                </p>
                <a
                  href={project.githubRepo}
                  className="text-primary hover:underline"
                  target="_blank" rel="noreferrer"
                >
                  View repository
                </a>
              </div>
            )}
          </aside>
        </div>

        {project.sections && project.sections.length > 0 && (
          <div className="mt-16 max-w-3xl space-y-14">
            {project.sections.map((section, i) => (
              <section key={i}>
                <h2 className="font-serif text-2xl md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-foreground/85">
                  {section.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                {section.image && (
                  <figure className="mt-6">
                    <div className="rounded-2xl overflow-hidden border border-border bg-muted">
                      <img
                        src={section.image}
                        alt={section.imageCaption ?? section.heading}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {section.imageCaption && (
                      <figcaption className="mt-2 text-xs text-muted-foreground">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {section.features && section.features.length > 0 && (
                  <div className="mt-10 space-y-12">
                    {section.features.map((feature, k) => {
                      const side = feature.mediaSide ?? "left";
                      const aspect =
                        feature.mediaAspect ??
                        (project.platform === "mobile"
                          ? "mobile"
                          : project.platform === "desktop"
                            ? "desktop"
                            : "web");
                      const frameClass =
                        aspect === "mobile"
                          ? "aspect-[9/19] max-w-[260px] mx-auto rounded-[2rem]"
                          : aspect === "desktop"
                            ? "aspect-[16/10] rounded-2xl"
                            : aspect === "square"
                              ? "aspect-square rounded-2xl"
                              : "aspect-[16/10] rounded-2xl";
                      const mediaEl = feature.media && (
                        <figure>
                          <div className={`overflow-hidden border border-border bg-muted ${frameClass}`}>
                            {feature.mediaType === "video" ? (
                              <video
                                src={feature.media}
                                controls
                                playsInline
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <img
                                src={feature.media}
                                alt={feature.mediaCaption ?? feature.heading ?? "Feature"}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          {feature.mediaCaption && (
                            <figcaption className="mt-2 text-xs text-muted-foreground">
                              {feature.mediaCaption}
                            </figcaption>
                          )}
                        </figure>
                      );
                      const textEl = (
                        <div>
                          {feature.heading && (
                            <h3 className="font-serif text-xl md:text-2xl">
                              {feature.heading}
                            </h3>
                          )}
                          <div className="mt-3 space-y-3 text-sm md:text-base leading-relaxed text-foreground/85">
                            {feature.body.map((para, m) => (
                              <p key={m}>{para}</p>
                            ))}
                          </div>
                        </div>
                      );
                      return (
                        <div
                          key={k}
                          className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
                        >
                          {feature.media ? (
                            side === "right" ? (
                              <>
                                {textEl}
                                {mediaEl}
                              </>
                            ) : (
                              <>
                                {mediaEl}
                                {textEl}
                              </>
                            )
                          ) : (
                            <div className="md:col-span-2">{textEl}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16 max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Gallery
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((g, i) => (
                <figure key={i}>
                  <div className="rounded-2xl overflow-hidden border border-border bg-muted aspect-[4/3]">
                    <img
                      src={g.src}
                      alt={g.caption ?? `${project.title} image ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {g.caption && (
                    <figcaption className="mt-2 text-xs text-muted-foreground">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

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

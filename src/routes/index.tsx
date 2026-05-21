import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grace Matsuoka's Portfolio" },
      { name: "description", content: "Personal portfolio of Grace Matsuoka, a computer science student building thoughtful software." },
      { property: "og:title", content: "Grace Matsuoka — Computer Science Portfolio" },
      { property: "og:description", content: "Personal portfolio of Grace Matsuoka, a computer science student building thoughtful software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout
      mainClassName="flex"
      contentClassName="flex flex-1"
      footerClassName="mt-0"
    >
      <section className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
        <img
          src={avatar}
          alt="Portrait of Grace Matsuoka"
          className="w-30 h-30 mb-8 rounded-full object-cover"
        />
        <h1 className="font-serif text-3xl md:text-4xl leading-[1.2] text-balance max-w-xl">
          Hi, I'm Grace — a computer science student building{" "}
          <span className="text-primary">human-centered software</span>.
        </h1>
        <p className="mt-5 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
          I'm focused on developer tools, interfaces, and the small details
          that make software feel kind.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View projects
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/experience"
            className="inline-flex items-center rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            My Experience
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

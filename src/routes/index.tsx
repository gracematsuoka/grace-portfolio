import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grace Matsuoka — Computer Science Portfolio" },
      { name: "description", content: "Personal portfolio of Grace Matsuoka, a computer science student building thoughtful software." },
      { property: "og:title", content: "Grace Matsuoka — Computer Science Portfolio" },
      { property: "og:description", content: "Personal portfolio of Grace Matsuoka, a computer science student building thoughtful software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="pt-24 pb-20 max-w-2xl">
        <img
          src={avatar}
          alt="Portrait of Grace Matsuoka"
          className="w-20 h-20 mb-8 rounded-full object-cover"
        />
        <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] text-balance">
          Hi, I'm Grace — a computer science student building{" "}
          <span className="text-primary">human-centered software</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I'm focused on developer tools, interfaces, and the small details
          that make software feel kind. Currently studying CS at university.
        </p>
        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View projects
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            About me
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

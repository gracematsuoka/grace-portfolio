import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma Kim — Computer Science Portfolio" },
      { name: "description", content: "Personal portfolio of Emma Kim, a computer science student." },
      { property: "og:title", content: "Emma Kim — Computer Science Portfolio" },
      { property: "og:description", content: "Personal portfolio of Emma Kim, a computer science student." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="max-w-2xl mx-auto pt-20 pb-24 text-center">
        <img
          src={avatar}
          alt="Portrait of Emma Kim"
          className="w-24 h-24 mx-auto mb-10"
        />
        <h1 className="font-serif text-3xl md:text-4xl leading-snug text-balance">
          Hi, I'm Emma — a computer science student
          interested in <span className="text-primary italic">human-centered software</span>.
        </h1>
        <p className="mt-6 text-base text-muted-foreground leading-relaxed">
          Currently studying CS, focused on developer tools and interfaces.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6 text-sm">
          <Link to="/projects" className="text-primary hover:underline underline-offset-4">
            View projects
          </Link>
          <span className="text-border">/</span>
          <Link to="/about" className="text-foreground/70 hover:text-primary">
            About
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

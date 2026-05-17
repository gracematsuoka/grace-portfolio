import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emma Kim — Computer Science Portfolio" },
      { name: "description", content: "Personal portfolio of Emma Kim, computer science student building thoughtful software." },
      { property: "og:title", content: "Emma Kim — Computer Science Portfolio" },
      { property: "og:description", content: "Personal portfolio of Emma Kim, computer science student building thoughtful software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="grid md:grid-cols-12 gap-10 items-center min-h-[70vh] py-10">
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-accent/60 -z-10" />
            <img
              src={avatar}
              alt="Illustrated portrait of Emma Kim"
              className="w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
            01 — Hello there
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-balance">
            Hi, <span className="text-primary italic">I'm Emma.</span>
            <br />
            I'm a <span className="marker-highlight">CS student</span> who
            builds quiet, useful software.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Currently studying computer science, focused on human-centered
            systems, developer tools, and the small details that make software
            feel kind.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-foreground/80 px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              See my projects
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              About me →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { k: "Focus", v: "Full-stack, systems, HCI" },
            { k: "Stack", v: "TypeScript, Python, Rust, Go" },
            { k: "Currently", v: "Junior @ University" },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {item.k}
              </p>
              <p className="font-serif text-2xl">{item.v}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

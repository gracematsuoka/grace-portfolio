import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Emma Kim" },
      { name: "description", content: "A bit about Emma Kim — interests, values, and what she's reading." },
      { property: "og:title", content: "About — Emma Kim" },
      { property: "og:description", content: "A bit about Emma Kim — interests, values, and what she's reading." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="py-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <img
            src={avatar}
            alt="Emma Kim portrait"
            className="w-48 md:w-full h-auto"
          />
        </div>
        <div className="md:col-span-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            04 — About
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-balance">
            A little <span className="text-primary italic">about me.</span>
          </h1>
          <div className="mt-8 space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
            <p>
              I'm a computer science student who cares about{" "}
              <span className="marker-highlight">software that respects people</span>
              . That usually means clear interfaces, fast systems, and code I'd
              be happy to read again in a year.
            </p>
            <p>
              I grew up between Seoul and the Bay Area. I started programming
              by modding video games, which eventually turned into a real
              interest in compilers, distributed systems, and the human side of
              interfaces.
            </p>
            <p>
              Outside of code, I bake sourdough, take film photos on an old
              Pentax, and slowly work my way through a list of climbing routes.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Reading
              </p>
              <ul className="font-serif text-xl space-y-1">
                <li>The Soul of a New Machine</li>
                <li>Designing Data-Intensive Apps</li>
                <li>Bluets — Maggie Nelson</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Toolbox
              </p>
              <ul className="font-serif text-xl space-y-1">
                <li>Neovim, tmux, fish</li>
                <li>Figma, Linear, Obsidian</li>
                <li>A very loved mechanical keyboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

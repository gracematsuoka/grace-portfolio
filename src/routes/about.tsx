import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import headshot from '../assets/headshot.jpg';

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Grace Matsuoka" },
      { name: "description", content: "A bit about Grace Matsuoka — interests, values, and what she's reading." },
      { property: "og:title", content: "About — Grace Matsuoka" },
      { property: "og:description", content: "A bit about Grace Matsuoka — interests, values, and what she's reading." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="pt-16 pb-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <img
            src={headshot}
            alt="Grace Matsuoka portrait"
            className="w-30 md:w-full h-auto rounded-2xl object-cover"
          />
        </div>
        <div className="md:col-span-8">
          <h1 className="font-serif text-3xl md:text-4xl text-balance">
            A little <span className="text-primary">about me.</span>
          </h1>
          <div className="mt-6 space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed max-w-xl">
            <p>
              I'm a computer science student who wants to build technology that leaves a positive footprint for future generations.
            </p>
            <p>
              I grew up in Washington state and
            </p>
            <p>
              Outside of code, I bake sourdough, take film photos on an old
              Pentax, and slowly work my way through a list of climbing
              routes.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-xl">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Reading
              </p>
              <ul className="text-sm space-y-1.5 text-foreground/80">
                <li>The Soul of a New Machine</li>
                <li>Designing Data-Intensive Apps</li>
                <li>Bluets — Maggie Nelson</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Toolbox
              </p>
              <ul className="text-sm space-y-1.5 text-foreground/80">
                <li>Neovim, tmux, fish</li>
                <li>Figma, Linear, Obsidian</li>
                <li>A loved mechanical keyboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

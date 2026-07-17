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
              I grew up in Washington state, surrounded by beautiful mountains and forests. I've always loved playing with little gadgets and being creative which fueled my passion for computer science.
              I became intrigued by the ability to be able to create whatever I wanted through a mere screen and wanted to test how much I could create with code. I hope that through the software build,
              I can help contribute to building a world we all want to live in.
            </p>
            <p>
              Outside of code, I love running, making Japanese curry, and exploring different cultures and places.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-xl">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Hobbies
              </p>
              <ul className="text-sm space-y-1.5 text-foreground/80">
                <li>Cooking</li>
                <li>Running</li>
                <li>Language learning</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Toolbox
              </p>
              <ul className="text-sm space-y-1.5 text-foreground/80">
                <li>Airpods and a good playlist</li>
                <li>Green tea</li>
                <li>GitHub, Macbook, VSCode</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

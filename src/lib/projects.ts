import havenCover from '../assets/project-media/sf/haven-cover.png';
// import sfMap from '../assets/project-media/sf/sf-map.gif';

export type ProjectSection = {
  heading: string;
  body: string[];
  image?: string;
  imageCaption?: string;
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  /** Intro paragraphs shown at the top of the detail page. */
  description: string[];
  /** Main cover image (also used on the projects card). */
  image: string;
  stack: string[];
  link?: string;
  githubRepo?: string;
  /** Optional extra sections rendered after the intro — each can include a subheader, paragraphs, and an image. */
  sections?: ProjectSection[];
  /** Optional gallery of additional images shown at the bottom of the detail page. */
  gallery?: { src: string; caption?: string }[];
};

// Replace `image` URLs with your own (drop files in src/assets and import them).
export const projects: Project[] = [
  {
    id: "shelter-flow",
    title: "Shelter Flow",
    tag: "Mobile App",
    year: "2026",
    githubRepo: "https://github.com/gracematsuoka/claude-hackathon",
    blurb:
      "A collaborative note-taking tool with end-to-end encryption and real-time sync.",
    description: [
      "Lumen is a small, fast notes app I built to learn CRDTs and end-to-end encryption.",
      "Notes are encrypted on the client with a per-workspace key, then synced through a thin relay server that never sees plaintext.",
    ],
    image: havenCover,
    stack: ["TypeScript", "Next.js", "Yjs", "Postgres"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Most collaborative editors trade privacy for convenience. I wanted to see how close I could get to a Notion-like experience without the server ever seeing user content.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Each workspace generates a symmetric key on the client. Documents are encrypted before they leave the browser, and the relay server only stores opaque blobs.",
          "Real-time collaboration uses a Yjs document tree with a custom presence layer that piggybacks on the same encrypted channel.",
        ],
        image: "https://picsum.photos/seed/lumen-arch/1200/700",
        imageCaption: "Architecture sketch from an early design doc.",
      },
    ],
    gallery: [
      // { src: sfMap, caption: "Editor view" },
      { src: "https://picsum.photos/seed/lumen-2/900/700", caption: "Workspace switcher" },
    ],
  },
  {
    id: "driftc",
    title: "Driftc",
    tag: "Compiler",
    year: "2025",
    blurb:
      "A toy systems language with a borrow-checked memory model, written in Rust.",
    description: [
      "Driftc is a from-scratch compiler for a small Rust-inspired language. It targets LLVM IR and supports a simplified borrow checker, generics, and pattern matching.",
      "I built it to understand what's actually happening inside a modern compiler — lexing, parsing, type inference, monomorphization, and codegen.",
    ],
    image: "https://picsum.photos/seed/driftc/1200/800",
    stack: ["Rust", "LLVM", "Inkwell"],
  },
  {
    id: "tide",
    title: "Tide",
    tag: "Open Source",
    year: "2025",
    blurb:
      "A tiny CLI for visualizing git branch history in your terminal.",
    description: [
      "Tide renders a clean, interactive view of git branches and commits using a custom TUI built on top of crossterm.",
      "It started as a weekend project and now has ~600 stars on GitHub, with contributors from four countries.",
    ],
    image: "https://picsum.photos/seed/tide/1200/800",
    stack: ["Go", "Crossterm", "Git"],
  },
  {
    id: "forager",
    title: "Forager",
    tag: "Research",
    year: "2024",
    blurb:
      "An ML pipeline that classifies edible plants from phone photos.",
    description: [
      "Forager is a research project from my undergraduate lab. We trained a vision model on a curated dataset of foraged plants and deployed it as a mobile-friendly web app.",
      "My focus was on the data pipeline — collection, labeling tooling, and active-learning loops to improve hard classes.",
    ],
    image: "https://picsum.photos/seed/forager/1200/800",
    stack: ["Python", "PyTorch", "FastAPI"],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

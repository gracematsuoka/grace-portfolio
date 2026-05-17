import { Link, useLocation } from "@tanstack/react-router";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const nav = [
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/about", label: "About" },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl text-foreground tracking-tight">
            Grace Matsuoka
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {nav.map((n) => {
              const active = pathname === n.to || (n.to === "/projects" && pathname.startsWith("/projects"));
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={
                    "px-3 py-1.5 rounded-md transition-colors hover:text-primary " +
                    (active ? "text-primary" : "text-foreground/70")
                  }
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full">
        <div className="max-w-5xl mx-auto px-6 md:px-8">{children}</div>
      </main>
      <footer className="mt-24 border-t border-border/60">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-8 flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2026 Grace Matsuoka</span>
          <div className="flex gap-5">
            <a href="https://github.com" className="hover:text-primary">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-primary">LinkedIn</a>
            <a href="mailto:hello@example.com" className="hover:text-primary">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

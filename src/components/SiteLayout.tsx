import { Link, useLocation } from "@tanstack/react-router";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const nav = [
    { to: "/", label: "home" },
    { to: "/projects", label: "projects" },
    { to: "/experience", label: "experience" },
    { to: "/about", label: "about" },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 md:px-12 lg:px-20 pt-8 pb-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-primary italic">
          ek.
        </Link>
        <nav className="flex items-center gap-6 md:gap-8 text-[11px] tracking-[0.2em] uppercase">
          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                "transition-colors hover:text-primary " +
                (pathname === n.to ? "text-primary" : "text-foreground/70")
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 px-6 md:px-12 lg:px-20">{children}</main>
      <footer className="px-6 md:px-12 lg:px-20 py-10 mt-16 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-muted-foreground border-t border-border">
        <span>© 2026 Emma Kim</span>
        <div className="flex gap-5">
          <a href="https://github.com" className="hover:text-primary">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-primary">LinkedIn</a>
          <a href="mailto:hello@example.com" className="hover:text-primary">Email</a>
        </div>
      </footer>
    </div>
  );
}

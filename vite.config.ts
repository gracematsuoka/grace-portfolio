// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages only serves static files and hosts this repo under /grace-portfolio/,
// so the GH_PAGES build fully prerenders every route and skips the Cloudflare Worker output.
const isGithubPages = process.env.GH_PAGES === "true";
const basepath = isGithubPages ? "/grace-portfolio" : undefined;

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: isGithubPages ? false : undefined,
  vite: isGithubPages ? { base: `${basepath}/` } : undefined,
  tanstackStart: {
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          router: { basepath },
          prerender: { enabled: true, crawlLinks: true, autoStaticPathsDiscovery: true },
        }
      : {}),
  },
});

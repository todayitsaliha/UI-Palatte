import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/context/ThemeContext";
import { IngestionPanel } from "@/components/palette/IngestionPanel";
import { SwatchGrid } from "@/components/palette/SwatchGrid";
import { SandboxPreview } from "@/components/palette/SandboxPreview";
import { ExportPanel } from "@/components/palette/ExportPanel";
import { ContrastMatrix } from "@/components/palette/ContrastMatrix";
import { ThemeToggle } from "@/components/palette/ThemeToggle";
import { Github, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "UI-Palette — Extract production-ready UI themes from any image" },
      {
        name: "description",
        content:
          "Drop an image, get a WCAG-audited semantic UI palette with live sandbox preview and one-click Tailwind, CSS, JSON & shadcn exports. 100% local, no uploads.",
      },
      { property: "og:title", content: "UI-Palette — Image to accessible UI theme" },
      {
        property: "og:description",
        content:
          "Local-first palette generator that maps image colors into semantic UI roles with WCAG auditing and a live sandbox.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans">
        {/* Top utility bar */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-350 flex items-center justify-between px-4 sm:px-8 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span className="flex items-center gap-2">
              <Sparkles className="h-3 w-3" />
              100% local · no uploads · no tracking
            </span>
            <span className="hidden md:inline">v1.0 · build 2026.05</span>
          </div>
        </div>

        {/* Primary header / nav */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
          <div className="mx-auto max-w-350 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 py-4">
            <a href="/" className="flex items-baseline gap-1">
              <span className="font-display text-2xl leading-none tracking-tight">UI-Palette</span>
              <span className="font-display text-2xl leading-none text-neutral-400">.co</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-400">
              <a href="#ingestion" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Extract
              </a>
              <a href="#palette" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Palette
              </a>
              <a href="#sandbox" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Sandbox
              </a>
              <a href="#export" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Export
              </a>
              <a href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Privacy
              </a>
              <a href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                About
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900 md:hidden"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
              >
                Menu
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <Github className="h-4 w-4" />
              </a>
              <ThemeToggle />
            </div>
          </div>

          {mobileMenuOpen && (
            <nav
              id="mobile-nav"
              className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-350 space-y-2 px-4 sm:px-8 py-4">
                <a
                  href="#ingestion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  Extract
                </a>
                <a
                  href="#palette"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  Palette
                </a>
                <a
                  href="#sandbox"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  Sandbox
                </a>
                <a
                  href="#export"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  Export
                </a>
                <a
                  href="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  Privacy
                </a>
                <a
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  About
                </a>
              </div>
            </nav>
          )}
        </header>

        {/* Editorial intro */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-350 grid grid-cols-12 gap-6 px-4 sm:px-8 py-20 md:py-28">
            <div className="col-span-12 md:col-span-7">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                A local-first design utility
              </p>
              <h1 className="mt-3 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
                An image becomes <br className="hidden md:block" />
                an interface.
              </h1>
              <p className="mt-5 font-display text-xl md:text-2xl leading-snug text-neutral-700 dark:text-neutral-300 max-w-2xl">
                Drop a photo and watch its colors map themselves into an accessible,
                production-ready theme.
              </p>
            </div>
            <p className="col-span-12 md:col-span-4 md:col-start-9 self-end font-sans text-xs leading-relaxed text-neutral-500">
              Pixels are processed entirely in your browser. Nothing is uploaded, logged, or
              transmitted. Paste with ⌘V, drop a file, or click to browse.
            </p>
          </div>
        </section>

        {/* 01 — Ingestion */}
        <section
          id="ingestion"
          className="border-b border-neutral-200 dark:border-neutral-800 scroll-mt-24"
        >
          <div className="mx-auto max-w-350 grid grid-cols-12 gap-8 px-4 sm:px-8 py-20 md:py-24">
            <header className="col-span-12 lg:col-span-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                01 — Ingestion
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-[1.05] tracking-tight">
                Drop, paste, <br className="hidden md:block" />
                or browse.
              </h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-sm">
                Pixels stay in your browser. We sample dominant colors with ColorThief, then rank
                them by lightness and saturation.
              </p>
            </header>
            <div className="col-span-12 lg:col-span-8">
              <IngestionPanel />
            </div>
          </div>
        </section>

        {/* 02 + 03 — Palette + Sandbox */}
        <section
          id="palette"
          className="border-b border-neutral-200 dark:border-neutral-800 scroll-mt-24"
        >
          <div className="mx-auto max-w-350 grid grid-cols-12 gap-8 px-4 sm:px-8 py-20 md:py-24">
            <header className="col-span-12">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                02 · 03 — Semantic palette &amp; live sandbox
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-[1.05] tracking-tight max-w-2xl">
                Reassign roles. Watch the UI rewrite itself.
              </h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-xl">
                Every swatch can be promoted to primary, secondary, accent, or surface. The sandbox
                responds in real time and re-checks WCAG contrast on every change.
              </p>
            </header>
            <div className="col-span-12 lg:col-span-5 mt-4 space-y-6">
              <SwatchGrid />
            </div>
            <div id="sandbox" className="col-span-12 lg:col-span-7 mt-4 scroll-mt-24">
              <SandboxPreview />
            </div>
            <div className="col-span-12 mt-10">
              <ContrastMatrix />
            </div>
          </div>
        </section>

        {/* 04 — Export */}
        <section
          id="export"
          className="border-b border-neutral-200 dark:border-neutral-800 scroll-mt-24"
        >
          <div className="mx-auto max-w-350 grid grid-cols-12 gap-8 px-4 sm:px-8 py-20 md:py-24">
            <header className="col-span-12 lg:col-span-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                04 — Export
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-[1.05] tracking-tight">
                Ship it <br className="hidden md:block" />
                in one click.
              </h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-sm">
                Tailwind config, CSS variables, JSON tokens, or a drop-in shadcn theme. Copy or
                download.
              </p>
            </header>
            <div className="col-span-12 lg:col-span-8">
              <ExportPanel />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40">
          <div className="mx-auto max-w-350 grid grid-cols-12 gap-6 px-4 sm:px-8 py-20">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl leading-none tracking-tight">
                  UI-Palette
                </span>
                <span className="font-display text-2xl leading-none text-neutral-400">.co</span>
              </div>
              <p className="mt-3 font-sans text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
                A local-first utility for turning images into accessible, production-ready UI
                themes. Built for designers and engineers who care about contrast.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Tool
                </p>
                <ul className="mt-3 space-y-2 font-sans text-sm">
                  <li>
                    <a href="#ingestion" className="hover:underline">
                      Extract
                    </a>
                  </li>
                  <li>
                    <a href="#palette" className="hover:underline">
                      Palette
                    </a>
                  </li>
                  <li>
                    <a href="#sandbox" className="hover:underline">
                      Sandbox
                    </a>
                  </li>
                  <li>
                    <a href="#export" className="hover:underline">
                      Export
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Resources
                </p>
                <ul className="mt-3 space-y-2 font-sans text-sm">
                  <li>
                    <a
                      href="https://www.w3.org/TR/WCAG21/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      WCAG 2.1
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Tailwind
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ui.shadcn.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      shadcn/ui
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Connect
                </p>
                <ul className="mt-3 space-y-2 font-sans text-sm">
                  <li>
                    <a
                      href="https://github.com/todayitsaliha"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      About me
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Legal
                </p>
                <ul className="mt-3 space-y-2 font-sans text-sm">
                  <li>
                    <a href="/privacy" className="hover:underline">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-350 flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-4 sm:px-8 py-5 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>© 2026 UI-Palette — All rights reserved</span>
              <span>Accessibility matters. So does your time.</span>
            </div>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}

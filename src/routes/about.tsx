import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/palette/ThemeToggle";
import cvPdfUrl from "@/assets/Aliha Asad [CV].pdf";
import { Github, Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — UI-Palette" },
      {
        name: "description",
        content:
          "Learn about UI-Palette and its creator, Aliha Asad. A tool designed to help developers and designers build accessible, production-ready UI themes from images.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans">
        {/* Top utility bar */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-[1400px] flex items-center justify-between px-8 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span className="flex items-center gap-2">
              <Sparkles className="h-3 w-3" />
              100% local · no uploads · no tracking
            </span>
            <span className="hidden md:inline">v1.0 · build 2026.05</span>
          </div>
        </div>

        {/* Primary header / nav */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
          <div className="mx-auto max-w-[1400px] flex items-center justify-between px-8 py-4">
            <a href="/" className="flex items-baseline gap-1 hover:opacity-80 transition-opacity">
              <span className="font-display text-2xl leading-none tracking-tight">UI-Palette</span>
              <span className="font-display text-2xl leading-none text-neutral-400">.co</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-400">
              <a href="/#ingestion" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Extract
              </a>
              <a href="/#palette" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Palette
              </a>
              <a href="/#sandbox" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Sandbox
              </a>
              <a href="/#export" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Export
              </a>{" "}
              <a href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Privacy
              </a>{" "}
              <a href="/about" className="text-neutral-900 dark:text-neutral-100 font-semibold">
                About
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/todayitsaliha"
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
        </header>

        {/* About Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 scroll-mt-24">
          <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8 px-8 py-20 md:py-28">
            <header className="col-span-12 lg:col-span-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                05 — About
              </p>
              <h1 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Built for <br className="hidden md:block" />
                interfaces.
              </h1>
              <ul className="mt-8 space-y-1 font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                <li className="text-neutral-900 dark:text-neutral-100 font-semibold">Aliha Asad</li>
                <li>Software Engineering Student</li>
                <li>Frontend &amp; UI Systems</li>
              </ul>
            </header>

            <div className="col-span-12 lg:col-span-8 space-y-5 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl">
              <p>
                Aliha Asad is a final-year Computer Science student specializing in Software
                Engineering, with a strong focus on frontend systems, interface design, and
                accessible digital experiences.
              </p>
              <p>
                UI-Palette.co was built from a simple frustration: most palette generators extract
                colors, but very few understand how those colors actually behave inside a real
                interface.
              </p>
              <p>
                Frontend developers often collect inspiration from photography, posters, films, or
                existing products — yet translating those visuals into production-ready UI themes
                usually becomes a cycle of trial and error. Colors that look beautiful in isolation
                often fail once applied to buttons, surfaces, typography, and accessibility
                constraints.
              </p>
              <p className="font-display text-xl text-neutral-900 dark:text-neutral-100">
                UI-Palette.co approaches the problem differently.
              </p>
              <p>
                Instead of generating random aesthetic palettes, the tool analyzes uploaded images
                locally, maps dominant tones into semantic UI roles, and evaluates them against real
                accessibility standards. The result is a system designed to save time, reduce
                guesswork, and help designers build interfaces that are both visually coherent and
                functionally usable.
              </p>
              <p>
                Every image is processed entirely in the browser. No uploads. No tracking. No
                unnecessary complexity.
              </p>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Built independently by Aliha Asad.
              </p>

              <div className="pt-4 flex flex-wrap gap-0 border-t border-neutral-200 dark:border-neutral-800">
                {[
                  { label: "GitHub", href: "https://github.com/todayitsaliha" },
                  { label: "Portfolio", href: "https://todayis_aliha.vercel.app/" },
                  { label: "CV", href: cvPdfUrl, download: true },
                ].map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    download={l.download ? "Aliha-Asad-CV.pdf" : undefined}
                    className={`px-5 py-3 font-sans text-[11px] uppercase tracking-[0.2em] border-r last:border-r-0 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-colors ${
                      i === 0 ? "border-l-0" : ""
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <p className="pt-2 font-display text-lg italic text-neutral-600 dark:text-neutral-400">
                Accessibility matters. So does your time.
              </p>

              <div className="pt-6">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to tool
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40">
          <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 px-8 py-20">
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
                    <a href="/#ingestion" className="hover:underline">
                      Extract
                    </a>
                  </li>
                  <li>
                    <a href="/#palette" className="hover:underline">
                      Palette
                    </a>
                  </li>
                  <li>
                    <a href="/#sandbox" className="hover:underline">
                      Sandbox
                    </a>
                  </li>
                  <li>
                    <a href="/#export" className="hover:underline">
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
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-8 py-5 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>© 2026 UI-Palette — All rights reserved</span>
              <span>Local · Zero-network · WCAG audited</span>
            </div>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/palette/ThemeToggle";
import { Github, Sparkles, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — UI-Palette" },
      {
        name: "description",
        content:
          "Privacy policy for UI-Palette. Learn how we handle your data and protect your privacy.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function Privacy() {
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
              <a href="/privacy" className="text-neutral-900 dark:text-neutral-100 font-semibold">
                Privacy
              </a>{" "}
              <a href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                About
              </a>
            </nav>
            <div className="flex items-center gap-3">
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
        </header>

        {/* Privacy Policy Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 scroll-mt-24">
          <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8 px-8 py-20 md:py-28">
            <header className="col-span-12 lg:col-span-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                06 — Privacy
              </p>
              <h1 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Privacy <br className="hidden md:block" />
                Policy
              </h1>
              <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Last updated: May 2026
              </p>
            </header>

            <div className="col-span-12 lg:col-span-8 space-y-6 font-sans text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-2xl">
              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Introduction
                </h2>
                <p>
                  UI-Palette ("we," "our," or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how our application handles your data.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Local-First Processing
                </h2>
                <p>
                  UI-Palette is designed with privacy as a core principle. All image processing and
                  palette generation happens entirely on your device, in your browser. No data is
                  uploaded to any external server.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Data We Don't Collect
                </h2>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Images or files you upload are never stored or transmitted</li>
                  <li>No personal information is collected or stored</li>
                  <li>No usage analytics or tracking is performed</li>
                  <li>No cookies are used to track your activity</li>
                  <li>No third-party tracking pixels or analytics services are employed</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Browser Storage
                </h2>
                <p>
                  The application may use your browser's local storage to remember your preferences
                  (such as theme settings). This data remains on your device and is never
                  transmitted elsewhere.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Third-Party Services
                </h2>
                <p>
                  UI-Palette does not integrate with third-party analytics services, advertising
                  networks, or data brokers. External links (such as to GitHub or documentation) are
                  provided for convenience, and we are not responsible for their privacy practices.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Security
                </h2>
                <p>
                  Since all processing occurs locally on your device, security is maintained by your
                  own device's security measures. We do not handle, store, or transmit your data,
                  eliminating potential vectors for unauthorized access by us.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of
                  significant changes by updating the "Last updated" date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  Contact
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please reach out through our
                  GitHub repository or contact information provided on our About page.
                </p>
              </section>

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
                      href="https://github.com"
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

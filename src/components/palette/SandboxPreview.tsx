import { useState, type CSSProperties } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SandboxDashboard } from "./SandboxDashboard";
import { SandboxHero } from "./SandboxHero";
import { CVD_FILTERS, CVD_MATRICES, cvdCssFilter, type CvdMode } from "@/lib/palette/cvd";

type Variant = "dashboard" | "hero";

const VARIANTS: { id: Variant; label: string }[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "hero", label: "Landing" },
];

export function SandboxPreview() {
  const { theme, imageSrc } = useTheme();
  const [variant, setVariant] = useState<Variant>("hero");
  const [useImageAsHero, setUseImageAsHero] = useState(false);
  const [cvd, setCvd] = useState<CvdMode>("normal");

  const style = {
    "--p-bg": theme.background,
    "--p-surface": theme.surface,
    "--p-border": theme.border,
    "--p-muted": theme.muted,
    "--p-primary": theme.primary,
    "--p-secondary": theme.secondary,
    "--p-accent": theme.accent,
    "--p-text": theme.textOnBackground,
    "--p-text-surface": theme.textOnSurface,
    "--p-text-primary": theme.textOnPrimary,
    "--p-text-secondary": theme.textOnSecondary,
    "--p-text-accent": theme.textOnAccent,
    "--p-text-muted": theme.textMuted,
    backgroundColor: "var(--p-bg)",
    color: "var(--p-text)",
    borderColor: "var(--p-border)",
  } as CSSProperties;

  return (
    <section className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      {/* Inline SVG filter defs for CVD simulation */}
      <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          {(Object.keys(CVD_MATRICES) as (keyof typeof CVD_MATRICES)[]).map((k) => (
            <filter key={k} id={`cvd-${k}`}>
              <feColorMatrix type="matrix" values={CVD_MATRICES[k]} />
            </filter>
          ))}
        </defs>
      </svg>

      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-800 px-5 py-4">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Live sandbox
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {variant === "hero" && (
            <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400 cursor-pointer">
              <input
                type="checkbox"
                checked={useImageAsHero}
                onChange={(e) => setUseImageAsHero(e.target.checked)}
                className="h-3 w-3 accent-neutral-900 dark:accent-neutral-100"
              />
              Use image as hero
            </label>
          )}
          <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
            <span>Simulate</span>
            <select
              value={cvd}
              onChange={(e) => setCvd(e.target.value as CvdMode)}
              aria-label="Color-vision deficiency simulation"
              className="border border-neutral-300 dark:border-neutral-700 bg-transparent px-1.5 py-0.5 text-[10px] uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
            >
              {CVD_FILTERS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-center gap-0 border border-neutral-200 dark:border-neutral-800">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariant(v.id)}
                className={`px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100 ${
                  variant === v.id
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="p-8 bg-neutral-50 dark:bg-neutral-950">
        <div style={{ filter: cvdCssFilter(cvd) }}>
          {variant === "dashboard" ? (
            <SandboxDashboard style={style} />
          ) : (
            <SandboxHero style={style} imageSrc={useImageAsHero ? imageSrc : undefined} />
          )}
        </div>
      </div>
    </section>
  );
}

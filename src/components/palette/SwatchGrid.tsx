import { useTheme } from "@/context/ThemeContext";
import { contrast, rateContrast } from "@/lib/palette/wcag";
import type { SemanticTheme } from "@/lib/palette/mapSemantics";
import { RotateCcw } from "lucide-react";
import { SchemeSwitcher } from "./SchemeSwitcher";

type Row = {
  key: keyof SemanticTheme;
  label: string;
  role: string;
  textKey?: keyof SemanticTheme;
};

const ROWS: Row[] = [
  { key: "background", label: "Background", role: "App canvas", textKey: "textOnBackground" },
  { key: "surface", label: "Surface", role: "Cards & panels", textKey: "textOnSurface" },
  { key: "primary", label: "Primary", role: "Brand / CTA", textKey: "textOnPrimary" },
  { key: "secondary", label: "Secondary", role: "Support", textKey: "textOnSecondary" },
  { key: "accent", label: "Accent", role: "Micro-interactions", textKey: "textOnAccent" },
  { key: "muted", label: "Muted", role: "Subtle backdrops" },
  { key: "border", label: "Border", role: "Dividers" },
  { key: "textOnBackground", label: "Text", role: "Body copy" },
];

const ASSIGNABLE: { value: keyof SemanticTheme; label: string }[] = [
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "accent", label: "Accent" },
  { value: "background", label: "Background" },
  { value: "surface", label: "Surface" },
  { value: "muted", label: "Muted" },
  { value: "border", label: "Border" },
];

export function SwatchGrid() {
  const { theme, overrideColor, resetOverrides, hasOverrides } = useTheme();

  return (
    <section className="border border-neutral-200 dark:border-neutral-800">
      <header className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-5 py-4">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          02 — Semantic palette
        </span>
        {hasOverrides ? (
          <button
            type="button"
            onClick={resetOverrides}
            className="inline-flex items-center gap-1 font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        ) : (
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            WCAG audit
          </span>
        )}
      </header>

      <SchemeSwitcher />

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {ROWS.map((row) => {
          const hex = theme[row.key];
          const text = row.textKey ? theme[row.textKey] : null;
          const ratio = text ? contrast(text, hex) : null;
          const score = ratio ? rateContrast(ratio) : null;
          return (
            <li key={row.key} className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div
                className="h-16 w-full shrink-0 border-b border-neutral-200 dark:border-neutral-800 sm:h-auto sm:w-16 sm:border-b-0 sm:border-r"
                style={{ backgroundColor: hex }}
                aria-hidden
              />
              <div className="flex flex-1 flex-col justify-between gap-3 px-4 py-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="font-display text-lg leading-tight">{row.label}</p>
                    <p className="font-sans text-[11px] text-neutral-500">{row.role}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 font-sans text-[11px]">
                    <code className="uppercase tracking-wider">{hex}</code>
                    {score && ratio && (
                      <span
                        className={`inline-flex items-center gap-1 border px-2 py-0.5 uppercase tracking-wider ${
                          score === "Fail"
                            ? "border-red-500 text-red-600"
                            : "border-neutral-300 dark:border-neutral-700"
                        }`}
                        title={`Contrast ${ratio.toFixed(2)}:1`}
                      >
                        {score} · {ratio.toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>
                <select
                  aria-label={`Reassign ${row.label}`}
                  value=""
                  onChange={(e) => {
                    const role = e.target.value as keyof SemanticTheme;
                    if (role) overrideColor(role, hex);
                    e.target.value = "";
                  }}
                  className="w-full border border-neutral-300 dark:border-neutral-700 bg-transparent px-1.5 py-0.5 font-sans text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 sm:w-auto"
                >
                  <option value="">Use as…</option>
                  {ASSIGNABLE.filter((a) => a.value !== row.key).map((a) => (
                    <option key={a.value} value={a.value}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

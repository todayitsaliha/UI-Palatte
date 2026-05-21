import { useTheme } from "@/context/ThemeContext";
import type { Scheme } from "@/lib/palette/mapSemantics";

const SCHEMES: { id: Scheme; label: string; desc: string }[] = [
  { id: "vibrant", label: "Vibrant", desc: "Bold, marketing-ready" },
  { id: "muted", label: "Muted", desc: "Editorial, content-first" },
  { id: "accessible", label: "High-contrast", desc: "WCAG AAA targets" },
];

export function SchemeSwitcher() {
  const { scheme, setScheme } = useTheme();
  const active = SCHEMES.find((s) => s.id === scheme) ?? SCHEMES[0];

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <div role="tablist" aria-label="Palette interpretation" className="flex">
        {SCHEMES.map((s) => {
          const isActive = s.id === scheme;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setScheme(s.id)}
              className={`flex-1 px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.18em] border-r last:border-r-0 border-neutral-200 dark:border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100 ${
                isActive
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      <p className="px-5 py-2 font-sans text-[11px] text-neutral-500">
        {active.desc} · switching resets manual overrides
      </p>
    </div>
  );
}

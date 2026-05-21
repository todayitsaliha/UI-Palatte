import { useTheme } from "@/context/ThemeContext";
import { contrast, rateContrast } from "@/lib/palette/wcag";
import type { SemanticTheme } from "@/lib/palette/mapSemantics";

const KEYS: { key: keyof SemanticTheme; label: string }[] = [
  { key: "background", label: "BG" },
  { key: "surface", label: "Surf" },
  { key: "primary", label: "Prim" },
  { key: "secondary", label: "Sec" },
  { key: "accent", label: "Acc" },
];

export function ContrastMatrix() {
  const { theme } = useTheme();

  return (
    <section
      className="border border-neutral-200 dark:border-neutral-800"
      aria-label="Contrast matrix of all color pairs"
    >
      <header className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-5 py-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Contrast matrix
        </span>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Foreground × Background
        </span>
      </header>
      <div className="overflow-auto">
        <table className="w-full font-sans text-[11px] border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left text-neutral-400 font-normal uppercase tracking-wider text-[10px]">
                fg \ bg
              </th>
              {KEYS.map((k) => (
                <th
                  key={k.key}
                  className="p-2 text-center text-neutral-500 font-normal uppercase tracking-wider text-[10px] border-l border-neutral-200 dark:border-neutral-800"
                >
                  {k.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {KEYS.map((fg) => (
              <tr key={fg.key} className="border-t border-neutral-200 dark:border-neutral-800">
                <td className="p-2 text-neutral-500 uppercase tracking-wider text-[10px]">
                  {fg.label}
                </td>
                {KEYS.map((bg) => {
                  if (fg.key === bg.key) {
                    return (
                      <td
                        key={bg.key}
                        className="p-2 text-center text-neutral-300 dark:text-neutral-700 border-l border-neutral-200 dark:border-neutral-800"
                      >
                        ·
                      </td>
                    );
                  }
                  const ratio = contrast(theme[fg.key], theme[bg.key]);
                  const score = rateContrast(ratio);
                  return (
                    <td
                      key={bg.key}
                      className="p-1.5 text-center border-l border-neutral-200 dark:border-neutral-800"
                      style={{ backgroundColor: theme[bg.key], color: theme[fg.key] }}
                      title={`${ratio.toFixed(2)}:1 — ${score}`}
                    >
                      <div className="font-semibold leading-none">{ratio.toFixed(1)}</div>
                      <div className="mt-0.5 text-[9px] uppercase tracking-wider opacity-80">
                        {score}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

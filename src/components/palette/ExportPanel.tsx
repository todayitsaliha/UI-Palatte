import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { toCssVars, toJson, toShadcn, toTailwind } from "@/lib/palette/exporters";

type Tab = "css" | "tailwind" | "json" | "shadcn";

const TABS: { id: Tab; label: string }[] = [
  { id: "css", label: "CSS Vars" },
  { id: "tailwind", label: "Tailwind" },
  { id: "json", label: "JSON" },
  { id: "shadcn", label: "shadcn/ui" },
];

export function ExportPanel() {
  const { theme } = useTheme();
  const [tab, setTab] = useState<Tab>("css");
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => {
    switch (tab) {
      case "css":
        return toCssVars(theme);
      case "tailwind":
        return toTailwind(theme);
      case "json":
        return toJson(theme);
      case "shadcn":
        return toShadcn(theme);
    }
  }, [tab, theme]);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="border border-neutral-200 dark:border-neutral-800">
      <header className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-5 py-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          04 — Export
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 font-sans text-[10px] uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </header>

      <div className="flex border-b border-neutral-200 dark:border-neutral-800 font-sans text-[11px]">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 uppercase tracking-wider border-r border-neutral-200 dark:border-neutral-800 ${
              tab === t.id
                ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <pre className="overflow-auto max-h-[360px] p-5 font-sans text-[12px] leading-relaxed bg-neutral-50 dark:bg-neutral-950">
        <code>{code}</code>
      </pre>
    </section>
  );
}

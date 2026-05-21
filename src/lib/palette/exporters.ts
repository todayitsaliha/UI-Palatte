import type { SemanticTheme } from "./mapSemantics";

const entries = (t: SemanticTheme) =>
  [
    ["background", t.background],
    ["surface", t.surface],
    ["border", t.border],
    ["muted", t.muted],
    ["primary", t.primary],
    ["secondary", t.secondary],
    ["accent", t.accent],
    ["text-on-background", t.textOnBackground],
    ["text-on-surface", t.textOnSurface],
    ["text-on-primary", t.textOnPrimary],
    ["text-on-secondary", t.textOnSecondary],
    ["text-on-accent", t.textOnAccent],
    ["text-muted", t.textMuted],
  ] as const;

export function toCssVars(t: SemanticTheme): string {
  return [":root {", ...entries(t).map(([k, v]) => `  --${k}: ${v};`), "}"].join("\n");
}

export function toTailwind(t: SemanticTheme): string {
  const obj = Object.fromEntries(entries(t).map(([k, v]) => [k.replace(/-/g, "_"), v]));
  return `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(
    obj,
    null,
    8,
  )
    .replace(/\n/g, "\n      ")
    .replace(/"/g, '"')}\n    }\n  }\n};`;
}

export function toJson(t: SemanticTheme): string {
  const obj = Object.fromEntries(entries(t));
  return JSON.stringify(obj, null, 2);
}

export function toShadcn(t: SemanticTheme): string {
  return `:root {
  --background: ${t.background};
  --foreground: ${t.textOnBackground};
  --card: ${t.surface};
  --card-foreground: ${t.textOnSurface};
  --popover: ${t.surface};
  --popover-foreground: ${t.textOnSurface};
  --primary: ${t.primary};
  --primary-foreground: ${t.textOnPrimary};
  --secondary: ${t.secondary};
  --secondary-foreground: ${t.textOnSecondary};
  --muted: ${t.muted};
  --muted-foreground: ${t.textMuted};
  --accent: ${t.accent};
  --accent-foreground: ${t.textOnAccent};
  --border: ${t.border};
  --input: ${t.border};
  --ring: ${t.primary};
}`;
}

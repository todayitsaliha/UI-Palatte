import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { mapSemantics, type SemanticTheme, type Scheme } from "@/lib/palette/mapSemantics";
import { bestTextOn, fixContrast } from "@/lib/palette/wcag";
import { DEFAULT_COLORS, defaultLandscape } from "@/lib/palette/defaults";

type ThemeCtx = {
  imageSrc: string;
  rawColors: string[];
  theme: SemanticTheme;
  mode: "light" | "dark";
  appMode: "light" | "dark";
  scheme: Scheme;
  hasOverrides: boolean;
  setImage: (src: string, colors: string[]) => void;
  setMode: (m: "light" | "dark") => void;
  setAppMode: (m: "light" | "dark") => void;
  setScheme: (s: Scheme) => void;
  overrideColor: (key: keyof SemanticTheme, hex: string) => void;
  resetOverrides: () => void;
};

const Ctx = createContext<ThemeCtx | null>(null);

const SURFACE_KEYS = ["background", "surface", "primary", "secondary", "accent"] as const;
const TEXT_MAP: Record<(typeof SURFACE_KEYS)[number], keyof SemanticTheme> = {
  background: "textOnBackground",
  surface: "textOnSurface",
  primary: "textOnPrimary",
  secondary: "textOnSecondary",
  accent: "textOnAccent",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [imageSrc, setImageSrc] = useState<string>(defaultLandscape);
  const [rawColors, setRawColors] = useState<string[]>(DEFAULT_COLORS);
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [appMode, setAppMode] = useState<"light" | "dark">("light");
  const [scheme, setSchemeState] = useState<Scheme>("vibrant");
  const [overrides, setOverrides] = useState<Partial<SemanticTheme>>({});

  const computed = useMemo(() => mapSemantics(rawColors, mode, scheme), [rawColors, mode, scheme]);

  const theme = useMemo(() => {
    const merged: SemanticTheme = { ...computed, ...overrides };
    for (const key of SURFACE_KEYS) {
      if (overrides[key]) {
        const textKey = TEXT_MAP[key];
        if (!overrides[textKey]) {
          merged[textKey] = fixContrast(bestTextOn(merged[key]), merged[key], 4.5);
        }
      }
    }
    return merged;
  }, [computed, overrides]);

  const setImage = useCallback((src: string, colors: string[]) => {
    setImageSrc(src);
    setRawColors(colors);
    setOverrides({});
  }, []);

  const setScheme = useCallback((s: Scheme) => {
    setSchemeState(s);
    setOverrides({});
  }, []);

  const overrideColor = useCallback((key: keyof SemanticTheme, hex: string) => {
    setOverrides((o) => ({ ...o, [key]: hex }));
  }, []);

  const resetOverrides = useCallback(() => setOverrides({}), []);

  return (
    <Ctx.Provider
      value={{
        imageSrc,
        rawColors,
        theme,
        mode,
        appMode,
        scheme,
        hasOverrides: Object.keys(overrides).length > 0,
        setImage,
        setMode,
        setAppMode,
        setScheme,
        overrideColor,
        resetOverrides,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}

import chroma from "chroma-js";
import { bestTextOn, fixContrast } from "./wcag";

export type SemanticTheme = {
  background: string;
  surface: string;
  border: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  textOnBackground: string;
  textOnSurface: string;
  textOnPrimary: string;
  textOnSecondary: string;
  textOnAccent: string;
  textMuted: string;
};

export type Scheme = "vibrant" | "muted" | "accessible";
type Mode = "light" | "dark";

function chromaOf(hex: string) {
  return chroma(hex).hsl()[1] || 0;
}

function lumOf(hex: string) {
  return chroma(hex).luminance();
}

function midScore(hex: string) {
  return Math.abs(lumOf(hex) - 0.45);
}

export function mapSemantics(
  colors: string[],
  mode: Mode = "light",
  scheme: Scheme = "vibrant",
): SemanticTheme {
  const palette = colors.length > 0 ? [...colors] : ["#888888"];

  // ---------- Background ----------
  const sortedByLum = [...palette].sort((a, b) => lumOf(b) - lumOf(a));
  const bgSource = mode === "light" ? sortedByLum[0] : sortedByLum[sortedByLum.length - 1];

  // mix toward white/black; "accessible" pushes nearly all the way.
  const bgMix = scheme === "accessible" ? 0.96 : scheme === "muted" ? 0.88 : 0.82;
  const background =
    mode === "light"
      ? chroma.mix(bgSource, "#ffffff", bgMix, "lab").hex()
      : chroma.mix(bgSource, "#0a0a0a", bgMix, "lab").hex();

  const surface =
    mode === "light"
      ? chroma(background).darken(0.18).hex()
      : chroma(background).brighten(0.25).hex();

  const border =
    mode === "light"
      ? chroma(background).darken(0.5).hex()
      : chroma(background).brighten(0.5).hex();

  const muted =
    mode === "light"
      ? chroma(background).darken(0.35).hex()
      : chroma(background).brighten(0.4).hex();

  // ---------- Primary ----------
  const scored = palette
    .map((c) => ({ hex: c, score: chromaOf(c) * (1 - midScore(c) * 1.4) }))
    .sort((a, b) => b.score - a.score);

  let primary = scored[0]?.hex ?? palette[0];

  if (scheme === "muted") {
    primary = chroma(primary).desaturate(1.2).hex();
  } else if (scheme === "accessible") {
    primary = chroma(primary).saturate(0.8).hex();
    // ensure primary itself contrasts >= 4.5 against background
    let p = chroma(primary);
    const goDark = lumOf(background) > 0.5;
    for (let i = 0; i < 40 && chroma.contrast(p, background) < 4.5; i++) {
      p = goDark ? p.darken(0.2) : p.brighten(0.2);
    }
    primary = p.hex();
  }

  // ---------- Secondary ----------
  const primaryHue = chroma(primary).hsl()[0] || 0;
  let secondary =
    scored
      .slice(1)
      .map((s) => ({
        ...s,
        hueDist: Math.min(
          Math.abs((((chroma(s.hex).hsl()[0] || 0) - primaryHue + 540) % 360) - 180),
          180,
        ),
      }))
      .sort((a, b) => b.hueDist + b.score * 30 - (a.hueDist + a.score * 30))[0]?.hex ?? primary;

  if (scheme === "muted") secondary = chroma(secondary).desaturate(1.2).hex();

  // ---------- Accent ----------
  let accent = [...palette].sort((a, b) => chromaOf(b) - chromaOf(a))[0];
  if (scheme === "muted") accent = chroma(accent).desaturate(0.6).hex();
  else if (scheme === "accessible") accent = chroma(accent).saturate(0.8).hex();

  // ---------- Text tokens ----------
  const target = scheme === "accessible" ? 7 : 4.5;
  const textOnBackground = fixContrast(bestTextOn(background), background, target);
  const textOnSurface = fixContrast(bestTextOn(surface), surface, target);
  const textOnPrimary = fixContrast(bestTextOn(primary), primary, target);
  const textOnSecondary = fixContrast(bestTextOn(secondary), secondary, target);
  const textOnAccent = fixContrast(bestTextOn(accent), accent, target);
  const textMuted =
    mode === "light"
      ? chroma(textOnBackground).brighten(1.4).hex()
      : chroma(textOnBackground).darken(1.4).hex();

  return {
    background,
    surface,
    border,
    primary,
    secondary,
    accent,
    muted,
    textOnBackground,
    textOnSurface,
    textOnPrimary,
    textOnSecondary,
    textOnAccent,
    textMuted,
  };
}

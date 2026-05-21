import chroma from "chroma-js";

export function contrast(a: string, b: string): number {
  return chroma.contrast(a, b);
}

export function rateContrast(ratio: number): "AAA" | "AA" | "Fail" {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  return "Fail";
}

export function bestTextOn(bg: string): string {
  return chroma.contrast(bg, "#ffffff") >= chroma.contrast(bg, "#000000") ? "#ffffff" : "#000000";
}

/** Iteratively shift the text color's lightness until ratio >= target. */
export function fixContrast(text: string, bg: string, target = 4.5): string {
  if (chroma.contrast(text, bg) >= target) return text;
  const bgL = chroma(bg).luminance();
  const goLight = bgL < 0.5;
  let c = chroma(text);
  for (let i = 0; i < 100; i++) {
    c = goLight ? c.brighten(0.15) : c.darken(0.15);
    if (chroma.contrast(c, bg) >= target) return c.hex();
  }
  return bestTextOn(bg);
}

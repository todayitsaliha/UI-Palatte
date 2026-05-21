// SVG color matrices approximating common color-vision deficiencies.
// Matrices sourced from Machado et al. 2009 (commonly used approximations).
export type CvdMode = "normal" | "protanopia" | "deuteranopia" | "tritanopia" | "grayscale";

export const CVD_FILTERS: { id: CvdMode; label: string }[] = [
  { id: "normal", label: "Normal vision" },
  { id: "protanopia", label: "Protanopia (red-blind)" },
  { id: "deuteranopia", label: "Deuteranopia (green-blind)" },
  { id: "tritanopia", label: "Tritanopia (blue-blind)" },
  { id: "grayscale", label: "Grayscale" },
];

export const CVD_MATRICES: Record<Exclude<CvdMode, "normal" | "grayscale">, string> = {
  protanopia: "0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0",
  deuteranopia: "0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0",
  tritanopia: "0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0",
};

export function cvdCssFilter(mode: CvdMode): string {
  if (mode === "normal") return "none";
  if (mode === "grayscale") return "grayscale(1)";
  return `url(#cvd-${mode})`;
}

export function CvdSvgDefs() {
  return null; // see component for rendered SVG
}

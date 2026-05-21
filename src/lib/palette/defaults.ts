import defaultLandscape from "@/assets/default-landscape.jpg";

// Pre-extracted approximation of the default landscape's dominant colors,
// so SSR/first paint show a populated theme without running canvas work.
export const DEFAULT_COLORS: string[] = [
  "#d9e2e0", // sky pale
  "#1c2a30", // mountain shadow
  "#c75a3a", // sunset alpenglow
  "#7d8c8a", // misty lake
  "#3a4a4f", // deep teal
  "#e8b89a", // warm light
  "#5a6663", // mid neutral
  "#0d1418", // near black
];

export { defaultLandscape };

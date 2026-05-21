import { getPaletteSync } from "colorthief";

type ColorthiefColor = {
  rgb?: () => [number, number, number];
  r?: number;
  g?: number;
  b?: number;
  hex?: () => string;
};

function toHex(n: number): string {
  return Math.max(0, Math.min(255, Math.round(n)))
    .toString(16)
    .padStart(2, "0");
}

/** Extract `count` dominant colors from an image element (already loaded). */
export async function extractPalette(img: HTMLImageElement, count = 8): Promise<string[]> {
  if (!img.complete || img.naturalWidth === 0) {
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Image failed to load"));
    });
  }
  const palette = getPaletteSync(img, { colorCount: count });
  if (!palette || palette.length === 0) throw new Error("Could not extract colors");
  return palette.map((c) => {
    const color = c as ColorthiefColor;
    const rgb =
      typeof color.rgb === "function"
        ? color.rgb()
        : { r: color.r ?? 0, g: color.g ?? 0, b: color.b ?? 0 };
    if (typeof color.hex === "function") return color.hex();
    return "#" + toHex(rgb.r) + toHex(rgb.g) + toHex(rgb.b);
  });
}

/** Load a File/Blob/URL into an HTMLImageElement (for extraction). */
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load image"));
    img.src = src;
  });
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

import { useCallback, useEffect, useRef, useState } from "react";
import { Upload, Clipboard, Image as ImageIcon } from "lucide-react";
import { extractPalette, fileToDataUrl, loadImage } from "@/lib/palette/extract";
import { useTheme } from "@/context/ThemeContext";

export function IngestionPanel() {
  const { imageSrc, setImage } = useTheme();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const processSrc = useCallback(
    async (src: string) => {
      setBusy(true);
      setError(null);
      try {
        const img = await loadImage(src);
        const colors = await extractPalette(img, 8);
        setImage(src, colors);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setBusy(false);
      }
    },
    [setImage],
  );

  const onFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) {
        setError("Please drop an image file.");
        return;
      }
      const src = await fileToDataUrl(file);
      await processSrc(src);
    },
    [processSrc],
  );

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of Array.from(items)) {
        if (it.type.startsWith("image/")) {
          const file = it.getAsFile();
          if (file) {
            void onFile(file);
            return;
          }
        }
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [onFile]);

  return (
    <section className="border border-neutral-200 dark:border-neutral-800">
      <header className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-5 py-3">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          01 — Ingestion
        </span>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          Local
        </span>
      </header>

      <div
        role="button"
        tabIndex={0}
        aria-label="Upload image: drop a file, click to browse, or paste with Cmd+V"
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const f = e.dataTransfer.files?.[0];
          if (f) void onFile(f);
        }}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        className={`group relative cursor-pointer aspect-5/4 overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100 ${
          dragOver ? "ring-2 ring-neutral-900 dark:ring-neutral-100" : ""
        }`}
      >
        <img
          src={imageSrc}
          alt="Source image being analyzed"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 group-hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition">
          <Upload className="h-5 w-5" />
          <span className="font-sans text-xs uppercase tracking-wider">
            Drop / click to replace
          </span>
        </div>
        {busy && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80">
            <span className="font-sans text-xs uppercase tracking-wider">Extracting…</span>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void onFile(f);
            e.target.value = "";
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-neutral-200 dark:border-neutral-800 font-sans text-[11px]">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center justify-center gap-2 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <ImageIcon className="h-3.5 w-3.5" /> Browse
        </button>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center justify-center gap-2 py-3 border-l border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <Upload className="h-3.5 w-3.5" /> Drop
        </button>
        <div className="flex items-center justify-center gap-2 py-3 border-l border-neutral-200 dark:border-neutral-800 text-neutral-500">
          <Clipboard className="h-3.5 w-3.5" /> ⌘V to paste
        </div>
      </div>

      {error && (
        <p className="border-t border-neutral-200 dark:border-neutral-800 px-5 py-2 font-sans text-xs text-red-600">
          {error}
        </p>
      )}
    </section>
  );
}

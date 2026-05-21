import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { appMode, setAppMode, mode, setMode } = useTheme();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", appMode === "dark");
  }, [appMode]);

  return (
    <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em]">
      <button
        type="button"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        title="Toggle palette mode (light/dark theme target)"
      >
        Palette · {mode}
      </button>
      <button
        type="button"
        onClick={() => setAppMode(appMode === "light" ? "dark" : "light")}
        className="inline-flex items-center gap-1.5 border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        title="Toggle app shell theme"
      >
        {appMode === "light" ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        Shell
      </button>
    </div>
  );
}

import { ArrowUpRight, Bell, Search, BarChart3, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";

export function SandboxDashboard({ style }: { style: CSSProperties }) {
  return (
    <div style={style} className="overflow-hidden rounded-sm border font-sans text-sm">
      <div
        className="flex items-center justify-between border-b px-5 py-3"
        style={{ borderColor: "var(--p-border)" }}
      >
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm" style={{ backgroundColor: "var(--p-primary)" }} />
          <span className="font-display text-lg leading-none">Atlas</span>
        </div>
        <div className="flex items-center gap-3">
          <Search className="h-4 w-4" style={{ color: "var(--p-text-muted)" }} />
          <Bell className="h-4 w-4" style={{ color: "var(--p-text-muted)" }} />
          <div className="h-7 w-7 rounded-full" style={{ backgroundColor: "var(--p-accent)" }} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[140px_1fr]">
        <aside
          className="border border-neutral-200 dark:border-neutral-800 p-4 space-y-1.5 md:border-r md:border-b-0"
          style={{
            borderColor: "var(--p-border)",
            backgroundColor: "var(--p-surface)",
            color: "var(--p-text-surface)",
          }}
        >
          {["Dashboard", "Projects", "Reports", "Team", "Settings"].map((l, i) => (
            <div
              key={l}
              className="rounded-sm px-2 py-1.5 text-xs"
              style={
                i === 0
                  ? { backgroundColor: "var(--p-primary)", color: "var(--p-text-primary)" }
                  : { color: "var(--p-text-muted)" }
              }
            >
              {l}
            </div>
          ))}
        </aside>

        <main className="p-5 space-y-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p
                className="font-sans text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--p-text-muted)" }}
              >
                Overview
              </p>
              <h2 className="font-display text-2xl leading-tight">Good morning, Olivia.</h2>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs"
              style={{ backgroundColor: "var(--p-primary)", color: "var(--p-text-primary)" }}
            >
              New project <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "Revenue", value: "$48.2k", icon: BarChart3 },
              { label: "Active", value: "1,284", icon: Sparkles },
              { label: "Churn", value: "1.4%", icon: ArrowUpRight },
            ].map((s, i) => (
              <div
                key={s.label}
                className="rounded-sm border p-3"
                style={{
                  borderColor: "var(--p-border)",
                  backgroundColor: i === 1 ? "var(--p-secondary)" : "var(--p-surface)",
                  color: i === 1 ? "var(--p-text-secondary)" : "var(--p-text-surface)",
                }}
              >
                <s.icon className="h-3.5 w-3.5 opacity-70" />
                <p className="mt-2 font-display text-xl leading-none">{s.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider opacity-70">{s.label}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-sm border p-4"
            style={{
              borderColor: "var(--p-border)",
              backgroundColor: "var(--p-surface)",
              color: "var(--p-text-surface)",
            }}
          >
            <p className="font-display text-base">Weekly performance</p>
            <div className="mt-3 flex h-16 items-end gap-1.5">
              {[40, 65, 52, 80, 70, 90, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 5 ? "var(--p-accent)" : "var(--p-primary)",
                    opacity: i === 5 ? 1 : 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

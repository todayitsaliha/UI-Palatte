import { ArrowUpRight, Sparkles, Zap, Shield, Layers } from "lucide-react";
import type { CSSProperties } from "react";

export function SandboxHero({ style, imageSrc }: { style: CSSProperties; imageSrc?: string }) {
  return (
    <div style={style} className="overflow-hidden rounded-sm border font-sans text-sm">
      {/* Top nav */}
      <div
        className="flex items-center justify-between border-b px-6 py-3"
        style={{ borderColor: "var(--p-border)" }}
      >
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm" style={{ backgroundColor: "var(--p-primary)" }} />
          <span className="font-display text-base leading-none">Northwind</span>
        </div>
        <nav
          className="hidden md:flex items-center gap-5 text-xs"
          style={{ color: "var(--p-text-muted)" }}
        >
          <span>Product</span>
          <span>Pricing</span>
          <span>Customers</span>
          <span>Docs</span>
        </nav>
        <button
          type="button"
          className="rounded-sm px-3 py-1.5 text-xs"
          style={{ backgroundColor: "var(--p-primary)", color: "var(--p-text-primary)" }}
        >
          Get started
        </button>
      </div>

      {/* Hero */}
      <div
        className="relative px-8 py-16 text-center overflow-hidden"
        style={
          imageSrc
            ? {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {imageSrc && (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundColor: "var(--p-bg)",
              opacity: 0.78,
            }}
          />
        )}
        <div className="relative">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
            style={{ backgroundColor: "var(--p-accent)", color: "var(--p-text-accent)" }}
          >
            <Sparkles className="h-3 w-3" /> New · v2.0 shipped
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl mx-auto">
            Build interfaces your users{" "}
            <span style={{ color: "var(--p-primary)" }}>actually remember.</span>
          </h1>
          <p
            className="mt-4 mx-auto max-w-lg text-sm leading-relaxed"
            style={{ color: "var(--p-text-muted)" }}
          >
            A complete design system that ships with your product. Themed, accessible, and ready for
            production from day one.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-sm px-4 py-2 text-xs"
              style={{ backgroundColor: "var(--p-primary)", color: "var(--p-text-primary)" }}
            >
              Start free trial <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              className="rounded-sm border px-4 py-2 text-xs"
              style={{ borderColor: "var(--p-border)", color: "var(--p-text)" }}
            >
              Watch demo
            </button>
          </div>
        </div>
      </div>

      {/* Feature row */}
      <div
        className="grid grid-cols-1 gap-3 md:grid-cols-3 border-t px-6 py-6"
        style={{ borderColor: "var(--p-border)", backgroundColor: "var(--p-surface)" }}
      >
        {[
          { icon: Zap, title: "Lightning fast", body: "Sub-50ms response times globally." },
          { icon: Shield, title: "Secure by default", body: "SOC2 and GDPR compliant." },
          { icon: Layers, title: "Composable", body: "Drop into any existing stack." },
        ].map((f, i) => (
          <div
            key={f.title}
            className="rounded-sm border p-4"
            style={{
              borderColor: "var(--p-border)",
              backgroundColor: i === 1 ? "var(--p-secondary)" : "var(--p-bg)",
              color: i === 1 ? "var(--p-text-secondary)" : "var(--p-text)",
            }}
          >
            <f.icon
              className="h-4 w-4"
              style={{ color: i === 1 ? "var(--p-text-secondary)" : "var(--p-primary)" }}
            />
            <p className="mt-2 font-display text-sm">{f.title}</p>
            <p className="mt-1 text-[11px] opacity-75 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div
        className="flex items-center justify-between border-t px-6 py-3 text-[10px] uppercase tracking-[0.2em]"
        style={{ borderColor: "var(--p-border)", color: "var(--p-text-muted)" }}
      >
        <span>© Northwind 2026</span>
        <span>Trusted by 12,000+ teams</span>
      </div>
    </div>
  );
}

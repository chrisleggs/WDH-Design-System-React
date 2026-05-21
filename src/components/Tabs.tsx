import type { ReactNode } from "react";

/* Tabs — segmented control. Active state inverts to the dark header surface,
   matching the nav's state-by-color rule. Sourced as the formal pattern behind
   the 24h/7d/14d switcher in HomeView. */

interface TabItem {
  value: string;
  label: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (v: string) => void;
  size?: "sm" | "md";
}

const sizeClass = {
  sm: "h-8 px-2.5 text-small",
  md: "h-9 px-3 text-small",
};

export default function Tabs({ items, value, onChange, size = "sm" }: TabsProps) {
  return (
    <div
      role="tablist"
      className="inline-flex items-center gap-1 p-1 bg-surface-card border border-border rounded-sm"
    >
      {items.map((item) => {
        const isActive = value === item.value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.value)}
            className={[
              "rounded-sm font-brand transition-colors leading-none whitespace-nowrap",
              sizeClass[size],
              isActive
                ? "bg-surface-header-top text-text-primary"
                : "text-text-muted hover:text-text-body",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
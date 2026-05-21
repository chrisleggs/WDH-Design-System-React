import type { ReactNode } from "react";

/* Stat — numeric primitive. Label + large value + optional unit + trend hint.
   Numerics use tabular figures so columns align cleanly. */

type Trend = "up" | "down" | "flat";

interface StatProps {
  label: string;
  value: string;
  unit?: string;
  hint?: ReactNode;
  icon?: ReactNode;
  trend?: Trend;
}

const trendColor: Record<Trend, string> = {
  up: "text-[#047857]",
  down: "text-[#B91C1C]",
  flat: "text-text-muted",
};

export default function Stat({
  label,
  value,
  unit,
  hint,
  icon,
  trend,
}: StatProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-micro uppercase tracking-[0.1em] text-text-muted">
          {label}
        </span>
        {icon ? <span className="text-text-faint">{icon}</span> : null}
      </div>
      <div className="flex items-baseline gap-1 numeric">
        <span
          className="font-brand text-h1 tracking-tight text-text-body leading-none"
          style={{ fontWeight: 500 }}
        >
          {value}
        </span>
        {unit ? (
          <span className="text-small text-text-muted">{unit}</span>
        ) : null}
      </div>
      {hint ? (
        <span
          className={`text-small leading-snug ${trend ? trendColor[trend] : "text-text-muted"}`}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
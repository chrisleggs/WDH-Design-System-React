import type { ReactNode } from "react";

/* Badge — compact status pill for categorical metadata.
   `neutral` and `accent` derive from DS tokens. Semantic tones (warning / success / danger)
   are TODO additions awaiting promotion to tokens.json. */

type Tone = "neutral" | "accent" | "warning" | "success" | "danger";
type Size = "sm" | "md";

interface BadgeProps {
  tone?: Tone;
  size?: Size;
  children: ReactNode;
  leading?: ReactNode;
}

const toneClass: Record<Tone, string> = {
  neutral: "bg-surface-card-muted text-text-body border-border",
  accent: "bg-accent-soft text-text-body border-text-accent/50",
  warning: "bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]",
  success: "bg-[#D1FAE5] text-[#065F46] border-[#6EE7B7]",
  danger: "bg-[#FEE2E2] text-[#991B1B] border-[#FCA5A5]",
};

const sizeClass: Record<Size, string> = {
  sm: "text-micro h-5 px-1.5 gap-1",
  md: "text-small h-6 px-2 gap-1.5",
};

export default function Badge({
  tone = "neutral",
  size = "sm",
  children,
  leading,
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center font-brand font-medium uppercase tracking-[0.08em]",
        "border rounded-sm whitespace-nowrap leading-none",
        toneClass[tone],
        sizeClass[size],
      ].join(" ")}
    >
      {leading ? <span className="shrink-0">{leading}</span> : null}
      {children}
    </span>
  );
}
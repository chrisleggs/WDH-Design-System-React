import type { ReactNode } from "react";

/* Card — DS extension. tokens.json is header-scoped; surface.card values are TODO.
   - "default" on light surface for body content
   - "dark" bridges into the header palette (uses surface.header.bottom) */

type Variant = "default" | "dark" | "muted";

interface CardProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  title?: string;
  trailing?: ReactNode;
  padded?: boolean;
}

const variantClass: Record<Variant, string> = {
  default: "bg-surface-card border border-border text-text-body",
  muted: "bg-surface-card-muted border border-border text-text-body",
  dark: "bg-surface-header-bottom border border-[#3A3A3A] text-text-primary",
};

export default function Card({
  variant = "default",
  children,
  className = "",
  title,
  trailing,
  padded = true,
}: CardProps) {
  return (
    <div
      className={[
        "rounded-md overflow-hidden",
        variantClass[variant],
        className,
      ].join(" ")}
    >
      {title ? (
        <div
          className={[
            "flex items-center justify-between border-b px-5 py-3",
            variant === "dark" ? "border-[#3A3A3A]" : "border-border",
          ].join(" ")}
        >
          <h3 className="font-brand text-small font-medium uppercase tracking-[0.08em] opacity-80">
            {title}
          </h3>
          {trailing}
        </div>
      ) : null}
      <div className={padded ? "p-5" : ""}>{children}</div>
    </div>
  );
}
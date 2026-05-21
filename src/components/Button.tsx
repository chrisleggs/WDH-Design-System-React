import type { ButtonHTMLAttributes, ReactNode } from "react";

/* Button — derived from the DS's Login/Register utility action.
   - "secondary" variant is DS-documented (color.surface.action.secondary + color.text.inverse + radius.sm).
   - "primary" and "ghost" extend the DS for broader use. TODO: codify in tokens.json. */

type Variant = "primary" | "secondary" | "ghost" | "action";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  leadingIcon?: ReactNode;
}

const variantClass: Record<Variant, string> = {
  // DS extension — dark fill used as primary on light surfaces
  primary:
    "bg-surface-header-top text-text-primary hover:bg-[#000000] active:bg-[#000000]",
  // From DS — Login/Register pattern
  secondary:
    "bg-surface-action-secondary text-text-inverse hover:bg-[#D4D4D4] active:bg-[#C8C8C8]",
  // DS extension — neutral text button
  ghost:
    "bg-transparent text-text-body hover:bg-[#0000000A] active:bg-[#00000014]",
  // WDH theme — blue primary action (#0074CC) used across product surfaces
  action:
    "bg-[#0074CC] text-white hover:bg-[#005A99] active:bg-[#004E85]",
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-3 text-small",
  md: "h-[41px] px-[19px] text-label", // exact DS sizing for utility action
};

export default function Button({
  variant = "secondary",
  size = "md",
  leadingIcon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-sm font-brand transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-text-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-header-top",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "leading-none whitespace-nowrap",
        variantClass[variant],
        sizeClass[size],
        className,
      ].join(" ")}
    >
      {leadingIcon ? <span className="shrink-0">{leadingIcon}</span> : null}
      <span>{children}</span>
    </button>
  );
}
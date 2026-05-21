import type { InputHTMLAttributes, ReactNode } from "react";

/* Input — DS extension. radius.sm (5px) and font.size.label (16px) come from the DS.
   Surface, border, and muted text colors are TODO additions. */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: ReactNode;
  trailing?: ReactNode;
  label?: string;
}

export default function Input({
  leadingIcon,
  trailing,
  label,
  className = "",
  id,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={id}
          className="block font-brand text-small font-medium text-text-muted mb-2 uppercase tracking-[0.06em]"
        >
          {label}
        </label>
      ) : null}
      <div
        className={[
          "flex items-center gap-2 h-[41px] px-3 rounded-sm",
          "bg-surface-card border border-border",
          "focus-within:border-text-inverse focus-within:ring-2 focus-within:ring-text-accent focus-within:ring-offset-0",
          "transition-colors",
          className,
        ].join(" ")}
      >
        {leadingIcon ? (
          <span className="shrink-0 text-text-muted">{leadingIcon}</span>
        ) : null}
        <input
          id={id}
          {...rest}
          className="flex-1 min-w-0 bg-transparent outline-none font-brand text-label text-text-body placeholder:text-text-faint"
        />
        {trailing ? <span className="shrink-0">{trailing}</span> : null}
      </div>
    </div>
  );
}
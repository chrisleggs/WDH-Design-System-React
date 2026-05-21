import type { ReactNode } from "react";

/* NavLink — exact recipe from /design-system/components/header.md.
   Inactive: color.text.primary. Active: color.text.accent. State conveyed by color only. */

interface NavLinkProps {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

export default function NavLink({ active = false, children, onClick, href = "#" }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={[
        "font-brand text-nav leading-none transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-text-accent focus-visible:ring-offset-4 focus-visible:ring-offset-surface-header-bottom",
        active ? "text-text-accent" : "text-text-primary hover:text-text-accent/80",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
}
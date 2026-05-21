import { ChevronLeft } from "lucide-react";

/* BackLink — real source: components.fig · INSTANCE 7:3215
   Inline navigation cue placed top-left of an inner page.
   "<" chevron + label, rendered in the action blue. */

interface BackLinkProps {
  label?: string;
  href?: string;
  onClick?: () => void;
}

export default function BackLink({
  label = "Back",
  href = "#",
  onClick,
}: BackLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "var(--wdh-font-brand)",
        fontSize: "var(--wdh-font-body-lg)",
        lineHeight: "24px",
        fontWeight: 400,
        color: "var(--wdh-info)",
        textDecoration: "none",
        transition: "color 120ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.textDecoration =
          "underline";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
      }}
    >
      <ChevronLeft className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
      {label}
    </a>
  );
}
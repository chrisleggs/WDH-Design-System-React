import type { ReactNode } from "react";

/* Avatar — user identity primitive. Initials default, icon or image override,
   optional presence dot for live monitoring surfaces. */

type Size = "sm" | "md" | "lg";
type Status = "online" | "offline" | "warning";

interface AvatarProps {
  initials?: string;
  src?: string;
  icon?: ReactNode;
  size?: Size;
  status?: Status;
  alt?: string;
}

const sizeClass: Record<Size, string> = {
  sm: "w-7 h-7 text-small",
  md: "w-9 h-9 text-label",
  lg: "w-12 h-12 text-h3",
};

const dotSize: Record<Size, string> = {
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
};

const statusColor: Record<Status, string> = {
  online: "bg-text-accent",
  offline: "bg-text-faint",
  warning: "bg-[#F59E0B]",
};

export default function Avatar({
  initials = "?",
  src,
  icon,
  size = "md",
  status,
  alt,
}: AvatarProps) {
  return (
    <span className="relative inline-flex shrink-0">
      <span
        className={[
          "inline-flex items-center justify-center overflow-hidden rounded-full",
          "font-brand font-medium leading-none",
          "bg-surface-header-top text-text-primary",
          sizeClass[size],
        ].join(" ")}
        aria-label={alt || initials}
      >
        {src ? (
          <img src={src} alt={alt || ""} className="w-full h-full object-cover" />
        ) : icon ? (
          icon
        ) : (
          initials.slice(0, 2).toUpperCase()
        )}
      </span>
      {status ? (
        <span
          className={[
            "absolute bottom-0 right-0 rounded-full border-2 border-surface-page",
            dotSize[size],
            statusColor[status],
          ].join(" ")}
          aria-label={`Status: ${status}`}
        />
      ) : null}
    </span>
  );
}
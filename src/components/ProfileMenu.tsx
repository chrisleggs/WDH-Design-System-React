import { useEffect, useRef, useState } from "react";
import { LogOut } from "lucide-react";

/* ProfileMenu — real source: components.fig · INSTANCE 7:3216

   Trigger row (header-dark context):
     · 54px blue (#0074CC) circular avatar with white "CL" initials (16/Regular)
     · "Christopher Legg" name in white 16/Regular beside the avatar
     · 36px gap to a small LogOut glyph on the right
   The trigger is designed to render over the dark header surface. When the
   surface is light, set `triggerContext="avatar-only"` for the bare avatar.

   Panel (352px × 368px · #FFFFFF · radius-4 · drop shadow):
     · Header — 54px avatar + name (16/#333333) + email (14/#333333)
     · 1px divider
     · "Menu" title (20/SemiBold)
     · 3 menu items (19/Regular)
     · 1px divider
     · Logout row (19/Regular) + right-aligned LogOut glyph (20x20) */

export interface ProfileMenuItem {
  label: string;
  href?: string;
  onSelect?: () => void;
}

interface ProfileMenuProps {
  name?: string;
  email?: string;
  initials?: string;
  menuItems?: ProfileMenuItem[];
  onLogout?: () => void;
  /** "header" renders the trigger with the white name + glyph for dark surfaces.
      "avatar-only" renders just the 54px circle, no chrome. */
  triggerContext?: "header" | "avatar-only";
  /** Force-open for documentation previews. */
  defaultOpen?: boolean;
}

const DEFAULT_ITEMS: ProfileMenuItem[] = [
  { label: "My details", href: "#my-details" },
  { label: "My subscriptions", href: "#my-subscriptions" },
  { label: "My payment details", href: "#my-payment-details" },
];

function AvatarCircle({
  initials,
  size = 54,
}: {
  initials: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--wdh-info)",
        color: "#FFFFFF",
        fontFamily: "var(--wdh-font-brand)",
        fontSize: 16,
        lineHeight: "18px",
        fontWeight: 400,
        flexShrink: 0,
      }}
    >
      {initials}
    </span>
  );
}

export default function ProfileMenu({
  name = "Christopher Legg",
  email = "christopher.legg@metoffice.gov.uk",
  initials = "CL",
  menuItems = DEFAULT_ITEMS,
  onLogout,
  triggerContext = "header",
  defaultOpen = false,
}: ProfileMenuProps) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      ref={ref}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 14,
      }}
    >
      {/* TRIGGER */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${name} — account menu`}
        style={{
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 36,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <AvatarCircle initials={initials} size={54} />
          {triggerContext === "header" && (
            <span
              style={{
                fontFamily: "var(--wdh-font-brand)",
                fontSize: 16,
                lineHeight: "23px",
                fontWeight: 400,
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </span>
          )}
        </span>
        {triggerContext === "header" && (
          <LogOut
            className="w-5 h-5"
            strokeWidth={1.75}
            aria-hidden="true"
            style={{ color: "#FFFFFF", flexShrink: 0 }}
          />
        )}
      </button>

      {/* PANEL */}
      {open && (
        <div
          role="menu"
          style={{
            width: 352,
            background: "#FFFFFF",
            borderRadius: 4,
            boxShadow:
              "0 16px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            padding: "20px 24px",
            fontFamily: "var(--wdh-font-brand)",
            color: "var(--wdh-text-primary)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingBottom: 16,
            }}
          >
            <AvatarCircle initials={initials} size={54} />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div
                style={{
                  fontSize: 16,
                  lineHeight: "20px",
                  fontWeight: 400,
                  color: "var(--wdh-text-primary)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: 14,
                  lineHeight: "17px",
                  fontWeight: 400,
                  color: "var(--wdh-text-primary)",
                  marginTop: 4,
                  wordBreak: "break-all",
                }}
              >
                {email}
              </div>
            </div>
          </div>

          <div
            style={{
              height: 1,
              background: "var(--wdh-border-subtle)",
            }}
          />

          {/* Menu title */}
          <div
            style={{
              fontSize: 20,
              lineHeight: "25px",
              fontWeight: 600,
              color: "var(--wdh-text-primary)",
              paddingTop: 20,
              paddingBottom: 14,
            }}
          >
            Menu
          </div>

          {/* Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              paddingBottom: 22,
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                onClick={(e) => {
                  if (item.onSelect) {
                    e.preventDefault();
                    item.onSelect();
                    setOpen(false);
                  }
                }}
                role="menuitem"
                style={{
                  fontSize: 19,
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "var(--wdh-text-primary)",
                  textDecoration: "none",
                  transition: "color 100ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--wdh-info)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--wdh-text-primary)";
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            style={{
              height: 1,
              background: "var(--wdh-border-subtle)",
            }}
          />

          {/* Logout */}
          <a
            href="#logout"
            onClick={(e) => {
              if (onLogout) {
                e.preventDefault();
                onLogout();
                setOpen(false);
              }
            }}
            role="menuitem"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 20,
              paddingBottom: 4,
              fontSize: 19,
              lineHeight: "24px",
              fontWeight: 400,
              color: "var(--wdh-text-primary)",
              textDecoration: "none",
              transition: "color 100ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--wdh-info)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--wdh-text-primary)";
            }}
          >
            <span>Logout</span>
            <LogOut
              className="w-5 h-5"
              strokeWidth={1.75}
              aria-hidden="true"
              style={{ color: "currentColor" }}
            />
          </a>
        </div>
      )}
    </div>
  );
}